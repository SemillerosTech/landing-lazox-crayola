import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Heart,
  ShieldCheck,
  Users,
  Award,
  Clock,
} from "lucide-react";

const ValueProposition = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            No Solo Equipamos a Tu Hijo para la Escuela,
            <br />
            <span className="text-primary">
              Lo Acompañamos en Su Crecimiento Integral
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empresas hermanas mexicanas, familias unidas por 40 años. Porque
            entendemos que un niño pleno necesita excelentes herramientas
            académicas Y acompañamiento emocional cálido.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Didacti Column */}
          <Card className="h-full shadow-elegant hover:shadow-warm transition-all duration-300 border-l-4 border-l-crayola-blue">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-crayola-blue/10 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-crayola-blue" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-display text-crayola-blue">
                    DIDACTI - Herramientas Académicas de Excelencia
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className="mt-2 text-crayola-blue border-crayola-blue"
                  >
                    40 años de experiencia
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-crayola-green mt-1 flex-shrink-0" />
                  <p className="text-sm">
                    Productos Crayola 100% originales directo de fábrica
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-crayola-green mt-1 flex-shrink-0" />
                  <p className="text-sm">
                    Precios justos que respetan el presupuesto familiar
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-crayola-green mt-1 flex-shrink-0" />
                  <p className="text-sm">
                    40 años acompañando el éxito estudiantil mexicano
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-crayola-green mt-1 flex-shrink-0" />
                  <p className="text-sm">
                    Asesoría personalizada con el cariño de siempre
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-crayola-green mt-1 flex-shrink-0" />
                  <p className="text-sm">Compromiso familiar con la calidad</p>
                </div>
              </div>

              <div className="bg-crayola-blue/5 rounded-lg p-4 mt-6">
                <p className="text-center font-medium text-crayola-blue">
                  "Las mejores herramientas para que tu hijo brille en la
                  escuela"
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Lazos Column */}
          <Card className="h-full shadow-elegant hover:shadow-warm transition-all duration-300 border-l-4 border-l-crayola-orange">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-crayola-orange/10 rounded-lg">
                  <Heart className="w-8 h-8 text-crayola-orange" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-display text-crayola-orange">
                    LAZOS - Acompañamiento Emocional Especializado
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className="mt-2 text-crayola-orange border-crayola-orange"
                  >
                    28 años de experiencia
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-crayola-red mt-1 flex-shrink-0" />
                  <p className="text-sm">
                    Sistema SILE: comprensión lectora que forma el carácter
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-crayola-red mt-1 flex-shrink-0" />
                  <p className="text-sm">
                    Acompañamiento psicológico especializado en niños
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-crayola-red mt-1 flex-shrink-0" />
                  <p className="text-sm">
                    Valoración familiar con terapia de juego integral
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-crayola-red mt-1 flex-shrink-0" />
                  <p className="text-sm">
                    28 años de experiencia en desarrollo emocional infantil
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-crayola-red mt-1 flex-shrink-0" />
                  <p className="text-sm">
                    Espacios seguros donde los padres descubren a sus hijos
                  </p>
                </div>
              </div>

              <div className="bg-crayola-orange/5 rounded-lg p-4 mt-6">
                <p className="text-center font-medium text-crayola-orange">
                  "Herramientas emocionales que acompañan toda la vida"
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-elegant max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Users className="w-8 h-8 text-mexican-terracotta" />
              <h3 className="text-2xl font-display font-bold text-mexican-terracotta">
                Empresas hermanas mexicanas
              </h3>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              Familias unidas por 40 años de tradición y compromiso con la
              educación integral
            </p>
            <Button variant="warm" size="lg">
              <Award className="w-5 h-5 mr-2" />
              Conoce Nuestra Historia
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
