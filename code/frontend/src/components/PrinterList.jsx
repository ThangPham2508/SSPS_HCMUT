import {
  Switch,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import PrinterImage from "../assets/PrinterImage.png";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import FileUploadDialog from "./FileUploadDialog";
import PrinterInfoDialog from "./PrinterInfoDialog";
import { useSetStatusMutation, useDeletePrinterMutation } from "../slices/printerApiSlice";

const PrinterItem = ({ printer, canSelect }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((open) => !open);

  const [openInfo, setOpenInfo] = useState(false);
  const handleOpenInfo = () => setOpenInfo((open) => !open);

  const [checked, setChecked] = useState(printer.status === "enabled");
  const handleChecked = () => setChecked((checked) => !checked);

  const [setStatus] = useSetStatusMutation();
  const [deletePrinter] = useDeletePrinterMutation();

  useEffect(() => {
    setStatus({id: printer._id, status: (checked ? 'enabled' : 'disabled')});
  }, [checked]);  

  const handleChange = () => {
    handleChecked();
  }

  const handleDelete = async () => {
    await deletePrinter(printer._id);
    window.location.reload();
  }

  useEffect(() => {
    console.log(printer);
  })

  return (
    <div className="grid grid-cols-6 items-center gap-10">
      <img src={PrinterImage} className="col-span-1" />
      <div className="col-span-3">
        <Typography variant="h5" color="blue-gray" className="mb-2 font-bold">
          Mã máy: {printer.number}
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2 font-bold">
          Vị Trí: {`${printer.location.campus} - ${printer.location.building} - ${printer.location.room}`}
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2 font-bold">
          Hàng chờ: {printer.queue}
        </Typography>
      </div>
      {canSelect ? (
        <>
          <div className="col-span-2 text-center">
            <Button
              color="blue"
              size="lg"
              className="w-4/5 rounded-full font-medium"
              onClick={handleOpen}
            >
              Chọn
            </Button>
          </div>
          <FileUploadDialog open={open} handleOpen={handleOpen} printerId={printer._id}/>
        </>
      ) : (
        <>
          <div className="grid justify-items-center">
            <Switch
              size="lg"
              ripple={false}
              className="h-full w-full checked:bg-[#2ec946]"
              checked={checked}
              onChange={handleChange}
              containerProps={{
                className: "w-24 h-12",
              }}
              circleProps={{
                className:
                  "left-1 border-none peer-checked:translate-x-12 w-10 h-10",
              }}
            />
          </div>
          <div className="flex gap-5 items-center">
            <Button
              variant="filled"
              color="red"
              size="lg"
              className="rounded-full font-medium"
              onClick={handleDelete}
            >
              Xóa
            </Button>
            <IconButton variant="text" onClick={handleOpenInfo}>
              <InformationCircleIcon className="w-7" color="blue" />
            </IconButton>
          </div>
          <PrinterInfoDialog open={openInfo} handleOpen={handleOpenInfo} printer={printer}/>
        </>
      )}
    </div>
  );
};

const PrinterList = ({ printers, canSelect }) => {
  return (
    <div className="flex flex-col gap-10">
      {printers?.map((printer, index) => (
        <PrinterItem key={index} printer={printer} canSelect={canSelect} />
      ))}
    </div>
  );
};

export default PrinterList;
