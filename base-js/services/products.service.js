import pool from "../db/db";

/**
 *
 * @param {{
 * name: string,
 * price: number
 * quantity: number,
 * sellerId: string
 * }} param0
 */
export async function createProduct({ name, price, quantity, sellerId }) {
  const [rows, fields] = await pool.query(
    "INSERT INTO products (name, price, quantity, seller_id, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)",
    [name, price, quantity, sellerId, new Date(), new Date()]
  );
  return rows;
}

export async function getAllProducts() {
  const [rows, fields] = await pool.query("SELECT * FROM products");
  return rows;
}
