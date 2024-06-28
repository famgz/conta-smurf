'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/_components/ui/accordion';

export default function HomeFAQ() {
  const faqItems = [
    {
      title: 'What is an inactive account or NFA?',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quos animi error, dicta, dolore ratione ducimus, optio dolores dolore ratione ducimus, optio dolores nemo voluptatem nemo voluptatem ut. Cupiditate adipisci suscipit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quos animi error, dicta, dolore ratione ducimus, optio dolores nemo voluptatem ut architecto ipsam. Cumque impedit reiciendis tenetur cupiditate adipisci suscipit!',
    },
    {
      title: 'Are the accounts guaranteed?',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quos animi error, dicta, dolore ratione ducimus, optio dolores dolore ratione ducimus, optio dolores nemo voluptatem nemo voluptatem ut. Cupiditate adipisci suscipit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quos animi error, dicta, dolore ratione ducimus, optio dolores nemo voluptatem ut architecto ipsam. Cumque impedit reiciendis tenetur cupiditate adipisci suscipit!',
    },
    {
      title: 'Accounts prepared by hand / handlevel',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quos animi error, dicta, dolore ratione ducimus, optio dolores dolore ratione ducimus, optio dolores nemo voluptatem nemo voluptatem ut. Cupiditate adipisci suscipit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quos animi error, dicta, dolore ratione ducimus, optio dolores nemo voluptatem ut architecto ipsam. Cumque impedit reiciendis tenetur cupiditate adipisci suscipit!',
    },
    {
      title: 'What should I do after purchasing a full access account?',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quos animi error, dicta, dolore ratione ducimus, optio dolores dolore ratione ducimus, optio dolores nemo voluptatem nemo voluptatem ut. Cupiditate adipisci suscipit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quos animi error, dicta, dolore ratione ducimus, optio dolores nemo voluptatem ut architecto ipsam. Cumque impedit reiciendis tenetur cupiditate adipisci suscipit!',
    },
    {
      title: 'Is it safe to buy here?',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quos animi error, dicta, dolore ratione ducimus, optio dolores dolore ratione ducimus, optio dolores nemo voluptatem nemo voluptatem ut. Cupiditate adipisci suscipit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quos animi error, dicta, dolore ratione ducimus, optio dolores nemo voluptatem ut architecto ipsam. Cumque impedit reiciendis tenetur cupiditate adipisci suscipit!',
    },
  ];

  return (
    <div className="flex-center">
      <Accordion
        type="single"
        collapsible
        className="grid w-full max-w-[1524px] gap-5"
      >
        {faqItems.map((x, i) => (
          <AccordionItem
            value={`item_${i}`}
            key={`item_${i}`}
            className="overflow-hidden rounded-[30px] border-none backdrop-blur-sm"
          >
            <AccordionTrigger
              className={
                'bg-gradient-to-r from-[#acacac]/40 to-[#b1b1b1]/40 px-10 py-7 text-4xl'
              }
            >
              {x.title}
            </AccordionTrigger>
            <AccordionContent className="mt-2 bg-gradient-to-r from-[#222]/40 to-[#373737]/40 px-10 py-7 text-left text-sm font-light">
              {x.text}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
