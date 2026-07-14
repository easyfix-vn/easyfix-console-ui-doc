import {
  EasyI18nInput,
  type EasyI18nValue,
} from "@easyfix/console-ui";
import { useState } from "react";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";
import { ComponentDocPage } from "@/components/ComponentDocPage";

const propsData = [
  {
    name: "value",
    type: "EasyI18nValue",
    description: "包含主语言 primary 和多语言映射 i18n 的值对象",
  },
  {
    name: "onChange",
    type: "(value: EasyI18nValue) => void",
    description: "主语言或任意多语言值变化时触发",
  },
  {
    name: "supportLang",
    type: "Locale[]",
    default: '["vi", "en-US", "zh-CN"]',
    description: (
      <>
        支持语言编码数组，可与 locales 配合自定义语言名称和顺序。编码使用 BCP 47，例如{" "}
        <code>en-US</code>。参考{" "}
        <a
          className="text-primary underline underline-offset-2"
          href="https://www.rfc-editor.org/info/rfc5646"
          target="_blank"
          rel="noreferrer"
        >
          RFC 5646 / BCP 47
        </a>、
        <a
          className="text-primary underline underline-offset-2"
          href="https://www.iana.org/assignments/language-subtag-registry"
          target="_blank"
          rel="noreferrer"
        >
          IANA Language Subtag Registry
        </a>、
        <a
          className="text-primary underline underline-offset-2"
          href="https://www.iso.org/standard/74575.html"
          target="_blank"
          rel="noreferrer"
        >
          ISO 639
        </a>{" "}
        和
        <a
          className="text-primary underline underline-offset-2"
          href="https://www.iso.org/iso-3166-country-codes.html"
          target="_blank"
          rel="noreferrer"
        >
          ISO 3166
        </a>
        。
      </>
    ),
  },
  {
    name: "locales",
    type: "EasyI18nLocaleOption[]",
    description: "兼容旧配置，并用于为 supportLang 提供语言展示名称",
  },
  {
    name: "type / as",
    type: '"text" | "textarea"',
    default: '"text"',
    description: "输入控件类型；as 为兼容别名",
  },
  {
    name: "label",
    type: "React.ReactNode",
    default: "主语言",
    description: "默认 Tab 标签及默认 placeholder/tips 的字段名称",
  },
  {
    name: "placeholder",
    type: "string",
    description: "主语言 placeholder；未传时生成默认文案",
  },
  {
    name: "i18nPlaceholders",
    type: "Record<Locale, string>",
    description: "多语言 placeholder；未传的语言使用默认文案",
  },
  {
    name: "tips / i18nTips",
    type: "React.ReactNode / Record<Locale, React.ReactNode>",
    description: "主语言和多语言输入框下方的提示内容；未传时使用默认文案",
  },
  {
    name: "maxLength",
    type: "number",
    description: "文本字数软限制；超限时标记错误并阻止原生 form 提交",
  },
  {
    name: "rows",
    type: "number",
    default: "3",
    description: "textarea 的行数",
  },
  {
    name: "error / i18nErrors",
    type: "string / Record<Locale, string>",
    description: "主语言和多语言条目的错误信息",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用输入、添加语言和删除多语言条目",
  },
];

function I18nInputDemo() {
  const [textValue, setTextValue] = useState<EasyI18nValue>({
    primary: "维修服务",
    i18n: {
      "en-US": "Repair service",
      vi: "Dịch vụ sửa chữa",
    },
  });
  const [textareaValue, setTextareaValue] = useState<EasyI18nValue>({
    primary: "请填写维修说明",
    i18n: {
      "en-US": "Please enter the repair description",
    },
  });
  const formData = {
    serviceName: textValue.primary,
    serviceName_i18n: textValue.i18n,
    repairDescription: textareaValue.primary,
    repairDescription_i18n: textareaValue.i18n,
  };

  return (
    <div className="grid w-full min-w-0 gap-6 lg:grid-cols-2">
      <div className="min-w-0 space-y-2">
        <p className="text-sm font-medium">text 类型</p>
        <EasyI18nInput
          label="服务名称"
          value={textValue}
          onChange={setTextValue}
          placeholder="中文文本"
        />
      </div>
      <div className="min-w-0 space-y-2">
        <p className="text-sm font-medium">textarea 类型</p>
        <EasyI18nInput
          label="维修说明"
          type="textarea"
          rows={4}
          value={textareaValue}
          onChange={setTextareaValue}
          placeholder="中文说明"
        />
      </div>
      <div className="col-span-full min-w-0 rounded-lg border bg-muted/20 p-3">
        <p className="text-sm font-medium">formData 预览</p>
        <p className="mt-1 text-xs text-muted-foreground">实时展示提交数据结构。</p>
        <pre className="mt-2 max-h-64 overflow-auto rounded-md bg-muted/50 p-3 text-xs leading-5">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
    </div>
  );
}

function ErrorDemo() {
  const [value, setValue] = useState<EasyI18nValue>({
    primary: "",
    i18n: { "en-US": "" },
  });

  return (
    <EasyI18nInput
      label="字段内容"
      value={value}
      onChange={setValue}
      maxLength={100}
      error="请输入主语言内容"
      i18nErrors={{ "en-US": "English 内容不能为空" }}
    />
  );
}

export default function I18nInputDoc() {
  return (
    <ComponentDocPage>
    <div className="space-y-10">
      <div>
        <h1 className="font-heading text-3xl font-bold">
          I18nInput 多语言输入框
        </h1>
        <p className="mt-2 text-muted-foreground">
          编辑主语言及其多语言值，支持 text 和 textarea。
        </p>
      </div>

      <ComponentDemo
        title="text / textarea"
        description="支持默认语言和多语言 Tab；可添加、删除语言，输入值实时映射到 formData。"
        code={`import { useState } from "react";
import { EasyI18nInput, type EasyI18nValue } from "@easyfix/console-ui";

const [textValue, setTextValue] = useState<EasyI18nValue>({
  primary: "维修服务",
  i18n: {
    "en-US": "Repair service",
    vi: "Dịch vụ sửa chữa",
  },
});
const [textareaValue, setTextareaValue] = useState<EasyI18nValue>({
  primary: "请填写维修说明",
  i18n: { "en-US": "Please enter the repair description" },
});

<EasyI18nInput label="服务名称" value={textValue} onChange={setTextValue} placeholder="中文文本" />
<EasyI18nInput
  label="维修说明"
  type="textarea"
  rows={4}
  value={textareaValue}
  onChange={setTextareaValue}
  placeholder="中文说明"
/>

const formData = {
  serviceName: textValue.primary,
  serviceName_i18n: textValue.i18n,
  repairDescription: textareaValue.primary,
  repairDescription_i18n: textareaValue.i18n,
};`}
      >
        <I18nInputDemo />
      </ComponentDemo>

      <ComponentDemo
        title="长度限制与错误提示"
        description="展示 maxLength、error 和 i18nErrors。"
        code={`const [value, setValue] = useState<EasyI18nValue>({
  primary: "",
  i18n: { "en-US": "" },
});

<EasyI18nInput
  label="字段内容"
  value={value}
  onChange={setValue}
  maxLength={100}
  error="请输入主语言内容"
  i18nErrors={{ "en-US": "English 内容不能为空" }}
/>`}
      >
        <div className="w-full min-w-0 max-w-xl">
          <ErrorDemo />
        </div>
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">API</h2>
        <PropsTable data={propsData} />
      </div>
    </div>
    </ComponentDocPage>
  );
}
