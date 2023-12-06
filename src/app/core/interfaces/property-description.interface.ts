export interface ImageDataProperty {
  PkImagen?: string;
  FkPropiedad?: string;
  Orden?: string;
  Uri: string;
}
export interface Property {
  description: string;
  price: number;
  previousPrice: number;
  surface: number;
  bedrooms: number;
  bathrooms: number;
  imagenes: ImageDataProperty[];
}

export interface HttpProperty {
  Description: string;
  Precio: number;
  PrecioAnterior: number;
  SuperficieTotal: number;
  Bedrooms: number;
  Bathrooms: number;
  imagenes: ImageDataProperty[];
  ciudadUrl: string;
  provinciaUrl: string;
  (index: string): string;
  id: string;
}
