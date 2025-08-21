import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin } from "lucide-react";
import Image from "next/image";
import heroFamilyImage from "@/assets/hero-family-crayola.jpg";
import crayolaProductsImage from "@/assets/crayola-products.jpg";
import whatsappIconWhite from "@/assets/whatsapp-white.svg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge
                variant="secondary"
                className="text-lg font-medium px-4 py-2 rounded-full w-full lg:w-auto justify-center"
              >
                <Star className="w-4 h-4 text-black mr-2" />
                40 años de tradición familiar mexicana
              </Badge>

              <h1 className="text-4xl lg:text-6xl font-display font-bold text-foreground leading-tight">
                Productos Crayola Originales al
                <span className="text-primary"> Precio Más Bajo</span>
                <br />
                <span className="text-crayola-orange text-3xl lg:text-5xl">
                  + Acompañamiento Emocional
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                40 años acompañando familias mexicanas en la educación de sus
                hijos. Ahora también cuidamos su desarrollo emocional con el
                mismo cariño familiar.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Badge
                  variant="outline"
                  className="text-crayola-green border-crayola-green"
                >
                  ✓ Productos Crayola 100% originales directo de fábrica
                </Badge>
              </div>
              <div className="flex items-center space-x-2">
                <Badge
                  variant="outline"
                  className="text-crayola-blue border-crayola-blue"
                >
                  ✓ Sistema SILEE de comprensión lectora especializado
                </Badge>
              </div>
              <div className="flex items-center space-x-2">
                <Badge
                  variant="outline"
                  className="text-crayola-purple border-crayola-purple"
                >
                  ✓ Acompañamiento psicológico familiar profesional
                </Badge>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="whatsapp"
                size="xl"
                className="group"
                onClick={() => (window.location.hash = "#contacto")}
              >
                <MapPin className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Te Invitamos a Conocernos
              </Button>
              <Button
                variant="whatsapp"
                size="xl"
                className="group"
                onClick={() =>
                  window.open("https://wa.me/525620757607", "_blank")
                }
              >
                <Image
                  src={whatsappIconWhite}
                  alt="WhatsApp"
                  className="w-5 h-5 mr-2 group-hover:animate-bounce"
                />
                WhatsApp Didacti
              </Button>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-elegant">
              <h3 className="font-semibold text-lg mb-2 text-foreground">
                Empresas hermanas mexicanas con valores familiares profundos
              </h3>
              <p className="text-sm text-muted-foreground">
                Didacti prepara a tu hijo académicamente • Lazox lo acompaña
                emocionalmente
              </p>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src={crayolaProductsImage}
                  alt="Productos Crayola originales organizados profesionalmente"
                  className="rounded-xl shadow-warm w-full object-cover aspect-square"
                />
                <div className="bg-white rounded-xl p-4 shadow-elegant">
                  <p className="text-2xl font-semibold text-crayola-red">
                    Desde $299
                  </p>
                  <p className="text-base text-muted-foreground">
                    Paquetes escolares completos
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Image
                  src={heroFamilyImage}
                  alt="Familia mexicana usando productos Crayola en un momento educativo cálido"
                  className="rounded-xl shadow-warm w-full object-cover aspect-[3/4]"
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-crayola-yellow rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-crayola-red rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
