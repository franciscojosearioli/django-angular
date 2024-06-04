import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementComponent } from './user-management/user-management.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { DocumentFormComponent } from './document-form/document-form.component';

const routes: Routes = [
  { path: 'user-management', component: UserManagementComponent },
  { path: 'documents', component: DocumentListComponent },
  { path: 'documents/new', component: DocumentFormComponent }, // Ruta para crear un nuevo documento
  { path: 'documents/edit/:id', component: DocumentFormComponent }, // Ruta para editar un documento existente
  { path: '', redirectTo: '/documents', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
