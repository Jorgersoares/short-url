import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ShortUrlApiService } from '../short-url-api.service';
import { ResultDialogComponent } from '../result-dialog/result-dialog.component';

@Component({
  selector: 'app-url-input',
  templateUrl: './url-input.component.html',
  styleUrls: ['./url-input.component.css']
})
export class UrlInputComponent {
  short_url: string
  progress_bar: boolean
  urlForm = this.fb.group({
    url: ['', [Validators.required]
    ]
  });
  url_control = this.urlForm.get('url');

  constructor(
    private fb: FormBuilder,
    private apiService: ShortUrlApiService,
    private dialog: MatDialog
  ) { }


  errorMessages() {
    
    if (this.url_control.hasError('required'))
      return "Campo vazio!";

    else if (this.url_control.hasError('pattern'))
      return "URL inserida é inválida! Exemplo de URL correta: https://www.google.com.br/"
  }

  onSubmit(submit_object) {
    this.progress_bar = true
    this.apiService.postURL(submit_object).subscribe((data) => {
      this.progress_bar = false
      this.url_control.setValue('')
      this.url_control.setErrors(null)
      
      this.dialog.open(ResultDialogComponent, {
        width: '500px',
        data: { url: data['url'] }
      });
      
      },
      (error) => {
        this.progress_bar = false
        alert("Erro inesperado no servidor, tente novamente!")
        console.log(error)
      }
      
      )
 }
}
