/**
 * Checks if a given string is a valid hexadecimal color code.
 *
 * The string to be validated as a hexadecimal color code.
 * A boolean indicating whether the input is a valid hex color code.
 */
export const isValidHex = (hex: string) => {
  return /^#[0-9A-F]{6}$/i.test(hex);
};
