#!/usr/bin/env sh
set -eu

: "${API_BASE_URL:=}"

# Generate runtime config JS into the served directory
cat > /usr/share/nginx/html/config.js <<EOF
// Generated at container start
window.__APP_CONFIG__ = {
  API_BASE_URL: "${API_BASE_URL}"
};
EOF

exec nginx -g "daemon off;"
