import { useState } from "react";
import {
  EasyGlobalPhoneInput,
  validatePhone,
  useEasyT,
  Button,
  Input,
  Field,
  FieldLabel,
  FieldError,
  type CountryCodeOption,
} from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";
import { ComponentDocPage } from "@/components/ComponentDocPage";

const propsData = [
  { name: "cc", type: "string", description: "当前区号，如 \"84\"、\"86\"" },
  { name: "phone", type: "string", description: "当前号码" },
  { name: "onCcChange", type: "(cc: string) => void", description: "区号变更回调" },
  { name: "onPhoneChange", type: "(phone: string) => void", description: "号码变更回调" },
  { name: "options", type: "CountryCodeOption[]", description: "自定义区号选项，不传则使用内置 84/86 预设" },
  { name: "validators", type: "Record<string, (phone: string) => string | undefined>", description: "按区号自定义验证函数，返回错误信息或 undefined" },
  { name: "disabled", type: "boolean", default: "false", description: "是否禁用" },
  { name: "size", type: '"sm" | "default" | "lg"', default: '"default"', description: "组件尺寸" },
  { name: "placeholder", type: "string", description: "号码输入框 placeholder（默认跟随 i18n）" },
  { name: "error", type: "string", description: "外部传入的错误信息（优先级高于内置验证）" },
  { name: "className", type: "string", description: "容器额外类名" },
];

const optionPropsData = [
  { name: "cc", type: "string", description: "区号，如 \"84\"" },
  { name: "label", type: "string", description: "显示文本，如 \"+84\"" },
  { name: "flag", type: "string", description: "flag-icons 国家代码，如 \"vn\"" },
  { name: "phoneLength", type: "number | number[]", description: "号码位数，支持单值或多值（可选）" },
  { name: "pattern", type: "RegExp", description: "自定义验证正则（可选）" },
  { name: "validate", type: "(phone: string) => string | undefined", description: "完全自定义验证函数，返回错误信息或 undefined（优先级最高）" },
];

function BasicDemo() {
  const [cc, setCc] = useState("84");
  const [phone, setPhone] = useState("");
  return (
    <div className="w-full max-w-sm">
      <EasyGlobalPhoneInput
        cc={cc}
        phone={phone}
        onCcChange={setCc}
        onPhoneChange={setPhone}
      />
      <p className="mt-2 text-xs text-muted-foreground">
        当前值：cc={cc}, phone={phone}
      </p>
    </div>
  );
}

function ValidationDemo() {
  const [cc, setCc] = useState("84");
  const [phone, setPhone] = useState("123");
  return (
    <div className="w-full max-w-sm">
      <EasyGlobalPhoneInput
        cc={cc}
        phone={phone}
        onCcChange={setCc}
        onPhoneChange={setPhone}
      />
    </div>
  );
}

const customOptions: CountryCodeOption[] = [
  { cc: "84", label: "+84", flag: "vn", phoneLength: 10 },
  { cc: "86", label: "+86", flag: "cn", phoneLength: 11 },
  { cc: "1", label: "+1", flag: "us", phoneLength: 10 },
  { cc: "81", label: "+81", flag: "jp", phoneLength: [10, 11] },
];

function CustomOptionsDemo() {
  const [cc, setCc] = useState("1");
  const [phone, setPhone] = useState("");
  return (
    <div className="w-full max-w-sm">
      <EasyGlobalPhoneInput
        cc={cc}
        phone={phone}
        onCcChange={setCc}
        onPhoneChange={setPhone}
        options={customOptions}
      />
    </div>
  );
}

const validateOptions: CountryCodeOption[] = [
  { cc: "84", label: "+84", flag: "vn", phoneLength: 10 },
  { cc: "86", label: "+86", flag: "cn", phoneLength: 11 },
  {
    cc: "1",
    label: "+1",
    flag: "us",
    validate: (phone: string) => {
      if (!phone) return undefined;
      if (!/^\d+$/.test(phone)) return "只能输入数字";
      if (phone.length !== 10) return "美国号码须为 10 位";
      if (phone.startsWith("0") || phone.startsWith("1"))
        return "区域码不能以 0 或 1 开头";
      return undefined;
    },
  },
];

function CustomValidateDemo() {
  const [cc, setCc] = useState("1");
  const [phone, setPhone] = useState("");
  return (
    <div className="w-full max-w-sm">
      <EasyGlobalPhoneInput
        cc={cc}
        phone={phone}
        onCcChange={setCc}
        onPhoneChange={setPhone}
        options={validateOptions}
      />
    </div>
  );
}

function SizeDemo() {
  const [cc, setCc] = useState("84");
  const [phone, setPhone] = useState("");
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <EasyGlobalPhoneInput cc={cc} phone={phone} onCcChange={setCc} onPhoneChange={setPhone} size="sm" />
      <EasyGlobalPhoneInput cc={cc} phone={phone} onCcChange={setCc} onPhoneChange={setPhone} size="default" />
      <EasyGlobalPhoneInput cc={cc} phone={phone} onCcChange={setCc} onPhoneChange={setPhone} size="lg" />
    </div>
  );
}

function DisabledDemo() {
  return (
    <div className="w-full max-w-sm">
      <EasyGlobalPhoneInput
        cc="84"
        phone="0901234567"
        onCcChange={() => {}}
        onPhoneChange={() => {}}
        disabled
      />
    </div>
  );
}

function FormDemo() {
  const t = useEasyT();
  const [cc, setCc] = useState("84");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = "姓名不能为空";
    }

    const phoneError = validatePhone(cc, phone, undefined, t);
    if (phoneError) {
      newErrors.phone = phoneError;
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
      <Field>
        <FieldLabel>姓名</FieldLabel>
        <Input
          value={name}
          onChange={(e) => {
            setName((e.target as HTMLInputElement).value);
            setErrors((prev) => ({ ...prev, name: "" }));
          }}
          placeholder="姓名"
          aria-invalid={!!errors.name}
        />
        {errors.name ? <FieldError>{errors.name}</FieldError> : null}
      </Field>

      <Field>
        <FieldLabel>手机号</FieldLabel>
        <EasyGlobalPhoneInput
          cc={cc}
          phone={phone}
          onCcChange={(v: string) => {
            setCc(v);
            setErrors((prev) => ({ ...prev, phone: "" }));
          }}
          onPhoneChange={(v: string) => {
            setPhone(v);
            setErrors((prev) => ({ ...prev, phone: "" }));
          }}
          error={errors.phone}
        />
      </Field>

      <Button type="submit">提交</Button>

      {submitted && (
        <p className="text-sm text-green-600">
          提交成功：+{cc} {phone}
        </p>
      )}
    </form>
  );
}

export default function GlobalPhoneInputDoc() {
  return (
    <ComponentDocPage>
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">
          GlobalPhoneInput 国际手机号
        </h1>
        <p className="mt-2 text-muted-foreground">
          国际手机号输入组件，支持区号选择、号码输入、自定义选项和验证。
        </p>
      </div>

      <ComponentDemo
        title="默认区号"
        description="默认内置 +84（越南 10 位）和 +86（中国 11 位）两个区号选项"
        code={`import { useState } from "react";
import { EasyGlobalPhoneInput } from "@easyfix/console-ui";

const [cc, setCc] = useState("84");
const [phone, setPhone] = useState("");

<EasyGlobalPhoneInput
  cc={cc}
  phone={phone}
  onCcChange={setCc}
  onPhoneChange={setPhone}
/>`}
      >
        <BasicDemo />
      </ComponentDemo>

      <ComponentDemo
        title="验证提示"
        description="输入不符合当前区号规则的号码时自动显示验证提示（国际化文案）"
        code={`const [cc, setCc] = useState("84");
const [phone, setPhone] = useState("123");

<EasyGlobalPhoneInput
  cc={cc}
  phone={phone}
  onCcChange={setCc}
  onPhoneChange={setPhone}
/>`}
      >
        <ValidationDemo />
      </ComponentDemo>

      <ComponentDemo
        title="自定义选项"
        description="通过 options 传入自定义区号列表，支持任意国家扩展"
        code={`import { type CountryCodeOption } from "@easyfix/console-ui";

const customOptions: CountryCodeOption[] = [
  { cc: "84", label: "+84", flag: "vn", phoneLength: 10 },
  { cc: "86", label: "+86", flag: "cn", phoneLength: 11 },
  { cc: "1",  label: "+1",  flag: "us", phoneLength: 10 },
  { cc: "81", label: "+81", flag: "jp", phoneLength: [10, 11] },
];

<EasyGlobalPhoneInput
  cc={cc}
  phone={phone}
  onCcChange={setCc}
  onPhoneChange={setPhone}
  options={customOptions}
/>`}
      >
        <CustomOptionsDemo />
      </ComponentDemo>

      <ComponentDemo
        title="自定义验证函数"
        description="通过 validate 字段传入完全自定义的验证逻辑（优先级高于 phoneLength / pattern）"
        code={`const validateOptions: CountryCodeOption[] = [
  { cc: "84", label: "+84", flag: "vn", phoneLength: 10 },
  { cc: "86", label: "+86", flag: "cn", phoneLength: 11 },
  {
    cc: "1",
    label: "+1",
    flag: "us",
    validate: (phone: string) => {
      if (!phone) return undefined;
      if (!/^\\d+$/.test(phone)) return "只能输入数字";
      if (phone.length !== 10) return "美国号码须为 10 位";
      if (phone.startsWith("0") || phone.startsWith("1"))
        return "区域码不能以 0 或 1 开头";
      return undefined;
    },
  },
];

<EasyGlobalPhoneInput
  cc={cc}
  phone={phone}
  onCcChange={setCc}
  onPhoneChange={setPhone}
  options={validateOptions}
/>`}
      >
        <CustomValidateDemo />
      </ComponentDemo>

      <ComponentDemo
        title="不同尺寸"
        description="提供 sm、default、lg 三种尺寸"
        code={`const [cc, setCc] = useState("84");
const [phone, setPhone] = useState("");

<EasyGlobalPhoneInput cc={cc} phone={phone} onCcChange={setCc} onPhoneChange={setPhone} size="sm" />
<EasyGlobalPhoneInput cc={cc} phone={phone} onCcChange={setCc} onPhoneChange={setPhone} size="default" />
<EasyGlobalPhoneInput cc={cc} phone={phone} onCcChange={setCc} onPhoneChange={setPhone} size="lg" />`}
      >
        <SizeDemo />
      </ComponentDemo>

      <ComponentDemo
        title="禁用状态"
        description="设置 disabled 禁用整个组件"
        code={`<EasyGlobalPhoneInput
  cc="84"
  phone="0901234567"
  onCcChange={() => {}}
  onPhoneChange={() => {}}
  disabled
/>`}
      >
        <DisabledDemo />
      </ComponentDemo>

      <ComponentDemo
        title="表单集成"
        description="使用 validatePhone 工具函数在提交时校验，验证不通过时阻止提交并显示错误"
        code={`import {
  EasyGlobalPhoneInput,
  validatePhone, useEasyT,
  Button, Input, Field, FieldLabel, FieldError,
} from "@easyfix/console-ui";

const t = useEasyT();
const [cc, setCc] = useState("84");
const [phone, setPhone] = useState("");
const [errors, setErrors] = useState({});

const handleSubmit = (e) => {
  e.preventDefault();
  const newErrors = {};

  // 传入 t 函数，验证结果会自动翻译为当前语言
  const phoneError = validatePhone(cc, phone, undefined, t);
  if (phoneError) {
    newErrors.phone = phoneError;
  }

  setErrors(newErrors);
  if (Object.keys(newErrors).length > 0) return;

  // 提交逻辑...
};

<form onSubmit={handleSubmit}>
  <Field>
    <FieldLabel>手机号</FieldLabel>
    <EasyGlobalPhoneInput
      cc={cc}
      phone={phone}
      onCcChange={setCc}
      onPhoneChange={setPhone}
      error={errors.phone}
    />
  </Field>
  <Button type="submit">提交</Button>
</form>`}
      >
        <FormDemo />
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">
        EasyGlobalPhoneInput API
      </h2>
      <PropsTable data={propsData} />

      <h2 className="font-heading text-xl font-semibold">
        CountryCodeOption
      </h2>
      <PropsTable data={optionPropsData} />
    </div>
    </ComponentDocPage>
  );
}
