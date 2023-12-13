module.exports = {
  arrowParens: 'always', // Include parentheses around a sole arrow function parameter.
  bracketSpacing: true, // Print spaces between brackets in object literals.
  endOfLine: 'auto', // Maintain existing line endings (mixed line endings within the same file are normalized by the line ending of the first line).
  htmlWhitespaceSensitivity: 'css', // Respect the default value of CSS display property in HTML.
  insertPragma: false, // Do not insert a special @format marker at the top of files specifying that the file has been formatted with Prettier.
  singleAttributePerLine: false, // Allow more than one attribute per line in HTML.
  bracketSameLine: false, // Put the `>` of a multi-line HTML (JSX) element at the end of the last line instead of being alone on the next line.
  jsxBracketSameLine: false, // Put the `>` of a multi-line JSX element at the end of the last line instead of being alone on the next line.
  jsxSingleQuote: true, // Use single quotes instead of double quotes in JSX.
  printWidth: 80, // Specify the line length that the printer will wrap on.
  proseWrap: 'preserve', // Do not wrap prose. (Markdown)
  quoteProps: 'as-needed', // Only add quotes around object properties where required.
  requirePragma: false, // Do not require a special comment (a pragma) to be present in the top of the file to the file to be formatted.
  semi: true, // Print semicolons at the ends of statements.
  singleQuote: true, // Use single quotes instead of double quotes.
  tabWidth: 2, // Specify the number of spaces per indentation-level.
  trailingComma: 'all', // Print trailing commas wherever possible when multi-line. (Affects arrays, objects, and function parameters)
  useTabs: false, // Indent lines with spaces, not tabs.
  embeddedLanguageFormatting: 'auto', // Control whether Prettier formats quoted code embedded in the file.
};
