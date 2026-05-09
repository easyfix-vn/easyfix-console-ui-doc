import { EasyPasswordInput } from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

const propsData = [
  {
    name: "defaultVisible",
    type: "boolean",
    default: "false",
    description: "默认是否以明文展示密码",
  },
  {
    name: "visibilityLabel",
    type: "string",
    default: '"Show password"',
    description: '显示密码按钮的 aria-label',
  },
  {
    name: "hiddenLabel",
    type: "string",
    default: '"Hide password"',
    description: '隐藏密码按钮的 aria-label',
  },
  {
    name: "extraSuffix",
    type: "ReactNode",
    description: "追加在切换图标之后的额外 suffix 内容",
  },
  {
    name: "allowClear",
    type: "boolean",
    default: "false",
    description: "继承自 EasyInput，是否可一键清除",
  },
  {
    name: "prefix",
    type: "ReactNode",
    description: "继承自 EasyInput，前置插槽",
  },
  {
    name: "showCount",
    type: "boolean",
    default: "false",
    description: "继承自 EasyInput，是否显示字数",
  },
];

export default function PasswordInputDoc() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="font-heading text-3xl font-bold">
          PasswordInput 密码输入框
        </h1>
        <p className="mt-2 text-muted-foreground">
          基于 EasyInput 的密码输入框，内置明文/密文切换按钮，继承 prefix、allowClear、showCount 等全部能力。
        </p>
      </div>

      <ComponentDemo
        title="基础用法"
        description="默认密文输入，右侧有显示/隐藏切换图标。"
        code={`import { EasyPasswordInput } from "@easyfix/console-ui";

<EasyPasswordInput placeholder="请输入密码" />`}
      >
        <div className="w-72">
          <EasyPasswordInput placeholder="请输入密码" />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="默认明文"
        description="设置 defaultVisible 让密码默认可见。"
        code={`<EasyPasswordInput placeholder="请输入密码" defaultVisible />`}
      >
        <div className="w-72">
          <EasyPasswordInput placeholder="请输入密码" defaultVisible />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="可清除 + 字数"
        description="结合 allowClear 和 showCount 能力。"
        code={`<EasyPasswordInput
  placeholder="请输入密码"
  allowClear
  showCount
  maxLength={20}
/>`}
      >
        <div className="w-72">
          <EasyPasswordInput
            placeholder="请输入密码"
            allowClear
            showCount
            maxLength={20}
          />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="禁用状态"
        description="disabled 时输入框和切换按钮均不可交互。"
        code={`<EasyPasswordInput placeholder="请输入密码" disabled />`}
      >
        <div className="w-72">
          <EasyPasswordInput placeholder="请输入密码" disabled />
        </div>
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">API</h2>
        <PropsTable data={propsData} />
      </div>
    </div>
  );
}
