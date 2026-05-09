import {
  Button,
  Group,
  GroupSeparator,
  GroupText,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@easyfix/console-ui";
import { CopyIcon, LinkIcon, MailIcon, SearchIcon } from "lucide-react";

import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

const groupPropsData = [
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: "排列方向，水平或垂直",
  },
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "子元素",
  },
];

const inputGroupPropsData = [
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "子元素，通常包含 InputGroupAddon 和 InputGroupInput",
  },
];

const inputGroupAddonPropsData = [
  {
    name: "align",
    type: '"inline-start" | "inline-end" | "block-start" | "block-end"',
    default: '"inline-start"',
    description: "附加内容的对齐位置",
  },
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
];

export default function GroupDoc() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="font-heading text-3xl font-bold">Group 组合</h1>
        <p className="mt-2 text-muted-foreground">
          将多个按钮或表单控件组合成一组，消除相邻元素间的圆角和边框，形成视觉上的整体。
          包含 Group（按钮组合）和 InputGroup（输入框组合）两套组件。
        </p>
      </div>

      <ComponentDemo
        title="基础按钮组合"
        description="使用 Group 将多个 Button 组合为一个整体，支持水平和垂直排列。"
        code={`import { Group, GroupSeparator, Button } from "@easyfix/console-ui";

<Group>
  <Button variant="outline">左</Button>
  <GroupSeparator />
  <Button variant="outline">中</Button>
  <GroupSeparator />
  <Button variant="outline">右</Button>
</Group>`}
      >
        <div className="flex flex-col items-center gap-6">
          <div className="space-y-1 text-center">
            <p className="text-sm text-muted-foreground">水平排列</p>
            <Group>
              <Button variant="outline">左</Button>
              <GroupSeparator />
              <Button variant="outline">中</Button>
              <GroupSeparator />
              <Button variant="outline">右</Button>
            </Group>
          </div>
          <div className="space-y-1 text-center">
            <p className="text-sm text-muted-foreground">垂直排列</p>
            <Group orientation="vertical">
              <Button variant="outline">上</Button>
              <GroupSeparator orientation="horizontal" />
              <Button variant="outline">中</Button>
              <GroupSeparator orientation="horizontal" />
              <Button variant="outline">下</Button>
            </Group>
          </div>
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="按钮 + 文本组合"
        description="使用 GroupText 在按钮组中嵌入只读文本块。"
        code={`import { Group, GroupSeparator, GroupText, Button } from "@easyfix/console-ui";

<Group>
  <GroupText>https://</GroupText>
  <GroupSeparator />
  <Button variant="outline">
    <CopyIcon /> 复制链接
  </Button>
</Group>`}
      >
        <Group>
          <GroupText>
            <LinkIcon />
            https://
          </GroupText>
          <GroupSeparator />
          <Button variant="outline">
            <CopyIcon /> 复制链接
          </Button>
        </Group>
      </ComponentDemo>

      <ComponentDemo
        title="InputGroup 输入框组合"
        description="使用 InputGroup 在输入框前后附加图标、文本或按钮。"
        code={`import {
  InputGroup, InputGroupAddon, InputGroupInput, InputGroupText,
  Button,
} from "@easyfix/console-ui";
import { SearchIcon, MailIcon } from "lucide-react";

{/* 前置图标 */}
<InputGroup>
  <InputGroupAddon>
    <InputGroupText><SearchIcon /></InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="搜索..." />
</InputGroup>

{/* 后置按钮 */}
<InputGroup>
  <InputGroupAddon>
    <InputGroupText><MailIcon /></InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="输入邮箱" />
  <InputGroupAddon align="inline-end">
    <Button size="sm" variant="ghost">发送</Button>
  </InputGroupAddon>
</InputGroup>`}
      >
        <div className="flex w-full max-w-sm flex-col gap-4">
          <InputGroup>
            <InputGroupAddon>
              <InputGroupText>
                <SearchIcon />
              </InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="搜索..." />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon>
              <InputGroupText>
                <MailIcon />
              </InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="输入邮箱" />
            <InputGroupAddon align="inline-end">
              <Button size="sm" variant="ghost">
                发送
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </ComponentDemo>

      <div>
        <h2 className="font-heading mb-4 text-xl font-semibold">Group API</h2>
        <PropsTable data={groupPropsData} />
      </div>

      <div>
        <h2 className="font-heading mb-4 text-xl font-semibold">
          InputGroup API
        </h2>
        <PropsTable data={inputGroupPropsData} />
      </div>

      <div>
        <h2 className="font-heading mb-4 text-xl font-semibold">
          InputGroupAddon API
        </h2>
        <PropsTable data={inputGroupAddonPropsData} />
      </div>
    </div>
  );
}
