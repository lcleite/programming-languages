import {Command} from "./Command";

export class Cd implements Command{

  execute(arg?: string): string {
    if(arg == "Music")
      return "blink182-All The Small Things.mp3    blink182-I Miss You.mp3";
    else
      return "..";
  }
}