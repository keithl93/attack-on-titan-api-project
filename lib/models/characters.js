import mongoose from 'mongoose'

const Schema = mongoose.Schema;

let Character = new Schema({
  "img": { type: String },
  "name": { type: String },
  "alias": { type: String },
  "species": [String],
  "gender": { type: String },
  "age": { type: Number },
  "status": { type: String },
  "occupation": { type: String },
  "roles": [String]
})

export default mongoose.model('characters', Character)