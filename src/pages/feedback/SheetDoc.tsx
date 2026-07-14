import {
  Button,
  Sheet,
  SheetClose,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetPanel,
  SheetPopup,
  SheetTitle,
  SheetTrigger,
} from "@easyfix/console-ui";

import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";
import { ComponentDocPage } from "@/components/ComponentDocPage";

const sheetPopupPropsData = [
  {
    name: "side",
    type: '"right" | "left" | "top" | "bottom"',
    default: '"right"',
    description: "抽屉弹出方向",
  },
  {
    name: "variant",
    type: '"default" | "inset"',
    default: '"default"',
    description: "抽屉样式变体，inset 模式在小屏以上会有内边距和圆角",
  },
  {
    name: "showCloseButton",
    type: "boolean",
    default: "true",
    description: "是否显示右上角关闭按钮",
  },
  {
    name: "className",
    type: "string",
    description: "自定义弹出层样式类名",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "抽屉内容",
  },
];

const sheetPropsData = [
  {
    name: "open",
    type: "boolean",
    description: "受控模式下是否打开",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    description: "打开/关闭状态变化回调",
  },
  {
    name: "defaultOpen",
    type: "boolean",
    default: "false",
    description: "默认是否打开",
  },
];

const sides = ["right", "left", "top", "bottom"] as const;

export default function SheetDoc() {
  return (
    <ComponentDocPage>
    <div className="space-y-10">
      <div>
        <h1 className="font-heading text-3xl font-bold">Sheet 侧边抽屉</h1>
        <p className="mt-2 text-muted-foreground">
          侧边抽屉，适合表单编辑和详情查看。
        </p>
      </div>

      <ComponentDemo
        title="基本用法"
        description="右侧抽屉包含标题、内容和底部操作区。"
        code={`import {
  Sheet, SheetTrigger, SheetPopup,
  SheetHeader, SheetTitle, SheetDescription,
  SheetPanel, SheetFooter, SheetClose,
  Button,
} from "@easyfix/console-ui";

<Sheet>
  <SheetTrigger render={<Button variant="outline" />}>
    打开抽屉
  </SheetTrigger>
  <SheetPopup>
    <SheetHeader>
      <SheetTitle>编辑配置</SheetTitle>
      <SheetDescription>维护应用配置。</SheetDescription>
    </SheetHeader>
    <SheetPanel>
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          抽屉主体区域可承载表单或其他内容。
        </p>
      </div>
    </SheetPanel>
    <SheetFooter>
      <SheetClose render={<Button variant="outline" />}>取消</SheetClose>
      <Button>保存</Button>
    </SheetFooter>
  </SheetPopup>
</Sheet>`}
      >
        <Sheet>
          <SheetTrigger render={<Button variant="outline" />}>
            打开抽屉
          </SheetTrigger>
          <SheetPopup>
            <SheetHeader>
              <SheetTitle>编辑配置</SheetTitle>
              <SheetDescription>维护应用配置。</SheetDescription>
            </SheetHeader>
            <SheetPanel>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  抽屉主体区域可承载表单或其他内容。
                </p>
              </div>
            </SheetPanel>
            <SheetFooter>
              <SheetClose render={<Button variant="outline" />}>
                取消
              </SheetClose>
              <Button>保存</Button>
            </SheetFooter>
          </SheetPopup>
        </Sheet>
      </ComponentDemo>

      <ComponentDemo
        title="不同方向"
        description="side 定义抽屉的弹出方向。"
        code={`import {
  Sheet, SheetTrigger, SheetPopup,
  SheetHeader, SheetTitle, SheetDescription,
  Button,
} from "@easyfix/console-ui";

{/* side 可选值: "right" | "left" | "top" | "bottom" */}
<Sheet>
  <SheetTrigger render={<Button variant="outline" />}>
    从左侧打开
  </SheetTrigger>
  <SheetPopup side="left">
    <SheetHeader>
      <SheetTitle>左侧抽屉</SheetTitle>
      <SheetDescription>从左侧滑入的抽屉面板。</SheetDescription>
    </SheetHeader>
    <SheetPanel>
      <p className="text-sm text-muted-foreground">
        这是一个从 left 方向弹出的抽屉示例。
      </p>
    </SheetPanel>
  </SheetPopup>
</Sheet>`}
      >
        <div className="flex flex-wrap gap-3">
          {sides.map((side) => (
            <Sheet key={side}>
              <SheetTrigger render={<Button variant="outline" />}>
                {side}
              </SheetTrigger>
              <SheetPopup side={side}>
                <SheetHeader>
                  <SheetTitle>{side} 方向抽屉</SheetTitle>
                  <SheetDescription>
                    从 {side} 方向滑入的抽屉面板。
                  </SheetDescription>
                </SheetHeader>
                <SheetPanel>
                  <p className="text-sm text-muted-foreground">
                    这是一个从 {side} 方向弹出的抽屉示例。
                  </p>
                </SheetPanel>
              </SheetPopup>
            </Sheet>
          ))}
        </div>
      </ComponentDemo>

      <div>
        <h2 className="font-heading mb-4 text-xl font-semibold">API</h2>
        <PropsTable data={sheetPropsData} />
      </div>

      <div>
        <h2 className="font-heading mb-4 text-xl font-semibold">
          SheetPopup
        </h2>
        <PropsTable data={sheetPopupPropsData} />
      </div>
    </div>
    </ComponentDocPage>
  );
}
