import type { StaticImageData } from "next/image";

export interface Product {
  name: string;
  price: string;
  image: string | StaticImageData;
  whatsapp: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string | StaticImageData;
}
