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
          <EasyInput allowClear placeholder="可清除输入" />
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
    description: "主题模式；更新 html 的 dark 类并影响全部令牌",
  },
  {
    name: "messages",
    type: "LocaleMessages",
    description: "扩展/覆盖内置翻译（深合并到当前 locale 的默认字典）",
  },
  {
    name: "timeZone",
    type: "IanaTimeZone",
    default: "浏览器/系统时区",
    description:
      "默认 IANA 时区；日期组件未显式传入 timeZone 时读取该值。UTC+07、UTC+08 仅用于界面展示。",
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
          ConfigProvider 统一管理主题、语言、翻译资源和默认时区；内置组件通过 useEasyT 读取当前语言配置。
        </p>
      </div>

      <ComponentDemo
        title="全局配置"
        description="locale 与 theme 变更会同步更新内置组件的语言和主题。"
        code={`// main.tsx
import { ConfigProvider } from "@easyfix/console-ui";

<ConfigProvider locale={locale} theme={theme} timeZone="Asia/Shanghai">
  <App />
</ConfigProvider>`}
      >
        <GlobalConfigPreview />
      </ComponentDemo>

      <ComponentDemo
        title="局部配置"
        description="嵌套的 ConfigProvider 可覆盖子树的语言和主题。"
        code={`<ConfigProvider locale="en-US" theme="dark">
  <EasySearchTable ... />
</ConfigProvider>`}
      >
        <LocalConfigPreview />
      </ComponentDemo>

      <ComponentDemo
        title="默认时区"
        description="TimezoneSelect 更新全局时区；未传 timeZone 的日期组件读取该值。"
        code={`const [timeZone, setTimeZone] = useState("Asia/Shanghai");

<ConfigProvider timeZone={timeZone}>
  <TimezoneSelect value={timeZone} onValueChange={setTimeZone} />
</ConfigProvider>`}
      >
        <TimeZoneConfigPreview />
      </ComponentDemo>

      <ComponentDemo
        title="扩展翻译"
        description="messages 深合并业务文案，并可覆盖内置键。"
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
