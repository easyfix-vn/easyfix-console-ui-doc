import {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertAction,
  Button,
} from "@easyfix/console-ui";
import {
  InfoIcon,
  CircleCheckIcon,
  TriangleAlertIcon,
  CircleAlertIcon,
} from "lucide-react";

import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";
import { ComponentDocPage } from "@/components/ComponentDocPage";

const propsData = [
  {
    name: "variant",
    type: '"default" | "info" | "success" | "warning" | "error"',
    default: '"default"',
    description: "提示样式变体",
  },
  {
    name: "className",
    type: "string",
    description: "自定义 CSS 类名",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "提示内容",
  },
];

export default function AlertDoc() {
  return (
    <ComponentDocPage>
    <div className="space-y-10">
      <div>
        <h1 className="font-heading text-3xl font-bold">Alert 提示</h1>
        <p className="mt-2 text-muted-foreground">
          展示需要持续关注的状态、风险或操作结果，支持语义变体和操作区。
        </p>
      </div>

      <ComponentDemo
        title="所有变体"
        description="Alert 提供 5 种变体，分别用于不同语义场景。"
        code={`import { Alert, AlertTitle, AlertDescription } from "@easyfix/console-ui";
import { InfoIcon, CircleCheckIcon, TriangleAlertIcon, CircleAlertIcon } from "lucide-react";

<Alert>
  <AlertTitle>默认提示</AlertTitle>
  <AlertDescription>这是一条默认提示信息。</AlertDescription>
</Alert>

<Alert variant="info">
  <InfoIcon />
  <AlertTitle>信息提示</AlertTitle>
  <AlertDescription>这是一条信息提示。</AlertDescription>
</Alert>

<Alert variant="success">
  <CircleCheckIcon />
  <AlertTitle>成功提示</AlertTitle>
  <AlertDescription>操作已成功完成。</AlertDescription>
</Alert>

<Alert variant="warning">
  <TriangleAlertIcon />
  <AlertTitle>警告提示</AlertTitle>
  <AlertDescription>存在潜在风险。</AlertDescription>
</Alert>

<Alert variant="error">
  <CircleAlertIcon />
  <AlertTitle>错误提示</AlertTitle>
  <AlertDescription>操作失败，可稍后重试。</AlertDescription>
</Alert>`}
      >
        <div className="w-full space-y-3">
          <Alert>
            <AlertTitle>默认提示</AlertTitle>
            <AlertDescription>这是一条默认提示信息。</AlertDescription>
          </Alert>
          <Alert variant="info">
            <InfoIcon />
            <AlertTitle>信息提示</AlertTitle>
            <AlertDescription>这是一条信息提示。</AlertDescription>
          </Alert>
          <Alert variant="success">
            <CircleCheckIcon />
            <AlertTitle>成功提示</AlertTitle>
            <AlertDescription>操作已成功完成。</AlertDescription>
          </Alert>
          <Alert variant="warning">
            <TriangleAlertIcon />
            <AlertTitle>警告提示</AlertTitle>
            <AlertDescription>存在潜在风险。</AlertDescription>
          </Alert>
          <Alert variant="error">
            <CircleAlertIcon />
            <AlertTitle>错误提示</AlertTitle>
            <AlertDescription>操作失败，可稍后重试。</AlertDescription>
          </Alert>
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="带标题和描述"
        description="组合 AlertTitle 和 AlertDescription 展示结构化信息。"
        code={`import { Alert, AlertTitle, AlertDescription } from "@easyfix/console-ui";
import { CircleCheckIcon } from "lucide-react";

<Alert variant="success">
  <CircleCheckIcon />
  <AlertTitle>部署成功</AlertTitle>
  <AlertDescription>
    应用已部署到生产环境，健康检查已通过。
  </AlertDescription>
</Alert>`}
      >
        <div className="w-full">
          <Alert variant="success">
            <CircleCheckIcon />
            <AlertTitle>部署成功</AlertTitle>
            <AlertDescription>
              应用已部署到生产环境，健康检查已通过。
            </AlertDescription>
          </Alert>
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="带操作按钮"
        description="使用 AlertAction 在提示中添加操作按钮。"
        code={`import { Alert, AlertTitle, AlertDescription, AlertAction, Button } from "@easyfix/console-ui";
import { TriangleAlertIcon } from "lucide-react";

<Alert variant="warning">
  <TriangleAlertIcon />
  <AlertTitle>存储空间不足</AlertTitle>
  <AlertDescription>
    存储空间已使用 90%，建议清理数据或调整配额。
  </AlertDescription>
  <AlertAction>
    <Button size="sm" variant="outline">升级套餐</Button>
  </AlertAction>
</Alert>`}
      >
        <div className="w-full">
          <Alert variant="warning">
            <TriangleAlertIcon />
            <AlertTitle>存储空间不足</AlertTitle>
            <AlertDescription>
              存储空间已使用 90%，建议清理数据或调整配额。
            </AlertDescription>
            <AlertAction>
              <Button size="sm" variant="outline">
                升级套餐
              </Button>
            </AlertAction>
          </Alert>
        </div>
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">API</h2>
        <PropsTable data={propsData} />
      </div>
    </div>
    </ComponentDocPage>
  );
}
