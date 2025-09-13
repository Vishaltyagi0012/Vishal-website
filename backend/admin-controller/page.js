
import user from '../db/user/page.js';
import contact from '../db/contact/page.js';
import cour from '../db/cour/page.js';


const getAllUsers = async (req, res, next) => {
  try {
    const users = await user.find({}, { password: 0 });
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    res.status(200).json({ users });
  } catch (error) {
    next(error);
  }
};


const getUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await user.findOne({ _id: id }, { password: 0 });
    if (!data) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const deleteUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteResult = await user.deleteOne({ _id: id });
    if (deleteResult.deletedCount === 0) {
      return res.status(404).json({ message: "User not found to delete" });
    }
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
};

const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await contact.find();
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "No contacts found" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

const deleteContactById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteResult = await contact.deleteOne({ _id: id });
    if (deleteResult.deletedCount === 0) {
      return res.status(404).json({ message: "Contact not found to delete" });
    }
    return res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    next(error);
  }
};

const getAllCourses = async (req, res, next) => {
  try {
    const courses = await cour.find();
    if (!courses || courses.length === 0) {
      return res.status(404).json({ message: "No courses found" });
    }
    return res.status(200).json(courses);
  } catch (error) {
    next(error);
  }
};

const deleteCourseById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteResult = await cour.deleteOne({ _id: id });
    if (deleteResult.deletedCount === 0) {
      return res.status(404).json({ message: "Course not found to delete" });
    }
    return res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export default {
  getAllUsers,
  getUserById,
  deleteUserById,
  getAllContacts,
  deleteContactById,
  getAllCourses,
  deleteCourseById
};
