import { useState } from "react";
import {
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  ToggleGroupSeparator,
} from "@easyfix/console-ui";
import {
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon,
} from "lucide-react";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

function BasicDemo() {
  const [pressed, setPressed] = useState(false);
  return (
    <div className="flex items-center gap-4">
      <Toggle pressed={pressed} onPressedChange={setPressed}>
        <BoldIcon />
        Bold
      </Toggle>
      <Toggle variant="outline">
        <ItalicIcon />
        Italic
      </Toggle>
      <Toggle disabled>
        <UnderlineIcon />
        Disabled
      </Toggle>
    </div>
  );
}

function GroupDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-2">
        <span className="text-sm font-medium">默认样式</span>
        <ToggleGroup>
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
      </div>
      <div className="space-y-2">
        <span className="text-sm font-medium">Outline 样式（带分隔符）</span>
        <ToggleGroup variant="outline">
          <ToggleGroupItem value="left">
            <AlignLeftIcon />
          </ToggleGroupItem>
          <ToggleGroupSeparator />
          <ToggleGroupItem value="center">
            <AlignCenterIcon />
          </ToggleGroupItem>
          <ToggleGroupSeparator />
          <ToggleGroupItem value="right">
            <AlignRightIcon />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
}

function SizeDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-2">
        <span className="text-sm font-medium">Small</span>
        <Toggle size="sm" variant="outline">
          <BoldIcon />
          Bold
        </Toggle>
      </div>
      <div className="space-y-2">
        <span className="text-sm font-medium">Default</span>
        <Toggle variant="outline">
          <BoldIcon />
          Bold
        </Toggle>
      </div>
      <div className="space-y-2">
        <span className="text-sm font-medium">Large</span>
        <Toggle size="lg" variant="outline">
          <BoldIcon />
          Bold
        </Toggle>
      </div>
    </div>
  );
}

const togglePropsData = [
  {
    name: "pressed",
    type: "boolean",
    description: "受控模式下的按下状态",
  },
  {
    name: "defaultPressed",
    type: "boolean",
    default: "false",
    description: "非受控模式下的默认按下状态",
  },
  {
    name: "onPressedChange",
    type: "(pressed: boolean) => void",
    description: "按下状态变化时的回调",
  },
  {
    name: "variant",
    type: '"default" | "outline"',
    default: '"default"',
    description: "切换按钮样式变体",
  },
  {
    name: "size",
    type: '"sm" | "default" | "lg"',
    default: '"default"',
    description: "切换按钮尺寸",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用",
  },
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
];

const groupPropsData = [
  {
    name: "value",
    type: "number[]",
    description: "受控模式下当前选中的值索引数组",
  },
  {
    name: "defaultValue",
    type: "number[]",
    description: "非受控模式下的默认选中值",
  },
  {
    name: "onValueChange",
    type: "(value: number[]) => void",
    description: "选中值变化时的回调",
  },
  {
    name: "variant",
    type: '"default" | "outline"',
    default: '"default"',
    description: "组内按钮的样式变体",
  },
  {
    name: "size",
    type: '"sm" | "default" | "lg"',
    default: '"default"',
    description: "组内按钮的尺寸",
  },
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: "排列方向",
  },
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
];

export default function ToggleDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">Toggle 切换按钮</h1>
        <p className="mt-2 text-muted-foreground">
          可切换开关状态的按钮组件，基于{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            @base-ui/react/toggle
          </code>{" "}
          封装，支持多种尺寸和变体样式，也可组合为 ToggleGroup 使用。
        </p>
      </div>

      <ComponentDemo
        title="基础切换按钮"
        description="单个切换按钮，支持受控和非受控模式，可设置 variant 和 disabled。"
        code={`import { Toggle } from "@easyfix/console-ui";

<Toggle pressed={pressed} onPressedChange={setPressed}>
  <BoldIcon />
  Bold
</Toggle>
<Toggle variant="outline">
  <ItalicIcon />
  Italic
</Toggle>
<Toggle disabled>
  <UnderlineIcon />
  Disabled
</Toggle>`}
      >
        <BasicDemo />
      </ComponentDemo>

      <ComponentDemo
        title="切换按钮组"
        description="使用 ToggleGroup 和 ToggleGroupItem 组合多个切换按钮，支持 ToggleGroupSeparator 分隔。"
        code={`import {
  ToggleGroup, ToggleGroupItem, ToggleGroupSeparator,
} from "@easyfix/console-ui";

<ToggleGroup>
  <ToggleGroupItem value="bold"><BoldIcon /></ToggleGroupItem>
  <ToggleGroupItem value="italic"><ItalicIcon /></ToggleGroupItem>
  <ToggleGroupItem value="underline"><UnderlineIcon /></ToggleGroupItem>
</ToggleGroup>

<ToggleGroup variant="outline">
  <ToggleGroupItem value="left"><AlignLeftIcon /></ToggleGroupItem>
  <ToggleGroupSeparator />
  <ToggleGroupItem value="center"><AlignCenterIcon /></ToggleGroupItem>
  <ToggleGroupSeparator />
  <ToggleGroupItem value="right"><AlignRightIcon /></ToggleGroupItem>
</ToggleGroup>`}
      >
        <GroupDemo />
      </ComponentDemo>

      <ComponentDemo
        title="不同尺寸"
        description="size 定义切换按钮尺寸。"
        code={`import { Toggle } from "@easyfix/console-ui";

<Toggle size="sm" variant="outline">
  <BoldIcon /> Bold
</Toggle>
<Toggle variant="outline">
  <BoldIcon /> Bold
</Toggle>
<Toggle size="lg" variant="outline">
  <BoldIcon /> Bold
</Toggle>`}
      >
        <SizeDemo />
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">Toggle API</h2>
      <p className="text-sm text-muted-foreground">
        Toggle 接受{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
          TogglePrimitive.Props
        </code>{" "}
        的全部属性及 toggleVariants 变体属性，以下为常用属性：
      </p>
      <PropsTable data={togglePropsData} />

      <h2 className="font-heading text-xl font-semibold">ToggleGroup API</h2>
      <p className="text-sm text-muted-foreground">
        ToggleGroup 接受{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
          ToggleGroupPrimitive.Props
        </code>{" "}
        的全部属性及 toggleVariants 变体属性，以下为常用属性：
      </p>
      <PropsTable data={groupPropsData} />
    </div>
  );
}
