import pg from "pg";

export async function handler() {
  const connectionString = process.env.NETLIFY_DATABASE_URL;
  if (!connectionString) {
    return { statusCode: 500, body: JSON.stringify({ error: "NETLIFY_DATABASE_URL is not set" }) };
  }

  const { Pool } = pg;
  const pool = new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });

  try {
    const { rows } = await pool.query(`
      SELECT ziel_direktkredite, eingeworben_direktkredite, kaufpreis
      FROM finance_current
      WHERE id = 1
      LIMIT 1;
    `);

    if (!rows.length) {
      return { statusCode: 404, body: JSON.stringify({ error: "No finance data found" }) };
    }

    const ziel = Number(rows[0].ziel_direktkredite);
    const eingeworben = Number(rows[0].eingeworben_direktkredite);
    const kaufpreis = Number(rows[0].kaufpreis);

    const rest = kaufpreis - eingeworben;
    const mieteProQm = ((rest * 0.05) + 25 000) / 12 / 390;
    const progress = ziel > 0 ? eingeworben / ziel : 0;

    return {
      statusCode: 200,
      headers: { "content-type": "application/json; charset=utf-8" },
      body: JSON.stringify({ ziel, eingeworben, kaufpreis, rest, mieteProQm, progress }),
    };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  } finally {
    await pool.end();
  }
}
