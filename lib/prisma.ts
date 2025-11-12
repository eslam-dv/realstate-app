// Prisma schema for real estate properties
export const schema = `
model Property {
  id            Int      @id @default(autoincrement())
  name          String
  description   String
  location      String
  bedrooms      Int
  bathrooms     Int
  listingType   ListingType
  propertyType  PropertyType
  price         Float
  previewImage  String
  imageGallery  String[]
}

enum ListingType {
  rental
  sale
}

enum PropertyType {
  apartment
  home
  villa
}
`;
