const User = require("../models/users");
// Create User
const createUsers = async (req, res, next) => {
    try {
     const valiReq = await UserSchema.addUserSchema.validateAsync(req.body)
      const User = new createUsers(valiReq);
      console.log(User);
      User.save().then(
        res.status(200).json({
          message: "Added product successfully!",
        })
      );
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: "Bad request.",
        errorMessage: error.details[0].message,
        statusCode: 400
      });
    }
  };
  
  // Get all User
  const getAllUser = async (req, res, next) => {
    try {
      const allUser= await User.find();
      if (User.length > 0) {
        res.status(200).json({
         User: allUser.reverse(),
        });
      } else {
        res.status(200).json({
          message: "No results",
         User: [],
        });
      }
    } catch (error) {
      res.status(400).json({
        message: "Bad request",
      });
    }
  };
  
  // get Users by id
  const getUserById = async (req, res, next) => {
    const UserById = req.params.UserById;
    try {
      const UserById = await User.findById(User);
      if (User) {
        res.status(200).json({
          statusCode: 200,
          User,
        });
      } else {
        res.status(204).json({
          statusCode: 204,
          message: "User does not exist in the database",
        });
      }
    } catch (error) {
      res.status(400).json({
        message: "Bad request",
      });
    }
  };
  
  //delete product by id
  const deleteUsersById = async (req, res, next) => {
    const UsersId = req.params.UsersId;
    try {
      const UsersId = await UsersId.findByIdAndRemove(UsersId);
      if (UsersId) {
        res.status(200).json({
          statusCode: 200,
          message: "Deleted User successfuly",
        });
      } else {
        res.status(200).json({
          statusCode: 204,
          message: "User does not exist in the database",
        });
      }
    } catch (error) {
      res.status(400).json({
        statusCode: 400,
        message: "Bad request",
      });
    }
  };
  
  //update Users by id
  const updateUsersById = async (req, res, next) => {
    const UsersId = req.params.UsersId;
    try {
      console.log(req.body);
      if (Object.keys(req.body).length === 0) {
         return res.status(400).json({
          statusCode: 403,
          message: "Body request can not empty.",
        });
      }
      Products.updateUsersById(UsersId, req.body).then((data) => {
        if (data) {
          res.status(200).json({
            statusCode: 200,
            message: "Updated User successfuly!",
          });
        } else {
          res.status(200).json({
            statusCode: 404,
            message: "User does not exist in the database",
          });
        }
      });
    } catch (error) {
      res.status(400).json({
        message: "Bad request",
      });
    }
  };
  
  module.exports = {
    createUsers,
    getAllUser,
    getUserById,
    deleteUsersById,
    updateUsersById,
  };
  