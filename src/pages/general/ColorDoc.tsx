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

export default function ColorDoc() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="font-heading text-3xl font-bold">Color 色彩</h1>
        <p className="mt-2 text-muted-foreground">
          项目基于 TailwindCSS 的 CSS 变量体系定义颜色令牌，支持亮色 / 暗色主题自动切换。
          所有颜色均通过 CSS 自定义属性管理，可在 TailwindCSS 类名中直接引用。
        </p>
      </div>

      {colorGroups.map((group) => (
        <div key={group.title}>
          <h2 className="mb-4 text-xl font-semibold">{group.title}</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {group.colors.map((color) => (
              <div key={color.name} className="overflow-hidden rounded-lg border">
                <div
                  className={`flex h-20 items-end p-3 ${color.bg} ${color.border ? "border-b" : ""}`}
                >
                  <span className={`text-xs font-medium ${color.fg}`}>
                    {color.name}
                  </span>
                </div>
                <div className="space-y-0.5 bg-background px-3 py-2">
                  <p className="font-mono text-xs text-muted-foreground">
                    var({color.var})
                  </p>
                  <p className="font-mono text-xs text-muted-foreground">
                    {color.bg}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div>
        <h2 className="mb-4 text-xl font-semibold">使用方式</h2>
        <div className="rounded-xl border p-5">
          <p className="mb-3 text-sm text-muted-foreground">
            在 TailwindCSS 中直接使用语义化类名即可引用颜色令牌：
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
