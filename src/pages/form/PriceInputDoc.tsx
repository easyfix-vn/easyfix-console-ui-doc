import { useState } from "react";
import {
  EasyPriceInput,
  EasyPriceText,
  type EasyCurrencyCode,
  type EasyPriceCurrencyOption,
} from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

const propsData = [
  { name: "value", type: "string | number | null | undefined", description: "当前金额值" },
  { name: "onValueChange", type: "(value: string) => void", description: "确认编辑后触发，返回规范化金额字符串" },
  { name: "currency", type: "EasyCurrencyCode", default: '"VND"', description: "ISO 4217 三位字母货币代码，如 VND、USD、EUR、CNY" },
  { name: "onCurrencyChange", type: "(currency: EasyCurrencyCode) => void", description: "确认或编辑中切换货币时回调；传入后编辑态显示货币选择器" },
  { name: "currencyOptions", type: "EasyPriceCurrencyOption[]", description: "自定义货币选项，默认内置 VND/USD/EUR/CNY/JPY/KRW/THB/SGD" },
  { name: "useGrouping", type: "boolean", default: "true", description: "是否启用千分位格式化" },
  { name: "groupSeparator", type: "string", default: '","', description: "千分位分隔符" },
  { name: "decimalSeparator", type: "string", default: '"."', description: "小数分隔符" },
  { name: "unitText", type: "string", description: "货币单位文本，不传时默认使用 currency" },
  { name: "unitPosition", type: '"prefix" | "suffix"', default: '"suffix"', description: "单位放在金额前还是后" },
  { name: "precision", type: "number", description: "小数位数；不传时按常见货币 minor unit 推断" },
  { name: "min", type: "string | number", description: "最小输入值，默认空，不限制" },
  { name: "max", type: "string | number", description: "最大输入值，默认空，不限制" },
  { name: "size", type: '"sm" | "default" | "lg"', default: '"default"', description: "输入控件尺寸" },
  { name: "displayVariant", type: '"default" | "tag"', default: '"default"', description: "非编辑态回显样式" },
  { name: "placeholder", type: "string", description: "编辑态输入框 placeholder" },
  { name: "disabled", type: "boolean", default: "false", description: "是否禁用" },
  { name: "error", type: "string", description: "外部错误文案，优先级高于内部 min/max 校验" },
  { name: "className", type: "string", description: "容器额外类名" },
];

const currencyOptionPropsData = [
  { name: "currency", type: "EasyCurrencyCode", description: "ISO 4217 三位字母货币代码" },
  { name: "label", type: "string", description: "选择器展示文本" },
  { name: "unitText", type: "string", description: "金额单位文本" },
  { name: "fractionDigits", type: "number", description: "该货币的小数位覆盖值" },
];

const customCurrencyOptions: EasyPriceCurrencyOption[] = [
  { currency: "VND", label: "VND 越南盾", unitText: "VND", fractionDigits: 0 },
  { currency: "USD", label: "USD 美元", unitText: "USD", fractionDigits: 2 },
  { currency: "CNY", label: "CNY 人民币", unitText: "元", fractionDigits: 2 },
  { currency: "JPY", label: "JPY 日元", unitText: "JPY", fractionDigits: 0 },
];

function BasicDemo() {
  const [value, setValue] = useState("1280000");

  return (
    <div className="w-full max-w-sm space-y-3">
      <EasyPriceInput value={value} onValueChange={setValue} />
      <p className="text-xs text-muted-foreground">当前 value：{value || "空"}</p>
    </div>
  );
}

function CurrencyDemo() {
  const [value, setValue] = useState("1280.5");
  const [currency, setCurrency] = useState<EasyCurrencyCode>("USD");

  return (
    <div className="w-full max-w-sm space-y-3">
      <EasyPriceInput
        value={value}
        onValueChange={setValue}
        currency={currency}
        onCurrencyChange={setCurrency}
        currencyOptions={customCurrencyOptions}
        unitPosition="prefix"
      />
      <p className="inline-flex items-center gap-1 text-xs text-muted-foreground">
        <span>当前值：</span>
        <EasyPriceText
          value={value}
          currency={currency}
          unitText={currency === "CNY" ? "元" : undefined}
          unitPosition="prefix"
        />
      </p>
    </div>
  );
}

function DisplayVariantDemo() {
  const [value, setValue] = useState("1280000");

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <EasyPriceInput value={value} onValueChange={setValue} />
      <EasyPriceInput
        value={value}
        onValueChange={setValue}
        displayVariant="tag"
      />
    </div>
  );
}

function GroupSeparatorDemo() {
  const [value, setValue] = useState("1280000");

  return (
    <div className="w-full max-w-sm space-y-3">
      <EasyPriceInput
        value={value}
        onValueChange={setValue}
        currency="VND"
        groupSeparator="."
      />
      <EasyPriceInput
        value={value}
        onValueChange={setValue}
        currency="VND"
        useGrouping={false}
      />
    </div>
  );
}

function RangeDemo() {
  const [value, setValue] = useState("500000");

  return (
    <div className="w-full max-w-sm space-y-3">
      <EasyPriceInput
        value={value}
        onValueChange={setValue}
        currency="VND"
        min={100000}
        max={1000000}
      />
      <p className="text-xs text-muted-foreground">
        允许范围：100,000 VND - 1,000,000 VND
      </p>
    </div>
  );
}

function SizeDemo() {
  const [value, setValue] = useState("1280000");

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <EasyPriceInput value={value} onValueChange={setValue} size="sm" />
      <EasyPriceInput value={value} onValueChange={setValue} />
      <EasyPriceInput value={value} onValueChange={setValue} size="lg" />
    </div>
  );
}

export default function PriceInputDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">
          PriceInput 金额输入框
        </h1>
        <p className="mt-2 text-muted-foreground">
          金额输入组件默认以 PriceText 展示，点击编辑图标后才进入输入态；只有点击确认或按 Enter 才会回写 value，适合金额类谨慎编辑场景。
        </p>
      </div>

      <ComponentDemo
        title="基础用法"
        description="默认展示金额文本，点击编辑图标后输入；确认后才触发 onValueChange"
        code={`import { useState } from "react";
import { EasyPriceInput } from "@easyfix/console-ui";

const [value, setValue] = useState("1280000");

<EasyPriceInput value={value} onValueChange={setValue} />`}
      >
        <BasicDemo />
      </ComponentDemo>

      <ComponentDemo
        title="货币类型"
        description="传入 onCurrencyChange 后，编辑态会显示货币选择器；货币代码使用 ISO 4217 三位字母"
        code={`const [value, setValue] = useState("1280.5");
const [currency, setCurrency] = useState("USD");

const currencyOptions = [
  { currency: "VND", label: "VND 越南盾", unitText: "VND", fractionDigits: 0 },
  { currency: "USD", label: "USD 美元", unitText: "USD", fractionDigits: 2 },
  { currency: "CNY", label: "CNY 人民币", unitText: "元", fractionDigits: 2 },
];

<EasyPriceInput
  value={value}
  onValueChange={setValue}
  currency={currency}
  onCurrencyChange={setCurrency}
  currencyOptions={currencyOptions}
  unitPosition="prefix"
/>`}
      >
        <CurrencyDemo />
      </ComponentDemo>

      <ComponentDemo
        title="回显样式"
        description="默认回显适合表单内编辑；tag 样式适合表格、详情页等紧凑区域"
        code={`<EasyPriceInput value={value} onValueChange={setValue} />
<EasyPriceInput
  value={value}
  onValueChange={setValue}
  displayVariant="tag"
/>`}
      >
        <DisplayVariantDemo />
      </ComponentDemo>

      <ComponentDemo
        title="千分位规则"
        description="可配置是否启用千分位，以及千分位符号"
        code={`<EasyPriceInput value={value} onValueChange={setValue} groupSeparator="." />
<EasyPriceInput value={value} onValueChange={setValue} useGrouping={false} />`}
      >
        <GroupSeparatorDemo />
      </ComponentDemo>

      <ComponentDemo
        title="输入范围"
        description="min / max 默认不限制；设置后在确认时校验"
        code={`<EasyPriceInput
  value={value}
  onValueChange={setValue}
  currency="VND"
  min={100000}
  max={1000000}
/>`}
      >
        <RangeDemo />
      </ComponentDemo>

      <ComponentDemo
        title="不同尺寸"
        description="提供 sm、default、lg 三种尺寸"
        code={`<EasyPriceInput size="sm" value={value} onValueChange={setValue} />
<EasyPriceInput value={value} onValueChange={setValue} />
<EasyPriceInput size="lg" value={value} onValueChange={setValue} />`}
      >
        <SizeDemo />
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">
        EasyPriceInput API
      </h2>
      <PropsTable data={propsData} />

      <h2 className="font-heading text-xl font-semibold">
        EasyPriceCurrencyOption
      </h2>
      <PropsTable data={currencyOptionPropsData} />
    </div>
  );
}
