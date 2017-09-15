export class Asynchronous{
  
  getIds(): Promise<number[]>{
    return new Promise<number[]>((resolve, reject) => {
      setTimeout(() => {
        let ids: number[] = [1, 2 , 3 , 4];
        resolve(ids);
      }, 2000);
    });
  }
  
  success(bool: boolean): Promise<string>{
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        if(bool == true)
          resolve("pass");
        else
          reject("fail");
      }, 2000);
    });
  }
  
  summation(): Promise<number>{
    return new Promise<number>((resolve, reject) => {
      setTimeout(() => {
        this.getIds().then((ids: number[]) => {
          let sum = 0;
          
          for(let id of ids)
            sum += id;
          
          resolve(sum);
        });
      }, 2000);
    });
  }
  
  helloWorld(): Promise<string>{
    let hello: string;
    let world: string;
    
    return new Promise<string>((resolve, reject) => {
      this.hello()
        .then((helloResponse: string) => {
          hello = helloResponse;
          return this.world();
        })
        .then((worldResponse: string) => {
          world = worldResponse;
          resolve(hello +" "+ world);
        })
    });
  }
  
  async awaitHelloWorld(): Promise<string>{
    let hello: string = await this.hello();
    let world: string = await this.world();
    
    return hello +" "+ world;
  }
  
  parallelHelloWorld(): Promise<string>{
    return Promise.all([this.hello(), this.world()])
      .then((response: [string, string]) => {
        let hello: string;
        let world: string;
        [hello, world] = response;
        
        return hello +" "+ world;
      });
  }
  
  private hello(): Promise<string>{
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve("Hello");
      }, 1000);
    });
  }
  
  private world(): Promise<string>{
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve("World!");
      }, 1000);
    });
  }
}