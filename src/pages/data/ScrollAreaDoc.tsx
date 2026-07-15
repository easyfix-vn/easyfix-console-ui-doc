import { ScrollArea, Separator } from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { ExternalDocLink } from "@/components/ExternalDocLink";
import { PropsTable } from "@/components/PropsTable";
import { ComponentDocPage } from "@/components/ComponentDocPage";

const tags = Array.from({ length: 30 }, (_, i) => `项目 ${i + 1}`);

const propsData = [
  {
    name: "children",
    type: "React.ReactNode",
    description: "滚动区域内的内容",
  },
  {
    name: "scrollFade",
    type: "boolean",
    default: "false",
    description: "是否在溢出方向显示渐隐遮罩效果",
  },
  {
    name: "scrollbarGutter",
    type: "boolean",
    default: "false",
    description: "是否在溢出时为滚动条预留间距",
  },
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
];

export default function ScrollAreaDoc() {
  return (
    <ComponentDocPage>
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">
          ScrollArea 滚动区域
        </h1>
        <p className="mt-2 text-muted-foreground">
          自定义滚动区域组件，基于{" "}
          <ExternalDocLink
            href="https://base-ui.com/react/components/scroll-area"
            label="Base UI Scroll Area 官方文档"
          >
            @base-ui/react/scroll-area
          </ExternalDocLink>{" "}
          封装，提供统一样式的滚动条和可选的渐隐效果。
        </p>
      </div>

      <ComponentDemo
        title="垂直滚动区域"
        description="限制容器高度，内容超出时显示垂直滚动条。"
        code={`import { ScrollArea } from "@easyfix/console-ui";

<ScrollArea className="h-48 w-48 rounded-md border">
  <div className="p-4">
    {tags.map((tag) => (
      <div key={tag} className="py-2 text-sm">{tag}</div>
    ))}
  </div>
</ScrollArea>`}
      >
        <ScrollArea className="h-48 w-48 rounded-md border">
          <div className="p-4">
            {tags.map((tag) => (
              <div key={tag} className="py-2 text-sm">
                {tag}
              </div>
            ))}
          </div>
        </ScrollArea>
      </ComponentDemo>

      <ComponentDemo
        title="水平滚动区域"
        description="内容宽度超出容器时显示水平滚动条。"
        code={`<ScrollArea className="w-72 rounded-md border">
  <div className="flex gap-4 p-4">
    {Array.from({ length: 10 }, (_, i) => (
      <div key={i} className="flex h-20 w-28 shrink-0 items-center justify-center rounded-md bg-muted">
        {i + 1}
      </div>
    ))}
  </div>
</ScrollArea>`}
      >
        <ScrollArea className="w-72 rounded-md border">
          <div className="flex gap-4 p-4">
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={i}
                className="flex h-20 w-28 shrink-0 items-center justify-center rounded-md bg-muted text-sm"
              >
                {i + 1}
              </div>
            ))}
          </div>
        </ScrollArea>
      </ComponentDemo>

      <ComponentDemo
        title="渐隐效果"
        description="scrollFade 在溢出边缘显示渐隐遮罩。"
        code={`<ScrollArea scrollFade className="h-48 w-48 rounded-md border">
  <div className="p-4">
    {tags.map((tag) => (
      <div key={tag} className="py-2 text-sm">{tag}</div>
    ))}
  </div>
</ScrollArea>`}
      >
        <ScrollArea scrollFade className="h-48 w-48 rounded-md border">
          <div className="p-4">
            {tags.map((tag) => (
              <div key={tag} className="py-2 text-sm">
                {tag}
              </div>
            ))}
          </div>
        </ScrollArea>
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">API</h2>
      <p className="text-sm text-muted-foreground">
        ScrollArea 接受{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
          ScrollAreaPrimitive.Root.Props
        </code>{" "}
        的全部属性及以下扩展属性：
      </p>
      <PropsTable data={propsData} />
    </div>
    </ComponentDocPage>
  );
}
