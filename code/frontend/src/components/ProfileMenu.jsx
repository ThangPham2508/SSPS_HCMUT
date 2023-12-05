import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  UserIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../slices/authslice";
import { useLogoutMutation } from "../slices/authApiSlice";
import { useSelector } from "react-redux";

const ProfileMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { avatar, role } = useSelector((state) => state.auth.userData);

  const [loggingOut] = useLogoutMutation();

  const handleLogout = () => {
    loggingOut();
    dispatch(logout());
    navigate("/");
  }
  const handleProfile = () => {
    navigate("/Profile");
  };

  return (
    <Menu>
      <MenuHandler>
        {role !== null && avatar ? (
          <Avatar variant="circular" className="cursor-pointer" src={avatar} />
        ) : (
          <UserIcon className="w-5" />
        )}
      </MenuHandler>
      <MenuList>
        <MenuItem className="flex items-center gap-2" onClick={handleProfile}>
          <UserCircleIcon className="w-5" />
          <Typography variant="small" className="font-medium">
            Tài khoản
          </Typography>
        </MenuItem>
        <hr className="my-2 border-blue-gray-50" />
        <MenuItem className="flex items-center gap-2" onClick={handleLogout}>
          <ArrowLeftOnRectangleIcon className="w-5" />
          <Typography
            variant="small"
            className="font-medium"
            onClick={handleLogout}
          >
            Đăng xuất
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
