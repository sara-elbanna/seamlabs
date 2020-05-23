import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { FooterComponent } from './footer/footer.component';
import { DrawerComponent } from './drawer/drawer.component';
import { ServicesComponent } from './services/services.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import {ReactiveFormsModule} from "@angular/forms";

registerLocaleData(en);

@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    PricingComponent,
    SubscriptionComponent,
    FooterComponent,
    DrawerComponent,
    ServicesComponent,
   
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ],
  exports:[
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    PricingComponent,
    SubscriptionComponent,
    FooterComponent,
    DrawerComponent,
    ServicesComponent
  ]
})
export class HomeModule { }




