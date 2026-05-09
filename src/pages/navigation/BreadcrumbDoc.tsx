import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

const breadcrumbPropsData = [
  {
    name: "children",
    type: "React.ReactNode",
    description: "面包屑导航内容，通常包含 BreadcrumbList",
  },
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
];

const breadcrumbItemPropsData = [
  {
    name: "children",
    type: "React.ReactNode",
    description: "面包屑项的内容，通常为 BreadcrumbLink 或 BreadcrumbPage",
  },
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
];

const breadcrumbLinkPropsData = [
  {
    name: "href",
    type: "string",
    description: "链接地址",
  },
  {
    name: "render",
    type: "React.ReactElement",
    description: "自定义渲染元素，可用于集成路由组件",
  },
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
];

const breadcrumbSeparatorPropsData = [
  {
    name: "children",
    type: "React.ReactNode",
    description: "自定义分隔符内容，默认为 ChevronRight 图标",
  },
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
];

export default function BreadcrumbDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">Breadcrumb 面包屑</h1>
        <p className="mt-2 text-muted-foreground">
          面包屑导航组件，用于展示当前页面在层级结构中的位置，帮助用户快速回溯上级路径。
        </p>
      </div>

      <ComponentDemo
        title="基础面包屑"
        description="最基本的面包屑用法，展示页面层级关系。"
        code={`import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem,
  BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator,
} from "@easyfix/console-ui";

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">首页</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/settings">设置</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>个人资料</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
      >
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">首页</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/settings">设置</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>个人资料</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </ComponentDemo>

      <ComponentDemo
        title="自定义分隔符"
        description="通过 BreadcrumbSeparator 的 children 属性自定义分隔符。"
        code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">首页</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>/</BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbLink href="/products">产品</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>/</BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbPage>详情</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
      >
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">首页</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/products">产品</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>详情</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </ComponentDemo>

      <ComponentDemo
        title="带省略号"
        description="路径层级过深时，使用 BreadcrumbEllipsis 折叠中间层级。"
        code={`import { BreadcrumbEllipsis } from "@easyfix/console-ui";

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">首页</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbEllipsis />
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/docs/components">组件</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>面包屑</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
      >
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">首页</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbEllipsis />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs/components">组件</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>面包屑</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">API</h2>
        <h3 className="mb-3 text-lg font-medium">Breadcrumb</h3>
        <PropsTable data={breadcrumbPropsData} />
        <h3 className="mb-3 mt-6 text-lg font-medium">BreadcrumbItem</h3>
        <PropsTable data={breadcrumbItemPropsData} />
        <h3 className="mb-3 mt-6 text-lg font-medium">BreadcrumbLink</h3>
        <PropsTable data={breadcrumbLinkPropsData} />
        <h3 className="mb-3 mt-6 text-lg font-medium">BreadcrumbSeparator</h3>
        <PropsTable data={breadcrumbSeparatorPropsData} />
      </div>
    </div>
  );
}
