import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/agent": {
        target: "http://127.0.0.1:8001",
        changeOrigin: true,
        configure: (proxy) => {
          proxy.on("error", (err, req) => {
            // eslint-disable-next-line no-console
            console.error("[proxy] error", {
              method: req?.method,
              url: req?.url,
              message: err?.message,
            });
          });

          proxy.on("proxyReq", (proxyReq, req) => {
            // eslint-disable-next-line no-console
            console.log("[proxy] ->", req.method, req.url);
            // For debugging only: content-type helps identify request shape.
            const ct = proxyReq.getHeader("content-type");
            if (ct) {
              // eslint-disable-next-line no-console
              console.log("[proxy] request content-type:", ct);
            }
          });

          proxy.on("proxyRes", (proxyRes, req) => {
            // eslint-disable-next-line no-console
            console.log(
              "[proxy] <-",
              proxyRes.statusCode,
              req.method,
              req.url,
              "content-type=",
              proxyRes.headers?.["content-type"]
            );
          });
        },
      },
      "/healthz": {
        target: "http://127.0.0.1:8001",
        changeOrigin: true,
        configure: (proxy) => {
          proxy.on("proxyRes", (proxyRes, req) => {
            // eslint-disable-next-line no-console
            console.log("[proxy] <-", proxyRes.statusCode, req.method, req.url);
          });
        },
      },
    },
  },
});
