import express from 'express';
import cors from 'cors';
import router from './router.js';
import db from './models/index.model.js';

const port = 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

(async function () {
  try {
    db;
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port} 🚀`);
    });
  } catch (error) {
    console.error(error);
  }
})();
