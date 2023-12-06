import { ImageDataProperty } from "../interfaces/property-description.interface";

export class PropertyMapper {
  description: string;
  price: number
  previousPrice: number
  surface: number
  bedrooms: number
  bathrooms: number
  imagenes: ImageDataProperty[]
  constructor(
    Description: string,
    Precio: number,
    PrecioAnterior: number,
    SuperficieTotal: number,
    Bedrooms: number,
    Bathrooms: number,
    imagenes: ImageDataProperty[]
    ) 
    {
      this.description = Description;
      this.price = Precio;
      this.previousPrice = PrecioAnterior;
      this.surface = SuperficieTotal;
      this.bedrooms = Bedrooms;
      this.bathrooms = Bathrooms;
      this.imagenes = imagenes;
    }
  
}
