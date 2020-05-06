import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  protected plants2Plant = {
    "sanSalvador": ["maíz", "frijol"],
    "laLibertad": ["lenteja", "trigo", "maíz", "caña de azúcar", "espárrago"],
    "sanVicente": ["caña de azúcar", "café", "frutas cítricas", "camote", "cocoteros", "plátanos", "bananos"],
    "santaAna": ["semillas oleaginosas", "yuca", "patata", "tabaco", "algodón", "cocotero", "guineo", " plátano", "frutas cítricas", "sandía", "melón"],
    "sonsonate": ["maíz", "café"],
    "cuscatlan": ["café", "cereales"],
    "usulutan": ["chile dulce", "hortalizas"],
    "chalatenango": ["orquídeas", "hortensias", "girasoles", "fresas", "melocotones", "duraznos", "moras", "manzanas", "papaya", "lechugas", "zanahorias", "lirios", "cebollas", "papas", "rábanos", "espinaca", "ciruelas", "granadillas", "repollos"],
    "sanMiguel": ["maíz", "algodón"],
    "laPaz": ["avena", "uva", "durazno", "ciruela"],
    "ahuachapan": ["café", "algodón"],
    "cabañas": ["ajonjolí", "añil", "café"],
    "laUnion": ["tamarindo"],
    "morazan": ["caña de azúcar", "café", "aguacate", " piñas"]
  };

  protected plants;
  showPlants(d : string) {
    
    switch (d) {
      case 'ss':
        this.plants = this.plants2Plant.sanSalvador;
        break;
      case 'll':
        this.plants = this.plants2Plant.laLibertad;
        break;
      case 'sa':
        this.plants = this.plants2Plant.santaAna;
        break;
      case 'a':
        this.plants = this.plants2Plant.ahuachapan;
        break;
      case 's':
        this.plants = this.plants2Plant.sonsonate;
        break;
      case 'ch':
        this.plants = this.plants2Plant.chalatenango;
        break;
      case 'cs':
        this.plants = this.plants2Plant.cuscatlan;
        break;
      case 'c':
        this.plants = this.plants2Plant.cabañas;
        break;
      case 'lp':
        this.plants = this.plants2Plant.laPaz;
        break;
      case 'sv':
        this.plants = this.plants2Plant.sanVicente;
        break;
      case 'm':
        this.plants = this.plants2Plant.morazan;
        break;
      case 'lu':
        this.plants = this.plants2Plant.laUnion;
        break;
        case 'u':
          this.plants = this.plants2Plant.usulutan;
          break;
          case 'sm':
          this.plants = this.plants2Plant.sanMiguel;
          break;

    }
    console.log(this.plants)


  }

}
