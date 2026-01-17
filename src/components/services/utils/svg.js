export function svgToCurrentColor(raw) {
  if (typeof raw !== "string") return "";
  return raw
    .replaceAll("#6c63ff", "currentColor")
    .replaceAll("#6C63FF", "currentColor");
}
