import {
  Drawer,
  DrawerTrigger,
  DrawerPopup,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerPanel,
  DrawerFooter,
  DrawerClose,
  DrawerBar,
  Button,
} from "@easyfix/console-ui";

import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

const drawerPropsData = [
  {
    name: "position",
    type: '"right" | "left" | "top" | "bottom"',
    default: '"bottom"',
    description: "抽屉弹出方向",
  },
  {
    name: "closeOnBackdropClick",
    type: "boolean",
    default: "true",
    description:
      "点击遮罩是否关闭。设为 false 时遮罩点击不会关闭抽屉，必须显式调用关闭按钮。",
  },
  {
    name: "closeOnEscape",
    type: "boolean",
    default: "true",
    description:
      "ESC 键是否关闭。设为 false 时按下 ESC 键不会关闭抽屉，常用于流程不可中断的场景。",
  },
];

const popupPropsData = [
  {
    name: "position",
    type: '"right" | "left" | "top" | "bottom"',
    description: "覆盖 Drawer 的 position 属性",
  },
  {
    name: "width",
    type: "string",
    description: "抽屉宽度（侧边抽屉时生效）",
  },
  {
    name: "showCloseButton",
    type: "boolean",
    default: "true",
    description: "是否显示关闭按钮",
  },
];

export default function DrawerDoc() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="font-heading text-3xl font-bold">Drawer 抽屉</h1>
        <p className="mt-2 text-muted-foreground">
          从屏幕边缘滑出的面板，适合展示详细信息或收集用户输入，支持多个方向。
        </p>
      </div>

      <ComponentDemo
        title="底部抽屉"
        description="默认从底部滑出，适合移动端交互场景。"
        code={`import {
  Drawer, DrawerTrigger, DrawerPopup,
  DrawerHeader, DrawerTitle, DrawerDescription,
  DrawerPanel, DrawerFooter, DrawerClose, DrawerBar, Button,
} from "@easyfix/console-ui";

<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">打开底部抽屉</Button>
  </DrawerTrigger>
  <DrawerPopup>
    <DrawerBar />
    <DrawerHeader>
      <DrawerTitle>底部抽屉</DrawerTitle>
      <DrawerDescription>这是一个从底部滑出的抽屉示例。</DrawerDescription>
    </DrawerHeader>
    <DrawerPanel>
      <p className="text-sm text-muted-foreground">
        抽屉内容区域，可以放置任意内容。
      </p>
    </DrawerPanel>
    <DrawerFooter>
      <DrawerClose asChild>
        <Button variant="outline">关闭</Button>
      </DrawerClose>
      <Button>确认</Button>
    </DrawerFooter>
  </DrawerPopup>
</Drawer>`}
      >
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">打开底部抽屉</Button>
          </DrawerTrigger>
          <DrawerPopup>
            <DrawerBar />
            <DrawerHeader>
              <DrawerTitle>底部抽屉</DrawerTitle>
              <DrawerDescription>
                这是一个从底部滑出的抽屉示例。
              </DrawerDescription>
            </DrawerHeader>
            <DrawerPanel>
              <p className="text-sm text-muted-foreground">
                抽屉内容区域，可以放置任意内容。
              </p>
            </DrawerPanel>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">关闭</Button>
              </DrawerClose>
              <Button>确认</Button>
            </DrawerFooter>
          </DrawerPopup>
        </Drawer>
      </ComponentDemo>

      <ComponentDemo
        title="右侧抽屉"
        description="设置 position='right' 从右侧滑出，适合展示详情或设置面板。"
        code={`import {
  Drawer, DrawerTrigger, DrawerPopup,
  DrawerHeader, DrawerTitle, DrawerDescription,
  DrawerPanel, DrawerFooter, DrawerClose, Button,
} from "@easyfix/console-ui";

<Drawer position="right">
  <DrawerTrigger asChild>
    <Button variant="outline">打开右侧抽屉</Button>
  </DrawerTrigger>
  <DrawerPopup>
    <DrawerHeader>
      <DrawerTitle>详情面板</DrawerTitle>
      <DrawerDescription>从右侧滑出的抽屉面板。</DrawerDescription>
    </DrawerHeader>
    <DrawerPanel>
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium">名称</label>
          <p className="text-sm text-muted-foreground">示例项目</p>
        </div>
        <div>
          <label className="text-sm font-medium">状态</label>
          <p className="text-sm text-muted-foreground">运行中</p>
        </div>
        <div>
          <label className="text-sm font-medium">创建时间</label>
          <p className="text-sm text-muted-foreground">2024-01-01</p>
        </div>
      </div>
    </DrawerPanel>
    <DrawerFooter>
      <DrawerClose asChild>
        <Button variant="outline">关闭</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerPopup>
</Drawer>`}
      >
        <Drawer position="right">
          <DrawerTrigger asChild>
            <Button variant="outline">打开右侧抽屉</Button>
          </DrawerTrigger>
          <DrawerPopup>
            <DrawerHeader>
              <DrawerTitle>详情面板</DrawerTitle>
              <DrawerDescription>
                从右侧滑出的抽屉面板。
              </DrawerDescription>
            </DrawerHeader>
            <DrawerPanel>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">名称</label>
                  <p className="text-sm text-muted-foreground">示例项目</p>
                </div>
                <div>
                  <label className="text-sm font-medium">状态</label>
                  <p className="text-sm text-muted-foreground">运行中</p>
                </div>
                <div>
                  <label className="text-sm font-medium">创建时间</label>
                  <p className="text-sm text-muted-foreground">2024-01-01</p>
                </div>
              </div>
            </DrawerPanel>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">关闭</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerPopup>
        </Drawer>
      </ComponentDemo>

      <ComponentDemo
        title="禁止遮罩 / ESC 关闭"
        description="closeOnBackdropClick=false 阻止点击遮罩关闭；closeOnEscape=false 阻止 ESC 关闭。常用于流程性、强提交场景，强制用户使用底部按钮。"
        code={`<Drawer
  position="right"
  closeOnBackdropClick={false}
  closeOnEscape={false}
>
  <DrawerTrigger asChild>
    <Button variant="outline">必须点击关闭</Button>
  </DrawerTrigger>
  <DrawerPopup>
    <DrawerHeader>
      <DrawerTitle>不可被外部关闭</DrawerTitle>
      <DrawerDescription>
        点击遮罩或按 ESC 键都不会关闭，必须使用下方按钮。
      </DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <DrawerClose render={<Button />}>我已确认</DrawerClose>
    </DrawerFooter>
  </DrawerPopup>
</Drawer>`}
      >
        <Drawer
          position="right"
          closeOnBackdropClick={false}
          closeOnEscape={false}
        >
          <DrawerTrigger asChild>
            <Button variant="outline">必须点击关闭</Button>
          </DrawerTrigger>
          <DrawerPopup>
            <DrawerHeader>
              <DrawerTitle>不可被外部关闭</DrawerTitle>
              <DrawerDescription>
                点击遮罩或按 ESC 键都不会关闭，必须使用下方按钮。
              </DrawerDescription>
            </DrawerHeader>
            <DrawerPanel>
              <p className="text-sm text-muted-foreground">
                适用于流程性、强提交场景，避免误关导致用户输入丢失。
              </p>
            </DrawerPanel>
            <DrawerFooter>
              <DrawerClose render={<Button />}>我已确认</DrawerClose>
            </DrawerFooter>
          </DrawerPopup>
        </Drawer>
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">API</h2>
        <h3 className="mb-3 text-lg font-medium">Drawer</h3>
        <PropsTable data={drawerPropsData} />
        <h3 className="mb-3 mt-6 text-lg font-medium">DrawerPopup</h3>
        <PropsTable data={popupPropsData} />
      </div>
    </div>
  );
}
