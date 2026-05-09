import { Separator } from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

const propsData = [
  {
    name: "orientation",
    type: "'horizontal' | 'vertical'",
    default: "'horizontal'",
    description: "分隔线方向",
  },
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
];

export default function SeparatorDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">Separator 分隔线</h1>
        <p className="mt-2 text-muted-foreground">
          分隔线组件，基于{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            @base-ui/react/separator
          </code>{" "}
          封装，用于在视觉上分隔内容区域。
        </p>
      </div>

      <ComponentDemo
        title="水平分隔线"
        description="默认的水平方向分隔线，用于上下内容的分隔。"
        code={`import { Separator } from "@easyfix/console-ui";

<div>
  <p>上方内容</p>
  <Separator />
  <p>下方内容</p>
</div>`}
      >
        <div className="w-full max-w-sm space-y-3">
          <p className="text-sm">上方内容</p>
          <Separator />
          <p className="text-sm">下方内容</p>
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="垂直分隔线"
        description="设置 orientation='vertical' 使用垂直方向的分隔线，适合行内元素分隔。"
        code={`<div className="flex items-center gap-3 h-5">
  <span>首页</span>
  <Separator orientation="vertical" />
  <span>文档</span>
  <Separator orientation="vertical" />
  <span>关于</span>
</div>`}
      >
        <div className="flex h-5 items-center gap-3 text-sm">
          <span>首页</span>
          <Separator orientation="vertical" />
          <span>文档</span>
          <Separator orientation="vertical" />
          <span>关于</span>
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="内容分组"
        description="在列表或卡片中使用分隔线组织内容结构。"
        code={`<div className="rounded-lg border p-4 space-y-3">
  <div>
    <h4 className="font-medium">标题</h4>
    <p className="text-sm text-muted-foreground">描述信息</p>
  </div>
  <Separator />
  <div className="flex gap-4 text-sm">
    <span>详情</span>
    <span>设置</span>
  </div>
</div>`}
      >
        <div className="w-full max-w-sm space-y-3 rounded-lg border p-4">
          <div>
            <h4 className="font-medium">标题</h4>
            <p className="text-sm text-muted-foreground">这是一段描述信息</p>
          </div>
          <Separator />
          <div className="flex gap-4 text-sm">
            <span>详情</span>
            <span>设置</span>
          </div>
        </div>
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">API</h2>
      <p className="text-sm text-muted-foreground">
        Separator 接受{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
          SeparatorPrimitive.Props
        </code>{" "}
        的全部属性，以下为常用属性：
      </p>
      <PropsTable data={propsData} />
    </div>
  );
}
