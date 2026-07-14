import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  EasyfixLogoIcon,
  EasyLocaleSwitch,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
  type EasyLocale,
} from "@easyfix/console-ui";
import {
  ChevronDown,
  Home,
  Monitor,
  Moon,
  RocketIcon,
  SettingsIcon,
  Sun,
} from "lucide-react";
import { Suspense, useEffect } from "react";
import { NavLink, useLocation, useRoutes } from "react-router-dom";
import { useAppConfig } from "./providers/AppConfigProvider";
import { navGroups, routes } from "./router";

function ThemeSwitcher() {
  const { theme, setTheme } = useAppConfig();
  const options: { value: "light" | "dark" | "system"; icon: typeof Sun; label: string }[] = [
    { value: "light", icon: Sun, label: "浅色" },
    { value: "dark", icon: Moon, label: "深色" },
    { value: "system", icon: Monitor, label: "跟随系统" },
  ];
  return (
    <div
      className="flex w-full rounded-full border border-border bg-muted/50 p-0.5"
      data-slot="theme-switch"
    >
      {options.map(({ value, icon: Icon, label }) => {
        const active = theme === value;
        return (
          <button
            aria-label={label}
            aria-pressed={active}
            className={`flex flex-1 items-center justify-center gap-1 rounded-full py-1 text-xs transition-colors ${
              active
                ? "bg-background text-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
            key={value}
            onClick={() => setTheme(value)}
            title={label}
            type="button"
          >
            <Icon className="size-3.5" />
          </button>
        );
      })}
    </div>
  );
}

function OverviewLink() {
  const location = useLocation();
  const isActive =
    location.pathname === "/" || location.pathname === "/组件预览";
  return (
    <SidebarMenuButton asChild isActive={isActive} tooltip="Overview">
      <NavLink to="/" end className="inline-flex items-center gap-2">
        <Home className="size-4" />
        <span>Overview</span>
      </NavLink>
    </SidebarMenuButton>
  );
}

function QuickStartLink() {
  const location = useLocation();
  const isActive = location.pathname === "/quick-start";
  return (
    <SidebarMenuButton asChild isActive={isActive} tooltip="快速入门">
      <NavLink to="/quick-start" end className="inline-flex items-center gap-2">
        <RocketIcon className="size-4" />
        <span>快速入门</span>
      </NavLink>
    </SidebarMenuButton>
  );
}

function ConfigProviderLink() {
  const location = useLocation();
  const isActive = location.pathname === "/config-provider";
  return (
    <SidebarMenuButton
      asChild
      isActive={isActive}
      tooltip="ConfigProvider 全局配置"
    >
      <NavLink to="/config-provider" end className="inline-flex items-center gap-2">
        <SettingsIcon className="size-4" />
        <span>ConfigProvider 全局配置</span>
      </NavLink>
    </SidebarMenuButton>
  );
}

function NavGroupTree({
  group,
}: {
  group: (typeof navGroups)[number];
}) {
  const location = useLocation();
  return (
    <Collapsible defaultOpen className="group/collapsible">
      <SidebarGroup>
        <CollapsibleTrigger
          className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <span>{group.title}</span>
          <ChevronDown className="size-3.5 shrink-0 transition-transform group-data-[panel-open]/collapsible:rotate-180" />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarGroupContent className="mt-1">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuSub>
                  {group.items.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <SidebarMenuSubItem key={item.path}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={isActive}
                          tooltip={item.label}
                        >
                          <NavLink to={item.path} end title={item.label}>
                            <span className="min-w-0 truncate">{item.label}</span>
                          </NavLink>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    );
                  })}
                </SidebarMenuSub>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>
  );
}

function DocsSidebar() {
  const { locale, setLocale } = useAppConfig();
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex h-12 items-center gap-2.5 px-2">
          <EasyfixLogoIcon size={28} />
          <span className="font-heading text-sm font-semibold">
            Console UI Docs
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <OverviewLink />
              </SidebarMenuItem>
              <SidebarMenuItem>
                <QuickStartLink />
              </SidebarMenuItem>
              <SidebarMenuItem>
                <ConfigProviderLink />
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {navGroups.map((group) => (
          <NavGroupTree key={group.title} group={group} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <div className="space-y-2 px-1 pb-1">
          <EasyLocaleSwitch
            value={locale}
            onChange={(v) => setLocale(v as EasyLocale)}
            variant="pill"
            className="w-full"
          />
          <ThemeSwitcher />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

export function App() {
  const location = useLocation();
  const element = useRoutes(routes);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <SidebarProvider defaultOpen>
      <DocsSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-12 items-center gap-2 border-b border-border bg-background/80 px-4 backdrop-blur">
          <SidebarTrigger />
          <span className="text-sm text-muted-foreground">Easyfix Console UI</span>
        </header>
        <main className="min-h-[calc(100vh-3rem)]">
          <div className="mx-auto max-w-4xl px-8 py-10">
            <Suspense
              fallback={
                <div className="flex h-64 items-center justify-center text-muted-foreground">
                  加载中...
                </div>
              }
            >
              {element}
            </Suspense>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
