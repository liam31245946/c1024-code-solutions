import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib';

const app = express();

app.use(express.json());

const db = new pg.Pool();

// First GET
app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      select *
      from "grades"
    `;
    const result = await db.query(sql);
    const grades = result.rows;
    if (!grades) {
      return res.status(500).json({ error: 'Query failed' });
    }
    res.status(200).json(grades);
  } catch (err) {
    next(err);
  }
});

// Second GET
app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, 'gradeId needs to be a number');
    }
    const sql = `
      select *
      from "grades"
      where "gradeId" = $1
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) {
      return res.status(404).json({ error: 'Grade not found' });
    }
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

// CREATE PART
app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    if (!name) {
      throw new ClientError(400, 'Name is missing');
    }
    if (!course) {
      throw new ClientError(400, 'Course is missing');
    }
    if (!score) {
      throw new ClientError(400, 'Score is missing');
    }
    const sql = `
      insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *
    `;
    const params = [name, course, score];
    const result = await db.query(sql, params);
    const createdGrade = result.rows[0];
    res.status(201).json(createdGrade);
  } catch (err) {
    next(err);
  }
});

// Update PART
app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, 'gradeId needs to be a number');
    }
    const { name, course, score } = req.body;
    if (!name) {
      throw new ClientError(400, 'Name is missing');
    }
    if (!course) {
      throw new ClientError(400, 'Course is missing');
    }
    if (!score) {
      throw new ClientError(400, 'Score is missing');
    }
    const sql = `
      update "grades"
      set "name" = $1, "course" = $2, "score" = $3
      where "gradeId" = $4
      returning *
    `;
    const params = [name, course, score, gradeId];
    const result = await db.query(sql, params);
    const updatedGrade = result.rows[0];
    if (!updatedGrade) {
      return res.status(404).json({ error: 'Grade not found' });
    }
    res.status(200).json(updatedGrade);
  } catch (err) {
    next(err);
  }
});

// DELETE PART
app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, 'gradeId needs to be a number');
    }
    const sql = `
      delete from "grades"
      where "gradeId" = $1
      returning *
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const deletedGrade = result.rows[0];
    if (!deletedGrade) {
      return res.status(404).json({ error: 'Grade not found' });
    }
    res.status(204).json(deletedGrade);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8000, () => {
  console.log('Listening on port 8000');
});
