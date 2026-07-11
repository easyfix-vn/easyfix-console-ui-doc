import { useState } from "react";
import { Textarea } from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

function BasicDemo() {
  const [value, setValue] = useState("");
  return (
    <Textarea
      placeholder="内容"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

function DisabledDemo() {
  return <Textarea placeholder="禁用状态" disabled value="这是一段只读内容" />;
}

function MaxLengthDemo() {
  const [value, setValue] = useState("");
  const maxLength = 100;
  return (
    <div className="w-full space-y-1">
      <Textarea
        placeholder="最多输入 100 个字符"
        value={value}
        maxLength={maxLength}
        onChange={(e) => setValue(e.target.value)}
      />
      <p className="text-right text-xs text-muted-foreground">
        {value.length}/{maxLength}
      </p>
    </div>
  );
}

const propsData = [
  {
    name: "size",
    type: '"sm" | "default" | "lg" | number',
    default: '"default"',
    description: "文本域尺寸",
  },
  {
    name: "unstyled",
    type: "boolean",
    default: "false",
    description: "是否移除默认样式",
  },
  {
    name: "placeholder",
    type: "string",
    description: "占位文本",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用",
  },
  {
    name: "value",
    type: "string",
    description: "受控模式下的值",
  },
  {
    name: "defaultValue",
    type: "string",
    description: "非受控模式下的默认值",
  },
  {
    name: "onChange",
    type: "ChangeEventHandler<HTMLTextAreaElement>",
    description: "值变化时的回调",
  },
  {
    name: "className",
    type: "string",
    description: "自定义样式类名，会通过 cn() 与默认样式合并",
  },
];

export default function TextareaDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">Textarea 文本域</h1>
        <p className="mt-2 text-muted-foreground">
          多行文本输入框，基于{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            @base-ui/react/field
          </code>{" "}
          封装，支持多种尺寸和自适应高度。
        </p>
      </div>

      <ComponentDemo
        title="基础文本域"
        description="最简单的文本域用法，受控模式。"
        code={`import { Textarea } from "@easyfix/console-ui";

const [value, setValue] = useState("");

<Textarea
  placeholder="内容"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>`}
      >
        <BasicDemo />
      </ComponentDemo>

      <ComponentDemo
        title="禁用状态"
        description="disabled 禁用文本域。"
        code={`<Textarea placeholder="禁用状态" disabled value="这是一段只读内容" />`}
      >
        <DisabledDemo />
      </ComponentDemo>

      <ComponentDemo
        title="带字数限制"
        description="结合 maxLength 和字数统计实现字数限制提示。"
        code={`const [value, setValue] = useState("");
const maxLength = 100;

<div className="w-full space-y-1">
  <Textarea
    placeholder="最多输入 100 个字符"
    value={value}
    maxLength={maxLength}
    onChange={(e) => setValue(e.target.value)}
  />
  <p className="text-right text-xs text-muted-foreground">
    {value.length}/{maxLength}
  </p>
</div>`}
      >
        <MaxLengthDemo />
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">API</h2>
      <p className="text-sm text-muted-foreground">
        Textarea 接受原生{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
          textarea
        </code>{" "}
        的全部属性，以下为常用属性：
      </p>
      <PropsTable data={propsData} />
    </div>
  );
}
