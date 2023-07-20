import mongoose from 'mongoose'

const Schema = mongoose.Schema;

let Character = new Schema({
  "img": { type: String },
  "name": { type: String },
  "alias": [{ type: String }],
  "species": [{ type: String }],
  "gender": { type: String },
  "age": { type: String },
  "status": { type: String },
  "occupation": { type: String },
  "roles": [{ type: String }]
})

export default mongoose.model('characters', Character)