import React from "react";
import { VerticalTabs } from "../../components/ManagePrintingPage/VerticalTab";
//import { CookieDialog} from "../../components/ManagePrintingPage/Dialog";
import docx from "../../assets/filetypeicon/docx.png"
import jpg from "../../assets/filetypeicon/jpg.png"
import pdf from "../../assets/filetypeicon/pdf.png"
import svg from "../../assets/filetypeicon/svg.png"
import xls from "../../assets/filetypeicon/xls.png"
import plussign from "../../assets/filetypeicon/plus.png"
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
import CookieDialog from "../../components/ManagePrintingPage/Dialog";

// const fs = require('fs');
// const path = require('path');

// // // Specify the path to the folder containing your files
// const folderPath = "../../assets/filetypeicon";

// // // // Read files in the folder
// fs.readdirSync(folderPath).forEach(file => {
//   //     // Check if the file is a icon png file
//   if (path.extname(file) === '.png') {
//     //         // Construct the full path to the file
//     const filePath = path.join(folderPath, file);
//     //         // Import the file
//     const importedModule = require(filePath);

//     //         // Do something with the imported module if needed
//     console.log(`Imported module from ${filePath}`);
//   }
// });

function createTabItem(label, value, icon, desc) {
  return {
    label: label, value: value, icon: icon, desc: desc
  }
}
const ManagePrintingPage = () => {
  let items = [
    /*
    {
      label: "Cài đặt tặng giấy",
      value: "1",
      //icon: React.createElement(Cog6ToothIcon, { className: "w-5 h-5" }),
      desc: <Card>
        123123123
          </Card>,
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
  let _typeList = ['pdf', 'jpg', 'docx', 'xls', 'svg']
  let _pngList = [pdf, jpg, docx, xls, svg]
  let _buttonList = []
  for (let type in _typeList) {
    _buttonList.push(
      // <Button className="w-30 bg-red-700 m-4">
      //   <img className="" src={_pngList[type]} alt={_typeList[type]} />
      // </Button>
      <CookieDialog 
        img = {<img className="" src={_pngList[type]} alt={_typeList[type]} />}
        text = {<text>Bạn muốn xóa định dạng {_typeList[type]}</text>}
        
      />
      )
  }
  _buttonList.push(
    // <Button className="w-30 bg-red-700 m-4">
    //   <img className="" src={_pngList[type]} alt={_typeList[type]} />
    // </Button>
    <CookieDialog 
      img = {<img className="" src={plussign} alt={'add'} />}
      text = {<text>Bạn muốn thêm định dạng nào?</text>}
      
    />
    )
  let newtabItems = createTabItem(
    "Cài đặt loại file in",
    1,
    React.createElement(MapIcon, { className: "w-5 h-5" }),
    <div class="grid grid-cols-2 gap-8 lg:grid-cols-4 bg-blue-200">
      {_buttonList}
    </div>)
  items.push(newtabItems)
  newtabItems = createTabItem("Cài đặt tặng giấy", 2,
  React.createElement(Cog6ToothIcon, { className: "w-5 h-5" }),
    <Card>
    </Card>)
  items.push(newtabItems)
  newtabItems = createTabItem("Cài đặt tặng giấy", 3,
  React.createElement(Cog8ToothIcon, { className: "w-5 h-5" }),
    <Card>
    </Card>)
  items.push(newtabItems)
  const componentStyle = {
    width: '200px',
    height: '50px',
    outerHeight: '50px',
    textAlign: 'left'
    //backgroundColor: 'lightblue', 
  };
  let VerticalTab = VerticalTabs(items)
  return (
    <div className="grid grid-rows-12 grids-cols-12 gap-5 m-5">
      <div className="flex items-center h-20">
        <Typography variant="h3" className="basis-1/5 font-bold" >
          QUẢN LÝ IN ẤN
        </Typography>

        <div className=" basis-4/5">
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
      {VerticalTab}
    </div>
  )
};

export default ManagePrintingPage;
