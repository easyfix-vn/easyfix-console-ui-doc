import {
  Button,
  ToastProvider,
  toastManager,
  type ToastPosition,
} from "@easyfix/console-ui";
import { useState } from "react";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

const POSITIONS: ToastPosition[] = [
  "top-left",
  "top-center",
  "top-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
];

const propsData = [
  { name: "title", type: "string", description: "消息标题" },
  { name: "description", type: "string", description: "消息描述内容" },
  {
    name: "type",
    type: '"success" | "error" | "warning" | "info" | "loading"',
    description: "消息类型",
  },
];

const providerPropsData = [
  {
    name: "position",
    type: '"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"',
    default: '"bottom-right"',
    description:
      "全局显示位置；同时决定默认滑动关闭方向。",
  },
];

function PositionSelector({
  position,
  onPositionChange,
}: {
  position: ToastPosition;
  onPositionChange: (p: ToastPosition) => void;
}) {
  function showAt(p: ToastPosition) {
    onPositionChange(p);
    queueMicrotask(() =>
      toastManager.add({
        title: `位置：${p}`,
        description: `消息显示在 ${p}`,
        type: "info",
      }),
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">
        当前位置：<code>{position}</code>
      </p>
      <div className="grid grid-cols-3 gap-2 sm:max-w-md">
        {POSITIONS.map((p) => (
          <Button
            key={p}
            variant={position === p ? "default" : "outline"}
            size="sm"
            onClick={() => showAt(p)}
          >
            {p}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default function MessageDoc() {
  const [position, setPosition] = useState<ToastPosition>("top-right");

  return (
    <div className="space-y-10">
      <ToastProvider key={position} position={position} />

      <div>
        <h1 className="font-heading text-3xl font-bold">Message 消息提示</h1>
        <p className="mt-2 text-muted-foreground">
          全局消息用于呈现短时操作反馈；{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            toastManager.add()
          </code>{" "}
          创建消息，显示位置由
          <code className="mx-1 rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            ToastProvider.position
          </code>
          管理。
        </p>
      </div>

      <ComponentDemo
        title="不同类型"
        description="支持 success、error、warning、info、loading 五种消息类型。"
        code={`import { toastManager, ToastProvider, Button } from "@easyfix/console-ui";

<ToastProvider position="top-right" />

<Button onClick={() => toastManager.add({ title: "成功", description: "操作已完成", type: "success" })}>
  成功
</Button>`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button
            variant="outline"
            onClick={() =>
              toastManager.add({
                title: "成功",
                description: "操作已完成",
                type: "success",
              })
            }
          >
            成功
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toastManager.add({
                title: "错误",
                description: "操作失败，稍后重试",
                type: "error",
              })
            }
          >
            错误
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toastManager.add({
                title: "警告",
                description: "存在潜在风险",
                type: "warning",
              })
            }
          >
            警告
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toastManager.add({
                title: "信息",
                description: "这是一条提示信息",
                type: "info",
              })
            }
          >
            信息
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toastManager.add({
                title: "加载中",
                description: "处理中...",
                type: "loading",
              })
            }
          >
            加载
          </Button>
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="显示位置 position"
        description="ToastProvider 的 position 定义消息显示位置。"
        code={`import { toastManager, ToastProvider, type ToastPosition } from "@easyfix/console-ui";

const [position, setPosition] = useState<ToastPosition>("top-right");

<ToastProvider key={position} position={position} />

function showAt(p: ToastPosition) {
  setPosition(p);
  queueMicrotask(() =>
    toastManager.add({ title: \`位置：\${p}\`, type: "info" })
  );
}`}
      >
        <PositionSelector position={position} onPositionChange={setPosition} />
      </ComponentDemo>

      <ComponentDemo
        title="仅标题"
        description="仅传 title 时渲染简短消息。"
        code={`<Button onClick={() => toastManager.add({ title: "文件已保存", type: "success" })}>
  保存文件
</Button>`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button
            variant="outline"
            onClick={() =>
              toastManager.add({ title: "文件已保存", type: "success" })
            }
          >
            保存文件
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toastManager.add({ title: "网络连接失败", type: "error" })
            }
          >
            网络错误
          </Button>
        </div>
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">API</h2>

        <h3 className="mb-3 text-lg font-medium">ToastProvider</h3>
        <PropsTable data={providerPropsData} />

        <h3 className="mb-3 mt-6 text-lg font-medium">
          toastManager.add(options)
        </h3>
        <PropsTable data={propsData} />
      </div>
    </div>
  );
}
