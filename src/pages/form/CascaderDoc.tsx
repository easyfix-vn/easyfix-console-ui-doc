import { useState } from "react";
import { Cascader, type CascaderOption } from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

const regionOptions: CascaderOption[] = [
  {
    value: "china",
    label: "中国",
    children: [
      {
        value: "guangdong",
        label: "广东",
        children: [
          { value: "guangzhou", label: "广州" },
          { value: "shenzhen", label: "深圳" },
        ],
      },
      {
        value: "zhejiang",
        label: "浙江",
        children: [
          { value: "hangzhou", label: "杭州" },
          { value: "ningbo", label: "宁波" },
        ],
      },
    ],
  },
  {
    value: "vietnam",
    label: "越南",
    children: [
      {
        value: "hanoi",
        label: "河内",
        children: [
          { value: "hoan-kiem", label: "还剑郡" },
          { value: "cau-giay", label: "纸桥郡" },
        ],
      },
      {
        value: "hcmc",
        label: "胡志明市",
        children: [
          { value: "district-1", label: "第一区" },
          { value: "district-7", label: "第七区" },
        ],
      },
    ],
  },
];

const propsData = [
  { name: "options", type: "CascaderOption[]", description: "级联选项树" },
  { name: "value", type: "string[]", description: "当前选中路径（受控）" },
  { name: "defaultValue", type: "string[]", description: "默认选中路径（非受控）" },
  { name: "onValueChange", type: "(value, selectedOptions) => void", description: "选中路径变化回调，同时返回选中节点对象数组" },
  { name: "placeholder", type: "string", default: '"请选择"', description: "未选择时的占位文本" },
  { name: "separator", type: "ReactNode", default: '"/"', description: "回显路径分隔符" },
  { name: "changeOnSelect", type: "boolean", default: "false", description: "是否允许选择非叶子节点时立即触发变更" },
  { name: "size", type: '"sm" | "default" | "lg"', default: '"default"', description: "触发器尺寸" },
  { name: "disabled", type: "boolean", default: "false", description: "是否禁用" },
  { name: "className", type: "string", description: "自定义样式类名" },
];

function BasicDemo() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <div className="w-80 space-y-3">
      <Cascader
        value={value}
        onValueChange={setValue}
        options={regionOptions}
        placeholder="选择区域"
      />
      <p className="text-xs text-muted-foreground">
        当前 value：{value.length > 0 ? value.join(" / ") : "无"}
      </p>
    </div>
  );
}

function ChangeOnSelectDemo() {
  const [value, setValue] = useState<string[]>(["china", "guangdong"]);

  return (
    <div className="w-80">
      <Cascader
        value={value}
        onValueChange={setValue}
        options={regionOptions}
        changeOnSelect
        placeholder="选择到任意层级"
      />
    </div>
  );
}

export default function CascaderDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">
          Cascader 级联选择
        </h1>
        <p className="mt-2 text-muted-foreground">
          用于从树形数据中逐级选择路径，适合区域、组织、分类等层级数据。
        </p>
      </div>

      <ComponentDemo
        title="基础用法"
        description="按列展开层级，选择叶子节点后关闭弹层"
        code={`const options = [
  {
    value: "china",
    label: "中国",
    children: [
      {
        value: "guangdong",
        label: "广东",
        children: [{ value: "shenzhen", label: "深圳" }],
      },
    ],
  },
];

<Cascader
  value={value}
  onValueChange={setValue}
  options={options}
/>`}
      >
        <BasicDemo />
      </ComponentDemo>

      <ComponentDemo
        title="选择任意层级"
        description="changeOnSelect 开启后，点击非叶子节点也会立即触发 onValueChange"
        code={`<Cascader
  value={value}
  onValueChange={setValue}
  options={options}
  changeOnSelect
/>`}
      >
        <ChangeOnSelectDemo />
      </ComponentDemo>

      <ComponentDemo
        title="禁用状态"
        description="设置 disabled 禁用级联选择"
        code={`<Cascader disabled options={options} placeholder="不可选择" />`}
      >
        <div className="w-80">
          <Cascader
            disabled
            options={regionOptions}
            placeholder="不可选择"
          />
        </div>
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">
        Cascader API
      </h2>
      <PropsTable data={propsData} />
    </div>
  );
}
