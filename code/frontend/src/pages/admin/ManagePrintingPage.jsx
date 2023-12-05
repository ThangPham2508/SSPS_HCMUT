import { VerticalTabs } from "../../components/ManagePrintingPage/VerticalTab.jsx";
import ButtonList from "../../components/ManagePrintingPage/ButtonList.jsx";
import { Card, Typography } from "@material-tailwind/react";
import {
  Cog6ToothIcon,
  Cog8ToothIcon,
  MapIcon,
} from "@heroicons/react/24/solid";

const ManagePrintingPage = () => {
  const createTabItem = (label, value, icon, desc) => ({
    label,
    value,
    icon,
    desc,
  });

  const tabItems = [
    createTabItem(
      "Cài đặt loại file in",
      "1",
      <MapIcon className="w-5 h-5" />,
      <div>{ButtonList([1, 2, 3, 4, 5])}</div>
    ),
    createTabItem(
      "Cài đặt tặng giấy",
      "2",
      <Cog6ToothIcon className="w-5 h-5" />,
      <Card />
    ),
    createTabItem(
      "Xuất báo cáo",
      "3",
      <Cog8ToothIcon className="w-5 h-5" />,
      <Card />
    ),
  ];

  return (
    <div >
        <div>
          <Typography variant="h3" className="font-bold ">
            QUẢN LÝ IN ẤN
          </Typography>
      </div>
      <VerticalTabs item={tabItems} />
    </div>
  );
};

export default ManagePrintingPage;
