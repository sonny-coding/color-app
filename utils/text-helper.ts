export const toCamelCase = (text: string): string => {
  // Remove any characters that aren't alphanumeric or spaces
  const cleanedText = text.replace(/[^a-zA-Z0-9\s]/g, "");

  // Split the text into words
  const words = cleanedText.split(/\s+/);

  // Capitalize the first letter of each word except the first one
  const camelCaseWords = words.map((word, index) => {
    if (index === 0) {
      return word.toLowerCase();
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  // Join the words together
  return camelCaseWords.join("");
};
