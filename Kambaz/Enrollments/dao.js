import model from "./model.js";
export default function EnrollmentsDao() {
  function findAllEnrollments() {
    return model.find();
  }

  async function findCoursesForUser(userId) {
    const enrollments = await model.find({ user: userId }).populate("course");
    return enrollments.map((enrollment) => enrollment.course);
  }

  async function findUsersForCourse(courseId, userId) {
    const enrollments = await model.find({ course: courseId }).populate("user");
    return enrollments.map((enrollment) => enrollment.user);
  }

  async function enrollUserInCourse(userId, courseId) {
    const enrollment = await model.create({
      user: userId,
      course: courseId,
      _id: `${userId} - ${courseId}`,
    });
    return enrollment;
  }

  function unenrollUserFromCourse(user, course) {
    return model.deleteOne({ user, course });
  }

   function unenrollAllUsersFromCourse(courseId) {
   return model.deleteMany({ course: courseId });
 }


  return {
    findAllEnrollments,
    findCoursesForUser,
    findUsersForCourse,
    enrollUserInCourse,
    unenrollUserFromCourse,
    unenrollAllUsersFromCourse,
  };
}
