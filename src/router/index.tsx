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

const DropdownMenuDoc = lazy(() => import("@/pages/general/DropdownMenuDoc"));
const MenuDoc = lazy(() => import("@/pages/general/MenuDoc"));
const TabsDoc = lazy(() => import("@/pages/navigation/TabsDoc"));
const StepsDoc = lazy(() => import("@/pages/navigation/StepsDoc"));
const SegmentedControlDoc = lazy(
  () => import("@/pages/navigation/SegmentedControlDoc"),
);

const ConfigProviderDoc = lazy(() => import("@/pages/config/ConfigProviderDoc"));

const DatePickerDoc = lazy(() => import("@/pages/form/DatePickerDoc"));
const DateTimePickerDoc = lazy(() => import("@/pages/form/DateTimePickerDoc"));
const DateRangePickerDoc = lazy(() => import("@/pages/form/DateRangePickerDoc"));
const InputDoc = lazy(() => import("@/pages/form/InputDoc"));
const RadioCardsDoc = lazy(() => import("@/pages/form/RadioCardsDoc"));
const CheckboxCardsDoc = lazy(() => import("@/pages/form/CheckboxCardsDoc"));
const SelectDoc = lazy(() => import("@/pages/form/SelectDoc"));
const PasswordInputDoc = lazy(() => import("@/pages/form/PasswordInputDoc"));
const SwitchDoc = lazy(() => import("@/pages/form/SwitchDoc"));
const CheckboxDoc = lazy(() => import("@/pages/form/CheckboxDoc"));
const FormFieldDoc = lazy(() => import("@/pages/form/FormFieldDoc"));
const TextareaDoc = lazy(() => import("@/pages/form/TextareaDoc"));
const SliderDoc = lazy(() => import("@/pages/form/SliderDoc"));
const RadioGroupDoc = lazy(() => import("@/pages/form/RadioGroupDoc"));
const NumberFieldDoc = lazy(() => import("@/pages/form/NumberFieldDoc"));
const LabelDoc = lazy(() => import("@/pages/form/LabelDoc"));
const OTPFieldDoc = lazy(() => import("@/pages/form/OTPFieldDoc"));
const ToggleDoc = lazy(() => import("@/pages/form/ToggleDoc"));
const ProgressDoc = lazy(() => import("@/pages/form/ProgressDoc"));
const CalendarDoc = lazy(() => import("@/pages/form/CalendarDoc"));
const CheckboxGroupDoc = lazy(() => import("@/pages/form/CheckboxGroupDoc"));
const ComboboxDoc = lazy(() => import("@/pages/form/ComboboxDoc"));
const GroupDoc = lazy(() => import("@/pages/form/GroupDoc"));

const AvatarDoc = lazy(() => import("@/pages/data/AvatarDoc"));
const BadgeDoc = lazy(() => import("@/pages/data/BadgeDoc"));
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
    title: "General 通用",
    items: [
      { label: "Button 按钮", path: "/general/button" },
      { label: "Color 色彩", path: "/general/color" },
      { label: "Container 容器", path: "/general/container" },
      { label: "Icon 图标", path: "/general/icon" },
      { label: "Layout 布局", path: "/general/layout" },
      { label: "ButtonGroup 按钮组", path: "/general/button-group" },
      { label: "LocaleSwitch 语言切换", path: "/general/locale-switch" },
      { label: "Toolbar 工具栏", path: "/general/toolbar" },
    ],
  },
  {
    title: "Navigation 导航",
    items: [
      { label: "DropdownMenu 下拉菜单", path: "/navigation/dropdown-menu" },
      { label: "Menu 菜单", path: "/navigation/menu" },
      { label: "Tabs 标签页", path: "/navigation/tabs" },
      { label: "Steps 步骤条", path: "/navigation/steps" },
      {
        label: "Segmented Control 分段控制",
        path: "/navigation/segmented-control",
      },
      { label: "Pagination 分页", path: "/navigation/pagination" },
      { label: "Breadcrumb 面包屑", path: "/navigation/breadcrumb" },
      { label: "Sidebar 侧边栏", path: "/navigation/sidebar" },
    ],
  },
  {
    title: "Config 配置",
    items: [
      { label: "ConfigProvider 全局配置", path: "/config/config-provider" },
    ],
  },
  {
    title: "Form 表单",
    items: [
      { label: "Input 输入框", path: "/form/input" },
      { label: "Select 选择器", path: "/form/select" },
      { label: "DatePicker 日期选择器", path: "/form/date-picker" },
      {
        label: "DateTimePicker 日期时间选择器",
        path: "/form/date-time-picker",
      },
      {
        label: "DateRangePicker 日期范围选择",
        path: "/form/date-range-picker",
      },
      { label: "Radio Cards 单选卡片", path: "/form/radio-cards" },
      { label: "Checkbox Cards 复选卡片", path: "/form/checkbox-cards" },
      { label: "PasswordInput 密码输入", path: "/form/password-input" },
      { label: "Switch 开关", path: "/form/switch" },
      { label: "Checkbox 复选框", path: "/form/checkbox" },
      { label: "Form & Field 表单", path: "/form/form-field" },
      { label: "Textarea 多行文本框", path: "/form/textarea" },
      { label: "Slider 滑块", path: "/form/slider" },
      { label: "RadioGroup 单选组", path: "/form/radio-group" },
      { label: "NumberField 数字输入框", path: "/form/number-field" },
      { label: "Label 标签", path: "/form/label" },
      { label: "OTPField 验证码输入", path: "/form/otp-field" },
      { label: "Toggle 切换按钮", path: "/form/toggle" },
      { label: "Progress 进度条", path: "/form/progress" },
      { label: "Calendar 日历", path: "/form/calendar" },
      { label: "CheckboxGroup 复选组", path: "/form/checkbox-group" },
      { label: "Combobox 搜索选择", path: "/form/combobox" },
      { label: "Group 输入组合", path: "/form/group" },
    ],
  },
  {
    title: "Data 数据展示",
    items: [
      { label: "Avatar 头像", path: "/data/avatar" },
      { label: "Badge 徽章", path: "/data/badge" },
      { label: "CopyableText 可复制文本", path: "/data/copyable-text" },
      { label: "DataList 数据列表", path: "/data/data-list" },
      { label: "Empty 空状态", path: "/data/empty" },
      { label: "SearchTable 搜索表格", path: "/data/search-table" },
      { label: "TreeSelectPanel 树选择面板", path: "/data/tree-select-panel" },
      { label: "Card 卡片", path: "/data/card" },
      { label: "Table 表格", path: "/data/table" },
      { label: "Accordion 手风琴", path: "/data/accordion" },
      { label: "Skeleton 骨架屏", path: "/data/skeleton" },
      { label: "Separator 分隔线", path: "/data/separator" },
      { label: "ScrollArea 滚动区域", path: "/data/scroll-area" },
      { label: "Kbd 键盘标签", path: "/data/kbd" },
      { label: "Collapsible 折叠面板", path: "/data/collapsible" },
      { label: "Meter 仪表", path: "/data/meter" },
      { label: "PreviewCard 预览卡片", path: "/data/preview-card" },
    ],
  },
  {
    title: "Feedback 反馈",
    items: [
      { label: "Alert 提示", path: "/feedback/alert" },
      { label: "Dialog 对话框", path: "/feedback/dialog" },
      { label: "Drawer 抽屉", path: "/feedback/drawer" },
      { label: "Message 消息提示", path: "/feedback/message" },
      { label: "Popconfirm 气泡确认框", path: "/feedback/popconfirm" },
      { label: "Tooltip 文字提示", path: "/feedback/tooltip" },
      { label: "Popover 弹出框", path: "/feedback/popover" },
      { label: "AlertDialog 确认对话框", path: "/feedback/alert-dialog" },
      { label: "Spinner 加载指示器", path: "/feedback/spinner" },
      { label: "Sheet 侧边面板", path: "/feedback/sheet" },
    ],
  },
];

export const routes: RouteObject[] = [
  { index: true, element: <Overview /> },
  { path: "quick-start", element: <QuickStart /> },

  { path: "general/button", element: <ButtonDoc /> },
  { path: "general/color", element: <ColorDoc /> },
  { path: "general/container", element: <ContainerDoc /> },
  { path: "general/icon", element: <IconDoc /> },
  { path: "general/layout", element: <LayoutDoc /> },
  { path: "general/button-group", element: <ButtonGroupDoc /> },
  { path: "general/locale-switch", element: <LocaleSwitchDoc /> },
  { path: "general/toolbar", element: <ToolbarDoc /> },

  { path: "navigation/dropdown-menu", element: <DropdownMenuDoc /> },
  { path: "navigation/menu", element: <MenuDoc /> },
  { path: "navigation/tabs", element: <TabsDoc /> },
  { path: "navigation/steps", element: <StepsDoc /> },
  { path: "navigation/segmented-control", element: <SegmentedControlDoc /> },
  { path: "navigation/pagination", element: <PaginationDoc /> },
  { path: "navigation/breadcrumb", element: <BreadcrumbDoc /> },
  { path: "navigation/sidebar", element: <SidebarDoc /> },

  { path: "config/config-provider", element: <ConfigProviderDoc /> },

  { path: "form/input", element: <InputDoc /> },
  { path: "form/select", element: <SelectDoc /> },
  { path: "form/date-picker", element: <DatePickerDoc /> },
  { path: "form/date-time-picker", element: <DateTimePickerDoc /> },
  { path: "form/date-range-picker", element: <DateRangePickerDoc /> },
  { path: "form/radio-cards", element: <RadioCardsDoc /> },
  { path: "form/checkbox-cards", element: <CheckboxCardsDoc /> },
  { path: "form/password-input", element: <PasswordInputDoc /> },
  { path: "form/switch", element: <SwitchDoc /> },
  { path: "form/checkbox", element: <CheckboxDoc /> },
  { path: "form/form-field", element: <FormFieldDoc /> },
  { path: "form/textarea", element: <TextareaDoc /> },
  { path: "form/slider", element: <SliderDoc /> },
  { path: "form/radio-group", element: <RadioGroupDoc /> },
  { path: "form/number-field", element: <NumberFieldDoc /> },
  { path: "form/label", element: <LabelDoc /> },
  { path: "form/otp-field", element: <OTPFieldDoc /> },
  { path: "form/toggle", element: <ToggleDoc /> },
  { path: "form/progress", element: <ProgressDoc /> },
  { path: "form/calendar", element: <CalendarDoc /> },
  { path: "form/checkbox-group", element: <CheckboxGroupDoc /> },
  { path: "form/combobox", element: <ComboboxDoc /> },
  { path: "form/group", element: <GroupDoc /> },

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
