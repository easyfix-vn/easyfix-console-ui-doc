import {
  Input,
  TimePicker,
  TimeRangePicker,
  TimeSelect,
  type TimeRangeValue,
  type TimestampRangeValue,
} from "@easyfix/console-ui";
import { useState } from "react";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";
import { ComponentDocPage } from "@/components/ComponentDocPage";

function BasicTimePicker() {
  const [time, setTime] = useState<Date | undefined>();
  return <TimePicker value={time} onChange={setTime} />;
}

function FixedTimePointPicker() {
  const [start, setStart] = useState("08:30");
  const [end, setEnd] = useState("18:30");
  const [step, setStep] = useState("00:30");
  const [value, setValue] = useState<string | undefined>();

  return (
    <div className="w-full max-w-xl space-y-4">
      <div className="grid gap-3 sm:grid-cols-3">
        <label className="space-y-1.5 text-sm">
          <span className="font-medium">起始时间</span>
          <Input
            aria-label="起始时间"
            onChange={(event) => setStart(event.target.value)}
            type="time"
            value={start}
          />
        </label>
        <label className="space-y-1.5 text-sm">
          <span className="font-medium">结束时间</span>
          <Input
            aria-label="结束时间"
            onChange={(event) => setEnd(event.target.value)}
            type="time"
            value={end}
          />
        </label>
        <label className="space-y-1.5 text-sm">
          <span className="font-medium">步长</span>
          <Input
            aria-label="步长"
            onChange={(event) => setStep(event.target.value)}
            inputMode="numeric"
            placeholder="HH:mm"
            type="text"
            value={step}
          />
        </label>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <TimeSelect
          end={end}
          onChange={setValue}
          placeholder="选择固定时间点"
          start={start}
          step={step}
          value={value ?? null}
        />
        <span className="text-sm text-muted-foreground">
          当前选择：{value ?? "—"}
        </span>
      </div>
    </div>
  );
}

function RestrictedTimePicker() {
  const [time, setTime] = useState<Date | undefined>();
  const selectableRange = [
    "08:00:00 - 12:00:00",
    "13:30:00 - 18:00:00",
  ];

  function disableReservedSlots(
    _date: Date,
    _role: "single" | "start" | "end",
  ) {
    return {
      disabledMinutes: (hour: number) => (hour === 10 ? [0, 15] : []),
    };
  }

  return (
    <TimePicker
      value={time}
      onChange={setTime}
      defaultTime="09:30:00"
      selectableRange={selectableRange}
      disabledTime={disableReservedSlots}
      minuteStep={15}
      secondStep={15}
      showSeconds
      placeholder="选择工作时段"
    />
  );
}

function BasicTimeRangePicker() {
  const [range, setRange] = useState<TimeRangeValue | undefined>();

  return (
    <TimeRangePicker
      value={range}
      onChange={setRange}
      defaultTime={["09:00:00", "18:00:00"]}
      minuteStep={15}
    />
  );
}

function FixedTimeRangePicker() {
  const [startTime, setStartTime] = useState<string | undefined>();
  const [endTime, setEndTime] = useState<string | undefined>();

  const handleStartChange = (nextValue: string | undefined) => {
    setStartTime(nextValue);
    if (nextValue && endTime && endTime <= nextValue) setEndTime(undefined);
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <TimeSelect
        end="18:30"
        onChange={handleStartChange}
        placeholder="开始时间"
        start="08:30"
        step="00:30"
        value={startTime ?? null}
      />
      <span className="text-sm text-muted-foreground">至</span>
      <TimeSelect
        end="18:30"
        minTime={startTime}
        onChange={setEndTime}
        placeholder="结束时间"
        start="08:30"
        step="00:30"
        value={endTime ?? null}
      />
    </div>
  );
}

const timeSelectPropsData = [
  {
    name: "value",
    type: "string | null",
    description: "HH:mm 格式的受控值",
  },
  {
    name: "defaultValue",
    type: "string",
    description: "HH:mm 格式的非受控默认值",
  },
  {
    name: "start",
    type: "string",
    default: '"09:00"',
    description: "生成固定时间点的起始时间（包含）",
  },
  {
    name: "end",
    type: "string",
    default: '"18:00"',
    description: "生成固定时间点的结束时间（对齐步长时包含）",
  },
  {
    name: "step",
    type: "string",
    default: '"00:30"',
    description: "从 start 开始递增的 HH:mm 间隔",
  },
  {
    name: "minTime / maxTime",
    type: "string",
    description: "动态禁用小于等于最小值或大于等于最大值的固定时间点",
  },
  {
    name: "disabled / clearable",
    type: "boolean",
    default: "false / true",
    description: "禁用整个选择器 / 是否允许清除",
  },
  {
    name: "placeholder / ariaLabel / className / popupClassName",
    type: "string",
    description: "占位文本、无障碍标签、触发器类名和下拉列表类名",
  },
];

const timeSelectEventsData = [
  {
    name: "onChange",
    type: "(value: string | undefined) => void",
    description: "选择或清除固定时间点后的回调",
  },
];

const commonPropsData = [
  {
    name: "placeholder",
    type: "string",
    default: "内置 i18n 文案",
    description: "未选择时间时的占位文本",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用选择器",
  },
  {
    name: "clearable",
    type: "boolean",
    default: "true",
    description: "是否显示清除按钮",
  },
  {
    name: "selectableRange",
    type: "string | string[]",
    description:
      'Element UI 风格的可选时间白名单，例如 "08:00:00 - 18:00:00"；边界包含在内',
  },
  {
    name: "showSeconds",
    type: "boolean",
    default: "false",
    description: "是否显示秒选择列",
  },
  {
    name: "hourStep",
    type: "number",
    default: "1",
    description: "小时候选项的步长",
  },
  {
    name: "minuteStep",
    type: "number",
    default: "1",
    description: "分钟候选项的步长",
  },
  {
    name: "secondStep",
    type: "number",
    default: "1",
    description: "秒候选项的步长",
  },
  {
    name: "format",
    type: "string | (date: Date) => string",
    default: '"HH:mm"',
    description:
      "输入框格式化模板或自定义格式化函数；模板支持 HH/H/mm/m/ss/s",
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
    description: "是否展示 UTC 偏移 tag 和时区选择",
  },
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
];

const commonEventsData = [
  {
    name: "onTimeZoneChange",
    type: "(timeZone: string) => void",
    description: "用户切换时区后的回调",
  },
];

const timePickerPropsData = [
  {
    name: "value",
    type: "Date",
    description: "选中时间（受控）",
  },
  {
    name: "defaultTime",
    type: "string | Date",
    default: '"00:00:00"',
    description: "空值时面板初始展示的时间，不会直接提交",
  },
  {
    name: "disabledTime",
    type:
      '(date: Date, role: "single" | "start" | "end") => DisabledTimeConfig',
    description:
      "动态禁用小时、分钟或秒；role 固定为 single，并与 selectableRange 叠加生效",
  },
];

const timePickerEventsData = [
  {
    name: "onChange",
    type: "(date: Date | undefined) => void",
    description: "确认或清除时间后的回调",
  },
  {
    name: "onTimestampChange",
    type: "(timestamp: number | undefined) => void",
    description: "确认或清除后，返回当前时区对应的毫秒时间戳",
  },
];

const timeRangePickerPropsData = [
  {
    name: "value",
    type: "TimeRangeValue",
    description: "开始和结束时间（受控）",
  },
  {
    name: "defaultTime",
    type: "readonly [string | Date, string | Date]",
    default: '["00:00:00", "23:59:59"]',
    description: "空值时开始、结束面板初始展示的时间，不会直接提交",
  },
  {
    name: "separator",
    type: "ReactNode",
    default: "内置 i18n 分隔符",
    description: "开始和结束时间之间的分隔内容",
  },
  {
    name: "disabledTime",
    type:
      '(date: Date, role: "single" | "start" | "end") => DisabledTimeConfig',
    description:
      "按开始或结束端动态禁用小时、分钟或秒，并与 selectableRange 叠加生效",
  },
];

const timeRangePickerEventsData = [
  {
    name: "onChange",
    type: "(range: TimeRangeValue | undefined) => void",
    description: "确认或清除时间范围后的回调",
  },
  {
    name: "onTimestampChange",
    type: "(range: TimestampRangeValue | undefined) => void",
    description: "确认或清除后，返回当前时区对应的毫秒时间戳范围",
  },
];

export default function TimePickerDoc() {
  return (
    <ComponentDocPage>
      <div className="space-y-8">
        <div>
          <h1 className="font-heading text-3xl font-bold">
            TimePicker 时间选择器
          </h1>
          <p className="mt-2 text-muted-foreground">
            TimeSelect 按起止时间与步长生成固定时间点；TimePicker 与
            TimeRangePicker 用于任意时间和时间范围，并支持动态禁用、秒和时区。
          </p>
        </div>

        <ComponentDemo
          title="固定时间点"
          description="TimeSelect 接收 start、end 和 step，从起始时间开始按步长生成固定选项。下例可直接修改三项配置查看结果。"
          code={`import { Input, TimeSelect } from "@easyfix/console-ui";
import { useState } from "react";

const [start, setStart] = useState("08:30");
const [end, setEnd] = useState("18:30");
const [step, setStep] = useState("00:30");
const [value, setValue] = useState<string | undefined>();

<div className="w-full max-w-xl space-y-4">
  <div className="grid gap-3 sm:grid-cols-3">
    <label className="space-y-1.5 text-sm">
      <span className="font-medium">起始时间</span>
      <Input
        aria-label="起始时间"
        onChange={(event) => setStart(event.target.value)}
        type="time"
        value={start}
      />
    </label>
    <label className="space-y-1.5 text-sm">
      <span className="font-medium">结束时间</span>
      <Input
        aria-label="结束时间"
        onChange={(event) => setEnd(event.target.value)}
        type="time"
        value={end}
      />
    </label>
    <label className="space-y-1.5 text-sm">
      <span className="font-medium">步长</span>
      <Input
        aria-label="步长"
        onChange={(event) => setStep(event.target.value)}
        inputMode="numeric"
        placeholder="HH:mm"
        type="text"
        value={step}
      />
    </label>
  </div>
  <div className="flex flex-wrap items-center gap-3">
    <TimeSelect
      end={end}
      onChange={setValue}
      placeholder="选择固定时间点"
      start={start}
      step={step}
      value={value ?? null}
    />
    <span className="text-sm text-muted-foreground">
      当前选择：{value ?? "—"}
    </span>
  </div>
</div>`}
        >
          <FixedTimePointPicker />
        </ComponentDemo>

        <ComponentDemo
          title="任意时间点"
          description="TimePicker 使用 Date 作为受控值；小时、分钟和秒可以分别选择，确认后提交。"
          code={`import { TimePicker } from "@easyfix/console-ui";
import { useState } from "react";

const [time, setTime] = useState<Date | undefined>();

<TimePicker value={time} onChange={setTime} />`}
        >
          <BasicTimePicker />
        </ComponentDemo>

        <ComponentDemo
          title="任意时间点与禁用时间"
          description="selectableRange 约束任意时间的可选白名单；disabledTime 可继续动态禁用小时、分钟或秒。它与固定时间点的 start/end/step 是两种不同模式。"
          code={`const [time, setTime] = useState<Date | undefined>();

const selectableRange = [
  "08:00:00 - 12:00:00",
  "13:30:00 - 18:00:00",
];

function disableReservedSlots(
  _date: Date,
  _role: "single" | "start" | "end",
) {
  return {
    disabledMinutes: (hour: number) =>
      hour === 10 ? [0, 15] : [],
  };
}

<TimePicker
  value={time}
  onChange={setTime}
  defaultTime="09:30:00"
  selectableRange={selectableRange}
  disabledTime={disableReservedSlots}
  minuteStep={15}
  secondStep={15}
  showSeconds
  placeholder="选择工作时段"
/>`}
        >
          <RestrictedTimePicker />
        </ComponentDemo>

        <ComponentDemo
          title="固定时间范围"
          description="组合两个 TimeSelect；开始时间确定后，通过第二个选择器的 minTime 禁用不晚于开始值的选项。"
          code={`import { TimeSelect } from "@easyfix/console-ui";
import { useState } from "react";

const [startTime, setStartTime] = useState<string | undefined>();
const [endTime, setEndTime] = useState<string | undefined>();

const handleStartChange = (nextValue: string | undefined) => {
  setStartTime(nextValue);
  if (nextValue && endTime && endTime <= nextValue) setEndTime(undefined);
};

<div className="flex flex-wrap items-center gap-2">
  <TimeSelect
    end="18:30"
    onChange={handleStartChange}
    placeholder="开始时间"
    start="08:30"
    step="00:30"
    value={startTime ?? null}
  />
  <span className="text-sm text-muted-foreground">至</span>
  <TimeSelect
    end="18:30"
    minTime={startTime}
    onChange={setEndTime}
    placeholder="结束时间"
    start="08:30"
    step="00:30"
    value={endTime ?? null}
  />
</div>`}
        >
          <FixedTimeRangePicker />
        </ComponentDemo>

        <ComponentDemo
          title="任意时间范围"
          description="TimeRangePicker 维护开始与结束时间，并确保结束时间不早于开始时间。"
          code={`import {
  TimeRangePicker,
  type TimeRangeValue,
} from "@easyfix/console-ui";

const [range, setRange] = useState<TimeRangeValue | undefined>();

<TimeRangePicker
  value={range}
  onChange={setRange}
  defaultTime={["09:00:00", "18:00:00"]}
  minuteStep={15}
/>`}
        >
          <BasicTimeRangePicker />
        </ComponentDemo>

        <section className="space-y-3">
          <h2 className="font-heading text-xl font-semibold">
            TimeSelect 属性
          </h2>
          <PropsTable data={timeSelectPropsData} />
          <h3 className="font-heading text-lg font-semibold">
            TimeSelect 事件
          </h3>
          <PropsTable data={timeSelectEventsData} kind="events" />
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl font-semibold">
            TimePicker / TimeRangePicker 公共属性
          </h2>
          <p className="text-sm text-muted-foreground">
            下列属性同时适用于 TimePicker 与 TimeRangePicker。
          </p>
          <PropsTable data={commonPropsData} />
          <h3 className="font-heading text-lg font-semibold">
            公共事件
          </h3>
          <PropsTable data={commonEventsData} kind="events" />
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl font-semibold">
            TimePicker 差异属性
          </h2>
          <PropsTable data={timePickerPropsData} />
          <h3 className="font-heading text-lg font-semibold">
            TimePicker 事件
          </h3>
          <PropsTable data={timePickerEventsData} kind="events" />
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-xl font-semibold">
            TimeRangePicker 差异属性
          </h2>
          <PropsTable data={timeRangePickerPropsData} />
          <h3 className="font-heading text-lg font-semibold">
            TimeRangePicker 事件
          </h3>
          <PropsTable data={timeRangePickerEventsData} kind="events" />
        </section>
      </div>
    </ComponentDocPage>
  );
}
