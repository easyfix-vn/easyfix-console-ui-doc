import { navGroups } from "@/router";
import { Link } from "react-router-dom";
import logoSvg from "@/assets/easyfix_icon_c_2025.svg";

export default function Overview() {
  return (
    <div className="space-y-10">
      <div className="flex items-center gap-4">
        <img src={logoSvg} alt="Easyfix" className="size-14 rounded-xl" />
        <div>
          <h1 className="font-heading text-3xl font-bold">Easyfix Console UI</h1>
          <p className="mt-1 text-muted-foreground">
            基于 React + TailwindCSS v4 + Base UI 构建的企业级组件库，为 Easyfix
            控制台系统提供统一的 UI 组件。
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {navGroups.map((group) => (
          <div key={group.title} className="rounded-xl border p-5">
            <h2 className="mb-3 font-semibold">{group.title}</h2>
            <ul className="space-y-1.5">
              {group.items.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
