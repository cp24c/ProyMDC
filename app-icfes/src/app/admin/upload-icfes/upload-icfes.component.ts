import { Component } from '@angular/core';
import { IcfesDataService } from '../services/icfes-data.service';
import { MessageService } from 'primeng/api';
import { FileUpload, FileUploadEvent, FileUploadErrorEvent } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';

interface UploadEvent{
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-upload-icfes',
  imports: [ FileUpload, ToastModule, CommonModule],
  providers: [MessageService],
  templateUrl: './upload-icfes.component.html',
  styles: ``
})
export class UploadIcfesComponent {

  uploadedFiles:any[] = [];

  constructor(private icfesDataService: IcfesDataService, private messageService: MessageService) { }
  
  onUpload(event: FileUploadEvent) {

    console.log('funcion entra');
    

    for(let file of event.files){

      console.log(file);
      this.uploadedFiles.push(file);
      //this.icfesDataService.upIcfesData(file).subscribe({
      //  next: (response) => {
      //    this.uploadedFiles.push(file);
      //    this.messageService.add({ severity: 'success', summary: 'Success', detail: `File ${file.name} uploaded successfully!` });
      //  },
      //  error: (error) => {
      //    this.messageService.add({ severity: 'error', summary: 'Error', detail: `Failed to upload file ${file.name}: ${error.message}` });
      //  }
      //});
      console.log(this.uploadedFiles[0])
    }

    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: `${event.files.length} files uploaded successfully!` });
  }

  onError(event: FileUploadErrorEvent) {
    this.messageService.add({ severity: 'error', summary: 'Upload Failed', detail: `Failed to upload file: ${event.files[0].name}` });
  }
}
