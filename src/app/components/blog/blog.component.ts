import { Component } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  title: string = "";
  url: string = "";
  mainText: string = "";
  date: string = "";
  arrInfo: Noticia[] = [
    {
      title: "El Recre de Granada visita al líder este domingo en El Maulí",
      url: "https://elsoldeantequera.com/wp-content/uploads/2023/01/f-antequera-utrera-futbol-04-012023.jpg",
      mainText: "Otro partidazo en El Maulí. El Recreativo de Granada pisará el césped a las 17 horas este domingo, con la maleta de cinco partidos sin perder, sexto con 28 puntos, 20 menos que el líder, el Antequera. Vienen de ganar 2 a 0 al Cádiz Mirandilla. Pero el Antequera tiene iniciada una dinámica muy difícil de parar donde tienen el colchón de puntos ante una posible pájara que no pinta que aparezca, ni con los rumores del cambio de competiciones próximamente. Todo tras una jornada anterior donde pincharon los dos perseguidores en la tabla, el Recre en casa ante el Lepe y el Sanluqueño en Cartagena. Ya son 12 y 18 puntos con los seguidores en la tabla. El Maulí se prepara ante una segunda vuelta de ensueño.",
      date: "04/02/2023"
    },
    {
      title: "Vuelven las pintadas",
      url: "https://elsoldeantequera.com/wp-content/uploads/2023/02/LECTOR_pintadas_022023-696x464.jpg",
      mainText: "Hay épocas en las que se perciben más como es en los últimos meses. Este viernes por la tarde, al pasar por la Plaza Castilla, vimos estos recuerdos de quienes no respeta el mobiliario urbano. No es la primera, ni será la última, pero estamos en una época donde se están percibiendo una nueva oleada de pintadas por paredes, bancos o aceras. ¿Habrá que utilizar las cámaras?",
      date: "08/02/2023"
    }
  ]
  wNew: string = "";

  constructor () {

  }

  saveNew(): void {
    if (this.title === "" || this.url === "" || this.mainText === "" || this.date === "") {
      alert("Faltan campos por rellenar. Comprueba que has rellenado todo");
    } else {
    let info: Noticia = {
      title: this.title,
      url: this.url,
      mainText: this.mainText,
      date: this.date
    }
    this.arrInfo.push(info);
    this.paintNew();
    this.title = "";
    this.url = "";
    this.mainText = "";
    this.date = "";
    }
  }

  paintNew(): void {
    this.wNew = "";
    this.arrInfo.forEach(info => {
      this.wNew += `<article class="new-item">
                      <h1 class="new-title">${info.title}</h1>
                      <img src=${info.url} alt="Imagen de la noticia" class="new-img">
                      <p class="new-content">${info.mainText}</p>
                      <p class="new-date">${info.date}</p>
                    </article>`
    });
  }
}
