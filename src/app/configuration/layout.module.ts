import { NgModule } from "@angular/core";
import { LayoutConfig } from "@spartacus/storefront";
import { ConfigModule } from "@spartacus/core";

@NgModule({
    declarations : [],
    imports : [
        ConfigModule.withConfig({
            layoutSlots:{
                LandingPage2Template : {
                    header:{
                        lg:{
                            slots:[
                              "StaticBannerSlot",
                              'Section5',
                              'Section1',
                              'Section2',
                              'Section3'
                            ]
                          },
                          slots : [
                            'Section5',
                            'Section1',
                          ]
                    }
                }
            }
        } as LayoutConfig)
    ]
})

export class LayoutModule {}