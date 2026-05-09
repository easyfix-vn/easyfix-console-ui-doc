type PropDef = {
  name: string;
  type: string;
  default?: string;
  description: string;
};

type PropsTableProps = {
  data: PropDef[];
};

export function PropsTable({ data }: PropsTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b bg-muted/50">
            <th className="px-4 py-2.5 text-start font-medium">属性</th>
            <th className="px-4 py-2.5 text-start font-medium">类型</th>
            <th className="px-4 py-2.5 text-start font-medium">默认值</th>
            <th className="px-4 py-2.5 text-start font-medium">说明</th>
          </tr>
        </thead>
        <tbody>
          {data.map((prop) => (
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
              <td className="px-4 py-2.5 text-muted-foreground">
                {prop.default ? (
                  <code className="text-xs font-mono">{prop.default}</code>
                ) : (
                  "-"
                )}
              </td>
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
