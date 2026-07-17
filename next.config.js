const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
};

module.exports = withSentryConfig(nextConfig, {
  org: "51cc0ae70f53",
  project: "commerlab2",
  silent: !process.env.CI,
  telemetry: false,
});
