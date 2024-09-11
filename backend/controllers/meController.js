export const checkMe = async (req, res) => {
  if (req.userId) {
    return res.status(200).json({
      success: true,
      userId: req.userId,
    });
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
