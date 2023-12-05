import { Link } from "react-router-dom";
import { useState, useEffect, cloneElement } from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import {
  HomeIcon,
  BookOpenIcon,
  PrinterIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
  ClockIcon,
  ChatBubbleLeftEllipsisIcon,
  CogIcon,
  
} from "@heroicons/react/24/outline";
import ProfileMenu from "./ProfileMenu";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const role = useSelector((state) => state.auth.userData.role);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const generateNavItem = (icon, to, text) => (
    <Typography
      as="li"
      variant="small"
      color="white"
      className="flex items-center gap-x-2 p-1 font-bold"
    >
      {icon && cloneElement(icon, { className: "w-6" })}
      <Link to={to} className="flex items-center">
        {text}
      </Link>
    </Typography>
  );

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-14">
      {generateNavItem(<HomeIcon />, "/", "TRANG CHỦ")}

      {role === "customer"
        ? generateNavItem(<ClockIcon />, "/history", "LỊCH SỬ IN")
        : role === "SPSO"
          ? generateNavItem(
              <PrinterIcon />,
              "/admin/printer-manage",
              "QUẢN LÝ MÁY IN",
            )
          : generateNavItem(<BookOpenIcon />, "/instruction", "HƯỚNG DẪN")}

      {role === "SPSO"
        ? generateNavItem(
            <CogIcon />,
            "/admin/printing-manage",
            "QUẢN LÝ IN ẤN",
          )
        : generateNavItem(<PrinterIcon />, "/printing", "IN NGAY")}

      {role === "customer"
        ? generateNavItem(
            <ChatBubbleLeftEllipsisIcon />,
            "/feedback",
            "PHẢN HỒI",
          )
        : role === "SPSO"
          ?  generateNavItem(<ClockIcon />, "/admin/history", "LỊCH SỬ IN")
          : generateNavItem(<UserIcon />, "/login", "ĐĂNG NHẬP")}
    </ul>
  );

  return (
    <Navbar
      className="mx-auto bg-blue-fill bg-cover px-4 py-2 text-white lg:px-8 lg:py-4"
      fullWidth={true}
    >
      <div className="flex w-full items-center justify-between text-blue-gray-900">
        <Link to="/" className="grid grid-cols-5 items-center gap-3">
          <img className="col-span-1 w-16" src={logo} alt="logo" />
          <div className="col-span-4 flex flex-col">
            <Typography variant="small" color="white">
              TRƯỜNG ĐẠI HỌC BÁCH KHOA
            </Typography>
            <Typography variant="small" color="white" className="font-bold">
              HỆ THỐNG IN ẤN SINH VIÊN
            </Typography>
          </div>
        </Link>
        <div className="flex items-center gap-5">
          <div className="me-5 hidden lg:block">{navList}</div>
          {role !== null ? <ProfileMenu /> : null}
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="w-6" />
          ) : (
            <Bars3Icon className="w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </Collapse>
    </Navbar>
  );
};

export default Header;
