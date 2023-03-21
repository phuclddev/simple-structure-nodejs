import express from 'express';
import {users} from './routes/users';

const app = express();
const port = 3000;
// Middleware to parse JSON data
app.use(express.json());

//urlpatterns
app.use('/api',  users);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});