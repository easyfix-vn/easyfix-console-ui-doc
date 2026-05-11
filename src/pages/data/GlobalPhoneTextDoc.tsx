import { EasyGlobalPhoneText } from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

const propsData = [
  { name: "cc", type: "string", description: "区号，如 \"84\"、\"86\"" },
  { name: "phone", type: "string", description: "手机号码（不含区号）" },
  { name: "format", type: '"international" | "national"', default: '"international"', description: "显示格式：国际格式 (+84 xxx) 或国内格式 (0xxx)" },
  { name: "copyable", type: "boolean", default: "false", description: "是否可复制（复制内容始终为 E.164 国际格式）" },
  { name: "trunkPrefixMap", type: "Record<string, string>", description: "自定义 trunk prefix 映射，用于扩展更多国家的国内格式" },
  { name: "className", type: "string", description: "自定义样式类名" },
];

export default function GlobalPhoneTextDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">
          GlobalPhoneText 手机号展示
        </h1>
        <p className="mt-2 text-muted-foreground">
          格式化展示国际手机号，支持 International（国际格式，+CC）和 National（国内格式，trunk prefix）两种显示方式，并可开启一键复制。
        </p>
      </div>

      <ComponentDemo
        title="International 格式"
        description="区号前加 + 号，标准国际格式（E.164 可读版本）"
        code={`import { EasyGlobalPhoneText } from "@easyfix/console-ui";

<EasyGlobalPhoneText cc="84" phone="901234567" />
<EasyGlobalPhoneText cc="86" phone="13812345678" />`}
      >
        <div className="flex flex-col gap-3">
          <EasyGlobalPhoneText cc="84" phone="901234567" />
          <EasyGlobalPhoneText cc="86" phone="13812345678" />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="National 格式"
        description="使用 trunk prefix（国内长途前缀 0）替代 +CC，越南和中国均为 0 前缀"
        code={`<EasyGlobalPhoneText cc="84" phone="901234567" format="national" />
<EasyGlobalPhoneText cc="86" phone="13812345678" format="national" />`}
      >
        <div className="flex flex-col gap-3">
          <EasyGlobalPhoneText cc="84" phone="901234567" format="national" />
          <EasyGlobalPhoneText cc="86" phone="13812345678" format="national" />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="可复制"
        description="开启 copyable 后显示复制按钮，复制内容始终为 E.164 国际格式（如 +84901234567）"
        code={`<EasyGlobalPhoneText cc="84" phone="901234567" copyable />
<EasyGlobalPhoneText cc="86" phone="13812345678" format="national" copyable />`}
      >
        <div className="flex flex-col gap-3">
          <EasyGlobalPhoneText cc="84" phone="901234567" copyable />
          <EasyGlobalPhoneText cc="86" phone="13812345678" format="national" copyable />
        </div>
      </ComponentDemo>

      <ComponentDemo
        title="两种格式对比"
        description="同一号码分别以 International 和 National 格式展示"
        code={`{/* 越南号码 */}
<EasyGlobalPhoneText cc="84" phone="901234567" />           {/* +84 901234567 */}
<EasyGlobalPhoneText cc="84" phone="901234567" format="national" /> {/* 0901234567 */}

{/* 中国号码 */}
<EasyGlobalPhoneText cc="86" phone="13812345678" />         {/* +86 13812345678 */}
<EasyGlobalPhoneText cc="86" phone="13812345678" format="national" /> {/* 013812345678 */}`}
      >
        <div className="grid grid-cols-2 gap-x-8 gap-y-3">
          <div className="text-sm text-muted-foreground">International</div>
          <div className="text-sm text-muted-foreground">National</div>
          <EasyGlobalPhoneText cc="84" phone="901234567" />
          <EasyGlobalPhoneText cc="84" phone="901234567" format="national" />
          <EasyGlobalPhoneText cc="86" phone="13812345678" />
          <EasyGlobalPhoneText cc="86" phone="13812345678" format="national" />
        </div>
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">
        EasyGlobalPhoneText API
      </h2>
      <PropsTable data={propsData} />
    </div>
  );
}
