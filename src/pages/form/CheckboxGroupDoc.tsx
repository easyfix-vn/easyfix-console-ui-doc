import { useState } from "react";
import { CheckboxGroup, CheckboxGroupItem } from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { ExternalDocLink } from "@/components/ExternalDocLink";
import { PropsTable } from "@/components/PropsTable";
import { ComponentDocPage } from "@/components/ComponentDocPage";

const propsData = [
  {
    name: "value",
    type: "string[]",
    description: "受控模式下当前选中的值数组",
  },
  {
    name: "defaultValue",
    type: "string[]",
    description: "默认选中的值数组（非受控）",
  },
  {
    name: "onValueChange",
    type: "(value: string[], event: Event) => void",
    description: "选中值变化时的回调",
  },
  {
    name: "allValues",
    type: "string[]",
    description: "所有可选值的数组，用于全选/反选逻辑",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用整个复选组",
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

const itemPropsData = [
  {
    name: "value",
    type: "string",
    description: "复选项值",
  },
  {
    name: "name",
    type: "string",
    description: "表单字段名",
  },
  {
    name: "checked",
    type: "boolean | \"indeterminate\"",
    description: "受控选中状态",
  },
  {
    name: "defaultChecked",
    type: "boolean | \"indeterminate\"",
    description: "默认选中状态",
  },
  {
    name: "onCheckedChange",
    type: "(checked: boolean | \"indeterminate\", event: Event) => void",
    description: "选中状态变化时回调",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用当前复选项",
  },
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
];

function BasicDemo() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <div>
      <CheckboxGroup value={value} onValueChange={setValue}>
        <label className="flex items-center gap-2 text-sm">
          <CheckboxGroupItem name="fruits" value="apple" />
          <span>苹果</span>
        </label>
        <label className="flex items-center gap-2 text-sm">
          <CheckboxGroupItem name="fruits" value="banana" />
          <span>香蕉</span>
        </label>
        <label className="flex items-center gap-2 text-sm">
          <CheckboxGroupItem name="fruits" value="orange" />
          <span>橙子</span>
        </label>
      </CheckboxGroup>
      <p className="mt-3 text-xs text-muted-foreground">
        当前选中: {value.length > 0 ? value.join(", ") : "无"}
      </p>
    </div>
  );
}

function DefaultValueDemo() {
  return (
    <CheckboxGroup defaultValue={["reading", "coding"]}>
      <label className="flex items-center gap-2 text-sm">
        <CheckboxGroupItem name="hobbies" value="reading" />
        <span>阅读</span>
      </label>
      <label className="flex items-center gap-2 text-sm">
        <CheckboxGroupItem name="hobbies" value="coding" />
        <span>编程</span>
      </label>
      <label className="flex items-center gap-2 text-sm">
        <CheckboxGroupItem name="hobbies" value="gaming" />
        <span>游戏</span>
      </label>
    </CheckboxGroup>
  );
}

export default function CheckboxGroupDoc() {
  return (
    <ComponentDocPage>
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">
          CheckboxGroup 复选组
        </h1>
        <p className="mt-2 text-muted-foreground">
          基于{" "}
          <ExternalDocLink
            href="https://base-ui.com/react/components/checkbox-group"
            label="Base UI Checkbox Group 官方文档"
          >
            @base-ui/react/checkbox-group
          </ExternalDocLink>{" "}
          的复选框组容器，统一管理多个 CheckboxGroupItem 的选中状态。
        </p>
      </div>

      <ComponentDemo
        title="基础复选组"
        description="使用 CheckboxGroup 统一管理多个复选项的选中值"
        code={`import { useState } from "react";
import { CheckboxGroup, CheckboxGroupItem } from "@easyfix/console-ui";

const [value, setValue] = useState<string[]>([]);

<CheckboxGroup value={value} onValueChange={setValue}>
  <label className="flex items-center gap-2">
    <CheckboxGroupItem name="fruits" value="apple" />
    <span>苹果</span>
  </label>
  <label className="flex items-center gap-2">
    <CheckboxGroupItem name="fruits" value="banana" />
    <span>香蕉</span>
  </label>
  <label className="flex items-center gap-2">
    <CheckboxGroupItem name="fruits" value="orange" />
    <span>橙子</span>
  </label>
</CheckboxGroup>`}
      >
        <BasicDemo />
      </ComponentDemo>

      <ComponentDemo
        title="水平排列"
        description="设置 orientation=horizontal 让复选项横向排列，空间不足时自动换行"
        code={`<CheckboxGroup orientation="horizontal" defaultValue={["reading"]}>
  <label className="flex items-center gap-2"><CheckboxGroupItem value="reading" /><span>阅读</span></label>
  <label className="flex items-center gap-2"><CheckboxGroupItem value="coding" /><span>编程</span></label>
  <label className="flex items-center gap-2"><CheckboxGroupItem value="gaming" /><span>游戏</span></label>
</CheckboxGroup>`}
      >
        <CheckboxGroup orientation="horizontal" defaultValue={["reading"]}>
          <label className="flex items-center gap-2 text-sm">
            <CheckboxGroupItem value="reading" />
            <span>阅读</span>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <CheckboxGroupItem value="coding" />
            <span>编程</span>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <CheckboxGroupItem value="gaming" />
            <span>游戏</span>
          </label>
        </CheckboxGroup>
      </ComponentDemo>

      <ComponentDemo
        title="默认选中"
        description="通过 defaultValue 设置初始选中项"
        code={`import { CheckboxGroup, CheckboxGroupItem } from "@easyfix/console-ui";

<CheckboxGroup defaultValue={["reading", "coding"]}>
  <label className="flex items-center gap-2">
    <CheckboxGroupItem name="hobbies" value="reading" />
    <span>阅读</span>
  </label>
  <label className="flex items-center gap-2">
    <CheckboxGroupItem name="hobbies" value="coding" />
    <span>编程</span>
  </label>
  <label className="flex items-center gap-2">
    <CheckboxGroupItem name="hobbies" value="gaming" />
    <span>游戏</span>
  </label>
</CheckboxGroup>`}
      >
        <DefaultValueDemo />
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">API</h2>
      <PropsTable data={propsData} />

      <h2 className="font-heading text-xl font-semibold">
        CheckboxGroupItem API
      </h2>
      <PropsTable data={itemPropsData} />
    </div>
    </ComponentDocPage>
  );
}
