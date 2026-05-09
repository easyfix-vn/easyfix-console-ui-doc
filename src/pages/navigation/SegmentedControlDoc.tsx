import {
  SegmentedControl,
  SegmentedControlItem,
  SegmentedControlList,
} from "@easyfix/console-ui";
import { LayoutGridIcon, ListIcon, TableIcon } from "lucide-react";
import { useState } from "react";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

function BasicSegmentedControl() {
  const [value, setValue] = useState("month");
  return (
    <div className="space-y-3">
      <SegmentedControl value={value} onValueChange={setValue}>
        <SegmentedControlList>
          <SegmentedControlItem value="day">日</SegmentedControlItem>
          <SegmentedControlItem value="week">周</SegmentedControlItem>
          <SegmentedControlItem value="month">月</SegmentedControlItem>
          <SegmentedControlItem value="year">年</SegmentedControlItem>
        </SegmentedControlList>
      </SegmentedControl>
      <p className="text-xs text-muted-foreground">当前选择：{value}</p>
    </div>
  );
}

function IconSegmentedControl() {
  const [view, setView] = useState("grid");
  return (
    <SegmentedControl value={view} onValueChange={setView}>
      <SegmentedControlList>
        <SegmentedControlItem value="list">
          <ListIcon />
          列表
        </SegmentedControlItem>
        <SegmentedControlItem value="grid">
          <LayoutGridIcon />
          网格
        </SegmentedControlItem>
        <SegmentedControlItem value="table">
          <TableIcon />
          表格
        </SegmentedControlItem>
      </SegmentedControlList>
    </SegmentedControl>
  );
}

function DisabledSegmentedControl() {
  return (
    <SegmentedControl defaultValue="active">
      <SegmentedControlList>
        <SegmentedControlItem value="all">全部</SegmentedControlItem>
        <SegmentedControlItem value="active">启用</SegmentedControlItem>
        <SegmentedControlItem value="disabled" disabled>
          停用
        </SegmentedControlItem>
      </SegmentedControlList>
    </SegmentedControl>
  );
}

const rootProps = [
  {
    name: "defaultValue",
    type: "string",
    description: "默认选中项（非受控）",
  },
  { name: "value", type: "string", description: "当前选中项（受控）" },
  {
    name: "onValueChange",
    type: "(value: string) => void",
    description: "选中项变化回调",
  },
];

const itemProps = [
  { name: "value", type: "string", description: "该项的唯一标识" },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用该项",
  },
];

export default function SegmentedControlDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">
          Segmented Control 分段控制器
        </h1>
        <p className="mt-2 text-muted-foreground">
          用于在一组互斥选项中选择一个，带平滑的滑动指示器。常用于视图切换、筛选器等场景。
        </p>
      </div>

      <ComponentDemo
        title="基础用法"
        description="带平滑滑动背景指示器的单选控制器"
        code={`import {
  SegmentedControl,
  SegmentedControlList,
  SegmentedControlItem,
} from "@easyfix/console-ui";

<SegmentedControl value={value} onValueChange={setValue}>
  <SegmentedControlList>
    <SegmentedControlItem value="day">日</SegmentedControlItem>
    <SegmentedControlItem value="week">周</SegmentedControlItem>
    <SegmentedControlItem value="month">月</SegmentedControlItem>
    <SegmentedControlItem value="year">年</SegmentedControlItem>
  </SegmentedControlList>
</SegmentedControl>`}
      >
        <BasicSegmentedControl />
      </ComponentDemo>

      <ComponentDemo
        title="带图标"
        description="在选项中添加图标，增强视觉识别"
        code={`<SegmentedControl value={view} onValueChange={setView}>
  <SegmentedControlList>
    <SegmentedControlItem value="list">
      <ListIcon /> 列表
    </SegmentedControlItem>
    <SegmentedControlItem value="grid">
      <LayoutGridIcon /> 网格
    </SegmentedControlItem>
  </SegmentedControlList>
</SegmentedControl>`}
      >
        <IconSegmentedControl />
      </ComponentDemo>

      <ComponentDemo
        title="禁用选项"
        description="通过 disabled 禁用某个选项"
        code={`<SegmentedControl defaultValue="active">
  <SegmentedControlList>
    <SegmentedControlItem value="all">全部</SegmentedControlItem>
    <SegmentedControlItem value="active">启用</SegmentedControlItem>
    <SegmentedControlItem value="disabled" disabled>停用</SegmentedControlItem>
  </SegmentedControlList>
</SegmentedControl>`}
      >
        <DisabledSegmentedControl />
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">API</h2>
        <h3 className="mb-3 text-lg font-medium">SegmentedControl（Root）</h3>
        <PropsTable data={rootProps} />
        <h3 className="mb-3 mt-6 text-lg font-medium">SegmentedControlItem</h3>
        <PropsTable data={itemProps} />
      </div>
    </div>
  );
}
