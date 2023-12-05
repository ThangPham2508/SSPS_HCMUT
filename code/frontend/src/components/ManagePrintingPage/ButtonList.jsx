import { useEffect, useState } from "react";
import plussign from "../../assets/filetypeicon/plus.png";
import { useGetTypesQuery } from "../../slices/configApiSlice";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const ButtonList = (_toggle, _pngList) => {
  const {data: _typeList} = useGetTypesQuery();

  useEffect(() => {
    console.log(_typeList);
  })

  const [pngList, setPngList] = useState(
    Array.from({ length: _pngList.length }, (_, index) => _pngList[index]),
  );
  const [typeList, setTypeList] = useState(
    Array.from({ length: _typeList?.length }, (_, index) => _typeList[index]),
  );
  const [buttons, setButtons] = useState(
    Array.from({ length: _pngList.length }, (_, index) => index),
  );
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [newButtonType, setNewButtonType] = useState("");

  const handleButtonClick = (buttonIndex, png, type) => {
    console.log(png);
    console.log(type);
    console.log(buttons);
    setSelectedButtonIndex(buttonIndex);
    setOpen(true);
  };

  const handleButtonAddClick = (buttonIndex) => {
    setSelectedButtonIndex(buttonIndex);
    setOpen(true);
  };

  const handleButtonConfirm = () => {
    if (selectedButtonIndex !== null) {
      const updatedButtons = buttons.filter(
        (_, index) => index !== selectedButtonIndex,
      );
      const updatedPng = pngList.filter(
        (_, index) => pngList[index] != pngList[selectedButtonIndex],
      );
      const updatedType = typeList.filter(
        (_, index) => typeList[index] != typeList[selectedButtonIndex],
      );
      setPngList(updatedPng);
      setTypeList(updatedType);
      setButtons(updatedButtons);
      setSelectedButtonIndex(null);
    }
    setOpen(false);
  };

  const handleButtonAddConfirm = () => {
    if (newButtonType.trim() !== "") {

      let newPng =
        "/src/assets/filetypeicon/" + newButtonType.toLowerCase() + ".png";
      let already = 0;
      for (let type in typeList) {
        if (newButtonType == typeList[type]) {
          already = 1;
          setSelectedButtonIndex(null);
          setNewButtonType("");
          setOpen(false);
          setOpen2(true);
          return;
        }
      }

      if (already === 0) {
        const updatedType = [...typeList, newButtonType];
        const updatedPng = [...pngList, newPng];
        const updatedButtons = [...buttons, selectedButtonIndex];
        setPngList(updatedPng);
        setTypeList(updatedType);
        setButtons(updatedButtons);
      }
      setSelectedButtonIndex(null);
      setNewButtonType("");
    }
    setOpen(false);
  };

  const handleButtonCancel = () => {
    setOpen(false);
    setSelectedButtonIndex(null);
  };

  const handleOpen2Close = () => {
    setOpen2(false);
  };

  const handleButtonAddCancel = () => {
    setOpen(false);
    setSelectedButtonIndex(null);
  };

  return (
    <div className="grid grid-cols-2 gap-8 bg-blue-200 lg:grid-cols-4">
      {buttons.map((button, index) => (
        <div key={index}>
          <button
            className="w-30 m-4 bg-red-700"
            key={index}
            onClick={() =>
              handleButtonClick(index, pngList[index], typeList[index])
            }
          >
            <img className="" src={pngList[index]} alt={typeList[index]} />
          </button>
          {selectedButtonIndex === index && (
            <Dialog open={open}>
              <DialogHeader>
                Bạn có muốn xóa định dạng {typeList[index]}?
              </DialogHeader>
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
          )}
        </div>
      ))}
      <button
        className="w-30 m-4 bg-red-700"
        key={buttons.length}
        onClick={() => handleButtonAddClick(buttons.length)}
      >
        <img className="" src={plussign} alt={"add"} />
      </button>
      {selectedButtonIndex === buttons.length && (
        <Dialog open={open}>
          <DialogHeader>Bạn hãy nhập định dạng muốn thêm</DialogHeader>
          <DialogBody className="flex flex-col gap-3">
            New Button Type:
            <input
              type="text"
              value={newButtonType}
              onChange={(e) => setNewButtonType(e.target.value)}
            />
          </DialogBody>
          <DialogFooter>
            <Button className="m-4" onClick={handleButtonAddConfirm}>
              Yes
            </Button>
            <Button className="m-4" onClick={handleButtonAddCancel}>
              No
            </Button>
          </DialogFooter>
        </Dialog>
      )}

      {
        <Dialog open={open2}>
          <DialogHeader>
            Định dạng đã tồn tại, vui lòng chọn lại cuộc đời của bạn
          </DialogHeader>

          <DialogFooter>
            <Button className="m-4" onClick={handleOpen2Close}>
              OK, toi xin loi
            </Button>
          </DialogFooter>
        </Dialog>
      }
    </div>
  );
};

export default ButtonList;
