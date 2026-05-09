import { DateTimePicker } from "@easyfix/console-ui";
import { useState } from "react";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

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

const propsData = [
  { name: "value", type: "Date", description: "选中的日期时间（受控）" },
  {
    name: "onChange",
    type: "(date: Date | undefined) => void",
    description: "日期时间变化回调",
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
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">
          DateTimePicker 日期时间选择器
        </h1>
        <p className="mt-2 text-muted-foreground">
          在日期选择器的基础上增加了时间输入，时间输入控件已重写以适配主题色（包含暗色模式）。
          如需选择日期时间范围，请使用{" "}
          <a href="/form/date-range-picker" className="text-primary underline underline-offset-4">
            DateRangePicker（showTime）
          </a>
          。
        </p>
      </div>

      <ComponentDemo
        title="基础用法"
        description="选择日期后可在底部调整时间，时间输入框跟随主题色"
        code={`import { DateTimePicker } from "@easyfix/console-ui";

const [date, setDate] = useState<Date | undefined>();
<DateTimePicker value={date} onChange={setDate} />`}
      >
        <BasicDateTimePicker />
      </ComponentDemo>

      <ComponentDemo
        title="字符串模板"
        description="通过 format 传入字符串模板，包含时间 token：HH:mm:ss"
        code={`<DateTimePicker format="YYYY/MM/DD HH:mm" />
<DateTimePicker format="YYYY-MM-DD HH:mm:ss" />`}
      >
        <FormatTemplateDateTimePicker />
      </ComponentDemo>

      <ComponentDemo
        title="禁用状态"
        description="设置 disabled 禁用选择器"
        code={`<DateTimePicker disabled placeholder="不可选择" />`}
      >
        <DateTimePicker disabled placeholder="不可选择" />
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">DateTimePicker API</h2>
      <PropsTable data={propsData} />
    </div>
  );
}
