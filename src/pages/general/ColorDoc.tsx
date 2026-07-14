import { useEffect, useState } from "react";
import { CopyableText } from "@easyfix/console-ui";

type ColorToken = {
  name: string;
  var: string;
  bg: string;
  fg: string;
  border?: boolean;
};

const colorGroups = [
  {
    title: "主题色",
    colors: [
      { name: "Primary", var: "--primary", bg: "bg-primary", fg: "text-primary-foreground" },
      { name: "Secondary", var: "--secondary", bg: "bg-secondary", fg: "text-secondary-foreground" },
      { name: "Accent", var: "--accent", bg: "bg-accent", fg: "text-accent-foreground" },
      { name: "Muted", var: "--muted", bg: "bg-muted", fg: "text-muted-foreground" },
    ],
  },
  {
    title: "危险色",
    colors: [
      { name: "Destructive", var: "--destructive", bg: "bg-destructive", fg: "text-white" },
    ],
  },
  {
    title: "语义色",
    colors: [
      { name: "Success", var: "--success", bg: "bg-success", fg: "text-success-foreground" },
      { name: "Warning", var: "--warning", bg: "bg-warning", fg: "text-warning-foreground" },
      { name: "Info", var: "--info", bg: "bg-info", fg: "text-info-foreground" },
    ],
  },
  {
    title: "背景与前景",
    colors: [
      { name: "Background", var: "--background", bg: "bg-background", fg: "text-foreground", border: true },
      { name: "Foreground", var: "--foreground", bg: "bg-foreground", fg: "text-background" },
      { name: "Card", var: "--card", bg: "bg-card", fg: "text-card-foreground", border: true },
      { name: "Popover", var: "--popover", bg: "bg-popover", fg: "text-popover-foreground", border: true },
    ],
  },
  {
    title: "边框与输入框",
    colors: [
      { name: "Border", var: "--border", bg: "bg-border", fg: "text-foreground" },
      { name: "Input", var: "--input", bg: "bg-input", fg: "text-foreground" },
      { name: "Ring", var: "--ring", bg: "bg-ring", fg: "text-white" },
    ],
  },
];

type ResolvedColorValue = {
  hex: string;
  rgb: string;
};

function toHexByte(value: number): string {
  return value.toString(16).padStart(2, "0").toUpperCase();
}

function getColorValue(cssVariable: string): ResolvedColorValue {
  const probe = document.createElement("span");
  probe.style.color = `var(${cssVariable})`;
  probe.style.position = "fixed";
  probe.style.pointerEvents = "none";
  probe.style.visibility = "hidden";
  document.body.appendChild(probe);

  const resolvedColor = window.getComputedStyle(probe).color;
  probe.remove();

  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = 1;
  const context = canvas.getContext("2d", { willReadFrequently: true });

  if (!context) {
    return { hex: "", rgb: resolvedColor };
  }

  context.clearRect(0, 0, 1, 1);
  context.fillStyle = resolvedColor;
  context.fillRect(0, 0, 1, 1);
  const [red, green, blue, alpha] = context.getImageData(0, 0, 1, 1).data;

  const rgb =
    alpha === 255
      ? `rgb(${red}, ${green}, ${blue})`
      : `rgba(${red}, ${green}, ${blue}, ${(alpha / 255).toFixed(2)})`;
  const hex = `#${toHexByte(red)}${toHexByte(green)}${toHexByte(blue)}${
    alpha === 255 ? "" : toHexByte(alpha)
  }`;

  return { hex, rgb };
}

function ColorSwatch({ color, revision }: { color: ColorToken; revision: number }) {
  const [resolvedValue, setResolvedValue] = useState<ResolvedColorValue>({
    hex: "",
    rgb: "",
  });

  useEffect(() => {
    setResolvedValue(getColorValue(color.var));
  }, [color.var, revision]);

  return (
    <div className="overflow-hidden rounded-lg border">
      <div
        className={`flex h-20 items-end p-3 ${color.bg} ${color.border ? "border-b" : ""}`}
      >
        <span className={`text-xs font-medium ${color.fg}`}>{color.name}</span>
      </div>
      <div className="space-y-0.5 bg-background px-3 py-1.5">
        <p className="font-mono text-xs text-muted-foreground">
          var({color.var})
        </p>
        <p className="font-mono text-xs text-muted-foreground">{color.bg}</p>
        <div className="grid min-h-5 grid-cols-[2rem_minmax(0,1fr)_auto] items-center gap-1.5">
          <span className="text-[10px] font-medium text-muted-foreground">HEX</span>
          <span className="min-w-0 truncate font-mono text-xs text-foreground">
            {resolvedValue.hex || "-"}
          </span>
          {resolvedValue.hex && (
            <CopyableText
              value={resolvedValue.hex}
              iconOnly
              size="xs"
              copyTooltip="复制 HEX"
              copiedTooltip="已复制"
            />
          )}
        </div>
        <div className="grid min-h-5 grid-cols-[2rem_minmax(0,1fr)_auto] items-center gap-1.5">
          <span className="text-[10px] font-medium text-muted-foreground">RGB</span>
          <span className="min-w-0 truncate font-mono text-xs text-foreground">
            {resolvedValue.rgb || "-"}
          </span>
          {resolvedValue.rgb && (
            <CopyableText
              value={resolvedValue.rgb}
              iconOnly
              size="xs"
              copyTooltip="复制 RGB"
              copiedTooltip="已复制"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default function ColorDoc() {
  const [themeRevision, setThemeRevision] = useState(0);

  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      setThemeRevision((revision) => revision + 1);
    });
    observer.observe(root, { attributes: true, attributeFilter: ["class", "style"] });

    const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const handleColorSchemeChange = () => {
      setThemeRevision((revision) => revision + 1);
    };
    colorScheme.addEventListener("change", handleColorSchemeChange);

    return () => {
      observer.disconnect();
      colorScheme.removeEventListener("change", handleColorSchemeChange);
    };
  }, []);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="font-heading text-3xl font-bold">Color 色彩</h1>
        <p className="mt-2 text-muted-foreground">
          基于 CSS 变量的主题色彩系统，支持亮色与暗色主题。
        </p>
      </div>

      {colorGroups.map((group) => (
        <div key={group.title}>
          <h2 className="mb-4 text-xl font-semibold">{group.title}</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {group.colors.map((color) => (
              <ColorSwatch
                key={color.name}
                color={color}
                revision={themeRevision}
              />
            ))}
          </div>
        </div>
      ))}

      <div>
        <h2 className="mb-4 text-xl font-semibold">使用方式</h2>
        <div className="rounded-xl border p-5">
          <p className="mb-3 text-sm text-muted-foreground">
            Tailwind CSS 通过语义类名引用颜色令牌：
          </p>
          <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
            <code>{`<!-- 背景色 -->
<div class="bg-primary">主色背景</div>
<div class="bg-destructive">危险色背景</div>
<div class="bg-success">成功色背景</div>

<!-- 文字颜色 -->
<p class="text-foreground">主文字</p>
<p class="text-muted-foreground">辅助文字</p>

<!-- 边框 -->
<div class="border border-border">边框</div>`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
