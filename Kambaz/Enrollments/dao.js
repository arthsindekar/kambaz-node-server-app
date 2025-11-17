import { v4 as uuidv4 } from "uuid";
export default function EnrollmentsDao(db) {
  function findAllEnrollments() {
    return db.enrollments;
  }
  function enrollUserInCourse(userId, courseId) {
    const { enrollments } = db;
     enrollments.push({
      _id: uuidv4(),
      user: userId,
      course: courseId,
    });
    return 200;
  }

  function findUserEnrollments(userId) {
    const { enrollments } = db;
    return enrollments.filter((enrollment) => enrollment.user === userId);
  }

  function unenrollUserFromCourse(userId, courseId) {
    let { enrollments } = db;
    enrollments = enrollments.filter(
      (e) => !(e.user === userId && e.course === courseId)
    );
    db.enrollments = enrollments;
    return 200;
  }

  return {
    findAllEnrollments,
    enrollUserInCourse,
    findUserEnrollments,
    unenrollUserFromCourse,
  };
}
