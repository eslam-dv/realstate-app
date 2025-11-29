export const properties = [
  {
    image: "/images/property-1.png",
    title: "Seaside Serenity House",
    description:
      "A stunning 4-bedroom 3-bathroom house in a peacful seaside location",
    bathrooms: 3,
    bedrooms: 4,
    type: "House",
    price: "550,000",
    location: "Alexandria, Egypt",
    builtYear: 2015,
  },
  {
    image: "/images/property-2.png",
    title: "Mountain Retreat Villa",
    description:
      "A luxurious 5-bedroom 4-bathroom villa in a serene mountain location",
    bathrooms: 4,
    bedrooms: 5,
    type: "Villa",
    price: "1,250,000",
    location: "Aswan, Egypt",
    builtYear: 2018,
  },
  {
    image: "/images/property-3.png",
    title: "Cityscape Oasis Apartment",
    description:
      "A cozy 2-bedroom 1-bathroom apartment in a vibrant city location",
    bathrooms: 1,
    bedrooms: 2,
    type: "Apartment",
    price: "400,000",
    location: "Cairo, Egypt",
    builtYear: 2020,
  },
  {
    image: "/images/property-4.png",
    title: "Beachfront Retreat Villa",
    description:
      "A stunning 4-bedroom 3-bathroom villa in a peacful seaside location",
    bathrooms: 3,
    bedrooms: 4,
    type: "Villa",
    price: "550,000",
    location: "Sharm El-Sheikh, Egypt",
    builtYear: 2016,
  },
];

// Helper to extract unique values
function unique(arr: T[]) {
  return Array.from(new Set(arr));
}

// Location options (city names)
export const locationOptions = unique(
  properties.map((p) => p.location.split(",")[0].trim()),
);

// Property type options
export const propertyTypeOptions = unique(properties.map((p) => p.type));

// Pricing range options (based on price)
export const pricingRangeOptions = [
  "Under 500,000",
  "500,000 - 1,000,000",
  "Over 1,000,000",
];

// Property size options (by bedrooms)
export const propertySizeOptions = [
  "1-2 Bedrooms",
  "3-4 Bedrooms",
  "5+ Bedrooms",
];

// Built year options
export const builtYearOptions = unique(
  properties.map((p) => p.builtYear),
).sort();

export const testimonials = [
  {
    rating: 5,
    comment: "Exceptional Service!",
    details:
      "Our experiene with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended",
    name: "John Doe",
    image: "/images/testimonial-1.png",
    location: "New York, USA",
  },
  {
    rating: 4,
    comment: "Great Experience!",
    details:
      "I had a great experience working with Estatein. They provided me with the perfect property for my needs. Highly satisfied with their service.",
    name: "Jane Smith",
    image: "/images/testimonial-2.png",
    location: "London, UK",
  },
  {
    rating: 5,
    comment: "خدمات ممتازة!",
    details:
      "تم تجربة استثنائية عند استخدام Estatein. فريقهم يقدمون الخدمات المناسبة لما يحتاجون إليها. توصيات رائعة",
    name: "أحمد",
    image: "/images/testimonial-3.png",
    location: "مصر",
  },
  {
    rating: 4,
    comment: "تجربة رائعة!",
    details:
      "تم تجربة استثنائية عند استخدام Estatein. فريقهم يقدمون الخدمات المناسبة لما يحتاجون إليها. توصيات رائعة",
    name: "محمد",
    image: "/images/testimonial-4.png",
    location: "مصر",
  },
];

export const faqs = [
  {
    question: "What is Estatein?",
    answer:
      "Estatein is a real estate platform that connects buyers and sellers. It provides a platform to buy and sell properties.",
    readMore: "",
  },
  {
    question: "How does Estatein work?",
    answer:
      "Estatein works by connecting buyers and sellers. Buyers can browse through properties and make offers, while sellers can list their properties for sale.",
    readMore: "",
  },
  {
    question: "What types of properties can I find on Estatein?",
    answer:
      "Estatein offers a wide range of properties, including houses, apartments, villas, and land.",
    readMore: "",
  },
];
