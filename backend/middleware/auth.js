import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.json({
      success: false,
      message: "Unauthorised user",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decode_token = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decode_token.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error",
    });
  }
};

export default authMiddleware;
