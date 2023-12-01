import { Card, Input, Select, Option, Button, Typography } from "@material-tailwind/react";

const AddPrinter = () => {
    return (
        <Card color="transparent" shadow={false}>
            <Typography variant="h6" color="blue-gray">
                Thông tin máy in
            </Typography>
            <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10 p-2">
                <div className="mb-1 flex flex-col gap-4">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Vị trí (Cơ sở - tòa - phòng)
                    </Typography>
                    <Input
                        placeholder="Nhập vị trí của máy in"
                        className=" border-none placeholder:text-gray-400 bg-gray-100"
                        labelProps={{
                        className: "before:content-none after:content-none",
                        }}
                    />
                </div>
                <div className="mb-1 flex flex-col gap-4">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Hãng máy
                    </Typography>
                    <Select>
                        <Option>Canon</Option>
                        <Option>HP</Option>
                        <Option>Epson</Option>
                        <Option>Brother</Option>
                        <Option>Fuji Xerox</Option>
                        <Option>SamSung</Option>
                        <Option>Panasonic</Option>
                    </Select>
                </div>
                <div className="mb-1 flex flex-col gap-4">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Số hiệu
                    </Typography>
                    <Input
                        placeholder="Nhập ID"
                        className=" border-none placeholder:text-gray-400 bg-gray-100"
                        labelProps={{
                        className: "before:content-none after:content-none",
                        }}
                    />
                </div>
                <div className="mb-1 flex flex-col gap-4">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Mô tả
                    </Typography>
                    <Input
                        placeholder="Nhập mô tả"
                        className=" border-none placeholder:text-gray-400 bg-gray-100"
                        labelProps={{
                        className: "before:content-none after:content-none",
                        }}
                    />
                </div>
                <div className=" pt-9 mb-1 grid grid-cols-2 gap-4 col-start-2 justify-items-end ">
                    <Button size="md" className=" col-start-2 self-center rounded-full " color='blue'>
                        Xác nhận
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default AddPrinter;