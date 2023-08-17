/** @type {import("next").NextConfig} */
const genericConfig = {
  reactStrictMode: true,
  output: 'standalone',
  compress: true,
  i18n: {
    localeDetection: false,
    locales: ['en-US', 'fr'],
    defaultLocale: 'en-US',
  },
};

const extraHeaders = {
  async headers() {
    const cacheControlHeader = 'Cache-Control';
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          { key: 'X-Frame-Options', value: 'deny' },
          {
            key: 'Permissions-Policy',
            value:
              'accelerometer=(), ' +
              'autoplay=(), ' +
              'camera=(), ' +
              'document-domain=(), ' +
              'geolocation=(), ' +
              'gyroscope=(), ' +
              'magnetometer=(), ' +
              'microphone=(), ' +
              'midi=(), ' +
              'payment=(), ' +
              'picture-in-picture=(), ' +
              'publickey-credentials-get=(), ' +
              'sync-xhr=(), ' +
              'usb=(), ' +
              'xr-spatial-tracking=()',
          },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'accept-ranges', value: 'bytes' },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          { key: 'X-Permitted-Cross-Domain-Policies', value: 'none' },
          {
            key: cacheControlHeader,
            value: 'max-age=60, must-revalidate',
          },
        ],
      },
    ];
  },
};

module.exports = () => {
  return Object.assign(genericConfig, extraHeaders);
};
