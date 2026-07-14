import { CopyableText } from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";
import { ComponentDocPage } from "@/components/ComponentDocPage";

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
    <ComponentDocPage>
    <div className="space-y-10">
      <div>
        <h1 className="font-heading text-3xl font-bold">
          CopyableText 可复制文本
        </h1>
        <p className="mt-2 text-muted-foreground">
          可复制文本展示组件，支持 inline、block、card 三种变体。
        </p>
      </div>

      <ComponentDemo
        title="Block：单行胶囊"
        description="默认变体适用于 Token、ID 等单行文本。"
        code={`import { CopyableText } from "@easyfix/console-ui";

<CopyableText value="u_2k9j7m" />`}
      >
        <div className="space-y-3">
          <CopyableText value="u_2k9j7m" />
          <CopyableText value="https://easyfix.vn/v3/console" />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="Inline：嵌入文本"
        description="悬停时显示复制控件，适合嵌入段落。"
code={`<p>
  当前 commit hash 为 <CopyableText variant="inline" value="3a7c2f9b1e" />，
  可复制到工单备注。
</p>`}
      >
        <p className="text-sm">
          当前 commit hash 为{" "}
          <CopyableText variant="inline" value="3a7c2f9b1e" />
          ，可复制到工单备注。
        </p>
      </ComponentDemo>

      <ComponentDemo
        title="Card：多行内容"
        description="多行卡片适用于 JSON 和代码片段，正文区域可滚动。"
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
        description="truncate 截断单行文本，title 保留完整内容。"
        code={`<CopyableText truncate value={longToken} />`}
      >
        <div className="max-w-md">
          <CopyableText truncate value={sampleToken} />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="自定义文案与回调"
        description="copyTooltip、copiedTooltip 和 onCopy 分别定义反馈文案与回调。"
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
          onCopy={(v) => console.log("copied", v)}
        />
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">API</h2>
        <PropsTable data={propsData} />
      </div>
    </div>
    </ComponentDocPage>
  );
}
