import express from 'express';
import {getAllUsers, getUserByID, addUser, updateUserByID } from '../services/user_manager'

const users = express.Router();

const getAll = (req, res) => {
    getAllUsers().then(result => res.json(result));
}

const getDetail = (req, res) => {
    getUserByID(parseInt(req.params.id)).then(result => {
      if (!result) {
        return res.status(404).send('Not found');
      }
      res.json(result);
    });
  }

const add = (req, res) => {
    let firstname = req.body.firstname;
    let lastName = req.body.lastName;
    let email =req.body.email;
    addUser(firstname, lastName, email).then(result => {res.json(result);});

}

users.get('/', getAll);
users.get('/:id', getDetail);
users.post('/', add);
// router.put('/:id', put);
// router.delete('/:id', deleteuser);

export { users }