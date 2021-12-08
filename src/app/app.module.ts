import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { TestserviceServiceService } from './service/testservice-service.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FilterTaskFini } from './pipe/pipe';


@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    FilterTaskFini

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatGridListModule,
    MatCheckboxModule
  ],
  providers: [TestserviceServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
