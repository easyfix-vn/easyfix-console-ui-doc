import { useState } from "react";
import { CheckboxCards, CheckboxCardItem } from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

function BasicCheckboxCards() {
  const [value, setValue] = useState<string[]>(["monitor"]);
  return (
    <CheckboxCards value={value} onValueChange={setValue}>
      <CheckboxCardItem value="monitor" title="系统监控" />
      <CheckboxCardItem value="log" title="日志分析" />
      <CheckboxCardItem value="alert" title="告警管理" />
    </CheckboxCards>
  );
}

function DescriptionCheckboxCards() {
  const [value, setValue] = useState<string[]>(["read"]);
  return (
    <CheckboxCards value={value} onValueChange={setValue}>
      <CheckboxCardItem
        value="read"
        title="读取权限"
        description="允许查看资源和数据"
      />
      <CheckboxCardItem
        value="write"
        title="写入权限"
        description="允许创建和修改资源"
      />
      <CheckboxCardItem
        value="admin"
        title="管理权限"
        description="允许管理用户和系统配置"
      />
    </CheckboxCards>
  );
}

function DisabledCheckboxCards() {
  const [value, setValue] = useState<string[]>(["a"]);
  return (
    <CheckboxCards value={value} onValueChange={setValue}>
      <CheckboxCardItem value="a" title="可选项 A" />
      <CheckboxCardItem value="b" title="禁用项 B" disabled />
      <CheckboxCardItem value="c" title="可选项 C" />
    </CheckboxCards>
  );
}

const checkboxCardsPropsData = [
  { name: "value", type: "string[]", description: "当前选中值数组（受控）" },
  { name: "defaultValue", type: "string[]", description: "默认选中值数组（非受控）" },
  { name: "onValueChange", type: "(value: string[]) => void", description: "选中值变化回调" },
  { name: "allValues", type: "string[]", description: "所有可选值，用于全选逻辑" },
  { name: "className", type: "string", description: "自定义样式类名" },
];

const checkboxCardItemPropsData = [
  { name: "value", type: "string", description: "选项值" },
  { name: "title", type: "ReactNode", description: "卡片标题" },
  { name: "description", type: "ReactNode", description: "卡片描述文字" },
  { name: "disabled", type: "boolean", default: "false", description: "是否禁用" },
];

export default function CheckboxCardsDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">CheckboxCards 复选卡片</h1>
        <p className="mt-2 text-muted-foreground">
          以卡片形式展示的复选组，支持多选，适用于需要突出展示的多选场景。
        </p>
      </div>

      <ComponentDemo
        title="基础用法"
        description="基本的卡片复选组，支持多选"
        code={`import { CheckboxCards, CheckboxCardItem } from "@easyfix/console-ui";

const [value, setValue] = useState<string[]>(["monitor"]);

<CheckboxCards value={value} onValueChange={setValue}>
  <CheckboxCardItem value="monitor" title="系统监控" />
  <CheckboxCardItem value="log" title="日志分析" />
  <CheckboxCardItem value="alert" title="告警管理" />
</CheckboxCards>`}
      >
        <BasicCheckboxCards />
      </ComponentDemo>

      <ComponentDemo
        title="带描述文字"
        description="通过 description 属性添加详细说明"
        code={`<CheckboxCards value={value} onValueChange={setValue}>
  <CheckboxCardItem
    value="read"
    title="读取权限"
    description="允许查看资源和数据"
  />
  <CheckboxCardItem
    value="write"
    title="写入权限"
    description="允许创建和修改资源"
  />
  <CheckboxCardItem
    value="admin"
    title="管理权限"
    description="允许管理用户和系统配置"
  />
</CheckboxCards>`}
      >
        <DescriptionCheckboxCards />
      </ComponentDemo>

      <ComponentDemo
        title="禁用选项"
        description="单个选项可设置 disabled 禁用"
        code={`<CheckboxCards value={value} onValueChange={setValue}>
  <CheckboxCardItem value="a" title="可选项 A" />
  <CheckboxCardItem value="b" title="禁用项 B" disabled />
  <CheckboxCardItem value="c" title="可选项 C" />
</CheckboxCards>`}
      >
        <DisabledCheckboxCards />
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">CheckboxCards API</h2>
      <PropsTable data={checkboxCardsPropsData} />

      <h2 className="font-heading text-xl font-semibold">CheckboxCardItem API</h2>
      <PropsTable data={checkboxCardItemPropsData} />
    </div>
  );
}
