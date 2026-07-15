import {
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarLink,
  Button,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
} from "@easyfix/console-ui";
import {
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  LinkIcon,
  CopyIcon,
  ScissorsIcon,
  ClipboardIcon,
  Undo2Icon,
  Redo2Icon,
} from "lucide-react";
import { ComponentDemo } from "@/components/ComponentDemo";
import { ExternalDocLink } from "@/components/ExternalDocLink";
import { PropsTable } from "@/components/PropsTable";
import { ComponentDocPage } from "@/components/ComponentDocPage";

function BasicDemo() {
  return (
    <Toolbar>
      <ToolbarGroup>
        <ToolbarButton label="加粗" render={<Toggle size="sm" />}>
          <BoldIcon />
        </ToolbarButton>
        <ToolbarButton label="斜体" render={<Toggle size="sm" />}>
          <ItalicIcon />
        </ToolbarButton>
        <ToolbarButton label="下划线" render={<Toggle size="sm" />}>
          <UnderlineIcon />
        </ToolbarButton>
      </ToolbarGroup>
      <ToolbarSeparator orientation="vertical" />
      <ToolbarGroup>
        <ToolbarButton label="复制" render={<Button variant="ghost" size="icon-sm" />}>
          <CopyIcon />
        </ToolbarButton>
        <ToolbarButton label="剪切" render={<Button variant="ghost" size="icon-sm" />}>
          <ScissorsIcon />
        </ToolbarButton>
        <ToolbarButton label="粘贴" render={<Button variant="ghost" size="icon-sm" />}>
          <ClipboardIcon />
        </ToolbarButton>
      </ToolbarGroup>
      <ToolbarSeparator orientation="vertical" />
      <ToolbarLink
        render={
          <a
            href="https://easyfix.vn"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          />
        }
      >
        <LinkIcon className="size-4" />
        链接
      </ToolbarLink>
    </Toolbar>
  );
}

function GroupDemo() {
  return (
    <Toolbar>
      <ToolbarGroup>
        <ToolbarButton label="撤销" render={<Button variant="ghost" size="icon-sm" />}>
          <Undo2Icon />
        </ToolbarButton>
        <ToolbarButton label="重做" render={<Button variant="ghost" size="icon-sm" />}>
          <Redo2Icon />
        </ToolbarButton>
      </ToolbarGroup>
      <ToolbarSeparator orientation="vertical" />
      <ToggleGroup variant="outline" size="sm">
        <ToggleGroupItem value="bold">
          <BoldIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic">
          <ItalicIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline">
          <UnderlineIcon />
        </ToggleGroupItem>
      </ToggleGroup>
    </Toolbar>
  );
}

const toolbarPropsData = [
  {
    name: "children",
    type: "ReactNode",
    description: "工具栏内容，通常由 ToolbarGroup、ToolbarButton、ToolbarSeparator 等组成",
  },
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: "工具栏方向",
  },
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
];

const buttonPropsData = [
  {
    name: "label",
    type: "ReactNode",
    description: "按钮标签；默认作为 hover Tooltip 内容，同时用于文本 aria-label",
  },
  {
    name: "showLabel",
    type: "boolean",
    default: "false",
    description: "是否在按钮内直接显示 label；为 false 时 hover 在按钮下方显示 Tooltip",
  },
  {
    name: "render",
    type: "ReactElement",
    description: "自定义渲染元素，例如传入 Button 或 Toggle 组件",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "按钮内容",
  },
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
];

const groupPropsData = [
  {
    name: "children",
    type: "ReactNode",
    description: "分组内容",
  },
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
];

const separatorPropsData = [
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"vertical"',
    description: "分隔线方向",
  },
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
];

export default function ToolbarDoc() {
  return (
    <ComponentDocPage>
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">Toolbar 工具栏</h1>
        <p className="mt-2 text-muted-foreground">
          用于组织一组操作按钮的容器组件，基于{" "}
          <ExternalDocLink
            href="https://base-ui.com/react/components/toolbar"
            label="Base UI Toolbar 官方文档"
          >
            @base-ui/react/toolbar
          </ExternalDocLink>{" "}
          封装，支持按钮分组、分隔线和链接等。
        </p>
      </div>

      <ComponentDemo
        title="基础工具栏"
        description="包含切换按钮、操作按钮和链接的工具栏，通过 ToolbarSeparator 分隔不同功能区域。"
        code={`import {
  Toolbar, ToolbarButton, ToolbarGroup,
  ToolbarSeparator, ToolbarLink, Button, Toggle,
} from "@easyfix/console-ui";

<Toolbar>
  <ToolbarGroup>
    <ToolbarButton label="加粗" render={<Toggle size="sm" />}>
      <BoldIcon />
    </ToolbarButton>
    <ToolbarButton label="斜体" render={<Toggle size="sm" />}>
      <ItalicIcon />
    </ToolbarButton>
  </ToolbarGroup>
  <ToolbarSeparator orientation="vertical" />
  <ToolbarGroup>
    <ToolbarButton label="复制" render={<Button variant="ghost" size="icon-sm" />}>
      <CopyIcon />
    </ToolbarButton>
  </ToolbarGroup>
  <ToolbarSeparator orientation="vertical" />
  <ToolbarLink render={<a href="https://easyfix.vn" />}>
    <LinkIcon /> 链接
  </ToolbarLink>
</Toolbar>`}
      >
        <BasicDemo />
      </ComponentDemo>

      <ComponentDemo
        title="搭配 ToggleGroup"
        description="在工具栏中嵌入 ToggleGroup，实现富文本编辑器常见的格式化按钮组。"
        code={`import {
  Toolbar, ToolbarButton, ToolbarGroup,
  ToolbarSeparator, Button,
  ToggleGroup, ToggleGroupItem,
} from "@easyfix/console-ui";

<Toolbar>
  <ToolbarGroup>
    <ToolbarButton label="撤销" render={<Button variant="ghost" size="icon-sm" />}>
      <Undo2Icon />
    </ToolbarButton>
    <ToolbarButton label="重做" render={<Button variant="ghost" size="icon-sm" />}>
      <Redo2Icon />
    </ToolbarButton>
  </ToolbarGroup>
  <ToolbarSeparator orientation="vertical" />
  <ToggleGroup variant="outline" size="sm">
    <ToggleGroupItem value="bold"><BoldIcon /></ToggleGroupItem>
    <ToggleGroupItem value="italic"><ItalicIcon /></ToggleGroupItem>
    <ToggleGroupItem value="underline"><UnderlineIcon /></ToggleGroupItem>
  </ToggleGroup>
</Toolbar>`}
      >
        <GroupDemo />
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">Toolbar API</h2>
      <p className="text-sm text-muted-foreground">
        Toolbar 接受{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
          ToolbarPrimitive.Root.Props
        </code>{" "}
        的全部属性，以下为常用属性：
      </p>
      <PropsTable data={toolbarPropsData} />

      <h2 className="font-heading text-xl font-semibold">ToolbarButton API</h2>
      <PropsTable data={buttonPropsData} />

      <h2 className="font-heading text-xl font-semibold">ToolbarGroup API</h2>
      <PropsTable data={groupPropsData} />

      <h2 className="font-heading text-xl font-semibold">ToolbarSeparator API</h2>
      <PropsTable data={separatorPropsData} />
    </div>
    </ComponentDocPage>
  );
}
