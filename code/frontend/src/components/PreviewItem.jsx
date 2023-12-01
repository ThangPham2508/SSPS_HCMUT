
  
  const PreviewItem = ({ fileTypeImg, fileName, numPage, numPrint, printerID, stateImg, stateColorClass, state, dateTime }) => {
    return (
      <div className="flex w-3/4 mx-1/8 mb-[30px]">
        <div className="w-[15%]">
            <img src={fileTypeImg} alt=""  className="w-full p-[10px]"/>
        </div>
        <div className="w-[25%]">
            <div className="grid-rows-2 h-full">
                <p className="font-semibold h-1/2 items-center flex">{fileName}</p>
                <p className="font-semibold h-1/2 items-center flex">Số trang: {numPage}</p>
            </div>
        </div>
        <div className="w-[40%]">
            <div className="grid-rows-2 h-full">
                <div className="flex h-1/2 items-center">
                    <div className="w-1/2">
                        <p>Số bản in: {numPrint}</p>
                    </div>
                    <div className="w-1/2">
                        <p>Máy: {printerID}</p>
                    </div>
                </div>
                <div className="flex h-1/2 items-end">
                    <div className={`rounded-full ${stateColorClass} h-[80%] w-full items-center flex`}>
                        <div className="w-1/12"></div>
                        <img src={stateImg} alt="" className="w-1/12"/>
                        <p className="font-semibold w-2/3 font-full text-center">{state} {dateTime}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-[20%] grid-rows-2 ">
            <div className="grid-span-1 flex items-center h-1/2">
                <button class="bg-blue-500 hover:bg-blue-700 text-white py-3 px-4 rounded-full w-[80%] ml-[20%]">
                    Xem trước
                </button>
            </div>
            <div className="grid-span-1 flex items-end h-1/2">
                <button class="bg-blue-500 hover:bg-blue-700 text-white py-3 px-4 rounded-full w-[80%] ml-[20%]">
                    In
                </button> 
            </div>
            
            
        </div>
      </div>
    );
  };
  
  export default PreviewItem;
  