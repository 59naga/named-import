export default function namedImport(url, key = "default") {
  return import(url).then(module => module[key]);
}
