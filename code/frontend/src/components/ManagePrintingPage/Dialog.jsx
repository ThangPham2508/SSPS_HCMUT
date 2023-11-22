import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";

const CookieDialog = ({img,text}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="filled"
        size="sm"
        className="text-md bg-[#b8c1ca] font-normal normal-case text-black m-2"
      >
        {img}
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>{text}</DialogHeader>
        <DialogBody className="flex flex-col gap-3">
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="blue" onClick={handleOpen}>
            <span>Xác nhận</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default CookieDialog;
