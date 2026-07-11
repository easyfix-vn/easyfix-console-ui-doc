import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  Button,
} from "@easyfix/console-ui";
import { InboxIcon } from "lucide-react";

import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

const emptyPropsData = [
  {
    name: "className",
    type: "string",
    description: "自定义 CSS 类名",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "子元素",
  },
];

const mediaPropsData = [
  {
    name: "variant",
    type: '"default" | "icon"',
    default: '"default"',
    description: "媒体展示样式，icon 变体会添加卡片式图标容器效果",
  },
  {
    name: "className",
    type: "string",
    description: "自定义 CSS 类名",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "媒体内容，通常为图标或插画",
  },
];

const titlePropsData = [
  {
    name: "className",
    type: "string",
    description: "自定义 CSS 类名",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "标题文本",
  },
];

const descriptionPropsData = [
  {
    name: "className",
    type: "string",
    description: "自定义 CSS 类名",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "描述文本",
  },
];

const contentPropsData = [
  {
    name: "className",
    type: "string",
    description: "自定义 CSS 类名",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "操作区内容，通常放置按钮等",
  },
];

export default function EmptyDoc() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="font-heading text-3xl font-bold">Empty 空状态</h1>
        <p className="mt-2 text-muted-foreground">
          用于列表、表格和页面无数据状态的占位提示，由{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            Empty
          </code>
          、
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            EmptyHeader
          </code>
          、
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            EmptyMedia
          </code>
          、
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            EmptyTitle
          </code>
          、
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            EmptyDescription
          </code>{" "}
          和{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            EmptyContent
          </code>{" "}
          组合使用。
        </p>
      </div>

      <ComponentDemo
        title="基本结构"
        description="空状态由标题和描述构成。"
        code={`import { Empty, EmptyHeader, EmptyTitle, EmptyDescription } from "@easyfix/console-ui";

<Empty>
  <EmptyHeader>
    <EmptyTitle>暂无数据</EmptyTitle>
    <EmptyDescription>当前列表暂无数据。</EmptyDescription>
  </EmptyHeader>
</Empty>`}
      >
        <Empty>
          <EmptyHeader>
            <EmptyTitle>暂无数据</EmptyTitle>
            <EmptyDescription>当前列表暂无数据。</EmptyDescription>
          </EmptyHeader>
        </Empty>
      </ComponentDemo>

      <ComponentDemo
        title="带图标"
        description='EmptyMedia 的 variant="icon" 提供卡片式图标容器。'
        code={`import {
  Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription,
} from "@easyfix/console-ui";
import { InboxIcon } from "lucide-react";

<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <InboxIcon />
    </EmptyMedia>
    <EmptyTitle>收件箱为空</EmptyTitle>
    <EmptyDescription>当前没有新消息。</EmptyDescription>
  </EmptyHeader>
</Empty>`}
      >
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <InboxIcon />
            </EmptyMedia>
            <EmptyTitle>收件箱为空</EmptyTitle>
            <EmptyDescription>当前没有新消息。</EmptyDescription>
          </EmptyHeader>
        </Empty>
      </ComponentDemo>

      <ComponentDemo
        title="带操作按钮"
        description="EmptyContent 承载创建、重试等后续操作。"
        code={`import {
  Empty, EmptyHeader, EmptyMedia, EmptyTitle,
  EmptyDescription, EmptyContent, Button,
} from "@easyfix/console-ui";
import { InboxIcon } from "lucide-react";

<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <InboxIcon />
    </EmptyMedia>
    <EmptyTitle>暂无项目</EmptyTitle>
    <EmptyDescription>
      当前尚未创建项目。
    </EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>创建项目</Button>
  </EmptyContent>
</Empty>`}
      >
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <InboxIcon />
            </EmptyMedia>
            <EmptyTitle>暂无项目</EmptyTitle>
            <EmptyDescription>
              当前尚未创建项目。
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button>创建项目</Button>
          </EmptyContent>
        </Empty>
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">API</h2>

        <h3 className="mb-2 mt-6 text-lg font-medium">Empty</h3>
        <PropsTable data={emptyPropsData} />

        <h3 className="mb-2 mt-6 text-lg font-medium">EmptyMedia</h3>
        <PropsTable data={mediaPropsData} />

        <h3 className="mb-2 mt-6 text-lg font-medium">EmptyTitle</h3>
        <PropsTable data={titlePropsData} />

        <h3 className="mb-2 mt-6 text-lg font-medium">EmptyDescription</h3>
        <PropsTable data={descriptionPropsData} />

        <h3 className="mb-2 mt-6 text-lg font-medium">EmptyContent</h3>
        <PropsTable data={contentPropsData} />
      </div>
    </div>
  );
}
