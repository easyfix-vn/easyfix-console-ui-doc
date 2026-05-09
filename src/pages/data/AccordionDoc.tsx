import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@easyfix/console-ui";

import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

const accordionPropsData = [
  {
    name: "defaultValue",
    type: "number[]",
    description: "默认展开项的索引数组（非受控）",
  },
  {
    name: "value",
    type: "number[]",
    description: "当前展开项的索引数组（受控）",
  },
  {
    name: "onValueChange",
    type: "(value: number[]) => void",
    description: "展开项变化回调",
  },
  {
    name: "openMultiple",
    type: "boolean",
    default: "true",
    description: "是否允许同时展开多个项",
  },
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
];

const componentList = [
  { name: "Accordion", description: "手风琴根容器" },
  { name: "AccordionItem", description: "单个折叠项" },
  { name: "AccordionTrigger", description: "触发器（点击展开/收起）" },
  { name: "AccordionPanel", description: "内容区（展开时可见）" },
];

export default function AccordionDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">Accordion 手风琴</h1>
        <p className="mt-2 text-muted-foreground">
          基于{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            @base-ui/react/accordion
          </code>{" "}
          的可折叠面板组件，适用于在有限空间内展示多组内容。
        </p>
      </div>

      <ComponentDemo
        title="基础手风琴"
        description="包含 3 个折叠项的基础手风琴"
        code={`import {
  Accordion, AccordionItem, AccordionTrigger, AccordionPanel,
} from "@easyfix/console-ui";

<Accordion>
  <AccordionItem>
    <AccordionTrigger>什么是 Easyfix？</AccordionTrigger>
    <AccordionPanel>
      Easyfix 是一个现代化的企业级运维管理平台。
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <AccordionTrigger>如何开始使用？</AccordionTrigger>
    <AccordionPanel>
      参考快速开始文档，按照步骤安装并配置项目。
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <AccordionTrigger>支持哪些浏览器？</AccordionTrigger>
    <AccordionPanel>
      支持所有主流现代浏览器，包括 Chrome、Firefox、Safari 和 Edge。
    </AccordionPanel>
  </AccordionItem>
</Accordion>`}
      >
        <div className="w-full rounded-lg border px-4">
          <Accordion>
            <AccordionItem>
              <AccordionTrigger>什么是 Easyfix？</AccordionTrigger>
              <AccordionPanel>
                Easyfix 是一个现代化的企业级运维管理平台，提供监控、告警、日志分析等功能。
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionTrigger>如何开始使用？</AccordionTrigger>
              <AccordionPanel>
                参考快速开始文档，按照步骤安装并配置项目，即可快速搭建你的运维平台。
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionTrigger>支持哪些浏览器？</AccordionTrigger>
              <AccordionPanel>
                支持所有主流现代浏览器，包括 Chrome、Firefox、Safari 和 Edge。
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="默认展开某一项"
        description="通过 defaultValue 设置初始展开项"
        code={`<Accordion defaultValue={[0]}>
  <AccordionItem>
    <AccordionTrigger>默认展开项</AccordionTrigger>
    <AccordionPanel>这一项默认是展开的。</AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <AccordionTrigger>收起项</AccordionTrigger>
    <AccordionPanel>点击可展开此项。</AccordionPanel>
  </AccordionItem>
</Accordion>`}
      >
        <div className="w-full rounded-lg border px-4">
          <Accordion defaultValue={[0]}>
            <AccordionItem>
              <AccordionTrigger>默认展开项</AccordionTrigger>
              <AccordionPanel>
                通过设置 defaultValue 为 [0]，使该项在初始渲染时展开。
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionTrigger>收起项 A</AccordionTrigger>
              <AccordionPanel>
                这一项默认是收起的，点击触发器即可展开。
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionTrigger>收起项 B</AccordionTrigger>
              <AccordionPanel>
                支持同时展开多个项，设置 openMultiple=false 可切换为单项模式。
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">Accordion API</h2>
        <PropsTable data={accordionPropsData} />
      </div>

      <div>
        <h2 className="mb-4 text-xl font-semibold">组件列表</h2>
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
  );
}
