import { useState, useEffect } from "react";
import {
  Progress,
  ProgressLabel,
  ProgressTrack,
  ProgressIndicator,
  ProgressValue,
} from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

function BasicDemo() {
  return <Progress value={45} />;
}

function LabelDemo() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue((prev) => (prev >= 100 ? 0 : prev + 5));
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <Progress value={value}>
      <div className="flex items-center justify-between">
        <ProgressLabel>上传进度</ProgressLabel>
        <ProgressValue />
      </div>
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </Progress>
  );
}

function StatusDemo() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="space-y-1.5">
        <span className="text-sm font-medium">默认</span>
        <Progress value={60} />
      </div>
      <div className="space-y-1.5">
        <span className="text-sm font-medium">成功</span>
        <Progress value={100}>
          <ProgressTrack>
            <ProgressIndicator className="bg-green-500" />
          </ProgressTrack>
        </Progress>
      </div>
      <div className="space-y-1.5">
        <span className="text-sm font-medium">警告</span>
        <Progress value={75}>
          <ProgressTrack>
            <ProgressIndicator className="bg-yellow-500" />
          </ProgressTrack>
        </Progress>
      </div>
      <div className="space-y-1.5">
        <span className="text-sm font-medium">错误</span>
        <Progress value={35}>
          <ProgressTrack>
            <ProgressIndicator className="bg-destructive" />
          </ProgressTrack>
        </Progress>
      </div>
    </div>
  );
}

const propsData = [
  {
    name: "value",
    type: "number | null",
    description: "当前进度值，范围 0-100。传入 null 表示不确定进度",
  },
  {
    name: "min",
    type: "number",
    default: "0",
    description: "进度最小值",
  },
  {
    name: "max",
    type: "number",
    default: "100",
    description: "进度最大值",
  },
  {
    name: "children",
    type: "ReactNode",
    description:
      "自定义子元素。未传入时默认渲染 ProgressTrack + ProgressIndicator",
  },
  {
    name: "className",
    type: "string",
    description: "自定义样式类名，会通过 cn() 与默认样式合并",
  },
];

export default function ProgressDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">Progress 进度条</h1>
        <p className="mt-2 text-muted-foreground">
          展示操作进度，基于{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            @base-ui/react/progress
          </code>{" "}
          封装，支持自定义标签和多种状态样式。
        </p>
      </div>

      <ComponentDemo
        title="基础进度条"
        description="最简单的进度条用法。"
        code={`import { Progress } from "@easyfix/console-ui";

<Progress value={45} />`}
      >
        <BasicDemo />
      </ComponentDemo>

      <ComponentDemo
        title="带百分比标签"
        description="通过 ProgressLabel 和 ProgressValue 组合显示标签和百分比值。"
        code={`import {
  Progress, ProgressLabel, ProgressTrack,
  ProgressIndicator, ProgressValue,
} from "@easyfix/console-ui";

<Progress value={value}>
  <div className="flex items-center justify-between">
    <ProgressLabel>上传进度</ProgressLabel>
    <ProgressValue />
  </div>
  <ProgressTrack>
    <ProgressIndicator />
  </ProgressTrack>
</Progress>`}
      >
        <LabelDemo />
      </ComponentDemo>

      <ComponentDemo
        title="不同状态"
        description="通过自定义 ProgressIndicator 的 className 实现不同状态的颜色。"
        code={`<Progress value={100}>
  <ProgressTrack>
    <ProgressIndicator className="bg-green-500" />
  </ProgressTrack>
</Progress>

<Progress value={75}>
  <ProgressTrack>
    <ProgressIndicator className="bg-yellow-500" />
  </ProgressTrack>
</Progress>

<Progress value={35}>
  <ProgressTrack>
    <ProgressIndicator className="bg-destructive" />
  </ProgressTrack>
</Progress>`}
      >
        <StatusDemo />
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">API</h2>
      <p className="text-sm text-muted-foreground">
        Progress 接受{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
          ProgressPrimitive.Root.Props
        </code>{" "}
        的全部属性，以下为常用属性：
      </p>
      <PropsTable data={propsData} />
    </div>
  );
}
