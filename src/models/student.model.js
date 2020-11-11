import mongoose from 'mongoose';

const collection = 'student';

const json = {
  name: {
    type: String,
    required: true,
  },
  subject: {},
};

const schema = mongoose.Schema({});
