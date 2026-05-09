import { StepItem, Steps } from "@easyfix/console-ui";
import { useState } from "react";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

function BasicSteps() {
  const [current, setCurrent] = useState(1);
  return (
    <div className="space-y-4">
      <Steps current={current}>
        <StepItem title="账户信息" description="填写基本信息" />
        <StepItem title="验证邮箱" description="邮箱验证码确认" />
        <StepItem title="完成注册" />
      </Steps>
      <div className="flex gap-2">
        <button
          type="button"
          className="rounded-md border px-3 py-1 text-sm disabled:opacity-50"
          onClick={() => setCurrent((v) => Math.max(0, v - 1))}
          disabled={current === 0}
        >
          上一步
        </button>
        <button
          type="button"
          className="rounded-md border px-3 py-1 text-sm disabled:opacity-50"
          onClick={() => setCurrent((v) => Math.min(2, v + 1))}
          disabled={current === 2}
        >
          下一步
        </button>
      </div>
    </div>
  );
}

function VerticalSteps() {
  return (
    <Steps current={1} direction="vertical">
      <StepItem title="创建任务" description="配置基本信息和目标" />
      <StepItem title="分配资源" description="选择负责人与截止日期" />
      <StepItem title="审核发布" description="等待审核通过后发布" />
      <StepItem title="监控运行" />
    </Steps>
  );
}

function StatusSteps() {
  return (
    <Steps current={1} statuses={["completed", "error", "upcoming"]}>
      <StepItem title="数据上传" description="文件已上传" />
      <StepItem title="数据校验" description="格式错误，请检查" />
      <StepItem title="数据处理" />
    </Steps>
  );
}

const stepsProps = [
  {
    name: "current",
    type: "number",
    default: "0",
    description: "当前激活步骤的 0-based 索引",
  },
  {
    name: "direction",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: "布局方向",
  },
  {
    name: "statuses",
    type: "StepStatus[]",
    description: "可选，每个步骤的状态覆盖数组，优先级高于 current 推导",
  },
];

const itemProps = [
  { name: "title", type: "ReactNode", description: "步骤标题" },
  {
    name: "description",
    type: "ReactNode",
    description: "步骤描述（可选）",
  },
  {
    name: "icon",
    type: "ReactNode",
    description: "自定义步骤图标（可选，默认显示序号）",
  },
  {
    name: "status",
    type: '"upcoming" | "active" | "completed" | "error"',
    description: "显式状态覆盖（优先级最高）",
  },
];

export default function StepsDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">Steps 步骤条</h1>
        <p className="mt-2 text-muted-foreground">
          用于展示多步流程中的进度和状态，支持水平/垂直布局以及自定义步骤状态。
        </p>
      </div>

      <ComponentDemo
        title="基础用法"
        description="水平步骤条，通过 current 控制当前激活步骤"
        code={`import { Steps, StepItem } from "@easyfix/console-ui";

<Steps current={1}>
  <StepItem title="账户信息" description="填写基本信息" />
  <StepItem title="验证邮箱" description="邮箱验证码确认" />
  <StepItem title="完成注册" />
</Steps>`}
      >
        <BasicSteps />
      </ComponentDemo>

      <ComponentDemo
        title="垂直布局"
        description="direction='vertical'，适合侧边栏或详情页中展示流程步骤"
        code={`<Steps current={1} direction="vertical">
  <StepItem title="创建任务" description="配置基本信息和目标" />
  <StepItem title="分配资源" description="选择负责人与截止日期" />
  <StepItem title="审核发布" />
  <StepItem title="监控运行" />
</Steps>`}
      >
        <VerticalSteps />
      </ComponentDemo>

      <ComponentDemo
        title="自定义状态"
        description="通过 statuses 数组覆盖各步骤状态，支持 completed / active / upcoming / error"
        code={`<Steps current={1} statuses={["completed", "error", "upcoming"]}>
  <StepItem title="数据上传" description="文件已上传" />
  <StepItem title="数据校验" description="格式错误，请检查" />
  <StepItem title="数据处理" />
</Steps>`}
      >
        <StatusSteps />
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">API</h2>
        <h3 className="mb-3 text-lg font-medium">Steps</h3>
        <PropsTable data={stepsProps} />
        <h3 className="mb-3 mt-6 text-lg font-medium">StepItem</h3>
        <PropsTable data={itemProps} />
      </div>
    </div>
  );
}
