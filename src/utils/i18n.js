import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ar from "../assets/langs/ar.json";
import en from "../assets/langs/en.json";

i18n.use(initReactI18next).init({
  resources: { ...ar, ...en },
  lng: localStorage.getItem("lang") || "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
