
  
  const LogItem = ({ fileTypeImg, fileName, numPage, numPrint, printerID, stateImg, stateColorClass, state, dateTime }) => {
    return (
      <div className="flex w-3/4 mx-1/8 mb-[30px]">
        <div className="w-1/6">
            <img src={fileTypeImg} alt=""  className="w-full p-[10px]"/>
        </div>
        <div className="w-1/3">
            <div className="grid-rows-2 h-full">
                <p className="font-semibold h-1/2 items-center flex lg:text-lg">{fileName}</p>
                <p className="font-semibold h-1/2 items-center flex lg:text-lg">Số trang: {numPage}</p>
            </div>
        </div>
        <div className="w-1/2">
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
                        <p className="font-semibold w-2/3 font-full text-center lg:text-lg">{state} {dateTime}</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default LogItem;
  