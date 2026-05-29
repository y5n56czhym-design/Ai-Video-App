export default async function handler(req, res) {

  const { script, character } = req.body;

  const videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4";

  res.status(200).json({
    status: "completed",
    videoUrl
  });
}
