import { Router } from 'express';
import  TransactionsController  from '../controllers/transactions.controller.ts';

const router = Router();
const controller = new TransactionsController();

router.post('/deposit', (req, res) => {
    controller.deposit(req, res);
});

router.post('/withdraw', (req, res) => {
    controller.withdraw(req, res);
});

export default router;