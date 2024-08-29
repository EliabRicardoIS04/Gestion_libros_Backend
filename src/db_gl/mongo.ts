import {connect} from "mongoose";

const glDatabase = async (url :string) =>{
    try{
        await connect(url);
        console.log("conectado a la base de datos");
    }catch(error){
        console.error(error);
        process.exit(1);
    }
};

export{ glDatabase };