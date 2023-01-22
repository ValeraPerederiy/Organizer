import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectMonthComponent } from './components/select-month/select-month.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { MomentPipe } from './share/moment.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SelectMonthComponent,
    CalendarComponent,
    TaskListComponent,
    MomentPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
