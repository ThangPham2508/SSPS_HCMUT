import { Typography } from "@material-tailwind/react";
import { VerticalTabs } from "../components/ManagePrintingPage/VerticalTab";
import { PlusCircleIcon, ClipboardDocumentIcon } from "@heroicons/react/24/solid";

const PrintingPage = () => {
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
        addprint
      </div>,
    ),
  ];

  return (
    <>
      <Typography variant="h4">IN NGAY</Typography>
      <VerticalTabs item={tabItems} />
    </>
  )
}

export default PrintingPage;