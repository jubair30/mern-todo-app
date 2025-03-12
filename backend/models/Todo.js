import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  text: String,
  completed: Boolean,
});

export default mongoose.model('Todo', todoSchema);
