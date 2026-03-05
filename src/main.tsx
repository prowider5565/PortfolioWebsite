import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n";
import App from "./App.tsx";
import { AppWrapper } from "./components/common/PageMeta.tsx";

import i18n from "./i18n";

type GeoResponse = {
  country: string | null;
};

const COUNTRY_TO_LANG: Record<string, string> = {
  RU: "ru",
  UZ: "uz",
};

async function applyGeoLanguage() {
  const existing = localStorage.getItem("i18nextLng");
  if (existing) return;

  try {
    const response = await fetch("/api/geo", {
      headers: {
        accept: "application/json",
      },
    });

    if (!response.ok) return;

    const data = (await response.json()) as GeoResponse;
    const lang = (data.country && COUNTRY_TO_LANG[data.country]) || "en";

    await i18n.changeLanguage(lang);
  } catch {
    // ignore
  }
}

void applyGeoLanguage();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppWrapper>
      <App />
    </AppWrapper>
  </StrictMode>
);
