import { Skeleton } from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";
import { ComponentDocPage } from "@/components/ComponentDocPage";

function BasicDemo() {
  return (
    <div className="flex w-full flex-col gap-3">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  );
}

function CardDemo() {
  return (
    <div className="w-full max-w-sm rounded-xl border p-4">
      <div className="flex items-center gap-3">
        <Skeleton className="size-10 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-16" />
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
      <Skeleton className="mt-4 h-48 w-full rounded-lg" />
    </div>
  );
}

const propsData = [
  {
    name: "className",
    type: "string",
    description:
      "自定义样式类名，用于控制骨架屏的尺寸和形状（如 h-4 w-full rounded-full）",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "子元素",
  },
];

export default function SkeletonDoc() {
  return (
    <ComponentDocPage>
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">Skeleton 骨架屏</h1>
        <p className="mt-2 text-muted-foreground">
          在内容加载期间提供占位动画，className 控制尺寸和形状。
        </p>
      </div>

      <ComponentDemo
        title="文本占位"
        description="不同宽度模拟文本行的加载状态。"
        code={`import { Skeleton } from "@easyfix/console-ui";

<div className="flex w-full flex-col gap-3">
  <Skeleton className="h-4 w-3/4" />
  <Skeleton className="h-4 w-1/2" />
  <Skeleton className="h-4 w-5/6" />
</div>`}
      >
        <BasicDemo />
      </ComponentDemo>

      <ComponentDemo
        title="卡片骨架"
        description="多个 Skeleton 组合为卡片加载状态。"
        code={`<div className="w-full max-w-sm rounded-xl border p-4">
  <div className="flex items-center gap-3">
    <Skeleton className="size-10 rounded-full" />
    <div className="flex-1 space-y-2">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-3 w-16" />
    </div>
  </div>
  <div className="mt-4 space-y-2">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-2/3" />
  </div>
  <Skeleton className="mt-4 h-48 w-full rounded-lg" />
</div>`}
      >
        <CardDemo />
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">API</h2>
      <p className="text-sm text-muted-foreground">
        Skeleton 接受原生{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
          div
        </code>{" "}
        的全部属性，以下为常用属性：
      </p>
      <PropsTable data={propsData} />
    </div>
    </ComponentDocPage>
  );
}
