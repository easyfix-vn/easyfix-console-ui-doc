import { EasyOpeningHoursEditor, EasyOpeningHoursView, type OpeningHoursValue } from "@easyfix/console-ui";
import { useState } from "react";
import { ComponentDemo } from "@/components/ComponentDemo";
import { ComponentDocPage } from "@/components/ComponentDocPage";
import { PropsTable } from "@/components/PropsTable";

const initialValue: OpeningHoursValue = { version: 1, weekly: [{ days: [1, 2, 3, 4, 5], ranges: [{ open: "09:00", close: "18:00" }] }, { days: [6], ranges: [{ open: "10:00", close: "16:00" }] }] };

function EditorDemo() {
  const [value, setValue] = useState<OpeningHoursValue>(initialValue);
  return <div className="w-full max-w-3xl space-y-4"><EasyOpeningHoursEditor value={value} onChange={setValue} /><EasyOpeningHoursView value={value} /></div>;
}

const propsData = [
  { name: "value", type: "{ version: 1; weekly: { days; ranges }[] }", description: "周营业时间结构，周一为 1，周日为 7" },
  { name: "onChange", type: "(value) => void", description: "规则、星期或时段变化回调" },
  { name: "disabled", type: "boolean", default: "false", description: "禁用编辑" },
];

export default function OpeningHoursDoc() {
  return (
    <ComponentDocPage><div className="space-y-8"><div><h1 className="font-heading text-3xl font-bold">EasyOpeningHours 营业时间</h1><p className="mt-2 text-muted-foreground">结构化编辑每周营业规则，自动校验重复星期和无效时段，并提供周视图展示。</p></div><ComponentDemo title="编辑与预览" description="每条规则选择一组星期，最多维护 3 段营业时间。" code={`const [value, setValue] = useState<OpeningHoursValue>({
  version: 1,
  weekly: [{ days: [1,2,3,4,5], ranges: [{ open: "09:00", close: "18:00" }] }],
});
<EasyOpeningHoursEditor value={value} onChange={setValue} />
<EasyOpeningHoursView value={value} />`}><EditorDemo /></ComponentDemo><section className="space-y-3"><h2 className="font-heading text-xl font-semibold">API</h2><PropsTable data={propsData} /></section></div></ComponentDocPage>
  );
}
