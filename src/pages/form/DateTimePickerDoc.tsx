import { DateTimePicker } from "@easyfix/console-ui";
import { useState } from "react";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";
import { ComponentDocPage } from "@/components/ComponentDocPage";

function BasicDateTimePicker() {
  const [date, setDate] = useState<Date | undefined>();
  return <DateTimePicker value={date} onChange={setDate} />;
}

function YearMonthDateTimePicker() {
  const [year, setYear] = useState<Date | undefined>();
  const [month, setMonth] = useState<Date | undefined>();

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <DateTimePicker
          type="year"
          value={year}
          onChange={setYear}
          defaultValue={new Date(2026, 6, 1)}
          startYear={2022}
          endYear={2030}
          disabledDate={(candidate: Date) =>
            candidate.getFullYear() === 2027
          }
          placeholder="选择年份"
        />
        <DateTimePicker
          type="month"
          value={month}
          onChange={setMonth}
          defaultValue={new Date(2026, 6, 1)}
          startYear={2022}
          endYear={2030}
          disabledDate={(candidate: Date) =>
            candidate.getFullYear() === 2026 &&
            [1, 6].includes(candidate.getMonth())
          }
          placeholder="选择年月"
        />
      </div>
      <p className="text-xs text-muted-foreground">
        年份：{year?.getFullYear() ?? "—"}；年月：
        {month
          ? `${month.getFullYear()}-${String(month.getMonth() + 1).padStart(2, "0")}`
          : "—"}
      </p>
    </div>
  );
}

function FormatTemplateDateTimePicker() {
  const [date, setDate] = useState<Date | undefined>();
  return (
    <div className="flex flex-wrap items-center gap-2">
      <DateTimePicker
        value={date}
        onChange={setDate}
        format="YYYY/MM/DD HH:mm"
        placeholder="YYYY/MM/DD HH:mm"
      />
      <DateTimePicker
        value={date}
        onChange={setDate}
        format="YYYY-MM-DD HH:mm:ss"
        placeholder="带秒"
        showSeconds
      />
    </div>
  );
}

function TimeZoneDateTimePicker() {
  const [date, setDate] = useState<Date | undefined>();
  const [timeZone, setTimeZone] = useState("Asia/Ho_Chi_Minh");
  const [timestamp, setTimestamp] = useState<number | undefined>();

  return (
    <div className="space-y-2">
      <DateTimePicker
        value={date}
        onChange={setDate}
        timeZone={timeZone}
        onTimeZoneChange={setTimeZone}
        onTimestampChange={setTimestamp}
      />
      <p className="text-xs text-muted-foreground">
        timeZone：{timeZone}；timestamp：{timestamp ?? "—"}
      </p>
    </div>
  );
}

function RestrictedDateTimePicker() {
  const [date, setDate] = useState<Date | undefined>();
  const disabledHours = [0, 1, 2, 3, 4, 5, 6, 7, 20, 21, 22, 23];

  return (
    <DateTimePicker
      value={date}
      onChange={setDate}
      defaultTime="09:30:00"
      selectableRange={["08:00:00 - 12:00:00", "13:30:00 - 19:59:59"]}
      disabledDate={(candidate: Date) => candidate.getDay() === 0}
      disabledTime={() => ({
        disabledHours,
        disabledMinutes: (hour: number) =>
          hour === 12 ? [30, 31, 32, 33, 34, 35] : [],
      })}
      minuteStep={5}
      showSeconds
    />
  );
}

const propsData = [
  {
    name: "type",
    type: '"datetime" | "date" | "month" | "year"',
    default: '"datetime"',
    description:
      "选择粒度。month/year 选中即提交当月 1 日/当年 1 月 1 日；date 可作为 datetime 的兼容别名。",
  },
  { name: "value", type: "Date", description: "选中的日期时间（受控）" },
  {
    name: "placeholder",
    type: "string",
    default:
      'datetime/date: i18n("datePicker.placeholderDateTime")\nmonth: i18n("datePicker.placeholderMonth")\nyear: i18n("datePicker.placeholderYear")',
    description: "占位文本，未传时根据 type 与当前 locale 取内置文案",
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
    description:
      "统一禁用规则。month 按当月 1 日判断，year 按当年 1 月 1 日判断，返回 true 时禁用对应月份或年份。",
  },
  {
    name: "selectableRange",
    type: "string | string[]",
    description: "datetime 模式的 Element UI 风格可选时间白名单，边界包含在内",
  },
  {
    name: "disabledTime",
    type:
      '(date: Date, role: "single" | "start" | "end") => DisabledTimeConfig',
    description:
      "datetime 模式按当前日期动态禁用小时、分钟或秒；运行时 role 为 single，并与 selectableRange 叠加生效",
  },
  {
    name: "defaultTime",
    type: "string | Date",
    default: '"00:00:00"',
    description: "datetime 模式空值首次选择日期时使用的时间",
  },
  {
    name: "showSeconds",
    type: "boolean",
    default: "false",
    description: "datetime 模式是否显示秒选择列",
  },
  {
    name: "hourStep / minuteStep / secondStep",
    type: "number",
    default: "1",
    description: "datetime 模式小时、分钟和秒的候选步长",
  },
  {
    name: "defaultValue",
    type: "Date",
    description: "未选择值时日历初始展示日期，不会直接提交",
  },
  {
    name: "startYear / endYear",
    type: "number",
    description: "年份面板的可导航和选择范围",
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
    name: "format",
    type: "string | (date: Date) => string",
    default:
      "datetime: locale 日期 + HH:mm\nmonth: locale 年月\nyear: YYYY",
    description: "格式化模板，同 DatePicker.format；默认值跟随 type 与 locale",
  },
  { name: "className", type: "string", description: "自定义样式类名" },
];

const eventsData = [
  {
    name: "onChange",
    type: "(date: Date | undefined) => void",
    description: "日期时间变化或清除后的回调",
  },
  {
    name: "onTimestampChange",
    type: "(timestamp: number | undefined) => void",
    description: "日期时间变化或清除后，返回当前时区对应的毫秒时间戳",
  },
  {
    name: "onTimeZoneChange",
    type: "(timeZone: string) => void",
    description: "用户切换时区后的回调",
  },
];

export default function DateTimePickerDoc() {
  return (
    <ComponentDocPage>
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">
          DateTimePicker 日期时间选择器
        </h1>
        <p className="mt-2 text-muted-foreground">
          日期时间选择器，支持完整日期时间、单独年份、年月选择、年月禁用、
          可选时间段、动态禁用时间和步长。
        </p>
      </div>

      <ComponentDemo
        title="日期时间"
        description="type 默认为 datetime。点击标题中的年份或月份，可按年份 → 月份 → 日期逐层定位，再设置具体时间。"
        code={`import { DateTimePicker } from "@easyfix/console-ui";
import { useState } from "react";

const [date, setDate] = useState<Date | undefined>();
<DateTimePicker value={date} onChange={setDate} />`}
      >
        <BasicDateTimePicker />
      </ComponentDemo>

      <ComponentDemo
        title="年份与年月选择"
        description="type=year 或 month 时不显示时间栏，选中后立即返回当年 1 月 1 日或当月 1 日。disabledDate 以这个最终返回日期为准，可直接禁用整年或整月。下例禁用 2027 年，以及 2026 年 2 月和 7 月。"
        code={`const [year, setYear] = useState<Date | undefined>();
const [month, setMonth] = useState<Date | undefined>();

<div className="space-y-3">
  <div className="flex flex-wrap items-center gap-2">
    <DateTimePicker
      type="year"
      value={year}
      onChange={setYear}
      defaultValue={new Date(2026, 6, 1)}
      startYear={2022}
      endYear={2030}
      disabledDate={(candidate: Date) =>
        candidate.getFullYear() === 2027
      }
      placeholder="选择年份"
    />
    <DateTimePicker
      type="month"
      value={month}
      onChange={setMonth}
      defaultValue={new Date(2026, 6, 1)}
      startYear={2022}
      endYear={2030}
      disabledDate={(candidate: Date) =>
        candidate.getFullYear() === 2026 &&
        [1, 6].includes(candidate.getMonth())
      }
      placeholder="选择年月"
    />
  </div>
  <p className="text-xs text-muted-foreground">
    年份：{year?.getFullYear() ?? "—"}；年月：
    {month
      ? \`\${month.getFullYear()}-\${String(month.getMonth() + 1).padStart(2, "0")}\`
      : "—"}
  </p>
</div>`}
      >
        <YearMonthDateTimePicker />
      </ComponentDemo>

      <ComponentDemo
        title="禁用日期与时间"
        description="disabledDate 禁用日期；selectableRange 是可选时间白名单，disabledTime 可再按日期动态禁用小时、分钟和秒。"
        code={`const [date, setDate] = useState<Date | undefined>();
const disabledHours = [0, 1, 2, 3, 4, 5, 6, 7, 20, 21, 22, 23];

<DateTimePicker
  value={date}
  onChange={setDate}
  defaultTime="09:30:00"
  selectableRange={["08:00:00 - 12:00:00", "13:30:00 - 19:59:59"]}
  disabledDate={(candidate: Date) => candidate.getDay() === 0}
  disabledTime={() => ({
    disabledHours,
    disabledMinutes: (hour: number) =>
      hour === 12 ? [30, 31, 32, 33, 34, 35] : [],
  })}
  minuteStep={5}
  showSeconds
/>`}
      >
        <RestrictedDateTimePicker />
      </ComponentDemo>

      <ComponentDemo
        title="字符串模板"
        description="format 接收包含 HH:mm:ss 的时间模板。"
        code={`const [date, setDate] = useState<Date | undefined>();

<div className="flex flex-wrap items-center gap-2">
  <DateTimePicker value={date} onChange={setDate} format="YYYY/MM/DD HH:mm" placeholder="YYYY/MM/DD HH:mm" />
  <DateTimePicker value={date} onChange={setDate} format="YYYY-MM-DD HH:mm:ss" placeholder="带秒" showSeconds />
</div>`}
      >
        <FormatTemplateDateTimePicker />
      </ComponentDemo>

      <ComponentDemo
        title="时区与时间戳"
        description="输入框展示 UTC 偏移；日期时间按当前时区编辑并转换为毫秒时间戳。"
        code={`const [date, setDate] = useState<Date | undefined>();
const [timeZone, setTimeZone] = useState("Asia/Ho_Chi_Minh");
const [timestamp, setTimestamp] = useState<number | undefined>();

<div className="space-y-2">
  <DateTimePicker
    value={date}
    onChange={setDate}
    timeZone={timeZone}
    onTimeZoneChange={setTimeZone}
    onTimestampChange={setTimestamp}
  />
  <p className="text-xs text-muted-foreground">
    timeZone：{timeZone}；timestamp：{timestamp ?? "—"}
  </p>
</div>`}
      >
        <TimeZoneDateTimePicker />
      </ComponentDemo>

      <ComponentDemo
        title="禁用状态"
        description="disabled 禁用选择器。"
        code={`<DateTimePicker disabled placeholder="不可选择" />`}
      >
        <DateTimePicker disabled placeholder="不可选择" />
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">
        DateTimePicker 属性
      </h2>
      <PropsTable data={propsData} />

      <h2 className="font-heading text-xl font-semibold">
        DateTimePicker 事件
      </h2>
      <PropsTable data={eventsData} kind="events" />
    </div>
    </ComponentDocPage>
  );
}
