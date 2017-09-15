export class GenericMap<K,V>{
  
  private map: Map<K, V>;
  
  constructor(){
    this.map = new Map();
  }
  
  addPair(key: K, value: V){
    this.map.set(key, value);
  }
  
  getValue(key: K): V{
    return this.map.get(key);
  }
  
  exists(key: K): boolean{
    return this.map.has(key);
  }
  
  remove(key: K){
    this.map.delete(key);
  }
  
  getAllKeys(): K[]{
    return Array.from(this.map.keys());
  }
  
  getAllValues(): V[]{
    return Array.from(this.map.values());
  }
  
  getSize(): number{
    return this.map.size;
  }
}