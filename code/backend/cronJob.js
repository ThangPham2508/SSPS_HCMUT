import cron from "node-cron";
import Log from "./models/printingLogModel.js";
import Printer from "./models/printerModel.js";

function start() {
  cron.schedule("* * * * *", function () {
    console.log("Running...");
    const now = new Date();

    Log.find({ schedule: { $lte: now } }, function (err, logs) {
      if (err) {
        console.log(err);
      } else {
        logs.forEach((log) => {
          log.status = "completed";
          log.save(function (err) {
            if (err) {
              console.log(err);
            } else {
              console.log(`Updated log ${log._id}`);
              Printer.findById(log.printerId, function (err, printer) {
                if (err) {
                  console.log(err);
                } else {
                  printer.queue = Math.max(0, printer.queue - 1);
                  printer.save(function (err) {
                    if (err) {
                      console.log(err);
                    } else {
                      console.log(`Decreased queue for printer ${printer._id}`);
                    }
                  });
                }
              });
            }
          });
        });
      }
    });
  });
}

export {start}
