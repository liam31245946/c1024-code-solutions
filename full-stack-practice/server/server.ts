import 'dotenv/config';
import pg from 'pg';
import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';

export type Product = {
  productId: number;
  name: string;
  imageUrl: string;
  price: number;
  shortDescription: string;
  longDescription: string;
};

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.get('/api/products', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "products"
        order by "productId"
    `;
    const result = await db.query<Product>(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/products/:productId', async (req, res, next) => {
  try {
    const { productId } = req.params;
    if (!Number.isInteger(+productId)) {
      throw new ClientError(400, 'productId needs to be a number');
    }
    const sql = `
      select *
      from "products"
      where "productId" = $1
    `;
    const params = [productId];
    const result = await db.query<Product>(sql, params);
    const product = result.rows[0];
    if (!product) {
      throw new ClientError(404, 'product is missing');
    }
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});
