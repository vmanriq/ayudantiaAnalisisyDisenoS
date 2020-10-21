const jwt = require("jsonwebtoken");

function verifySign(req, res, nxt) {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("no tienes autorizado entrar");
  try {
    const payload = jwt.verify(token, process.env.SECRET_TOKEN);
    req.user = payload;
    nxt();
  } catch (error) {
    return res.status(401).send("no tienes autorizado entrar");
  }
}

module.exports = verifySign;
