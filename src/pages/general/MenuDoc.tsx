import {
  Button,
  Menu,
  MenuTrigger,
  MenuPopup,
  MenuItem,
  MenuGroup,
  MenuGroupLabel,
  MenuSeparator,
  MenuShortcut,
} from "@easyfix/console-ui";
import {
  Copy,
  FileText,
  Settings,
  Trash2,
  User,
} from "lucide-react";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

const triggerPropsData = [
  {
    name: "render",
    type: "ReactElement",
    description: "自定义触发器元素，如 <Button />，用 render prop 传入避免嵌套 button",
  },
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
];

const popupPropsData = [
  {
    name: "align",
    type: '"start" | "center" | "end"',
    default: '"center"',
    description: "相对 trigger 的水平对齐方式",
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
    description: "与 trigger 之间的距离（像素）",
  },
  {
    name: "className",
    type: "string",
    description: "自定义弹出层样式类名",
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
    description: "保留图标位置缩进，使无图标项与有图标项对齐",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "是否禁用该菜单项",
  },
];

function BasicDemo() {
  return (
    <Menu>
      <MenuTrigger render={<Button variant="outline" />}>
        打开菜单
      </MenuTrigger>
      <MenuPopup align="start" className="w-48">
        <MenuItem>
          新建文件
          <MenuShortcut>⌘N</MenuShortcut>
        </MenuItem>
        <MenuItem>
          打开文件
          <MenuShortcut>⌘O</MenuShortcut>
        </MenuItem>
        <MenuSeparator />
        <MenuItem>
          保存
          <MenuShortcut>⌘S</MenuShortcut>
        </MenuItem>
        <MenuSeparator />
        <MenuItem variant="destructive">
          删除
          <MenuShortcut>⌘⌫</MenuShortcut>
        </MenuItem>
      </MenuPopup>
    </Menu>
  );
}

function IconDemo() {
  return (
    <Menu>
      <MenuTrigger render={<Button variant="outline" />}>
        操作
      </MenuTrigger>
      <MenuPopup align="start" className="w-52">
        <MenuGroup>
          <MenuGroupLabel>文档</MenuGroupLabel>
          <MenuItem>
            <FileText /> 查看文档
          </MenuItem>
          <MenuItem>
            <Copy /> 复制链接
          </MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup>
          <MenuGroupLabel>账户</MenuGroupLabel>
          <MenuItem>
            <User /> 个人资料
          </MenuItem>
          <MenuItem>
            <Settings /> 设置
          </MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuItem variant="destructive">
          <Trash2 /> 删除账户
        </MenuItem>
      </MenuPopup>
    </Menu>
  );
}

export default function MenuDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">Menu 菜单</h1>
        <p className="mt-2 text-muted-foreground">
          基于{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            @base-ui/react/menu
          </code>{" "}
          的菜单组件，支持图标、快捷键提示、分组、子菜单等功能。
        </p>
      </div>

      <ComponentDemo
        title="基础菜单"
        description="使用 Menu + MenuTrigger + MenuPopup + MenuItem 组合基本菜单"
        code={`import {
  Menu, MenuTrigger, MenuPopup, MenuItem,
  MenuSeparator, MenuShortcut, Button,
} from "@easyfix/console-ui";

<Menu>
  <MenuTrigger render={<Button variant="outline" />}>
    打开菜单
  </MenuTrigger>
  <MenuPopup align="start" className="w-48">
    <MenuItem>
      新建文件
      <MenuShortcut>⌘N</MenuShortcut>
    </MenuItem>
    <MenuItem>
      打开文件
      <MenuShortcut>⌘O</MenuShortcut>
    </MenuItem>
    <MenuSeparator />
    <MenuItem variant="destructive">
      删除
      <MenuShortcut>⌘⌫</MenuShortcut>
    </MenuItem>
  </MenuPopup>
</Menu>`}
      >
        <BasicDemo />
      </ComponentDemo>

      <ComponentDemo
        title="带图标的菜单项"
        description="在 MenuItem 中直接放入 SVG 图标，配合 MenuGroup 进行语义分组"
        code={`import {
  Menu, MenuTrigger, MenuPopup, MenuItem,
  MenuGroup, MenuGroupLabel, MenuSeparator, Button,
} from "@easyfix/console-ui";
import { FileText, Copy, User, Settings, Trash2 } from "lucide-react";

<Menu>
  <MenuTrigger render={<Button variant="outline" />}>
    操作
  </MenuTrigger>
  <MenuPopup align="start" className="w-52">
    <MenuGroup>
      <MenuGroupLabel>文档</MenuGroupLabel>
      <MenuItem><FileText /> 查看文档</MenuItem>
      <MenuItem><Copy /> 复制链接</MenuItem>
    </MenuGroup>
    <MenuSeparator />
    <MenuGroup>
      <MenuGroupLabel>账户</MenuGroupLabel>
      <MenuItem><User /> 个人资料</MenuItem>
      <MenuItem><Settings /> 设置</MenuItem>
    </MenuGroup>
    <MenuSeparator />
    <MenuItem variant="destructive">
      <Trash2 /> 删除账户
    </MenuItem>
  </MenuPopup>
</Menu>`}
      >
        <IconDemo />
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">API</h2>

        <h3 className="mb-3 text-lg font-medium">MenuTrigger</h3>
        <PropsTable data={triggerPropsData} />

        <h3 className="mb-3 mt-6 text-lg font-medium">MenuPopup</h3>
        <PropsTable data={popupPropsData} />

        <h3 className="mb-3 mt-6 text-lg font-medium">MenuItem</h3>
        <PropsTable data={itemPropsData} />
      </div>
    </div>
  );
}
