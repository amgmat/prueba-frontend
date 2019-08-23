import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatelComponent } from './components/createl/createl.component';
import { ListsComponent } from './components/lists/lists.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ListstComponent } from './components/listst/listst.component';
import { DetailtComponent } from './components/detailt/detailt.component';
import { EdittaskComponent } from './components/edittask/edittask.component';
// import { CreatetComponent } from './components/createt/createt.component';

const appRoutes:Routes = [
    {path: '', component: CreatelComponent},
    {path: 'crear-lista', component: CreatelComponent},
    {path: 'ver-listas', component: ListsComponent},
    {path: 'lista/:id', component: DetailComponent},
    {path: 'editar-lista/:id', component: EditComponent},
    {path: 'crear-tarea/:id', component: TasksComponent},
    {path: 'tareas', component: ListstComponent},
    {path: 'tarea/:id', component: DetailtComponent},
    {path: 'editar-tarea/:id', component: EdittaskComponent},
    // {path: 'prueba', component: CreatetComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);