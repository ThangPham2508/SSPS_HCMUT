import { VerticalTabs } from "../../components/ManagePrintingPage/VerticalTab.jsx";
import { Typography } from "@material-tailwind/react";
import {
  PlusCircleIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/solid";
import AddPrinter from "../../components/AddPrinter.jsx";

const ManagePrinterPage = () => {
  const createTabItem = (label, value, icon, desc) => ({
    label,
    value,
    icon,
    desc,
  });

  const tabItems = [
    createTabItem(
      "Danh sách máy in",
      1,
      <PlusCircleIcon className="w-5" />,
      <div>dsmi</div>,
    ),
    createTabItem(
      "Thêm máy in",
      2,
      <ClipboardDocumentIcon className="h-5 w-5" />,
      <div>
        <AddPrinter />
      </div>,
    ),
  ];

  return (
    <>
      <Typography variant="h4">QUẢN LÝ MÁY IN</Typography>
      <VerticalTabs item={tabItems} />
    </>
  );
};

export default ManagePrinterPage;
