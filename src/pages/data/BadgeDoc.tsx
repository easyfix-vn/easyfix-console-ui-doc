import { Badge } from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";
import { ComponentDocPage } from "@/components/ComponentDocPage";

const variants = [
  "default",
  "secondary",
  "outline",
  "destructive",
  "success",
  "warning",
  "info",
  "error",
] as const;

const variantLabels: Record<(typeof variants)[number], string> = {
  default: "默认",
  secondary: "次要",
  outline: "描边",
  destructive: "危险",
  success: "成功",
  warning: "警告",
  info: "信息",
  error: "错误",
};

function VariantDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {variants.map((v) => (
        <Badge key={v} variant={v}>
          {variantLabels[v]}
        </Badge>
      ))}
    </div>
  );
}

function SizeDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge size="sm">小 sm</Badge>
      <Badge size="default">默认</Badge>
      <Badge size="lg">大 lg</Badge>
    </div>
  );
}

function AsButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge render={<button type="button" onClick={() => alert("clicked")} />} variant="default">
        查看详情
      </Badge>
      <Badge render={<a href="https://easyfix.vn" target="_blank" rel="noreferrer" />} variant="outline">
        链接跳转
      </Badge>
    </div>
  );
}

const propsData = [
  {
    name: "variant",
    type: '"default" | "secondary" | "outline" | "destructive" | "success" | "warning" | "info" | "error"',
    default: '"default"',
    description: "视觉风格",
  },
  {
    name: "size",
    type: '"sm" | "default" | "lg"',
    default: '"default"',
    description: "尺寸大小",
  },
  {
    name: "render",
    type: "ReactElement",
    description: "替换底层元素，支持按钮、链接等交互载体",
  },
];

export default function BadgeDoc() {
  return (
    <ComponentDocPage>
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">Badge 徽章</h1>
        <p className="mt-2 text-muted-foreground">
          用于标注状态、标签或数量的小型标记组件，支持多种语义颜色和尺寸。
        </p>
      </div>

      <ComponentDemo
        title="样式变体"
        description="variant 定义状态、标签等场景的语义颜色。"
        code={`import { Badge } from "@easyfix/console-ui";

<Badge variant="default">默认</Badge>
<Badge variant="secondary">次要</Badge>
<Badge variant="outline">描边</Badge>
<Badge variant="destructive">危险</Badge>
<Badge variant="success">成功</Badge>
<Badge variant="warning">警告</Badge>
<Badge variant="info">信息</Badge>
<Badge variant="error">错误</Badge>`}
      >
        <VariantDemo />
      </ComponentDemo>

      <ComponentDemo
        title="尺寸"
        description="size 定义徽章尺寸。"
        code={`<Badge size="sm">小</Badge>
<Badge size="default">默认</Badge>
<Badge size="lg">大</Badge>`}
      >
        <SizeDemo />
      </ComponentDemo>

      <ComponentDemo
        title="可交互"
        description="render 将徽章渲染为按钮或链接。"
        code={`<Badge render={<button type="button" onClick={() => {}} />} variant="default">
  查看详情
</Badge>
<Badge render={<a href="https://easyfix.vn" target="_blank" />} variant="outline">
  链接跳转
</Badge>`}
      >
        <AsButtonDemo />
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">API</h2>
      <PropsTable data={propsData} />
    </div>
    </ComponentDocPage>
  );
}
