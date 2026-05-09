import { useState } from "react";
import { EasyLocaleSwitch, type EasyLocale } from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

function LocaleSwitchDefault() {
  const [locale, setLocale] = useState<string>("zh-CN");
  return <EasyLocaleSwitch value={locale} onChange={setLocale} />;
}

function LocaleSwitchPill() {
  const [locale, setLocale] = useState<string>("zh-CN");
  return <EasyLocaleSwitch value={locale} onChange={setLocale} variant="pill" />;
}

function LocaleSwitchNoLabel() {
  const [locale, setLocale] = useState<string>("zh-CN");
  return <EasyLocaleSwitch value={locale} onChange={setLocale} showLabel={false} />;
}

const propsData = [
  {
    name: "value",
    type: "string",
    description: "当前选中的 locale 值",
  },
  {
    name: "onChange",
    type: "(locale: string) => void",
    description: "语言切换时的回调",
  },
  {
    name: "locales",
    type: "EasyLocaleOption[]",
    default: "内置中英越三项",
    description: "可选的语言列表，每项包含 locale、label、flag",
  },
  {
    name: "variant",
    type: '"default" | "pill"',
    default: '"default"',
    description: "展示风格。default 使用独立按钮，pill 使用胶囊切换",
  },
  {
    name: "showLabel",
    type: "boolean",
    default: "true",
    description: "是否显示语言文字标签",
  },
  {
    name: "size",
    type: "EasyButton size",
    default: '"xs"',
    description: "按钮尺寸（仅 default 变体有效）",
  },
];

export default function LocaleSwitchDoc() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="font-heading text-3xl font-bold">
          LocaleSwitch 语言切换
        </h1>
        <p className="mt-2 text-muted-foreground">
          多语言切换组件，内置中文、英文、越南语三种语言，支持按钮和胶囊两种展示风格。
        </p>
      </div>

      <ComponentDemo
        title="默认风格"
        description="按钮式语言切换，每种语言对应一个带国旗的按钮。"
        code={`import { useState } from "react";
import { EasyLocaleSwitch } from "@easyfix/console-ui";

function MyApp() {
  const [locale, setLocale] = useState("zh-CN");
  return <EasyLocaleSwitch value={locale} onChange={setLocale} />;
}`}
      >
        <LocaleSwitchDefault />
      </ComponentDemo>

      <ComponentDemo
        title="胶囊风格"
        description='variant="pill" 以紧凑的分段控件形式展示。'
        code={`<EasyLocaleSwitch
  value={locale}
  onChange={setLocale}
  variant="pill"
/>`}
      >
        <LocaleSwitchPill />
      </ComponentDemo>

      <ComponentDemo
        title="仅图标"
        description="设置 showLabel={false} 只显示国旗图标，节省空间。"
        code={`<EasyLocaleSwitch
  value={locale}
  onChange={setLocale}
  showLabel={false}
/>`}
      >
        <LocaleSwitchNoLabel />
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">API</h2>
        <PropsTable data={propsData} />
      </div>
    </div>
  );
}
