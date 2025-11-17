import EnrollmentsDao from "./dao.js";
export default function EnrollmentsRoutes(app, db) {
  const dao = EnrollmentsDao(db);
  const findAllEnrollments = (req, res) => {
    const enrollments = dao.findAllEnrollments();
    res.send(enrollments);
  };
  const enrollUserInCourse = (req, res) => {
    const { courseId } = req.params;
    const currentUser = req.session["currentUser"];
    const userId = currentUser._id;
    dao.enrollUserInCourse(userId, courseId);
    res.sendStatus(200);
  };
  const findUserEnrollments = (req, res) => {
    const currentUser = req.session["currentUser"];
    const enrollments = dao.findUserEnrollments(currentUser._id);
    res.send(enrollments);
  };
  const unenrollUserFromCourse = (req, res) => {
    const { courseId } = req.params;
    const currentUser = req.session["currentUser"];
    const userId = currentUser._id;
    dao.unenrollUserFromCourse(userId, courseId);
    res.sendStatus(200);

  };
  app.post("/api/enrollments/:userId/:courseId", enrollUserInCourse);
  app.delete("/api/enrollments/:userId/:courseId", unenrollUserFromCourse);
  app.get("/api/enrollments/:userId", findUserEnrollments);
  app.get("/api/enrollments", findAllEnrollments);
}
