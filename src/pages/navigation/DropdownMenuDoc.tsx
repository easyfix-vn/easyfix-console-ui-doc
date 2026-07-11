import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@easyfix/console-ui";
import {
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import { useState } from "react";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

function BasicDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">打开菜单</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuLabel>我的账户</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User /> 个人资料
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings /> 设置
          <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOut /> 退出登录
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function GroupDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">分组与子菜单</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>团队</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Users /> 团队成员
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus /> 邀请成员
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="w-44">
              <DropdownMenuItem>
                <Mail /> 通过邮箱
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MessageSquare /> 通过消息
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Plus /> 更多方式…
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LifeBuoy /> 支持
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function CheckboxDemo() {
  const [statusBar, setStatusBar] = useState(true);
  const [activityBar, setActivityBar] = useState(false);
  const [panel, setPanel] = useState(true);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">视图</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>显示项</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={statusBar}
          onCheckedChange={(v) => setStatusBar(v === true)}
        >
          状态栏
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={activityBar}
          onCheckedChange={(v) => setActivityBar(v === true)}
        >
          活动栏
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={panel}
          onCheckedChange={(v) => setPanel(v === true)}
        >
          面板
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function RadioDemo() {
  const [position, setPosition] = useState("bottom");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">位置：{position}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>面板位置</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">顶部</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">右侧</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">底部</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="left">左侧</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const triggerPropsData = [
  {
    name: "asChild",
    type: "boolean",
    default: "false",
    description: "将自身渲染为 children 元素，避免多余 DOM 包裹（推荐配合 Button）",
  },
];

const contentPropsData = [
  {
    name: "align",
    type: '"start" | "center" | "end"',
    default: '"start"',
    description: "相对 trigger 的水平对齐",
  },
  {
    name: "side",
    type: '"top" | "right" | "bottom" | "left"',
    default: '"bottom"',
    description: "弹出方向",
  },
  {
    name: "sideOffset",
    type: "number",
    default: "4",
    description: "与 trigger 之间的距离",
  },
  {
    name: "className",
    type: "string",
    description:
      "默认宽度跟随 trigger（--radix-dropdown-menu-trigger-width），通常需要传 w-56 等覆盖",
  },
];

const itemPropsData = [
  {
    name: "variant",
    type: '"default" | "destructive"',
    default: '"default"',
    description: "destructive 用红色文本展示危险操作",
  },
  {
    name: "inset",
    type: "boolean",
    default: "false",
    description: "在没有图标的菜单中保留图标位置缩进，使文本对齐",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "禁用菜单项",
  },
];

export default function DropdownMenuDoc() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="font-heading text-3xl font-bold">
          DropdownMenu 下拉菜单
        </h1>
        <p className="mt-2 text-muted-foreground">
          点击触发后弹出的可选项列表，支持图标、快捷键、子菜单、单选、多选。设计参考{" "}
          <a
            className="text-primary hover:underline"
            href="https://www.radix-ui.com/themes/docs/components/dropdown-menu"
            target="_blank"
            rel="noreferrer"
          >
            Radix Themes DropdownMenu
          </a>
          。
        </p>
      </div>

      <ComponentDemo
        title="基础用法"
        description="DropdownMenuTrigger + DropdownMenuContent + DropdownMenuItem。可在 Item 中嵌入图标和快捷键提示。"
        code={`import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator,
  DropdownMenuShortcut, Button,
} from "@easyfix/console-ui";

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">打开菜单</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuLabel>我的账户</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <User /> 个人资料
      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem variant="destructive">
      <LogOut /> 退出登录
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
      >
        <BasicDemo />
      </ComponentDemo>

      <ComponentDemo
        title="分组与子菜单"
        description="DropdownMenuGroup 用于语义分组；DropdownMenuSub + SubTrigger + SubContent 嵌套子菜单。"
        code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">分组与子菜单</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuLabel>团队</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem><Users /> 团队成员</DropdownMenuItem>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger><UserPlus /> 邀请成员</DropdownMenuSubTrigger>
        <DropdownMenuSubContent className="w-44">
          <DropdownMenuItem><Mail /> 通过邮箱</DropdownMenuItem>
          <DropdownMenuItem><MessageSquare /> 通过消息</DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>`}
      >
        <GroupDemo />
      </ComponentDemo>

      <ComponentDemo
        title="多选 Checkbox"
        description="使用 DropdownMenuCheckboxItem 实现多选项，每个项独立 checked 状态"
        code={`const [statusBar, setStatusBar] = useState(true);

<DropdownMenuCheckboxItem
  checked={statusBar}
  onCheckedChange={(v) => setStatusBar(v === true)}
>
  状态栏
</DropdownMenuCheckboxItem>`}
      >
        <CheckboxDemo />
      </ComponentDemo>

      <ComponentDemo
        title="单选 Radio"
        description="使用 DropdownMenuRadioGroup + DropdownMenuRadioItem 实现单选"
        code={`const [position, setPosition] = useState("bottom");

<DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
  <DropdownMenuRadioItem value="top">顶部</DropdownMenuRadioItem>
  <DropdownMenuRadioItem value="right">右侧</DropdownMenuRadioItem>
  <DropdownMenuRadioItem value="bottom">底部</DropdownMenuRadioItem>
  <DropdownMenuRadioItem value="left">左侧</DropdownMenuRadioItem>
</DropdownMenuRadioGroup>`}
      >
        <RadioDemo />
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">API</h2>

        <h3 className="mb-3 text-lg font-medium">DropdownMenuTrigger</h3>
        <PropsTable data={triggerPropsData} />

        <h3 className="mb-3 mt-6 text-lg font-medium">DropdownMenuContent</h3>
        <PropsTable data={contentPropsData} />

        <h3 className="mb-3 mt-6 text-lg font-medium">DropdownMenuItem</h3>
        <PropsTable data={itemPropsData} />
      </div>
    </div>
  );
}
