import  express,{ Request, Response } from "express";
import { glRouter } from "./modules/gestionlibro/gestionlibro.router";
import { Parameters } from "./utils/constants";
import { glDatabase } from "./db_gl/mongo";


const appGL = express();
appGL.use(express.json());
appGL.use("/gestionlibro",glRouter);



appGL.get("/",(req:Request, res:Response)=>{
    res.status(200).send({
        msg: "H W"
    });
});

const url_glbd =`mongodb://${Parameters.DATABASE_HOST}:${Parameters.DATABASE_PORT}/${Parameters.DATABASE_NAME}`;

appGL.listen(8080, async ()=>{
    await glDatabase (url_glbd);
    console.log("server running at port 8080");
})


