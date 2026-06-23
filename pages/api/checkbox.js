import { client } from '../../lib/sanity';

const allowedOrigins = [
  "https://theatre-garden.kyiv.ua/",
  // Для тестування
  "https://shelyakova.github.io",
  // "http://localhost:3001",
  // "http://localhost:3000",
];

export default async function handler(req, res) {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const data = await client.fetch(`*[_type == "checkbox"]{ _id, name }`);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: `Failed to fetch data, error: ${error.message}` });
  }
}
