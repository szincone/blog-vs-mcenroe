function addTimeStamp(req, res, next) {
  // gets time of post and sets it
  const newTime = new Date();
  req.body.time_stamp = newTime;
  next();
}

module.exports = {
  addTimeStamp,
};
