import { useState } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopup,
  ComboboxItem,
  ComboboxList,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
} from "@easyfix/console-ui";
import { SearchIcon } from "lucide-react";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

const rootPropsData = [
  {
    name: "value",
    type: "Value | Value[]",
    description: "受控模式下当前选中的值",
  },
  {
    name: "defaultValue",
    type: "Value | Value[]",
    description: "默认选中值（非受控）",
  },
  {
    name: "onValueChange",
    type: "(value: Value | Value[]) => void",
    description: "选中值变化的回调",
  },
  {
    name: "items",
    type: "any[]",
    description:
      "选项数据列表。提供后 ComboboxEmpty 才能正确判断列表是否为空（必填）",
  },
  {
    name: "itemToStringLabel",
    type: "(value: Value) => string",
    description:
      "将 value 转换为显示标签的函数。选中后输入框会显示该函数返回的文本",
  },
  {
    name: "filter",
    type: "(value: Value, query: string) => boolean",
    description:
      "自定义过滤函数。返回 true 表示匹配。默认使用 Intl.Collator 进行 contains 匹配",
  },
  {
    name: "multiple",
    type: "boolean",
    default: "false",
    description: "是否支持多选",
  },
  {
    name: "autoHighlight",
    type: 'boolean | "always"',
    default: "false",
    description:
      "是否自动高亮第一个匹配项。true: 输入时高亮, 'always': 打开时即高亮",
  },
  {
    name: "autoComplete",
    type: '"list" | "both" | "inline" | "none"',
    default: '"list"',
    description:
      "过滤模式。list: 过滤列表, both: 过滤+行内补全, inline: 仅行内补全, none: 不过滤",
  },
  {
    name: "onInputValueChange",
    type: "(value: string, details: { reason: string }) => void",
    description: "输入框值变化的回调",
  },
];

const inputPropsData = [
  {
    name: "showTrigger",
    type: "boolean",
    default: "true",
    description: "是否显示展开/折叠按钮",
  },
  {
    name: "showClear",
    type: "boolean",
    default: "false",
    description: "是否显示清除按钮",
  },
  {
    name: "startAddon",
    type: "ReactNode",
    description: "输入框前置装饰（如搜索图标）",
  },
  {
    name: "size",
    type: '"sm" | "default" | "lg"',
    default: '"default"',
    description: "输入框尺寸",
  },
  {
    name: "placeholder",
    type: "string",
    description: "输入框占位文本",
  },
];

const itemPropsData = [
  {
    name: "value",
    type: "Value",
    description: "选项的值",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "是否禁用该选项",
  },
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
];

const frameworks = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "solid", label: "Solid" },
];
const frameworkValues = frameworks.map((f) => f.value);
const frameworkLabelMap: Record<string, string> = Object.fromEntries(
  frameworks.map((f) => [f.value, f.label]),
);

function BasicDemo() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <div className="w-64">
      <Combobox
        value={value}
        onValueChange={setValue}
        items={frameworkValues}
        itemToStringLabel={(v) => frameworkLabelMap[v] ?? v}
      >
        <ComboboxInput placeholder="搜索框架..." />
        <ComboboxPopup>
          <ComboboxList>
            <ComboboxEmpty>无匹配结果</ComboboxEmpty>
            {frameworks.map((f) => (
              <ComboboxItem key={f.value} value={f.value}>
                {f.label}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxPopup>
      </Combobox>
      <p className="mt-3 text-xs text-muted-foreground">
        选中: {value ? frameworkLabelMap[value] : "无"}
      </p>
    </div>
  );
}

const frontendItems = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
];
const backendItems = [
  { value: "express", label: "Express" },
  { value: "nestjs", label: "NestJS" },
  { value: "fastify", label: "Fastify" },
];
const allGroupValues = [...frontendItems, ...backendItems].map((i) => i.value);
const allGroupLabelMap: Record<string, string> = Object.fromEntries(
  [...frontendItems, ...backendItems].map((i) => [i.value, i.label]),
);

function GroupDemo() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <div className="w-64">
      <Combobox
        value={value}
        onValueChange={setValue}
        items={allGroupValues}
        itemToStringLabel={(v) => allGroupLabelMap[v] ?? v}
      >
        <ComboboxInput placeholder="搜索框架..." />
        <ComboboxPopup>
          <ComboboxList>
            <ComboboxEmpty>无匹配结果</ComboboxEmpty>
            <ComboboxGroup>
              <ComboboxGroupLabel>前端框架</ComboboxGroupLabel>
              {frontendItems.map((f) => (
                <ComboboxItem key={f.value} value={f.value}>
                  {f.label}
                </ComboboxItem>
              ))}
            </ComboboxGroup>
            <ComboboxGroup>
              <ComboboxGroupLabel>后端框架</ComboboxGroupLabel>
              {backendItems.map((f) => (
                <ComboboxItem key={f.value} value={f.value}>
                  {f.label}
                </ComboboxItem>
              ))}
            </ComboboxGroup>
          </ComboboxList>
        </ComboboxPopup>
      </Combobox>
    </div>
  );
}

const cities = [
  { value: "beijing", label: "北京 Beijing", py: "beijing" },
  { value: "shanghai", label: "上海 Shanghai", py: "shanghai" },
  { value: "guangzhou", label: "广州 Guangzhou", py: "guangzhou" },
  { value: "shenzhen", label: "深圳 Shenzhen", py: "shenzhen" },
  { value: "chengdu", label: "成都 Chengdu", py: "chengdu" },
  { value: "hangzhou", label: "杭州 Hangzhou", py: "hangzhou" },
  { value: "nanjing", label: "南京 Nanjing", py: "nanjing" },
  { value: "wuhan", label: "武汉 Wuhan", py: "wuhan" },
];
const cityValues = cities.map((c) => c.value);
const cityLabelMap: Record<string, string> = Object.fromEntries(
  cities.map((c) => [c.value, c.label]),
);

function fuzzyMatch(text: string, query: string): boolean {
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  let qi = 0;
  for (let ti = 0; ti < lowerText.length && qi < lowerQuery.length; ti++) {
    if (lowerText[ti] === lowerQuery[qi]) qi++;
  }
  return qi === lowerQuery.length;
}

function FuzzySearchDemo() {
  const [value, setValue] = useState<string | null>(null);

  const cityFilter = (itemValue: string, query: string) => {
    const city = cities.find((c) => c.value === itemValue);
    if (!city) return false;
    return fuzzyMatch(city.label, query) || fuzzyMatch(city.py, query);
  };

  return (
    <div className="w-72">
      <Combobox
        value={value}
        onValueChange={setValue}
        items={cityValues}
        itemToStringLabel={(v) => cityLabelMap[v] ?? v}
        filter={cityFilter}
      >
        <ComboboxInput
          placeholder="输入城市名或拼音..."
          startAddon={<SearchIcon />}
          showClear
        />
        <ComboboxPopup>
          <ComboboxList>
            <ComboboxEmpty>未找到匹配城市</ComboboxEmpty>
            {cities.map((city) => (
              <ComboboxItem key={city.value} value={city.value}>
                {city.label}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxPopup>
      </Combobox>
      <p className="mt-3 text-xs text-muted-foreground">
        选中: {value ? cityLabelMap[value] : "无"}
      </p>
    </div>
  );
}

const reactEcosystem = [
  { value: "react", label: "React" },
  { value: "react-native", label: "React Native" },
  { value: "react-router", label: "React Router" },
  { value: "redux", label: "Redux" },
  { value: "remix", label: "Remix" },
  { value: "vue", label: "Vue" },
  { value: "vite", label: "Vite" },
];
const reactValues = reactEcosystem.map((r) => r.value);
const reactLabelMap: Record<string, string> = Object.fromEntries(
  reactEcosystem.map((r) => [r.value, r.label]),
);

function StartsWithDemo() {
  const [value, setValue] = useState<string | null>(null);

  const prefixFilter = (itemValue: string, query: string) => {
    const label = reactLabelMap[itemValue] ?? itemValue;
    return label.toLowerCase().startsWith(query.toLowerCase());
  };

  return (
    <div className="w-64">
      <Combobox
        value={value}
        onValueChange={setValue}
        items={reactValues}
        itemToStringLabel={(v) => reactLabelMap[v] ?? v}
        filter={prefixFilter}
        autoHighlight
      >
        <ComboboxInput placeholder="输入前缀搜索..." />
        <ComboboxPopup>
          <ComboboxList>
            <ComboboxEmpty>无匹配结果</ComboboxEmpty>
            {reactEcosystem.map((r) => (
              <ComboboxItem key={r.value} value={r.value}>
                {r.label}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxPopup>
      </Combobox>
    </div>
  );
}

export default function ComboboxDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">Combobox 组合框</h1>
        <p className="mt-2 text-muted-foreground">
          基于{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            @base-ui/react/combobox
          </code>{" "}
          的可搜索选择组件。内置 Intl.Collator 过滤，支持自定义搜索函数、分组、多选和自动高亮。
        </p>
      </div>

      <ComponentDemo
        title="基础搜索选择"
        description="输入文字过滤选项。需要提供 items 和 itemToStringLabel 以支持空状态提示和选中回显"
        code={`const frameworks = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
];
const values = frameworks.map((f) => f.value);
const labelMap = Object.fromEntries(
  frameworks.map((f) => [f.value, f.label]),
);

<Combobox
  value={value}
  onValueChange={setValue}
  items={values}
  itemToStringLabel={(v) => labelMap[v] ?? v}
>
  <ComboboxInput placeholder="搜索框架..." />
  <ComboboxPopup>
    <ComboboxList>
      <ComboboxEmpty>无匹配结果</ComboboxEmpty>
      {frameworks.map((f) => (
        <ComboboxItem key={f.value} value={f.value}>
          {f.label}
        </ComboboxItem>
      ))}
    </ComboboxList>
  </ComboboxPopup>
</Combobox>`}
      >
        <BasicDemo />
      </ComponentDemo>

      <ComponentDemo
        title="自定义模糊搜索"
        description="通过 filter 属性传入自定义搜索函数，支持模糊匹配和拼音搜索"
        code={`const cities = [
  { value: "beijing", label: "北京 Beijing", py: "beijing" },
  ...
];

function fuzzyMatch(text, query) {
  let qi = 0;
  for (let ti = 0; ti < text.length && qi < query.length; ti++) {
    if (text[ti] === query[qi]) qi++;
  }
  return qi === query.length;
}

const cityFilter = (itemValue, query) => {
  const city = cities.find((c) => c.value === itemValue);
  return fuzzyMatch(city.label, query) || fuzzyMatch(city.py, query);
};

<Combobox
  value={value}
  onValueChange={setValue}
  items={cityValues}
  itemToStringLabel={(v) => cityLabelMap[v]}
  filter={cityFilter}
>
  <ComboboxInput
    placeholder="输入城市名或拼音..."
    startAddon={<SearchIcon />}
    showClear
  />
  ...
</Combobox>`}
      >
        <FuzzySearchDemo />
      </ComponentDemo>

      <ComponentDemo
        title="前缀搜索 + 自动高亮"
        description="filter 实现前缀匹配，配合 autoHighlight 自动高亮第一个匹配项"
        code={`const prefixFilter = (itemValue, query) => {
  const label = labelMap[itemValue] ?? itemValue;
  return label.toLowerCase().startsWith(query.toLowerCase());
};

<Combobox
  value={value}
  onValueChange={setValue}
  items={values}
  itemToStringLabel={(v) => labelMap[v]}
  filter={prefixFilter}
  autoHighlight
>
  ...
</Combobox>`}
      >
        <StartsWithDemo />
      </ComponentDemo>

      <ComponentDemo
        title="带分组"
        description="使用 ComboboxGroup 和 ComboboxGroupLabel 对选项分组展示"
        code={`<Combobox
  value={value}
  onValueChange={setValue}
  items={allValues}
  itemToStringLabel={(v) => labelMap[v]}
>
  <ComboboxInput placeholder="搜索框架..." />
  <ComboboxPopup>
    <ComboboxList>
      <ComboboxEmpty>无匹配结果</ComboboxEmpty>
      <ComboboxGroup>
        <ComboboxGroupLabel>前端框架</ComboboxGroupLabel>
        <ComboboxItem value="react">React</ComboboxItem>
        ...
      </ComboboxGroup>
      <ComboboxGroup>
        <ComboboxGroupLabel>后端框架</ComboboxGroupLabel>
        <ComboboxItem value="express">Express</ComboboxItem>
        ...
      </ComboboxGroup>
    </ComboboxList>
  </ComboboxPopup>
</Combobox>`}
      >
        <GroupDemo />
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">API</h2>

        <h3 className="mb-3 text-lg font-medium">Combobox</h3>
        <PropsTable data={rootPropsData} />

        <h3 className="mb-3 mt-6 text-lg font-medium">ComboboxInput</h3>
        <PropsTable data={inputPropsData} />

        <h3 className="mb-3 mt-6 text-lg font-medium">ComboboxItem</h3>
        <PropsTable data={itemPropsData} />
      </div>
    </div>
  );
}
