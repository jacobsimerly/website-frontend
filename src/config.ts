type AppConfig = {
  API_BASE_URL?: string;
};

declare global {
  interface Window {
    __APP_CONFIG__?: AppConfig;
  }
}

export function getApiBaseUrl(): string {
  const url = window.__APP_CONFIG__?.API_BASE_URL?.trim();
  if (!url) {
    // In local dev, Vite proxies relative requests (see vite.config.js).
    // Returning an empty base keeps callers on same-origin paths like "/agent/...".
    return "";
  }
  // Normalize to avoid accidental double slashes when joining.
  return url.replace(/\/+$/, "");
}
