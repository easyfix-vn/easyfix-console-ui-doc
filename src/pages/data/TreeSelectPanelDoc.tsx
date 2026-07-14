import { useState } from "react";
import { EasyTreeSelectPanel, type EasyTreeNode } from "@easyfix/console-ui";

import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";
import { ComponentDocPage } from "@/components/ComponentDocPage";

const treeData: EasyTreeNode[] = [
  {
    id: "1",
    label: "部门A",
    children: [
      { id: "1-1", label: "小组A-1" },
      { id: "1-2", label: "小组A-2" },
    ],
  },
  {
    id: "2",
    label: "部门B",
    children: [{ id: "2-1", label: "小组B-1" }],
  },
];

function TreeSelectBasicDemo() {
  const [selected, setSelected] = useState<string | undefined>();

  return (
    <EasyTreeSelectPanel
      treeData={treeData}
      selected={selected}
      onSelect={(node) => setSelected(node.id)}
      actions={
        <div className="text-sm text-muted-foreground">
          {selected ? `已选择: ${selected}` : "尚未选择节点"}
        </div>
      }
    />
  );
}

function TreeSelectCollapsibleDemo() {
  const [selected, setSelected] = useState<string | undefined>();

  return (
    <EasyTreeSelectPanel
      treeData={treeData}
      selected={selected}
      onSelect={(node) => setSelected(node.id)}
      collapsible
      defaultCollapsed={false}
      actions={
        <div className="text-sm text-muted-foreground">
          {selected ? `已选择: ${selected}` : "左侧面板支持折叠"}
        </div>
      }
    />
  );
}

const propsData = [
  {
    name: "treeData",
    type: "EasyTreeNode[]",
    description: "树形数据源",
  },
  {
    name: "selected",
    type: "string",
    description: "当前选中节点的 id",
  },
  {
    name: "onSelect",
    type: "(node: EasyTreeNode) => void",
    description: "节点选中时的回调",
  },
  {
    name: "searchActions",
    type: "ReactNode",
    description: "树面板顶部的搜索区域自定义内容",
  },
  {
    name: "actions",
    type: "ReactNode",
    description: "右侧内容区域",
  },
  {
    name: "empty",
    type: "ReactNode",
    default: '"No data"',
    description: "无数据时的占位内容",
  },
  {
    name: "className",
    type: "string",
    description: "容器自定义 CSS 类名",
  },
  {
    name: "collapsible",
    type: "boolean",
    default: "false",
    description: "是否允许折叠左侧面板",
  },
  {
    name: "defaultCollapsed",
    type: "boolean",
    default: "false",
    description: "初始是否折叠",
  },
];

const treeNodeData = [
  {
    name: "id",
    type: "string",
    description: "节点唯一标识",
  },
  {
    name: "label",
    type: "ReactNode",
    description: "节点显示文本",
  },
  {
    name: "children",
    type: "EasyTreeNode[]",
    description: "子节点数组",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用该节点",
  },
  {
    name: "className",
    type: "string",
    description: "节点自定义 CSS 类名",
  },
  {
    name: "data",
    type: "unknown",
    description: "挂载在节点上的自定义业务数据",
  },
];

export default function TreeSelectPanelDoc() {
  return (
    <ComponentDocPage>
    <div className="space-y-10">
      <div>
        <h1 className="font-heading text-3xl font-bold">
          TreeSelectPanel 树选择面板
        </h1>
        <p className="mt-2 text-muted-foreground">
          树形导航与内容面板，支持组织架构、分类等数据选择。
        </p>
      </div>

      <ComponentDemo
        title="基本结构"
        description="treeData 定义树结构，onSelect 接收节点选择结果。"
        code={`import { useState } from "react";
import { EasyTreeSelectPanel, type EasyTreeNode } from "@easyfix/console-ui";

const treeData: EasyTreeNode[] = [
  {
    id: "1",
    label: "部门A",
    children: [
      { id: "1-1", label: "小组A-1" },
      { id: "1-2", label: "小组A-2" },
    ],
  },
  {
    id: "2",
    label: "部门B",
    children: [{ id: "2-1", label: "小组B-1" }],
  },
];

function Demo() {
  const [selected, setSelected] = useState<string>();

  return (
    <EasyTreeSelectPanel
      treeData={treeData}
      selected={selected}
      onSelect={(node) => setSelected(node.id)}
      actions={
        <div className="text-sm text-muted-foreground">
          {selected ? \`已选择: \${selected}\` : "尚未选择节点"}
        </div>
      }
    />
  );
}`}
      >
        <div className="w-full">
          <TreeSelectBasicDemo />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="可折叠面板"
        description="collapsible 启用左侧面板的折叠控制。"
        code={`import { useState } from "react";
import { EasyTreeSelectPanel, type EasyTreeNode } from "@easyfix/console-ui";

const treeData: EasyTreeNode[] = [
  {
    id: "1",
    label: "部门A",
    children: [
      { id: "1-1", label: "小组A-1" },
      { id: "1-2", label: "小组A-2" },
    ],
  },
  {
    id: "2",
    label: "部门B",
    children: [{ id: "2-1", label: "小组B-1" }],
  },
];

function Demo() {
  const [selected, setSelected] = useState<string>();

  return (
    <EasyTreeSelectPanel
      treeData={treeData}
      selected={selected}
      onSelect={(node) => setSelected(node.id)}
      collapsible
      defaultCollapsed={false}
      actions={
        <div className="text-sm text-muted-foreground">
          {selected ? \`已选择: \${selected}\` : "左侧面板支持折叠"}
        </div>
      }
    />
  );
}`}
      >
        <div className="w-full">
          <TreeSelectCollapsibleDemo />
        </div>
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">API</h2>

        <h3 className="mb-2 mt-6 text-lg font-medium">EasyTreeSelectPanel</h3>
        <PropsTable data={propsData} />

        <h3 className="mb-2 mt-6 text-lg font-medium">EasyTreeNode</h3>
        <PropsTable data={treeNodeData} />
      </div>
    </div>
    </ComponentDocPage>
  );
}
