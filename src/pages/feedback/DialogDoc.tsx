import {
  Dialog,
  DialogTrigger,
  DialogPopup,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogPanel,
  DialogFooter,
  DialogClose,
  Button,
} from "@easyfix/console-ui";

import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";
import { ComponentDocPage } from "@/components/ComponentDocPage";

const dialogPropsData = [
  {
    name: "closeOnBackdropClick",
    type: "boolean",
    default: "true",
    description:
      "是否允许遮罩关闭；false 时需通过关闭控件关闭对话框。",
  },
  {
    name: "closeOnEscape",
    type: "boolean",
    default: "true",
    description:
      "ESC 键是否关闭。设为 false 时按下 ESC 键不会关闭，常用于强提交场景。",
  },
];

const popupPropsData = [
  {
    name: "width",
    type: '"sm" | "md" | "lg" | "xl" | "2xl" ~ "5xl" | "full" | string',
    default: '"lg"',
    description:
      '对话框宽度。可传预设值如 "2xl"、"full"，也可传任意 CSS 值如 "600px"、"80%"',
  },
  {
    name: "showCloseButton",
    type: "boolean",
    default: "true",
    description: "是否显示右上角关闭按钮",
  },
  {
    name: "bottomStickOnMobile",
    type: "boolean",
    default: "true",
    description: "移动端是否底部吸附展示",
  },
  {
    name: "className",
    type: "string",
    description: "自定义 CSS 类名",
  },
];

const footerPropsData = [
  {
    name: "variant",
    type: '"default" | "bare"',
    default: '"default"',
    description: "底部区域样式变体",
  },
];

export default function DialogDoc() {
  return (
    <ComponentDocPage>
    <div className="space-y-10">
      <div>
        <h1 className="font-heading text-3xl font-bold">Dialog 对话框</h1>
        <p className="mt-2 text-muted-foreground">
          模态对话框，用于在不离开当前页面的情况下展示重要信息或收集用户输入。
        </p>
      </div>

      <ComponentDemo
        title="基本结构"
        description="DialogTrigger 管理显示状态，DialogFooter 承载底部操作。"
        code={`import {
  Dialog, DialogTrigger, DialogPopup,
  DialogHeader, DialogTitle, DialogDescription,
  DialogFooter, DialogClose, Button,
} from "@easyfix/console-ui";

<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">打开对话框</Button>
  </DialogTrigger>
  <DialogPopup>
    <DialogHeader>
      <DialogTitle>基础对话框</DialogTitle>
      <DialogDescription>这是一个基础对话框示例。</DialogDescription>
    </DialogHeader>
    <DialogFooter variant="bare">
      <DialogClose render={<Button variant="outline" />}>关闭</DialogClose>
    </DialogFooter>
  </DialogPopup>
</Dialog>`}
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">打开对话框</Button>
          </DialogTrigger>
          <DialogPopup>
            <DialogHeader>
              <DialogTitle>基础对话框</DialogTitle>
              <DialogDescription>这是一个基础对话框示例。</DialogDescription>
            </DialogHeader>
            <DialogFooter variant="bare">
              <DialogClose render={<Button variant="outline" />}>
                关闭
              </DialogClose>
            </DialogFooter>
          </DialogPopup>
        </Dialog>
      </ComponentDemo>

      <ComponentDemo
        title="带表单内容"
        description="使用 DialogPanel 包裹表单内容，底部统一用 DialogFooter 排版按钮。"
        code={`import {
  Dialog, DialogTrigger, DialogPopup,
  DialogHeader, DialogTitle, DialogDescription,
  DialogPanel, DialogFooter, DialogClose, Button,
} from "@easyfix/console-ui";

<Dialog>
  <DialogTrigger asChild>
    <Button>编辑资料</Button>
  </DialogTrigger>
  <DialogPopup>
    <DialogHeader>
      <DialogTitle>编辑个人资料</DialogTitle>
      <DialogDescription>维护账户资料。</DialogDescription>
    </DialogHeader>
    <DialogPanel>
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium">用户名</label>
          <input className="mt-1 w-full rounded-md border px-3 py-2" placeholder="用户名" />
        </div>
        <div>
          <label className="text-sm font-medium">邮箱</label>
          <input className="mt-1 w-full rounded-md border px-3 py-2" placeholder="邮箱" />
        </div>
      </div>
    </DialogPanel>
    <DialogFooter>
      <DialogClose render={<Button variant="outline" />}>取消</DialogClose>
      <Button>保存</Button>
    </DialogFooter>
  </DialogPopup>
</Dialog>`}
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button>编辑资料</Button>
          </DialogTrigger>
          <DialogPopup>
            <DialogHeader>
              <DialogTitle>编辑个人资料</DialogTitle>
              <DialogDescription>维护账户资料。</DialogDescription>
            </DialogHeader>
            <DialogPanel>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">用户名</label>
                  <input
                    className="mt-1 w-full rounded-md border px-3 py-2"
                    placeholder="用户名"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">邮箱</label>
                  <input
                    className="mt-1 w-full rounded-md border px-3 py-2"
                    placeholder="邮箱"
                  />
                </div>
              </div>
            </DialogPanel>
            <DialogFooter>
              <DialogClose render={<Button variant="outline" />}>
                取消
              </DialogClose>
              <Button>保存</Button>
            </DialogFooter>
          </DialogPopup>
        </Dialog>
      </ComponentDemo>

      <ComponentDemo
        title="带底部操作栏"
        description="使用 DialogFooter 添加确认和取消操作。"
        code={`import {
  Dialog, DialogTrigger, DialogPopup,
  DialogHeader, DialogTitle, DialogDescription,
  DialogPanel, DialogFooter, DialogClose, Button,
} from "@easyfix/console-ui";

<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">删除项目</Button>
  </DialogTrigger>
  <DialogPopup>
    <DialogHeader>
      <DialogTitle>确认删除</DialogTitle>
      <DialogDescription>
        此操作不可撤销，删除后数据将无法恢复。
      </DialogDescription>
    </DialogHeader>
    <DialogPanel>
      <p className="text-sm text-muted-foreground">
        项目 "my-project" 及其关联数据将被永久删除，且无法恢复。
      </p>
    </DialogPanel>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">取消</Button>
      </DialogClose>
      <Button variant="destructive">确认删除</Button>
    </DialogFooter>
  </DialogPopup>
</Dialog>`}
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">删除项目</Button>
          </DialogTrigger>
          <DialogPopup>
            <DialogHeader>
              <DialogTitle>确认删除</DialogTitle>
              <DialogDescription>
                此操作不可撤销，删除后数据将无法恢复。
              </DialogDescription>
            </DialogHeader>
            <DialogPanel>
              <p className="text-sm text-muted-foreground">
                项目 &quot;my-project&quot; 及其关联数据将被永久删除，且无法恢复。
              </p>
            </DialogPanel>
            <DialogFooter>
              <DialogClose render={<Button variant="outline" />}>
                取消
              </DialogClose>
              <Button variant="destructive">确认删除</Button>
            </DialogFooter>
          </DialogPopup>
        </Dialog>
      </ComponentDemo>

      <ComponentDemo
        title="自定义宽度"
        description="width 支持预设尺寸与自定义 CSS 值。"
        code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">宽对话框 (3xl)</Button>
  </DialogTrigger>
  <DialogPopup width="3xl">
    <DialogHeader>
      <DialogTitle>宽对话框</DialogTitle>
      <DialogDescription>使用 width="3xl" 设置更宽的对话框。</DialogDescription>
    </DialogHeader>
    <DialogPanel>
      <p className="text-sm text-muted-foreground">
        适用于需要展示更多内容的场景，如表格、表单等。
      </p>
    </DialogPanel>
    <DialogFooter variant="bare">
      <DialogClose render={<Button variant="outline" />}>关闭</DialogClose>
    </DialogFooter>
  </DialogPopup>
</Dialog>

{/* 自定义像素宽度 */}
<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">自定义宽度 (680px)</Button>
  </DialogTrigger>
  <DialogPopup width="680px">
    <DialogHeader>
      <DialogTitle>自定义宽度</DialogTitle>
      <DialogDescription>使用 width="680px" 设置精确宽度。</DialogDescription>
    </DialogHeader>
    <DialogFooter variant="bare">
      <DialogClose render={<Button variant="outline" />}>关闭</DialogClose>
    </DialogFooter>
  </DialogPopup>
</Dialog>`}
      >
        <div className="flex gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">宽对话框 (3xl)</Button>
            </DialogTrigger>
            <DialogPopup width="3xl">
              <DialogHeader>
                <DialogTitle>宽对话框</DialogTitle>
                <DialogDescription>
                  使用 width=&quot;3xl&quot; 设置更宽的对话框。
                </DialogDescription>
              </DialogHeader>
              <DialogPanel>
                <p className="text-sm text-muted-foreground">
                  适用于需要展示更多内容的场景，如表格、表单等。
                </p>
              </DialogPanel>
              <DialogFooter variant="bare">
                <DialogClose render={<Button variant="outline" />}>
                  关闭
                </DialogClose>
              </DialogFooter>
            </DialogPopup>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">自定义宽度 (680px)</Button>
            </DialogTrigger>
            <DialogPopup width="680px">
              <DialogHeader>
                <DialogTitle>自定义宽度</DialogTitle>
                <DialogDescription>
                  使用 width=&quot;680px&quot; 设置精确宽度。
                </DialogDescription>
              </DialogHeader>
              <DialogFooter variant="bare">
                <DialogClose render={<Button variant="outline" />}>
                  关闭
                </DialogClose>
              </DialogFooter>
            </DialogPopup>
          </Dialog>
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="禁止遮罩 / ESC 关闭"
        description="closeOnBackdropClick 与 closeOnEscape 分别控制遮罩和 Escape 关闭。"
        code={`<Dialog closeOnBackdropClick={false} closeOnEscape={false}>
  <DialogTrigger asChild>
    <Button variant="outline">关闭对话框</Button>
  </DialogTrigger>
  <DialogPopup>
    <DialogHeader>
      <DialogTitle>不可被外部关闭</DialogTitle>
      <DialogDescription>
        遮罩和 Escape 均不会关闭对话框。
      </DialogDescription>
    </DialogHeader>
    <DialogPanel>
      <p className="text-sm text-muted-foreground">
        适用于流程性、强提交场景，避免误关导致用户输入丢失。
      </p>
    </DialogPanel>
    <DialogFooter>
      <DialogClose render={<Button />}>我已确认</DialogClose>
    </DialogFooter>
  </DialogPopup>
</Dialog>`}
      >
        <Dialog closeOnBackdropClick={false} closeOnEscape={false}>
          <DialogTrigger asChild>
            <Button variant="outline">关闭对话框</Button>
          </DialogTrigger>
          <DialogPopup>
            <DialogHeader>
              <DialogTitle>不可被外部关闭</DialogTitle>
              <DialogDescription>
                遮罩和 Escape 均不会关闭对话框。
              </DialogDescription>
            </DialogHeader>
            <DialogPanel>
              <p className="text-sm text-muted-foreground">
                适用于流程性、强提交场景，避免误关导致用户输入丢失。
              </p>
            </DialogPanel>
            <DialogFooter>
              <DialogClose render={<Button />}>我已确认</DialogClose>
            </DialogFooter>
          </DialogPopup>
        </Dialog>
      </ComponentDemo>

      <ComponentDemo
        title="内容超出滚动"
        description="DialogPanel 内置 ScrollArea；当内容超出 popup 最大高度时，正文区域出现滚动条，header / footer 始终保持可见。"
        code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">查看长内容</Button>
  </DialogTrigger>
  <DialogPopup>
    <DialogHeader>
      <DialogTitle>用户协议</DialogTitle>
      <DialogDescription>完整条款见下方滚动区域。</DialogDescription>
    </DialogHeader>
    <DialogPanel>
      {Array.from({ length: 30 }).map((_, i) => (
        <p key={i} className="mb-3 text-sm leading-6 text-muted-foreground">
          第 {i + 1} 段：……
        </p>
      ))}
    </DialogPanel>
    <DialogFooter>
      <DialogClose render={<Button variant="outline" />}>取消</DialogClose>
      <Button>同意</Button>
    </DialogFooter>
  </DialogPopup>
</Dialog>`}
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">查看长内容</Button>
          </DialogTrigger>
          <DialogPopup>
            <DialogHeader>
              <DialogTitle>用户协议</DialogTitle>
              <DialogDescription>完整条款见下方滚动区域。</DialogDescription>
            </DialogHeader>
            <DialogPanel>
              {Array.from({ length: 30 }).map((_, i) => (
                <p
                  key={i}
                  className="mb-3 text-sm leading-6 text-muted-foreground"
                >
                  第 {i + 1} 段：这是一段用于演示 DialogPanel
                  在内容超出最大高度时自动出现滚动条的占位文本。
                  Header 与 Footer 区域始终位于顶部和底部不参与滚动。
                </p>
              ))}
            </DialogPanel>
            <DialogFooter>
              <DialogClose render={<Button variant="outline" />}>
                取消
              </DialogClose>
              <Button>同意</Button>
            </DialogFooter>
          </DialogPopup>
        </Dialog>
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">API</h2>
        <h3 className="mb-3 text-lg font-medium">Dialog</h3>
        <PropsTable data={dialogPropsData} />
        <h3 className="mb-3 mt-6 text-lg font-medium">DialogPopup</h3>
        <PropsTable data={popupPropsData} />
        <h3 className="mb-3 mt-6 text-lg font-medium">DialogFooter</h3>
        <PropsTable data={footerPropsData} />
      </div>
    </div>
    </ComponentDocPage>
  );
}
