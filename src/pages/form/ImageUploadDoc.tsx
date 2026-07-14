import { useCallback, useState } from "react";
import {
  ImageUpload,
  ImageUploadMultiple,
  type ImageUploadHandler,
} from "@easyfix/console-ui";
import { ComponentDemo } from "@/components/ComponentDemo";
import { ComponentDocPage } from "@/components/ComponentDocPage";
import { PropsTable } from "@/components/PropsTable";

const propsData = [
  {
    name: "onUpload",
    type: "(file: File, folder?: string) => Promise<string>",
    description: "应用层上传回调；组件库只接收最终图片 URL，不绑定具体 API。",
  },
  {
    name: "value",
    type: "string | null | string[]",
    description: "受控图片 URL；multiple 模式传入 URL 数组。",
  },
  {
    name: "onChange",
    type: "(value: string | string[]) => void",
    description: "图片新增、替换、删除或排序后触发。",
  },
  {
    name: "multiple",
    type: "boolean",
    default: "false",
    description: "是否允许上传多张图片；多图模式支持拖动排序。",
  },
  {
    name: "maxCount",
    type: "number",
    default: "9",
    description: "多图模式最大数量。",
  },
  {
    name: "folder",
    type: "string",
    description: "原样传给 onUpload 的业务目录参数。",
  },
  {
    name: "onUploadingChange",
    type: "(uploading: boolean) => void",
    description: "上传开始或全部上传结束时回调。",
  },
  {
    name: "onUploadError",
    type: "(error: unknown) => void",
    description: "上传失败回调；通知展示由应用层决定。",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg" | number',
    default: '"md"',
    description: "预览 tile 尺寸；传 number 时使用正方形像素尺寸。",
  },
  {
    name: "showPreviewBorder",
    type: "boolean",
    default: "true",
    description: "是否展示已上传图片和上传 tile 的外框；自定义预览示例关闭了边框。",
  },
  {
    name: "allowUrlInput",
    type: "boolean",
    default: "true",
    description: "是否允许直接输入或编辑 http(s) 图片 URL。",
  },
  {
    name: "maxFileSizeBytes",
    type: "number",
    default: "5 * 1024 * 1024",
    description: "单个图片文件大小上限。",
  },
  {
    name: "acceptedFormats",
    type: "readonly string[]",
    default: "jpg, jpeg, png, gif, webp",
    description: "允许上传的图片扩展名；不传时使用组件内置格式。",
  },
  {
    name: "preview / renderPreview",
    type: "ReactNode | ((url, index) => ReactNode)",
    description: "自定义已上传图片预览。",
  },
  {
    name: "emptyPreview",
    type: "ReactNode",
    description: "自定义空状态 tile 内容。",
  },
  {
    name: "tip",
    type: "ReactNode",
    default: "空",
    description: "提示文字；传入后显示在图标右侧并支持 hover 查看完整内容。",
  },
  {
    name: "disabled / className",
    type: "boolean / string",
    description: "禁用交互或补充容器样式。",
  },
];

function useDemoUpload(): ImageUploadHandler {
  return useCallback(async (file: File) => {
    await new Promise<void>((resolve) => window.setTimeout(resolve, 500));
    return URL.createObjectURL(file);
  }, []);
}

function BasicDemo() {
  const [value, setValue] = useState<string>("");
  const onUpload = useDemoUpload();

  return (
    <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-start">
      <ImageUpload
        value={value}
        onChange={setValue}
        onUpload={onUpload}
        size={112}
      />
      <p className="max-w-sm text-xs leading-5 text-muted-foreground">
        当前 value：{value || "尚未上传"}
      </p>
    </div>
  );
}

function MultipleDemo() {
  const [value, setValue] = useState<string[]>([]);
  const onUpload = useDemoUpload();

  return (
    <div className="w-full space-y-3">
      <ImageUploadMultiple
        value={value}
        onChange={setValue}
        onUpload={onUpload}
        maxCount={4}
        size="md"
      />
      <p className="text-xs text-muted-foreground">
        已选择 {value.length} 张图片；可拖动图片左下角手柄排序。
      </p>
    </div>
  );
}

function CustomPreviewDemo() {
  const [value, setValue] = useState<string[]>([
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=256&q=80",
  ]);
  const onUpload = useDemoUpload();

  return (
    <ImageUploadMultiple
      value={value}
      onChange={setValue}
      onUpload={onUpload}
      size={96}
      showPreviewBorder={false}
      preview={(url) => (
        <img
          src={url}
          alt="自定义头像预览"
          className="size-full rounded-full object-cover"
        />
      )}
      emptyPreview={<span className="text-xs">上传头像</span>}
    />
  );
}

export default function ImageUploadDoc() {
  return (
    <ComponentDocPage>
      <div className="space-y-8">
        <div>
          <h1 className="font-heading text-3xl font-bold">
            ImageUpload 图片上传
          </h1>
          <p className="mt-2 text-muted-foreground">
            支持单图、多图、URL 输入、预览替换和拖动排序。空视图内展示建议尺寸，支持格式可通过
            hover 提示图标查看完整说明；提示文字默认不显示，上传 API 通过 onUpload 从应用层注入。
          </p>
        </div>

        <ComponentDemo
          title="单图上传"
          description="应用层传入 onUpload，组件完成文件校验并通过 onChange 回写图片 URL。"
          code={`function BasicDemo() {
  const [value, setValue] = useState("");
  const onUpload = useDemoUpload();

  return (
    <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-start">
      <ImageUpload
        value={value}
        onChange={setValue}
        onUpload={onUpload}
        size={112}
      />
      <p className="max-w-sm text-xs leading-5 text-muted-foreground">
        当前 value：{value || "尚未上传"}
      </p>
    </div>
  );
}`}
        >
          <BasicDemo />
        </ComponentDemo>

        <ComponentDemo
          title="多图上传与排序"
          description="multiple 模式接收 string[]，上传完成后可以拖动图片调整顺序。"
          code={`function MultipleDemo() {
  const [value, setValue] = useState<string[]>([]);
  const onUpload = useDemoUpload();

  return (
    <div className="w-full space-y-3">
      <ImageUploadMultiple
        value={value}
        onChange={setValue}
        onUpload={onUpload}
        maxCount={4}
        size="md"
      />
      <p className="text-xs text-muted-foreground">
        已选择 {value.length} 张图片；可拖动图片左下角手柄排序。
      </p>
    </div>
  );
}`}
        >
          <MultipleDemo />
        </ComponentDemo>

        <ComponentDemo
          title="自定义预览与空视图"
          description="左侧展示自定义头像预览，右侧是可通过 emptyPreview 定制的新增空视图。"
          code={`function CustomPreviewDemo() {
  const [value, setValue] = useState<string[]>([
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=256&q=80",
  ]);
  const onUpload = useDemoUpload();

  return (
    <ImageUploadMultiple
      value={value}
      onChange={setValue}
      onUpload={onUpload}
      size={96}
      showPreviewBorder={false}
      preview={(url) => (
        <img
          src={url}
          alt="自定义头像预览"
          className="size-full rounded-full object-cover"
        />
      )}
      emptyPreview={<span className="text-xs">上传头像</span>}
    />
  );
}`}
        >
          <CustomPreviewDemo />
        </ComponentDemo>

        <div>
          <h2 className="mb-4 text-xl font-semibold">ImageUpload API</h2>
          <PropsTable data={propsData} />
        </div>
      </div>
    </ComponentDocPage>
  );
}
