export class List{
  
  private list: string[]; //or :Array<string>
  
  constructor(){
    this.list = [];
  }
  
  addItem(item: string){
    this.list.push(item);
  }
  
  addItemAtIndex(item: string, index: number){
    this.list.splice(index, 0, item);
  }
  
  removeItemAtIndex(index: number){
    this.list.splice(index, 1);
  }
  
  getElements(): string[]{
    return this.list;
  }
  
  getLength(): number{
    return this.list.length;
  }
}