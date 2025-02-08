// Server js for rendering
import express from "express";
import routes from "./routes/index";
import process from "process";

const app = express();
const port = process.env.PORT || 3000;

//Routes
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', routes);

// Start server - modified to listen on all Ports
app.listen(port, () => {
    console.log(`Server Started listening on ${port}`);
})