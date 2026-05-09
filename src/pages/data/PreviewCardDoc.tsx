import {
  PreviewCard,
  PreviewCardPopup,
  PreviewCardTrigger,
} from "@easyfix/console-ui";

import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

const previewCardPropsData = [
  {
    name: "delay",
    type: "number",
    default: "600",
    description: "鼠标悬停多少毫秒后展示卡片",
  },
];

const previewCardPopupPropsData = [
  {
    name: "align",
    type: '"start" | "center" | "end"',
    default: '"center"',
    description: "弹出层相对触发器的对齐方式",
  },
  {
    name: "sideOffset",
    type: "number",
    default: "4",
    description: "弹出层与触发器的间距（像素）",
  },
  {
    name: "className",
    type: "string",
    description: "自定义弹出层样式类名",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "弹出层内容",
  },
];

export default function PreviewCardDoc() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="font-heading text-3xl font-bold">
          PreviewCard 预览卡片
        </h1>
        <p className="mt-2 text-muted-foreground">
          鼠标悬停时显示的预览卡片，适用于链接预览、用户信息展示等场景。当用户将鼠标悬停在触发元素上时，弹出一个包含预览内容的浮层。
        </p>
      </div>

      <ComponentDemo
        title="基础预览卡片"
        description="鼠标悬停在链接上时展示预览信息。"
        code={`import {
  PreviewCard,
  PreviewCardTrigger,
  PreviewCardPopup,
} from "@easyfix/console-ui";

<PreviewCard>
  <PreviewCardTrigger
    render={<a href="https://github.com" target="_blank" rel="noreferrer" />}
  >
    GitHub
  </PreviewCardTrigger>
  <PreviewCardPopup>
    <div className="space-y-2">
      <p className="font-medium">GitHub</p>
      <p className="text-sm text-muted-foreground">
        全球最大的代码托管平台，为开发者提供代码协作和版本管理服务。
      </p>
    </div>
  </PreviewCardPopup>
</PreviewCard>`}
      >
        <PreviewCard>
          <PreviewCardTrigger
            render={
              <a
                className="font-medium text-primary underline underline-offset-4"
                href="https://github.com"
                rel="noreferrer"
                target="_blank"
              />
            }
          >
            GitHub
          </PreviewCardTrigger>
          <PreviewCardPopup>
            <div className="space-y-2">
              <p className="font-medium">GitHub</p>
              <p className="text-sm text-muted-foreground">
                全球最大的代码托管平台，为开发者提供代码协作和版本管理服务。
              </p>
            </div>
          </PreviewCardPopup>
        </PreviewCard>
      </ComponentDemo>

      <ComponentDemo
        title="带自定义内容的预览卡片"
        description="在预览卡片中展示头像、描述等丰富内容。"
        code={`import {
  PreviewCard,
  PreviewCardTrigger,
  PreviewCardPopup,
} from "@easyfix/console-ui";

<PreviewCard>
  <PreviewCardTrigger
    render={<a href="#" />}
  >
    @easyfix
  </PreviewCardTrigger>
  <PreviewCardPopup>
    <div className="flex gap-3">
      <div className="size-10 shrink-0 rounded-full bg-muted" />
      <div className="space-y-1">
        <p className="font-medium text-sm">Easyfix Team</p>
        <p className="text-xs text-muted-foreground">
          企业级 React 组件库，提供高质量的 UI 组件。
        </p>
        <p className="text-xs text-muted-foreground">加入于 2024 年</p>
      </div>
    </div>
  </PreviewCardPopup>
</PreviewCard>`}
      >
        <PreviewCard>
          <PreviewCardTrigger
            render={
              <a
                className="font-medium text-primary underline underline-offset-4"
                href="#"
              />
            }
          >
            @easyfix
          </PreviewCardTrigger>
          <PreviewCardPopup>
            <div className="flex gap-3">
              <div className="size-10 shrink-0 rounded-full bg-muted" />
              <div className="space-y-1">
                <p className="text-sm font-medium">Easyfix Team</p>
                <p className="text-xs text-muted-foreground">
                  企业级 React 组件库，提供高质量的 UI 组件。
                </p>
                <p className="text-xs text-muted-foreground">加入于 2024 年</p>
              </div>
            </div>
          </PreviewCardPopup>
        </PreviewCard>
      </ComponentDemo>

      <div>
        <h2 className="font-heading mb-4 text-xl font-semibold">
          PreviewCard API
        </h2>
        <PropsTable data={previewCardPropsData} />
      </div>

      <div>
        <h2 className="font-heading mb-4 text-xl font-semibold">
          PreviewCardPopup API
        </h2>
        <PropsTable data={previewCardPopupPropsData} />
      </div>
    </div>
  );
}
