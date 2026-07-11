import { useState } from "react";
import { RadioGroup, Radio, Label } from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

function BasicDemo() {
  const [value, setValue] = useState("apple");
  return (
    <RadioGroup value={value} onValueChange={setValue}>
      <label className="flex items-center gap-2 text-sm">
        <Radio value="apple" />
        <span>苹果</span>
      </label>
      <label className="flex items-center gap-2 text-sm">
        <Radio value="banana" />
        <span>香蕉</span>
      </label>
      <label className="flex items-center gap-2 text-sm">
        <Radio value="orange" />
        <span>橙子</span>
      </label>
    </RadioGroup>
  );
}

const radioGroupPropsData = [
  {
    name: "value",
    type: "string",
    description: "受控模式下当前选中的值",
  },
  {
    name: "defaultValue",
    type: "string",
    description: "非受控模式下的默认选中值",
  },
  {
    name: "onValueChange",
    type: "(value: string) => void",
    description: "选中值变化时的回调",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用整个单选组",
  },
  {
    name: "orientation",
    type: '"vertical" | "horizontal"',
    default: '"vertical"',
    description: "选项排列方向；horizontal 时横向排列并自动换行",
  },
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
];

const radioPropsData = [
  {
    name: "value",
    type: "string",
    description: "单选项的值",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用该选项",
  },
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
];

export default function RadioGroupDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">RadioGroup 单选组</h1>
        <p className="mt-2 text-muted-foreground">
          单选组组件，基于{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            @base-ui/react/radio-group
          </code>{" "}
          和{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            @base-ui/react/radio
          </code>{" "}
          封装，用于在一组选项中选择单个值。
        </p>
      </div>

      <ComponentDemo
        title="基础单选组"
        description="受控模式由 RadioGroup 与 Radio 组合。"
        code={`import { RadioGroup, Radio } from "@easyfix/console-ui";

const [value, setValue] = useState("apple");

<RadioGroup value={value} onValueChange={setValue}>
  <label className="flex items-center gap-2 text-sm">
    <Radio value="apple" />
    <span>苹果</span>
  </label>
  <label className="flex items-center gap-2 text-sm">
    <Radio value="banana" />
    <span>香蕉</span>
  </label>
  <label className="flex items-center gap-2 text-sm">
    <Radio value="orange" />
    <span>橙子</span>
  </label>
</RadioGroup>`}
      >
        <BasicDemo />
      </ComponentDemo>

      <ComponentDemo
        title="水平排列"
        description="设置 orientation=horizontal 让选项横向排列，空间不足时自动换行"
        code={`<RadioGroup orientation="horizontal" defaultValue="apple">
  <label className="flex items-center gap-2"><Radio value="apple" /><span>苹果</span></label>
  <label className="flex items-center gap-2"><Radio value="banana" /><span>香蕉</span></label>
  <label className="flex items-center gap-2"><Radio value="orange" /><span>橙子</span></label>
</RadioGroup>`}
      >
        <RadioGroup orientation="horizontal" defaultValue="apple">
          <label className="flex items-center gap-2 text-sm">
            <Radio value="apple" />
            <span>苹果</span>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Radio value="banana" />
            <span>香蕉</span>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Radio value="orange" />
            <span>橙子</span>
          </label>
        </RadioGroup>
      </ComponentDemo>

      <ComponentDemo
        title="默认选中"
        description="通过 defaultValue 设置非受控模式下的默认选中项。"
        code={`<RadioGroup defaultValue="medium">
  <label className="flex items-center gap-2 text-sm">
    <Radio value="small" />
    <span>小</span>
  </label>
  <label className="flex items-center gap-2 text-sm">
    <Radio value="medium" />
    <span>中</span>
  </label>
  <label className="flex items-center gap-2 text-sm">
    <Radio value="large" />
    <span>大</span>
  </label>
</RadioGroup>`}
      >
        <RadioGroup defaultValue="medium">
          <label className="flex items-center gap-2 text-sm">
            <Radio value="small" />
            <span>小</span>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Radio value="medium" />
            <span>中</span>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Radio value="large" />
            <span>大</span>
          </label>
        </RadioGroup>
      </ComponentDemo>

      <ComponentDemo
        title="禁用选项"
        description="disabled 可作用于单选组或单个选项。"
        code={`<RadioGroup defaultValue="option1">
  <label className="flex items-center gap-2 text-sm">
    <Radio value="option1" />
    <span>可选项 A</span>
  </label>
  <label className="flex items-center gap-2 text-sm text-muted-foreground">
    <Radio value="option2" disabled />
    <span>禁用项 B</span>
  </label>
  <label className="flex items-center gap-2 text-sm">
    <Radio value="option3" />
    <span>可选项 C</span>
  </label>
</RadioGroup>`}
      >
        <RadioGroup defaultValue="option1">
          <label className="flex items-center gap-2 text-sm">
            <Radio value="option1" />
            <span>可选项 A</span>
          </label>
          <label className="flex items-center gap-2 text-sm text-muted-foreground">
            <Radio value="option2" disabled />
            <span>禁用项 B</span>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Radio value="option3" />
            <span>可选项 C</span>
          </label>
        </RadioGroup>
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">RadioGroup API</h2>
      <p className="text-sm text-muted-foreground">
        RadioGroup 接受{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
          RadioGroupPrimitive.Props
        </code>{" "}
        的全部属性，以下为常用属性：
      </p>
      <PropsTable data={radioGroupPropsData} />

      <h2 className="font-heading text-xl font-semibold">Radio API</h2>
      <p className="text-sm text-muted-foreground">
        Radio 接受{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
          RadioPrimitive.Root.Props
        </code>{" "}
        的全部属性，以下为常用属性：
      </p>
      <PropsTable data={radioPropsData} />
    </div>
  );
}
