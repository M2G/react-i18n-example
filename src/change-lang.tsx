/* eslint-disable */
import React from "react";
import { withTranslation } from "react-i18next";

function ChangeLang({ i18n }) {
  return (
    <div>
      <button onClick={() => i18n.changeLanguage("fr")}>fr</button>
      <button onClick={() => i18n.changeLanguage("en")}>en</button>
    </div>
  );
}

export default withTranslation("translations")(ChangeLang);
