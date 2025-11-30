const Phone = require('../models/phone');

module.exports.phone = async (req, res) => {
  try {
    const dbPhone = await Phone.find();
    return res.status(200).json(dbPhone).json({ message: "Lấy danh sách điện thoại thành công" });
  } catch (err) {
    return res.status(500).json({ message: "Lỗi server", error: err });
  }
};
