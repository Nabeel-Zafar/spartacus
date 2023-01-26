import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { LayoutModule } from "@spartacus/storefront";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExtraModule } from "./cms-components/extra/extra.module";
import { MyLayoutModule } from "./cms-components/layout/layout.module";
import { MyMiniCartModule } from "./cms-components/my-mini-cart/my-mini-cart.module";
import { MyNewBannerModule } from "./cms-components/my-new-banner/my-new-banner.module";
import { StaticPageModule } from "./cms-components/static-page/static-page.module";
import { CheckoutConfigurationModule } from "./configuration/checkout.module";
import { I18nConfigurationModule } from "./configuration/i18n.module";
import { CustomRoutingModule } from "./configuration/routing.module";
import { SpartacusModule } from './spartacus/spartacus.module';
import {ConfigModule, UrlModule} from "@spartacus/core";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { apiModule } from "./cms-components/api-component/api.module";
    
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    CheckoutConfigurationModule,
    I18nConfigurationModule,
    CustomRoutingModule,
    LayoutModule,
    MyMiniCartModule,
    MyNewBannerModule,
    MyLayoutModule,
    StaticPageModule,
    ExtraModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    apiModule,
    // CustomProductModule
    ConfigModule.withConfig({
      featureModules: {
        customProductSummary: {
          module: () => import('./cms-components/custom-product-summary/custom-product.module').then(m => m.CustomProductModule),
          cmsComponents:['ProductSummaryComponent']
        }
      }
    }),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
