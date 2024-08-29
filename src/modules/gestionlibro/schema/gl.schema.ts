import Joi from "joi";

const title = Joi.string();
const author = Joi.string();
const publicationDate = Joi.string();
const isbn = Joi.string();
const genre = Joi.string();

export const crateGlShema = Joi.object({
title : title.required(),
author : author.required(),
publicationDate : publicationDate.required(),
isbn : isbn.required(),
genre : genre.required()

});

export const updateGlShema = Joi.object({
    title : title,
    author : author,
    publicationDate : publicationDate,
    isbn : isbn,
    genre : genre
    
    });

