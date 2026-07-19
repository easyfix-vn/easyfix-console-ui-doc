import type { ReactNode } from "react";

type PropDef = {
  name: string;
  type: string;
  default?: string;
  description: ReactNode;
};

type PropsTableProps = {
  data: PropDef[];
  kind?: "props" | "events";
};

function isFunctionProp(prop: PropDef): boolean {
  return (
    prop.type.includes("=>") ||
    /\bFunction\b/.test(prop.type) ||
    /^on[A-Z]/.test(prop.name)
  );
}

export function PropsTable({ data, kind = "props" }: PropsTableProps) {
  const sortedData = data
    .map((prop, index) => ({ prop, index }))
    .sort((a, b) => {
      const functionOrder =
        Number(isFunctionProp(a.prop)) - Number(isFunctionProp(b.prop));
      return functionOrder || a.index - b.index;
    })
    .map(({ prop }) => prop);

  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b bg-muted/50">
            <th className="px-4 py-2.5 text-start font-medium">
              {kind === "events" ? "事件名" : "属性"}
            </th>
            <th className="px-4 py-2.5 text-start font-medium">
              {kind === "events" ? "回调签名" : "类型"}
            </th>
            {kind === "props" && (
              <th className="px-4 py-2.5 text-start font-medium">默认值</th>
            )}
            <th className="px-4 py-2.5 text-start font-medium">说明</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((prop) => (
            <tr key={prop.name} className="border-b last:border-b-0">
              <td className="px-4 py-2.5">
                <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-primary">
                  {prop.name}
                </code>
              </td>
              <td className="px-4 py-2.5">
                <code className="text-xs font-mono text-muted-foreground">
                  {prop.type}
                </code>
              </td>
              {kind === "props" && (
                <td className="px-4 py-2.5 text-muted-foreground">
                  {prop.default ? (
                    <code className="text-xs font-mono">{prop.default}</code>
                  ) : (
                    "-"
                  )}
                </td>
              )}
              <td className="px-4 py-2.5 text-muted-foreground">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
