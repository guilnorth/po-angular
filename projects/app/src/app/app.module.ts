import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent, TestComponent } from './app.component';
import { PoModule } from '../../../ui/src/lib';
import { PoPageJobSchedulerModule } from '../../../templates/src/lib';

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([],
      { relativeLinkResolution: 'legacy' }),
    PoModule,
    PoPageJobSchedulerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
