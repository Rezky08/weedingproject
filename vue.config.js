module.exports = {
  devServer: {
    host: "localhost",
    https: false,
    port: 8080,
    public: "http://localhost:8080",
  },
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "id",
      localeDir: "locales",
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true,
    },
  },
};
