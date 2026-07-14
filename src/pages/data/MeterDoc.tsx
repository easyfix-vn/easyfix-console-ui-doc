import {
  Meter,
  MeterLabel,
  MeterTrack,
  MeterIndicator,
  MeterValue,
} from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";
import { ComponentDocPage } from "@/components/ComponentDocPage";

function BasicDemo() {
  return <Meter value={60} />;
}

function LabelDemo() {
  return (
    <div className="flex w-full flex-col gap-6">
      <Meter value={30}>
        <div className="flex items-center justify-between">
          <MeterLabel>CPU 使用率</MeterLabel>
          <MeterValue />
        </div>
        <MeterTrack>
          <MeterIndicator />
        </MeterTrack>
      </Meter>
      <Meter value={72}>
        <div className="flex items-center justify-between">
          <MeterLabel>内存使用率</MeterLabel>
          <MeterValue />
        </div>
        <MeterTrack>
          <MeterIndicator className="bg-yellow-500" />
        </MeterTrack>
      </Meter>
      <Meter value={92}>
        <div className="flex items-center justify-between">
          <MeterLabel>磁盘使用率</MeterLabel>
          <MeterValue />
        </div>
        <MeterTrack>
          <MeterIndicator className="bg-destructive" />
        </MeterTrack>
      </Meter>
    </div>
  );
}

function DifferentValuesDemo() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="space-y-1.5">
        <span className="text-sm font-medium">0%</span>
        <Meter value={0} />
      </div>
      <div className="space-y-1.5">
        <span className="text-sm font-medium">25%</span>
        <Meter value={25} />
      </div>
      <div className="space-y-1.5">
        <span className="text-sm font-medium">50%</span>
        <Meter value={50} />
      </div>
      <div className="space-y-1.5">
        <span className="text-sm font-medium">75%</span>
        <Meter value={75} />
      </div>
      <div className="space-y-1.5">
        <span className="text-sm font-medium">100%</span>
        <Meter value={100} />
      </div>
    </div>
  );
}

const propsData = [
  {
    name: "value",
    type: "number",
    description: "当前仪表盘值",
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
    name: "children",
    type: "ReactNode",
    description:
      "自定义子元素。未传入时默认渲染 MeterTrack + MeterIndicator",
  },
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
];

export default function MeterDoc() {
  return (
    <ComponentDocPage>
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">Meter 仪表盘</h1>
        <p className="mt-2 text-muted-foreground">
          用于展示某个度量值在已知范围内的当前状态，基于{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            @base-ui/react/meter
          </code>{" "}
          封装，支持标签、数值显示和自定义颜色。
        </p>
      </div>

      <ComponentDemo
        title="默认样式"
        description="value 定义当前仪表值。"
        code={`import { Meter } from "@easyfix/console-ui";

<Meter value={60} />`}
      >
        <BasicDemo />
      </ComponentDemo>

      <ComponentDemo
        title="带标签和不同状态"
        description="MeterLabel 与 MeterValue 显示标签和数值；MeterIndicator 定义状态颜色。"
        code={`import {
  Meter, MeterLabel, MeterTrack,
  MeterIndicator, MeterValue,
} from "@easyfix/console-ui";

<Meter value={30}>
  <div className="flex items-center justify-between">
    <MeterLabel>CPU 使用率</MeterLabel>
    <MeterValue />
  </div>
  <MeterTrack>
    <MeterIndicator />
  </MeterTrack>
</Meter>

<Meter value={92}>
  <div className="flex items-center justify-between">
    <MeterLabel>磁盘使用率</MeterLabel>
    <MeterValue />
  </div>
  <MeterTrack>
    <MeterIndicator className="bg-destructive" />
  </MeterTrack>
</Meter>`}
      >
        <LabelDemo />
      </ComponentDemo>

      <ComponentDemo
        title="不同值"
        description="不同数值的仪表呈现。"
        code={`<Meter value={0} />
<Meter value={25} />
<Meter value={50} />
<Meter value={75} />
<Meter value={100} />`}
      >
        <DifferentValuesDemo />
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">API</h2>
      <p className="text-sm text-muted-foreground">
        Meter 接受{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
          MeterPrimitive.Root.Props
        </code>{" "}
        的全部属性，以下为常用属性：
      </p>
      <PropsTable data={propsData} />
    </div>
    </ComponentDocPage>
  );
}
