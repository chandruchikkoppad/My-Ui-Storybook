import { SPECIAL_REGEX_CHARACTERS_PATTERN } from '../../validations/regex';

function formatCamelCaseString(
  input: string,
  removeSections: string[] = []
): string {
  function escapeRegExp(str: string): string {
    return str.replace(SPECIAL_REGEX_CHARACTERS_PATTERN, '\\$&');
  }
  // Remove all occurrences of specified sections (case-insensitive)
  const processedString = removeSections.reduce(
    (str, section) => str.replace(new RegExp(escapeRegExp(section), 'gi'), ''),
    input
  );

  // Add spaces before capital letters and capitalize the first letter
  const formatted = processedString
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .replace(/^./, (str) => str.toUpperCase());

  return formatted;
}
function formatSnakeOrUppercaseString(input: string): string {
  return input
    .toLowerCase()
    .replace(/_/g, ' ')
    .replace(/^./, (str) => str.toUpperCase());
}

export default function formatString(
  input: string,
  removeSections: string[] = []
): string {
  if (input.toUpperCase() === input) {
    // Handled completely uppercase strings
    input = input.toLowerCase();
  }

  if (input.includes('_')) {
    // Handled snake case or uppercase strings
    return formatSnakeOrUppercaseString(input);
  }
  // Handled camel case strings
  return formatCamelCaseString(input, removeSections);
}
