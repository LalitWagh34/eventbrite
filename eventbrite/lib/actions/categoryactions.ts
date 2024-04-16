"use server"

import { CreateCategoryParams } from "@/types"
import { handleError } from "../utils"
import { connectToDataBase } from "../Database"
import Category from "../Database/models/Categorymodels"

export const createCategory = async({categoryName} : CreateCategoryParams)=>{
    try{
        await connectToDataBase();

        const newCategory = await Category.create({ name : categoryName });

        return JSON.parse(JSON.stringify(newCategory));
    }catch(error){
        handleError(error)
    }
}

export const getAllCategory = async()=>{
    try{
        await connectToDataBase();

        const categories = await Category.find();

        return JSON.parse(JSON.stringify(categories));
    }catch(error){
        handleError(error)
    }
}