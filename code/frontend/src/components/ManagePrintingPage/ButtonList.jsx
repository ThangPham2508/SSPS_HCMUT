import { useEffect, useState } from "react";
import plussign from "../../assets/filetypeicon/plus.png";
import {
  useGetTypesQuery,
  useAddTypeMutation,
  useDeleteTypeMutation,
} from "../../slices/configApiSlice";
import typeIcon from "../../assets/filetypeicon/filetype.js";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const ButtonList = () => {
  const { data: typeList } = useGetTypesQuery();
  const [addType] = useAddTypeMutation();
  const [deleteType] = useDeleteTypeMutation();

  useEffect(() => {
    console.log(typeList);
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((open) => !open);
  const [openAdd, setOpenAdd] = useState(false);
  const handleOpenAdd = () => setOpenAdd((openAdd) => !openAdd);
  const [newButtonType, setNewButtonType] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const handleButtonClick = (type) => {
    setSelectedType(type);
    setOpen(true);
  };

  const handleButtonAddClick = () => {
    setOpenAdd(true);
  };

  const handleButtonConfirm = () => {
    console.log("deleteing...");
    deleteType(selectedType);
    setOpen(false);
    window.location.reload();
  };

  const handleButtonAddConfirm = (type) => {
    addType(type);
    setOpen(false);
    window.location.reload();
  };

  const handleButtonCancel = () => {
    setOpen(false);
  };

  const handleButtonAddCancel = () => {
    setOpenAdd(false);
  };

  return (
    <div className="grid grid-cols-2 gap-8 bg-blue-200 lg:grid-cols-4">
      {typeList?.map((type, index) => (
        <div key={index}>
          <button
            className="w-30 m-4 bg-red-700"
            key={index}
            onClick={() => handleButtonClick(type)}
          >
            <img className="" src={typeIcon[type]} alt={typeList[index]} />
          </button>
        </div>
      ))}
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Bạn có muốn xóa định dạng {selectedType}?</DialogHeader>
        <DialogBody className="flex flex-col gap-3"></DialogBody>
        <DialogFooter>
          <Button className="m-4" onClick={handleButtonConfirm}>
            Yes
          </Button>
          <Button className="m-4" onClick={handleButtonCancel}>
            No
          </Button>
        </DialogFooter>
      </Dialog>
      <button
        className="w-30 m-4 bg-red-700"
        onClick={() => handleButtonAddClick()}
      >
        <img className="" src={plussign} alt={"add"} />
      </button>
      <Dialog open={openAdd} handler={handleOpenAdd}>
        <DialogHeader>Bạn hãy nhập định dạng muốn thêm</DialogHeader>
        <DialogBody className="flex flex-col gap-3">
          <input
            type="text"
            value={newButtonType}
            onChange={(e) => setNewButtonType(e.target.value)}
          />
        </DialogBody>
        <DialogFooter>
          <Button
            className="m-4"
            onClick={() => handleButtonAddConfirm(newButtonType)}
          >
            Yes
          </Button>
          <Button className="m-4" onClick={handleButtonAddCancel}>
            No
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default ButtonList;
