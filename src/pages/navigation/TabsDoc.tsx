import { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTab,
  EasyTabContainer,
  EasyTabs,
  EasyTabsList,
  EasyTabsTrigger,
  EasyTabsContent,
} from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";
import { ComponentDocPage } from "@/components/ComponentDocPage";

function BasicTabs() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTab value="account">账户</TabsTab>
        <TabsTab value="password">密码</TabsTab>
        <TabsTab value="settings">设置</TabsTab>
      </TabsList>
      <TabsContent value="account">账户信息面板内容</TabsContent>
      <TabsContent value="password">密码修改面板内容</TabsContent>
      <TabsContent value="settings">设置面板内容</TabsContent>
    </Tabs>
  );
}

function UnderlineTabs() {
  return (
    <Tabs defaultValue="overview">
      <TabsList variant="underline">
        <TabsTab value="overview">概览</TabsTab>
        <TabsTab value="analytics">分析</TabsTab>
        <TabsTab value="reports">报告</TabsTab>
        <TabsTab value="notifications" disabled>
          通知（禁用）
        </TabsTab>
      </TabsList>
      <TabsContent value="overview">概览面板内容</TabsContent>
      <TabsContent value="analytics">分析面板内容</TabsContent>
      <TabsContent value="reports">报告面板内容</TabsContent>
    </Tabs>
  );
}

function VerticalTabs() {
  return (
    <Tabs defaultValue="account" orientation="vertical">
      <TabsList>
        <TabsTab value="account">账户</TabsTab>
        <TabsTab value="billing">账单</TabsTab>
        <TabsTab value="team">团队</TabsTab>
      </TabsList>
      <TabsContent value="account">账户面板内容</TabsContent>
      <TabsContent value="billing">账单面板内容</TabsContent>
      <TabsContent value="team">团队面板内容</TabsContent>
    </Tabs>
  );
}

const tabItems = [
  { value: "overview", label: "概览", content: <p className="py-4 text-sm text-muted-foreground">概览内容</p> },
  { value: "analytics", label: "数据分析", content: <p className="py-4 text-sm text-muted-foreground">数据分析内容</p> },
  { value: "settings", label: "设置", content: <p className="py-4 text-sm text-muted-foreground">设置内容</p> },
];

const tabsProps = [
  { name: "defaultValue", type: "string", description: "默认激活的 Tab 值（非受控）" },
  { name: "value", type: "string", description: "当前激活的 Tab 值（受控）" },
  { name: "onValueChange", type: "(value: string) => void", description: "Tab 切换回调" },
  { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "布局方向" },
];

const listProps = [
  { name: "variant", type: '"default" | "underline"', default: '"default"', description: "选项卡列表样式：default（pill 背景）/ underline（下划线）" },
];

const tabProps = [
  { name: "value", type: "string", description: "Tab 的唯一标识" },
  { name: "disabled", type: "boolean", default: "false", description: "是否禁用该 Tab" },
];

const tabContainerProps = [
  { name: "items", type: "EasyTabItem[]", description: "标签页配置数组，每项含 value、label、content" },
  { name: "variant", type: '"default" | "underline" | "navigation"', default: '"default"', description: "标签页风格" },
  { name: "defaultValue", type: "string", description: "默认选中的标签页 value" },
  { name: "value", type: "string", description: "受控模式下当前选中 value" },
  { name: "onValueChange", type: "(value: string) => void", description: "切换标签页时的回调" },
];

const tabItemProps = [
  { name: "value", type: "string", description: "标签页唯一标识" },
  { name: "label", type: "ReactNode", description: "标签标题" },
  { name: "content", type: "ReactNode", description: "标签内容" },
  { name: "disabled", type: "boolean", default: "false", description: "是否禁用" },
];

export default function TabsDoc() {
  return (
    <ComponentDocPage>
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">Tabs 标签页</h1>
        <p className="mt-2 text-muted-foreground">
          在不同内容面板之间切换的标签页组件。提供两种使用方式：基础组合式 API
          （Tabs + TabsList + TabsTab + TabsContent）和声明式快捷 API
          （EasyTabContainer）。
        </p>
      </div>

      <h2 className="font-heading text-xl font-semibold">组合式 API</h2>

      <ComponentDemo
        title="默认样式"
        description="默认 pill 样式包含滑动指示器和内容边框。"
        code={`import { Tabs, TabsList, TabsTab, TabsContent } from "@easyfix/console-ui";

<Tabs defaultValue="account">
  <TabsList>
    <TabsTab value="account">账户</TabsTab>
    <TabsTab value="password">密码</TabsTab>
    <TabsTab value="settings">设置</TabsTab>
  </TabsList>
  <TabsContent value="account">账户信息面板内容</TabsContent>
  <TabsContent value="password">密码修改面板内容</TabsContent>
  <TabsContent value="settings">设置面板内容</TabsContent>
</Tabs>`}
      >
        <BasicTabs />
      </ComponentDemo>

      <ComponentDemo
        title="下划线样式"
        description="variant='underline'，使用下划线指示器，适合内容较多的页面"
        code={`<Tabs defaultValue="overview">
  <TabsList variant="underline">
    <TabsTab value="overview">概览</TabsTab>
    <TabsTab value="analytics">分析</TabsTab>
    <TabsTab value="notifications" disabled>通知（禁用）</TabsTab>
  </TabsList>
  <TabsContent value="overview">概览面板内容</TabsContent>
  <TabsContent value="analytics">分析面板内容</TabsContent>
  <TabsContent value="reports">报告面板内容</TabsContent>
</Tabs>`}
      >
        <UnderlineTabs />
      </ComponentDemo>

      <ComponentDemo
        title="垂直布局"
        description="orientation='vertical'，Tab 列表在左侧纵向排列"
        code={`<Tabs defaultValue="account" orientation="vertical">
  <TabsList>
    <TabsTab value="account">账户</TabsTab>
    <TabsTab value="billing">账单</TabsTab>
  </TabsList>
  <TabsContent value="account">账户面板</TabsContent>
</Tabs>`}
      >
        <VerticalTabs />
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">声明式 API（EasyTabContainer）</h2>
      <p className="text-sm text-muted-foreground">
        items 数组定义声明式标签页，无需手动组合子组件。
      </p>

      <ComponentDemo
        title="EasyTabContainer 基础"
        description="items 定义声明式标签页。"
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
        title="导航风格"
        description='variant="navigation" 为全宽底边框导航样式'
        code={`<EasyTabContainer items={items} variant="navigation" defaultValue="overview" />`}
      >
        <div className="w-full">
          <EasyTabContainer items={tabItems} variant="navigation" defaultValue="overview" />
        </div>
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">API</h2>

        <h3 className="mb-3 text-lg font-medium">Tabs（Root）</h3>
        <PropsTable data={tabsProps} />

        <h3 className="mb-3 mt-6 text-lg font-medium">TabsList</h3>
        <PropsTable data={listProps} />

        <h3 className="mb-3 mt-6 text-lg font-medium">TabsTab / TabsContent</h3>
        <PropsTable data={tabProps} />

        <h3 className="mb-3 mt-8 text-lg font-medium">EasyTabContainer</h3>
        <PropsTable data={tabContainerProps} />

        <h3 className="mb-3 mt-6 text-lg font-medium">EasyTabItem</h3>
        <PropsTable data={tabItemProps} />
      </div>
    </div>
    </ComponentDocPage>
  );
}
