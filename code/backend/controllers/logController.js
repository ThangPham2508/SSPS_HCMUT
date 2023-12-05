import PrintingLog from "../models/printingLogModel.js";
import Printer from "../models/printerModel.js";

const createPrintingLog = async (req, res) => {
  const log = new PrintingLog(req.body);
  try {
    await log.save();

    const printer = await Printer.findById(log.printerId);
    printer.queue += 1;
    await printer.save();

    res.status(201).send(log);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getPrintingLogs = async (req, res) => {
  try {
    const logs = await PrintingLog.find({});
    res.send(logs);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getPrintingLog = async (req, res) => {
  try {
    const log = await PrintingLog.findById(req.params.id);
    if (!log) {
      return res.status(404).send();
    }
    res.send(log);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updatePrintingLog = async (req, res) => {
  try {
    const log = await PrintingLog.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!log) {
      return res.status(404).send();
    }
    res.send(log);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deletePrintingLog = async (req, res) => {
  try {
    const log = await PrintingLog.findByIdAndDelete(req.params.id);
    if (!log) {
      return res.status(404).send();
    }
    res.send(log);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getPrintingLogsByUser = async (req, res) => {
  try {
    const logs = await PrintingLog.find({userId: req.user._id});
    res.send(logs);
  } catch (error) {
    res.status(500).send(error);
  }
}

export {
  createPrintingLog,
  getPrintingLogs,
  getPrintingLog,
  updatePrintingLog,
  deletePrintingLog,
  getPrintingLogsByUser
};
