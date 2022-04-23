import { Request, Response, Router } from 'express';
import { usersController } from '../controllers';

const router = Router();

/**
 * Get all users
 */
router.get('/', async (req: Request, res: Response) => {
  usersController
    .getAllUsers()
    .then((payload) => {
      res.json(payload);
    })
    .catch((error) => console.log(error));
});

export const usersRouter = router;
