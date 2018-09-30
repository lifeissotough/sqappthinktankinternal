import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverBookComponent } from './overbook.component';

const routes: Routes = [
    {
        path: '', component: OverBookComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OverBookRoutingModule {
}
