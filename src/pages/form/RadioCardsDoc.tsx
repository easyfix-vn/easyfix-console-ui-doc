import { useState } from "react";
import { RadioCards, RadioCardItem } from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";
import { ComponentDocPage } from "@/components/ComponentDocPage";

function BasicRadioCards() {
  const [value, setValue] = useState("standard");
  return (
    <RadioCards value={value} onValueChange={setValue}>
      <RadioCardItem value="standard" title="标准方案" />
      <RadioCardItem value="pro" title="专业方案" />
      <RadioCardItem value="enterprise" title="企业方案" />
    </RadioCards>
  );
}

function DescriptionRadioCards() {
  const [value, setValue] = useState("email");
  return (
    <RadioCards value={value} onValueChange={setValue}>
      <RadioCardItem
        value="email"
        title="邮件通知"
        description="通过电子邮件接收系统通知和告警"
      />
      <RadioCardItem
        value="sms"
        title="短信通知"
        description="通过手机短信接收重要告警"
      />
      <RadioCardItem
        value="webhook"
        title="Webhook"
        description="将通知推送到自定义 HTTP 端点"
      />
    </RadioCards>
  );
}

function DisabledRadioCards() {
  const [value, setValue] = useState("a");
  return (
    <RadioCards value={value} onValueChange={setValue}>
      <RadioCardItem value="a" title="可选项 A" />
      <RadioCardItem value="b" title="禁用项 B" disabled />
      <RadioCardItem value="c" title="可选项 C" />
    </RadioCards>
  );
}

const radioCardsPropsData = [
  { name: "value", type: "string", description: "当前选中值（受控）" },
  { name: "defaultValue", type: "string", description: "默认选中值（非受控）" },
  { name: "onValueChange", type: "(value: string) => void", description: "选中值变化回调" },
  { name: "className", type: "string", description: "自定义样式类名" },
];

const radioCardItemPropsData = [
  { name: "value", type: "string", description: "选项值" },
  { name: "title", type: "ReactNode", description: "卡片标题" },
  { name: "description", type: "ReactNode", description: "卡片描述文字" },
  { name: "disabled", type: "boolean", default: "false", description: "是否禁用" },
];

export default function RadioCardsDoc() {
  return (
    <ComponentDocPage>
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">RadioCards 单选卡片</h1>
        <p className="mt-2 text-muted-foreground">
          卡片式单选组件，适合少量选项。
        </p>
      </div>

      <ComponentDemo
        title="默认样式"
        description="卡片形式的单选控件。"
        code={`import { RadioCards, RadioCardItem } from "@easyfix/console-ui";

const [value, setValue] = useState("standard");

<RadioCards value={value} onValueChange={setValue}>
  <RadioCardItem value="standard" title="标准方案" />
  <RadioCardItem value="pro" title="专业方案" />
  <RadioCardItem value="enterprise" title="企业方案" />
</RadioCards>`}
      >
        <BasicRadioCards />
      </ComponentDemo>

      <ComponentDemo
        title="带描述文字"
        description="description 承载选项说明。"
        code={`<RadioCards value={value} onValueChange={setValue}>
  <RadioCardItem
    value="email"
    title="邮件通知"
    description="通过电子邮件接收系统通知和告警"
  />
  <RadioCardItem
    value="sms"
    title="短信通知"
    description="通过手机短信接收重要告警"
  />
  <RadioCardItem
    value="webhook"
    title="Webhook"
    description="将通知推送到自定义 HTTP 端点"
  />
</RadioCards>`}
      >
        <DescriptionRadioCards />
      </ComponentDemo>

      <ComponentDemo
        title="禁用选项"
        description="单个选项可设置 disabled 禁用"
        code={`<RadioCards value={value} onValueChange={setValue}>
  <RadioCardItem value="a" title="可选项 A" />
  <RadioCardItem value="b" title="禁用项 B" disabled />
  <RadioCardItem value="c" title="可选项 C" />
</RadioCards>`}
      >
        <DisabledRadioCards />
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">RadioCards API</h2>
      <PropsTable data={radioCardsPropsData} />

      <h2 className="font-heading text-xl font-semibold">RadioCardItem API</h2>
      <PropsTable data={radioCardItemPropsData} />
    </div>
    </ComponentDocPage>
  );
}
