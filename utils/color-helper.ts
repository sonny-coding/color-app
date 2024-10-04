/**
 * Checks if a given string is a valid hexadecimal color code.
 *
 * The string to be validated as a hexadecimal color code.
 * A boolean indicating whether the input is a valid hex color code.
 */
export const isValidHex = (hex: string) => {
  return /^#[0-9A-F]{6}$/i.test(hex);
};

export const isDarkColor = (hexColor: string): boolean => {
  // Remove the hash if it's there
  hexColor = hexColor.replace(/^#/, "");

  // Parse the hex string into RGB values
  const r = parseInt(hexColor.slice(0, 2), 16);
  const g = parseInt(hexColor.slice(2, 4), 16);
  const b = parseInt(hexColor.slice(4, 6), 16);

  // Calculate the brightness using the YIQ formula
  // This formula gives more weight to colors the human eye is more sensitive to
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // If brightness is less than 128, consider it a dark color
  return brightness < 128;
};
