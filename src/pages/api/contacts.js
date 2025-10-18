import { Client } from "pg";

async function getClient() {
  const client = new Client({
    connectionString: process.env.NETLIFY_DATABASE_URL,
  });
  await client.connect();
  return client;
}

export async function GET() {
  const client = await getClient();

  // Create table if it doesn't exist
  await client.query(`
    CREATE TABLE IF NOT EXISTS contacts (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT,
      phone TEXT
    )
  `);

  const res = await client.query("SELECT * FROM contacts ORDER BY id DESC");
  await client.end();

  return new Response(JSON.stringify(res.rows), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST({ request }) {
  const data = await request.formData();
  const name = data.get("name");
  const email = data.get("email");
  const phone = data.get("phone");

  const client = await getClient();
  await client.query(
    "INSERT INTO contacts (name, email, phone) VALUES ($1, $2, $3)",
    [name, email, phone],
  );
  await client.end();

  return new Response("OK", { status: 200 });
}
