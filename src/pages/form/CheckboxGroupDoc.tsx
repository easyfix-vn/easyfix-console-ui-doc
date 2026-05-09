import { useState } from "react";
import { Checkbox, CheckboxGroup } from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

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
          <Checkbox name="fruits" value="apple" />
          <span>苹果</span>
        </label>
        <label className="flex items-center gap-2 text-sm">
          <Checkbox name="fruits" value="banana" />
          <span>香蕉</span>
        </label>
        <label className="flex items-center gap-2 text-sm">
          <Checkbox name="fruits" value="orange" />
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
        <Checkbox name="hobbies" value="reading" />
        <span>阅读</span>
      </label>
      <label className="flex items-center gap-2 text-sm">
        <Checkbox name="hobbies" value="coding" />
        <span>编程</span>
      </label>
      <label className="flex items-center gap-2 text-sm">
        <Checkbox name="hobbies" value="gaming" />
        <span>游戏</span>
      </label>
    </CheckboxGroup>
  );
}

export default function CheckboxGroupDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">
          CheckboxGroup 复选组
        </h1>
        <p className="mt-2 text-muted-foreground">
          基于{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            @base-ui/react/checkbox-group
          </code>{" "}
          的复选框组容器，统一管理多个 Checkbox 的选中状态。
        </p>
      </div>

      <ComponentDemo
        title="基础复选组"
        description="使用 CheckboxGroup 统一管理多个 Checkbox 的选中值"
        code={`import { useState } from "react";
import { Checkbox, CheckboxGroup } from "@easyfix/console-ui";

const [value, setValue] = useState<string[]>([]);

<CheckboxGroup value={value} onValueChange={setValue}>
  <label className="flex items-center gap-2">
    <Checkbox name="fruits" value="apple" />
    <span>苹果</span>
  </label>
  <label className="flex items-center gap-2">
    <Checkbox name="fruits" value="banana" />
    <span>香蕉</span>
  </label>
  <label className="flex items-center gap-2">
    <Checkbox name="fruits" value="orange" />
    <span>橙子</span>
  </label>
</CheckboxGroup>`}
      >
        <BasicDemo />
      </ComponentDemo>

      <ComponentDemo
        title="默认选中"
        description="通过 defaultValue 设置初始选中项"
        code={`import { Checkbox, CheckboxGroup } from "@easyfix/console-ui";

<CheckboxGroup defaultValue={["reading", "coding"]}>
  <label className="flex items-center gap-2">
    <Checkbox name="hobbies" value="reading" />
    <span>阅读</span>
  </label>
  <label className="flex items-center gap-2">
    <Checkbox name="hobbies" value="coding" />
    <span>编程</span>
  </label>
  <label className="flex items-center gap-2">
    <Checkbox name="hobbies" value="gaming" />
    <span>游戏</span>
  </label>
</CheckboxGroup>`}
      >
        <DefaultValueDemo />
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">API</h2>
      <PropsTable data={propsData} />
    </div>
  );
}
