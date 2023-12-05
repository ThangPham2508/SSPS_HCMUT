import filetype from "../assets/filetypeicon/filetype";
import {
  ClockIcon,
  CheckBadgeIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";
import { Card, Button } from "@material-tailwind/react";
import moment from "moment";
import { useEffect } from "react";

const statusIcon = {
  queued: <ClockIcon className="w-8" />,
  completed: <CheckBadgeIcon className="w-8" />,
  error: <ExclamationTriangleIcon className="w-8" />,
};

const statusColor = {
  queued: "bg-gray-500",
  completed: "bg-green-500",
  error: "bg-red-500",
};

const LogItem = ({ file, printer, log, handleClick }) => {
  return (
    <Card className={`grid h-40 w-full grid-cols-10 gap-5`}>
      <div className="col-span-1">
        <img src={filetype[file.type]} alt="" className="w-full p-[10px]" />
      </div>
      <div className="col-span-3 ps-10">
        <div className="h-full grid-rows-2">
          <p className="flex h-1/2 items-center truncate font-semibold">
            {file.name}
          </p>
          <p className="flex h-1/2 items-center font-semibold">
            Số trang: {file.pageNum}
          </p>
        </div>
      </div>
      <div className="col-span-6">
        <div className="h-full grid-rows-2">
          <div className="flex h-1/2 items-center">
            <div className="w-1/2">
              <p>Số bản in: {log.printingProperties.numberOfCopies}</p>
            </div>
            <div className="w-1/2">
              <p>
                Máy:{" "}
                {`${printer.location.campus} - ${printer.location.building} - ${printer.location.room}`}
              </p>
            </div>
          </div>
          <div className="grid h-1/2 grid-cols-4 items-center gap-5">
            <div
              className={`rounded-full ${
                statusColor[log.status]
              } col-span-3 flex h-[80%] w-full items-center justify-center`}
            >
              <div className="w-1/12">{statusIcon[log.status]}</div>
              <p className="font-full w-2/3 text-center font-semibold">
                {log.status} - created at{" "}
                {moment(log.startTime).format("DD/MM/YYYY, h:mm:ss A")}
              </p>
            </div>
            <Button
              className="col-span-1 rounded-full"
              color="blue"
              onClick={() => handleClick(log._id)}
            >
              Chi tiết
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

const LogList = ({ files, printers, logs, filter, handleClick }) => {
  return (
    <div className="flex flex-col gap-12">
      {logs?.map((log, index) => {
        if (filter !== "all" && log.status !== filter) return;
        const file = files.find((file) => file._id === log.fileId);
        const printer = printers.find(
          (printer) => printer._id === log.printerId,
        );
        return (
          <LogItem
            key={index}
            file={file}
            printer={printer}
            log={log}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
};

export default LogList;
