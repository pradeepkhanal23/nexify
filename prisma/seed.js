// we need to make sure that we use the common js module import here since its in the server
const { PrismaClient } = require("@prisma/client");
const products = require("./products.json");
const prisma = new PrismaClient();

// seeding the database with our fake products
async function main() {
  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("Database seeded.........");
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    console.log("Database seeding failed.....");
    process.exit(1);
  });
