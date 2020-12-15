import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
 
  prefix = "I am a ";
  name = "star student";
  ver = "Se visualiza el texto";
  numero = 5;
  numero2 = 3;

  speak() {
    const sentence = this.prefix + this.name;
    return sentence;
  }
  visualizar()
  {
    var oracion = this.ver + " " + (this.numero +this.numero2);
    return oracion;
  }

}
