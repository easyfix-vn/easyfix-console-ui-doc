import { useState } from "react";
import {
  Button,
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@easyfix/console-ui";

import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

const collapsiblePropsData = [
  {
    name: "open",
    type: "boolean",
    description: "受控模式下是否展开",
  },
  {
    name: "defaultOpen",
    type: "boolean",
    default: "false",
    description: "默认是否展开（非受控）",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    description: "展开状态变化回调",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用",
  },
];

const triggerPropsData = [
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
  {
    name: "asChild",
    type: "boolean",
    default: "false",
    description: "是否将 props 合并到子元素上",
  },
];

const panelPropsData = [
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "折叠面板内容",
  },
];

function ControlledDemo() {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div className="flex items-center gap-2">
        <CollapsibleTrigger render={<Button variant="outline" size="sm" />}>
          {open ? "收起" : "展开"}详情
        </CollapsibleTrigger>
        <span className="text-muted-foreground text-sm">
          当前状态: {open ? "展开" : "收起"}
        </span>
      </div>
      <CollapsiblePanel>
        <div className="mt-3 rounded-md border p-4 text-sm">
          这是受控模式下的折叠内容，通过外部 state 控制展开和收起。
        </div>
      </CollapsiblePanel>
    </Collapsible>
  );
}

export default function CollapsibleDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">
          Collapsible 折叠面板
        </h1>
        <p className="mt-2 text-muted-foreground">
          可展开和收起的内容区域，基于{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            @base-ui/react/collapsible
          </code>{" "}
          实现，支持动画过渡效果。
        </p>
      </div>

      <ComponentDemo
        title="基础折叠面板"
        description="点击触发器切换内容的展开和收起"
        code={`import { Collapsible, CollapsibleTrigger, CollapsiblePanel, Button } from "@easyfix/console-ui";

<Collapsible>
  <CollapsibleTrigger render={<Button variant="outline" size="sm" />}>
    切换
  </CollapsibleTrigger>
  <CollapsiblePanel>
    <div className="mt-3 rounded-md border p-4 text-sm">
      折叠内容区域
    </div>
  </CollapsiblePanel>
</Collapsible>`}
      >
        <Collapsible>
          <CollapsibleTrigger render={<Button variant="outline" size="sm" />}>
            点击切换
          </CollapsibleTrigger>
          <CollapsiblePanel>
            <div className="mt-3 rounded-md border p-4 text-sm">
              这是一段可折叠的内容，点击上方按钮可以展开或收起此区域。
            </div>
          </CollapsiblePanel>
        </Collapsible>
      </ComponentDemo>

      <ComponentDemo
        title="默认展开"
        description="通过 defaultOpen 设置面板初始为展开状态"
        code={`<Collapsible defaultOpen>
  <CollapsibleTrigger render={<Button variant="outline" size="sm" />}>
    切换
  </CollapsibleTrigger>
  <CollapsiblePanel>
    <div className="mt-3 rounded-md border p-4 text-sm">
      默认展开的内容
    </div>
  </CollapsiblePanel>
</Collapsible>`}
      >
        <Collapsible defaultOpen>
          <CollapsibleTrigger render={<Button variant="outline" size="sm" />}>
            点击切换
          </CollapsibleTrigger>
          <CollapsiblePanel>
            <div className="mt-3 rounded-md border p-4 text-sm">
              这段内容默认是展开的，点击按钮可以收起。
            </div>
          </CollapsiblePanel>
        </Collapsible>
      </ComponentDemo>

      <ComponentDemo
        title="受控模式"
        description="通过 open 和 onOpenChange 完全控制展开状态"
        code={`const [open, setOpen] = useState(false);

<Collapsible open={open} onOpenChange={setOpen}>
  <CollapsibleTrigger render={<Button variant="outline" size="sm" />}>
    {open ? "收起" : "展开"}详情
  </CollapsibleTrigger>
  <CollapsiblePanel>
    <div className="mt-3 rounded-md border p-4 text-sm">
      受控模式下的折叠内容
    </div>
  </CollapsiblePanel>
</Collapsible>`}
      >
        <ControlledDemo />
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">Collapsible API</h2>
      <PropsTable data={collapsiblePropsData} />

      <h2 className="font-heading text-xl font-semibold">
        CollapsibleTrigger API
      </h2>
      <PropsTable data={triggerPropsData} />

      <h2 className="font-heading text-xl font-semibold">
        CollapsiblePanel API
      </h2>
      <PropsTable data={panelPropsData} />
    </div>
  );
}
