import { DatePicker } from "@easyfix/console-ui";
import { useState } from "react";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";
import { ComponentDocPage } from "@/components/ComponentDocPage";

function BasicDatePicker() {
  const [date, setDate] = useState<Date | undefined>();
  return <DatePicker value={date} onChange={setDate} />;
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
  { name: "value", type: "Date", description: "选中日期（受控）" },
  {
    name: "onChange",
    type: "(date: Date | undefined) => void",
    description: "日期变化回调",
  },
  {
    name: "onTimestampChange",
    type: "(timestamp: number | undefined) => void",
    description: "按当前 timeZone 通过 dayjs.tz 转换后的毫秒时间戳回调",
  },
  {
    name: "placeholder",
    type: "string",
    default: 'i18n("datePicker.placeholder")',
    description: "占位文本，未传时根据当前 locale 取内置文案",
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
    name: "format",
    type: "string | (date: Date) => string",
    default:
      "zh-CN: YYYY-MM-DD\nen-US: MM/DD/YYYY\nvi: DD/MM/YYYY",
    description:
      "格式化模板（推荐）。模板支持 YYYY/YY/MM/M/DD/D/HH/H/mm/m/ss/s。也可传函数自定义。",
  },
  { name: "className", type: "string", description: "自定义样式类名" },
];

export default function DatePickerDoc() {
  return (
    <ComponentDocPage>
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">DatePicker 日期选择器</h1>
        <p className="mt-2 text-muted-foreground">
          单日期选择器，支持字符串模板格式化并随 locale 适配默认文案。
        </p>
      </div>

      <ComponentDemo
        title="单日期"
        description="触发器展开日历；占位文本与默认格式跟随当前 locale。"
        code={`import { DatePicker } from "@easyfix/console-ui";

const [date, setDate] = useState<Date | undefined>();

<DatePicker value={date} onChange={setDate} />`}
      >
        <BasicDatePicker />
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

<DatePicker
  value={date}
  onChange={setDate}
  timeZone={timeZone}
  onTimeZoneChange={setTimeZone}
  onTimestampChange={setTimestamp}
/>`}
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
  format={(d) => \`\${d.getFullYear()}年\${d.getMonth() + 1}月\${d.getDate()}日\`}
/>`}
      >
        <CustomFormatDatePicker />
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">DatePicker API</h2>
      <PropsTable data={propsData} />
    </div>
    </ComponentDocPage>
  );
}
