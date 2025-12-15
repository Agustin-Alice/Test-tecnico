import express from 'express';
import router from './api/routes/transactions.routes.ts';
const app = express();
const PORT = 3000;

app.use('/api',router);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
