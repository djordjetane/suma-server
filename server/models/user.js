const {Model} = require('objection');

class User extends Model {
    //For some reason all methods need to be static
    static get tableName(){
        return 'user';
    }

    static get idColumn(){
        return 'id';
    }

    //  Used for validation and by doc generators
    static get jsonSchema(){
        return {
            "type": 'object',
            "required": ['first_name', 'last_name'],

            "properties": {
                "id": { "type": 'integer' },                
                "first_name": { "type": 'string', "minLength": 2, "maxLength": 255 },
                "last_name": { "type": 'string', "minLength": 2, "maxLength": 255 }
            }
        }
    }

    //Might need fix, cant test right now.
    static get relationMappings(){
        const Attendance = require('./attendance');
        return {
            attendance: {
                relation: Model.HasManyRelation,
                modelClass: Attendance,
                join: {
                    from: 'user.id',
                    to: 'attendance.user_id'
                }
            }
        };
    }

}


module.exports = User;