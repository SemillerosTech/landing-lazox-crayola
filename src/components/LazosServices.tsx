import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Heart,
  Users,
  MessageCircle,
  Clock,
  Gift,
} from "lucide-react";
import Image from "next/image";
import readingTogetherImage from "@/assets/reading-together.jpg";
import familyPlayingImage from "@/assets/family-playing.jpg";

const LazosServices = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            ¿Sabías que la comprensión lectora es el{" "}
            <span className="text-primary">
              corazón del crecimiento integral
            </span>{" "}
            de tu hijo?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            En Lazox, acompañamos a tu hijo en su desarrollo emocional con 28
            años de experiencia y especialización en logoterapia, siempre con
            enfoque familiar mexicano.
          </p>
        </div>

        <div className="space-y-16">
          {/* Sistema SILEE */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-crayola-yellow/10 rounded-lg">
                  <BookOpen className="w-8 h-8 text-crayola-yellow" />
                </div>
                <div>
                  <Badge variant="secondary" className="mb-2">
                    ⭐ Servicio Especializado
                  </Badge>
                  <h3 className="text-3xl font-display font-bold text-foreground">
                    Sistema SILEE - Fomento a la Lectura con Propósito Profundo
                  </h3>
                </div>
              </div>

              <Card className="border-l-4 border-l-crayola-yellow shadow-warm">
                <CardHeader>
                  <CardTitle className="text-xl text-crayola-yellow">
                    ¿En qué consiste?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Tu hijo lee cuentos acompañado de nuestra psicóloga
                    especializada, aprendiendo a reflexionar sobre lo leído y
                    encontrando herramientas valiosas para su vida cotidiana.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">
                      ¿Cómo lo hacemos?
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-crayola-yellow rounded-full mt-2 flex-shrink-0"></div>
                        <p>
                          Lectura guiada con preguntas que invitan a la
                          reflexión
                        </p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-crayola-yellow rounded-full mt-2 flex-shrink-0"></div>
                        <p>
                          Tu hijo descubre las enseñanzas y moralejas de cada
                          historia
                        </p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-crayola-yellow rounded-full mt-2 flex-shrink-0"></div>
                        <p>
                          Mesas familiares donde tu hijo comparte contigo lo
                          aprendido
                        </p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-crayola-yellow rounded-full mt-2 flex-shrink-0"></div>
                        <p>
                          Tú redescubres la increíble sabiduría natural de tu
                          hijo
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-crayola-yellow/5 rounded-lg p-4 mt-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <Gift className="w-5 h-5 text-crayola-yellow" />
                      <p className="font-semibold text-crayola-yellow">
                        Regalo para mamá:
                      </p>
                    </div>
                    <p className="text-sm italic">
                      "Finalmente conocerás lo que tu hijo realmente piensa y
                      siente sobre la vida"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <Image
                src={readingTogetherImage}
                alt="Madre e hijo leyendo juntos en un momento íntimo de aprendizaje"
                className="rounded-xl shadow-elegant w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-warm">
                <p className="text-sm font-semibold text-crayola-yellow">
                  4 sesiones mensuales
                </p>
                <p className="text-xs text-muted-foreground">
                  Desarrollo gradual
                </p>
              </div>
            </div>
          </div>

          {/* Acompañamiento Psicológico */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-crayola-red/10 rounded-lg">
                  <Heart className="w-8 h-8 text-crayola-red" />
                </div>
                <div>
                  <Badge
                    variant="outline"
                    className="mb-2 border-crayola-red text-crayola-red"
                  >
                    💝 Apoyo Especializado
                  </Badge>
                  <h3 className="text-3xl font-display font-bold text-foreground">
                    Acompañamiento Psicológico Especializado y Cálido
                  </h3>
                </div>
              </div>

              <Card className="border-l-4 border-l-crayola-red shadow-warm">
                <CardHeader>
                  <CardTitle className="text-xl text-crayola-red">
                    ¿En qué consiste?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Acompañamiento diseñado específicamente para niños, con 28
                    años de experiencia y especialización en logoterapia,
                    siempre con enfoque familiar mexicano.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">
                      ¿Cuándo puede ayudar?
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-crayola-red rounded-full mt-2 flex-shrink-0"></div>
                        <p>Cuando notes cambios en su comportamiento</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-crayola-red rounded-full mt-2 flex-shrink-0"></div>
                        <p>Si su autoestima necesita fortalecerse</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-crayola-red rounded-full mt-2 flex-shrink-0"></div>
                        <p>Ante miedos o ansiedades que lo preocupan</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-crayola-red rounded-full mt-2 flex-shrink-0"></div>
                        <p>Durante cambios importantes en la familia</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-crayola-red rounded-full mt-2 flex-shrink-0"></div>
                        <p>Cuando como mamá sientes que algo no está bien</p>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-crayola-red/5 rounded-lg p-4 mt-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <Gift className="w-5 h-5 text-crayola-red" />
                      <p className="font-semibold text-crayola-red">
                        Regalo para mamá:
                      </p>
                    </div>
                    <p className="text-sm italic">
                      "La tranquilidad de saber que tu hijo está en manos
                      expertas y cariñosas"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:order-1 relative">
              <div className="bg-gradient-to-br from-crayola-red/10 to-crayola-purple/10 rounded-xl p-8 shadow-elegant">
                <div className="space-y-4 text-center">
                  <div className="w-16 h-16 bg-crayola-red/20 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="w-8 h-8 text-crayola-red" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">
                    Doctora Rosa
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    28 años de experiencia
                  </p>
                  <Badge
                    variant="outline"
                    className="border-crayola-purple text-crayola-purple"
                  >
                    Especialista en Logoterapia
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Valoración Familiar */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-crayola-purple/10 rounded-lg">
                  <Users className="w-8 h-8 text-crayola-purple" />
                </div>
                <div>
                  <Badge
                    variant="outline"
                    className="mb-2 border-crayola-purple text-crayola-purple"
                  >
                    👨‍👩‍👧‍👦 Terapia Familiar
                  </Badge>
                  <h3 className="text-3xl font-display font-bold text-foreground">
                    Valoración Familiar - Terapia de Juego en Familia
                  </h3>
                </div>
              </div>

              <Card className="border-l-4 border-l-crayola-purple shadow-warm">
                <CardHeader>
                  <CardTitle className="text-xl text-crayola-purple">
                    ¿En qué consiste?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Toda tu familia juega junta mientras nuestra psicóloga
                    observa con cariño la dinámica familiar y les comparte
                    herramientas valiosas para crecer juntos.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">
                      ¿Qué incluye?
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-crayola-purple rounded-full mt-2 flex-shrink-0"></div>
                        <p>
                          Reconocimiento de las fortalezas familiares que ya
                          tienen
                        </p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-crayola-purple rounded-full mt-2 flex-shrink-0"></div>
                        <p>
                          Sugerencias cálidas para mejorar áreas de oportunidad
                        </p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-crayola-purple rounded-full mt-2 flex-shrink-0"></div>
                        <p>Estrategias personalizadas para tu familia única</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-crayola-purple rounded-full mt-2 flex-shrink-0"></div>
                        <p>Tiempo de calidad estructurado y significativo</p>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-crayola-purple/5 rounded-lg p-4 mt-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <Gift className="w-5 h-5 text-crayola-purple" />
                      <p className="font-semibold text-crayola-purple">
                        Regalo para mamá:
                      </p>
                    </div>
                    <p className="text-sm italic">
                      "Descubrir todo lo que tu familia hace bien y recibir
                      ideas cariñosas para crecer aún más"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <Image
                src={familyPlayingImage}
                alt="Familia mexicana jugando junta en terapia familiar"
                className="rounded-xl shadow-elegant w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -top-4 -left-4 bg-white rounded-lg p-4 shadow-warm">
                <p className="text-sm font-semibold text-crayola-purple">
                  Sesión completa
                </p>
                <p className="text-xs text-muted-foreground">90 minutos</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button
            variant="crayola"
            size="xl"
            onClick={() =>
              window.open("https://zcal.co/ludotecalazox/60min", "_blank")
            }
          >
            <Clock className="w-5 h-5 mr-2" />
            Agendar Cita con Lazox
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LazosServices;
