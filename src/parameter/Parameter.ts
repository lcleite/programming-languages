export class Parameter{
  defaultParameter(param: string = "default"): string{
    return param;
  }
  
  optionalParameter(param?: string): string{
    if(param != null)
      return param;
    else
      return "null";
  }
}