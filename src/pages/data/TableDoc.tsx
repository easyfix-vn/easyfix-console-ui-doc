import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

const invoices = [
  { id: "INV-001", status: "已付款", method: "微信支付", amount: "¥250.00" },
  { id: "INV-002", status: "待付款", method: "支付宝", amount: "¥150.00" },
  { id: "INV-003", status: "已付款", method: "银行转账", amount: "¥350.00" },
  { id: "INV-004", status: "已退款", method: "微信支付", amount: "¥450.00" },
  { id: "INV-005", status: "已付款", method: "支付宝", amount: "¥550.00" },
];

const componentList = [
  { name: "Table", description: "表格根容器，支持 variant 属性" },
  { name: "TableHeader", description: "表头区域 (<thead>)" },
  { name: "TableBody", description: "表体区域 (<tbody>)" },
  { name: "TableFooter", description: "表尾区域 (<tfoot>)" },
  { name: "TableRow", description: "表格行 (<tr>)" },
  { name: "TableHead", description: "表头单元格 (<th>)" },
  { name: "TableCell", description: "表体单元格 (<td>)" },
  { name: "TableCaption", description: "表格标题 (<caption>)" },
];

const propsData = [
  {
    name: "variant",
    type: '"default" | "card"',
    default: '"default"',
    description: "表格样式变体。card 模式下单元格带背景和圆角",
  },
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
];

export default function TableDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">Table 表格</h1>
        <p className="mt-2 text-muted-foreground">
          用于展示结构化数据的表格组件，基于原生表格元素封装，支持默认与
          Card 两种视觉风格。
        </p>
      </div>

      <ComponentDemo
        title="基本结构"
        description="Table、TableHeader、TableBody 和 TableRow 组成基础表格。"
        code={`import {
  Table, TableHeader, TableBody, TableRow,
  TableHead, TableCell,
} from "@easyfix/console-ui";

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>编号</TableHead>
      <TableHead>状态</TableHead>
      <TableHead>支付方式</TableHead>
      <TableHead className="text-right">金额</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>INV-001</TableCell>
      <TableCell>已付款</TableCell>
      <TableCell>微信支付</TableCell>
      <TableCell className="text-right">¥250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>编号</TableHead>
              <TableHead>状态</TableHead>
              <TableHead>支付方式</TableHead>
              <TableHead className="text-right">金额</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((inv) => (
              <TableRow key={inv.id}>
                <TableCell className="font-medium">{inv.id}</TableCell>
                <TableCell>{inv.status}</TableCell>
                <TableCell>{inv.method}</TableCell>
                <TableCell className="text-right">{inv.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ComponentDemo>

      <ComponentDemo
        title="带 Caption 和 Footer"
        description="TableCaption 提供标题，TableFooter 承载汇总行。"
        code={`<Table>
  <TableCaption>近期交易记录</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>编号</TableHead>
      <TableHead>状态</TableHead>
      <TableHead>支付方式</TableHead>
      <TableHead className="text-right">金额</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>...</TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={3}>合计</TableCell>
      <TableCell className="text-right">¥1,750.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>`}
      >
        <Table>
          <TableCaption>近期交易记录</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>编号</TableHead>
              <TableHead>状态</TableHead>
              <TableHead>支付方式</TableHead>
              <TableHead className="text-right">金额</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((inv) => (
              <TableRow key={inv.id}>
                <TableCell className="font-medium">{inv.id}</TableCell>
                <TableCell>{inv.status}</TableCell>
                <TableCell>{inv.method}</TableCell>
                <TableCell className="text-right">{inv.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>合计</TableCell>
              <TableCell className="text-right font-medium">
                ¥1,750.00
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </ComponentDemo>

      <ComponentDemo
        title="Card 风格表格"
        description='variant="card" 为单元格提供卡片式背景和圆角。'
        code={`<Table variant="card">
  <TableHeader>
    <TableRow>
      <TableHead>编号</TableHead>
      <TableHead>状态</TableHead>
      <TableHead>支付方式</TableHead>
      <TableHead className="text-right">金额</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>INV-001</TableCell>
      <TableCell>已付款</TableCell>
      <TableCell>微信支付</TableCell>
      <TableCell className="text-right">¥250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
      >
        <Table variant="card">
          <TableHeader>
            <TableRow>
              <TableHead>编号</TableHead>
              <TableHead>状态</TableHead>
              <TableHead>支付方式</TableHead>
              <TableHead className="text-right">金额</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((inv) => (
              <TableRow key={inv.id}>
                <TableCell className="font-medium">{inv.id}</TableCell>
                <TableCell>{inv.status}</TableCell>
                <TableCell>{inv.method}</TableCell>
                <TableCell className="text-right">{inv.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">Table API</h2>
        <PropsTable data={propsData} />
      </div>

      <div>
        <h2 className="mb-4 text-xl font-semibold">组件构成</h2>
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
