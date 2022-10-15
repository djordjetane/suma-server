const {Model} = require('objection');

class Attendance extends Model {
    static get tableName(){
        return 'attendance';
    }
    //Might need to fix, cant test now.
    static get relationMappings(){
        const User = require('./user');
        const Lecture = require('./lecture');
        return {
            user: {
                relation: Model.HasOneRelation,
                modelClass: User,
                join: {
                    from: 'attendance.user_id',
                    to: 'user.id'
                }
            },
            lectures: {
                relation: Model.HasManyRelation,
                modelClass: Lecture,
                join: {
                    from: 'attendance.lecture_id',
                    to: 'lecture.id'
                }
            }

        };
    }
}


module.exports = Attendance;