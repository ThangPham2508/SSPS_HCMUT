import {
    Breadcrumbs,
    Button,
    ButtonGroup,
    Card,
    ListItem,
    button,
    Avatar,
    Typography
  } from "@material-tailwind/react";
import logo from "../assets/logo.png"
//avatar, họ tên, email, số dư, vai trò
const parentStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10vh',
  };
const ProfilePage = () => {
    return (
        <div className="bg-white-fill">
          <div className="grid grid-rows-6 grid-flow-col gap-10">
            <Avatar src={logo} className="row-span-6 m-10 h-60 w-60" />
            <div className="col-span-9" />
            <div className="col-span-8">
                <Card className=" col-span-2 col-start-4 row-span-1 bg-gray-100/50	">
                    <Typography variant="h3" className="flex-none font-bold text-red-400/100" style={parentStyle} >
                        Thông tin tài khoản
                    </Typography>
                </Card>
            </div>
            <Card className="row-span-2 col-span-4">
                <Typography variant="h4" className="flex-none font-bold underline text-blue-600/90" style={parentStyle} >
                    Tên người dùng
                </Typography>
                <Typography variant="h4" className="flex-none font-normal" style={parentStyle} >
                    Nguyễn Văn THiệu
                </Typography>
            </Card>
            <Card className="row-span-2 col-span-4">
            <Typography variant="h4" className="flex-none font-bold underline text-blue-600/90" style={parentStyle} >
                    Chức vụ
                </Typography>
                <Typography variant="h4" className="flex-none font-normal" style={parentStyle} >
                    Tổng thống
                </Typography>
            </Card>
            <Card className="row-span-2 col-span-4">
                <Typography variant="h4" className="flex-none font-bold underline text-blue-600/90" style={parentStyle} >
                    Địa chỉ Email
                </Typography>
                <Typography variant="h4" className="flex-none font-normal" style={parentStyle} >
                    NVTVNCH@///.com
                </Typography>
            </Card>
            <Card className="row-span-2 col-span-4">
                <Typography variant="h4" className="flex-none font-bold underline text-blue-600/90" style={parentStyle} >
                    Số dư
                </Typography>
                <Typography variant="h4" className="flex-none font-normal" style={parentStyle} >
                    10000 giấy
                </Typography>
            </Card>
          </div>
          
        </div>
    )
  }
  
  export default ProfilePage