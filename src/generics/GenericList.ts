export class GenericList<T>{
  
  private list: T[]; //or :Array<T>
  
  constructor(){
    this.list = [];
  }
  
  addItem(item: T){
    this.list.push(item);
  }
  
  addItemAtIndex(item: T, index: number){
    this.list.splice(index, 0, item);
  }
  
  removeItemAtIndex(index: number){
    this.list.splice(index, 1);
  }
  
  getElements(): T[]{
    return this.list;
  }
  
  getLength(): number{
    return this.list.length;
  }
}