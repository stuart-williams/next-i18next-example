const sprintf = require("i18next-sprintf-postprocessor");

/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    localeDetection: false,
    defaultLocale: "en",
    locales: ["en", "de"],
  },
  serializeConfig: false,
  // Can't use language detection middlewares (https://github.com/i18next/next-i18next/issues/1841)
  // but other middlewares do work
  use: [sprintf],
};
