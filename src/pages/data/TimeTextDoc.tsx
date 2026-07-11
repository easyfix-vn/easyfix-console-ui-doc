import { EasyTimeText } from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

const timestamp = Date.UTC(2026, 6, 11, 13, 30);
const sameDateRange = [
  Date.UTC(2026, 6, 11, 1, 0),
  Date.UTC(2026, 6, 11, 3, 30),
  Date.UTC(2026, 6, 11, 5, 15),
];
const multiDateRange = [
  "2026-07-11T01:00:00Z",
  "2026-07-11T03:30:00Z",
  "2026-07-12T02:15:00Z",
];

const propsData = [
  { name: "value", type: "string | number | Date | Array<string | number | Date> | null | undefined", description: "时间值；支持秒级/毫秒级时间戳、Date、可解析时间字符串和时间数组" },
  { name: "timeZone", type: "string", description: "IANA 时区或常见缩写，如 Asia/Ho_Chi_Minh、Asia/Shanghai、UTC、ICT、CST；默认读取浏览器/系统时区" },
  { name: "locale", type: "string", default: '"en-CA"', description: "Intl locale，默认稳定输出 YYYY-MM-DD 风格" },
  { name: "format", type: '"datetime" | "date" | "time" | string', default: '"datetime"', description: "展示日期时间、仅日期或仅时间；也支持 YYYY、MM、DD、HH、mm、ss、A 等格式化 token" },
  { name: "hour12", type: "boolean", default: "false", description: "是否使用 12 小时制" },
  { name: "showTimeZone", type: "boolean", default: "true", description: "是否展示 UTC+时区偏移，如 UTC+07" },
  { name: "size", type: '"sm" | "default" | "lg"', default: '"default"', description: "文字尺寸" },
  { name: "emptyText", type: "string", default: '"-"', description: "空值或无效值展示文本" },
  { name: "rangeSeparator", type: "string", default: '" - "', description: "同日时间区间分隔符" },
  { name: "groupSeparator", type: "string", default: '"; "', description: "多日期分组分隔符" },
  { name: "className", type: "string", description: "自定义样式类名" },
];

const abbreviationData = [
  ["UTC / GMT", "UTC"],
  ["ICT", "Asia/Ho_Chi_Minh"],
  ["CST", "Asia/Shanghai"],
  ["SGT", "Asia/Singapore"],
  ["JST", "Asia/Tokyo"],
  ["EST / EDT", "America/New_York"],
  ["PST / PDT", "America/Los_Angeles"],
];

const ianaLocaleData = [
  ["Asia/Ho_Chi_Minh", "vi-VN", "越南时间，显示 UTC+07"],
  ["Asia/Shanghai", "zh-CN", "中国时间，显示 UTC+08"],
  ["UTC", "en-CA", "协调世界时，显示 UTC+00"],
];

export default function TimeTextDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">
          TimeText 时间文本
        </h1>
        <p className="mt-2 text-muted-foreground">
          时间文本组件支持秒级/毫秒级时间戳、Date、时间字符串和时间数组；未传 timeZone 时默认使用当前浏览器或操作系统时区。
        </p>
      </div>

      <ComponentDemo
        title="默认解析"
        description="自动识别毫秒、秒级时间戳和标准时间字符串。"
        code={`import { EasyTimeText } from "@easyfix/console-ui";

<EasyTimeText value={Date.UTC(2026, 6, 11, 13, 30)} timeZone="UTC" />
<EasyTimeText value={1783776600} timeZone="UTC" />
<EasyTimeText value="2026-07-11T13:30:00Z" timeZone="UTC" />`}
      >
        <div className="flex flex-col gap-3">
          <EasyTimeText value={timestamp} timeZone="UTC" />
          <EasyTimeText value={timestamp / 1000} timeZone="UTC" />
          <EasyTimeText value="2026-07-11T13:30:00Z" timeZone="UTC" />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="时区转换"
        description="timeZone 支持 IANA 时区和常见缩写；界面统一显示 UTC 偏移。"
        code={`<EasyTimeText value={timestamp} timeZone="Asia/Ho_Chi_Minh" locale="vi-VN" />
<EasyTimeText value={timestamp} timeZone="Asia/Shanghai" locale="zh-CN" />
<EasyTimeText value={timestamp} timeZone="ICT" locale="vi-VN" />
<EasyTimeText value={timestamp} />`}
      >
        <div className="flex flex-col gap-3">
          <EasyTimeText value={timestamp} timeZone="Asia/Ho_Chi_Minh" locale="vi-VN" />
          <EasyTimeText value={timestamp} timeZone="Asia/Shanghai" locale="zh-CN" />
          <EasyTimeText value={timestamp} timeZone="ICT" locale="vi-VN" />
          <EasyTimeText value={timestamp} />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="时间数组区间"
        description="同日时间合并为区间，跨日期按日期分组。"
        code={`<EasyTimeText
  value={[
    Date.UTC(2026, 6, 11, 1, 0),
    Date.UTC(2026, 6, 11, 3, 30),
    Date.UTC(2026, 6, 11, 5, 15),
  ]}
  timeZone="UTC"
/>
<EasyTimeText
  value={["2026-07-11T01:00:00Z", "2026-07-12T02:15:00Z"]}
  timeZone="UTC"
/>`}
      >
        <div className="flex flex-col gap-3">
          <EasyTimeText value={sameDateRange} timeZone="UTC" />
          <EasyTimeText value={multiDateRange} timeZone="UTC" />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="格式化"
        description="format 支持日期、时间及自定义 token。"
        code={`<EasyTimeText value={timestamp} timeZone="UTC" format="date" />
<EasyTimeText value={timestamp} timeZone="UTC" format="time" />
<EasyTimeText
  value={timestamp}
  timeZone="Asia/Ho_Chi_Minh"
  locale="vi-VN"
  format="DD/MM/YYYY HH:mm:ss"
/>
<EasyTimeText
  value={timestamp}
  timeZone="Asia/Shanghai"
  locale="zh-CN"
  format="YYYY年MM月DD日 HH:mm:ss"
/>
<EasyTimeText value={timestamp} timeZone="UTC" format="HH:mm:ss" />
<EasyTimeText value={timestamp} timeZone="UTC" hour12 />
<EasyTimeText value={timestamp} timeZone="UTC" showTimeZone={false} />`}
      >
        <div className="flex flex-col gap-3">
          <EasyTimeText value={timestamp} timeZone="UTC" format="date" />
          <EasyTimeText value={timestamp} timeZone="UTC" format="time" />
          <EasyTimeText
            value={timestamp}
            timeZone="Asia/Ho_Chi_Minh"
            locale="vi-VN"
            format="DD/MM/YYYY HH:mm:ss"
          />
          <EasyTimeText
            value={timestamp}
            timeZone="Asia/Shanghai"
            locale="zh-CN"
            format="YYYY年MM月DD日 HH:mm:ss"
          />
          <EasyTimeText value={timestamp} timeZone="UTC" format="HH:mm:ss" />
          <EasyTimeText value={timestamp} timeZone="UTC" hour12 />
          <EasyTimeText value={timestamp} timeZone="UTC" showTimeZone={false} />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="Locale 与文字尺寸"
        description="locale 定义地区格式，size 适配表格、详情和标题场景。"
        code={`<EasyTimeText value={timestamp} timeZone="Asia/Ho_Chi_Minh" locale="vi-VN" size="sm" />
<EasyTimeText value={timestamp} timeZone="Asia/Shanghai" locale="zh-CN" />
<EasyTimeText value={timestamp} timeZone="Asia/Shanghai" locale="zh-CN" size="lg" />`}
      >
        <div className="flex flex-col gap-3">
          <EasyTimeText value={timestamp} timeZone="Asia/Ho_Chi_Minh" locale="vi-VN" size="sm" />
          <EasyTimeText value={timestamp} timeZone="Asia/Shanghai" locale="zh-CN" />
          <EasyTimeText value={timestamp} timeZone="Asia/Shanghai" locale="zh-CN" size="lg" />
        </div>
      </ComponentDemo>

      <div className="space-y-3">
        <h2 className="font-heading text-xl font-semibold">IANA 与 Locale 示例</h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-2.5 text-start font-medium">IANA 时区</th>
                <th className="px-4 py-2.5 text-start font-medium">locale</th>
                <th className="px-4 py-2.5 text-start font-medium">说明</th>
              </tr>
            </thead>
            <tbody>
              {ianaLocaleData.map(([zone, locale, note]) => (
                <tr key={zone} className="border-b last:border-b-0">
                  <td className="px-4 py-2.5 font-mono text-primary">{zone}</td>
                  <td className="px-4 py-2.5 font-mono text-muted-foreground">{locale}</td>
                  <td className="px-4 py-2.5 text-muted-foreground">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="font-heading text-xl font-semibold">常见时区缩写</h2>
        <p className="text-sm text-muted-foreground">
          缩写存在地域歧义，组件仅内置常见映射；业务严格场景建议传入 IANA 时区，展示文案仍会使用 UTC+偏移，例如 UTC+07。
        </p>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-2.5 text-start font-medium">缩写</th>
                <th className="px-4 py-2.5 text-start font-medium">映射时区</th>
              </tr>
            </thead>
            <tbody>
              {abbreviationData.map(([abbr, zone]) => (
                <tr key={abbr} className="border-b last:border-b-0">
                  <td className="px-4 py-2.5 font-mono text-primary">{abbr}</td>
                  <td className="px-4 py-2.5 font-mono text-muted-foreground">{zone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <h2 className="font-heading text-xl font-semibold">
        EasyTimeText API
      </h2>
      <PropsTable data={propsData} />
    </div>
  );
}
