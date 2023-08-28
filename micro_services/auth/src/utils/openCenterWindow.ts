// deprecated

export default function openCenteredWindow(
  url: string,
  name: string,
  width: number,
  height: number,
): Window | null {
  const left = (window.innerWidth - width) / 2;
  const top = (window.innerHeight - height) / 2;

  const features = `width=${width},height=${height},left=${left},top=${top}`;

  return window.open(url, name, features);
}
