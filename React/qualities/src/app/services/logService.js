import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

function init() {
  Sentry.init({
    dsn: "https://e772a6e5194b4a2390a3b068d172bf09@o4504253385408512.ingest.sentry.io/4504253387505664",
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
}

function log(error) {
  Sentry.captureException(error);
}

const logger = {
  init,
  log,
};

export default logger;
