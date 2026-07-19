import { DatePicker } from "@easyfix/console-ui";
import { useState } from "react";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";
import { ComponentDocPage } from "@/components/ComponentDocPage";

function BasicDatePicker() {
  const [date, setDate] = useState<Date | undefined>();
  return <DatePicker value={date} onChange={setDate} />;
}

function YearMonthDatePicker() {
  const [year, setYear] = useState<Date | undefined>();
  const [month, setMonth] = useState<Date | undefined>();

  return (
    <div className="flex flex-wrap items-center gap-2">
      <DatePicker
        type="year"
        value={year}
        onChange={setYear}
        startYear={2020}
        endYear={2030}
        placeholder="选择年份"
      />
      <DatePicker
        type="month"
        value={month}
        onChange={setMonth}
        startYear={2020}
        endYear={2030}
        placeholder="选择月份"
      />
    </div>
  );
}

function isWeekendOrFuture(date: Date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const candidate = new Date(date);
  candidate.setHours(0, 0, 0, 0);

  return (
    candidate.getTime() > today.getTime() ||
    candidate.getDay() === 0 ||
    candidate.getDay() === 6
  );
}

function DisabledDatePicker() {
  const [date, setDate] = useState<Date | undefined>();
  return (
    <DatePicker
      value={date}
      onChange={setDate}
      disabledDate={isWeekendOrFuture}
      placeholder="仅可选择过往工作日"
    />
  );
}

function FormatTemplateDatePicker() {
  const [date, setDate] = useState<Date | undefined>();
  return (
    <div className="flex flex-wrap items-center gap-2">
      <DatePicker
        value={date}
        onChange={setDate}
        format="YYYY/MM/DD"
        placeholder="YYYY/MM/DD"
      />
      <DatePicker
        value={date}
        onChange={setDate}
        format="DD-MM-YYYY"
        placeholder="DD-MM-YYYY"
      />
      <DatePicker
        value={date}
        onChange={setDate}
        format="YYYY 年 M 月 D 日"
        placeholder="中文格式"
      />
    </div>
  );
}

function TimeZoneDatePicker() {
  const [date, setDate] = useState<Date | undefined>();
  const [timeZone, setTimeZone] = useState("Asia/Ho_Chi_Minh");
  const [timestamp, setTimestamp] = useState<number | undefined>();

  return (
    <div className="space-y-2">
      <DatePicker
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

function CustomFormatDatePicker() {
  const [date, setDate] = useState<Date | undefined>();
  return (
    <DatePicker
      value={date}
      onChange={setDate}
      format={(d: Date) =>
        `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
      }
    />
  );
}

const propsData = [
  {
    name: "type",
    type: '"date" | "month" | "year"',
    default: '"date"',
    description: "选择器类型，分别用于选择日期、月份或年份",
  },
  { name: "value", type: "Date", description: "选中日期（受控）" },
  {
    name: "defaultValue",
    type: "Date",
    description: "未选择值时初始展示的月份，不会作为选中值提交",
  },
  {
    name: "placeholder",
    type: "string",
    default:
      'date: i18n("datePicker.placeholder")\nmonth: i18n("datePicker.placeholderMonth")\nyear: i18n("datePicker.placeholderYear")',
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
      "统一禁用规则；date 按当天判断，month 按当月 1 日判断，year 按当年 1 月 1 日判断。返回 true 时禁用对应日期、月份或年份。",
  },
  {
    name: "startYear",
    type: "number",
    description: "年份面板可展示和选择的起始年份",
  },
  {
    name: "endYear",
    type: "number",
    description: "年份面板可展示和选择的结束年份",
  },
  { name: "className", type: "string", description: "自定义样式类名" },
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
      "date: zh-CN YYYY-MM-DD / en-US MM/DD/YYYY / vi DD/MM/YYYY\nmonth: zh-CN YYYY-MM / en-US、vi MM/YYYY\nyear: YYYY",
    description:
      "格式化模板（推荐），默认值跟随 type 与 locale。模板支持 YYYY/YY/MM/M/DD/D/HH/H/mm/m/ss/s，也可传函数自定义。",
  },
];

const eventsData = [
  {
    name: "onChange",
    type: "(date: Date | undefined) => void",
    description: "日期变化或清除后的回调",
  },
  {
    name: "onTimestampChange",
    type: "(timestamp: number | undefined) => void",
    description: "日期变化或清除后，返回当前时区对应的毫秒时间戳",
  },
  {
    name: "onTimeZoneChange",
    type: "(timeZone: string) => void",
    description: "用户切换时区后的回调",
  },
];

export default function DatePickerDoc() {
  return (
    <ComponentDocPage>
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">DatePicker 日期选择器</h1>
        <p className="mt-2 text-muted-foreground">
          日期选择器，支持日期、月份和年份选择、日期禁用、级联面板切换，
          并可通过字符串模板格式化及随 locale 适配默认文案。
        </p>
      </div>

      <ComponentDemo
        title="日期选择（默认）"
        description="type 默认为 date。展开日历后可点击标题中的年份或月份，进入年份 → 月份 → 日期的级联选择视图；占位文本与默认格式跟随当前 locale。"
        code={`import { DatePicker } from "@easyfix/console-ui";
import { useState } from "react";

const [date, setDate] = useState<Date | undefined>();

<DatePicker value={date} onChange={setDate} />`}
      >
        <BasicDatePicker />
      </ComponentDemo>

      <ComponentDemo
        title="年份与月份选择"
        description="通过 type 切换为年份或月份选择器；startYear 与 endYear 可限制面板中的年份范围。"
        code={`const [year, setYear] = useState<Date | undefined>();
const [month, setMonth] = useState<Date | undefined>();

<div className="flex flex-wrap items-center gap-2">
  <DatePicker
    type="year"
    value={year}
    onChange={setYear}
    startYear={2020}
    endYear={2030}
    placeholder="选择年份"
  />
  <DatePicker
    type="month"
    value={month}
    onChange={setMonth}
    startYear={2020}
    endYear={2030}
    placeholder="选择月份"
  />
</div>`}
      >
        <YearMonthDatePicker />
      </ComponentDemo>

      <ComponentDemo
        title="禁用日期"
        description="disabledDate 返回 true 的日期不可选择；下例同时禁用周末和未来日期。"
        code={`const [date, setDate] = useState<Date | undefined>();

function isWeekendOrFuture(date: Date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const candidate = new Date(date);
  candidate.setHours(0, 0, 0, 0);

  return (
    candidate.getTime() > today.getTime() ||
    candidate.getDay() === 0 ||
    candidate.getDay() === 6
  );
}

<DatePicker
  value={date}
  onChange={setDate}
  disabledDate={isWeekendOrFuture}
  placeholder="仅可选择过往工作日"
/>`}
      >
        <DisabledDatePicker />
      </ComponentDemo>

      <ComponentDemo
        title="字符串模板"
        description={`format 接收字符串模板，支持 YYYY、MM、DD、HH、mm、ss 等 token。`}
        code={`const [date, setDate] = useState<Date | undefined>();

<div className="flex flex-wrap items-center gap-2">
  <DatePicker value={date} onChange={setDate} format="YYYY/MM/DD" placeholder="YYYY/MM/DD" />
  <DatePicker value={date} onChange={setDate} format="DD-MM-YYYY" placeholder="DD-MM-YYYY" />
  <DatePicker value={date} onChange={setDate} format="YYYY 年 M 月 D 日" placeholder="中文格式" />
</div>`}
      >
        <FormatTemplateDatePicker />
      </ComponentDemo>

      <ComponentDemo
        title="时区与时间戳"
        description="输入框展示 UTC 偏移；dayjs.tz 按当前时区输出毫秒时间戳。"
        code={`const [date, setDate] = useState<Date | undefined>();
const [timeZone, setTimeZone] = useState("Asia/Ho_Chi_Minh");
const [timestamp, setTimestamp] = useState<number | undefined>();

<div className="space-y-2">
  <DatePicker
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
        <TimeZoneDatePicker />
      </ComponentDemo>

      <ComponentDemo
        title="禁用状态"
        description="disabled 禁用日期选择。"
        code={`<DatePicker disabled placeholder="不可选择" />`}
      >
        <DatePicker disabled placeholder="不可选择" />
      </ComponentDemo>

      <ComponentDemo
        title="自定义格式函数"
        description="format 支持函数，适用于自定义本地化逻辑。"
        code={`const [date, setDate] = useState<Date | undefined>();

<DatePicker
  value={date}
  onChange={setDate}
  format={(d: Date) => \`\${d.getFullYear()}年\${d.getMonth() + 1}月\${d.getDate()}日\`}
/>`}
      >
        <CustomFormatDatePicker />
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">DatePicker 属性</h2>
      <PropsTable data={propsData} />

      <h2 className="font-heading text-xl font-semibold">DatePicker 事件</h2>
      <PropsTable data={eventsData} kind="events" />
    </div>
    </ComponentDocPage>
  );
}
