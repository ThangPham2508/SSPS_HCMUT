import { VerticalTabs } from "../../components/ManagePrintingPage/VerticalTab.jsx";
import ButtonList from "../../components/ManagePrintingPage/ButtonList.jsx";
import { Breadcrumbs, Card, Typography } from "@material-tailwind/react";
import {
  Cog6ToothIcon,
  Cog8ToothIcon,
  MapIcon,
} from "@heroicons/react/24/solid";

const FILE_TYPES = [
  "pdf",
  "jpg",
  "docx",
  "xls",
  "svg",
  "xlsx",
  "pptx",
  "png",
  "xps",
];

const ManagePrintingPage = () => {
  const createTabItem = (label, value, icon, desc) => ({
    label,
    value,
    icon,
    desc,
  });

  const pngList = FILE_TYPES.map((type) => `/src/assets/filetypeicon/${type}.png`);

  const tabItems = [
    createTabItem(
      "Cài đặt loại file in",
      1,
      <MapIcon className="w-5 h-5" />,
      <div>{ButtonList([1, 2, 3, 4, 5], FILE_TYPES, pngList)}</div>
    ),
    createTabItem(
      "Cài đặt tặng giấy",
      2,
      <Cog6ToothIcon className="w-5 h-5" />,
      <Card />
    ),
    createTabItem(
      "Xuất báo cáo",
      3,
      <Cog8ToothIcon className="w-5 h-5" />,
      <Card />
    ),
  ];

  return (
    <div className="grid-rows-12 grids-cols-12 grid gap-5">
      <div className="flex h-20 items-center gap-5">
        <div className="cols-span-5 items-center">
          <Typography variant="h3" className="font-bold ">
            QUẢN LÝ IN ẤN
          </Typography>
        </div>
        <div className="cols-span-7 items-center">
          <Breadcrumbs>
            <a href="../" className="opacity-60">
              Trang chủ
            </a>
            <a href="#" className="opacity-60">
              Quản lý in ấn
            </a>
            <a href="#">Cài đặt kiểu file in</a>
          </Breadcrumbs>
        </div>
      </div>
      <VerticalTabs item={tabItems} />
    </div>
  );
};

export default ManagePrintingPage;
