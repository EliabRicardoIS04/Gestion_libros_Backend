import { IBook, IBookUpdate } from "../interface/gl.interface";
import { todoModelo } from "../models/gl.model";

export const addBook = async (book : IBook) => {

    try {
        const nBook = new todoModelo(book);
        return await nBook.save();
    } catch (error) {
        throw new Error("could not save in database");
    }
};

export const updateBook = async (id: string, book: IBookUpdate)=>{
    try {
        return await todoModelo.findByIdAndUpdate(id, book);
    } catch (error) {
        throw new Error("could not update in base de datos")
    }
};

export const getAll = async ()=>{
    try {
        return await todoModelo.find();
    } catch (error) {
        throw new Error("could not update in base de datos")
    }
};

export const getAllPorId = async (id:string)=>{
    try {
        return await todoModelo.findById(id);
    } catch (error) {
        throw new Error("could not update in base de datos")
    }
};

export const eliminarAllById= async (id:string)=>{
    try {
        return await todoModelo.findByIdAndDelete(id);
    } catch (error) {
        throw new Error("could not update in base de datos")
    }
};