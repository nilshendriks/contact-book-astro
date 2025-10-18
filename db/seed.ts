import { db, Contact } from "astro:db";

export default async function seed() {
  await db.insert(Contact).values([
    {
      firstName: "Jeffrey",
      lastName: "Lebowski",
      email: "the.dude@bowling.com",
      phone: "555-0001",
    },
    {
      firstName: "Walter",
      lastName: "Sobchak",
      email: "walter.gun@purplecity.com",
      phone: "555-0002",
    },
    {
      firstName: "Donny",
      lastName: "Kerabatsos",
      email: "donny.bowler@homeruns.com",
      phone: "555-0003",
    },
    {
      firstName: "Maude",
      lastName: "Lebowski",
      email: "maude.art@gallery.com",
      phone: "555-0004",
    },
    {
      firstName: "Bunny",
      lastName: "Lebowski",
      email: "bunny.party@lakers.com",
      phone: "555-0005",
    },
  ]);
}
