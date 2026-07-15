import type { ComponentProps, ComponentType, CSSProperties } from "react";
import {
  Field as BaseField,
  FieldControl,
  FieldDescription,
  FieldError,
  FieldItem,
  FieldLabel,
  Form,
  Input,
} from "@easyfix/console-ui";

import { ComponentDemo } from "@/components/ComponentDemo";
import { ExternalDocLink } from "@/components/ExternalDocLink";
import { PropsTable } from "@/components/PropsTable";
import { ComponentDocPage } from "@/components/ComponentDocPage";

type DocumentedFieldProps = ComponentProps<typeof BaseField> & {
  orientation?: "vertical" | "horizontal";
  labelWidth?: CSSProperties["width"];
};

// 文档运行时使用本地组件库源码；该类型补充使未发布的新 Field API 也可通过文档站类型检查。
const Field = BaseField as ComponentType<DocumentedFieldProps>;

const fieldPropsData = [
  {
    name: "name",
    type: "string",
    description: "表单字段名称",
  },
  {
    name: "orientation",
    type: '"vertical" | "horizontal"',
    default: '"vertical"',
    description: "字段布局方向；horizontal 让标签和控件在同一行显示",
  },
  {
    name: "labelWidth",
    type: "string | number",
    default: '"8rem"（仅 horizontal）',
    description: "横向布局的标签区域宽度；number 按 px 处理",
  },
  {
    name: "invalid",
    type: "boolean",
    default: "false",
    description: "是否为无效状态",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用",
  },
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
];

const componentList = [
  {
    name: "Form",
    description: "<form> 元素包装，基于",
    source: "@base-ui/react/form",
    docsUrl: "https://base-ui.com/react/components/form",
  },
  {
    name: "Field",
    description: "表单字段容器，管理字段状态并支持纵向或横向布局。",
    source: "@base-ui/react/field",
    docsUrl: "https://base-ui.com/react/components/field",
  },
  {
    name: "FieldLabel",
    description: "字段标签。",
    source: "@base-ui/react/field",
    docsUrl: "https://base-ui.com/react/components/field",
  },
  {
    name: "FieldItem",
    description: "字段控件包装。",
    source: "@base-ui/react/field",
    docsUrl: "https://base-ui.com/react/components/field",
  },
  {
    name: "FieldControl",
    description: "将验证属性传递给子控件。",
    source: "@base-ui/react/field",
    docsUrl: "https://base-ui.com/react/components/field",
  },
  {
    name: "FieldDescription",
    description: "字段描述文字。",
    source: "@base-ui/react/field",
    docsUrl: "https://base-ui.com/react/components/field",
  },
  {
    name: "FieldError",
    description: "字段错误信息。",
    source: "@base-ui/react/field",
    docsUrl: "https://base-ui.com/react/components/field",
  },
];

export default function FormFieldDoc() {
  return (
    <ComponentDocPage>
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">Form & Field 表单</h1>
        <p className="mt-2 text-muted-foreground">
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            Form
          </code>{" "}
          是{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            {"<form>"}
          </code>{" "}
          的包装，
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            Field
          </code>{" "}
          是表单字段容器，通过组合子组件构建完整的表单字段；默认纵向排列，也可设置为横向布局。
        </p>
      </div>

      <ComponentDemo
        title="基础表单"
        description="包含标签、输入框和描述文字的单字段表单"
        code={`import {
  Form, Field, FieldLabel, FieldItem,
  FieldDescription, FieldControl, Input,
} from "@easyfix/console-ui";

<Form>
  <Field name="username">
    <FieldLabel>用户名</FieldLabel>
    <FieldItem>
      <FieldControl render={<Input placeholder="用户名" />} />
    </FieldItem>
    <FieldDescription>用户名用作账户唯一标识。</FieldDescription>
  </Field>
</Form>`}
      >
        <div className="w-full max-w-sm">
          <Form>
            <Field name="username">
              <FieldLabel>用户名</FieldLabel>
              <FieldItem>
              <FieldControl render={<Input placeholder="用户名" />} />
              </FieldItem>
              <FieldDescription>用户名用作账户唯一标识。</FieldDescription>
            </Field>
          </Form>
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="横向表单项"
        description={'设置 orientation="horizontal" 让标签与控件同行显示；通过 labelWidth 统一标签区域宽度。'}
        code={`<Form>
  <div className="flex flex-col gap-5">
    <Field name="email" orientation="horizontal" labelWidth={120}>
      <FieldLabel>邮箱地址</FieldLabel>
      <FieldItem>
        <FieldControl render={<Input type="email" placeholder="name@example.com" />} />
      </FieldItem>
      <FieldDescription>邮箱地址不会向第三方披露。</FieldDescription>
    </Field>
    <Field name="nickname" orientation="horizontal" labelWidth={120}>
      <FieldLabel>昵称</FieldLabel>
      <FieldItem>
        <FieldControl render={<Input placeholder="请输入昵称" />} />
      </FieldItem>
    </Field>
  </div>
</Form>`}
      >
        <div className="w-full max-w-lg">
          <Form>
            <div className="flex flex-col gap-5">
              <Field name="email" orientation="horizontal" labelWidth={120}>
                <FieldLabel>邮箱地址</FieldLabel>
                <FieldItem>
                  <FieldControl
                    render={
                      <Input
                        type="email"
                        placeholder="name@example.com"
                      />
                    }
                  />
                </FieldItem>
                <FieldDescription>
                  邮箱地址不会向第三方披露。
                </FieldDescription>
              </Field>
              <Field
                name="nickname"
                orientation="horizontal"
                labelWidth={120}
              >
                <FieldLabel>昵称</FieldLabel>
                <FieldItem>
                  <FieldControl render={<Input placeholder="请输入昵称" />} />
                </FieldItem>
              </Field>
            </div>
          </Form>
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="多字段表单"
        description="包含多个字段和错误提示的完整表单"
        code={`<Form>
  <Field name="email">
    <FieldLabel>邮箱</FieldLabel>
    <FieldItem>
      <FieldControl render={<Input type="email" placeholder="name@example.com" />} />
    </FieldItem>
    <FieldDescription>邮箱地址不会向第三方披露。</FieldDescription>
  </Field>
  <Field name="password">
    <FieldLabel>密码</FieldLabel>
    <FieldItem>
      <FieldControl render={<Input type="password" placeholder="密码" />} />
    </FieldItem>
    <FieldDescription>密码至少 8 个字符</FieldDescription>
  </Field>
  <Field name="nickname">
    <FieldLabel>昵称</FieldLabel>
    <FieldItem>
      <FieldControl render={<Input placeholder="昵称" />} />
    </FieldItem>
  </Field>
</Form>`}
      >
        <div className="w-full max-w-sm">
          <Form>
            <div className="flex flex-col gap-5">
              <Field name="email">
                <FieldLabel>邮箱</FieldLabel>
                <FieldItem>
                  <FieldControl
                    render={
                      <Input type="email" placeholder="name@example.com" />
                    }
                  />
                </FieldItem>
                <FieldDescription>
                  邮箱地址不会向第三方披露。
                </FieldDescription>
              </Field>
              <Field name="password">
                <FieldLabel>密码</FieldLabel>
                <FieldItem>
                  <FieldControl
                    render={
                      <Input type="password" placeholder="密码" />
                    }
                  />
                </FieldItem>
                <FieldDescription>密码至少 8 个字符</FieldDescription>
              </Field>
              <Field name="nickname">
                <FieldLabel>昵称</FieldLabel>
                <FieldItem>
                  <FieldControl
                    render={<Input placeholder="昵称" />}
                  />
                </FieldItem>
              </Field>
            </div>
          </Form>
        </div>
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">Field API</h2>
        <PropsTable data={fieldPropsData} />
      </div>

      <div>
        <h2 className="mb-4 text-xl font-semibold">组件构成</h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-2.5 text-start font-medium">组件</th>
                <th className="px-4 py-2.5 text-start font-medium">说明</th>
              </tr>
            </thead>
            <tbody>
              {componentList.map((comp) => (
                <tr key={comp.name} className="border-b last:border-b-0">
                  <td className="px-4 py-2.5">
                    <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-primary">
                      {comp.name}
                    </code>
                  </td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    {comp.description}{" "}
                    <ExternalDocLink
                      href={comp.docsUrl}
                      label={`${comp.name} Base UI 官方文档`}
                    >
                      {comp.source}
                    </ExternalDocLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </ComponentDocPage>
  );
}
