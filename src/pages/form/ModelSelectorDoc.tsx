import { useState } from "react";
import {
  Button,
  EasyModelSelector,
  EASY_MODEL_SELECTOR_OPTIONS,
  type EasyModelSelectorOption,
  type EasyModelSelectorValue,
} from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";
import { ComponentDocPage } from "@/components/ComponentDocPage";

const customOptions: EasyModelSelectorOption[] = [
  {
    value: "fast",
    label: "Fast",
    description: "低延迟，适合日常问答",
    color: "#14b8a6",
  },
  {
    value: "balanced",
    label: "Balanced",
    description: "能力和成本均衡",
    color: "#3b82f6",
  },
  {
    value: "reasoning",
    label: "Reasoning",
    description: "复杂推理、长链路分析",
    color: "#8b5cf6",
  },
];

const propsData = [
  { name: "value", type: "EasyModelSelectorValue", description: "当前选中的档位值（受控）" },
  { name: "defaultValue", type: "EasyModelSelectorValue", default: '"medium"', description: "默认档位值（非受控）" },
  { name: "onValueChange", type: "(value, option, index) => void", description: "档位变化回调" },
  { name: "modelName", type: "ReactNode", default: '"GPT-5.4"', description: "触发器和弹层中展示的模型名称" },
  { name: "options", type: "EasyModelSelectorOption[]", default: "Light / Medium / High / Extra High / Ultra", description: "自定义档位列表" },
  { name: "size", type: '"sm" | "default" | "lg"', default: '"default"', description: "控件尺寸" },
  { name: "placeholder", type: "ReactNode", default: '"选择模型能力"', description: "未匹配到选项时的占位内容" },
  { name: "disabled", type: "boolean", default: "false", description: "是否禁用" },
  { name: "align", type: '"start" | "center" | "end"', default: '"start"', description: "弹层对齐方式" },
  { name: "className", type: "string", description: "容器额外类名" },
];

const optionPropsData = [
  { name: "value", type: "EasyModelSelectorValue", description: "档位唯一值" },
  { name: "label", type: "ReactNode", description: "档位标题" },
  { name: "description", type: "ReactNode", description: "档位说明" },
  { name: "color", type: "string", description: "档位强调色，支持任意 CSS color" },
  { name: "disabled", type: "boolean", description: "是否禁用该档位" },
];

function BasicDemo() {
  return (
    <div className="w-full max-w-sm">
      <EasyModelSelector modelName="GPT-5.4" />
    </div>
  );
}

function ControlledDemo() {
  const [value, setValue] = useState<EasyModelSelectorValue>("high");

  return (
    <div className="w-full max-w-sm space-y-3">
      <EasyModelSelector
        value={value}
        onValueChange={setValue}
        modelName="Easyfix Assistant"
      />
      <div className="flex flex-wrap gap-2">
        {EASY_MODEL_SELECTOR_OPTIONS.map((option) => (
          <Button
            key={option.value}
            onClick={() => setValue(option.value)}
            size="sm"
            variant={value === option.value ? "default" : "outline"}
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

function CustomOptionsDemo() {
  const [value, setValue] = useState<EasyModelSelectorValue>("balanced");

  return (
    <div className="w-full max-w-sm">
      <EasyModelSelector
        value={value}
        onValueChange={setValue}
        modelName="Routing Policy"
        options={customOptions}
      />
    </div>
  );
}

function SizeDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <EasyModelSelector size="sm" modelName="Small" />
      <EasyModelSelector modelName="Default" />
      <EasyModelSelector size="lg" modelName="Large" />
    </div>
  );
}

export default function ModelSelectorDoc() {
  return (
    <ComponentDocPage>
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">
          ModelSelector 模型选择器
        </h1>
        <p className="mt-2 text-muted-foreground">
          模型能力档位选择器，支持滑杆、键盘调节和自定义能力档位。
        </p>
      </div>

      <ComponentDemo
        title="默认档位"
        description="默认内置 Light、Medium、High、Extra High、Ultra 五档能力"
        code={`import { EasyModelSelector } from "@easyfix/console-ui";

<EasyModelSelector modelName="GPT-5.4" />`}
      >
        <BasicDemo />
      </ComponentDemo>

      <ComponentDemo
        title="受控状态"
        description="value 作为单一数据源；外部按钮和组件内部选择会保持同步"
        code={`const [value, setValue] = useState("high");

<EasyModelSelector
  value={value}
  onValueChange={setValue}
  modelName="Easyfix Assistant"
/>
{EASY_MODEL_SELECTOR_OPTIONS.map((option) => (
  <Button
    key={option.value}
    onClick={() => setValue(option.value)}
    size="sm"
    variant={value === option.value ? "default" : "outline"}
  >
    {option.label}
  </Button>
))}`}
      >
        <ControlledDemo />
      </ComponentDemo>

      <ComponentDemo
        title="自定义档位"
        description="options 可用于业务模型、路由策略或推理强度的自定义命名"
        code={`const customOptions = [
  { value: "fast", label: "Fast", description: "低延迟", color: "#14b8a6" },
  { value: "balanced", label: "Balanced", description: "均衡", color: "#3b82f6" },
  { value: "reasoning", label: "Reasoning", description: "复杂推理", color: "#8b5cf6" },
];

<EasyModelSelector
  value={value}
  onValueChange={setValue}
  modelName="Routing Policy"
  options={customOptions}
/>`}
      >
        <CustomOptionsDemo />
      </ComponentDemo>

      <ComponentDemo
        title="不同尺寸"
        description="提供 sm、default、lg 三种尺寸"
        code={`<EasyModelSelector size="sm" modelName="Small" />
<EasyModelSelector modelName="Default" />
<EasyModelSelector size="lg" modelName="Large" />`}
      >
        <SizeDemo />
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">
        EasyModelSelector API
      </h2>
      <PropsTable data={propsData} />

      <h2 className="font-heading text-xl font-semibold">
        EasyModelSelectorOption
      </h2>
      <PropsTable data={optionPropsData} />
    </div>
    </ComponentDocPage>
  );
}
