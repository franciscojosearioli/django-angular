   // document-form.component.ts
   import { Component } from '@angular/core';
   import { DocumentService } from '../document.service';

   @Component({
     selector: 'app-document-form',
     templateUrl: './document-form.component.html'
   })
   export class DocumentFormComponent {
     document = { title: '', description: '', pdf: null };
     selectedFile: File = null;

     constructor(private documentService: DocumentService) { }

     onFileSelected(event) {
       this.selectedFile = event.target.files[0];
     }

     onSubmit() {
       const formData = new FormData();
       formData.append('title', this.document.title);
       formData.append('description', this.document.description);
       formData.append('pdf', this.selectedFile);

       this.documentService.createDocument(formData).subscribe(response => {
         console.log('Document uploaded successfully:', response);
       });
     }
   }