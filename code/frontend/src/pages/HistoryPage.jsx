import {
  Typography,
  Radio,
  List,
  ListItem,
  ListItemPrefix,
  Card,
  Chip,
  Button,
} from "@material-tailwind/react";
import a4 from "../assets/a4.jpg";
import QuantitySelector from "../components/QuantitySelector";
import Invoice from "../components/Invoice";

const CustomListItem = ({ htmlForId, labelText }) => {
  return (
    <ListItem className="border-2 border-solid border-[#dae2e8] p-0">
      <label
        htmlFor={htmlForId}
        className="flex w-full cursor-pointer items-center px-3 py-2"
      >
        <ListItemPrefix className="mr-3">
          <Radio
            name="vertical-list"
            id={htmlForId}
            ripple={false}
            className="hover:before:opacity-0"
            containerProps={{
              className: "p-0",
            }}
          />
        </ListItemPrefix>
        <Typography className="font-medium">{labelText}</Typography>
      </label>
    </ListItem>
  );
};

const CardItem = ({ title, price, discount }) => {
  return (
    <Button
      color="white"
      className="grid h-16 w-96 grid-cols-5 grid-rows-2 items-center gap-10"
    >
      <div className="col-span-3 row-span-2 flex flex-col justify-center ps-5">
        <Typography variant="h5">{title}</Typography>
        <Typography variant="small">{price}</Typography>
      </div>
      <Chip
        color="blue"
        value={`Giảm ${discount}`}
        className="text-md col-span-2 row-span-2 my-3 justify-self-center"
      />
    </Button>
  );
};

const HistoryPage = () => {
  const productList = [
    {
      name: 'Tesla Truck',
      quantity: 48,
      rate: '$10.00',
    },
    {
      name: 'Tesla Charging Station',
      quantity: 4,
      rate: '$10.00',
    },
  ];

  return (
    <div className="grid grid-cols-5">
      <div className="bg-black">a</div>
      <div className="col-span-2 flex flex-col p-5 gap-10">
        <div className="flex flex-col items-center">
          <Typography variant="h4">Số giấy còn lại: 49 tờ A4</Typography>
          <div className="flex flex-col gap-5 self-center">
            <figure>
              <img src={a4} alt="a4" className="w-48" />
              <Typography
                as="caption"
                variant="small"
                className="mt-2 text-left font-normal"
              >
                Đơn giá: 200đ/ tờ A4
              </Typography>
            </figure>
            <div className="flex items-center gap-3">
              <Typography variant="h5">Số lượng: </Typography>
              <QuantitySelector />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <Typography variant="h5">Chọn hình thức thanh toán</Typography>
          <List className="gap-3">
            <CustomListItem
              htmlForId="pay-with-bkpay"
              labelText="Thanh toán qua BKPay"
            />
            <CustomListItem
              htmlForId="pay-with-momo"
              labelText="Thanh toán bằng ví MoMo"
            />
            <CustomListItem
              htmlForId="pay-with-zalopay"
              labelText="Thanh toán bằng ví ZaloPay"
            />
            <CustomListItem
              htmlForId="pay-with-vnpay"
              labelText="Thanh toán bằng VNPay"
            />
          </List>
        </div>
      </div>
      <div className="col-span-2 flex flex-col gap-5 border-l-2 border-l-blue-gray-200 ps-5 py-10">
        <Card className="flex flex-col items-center gap-3 bg-[#d9d9d9] py-5">
          <Typography variant="h5" color="black">
            Gói khuyến mãi
          </Typography>
          <CardItem title="Gói 100 tờ A4" price="20.000đ" discount="5%" />
          <CardItem title="Gói 200 tờ A4" price="40.000đ" discount="10%" />
          <CardItem title="Gói 500 tờ A4" price="100.000đ" discount="20%" />
        </Card>
        <Card className="flex flex-col items-center gap-3 bg-[#d9d9d9] py-5">
          <Typography variant="h5" color="black">
            Đơn hàng
          </Typography>
          <Invoice products={productList}/>
        </Card>
        <Button color="blue" className="self-center">
          Mua Ngay
        </Button>
      </div>
    </div>
  );
};

export default HistoryPage;
