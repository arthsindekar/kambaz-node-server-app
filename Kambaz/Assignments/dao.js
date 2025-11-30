import { v4 as uuidv4 } from "uuid";
import model from "./model.js";
export default function AssignmentsDao() {
  function findAssignmentForCourse(courseId) {
    return model.find({ course: courseId });
  }

  function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: uuidv4() };
    return model.create(newAssignment);
  }

  async function deleteAssignment(assignmentId) {
    return model.deleteOne({ _id: assignmentId });
  }
  async function updateAssignment(assignmentId, updatedAssignment) {
    return model.updateOne({ _id: assignmentId }, { $set: updatedAssignment });
  }

  return {
    findAssignmentForCourse,
    createAssignment,
    deleteAssignment,
    updateAssignment,
  };
}
