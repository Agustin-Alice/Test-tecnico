
import type { Request, Response } from 'express';


 class TransactionsController {
    async deposit(req: Request, res: Response) {
    const { accountId, amount } = req.body;
    try {
      const result = 'wip';
      // TODO:await deposit(accountId, amount);
      res.json(result);
    } catch (e: any) {
      res.status(400).json({ error: e.message });
    }
  }

  async withdraw(req: Request, res: Response) {
    const { accountId, amount } = req.body;
    try {
      const result = 'wip';
      //TODO: await withdraw(accountId, amount);
      res.json(result);
    } catch (e: any) {
      res.status(400).json({ error: e.message });
    }
  }
    
    
}
    
    
export default TransactionsController;