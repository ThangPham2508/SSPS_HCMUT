import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import {
  HomeIcon,
  BookOpenIcon,
  PrinterIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-14">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-bold"
      >
        <HomeIcon className="w-5" />
        <Link to="/" className="flex items-center">
          TRANG CHỦ
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-bold"
      >
        <BookOpenIcon className="w-5" />
        <Link to="/instruction" className="flex items-center">
          HƯỚNG DẪN
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-bold"
      >
        <PrinterIcon className="w-5" />
        <Link to="/printing" className="flex items-center">
          IN NGAY
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-bold"
      >
        <UserIcon className="w-5" />
        <Link to="/login" className="flex items-center">
          ĐĂNG NHẬP
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto px-4 py-2 lg:px-8 lg:py-4" fullWidth={true}>
      <div className="w-full flex items-center justify-between text-blue-gray-900">
        <Link to="/" className="grid grid-cols-5 gap-2 items-center">
          <div className="col-span-1">Logo</div>
          <div className="flex flex-col col-span-4">
            <Typography variant="small">TRƯỜNG ĐẠI HỌC BÁCH KHOA</Typography>
            <Typography variant="small" className="font-bold">
              HỆ THỐNG IN ẤN SINH VIÊN
            </Typography>
          </div>
        </Link>
        <div className="flex items-center gap-5">
          <div className="hidden lg:block">{navList}</div>
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
      <MobileNav open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </MobileNav>
    </Navbar>
  );
};

export default Header;
