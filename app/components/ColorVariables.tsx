import { COLORS, COLORS_RGB } from "../constants/colors";

/**
 * Injects CSS variables from the centralized colors constants.
 * This ensures a single source of truth for all hex values.
 */
export function ColorVariables() {
  const css = `:root {
  --background: ${COLORS.background};
  --foreground: ${COLORS.foreground};
  --emerald: ${COLORS.emerald};
  --emerald-dark: ${COLORS.emeraldDark};
  --emerald-light: ${COLORS.emeraldLight};
  --surface: ${COLORS.surface};
  --surface-light: ${COLORS.surfaceLight};
  --muted: ${COLORS.muted};
  --border: ${COLORS.border};
  --hero-bg: ${COLORS.heroBg};
  --hero-bg-hover: ${COLORS.heroBgHover};
  --card-bg: ${COLORS.cardBg};
  --card-bg-hover: ${COLORS.cardBgHover};
  --hero-heading: ${COLORS.heroHeading};
  --hero-muted: ${COLORS.heroMuted};
  --border-light: ${COLORS.borderLight};
  --border-muted: ${COLORS.borderMuted};
  --glass-card-border: ${COLORS.glassCardBorder};
  --emerald-rgb: ${COLORS_RGB.emerald};
  --glass-card-border-rgb: ${COLORS_RGB.glassCardBorder};
}`;

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
