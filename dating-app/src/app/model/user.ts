import { Interest } from "./interest";
import { Location } from "./location"

export class User {
  id: number = 0;
  name: string = '';
  gender: string = '';
  age: number = 0;
  photo: string = '';
  description: string = '';
  location: Location = new Location();
  interests: Interest[] = [];
  liked?: boolean = true;
}
