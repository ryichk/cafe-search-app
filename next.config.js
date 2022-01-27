module.exports = {
  images: {
    domains: ['imgfp.hotp.jp'],
  },
  env: {
    API_KEY: process.env.API_KEY,
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
  },
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'ja',
  },
};
