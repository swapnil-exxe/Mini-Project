export function inspectComponentProps(componentName, props, requiredProps = []) {
  const missing = requiredProps.filter((p) => !(p in props) || props[p] === undefined || props[p] === null);

  return {
    componentName,
    isValid: missing.length === 0,
    missingProps: missing,
    propCount: Object.keys(props || {}).length
  };
}
