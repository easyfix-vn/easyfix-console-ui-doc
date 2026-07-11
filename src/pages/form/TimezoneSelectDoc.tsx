import {
  ConfigProvider,
  TimezoneSelect,
  useConfig,
} from "@easyfix/console-ui";
import { useState } from "react";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

function ControlledTimezoneSelect() {
  const [timeZone, setTimeZone] = useState("Asia/Shanghai");

  return (
    <div className="space-y-2">
      <TimezoneSelect
        label="时区"
        value={timeZone}
        onValueChange={setTimeZone}
      />
      <p className="text-xs text-muted-foreground">当前值：{timeZone}</p>
    </div>
  );
}

function ConfigTimezoneValue() {
  const { timeZone } = useConfig();
  return (
    <p className="text-xs text-muted-foreground">
      当前 ConfigProvider.timeZone：{timeZone}
    </p>
  );
}

function ConfigTimezoneSelect() {
  return (
    <ConfigProvider locale="zh-CN" timeZone="Asia/Ho_Chi_Minh">
      <div className="space-y-2">
        <TimezoneSelect label="默认时区" />
        <ConfigTimezoneValue />
      </div>
    </ConfigProvider>
  );
}

const propsData = [
  {
    name: "value",
    type: "IanaTimeZone",
    description: "受控 IANA 时区值；未传时使用 ConfigProvider.timeZone",
  },
  {
    name: "defaultValue",
    type: "IanaTimeZone",
    description: "非受控默认 IANA 时区，优先级高于 ConfigProvider.timeZone",
  },
  {
    name: "onValueChange",
    type: "(timeZone: IanaTimeZone) => void",
    description: "时区变化回调，返回 IANA 时区标识",
  },
  {
    name: "options",
    type: "TimeZoneOption[]",
    description: "自定义时区选项；默认提供 UTC-12 至 UTC+14 的代表城市",
  },
  {
    name: "label",
    type: "ReactNode",
    description: "选择器左侧标签",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用",
  },
  { name: "className", type: "string", description: "自定义根节点样式" },
];

export default function TimezoneSelectDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">
          TimezoneSelect 时区选择器
        </h1>
        <p className="mt-2 text-muted-foreground">
          提供从 UTC-12 到 UTC+14 的代表性时区选项。UTC+07 使用 Vietnam · Ho Chi
          Minh，UTC+08 使用 China · Shanghai；选项名称会随 ConfigProvider.locale
          国际化。
          当 value 是同一 UTC 偏移下的其它 IANA 时区时，选择结果会显示实际的 IANA
          值，不再借用代表城市名称。
          城市范围参考{" "}
          <a
            href="https://time.is/time_zones"
            target="_blank"
            rel="noreferrer"
            className="text-primary underline underline-offset-4"
          >
            time.is time zones
          </a>
          。
        </p>
      </div>

      <ComponentDemo
        title="受控选择"
        description="左侧为勾选状态；仅当选项 IANA 值与浏览器时区完全一致时，右侧显示“当前时区”标签"
        code={`import { TimezoneSelect } from "@easyfix/console-ui";

const [timeZone, setTimeZone] = useState("Asia/Shanghai");

<TimezoneSelect
  label="时区"
  value={timeZone}
  onValueChange={setTimeZone}
/>`}
      >
        <ControlledTimezoneSelect />
      </ComponentDemo>

      <ComponentDemo
        title="读取 ConfigProvider 默认值"
        description="未传 value 和 defaultValue 时读取 ConfigProvider.timeZone；日期组件遵循相同默认值。"
        code={`<ConfigProvider timeZone="Asia/Ho_Chi_Minh">
  <TimezoneSelect label="默认时区" />
</ConfigProvider>`}
      >
        <ConfigTimezoneSelect />
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">TimezoneSelect API</h2>
      <PropsTable data={propsData} />
    </div>
  );
}
