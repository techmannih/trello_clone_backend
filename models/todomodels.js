const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: true,
  },
  tasks: [
    {
      taskName: {
        type: String,
        required: true,
      },
    },
  ],
  dateStamp: {
    type: Date,
    default: Date.now,
  },
},

{ timestamps: true }
);

const TodoModel = mongoose.model("Todo", todoSchema);

module.exports = TodoModel;
