"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react'
import tutor1 from '../../../public/tutor1.png'
import tutor2 from '../../../public/tutor2.png'
import Image from 'next/image'

const testimonials = [
  {
    content:
      "“Um excelente trabalho que vem sendo realizado em nossa cidade. Percebo o cuidado e a dedicação dos funcionários na hora da coleta e limpeza das ruas. Eles tratam todos com respeito, recolhem tudo com eficiência e ainda deixam o local organizado. É gratificante ver como o serviço contribui para uma cidade mais limpa, saudável e agradável para todos os moradores. A equipe está de parabéns pelo empenho e profissionalismo.”",
    author: "Mariana Souza",
    role: "Moradora (ipanema)",
    image: tutor2,
  },
  {
    content:
      "Sou morador do bairro e faço questão de reconhecer o trabalho da Comlurb. A equipe é muito dedicada, recolhe o lixo com cuidado e ainda mantém as ruas limpas depois da coleta. É visível como o serviço contribui para a saúde e o bem-estar da comunidade. É muito bom ver profissionais comprometidos com o que fazem, ajudando a manter nossa cidade mais bonita e organizada. Parabéns pelo trabalho!.",
    author: "Rafael",
    role: "Morador (Rainha Elizabeth)",
    image: tutor1,
  },
  {
    content: "Sou moradora desta cidade e quero elogiar o trabalho da Comlurb. Percebo como os funcionários são atenciosos, trabalham com dedicação e deixam as ruas muito mais limpas e agradáveis para todos nós. Esse cuidado faz diferença no nosso dia a dia, trazendo mais qualidade de vida para a comunidade. É muito bom ver profissionais que se preocupam de verdade com o bem-estar da população. Parabéns pelo serviço!",
    author: "Mariana Souza",
    role: "Moradora (Ipanema)",
    image: tutor2,
  },
]

export function Testimonials() {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true
  })


  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-[#FFD449] py-16">
      <div className="container mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-12">Depoimentos de Moradores</h2>

        <div className="relative max-w-4xl mx-auto">

          <div className='overflow-hidden' ref={emblaRef}>
            <div className='flex'>
              {testimonials.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                  <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className='flex flex-col items-center text-center space-y-4'>
                      <div className='relative w-24 h-24'>
                        <Image
                          src={item.image}
                          alt={item.author}
                          fill
                          sizes='96px'
                          className='object-cover rounded-full'
                        />
                      </div>

                      <p className='text-gray-200'>{item.content}</p>

                      <div>
                        <p className='font-bold'>{item.author}</p>
                        <p className='text-sm text-gray-400'>{item.role}</p>
                      </div>

                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
            onClick={scrollPrev}
          >
            <ChevronLeft className='w-6 h-6 text-gray-600' />
          </button>

          <button
            className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
            onClick={scrollNext}
          >
            <ChevronRight className='w-6 h-6 text-gray-600' />
          </button>

        </div>

      </div>
    </section>
  )
}