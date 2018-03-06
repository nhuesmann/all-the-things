export default function(styles, ...classNames) {
  return classNames.map(name => styles[name]).join(' ');
}
