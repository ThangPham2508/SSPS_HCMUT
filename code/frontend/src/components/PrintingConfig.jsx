import { useState, useEffect } from "react";
import {
  Select,
  Option,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { useCreateLogMutation } from "../slices/logApiSlice";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import { useGetFileQuery } from "../slices/fileApiSlice";
import { useNavigate } from "react-router-dom";
import { useUpdatePageMutation } from "../slices/authApiSlice";

const ScheduleDialog = ({
  open,
  handleOpen,
  date,
  setDate,
  handleSubmit,
  numPages,
  formValues,
}) => {
  const { pageBalance } = useSelector((state) => state.auth.userData);

  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader>Schedule Print</DialogHeader>
      <DialogBody className="flex flex-col justify-center gap-10">
        <Typography variant="h6">Số giấy hiện tại: {pageBalance}</Typography>
        <Typography variant="h6">
          Số giấy cần thiết: {calculatePage({ numPages, ...formValues })}
        </Typography>
        <DateTimePicker onChange={setDate} value={date} className="h-20" />
      </DialogBody>
      <DialogFooter>
        <Button
          variant="gradient"
          color="blue"
          onClick={() => {
            handleOpen();
            handleSubmit();
          }}
        >
          <span>OK</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

function calculatePage({
  numPages,
  pagesToBePrinted,
  pagesToBePrintedCustom,
  pagePerSide,
  doubleSided,
  paperSize,
  numberOfCopies,
}) {
  let total_pages;
  if (pagesToBePrinted === "all") {
    total_pages = numPages;
  } else {
    let ranges = pagesToBePrintedCustom
      .split(",")
      .map((r) => r.split("-").map(Number));
    total_pages = ranges.reduce((sum, r) => sum + r[1] - r[0] + 1, 0);
  }

  total_pages *= numberOfCopies;

  if (doubleSided === "double") {
    total_pages /= 2;
  }

  total_pages /= pagePerSide;

  let paperValue;
  switch (paperSize) {
    case "a4":
      paperValue = 1;
      break;
    case "a3":
      paperValue = 2;
      break;
    case "a5":
      paperValue = 0.5;
      break;
    case "letter":
      paperValue = 0.75;
      break;
    case "superb":
      paperValue = 2.5;
      break;
    default:
      paperValue = 1;
  }

  total_pages *= paperValue;

  return Math.ceil(total_pages);
}

const PrintingConfig = ({ fileId, numPages }) => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    pagesToBePrinted: "all",
    pagesToBePrintedCustom: "",
    pageLayout: "portrait",
    paperSize: "a4",
    pagePerSide: 1,
    doubleSided: "double",
    margin: "default",
    marginCustomTop: 0,
    marginCustomBottom: 0,
    marginCustomLeft: 0,
    marginCustomRight: 0,
    numberOfCopies: 1,
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((open) => !open);

  const { data: file } = useGetFileQuery(fileId);

  const [date, setDate] = useState(new Date());

  const { _id: userId } = useSelector((state) => state.auth.userData);
  const [createLog, { isError, error }] = useCreateLogMutation();
  const [updatePage] = useUpdatePageMutation();

  const handleSubmit = async () => {
    try {
      const qty = calculatePage({ numPages, ...formValues });
      const result = await updatePage({ quantity: 0 - qty, id: userId });
      if (result.error) {
        alert(result.error.data.message);
        navigate("/printing");
      } else {
        const payload = {
          userId,
          fileId,
          printerId: file.printerId,
          schedule: date,
          ...formValues,
        };
        await createLog(payload).unwrap();
        navigate("/history");
        window.location.reload();
      }
    } catch (err) {
      if (isError) {
        console.error("Failed to create log:", error);
      }
    }
  };

  const handleSelectChange = (name) => (selectedOption) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: selectedOption,
    }));
  };

  const handleInputChange = (name) => (e) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: e.target.value,
    }));
  };

  useEffect(() => {}, [formValues.value_canle]);
  return (
    <>
      <div className="flex flex-col space-y-5 rounded bg-[#70c1ff] p-5 text-black">
        <p style={{ fontSize: "25px" }}>CẤU HÌNH FILE IN</p>
        <hr className="border border-black" />
        <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-2">
          <div className="self-center">Số trang:</div>
          <div className="grid-rows-2 space-y-2">
            <Select
              value={formValues.pagesToBePrinted}
              onChange={handleSelectChange("pagesToBePrinted")}
              id="ty-le"
              label="Tùy chọn"
              className="bg-white"
              containerProps={{ className: "min-w-[50px]" }}
            >
              <Option value="all">Toàn bộ</Option>
              <Option value="custom">Tùy chỉnh</Option>
            </Select>
            {formValues.pagesToBePrinted === "custom" && (
              <input
                type="text"
                id="numpage-input"
                aria-label="number_of_page"
                className="block w-full rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="E.g: 1-5, 3-8..."
                value={formValues.pagesToBePrintedCustom}
                onChange={handleInputChange("pagesToBePrintedCustom")}
              />
            )}
          </div>
          <div>Page Layout:</div>
          <Select
            label="Tùy chọn"
            className="w-full bg-white"
            containerProps={{ className: "min-w-[50px]" }}
            value={formValues.pageLayout}
            onChange={handleSelectChange("pageLayout")}
          >
            <Option value="portrait">Portrait</Option>
            <Option value="landscape">Landscape</Option>
          </Select>
          <div>Cỡ giấy:</div>
          <Select
            label="Tùy chọn"
            className="bg-white"
            containerProps={{ className: "min-w-[50px]" }}
            value={formValues.paperSize}
            onChange={handleSelectChange("paperSize")}
          >
            <Option value="a4">A4</Option>
            <Option value="a3">A3</Option>
            <Option value="a5">A5</Option>
            <Option value="superb">SuperB</Option>
            <Option value="letter">Letter</Option>
            <Option value="noscaling">No scaling</Option>
          </Select>
          <label htmlFor="numberpage-input">Số tờ mỗi mặt:</label>
          <input
            type="number"
            id="numberpage-input"
            aria-label="number_per_page"
            className=" block w-full rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            value={formValues.pagePerSide}
            onChange={handleInputChange("pagePerSide")}
          />
          <div className="self-center">Số mặt:</div>
          <Select
            label="Tùy chọn"
            className="bg-white"
            containerProps={{ className: "min-w-[50px]" }}
            value={formValues.doubleSided}
            onChange={handleSelectChange("doubleSided")}
          >
            <Option value="double">Hai mặt</Option>
            <Option value="one">Một mặt</Option>\
          </Select>
          <div className="self-center">Căn lề:</div>
          <div className="grid-rows-2 space-y-2">
            <Select
              value={formValues.margin}
              onChange={handleSelectChange("margin")}
              id="ty-le"
              label="Tùy chọn"
              className="bg-white"
              containerProps={{ className: "min-w-[50px]" }}
            >
              <Option value="default">Măc định</Option>
              <Option value="custom">Tùy chỉnh</Option>
            </Select>
            {formValues.margin === "custom" && (
              <div className="grid grid-cols-2 gap-1">
                <input
                  type="text"
                  id="numpage-input"
                  aria-label="number_of_page"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Top:"
                  value={formValues.marginCustomTop}
                  onChange={handleInputChange("marginCustomTop")}
                />
                <input
                  type="text"
                  id="numpage-input"
                  aria-label="number_of_page"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Bottom:"
                  value={formValues.marginCustomBottom}
                  onChange={handleInputChange("marginCustomBottom")}
                />
                <input
                  type="text"
                  id="numpage-input"
                  aria-label="number_of_page"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Left:"
                  value={formValues.marginCustomLeft}
                  onChange={handleInputChange("marginCustomLeft")}
                />
                <input
                  type="text"
                  id="numpage-input"
                  aria-label="number_of_page"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Right:"
                  value={formValues.marginCustomRight}
                  onChange={handleInputChange("marginCustomRight")}
                />
              </div>
            )}
          </div>
          <div>Số bản in:</div>
          <div className="max-w-sm">
            <input
              type="number"
              id="numofdocs-input"
              aria-label="number_of_docs"
              className="block w-full rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value={formValues.numberOfCopies}
              onChange={handleInputChange("numberOfCopies")}
            />
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          <Button size="sm" color="blue" onClick={handleOpen}>
            Xác nhận
          </Button>
        </div>
      </div>
      <ScheduleDialog
        open={open}
        handleOpen={handleOpen}
        date={date}
        setDate={setDate}
        handleSubmit={handleSubmit}
        numPages={numPages}
        formValues={formValues}
      />
    </>
  );
};
export default PrintingConfig;
