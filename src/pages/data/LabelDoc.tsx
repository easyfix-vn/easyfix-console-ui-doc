import { Input, Label } from "@easyfix/console-ui";

import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

const propsData = [
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
  {
    name: "render",
    type: "RenderProp<'label'>",
    description: "自定义渲染元素，用于替换默认的 label 标签",
  },
  {
    name: "htmlFor",
    type: "string",
    description: "关联的表单控件 ID",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "标签内容",
  },
];

export default function LabelDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">Label 标签</h1>
        <p className="mt-2 text-muted-foreground">
          用于为表单控件提供可访问的文本标签，基于原生{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            label
          </code>{" "}
          元素封装，支持自定义渲染。
        </p>
      </div>

      <ComponentDemo
        title="基础标签"
        description="Label 提供表单控件的可访问名称。"
        code={`import { Label } from "@easyfix/console-ui";

<Label>用户名</Label>
<Label>邮箱地址</Label>`}
      >
        <div className="flex flex-col gap-3">
          <Label>用户名</Label>
          <Label>邮箱地址</Label>
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="配合 Input 使用"
        description="htmlFor 关联表单控件；激活标签时焦点移至输入框。"
        code={`import { Input, Label } from "@easyfix/console-ui";

<div className="flex flex-col gap-2">
  <Label htmlFor="username">用户名</Label>
  <Input id="username" placeholder="用户名" />
</div>`}
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="demo-username">用户名</Label>
            <Input id="demo-username" placeholder="用户名" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="demo-email">邮箱地址</Label>
            <Input id="demo-email" placeholder="邮箱" type="email" />
          </div>
        </div>
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">Label API</h2>
      <PropsTable data={propsData} />
    </div>
  );
}
