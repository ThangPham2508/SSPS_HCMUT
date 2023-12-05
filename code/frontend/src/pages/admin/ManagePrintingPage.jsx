import React from "react";
import { VerticalTabs } from "../../components/ManagePrintingPage/VerticalTab.jsx";
import ButtonList from "../../components/ManagePrintingPage/ButtonList.jsx";
//import { CookieDialog} from "../../components/ManagePrintingPage/Dialog";
import docx from "../../assets/filetypeicon/docx.png"
import jpg from "../../assets/filetypeicon/jpg.png"
import pdf from "../../assets/filetypeicon/pdf.png"
import svg from "../../assets/filetypeicon/svg.png"
import xls from "../../assets/filetypeicon/xls.png"
//import PrinterItem from "../../components/PrinterItem";
import FormPaper from "../../components/FormPaper";

import {
  Breadcrumbs,
  Button,
  ButtonGroup,
  Card,
  ListItem,
  button,
  Typography
} from "@material-tailwind/react";
import {
  Cog6ToothIcon,
  Cog8ToothIcon,
  MapIcon,
  FlagIcon
} from "@heroicons/react/24/solid";

const ManagePrintingPage = () => {
  let items = [
    /*
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
      desc:
        //ACCESS DATABASE, GET TYPE LIST, EXPORT TO BELOW COMPONENT 
        <Card>
          <ButtonGroup style={{
            margin:'20px',
          }}> 
          <Button style={{
            margin:'20px',
            background:'white'
          }}>
          <img className="col-span-1 w-16" src={logo} alt="logo" />
          </Button>
          </ButtonGroup>
        </Card>,
    },
    { 
      label: "Xuất báo cáo định kỳ",
      value: "3",
      desc: <Card>
        7897898789
          </Card>,
    },
    */
  ];
  let _typeList = ['pdf', 'jpg', 'docx', 'xls', 'svg', 'xlsx', 'pptx', 'png', 'xps',]
  let _pngList = []
  for (let type in _typeList){
    _pngList.push("/src/assets/filetypeicon/" + _typeList[type] + '.png');  
  }
  let _buttonList = []
  const Vertab = () => {
 

  // for (let type in _typeList) {
  //   if (_toggle[type] === 1)
  //   _buttonList.push(
  //     <Button className="w-30 bg-red-700 m-4">
  //       <img className="" src={_pngList[type]} alt={_typeList[type]} />
  //     </Button>
  //     // {
  //     //   idx: type,
  //     //   comp: <CookieDialog onClick={handleButtonClick(type)}
          
  //     //   img = {<img className="" src={_pngList[type]} alt={_typeList[type]} />}
  //     //   text = {<text>Bạn muốn xóa định dạng {_typeList[type]}</text>}
  //     //   />
  //     // }
  //     )
  // }
  // _buttonList.push(
  //   // <Button className="w-30 bg-red-700 m-4">
  //   //   <img className="" src={_pngList[type]} alt={_typeList[type]} />
  //   // </Button>
  //   <CookieDialog 
  //     img = {<img className="" src={plussign} alt={'add'} />}
  //     text = {<text>Bạn muốn thêm định dạng nào?</text>}
      
  //   />
  //   )
  let newtabItems = createTabItem(
    "Cài đặt loại file in", 1,
    React.createElement(MapIcon, { className: "w-5 h-5" }),
      //{_buttonList.map(_buttonList => _buttonList.comp)}
    <div>
      {ButtonList(_typeList,_pngList)}
    </div>)
  items.push(newtabItems)
  newtabItems = createTabItem("Cài đặt tặng giấy", 2,
  React.createElement(Cog6ToothIcon, { className: "w-5 h-5" }),
    <div>
      <FormPaper/>
    </div>)
  items.push(newtabItems)
  newtabItems = createTabItem("Xuất báo cáo", 3,
  React.createElement(Cog8ToothIcon, { className: "w-5 h-5" }),
    <Card>
    </Card>)
  items.push(newtabItems)
  const componentStyle = {
    width: "200px",
    height: "50px",
    outerHeight: "50px",
    textAlign: "left",
    //backgroundColor: 'lightblue',
  };
  return VerticalTabs(items)
  //let VerticalTab = VerticalTabs(items)
  } 
  
  return (
    
    <div className="grid grid-rows-12 grids-cols-12 gap-5 m-5">
      <div className="flex items-center h-20">
        <div className="cols-span-5 items-center h-20">
        <Typography variant="h3" className="basis-1/5 font-bold" >
          QUẢN LÝ IN ẤN
        </Typography>
        </div>
        <div className="cols-span-7 items-center">
          <Breadcrumbs>
            <a href="../" className="opacity-60">
              Trang chủ
            </a>
            <a href="#" className="opacity-60">
              Quản lý in ấn
            </a>
            <a href="#">Cài đặt kiểu file in</a>
          </Breadcrumbs>
        </div>
      </div>
      {/* <text style={componentStyle}>
          Menu
        </text> */}
      {Vertab()}
    </div>
  )
};

export default ManagePrintingPage;
