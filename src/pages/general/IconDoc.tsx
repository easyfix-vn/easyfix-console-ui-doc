import { EasyConsoleIcon, EasyfixLogoIcon } from "@easyfix/console-ui";
import {
  BellIcon,
  HomeIcon,
  SearchIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";

import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

const lucideIcons = [
  { name: "HomeIcon", Icon: HomeIcon },
  { name: "SettingsIcon", Icon: SettingsIcon },
  { name: "UserIcon", Icon: UserIcon },
  { name: "SearchIcon", Icon: SearchIcon },
  { name: "BellIcon", Icon: BellIcon },
];

const propsData = [
  {
    name: "size",
    type: "number",
    default: "24",
    description: "图标尺寸（宽高相同，单位 px）",
  },
  {
    name: "color",
    type: "string",
    default: '"currentColor"',
    description: "图标颜色，默认继承父元素文字颜色",
  },
  {
    name: "strokeWidth",
    type: "number",
    default: "2",
    description: "线条粗细（仅 lucide-react 图标）",
  },
  {
    name: "className",
    type: "string",
    description: "自定义类名",
  },
];

export default function IconDoc() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="font-heading text-3xl font-bold">Icon 图标</h1>
        <p className="mt-2 text-muted-foreground">
          项目提供自定义品牌图标组件，同时推荐使用{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            lucide-react
          </code>{" "}
          作为通用图标方案，支持按需引入和 Tree-shaking。
        </p>
      </div>

      <ComponentDemo
        title="品牌图标"
        description="Easyfix 自定义品牌图标，从 @easyfix/console-ui 中导入。"
        code={`import { EasyfixLogoIcon, EasyConsoleIcon } from "@easyfix/console-ui";

<EasyfixLogoIcon size={32} />
<EasyConsoleIcon className="h-8 w-8" />`}
      >
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <EasyfixLogoIcon size={32} />
            <span className="text-xs text-muted-foreground">EasyfixLogoIcon</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <EasyConsoleIcon className="h-8 w-8" />
            <span className="text-xs text-muted-foreground">EasyConsoleIcon</span>
          </div>
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="Lucide 图标"
        description="lucide-react 提供按需导入的通用图标集。"
        code={`import { HomeIcon, SettingsIcon, UserIcon, SearchIcon, BellIcon } from "lucide-react";

<HomeIcon />
<SettingsIcon />
<UserIcon />
<SearchIcon />
<BellIcon />`}
      >
        <div className="grid grid-cols-5 gap-6">
          {lucideIcons.map(({ name, Icon }) => (
            <div key={name} className="flex flex-col items-center gap-2">
              <Icon className="h-6 w-6" />
              <span className="text-xs text-muted-foreground">{name}</span>
            </div>
          ))}
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="图标尺寸"
        description="size 或 className 控制图标尺寸。"
        code={`import { HomeIcon } from "lucide-react";

<HomeIcon size={16} />
<HomeIcon size={20} />
<HomeIcon size={24} />
<HomeIcon size={32} />
<HomeIcon size={40} />`}
      >
        <div className="flex items-end gap-6">
          {[16, 20, 24, 32, 40].map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              {/*
                同时设置 size prop 与 inline style 双保险，避免 Tailwind
                preflight 或外部样式影响 lucide 图标的实际渲染尺寸。
              */}
              <HomeIcon size={size} style={{ width: size, height: size }} />
              <span className="text-xs text-muted-foreground">{size}px</span>
            </div>
          ))}
        </div>
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">API（lucide-react 通用属性）</h2>
        <PropsTable data={propsData} />
      </div>

      <div className="rounded-xl border p-5">
        <h2 className="mb-2 font-semibold">更多图标</h2>
        <p className="text-sm text-muted-foreground">
          查看{" "}
          <a
            href="https://lucide.dev/icons"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4"
          >
            lucide.dev/icons
          </a>{" "}
          获取完整图标列表。所有图标均从{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            lucide-react
          </code>{" "}
          包按需导入使用。
        </p>
      </div>
    </div>
  );
}
