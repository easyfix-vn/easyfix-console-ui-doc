import { useState } from "react";
import { Button, NumberFlow, NumberFlowGroup } from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { PropsTable } from "@/components/PropsTable";

const propsData = [
  { name: "value", type: "number", description: "当前数字值" },
  { name: "locales", type: "Intl.LocalesArgument", description: "Intl.NumberFormat locale，如 vi-VN、zh-CN、en-US" },
  { name: "format", type: "Intl.NumberFormatOptions", description: "数字格式化选项，如 currency、percent、compact" },
  { name: "prefix", type: "string", description: "数字前缀" },
  { name: "suffix", type: "string", description: "数字后缀" },
  { name: "animated", type: "boolean", default: "true", description: "是否启用动画" },
  { name: "animateOnMount", type: "boolean", default: "true", description: "是否在首次渲染时从 0 过渡到当前值" },
  { name: "duration", type: "number", default: "520", description: "动画时长，单位毫秒" },
  { name: "trend", type: "number | (oldValue, value) => number", default: "Math.sign(value - oldValue)", description: "控制趋势方向；正数上升，负数下降，0 为中性" },
  { name: "respectMotionPreference", type: "boolean", default: "true", description: "是否遵循系统减少动态效果设置" },
  { name: "reserveWidth", type: "boolean", default: "true", description: "动画开始前按最终格式化文本预留宽度，避免数字横向漂移" },
  { name: "size", type: '"sm" | "default" | "lg" | "xl"', default: '"default"', description: "文字尺寸" },
  { name: "variant", type: '"default" | "muted" | "success" | "danger"', default: '"default"', description: "语义颜色" },
  { name: "onAnimationsStart", type: "() => void", description: "动画开始回调" },
  { name: "onAnimationsFinish", type: "() => void", description: "动画完成回调" },
  { name: "className", type: "string", description: "额外样式类名" },
];

function BasicDemo() {
  const [value, setValue] = useState(431.1);

  return (
    <div className="space-y-4">
      <NumberFlow value={value} size="xl" />
      <div className="flex gap-2">
        <Button size="sm" onClick={() => setValue((current) => current + 128.42)}>
          增加
        </Button>
        <Button size="sm" variant="outline" onClick={() => setValue((current) => current - 56.8)}>
          减少
        </Button>
      </div>
    </div>
  );
}

function CurrencyDemo() {
  const [value, setValue] = useState(1280.5);

  return (
    <div className="space-y-4">
      <NumberFlow
        value={value}
        locales="en-US"
        format={{
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 2,
        }}
        suffix="/mo"
        size="lg"
      />
      <Button size="sm" onClick={() => setValue((current) => current + 120)}>
        更新金额
      </Button>
    </div>
  );
}

function LocaleDemo() {
  return (
    <div className="flex flex-col gap-3">
      <NumberFlow
        value={1280000}
        locales="vi-VN"
        format={{ style: "currency", currency: "VND" }}
        size="lg"
      />
      <NumberFlow
        value={9824.56}
        locales="zh-CN"
        format={{ style: "currency", currency: "CNY" }}
        size="lg"
      />
      <NumberFlow
        value={982456}
        locales="en-US"
        format={{ notation: "compact" }}
        suffix=" visits"
      />
    </div>
  );
}

function TrendDemo() {
  const [revenue, setRevenue] = useState(124.23);
  const [diff, setDiff] = useState(0.0564);

  return (
    <div className="space-y-4">
      <NumberFlowGroup>
        <div className="flex flex-wrap items-baseline gap-4">
          <NumberFlow
            value={revenue}
            locales="en-US"
            format={{ style: "currency", currency: "USD" }}
            size="lg"
          />
          <NumberFlow
            value={diff}
            locales="en-US"
            format={{ style: "percent", maximumFractionDigits: 2, signDisplay: "always" }}
            variant={diff >= 0 ? "success" : "danger"}
          />
        </div>
      </NumberFlowGroup>
      <div className="flex gap-2">
        <Button
          size="sm"
          onClick={() => {
            setRevenue((current) => current + 12.4);
            setDiff(0.072);
          }}
        >
          上升
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => {
            setRevenue((current) => current - 8.2);
            setDiff(-0.031);
          }}
        >
          下降
        </Button>
      </div>
    </div>
  );
}

export default function NumberFlowDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-bold">
          NumberFlow 数字动画
        </h1>
        <p className="mt-2 text-muted-foreground">
          数字动画文本组件，迁移 NumberFlow 的核心使用方式：value 变化时自动过渡，支持 Intl 格式化、locales、前后缀、趋势方向和减少动态效果偏好。
        </p>
      </div>

      <ComponentDemo
        title="数值过渡"
        description="value 变化时过渡到新数值。"
        code={`import { NumberFlow } from "@easyfix/console-ui";

<NumberFlow value={431.1} />`}
      >
        <BasicDemo />
      </ComponentDemo>

      <ComponentDemo
        title="货币与后缀"
        description="format 接收 Intl.NumberFormatOptions，suffix 定义单位或周期。"
        code={`<NumberFlow
  value={value}
  locales="en-US"
  format={{ style: "currency", currency: "USD", maximumFractionDigits: 2 }}
  suffix="/mo"
/>`}
      >
        <CurrencyDemo />
      </ComponentDemo>

      <ComponentDemo
        title="Locale 示例"
        description="覆盖越南、中国和紧凑数字格式。"
        code={`<NumberFlow value={1280000} locales="vi-VN" format={{ style: "currency", currency: "VND" }} />
<NumberFlow value={9824.56} locales="zh-CN" format={{ style: "currency", currency: "CNY" }} />
<NumberFlow value={982456} locales="en-US" format={{ notation: "compact" }} suffix=" visits" />`}
      >
        <LocaleDemo />
      </ComponentDemo>

      <ComponentDemo
        title="趋势展示"
        description="趋势值驱动默认颜色，variant 可显式指定语义颜色。"
        code={`<NumberFlowGroup>
  <NumberFlow value={revenue} format={{ style: "currency", currency: "USD" }} />
  <NumberFlow
    value={diff}
    format={{ style: "percent", maximumFractionDigits: 2, signDisplay: "always" }}
    variant={diff >= 0 ? "success" : "danger"}
  />
</NumberFlowGroup>`}
      >
        <TrendDemo />
      </ComponentDemo>

      <h2 className="font-heading text-xl font-semibold">
        NumberFlow API
      </h2>
      <PropsTable data={propsData} />
    </div>
  );
}
