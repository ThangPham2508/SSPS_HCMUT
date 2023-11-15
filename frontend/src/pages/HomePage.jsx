import HomeCarousel from "../components/HomeCarousel";
import HomeCard from "../components/HomeCard";
import SimpleCard from "../components/SimpleCard";
import { Typography } from "@material-tailwind/react";
import {
  FaceSmileIcon,
  CheckBadgeIcon,
  ChartBarIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center bg-white-fill">
      <HomeCarousel />
      <div className="mt-10 flex flex-col items-center gap-10">
        <Typography variant="h2" className="text-center text-2xl" color="blue">
          SSPS CUNG CẤP DỊCH VỤ
        </Typography>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-20">
          <HomeCard text="In ấn dễ dàng, tiện lợi, mọi lúc, mọi nơi" />
          <HomeCard text="Xem lại lịch sử in ấn" />
          <HomeCard text="Thanh toán trực tuyến, đa nền tảng" />
        </div>
      </div>
      <div className="my-10 flex flex-col items-center gap-10">
        <Typography variant="h2" className="text-center text-2xl" color="blue">
          SSPS CAM KẾT MANG ĐẾN DỊCH VỤ
        </Typography>
        <div className="grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <SimpleCard
            icon={<FaceSmileIcon className="w-28" />}
            headertext="THÂN THIỆN"
            bodytext="Người dùng có thể sử dụng trang web mà không cần tốn nhiều công sức"
          />
          <SimpleCard
            icon={<CheckBadgeIcon className="w-28" />}
            headertext="TƯƠNG THÍCH"
            bodytext="Vận hành trên nhiều nền tảng, trình duyệt"
          />
          <SimpleCard
            icon={<ChartBarIcon className="w-28" />}
            headertext="HIỆU SUẤT"
            bodytext="Đáp ứng nhiều yêu cầu trong khoảng thời gian ngắn"
          />
          <SimpleCard
            icon={<ShieldCheckIcon className="w-28" />}
            headertext="BẢO MẬT"
            bodytext="Cam kết bảo mật thông tin cho người dùng, không tiết lộ cho bên thứ ba"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
