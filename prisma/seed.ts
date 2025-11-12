import { PrismaClient } from "../lib/generated/prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.property.createMany({
    data: [
      {
        title_en: "Luxury Apartment in Zamalek",
        title_ar: "شقة فاخرة في الزمالك",
        description_en: "Spacious apartment overlooking the Nile.",
        description_ar: "شقة واسعة تطل على النيل.",
        location_en: "Zamalek, Cairo",
        location_ar: "الزمالك، القاهرة",
        slug: "luxury-apartment-in-zamalek",
        type: "APARTMENT",
        listingType: "RENT",
        bedrooms: 3,
        bathrooms: 2,
        price: 25000,
        size: 180.0,
        buildYear: 2010,
        images: [
          "https://example.com/zamalek1.jpg",
          "https://example.com/zamalek2.jpg",
        ],
      },
      {
        title_en: "Villa near the Pyramids",
        title_ar: "فيلا بالقرب من الأهرامات",
        description_en: "Modern villa with garden, close to Giza Pyramids.",
        description_ar: "فيلا حديثة مع حديقة بالقرب من أهرامات الجيزة.",
        location_en: "Giza, Cairo",
        location_ar: "الجيزة، القاهرة",
        slug: "villa-near-the-pyramids",
        type: "VILLA",
        listingType: "SALE",
        bedrooms: 5,
        bathrooms: 4,
        price: 12000000,
        size: 350.0,
        buildYear: 2018,
        images: [
          "https://example.com/giza1.jpg",
          "https://example.com/giza2.jpg",
        ],
      },
      {
        title_en: "Seaside Apartment in Alexandria",
        title_ar: "شقة مطلة على البحر في الإسكندرية",
        description_en: "Apartment with stunning Mediterranean views.",
        description_ar: "شقة بإطلالة رائعة على البحر المتوسط.",
        location_en: "Corniche, Alexandria",
        location_ar: "كورنيش، الإسكندرية",
        slug: "seaside-apartment-in-alexandria",
        type: "APARTMENT",
        listingType: "RENT",
        bedrooms: 2,
        bathrooms: 1,
        price: 18000,
        size: 120.0,
        buildYear: 2015,
        images: ["https://example.com/alex1.jpg"],
      },
      {
        title_en: "Historic House in Luxor",
        title_ar: "منزل تاريخي في الأقصر",
        description_en: "Traditional house near the Valley of the Kings.",
        description_ar: "منزل تقليدي بالقرب من وادي الملوك.",
        location_en: "Luxor",
        location_ar: "الأقصر",
        slug: "historic-house-in-luxor",
        type: "HOUSE",
        listingType: "SALE",
        bedrooms: 4,
        bathrooms: 2,
        price: 3500000,
        size: 220.0,
        buildYear: 1995,
        images: [
          "https://example.com/luxor1.jpg",
          "https://example.com/luxor2.jpg",
        ],
      },
      {
        title_en: "Beachfront Villa in Sharm El Sheikh",
        title_ar: "فيلا على الشاطئ في شرم الشيخ",
        description_en: "Luxury villa with private beach access.",
        description_ar: "فيلا فاخرة مع وصول خاص للشاطئ.",
        location_en: "Sharm El Sheikh",
        location_ar: "شرم الشيخ",
        slug: "beachfront-villa-in-sharm-el-sheikh",
        type: "VILLA",
        listingType: "RENT",
        bedrooms: 6,
        bathrooms: 5,
        price: 45000,
        size: 500.0,
        buildYear: 2020,
        images: [
          "https://example.com/sharm1.jpg",
          "https://example.com/sharm2.jpg",
        ],
      },
      {
        title_en: "Nile View Apartment in Aswan",
        title_ar: "شقة بإطلالة على النيل في أسوان",
        description_en: "Modern apartment with panoramic Nile views.",
        description_ar: "شقة حديثة بإطلالة بانورامية على النيل.",
        location_en: "Aswan",
        location_ar: "أسوان",
        slug: "nile-view-apartment-in-aswan",
        type: "APARTMENT",
        listingType: "RENT",
        bedrooms: 2,
        bathrooms: 1,
        price: 12000,
        size: 110.0,
        buildYear: 2017,
        images: ["https://example.com/aswan1.jpg"],
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
