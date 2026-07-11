import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const Overview = lazy(() => import("@/pages/Overview"));
const QuickStart = lazy(() => import("@/pages/QuickStart"));

const ButtonDoc = lazy(() => import("@/pages/general/ButtonDoc"));
const ColorDoc = lazy(() => import("@/pages/general/ColorDoc"));
const ContainerDoc = lazy(() => import("@/pages/general/ContainerDoc"));
const IconDoc = lazy(() => import("@/pages/general/IconDoc"));
const LayoutDoc = lazy(() => import("@/pages/general/LayoutDoc"));
const ButtonGroupDoc = lazy(() => import("@/pages/general/ButtonGroupDoc"));
const LocaleSwitchDoc = lazy(() => import("@/pages/general/LocaleSwitchDoc"));
const ToolbarDoc = lazy(() => import("@/pages/general/ToolbarDoc"));

const DropdownMenuDoc = lazy(() => import("@/pages/navigation/DropdownMenuDoc"));
const TabsDoc = lazy(() => import("@/pages/navigation/TabsDoc"));
const StepsDoc = lazy(() => import("@/pages/navigation/StepsDoc"));
const SegmentedControlDoc = lazy(
  () => import("@/pages/form/SegmentedControlDoc"),
);

const ConfigProviderDoc = lazy(() => import("@/pages/ConfigProviderDoc"));

const TimezoneSelectDoc = lazy(
  () => import("@/pages/form/TimezoneSelectDoc"),
);
const DatePickerDoc = lazy(() => import("@/pages/form/DatePickerDoc"));
const DateTimePickerDoc = lazy(() => import("@/pages/form/DateTimePickerDoc"));
const DateRangePickerDoc = lazy(() => import("@/pages/form/DateRangePickerDoc"));
const InputDoc = lazy(() => import("@/pages/form/InputDoc"));
const RadioCardsDoc = lazy(() => import("@/pages/form/RadioCardsDoc"));
const CheckboxCardsDoc = lazy(() => import("@/pages/form/CheckboxCardsDoc"));
const SelectDoc = lazy(() => import("@/pages/form/SelectDoc"));
const PasswordInputDoc = lazy(() => import("@/pages/form/PasswordInputDoc"));
const SwitchDoc = lazy(() => import("@/pages/form/SwitchDoc"));
const FormFieldDoc = lazy(() => import("@/pages/form/FormFieldDoc"));
const TextareaDoc = lazy(() => import("@/pages/form/TextareaDoc"));
const SliderDoc = lazy(() => import("@/pages/form/SliderDoc"));
const RadioGroupDoc = lazy(() => import("@/pages/form/RadioGroupDoc"));
const NumberFieldDoc = lazy(() => import("@/pages/form/NumberFieldDoc"));
const OTPFieldDoc = lazy(() => import("@/pages/form/OTPFieldDoc"));
const ToggleDoc = lazy(() => import("@/pages/form/ToggleDoc"));
const CheckboxGroupDoc = lazy(() => import("@/pages/form/CheckboxGroupDoc"));
const CascaderDoc = lazy(() => import("@/pages/form/CascaderDoc"));
const ModelSelectorDoc = lazy(() => import("@/pages/form/ModelSelectorDoc"));
const GroupDoc = lazy(() => import("@/pages/form/GroupDoc"));
const GlobalPhoneInputDoc = lazy(
  () => import("@/pages/form/GlobalPhoneInputDoc"),
);
const PriceInputDoc = lazy(() => import("@/pages/form/PriceInputDoc"));

const AvatarDoc = lazy(() => import("@/pages/data/AvatarDoc"));
const BadgeDoc = lazy(() => import("@/pages/data/BadgeDoc"));
const LabelDoc = lazy(() => import("@/pages/data/LabelDoc"));
const CopyableTextDoc = lazy(() => import("@/pages/data/CopyableTextDoc"));
const DataListDoc = lazy(() => import("@/pages/data/DataListDoc"));
const SearchTableDoc = lazy(() => import("@/pages/data/SearchTableDoc"));
const TreeSelectPanelDoc = lazy(
  () => import("@/pages/data/TreeSelectPanelDoc"),
);
const EmptyDoc = lazy(() => import("@/pages/data/EmptyDoc"));
const CardDoc = lazy(() => import("@/pages/data/CardDoc"));
const TableDoc = lazy(() => import("@/pages/data/TableDoc"));
const AccordionDoc = lazy(() => import("@/pages/data/AccordionDoc"));
const SkeletonDoc = lazy(() => import("@/pages/data/SkeletonDoc"));
const SeparatorDoc = lazy(() => import("@/pages/data/SeparatorDoc"));
const ScrollAreaDoc = lazy(() => import("@/pages/data/ScrollAreaDoc"));
const KbdDoc = lazy(() => import("@/pages/data/KbdDoc"));
const CollapsibleDoc = lazy(() => import("@/pages/data/CollapsibleDoc"));
const MeterDoc = lazy(() => import("@/pages/data/MeterDoc"));
const PreviewCardDoc = lazy(() => import("@/pages/data/PreviewCardDoc"));
const ProgressDoc = lazy(() => import("@/pages/data/ProgressDoc"));
const CalendarDoc = lazy(() => import("@/pages/data/CalendarDoc"));
const GlobalPhoneTextDoc = lazy(
  () => import("@/pages/data/GlobalPhoneTextDoc"),
);
const PriceTextDoc = lazy(() => import("@/pages/data/PriceTextDoc"));
const TimeTextDoc = lazy(() => import("@/pages/data/TimeTextDoc"));
const NumberFlowDoc = lazy(() => import("@/pages/data/NumberFlowDoc"));

const AlertDoc = lazy(() => import("@/pages/feedback/AlertDoc"));
const DialogDoc = lazy(() => import("@/pages/feedback/DialogDoc"));
const DrawerDoc = lazy(() => import("@/pages/feedback/DrawerDoc"));
const MessageDoc = lazy(() => import("@/pages/feedback/MessageDoc"));
const PopconfirmDoc = lazy(() => import("@/pages/feedback/PopconfirmDoc"));
const TooltipDoc = lazy(() => import("@/pages/feedback/TooltipDoc"));
const PopoverDoc = lazy(() => import("@/pages/feedback/PopoverDoc"));
const AlertDialogDoc = lazy(() => import("@/pages/feedback/AlertDialogDoc"));
const SpinnerDoc = lazy(() => import("@/pages/feedback/SpinnerDoc"));
const SheetDoc = lazy(() => import("@/pages/feedback/SheetDoc"));
const PaginationDoc = lazy(() => import("@/pages/navigation/PaginationDoc"));
const BreadcrumbDoc = lazy(() => import("@/pages/navigation/BreadcrumbDoc"));
const SidebarDoc = lazy(() => import("@/pages/navigation/SidebarDoc"));

export type NavGroup = {
  title: string;
  items: { label: string; path: string }[];
};

export const navGroups: NavGroup[] = [
  {
    title: "通用",
    items: [
      { label: "Color 色彩", path: "/general/color" },
      { label: "Icon 图标", path: "/general/icon" },
      { label: "Container 容器", path: "/general/container" },
      { label: "Layout 布局", path: "/general/layout" },
      { label: "Button 按钮", path: "/general/button" },
      { label: "ButtonGroup 按钮组", path: "/general/button-group" },
      { label: "Toolbar 工具栏", path: "/general/toolbar" },
    ],
  },
  {
    title: "导航",
    items: [
      { label: "Sidebar 侧边栏", path: "/navigation/sidebar" },
      { label: "Tabs 标签页", path: "/navigation/tabs" },
      { label: "DropdownMenu 下拉菜单", path: "/navigation/dropdown-menu" },
      { label: "Steps 步骤条", path: "/navigation/steps" },
      { label: "Pagination 分页", path: "/navigation/pagination" },
      { label: "Breadcrumb 面包屑", path: "/navigation/breadcrumb" },
    ],
  },
  {
    title: "表单",
    items: [
      { label: "Input 输入框", path: "/form/input" },
      { label: "Textarea 多行文本框", path: "/form/textarea" },
      { label: "NumberField 数字输入框", path: "/form/number-field" },
      { label: "PasswordInput 密码输入", path: "/form/password-input" },
      { label: "GlobalPhoneInput 国际手机", path: "/form/global-phone-input" },
      { label: "PriceInput 金额输入框", path: "/form/price-input" },
      { label: "OTPField 验证码输入框", path: "/form/otp-field" },
      { label: "Slider 滑块", path: "/form/slider" },
      { label: "Group 输入组合", path: "/form/group" },
      { label: "Select 选择器", path: "/form/select" },
      { label: "Cascader 级联选择", path: "/form/cascader" },
      { label: "ModelSelector 模型选择器", path: "/form/model-selector" },
      { label: "TimezoneSelect 时区选择", path: "/form/timezone-select" },
      { label: "DatePicker 日期选择器", path: "/form/date-picker" },
      {
        label: "DateTimePicker 日期时间选择器",
        path: "/form/date-time-picker",
      },
      {
        label: "DateRangePicker 日期范围选择",
        path: "/form/date-range-picker",
      },
      { label: "Switch 开关", path: "/form/switch" },
      { label: "Toggle 切换按钮", path: "/form/toggle" },
      { label: "RadioGroup 单选组", path: "/form/radio-group" },
      { label: "Radio Cards 单选卡片", path: "/form/radio-cards" },
      {
        label: "Segmented Control 分段控制",
        path: "/form/segmented-control",
      },
      { label: "CheckboxGroup 复选组", path: "/form/checkbox-group" },
      { label: "Checkbox Cards 复选卡片", path: "/form/checkbox-cards" },
      { label: "Form & Field 表单", path: "/form/form-field" },
    ],
  },
  {
    title: "数据展示",
    items: [
      { label: "Label 标签", path: "/data/label" },
      { label: "Badge 徽章", path: "/data/badge" },
      { label: "Card 卡片", path: "/data/card" },
      { label: "Accordion 手风琴", path: "/data/accordion" },
      { label: "Collapsible 折叠面板", path: "/data/collapsible" },
      { label: "Avatar 头像", path: "/data/avatar" },
      { label: "CopyableText 可复制文本", path: "/data/copyable-text" },
      { label: "GlobalPhoneText 手机号", path: "/data/global-phone-text" },
      { label: "PriceText 金额文本", path: "/data/price-text" },
      { label: "TimeText 时间文本", path: "/data/time-text" },
      { label: "NumberFlow 数字动画", path: "/data/number-flow" },
      { label: "DataList 数据列表", path: "/data/data-list" },
      { label: "Empty 空状态", path: "/data/empty" },
      { label: "Table 表格", path: "/data/table" },
      { label: "SearchTable 搜索表格", path: "/data/search-table" },
      { label: "TreeSelectPanel 树选择面板", path: "/data/tree-select-panel" },
      { label: "Skeleton 骨架屏", path: "/data/skeleton" },
      { label: "Separator 分隔线", path: "/data/separator" },
      { label: "ScrollArea 滚动区域", path: "/data/scroll-area" },
      { label: "Kbd 键盘标签", path: "/data/kbd" },
      { label: "Meter 仪表", path: "/data/meter" },
      { label: "PreviewCard 预览卡片", path: "/data/preview-card" },
      { label: "Progress 进度条", path: "/data/progress" },
      { label: "Calendar 日历", path: "/data/calendar" },
    ],
  },
  {
    title: "反馈",
    items: [
      { label: "Alert 提示", path: "/feedback/alert" },
      { label: "Dialog 对话框", path: "/feedback/dialog" },
      { label: "Drawer 抽屉", path: "/feedback/drawer" },
      { label: "Sheet 侧边抽屉", path: "/feedback/sheet" },
      { label: "Message 消息提示", path: "/feedback/message" },
      { label: "Popconfirm 气泡确认框", path: "/feedback/popconfirm" },
      { label: "Tooltip 文字提示", path: "/feedback/tooltip" },
      { label: "Popover 弹出框", path: "/feedback/popover" },
      { label: "AlertDialog 确认对话框", path: "/feedback/alert-dialog" },
      { label: "Spinner 加载指示器", path: "/feedback/spinner" },
    ],
  },
];

export const routes: RouteObject[] = [
  { index: true, element: <Overview /> },
  { path: "quick-start", element: <QuickStart /> },
  { path: "config-provider", element: <ConfigProviderDoc /> },

  { path: "general/button", element: <ButtonDoc /> },
  { path: "general/color", element: <ColorDoc /> },
  { path: "general/container", element: <ContainerDoc /> },
  { path: "general/icon", element: <IconDoc /> },
  { path: "general/layout", element: <LayoutDoc /> },
  { path: "general/button-group", element: <ButtonGroupDoc /> },
  { path: "general/locale-switch", element: <LocaleSwitchDoc /> },
  { path: "general/toolbar", element: <ToolbarDoc /> },

  { path: "navigation/dropdown-menu", element: <DropdownMenuDoc /> },
  { path: "navigation/tabs", element: <TabsDoc /> },
  { path: "navigation/steps", element: <StepsDoc /> },
  { path: "navigation/pagination", element: <PaginationDoc /> },
  { path: "navigation/breadcrumb", element: <BreadcrumbDoc /> },
  { path: "navigation/sidebar", element: <SidebarDoc /> },

  { path: "config/config-provider", element: <ConfigProviderDoc /> },

  { path: "form/input", element: <InputDoc /> },
  { path: "form/select", element: <SelectDoc /> },
  { path: "form/timezone-select", element: <TimezoneSelectDoc /> },
  { path: "form/date-picker", element: <DatePickerDoc /> },
  { path: "form/date-time-picker", element: <DateTimePickerDoc /> },
  { path: "form/date-range-picker", element: <DateRangePickerDoc /> },
  { path: "form/radio-cards", element: <RadioCardsDoc /> },
  { path: "form/checkbox-cards", element: <CheckboxCardsDoc /> },
  { path: "form/password-input", element: <PasswordInputDoc /> },
  { path: "form/switch", element: <SwitchDoc /> },
  { path: "form/form-field", element: <FormFieldDoc /> },
  { path: "form/textarea", element: <TextareaDoc /> },
  { path: "form/slider", element: <SliderDoc /> },
  { path: "form/radio-group", element: <RadioGroupDoc /> },
  { path: "form/number-field", element: <NumberFieldDoc /> },
  { path: "form/otp-field", element: <OTPFieldDoc /> },
  { path: "form/toggle", element: <ToggleDoc /> },
  { path: "form/segmented-control", element: <SegmentedControlDoc /> },
  { path: "form/checkbox-group", element: <CheckboxGroupDoc /> },
  { path: "form/cascader", element: <CascaderDoc /> },
  { path: "form/model-selector", element: <ModelSelectorDoc /> },
  { path: "form/group", element: <GroupDoc /> },
  { path: "form/global-phone-input", element: <GlobalPhoneInputDoc /> },
  { path: "form/price-input", element: <PriceInputDoc /> },
  { path: "form/label", element: <LabelDoc /> },
  { path: "form/progress", element: <ProgressDoc /> },
  { path: "form/calendar", element: <CalendarDoc /> },
  { path: "navigation/segmented-control", element: <SegmentedControlDoc /> },

  { path: "data/label", element: <LabelDoc /> },
  { path: "data/avatar", element: <AvatarDoc /> },
  { path: "data/badge", element: <BadgeDoc /> },
  { path: "data/copyable-text", element: <CopyableTextDoc /> },
  { path: "data/data-list", element: <DataListDoc /> },
  { path: "data/empty", element: <EmptyDoc /> },
  { path: "data/search-table", element: <SearchTableDoc /> },
  { path: "data/tree-select-panel", element: <TreeSelectPanelDoc /> },
  { path: "data/card", element: <CardDoc /> },
  { path: "data/table", element: <TableDoc /> },
  { path: "data/accordion", element: <AccordionDoc /> },
  { path: "data/skeleton", element: <SkeletonDoc /> },
  { path: "data/separator", element: <SeparatorDoc /> },
  { path: "data/scroll-area", element: <ScrollAreaDoc /> },
  { path: "data/kbd", element: <KbdDoc /> },
  { path: "data/collapsible", element: <CollapsibleDoc /> },
  { path: "data/meter", element: <MeterDoc /> },
  { path: "data/preview-card", element: <PreviewCardDoc /> },
  { path: "data/global-phone-text", element: <GlobalPhoneTextDoc /> },
  { path: "data/price-text", element: <PriceTextDoc /> },
  { path: "data/time-text", element: <TimeTextDoc /> },
  { path: "data/number-flow", element: <NumberFlowDoc /> },
  { path: "data/progress", element: <ProgressDoc /> },
  { path: "data/calendar", element: <CalendarDoc /> },

  { path: "feedback/alert", element: <AlertDoc /> },
  { path: "feedback/dialog", element: <DialogDoc /> },
  { path: "feedback/drawer", element: <DrawerDoc /> },
  { path: "feedback/message", element: <MessageDoc /> },
  { path: "feedback/popconfirm", element: <PopconfirmDoc /> },
  { path: "feedback/tooltip", element: <TooltipDoc /> },
  { path: "feedback/popover", element: <PopoverDoc /> },
  { path: "feedback/alert-dialog", element: <AlertDialogDoc /> },
  { path: "feedback/spinner", element: <SpinnerDoc /> },
  { path: "feedback/sheet", element: <SheetDoc /> },
];
