import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Card,
} from "@material-tailwind/react";
import { Cog6ToothIcon, FlagIcon } from "@heroicons/react/24/solid";
export function VerticalTabs({items}) {
  // const data = [
  // [
  //     {
  //         label: "Cài đặt tặng giấy",
  //         value: "1",
  //         desc: <Card>
  //             </Card>,
  //       },
  //       {
  //         label: "Quản lý in ấn",
  //         value: "2",
  //         desc: <Card>
  //             </Card>,
  //       },
  //       {
  //         label: "Xuất báo cáo định kỳ",
  //         value: "3",
  //         desc: <Card>
  //             </Card>,
  //       },
  //  ];
  //   {
  //     label: "HTML",
  //     value: "html",
  //     desc: <Card>
  //         </Card>,
  //   },
  // ];
  const componentStyle = {
    width: "200px",
    height: "60px",
    paddingLeft: "2%",
    paddingRight: "2%",
    paddingTop: "6%",
    paddingBottom: "6%",
    textAlign: "left",
    //backgroundColor: 'lightblue',
  };
  return (
    <Tabs value="1" orientation="vertical">
      <TabsHeader
        className="bg-transparent"
        indicatorProps={{
          className: "bg-gray-900/10 shadow-none !text-gray-900",
        }}
      >
        {items.map(({ label, value, icon }) => (
          <Tab
            key={value}
            value={value}
            className="place-items-start"
            style={componentStyle}
            icon={icon}
          >
            <div>
              <text style={{ textAlign: "left" }}>{label}</text>
            </div>
          </Tab>
        ))}
        {/* {data.map(({ label, value, icon }) => (
          <Tab key={value} value={value} className="place-items-start">
            <div className="flex items-center gap-2">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
            ))} */}
      </TabsHeader>
      <TabsBody style={{ width: "60%", alignItems: "flex-start" }}>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="py-0">
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
