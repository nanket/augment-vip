export interface WisdomQuote {
  quote: string;
  author: string;
}

export const wisdomQuotes: WisdomQuote[] = [
  {
    quote: "The mind is everything. What you think you become.",
    author: "Buddha"
  },
  {
    quote: "Brahmacharya is the control of all the senses in thought, word and deed.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "Self-control is the chief element in self-respect, and self-respect is the chief element in courage.",
    author: "Thucydides"
  },
  {
    quote: "The greatest victory is that which requires no battle.",
    author: "Sun Tzu"
  },
  {
    quote: "He who conquers himself is the mightiest warrior.",
    author: "Confucius"
  },
  {
    quote: "Discipline is the bridge between goals and accomplishment.",
    author: "Jim Rohn"
  },
  {
    quote: "The body is your temple. Keep it pure and clean for the soul to reside in.",
    author: "B.K.S. Iyengar"
  },
  {
    quote: "Mastering others is strength. Mastering yourself is true power.",
    author: "Lao Tzu"
  },
  {
    quote: "The secret of change is to focus all of your energy not on fighting the old, but on building the new.",
    author: "Socrates"
  },
  {
    quote: "Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.",
    author: "Rumi"
  },
  {
    quote: "The mind is restless and difficult to restrain, but it is subdued by practice.",
    author: "Bhagavad Gita"
  },
  {
    quote: "Purity of mind and idleness are incompatible.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "The highest form of self-discipline is when you can control your thoughts.",
    author: "Swami Vivekananda"
  },
  {
    quote: "Strength does not come from physical capacity. It comes from an indomitable will.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "The successful warrior is the average man, with laser-like focus.",
    author: "Bruce Lee"
  },
];

export const getDailyWisdom = (): WisdomQuote => {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  const index = dayOfYear % wisdomQuotes.length;
  return wisdomQuotes[index];
};

