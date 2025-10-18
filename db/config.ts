import { defineDb, defineTable, column } from "astro:db";

const Contact = defineTable({
  columns: {
    firstName: column.text(),
    lastName: column.text(),
    email: column.text(), // required string
    phone: column.text(), // optional string if you want
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Contact },
});
