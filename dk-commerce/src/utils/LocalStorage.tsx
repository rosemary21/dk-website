export function getLocalData<T>(key: string) {
  const localData = localStorage.getItem(key);
  if (!localData) return;
  const data: T = JSON.parse(localData);
  return data;
}

export function setLocalData<T>(key: string, data: T) {
  localStorage.setItem(key, JSON.stringify(data));
}
