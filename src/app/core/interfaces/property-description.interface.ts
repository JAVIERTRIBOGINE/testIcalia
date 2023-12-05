export interface ImageDataProperty {
  PkImagen?: string;
  FkPropiedad?: string;
  Orden?: string;
  Uri: string;
}
export interface PropertyDescription {
  description: string;
  price: number;
  previousPrice: number;
  surface: number;
  bedrooms: number;
  bathrooms: number;
  imagenes?: ImageDataProperty;
}
