const datePatternFrom = date => (
  new RegExp(`[A-Z][a-z]+ ${date.getDate()}, ${date.getFullYear()}`)
);

export default datePatternFrom;
