import { Component, OnInit } from '@angular/core';
import { CmsBannerComponent } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';

@Component({
  selector: 'app-my-new-banner',
  templateUrl: './my-new-banner.component.html',
  styleUrls: ['./my-new-banner.component.scss']
})
export class MyNewBannerComponent implements OnInit {

  constructor(public component: CmsComponentData<CmsBannerComponent>) { }

  ngOnInit(): void {
    this.component.data$.subscribe()
  }

}
