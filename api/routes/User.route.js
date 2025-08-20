import express from 'express';
import { getUser } from '../controllers/User.controller';

const UserRoute = express.Router()

UserRoute.get('/get-user/:userId', getUser);

export default UserRoute;