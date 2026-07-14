import { useState } from "react";
import { Popconfirm, Button } from "@easyfix/console-ui";

import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";
import { ComponentDocPage } from "@/components/ComponentDocPage";

const propsData = [
  {
    name: "title",
    type: "ReactNode",
    description: "确认框标题",
  },
  {
    name: "description",
    type: "ReactNode",
    description: "确认框描述内容",
  },
  {
    name: "onConfirm",
    type: "() => void",
    description: "确认操作回调",
  },
  {
    name: "onCancel",
    type: "() => void",
    description: "取消操作回调",
  },
  {
    name: "confirmText",
    type: "string",
    default: '"确定"',
    description: "确认按钮文字",
  },
  {
    name: "cancelText",
    type: "string",
    default: '"取消"',
    description: "取消按钮文字",
  },
  {
    name: "icon",
    type: "ReactNode",
    description: "自定义图标",
  },
  {
    name: "open",
    type: "boolean",
    description: "受控模式下的显示状态",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    description: "显示状态变化的回调",
  },
  {
    name: "side",
    type: '"top" | "bottom" | "left" | "right"',
    description: "弹出方向",
  },
  {
    name: "align",
    type: '"start" | "center" | "end"',
    description: "对齐方式",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "触发元素",
  },
];

function BasicDemo() {
  const [open, setOpen] = useState(false);

  return (
    <Popconfirm
      title="确认删除？"
      onConfirm={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      open={open}
      onOpenChange={setOpen}
    >
      <Button variant="outline">删除</Button>
    </Popconfirm>
  );
}

function DescriptionDemo() {
  const [open, setOpen] = useState(false);

  return (
    <Popconfirm
      title="确认重置？"
      description="重置后所有未保存的更改将会丢失。"
      onConfirm={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      open={open}
      onOpenChange={setOpen}
    >
      <Button variant="outline">重置</Button>
    </Popconfirm>
  );
}

function CustomTextDemo() {
  const [open, setOpen] = useState(false);

  return (
    <Popconfirm
      title="确认提交审核？"
      description="提交后将进入审核流程，期间无法修改。"
      confirmText="提交"
      cancelText="再想想"
      onConfirm={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      open={open}
      onOpenChange={setOpen}
    >
      <Button>提交审核</Button>
    </Popconfirm>
  );
}

export default function PopconfirmDoc() {
  return (
    <ComponentDocPage>
    <div className="space-y-10">
      <div>
        <h1 className="font-heading text-3xl font-bold">Popconfirm 气泡确认</h1>
        <p className="mt-2 text-muted-foreground">
          轻量确认框，支持二次确认。
        </p>
      </div>

      <ComponentDemo
        title="基本用法"
        description="组件包裹触发元素并在激活后显示确认框。"
        code={`import { useState } from "react";
import { Popconfirm, Button } from "@easyfix/console-ui";

function Demo() {
  const [open, setOpen] = useState(false);

  return (
    <Popconfirm
      title="确认删除？"
      onConfirm={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      open={open}
      onOpenChange={setOpen}
    >
      <Button variant="outline">删除</Button>
    </Popconfirm>
  );
}`}
      >
        <BasicDemo />
      </ComponentDemo>

      <ComponentDemo
        title="带描述信息"
        description="description 提供补充说明。"
        code={`import { useState } from "react";
import { Popconfirm, Button } from "@easyfix/console-ui";

function Demo() {
  const [open, setOpen] = useState(false);

  return (
    <Popconfirm
      title="确认重置？"
      description="重置后所有未保存的更改将会丢失。"
      onConfirm={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      open={open}
      onOpenChange={setOpen}
    >
      <Button variant="outline">重置</Button>
    </Popconfirm>
  );
}`}
      >
        <DescriptionDemo />
      </ComponentDemo>

      <ComponentDemo
        title="自定义按钮文字"
        description="confirmText 与 cancelText 定义操作按钮文本。"
        code={`import { useState } from "react";
import { Popconfirm, Button } from "@easyfix/console-ui";

function Demo() {
  const [open, setOpen] = useState(false);

  return (
    <Popconfirm
      title="确认提交审核？"
      description="提交后将进入审核流程，期间无法修改。"
      confirmText="提交"
      cancelText="再想想"
      onConfirm={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      open={open}
      onOpenChange={setOpen}
    >
      <Button>提交审核</Button>
    </Popconfirm>
  );
}`}
      >
        <CustomTextDemo />
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">API</h2>
        <PropsTable data={propsData} />
      </div>
    </div>
    </ComponentDocPage>
  );
}
