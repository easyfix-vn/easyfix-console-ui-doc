import { useState } from "react";
import { Calendar } from "@easyfix/console-ui";
import type { DateRange } from "react-day-picker";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

const propsData = [
  {
    name: "mode",
    type: '"single" | "multiple" | "range"',
    default: '"single"',
    description: "选择模式：单选、多选或范围选择",
  },
  {
    name: "selected",
    type: "Date | Date[] | DateRange",
    description: "受控模式下当前选中的日期",
  },
  {
    name: "onSelect",
    type: "(date: Date | Date[] | DateRange | undefined) => void",
    description: "日期选中变化的回调",
  },
  {
    name: "defaultMonth",
    type: "Date",
    description: "默认显示的月份",
  },
  {
    name: "disabled",
    type: "Matcher | Matcher[]",
    description: "禁用的日期，支持日期、范围、函数等匹配器",
  },
  {
    name: "showOutsideDays",
    type: "boolean",
    default: "true",
    description: "是否显示当前月外的日期",
  },
  {
    name: "locale",
    type: "Locale",
    description: "date-fns locale，不传则自动从 ConfigProvider 获取",
  },
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
];

function BasicDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
    />
  );
}

function RangeDemo() {
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });

  return (
    <Calendar
      mode="range"
      selected={range}
      onSelect={setRange}
      numberOfMonths={2}
    />
  );
}

export default function CalendarDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">Calendar 日历</h1>
        <p className="mt-2 text-muted-foreground">
          基于{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            react-day-picker
          </code>{" "}
          封装的日历组件，支持单选、多选和范围选择模式。自动从 ConfigProvider
          获取 locale 实现国际化。
        </p>
      </div>

      <ComponentDemo
        title="单日期"
        description="single 模式维护一个日期值。"
        code={`import { useState } from "react";
import { Calendar } from "@easyfix/console-ui";

const [date, setDate] = useState<Date | undefined>(new Date());

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
/>`}
      >
        <BasicDemo />
      </ComponentDemo>

      <ComponentDemo
        title="范围选择"
        description="range 模式维护起止日期，并支持多月展示。"
        code={`import { useState } from "react";
import { Calendar } from "@easyfix/console-ui";
import type { DateRange } from "react-day-picker";

const [range, setRange] = useState<DateRange | undefined>({
  from: new Date(),
  to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
});

<Calendar
  mode="range"
  selected={range}
  onSelect={setRange}
  numberOfMonths={2}
/>`}
      >
        <RangeDemo />
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">API</h2>
      <PropsTable data={propsData} />
    </div>
  );
}
