export interface PlantInterface{
    id?: number;
    nombre: string;
    descripcion: string;
    tipo_tierra: string;
    estatus?: number;
    historico: object;
    created? : Date;

}