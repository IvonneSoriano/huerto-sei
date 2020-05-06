import { PlantInterface } from './../models/plantInterface';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlantsService {

  public allPlants : any ;

  constructor(private http: HttpClient, private userService: UserService) { }
  getPlants(){
    const token = this.userService.getToken();
    const url = `http://localhost:5000/plantas?token=${token}`;
    return this.http.get(url);    

  }

  insertPlant(nombre : string, descripcion: string, tipo_tierra : string, historico : Object){
    const token= this.userService.getToken();
    const url = `http://localhost:5000/plantas?token=${token}`;
    return this.http.post<PlantInterface>(url, {
      nombre, descripcion, tipo_tierra, historico 
    });
  }
  getPlant(id){
    const token = this.userService.getToken();
    const url = `http://localhost:5000/planta/${id}?token=${token}`;
    return this.http.get(url, id); 
  }
  updatePlant(id, datos){
    const token = this.userService.getToken();
    const url = `http://localhost:5000/planta/${id}?token=${token}`;
    return this.http.put(url,{"historico": datos}); 
  }

  getPredict(id: number, dias: number){
    const token = this.userService.getToken();
    const url = `http://localhost:5000/predicciones/${id}/${dias}?token=${token}`;
    return this.http.get(url);
  }
  getAdvice(id: number, dias: number){
    const token = this.userService.getToken();
    const url = `http://localhost:5000/prediccion//${id}/${dias}?token=${token}`;
    return this.http.get(url);
  }
}
