import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  peliculas: Object;

  constructor(private peliculasService:PeliculasService) {
    this.peliculasService.getCartel().subscribe(res => {
      this.peliculas = res.results;
      console.log(res)
    });
   }

  ngOnInit() {
  }

}
