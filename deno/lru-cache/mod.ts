import LRU from "https://deno.land/x/lru_cache@6.0.0-deno.4/mod.ts";

export default class LRUCache<K, V> extends LRU<K, V> {
  constructor(capacity: number) {
    super({
      max: capacity,
    })
  }

  public clear() {
    this.reset()
  }
}
