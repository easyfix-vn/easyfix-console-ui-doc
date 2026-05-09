import { DateRangePicker, type DateRangeValue } from "@easyfix/console-ui";
import { useState } from "react";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

function BasicRangePicker() {
  const [range, setRange] = useState<DateRangeValue | undefined>();
  return (
    <div className="space-y-2">
      <DateRangePicker value={range} onChange={setRange} />
      <p className="text-xs text-muted-foreground">
        当前选择：{range?.from?.toLocaleDateString() ?? "—"} ~{" "}
        {range?.to?.toLocaleDateString() ?? "—"}
      </p>
    </div>
  );
}

function DatetimeRangePicker() {
  const [range, setRange] = useState<DateRangeValue | undefined>();
  return (
    <div className="space-y-2">
      <DateRangePicker showTime value={range} onChange={setRange} />
      <p className="text-xs text-muted-foreground">
        开始：{range?.from?.toLocaleString() ?? "—"}{" "}
        &nbsp;结束：{range?.to?.toLocaleString() ?? "—"}
      </p>
    </div>
  );
}

function DisabledRangePicker() {
  const [range, setRange] = useState<DateRangeValue | undefined>({
    from: new Date(2026, 4, 1),
    to: new Date(2026, 4, 15),
  });
  return <DateRangePicker value={range} onChange={setRange} disabled />;
}

const propsData = [
  {
    name: "showTime",
    type: "boolean",
    default: "false",
    description: "是否显示时间输入，开启后可同时选择起止时间",
  },
  {
    name: "value",
    type: "{ from?: Date; to?: Date }",
    description: "选中范围（受控）",
  },
  {
    name: "onChange",
    type: "(range?: { from?: Date; to?: Date }) => void",
    description: "范围变化回调；showTime 开启时切换日期会保留两端原有的时分",
  },
  {
    name: "placeholder",
    type: "string",
    default: 'i18n("datePicker.placeholderRange")',
    description: "占位文本",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用",
  },
  {
    name: "format",
    type: "string | (date: Date) => string",
    description: "起止两端的展示格式，同 DatePicker.format",
  },
  {
    name: "separator",
    type: "ReactNode",
    default: 'i18n("datePicker.separator")',
    description: "起止之间的分隔符，默认按 locale 取「至 / to / đến」",
  },
  {
    name: "numberOfMonths",
    type: "number",
    default: "2",
    description: "面板内同时展示的月份数量",
  },
];

export default function DateRangePickerDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">
          DateRangePicker 日期范围选择器
        </h1>
        <p className="mt-2 text-muted-foreground">
          统一的日期范围选择组件。通过{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">showTime</code>{" "}
          属性可在日期范围基础上追加时间选择。
        </p>
      </div>

      <ComponentDemo
        title="日期范围选择（默认）"
        description="同时选择起止日期，弹层在第二次选择后自动关闭"
        code={`import { DateRangePicker, type DateRangeValue } from "@easyfix/console-ui";

const [range, setRange] = useState<DateRangeValue | undefined>();
<DateRangePicker value={range} onChange={setRange} />`}
      >
        <BasicRangePicker />
      </ComponentDemo>

      <ComponentDemo
        title="日期时间范围选择"
        description="showTime 开启后在日历下方追加独立的起止时间输入框，弹层不自动关闭，方便调整时间"
        code={`import { DateRangePicker, type DateRangeValue } from "@easyfix/console-ui";

const [range, setRange] = useState<DateRangeValue | undefined>();
<DateRangePicker showTime value={range} onChange={setRange} />`}
      >
        <DatetimeRangePicker />
      </ComponentDemo>

      <ComponentDemo
        title="禁用状态"
        description="设置 disabled 禁用范围选择"
        code={`<DateRangePicker disabled value={{ from: new Date(2026, 4, 1), to: new Date(2026, 4, 15) }} />`}
      >
        <DisabledRangePicker />
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">API</h2>
      <PropsTable data={propsData} />
    </div>
  );
}
