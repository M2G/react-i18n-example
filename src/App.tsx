/* eslint-disable */
import React from "react";
import { withTranslation, Trans } from "react-i18next";
import ChangeLanguage from "./change-lang";

function App({ t }): JSX.Element {
  return (
    <div className="App">
      <h2>{t("test")}</h2>
      <Trans i18nKey="test2.one" />
      <ChangeLanguage />
    </div>
  );
}

export default withTranslation("translations")(App);
