import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "@easyfix/console-ui";
import {
  ChevronDownIcon,
  FileTextIcon,
  HomeIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";

import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

const sidebarProviderPropsData = [
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
    description: "展开/收起状态变化回调",
  },
];

const sidebarPropsData = [
  {
    name: "side",
    type: '"left" | "right"',
    default: '"left"',
    description: "侧边栏位于页面的哪一侧",
  },
  {
    name: "variant",
    type: '"sidebar" | "floating" | "inset"',
    default: '"sidebar"',
    description: "侧边栏外观变体",
  },
  {
    name: "collapsible",
    type: '"offcanvas" | "icon" | "none"',
    default: '"offcanvas"',
    description: "折叠模式：offcanvas 完全隐藏，icon 缩为图标栏，none 不可折叠",
  },
];

const componentList = [
  { name: "SidebarProvider", description: "提供侧边栏上下文，管理展开/收起状态" },
  { name: "Sidebar", description: "侧边栏根容器" },
  { name: "SidebarHeader", description: "侧边栏头部区域" },
  { name: "SidebarFooter", description: "侧边栏底部区域" },
  { name: "SidebarContent", description: "侧边栏可滚动的内容区域" },
  { name: "SidebarGroup", description: "菜单分组容器" },
  { name: "SidebarGroupLabel", description: "分组标题" },
  { name: "SidebarGroupContent", description: "分组内容区域" },
  { name: "SidebarMenu", description: "菜单列表" },
  { name: "SidebarMenuItem", description: "菜单项" },
  { name: "SidebarMenuButton", description: "菜单按钮，支持高亮和 tooltip" },
  { name: "SidebarMenuSub", description: "子菜单列表" },
  { name: "SidebarMenuSubItem", description: "子菜单项" },
  { name: "SidebarMenuSubButton", description: "子菜单按钮" },
  { name: "SidebarSeparator", description: "分隔线" },
  { name: "SidebarInset", description: "与侧边栏并列的主内容区域" },
  { name: "SidebarTrigger", description: "切换侧边栏展开/收起的按钮" },
  { name: "SidebarRail", description: "侧边栏边缘拖拽切换控件" },
];

export default function SidebarDoc() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="font-heading text-3xl font-bold">Sidebar 侧边栏</h1>
        <p className="mt-2 text-muted-foreground">
          可折叠的侧边栏导航组件，由多个子组件组合构成。支持多级菜单、图标模式折叠、移动端抽屉模式等特性，
          适用于后台管理系统的导航布局。
        </p>
      </div>

      <ComponentDemo
        title="基础侧边栏"
        description="使用 SidebarProvider + Sidebar + SidebarInset 构建完整的侧边栏布局，支持分组菜单和折叠切换。"
        code={`import {
  SidebarProvider, Sidebar, SidebarHeader, SidebarContent,
  SidebarFooter, SidebarGroup, SidebarGroupLabel,
  SidebarGroupContent, SidebarMenu, SidebarMenuItem,
  SidebarMenuButton, SidebarSeparator,
  SidebarInset, SidebarTrigger,
} from "@easyfix/console-ui";
import { HomeIcon, UsersIcon, SettingsIcon } from "lucide-react";

<SidebarProvider>
  <Sidebar collapsible="icon">
    <SidebarHeader className="overflow-hidden">
      <span className="truncate px-2 text-lg font-bold">Easyfix</span>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>主导航</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton isActive>
                <HomeIcon /> 首页
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <UsersIcon /> 用户
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <SettingsIcon /> 设置
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  </Sidebar>
  <SidebarInset>
    <header className="flex items-center gap-2 border-b px-4 py-2">
      <SidebarTrigger />
      <h1>页面标题</h1>
    </header>
    <main className="p-4">内容区域</main>
  </SidebarInset>
</SidebarProvider>`}
      >
        <div
          className="relative w-full overflow-hidden rounded-lg border"
          style={{ height: 380, transform: "translateZ(0)" }}
        >
          <SidebarProvider defaultOpen className="!min-h-full">
            <Sidebar collapsible="icon" className="!h-full">
              <SidebarHeader className="overflow-hidden">
                <span className="truncate px-2 text-lg font-bold">Easyfix</span>
              </SidebarHeader>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>主导航</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton isActive>
                          <HomeIcon />
                          <span>首页</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <LayoutDashboardIcon />
                          <span>仪表盘</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <UsersIcon />
                          <span>用户管理</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
                <SidebarSeparator />
                <SidebarGroup>
                  <SidebarGroupLabel>系统</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <SettingsIcon />
                          <span>系统设置</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
              <SidebarFooter>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <UserIcon />
                      <span>个人中心</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarFooter>
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

      <ComponentDemo
        title="含子菜单的侧边栏"
        description="使用 SidebarMenuSub 实现多级菜单结构。"
        code={`import {
  SidebarProvider, Sidebar, SidebarContent,
  SidebarGroup, SidebarGroupLabel, SidebarGroupContent,
  SidebarMenu, SidebarMenuItem, SidebarMenuButton,
  SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton,
  SidebarInset, SidebarTrigger,
} from "@easyfix/console-ui";
import { FileTextIcon, ChevronDownIcon } from "lucide-react";

<SidebarProvider>
  <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>文档</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <FileTextIcon /> 指南
              </SidebarMenuButton>
              <SidebarMenuSub>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton isActive>快速开始</SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton>安装配置</SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
  <SidebarInset>
    <header className="flex items-center gap-2 border-b px-4 py-2">
      <SidebarTrigger />
      <h1>文档内容</h1>
    </header>
  </SidebarInset>
</SidebarProvider>`}
      >
        <div
          className="relative w-full overflow-hidden rounded-lg border"
          style={{ height: 340, transform: "translateZ(0)" }}
        >
          <SidebarProvider defaultOpen className="!min-h-full">
            <Sidebar collapsible="none" className="!h-full">
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>文档</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <FileTextIcon />
                          <span>指南</span>
                        </SidebarMenuButton>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton isActive>
                              <span>快速开始</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton>
                              <span>安装配置</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton>
                              <span>主题定制</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <FileTextIcon />
                          <span>组件</span>
                        </SidebarMenuButton>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton>
                              <span>Button 按钮</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton>
                              <span>Input 输入框</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
            <SidebarInset>
              <header className="flex items-center gap-2 border-b px-4 py-2">
                <h2 className="text-sm font-medium">文档内容</h2>
              </header>
              <main className="p-4 text-sm text-muted-foreground">
                选择左侧菜单项查看内容
              </main>
            </SidebarInset>
          </SidebarProvider>
        </div>
      </ComponentDemo>

      <div>
        <h2 className="font-heading mb-4 text-xl font-semibold">
          SidebarProvider API
        </h2>
        <PropsTable data={sidebarProviderPropsData} />
      </div>

      <div>
        <h2 className="font-heading mb-4 text-xl font-semibold">
          Sidebar API
        </h2>
        <PropsTable data={sidebarPropsData} />
      </div>

      <div>
        <h2 className="font-heading mb-4 text-xl font-semibold">组件列表</h2>
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
                    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-primary">
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
  );
}
