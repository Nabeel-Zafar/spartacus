import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtraComponent } from './extra/extra.component';
import { provideCmsStructure } from '@spartacus/storefront';
import { CmsConfig, ConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [
    ExtraComponent
  ],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents:{
        StaticBanner:{
          component: ExtraComponent
        }
      }
    }as CmsConfig),
    // ConfigModule.withConfig({
    //   cmsComponents:{
    //     ProductSummaryComponent:{
    //       component: ExtraComponent
    //     }
    //   }
    // }as CmsConfig)
  ],
  providers:[
    provideCmsStructure({
      componentId:'StaticBanner',
      pageSlotPosition:'StaticBannerSlot'
    })
  ]
})
export class ExtraModule { }
