import {Command} from "./Command";

export class Ls implements Command{

  execute(arg?: string): string {
    return "Desktop/ Documents/ Downloads/ Music/ Public/ Videos/";
  }
}