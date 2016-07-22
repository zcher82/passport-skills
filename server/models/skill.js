var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SkillSchema = new Schema({
  skill: {type: String, required: true},
  years: {type: Number, required: true}
});

var Skill = mongoose.model('Skill', SkillSchema);

module.exports = Skill;
