import {Request, response, Response, Router} from "express";
import { addBook, eliminarAllById, getAll, getAllPorId, updateBook } from "./controller/gl.controller";
import { schemaMiddleware } from "../../middlewares/schema.middleware";
import { crateGlShema } from "./schema/gl.schema";
const glRouter =Router();

glRouter.get( "/",async(req: Request, res: Response)=>{
    
    try {
        const todos = await getAll();
        res.status(200).send({
            msg: "READ WITH SUCCESS",
            data:todos
        });
    } catch (error) {
        const err = error as Error;
        const errorMsg =err?.message;
        res.send(400).send({
            msg: errorMsg || "Error in database"
        });
    }
});

glRouter.get( "/:id",async(req: Request, res: Response)=>{
    
    try {
        const id = req.params.id;
        const todos = await getAllPorId(id);
        res.status(200).send({
            msg: "READ WITH SUCCESS",
            data:todos
        });
    } catch (error) {
        const err = error as Error;
        const errorMsg =err?.message;
        res.send(400).send({
            msg: errorMsg || "Error in database"
        });
    }
});

glRouter.post("/", schemaMiddleware(crateGlShema),async(req: Request, res: Response)=>{

    try {
        console.log("Enter to route");
        const body = req.body;
        const Response =await addBook(body);
        res.status(201).send({
            msg:"CREATED WITH SUCCESS",
            data: response
        });
    } catch (error) {
        const err = error as Error;
        const errorMsg =err?.message;
        res.send(400).send({
            msg: errorMsg || "Error in database"
        });
    }
});

glRouter.patch("/:id",schemaMiddleware(crateGlShema), async(req: Request, res: Response)=>{

    try {
        const body = req.body;
        const id =req.params.id;
        const response = await updateBook(id,body);
        res.status(200).send({
            msg:"UPDATE WITH SUCCESS",
            data: response
        });
    } catch (error) {
        const err = error as Error;
        const errorMsg =err?.message;
        res.send(400).send({
            msg: errorMsg || "Error in database"
        });
    }
});

glRouter.delete( "/:id",async(req: Request, res: Response)=>{
    
    try {
        const id = req.params.id;
        const todos = await  eliminarAllById(id);
        res.status(200).send({
            msg: "DELETE WITH SUCCESS",
            data:todos
        });
    } catch (error) {
        const err = error as Error;
        const errorMsg =err?.message;
        res.send(400).send({
            msg: errorMsg || "Error in database"
        });
    }
});

export {glRouter};