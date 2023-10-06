import express, { NextFunction, json, Request, Response } from 'express';
import cors from 'cors';
import globalRouter from './routes/global.route';
import devToolsRouter from './routes/devtools.route';
import projectsRouter from './routes/projects.route';
import aboutMeRouter from './routes/about_me.route';

const app = express();
app.use(json({ limit: "10kb" }));

app.use(
    cors({
        credentials: true,
        origin: ["http://localhost:3000"],
    })
)

app.use('/global', globalRouter);
app.use('/devtools', devToolsRouter);
app.use('/projects', projectsRouter);
app.use('/about_me', aboutMeRouter);
app.get('*', (req, res) => {
    return res.status(404).json({ status: "failed", reason: "not found" })
});

const port = 8000;
app.listen(port, () => {
    console.log('App running')
})