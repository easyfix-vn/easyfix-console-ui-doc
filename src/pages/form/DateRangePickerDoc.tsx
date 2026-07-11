import {
  DateRangePicker,
  type DateRangeShortcut,
  type DateRangeValue,
  type TimestampRangeValue,
} from "@easyfix/console-ui";
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

function TimeZoneRangePicker() {
  const [range, setRange] = useState<DateRangeValue | undefined>();
  const [timeZone, setTimeZone] = useState("Asia/Ho_Chi_Minh");
  const [timestamps, setTimestamps] = useState<TimestampRangeValue | undefined>();

  return (
    <div className="space-y-2">
      <DateRangePicker
        value={range}
        onChange={setRange}
        timeZone={timeZone}
        onTimeZoneChange={setTimeZone}
        onTimestampChange={setTimestamps}
      />
      <p className="text-xs text-muted-foreground">
        timeZone：{timeZone}；from：{timestamps?.from ?? "—"}；to：
        {timestamps?.to ?? "—"}
      </p>
    </div>
  );
}

function CustomShortcutsRangePicker() {
  const [range, setRange] = useState<DateRangeValue | undefined>();
  const shortcuts: DateRangeShortcut[] = [
    {
      label: "近 14 天",
      getRange: ({ now }) => ({
        from: now.subtract(13, "day").startOf("day").toDate(),
        to: now.endOf("day").toDate(),
      }),
    },
    {
      label: "本季度",
      getRange: ({ now }) => {
        const quarterStartMonth = Math.floor(now.month() / 3) * 3;
        const from = now.month(quarterStartMonth).startOf("month");
        return { from: from.toDate(), to: now.endOf("day").toDate() };
      },
    },
  ];

  return (
    <div className="w-full max-w-xl">
      <DateRangePicker
        value={range}
        onChange={setRange}
        shortcuts={shortcuts}
      />
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
    description: "确认范围后触发回调；showTime 保留两端既有时分。",
  },
  {
    name: "onTimestampChange",
    type: "(range?: { from?: number; to?: number }) => void",
    description: "按当前 timeZone 通过 dayjs.tz 转换后的毫秒时间戳范围回调",
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
    name: "timeZone",
    type: "string",
    default: "浏览器/系统时区",
    description: "IANA 时区；输入框内展示 UTC+07 形式的偏移 tag，弹层中可切换",
  },
  {
    name: "onTimeZoneChange",
    type: "(timeZone: string) => void",
    description: "时区变化回调",
  },
  {
    name: "timeZoneOptions",
    type: "TimeZoneOption[]",
    description: "自定义时区选项",
  },
  {
    name: "showTimeZone",
    type: "boolean",
    default: "true",
    description: "是否展示 UTC+07 形式的偏移 tag 和时区选择",
  },
  {
    name: "shortcuts",
    type: "DateRangeShortcut[] | false",
    default: "内置快捷项",
    description: "快捷日期范围。默认包含今天、昨天、近3天、近一周、上周、本月；传 false 隐藏",
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
        description="维护起止日期；确认范围后提交，快捷日期立即提交。"
        code={`import { DateRangePicker, type DateRangeValue } from "@easyfix/console-ui";

const [range, setRange] = useState<DateRangeValue | undefined>();
<DateRangePicker value={range} onChange={setRange} />`}
      >
        <BasicRangePicker />
      </ComponentDemo>

      <ComponentDemo
        title="日期时间范围选择"
        description="showTime 在日历下方提供起止时间输入，并在确认后提交。"
        code={`import { DateRangePicker, type DateRangeValue } from "@easyfix/console-ui";

const [range, setRange] = useState<DateRangeValue | undefined>();
<DateRangePicker showTime value={range} onChange={setRange} />`}
      >
        <DatetimeRangePicker />
      </ComponentDemo>

      <ComponentDemo
        title="快捷日期与时区"
        description="内置快捷项按当前时区计算，结束时间默认取日期最后时刻"
        code={`const [range, setRange] = useState<DateRangeValue | undefined>();
const [timeZone, setTimeZone] = useState("Asia/Ho_Chi_Minh");
const [timestamps, setTimestamps] = useState<TimestampRangeValue | undefined>();

<DateRangePicker
  value={range}
  onChange={setRange}
  timeZone={timeZone}
  onTimeZoneChange={setTimeZone}
  onTimestampChange={setTimestamps}
/>`}
      >
        <TimeZoneRangePicker />
      </ComponentDemo>

      <ComponentDemo
        title="自定义快捷项"
        description="shortcuts 可覆盖默认快捷项，回调参数提供当前时区下的 dayjs now"
        code={`const shortcuts = [
  {
    label: "近 14 天",
    getRange: ({ now }) => ({
      from: now.subtract(13, "day").startOf("day").toDate(),
      to: now.endOf("day").toDate(),
    }),
  },
];

<DateRangePicker shortcuts={shortcuts} />`}
      >
        <CustomShortcutsRangePicker />
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
