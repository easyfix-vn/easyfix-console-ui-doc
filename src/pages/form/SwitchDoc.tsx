import { useState } from "react";
import { Switch } from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";
import { ComponentDocPage } from "@/components/ComponentDocPage";

function BasicDemo() {
  const [checked, setChecked] = useState(false);
  return <Switch checked={checked} onCheckedChange={setChecked} />;
}

function LabelDemo() {
  const [checked, setChecked] = useState(false);
  return (
    <label className="inline-flex items-center gap-2" data-slot="label">
      <Switch checked={checked} onCheckedChange={setChecked} />
      <span className="text-sm">接收通知</span>
    </label>
  );
}

const propsData = [
  {
    name: "checked",
    type: "boolean",
    description: "受控模式下开关是否选中",
  },
  {
    name: "defaultChecked",
    type: "boolean",
    default: "false",
    description: "非受控模式下的默认选中状态",
  },
  {
    name: "onCheckedChange",
    type: "(checked: boolean) => void",
    description: "选中状态变化时的回调",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用开关",
  },
  {
    name: "name",
    type: "string",
    description: "表单字段名",
  },
  {
    name: "className",
    type: "string",
    description: "自定义样式类名，会通过 cn() 与默认样式合并",
  },
];

export default function SwitchDoc() {
  return (
    <ComponentDocPage>
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">Switch 开关</h1>
        <p className="mt-2 text-muted-foreground">
          开关选择器，基于{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            @base-ui/react/switch
          </code>{" "}
          封装，用于切换单个选项的开启/关闭状态。
        </p>
      </div>

      <ComponentDemo
        title="基础开关"
        description="最简单的开关用法，受控模式。"
        code={`import { Switch } from "@easyfix/console-ui";

const [checked, setChecked] = useState(false);

<Switch checked={checked} onCheckedChange={setChecked} />`}
      >
        <BasicDemo />
      </ComponentDemo>

      <ComponentDemo
        title="默认选中"
        description="通过 defaultChecked 设置默认选中状态（非受控模式）。"
        code={`<Switch defaultChecked />`}
      >
        <Switch defaultChecked />
      </ComponentDemo>

      <ComponentDemo
        title="禁用状态"
        description="disabled 禁用开关。"
        code={`<Switch disabled />
<Switch disabled defaultChecked />`}
      >
        <div className="flex items-center gap-4">
          <Switch disabled />
          <Switch disabled defaultChecked />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="带标签"
        description="label 与开关关联后可同步切换状态。"
        code={`<label className="inline-flex items-center gap-2" data-slot="label">
  <Switch checked={checked} onCheckedChange={setChecked} />
  <span className="text-sm">接收通知</span>
</label>`}
      >
        <LabelDemo />
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">API</h2>
      <p className="text-sm text-muted-foreground">
        Switch 接受{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
          SwitchPrimitive.Root.Props
        </code>{" "}
        的全部属性，以下为常用属性：
      </p>
      <PropsTable data={propsData} />
    </div>
    </ComponentDocPage>
  );
}
