import { NextFunction, Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { usersController } from '../controllers';
import { sendResponse } from '../utils';

const router = Router();

/**
 * Get all users
 */
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  usersController
    .getAllUsers()
    .then((payload) => sendResponse(res, StatusCodes.OK, payload))
    .catch(next);
});

/**
 * Create one user
 */
router.put('/', async (req: Request, res: Response, next: NextFunction) => {
  usersController.create(req.body).then(res.json).catch(next);
});

export const usersRouter = router;
