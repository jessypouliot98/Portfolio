export function translateVersion<T extends object>(t: T, key: string, version: string) {
  let text = key;
  const typedKey = (version !== "base" ? `${key}_${version}` : key) as keyof T;
  if (
    typedKey in t &&
    typeof t[typedKey] === "string" &&
    t[typedKey] !== "" // Empty fallback to base presentation
  ) {
    text = t[typedKey];
  }
  return text;
}