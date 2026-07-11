import { useState } from "react";
import { EasyInput, EasyPasswordInput, Input } from "@easyfix/console-ui";
import { LockIcon, MailIcon, SearchIcon, UserIcon } from "lucide-react";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

const inputPropsData = [
  { name: "size", type: '"sm" | "default" | "lg"', default: '"default"', description: "输入框尺寸" },
  { name: "placeholder", type: "string", description: "占位文本" },
  { name: "disabled", type: "boolean", default: "false", description: "是否禁用" },
  { name: "type", type: "string", default: '"text"', description: "输入框类型" },
  { name: "className", type: "string", description: "自定义样式类名" },
];

const easyInputPropsData = [
  { name: "prefix", type: "ReactNode", description: "前置插槽（图标 / 文字）" },
  { name: "suffix", type: "ReactNode", description: "后置插槽（图标 / 单位 / 按钮）" },
  { name: "allowClear", type: "boolean", default: "false", description: "是否在有内容时显示清除按钮" },
  { name: "maxLength", type: "number", description: "字数限制" },
  { name: "showCount", type: "boolean", default: "false", description: "是否显示当前字数（与 maxLength 配合）" },
  { name: "onClear", type: "() => void", description: "清除操作回调" },
];

const passwordInputPropsData = [
  { name: "defaultVisible", type: "boolean", default: "false", description: "默认是否可见" },
  { name: "prefix", type: "ReactNode", description: "前置插槽" },
  { name: "allowClear", type: "boolean", default: "false", description: "是否可清除" },
  { name: "maxLength / showCount", type: "number / boolean", description: "字数限制与字数显示（继承自 EasyInput）" },
];

function ClearableDemo() {
  const [value, setValue] = useState("可清除内容");
  return (
    <EasyInput
      allowClear
      placeholder="可清除内容"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

function CountDemo() {
  return (
    <EasyInput
      defaultValue="hello"
      placeholder="最多输入 20 字"
      maxLength={20}
      showCount
    />
  );
}

function PasswordDemo() {
  return (
    <EasyPasswordInput
      prefix={<LockIcon />}
      placeholder="密码"
      allowClear
      maxLength={32}
    />
  );
}

export default function InputDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">Input 输入框</h1>
        <p className="mt-2 text-muted-foreground">
          基础文本输入组件 <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">Input</code> 与
          带前后插槽 / 清除 / 字数限制的增强版 <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">EasyInput</code>。
        </p>
      </div>

      <ComponentDemo
        title="默认样式"
        description="默认尺寸的文本输入框。"
        code={`import { Input } from "@easyfix/console-ui";

<Input placeholder="内容" />`}
      >
        <Input placeholder="内容" />
      </ComponentDemo>

      <ComponentDemo
        title="不同尺寸"
        description="提供 sm、default、lg 三种尺寸"
        code={`<Input size="sm" placeholder="小尺寸 sm" />
<Input size="default" placeholder="默认尺寸 default" />
<Input size="lg" placeholder="大尺寸 lg" />`}
      >
        <div className="flex w-full flex-col gap-3">
          <Input size="sm" placeholder="小尺寸 sm" />
          <Input size="default" placeholder="默认尺寸 default" />
          <Input size="lg" placeholder="大尺寸 lg" />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="禁用状态"
        description="disabled 禁用输入框。"
        code={`<Input disabled placeholder="禁用状态" />`}
      >
        <Input disabled placeholder="禁用状态" />
      </ComponentDemo>

      <ComponentDemo
        title="前后插槽 (EasyInput)"
        description="通过 prefix / suffix 插入图标或文字"
        code={`import { EasyInput } from "@easyfix/console-ui";
import { UserIcon, MailIcon, SearchIcon } from "lucide-react";

<EasyInput prefix={<UserIcon />} placeholder="用户名" />
<EasyInput prefix={<MailIcon />} suffix="@example.com" placeholder="邮箱前缀" />
<EasyInput prefix={<SearchIcon />} placeholder="搜索..." allowClear />`}
      >
        <div className="flex w-full flex-col gap-3">
          <EasyInput prefix={<UserIcon />} placeholder="用户名" />
          <EasyInput prefix={<MailIcon />} suffix="@example.com" placeholder="邮箱前缀" />
          <EasyInput prefix={<SearchIcon />} placeholder="搜索..." allowClear />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="可清除 (allowClear)"
        description="输入框有内容时显示清除按钮"
        code={`<EasyInput
  allowClear
  placeholder="可清除内容"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>`}
      >
        <ClearableDemo />
      </ComponentDemo>

      <ComponentDemo
        title="字数限制与字数显示"
        description="通过 maxLength + showCount 同时限制输入与显示当前字数"
        code={`<EasyInput
  defaultValue="hello"
  placeholder="最多输入 20 字"
  maxLength={20}
  showCount
/>`}
      >
        <CountDemo />
      </ComponentDemo>

      <ComponentDemo
        title="密码框 (EasyPasswordInput)"
        description="支持 prefix、可见切换、可清除、字数限制"
        code={`import { EasyPasswordInput } from "@easyfix/console-ui";
import { LockIcon } from "lucide-react";

<EasyPasswordInput
  prefix={<LockIcon />}
  placeholder="密码"
  allowClear
  maxLength={32}
/>`}
      >
        <PasswordDemo />
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">Input API</h2>
      <PropsTable data={inputPropsData} />

      <h2 className="font-heading text-xl font-semibold">EasyInput API（继承 Input 全部属性）</h2>
      <PropsTable data={easyInputPropsData} />

      <h2 className="font-heading text-xl font-semibold">EasyPasswordInput API（继承 EasyInput 全部属性）</h2>
      <PropsTable data={passwordInputPropsData} />
    </div>
  );
}
