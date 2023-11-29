import { VerticalTabs } from "../../components/ManagePrintingPage/VerticalTab";
import { Breadcrumbs, Card } from "@material-tailwind/react";
import { Cog6ToothIcon, FlagIcon } from "@heroicons/react/24/solid";
const ManagePrintingPage = () => {
  let items = [
    {
      label: "Cài đặt tặng giấy",
      value: "1",
      icon: <Cog6ToothIcon />,
      desc: <Card>123123123</Card>,
    },
    {
      label: "Cài đặt kiểu file in",
      value: "2",
      icon: FlagIcon,
      desc: (
        //ACCESS DATABASE, GET TYPE LIST, EXPORT TO BELOW COMPONENT
        <Card>ĐÂY LÀ TYPE LIST</Card>
      ),
    },
    {
      label: "Xuất báo cáo định kỳ",
      value: "3",
      desc: <Card>7897898789</Card>,
    },
  ];
  const componentStyle = {
    width: "200px",
    height: "50px",
    outerHeight: "50px",
    textAlign: "left",
    //backgroundColor: 'lightblue',
  };
  let aaa = <VerticalTabs items={items}/>;
  return (
    <Card
      style={{
        width: "100%",
        paddingLeft: "4%",
        paddingRight: "4%",
        paddingTop: "6%",
        paddingBottom: "6%",
      }}
    >
      <text style={{ fontWeight: "bold", fontSize: "30px" }}>
        QUẢN LÝ IN ẤN
      </text>
      <Breadcrumbs>
        <a href="../" className="opacity-60">
          Trang chủ
        </a>
        <a href="#" className="opacity-60">
          Quản lý in ấn
        </a>
        <a href="#">Cài đặt kiểu file in</a>
      </Breadcrumbs>
      {/* <text style={componentStyle}>
        Menu
      </text> */}
      {aaa}
    </Card>
  );
};

export default ManagePrintingPage;
