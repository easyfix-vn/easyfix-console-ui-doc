import { EasyPriceText } from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

const propsData = [
  { name: "value", type: "string | number | null | undefined", description: "金额值" },
  { name: "currency", type: "EasyCurrencyCode", default: '"VND"', description: "ISO 4217 三位字母货币代码，如 VND、USD、EUR、CNY" },
  { name: "useGrouping", type: "boolean", default: "true", description: "是否启用千分位" },
  { name: "groupSeparator", type: "string", default: '","', description: "千分位分隔符" },
  { name: "decimalSeparator", type: "string", default: '"."', description: "小数分隔符" },
  { name: "unitText", type: "string", description: "货币单位文本，不传时默认使用 currency" },
  { name: "unitPosition", type: '"prefix" | "suffix"', default: '"suffix"', description: "单位放在金额前还是后" },
  { name: "precision", type: "number", description: "小数位数；不传时按常见货币 minor unit 推断，如 VND/JPY 为 0，USD/CNY 为 2" },
  { name: "emptyText", type: "string", default: '"-"', description: "空值展示文本" },
  { name: "copyable", type: "boolean", default: "false", description: "是否可复制展示文本" },
  { name: "className", type: "string", description: "自定义样式类名" },
];

const commonCurrencyCodes = [
  ["VND", "越南盾", "0 位小数"],
  ["USD", "美元", "2 位小数"],
  ["EUR", "欧元", "2 位小数"],
  ["CNY", "人民币", "2 位小数"],
  ["JPY", "日元", "0 位小数"],
  ["KRW", "韩元", "0 位小数"],
  ["THB", "泰铢", "2 位小数"],
  ["SGD", "新加坡元", "2 位小数"],
];

export default function PriceTextDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">
          PriceText 金额文本
        </h1>
        <p className="mt-2 text-muted-foreground">
          金额展示组件，使用 ISO 4217 三位字母货币代码，支持千分位、分隔符、单位文本和单位位置配置。
        </p>
      </div>

      <ComponentDemo
        title="默认格式"
        description="默认货币为 VND，按 0 位小数展示。"
        code={`import { EasyPriceText } from "@easyfix/console-ui";

<EasyPriceText value={1280000} />
<EasyPriceText value="98000" currency="VND" />`}
      >
        <div className="flex flex-col gap-3">
          <EasyPriceText value={1280000} />
          <EasyPriceText value="98000" currency="VND" />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="不同货币"
        description="currency 使用 ISO 4217 三位字母代码，并按常见 minor unit 推断小数位。"
        code={`<EasyPriceText value={1280.5} currency="USD" />
<EasyPriceText value={1280.5} currency="CNY" unitText="元" />
<EasyPriceText value={1280} currency="JPY" />`}
      >
        <div className="flex flex-col gap-3">
          <EasyPriceText value={1280.5} currency="USD" />
          <EasyPriceText value={1280.5} currency="CNY" unitText="元" />
          <EasyPriceText value={1280} currency="JPY" />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="千分位与单位位置"
        description="控制千分位、分隔符和单位位置。"
        code={`<EasyPriceText value={1280000} currency="USD" unitPosition="prefix" />
<EasyPriceText value={1280000} currency="VND" groupSeparator="." />
<EasyPriceText value={1280000} currency="VND" useGrouping={false} />`}
      >
        <div className="flex flex-col gap-3">
          <EasyPriceText value={1280000} currency="USD" unitPosition="prefix" />
          <EasyPriceText value={1280000} currency="VND" groupSeparator="." />
          <EasyPriceText value={1280000} currency="VND" useGrouping={false} />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="空值与复制"
        description="空值默认显示 -；copyable 启用展示文本复制。"
        code={`<EasyPriceText value={null} />
<EasyPriceText value={1280000} currency="VND" copyable />`}
      >
        <div className="flex flex-col gap-3">
          <EasyPriceText value={null} />
          <EasyPriceText value={1280000} currency="VND" copyable />
        </div>
      </ComponentDemo>

      <div className="space-y-3">
        <h2 className="font-heading text-xl font-semibold">常用货币代码</h2>
        <p className="text-sm text-muted-foreground">
          <a
            className="text-primary underline-offset-4 hover:underline"
            href="https://en.wikipedia.org/wiki/ISO_4217"
            rel="noreferrer"
            target="_blank"
          >
            ISO 4217
          </a>{" "}
          使用三位字母表示货币；组件内置常用代码的小数位推断，其他三位大写代码也可作为字符串传入。
        </p>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-2.5 text-start font-medium">代码</th>
                <th className="px-4 py-2.5 text-start font-medium">货币</th>
                <th className="px-4 py-2.5 text-start font-medium">默认小数位</th>
              </tr>
            </thead>
            <tbody>
              {commonCurrencyCodes.map(([code, name, precision]) => (
                <tr key={code} className="border-b last:border-b-0">
                  <td className="px-4 py-2.5 font-mono text-primary">{code}</td>
                  <td className="px-4 py-2.5 text-muted-foreground">{name}</td>
                  <td className="px-4 py-2.5 text-muted-foreground">{precision}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <h2 className="font-heading text-xl font-semibold">
        EasyPriceText API
      </h2>
      <PropsTable data={propsData} />
    </div>
  );
}
