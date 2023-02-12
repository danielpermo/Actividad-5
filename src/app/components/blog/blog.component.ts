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
      date: new Date("2/4/2023").toLocaleDateString()
    },
    {
      title: "Rescatan un perro a punto de caer de un segundo piso en Aluche",
      url: "https://imagenes.20minutos.es/files/image_990_v3/uploads/imagenes/2022/07/09/rescate-perro-madrid.jpeg",
      mainText: "Agentes de la Unidad Integral de Destino (UID) de Latina de la Policía Municipal de Madrid han rescatado un perro atrapado por su pata derecha de una terraza, a punto de caer de un segundo piso, ha informado un portavoz del Cuerpo Local. La intervención tuvo lugar el pasado miércoles sobre las 16:30 horas en la calle Blas Cabrera del barrio de Aluche. Tras el aviso de unos vecinos de que un can colgaba de una terraza y no se podía mover. Hasta el lugar llegaron los agentes, que rescataron el animal sano y salvo. Luego, localizaron a sus dueños, que se encontraban en Portugal. Ellos aseguraban que habían dejado a sus animales de compañía a cargo de una persona, que no respondía a las llamadas. Los policías hallaron en la vivienda otros tres perros, que fueron trasladados al Servicio Veterinario municipal de Urgencias (SEVEMUR), donde han sido asistidos. Además, los vecinos han señalado que otro animal ya había saltado un día antes por una ventana de la cocina ante la falta de comida y atención. Ahora, los agentes investigarán lo ocurrido y tomarán medidas contra los dueños y encargados de las mascotas porque según las ordenanzas municipales tienen que ser atendidos diariamente.",
      date: new Date("7/9/2022").toLocaleDateString()
    }
  ]
  wNew: string = `<article class="new-item">
                    <h1 class="new-title">${this.arrInfo[0].title}</h1>
                    <img src=${this.arrInfo[0].url} alt="Imagen de la noticia" class="new-img">
                    <p class="new-content">${this.arrInfo[0].mainText}</p>
                    <p class="new-date">${this.arrInfo[0].date}</p>
                  </article>
                  <article class="new-item">
                    <h1 class="new-title">${this.arrInfo[1].title}</h1>
                    <img src=${this.arrInfo[1].url} alt="Imagen de la noticia" class="new-img">
                    <p class="new-content">${this.arrInfo[1].mainText}</p>
                    <p class="new-date">${this.arrInfo[1].date}</p>
                  </article>`;

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
      date: new Date(this.date).toLocaleDateString()
    }
    this.arrInfo.unshift(info);
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
