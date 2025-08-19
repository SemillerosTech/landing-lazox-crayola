import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carmen Rodríguez",
      children: "mamá de Diego, Sofía y Mateo",
      location: "Col. Del Valle",
      type: "didacti",
      quote:
        "Llevo 8 años comprando los útiles de mis 3 hijos aquí en Didacti. El trato familiar y los productos Crayola originales han sido una bendición para nuestro presupuesto",
      rating: 5,
      highlight: "8 años de confianza",
    },
    {
      name: "María González",
      children: "mamá de Alejandro (7 años)",
      location: "Col. Narvarte",
      type: "Lazox",
      quote:
        "Mi hijo era muy tímido y casi no me platicaba nada de la escuela. Después del Sistema SILE ahora conversamos de todo. Rosa me enseñó a escuchar realmente a mi hijo",
      rating: 5,
      highlight: "Transformación emocional",
    },
    {
      name: "Lucía Hernández",
      children: "mamá de Valeria (6 años)",
      location: "Col. Portales",
      type: "combined",
      quote:
        "Compré los útiles en Didacti y me quedé sorprendida con Lazox. Ahora mi hija tiene las mejores herramientas para estudiar y también para entender sus emociones",
      rating: 5,
      highlight: "Educación integral",
    },
  ];

  const getCardBorder = (type: string) => {
    switch (type) {
      case "didacti":
        return "border-l-4 border-l-crayola-blue";
      case "Lazox":
        return "border-l-4 border-l-crayola-orange";
      case "combined":
        return "border-l-4 border-l-crayola-purple";
      default:
        return "border-l-4 border-l-muted";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "didacti":
        return "text-crayola-blue border-crayola-blue";
      case "Lazox":
        return "text-crayola-orange border-crayola-orange";
      case "combined":
        return "text-crayola-purple border-crayola-purple";
      default:
        return "text-muted-foreground border-muted";
    }
  };

  const getTypeName = (type: string) => {
    switch (type) {
      case "didacti":
        return "Didacti";
      case "Lazox":
        return "Lazox";
      case "combined":
        return "Didacti + Lazox";
      default:
        return "";
    }
  };

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Testimoniales de{" "}
            <span className="text-primary">Familias Mexicanas Reales</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            40 años acompañando familias nos han enseñado que cada historia es
            única. Estas son algunas de las familias que han crecido con
            nosotros.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`h-full shadow-elegant hover:shadow-warm transition-all duration-300 ${getCardBorder(
                testimonial.type
              )}`}
            >
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <Badge
                    variant="outline"
                    className={getTypeColor(testimonial.type)}
                  >
                    {getTypeName(testimonial.type)}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-crayola-yellow text-crayola-yellow"
                      />
                    ))}
                  </div>
                </div>

                <div className="flex-grow">
                  <Quote className="w-8 h-8 text-muted-foreground/30 mb-3" />
                  <blockquote className="text-muted-foreground italic mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </div>

                <div className="mt-auto">
                  <div className="bg-white/50 rounded-lg p-3 mb-3">
                    <Badge variant="secondary" className="text-xs mb-1">
                      {testimonial.highlight}
                    </Badge>
                  </div>

                  <div className="border-t border-muted pt-3">
                    <p className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.children}
                    </p>
                    <p className="text-xs text-muted-foreground font-medium">
                      📍 {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-elegant max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              De familias mexicanas para familias mexicanas
            </h3>
            <p className="text-muted-foreground mb-6">
              Cada testimonio representa años de confianza y crecimiento
              compartido. Porque entendemos que cada peso cuenta y cada niño
              merece lo mejor.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-crayola-blue rounded-full"></div>
                <span>+1,200 familias atendidas</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-crayola-orange rounded-full"></div>
                <span>40 años de experiencia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
