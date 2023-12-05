import filetype from "../assets/filetypeicon/filetype";
import { CheckIcon, ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { Button, Card } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const statusIcon = {
  verified: <CheckIcon className="w-5" />,
  notVerified: <ExclamationTriangleIcon className="w-5" />,
};

const statusColor = {
  verified: "bg-green-500",
  notVerified: "bg-yellow-500",
};

const FileItem = ({ file }) => {
  const date = new Date(file.uploadTime);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return (
    <Card className={`mx-1/8 mb-[30px] grid h-40 w-full grid-cols-11 p-5 gap-5`}>
      <div className="col-span-1">
        <img src={filetype[file.type]} alt="" className="w-full p-[10px]" />
      </div>
      <div className="col-span-3">
        <div className="h-full grid-rows-2">
          <p className="flex h-1/2 items-center font-semibold truncate">
            {file.name.substring(0, 60)}
          </p>
          {file.pageNum === 0 ? null : (
            <p className="flex h-1/2 items-center font-semibold">
              Số trang: {file.pageNum}
            </p>
          )}
        </div>
      </div>
      <div className="col-span-5 flex flex-col justify-between">
        <div className="w-full">
          <p>Máy in: {file.printerId}</p>
        </div>
        <div className="flex h-1/2 items-end">
          <div
            className={`rounded-full ${
              statusColor[file.status]
            } flex h-10 w-full items-center justify-center`}
          >
            <div className="w-1/12">{statusIcon[file.status]}</div>
            <p className="font-full w-2/3 text-center font-semibold">
              {file.status} - {`uploaded at ${day}/${month}/${year}`}
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <Link to={`/preview/${file._id}`} className="w-1/2">
          <Button
            size="lg"
            className="w-full rounded-full bg-blue-500 px-4 py-3 text-white hover:bg-blue-700"
          >
            In
          </Button>
        </Link>
      </div>
    </Card>
  );
};

const FileList = ({ files }) => {

  return (
    <div className="flex flex-col gap-5">
      {files?.map((file, index) => {
        return <FileItem key={index} file={file} />;
      })}
      
    </div>
  );
};

export default FileList;
