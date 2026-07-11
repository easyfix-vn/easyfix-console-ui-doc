import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerPanel,
  DrawerFooter,
  DrawerClose,
  DrawerSwipeHandle,
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
  {
    name: "closeOnSwipe",
    type: "boolean",
    default: "true",
    description:
      "拖拽（滑动）是否关闭。设为 false 时拖拽不会关闭抽屉；当三个关闭开关同时为 false 时，组件自动显示右上角关闭按钮。",
  },
  {
    name: "showSwipeHandle",
    type: "boolean",
    default: "false",
    description: "是否显示可拖拽手柄。",
  },
];

const contentPropsData = [
  {
    name: "position",
    type: '"right" | "left" | "top" | "bottom"',
    description: "覆盖 Drawer 的 position 属性",
  },
  {
    name: "showCloseButton",
    type: "boolean",
    default: "false",
    description: "是否显示关闭按钮",
  },
  {
    name: "showSwipeHandle",
    type: "boolean",
    default: "false",
    description: "覆盖 Drawer 的手柄显示设置。",
  },
  {
    name: "variant",
    type: '"default" | "straight" | "inset"',
    default: '"default"',
    description: "抽屉外观变体；侧边抽屉默认与视口保持间距。",
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
  Drawer, DrawerTrigger, DrawerContent,
  DrawerHeader, DrawerTitle, DrawerDescription,
  DrawerPanel, DrawerFooter, DrawerClose, DrawerSwipeHandle, Button,
} from "@easyfix/console-ui";

<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">打开底部抽屉</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerSwipeHandle />
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
  </DrawerContent>
</Drawer>`}
      >
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">打开底部抽屉</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerSwipeHandle />
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
          </DrawerContent>
        </Drawer>
      </ComponentDemo>

      <ComponentDemo
        title="右侧抽屉"
        description="设置 position='right' 从右侧滑出，默认与视口边缘保留间距，适合展示详情或设置面板。"
        code={`import {
  Drawer, DrawerTrigger, DrawerContent,
  DrawerHeader, DrawerTitle, DrawerDescription,
  DrawerPanel, DrawerFooter, DrawerClose, Button,
} from "@easyfix/console-ui";

<Drawer position="right">
  <DrawerTrigger asChild>
    <Button variant="outline">打开右侧抽屉</Button>
  </DrawerTrigger>
  <DrawerContent>
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
  </DrawerContent>
</Drawer>`}
      >
        <Drawer position="right">
          <DrawerTrigger asChild>
            <Button variant="outline">打开右侧抽屉</Button>
          </DrawerTrigger>
          <DrawerContent>
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
          </DrawerContent>
        </Drawer>
      </ComponentDemo>

      <ComponentDemo
        title="左侧抽屉与自定义宽度"
        description="侧边抽屉默认带有视口间距，也可以通过 className 调整宽度。"
        code={`<Drawer position="left">
  <DrawerTrigger render={<Button variant="outline" />}>
    打开左侧抽屉
  </DrawerTrigger>
  <DrawerContent className="w-80 sm:w-96">
    <DrawerSwipeHandle />
    <DrawerHeader>
      <DrawerTitle>导航面板</DrawerTitle>
      <DrawerDescription>左侧抽屉与右侧抽屉使用相同的间距规则。</DrawerDescription>
    </DrawerHeader>
    <DrawerPanel>
      <nav className="space-y-1 text-sm">
        <div className="rounded-md bg-accent px-3 py-2">概览</div>
        <div className="rounded-md px-3 py-2 text-muted-foreground">设置</div>
      </nav>
    </DrawerPanel>
  </DrawerContent>
</Drawer>`}
      >
        <Drawer position="left">
          <DrawerTrigger asChild>
            <Button variant="outline">打开左侧抽屉</Button>
          </DrawerTrigger>
          <DrawerContent className="w-80 sm:w-96">
            <DrawerSwipeHandle />
            <DrawerHeader>
              <DrawerTitle>导航面板</DrawerTitle>
              <DrawerDescription>
                左侧抽屉与右侧抽屉使用相同的间距规则。
              </DrawerDescription>
            </DrawerHeader>
            <DrawerPanel>
              <nav className="space-y-1 text-sm">
                <div className="rounded-md bg-accent px-3 py-2">概览</div>
                <div className="rounded-md px-3 py-2 text-muted-foreground">
                  设置
                </div>
              </nav>
            </DrawerPanel>
          </DrawerContent>
        </Drawer>
      </ComponentDemo>

      <ComponentDemo
        title="Nested 嵌套抽屉"
        description="在父抽屉内容中继续组合 Drawer，父抽屉保持挂载，子抽屉叠加在前面。"
        code={`<Drawer position="right">
  <DrawerTrigger render={<Button variant="outline" />}>
    打开父抽屉
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>父抽屉</DrawerTitle>
      <DrawerDescription>从这里继续打开一个子抽屉。</DrawerDescription>
    </DrawerHeader>
    <DrawerPanel>
      <Drawer position="right">
        <DrawerTrigger render={<Button variant="outline" />}>
          打开子抽屉
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>子抽屉</DrawerTitle>
            <DrawerDescription>子抽屉会叠加在父抽屉上方。</DrawerDescription>
          </DrawerHeader>
          <DrawerPanel>
            <p className="text-sm text-muted-foreground">
              关闭子抽屉后，父抽屉仍然保持打开。
            </p>
          </DrawerPanel>
        </DrawerContent>
      </Drawer>
    </DrawerPanel>
  </DrawerContent>
</Drawer>`}
      >
        <Drawer position="right">
          <DrawerTrigger asChild>
            <Button variant="outline">打开父抽屉</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>父抽屉</DrawerTitle>
              <DrawerDescription>
                从这里继续打开一个子抽屉。
              </DrawerDescription>
            </DrawerHeader>
            <DrawerPanel>
              <Drawer position="right">
                <DrawerTrigger asChild>
                  <Button variant="outline">打开子抽屉</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>子抽屉</DrawerTitle>
                    <DrawerDescription>
                      子抽屉会叠加在父抽屉上方。
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerPanel>
                    <p className="text-sm text-muted-foreground">
                      关闭子抽屉后，父抽屉仍然保持打开。
                    </p>
                  </DrawerPanel>
                </DrawerContent>
              </Drawer>
            </DrawerPanel>
          </DrawerContent>
        </Drawer>
      </ComponentDemo>

      <ComponentDemo
        title="全部关闭方式禁用时的安全关闭"
        description="当 closeOnBackdropClick、closeOnEscape、closeOnSwipe 都为 false 时，组件自动展示右上角关闭按钮。"
        code={`<Drawer
  position="right"
  closeOnBackdropClick={false}
  closeOnEscape={false}
  closeOnSwipe={false}
>
  <DrawerTrigger asChild>
    <Button variant="outline">必须点击关闭</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>不可被外部关闭</DrawerTitle>
      <DrawerDescription>
        点击遮罩、按 ESC 键或拖拽都不会关闭，必须使用右上角关闭按钮。
      </DrawerDescription>
    </DrawerHeader>
  </DrawerContent>
</Drawer>`}
      >
        <Drawer
          position="right"
          closeOnBackdropClick={false}
          closeOnEscape={false}
          closeOnSwipe={false}
        >
          <DrawerTrigger asChild>
            <Button variant="outline">必须点击关闭</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>不可被外部关闭</DrawerTitle>
              <DrawerDescription>
                点击遮罩、按 ESC 键或拖拽都不会关闭，必须使用右上角关闭按钮。
              </DrawerDescription>
            </DrawerHeader>
            <DrawerPanel>
              <p className="text-sm text-muted-foreground">
                适用于流程性、强提交场景，避免误关导致用户输入丢失。
              </p>
            </DrawerPanel>
          </DrawerContent>
        </Drawer>
      </ComponentDemo>

      <ComponentDemo
        title="禁止拖拽关闭"
        description="closeOnSwipe=false 禁止拖拽（滑动）关闭抽屉，松手后抽屉自动弹回原位。适用于内容可滑动或拖拽误触场景。"
        code={`<Drawer closeOnSwipe={false}>
  <DrawerTrigger asChild>
    <Button variant="outline">拖拽不会关闭</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerSwipeHandle />
    <DrawerHeader>
      <DrawerTitle>禁止拖拽关闭</DrawerTitle>
      <DrawerDescription>
        尝试拖拽抽屉，松手后会自动弹回。
      </DrawerDescription>
    </DrawerHeader>
    <DrawerPanel>
      <p className="text-sm text-muted-foreground">
        拖拽不会关闭此抽屉，只能使用按钮关闭。
      </p>
    </DrawerPanel>
    <DrawerFooter>
      <DrawerClose asChild>
        <Button variant="outline">关闭</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`}
      >
        <Drawer closeOnSwipe={false}>
          <DrawerTrigger asChild>
            <Button variant="outline">拖拽不会关闭</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerSwipeHandle />
            <DrawerHeader>
              <DrawerTitle>禁止拖拽关闭</DrawerTitle>
              <DrawerDescription>
                尝试拖拽抽屉，松手后会自动弹回。
              </DrawerDescription>
            </DrawerHeader>
            <DrawerPanel>
              <p className="text-sm text-muted-foreground">
                拖拽不会关闭此抽屉，只能使用按钮关闭。
              </p>
            </DrawerPanel>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">关闭</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">API</h2>
        <h3 className="mb-3 text-lg font-medium">Drawer</h3>
        <PropsTable data={drawerPropsData} />
        <h3 className="mb-3 mt-6 text-lg font-medium">DrawerContent</h3>
        <PropsTable data={contentPropsData} />
      </div>
    </div>
  );
}
