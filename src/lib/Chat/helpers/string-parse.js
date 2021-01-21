export function replaceLineBreaks(str) {
  return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
}

export function getFirstLine(str) {
  const replaced = str.split(/(?:\r\n|\r|\n)/g, 2);  // two elements for decision for add '...'
  return replaced && replaced.length ? replaced[0]+(replaced.length > 1 ? '...' : '') : '';
}
