import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import {FilterPipe} from "./filter.pipe";
import {SortPipe} from "./sort.pipe";

@NgModule({
  declarations:[FilterPipe],
  imports:[CommonModule],
  exports:[FilterPipe]
})

export class MainPipe{
  static forRoot() {
      return {
          ngModule: MainPipe,
          providers: [],
      };
   }
}