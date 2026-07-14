import { useState } from "react";
import { Slider, SliderValue } from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";
import { ComponentDocPage } from "@/components/ComponentDocPage";

function BasicDemo() {
  const [value, setValue] = useState(30);
  return (
    <div className="w-full max-w-xs">
      <Slider
        value={value}
        onValueChange={(nextValue) => {
          if (typeof nextValue === "number") {
            setValue(nextValue);
          }
        }}
      >
        <SliderValue />
      </Slider>
    </div>
  );
}

function RangeDemo() {
  const [value, setValue] = useState<readonly number[]>([20, 80]);
  return (
    <div className="w-full max-w-xs">
      <Slider
        value={value}
        onValueChange={(nextValue) => {
          if (Array.isArray(nextValue)) {
            setValue(nextValue);
          }
        }}
      >
        <SliderValue />
      </Slider>
    </div>
  );
}

const sliderPropsData = [
  {
    name: "value",
    type: "number | number[]",
    description: "受控模式下的当前值，传入数组时为范围滑块",
  },
  {
    name: "defaultValue",
    type: "number | number[]",
    description: "非受控模式下的默认值",
  },
  {
    name: "onValueChange",
    type: "(value: number | number[]) => void",
    description: "值变化时的回调",
  },
  {
    name: "min",
    type: "number",
    default: "0",
    description: "最小值",
  },
  {
    name: "max",
    type: "number",
    default: "100",
    description: "最大值",
  },
  {
    name: "step",
    type: "number",
    default: "1",
    description: "步长",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用滑块",
  },
  {
    name: "orientation",
    type: "'horizontal' | 'vertical'",
    default: "'horizontal'",
    description: "滑块方向",
  },
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
];

export default function SliderDoc() {
  return (
    <ComponentDocPage>
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">Slider 滑块</h1>
        <p className="mt-2 text-muted-foreground">
          滑块输入组件，基于{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            @base-ui/react/slider
          </code>{" "}
          封装，用于在数值范围内进行选择。
        </p>
      </div>

      <ComponentDemo
        title="基础滑块"
        description="受控模式的基础滑块，配合 SliderValue 展示当前数值。"
        code={`import { Slider, SliderValue } from "@easyfix/console-ui";

const [value, setValue] = useState(30);

<Slider
  value={value}
  onValueChange={(nextValue) => {
    if (typeof nextValue === "number") setValue(nextValue);
  }}
>
  <SliderValue />
</Slider>`}
      >
        <BasicDemo />
      </ComponentDemo>

      <ComponentDemo
        title="默认值"
        description="通过 defaultValue 设置非受控模式下的初始值。"
        code={`<Slider defaultValue={50} />`}
      >
        <div className="w-full max-w-xs">
          <Slider defaultValue={50} />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="范围滑块"
        description="数组形式的 value 或 defaultValue 启用范围模式。"
        code={`const [value, setValue] = useState<readonly number[]>([20, 80]);

<Slider
  value={value}
  onValueChange={(nextValue) => {
    if (Array.isArray(nextValue)) setValue(nextValue);
  }}
>
  <SliderValue />
</Slider>`}
      >
        <RangeDemo />
      </ComponentDemo>

      <ComponentDemo
        title="禁用状态"
        description="disabled 禁用滑块。"
        code={`<Slider defaultValue={40} disabled />`}
      >
        <div className="w-full max-w-xs">
          <Slider defaultValue={40} disabled />
        </div>
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">API</h2>
      <p className="text-sm text-muted-foreground">
        Slider 接受{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
          SliderPrimitive.Root.Props
        </code>{" "}
        的全部属性，以下为常用属性：
      </p>
      <PropsTable data={sliderPropsData} />
    </div>
    </ComponentDocPage>
  );
}
