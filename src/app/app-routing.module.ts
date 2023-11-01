import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './layout/mainpage/mainpage.component';
import { HomeModule } from '@modules/home/home.module';

const routes: Routes = [
  {
    path: '', component: MainpageComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@modules/home/home.module').then((m):typeof HomeModule => m.HomeModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
