import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, MessageCircle, Clock, Car, Users } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Te Invitamos a Conocernos -{" "}
            <span className="text-primary">Estamos Aquí para Tu Familia</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Didacti y Lazox están una al lado de la otra, creando un espacio
            integral donde tu familia encontrará todo lo que necesita para el
            crecimiento académico y emocional.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Información de Contacto */}
          <div className="space-y-6">
            <Card className="shadow-elegant border-l-4 border-l-crayola-blue">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-crayola-blue" />
                  <CardTitle className="text-xl text-crayola-blue">
                    Ubicación
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-foreground mb-2">
                  Tlalpan 1552, Delegación Benito Juárez
                </p>
                <p className="text-muted-foreground mb-4">
                  México, Distrito Federal
                </p>
                <Badge
                  variant="outline"
                  className="text-crayola-blue border-crayola-blue"
                >
                  Didacti y Lazox están una al lado de la otra
                </Badge>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="shadow-warm border-l-4 border-l-crayola-green">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-crayola-green" />
                    <CardTitle className="text-lg text-crayola-green">
                      Didacti
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="whatsapp" size="sm" className="w-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Didacti
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Productos Crayola originales
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-warm border-l-4 border-l-crayola-orange">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-crayola-orange" />
                    <CardTitle className="text-lg text-crayola-orange">
                      Lazox
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-crayola-orange text-crayola-orange hover:bg-crayola-orange hover:text-white"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Lazox
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Desarrollo emocional
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-elegant border-l-4 border-l-crayola-purple">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-crayola-purple" />
                  <CardTitle className="text-xl text-crayola-purple">
                    Horarios
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Lunes a Viernes:</span>
                    <span className="text-muted-foreground">
                      9:00 AM - 7:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Sábados:</span>
                    <span className="text-muted-foreground">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Domingos:</span>
                    <span className="text-muted-foreground">
                      Solo Lazox 10:00 AM - 2:00 PM
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Facilidades y Call to Action */}
          <div className="space-y-6">
            <Card className="shadow-elegant bg-gradient-warm">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Car className="w-6 h-6 text-mexican-terracotta" />
                  <CardTitle className="text-xl text-mexican-terracotta">
                    Facilidades
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-crayola-green rounded-full"></div>
                    <span className="text-sm">Estacionamiento disponible</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-crayola-blue rounded-full"></div>
                    <span className="text-sm">Acceso cómodo para familias</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-crayola-orange rounded-full"></div>
                    <span className="text-sm">Área de espera para niños</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-crayola-purple rounded-full"></div>
                    <span className="text-sm">Ambiente familiar mexicano</span>
                  </div>
                </div>

                <div className="bg-white/70 rounded-lg p-4 mt-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="w-5 h-5 text-mexican-terracotta" />
                    <span className="font-semibold text-mexican-terracotta">
                      Atención personalizada
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    40 años cuidando familias mexicanas con el mismo cariño y
                    dedicación de siempre
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="text-2xl font-display font-bold text-center text-foreground">
                ¿Listo para conocernos?
              </h3>

              <div className="grid gap-3">
                <Button variant="hero" size="lg" className="w-full">
                  <MapPin className="w-5 h-5 mr-2" />
                  Cómo Llegar
                </Button>

                <div className="grid sm:grid-cols-2 gap-3">
                  <Button variant="whatsapp" size="lg">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Didacti
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-crayola-orange text-crayola-orange hover:bg-crayola-orange hover:text-white"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Lazox
                  </Button>
                </div>

                <Button variant="crayola" size="lg" className="w-full">
                  <Clock className="w-5 h-5 mr-2" />
                  Agendar Cita con Lazox
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-warm text-center">
              <h4 className="font-semibold text-lg text-foreground mb-2">
                "No es solo una compra, es una inversión en el futuro de tu
                hijo"
              </h4>
              <p className="text-sm text-muted-foreground italic">
                Empresas familiares mexicanas comprometidas con tu familia desde
                1985
              </p>
            </div>
          </div>
        </div>

        {/* Mapa embebido placeholder */}
        <div className="bg-muted rounded-xl p-8 text-center shadow-elegant">
          <MapPin className="w-12 h-12 text-crayola-blue mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Tlalpan 1552, Delegación Benito Juárez
          </h3>
          <p className="text-muted-foreground mb-4">México, Distrito Federal</p>
          <Button variant="outline" size="lg">
            Ver en Google Maps
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
