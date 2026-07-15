import { ArrowUpRight } from "lucide-react";
import { navGroups } from "@/router";
import { Link } from "react-router-dom";
import logoSvg from "@/assets/easyfix_icon_c_2025.svg";

const componentCount = navGroups.reduce(
  (total, group) => total + group.items.length,
  0,
);

export default function Overview() {
  return (
    <div className="space-y-10">
      <div className="flex items-center gap-4">
        <img src={logoSvg} alt="Easyfix" className="size-14 rounded-xl" />
        <div>
          <h1 className="font-heading text-3xl font-bold">Overview</h1>
          <p className="mt-1 text-muted-foreground">
            Easyfix Console UI 组件总览，共 {componentCount} 个组件，点击组件进入详情页面。
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {navGroups.map((group) => (
          <section key={group.title}>
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <h2 className="font-heading text-xl font-semibold">
                  {group.title}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {group.items.length} 个组件
                </p>
              </div>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="group flex min-h-32 flex-col justify-between rounded-xl border bg-card p-4 transition-colors hover:border-primary/50 hover:bg-muted/30"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate font-mono text-xs text-muted-foreground">
                          {item.path.slice(1)}
                        </p>
                        <h3 className="mt-2 font-medium group-hover:text-primary">
                          {item.label}
                        </h3>
                      </div>
                      <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="size-2 rounded-full bg-primary/60" />
                      查看
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
