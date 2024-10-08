/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // enable i18n config will trigger the routing error (invariant: invalid relative URL) in browser
  i18n: {
    localeDetection: false,
    locales: ['en-US', 'fr'],
    defaultLocale: 'en-US',
  },
};

module.exports = nextConfig;
