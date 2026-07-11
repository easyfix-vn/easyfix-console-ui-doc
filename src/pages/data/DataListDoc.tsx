import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  DataList,
  DataListItem,
  DataListLabel,
  DataListValue,
} from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

function BasicDemo() {
  return (
    <DataList>
      <DataListItem>
        <DataListLabel>状态</DataListLabel>
        <DataListValue>
          <Badge variant="default">已发布</Badge>
        </DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel>ID</DataListLabel>
        <DataListValue className="font-mono">u_2k9j7m</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel>名称</DataListLabel>
        <DataListValue>Easyfix Console</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel>邮箱</DataListLabel>
        <DataListValue>
          <a className="text-primary hover:underline" href="mailto:hi@easyfix.com">
            hi@easyfix.com
          </a>
        </DataListValue>
      </DataListItem>
    </DataList>
  );
}

function SizeDemo() {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {(["1", "2", "3"] as const).map((size) => (
        <DataList key={size} size={size}>
          <DataListItem>
            <DataListLabel>密度</DataListLabel>
            <DataListValue>size = {size}</DataListValue>
          </DataListItem>
          <DataListItem>
            <DataListLabel>状态</DataListLabel>
            <DataListValue>正常</DataListValue>
          </DataListItem>
          <DataListItem>
            <DataListLabel>更新时间</DataListLabel>
            <DataListValue>5 分钟前</DataListValue>
          </DataListItem>
        </DataList>
      ))}
    </div>
  );
}

function VerticalDemo() {
  return (
    <DataList orientation="vertical" size="2">
      <DataListItem>
        <DataListLabel>用户</DataListLabel>
        <DataListValue>
          <span className="inline-flex items-center gap-2">
            <Avatar className="size-6">
              <AvatarImage alt="" src="" />
              <AvatarFallback>EF</AvatarFallback>
            </Avatar>
            <span>Ethan</span>
          </span>
        </DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel>工作描述</DataListLabel>
        <DataListValue>
          全栈开发工程师，主要负责 Console UI 组件库与文档站。
        </DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel>权限</DataListLabel>
        <DataListValue className="space-x-1.5">
          <Badge variant="outline">读</Badge>
          <Badge variant="outline">写</Badge>
          <Badge variant="outline">管理</Badge>
        </DataListValue>
      </DataListItem>
    </DataList>
  );
}

function LabelMinWidthDemo() {
  return (
    <DataList labelMinWidth={120}>
      <DataListItem>
        <DataListLabel>项目名</DataListLabel>
        <DataListValue>console-ui</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel>所属团队</DataListLabel>
        <DataListValue>Easyfix Frontend</DataListValue>
      </DataListItem>
      <DataListItem>
        <DataListLabel>最近一次部署</DataListLabel>
        <DataListValue>2026-05-09 11:32</DataListValue>
      </DataListItem>
    </DataList>
  );
}

const longLabel =
  "这是一段非常非常非常非常非常非常非常非常长的标签文本";
const longValue =
  "这是一段非常非常长的描述内容，它会随着 DataList 容器宽度变化而决定是否触发折叠。" +
  "在折叠状态下，会显示「展开」按钮；点开后切换为「收起」。" +
  "DataList 的 Value 适合放可能溢出的文案，例如错误堆栈、长备注、JSON 摘要等。" +
  "collapsible 控制该行为。";

function OverflowAndCopyDemo() {
  return (
    <div className="max-w-md">
      <DataList labelMinWidth={120} labelMaxWidth="40%">
        <DataListItem align="center">
          <DataListLabel>{longLabel}</DataListLabel>
          <DataListValue>悬浮 Label 显示完整名称</DataListValue>
        </DataListItem>
        <DataListItem align="center">
          <DataListLabel>API Token</DataListLabel>
          <DataListValue
            copyable={{
              copyTooltip: "复制 Token",
              copiedTooltip: "Token 已复制",
            }}
          >
            <code className="font-mono">
              token_example_51HxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxAB
            </code>
          </DataListValue>
        </DataListItem>
        <DataListItem align="center">
          <DataListLabel>用户 ID</DataListLabel>
          <DataListValue copyable>u_2k9j7m</DataListValue>
        </DataListItem>
        <DataListItem align="start">
          <DataListLabel>操作描述</DataListLabel>
          <DataListValue collapsible copyable={{ value: longValue }}>
            {longValue}
          </DataListValue>
        </DataListItem>
        <DataListItem align="start">
          <DataListLabel>3 行折叠</DataListLabel>
          <DataListValue collapsible={{ lines: 3 }}>{longValue}</DataListValue>
        </DataListItem>
      </DataList>
    </div>
  );
}

const dataListProps = [
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: "排版方向；vertical 时 Label 在 Value 之上",
  },
  {
    name: "size",
    type: '"1" | "2" | "3"',
    default: '"2"',
    description: "文字与行间距密度",
  },
  {
    name: "labelMinWidth",
    type: "number | string",
    description: "horizontal 模式下统一 Label 列最小宽度，便于对齐",
  },
  {
    name: "labelMaxWidth",
    type: "number | string",
    description:
      "horizontal 模式下统一 Label 列最大宽度，超出后 truncate 并通过 Tooltip 展示完整内容。",
  },
];

const itemProps = [
  {
    name: "align",
    type: '"start" | "center" | "baseline" | "stretch"',
    default: '"baseline"',
    description: "horizontal 模式下 Label / Value 的对齐方式",
  },
];

const labelProps = [
  {
    name: "minWidth",
    type: "number | string",
    description: "单独覆盖该 item 的 Label 列最小宽度",
  },
  {
    name: "maxWidth",
    type: "number | string",
    description: "单独覆盖该 item 的 Label 列最大宽度",
  },
  {
    name: "tooltip",
    type: "boolean",
    default: "true",
    description: "Label 文本溢出（被 truncate）时是否自动用 Tooltip 显示完整内容",
  },
  {
    name: "tooltipContent",
    type: "ReactNode",
    description:
      "Tooltip 中渲染的完整内容，未传时使用 children；children 为复杂节点时建议显式传入字符串",
  },
];

const valueProps = [
  {
    name: "collapsible",
    type: "boolean | { lines?: number }",
    default: "false",
    description:
      "内容超过指定行数（默认 2 行）时显示「展开 / 收起」按钮",
  },
  {
    name: "copyable",
    type: "boolean | Partial<CopyableTextProps>",
    default: "false",
    description:
      "在 Value 末尾追加复制按钮，复用 CopyableText（iconOnly）。可传对象覆盖 value、copyTooltip 等",
  },
];

export default function DataListDoc() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="font-heading text-3xl font-bold">DataList 数据列表</h1>
        <p className="mt-2 text-muted-foreground">
          以「键 / 值」对形式展示属性数据，常用于详情面板、设置预览。设计参考{" "}
          <a
            className="text-primary hover:underline"
            href="https://www.radix-ui.com/themes/docs/components/data-list"
            target="_blank"
            rel="noreferrer"
          >
            Radix Themes DataList
          </a>
          。
        </p>
      </div>

      <ComponentDemo
        title="默认布局"
        description="水平布局中，Label 自适应宽度，Value 占据剩余空间。"
        code={`import {
  DataList, DataListItem, DataListLabel, DataListValue,
} from "@easyfix/console-ui";

<DataList>
  <DataListItem>
    <DataListLabel>状态</DataListLabel>
    <DataListValue><Badge>已发布</Badge></DataListValue>
  </DataListItem>
  <DataListItem>
    <DataListLabel>ID</DataListLabel>
    <DataListValue className="font-mono">u_2k9j7m</DataListValue>
  </DataListItem>
</DataList>`}
      >
        <BasicDemo />
      </ComponentDemo>

      <ComponentDemo
        title="尺寸 size"
        description="size 定义文本尺寸与行间距：1 紧凑、2 默认、3 宽松。"
        code={`<DataList size="1">...</DataList>
<DataList size="2">...</DataList>
<DataList size="3">...</DataList>`}
      >
        <SizeDemo />
      </ComponentDemo>

      <ComponentDemo
        title="垂直排版"
        description="orientation='vertical' 将 Label 单独成行，适用于长内容。"
        code={`<DataList orientation="vertical">
  <DataListItem>
    <DataListLabel>工作描述</DataListLabel>
    <DataListValue>……</DataListValue>
  </DataListItem>
</DataList>`}
      >
        <VerticalDemo />
      </ComponentDemo>

      <ComponentDemo
        title="Label 列对齐"
        description="labelMinWidth 统一 Label 列宽度。"
        code={`<DataList labelMinWidth={120}>
  <DataListItem>
    <DataListLabel>项目名</DataListLabel>
    <DataListValue>console-ui</DataListValue>
  </DataListItem>
</DataList>`}
      >
        <LabelMinWidthDemo />
      </ComponentDemo>

      <ComponentDemo
        title="Label 溢出 Tooltip / Value 折叠 / 一键复制"
        description="labelMaxWidth 截断标签并显示 Tooltip；collapsible 折叠多行 Value；copyable 追加复制控件。"
        code={`<DataList labelMinWidth={120} labelMaxWidth="40%">
  {/* Label 超长 → 悬浮显示完整 */}
  <DataListItem>
    <DataListLabel>这是一段非常非常长的标签文本</DataListLabel>
    <DataListValue>悬浮 Label 显示完整名称</DataListValue>
  </DataListItem>

  {/* copyable: 在末尾添加复制按钮 */}
  <DataListItem align="center">
    <DataListLabel>API Token</DataListLabel>
    <DataListValue
      copyable={{ copyTooltip: "复制 Token", copiedTooltip: "Token 已复制" }}
    >
      <code className="font-mono">sk_live_51HxxxxxxxxAB</code>
    </DataListValue>
  </DataListItem>

  {/* collapsible: 默认 2 行折叠，可同时复制 */}
  <DataListItem align="start">
    <DataListLabel>操作描述</DataListLabel>
    <DataListValue collapsible copyable={{ value: longValue }}>
      {longValue}
    </DataListValue>
  </DataListItem>

  {/* 自定义折叠行数 */}
  <DataListItem align="start">
    <DataListLabel>3 行折叠</DataListLabel>
    <DataListValue collapsible={{ lines: 3 }}>{longValue}</DataListValue>
  </DataListItem>
</DataList>`}
      >
        <OverflowAndCopyDemo />
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">API</h2>

        <h3 className="mb-3 text-lg font-medium">DataList</h3>
        <PropsTable data={dataListProps} />

        <h3 className="mb-3 mt-6 text-lg font-medium">DataListItem</h3>
        <PropsTable data={itemProps} />

        <h3 className="mb-3 mt-6 text-lg font-medium">DataListLabel</h3>
        <PropsTable data={labelProps} />

        <h3 className="mb-3 mt-6 text-lg font-medium">DataListValue</h3>
        <PropsTable data={valueProps} />
      </div>
    </div>
  );
}
