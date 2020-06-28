import { IndexedDbStorage } from "./IndexedDbStorage.ts";
import { InMemoryStorage } from "./InMemoryStorage.ts";
import { Storage } from "./Storage.ts";

const inMemoryStorage = new InMemoryStorage();

export function localStorage(): Storage {
  if (typeof self === "object" && self.indexedDB) {
    return new IndexedDbStorage();
  }

  if (typeof window === "object" && window.localStorage) {
    return window.localStorage;
  }

  return inMemoryStorage;
}
