import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
  CardFrame,
  CardFrameHeader,
  CardFrameTitle,
  CardFrameDescription,
  CardFrameAction,
  CardFrameFooter,
} from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

const componentList = [
  { name: "Card", description: "卡片根容器，提供圆角、边框和阴影" },
  { name: "CardHeader", description: "卡片头部区域，内含标题、描述和操作" },
  { name: "CardTitle", description: "卡片标题" },
  { name: "CardDescription", description: "卡片描述文本" },
  { name: "CardAction", description: "卡片头部右侧操作区域" },
  { name: "CardContent", description: "卡片主内容区域（别名 CardPanel）" },
  { name: "CardFooter", description: "卡片底部区域" },
  { name: "CardFrame", description: "Frame 风格卡片容器，带有 muted 背景" },
  { name: "CardFrameHeader", description: "Frame 卡片头部区域" },
  { name: "CardFrameTitle", description: "Frame 卡片标题" },
  { name: "CardFrameDescription", description: "Frame 卡片描述" },
  { name: "CardFrameAction", description: "Frame 卡片操作区域" },
  { name: "CardFrameFooter", description: "Frame 卡片底部区域" },
];

const propsData = [
  {
    name: "className",
    type: "string",
    description: "自定义样式类名，会通过 cn() 与默认样式合并",
  },
  {
    name: "render",
    type: "ReactElement",
    description: "替换底层渲染元素（基于 @base-ui/react useRender）",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "子元素",
  },
];

export default function CardDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">Card 卡片</h1>
        <p className="mt-2 text-muted-foreground">
          通用容器组件，用于将相关内容和操作分组展示。支持标准卡片和 Frame
          两种风格。
        </p>
      </div>

      <ComponentDemo
        title="基本结构"
        description="CardHeader、CardContent 和 CardFooter 组织卡片内容。"
        code={`import {
  Card, CardHeader, CardTitle, CardDescription,
  CardContent, CardFooter,
} from "@easyfix/console-ui";

<Card>
  <CardHeader>
    <CardTitle>项目概览</CardTitle>
    <CardDescription>查看当前项目的关键指标与运行状态。</CardDescription>
  </CardHeader>
  <CardContent>
    <p>这里是卡片的主要内容区域。</p>
  </CardContent>
  <CardFooter>
    <span className="text-sm text-muted-foreground">更新于 2 分钟前</span>
  </CardFooter>
</Card>`}
      >
        <Card className="w-full">
          <CardHeader>
            <CardTitle>项目概览</CardTitle>
            <CardDescription>
              查看当前项目的关键指标与运行状态。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">这里是卡片的主要内容区域。</p>
          </CardContent>
          <CardFooter>
            <span className="text-sm text-muted-foreground">
              更新于 2 分钟前
            </span>
          </CardFooter>
        </Card>
      </ComponentDemo>

      <ComponentDemo
        title="带操作按钮的卡片"
        description="CardAction 位于 CardHeader 的操作区。"
        code={`import {
  Card, CardHeader, CardTitle, CardDescription,
  CardAction, CardContent,
} from "@easyfix/console-ui";

<Card>
  <CardHeader>
    <CardTitle>通知设置</CardTitle>
    <CardDescription>管理通知偏好。</CardDescription>
    <CardAction>
      <button className="rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground">
        保存
      </button>
    </CardAction>
  </CardHeader>
  <CardContent>
    <p>卡片内容区域...</p>
  </CardContent>
</Card>`}
      >
        <Card className="w-full">
          <CardHeader>
            <CardTitle>通知设置</CardTitle>
            <CardDescription>管理通知偏好。</CardDescription>
            <CardAction>
              <button
                type="button"
                className="rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground"
              >
                保存
              </button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className="text-sm">在这里配置邮件通知、应用内通知等选项。</p>
          </CardContent>
        </Card>
      </ComponentDemo>

      <ComponentDemo
        title="Frame 样式"
        description="CardFrame 提供带 muted 背景的简化容器，并可嵌套 Card。"
        code={`import {
  CardFrame, CardFrameHeader, CardFrameTitle,
  CardFrameDescription, CardFrameAction, CardFrameFooter,
  Card, CardHeader, CardTitle, CardContent,
} from "@easyfix/console-ui";

<CardFrame>
  <CardFrameHeader>
    <CardFrameTitle>团队成员</CardFrameTitle>
    <CardFrameDescription>管理团队中的成员与权限。</CardFrameDescription>
    <CardFrameAction>
      <button>邀请成员</button>
    </CardFrameAction>
  </CardFrameHeader>
  <Card>
    <CardHeader>
      <CardTitle>成员列表</CardTitle>
    </CardHeader>
    <CardContent>内容...</CardContent>
  </Card>
  <CardFrameFooter>
    <span>共 5 位成员</span>
  </CardFrameFooter>
</CardFrame>`}
      >
        <CardFrame className="w-full">
          <CardFrameHeader>
            <CardFrameTitle>团队成员</CardFrameTitle>
            <CardFrameDescription>
              管理团队中的成员与权限。
            </CardFrameDescription>
            <CardFrameAction>
              <button
                type="button"
                className="rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground"
              >
                邀请成员
              </button>
            </CardFrameAction>
          </CardFrameHeader>
          <Card>
            <CardHeader>
              <CardTitle>成员列表</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span>张三</span>
                  <span className="text-muted-foreground">管理员</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>李四</span>
                  <span className="text-muted-foreground">开发者</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>王五</span>
                  <span className="text-muted-foreground">查看者</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <CardFrameFooter>
            <span className="text-sm text-muted-foreground">共 3 位成员</span>
          </CardFrameFooter>
        </CardFrame>
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">通用 Props</h2>
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
