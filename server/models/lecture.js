const {Model} = require('objection');

class Lecture extends Model {
    static get tableName(){
        return 'lecture';
    }

    static get jsonSchema() {
        return {
          "type": 'object',
          "required": ['name'],
    
          "properties": {
            "id": { "type": 'integer' },
            "name": { "type": 'string' }
          }
        }
    }

    static get relationMappings(){
        const Attendance = require('./attendance');
        return {
            lecture:{
                relation: Model.HasOneRelation,
                modelClass: Attendance,
                join:{
                    from: 'lecture.id',
                    to: 'attendance.lecture_id'
                }
            }
        };
    }
}


module.exports = Lecture;