import { Button, buttonVariants } from "@easyfix/console-ui";
import { DownloadIcon, PlusIcon, TrashIcon } from "lucide-react";

import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

const propsData = [
  {
    name: "variant",
    type: '"default" | "destructive" | "destructive-outline" | "ghost" | "link" | "outline" | "secondary"',
    default: '"default"',
    description: "按钮样式变体",
  },
  {
    name: "size",
    type: '"default" | "sm" | "lg" | "xl" | "xs" | "icon" | "icon-sm" | "icon-lg" | "icon-xl" | "icon-xs"',
    default: '"default"',
    description: "按钮尺寸",
  },
  {
    name: "loading",
    type: "boolean",
    default: "false",
    description: "是否显示加载状态",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用按钮",
  },
  {
    name: "asChild",
    type: "boolean",
    default: "false",
    description: "是否将样式传递给子元素而非渲染 button 标签",
  },
];

export default function ButtonDoc() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="font-heading text-3xl font-bold">Button 按钮</h1>
        <p className="mt-2 text-muted-foreground">
          用于触发操作或事件，支持多种样式变体和尺寸。同时导出了{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            buttonVariants
          </code>{" "}
          工具函数，可用于为非按钮元素添加按钮样式。
        </p>
      </div>

      <ComponentDemo
        title="基础用法 - 变体"
        description="Button 提供多种 variant 样式，适用于不同操作语义。"
        code={`import { Button } from "@easyfix/console-ui";

<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="destructive-outline">Destructive Outline</Button>`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="destructive-outline">Destructive Outline</Button>
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="尺寸"
        description="通过 size 属性控制按钮的大小。"
        code={`import { Button } from "@easyfix/console-ui";

<Button size="xs">XS</Button>
<Button size="sm">SM</Button>
<Button size="default">Default</Button>
<Button size="lg">LG</Button>
<Button size="xl">XL</Button>`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button size="xs">XS</Button>
          <Button size="sm">SM</Button>
          <Button size="default">Default</Button>
          <Button size="lg">LG</Button>
          <Button size="xl">XL</Button>
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="图标按钮"
        description="结合 lucide-react 图标使用，支持图标 + 文字或纯图标按钮。"
        code={`import { Button } from "@easyfix/console-ui";
import { PlusIcon, DownloadIcon, TrashIcon } from "lucide-react";

<Button><PlusIcon /> 新建</Button>
<Button variant="outline"><DownloadIcon /> 下载</Button>
<Button variant="destructive"><TrashIcon /> 删除</Button>
<Button size="icon" variant="outline"><PlusIcon /></Button>
<Button size="icon-sm" variant="outline"><DownloadIcon /></Button>`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button>
            <PlusIcon /> 新建
          </Button>
          <Button variant="outline">
            <DownloadIcon /> 下载
          </Button>
          <Button variant="destructive">
            <TrashIcon /> 删除
          </Button>
          <Button size="icon" variant="outline">
            <PlusIcon />
          </Button>
          <Button size="icon-sm" variant="outline">
            <DownloadIcon />
          </Button>
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="加载状态"
        description="设置 loading 属性后按钮会显示加载指示器并自动禁用交互。"
        code={`import { Button } from "@easyfix/console-ui";

<Button loading>提交中...</Button>
<Button loading variant="outline">加载中...</Button>
<Button loading variant="secondary">处理中...</Button>`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button loading>提交中...</Button>
          <Button loading variant="outline">
            加载中...
          </Button>
          <Button loading variant="secondary">
            处理中...
          </Button>
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="禁用状态"
        description="设置 disabled 属性后按钮不可点击。"
        code={`import { Button } from "@easyfix/console-ui";

<Button disabled>Default</Button>
<Button disabled variant="outline">Outline</Button>
<Button disabled variant="secondary">Secondary</Button>
<Button disabled variant="destructive">Destructive</Button>`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button disabled>Default</Button>
          <Button disabled variant="outline">
            Outline
          </Button>
          <Button disabled variant="secondary">
            Secondary
          </Button>
          <Button disabled variant="destructive">
            Destructive
          </Button>
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="buttonVariants 工具函数"
        description="使用 buttonVariants 为非按钮元素（如链接）添加按钮样式。"
        code={`import { buttonVariants } from "@easyfix/console-ui";

<a href="#" className={buttonVariants({ variant: "outline" })}>
  链接按钮
</a>`}
      >
        <a href="#" className={buttonVariants({ variant: "outline" })}>
          链接按钮
        </a>
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">API</h2>
        <PropsTable data={propsData} />
      </div>
    </div>
  );
}
