import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogPopup,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  Button,
} from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { ExternalDocLink } from "@/components/ExternalDocLink";
import { PropsTable } from "@/components/PropsTable";
import { ComponentDocPage } from "@/components/ComponentDocPage";

const alertDialogPropsData = [
  {
    name: "defaultOpen",
    type: "boolean",
    default: "false",
    description: "非受控模式下对话框是否默认打开",
  },
  {
    name: "open",
    type: "boolean",
    description: "受控模式下对话框的打开状态",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    description: "打开状态变化时的回调",
  },
];

const popupPropsData = [
  {
    name: "bottomStickOnMobile",
    type: "boolean",
    default: "true",
    description: "移动端是否底部吸附展示",
  },
  {
    name: "className",
    type: "string",
    description: "自定义样式类名",
  },
];

const footerPropsData = [
  {
    name: "variant",
    type: '"default" | "bare"',
    default: '"default"',
    description: "底部区域样式变体",
  },
];

const actionPropsData = [
  {
    name: "variant",
    type: '"default" | "destructive" | "outline" | "ghost"',
    default: '"default"',
    description: "按钮样式变体",
  },
  {
    name: "children",
    type: "React.ReactNode",
    description: "按钮文本内容",
  },
];

export default function AlertDialogDoc() {
  return (
    <ComponentDocPage>
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">
          AlertDialog 确认对话框
        </h1>
        <p className="mt-2 text-muted-foreground">
          确认对话框组件，基于{" "}
          <ExternalDocLink
            href="https://base-ui.com/react/components/alert-dialog"
            label="Base UI Alert Dialog 官方文档"
          >
            @base-ui/react/alert-dialog
          </ExternalDocLink>{" "}
          封装，用于需要用户明确确认的操作场景。与 Dialog
          不同，AlertDialog 不会被点击遮罩或按 ESC 键关闭。
        </p>
      </div>

      <ComponentDemo
        title="基础确认对话框"
        description="标准的确认对话框，包含标题、描述和确认/取消按钮。"
        code={`import {
  AlertDialog, AlertDialogTrigger, AlertDialogPopup,
  AlertDialogHeader, AlertDialogFooter,
  AlertDialogTitle, AlertDialogDescription,
  AlertDialogAction, AlertDialogCancel, Button,
} from "@easyfix/console-ui";

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">提交确认</Button>
  </AlertDialogTrigger>
  <AlertDialogPopup>
    <AlertDialogHeader>
      <AlertDialogTitle>确认提交</AlertDialogTitle>
      <AlertDialogDescription>
        提交后数据将被保存，确定要继续吗？
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>取消</AlertDialogCancel>
      <AlertDialogAction>确认</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogPopup>
</AlertDialog>`}
      >
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">提交确认</Button>
          </AlertDialogTrigger>
          <AlertDialogPopup>
            <AlertDialogHeader>
              <AlertDialogTitle>确认提交</AlertDialogTitle>
              <AlertDialogDescription>
                提交后数据将被保存，确定要继续吗？
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>取消</AlertDialogCancel>
              <AlertDialogAction>确认</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogPopup>
        </AlertDialog>
      </ComponentDemo>

      <ComponentDemo
        title="危险操作确认"
        description="使用 destructive 变体提示用户当前操作具有破坏性。"
        code={`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">删除账户</Button>
  </AlertDialogTrigger>
  <AlertDialogPopup>
    <AlertDialogHeader>
      <AlertDialogTitle>确认删除账户</AlertDialogTitle>
      <AlertDialogDescription>
        此操作不可撤销。账户数据删除后无法恢复。
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>取消</AlertDialogCancel>
      <AlertDialogAction variant="destructive">
        确认删除
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogPopup>
</AlertDialog>`}
      >
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">删除账户</Button>
          </AlertDialogTrigger>
          <AlertDialogPopup>
            <AlertDialogHeader>
              <AlertDialogTitle>确认删除账户</AlertDialogTitle>
              <AlertDialogDescription>
                此操作不可撤销。账户数据删除后无法恢复。
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>取消</AlertDialogCancel>
              <AlertDialogAction variant="destructive">
                确认删除
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogPopup>
        </AlertDialog>
      </ComponentDemo>

      <ComponentDemo
        title="无底部边框样式"
        description='使用 variant="bare" 去除 Footer 的顶部分割线和背景色。'
        code={`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">退出登录</Button>
  </AlertDialogTrigger>
  <AlertDialogPopup>
    <AlertDialogHeader>
      <AlertDialogTitle>退出登录</AlertDialogTitle>
      <AlertDialogDescription>
        确认退出当前账户？
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter variant="bare">
      <AlertDialogCancel>取消</AlertDialogCancel>
      <AlertDialogAction>退出</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogPopup>
</AlertDialog>`}
      >
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">退出登录</Button>
          </AlertDialogTrigger>
          <AlertDialogPopup>
            <AlertDialogHeader>
              <AlertDialogTitle>退出登录</AlertDialogTitle>
              <AlertDialogDescription>
                确认退出当前账户？
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter variant="bare">
              <AlertDialogCancel>取消</AlertDialogCancel>
              <AlertDialogAction>退出</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogPopup>
        </AlertDialog>
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">API</h2>
        <h3 className="mb-3 text-lg font-medium">AlertDialog</h3>
        <PropsTable data={alertDialogPropsData} />
        <h3 className="mb-3 mt-6 text-lg font-medium">AlertDialogPopup</h3>
        <PropsTable data={popupPropsData} />
        <h3 className="mb-3 mt-6 text-lg font-medium">AlertDialogFooter</h3>
        <PropsTable data={footerPropsData} />
        <h3 className="mb-3 mt-6 text-lg font-medium">AlertDialogAction</h3>
        <PropsTable data={actionPropsData} />
      </div>
    </div>
    </ComponentDocPage>
  );
}
