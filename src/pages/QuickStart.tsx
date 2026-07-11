import { Badge } from "@easyfix/console-ui";
import { CodeBlock } from "@/components/CodeBlock";

const NPM_VERSION = "0.1.3";
const NPM_URL = "https://www.npmjs.com/package/@easyfix/console-ui";
const NPM_BADGE_URL = "https://img.shields.io/npm/v/@easyfix/console-ui?label=npm&color=cb3837";
const GITHUB_URL = "https://github.com/easyfix-vn/easyfix-console-ui";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="font-heading text-xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}

export default function QuickStart() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-3">
          <h1 className="font-heading text-3xl font-bold">快速入门</h1>
          <a
            href={NPM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <img
              src={NPM_BADGE_URL}
              alt={`npm package version ${NPM_VERSION}`}
              className="h-5"
            />
          </a>
        </div>
        <p className="mt-2 text-muted-foreground">
          为 React 应用集成 Easyfix Console UI，并完成样式与语言配置。
        </p>
        <div className="mt-4 flex gap-3 text-sm">
          <a
            href={NPM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-primary underline underline-offset-4"
          >
            <svg viewBox="0 0 24 24" className="size-4 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" />
            </svg>
            npm
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-primary underline underline-offset-4"
          >
            <svg viewBox="0 0 24 24" className="size-4 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            GitHub
          </a>
        </div>
      </div>

      <Section title="安装">
        <p className="text-sm text-muted-foreground">
          安装组件包及其对等依赖。
        </p>
        <CodeBlock code="npm install @easyfix/console-ui @base-ui/react @dnd-kit/core @dnd-kit/modifiers @dnd-kit/sortable @dnd-kit/utilities react react-dom" language="bash" />
        <p className="text-sm text-muted-foreground">pnpm：</p>
        <CodeBlock code="pnpm add @easyfix/console-ui @base-ui/react @dnd-kit/core @dnd-kit/modifiers @dnd-kit/sortable @dnd-kit/utilities react react-dom" language="bash" />
        <p className="text-sm text-muted-foreground">
          对等依赖以{" "}
          <a
            href={NPM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4"
          >
            npm 页面
          </a>
          为准，其中包括 tailwindcss v4、class-variance-authority、lucide-react 等。
        </p>
      </Section>

      <Section title="配置样式">
        <p className="text-sm text-muted-foreground">
          在宿主应用入口引入一次样式文件：
        </p>
        <CodeBlock code={`// main.tsx 或 App.tsx
import "@easyfix/console-ui/styles.css";`} />
        <p className="text-sm text-muted-foreground">
          宿主应用需启用 Tailwind CSS v4，可通过{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">@import</code>{" "}
          或 Vite 插件加载 Tailwind。
        </p>
      </Section>

      <Section title="组件引用">
        <p className="text-sm text-muted-foreground">
          组件支持按需导入与 Tree-shaking：
        </p>
        <CodeBlock code={`import {
  EasyButton,
  EasyLocaleSwitch,
  EasyPageContainer,
} from "@easyfix/console-ui";

export function App() {
  return (
    <EasyPageContainer header={<h1>Console</h1>}>
      <EasyButton>提交</EasyButton>
      <EasyLocaleSwitch
        value="zh-CN"
        onChange={(locale) => console.log(locale)}
      />
    </EasyPageContainer>
  );
}`} />
      </Section>

      <Section title="国际化（i18n）">
        <p className="text-sm text-muted-foreground">
          在应用顶层通过 <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">ConfigProvider</code> 配置语言：
        </p>
        <CodeBlock code={`import { ConfigProvider } from "@easyfix/console-ui";

<ConfigProvider locale="zh-CN">
  <App />
</ConfigProvider>`} />
        <p className="text-sm text-muted-foreground">
          内置语言：<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">zh-CN</code>（简体中文）、
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs ml-1">en-US</code>（英语）、
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs ml-1">vi</code>（越南语）。
        </p>
      </Section>

      <Section title="本地开发">
        <p className="text-sm text-muted-foreground">
          在 easyfix_3.x 中开发时，先构建组件库，再在宿主应用安装本地包：
        </p>
        <CodeBlock code={`# 构建组件库
cd easyfix_dev/fe/easyfix_console_ui
pnpm install && pnpm build

# 在宿主项目中使用本地版本
cd ../../../easyfix_fe/easy-identity-hub
pnpm add ../../easyfix_dev/fe/easyfix_console_ui`} language="bash" />
        <p className="text-sm text-muted-foreground">
          源码仓库：
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-primary underline underline-offset-4"
          >
            {GITHUB_URL}
          </a>
        </p>
      </Section>

      <div className="rounded-xl border border-border bg-muted/30 p-5">
        <h3 className="font-semibold">版本信息</h3>
        <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm sm:grid-cols-3">
          {[
            { label: "最新版本", value: `v${NPM_VERSION}` },
            { label: "React", value: "^18.3.1" },
            { label: "Tailwind CSS", value: "^4.2.4" },
            { label: "Base UI", value: "^1.4.1" },
            { label: "TypeScript", value: "~6.0.2" },
            { label: "首次发布", value: "2026-05-08" },
          ].map(({ label, value }) => (
            <div key={label}>
              <dt className="text-muted-foreground">{label}</dt>
              <dd className="font-mono font-medium">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
