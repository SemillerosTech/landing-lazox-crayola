import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Award, Heart, Users, CheckCircle, Star } from "lucide-react";

const WhyUsSection = () => {
  const didactiCredentials = [
    "4 décadas sirviendo familias de CDMX",
    "Acceso directo a fábrica Crayola",
    "Precios que respetan el presupuesto familiar",
    "Atención personalizada que nos caracteriza",
    "Garantía de satisfacción o dinero de vuelta",
  ];

  const lazosCredentials = [
    "Rosa: 28 años especialista en psicología infantil",
    "Doctora en Logoterapia certificada",
    "Sistema SILE desarrollado para niños mexicanos",
    "Enfoque familiar que incluye a papás y mamás",
    "Resultados comprobados en escuelas y empresas",
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            ¿Por Qué <span className="text-primary">Nosotros?</span>
          </h2>
          <p className="text-2xl font-display font-medium text-mexican-terracotta mb-4">
            Dos Empresas Familiares, Una Misión:
          </p>
          <p className="text-3xl font-display font-bold text-foreground">
            El Bienestar Integral de Tu Hijo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Didacti Credentials */}
          <Card className="shadow-elegant hover:shadow-warm transition-all duration-300 border-l-4 border-l-crayola-blue">
            <CardHeader>
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-4 bg-crayola-blue/10 rounded-xl">
                  <Award className="w-10 h-10 text-crayola-blue" />
                </div>
                <div>
                  <Badge
                    variant="outline"
                    className="text-crayola-blue border-crayola-blue mb-2"
                  >
                    🏆 40 AÑOS DE EXPERIENCIA
                  </Badge>
                  <CardTitle className="text-2xl font-display text-crayola-blue">
                    DIDACTI - Tradición y Excelencia
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {didactiCredentials.map((credential, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-crayola-green mt-0.5 flex-shrink-0" />
                    <p className="text-sm font-medium">{credential}</p>
                  </div>
                ))}
              </div>

              <div className="bg-crayola-blue/5 rounded-lg p-4 mt-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="w-5 h-5 text-crayola-blue" />
                  <p className="font-semibold text-crayola-blue">
                    Garantía de Calidad
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  "Productos 100% originales respaldados por 4 décadas de
                  confianza familiar"
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Lazos Credentials */}
          <Card className="shadow-elegant hover:shadow-warm transition-all duration-300 border-l-4 border-l-crayola-orange">
            <CardHeader>
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-4 bg-crayola-orange/10 rounded-xl">
                  <Heart className="w-10 h-10 text-crayola-orange" />
                </div>
                <div>
                  <Badge
                    variant="outline"
                    className="text-crayola-orange border-crayola-orange mb-2"
                  >
                    🧠 EXPERTOS EN DESARROLLO INFANTIL
                  </Badge>
                  <CardTitle className="text-2xl font-display text-crayola-orange">
                    LAZOS - Especialización y Calidez
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {lazosCredentials.map((credential, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-crayola-green mt-0.5 flex-shrink-0" />
                    <p className="text-sm font-medium">{credential}</p>
                  </div>
                ))}
              </div>

              <div className="bg-crayola-orange/5 rounded-lg p-4 mt-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="w-5 h-5 text-crayola-orange" />
                  <p className="font-semibold text-crayola-orange">
                    Certificación Profesional
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  "Respaldo académico con enfoque humano y familiar mexicano"
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Unified Message */}
        <div className="bg-white rounded-xl p-8 lg:p-12 shadow-elegant">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Users className="w-12 h-12 text-mexican-terracotta" />
              <h3 className="text-3xl font-display font-bold text-mexican-terracotta">
                Empresas Hermanas Mexicanas
              </h3>
            </div>
            <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              "Porque entendemos que cada peso cuenta y cada niño merece lo
              mejor. No es solo una compra, es una inversión en el futuro de tu
              hijo"
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-gradient-hero rounded-lg">
              <div className="w-16 h-16 bg-crayola-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-crayola-yellow">
                  40
                </span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Años de Tradición
              </h4>
              <p className="text-sm text-muted-foreground">
                Acompañando familias mexicanas
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-hero rounded-lg">
              <div className="w-16 h-16 bg-crayola-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-crayola-red">
                  1200+
                </span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Familias Atendidas
              </h4>
              <p className="text-sm text-muted-foreground">
                Con cariño y profesionalismo
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-hero rounded-lg">
              <div className="w-16 h-16 bg-crayola-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-crayola-blue">
                  100%
                </span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Productos Originales
              </h4>
              <p className="text-sm text-muted-foreground">
                Directo de fábrica Crayola
              </p>
            </div>
          </div>

          <div className="bg-mexican-terracotta/5 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Heart className="w-6 h-6 text-mexican-terracotta" />
              <h4 className="text-xl font-semibold text-mexican-terracotta">
                Valores Familiares Mexicanos
              </h4>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="space-y-2">
                <p>
                  • <strong>Calidez familiar:</strong> Te tratamos como familia,
                  no como cliente
                </p>
                <p>
                  • <strong>Compromiso generacional:</strong> Educando niños por
                  4 décadas
                </p>
              </div>
              <div className="space-y-2">
                <p>
                  • <strong>Precios justos:</strong> Respetamos el presupuesto
                  familiar mexicano
                </p>
                <p>
                  • <strong>Atención integral:</strong> Cuidamos tanto lo
                  académico como lo emocional
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h4 className="text-2xl font-display font-bold text-foreground mb-4">
              Lo que encuentras solo en empresas familiares mexicanas
            </h4>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Award className="w-5 h-5 mr-2" />
                Conoce Nuestra Historia
              </Button>
              <Button variant="whatsapp" size="lg">
                <Users className="w-5 h-5 mr-2" />
                Visítanos Hoy Mismo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
