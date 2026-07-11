import { useState } from "react";
import { EasyLocaleSwitch } from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

function LocaleSwitchDefault() {
  const [locale, setLocale] = useState<string>("zh-CN");
  return <EasyLocaleSwitch value={locale} onChange={setLocale} />;
}

function LocaleSwitchButton() {
  const [locale, setLocale] = useState<string>("zh-CN");
  return (
    <EasyLocaleSwitch
      value={locale}
      onChange={setLocale}
      variant="default"
    />
  );
}

function LocaleSwitchNoLabel() {
  const [locale, setLocale] = useState<string>("zh-CN");
  return <EasyLocaleSwitch value={locale} onChange={setLocale} showLabel={false} />;
}

function LocaleSwitchSizes() {
  const [locale, setLocale] = useState<string>("zh-CN");
  return (
    <div className="flex flex-col items-start gap-3">
      <EasyLocaleSwitch value={locale} onChange={setLocale} size="xs" />
      <EasyLocaleSwitch value={locale} onChange={setLocale} size="sm" />
      <EasyLocaleSwitch value={locale} onChange={setLocale} size="md" />
      <EasyLocaleSwitch value={locale} onChange={setLocale} size="lg" />
    </div>
  );
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
    default: "内置 vi | en | zh 三项",
    description: "可选的语言列表，每项包含 locale、label、flag",
  },
  {
    name: "variant",
    type: '"default" | "pill"',
    default: '"pill"',
    description: "展示风格。pill 使用胶囊切换，default 使用独立按钮",
  },
  {
    name: "showLabel",
    type: "boolean",
    default: "true",
    description: "是否显示语言文字标签",
  },
  {
    name: "size",
    type: '"xs" | "sm" | "md" | "lg" | EasyButton size',
    default: '"xs"',
    description: "尺寸。pill 变体映射到 SegmentedControl size，default 变体映射到 EasyButton size",
  },
];

const optionData = [
  {
    name: "locale",
    type: "string",
    description: '语言值，会作为 value 和 onChange 的参数，例如 "vi"、"en-US"、"zh-CN"',
  },
  {
    name: "label",
    type: "string",
    description: "语言展示文本，showLabel 为 true 时显示在国旗旁边",
  },
  {
    name: "flag",
    type: "string",
    description: 'flag-icons 的国家/地区代码，例如 "vn"、"gb"、"cn"',
  },
  {
    name: "flagSrc",
    type: "string",
    description: "自定义国旗图片地址；未传时使用 flag-icons className",
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
          多语言切换组件，默认使用胶囊风格，内置语言顺序为越南语、英文、中文。
        </p>
      </div>

      <ComponentDemo
        title="默认胶囊风格"
        description="默认以紧凑的胶囊切换控件展示，内置语言顺序为 vi | en | zh。"
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
        title="按钮风格"
        description='variant="default" 使用独立按钮展示每种语言。'
        code={`<EasyLocaleSwitch
  value={locale}
  onChange={setLocale}
  variant="default"
/>`}
      >
        <LocaleSwitchButton />
      </ComponentDemo>

      <ComponentDemo
        title="仅图标"
        description="showLabel={false} 仅显示国旗图标。"
        code={`<EasyLocaleSwitch
  value={locale}
  onChange={setLocale}
  showLabel={false}
/>`}
      >
        <LocaleSwitchNoLabel />
      </ComponentDemo>

      <ComponentDemo
        title="胶囊尺寸"
        description="胶囊模式基于 SegmentedControl 渲染，size 控制整体高度、内边距和图标尺寸。"
        code={`<EasyLocaleSwitch
  value={locale}
  onChange={setLocale}
  size="xs"
/>

<EasyLocaleSwitch
  value={locale}
  onChange={setLocale}
  size="lg"
/>`}
      >
        <LocaleSwitchSizes />
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">API</h2>
        <PropsTable data={propsData} />
      </div>

      <div>
        <h2 className="mb-4 text-xl font-semibold">EasyLocaleOption</h2>
        <PropsTable data={optionData} />
      </div>
    </div>
  );
}
