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
      "全局消息显示位置；同时影响默认的 swipe 关闭方向（顶部上滑/底部下滑、左侧左滑/右侧右滑）",
  },
];

function PositionDemo() {
  const [position, setPosition] = useState<ToastPosition>("top-right");

  function showAt(p: ToastPosition) {
    setPosition(p);
    // setState 异步生效，先排队 add，base-ui 会用新 position 渲染下一帧
    queueMicrotask(() =>
      toastManager.add({
        title: `位置：${p}`,
        description: "消息会出现在所选位置",
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
      {/*
        通过 key 强制 ToastProvider 在 position 变化时重新挂载，
        以便 viewport 的 data-position / swipeDirection 同步生效。
      */}
      <ToastProvider key={position} position={position} />
    </div>
  );
}

export default function MessageDoc() {
  return (
    <div className="space-y-10">
      {/* 默认 ToastProvider，演示中其它例子使用 */}
      <ToastProvider position="top-right" />

      <div>
        <h1 className="font-heading text-3xl font-bold">Message 消息提示</h1>
        <p className="mt-2 text-muted-foreground">
          全局消息通知，用于操作反馈。通过{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            toastManager.add()
          </code>{" "}
          命令式调用。显示位置由
          <code className="mx-1 rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            ToastProvider.position
          </code>
          控制，支持 6 个常用位置。
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
                description: "操作失败，请重试",
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
                description: "请注意潜在风险",
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
                description: "请稍候...",
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
        description="通过 ToastProvider 的 position 属性控制消息显示位置；下面的演示会先切换 position 再触发消息。"
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
        <PositionDemo />
      </ComponentDemo>

      <ComponentDemo
        title="仅标题"
        description="可以只传递 title 显示简短消息。"
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
