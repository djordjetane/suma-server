const { User, Lecture, Attendance } = require('./models')

module.exports = {
    checkForUser,
    checkForLecture,
    addAttendance,
};


async function checkForUser(id) {
    const user = await User.query().findById(id);
    return user !== undefined
}

async function checkForLecture(id) {
    const lecture = await Lecture.query().findById(id);
    return lecture !== undefined
}

async function addAttendance(user_id, lecture_id) {    
    if( await Attendance.query()                            
              .where('user_id', user_id)
              .where('lecture_id', lecture_id)
              .first()
              )
    {
        throw `User ${user_id} already registered for lecture ${lecture_id}`
        //return true
    }

    const attendance = await Attendance.query().insert({
        user_id: user_id,
        lecture_id: lecture_id
    })

    if(!attendance)        
        return {success: false, msg: `[Lecture ${lecture_id}] User ${user_id} INTERNAL ERROR`}    

    console.log(`[Lecture ${lecture_id}] User ${user_id}`)
    return {success: true}
}