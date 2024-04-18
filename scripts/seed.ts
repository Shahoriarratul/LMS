const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.Category.createMany({
      data: [
        {
          name: "Computer Sceince",
        },
        {
          name: "Music",
        },
        {
          name: "Fitness",
        },
        {
          name: "Photography",
        },
        {
          name: "Accounting",
        },
        {
          name: "Engineering",
        },
        {
          name: "Filming",
        },
      ],
    });
    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database catergories", error);
  } finally {
    await database.$disconnect();
  }
}
main();
