const PreviewItem = ({
  fileTypeImg,
  fileName,
  numPage,
  numPrint,
  printerID,
  stateImg,
  stateColorClass,
  state,
  dateTime,
}) => {
  return (
    <div className="mx-1/8 mb-[30px] flex w-3/4">
      <div className="w-[15%]">
        <img src={fileTypeImg} alt="" className="w-full p-[10px]" />
      </div>
      <div className="w-[25%]">
        <div className="h-full grid-rows-2">
          <p className="flex h-1/2 items-center font-semibold">{fileName}</p>
          <p className="flex h-1/2 items-center font-semibold">
            Số trang: {numPage}
          </p>
        </div>
      </div>
      <div className="w-[40%]">
        <div className="h-full grid-rows-2">
          <div className="flex h-1/2 items-center">
            <div className="w-1/2">
              <p>Số bản in: {numPrint}</p>
            </div>
            <div className="w-1/2">
              <p>Máy: {printerID}</p>
            </div>
          </div>
          <div className="flex h-1/2 items-end">
            <div
              className={`rounded-full ${stateColorClass} flex h-[80%] w-full items-center`}
            >
              <div className="w-1/12"></div>
              <img src={stateImg} alt="" className="w-1/12" />
              <p className="font-full w-2/3 text-center font-semibold">
                {state} {dateTime}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[20%] grid-rows-2 ">
        <div className="grid-span-1 flex h-1/2 items-center">
          <button className="ml-[20%] w-[80%] rounded-full bg-blue-500 px-4 py-3 text-white hover:bg-blue-700">
            Xem trước
          </button>
        </div>
        <div className="grid-span-1 flex h-1/2 items-end">
          <button className="ml-[20%] w-[80%] rounded-full bg-blue-500 px-4 py-3 text-white hover:bg-blue-700">
            In
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewItem;
