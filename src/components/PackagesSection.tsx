import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package, Star, Gift, Sparkles } from "lucide-react";

const PackagesSection = () => {
  const packages = [
    {
      name: "ESTUDIANTE EXITOSO",
      target: "Niños que inician preescolar o primaria",
      price: "$899",
      originalPrice: "$1,200",
      savings: "$301",
      color: "crayola-blue",
      icon: <Package className="w-8 h-8" />,
      includes: [
        "Kit escolar completo Didacti con productos Crayola",
        "1 mes de Sistema SILEE (4 sesiones)",
        "Asesoría personalizada de productos",
        "Garantía de satisfacción",
      ],
      badge: "Más Popular",
      message: `https://wa.me/525610722202?text=Hola, me interesa el paquete ESTUDIANTE EXITOSO`,
    },
    {
      name: "DESARROLLO INTEGRAL",
      target: "Familias que buscan acompañamiento completo",
      price: "$1,599",
      originalPrice: "$2,100",
      savings: "$501",
      color: "crayola-orange",
      icon: <Star className="w-8 h-8" />,
      includes: [
        "Kit escolar premium Didacti",
        "2 meses Sistema SILEE (8 sesiones)",
        "1 valoración psicológica familiar",
        "Seguimiento personalizado mensual",
      ],
      badge: "Recomendado",
      message: `https://wa.me/525610722202?text=Hola, me interesa el paquete DESARROLLO INTEGRAL`,
    },
    {
      name: "APOYO TOTAL",
      target: "Niños que necesitan apoyo emocional adicional",
      price: "$2,299",
      originalPrice: "$3,000",
      savings: "$701",
      color: "crayola-purple",
      icon: <Gift className="w-8 h-8" />,
      includes: [
        "Kit escolar completo + materiales extra",
        "3 meses Sistema SILEE (12 sesiones)",
        "Valoración + 4 sesiones terapia individual",
        "Plan de seguimiento personalizado",
      ],
      badge: "Máximo Valor",
      message: `https://wa.me/525610722202?text=Hola, me interesa el paquete APOYO TOTAL`,
    },
  ];

  const getCardClasses = (color: string) => {
    const baseClasses =
      "h-full shadow-elegant hover:shadow-warm transition-all duration-300 relative overflow-hidden";
    switch (color) {
      case "crayola-blue":
        return `${baseClasses} border-l-4 border-l-crayola-blue`;
      case "crayola-orange":
        return `${baseClasses} border-l-4 border-l-crayola-orange`;
      case "crayola-purple":
        return `${baseClasses} border-l-4 border-l-crayola-purple`;
      default:
        return baseClasses;
    }
  };

  const getButtonVariant = (color: string) => {
    switch (color) {
      case "crayola-blue":
        return "outline";
      case "crayola-orange":
        return "crayola";
      case "crayola-purple":
        return "warm";
      default:
        return "default";
    }
  };

  const getBadgeColor = (color: string) => {
    switch (color) {
      case "crayola-blue":
        return "text-crayola-blue border-crayola-blue";
      case "crayola-orange":
        return "text-crayola-orange border-crayola-orange";
      case "crayola-purple":
        return "text-crayola-purple border-crayola-purple";
      default:
        return "text-muted-foreground border-muted";
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Paquetes de <span className="text-primary">Educación Integral</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Todo lo que tu hijo necesita en un solo lugar. Combina las mejores
            herramientas académicas con el acompañamiento emocional más cálido.
          </p>

          <div className="bg-gradient-crayola text-white rounded-xl p-6 max-w-2xl mx-auto shadow-elegant">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Sparkles className="w-6 h-6" />
              <h3 className="text-xl font-semibold">
                Oferta Especial de Lanzamiento
              </h3>
            </div>
            <p className="text-sm opacity-90">
              Ahorra hasta $701 pesos comprando nuestros paquetes integrales
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <Card key={index} className={getCardClasses(pkg.color)}>
              {pkg.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge
                    variant="secondary"
                    className="bg-white text-foreground shadow-sm"
                  >
                    {pkg.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="pb-4">
                <div
                  className={`p-3 rounded-lg w-fit mb-4 ${
                    pkg.color === "crayola-blue"
                      ? "bg-crayola-blue/10 text-crayola-blue"
                      : pkg.color === "crayola-orange"
                      ? "bg-crayola-orange/10 text-crayola-orange"
                      : "bg-crayola-purple/10 text-crayola-purple"
                  }`}
                >
                  {pkg.icon}
                </div>

                <CardTitle className="text-2xl font-display font-bold text-foreground">
                  {pkg.name}
                </CardTitle>

                <p className="text-sm text-muted-foreground mb-4">
                  Perfecto para: {pkg.target}
                </p>

                <div className="space-y-2">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold text-foreground">
                      {pkg.price}
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      {pkg.originalPrice}
                    </span>
                  </div>
                  <Badge
                    variant="outline"
                    className={`${getBadgeColor(pkg.color)} font-semibold`}
                  >
                    Ahorras {pkg.savings}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground mb-3">
                    📦 INCLUYE:
                  </h4>
                  <ul className="space-y-2">
                    {pkg.includes.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start space-x-2 text-sm"
                      >
                        <div
                          className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                            pkg.color === "crayola-blue"
                              ? "bg-crayola-blue"
                              : pkg.color === "crayola-orange"
                              ? "bg-crayola-orange"
                              : "bg-crayola-purple"
                          }`}
                        ></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant={getButtonVariant(pkg.color)}
                  size="lg"
                  className={`w-full ${
                    pkg.color === "crayola-blue"
                      ? "bg-crayola-blue text-white hover:bg-crayola-blue/90"
                      : pkg.color === "crayola-orange"
                      ? "bg-crayola-orange text-white hover:bg-crayola-orange/90"
                      : ""
                  }`}
                  onClick={() => window.open(pkg.message, "_blank")}
                >
                  Elegir Este Paquete
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-xl p-8 shadow-elegant max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              ¿Necesitas ayuda para elegir?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nuestras asesoras familiares te ayudarán a elegir el paquete
              perfecto para las necesidades específicas de tu hijo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="whatsapp"
                size="lg"
                onClick={() =>
                  window.open("https://wa.me/525620757607", "_blank")
                }
              >
                Consulta WhatsApp Didacti
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-crayola-orange text-crayola-orange hover:bg-crayola-orange hover:text-white"
                onClick={() =>
                  window.open("https://zcal.co/ludotecalazox/60min", "_blank")
                }
              >
                Agendar Cita Lazox
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
