import { useState } from "react";
import {
  SearchableSelect,
  Select,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
  type SelectOption,
} from "@easyfix/console-ui";
import { SearchIcon } from "lucide-react";
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

const searchableSelectPropsData = [
  { name: "options", type: "SelectOption[]", description: "搜索选择选项数据" },
  { name: "value", type: "string | null", description: "当前选中值（受控）" },
  { name: "defaultValue", type: "string | null", description: "默认选中值（非受控）" },
  { name: "onValueChange", type: "(value, option) => void", description: "选中值变化回调" },
  { name: "filter", type: "(option, query) => boolean", description: "自定义搜索函数，返回 true 表示匹配" },
  { name: "clearable", type: "boolean", default: "false", description: "是否显示清除按钮" },
  { name: "size", type: '"sm" | "default" | "lg"', default: '"default"', description: "触发器尺寸" },
  { name: "startAddon", type: "ReactNode", description: "触发器前置图标或内容" },
  { name: "placeholder", type: "string", default: '"请选择"', description: "未选择时的占位文本" },
  { name: "searchPlaceholder", type: "string", default: '"搜索..."', description: "搜索框占位文本" },
  { name: "emptyText", type: "ReactNode", default: '"无匹配结果"', description: "空结果展示" },
];

const frameworkOptions: SelectOption[] = [
  { value: "react", label: "React", group: "前端框架" },
  { value: "vue", label: "Vue", group: "前端框架" },
  { value: "angular", label: "Angular", group: "前端框架" },
  { value: "express", label: "Express", group: "后端框架" },
  { value: "nestjs", label: "NestJS", group: "后端框架" },
  { value: "fastify", label: "Fastify", group: "后端框架" },
];

const cities: SelectOption[] = [
  { value: "beijing", label: "北京 Beijing", searchText: "北京 Beijing beijing" },
  { value: "shanghai", label: "上海 Shanghai", searchText: "上海 Shanghai shanghai" },
  { value: "guangzhou", label: "广州 Guangzhou", searchText: "广州 Guangzhou guangzhou" },
  { value: "shenzhen", label: "深圳 Shenzhen", searchText: "深圳 Shenzhen shenzhen" },
  { value: "chengdu", label: "成都 Chengdu", searchText: "成都 Chengdu chengdu" },
  { value: "hangzhou", label: "杭州 Hangzhou", searchText: "杭州 Hangzhou hangzhou" },
  { value: "nanjing", label: "南京 Nanjing", searchText: "南京 Nanjing nanjing" },
  { value: "wuhan", label: "武汉 Wuhan", searchText: "武汉 Wuhan wuhan" },
];

function BasicSearchDemo() {
  const [value, setValue] = useState<string | null>(null);
  const selected = frameworkOptions.find((item) => item.value === value);

  return (
    <div className="w-72 space-y-3">
      <SearchableSelect
        value={value}
        onValueChange={setValue}
        options={frameworkOptions}
        placeholder="选择框架"
        searchPlaceholder="搜索框架..."
        clearable
        startAddon={<SearchIcon />}
      />
      <p className="text-xs text-muted-foreground">
        选中：{selected?.label ?? "无"}
      </p>
    </div>
  );
}

function fuzzyMatch(text: string, query: string): boolean {
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  let queryIndex = 0;

  for (let textIndex = 0; textIndex < lowerText.length && queryIndex < lowerQuery.length; textIndex++) {
    if (lowerText[textIndex] === lowerQuery[queryIndex]) {
      queryIndex++;
    }
  }

  return queryIndex === lowerQuery.length;
}

function FuzzySearchDemo() {
  const [value, setValue] = useState<string | null>(null);
  const selected = cities.find((item) => item.value === value);

  return (
    <div className="w-72 space-y-3">
      <SearchableSelect
        value={value}
        onValueChange={setValue}
        options={cities}
        placeholder="选择城市"
        searchPlaceholder="输入城市名或拼音..."
        emptyText="未找到匹配城市"
        startAddon={<SearchIcon />}
        clearable
        filter={(option, query) =>
          fuzzyMatch(option.searchText ?? String(option.label), query)
        }
      />
      <p className="text-xs text-muted-foreground">
        选中：{selected?.label ?? "无"}
      </p>
    </div>
  );
}

export default function SelectDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">Select 选择器</h1>
        <p className="mt-2 text-muted-foreground">
          下拉选择组件，支持基础单选、分组、搜索选择和自定义模糊搜索。
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
        <div className="flex flex-wrap gap-4">
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

      <ComponentDemo
        title="搜索选择"
        description="SearchableSelect 继承 Select 视觉风格，支持搜索、分组和清除"
        code={`const options = [
  { value: "react", label: "React", group: "前端框架" },
  { value: "nestjs", label: "NestJS", group: "后端框架" },
];

<SearchableSelect
  value={value}
  onValueChange={setValue}
  options={options}
  placeholder="选择框架"
  searchPlaceholder="搜索框架..."
  clearable
/>`}
      >
        <BasicSearchDemo />
      </ComponentDemo>

      <ComponentDemo
        title="自定义模糊搜索"
        description="通过 filter 属性自定义搜索能力，可按拼音、别名或业务字段匹配"
        code={`function fuzzyMatch(text, query) {
  let qi = 0;
  for (let ti = 0; ti < text.length && qi < query.length; ti++) {
    if (text[ti].toLowerCase() === query[qi].toLowerCase()) qi++;
  }
  return qi === query.length;
}

<SearchableSelect
  value={value}
  onValueChange={setValue}
  options={cities}
  filter={(option, query) =>
    fuzzyMatch(option.searchText ?? String(option.label), query)
  }
/>`}
      >
        <FuzzySearchDemo />
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">Select API</h2>
      <PropsTable data={selectPropsData} />

      <h2 className="font-heading text-xl font-semibold">SelectItem API</h2>
      <PropsTable data={selectItemPropsData} />

      <h2 className="font-heading text-xl font-semibold">SearchableSelect API</h2>
      <PropsTable data={searchableSelectPropsData} />
    </div>
  );
}
