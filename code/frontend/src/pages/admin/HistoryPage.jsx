import { Typography } from "@material-tailwind/react";
import { VerticalTabs } from "../../components/ManagePrintingPage/VerticalTab";
import { FolderIcon, CalendarIcon, XCircleIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import LogList from "../../components/LogList";

// Sample files
const files = {
  file1: {
    type: "png", // This should match one of the keys in your images module
    name: "Sample File 1",
    printingProperties: {
      pagesToBePrinted: 10,
      numberOfCopies: 2,
    },
  },
  file2: {
    type: "docx", // This should match one of the keys in your images module
    name: "Sample File 2",
    printingProperties: {
      pagesToBePrinted: 20,
      numberOfCopies: 1,
    },
  },
  // Add more files as needed...
};

// Sample logs
const logs = [
  {
    fileId: "file1",
    printerId: "printer1",
    status: "queued", // This should match one of the keys in your images module
    startTime: new Date().toLocaleString(),
  },
  {
    fileId: "file2",
    printerId: "printer2",
    status: "completed", // This should match one of the keys in your images module
    startTime: new Date().toLocaleString(),
  },
  // Add more logs as needed...
];

// Sample printers
const printers = {
  printer1: {
    model: "Printer Model 1",
  },
  printer2: {
    model: "Printer Model 2",
  },
  // Add more printers as needed...
};

const HistoryPage = () => {
  const createTabItem = (label, value, icon, desc) => ({
    label,
    value,
    icon,
    desc,
  });

  const tabItems = [
    createTabItem(
      "Tất cả",
      1,
      <FolderIcon className="w-10" />,
      <LogList files={files} printers={printers} logs={logs} isLog={true}/>,
    ),
    createTabItem(
      "Hẹn lịch",
      2,
      <CalendarIcon className="w-10" />,
      <div>
        <LogList files={files} printers={printers} logs={logs} isLog={true}/>
      </div>,
    ),
    createTabItem(
      "Đã hủy",
      3,
      <XCircleIcon className="w-10" />,
      <LogList files={files} printers={printers} logs={logs} isLog={true}/>,
    ),
    createTabItem(
      "Đã in",
      4,
      <CheckCircleIcon className="w-10" />,
      <LogList files={files} printers={printers} logs={logs} isLog={true}/>,
    ),
  ];

  return (
    <>
      <Typography variant="h4">LỊCH SỬ IN</Typography>
      <VerticalTabs item={tabItems} />
    </>
  );
}

export default HistoryPage