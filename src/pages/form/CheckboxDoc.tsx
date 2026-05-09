import { Checkbox } from "@easyfix/console-ui";

import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

const propsData = [
  {
    name: "checked",
    type: "boolean | 'mixed'",
    description: "受控模式下的选中状态",
  },
  {
    name: "defaultChecked",
    type: "boolean",
    default: "false",
    description: "默认是否选中（非受控）",
  },
  {
    name: "onCheckedChange",
    type: "(checked: boolean, event: Event) => void",
    description: "选中状态变化回调",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用",
  },
  {
    name: "indeterminate",
    type: "boolean",
    default: "false",
    description: "是否为不确定状态（半选）",
  },
  {
    name: "name",
    type: "string",
    description: "表单字段名称",
  },
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
];

export default function CheckboxDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">Checkbox 复选框</h1>
        <p className="mt-2 text-muted-foreground">
          基于{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            @base-ui/react/checkbox
          </code>{" "}
          的复选框组件，内含选中指示器 SVG，支持选中、未选中和不确定三种状态。
        </p>
      </div>

      <ComponentDemo
        title="基础复选框"
        description="配合 label 使用的基础复选框"
        code={`import { Checkbox } from "@easyfix/console-ui";

<label className="flex items-center gap-2">
  <Checkbox />
  <span>同意服务条款</span>
</label>`}
      >
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-2 text-sm">
            <Checkbox />
            <span>同意服务条款</span>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Checkbox />
            <span>订阅邮件通知</span>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Checkbox />
            <span>记住我的选择</span>
          </label>
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="默认选中"
        description="通过 defaultChecked 设置默认选中状态"
        code={`<label className="flex items-center gap-2">
  <Checkbox defaultChecked />
  <span>已默认选中</span>
</label>`}
      >
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-2 text-sm">
            <Checkbox defaultChecked />
            <span>已默认选中</span>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Checkbox />
            <span>未选中</span>
          </label>
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="禁用状态"
        description="设置 disabled 属性禁用复选框"
        code={`<label className="flex items-center gap-2">
  <Checkbox disabled />
  <span>禁用未选中</span>
</label>
<label className="flex items-center gap-2">
  <Checkbox disabled defaultChecked />
  <span>禁用已选中</span>
</label>`}
      >
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-2 text-sm text-muted-foreground">
            <Checkbox disabled />
            <span>禁用未选中</span>
          </label>
          <label className="flex items-center gap-2 text-sm text-muted-foreground">
            <Checkbox disabled defaultChecked />
            <span>禁用已选中</span>
          </label>
        </div>
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">Checkbox API</h2>
      <PropsTable data={propsData} />
    </div>
  );
}
