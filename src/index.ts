import express, { NextFunction, json, Request, Response } from 'express';
import cors from 'cors';
import devToolsRouter from './routes/devtools.route';
import aboutRouter from './routes/about.route';
import projectsRouter from './routes/projects.route';

const app = express();
app.use(json({ limit: "10kb" }));

app.use(
    cors({
        credentials: true,
        origin: ["http://localhost:3000","http://justinportfoliofront.s3-website.eu-west-3.amazonaws.com"],
    })
)

app.use('/projects', projectsRouter);
app.use('/about', aboutRouter);
// app.use('/fr',frenchRouter);
// app.use('/en',englishRouter);
app.use('/devtools', devToolsRouter);
app.get('*', (req, res) => {
    return res.status(404).json({ status: "failed", reason: "not found" })
});

const port = 8000;
app.listen(port, () => {
    console.log('App running')
})