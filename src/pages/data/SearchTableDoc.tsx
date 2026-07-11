import { useState, useCallback } from "react";
import {
  EasySearchTable,
  Button,
  Input,
  NumberField,
  NumberFieldGroup,
  NumberFieldInput,
  NumberFieldDecrement,
  NumberFieldIncrement,
  type SearchFieldDef,
  type ColumnDef,
  type SearchParams,
  type EasySearchTableExportContext,
  type SortState,
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

function SearchTableToolbarDemo() {
  const [data, setData] = useState<UserRecord[]>(allData.slice(0, 5));
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(allData.length);
  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback((params: SearchParams) => {
    setLoading(true);
    setTimeout(() => {
      let filtered = [...allData];
      if (params.name) filtered = filtered.filter((item) => item.name.includes(params.name as string));
      if (params.status) filtered = filtered.filter((item) => item.status === params.status);
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
      toolbarActions={
        <div className="flex items-center gap-2">
          <Button size="sm" onClick={() => alert("新增")}>
            新增
          </Button>
          <Button size="sm" variant="outline" onClick={() => alert("批量删除")}>
            批量删除
          </Button>
        </div>
      }
    />
  );
}

function SearchTableSearchModeDemo() {
  const [data, setData] = useState<UserRecord[]>(allData.slice(0, 5));
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(allData.length);
  const [loading, setLoading] = useState(false);
  const [searchMode, setSearchMode] = useState<"auto" | "manual">("auto");
  const [lastParams, setLastParams] = useState<SearchParams>({
    page: 1,
    pageSize: 5,
  });

  const handleSearch = useCallback((params: SearchParams) => {
    setLoading(true);
    setLastParams(params);
    setTimeout(() => {
      let filtered = [...allData];
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
    <div className="w-full space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
        <span className="text-muted-foreground">
          当前搜索模式：
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">
            {searchMode}
          </code>
        </span>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant={searchMode === "auto" ? "default" : "outline"}
            onClick={() => setSearchMode("auto")}
          >
            auto
          </Button>
          <Button
            size="sm"
            variant={searchMode === "manual" ? "default" : "outline"}
            onClick={() => setSearchMode("manual")}
          >
            manual
          </Button>
        </div>
      </div>
      <EasySearchTable<UserRecord>
        columns={columns}
        searchFields={searchFields}
        searchMode={searchMode}
        data={data}
        total={total}
        page={page}
        pageSize={5}
        onSearch={handleSearch}
        loading={loading}
      />
      <div className="text-xs text-muted-foreground">
        最近一次 onSearch 参数：
        <code className="ml-1 break-all rounded bg-muted px-1.5 py-0.5 text-foreground">
          {JSON.stringify(lastParams)}
        </code>
      </div>
    </div>
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

function SearchTableCustomFieldDemo() {
  const [data, setData] = useState<UserRecord[]>(allData.slice(0, 5));
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(allData.length);
  const [loading, setLoading] = useState(false);

  const customSearchFields: SearchFieldDef[] = [
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
    {
      key: "minId",
      labelKey: "最小ID",
      type: "custom",
      render: (value: unknown, onChange: (v: unknown) => void) => (
        <NumberField
          value={value as number | undefined}
          onValueChange={(v) => onChange(v)}
          min={0}
        >
          <NumberFieldGroup>
            <NumberFieldDecrement />
            <NumberFieldInput placeholder="最小 ID" />
            <NumberFieldIncrement />
          </NumberFieldGroup>
        </NumberField>
      ),
    },
    {
      key: "keyword",
      labelKey: "关键词",
      type: "custom",
      render: (value: unknown, onChange: (v: unknown) => void) => (
        <Input
          placeholder="自定义：输入邮箱关键词"
          value={(value as string) ?? ""}
          onChange={(e) => onChange(e.target.value)}
          className="border-dashed"
        />
      ),
    },
  ];

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
        filtered = filtered.filter((item) => item.status === params.status);
      }
      if (params.minId) {
        filtered = filtered.filter(
          (item) => Number(item.id) >= (params.minId as number),
        );
      }
      if (params.keyword) {
        filtered = filtered.filter((item) =>
          item.email.includes(params.keyword as string),
        );
      }
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
      searchFields={customSearchFields}
      data={data}
      total={total}
      page={page}
      pageSize={5}
      onSearch={handleSearch}
      loading={loading}
    />
  );
}

type ManyColRecord = {
  id: string;
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col5: string;
  col6: string;
  col7: string;
  col8: string;
  col9: string;
  col10: string;
};

const manyColData: ManyColRecord[] = Array.from({ length: 8 }, (_, i) => ({
  id: String(i + 1),
  col1: `数据A-${i + 1}`,
  col2: `数据B-${i + 1}`,
  col3: `数据C-${i + 1}`,
  col4: `数据D-${i + 1}`,
  col5: `数据E-${i + 1}`,
  col6: `数据F-${i + 1}`,
  col7: `数据G-${i + 1}`,
  col8: `数据H-${i + 1}`,
  col9: `数据I-${i + 1}`,
  col10: `数据J-${i + 1}`,
}));

const manyColumns: ColumnDef<ManyColRecord>[] = [
  { key: "id", headerKey: "ID", width: 60, fixed: "left" },
  { key: "col1", headerKey: "字段A", width: 120 },
  { key: "col2", headerKey: "字段B", width: 120 },
  { key: "col3", headerKey: "字段C", width: 120 },
  { key: "col4", headerKey: "字段D", width: 120 },
  { key: "col5", headerKey: "字段E", width: 120 },
  { key: "col6", headerKey: "字段F", width: 120 },
  { key: "col7", headerKey: "字段G", width: 120 },
  { key: "col8", headerKey: "字段H", width: 120 },
  { key: "col9", headerKey: "字段I", width: 120 },
  { key: "col10", headerKey: "字段J", width: 120, fixed: "right" },
];

function SearchTableManyColumnsDemo() {
  const [data, setData] = useState<ManyColRecord[]>(manyColData.slice(0, 5));
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(manyColData.length);
  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback((params: SearchParams) => {
    setLoading(true);
    setTimeout(() => {
      let filtered = [...manyColData];
      if (params.keyword) {
        filtered = filtered.filter((item) =>
          item.col1.includes(params.keyword as string),
        );
      }
      const start = (params.page - 1) * params.pageSize;
      setData(filtered.slice(start, start + params.pageSize));
      setTotal(filtered.length);
      setPage(params.page);
      setLoading(false);
    }, 300);
  }, []);

  return (
    <EasySearchTable<ManyColRecord>
      columns={manyColumns}
      searchFields={[
        { key: "keyword", labelKey: "关键词", type: "input", placeholder: "搜索字段A" },
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

function SearchTableSortDemo() {
  const [data, setData] = useState<UserRecord[]>(allData.slice(0, 5));
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(allData.length);
  const [loading, setLoading] = useState(false);

  const sortableColumns: ColumnDef<UserRecord>[] = [
    { key: "id", headerKey: "ID", width: 80, sortable: true },
    { key: "name", headerKey: "姓名", sortable: true },
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

  const handleSearch = useCallback((params: SearchParams) => {
    setLoading(true);
    setTimeout(() => {
      let filtered = [...allData];
      if (params.name) {
        filtered = filtered.filter((item) => item.name.includes(params.name as string));
      }
      const start = (params.page - 1) * params.pageSize;
      setData(filtered.slice(start, start + params.pageSize));
      setTotal(filtered.length);
      setPage(params.page);
      setLoading(false);
    }, 300);
  }, []);

  const handleSort = useCallback((sort: SortState) => {
    console.log("服务端排序参数:", sort);
  }, []);

  return (
    <EasySearchTable<UserRecord>
      columns={sortableColumns}
      searchFields={searchFields}
      data={data}
      total={total}
      page={page}
      pageSize={5}
      onSearch={handleSearch}
      loading={loading}
      onSort={handleSort}
    />
  );
}

function SearchTableDefaultViewsDemo() {
  const [data, setData] = useState<OrderRecord[]>(orderData.slice(0, 6));
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
      ]}
      data={data}
      total={total}
      page={page}
      pageSize={6}
      onSearch={handleSearch}
      loading={loading}
      defaultView="card"
      views={["table", "card", "list"]}
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
    description:
      "搜索表单字段配置，支持 input、select、dateRange 和 custom 类型。input 内置清空按钮；select 会自动在首项追加 i18n 文案的“全部”选项，值为 \"\"",
  },
  {
    name: "searchMode",
    type: '"auto" | "manual"',
    default: '"auto"',
    description:
      "搜索触发模式。auto 会在 select/dateRange/custom 变更或 input 失焦时自动触发 onSearch；manual 仅通过搜索按钮或 input 回车触发",
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
    name: "views",
    type: 'SearchTableView[]',
    description: "显式指定可用的视图列表。未传时自动根据 renderCard/renderListItem 推断",
  },
  {
    name: "toolbarActions",
    type: "ReactNode",
    description:
      "工具栏操作区插槽，用于放置自定义操作按钮（新增、批量操作等）。小屏或移动端视图下，搜索的重置、搜索、展开/收起按钮会渲染在该区域右侧，并保持垂直对齐与一致间距",
  },
  {
    name: "showExport",
    type: "boolean",
    default: "false",
    description: "是否显示导出按钮，导出按钮位于列配置按钮左侧",
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
  {
    name: "pageSizeOptions",
    type: "number[]",
    default: "[10, 20, 50, 100]",
    description: "每页条数选项列表",
  },
  {
    name: "showPageSizeSelector",
    type: "boolean",
    default: "true",
    description: "是否显示每页条数选择器",
  },
  {
    name: "showPageJumper",
    type: "boolean",
    default: "true",
    description: "是否显示跳转页码输入框",
  },
  {
    name: "defaultSort",
    type: "SortState",
    description: "初始排序状态，格式为 { key: string; order: 'asc' | 'desc' | null }",
  },
  {
    name: "onSort",
    type: "(sort: SortState) => void",
    description: "列排序回调（服务端排序模式）。传入后点击列头只触发回调，不做客户端排序；未传时自动对当前页数据做客户端排序",
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
    description: "是否支持排序。点击列头切换 asc → desc → 无排序。未传 onSort 时自动做客户端排序，传入 onSort 则触发回调由外部控制",
  },
  {
    name: "width",
    type: "string | number",
    description: "列宽度。设置 fixed 时建议明确指定 width",
  },
  {
    name: "fixed",
    type: '"left" | "right"',
    description: "将列固定在表格左侧或右侧，水平滚动时保持可见",
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
    type: '"input" | "select" | "dateRange" | "custom"',
    description:
      "字段类型。input 类型有右侧清空按钮；select 类型首项自动为“全部”（value: \"\"）；custom 类型可注入任意组件",
  },
  {
    name: "placeholder",
    type: "string",
    description: "占位提示文本",
  },
  {
    name: "colSpan",
    type: "number",
    description: "该字段在栅格中占用的列数，默认为 1",
  },
  {
    name: "options",
    type: "Array<{ label: string; value: string }>",
    description:
      "select 类型时的业务选项列表。组件会自动在列表前增加“全部”选项，value 为空字符串，无需在 options 中重复声明",
  },
  {
    name: "showTime",
    type: "boolean",
    default: "false",
    description: "dateRange 类型时是否显示时间选择",
  },
  {
    name: "render",
    type: "(value: unknown, onChange: (value: unknown) => void) => ReactNode",
    description: "custom 类型时的渲染函数，接收当前值和变更回调",
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
          CRUD 列表。支持 input、select、dateRange 和 custom（自定义组件）四种搜索字段类型，支持 auto/manual 两种搜索触发模式，
          input 字段内置清空按钮，select 字段自动提供“全部”选项，小屏视图下会将搜索操作按钮收敛到工具栏操作区，以及表格、卡片、列表三种数据视图。
        </p>
      </div>

      <ComponentDemo
        title="基础用法"
        description="配置 columns 和 searchFields，通过 onSearch 回调获取搜索和分页参数。input 搜索框有右侧清空按钮；select 搜索框会自动在首项提供“全部”（value 为空字符串）。"
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
        title="工具栏操作插槽"
        description="通过 toolbarActions 插槽在工具栏左侧放置自定义操作按钮，如新增、批量删除等。小屏或移动端视图下，搜索表单底部的重置、搜索、展开/收起按钮会隐藏，并自动渲染到 toolbarActions 右侧，和自定义操作保持同一行的垂直对齐与间距。"
        code={`import { EasySearchTable, Button } from "@easyfix/console-ui";
import { Plus, Trash2 } from "lucide-react";

<EasySearchTable
  columns={columns}
  searchFields={searchFields}
  data={data}
  total={total}
  page={page}
  pageSize={5}
  onSearch={handleSearch}
  toolbarActions={
    <>
      <Button size="sm" onClick={() => alert("新增")}>
        <Plus className="size-4" />
        新增
      </Button>
      <Button size="sm" variant="outline" onClick={() => alert("批量删除")}>
        <Trash2 className="size-4" />
        批量删除
      </Button>
    </>
  }
/>`}
      >
        <div className="w-full">
          <SearchTableToolbarDemo />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="搜索触发模式"
        description="searchMode 默认为 auto：select、dateRange、custom 变更时立即触发 onSearch，input 在失焦或点击清空按钮时触发。设置为 manual 后，仅点击搜索按钮或在 input 中按 Enter 时触发 onSearch。"
        code={`const [searchMode, setSearchMode] = useState<"auto" | "manual">("auto");

<EasySearchTable<UserRecord>
  columns={columns}
  searchFields={searchFields}
  searchMode={searchMode}
  data={data}
  total={total}
  page={page}
  pageSize={5}
  onSearch={(params) => {
    // auto:
    // - select / dateRange / custom 变更后立即进入这里
    // - input 失焦后进入这里
    // - input 清空按钮点击后进入这里
    //
    // manual:
    // - 点击“搜索”按钮或 input 按 Enter 后进入这里
    fetchData(params);
  }}
/>`}
      >
        <div className="w-full">
          <SearchTableSearchModeDemo />
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

      <ComponentDemo
        title="自定义搜索组件"
        description="通过 type: 'custom' 注入任意自定义搜索组件，如 NumberField、带特殊样式的 Input 等。render 回调接收 (value, onChange) 用于双向绑定。"
        code={`const searchFields: SearchFieldDef[] = [
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
  {
    key: "minId",
    labelKey: "最小ID",
    type: "custom",
    render: (value, onChange) => (
      <NumberField value={value as number} onValueChange={onChange} min={0}>
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput placeholder="最小 ID" />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>
    ),
  },
  {
    key: "keyword",
    labelKey: "关键词",
    type: "custom",
    render: (value, onChange) => (
      <Input
        placeholder="自定义：输入邮箱关键词"
        value={(value as string) ?? ""}
        onChange={(e) => onChange(e.target.value)}
        className="border-dashed"
      />
    ),
  },
];`}
      >
        <div className="w-full">
          <SearchTableCustomFieldDemo />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="列排序"
        description="在 ColumnDef 中设置 sortable: true 启用列排序。点击列头循环切换升序 → 降序 → 无排序。未传 onSort 时自动对当前页数据做客户端排序；传入 onSort 则触发回调，由外部控制数据（服务端排序）。"
        code={`const columns: ColumnDef<UserRecord>[] = [
  { key: "id", headerKey: "ID", width: 80, sortable: true },
  { key: "name", headerKey: "姓名", sortable: true },
  { key: "email", headerKey: "邮箱" },
];

// 服务端排序：传入 onSort 回调
<EasySearchTable
  columns={columns}
  onSort={(sort) => {
    // sort: { key: "name", order: "asc" | "desc" | null }
    fetchData({ ...searchParams, sortKey: sort.key, sortOrder: sort.order });
  }}
  // ...
/>

// 客户端排序：不传 onSort，自动对当前页数据排序
<EasySearchTable columns={columns} />`}
      >
        <div className="w-full">
          <SearchTableSortDemo />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="多列表格 + 固定列"
        description="当列数较多时（如 10+ 列），表格自动在容器内水平滚动，不会撑破页面布局。通过 fixed: 'left' | 'right' 可将关键列固定在表格两侧，滚动时始终可见。配合列配置可以按需显隐列。"
        code={`const manyColumns: ColumnDef<Record>[] = [
  { key: "id", headerKey: "ID", width: 60, fixed: "left" },
  { key: "col1", headerKey: "字段A", width: 120 },
  { key: "col2", headerKey: "字段B", width: 120 },
  // ... 更多列
  { key: "col10", headerKey: "字段J", width: 120, fixed: "right" },
];

<EasySearchTable
  columns={manyColumns}
  searchFields={[
    { key: "keyword", labelKey: "关键词", type: "input", placeholder: "搜索字段A" },
  ]}
  data={data}
  total={total}
  page={page}
  pageSize={5}
  onSearch={handleSearch}
  loading={loading}
/>`}
      >
        <div className="w-full">
          <SearchTableManyColumnsDemo />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="内置卡片 / 列表视图"
        description="通过 views 属性启用内置的卡片和列表视图，无需传入 renderCard / renderListItem 即可使用默认模板。默认模板以首列作为标题，其余列展示为详情。"
        code={`<EasySearchTable<OrderRecord>
  columns={orderColumns}
  searchFields={searchFields}
  data={data}
  total={total}
  page={page}
  pageSize={6}
  onSearch={handleSearch}
  loading={loading}
  defaultView="card"
  views={["table", "card", "list"]}
/>`}
      >
        <div className="w-full">
          <SearchTableDefaultViewsDemo />
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
