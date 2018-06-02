import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../../../components/main/main.component';
import { NotFoundComponent } from '../../../components/not-found/not-found.component';

const appRoutes: Routes = [
    { path: 'artists', loadChildren: '../../artists/artists.module#ArtistsModule' },
    { path: 'stories', loadChildren: '../../stories/stories.module#StoriesModule' },
    { path: 'items', loadChildren: '../../items/items.module#ItemsModule' },
    { path: 'admin', loadChildren: '../../admin/admin.module#AdminModule' },
    { path: '', component: MainComponent },
    { path: '**', component: NotFoundComponent },
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes),
    ],
    declarations: []
})
export class RoutingModule { }
