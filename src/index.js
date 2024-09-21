import express, { response } from "express"

import connectDataBase from "./database/db.js"

import routes from "./routes.js";




const app = express();

app.use(express.json());

app.use(routes)



connectDataBase()
    .then(() => {
        app.listen(3000, () => console.log("Server running and Database connected"))
    })
    .catch((err) => console.log(err))