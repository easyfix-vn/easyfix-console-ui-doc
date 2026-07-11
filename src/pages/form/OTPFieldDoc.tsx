import { useState } from "react";
import { OTPField, OTPFieldInput, OTPFieldSeparator } from "@easyfix/console-ui";

import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

const otpFieldPropsData = [
  {
    name: "length",
    type: "number",
    description: "OTP 输入槽位数量（必填），用于检测完成状态和值校验",
  },
  {
    name: "value",
    type: "string",
    description: "受控模式下的 OTP 值",
  },
  {
    name: "defaultValue",
    type: "string",
    description: "非受控模式下的初始值",
  },
  {
    name: "onValueChange",
    type: "(value: string, details: { reason: string }) => void",
    description:
      "值变化回调。reason 可能为 input-change（输入）、input-clear（删除）、input-paste（粘贴）、keyboard（键盘操作）",
  },
  {
    name: "onValueComplete",
    type: "(value: string, details: { reason: string }) => void",
    description:
      "所有槽位填写完成时触发。在 onValueChange 之后执行；若启用 autoSubmit，会在表单提交前触发",
  },
  {
    name: "autoSubmit",
    type: "boolean",
    default: "false",
    description: "输入完成后是否自动提交所属表单",
  },
  {
    name: "validationType",
    type: '"numeric" | "alphanumeric" | "none"',
    default: '"numeric"',
    description:
      "输入校验类型：numeric 仅数字，alphanumeric 字母+数字，none 不校验（配合 sanitizeValue 使用）",
  },
  {
    name: "mask",
    type: "boolean",
    default: "false",
    description: "是否遮盖已输入的字符（类似密码输入）",
  },
  {
    name: "size",
    type: "'default' | 'lg'",
    default: "'default'",
    description: "输入框尺寸（组件库扩展属性）",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用",
  },
  {
    name: "name",
    type: "string",
    description: "表单提交时的字段名",
  },
];

const otpFieldInputPropsData = [
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
];

const otpFieldSeparatorPropsData = [
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
];

function CompleteDemo() {
  const [result, setResult] = useState("");

  return (
    <div className="space-y-3">
      <OTPField
        length={6}
        onValueComplete={(value) => setResult(`验证码已完成: ${value}`)}
      >
        <OTPFieldInput />
        <OTPFieldInput />
        <OTPFieldInput />
        <OTPFieldSeparator />
        <OTPFieldInput />
        <OTPFieldInput />
        <OTPFieldInput />
      </OTPField>
      {result && (
        <p className="text-sm font-medium text-green-600">{result}</p>
      )}
    </div>
  );
}

function ControlledDemo() {
  const [value, setValue] = useState("");

  return (
    <div className="space-y-3">
      <OTPField
        length={4}
        value={value}
        onValueChange={(v) => setValue(v)}
        onValueComplete={(v) => alert(`提交验证码: ${v}`)}
      >
        <OTPFieldInput />
        <OTPFieldInput />
        <OTPFieldInput />
        <OTPFieldInput />
      </OTPField>
      <p className="text-xs text-muted-foreground">
        当前值: {value || "(空)"}
      </p>
    </div>
  );
}

export default function OTPFieldDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">OTPField 验证码输入框</h1>
        <p className="mt-2 text-muted-foreground">
          用于输入一次性验证码（OTP）的分段输入组件，基于{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            @base-ui/react/otp-field
          </code>{" "}
          实现。支持自动聚焦、完成回调、值校验、密码遮盖等功能。
        </p>
      </div>

      <ComponentDemo
        title="基础 OTP 输入"
        description="6 位验证码输入，中间带分隔符"
        code={`import { OTPField, OTPFieldInput, OTPFieldSeparator } from "@easyfix/console-ui";

<OTPField length={6}>
  <OTPFieldInput />
  <OTPFieldInput />
  <OTPFieldInput />
  <OTPFieldSeparator />
  <OTPFieldInput />
  <OTPFieldInput />
  <OTPFieldInput />
</OTPField>`}
      >
        <OTPField length={6}>
          <OTPFieldInput />
          <OTPFieldInput />
          <OTPFieldInput />
          <OTPFieldSeparator />
          <OTPFieldInput />
          <OTPFieldInput />
          <OTPFieldInput />
        </OTPField>
      </ComponentDemo>

      <ComponentDemo
        title="完成回调"
        description="onValueComplete 在所有槽位填满后触发，可用于自动提交验证"
        code={`const [result, setResult] = useState("");

<OTPField
  length={6}
  onValueComplete={(value) => setResult(\`验证码已完成: \${value}\`)}
>
  <OTPFieldInput />
  <OTPFieldInput />
  <OTPFieldInput />
  <OTPFieldSeparator />
  <OTPFieldInput />
  <OTPFieldInput />
  <OTPFieldInput />
</OTPField>`}
      >
        <CompleteDemo />
      </ComponentDemo>

      <ComponentDemo
        title="受控模式"
        description="通过 value + onValueChange 完全控制输入值，配合 onValueComplete 处理完成逻辑"
        code={`const [value, setValue] = useState("");

<OTPField
  length={4}
  value={value}
  onValueChange={(v) => setValue(v)}
  onValueComplete={(v) => alert(\`提交验证码: \${v}\`)}
>
  <OTPFieldInput />
  <OTPFieldInput />
  <OTPFieldInput />
  <OTPFieldInput />
</OTPField>`}
      >
        <ControlledDemo />
      </ComponentDemo>

      <ComponentDemo
        title="不同配置"
        description="大尺寸、密码遮盖等配置"
        code={`{/* 大尺寸 */}
<OTPField length={6} size="lg">
  <OTPFieldInput />
  ...
</OTPField>

{/* 密码遮盖 */}
<OTPField length={4} mask>
  <OTPFieldInput />
  ...
</OTPField>`}
      >
        <div className="flex flex-col gap-4">
          <div>
            <p className="mb-2 text-sm text-muted-foreground">大尺寸</p>
            <OTPField length={6} size="lg">
              <OTPFieldInput />
              <OTPFieldInput />
              <OTPFieldInput />
              <OTPFieldSeparator />
              <OTPFieldInput />
              <OTPFieldInput />
              <OTPFieldInput />
            </OTPField>
          </div>
          <div>
            <p className="mb-2 text-sm text-muted-foreground">密码遮盖</p>
            <OTPField length={4} mask>
              <OTPFieldInput />
              <OTPFieldInput />
              <OTPFieldInput />
              <OTPFieldInput />
            </OTPField>
          </div>
        </div>
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">OTPField API</h2>
      <PropsTable data={otpFieldPropsData} />

      <h2 className="font-heading text-xl font-semibold">OTPFieldInput API</h2>
      <PropsTable data={otpFieldInputPropsData} />

      <h2 className="font-heading text-xl font-semibold">
        OTPFieldSeparator API
      </h2>
      <PropsTable data={otpFieldSeparatorPropsData} />
    </div>
  );
}
