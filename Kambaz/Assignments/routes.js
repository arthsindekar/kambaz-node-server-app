import AssignmentsDao from "./dao.js";  
export default function AssignmentRoutes(app, db) {
  const dao = AssignmentsDao(db);
  const findAssignmentForCourse = (req, res) => {
    const { courseId } = req.params;
    const assignments = dao.findAssignmentForCourse(courseId);
    res.json(assignments);
  };
  const createAssignment = (req, res) => {
    const newAssignment = dao.createAssignment(req.body);
    res.json(newAssignment);
  };
  const deleteAssignment = (req, res) => {
    const { assignmentId } = req.params;
    const status = dao.deleteAssignment(assignmentId);
    res.send(status);
  };

  const updateAssignment = (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const status = dao.updateAssignment(assignmentId, assignmentUpdates);
    res.send(status);
  };

  app.get("/api/assignments/:courseId", findAssignmentForCourse);
  app.post("/api/assignments", createAssignment);
  app.delete("/api/assignments/:assignmentId", deleteAssignment);
  app.put("/api/assignments/:assignmentId", updateAssignment);
}
