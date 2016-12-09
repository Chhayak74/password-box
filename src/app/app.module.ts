import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PatternsService } from './patterns.service';

import { AppComponent } from './app.component';
import { InstructionBoxComponent } from './instruction-box/instruction-box.component';
import { ParameterBoxComponent } from './parameter-box/parameter-box.component';

@NgModule({
  declarations: [
    AppComponent,
    InstructionBoxComponent,
    ParameterBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PatternsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
