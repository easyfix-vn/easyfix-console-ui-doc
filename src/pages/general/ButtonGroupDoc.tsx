import { EasyButton, EasyButtonGroup } from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";
import { ComponentDocPage } from "@/components/ComponentDocPage";

const propsData = [
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: "排列方向",
  },
  {
    name: "attached",
    type: "boolean",
    default: "false",
    description: "是否紧凑连接（按钮之间无间距，边框圆角共享）",
  },
  {
    name: "className",
    type: "string",
    description: "自定义 CSS 类名",
  },
];

export default function ButtonGroupDoc() {
  return (
    <ComponentDocPage>
    <div className="space-y-10">
      <div>
        <h1 className="font-heading text-3xl font-bold">
          ButtonGroup 按钮组
        </h1>
        <p className="mt-2 text-muted-foreground">
          将多个 EasyButton 组合为一组，支持水平/垂直排列和紧凑连接模式。
        </p>
      </div>

      <ComponentDemo
        title="默认布局"
        description="默认水平排列，按钮之间保留间距。"
        code={`import { EasyButton, EasyButtonGroup } from "@easyfix/console-ui";

<EasyButtonGroup>
  <EasyButton variant="outline">取消</EasyButton>
  <EasyButton>确认</EasyButton>
</EasyButtonGroup>`}
      >
        <EasyButtonGroup>
          <EasyButton variant="outline">取消</EasyButton>
          <EasyButton>确认</EasyButton>
        </EasyButtonGroup>
      </ComponentDemo>

      <ComponentDemo
        title="紧凑连接"
        description="attached 启用紧凑连接与共享圆角。"
        code={`<EasyButtonGroup attached>
  <EasyButton variant="outline">左</EasyButton>
  <EasyButton variant="outline">中</EasyButton>
  <EasyButton variant="outline">右</EasyButton>
</EasyButtonGroup>`}
      >
        <EasyButtonGroup attached>
          <EasyButton variant="outline">左</EasyButton>
          <EasyButton variant="outline">中</EasyButton>
          <EasyButton variant="outline">右</EasyButton>
        </EasyButtonGroup>
      </ComponentDemo>

      <ComponentDemo
        title="垂直排列"
        description="orientation='vertical' 定义纵向布局。"
        code={`<EasyButtonGroup orientation="vertical" attached>
  <EasyButton variant="outline">上</EasyButton>
  <EasyButton variant="outline">中</EasyButton>
  <EasyButton variant="outline">下</EasyButton>
</EasyButtonGroup>`}
      >
        <EasyButtonGroup orientation="vertical" attached>
          <EasyButton variant="outline">上</EasyButton>
          <EasyButton variant="outline">中</EasyButton>
          <EasyButton variant="outline">下</EasyButton>
        </EasyButtonGroup>
      </ComponentDemo>

      <div>
        <h2 className="mb-4 text-xl font-semibold">API</h2>
        <PropsTable data={propsData} />
      </div>
    </div>
    </ComponentDocPage>
  );
}
