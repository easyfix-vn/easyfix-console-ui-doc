import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipPopup,
  Button,
} from "@easyfix/console-ui";

import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

const propsData = [
  {
    name: "content",
    type: "ReactNode",
    description: "提示内容（通过 TooltipPopup children 传入）",
  },
  {
    name: "side",
    type: '"top" | "bottom" | "left" | "right"',
    default: '"top"',
    description: "弹出方向",
  },
  {
    name: "align",
    type: '"start" | "center" | "end"',
    default: '"center"',
    description: "对齐方式",
  },
  {
    name: "delayDuration",
    type: "number",
    default: "200",
    description: "延迟显示时间（毫秒）",
  },
];

export default function TooltipDoc() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="font-heading text-3xl font-bold">Tooltip 文字提示</h1>
        <p className="mt-2 text-muted-foreground">
          鼠标悬停时显示的文字提示气泡，用于展示简短的辅助信息。需要在外层包裹
          TooltipProvider。
        </p>
      </div>

      <ComponentDemo
        title="基础用法"
        description="鼠标悬停在按钮上时显示提示文字。"
        code={`import { TooltipProvider, Tooltip, TooltipTrigger, TooltipPopup, Button } from "@easyfix/console-ui";

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">悬停查看</Button>
    </TooltipTrigger>
    <TooltipPopup>这是一条提示信息</TooltipPopup>
  </Tooltip>
</TooltipProvider>`}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline" />}>
              悬停查看
            </TooltipTrigger>
            <TooltipPopup>这是一条提示信息</TooltipPopup>
          </Tooltip>
        </TooltipProvider>
      </ComponentDemo>

      <ComponentDemo
        title="不同方向"
        description="通过 side 属性控制提示的弹出方向。"
        code={`import { TooltipProvider, Tooltip, TooltipTrigger, TooltipPopup, Button } from "@easyfix/console-ui";

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">上方</Button>
    </TooltipTrigger>
    <TooltipPopup side="top">上方提示</TooltipPopup>
  </Tooltip>

  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">下方</Button>
    </TooltipTrigger>
    <TooltipPopup side="bottom">下方提示</TooltipPopup>
  </Tooltip>

  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">左侧</Button>
    </TooltipTrigger>
    <TooltipPopup side="left">左侧提示</TooltipPopup>
  </Tooltip>

  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">右侧</Button>
    </TooltipTrigger>
    <TooltipPopup side="right">右侧提示</TooltipPopup>
  </Tooltip>
</TooltipProvider>`}
      >
        <TooltipProvider>
          <div className="flex flex-wrap items-center gap-3">
            <Tooltip>
              <TooltipTrigger render={<Button variant="outline" />}>
                上方
              </TooltipTrigger>
              <TooltipPopup side="top">上方提示</TooltipPopup>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger render={<Button variant="outline" />}>
                下方
              </TooltipTrigger>
              <TooltipPopup side="bottom">下方提示</TooltipPopup>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger render={<Button variant="outline" />}>
                左侧
              </TooltipTrigger>
              <TooltipPopup side="left">左侧提示</TooltipPopup>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger render={<Button variant="outline" />}>
                右侧
              </TooltipTrigger>
              <TooltipPopup side="right">右侧提示</TooltipPopup>
            </Tooltip>
          </div>
        </TooltipProvider>
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">API</h2>
        <PropsTable data={propsData} />
      </div>
    </div>
  );
}
