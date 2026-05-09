import { useState, useCallback } from "react";
import {
  EasySearchTable,
  Button,
  type SearchFieldDef,
  type ColumnDef,
  type SearchParams,
  type EasySearchTableExportContext,
} from "@easyfix/console-ui";

import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

type UserRecord = {
  id: string;
  name: string;
  email: string;
  status: string;
};

const allData: UserRecord[] = [
  { id: "1", name: "张三", email: "zhangsan@example.com", status: "active" },
  { id: "2", name: "李四", email: "lisi@example.com", status: "inactive" },
  { id: "3", name: "王五", email: "wangwu@example.com", status: "active" },
  { id: "4", name: "赵六", email: "zhaoliu@example.com", status: "active" },
  { id: "5", name: "钱七", email: "qianqi@example.com", status: "inactive" },
  { id: "6", name: "孙八", email: "sunba@example.com", status: "active" },
];

const searchFields: SearchFieldDef[] = [
  { key: "name", labelKey: "姓名", type: "input", placeholder: "请输入姓名" },
  {
    key: "status",
    labelKey: "状态",
    type: "select",
    placeholder: "请选择状态",
    options: [
      { label: "活跃", value: "active" },
      { label: "停用", value: "inactive" },
    ],
  },
];

const columns: ColumnDef<UserRecord>[] = [
  { key: "id", headerKey: "ID", width: 80 },
  { key: "name", headerKey: "姓名" },
  { key: "email", headerKey: "邮箱" },
  {
    key: "status",
    headerKey: "状态",
    render: (value) => (
      <span
        className={
          value === "active" ? "text-green-600" : "text-muted-foreground"
        }
      >
        {value === "active" ? "活跃" : "停用"}
      </span>
    ),
  },
];

function SearchTableBasicDemo() {
  const [data, setData] = useState<UserRecord[]>(allData.slice(0, 5));
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(allData.length);
  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback((params: SearchParams) => {
    setLoading(true);
    setTimeout(() => {
      let filtered = [...allData];
      if (params.name) {
        filtered = filtered.filter((item) =>
          item.name.includes(params.name as string),
        );
      }
      if (params.status) {
        filtered = filtered.filter(
          (item) => item.status === params.status,
        );
      }
      const start = (params.page - 1) * params.pageSize;
      const paged = filtered.slice(start, start + params.pageSize);
      setData(paged);
      setTotal(filtered.length);
      setPage(params.page);
      setLoading(false);
    }, 300);
  }, []);

  return (
    <EasySearchTable<UserRecord>
      columns={columns}
      searchFields={searchFields}
      data={data}
      total={total}
      page={page}
      pageSize={5}
      onSearch={handleSearch}
      loading={loading}
    />
  );
}

function SearchTableExportDemo() {
  const [data, setData] = useState<UserRecord[]>(allData.slice(0, 5));
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(allData.length);
  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback((params: SearchParams) => {
    setLoading(true);
    setTimeout(() => {
      let filtered = [...allData];
      if (params.name) {
        filtered = filtered.filter((item) =>
          item.name.includes(params.name as string),
        );
      }
      if (params.status) {
        filtered = filtered.filter(
          (item) => item.status === params.status,
        );
      }
      const start = (params.page - 1) * params.pageSize;
      const paged = filtered.slice(start, start + params.pageSize);
      setData(paged);
      setTotal(filtered.length);
      setPage(params.page);
      setLoading(false);
    }, 300);
  }, []);

  const renderExportContent = (ctx: EasySearchTableExportContext<UserRecord>) => (
    <div className="space-y-3 text-sm">
      <div className="font-medium">导出选项</div>
      <p className="text-muted-foreground">
        当前筛选条件下共 {ctx.data.length} 条数据
      </p>
      <div className="flex flex-col gap-2">
        <Button
          size="sm"
          variant="outline"
          className="w-full justify-start"
          onClick={() => {
            ctx.exportCurrentData();
            ctx.close();
          }}
        >
          导出当前页 (CSV)
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="w-full justify-start"
          onClick={() => {
            alert(
              `模拟后端导出，参数: ${JSON.stringify(ctx.exportParams)}`,
            );
            ctx.close();
          }}
        >
          导出全部数据 (后端)
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="w-full justify-start"
          onClick={() => {
            const headers = ctx.columns.map((c) => c.headerKey);
            const rows = ctx.data.map((r) =>
              ctx.columns.map((c) => String((r as Record<string, unknown>)[c.key] ?? "")),
            );
            const content = [headers, ...rows]
              .map((r) => r.join("\t"))
              .join("\n");
            navigator.clipboard.writeText(content);
            ctx.close();
          }}
        >
          复制到剪贴板
        </Button>
      </div>
    </div>
  );

  return (
    <EasySearchTable<UserRecord>
      columns={columns}
      searchFields={searchFields}
      data={data}
      total={total}
      page={page}
      pageSize={5}
      onSearch={handleSearch}
      loading={loading}
      showExport
      renderExportContent={renderExportContent}
    />
  );
}

type OrderRecord = {
  id: string;
  name: string;
  amount: number;
  status: string;
  createdAt: string;
};

const orderData: OrderRecord[] = [
  { id: "1", name: "订单A", amount: 1200, status: "paid", createdAt: "2026-01-15" },
  { id: "2", name: "订单B", amount: 850, status: "pending", createdAt: "2026-02-20" },
  { id: "3", name: "订单C", amount: 3400, status: "paid", createdAt: "2026-03-10" },
  { id: "4", name: "订单D", amount: 560, status: "cancelled", createdAt: "2026-04-05" },
  { id: "5", name: "订单E", amount: 2100, status: "paid", createdAt: "2026-05-01" },
  { id: "6", name: "订单F", amount: 780, status: "pending", createdAt: "2026-05-08" },
];

const orderColumns: ColumnDef<OrderRecord>[] = [
  { key: "id", headerKey: "ID", width: 80 },
  { key: "name", headerKey: "订单名" },
  { key: "amount", headerKey: "金额", render: (v) => `¥${v}` },
  {
    key: "status",
    headerKey: "状态",
    render: (value) => {
      const map: Record<string, { label: string; cls: string }> = {
        paid: { label: "已支付", cls: "text-green-600" },
        pending: { label: "待支付", cls: "text-yellow-600" },
        cancelled: { label: "已取消", cls: "text-muted-foreground" },
      };
      const item = map[value as string] ?? { label: String(value), cls: "" };
      return <span className={item.cls}>{item.label}</span>;
    },
  },
  { key: "createdAt", headerKey: "创建时间" },
];

function SearchTableViewDemo() {
  const [data, setData] = useState<OrderRecord[]>(orderData.slice(0, 5));
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(orderData.length);
  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback((params: SearchParams) => {
    setLoading(true);
    setTimeout(() => {
      let filtered = [...orderData];
      if (params.name) {
        filtered = filtered.filter((item) =>
          item.name.includes(params.name as string),
        );
      }
      if (params.status) {
        filtered = filtered.filter((item) => item.status === params.status);
      }
      const start = (params.page - 1) * params.pageSize;
      setData(filtered.slice(start, start + params.pageSize));
      setTotal(filtered.length);
      setPage(params.page);
      setLoading(false);
    }, 300);
  }, []);

  return (
    <EasySearchTable<OrderRecord>
      columns={orderColumns}
      searchFields={[
        { key: "name", labelKey: "订单名", type: "input", placeholder: "请输入订单名" },
        {
          key: "status",
          labelKey: "状态",
          type: "select",
          placeholder: "请选择状态",
          options: [
            { label: "已支付", value: "paid" },
            { label: "待支付", value: "pending" },
            { label: "已取消", value: "cancelled" },
          ],
        },
      ]}
      data={data}
      total={total}
      page={page}
      pageSize={5}
      onSearch={handleSearch}
      loading={loading}
      defaultView="table"
      renderCard={(record, cols) => (
        <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm">
          <div className="mb-2 text-base font-semibold">{record.name}</div>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">金额</span>
              <span>¥{record.amount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">创建时间</span>
              <span>{record.createdAt}</span>
            </div>
          </div>
        </div>
      )}
      renderListItem={(record, cols) => (
        <div className="flex items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm">
          <div className="font-semibold">{record.name}</div>
          <div className="flex gap-4 text-sm">
            <span>¥{record.amount}</span>
            <span className="text-muted-foreground">{record.createdAt}</span>
          </div>
        </div>
      )}
    />
  );
}

function SearchTableDateRangeDemo() {
  const [data, setData] = useState<OrderRecord[]>(orderData.slice(0, 5));
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(orderData.length);
  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback((params: SearchParams) => {
    setLoading(true);
    setTimeout(() => {
      let filtered = [...orderData];
      if (params.name) {
        filtered = filtered.filter((item) =>
          item.name.includes(params.name as string),
        );
      }
      const dateRange = params.dateRange as { from?: Date; to?: Date } | undefined;
      if (dateRange?.from) {
        const from = dateRange.from.toISOString().slice(0, 10);
        filtered = filtered.filter((item) => item.createdAt >= from);
      }
      if (dateRange?.to) {
        const to = dateRange.to.toISOString().slice(0, 10);
        filtered = filtered.filter((item) => item.createdAt <= to);
      }
      const start = (params.page - 1) * params.pageSize;
      setData(filtered.slice(start, start + params.pageSize));
      setTotal(filtered.length);
      setPage(params.page);
      setLoading(false);
    }, 300);
  }, []);

  return (
    <EasySearchTable<OrderRecord>
      columns={orderColumns}
      searchFields={[
        { key: "name", labelKey: "订单名", type: "input", placeholder: "请输入订单名" },
        { key: "dateRange", labelKey: "创建时间", type: "dateRange", placeholder: "选择日期范围" },
      ]}
      data={data}
      total={total}
      page={page}
      pageSize={5}
      onSearch={handleSearch}
      loading={loading}
    />
  );
}

const propsData = [
  {
    name: "columns",
    type: "ColumnDef<T>[]",
    description: "列定义数组，配置表头和单元格渲染",
  },
  {
    name: "searchFields",
    type: "SearchFieldDef[]",
    description: "搜索表单字段配置，支持 input、select 和 dateRange 类型",
  },
  {
    name: "data",
    type: "T[]",
    description: "当前页数据",
  },
  {
    name: "total",
    type: "number",
    description: "数据总数，用于分页计算",
  },
  {
    name: "page",
    type: "number",
    description: "当前页码",
  },
  {
    name: "pageSize",
    type: "number",
    description: "每页条数",
  },
  {
    name: "onSearch",
    type: "(params: SearchParams) => void",
    description: "搜索、翻页时的回调，参数包含 page、pageSize 及搜索条件",
  },
  {
    name: "loading",
    type: "boolean",
    default: "false",
    description: "是否显示加载状态",
  },
  {
    name: "defaultView",
    type: '"table" | "card" | "list"',
    default: '"table"',
    description: "默认数据展示视图模式",
  },
  {
    name: "toolbarLeft",
    type: "ReactNode",
    description: "工具栏左侧自定义内容",
  },
  {
    name: "onAdd",
    type: "() => void",
    description: "新增按钮点击回调，传入后自动显示新增按钮",
  },
  {
    name: "addLabel",
    type: "ReactNode",
    description: "新增按钮的文本",
  },
  {
    name: "showExport",
    type: "boolean",
    default: "false",
    description: "是否显示导出按钮",
  },
  {
    name: "exportFileName",
    type: "string",
    default: '"table-data.csv"',
    description: "导出文件名",
  },
  {
    name: "renderExportContent",
    type: "(ctx: EasySearchTableExportContext<T>) => ReactNode",
    description:
      "自定义导出面板渲染。ctx 包含 data、columns、searchValues、exportParams、close()、exportCurrentData() 等",
  },
  {
    name: "renderCard",
    type: "(record: T, columns: ColumnDef<T>[]) => ReactNode",
    description: "自定义卡片视图渲染。传入后视图切换器中会出现「卡片」选项",
  },
  {
    name: "renderListItem",
    type: "(record: T, columns: ColumnDef<T>[]) => ReactNode",
    description: "自定义列表视图渲染。传入后视图切换器中会出现「列表」选项",
  },
];

const columnDefData = [
  {
    name: "key",
    type: "string",
    description: "列唯一标识，对应数据字段名",
  },
  {
    name: "headerKey",
    type: "string",
    description: "列表头文本",
  },
  {
    name: "render",
    type: "(value: unknown, record: T) => ReactNode",
    description: "自定义单元格渲染函数",
  },
  {
    name: "sortable",
    type: "boolean",
    default: "false",
    description: "是否支持排序",
  },
  {
    name: "width",
    type: "string | number",
    description: "列宽度",
  },
  {
    name: "defaultVisible",
    type: "boolean",
    default: "true",
    description: "默认是否可见",
  },
  {
    name: "hidden",
    type: "boolean",
    default: "false",
    description: "是否隐藏该列",
  },
];

const searchFieldDefData = [
  {
    name: "key",
    type: "string",
    description: "字段标识，对应搜索参数名",
  },
  {
    name: "labelKey",
    type: "string",
    description: "字段标签文本",
  },
  {
    name: "type",
    type: '"input" | "select" | "dateRange"',
    description: "字段类型",
  },
  {
    name: "placeholder",
    type: "string",
    description: "占位提示文本",
  },
  {
    name: "options",
    type: "Array<{ label: string; value: string }>",
    description: "select 类型时的选项列表",
  },
  {
    name: "showTime",
    type: "boolean",
    default: "false",
    description: "dateRange 类型时是否显示时间选择",
  },
];

export default function SearchTableDoc() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="font-heading text-3xl font-bold">
          SearchTable 搜索表格
        </h1>
        <p className="mt-2 text-muted-foreground">
          集成搜索表单、数据表格和分页的复合组件，适用于后台管理中常见的数据列表页。业务只需声明列和搜索字段即可完成典型
          CRUD 列表。
        </p>
      </div>

      <ComponentDemo
        title="基础用法"
        description="配置 columns 和 searchFields，通过 onSearch 回调获取搜索和分页参数。"
        code={`import { useState, useCallback } from "react";
import {
  EasySearchTable,
  type SearchFieldDef,
  type ColumnDef,
  type SearchParams,
} from "@easyfix/console-ui";

type UserRecord = {
  id: string;
  name: string;
  email: string;
  status: string;
};

const mockData: UserRecord[] = [
  { id: "1", name: "张三", email: "zhangsan@example.com", status: "active" },
  { id: "2", name: "李四", email: "lisi@example.com", status: "inactive" },
  // ...
];

const searchFields: SearchFieldDef[] = [
  { key: "name", labelKey: "姓名", type: "input", placeholder: "请输入姓名" },
  {
    key: "status",
    labelKey: "状态",
    type: "select",
    options: [
      { label: "活跃", value: "active" },
      { label: "停用", value: "inactive" },
    ],
  },
];

const columns: ColumnDef<UserRecord>[] = [
  { key: "id", headerKey: "ID", width: 80 },
  { key: "name", headerKey: "姓名" },
  { key: "email", headerKey: "邮箱" },
  {
    key: "status",
    headerKey: "状态",
    render: (value) => (
      <span className={value === "active" ? "text-green-600" : "text-muted-foreground"}>
        {value === "active" ? "活跃" : "停用"}
      </span>
    ),
  },
];

function MyPage() {
  const [data, setData] = useState(mockData.slice(0, 5));
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(mockData.length);
  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback((params: SearchParams) => {
    setLoading(true);
    // 模拟过滤与分页
    setTimeout(() => {
      let filtered = [...mockData];
      if (params.name) filtered = filtered.filter(i => i.name.includes(params.name as string));
      if (params.status) filtered = filtered.filter(i => i.status === params.status);
      const start = (params.page - 1) * params.pageSize;
      setData(filtered.slice(start, start + params.pageSize));
      setTotal(filtered.length);
      setPage(params.page);
      setLoading(false);
    }, 300);
  }, []);

  return (
    <EasySearchTable<UserRecord>
      columns={columns}
      searchFields={searchFields}
      data={data}
      total={total}
      page={page}
      pageSize={5}
      onSearch={handleSearch}
      loading={loading}
    />
  );
}`}
      >
        <div className="w-full">
          <SearchTableBasicDemo />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="高级导出"
        description="通过 renderExportContent 自定义导出弹出面板，支持导出当前页、后端全量导出、复制到剪贴板等多种导出方式。"
        code={`import {
  EasySearchTable,
  Button,
  type EasySearchTableExportContext,
} from "@easyfix/console-ui";

const renderExportContent = (ctx: EasySearchTableExportContext<UserRecord>) => (
  <div className="space-y-3 text-sm">
    <div className="font-medium">导出选项</div>
    <p className="text-muted-foreground">
      当前筛选条件下共 {ctx.data.length} 条数据
    </p>
    <div className="flex flex-col gap-2">
      <Button size="sm" variant="outline" className="w-full justify-start"
        onClick={() => { ctx.exportCurrentData(); ctx.close(); }}>
        导出当前页 (CSV)
      </Button>
      <Button size="sm" variant="outline" className="w-full justify-start"
        onClick={() => {
          // 调用后端导出 API，传入 ctx.exportParams
          fetch("/api/export", {
            method: "POST",
            body: JSON.stringify(ctx.exportParams),
          });
          ctx.close();
        }}>
        导出全部数据 (后端)
      </Button>
      <Button size="sm" variant="outline" className="w-full justify-start"
        onClick={() => {
          const headers = ctx.columns.map(c => c.headerKey);
          const rows = ctx.data.map(r =>
            ctx.columns.map(c => String(r[c.key] ?? ""))
          );
          const content = [headers, ...rows].map(r => r.join("\\t")).join("\\n");
          navigator.clipboard.writeText(content);
          ctx.close();
        }}>
        复制到剪贴板
      </Button>
    </div>
  </div>
);

<EasySearchTable
  columns={columns}
  searchFields={searchFields}
  data={data}
  total={total}
  page={page}
  pageSize={5}
  onSearch={handleSearch}
  loading={loading}
  showExport
  renderExportContent={renderExportContent}
/>`}
      >
        <div className="w-full">
          <SearchTableExportDemo />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="视图切换"
        description="传入 renderCard 和 renderListItem 后，工具栏自动出现分段切换器（SegmentedControl），可在表格、卡片、列表之间切换。若未传入某视图的渲染函数，则该选项自动隐藏。"
        code={`<EasySearchTable<OrderRecord>
  columns={orderColumns}
  searchFields={searchFields}
  data={data}
  total={total}
  page={page}
  pageSize={5}
  onSearch={handleSearch}
  loading={loading}
  renderCard={(record) => (
    <div className="rounded-lg border p-4 shadow-sm">
      <div className="mb-2 font-semibold">{record.name}</div>
      <div className="text-sm">¥{record.amount}</div>
    </div>
  )}
  renderListItem={(record) => (
    <div className="flex items-center justify-between rounded-lg border p-4">
      <div className="font-semibold">{record.name}</div>
      <span>¥{record.amount}</span>
    </div>
  )}
/>`}
      >
        <div className="w-full">
          <SearchTableViewDemo />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="时间范围搜索"
        description="搜索字段支持 dateRange 类型，可使用日期范围选择器筛选数据。"
        code={`const searchFields: SearchFieldDef[] = [
  { key: "name", labelKey: "订单名", type: "input", placeholder: "请输入订单名" },
  { key: "dateRange", labelKey: "创建时间", type: "dateRange", placeholder: "选择日期范围" },
];

<EasySearchTable<OrderRecord>
  columns={orderColumns}
  searchFields={searchFields}
  data={data}
  total={total}
  page={page}
  pageSize={5}
  onSearch={handleSearch}
  loading={loading}
/>`}
      >
        <div className="w-full">
          <SearchTableDateRangeDemo />
        </div>
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">API</h2>

        <h3 className="mb-2 mt-6 text-lg font-medium">
          EasySearchTable&lt;T&gt;
        </h3>
        <PropsTable data={propsData} />

        <h3 className="mb-2 mt-6 text-lg font-medium">ColumnDef&lt;T&gt;</h3>
        <PropsTable data={columnDefData} />

        <h3 className="mb-2 mt-6 text-lg font-medium">SearchFieldDef</h3>
        <PropsTable data={searchFieldDefData} />
      </div>
    </div>
  );
}
