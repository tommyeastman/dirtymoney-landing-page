/**
 * Single source of truth for all hex colors used across the app.
 * CSS variables are injected from these values in the root layout.
 */
export const COLORS = {
  background: "#050a05",
  foreground: "#e8ede8",
  emerald: "#10b981",
  emeraldDark: "#059669",
  emeraldLight: "#34d399",
  surface: "#0c1a0c",
  surfaceLight: "#132613",
  muted: "#8a9b8a",
  border: "#1e3a1e",
  heroBg: "#f0fce3",
  heroBgHover: "#dfe0c0",
  cardBg: "#f0fce3",
  cardBgHover: "#e6f2d8",
  heroHeading: "#1a1a18",
  heroMuted: "#5c584e",
  borderLight: "#d5d0c7",
  borderMuted: "#c5bfb3",
  glassCardBorder: "#c8c2b6",
} as const;

/** RGB values for rgba() usage (e.g. box-shadows, borders with opacity) */
export const COLORS_RGB = {
  emerald: "16, 185, 129",
  glassCardBorder: "200, 194, 182",
} as const;
