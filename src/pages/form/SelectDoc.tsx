import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectPopup,
  SelectItem,
  SelectGroup,
  SelectGroupLabel,
} from "@easyfix/console-ui";
import { InfoIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

const selectPropsData = [
  { name: "defaultValue", type: "any", description: "默认选中值（非受控）" },
  { name: "value", type: "any", description: "选中值（受控）" },
  { name: "onValueChange", type: "(value: any) => void", description: "值变化回调" },
  { name: "items", type: "Record<string, ReactNode> | Array<{value, label}>", description: "选项数据映射，用于在未打开弹窗时正确显示选中项标签（通常自动从子组件推断）" },
  { name: "disabled", type: "boolean", default: "false", description: "是否禁用" },
];

const selectItemPropsData = [
  { name: "value", type: "any", description: "选项值" },
  { name: "label", type: "string", description: "用于键盘导航匹配的文本（默认从 children 推断）" },
  { name: "disabled", type: "boolean", default: "false", description: "是否禁用该选项" },
  { name: "children", type: "ReactNode", description: "选项文本" },
];

export default function SelectDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">Select 选择器</h1>
        <p className="mt-2 text-muted-foreground">
          下拉选择组件，基于 Base UI Select 封装，支持单选、分组和自定义触发器。
        </p>
      </div>

      <ComponentDemo
        title="基础用法"
        description="基本的单选下拉选择器"
        code={`import {
  Select, SelectTrigger, SelectValue,
  SelectPopup, SelectItem,
} from "@easyfix/console-ui";

<Select defaultValue="apple">
  <SelectTrigger>
    <SelectValue placeholder="请选择水果" />
  </SelectTrigger>
  <SelectPopup>
    <SelectItem value="apple">苹果</SelectItem>
    <SelectItem value="banana">香蕉</SelectItem>
    <SelectItem value="orange">橙子</SelectItem>
  </SelectPopup>
</Select>`}
      >
        <Select defaultValue="apple">
          <SelectTrigger>
            <SelectValue placeholder="请选择水果" />
          </SelectTrigger>
          <SelectPopup>
            <SelectItem value="apple">苹果</SelectItem>
            <SelectItem value="banana">香蕉</SelectItem>
            <SelectItem value="orange">橙子</SelectItem>
          </SelectPopup>
        </Select>
      </ComponentDemo>

      <ComponentDemo
        title="分组选项"
        description="使用 SelectGroup 和 SelectGroupLabel 对选项进行分组"
        code={`<Select defaultValue="apple">
  <SelectTrigger>
    <SelectValue placeholder="请选择" />
  </SelectTrigger>
  <SelectPopup>
    <SelectGroup>
      <SelectGroupLabel>水果</SelectGroupLabel>
      <SelectItem value="apple">苹果</SelectItem>
      <SelectItem value="banana">香蕉</SelectItem>
    </SelectGroup>
    <SelectGroup>
      <SelectGroupLabel>蔬菜</SelectGroupLabel>
      <SelectItem value="carrot">胡萝卜</SelectItem>
      <SelectItem value="potato">土豆</SelectItem>
    </SelectGroup>
  </SelectPopup>
</Select>`}
      >
        <Select defaultValue="apple">
          <SelectTrigger>
            <SelectValue placeholder="请选择" />
          </SelectTrigger>
          <SelectPopup>
            <SelectGroup>
              <SelectGroupLabel>水果</SelectGroupLabel>
              <SelectItem value="apple">苹果</SelectItem>
              <SelectItem value="banana">香蕉</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectGroupLabel>蔬菜</SelectGroupLabel>
              <SelectItem value="carrot">胡萝卜</SelectItem>
              <SelectItem value="potato">土豆</SelectItem>
            </SelectGroup>
          </SelectPopup>
        </Select>
      </ComponentDemo>

      <ComponentDemo
        title="禁用状态"
        description="禁用整个选择器或单个选项"
        code={`<Select disabled>
  <SelectTrigger>
    <SelectValue placeholder="已禁用" />
  </SelectTrigger>
  <SelectPopup>
    <SelectItem value="a">选项 A</SelectItem>
  </SelectPopup>
</Select>`}
      >
        <div className="flex gap-4">
          <Select disabled>
            <SelectTrigger>
              <SelectValue placeholder="已禁用" />
            </SelectTrigger>
            <SelectPopup>
              <SelectItem value="a">选项 A</SelectItem>
            </SelectPopup>
          </Select>
          <Select defaultValue="a">
            <SelectTrigger>
              <SelectValue placeholder="请选择" />
            </SelectTrigger>
            <SelectPopup>
              <SelectItem value="a">可选项 A</SelectItem>
              <SelectItem value="b" disabled>禁用选项 B</SelectItem>
              <SelectItem value="c">可选项 C</SelectItem>
            </SelectPopup>
          </Select>
        </div>
      </ComponentDemo>

      <div className="flex items-start gap-3 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950/50">
        <InfoIcon className="mt-0.5 size-5 shrink-0 text-blue-600 dark:text-blue-400" />
        <div className="text-sm text-blue-800 dark:text-blue-200">
          <p className="font-medium">需要搜索过滤？</p>
          <p className="mt-1">
            Select 是纯下拉选择组件，不支持输入搜索。如果需要搜索/过滤功能，请使用{" "}
            <Link
              to="/form/combobox"
              className="font-medium underline underline-offset-2 hover:text-blue-600"
            >
              Combobox 组合框
            </Link>
            ，它支持内置过滤、自定义模糊搜索和多选。
          </p>
        </div>
      </div>

      <h2 className="font-heading text-xl font-semibold">Select API</h2>
      <PropsTable data={selectPropsData} />

      <h2 className="font-heading text-xl font-semibold">SelectItem API</h2>
      <PropsTable data={selectItemPropsData} />
    </div>
  );
}
