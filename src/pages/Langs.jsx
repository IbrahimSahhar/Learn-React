import i18n from "../utils/i18n.js";
import React from "react";
import { useTranslation } from "react-i18next";
import Container from "../Components/Container/index.jsx";
const Langs = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="langs" style={{ direction: localStorage.getItem("dir") }}>
        <button
          onClick={() => {
            i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
            localStorage.setItem("lang", i18n.language);
            localStorage.setItem("dir", i18n.language === "ar" ? "rtl" : "ltr");
          }}
        >
          {t("lang")}
        </button>
        <h1>{t("name question")}</h1>
        <p>{t("favorite color")}</p>
        <span>{t("email address")}</span>
      </div>
    </Container>
  );
};

export default Langs;
