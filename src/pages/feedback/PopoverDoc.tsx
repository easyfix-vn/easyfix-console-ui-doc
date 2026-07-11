import {
  Popover,
  PopoverTrigger,
  PopoverPopup,
  PopoverClose,
  PopoverTitle,
  PopoverDescription,
  Button,
} from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

const popoverPropsData = [
  {
    name: "defaultOpen",
    type: "boolean",
    default: "false",
    description: "非受控模式下弹出框是否默认打开",
  },
  {
    name: "open",
    type: "boolean",
    description: "受控模式下弹出框的打开状态",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    description: "打开状态变化时的回调",
  },
];

const popupPropsData = [
  {
    name: "side",
    type: '"top" | "bottom" | "left" | "right"',
    default: '"bottom"',
    description: "弹出框相对于触发器的位置",
  },
  {
    name: "align",
    type: '"start" | "center" | "end"',
    default: '"center"',
    description: "弹出框相对于触发器的对齐方式",
  },
  {
    name: "sideOffset",
    type: "number",
    default: "4",
    description: "弹出框与触发器之间的距离（px）",
  },
  {
    name: "alignOffset",
    type: "number",
    default: "0",
    description: "弹出框对齐方向的偏移量（px）",
  },
  {
    name: "tooltipStyle",
    type: "boolean",
    default: "false",
    description: "是否使用 tooltip 风格的紧凑样式",
  },
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
];

export default function PopoverDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">Popover 弹出框</h1>
        <p className="mt-2 text-muted-foreground">
          弹出框组件，基于{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            @base-ui/react/popover
          </code>{" "}
          封装，用于在触发元素附近展示浮层内容。
        </p>
      </div>

      <ComponentDemo
        title="基础弹出框"
        description="点击按钮弹出浮层，展示标题和描述信息。"
        code={`import {
  Popover, PopoverTrigger, PopoverPopup,
  PopoverTitle, PopoverDescription, Button,
} from "@easyfix/console-ui";

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">打开弹出框</Button>
  </PopoverTrigger>
  <PopoverPopup>
    <PopoverTitle>提示信息</PopoverTitle>
    <PopoverDescription>这是一段弹出框中的描述文字。</PopoverDescription>
  </PopoverPopup>
</Popover>`}
      >
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">打开弹出框</Button>
          </PopoverTrigger>
          <PopoverPopup>
            <PopoverTitle>提示信息</PopoverTitle>
            <PopoverDescription>
              这是一段弹出框中的描述文字。
            </PopoverDescription>
          </PopoverPopup>
        </Popover>
      </ComponentDemo>

      <ComponentDemo
        title="不同位置"
        description="通过 side 属性控制弹出框出现的位置。"
        code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">上方</Button>
  </PopoverTrigger>
  <PopoverPopup side="top">
    <PopoverDescription>弹出框在上方</PopoverDescription>
  </PopoverPopup>
</Popover>

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">右侧</Button>
  </PopoverTrigger>
  <PopoverPopup side="right">
    <PopoverDescription>弹出框在右侧</PopoverDescription>
  </PopoverPopup>
</Popover>

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">左侧</Button>
  </PopoverTrigger>
  <PopoverPopup side="left">
    <PopoverDescription>弹出框在左侧</PopoverDescription>
  </PopoverPopup>
</Popover>`}
      >
        <div className="flex items-center gap-3">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">上方</Button>
            </PopoverTrigger>
            <PopoverPopup side="top">
              <PopoverDescription>弹出框在上方</PopoverDescription>
            </PopoverPopup>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">右侧</Button>
            </PopoverTrigger>
            <PopoverPopup side="right">
              <PopoverDescription>弹出框在右侧</PopoverDescription>
            </PopoverPopup>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">左侧</Button>
            </PopoverTrigger>
            <PopoverPopup side="left">
              <PopoverDescription>弹出框在左侧</PopoverDescription>
            </PopoverPopup>
          </Popover>
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="带关闭按钮"
        description="使用 PopoverClose 组件在弹出框内添加关闭按钮。"
        code={`import {
  Popover, PopoverTrigger, PopoverPopup,
  PopoverClose, PopoverTitle, PopoverDescription, Button,
} from "@easyfix/console-ui";

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">带关闭按钮</Button>
  </PopoverTrigger>
  <PopoverPopup>
    <div className="flex items-start gap-4">
      <div className="min-w-0 flex-1">
        <PopoverTitle>通知设置</PopoverTitle>
        <PopoverDescription>配置您的通知偏好设置。</PopoverDescription>
      </div>
      <PopoverClose aria-label="关闭" />
    </div>
  </PopoverPopup>
</Popover>`}
      >
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">带关闭按钮</Button>
          </PopoverTrigger>
          <PopoverPopup>
            <div className="flex items-start gap-4">
              <div className="min-w-0 flex-1">
                <PopoverTitle>通知设置</PopoverTitle>
                <PopoverDescription>
                  配置您的通知偏好设置。
                </PopoverDescription>
              </div>
              <PopoverClose aria-label="关闭" />
            </div>
          </PopoverPopup>
        </Popover>
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">API</h2>
        <h3 className="mb-3 text-lg font-medium">Popover</h3>
        <PropsTable data={popoverPropsData} />
        <h3 className="mb-3 mt-6 text-lg font-medium">PopoverPopup</h3>
        <PropsTable data={popupPropsData} />
      </div>
    </div>
  );
}
