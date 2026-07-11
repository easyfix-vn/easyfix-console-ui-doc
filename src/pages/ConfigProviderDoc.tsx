import {
  Button,
  ConfigProvider,
  DEFAULT_TIME_ZONE_DEFINITIONS,
  EasyInput,
  EasySearchTable,
  TimezoneSelect,
  type EasyLocale,
  useConfig,
  useEasyT,
} from "@easyfix/console-ui";
import { useMemo, useState } from "react";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";
import { useAppConfig } from "@/providers/AppConfigProvider";

function ConfigDisplay() {
  const config = useConfig();
  return (
    <pre className="rounded-lg border bg-muted/40 p-3 text-xs">
      {JSON.stringify(config, null, 2)}
    </pre>
  );
}

/**
 * 用 useEasyT 在子组件中读取当前 locale 对应的内置翻译，
 * 直观展示 ConfigProvider locale 切换 -> 内置文案变化的联动。
 */
function I18nPreview() {
  const t = useEasyT();
  return (
    <div className="grid gap-2 text-sm sm:grid-cols-2">
      <div className="rounded-md border p-3">
        <span className="text-muted-foreground">actions.search:</span>{" "}
        <strong>{t("actions.search")}</strong>
      </div>
      <div className="rounded-md border p-3">
        <span className="text-muted-foreground">actions.reset:</span>{" "}
        <strong>{t("actions.reset")}</strong>
      </div>
      <div className="rounded-md border p-3">
        <span className="text-muted-foreground">actions.selectAll:</span>{" "}
        <strong>{t("actions.selectAll")}</strong>
      </div>
      <div className="rounded-md border p-3">
        <span className="text-muted-foreground">searchTable.columnConfig:</span>{" "}
        <strong>{t("searchTable.columnConfig")}</strong>
      </div>
    </div>
  );
}

function GlobalConfigPreview() {
  const { locale, theme, setLocale, setTheme } = useAppConfig();
  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-1.5">
          <p className="text-xs text-muted-foreground">全局语言</p>
          <div className="flex flex-wrap gap-2">
            {(["zh-CN", "en-US", "vi"] as const).map((l) => (
              <Button
                key={l}
                size="sm"
                variant={locale === l ? "default" : "outline"}
                onClick={() => setLocale(l)}
              >
                {l}
              </Button>
            ))}
          </div>
        </div>
        <div className="space-y-1.5">
          <p className="text-xs text-muted-foreground">全局主题</p>
          <div className="flex flex-wrap gap-2">
            {(["light", "dark", "system"] as const).map((tk) => (
              <Button
                key={tk}
                size="sm"
                variant={theme === tk ? "default" : "outline"}
                onClick={() => setTheme(tk)}
              >
                {tk}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <I18nPreview />
    </div>
  );
}

function LocalConfigPreview() {
  const [locale, setLocaleState] = useState<EasyLocale>("zh-CN");
  const [theme, setThemeState] = useState<"light" | "dark" | "system">("light");

  const sampleColumns = useMemo(
    () => [
      { key: "name", headerKey: "姓名" },
      { key: "age", headerKey: "年龄" },
      { key: "city", headerKey: "城市" },
    ],
    [],
  );
  const sampleData = useMemo(
    () => [
      { name: "Alice", age: 28, city: "Shanghai" },
      { name: "Bob", age: 32, city: "Beijing" },
    ],
    [],
  );

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-1.5">
          <p className="text-xs text-muted-foreground">局部语言（仅作用于下方 ConfigProvider 内组件）</p>
          <div className="flex flex-wrap gap-2">
            {(["zh-CN", "en-US", "vi"] as const).map((l) => (
              <Button
                key={l}
                size="sm"
                variant={locale === l ? "default" : "outline"}
                onClick={() => setLocaleState(l)}
              >
                {l}
              </Button>
            ))}
          </div>
        </div>
        <div className="space-y-1.5">
          <p className="text-xs text-muted-foreground">局部主题</p>
          <div className="flex flex-wrap gap-2">
            {(["light", "dark", "system"] as const).map((tk) => (
              <Button
                key={tk}
                size="sm"
                variant={theme === tk ? "default" : "outline"}
                onClick={() => setThemeState(tk)}
              >
                {tk}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <ConfigProvider locale={locale} theme={theme}>
        <div className="space-y-3 rounded-lg border bg-background p-4">
          <ConfigDisplay />
          <I18nPreview />
          <EasyInput allowClear placeholder="试试可清除输入框" />
          <EasySearchTable
            columns={sampleColumns}
            data={sampleData}
            page={1}
            pageSize={10}
            searchFields={[]}
            total={sampleData.length}
            onSearch={() => undefined}
          />
        </div>
      </ConfigProvider>
    </div>
  );
}

function TimeZoneConfigPreview() {
  const [timeZone, setTimeZone] = useState("Asia/Shanghai");

  return (
    <ConfigProvider locale="zh-CN" theme="light" timeZone={timeZone}>
      <div className="space-y-3">
        <TimezoneSelect
          value={timeZone}
          onValueChange={setTimeZone}
          className="max-w-xl"
        />
        <div className="text-xs text-muted-foreground">
          当前全局时区：{timeZone}
        </div>
        <ConfigDisplay />
        <div className="grid max-h-72 gap-1 overflow-y-auto rounded-lg border p-3 text-xs sm:grid-cols-2">
          {DEFAULT_TIME_ZONE_DEFINITIONS.map((option) => (
            <div key={option.value} className="flex min-w-0 items-center gap-2">
              <code className="w-20 shrink-0 font-mono text-primary">
                {option.offset}
              </code>
              <span className="truncate text-muted-foreground" title={option.value}>
                {option.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </ConfigProvider>
  );
}

const propsData = [
  {
    name: "locale",
    type: '"zh-CN" | "en-US" | "vi"',
    default: '"zh-CN"',
    description: "国际化语言；驱动内置翻译（actions/searchTable 等）",
  },
  {
    name: "theme",
    type: '"light" | "dark" | "system"',
    default: '"system"',
    description: "主题模式；切换 <html class=dark> 并影响所有 token",
  },
  {
    name: "messages",
    type: "LocaleMessages",
    description: "扩展/覆盖内置翻译（深合并到当前 locale 的默认字典）",
  },
  {
    name: "timeZone",
    type: "string",
    default: "浏览器/系统时区",
    description:
      "可选 UTC-12、UTC-11、UTC-10、UTC-09、UTC-08、UTC-07、UTC-06、UTC-05、UTC-04、UTC-03、UTC-02、UTC-01、UTC+00、UTC+01、UTC+02、UTC+03、UTC+04、UTC+05、UTC+06、UTC+07、UTC+08、UTC+09、UTC+10、UTC+11、UTC+12、UTC+13、UTC+14；对应 IANA 示例：Pacific/Pago_Pago、America/New_York、Asia/Ho_Chi_Minh、Asia/Shanghai、Asia/Tokyo、Pacific/Kiritimati；DatePicker、DateTimePicker、DateRangePicker 未显式传 timeZone 时使用",
  },
  {
    name: "prefix",
    type: "string",
    default: '"easy"',
    description: "样式前缀（预留）",
  },
  { name: "children", type: "ReactNode", description: "子元素" },
];

export default function ConfigProviderDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">ConfigProvider 全局配置</h1>
        <p className="mt-2 text-muted-foreground">
          ConfigProvider 同时承担主题（light/dark/system）、国际化语言、内置翻译资源和默认时区配置。
          组件库内置组件（如 EasySearchTable / EasySearchForm / EasyColumnConfig）会自动通过
          useEasyT 读取当前 locale 的翻译。本文档应用本身已被 ConfigProvider 包裹，因此左侧切换效果立即可见。
        </p>
      </div>

      <ComponentDemo
        title="文档应用全局配置"
        description="本演示读取并修改全局 ConfigProvider 的 locale / theme，观察内置文案随之切换"
        code={`// main.tsx
import { ConfigProvider } from "@easyfix/console-ui";

<ConfigProvider locale={locale} theme={theme} timeZone="Asia/Shanghai">
  <App />
</ConfigProvider>`}
      >
        <GlobalConfigPreview />
      </ComponentDemo>

      <ComponentDemo
        title="局部嵌套配置"
        description="可在子树内再次使用 ConfigProvider 局部覆盖语言或主题，组件文案、按钮、搜索表格立即响应"
        code={`<ConfigProvider locale="en-US" theme="dark">
  <EasySearchTable ... />
</ConfigProvider>`}
      >
        <LocalConfigPreview />
      </ComponentDemo>

      <ComponentDemo
        title="用 TimezoneSelect 修改全局时区"
        description="TimezoneSelect 的变更回写到 ConfigProvider，未显式传 timeZone 的日期组件会读取新的全局值"
        code={`const [timeZone, setTimeZone] = useState("Asia/Shanghai");

<ConfigProvider timeZone={timeZone}>
  <TimezoneSelect value={timeZone} onValueChange={setTimeZone} />
</ConfigProvider>`}
      >
        <TimeZoneConfigPreview />
      </ComponentDemo>

      <ComponentDemo
        title="自定义/扩展翻译"
        description="通过 messages 深合并自定义文案，可补充业务键或覆盖内置 key"
        code={`<ConfigProvider
  locale="zh-CN"
  messages={{
    actions: { search: "立即查询" },
    business: { ok: "好的" },
  }}
>
  <App />
</ConfigProvider>`}
      >
        <ConfigProvider
          locale="zh-CN"
          messages={{
            actions: { search: "立即查询" },
            business: { ok: "好的" },
          }}
        >
          <I18nPreview />
        </ConfigProvider>
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">API</h2>
      <PropsTable data={propsData} />
    </div>
  );
}
