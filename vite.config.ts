import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";

const docsSrc = path.resolve(__dirname, "./src");
const uiSrc = path.resolve(__dirname, "../easyfix_console_ui/src");
const uiRoot = path.resolve(__dirname, "../easyfix_console_ui");

/**
 * dev 模式下把 @easyfix/console-ui 指向相邻组件库源码，
 * 同时根据 importer 位置把 @/ 分别映射到 docs/src 或 ui/src，
 * 使组件库改动即时 HMR；GitHub build 使用 npm 包。
 */
function consoleUiSourcePlugin(): Plugin {
  return {
    name: "console-ui-source",
    enforce: "pre",
    async resolveId(source, importer, options) {
      if (source === "@easyfix/console-ui") {
        return path.resolve(uiSrc, "index.ts");
      }
      if (source === "@easyfix/console-ui/styles.css") {
        return path.resolve(uiSrc, "styles/index.css");
      }
      if (source === "@easyfix/console-ui/tailwind") {
        return path.resolve(uiRoot, "tailwind-source.css");
      }
      if (source.startsWith("@easyfix/console-ui/")) {
        const sub = source.slice("@easyfix/console-ui/".length);
        const mapped = path.resolve(uiSrc, sub);
        return (
          (await this.resolve(mapped, importer, { ...options, skipSelf: true }))
            ?.id ?? mapped
        );
      }
      if (source.startsWith("@/")) {
        const normalized = importer?.split("?")[0] ?? "";
        const base = normalized.startsWith(uiSrc) ? uiSrc : docsSrc;
        const mapped = path.resolve(base, source.slice(2));
        return (
          (await this.resolve(mapped, importer, { ...options, skipSelf: true }))
            ?.id ?? mapped
        );
      }
      return undefined;
    },
  };
}

export default defineConfig(({ command }) => {
  const useLocalConsoleUiSource = command === "serve";

  return {
    plugins: [
      ...(useLocalConsoleUiSource ? [consoleUiSourcePlugin()] : []),
      react(),
      tailwindcss(),
    ],
    resolve: {
      alias: [
        {
          find: "@docs/app.css",
          replacement: path.resolve(
            docsSrc,
            useLocalConsoleUiSource ? "app.dev.css" : "app.build.css",
          ),
        },
        {
          find: "@",
          replacement: docsSrc,
        },
      ],
      dedupe: ["react", "react-dom", "react/jsx-runtime", "@base-ui/react"],
    },
    server: {
      port: 5188,
    },
  };
});
