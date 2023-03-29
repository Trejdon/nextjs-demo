export default function handler(req, res) {
  if (req.method === "POST") {
    // save to DB!
    res.json({ message: "ok!" });
  }
}
