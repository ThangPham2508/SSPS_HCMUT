import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
} from "@material-tailwind/react";
export function VerticalTabs({ item }) {
  const componentStyle = {
    width: "200px",
    height: "60px",
    paddingLeft: "2%",
    paddingRight: "2%",
    paddingTop: "6%",
    paddingBottom: "6%",
    textAlign: "left",
    margin: "2%",
  };
  return (
    <Tabs value="1" orientation="vertical">
      <TabsHeader
        className="bg-transparent"
        indicatorProps={{
          className: "bg-gray-900/10 shadow-none !text-gray-900",
        }}
      >
        {item.map(({ label, value, icon }) => (
          <Tab
            key={value}
            value={value}
            className="flex items-center justify-start gap-2"
            style={componentStyle}
          >
            <div className="flex gap-3">
              {icon}
              <Typography>{label}</Typography>
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        style={{ width: "80%", alignItems: "flex-start", margin: "2%" }}
      >
        {item.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="py-0">
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
