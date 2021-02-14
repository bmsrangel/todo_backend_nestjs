/* eslint-disable prettier/prettier */
import * as mongo from 'mongoose';

export const TaskSchema = new mongo.Schema({
  description: String,
  completed: Boolean,
});
