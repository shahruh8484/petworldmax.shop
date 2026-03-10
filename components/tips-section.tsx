"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How often should I feed my cat?",
    answer: "Adult cats should be fed 2-3 times a day. Kittens under 6 months need 3-4 meals daily, then transition to adult feeding schedule. It's important to maintain a routine and avoid overfeeding your pet."
  },
  {
    question: "How many times a day should I walk my dog?",
    answer: "Adult dogs need at least 2-3 walks daily. Walk duration depends on breed: active dogs need 1-2 hours per day, while small breeds need 30-40 minutes. Adjust based on your dog's energy level."
  },
  {
    question: "What cage should I choose for a parakeet?",
    answer: "The cage must be spacious enough for the bird to spread its wings. Minimum size for a budgie is 60x40x40 cm. Bars should be horizontal for climbing. Don't place the cage in drafts or direct sunlight."
  },
  {
    question: "How often should I change aquarium water?",
    answer: "Do partial water changes (20-30%) every 1-2 weeks. Avoid complete water changes as this disrupts the biological balance. Use dechlorinated water at room temperature."
  },
  {
    question: "When should I vaccinate my kitten or puppy?",
    answer: "First vaccination at 2-2.5 months, with booster 3-4 weeks later. Rabies vaccination at 3 months. Avoid walks and contact with other animals before vaccination."
  },
  {
    question: "How do I potty train my kitten?",
    answer: "Place the litter box in a quiet, accessible location. Put kitten in box after meals and sleep. Use unscented litter. Praise successes and never punish accidents. Usually learned in 1-2 weeks."
  },
]

export function TipsSection() {
  return (
    <section id="tips" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Helpful Tips
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground mt-4">
              Answers to popular questions about pet care
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
