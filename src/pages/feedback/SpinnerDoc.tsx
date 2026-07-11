import { Spinner } from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

function BasicDemo() {
  return <Spinner />;
}

function SizeDemo() {
  return (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Spinner className="size-4" />
        <span className="text-xs text-muted-foreground">小</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner className="size-6" />
        <span className="text-xs text-muted-foreground">中</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner className="size-8" />
        <span className="text-xs text-muted-foreground">大</span>
      </div>
    </div>
  );
}

const propsData = [
  {
    name: "className",
    type: "string",
    description: "自定义样式类名，用于控制尺寸和颜色",
  },
  {
    name: "size",
    type: "number",
    description: "图标尺寸（像素），来自 Lucide 图标属性",
  },
  {
    name: "strokeWidth",
    type: "number",
    default: "2",
    description: "图标线条宽度",
  },
  {
    name: "color",
    type: "string",
    description: "图标颜色",
  },
];

export default function SpinnerDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">Spinner 加载中</h1>
        <p className="mt-2 text-muted-foreground">
          表示内容或操作正在加载的旋转图标，基于 Lucide 的{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            Loader2Icon
          </code>{" "}
          封装。
        </p>
      </div>

      <ComponentDemo
        title="默认样式"
        description="默认尺寸的加载旋转图标。"
        code={`import { Spinner } from "@easyfix/console-ui";

<Spinner />`}
      >
        <BasicDemo />
      </ComponentDemo>

      <ComponentDemo
        title="不同尺寸"
        description="className 控制图标尺寸。"
        code={`<Spinner className="size-4" />
<Spinner className="size-6" />
<Spinner className="size-8" />`}
      >
        <SizeDemo />
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">API</h2>
      <p className="text-sm text-muted-foreground">
        Spinner 接受 Lucide{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
          Loader2Icon
        </code>{" "}
        的全部属性，以下为常用属性：
      </p>
      <PropsTable data={propsData} />
    </div>
  );
}
