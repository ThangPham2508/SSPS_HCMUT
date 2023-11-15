
import { useState, useEffect, cloneElement } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  typography,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PaperClipIcon,
  
} from "@heroicons/react/24/solid";
//import DisplayBar from '../../components/DisplayBar'

  // const [openNav, setOpenNav] = useState(false);

  // useEffect(() => {
  //   window.addEventListener(
  //     "focus",
  //     () => window.innerWidth >= 960 && setOpenNav(false),
  //   );
  // }, []);

  // const generateTab = (text, to, icon) => (
  //   <Typography
  //     as="li"
  //     variant="small"
  //     color="white"
  //     className="flex items-center gap-x-2 p-1 font-bold"
  //   >
  //     {icon && cloneElement(icon, { className: "w-6" })}
  //     <Link to={to} className="flex items-center">
  //       {text}
  //     </Link>
  //   </Typography>
  // );
  
  // const navList = (
  //   <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-14">
  //     {generateNavItem(<HomeIcon />, "/", "TRANG CHỦ")}

  //     {page === "customer"
  //       ? generateNavItem(<ClockIcon />, "/history", "LỊCH SỬ IN")
  //       : page === "admin"
  //         ? generateNavItem(<PrinterIcon />, "/admin/printer-manage", "QUẢN LÝ MÁY IN",)
  //         : generateNavItem(<BookOpenIcon />, "/instruction", "HƯỚNG DẪN")}

  //     {page === "admin"
  //       ? generateNavItem(<CogIcon />,"/admin/printing-manage","QUẢN LÝ IN ẤN",)
  //       : generateNavItem(<PrinterIcon />, "/printing", "IN NGAY")}

  //     {page === "customer"
  //       ? generateNavItem(
  //           <ChatBubbleLeftEllipsisIcon />,"/feedback","PHẢN HỒI",
  //         )
  //       : page === "admin"
  //         ? generateNavItem(
  //             <MegaphoneIcon />,"/admin/customer-service","CSKH",
  //           )
  //         : generateNavItem(<UserIcon />, "/login", "ĐĂNG NHẬP")}
  //   </ul>
  // );
let page = 'ManagePrintingPage'
const ManagePrintingPage = ({page}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = (value) => {
    setOpen(value);
  };

  const generateTabItem = (icon, cardid, text) => (
    <ListItem onClick={() => handleOpen(cardid)}>
      <ListItemPrefix>
        {icon && cloneElement(icon, { className : "h-5 w-5" })}
      </ListItemPrefix>
      {text}
    </ListItem>
  );
  const sidebart = (
    <ul>
    {generateTabItem(<Cog6ToothIcon/>, 1,'Cài đặt tặng giấy' )}
    {generateTabItem(<PaperClipIcon/>, 2,'Cài đặt loại file in' )}
    {generateTabItem(<InboxIcon/>, 3,'Xuất báo cáo' )}
    </ul>
  )
  const tabList = (
    <Card className="flex flex max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Quản lý in ấn
          </Typography>
        </div>
          {sidebart}
      </Card>
  )
  return (
    <div className="app-container bg-white-fill">
      <div className="items-right">
      {tabList}
      </div>
      <div className="items-left">
      <Card className="p-0" open = {open === 4}>
        asdksudfghkdsghkfd
      </Card>
      </div>
    </div>
  );
};

export default ManagePrintingPage;

// const ManagePrinterPage = () => {
//   return <div>ManagePrinterPage</div>;
// };

// export default ManagePrinterPage;
