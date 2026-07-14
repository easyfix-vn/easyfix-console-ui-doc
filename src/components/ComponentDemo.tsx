import { useId, useState, type ReactNode } from "react";
import { CodeBlock } from "./CodeBlock";

type ComponentDemoProps = {
  title?: ReactNode;
  description?: string;
  code: string;
  children: ReactNode;
  language?: string;
};

export function ComponentDemo({
  title,
  description,
  code,
  children,
  language,
}: ComponentDemoProps) {
  const [showCode, setShowCode] = useState(false);
  const codeId = useId();

  return (
    <div className="rounded-xl border">
      {(title || description) && (
        <div className="border-b px-5 py-3">
          {title && <h3 className="font-medium">{title}</h3>}
          {description && (
            <p className="mt-0.5 text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      )}
      <div className="flex min-h-[120px] items-center justify-center p-6">
        {children}
      </div>
      <div className="border-t">
        <button
          aria-controls={codeId}
          aria-expanded={showCode}
          type="button"
          onClick={() => setShowCode(!showCode)}
          className="flex w-full items-center justify-center gap-1.5 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          {showCode ? "隐藏代码" : "查看代码"}
        </button>
        {showCode && (
          <div className="border-t" id={codeId}>
            <CodeBlock code={code} language={language} />
          </div>
        )}
      </div>
    </div>
  );
}
