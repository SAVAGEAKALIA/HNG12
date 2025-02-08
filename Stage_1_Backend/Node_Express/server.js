// Server js for rendering
import express from "express";
import routes from "./routes/index.js";
import process from "process";

const app = express();
const port = process.env.PORT || 3000;

//Routes
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', routes);

// Start server - modified to listen on all Ports
// Remove app.listen for serverless deployment
// If you want to run locally, you can conditionally start the server:
if (process.env.NODE_ENV !== 'production') {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
}

export default app;