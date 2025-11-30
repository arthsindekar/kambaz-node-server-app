import EnrollmentsDao from "./dao.js";
export default function EnrollmentsRoutes(app) {
  const dao = EnrollmentsDao();

  const findAllEnrollments = (req, res) => {
    const enrollments = dao.findAllEnrollments();
    res.send(enrollments);
  };

  //Find courses for a user
  const findCoursesForUser = async (req, res) => {
    const { userId } = req.params;
    const courses = await dao.findCoursesForUser(userId);
    res.json(courses);
  };

  const enrollUserInCourse = async (req, res) => {
    let { uid, cid } = req.params;
    if (uid === "current") {
      const currentUser = req.session["currentUser"];
      uid = currentUser._id;
    }
    const status = await dao.enrollUserInCourse(uid, cid);
    res.send(status);
  };
  const unenrollUserFromCourse = async (req, res) => {
    let { uid, cid } = req.params;
    if (uid === "current") {
      const currentUser = req.session["currentUser"];
      uid = currentUser._id;
    }
    const status = await dao.unenrollUserFromCourse(uid, cid);
    res.send(status);
  };
  app.post("/api/users/:uid/courses/:cid", enrollUserInCourse);
  app.delete("/api/users/:uid/courses/:cid", unenrollUserFromCourse);
  app.get("/api/enrollments/:userId", findCoursesForUser);
  app.get("/api/enrollments", findAllEnrollments);
}
