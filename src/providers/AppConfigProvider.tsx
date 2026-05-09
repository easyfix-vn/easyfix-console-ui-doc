import { ConfigProvider, type EasyLocale } from "@easyfix/console-ui";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

type AppTheme = "light" | "dark" | "system";

type AppConfigContextValue = {
  locale: EasyLocale;
  theme: AppTheme;
  setLocale: (locale: EasyLocale) => void;
  setTheme: (theme: AppTheme) => void;
};

const STORAGE_KEY_LOCALE = "easyfix-docs:locale";
const STORAGE_KEY_THEME = "easyfix-docs:theme";

const AppConfigContext = createContext<AppConfigContextValue | null>(null);

export function useAppConfig(): AppConfigContextValue {
  const ctx = useContext(AppConfigContext);
  if (!ctx) {
    throw new Error("useAppConfig must be used within AppConfigProvider");
  }
  return ctx;
}

function readInitialLocale(): EasyLocale {
  if (typeof window === "undefined") return "zh-CN";
  const stored = window.localStorage.getItem(STORAGE_KEY_LOCALE);
  if (stored === "zh-CN" || stored === "en-US" || stored === "vi") {
    return stored;
  }
  return "zh-CN";
}

function readInitialTheme(): AppTheme {
  if (typeof window === "undefined") return "system";
  const stored = window.localStorage.getItem(STORAGE_KEY_THEME);
  if (stored === "light" || stored === "dark" || stored === "system") {
    return stored;
  }
  return "system";
}

export function AppConfigProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<EasyLocale>(readInitialLocale);
  const [theme, setThemeState] = useState<AppTheme>(readInitialTheme);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY_LOCALE, locale);
  }, [locale]);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY_THEME, theme);
  }, [theme]);

  const value = useMemo<AppConfigContextValue>(
    () => ({
      locale,
      theme,
      setLocale: setLocaleState,
      setTheme: setThemeState,
    }),
    [locale, theme],
  );

  return (
    <AppConfigContext.Provider value={value}>
      <ConfigProvider locale={locale} theme={theme}>
        {children}
      </ConfigProvider>
    </AppConfigContext.Provider>
  );
}
