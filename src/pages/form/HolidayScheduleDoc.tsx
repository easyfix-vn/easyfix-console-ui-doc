import { EasyHolidayScheduleEditor, EasyHolidayScheduleView, type HolidayScheduleValue } from "@easyfix/console-ui";
import { useState } from "react";
import { ComponentDemo } from "@/components/ComponentDemo";
import { ComponentDocPage } from "@/components/ComponentDocPage";
import { PropsTable } from "@/components/PropsTable";

const initialValue: HolidayScheduleValue = { version: 1, items: [{ date: "2026-01-01", name: "元旦", closed: true }, { date: "2026-02-14", end_date: "2026-02-15", name: "活动营业", closed: false, ranges: [{ open: "10:00", close: "22:00" }] }] };

function EditorDemo() {
  const [value, setValue] = useState<HolidayScheduleValue>(initialValue);
  return <div className="w-full max-w-3xl space-y-4"><EasyHolidayScheduleEditor value={value} onChange={setValue} /><EasyHolidayScheduleView value={value} /></div>;
}

const propsData = [
  { name: "value", type: "{ version: 1; items: { date; end_date?; name; closed; ranges? }[] }", description: "特殊日程列表" },
  { name: "onChange", type: "(value) => void", description: "日期、名称、休业状态或特殊营业时段变化回调" },
  { name: "disabled", type: "boolean", default: "false", description: "禁用编辑" },
];

export default function HolidayScheduleDoc() {
  return (
    <ComponentDocPage><div className="space-y-8"><div><h1 className="font-heading text-3xl font-bold">EasyHolidaySchedule 特殊日程</h1><p className="mt-2 text-muted-foreground">维护节假日休业或特殊营业时段，视图按日期排序展示。</p></div><ComponentDemo title="节假日与特殊营业" description="休业关闭时，可复用营业时间段编辑特殊开放时间。" code={`const [value, setValue] = useState<HolidayScheduleValue>({
  version: 1,
  items: [{ date: "2026-01-01", name: "元旦", closed: true }],
});
<EasyHolidayScheduleEditor value={value} onChange={setValue} />
<EasyHolidayScheduleView value={value} />`}><EditorDemo /></ComponentDemo><section className="space-y-3"><h2 className="font-heading text-xl font-semibold">API</h2><PropsTable data={propsData} /></section></div></ComponentDocPage>
  );
}
