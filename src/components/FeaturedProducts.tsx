import React from "react";
import Image from "next/image";
import { Product } from "@/types/crayola";
import crayones from "@/assets/products/12-crayones-triangulares.jpg";
import crayonesJumbo from "@/assets/products/12-crayones-jumbo-4-lapices-gratis.jpg";
import coloresBorrables from "@/assets/products/12-lapices-borrables.jpg";
import wonderMarkers from "@/assets/products/24-plumones-wonder-punta-fina.jpg";
import twisteables from "@/assets/products/12-plumones-twisteables-neon.jpg";

const FeaturedProducts: React.FC = () => {
  const products: Product[] = [
    {
      name: "Colores Borrables x 12",
      price: "$98.50",
      image: coloresBorrables,
      whatsapp:
        "https://wa.me/525620757607?text=Hola, me gustaría comprar Colores Borrables x 12",
    },
    {
      name: "Twisteables Crayones Color Neon x 8",
      price: "$67.00",
      image: twisteables,
      whatsapp:
        "https://wa.me/525620757607?text=Hola, me gustaría comprar Twisteables Crayones Color Neon x 8",
    },
    {
      name: "Wonder Markers Punta Fina x 24",
      price: "$77.00",
      image: wonderMarkers,
      whatsapp:
        "https://wa.me/525620757607?text=Hola, me gustaría comprar Wonder Markers Punta Fina x 24",
    },
    {
      name: "Crayones Jumbo x 12 + 4 lápices de color",
      price: "$41.50",
      image: crayonesJumbo,
      whatsapp:
        "https://wa.me/525620757607?text=Hola, me gustaría comprar Crayones Jumbo x 12 + 4 lápices de color",
    },
    {
      name: "Crayones Crayola x 12",
      price: "$42.00",
      image: crayones,
      whatsapp:
        "https://wa.me/525620757607?text=Hola, me gustaría comprar Crayones Crayola x 12",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center lg:text-5xl font-display font-bold text-foreground mb-6">
          <span className="text-crayola-green">
            {" "}
            Productos Crayola Originales
          </span>{" "}
          Seleccionados
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto text-2xl text-crayola-orange">
          Estos precios no los encontrarás en ningún otro lado
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition hover:scale-105 border-l-4 border-l-crayola-green"
              onClick={() => window.open(product.whatsapp, "_blank")}
            >
              <div className="aspect-square bg-gray-200 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="font-bold text-xl text-crayola-green leading-snug min-h-[3rem] mb-2">
                {product.name}
              </h3>

              <p className="text-[var(--crayolaGreen)] font-bold text-xl">
                {product.price}
              </p>

              <button
                className="mt-4  w-full bg-crayola-green text-white px-4 py-2 rounded-lg hover:bg-crayola-orange transition"
                onClick={() => window.open(product.whatsapp, "_blank")}
              >
                Comprar ahora!
              </button>

              <p className="text-center mt-3 text-red-500 font-medium text-xs ">
                ⚠️ Precios especiales válidos únicamente en compra de paquete
                escolar
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
