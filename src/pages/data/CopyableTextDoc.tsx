import { CopyableText } from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

const sampleToken =
  "sk_live_51Hxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

const sampleJson = `{
  "id": "u_2k9j7m",
  "name": "Easyfix Console",
  "scopes": ["read", "write", "manage"],
  "createdAt": "2026-05-09T11:32:00Z"
}`;

const propsData = [
  { name: "value", type: "string", description: "实际复制到剪贴板的字符串内容" },
  {
    name: "children",
    type: "ReactNode",
    description: "自定义展示内容，未传时显示 value",
  },
  {
    name: "variant",
    type: '"inline" | "block" | "card"',
    default: '"block"',
    description:
      "视觉变体：inline 内联、block 单行胶囊、card 多行 mono 卡片",
  },
  {
    name: "size",
    type: '"xs" | "sm" | "md"',
    description: "复制按钮尺寸；不传时根据 variant 自动选择",
  },
  {
    name: "truncate",
    type: "boolean",
    default: "false",
    description: "文本超出时单行截断，hover 时通过 title 提示完整内容",
  },
  {
    name: "copyTooltip",
    type: "string",
    default: '"复制"',
    description: "复制按钮 tooltip 文案",
  },
  {
    name: "copiedTooltip",
    type: "string",
    default: '"已复制"',
    description: "复制成功后的反馈文案",
  },
  {
    name: "revealMs",
    type: "number",
    default: "1500",
    description: "复制成功反馈持续毫秒数",
  },
  {
    name: "hideButton",
    type: "boolean",
    default: "false",
    description: "隐藏复制按钮（用于完全自定义触发场景）",
  },
  {
    name: "onCopy",
    type: "(value: string) => void",
    description: "复制成功后的回调",
  },
];

export default function CopyableTextDoc() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="font-heading text-3xl font-bold">
          CopyableText 可复制文本
        </h1>
        <p className="mt-2 text-muted-foreground">
          常用于 ID、Token、链接、JSON 片段等需要一键复制到剪贴板的展示场景。提供
          inline / block / card 三种视觉变体，复制后会以 ✓ 图标和 tooltip
          反馈，1.5s 后自动恢复。
        </p>
      </div>

      <ComponentDemo
        title="Block：单行胶囊"
        description="默认变体。左侧文本，右侧复制按钮，常用于 token / ID。"
        code={`import { CopyableText } from "@easyfix/console-ui";

<CopyableText value="u_2k9j7m" />`}
      >
        <div className="space-y-3">
          <CopyableText value="u_2k9j7m" />
          <CopyableText value="https://api.easyfix.com/v3/console" />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="Inline：嵌入文本"
        description="按钮在 hover 时浮现，方便嵌入到段落中"
        code={`<p>
  当前 commit hash 为 <CopyableText variant="inline" value="3a7c2f9" />。
</p>`}
      >
        <p className="text-sm">
          当前 commit hash 为{" "}
          <CopyableText variant="inline" value="3a7c2f9b1e" />
          ，请将其粘贴到工单备注中。
        </p>
      </ComponentDemo>

      <ComponentDemo
        title="Card：多行内容"
        description="适合 JSON / 代码片段，按钮浮在右上角，正文区域可滚动"
        code={`<CopyableText variant="card" value={json}>
  {json}
</CopyableText>`}
      >
        <CopyableText variant="card" value={sampleJson}>
          {sampleJson}
        </CopyableText>
      </ComponentDemo>

      <ComponentDemo
        title="超长文本截断"
        description="搭配 truncate 截断展示并通过 hover title 显示完整内容"
        code={`<CopyableText truncate value={longToken} />`}
      >
        <div className="max-w-md">
          <CopyableText truncate value={sampleToken} />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="自定义文案与回调"
        description="copyTooltip / copiedTooltip 控制提示文案，onCopy 触发后续逻辑"
        code={`<CopyableText
  value="ord_20260509_001"
  copyTooltip="复制订单号"
  copiedTooltip="订单号已复制"
  onCopy={(v) => console.log("copied", v)}
/>`}
      >
        <CopyableText
          value="ord_20260509_001"
          copyTooltip="复制订单号"
          copiedTooltip="订单号已复制"
        />
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">API</h2>
        <PropsTable data={propsData} />
      </div>
    </div>
  );
}
