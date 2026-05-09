import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";
import { CopyIcon, CheckIcon } from "lucide-react";

type CodeBlockProps = {
  code: string;
  language?: string;
};

export function CodeBlock({ code, language = "tsx" }: CodeBlockProps) {
  const [html, setHtml] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    codeToHtml(code.trim(), {
      lang: language,
      theme: "github-dark-default",
    }).then(setHtml);
  }, [code, language]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative">
      <button
        type="button"
        onClick={handleCopy}
        className="absolute end-2 top-2 z-10 flex size-7 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/60 opacity-0 transition-opacity hover:bg-white/10 hover:text-white group-hover:opacity-100"
      >
        {copied ? <CheckIcon className="size-3.5" /> : <CopyIcon className="size-3.5" />}
      </button>
      {html ? (
        <div
          className="overflow-x-auto rounded-lg text-sm [&_pre]:p-4 [&_pre]:!bg-[#0d1117]"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : (
        <pre className="overflow-x-auto rounded-lg bg-[#0d1117] p-4 text-sm text-gray-300">
          <code>{code.trim()}</code>
        </pre>
      )}
    </div>
  );
}
