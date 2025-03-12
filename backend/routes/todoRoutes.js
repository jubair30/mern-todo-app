import express from 'express';
import Todo from '../models/Todo.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const newTodo = new Todo(req.body);
  await newTodo.save();
  res.json(newTodo);
});

router.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

router.delete('/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "✅ Todo deleted" });
});

export default router;
