export const getLocalStorage = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);
  if (!item) return null;

  try {
    return JSON.parse(item) as T;
  } catch (e) {
    console.error(`Error parsing localStorage key "${key}":`, e);
    return null;
  }
};

export const setLocalStorage = <T>(key: string, value: T) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Error setting localStorage key "${key}":`, e);
  }
};

export const removeLocalStorage = (key: string) => localStorage.removeItem(key);

export const clearLocalStorage = () => localStorage.clear();