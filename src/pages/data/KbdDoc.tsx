import { Kbd, KbdGroup } from "@easyfix/console-ui";

import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

const kbdPropsData = [
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "键盘按键内容",
  },
];

const kbdGroupPropsData = [
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "组合键内容，通常包含多个 Kbd 组件",
  },
];

export default function KbdDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">Kbd 键盘标签</h1>
        <p className="mt-2 text-muted-foreground">
          用于展示键盘按键或快捷键的内联组件，支持单个按键和组合键的展示。
        </p>
      </div>

      <ComponentDemo
        title="基础键盘标签"
        description="展示单个键盘按键"
        code={`import { Kbd } from "@easyfix/console-ui";

<Kbd>Enter</Kbd>
<Kbd>Esc</Kbd>
<Kbd>Tab</Kbd>`}
      >
        <div className="flex items-center gap-3">
          <Kbd>Enter</Kbd>
          <Kbd>Esc</Kbd>
          <Kbd>Tab</Kbd>
          <Kbd>Space</Kbd>
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="组合键"
        description="使用 KbdGroup 包裹多个 Kbd 展示组合快捷键"
        code={`import { Kbd, KbdGroup } from "@easyfix/console-ui";

<KbdGroup>
  <Kbd>Ctrl</Kbd>
  <Kbd>C</Kbd>
</KbdGroup>

<KbdGroup>
  <Kbd>Cmd</Kbd>
  <Kbd>Shift</Kbd>
  <Kbd>P</Kbd>
</KbdGroup>`}
      >
        <div className="flex items-center gap-4">
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <Kbd>C</Kbd>
          </KbdGroup>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <Kbd>V</Kbd>
          </KbdGroup>
          <KbdGroup>
            <Kbd>Cmd</Kbd>
            <Kbd>Shift</Kbd>
            <Kbd>P</Kbd>
          </KbdGroup>
        </div>
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">Kbd API</h2>
      <PropsTable data={kbdPropsData} />

      <h2 className="font-heading text-xl font-semibold">KbdGroup API</h2>
      <PropsTable data={kbdGroupPropsData} />
    </div>
  );
}
