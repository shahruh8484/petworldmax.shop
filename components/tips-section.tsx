"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Как часто нужно кормить кошку?",
    answer: "Взрослую кошку рекомендуется кормить 2-3 раза в день. Котят до 6 месяцев кормят 3-4 раза в день, а после — переводят на взрослый режим. Важно соблюдать режим и не перекармливать питомца."
  },
  {
    question: "Сколько раз в день нужно выгуливать собаку?",
    answer: "Взрослую собаку нужно выгуливать минимум 2-3 раза в день. Продолжительность прогулки зависит от породы: активным собакам нужно не менее 1-2 часов в день, а маленьким породам достаточно 30-40 минут."
  },
  {
    question: "Какую клетку выбрать для попугая?",
    answer: "Клетка должна быть достаточно просторной, чтобы птица могла расправить крылья. Минимальный размер для волнистого попугая — 60x40x40 см. Прутья должны быть горизонтальными, чтобы птица могла лазить. Не размещайте клетку на сквозняке или под прямыми солнечными лучами."
  },
  {
    question: "Как часто менять воду в аквариуме?",
    answer: "Частичную подмену воды (20-30%) нужно делать раз в 1-2 недели. Полную замену воды делать не рекомендуется, так как это нарушает биобаланс. Используйте отстоянную воду комнатной температуры."
  },
  {
    question: "Когда делать первые прививки котёнку или щенку?",
    answer: "Первую комплексную вакцинацию проводят в возрасте 2-2,5 месяцев, ревакцинацию — через 3-4 недели. Прививку от бешенства делают в 3 месяца. До вакцинации нельзя выгуливать питомца и допускать контакт с другими животными."
  },
  {
    question: "Как приучить котёнка к лотку?",
    answer: "Поставьте лоток в тихое, доступное место. Сажайте котёнка в лоток после сна и еды. Используйте наполнитель без резкого запаха. Хвалите за успехи и никогда не наказывайте за промахи. Обычно котята учатся за 1-2 недели."
  },
]

export function TipsSection() {
  return (
    <section id="tips" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Полезные советы
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Часто задаваемые вопросы
            </h2>
            <p className="text-muted-foreground mt-4">
              Ответы на популярные вопросы о содержании домашних животных
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
