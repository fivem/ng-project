import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  { NewTaskModule } from './new-task/new-task.module';
import { RightBoxModule } from "./common/right-box/right-box.module";
import { HttpClientModule } from '@angular/common/http';
import { TodoTaskModule } from "./todo-task/todo-task.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    NewTaskModule,
    RightBoxModule,
    HttpClientModule,
    TodoTaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
