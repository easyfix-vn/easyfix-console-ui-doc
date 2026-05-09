import { EasyPageContainer } from "@easyfix/console-ui";

import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

const propsData = [
  {
    name: "children",
    type: "ReactNode",
    description: "容器主体内容",
  },
  {
    name: "className",
    type: "string",
    description: "容器根元素的自定义类名",
  },
  {
    name: "header",
    type: "ReactNode",
    description: "容器顶部区域内容",
  },
  {
    name: "footer",
    type: "ReactNode",
    description: "容器底部区域内容",
  },
  {
    name: "contentClassName",
    type: "string",
    description: "主体内容区域的自定义类名",
  },
];

export default function ContainerDoc() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="font-heading text-3xl font-bold">Container 容器</h1>
        <p className="mt-2 text-muted-foreground">
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            EasyPageContainer
          </code>{" "}
          是页面级容器组件，提供统一的页面结构布局，包含可选的头部和底部区域。
          项目中还提供了{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">Card</code> 和{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">Frame</code>{" "}
          组件用于更细粒度的内容包裹。
        </p>
      </div>

      <ComponentDemo
        title="基础用法"
        description="最简单的容器用法，仅传入 children 内容。"
        code={`import { EasyPageContainer } from "@easyfix/console-ui";

<EasyPageContainer>
  <p>这是页面主体内容区域。</p>
</EasyPageContainer>`}
      >
        <div className="w-full max-w-lg">
          <EasyPageContainer>
            <p className="text-sm text-muted-foreground">
              这是页面主体内容区域。
            </p>
          </EasyPageContainer>
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="带头部"
        description="通过 header 属性添加页面标题栏。"
        code={`import { EasyPageContainer } from "@easyfix/console-ui";

<EasyPageContainer
  header={
    <div className="flex items-center justify-between">
      <h2 className="text-lg font-semibold">页面标题</h2>
      <button>操作</button>
    </div>
  }
>
  <p>页面内容区域</p>
</EasyPageContainer>`}
      >
        <div className="w-full max-w-lg">
          <EasyPageContainer
            header={
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">页面标题</h2>
                <span className="text-xs text-muted-foreground">操作区</span>
              </div>
            }
          >
            <p className="text-sm text-muted-foreground">页面内容区域</p>
          </EasyPageContainer>
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="带头部和底部"
        description="同时使用 header 和 footer 构建完整的页面结构。"
        code={`import { EasyPageContainer } from "@easyfix/console-ui";

<EasyPageContainer
  header={<h2 className="text-lg font-semibold">设置</h2>}
  footer={
    <div className="flex justify-end gap-2">
      <button>取消</button>
      <button>保存</button>
    </div>
  }
>
  <p>表单内容区域...</p>
</EasyPageContainer>`}
      >
        <div className="w-full max-w-lg">
          <EasyPageContainer
            header={<h2 className="text-lg font-semibold">设置</h2>}
            footer={
              <div className="flex justify-end gap-2 text-sm">
                <span className="text-muted-foreground">取消</span>
                <span className="text-primary">保存</span>
              </div>
            }
          >
            <p className="text-sm text-muted-foreground">表单内容区域...</p>
          </EasyPageContainer>
        </div>
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">API</h2>
        <PropsTable data={propsData} />
      </div>

      <div className="rounded-xl border p-5">
        <h2 className="mb-2 font-semibold">相关组件</h2>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">Card</code>{" "}
            — 卡片容器，适用于信息分组展示
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">Frame</code>{" "}
            — 通用框架组件，提供基础的边框和间距
          </li>
        </ul>
      </div>
    </div>
  );
}
