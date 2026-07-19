import {
  Children,
  cloneElement,
  isValidElement,
  useId,
  type ReactElement,
  type ReactNode,
} from "react";
import { useSearchParams } from "react-router-dom";
import { ComponentDemo } from "./ComponentDemo";
import { PropsTable } from "./PropsTable";

type DocTab = "overview" | "properties";

type ComponentDocPageProps = {
  children: ReactNode;
};

type ElementWithChildren = ReactElement<{ children?: ReactNode }>;

type DemoElement = ReactElement<{
  children?: ReactNode;
  code: string;
  description?: string;
  language?: string;
  title?: ReactNode;
}>;

function getChildren(node: ReactNode): ReactNode {
  if (!isValidElement(node)) return null;
  return (node as ElementWithChildren).props.children;
}

function containsPropsTable(node: ReactNode): boolean {
  if (!isValidElement(node)) return false;
  if (node.type === PropsTable) return true;
  return Children.toArray(getChildren(node)).some(containsPropsTable);
}

function containsHeading(node: ReactNode): boolean {
  if (!isValidElement(node)) return false;
  if (node.type === "h1") return true;
  return Children.toArray(getChildren(node)).some(containsHeading);
}

function isSectionHeading(node: ReactNode): boolean {
  return isValidElement(node) && (node.type === "h2" || node.type === "h3");
}

function findFirstDemo(node: ReactNode): DemoElement | null {
  if (!isValidElement(node)) return null;
  if (node.type === ComponentDemo) return node as DemoElement;

  return (
    Children.toArray(getChildren(node))
      .map(findFirstDemo)
      .find((demo): demo is DemoElement => demo !== null) ?? null
  );
}

function containsNode(node: ReactNode, target: ReactNode): boolean {
  if (node === target) return true;
  if (!isValidElement(node)) return false;
  return Children.toArray(getChildren(node)).some((child) =>
    containsNode(child, target),
  );
}

function removeFirstDemo(
  node: ReactNode,
  target: DemoElement,
): ReactNode {
  if (node === target) return null;
  if (!isValidElement(node) || !containsNode(node, target)) return node;

  const nextChildren = Children.toArray(getChildren(node)).map((child) =>
    removeFirstDemo(child, target),
  );
  return cloneElement(node, { children: nextChildren });
}

function getPageChildren(children: ReactNode): ReactNode[] {
  const topLevel = Children.toArray(children);
  const root = topLevel.length === 1 ? topLevel[0] : null;

  // Existing docs already have a single layout div as their root. Unwrap it so
  // the page can move API sections into the Properties tab without duplicating
  // the examples maintained by each document.
  if (root && isValidElement(root) && containsPropsTable(root)) {
    return Children.toArray(getChildren(root));
  }

  return topLevel;
}

function splitDocSections(children: ReactNode[]) {
  const headerIndex = Math.max(
    children.findIndex(containsHeading),
    0,
  );
  const header = children[headerIndex] ?? null;
  const content = children.filter((_, index) => index !== headerIndex);
  const propertyIndexes = new Set<number>();

  content.forEach((node, index) => {
    if (!containsPropsTable(node)) return;
    propertyIndexes.add(index);
    if (index > 0 && isSectionHeading(content[index - 1])) {
      propertyIndexes.add(index - 1);
    }
  });

  return {
    header,
    overview: content.filter((_, index) => !propertyIndexes.has(index)),
    properties: content.filter((_, index) => propertyIndexes.has(index)),
  };
}

export function ComponentDocPage({ children }: ComponentDocPageProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab: DocTab =
    searchParams.get("tab") === "properties" ? "properties" : "overview";
  const pageId = useId();
  const { header, overview, properties } = splitDocSections(
    getPageChildren(children),
  );
  const previewSource = overview.map(findFirstDemo).find(
    (demo): demo is DemoElement => demo !== null,
  ) ?? null;
  const overviewExamples = previewSource
    ? overview.map((node) => removeFirstDemo(node, previewSource))
    : overview;
  const preview = previewSource
    ? cloneElement(previewSource, {
        description: undefined,
        title: "组件预览",
      })
    : null;

  const changeTab = (tab: DocTab) => {
    const nextSearchParams = new URLSearchParams(searchParams);
    if (tab === "overview") {
      nextSearchParams.delete("tab");
    } else {
      nextSearchParams.set("tab", tab);
    }
    setSearchParams(nextSearchParams, { replace: true });
  };

  return (
    <div className="space-y-8">
      {header}

      <div
        aria-label="组件文档导航"
        className="flex gap-6 border-b border-border"
        role="tablist"
      >
        {(
          [
            ["overview", "概览"],
            ["properties", "属性"],
          ] as const
        ).map(([tab, label]) => {
          const selected = activeTab === tab;
          return (
            <button
              aria-controls={`${pageId}-${tab}`}
              aria-selected={selected}
              className={`relative -mb-px px-1 pb-3 text-sm font-medium transition-colors ${
                selected
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
                }`}
              data-doc-tab={tab}
              id={`${pageId}-tab-${tab}`}
              key={tab}
              onClick={() => changeTab(tab)}
              role="tab"
              type="button"
            >
              {label}
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-primary transition-opacity ${
                  selected ? "opacity-100" : "opacity-0"
                }`}
              />
            </button>
          );
        })}
      </div>

      <section
        aria-labelledby={`${pageId}-tab-overview`}
        className="space-y-8"
        hidden={activeTab !== "overview"}
        id={`${pageId}-overview`}
        role="tabpanel"
        tabIndex={0}
      >
        {preview && (
          <div className="space-y-4" data-component-preview>
            <div>
              <h2 className="font-heading text-xl font-semibold">总览</h2>
            </div>
            {preview}
          </div>
        )}
        <div>
          <h2 className="font-heading text-xl font-semibold">属性示例</h2>
        </div>
        {overviewExamples}
      </section>

      <section
        aria-labelledby={`${pageId}-tab-properties`}
        className="space-y-6"
        hidden={activeTab !== "properties"}
        id={`${pageId}-properties`}
        role="tabpanel"
        tabIndex={0}
      >
        <div>
          <h2 className="font-heading text-xl font-semibold">属性</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            组件支持的普通属性和事件回调，按类别分表展示。
          </p>
        </div>
        {properties.length > 0 ? (
          properties
        ) : (
          <p className="text-sm text-muted-foreground">暂无属性定义。</p>
        )}
      </section>
    </div>
  );
}
