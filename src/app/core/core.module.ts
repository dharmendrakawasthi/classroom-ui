import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpComponent } from './http/http.component';
import { AuthComponent } from './auth/auth.component';
import { FooterComponent } from './footer/footer.component';
import { GuardsComponent } from './guards/guards.component';
import { HeaderComponent } from './header/header.component';
import { InterceptorsComponent } from './interceptors/interceptors.component';


@NgModule({
  declarations: [HttpComponent, AuthComponent, FooterComponent, GuardsComponent, HeaderComponent, InterceptorsComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
