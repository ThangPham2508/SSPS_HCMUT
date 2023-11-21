import React from "react";
import { VerticalTabs } from "../../components/ManagePrintingPage/VerticalTab";
import docx from "../../assets/filetypeicon/docx.png"
import jpg from "../../assets/filetypeicon/jpg.png"
import pdf from "../../assets/filetypeicon/pdf.png"
import svg from "../../assets/filetypeicon/svg.png"
import xls from "../../assets/filetypeicon/xls.png"
import {
  Breadcrumbs,
  Button,
  ButtonGroup,
  Card,
  ListItem,
  button,
} from "@material-tailwind/react";
import {
  Cog6ToothIcon,
  FlagIcon
} from "@heroicons/react/24/solid";

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
  for (let type in _typeList){
    _buttonList.push(
      <Button className="flex bg-red-700" style={{
        margin:'20px'
      }}>
      <img className="flex w-16" src={_pngList[type]} alt={_typeList[type]} />
      </Button>
    )
  }
  let newtabItems = createTabItem("Cài đặt tặng giấy", 1, React.createElement(FlagIcon, { className: "w-5 h-5" }),
  <Card> 
    <ButtonGroup class="grid grid-cols-2 gap-4 lg:grid-cols-4 bg-blue-200">
      {_buttonList}
    </ButtonGroup>
  </Card>)
  items.push(newtabItems)
  newtabItems = createTabItem("Cài đặt tặng giấy", 2, 
  <Card> 
  </Card>)
  items.push(newtabItems)
  newtabItems = createTabItem("Cài đặt tặng giấy", 3, 
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
  let aaa = VerticalTabs(items)
  return (
    <Card 
    style={{
      width : '100%',
      paddingLeft: '4%', paddingRight:'4%', paddingTop: '6%', paddingBottom: '6%',
      }}>
      
      <text style={{fontWeight : 'bold', fontSize : '30px'}}>
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
  )
};

export default ManagePrintingPage;
