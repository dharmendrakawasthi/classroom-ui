import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from './pipes';
import { DirectivesModule } from './directives';
import { ComponentsModule } from './components';
import { ModelsModule } from './models/models.module';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    PipesModule,
    DirectivesModule,
    ComponentsModule,
    ModelsModule
  ]
})
export class SharedModule { }
