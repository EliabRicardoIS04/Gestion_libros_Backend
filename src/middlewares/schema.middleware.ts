import {  Request , NextFunction,Response } from "express";
import Joi from "joi";

export const schemaMiddleware =(schema: Joi.Schema)=>{
    return (req: Request, res: Response, next: NextFunction)=>{
        try {
            const body = req.body;
            const vali_dated = schema.validate(body);
            if(vali_dated.error){
                res.status(400).send({
                    msg:"ALL THE PARAMETERS MUST BE SET"
                });
            }else{
                next();
            }
        } catch (error) {
            res.status(500).send({
                msg:"Internal Server Error"
            });
        }
    };

};

