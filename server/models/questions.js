var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({ //sets schema type
  _user: {type: Schema.Types.ObjectId, ref:'User'},
  text: {type:String, require:true},
  likes: {type:Number, require:true, default: 0},
  likes2: {type:Number, require:true, default: 0},
  likes3: {type:Number, require:true, default: 0},
  likes4: {type:Number, require:true, default: 0},
  description: {type:String, require:true},
  description2:{type:String, require:true},
  description3: {type:String, require:true},
  description4: {type: String, require:true},
  answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
}, {timestamps: true})

mongoose.model('Question', QuestionSchema);
