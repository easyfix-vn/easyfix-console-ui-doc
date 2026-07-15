import { useState } from "react";
import {
  NumberField,
  NumberFieldGroup,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldScrubArea,
} from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { ExternalDocLink } from "@/components/ExternalDocLink";
import { PropsTable } from "@/components/PropsTable";
import { ComponentDocPage } from "@/components/ComponentDocPage";

function BasicDemo() {
  const [value, setValue] = useState<number | null>(0);
  return (
    <NumberField value={value} onValueChange={setValue}>
      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldGroup>
    </NumberField>
  );
}

function MinMaxDemo() {
  const [value, setValue] = useState<number | null>(5);
  return (
    <NumberField value={value} onValueChange={setValue} min={0} max={10}>
      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldGroup>
    </NumberField>
  );
}

function StepDemo() {
  const [value, setValue] = useState<number | null>(0);
  return (
    <NumberField value={value} onValueChange={setValue} step={5} min={0} max={100}>
      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldGroup>
    </NumberField>
  );
}

function ScrubAreaDemo() {
  const [value, setValue] = useState<number | null>(50);
  return (
    <NumberField value={value} onValueChange={setValue}>
      <NumberFieldScrubArea label="数量" />
      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldGroup>
    </NumberField>
  );
}

const numberFieldPropsData = [
  {
    name: "value",
    type: "number | null",
    description: "受控模式下的当前值",
  },
  {
    name: "defaultValue",
    type: "number",
    description: "非受控模式下的默认值",
  },
  {
    name: "onValueChange",
    type: "(value: number | null) => void",
    description: "值变化时的回调",
  },
  {
    name: "min",
    type: "number",
    description: "允许的最小值",
  },
  {
    name: "max",
    type: "number",
    description: "允许的最大值",
  },
  {
    name: "step",
    type: "number",
    default: "1",
    description: "每次增减的步长",
  },
  {
    name: "size",
    type: '"sm" | "default" | "lg"',
    default: '"default"',
    description: "输入框尺寸",
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

const scrubAreaPropsData = [
  {
    name: "label",
    type: "string",
    description: "标签文字，同时作为拖拽区域的可拖拽 Label 显示",
  },
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
];

export default function NumberFieldDoc() {
  return (
    <ComponentDocPage>
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">
          NumberField 数字输入框
        </h1>
        <p className="mt-2 text-muted-foreground">
          数字输入框组件，基于{" "}
          <ExternalDocLink
            href="https://base-ui.com/react/components/number-field"
            label="Base UI Number Field 官方文档"
          >
            @base-ui/react/number-field
          </ExternalDocLink>{" "}
          封装，提供数字输入及增减操作功能。
        </p>
      </div>

      <ComponentDemo
        title="基础数字输入"
        description="带有增减按钮的基础数字输入框。"
        code={`import {
  NumberField, NumberFieldGroup,
  NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput,
} from "@easyfix/console-ui";

const [value, setValue] = useState<number | null>(0);

<NumberField value={value} onValueChange={setValue}>
  <NumberFieldGroup>
    <NumberFieldDecrement />
    <NumberFieldInput />
    <NumberFieldIncrement />
  </NumberFieldGroup>
</NumberField>`}
      >
        <div className="w-48">
          <BasicDemo />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="最小最大值"
        description="min 与 max 限制输入范围。"
        code={`const [value, setValue] = useState<number | null>(5);

<NumberField value={value} onValueChange={setValue} min={0} max={10}>
  <NumberFieldGroup>
    <NumberFieldDecrement />
    <NumberFieldInput />
    <NumberFieldIncrement />
  </NumberFieldGroup>
</NumberField>`}
      >
        <div className="w-48">
          <MinMaxDemo />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="自定义步长"
        description="step 定义增减步长。"
        code={`const [value, setValue] = useState<number | null>(0);

<NumberField value={value} onValueChange={setValue} step={5} min={0} max={100}>
  <NumberFieldGroup>
    <NumberFieldDecrement />
    <NumberFieldInput />
    <NumberFieldIncrement />
  </NumberFieldGroup>
</NumberField>`}
      >
        <div className="w-48">
          <StepDemo />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="带标签的拖拽区域"
        description="使用 NumberFieldScrubArea 添加可拖拽调整数值的标签。"
        code={`import { NumberFieldScrubArea } from "@easyfix/console-ui";

const [value, setValue] = useState<number | null>(50);

<NumberField value={value} onValueChange={setValue}>
  <NumberFieldScrubArea label="数量" />
  <NumberFieldGroup>
    <NumberFieldDecrement />
    <NumberFieldInput />
    <NumberFieldIncrement />
  </NumberFieldGroup>
</NumberField>`}
      >
        <div className="w-48">
          <ScrubAreaDemo />
        </div>
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">API</h2>
        <h3 className="mb-3 text-lg font-medium">NumberField</h3>
        <PropsTable data={numberFieldPropsData} />
        <h3 className="mb-3 mt-6 text-lg font-medium">
          NumberFieldScrubArea
        </h3>
        <PropsTable data={scrubAreaPropsData} />
      </div>
    </div>
    </ComponentDocPage>
  );
}
