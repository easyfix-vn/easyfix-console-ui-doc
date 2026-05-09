import { useState } from "react";
import {
  EasyTabContainer,
  EasyTabs,
  EasyTabsList,
  EasyTabsTrigger,
  EasyTabsContent,
} from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

const tabItems = [
  { value: "overview", label: "概览", content: <p className="py-4 text-sm text-muted-foreground">概览内容</p> },
  { value: "analytics", label: "数据分析", content: <p className="py-4 text-sm text-muted-foreground">数据分析内容</p> },
  { value: "settings", label: "设置", content: <p className="py-4 text-sm text-muted-foreground">设置内容</p> },
];

const tabContainerProps = [
  { name: "items", type: "EasyTabItem[]", description: "标签页配置数组，每项含 value、label、content" },
  { name: "variant", type: '"default" | "underline" | "navigation"', default: '"default"', description: "标签页风格" },
  { name: "defaultValue", type: "string", description: "默认选中的标签页 value" },
  { name: "value", type: "string", description: "受控模式下当前选中 value" },
  { name: "onValueChange", type: "(value: string) => void", description: "切换标签页时的回调" },
  { name: "listClassName", type: "string", description: "标签列表自定义类名" },
  { name: "contentClassName", type: "string", description: "内容区域自定义类名" },
];

const tabItemProps = [
  { name: "value", type: "string", description: "标签页唯一标识" },
  { name: "label", type: "ReactNode", description: "标签标题" },
  { name: "content", type: "ReactNode", description: "标签内容" },
  { name: "disabled", type: "boolean", default: "false", description: "是否禁用" },
];

export default function TabContainerDoc() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="font-heading text-3xl font-bold">
          TabContainer 标签页容器
        </h1>
        <p className="mt-2 text-muted-foreground">
          声明式标签页组件，传入 items 数组即可完成典型标签页布局。同时提供 EasyTabs、EasyTabsList 等原语用于灵活定制。
        </p>
      </div>

      <ComponentDemo
        title="基础用法"
        description="传入 items 数组快速创建标签页。"
        code={`import { EasyTabContainer } from "@easyfix/console-ui";

const items = [
  { value: "overview", label: "概览", content: <p>概览内容</p> },
  { value: "analytics", label: "数据分析", content: <p>数据分析内容</p> },
  { value: "settings", label: "设置", content: <p>设置内容</p> },
];

<EasyTabContainer items={items} defaultValue="overview" />`}
      >
        <div className="w-full">
          <EasyTabContainer items={tabItems} defaultValue="overview" />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="下划线风格"
        description='variant="underline" 使用下划线指示器。'
        code={`<EasyTabContainer items={items} variant="underline" defaultValue="overview" />`}
      >
        <div className="w-full">
          <EasyTabContainer items={tabItems} variant="underline" defaultValue="overview" />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="导航风格"
        description='variant="navigation" 为全宽底边框导航样式。'
        code={`<EasyTabContainer items={items} variant="navigation" defaultValue="overview" />`}
      >
        <div className="w-full">
          <EasyTabContainer items={tabItems} variant="navigation" defaultValue="overview" />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="禁用标签"
        description="设置 disabled 禁用特定标签页。"
        code={`const items = [
  { value: "a", label: "可用", content: <p>内容</p> },
  { value: "b", label: "禁用", content: <p>内容</p>, disabled: true },
  { value: "c", label: "可用", content: <p>内容</p> },
];

<EasyTabContainer items={items} defaultValue="a" />`}
      >
        <div className="w-full">
          <EasyTabContainer
            items={[
              { value: "a", label: "可用", content: <p className="py-4 text-sm text-muted-foreground">内容 A</p> },
              { value: "b", label: "禁用", content: <p className="py-4 text-sm text-muted-foreground">内容 B</p>, disabled: true },
              { value: "c", label: "可用", content: <p className="py-4 text-sm text-muted-foreground">内容 C</p> },
            ]}
            defaultValue="a"
          />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="组合式 API"
        description="使用 EasyTabs + EasyTabsList + EasyTabsTrigger + EasyTabsContent 实现更灵活的定制。"
        code={`import {
  EasyTabs, EasyTabsList, EasyTabsTrigger, EasyTabsContent,
} from "@easyfix/console-ui";

<EasyTabs defaultValue="tab1">
  <EasyTabsList variant="underline">
    <EasyTabsTrigger value="tab1">标签一</EasyTabsTrigger>
    <EasyTabsTrigger value="tab2">标签二</EasyTabsTrigger>
  </EasyTabsList>
  <EasyTabsContent value="tab1">内容一</EasyTabsContent>
  <EasyTabsContent value="tab2">内容二</EasyTabsContent>
</EasyTabs>`}
      >
        <div className="w-full">
          <EasyTabs defaultValue="tab1">
            <EasyTabsList variant="underline">
              <EasyTabsTrigger value="tab1">标签一</EasyTabsTrigger>
              <EasyTabsTrigger value="tab2">标签二</EasyTabsTrigger>
            </EasyTabsList>
            <EasyTabsContent value="tab1">
              <p className="py-4 text-sm text-muted-foreground">自定义内容一</p>
            </EasyTabsContent>
            <EasyTabsContent value="tab2">
              <p className="py-4 text-sm text-muted-foreground">自定义内容二</p>
            </EasyTabsContent>
          </EasyTabs>
        </div>
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">API</h2>
        <h3 className="mb-2 mt-6 text-lg font-medium">EasyTabContainer</h3>
        <PropsTable data={tabContainerProps} />
        <h3 className="mb-2 mt-6 text-lg font-medium">EasyTabItem</h3>
        <PropsTable data={tabItemProps} />
      </div>
    </div>
  );
}
