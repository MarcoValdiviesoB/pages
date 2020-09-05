import {LandingLayoutComponent} from "./shared/components/layouts/landing-layout/landing-layout.component";
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {AuthLayoutComponent} from "./shared/components/layouts/auth-layout/auth-layout.component";
import { StoreLayoutComponent } from './shared/components/layouts/store-layout/store-layout.component';

const routes: Routes = [
  {
    path: "",
    // comment out this 2 line to make any landing demo as your root .
    redirectTo: "home",

    pathMatch: "full",

    /**
      uncomment this to make root url as one of landing page .
      and open landing-routing.module.ts to select which demo version
      you want as your root

      like :
      in landing-routing.module.ts
    {
    path: "",
    component: LandingV2Component
  },

    **/

    /**  component: LandingLayoutComponent,
     children: [
       {
         path: '',
         loadChildren: './views/landing/landing.module#LandingModule'
      }
     ]
     **/
  },
  {
    path: "tienda",
    component: StoreLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./views/store/store.module").then((m) => m.StoreModule),
      },
    ],
  },
  {
    path: "home",
    component: LandingLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./views/landing/landing.module").then((m) => m.LandingModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
