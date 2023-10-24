export function areAllPropertiesNull(obj: any) {
  for (const key in obj) {
    if (obj[key] !== null) {
      return false;
    }
  }
  return true;
}