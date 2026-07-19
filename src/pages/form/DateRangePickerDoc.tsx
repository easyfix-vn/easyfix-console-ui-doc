import {
  DateRangePicker,
  type DateRangeShortcut,
  type DateRangeValue,
  type TimestampRangeValue,
} from "@easyfix/console-ui";
import { useState } from "react";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";
import { ComponentDocPage } from "@/components/ComponentDocPage";

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

function HierarchyRangePicker() {
  const [range, setRange] = useState<DateRangeValue | undefined>();
  return (
    <div className="space-y-2">
      <DateRangePicker
        value={range}
        onChange={setRange}
        defaultValue={new Date(2026, 6, 1)}
        startYear={2020}
        endYear={2035}
        shortcuts={false}
      />
      <p className="text-xs text-muted-foreground">
        点击任一侧标题中的年份或月份，可以快速切换到目标年月。
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

function RestrictedDatetimeRangePicker() {
  const [range, setRange] = useState<DateRangeValue | undefined>();

  return (
    <DateRangePicker
      showTime
      value={range}
      onChange={setRange}
      defaultTime={["09:00:00", "18:00:00"]}
      selectableRange="08:00:00 - 20:00:00"
      disabledDate={(date: Date) => date.getDay() === 0 || date.getDay() === 6}
      disabledTime={(_date: Date, role: "single" | "start" | "end") => ({
        disabledHours:
          role === "start"
            ? [0, 1, 2, 3, 4, 5, 6, 7]
            : [21, 22, 23],
      })}
      minuteStep={15}
    />
  );
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
    name: "clearable",
    type: "boolean",
    default: "true",
    description: "是否显示清除按钮",
  },
  {
    name: "disabledDate",
    type: "(date: Date) => boolean",
    description: "日期禁用规则；返回 true 时起止端点不可选择",
  },
  {
    name: "selectableRange",
    type: "string | string[]",
    description: "showTime 时两端共用的可选时间白名单，边界包含在内",
  },
  {
    name: "disabledTime",
    type:
      '(date: Date, role: "single" | "start" | "end") => DisabledTimeConfig',
    description:
      "按日期和角色动态禁用小时、分钟或秒；DateRangePicker 运行时传入 start 或 end",
  },
  {
    name: "defaultTime",
    type: "readonly [string | Date, string | Date]",
    default: '["00:00:00", "23:59:59"]',
    description: "首次选择开始和结束日期时分别采用的默认时间",
  },
  {
    name: "showSeconds",
    type: "boolean",
    default: "false",
    description: "showTime 时是否显示秒选择列",
  },
  {
    name: "hourStep / minuteStep / secondStep",
    type: "number",
    default: "1",
    description: "时间候选项的步长",
  },
  {
    name: "defaultValue",
    type: "Date",
    description: "空值时面板初始展示的日期，不会直接提交",
  },
  {
    name: "startYear / endYear",
    type: "number",
    description: "日、月、年面板可导航和选择的年份范围",
  },
  {
    name: "timeZone",
    type: "string",
    description: "受控 IANA 时区",
  },
  {
    name: "defaultTimeZone",
    type: "string",
    default: "ConfigProvider / 浏览器时区",
    description: "非受控模式下的初始 IANA 时区",
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
    description: "面板内同时展示的月份数量；窄屏自动收起额外月份，可通过导航切换",
  },
  { name: "className", type: "string", description: "自定义样式类名" },
];

const eventsData = [
  {
    name: "onChange",
    type: "(range: DateRangeValue | undefined) => void",
    description: "确认范围或清除后的回调；showTime 模式保留两端既有时分",
  },
  {
    name: "onTimestampChange",
    type: "(range: TimestampRangeValue | undefined) => void",
    description: "范围变化或清除后，返回当前时区对应的毫秒时间戳范围",
  },
  {
    name: "onTimeZoneChange",
    type: "(timeZone: string) => void",
    description: "用户切换时区后的回调",
  },
];

export default function DateRangePickerDoc() {
  return (
    <ComponentDocPage>
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">
          DateRangePicker 日期范围选择器
        </h1>
        <p className="mt-2 text-muted-foreground">
          日期范围选择器，支持年/月层级切换、日期禁用、起止时间约束、
          默认时间、快捷项和时区配置。
        </p>
      </div>

      <ComponentDemo
        title="日期范围选择（默认）"
        description="维护起止日期；确认范围后提交，快捷日期立即提交。"
        code={`import { DateRangePicker, type DateRangeValue } from "@easyfix/console-ui";
import { useState } from "react";

const [range, setRange] = useState<DateRangeValue | undefined>();

<div className="space-y-2">
  <DateRangePicker value={range} onChange={setRange} />
  <p className="text-xs text-muted-foreground">
    当前选择：{range?.from?.toLocaleDateString() ?? "—"} ~{" "}
    {range?.to?.toLocaleDateString() ?? "—"}
  </p>
</div>`}
      >
        <BasicRangePicker />
      </ComponentDemo>

      <ComponentDemo
        title="年份与月份快速切换"
        description="点击任一侧日历标题中的年份进入年份面板；选择年份后进入月份面板，再选择月份返回日期面板。左右日历保持相邻月份联动。"
        code={`const [range, setRange] = useState<DateRangeValue | undefined>();

<div className="space-y-2">
  <DateRangePicker
    value={range}
    onChange={setRange}
    defaultValue={new Date(2026, 6, 1)}
    startYear={2020}
    endYear={2035}
    shortcuts={false}
  />
  <p className="text-xs text-muted-foreground">
    点击任一侧标题中的年份或月份，可以快速切换到目标年月。
  </p>
</div>`}
      >
        <HierarchyRangePicker />
      </ComponentDemo>

      <ComponentDemo
        title="日期时间范围选择"
        description="showTime 在日历下方提供起止时间输入，并在确认后提交。"
        code={`import { DateRangePicker, type DateRangeValue } from "@easyfix/console-ui";
import { useState } from "react";

const [range, setRange] = useState<DateRangeValue | undefined>();

<div className="space-y-2">
  <DateRangePicker showTime value={range} onChange={setRange} />
  <p className="text-xs text-muted-foreground">
    开始：{range?.from?.toLocaleString() ?? "—"}{" "}
    &nbsp;结束：{range?.to?.toLocaleString() ?? "—"}
  </p>
</div>`}
      >
        <DatetimeRangePicker />
      </ComponentDemo>

      <ComponentDemo
        title="禁用日期与起止时间"
        description="disabledDate 限制日期；selectableRange 提供共同白名单；disabledTime 根据 start/end 角色追加不同约束。结束早于开始时不能确认。"
        code={`const [range, setRange] = useState<DateRangeValue | undefined>();

<DateRangePicker
  showTime
  value={range}
  onChange={setRange}
  defaultTime={["09:00:00", "18:00:00"]}
  selectableRange="08:00:00 - 20:00:00"
  disabledDate={(date: Date) => date.getDay() === 0 || date.getDay() === 6}
  disabledTime={(_date: Date, role: "single" | "start" | "end") => ({
    disabledHours:
      role === "start"
        ? [0, 1, 2, 3, 4, 5, 6, 7]
        : [21, 22, 23],
  })}
  minuteStep={15}
/>`}
      >
        <RestrictedDatetimeRangePicker />
      </ComponentDemo>

      <ComponentDemo
        title="快捷日期与时区"
        description="内置快捷项按当前时区计算，结束时间默认取日期最后时刻"
        code={`const [range, setRange] = useState<DateRangeValue | undefined>();
const [timeZone, setTimeZone] = useState("Asia/Ho_Chi_Minh");
const [timestamps, setTimestamps] = useState<TimestampRangeValue | undefined>();

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
</div>`}
      >
        <TimeZoneRangePicker />
      </ComponentDemo>

      <ComponentDemo
        title="自定义快捷项"
        description="shortcuts 可覆盖默认快捷项，回调参数提供当前时区下的 dayjs now"
        code={`const [range, setRange] = useState<DateRangeValue | undefined>();
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

<div className="w-full max-w-xl">
  <DateRangePicker
    value={range}
    onChange={setRange}
    shortcuts={shortcuts}
  />
</div>`}
      >
        <CustomShortcutsRangePicker />
      </ComponentDemo>

      <ComponentDemo
        title="禁用状态"
        description="设置 disabled 禁用范围选择"
        code={`const [range, setRange] = useState<DateRangeValue | undefined>({
  from: new Date(2026, 4, 1),
  to: new Date(2026, 4, 15),
});

<DateRangePicker value={range} onChange={setRange} disabled />`}
      >
        <DisabledRangePicker />
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">
        DateRangePicker 属性
      </h2>
      <PropsTable data={propsData} />

      <h2 className="font-heading text-xl font-semibold">
        DateRangePicker 事件
      </h2>
      <PropsTable data={eventsData} kind="events" />
    </div>
    </ComponentDocPage>
  );
}
