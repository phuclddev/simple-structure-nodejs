import {User} from '../db/models';

const getAllUsers = async () => {
    let users = await User.findAll();
    return users
  }

const getUserByID = async (id) => {
    let users = await User.findAll({
        where: {
          id: id
        }
      });;
      return users 
  }

const addUser = async (firstname, lastname, email) => {
    const newUser = await User.create({ firstName: firstname, lastName: lastname, email: email });
    return newUser
}

const updateUserByID = async (id, firstname, lastname ) => {
    const updateUser = await User.update({ firstName: firstname, lastName: lastname }, {
        where: {
          id: id
        }
      });
      return updateUser
}

export { getAllUsers, getUserByID, addUser, updateUserByID }