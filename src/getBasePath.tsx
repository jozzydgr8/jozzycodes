export function getBasePath(pathname:string) {
  return pathname.startsWith('/gb') ? '/gb' : '';
}