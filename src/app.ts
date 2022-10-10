import express from 'express';
import projectsRoutes from './routes/projects.routes';

const app = express();

//removedMiddlewares

app.use(express.json());

app.use(projectsRoutes);

export default app;