import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@easyfix/console-ui";
import { HomeIcon, LayoutDashboardIcon, SettingsIcon, UsersIcon } from "lucide-react";

import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";
import { ComponentDocPage } from "@/components/ComponentDocPage";

const menuItems = [
  { icon: HomeIcon, label: "首页", active: true },
  { icon: LayoutDashboardIcon, label: "仪表盘" },
  { icon: UsersIcon, label: "用户管理" },
  { icon: SettingsIcon, label: "系统设置" },
];

const propsData = [
  {
    name: "defaultOpen",
    type: "boolean",
    default: "true",
    description: "侧边栏默认是否展开",
  },
  {
    name: "open",
    type: "boolean",
    description: "受控模式下侧边栏是否展开",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    description: "侧边栏展开/收起状态变化回调",
  },
];

const componentList = [
  {
    name: "SidebarProvider",
    description: "侧边栏上下文提供者，管理展开/收起状态",
  },
  { name: "Sidebar", description: "侧边栏根容器" },
  { name: "SidebarHeader", description: "侧边栏头部区域" },
  { name: "SidebarContent", description: "侧边栏可滚动内容区域" },
  { name: "SidebarGroup", description: "侧边栏菜单分组" },
  { name: "SidebarGroupLabel", description: "分组标题" },
  { name: "SidebarGroupContent", description: "分组内容区域" },
  { name: "SidebarMenu", description: "菜单列表容器" },
  { name: "SidebarMenuItem", description: "菜单项容器" },
  { name: "SidebarMenuButton", description: "菜单项按钮（含高亮、hover 样式）" },
  { name: "SidebarInset", description: "主内容区域，与侧边栏并列" },
  { name: "SidebarTrigger", description: "切换侧边栏展开/收起的按钮" },
];

export default function LayoutDoc() {
  return (
    <ComponentDocPage>
    <div className="space-y-10">
      <div>
        <h1 className="font-heading text-3xl font-bold">Layout 布局</h1>
        <p className="mt-2 text-muted-foreground">
          基于 Sidebar 的应用布局，提供侧边栏与主内容区。
        </p>
      </div>

      <ComponentDemo
        title="基础侧边栏布局"
        description="使用 SidebarProvider + Sidebar + SidebarInset 构建完整的侧边栏布局。"
        code={`import {
  SidebarProvider, Sidebar, SidebarHeader, SidebarContent,
  SidebarGroup, SidebarGroupLabel, SidebarGroupContent,
  SidebarMenu, SidebarMenuItem, SidebarMenuButton,
  SidebarInset, SidebarTrigger,
} from "@easyfix/console-ui";
import { HomeIcon, LayoutDashboardIcon, UsersIcon, SettingsIcon } from "lucide-react";

<SidebarProvider>
  <Sidebar>
    <SidebarHeader>
      <span className="block max-w-full truncate px-2 text-lg font-bold">Easyfix</span>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>导航菜单</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton isActive>
                <HomeIcon /> 首页
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <LayoutDashboardIcon /> 仪表盘
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
  <SidebarInset>
    <header className="flex items-center gap-2 border-b px-4 py-2">
      <SidebarTrigger />
      <h1>页面标题</h1>
    </header>
    <main className="p-4">主内容区域</main>
  </SidebarInset>
</SidebarProvider>`}
      >
        {/*
          Sidebar 默认使用 fixed + 100svh，会覆盖整个视口。
          演示中通过：
          1) 外层 transform 创建新的 containing block，将 Sidebar 内部的 fixed
             元素约束在演示容器内（CSS 规范：祖先有 transform 时，fixed 子孙
             以该祖先为 containing block）
          2) SidebarProvider 显式 !min-h-full 覆盖默认的 min-h-svh
          3) Sidebar 通过 className="!h-full" 覆盖 sidebar-container 的 h-svh，
             使其匹配 320px 容器高度
          4) 仍使用 collapsible="icon" 才能响应 SidebarTrigger 折叠
        */}
        <div
          className="relative w-full overflow-hidden rounded-lg border"
          style={{ height: 320, transform: "translateZ(0)" }}
        >
          <SidebarProvider defaultOpen className="!min-h-full">
            <Sidebar collapsible="icon" className="!h-full">
              <SidebarHeader>
                <span className="block max-w-full truncate px-2 text-lg font-bold">Easyfix</span>
              </SidebarHeader>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>导航菜单</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {menuItems.map((item) => (
                        <SidebarMenuItem key={item.label}>
                          <SidebarMenuButton isActive={item.active}>
                            <item.icon />
                            <span>{item.label}</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
            <SidebarInset>
              <header className="flex items-center gap-2 border-b px-4 py-2">
                <SidebarTrigger />
                <h2 className="text-sm font-medium">页面标题</h2>
              </header>
              <main className="p-4 text-sm text-muted-foreground">
                主内容区域
              </main>
            </SidebarInset>
          </SidebarProvider>
        </div>
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">SidebarProvider API</h2>
        <PropsTable data={propsData} />
      </div>

      <div>
        <h2 className="mb-4 text-xl font-semibold">组件构成</h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-2.5 text-start font-medium">组件</th>
                <th className="px-4 py-2.5 text-start font-medium">说明</th>
              </tr>
            </thead>
            <tbody>
              {componentList.map((comp) => (
                <tr key={comp.name} className="border-b last:border-b-0">
                  <td className="px-4 py-2.5">
                    <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-primary">
                      {comp.name}
                    </code>
                  </td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    {comp.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </ComponentDocPage>
  );
}
