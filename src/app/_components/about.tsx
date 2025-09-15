import Image from "next/image";
import caminhaoImg from '../../../public/caminhao.jpeg'
import valmirImg from '../../../public/valmir.jpg'
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">
      <div className="container px-4 mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="relative" data-aos="fade-up-right" data-aos-delay="300">

            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={caminhaoImg}
                alt="Foto do cachorro"
                fill
                quality={100}
                className="object-cover hover:scale-110 duration-300"
                priority
              />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
              <Image
                src={valmirImg}
                alt="Foto do cachorro 2"
                fill
                quality={100}
                priority
              />
            </div>

          </div>

          <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="300">
            <h2 className="text-4xl font-bold">A importância da oferta do lixo no horário adequado:</h2>

            <p>
              É muito importante que eles disponibilizem o lixo exatamente no horário em que o caminhão de coleta passa. Quando o lixo é colocado no momento certo, evitamos que sacos fiquem acumulados nas calçadas, sendo rasgados por animais ou espalhados pelo vento, o que gera sujeira e aumenta o risco de doenças. Além disso, essa prática contribui para um ambiente urbano mais saudável, com menos focos de proliferação de insetos e roedores.
Cumprir os horários da coleta ajuda também a diminuir a percepção de abandono e descuido, fortalecendo a sensação de cuidado e dignidade nos espaços públicos. Uma cidade mais limpa e organizada é um passo importante para reduzir desigualdades, promover bem-estar e oferecer mais qualidade de vida a todos.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                <strong>INÍCIO 21:00</strong>.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Equipe com 4 garis.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Qualidade é nossa prioridade.
              </li>
            </ul>

            <div className="flex gap-2">
              <a
                target='_blank'
                href={`https://wa.me/5521980604000?text=Olá vim pelo site e gostaria de mais informações`}
                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <WhatsappLogo className="w-5 h-5 text-white" />
                Contato via WhatsApp
              </a>

              <a
                href="#"
                className=" flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <MapPin className="w-5 h-5 text-black" />
                ipanema
              </a>
            </div>

          </div>

        </div>


      </div>
    </section>
  )
}