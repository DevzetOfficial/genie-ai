function getImgUrl(name: string) {
  return new URL(`../assets/${name}`, import.meta.url).href;
}
export { getImgUrl };
