import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://1430e478b3ac6363fd079e0826c38569@o4511750885670912.ingest.us.sentry.io/4511751380860928",
  tracesSampleRate: 0,
  replaysSessionSampleRate: 0,
  replaysOnErrorSampleRate: 0,
  enableLogs: false,
  debug: false,
});
