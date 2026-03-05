type GeoRequest = {
  headers: Record<string, string | string[] | undefined>;
};

type GeoResponse = {
  setHeader(name: string, value: string): void;
  status(code: number): { json(body: unknown): void };
};

export default function handler(req: GeoRequest, res: GeoResponse) {
  const rawCountry = req.headers["x-vercel-ip-country"];
  const country = Array.isArray(rawCountry) ? rawCountry[0] : rawCountry;

  res.setHeader("content-type", "application/json; charset=utf-8");
  res.status(200).json({
    country: country ?? null,
  });
}
