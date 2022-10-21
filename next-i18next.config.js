/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    localeDetection: false,
    defaultLocale: "en",
    locales: ["en", "de"],
  },
  debug: false,
  serializeConfig: false,
  // https://github.com/i18next/next-i18next/issues/1841
};
