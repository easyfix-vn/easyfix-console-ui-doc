import { Avatar, AvatarImage, AvatarFallback } from "@easyfix/console-ui";

import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";
import logoSvg from "@/assets/easyfix_icon_c_2025.svg";

const avatarPropsData = [
  {
    name: "className",
    type: "string",
    description: "自定义 CSS 类名",
  },
  {
    name: "...props",
    type: "AvatarPrimitive.Root.Props",
    description: "透传给 Radix Avatar.Root 的所有属性",
  },
];

const imagePropsData = [
  {
    name: "src",
    type: "string",
    description: "图片地址",
  },
  {
    name: "alt",
    type: "string",
    description: "图片替代文本",
  },
  {
    name: "className",
    type: "string",
    description: "自定义 CSS 类名",
  },
];

const fallbackPropsData = [
  {
    name: "children",
    type: "ReactNode",
    description: "图片加载失败时显示的后备内容",
  },
  {
    name: "className",
    type: "string",
    description: "自定义 CSS 类名",
  },
];

export default function AvatarDoc() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="font-heading text-3xl font-bold">Avatar 头像</h1>
        <p className="mt-2 text-muted-foreground">
          用于展示用户头像或图标，支持图片和文字回退。由{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            Avatar
          </code>
          、
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            AvatarImage
          </code>{" "}
          和{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            AvatarFallback
          </code>{" "}
          组合使用。
        </p>
      </div>

      <ComponentDemo
        title="图片头像"
        description="通过 AvatarImage 设置头像图片，图片加载失败时会显示 AvatarFallback 内容。"
        code={`import { Avatar, AvatarImage, AvatarFallback } from "@easyfix/console-ui";
import logo from "@/assets/easyfix_icon_c_2025.svg";

<Avatar>
  <AvatarImage src={logo} alt="Easyfix" />
  <AvatarFallback>EF</AvatarFallback>
</Avatar>`}
      >
        <Avatar>
          <AvatarImage src={logoSvg} alt="Easyfix" />
          <AvatarFallback>EF</AvatarFallback>
        </Avatar>
      </ComponentDemo>

      <ComponentDemo
        title="文字回退"
        description="当不提供图片或图片加载失败时，显示 AvatarFallback 中的文字。"
        code={`import { Avatar, AvatarFallback } from "@easyfix/console-ui";

<Avatar>
  <AvatarFallback>EF</AvatarFallback>
</Avatar>
<Avatar>
  <AvatarFallback>李</AvatarFallback>
</Avatar>
<Avatar>
  <AvatarFallback>张</AvatarFallback>
</Avatar>`}
      >
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>EF</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>李</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>张</AvatarFallback>
          </Avatar>
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="不同尺寸"
        description="通过 className 设置 size-* 来控制头像大小。"
        code={`import { Avatar, AvatarImage, AvatarFallback } from "@easyfix/console-ui";
import logo from "@/assets/easyfix_icon_c_2025.svg";

<Avatar className="size-8">
  <AvatarImage src={logo} alt="Easyfix" />
  <AvatarFallback>EF</AvatarFallback>
</Avatar>
<Avatar className="size-10">
  <AvatarImage src={logo} alt="Easyfix" />
  <AvatarFallback>EF</AvatarFallback>
</Avatar>
<Avatar className="size-12">
  <AvatarImage src={logo} alt="Easyfix" />
  <AvatarFallback>EF</AvatarFallback>
</Avatar>
<Avatar className="size-16">
  <AvatarImage src={logo} alt="Easyfix" />
  <AvatarFallback>EF</AvatarFallback>
</Avatar>`}
      >
        <div className="flex items-center gap-4">
          <Avatar className="size-8">
            <AvatarImage src={logoSvg} alt="Easyfix" />
            <AvatarFallback>EF</AvatarFallback>
          </Avatar>
          <Avatar className="size-10">
            <AvatarImage src={logoSvg} alt="Easyfix" />
            <AvatarFallback>EF</AvatarFallback>
          </Avatar>
          <Avatar className="size-12">
            <AvatarImage src={logoSvg} alt="Easyfix" />
            <AvatarFallback>EF</AvatarFallback>
          </Avatar>
          <Avatar className="size-16">
            <AvatarImage src={logoSvg} alt="Easyfix" />
            <AvatarFallback>EF</AvatarFallback>
          </Avatar>
        </div>
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">API</h2>

        <h3 className="mb-2 mt-6 text-lg font-medium">Avatar</h3>
        <PropsTable data={avatarPropsData} />

        <h3 className="mb-2 mt-6 text-lg font-medium">AvatarImage</h3>
        <PropsTable data={imagePropsData} />

        <h3 className="mb-2 mt-6 text-lg font-medium">AvatarFallback</h3>
        <PropsTable data={fallbackPropsData} />
      </div>
    </div>
  );
}
