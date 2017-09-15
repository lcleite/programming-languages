export class CharCount{
  
  private map: Map<string, number>;
  
  constructor(){
    this.map = new Map();
  }
  
  count(word: string){
    let chars: string[] = word.split("");
    
    for(let char of chars)
      this.addChar(char.toLowerCase());
  }
  
  getCharCount(char: string): number{
    let key: string = char.toLowerCase();
    
    if(this.map.has(key))
      return this.map.get(key);
    else
      return 0;
  }
  
  getAllChars(): string[]{
    return Array.from(this.map.keys());
  }
  
  private addChar(key: string){
    if(this.map.has(key)){
      let value = this.map.get(key);
      this.map.set(key, value + 1);
    }
    else {
      this.map.set(key, 1);
    }
  }
}