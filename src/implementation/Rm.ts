import {Command} from "./Command";

export class Rm implements Command{

  execute(arg?: string): string {
    return "..";
  }
}