import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Coffee Pro Engine';
  email:any = '';

  ngOnEmailChanges() {
    console.log(this.email);
  }

imprimirValor() {
  alert(this.email);
}

onCorreoChange(event: any) {
  console.log('Correo cambiado:', this.email);
}


}
