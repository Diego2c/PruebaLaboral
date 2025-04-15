import express from 'express';
import router from './routes/prestamo.routes.js';
import cors from 'cors';  

const app = express();
app.use(cors({
    origin: 'http://localhost:4200', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'] 
  }));
  
app.use(express.json());

app.use('/api', router);
 
export default app;