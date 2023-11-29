import React, { useState, useEffect } from "react";
import { Select, Option, Button } from "@material-tailwind/react";

const PrintingConfig = () => {
  const [value, setValue] = useState("");  
  const handleChange = (selectedOption) => {
    setValue(selectedOption);
    console.log(selectedOption);
  };
  useEffect(() => {
   
  }, [value]);
  // const handleCustomChange = (event) => {
  //   setCustomValue(event.target.value );
  // };
  const [value_canle, setValue1] = useState("");  
  const handleChange_canle = (selectedOption) => {
    setValue1(selectedOption);
    console.log(selectedOption);
  };
  useEffect(() => {
   
  }, [value_canle]);

  const [value_tile, setValue2] = useState("");  
  const handleChange_tile = (selectedOption) => {
    setValue2(selectedOption);
    console.log(selectedOption);
  };
  useEffect(() => {
   
  }, [value_canle]);
  return (
    <div className="flex w-1/3 flex-col space-y-5 rounded bg-[#70c1ff] p-5 text-black md:w-[25%]">
      <p style={{ fontSize: "25px" }}>CẤU HÌNH FILE IN</p>
      <hr className="border border-black" />
      <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-2">
        <div className="self-start">Số trang:</div>
        <div className="grid-rows-2 space-y-2">
          <Select
            options={[
              { value: "", label: "Tùy chọn" },
              { value: "option1", label: "Mặc Định" },
              { value: "option2", label: "Tối thiểu" },
              { value: "custom1", label: "Tùy chỉnh" },
            ]}
            value={value}
            onChange={handleChange}
            id="ty-le"
            label="Tùy chọn"
            className="bg-white"
            containerProps={{ className: "min-w-[50px]" }}
          >
            <Option value="option1">Chỉ in trang chẵn</Option>
            <Option value="option2">Chỉ in trang lẻ</Option>
            <Option value="custom1">Tùy chỉnh</Option>
          </Select>
            {value === "custom1"&& (
              <input
                type="number"
                id="numpage-input"
                aria-label="number_of_page"
                className="block w-full rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="E.g: 1-5, 3-8..."
              />
            )}
        </div>
        <div>Page Layout:</div>
        <Select
          label="Tùy chọn"
          className="w-full bg-white"
          containerProps={{ className: "min-w-[50px]" }}
        >
          <Option>Potrait</Option>
          <Option>Landscape</Option>
        </Select>
        <div>Cỡ giấy:</div>
        <Select
          label="Tùy chọn"
          className="bg-white"
          containerProps={{ className: "min-w-[50px]" }}
        >
          <Option>A4</Option>
          <Option>A3</Option>
          <Option>A5</Option>
          <Option>SuperB</Option>
          <Option>Letter</Option>
          <Option>No scaling</Option>
        </Select>
        <div>Số tờ mỗi mặt:</div>
        <div className="">
          <form class="">
            <input
              type="number"
              id="numperpage-input"
              aria-label="number_per_page"
              class=" block w-full rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value="1"
            />
          </form>
        </div>
        <div className="self-start">Căn lề:</div>
        <div className="grid-rows-2 space-y-2">
          <Select
            options={[
              { value: "", label: "Tùy chọn" },
              { value: "option1", label: "Mặc Định" },
              { value: "option2", label: "Tối thiểu" },
              { value: "custom", label: "Tùy chỉnh" },
            ]}
            value={value_canle}
            onChange={handleChange_canle}
            id="ty-le"
            label="Tùy chọn"
            className="bg-white"
            containerProps={{ className: "min-w-[50px]" }}
          >
            <Option value="option1">Măc định</Option>
            <Option value="option2">Tối thiểu</Option> 
            <Option value="custom">Tùy chỉnh</Option>
          </Select>
            {value_canle === "custom"&& (
              <div className="grid grid-cols-2 gap-1">
              <input
                type="text"
                id="numpage-input"
                aria-label="number_of_page"
                className="block w-full rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Top:"
              />
              <input
                type="text"
                id="numpage-input"
                aria-label="number_of_page"
                className="block w-full rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Bot:"
              />
              <input
                type="text"
                id="numpage-input"
                aria-label="number_of_page"
                className="block w-full rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Left:"
              />
              <input
                type="text"
                id="numpage-input"
                aria-label="number_of_page"
                className="block w-full rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Right:"
              />
               </div>
            )}
            </div>
        <div className="self-start">Tỉ lệ:</div>
        <div className="grid-rows-2 space-y-2">
          <Select
            options={[
              { value: "", label: "Tùy chọn" },
              { value: "option1", label: "Mặc Định" },
              { value: "option2", label: "Tối thiểu" },
              { value: "custom2", label: "Tùy chỉnh" },
            ]}
            value={value_tile}
            onChange={handleChange_tile}
            id="ty-le"
            label="Tùy chọn"
            className="bg-white"
            containerProps={{ className: "min-w-[50px]" }}
          >
            <Option value="option1">Măc định</Option>
            <Option value="option2">Tối thiểu</Option>
            <Option value="custom2">Tùy chỉnh</Option>
          </Select>
            {value_tile === "custom2"&& (
              <input
                type="number"
                id="numpage-input"
                aria-label="number_of_page"
                className="block w-full rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Nhập số từ 10-200(%)"
              />
            )}
        </div>
        <div>Số bản in:</div>
        <div className="mx- x max-w-sm">
          <form class="mx-auto max-w-sm">
            <input
              type="number"
              id="numofdocs-input"
              aria-label="number_of_docs"
              class="block w-full rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value="1"
            />
          </form>
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <div className="col-span-1"></div>
        <div className="col-span-1">
          <div className="flex w-max gap-4">
            <Button size="sm" color="blue">
              Xác nhận
            </Button>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex w-max gap-4">
            <Button size="sm" color="white">
              Tiếp tục
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PrintingConfig;
