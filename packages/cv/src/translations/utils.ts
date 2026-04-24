export function translateVersion<TSource extends object, TKey extends keyof TSource>(
  t: TSource,
  key: TKey,
  version: string = "base",
): TSource[TKey] {
  let text = t[key];
  const versionKey = `${key as string}_${version}`;
  if (versionKey in t) {
    text = t[versionKey as TKey];
  }
  return text;
}