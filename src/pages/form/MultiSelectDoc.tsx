import { EasyMultiSelect } from "@easyfix/console-ui";
import { useMemo, useState } from "react";
import { ComponentDemo } from "@/components/ComponentDemo";
import { ComponentDocPage } from "@/components/ComponentDocPage";
import { PropsTable } from "@/components/PropsTable";

const allOptions = [
  { value: "ops", label: "运营组", description: "门店、工单与排班" },
  { value: "finance", label: "财务组", description: "账单与结算" },
  { value: "admin", label: "管理员", description: "全局配置权限" },
  { value: "readonly", label: "只读访客", disabled: true },
];

function BasicDemo() {
  const [value, setValue] = useState(["ops", "admin"]);
  const [keyword, setKeyword] = useState("");
  const options = useMemo(
    () => allOptions.filter((item) => item.label.includes(keyword) || item.value.includes(keyword)),
    [keyword],
  );
  return (
    <div className="w-full max-w-md space-y-3">
      <EasyMultiSelect value={value} onChange={setValue} options={options} onSearch={setKeyword} placeholder="选择权限组" maxCount={2} />
      <p className="text-xs text-muted-foreground">当前值：{value.join(", ") || "—"}</p>
    </div>
  );
}

const propsData = [
  { name: "value / onChange", type: "string[] / (value) => void", description: "受控多选值" },
  { name: "options", type: "{ value; label; description?; disabled? }[]", description: "候选项" },
  { name: "onSearch", type: "(keyword: string) => void", description: "受控搜索，可异步更新 options" },
  { name: "loading", type: "boolean", default: "false", description: "异步搜索加载态" },
  { name: "maxCount", type: "number", description: "触发区最多展示多少个 Badge，超出折叠为 +N" },
  { name: "renderOption", type: "(option, state) => ReactNode", description: "自定义选项渲染" },
];

export default function MultiSelectDoc() {
  return (
    <ComponentDocPage>
      <div className="space-y-8">
        <div>
          <h1 className="font-heading text-3xl font-bold">EasyMultiSelect 多选选择器</h1>
          <p className="mt-2 text-muted-foreground">适合选择多个实体，触发区用 Badge 展示已选项，弹层支持搜索、禁用项和异步加载。</p>
        </div>
        <ComponentDemo title="基础用法" description="选择多个权限组，超出 maxCount 后自动折叠。" code={`const [value, setValue] = useState(["ops"]);
<EasyMultiSelect
  value={value}
  onChange={setValue}
  options={options}
  onSearch={setKeyword}
  placeholder="选择权限组"
  maxCount={2}
/>`}>
          <BasicDemo />
        </ComponentDemo>
        <section className="space-y-3"><h2 className="font-heading text-xl font-semibold">API</h2><PropsTable data={propsData} /></section>
      </div>
    </ComponentDocPage>
  );
}
