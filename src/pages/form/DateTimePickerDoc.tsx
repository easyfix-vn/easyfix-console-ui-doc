import { DateTimePicker } from "@easyfix/console-ui";
import { useState } from "react";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";
import { ComponentDocPage } from "@/components/ComponentDocPage";

function BasicDateTimePicker() {
  const [date, setDate] = useState<Date | undefined>();
  return <DateTimePicker value={date} onChange={setDate} />;
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

const propsData = [
  { name: "value", type: "Date", description: "选中的日期时间（受控）" },
  {
    name: "onChange",
    type: "(date: Date | undefined) => void",
    description: "日期时间变化回调",
  },
  {
    name: "onTimestampChange",
    type: "(timestamp: number | undefined) => void",
    description: "按当前 timeZone 通过 dayjs.tz 转换后的毫秒时间戳回调",
  },
  {
    name: "placeholder",
    type: "string",
    default: 'i18n("datePicker.placeholderDateTime")',
    description: "占位文本，未传时根据当前 locale 取内置文案",
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
    name: "format",
    type: "string | (date: Date) => string",
    default:
      "zh-CN: YYYY-MM-DD HH:mm\nen-US: MM/DD/YYYY HH:mm\nvi: DD/MM/YYYY HH:mm",
    description: "格式化模板，同 DatePicker.format",
  },
  { name: "className", type: "string", description: "自定义样式类名" },
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
          日期时间选择器，支持日期、时间输入和主题适配。
        </p>
      </div>

      <ComponentDemo
        title="日期时间"
        description="日历面板提供时间输入，并遵循当前主题。"
        code={`import { DateTimePicker } from "@easyfix/console-ui";

const [date, setDate] = useState<Date | undefined>();
<DateTimePicker value={date} onChange={setDate} />`}
      >
        <BasicDateTimePicker />
      </ComponentDemo>

      <ComponentDemo
        title="字符串模板"
        description="format 接收包含 HH:mm:ss 的时间模板。"
        code={`const [date, setDate] = useState<Date | undefined>();

<div className="flex flex-wrap items-center gap-2">
  <DateTimePicker value={date} onChange={setDate} format="YYYY/MM/DD HH:mm" placeholder="YYYY/MM/DD HH:mm" />
  <DateTimePicker value={date} onChange={setDate} format="YYYY-MM-DD HH:mm:ss" placeholder="带秒" />
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

<DateTimePicker
  value={date}
  onChange={setDate}
  timeZone={timeZone}
  onTimeZoneChange={setTimeZone}
  onTimestampChange={setTimestamp}
/>`}
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

      <h2 className="font-heading text-xl font-semibold">DateTimePicker API</h2>
      <PropsTable data={propsData} />
    </div>
    </ComponentDocPage>
  );
}
