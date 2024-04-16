import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import  { category } from "@/lib/Database/models/Categorymodels"
import { startTransition, useEffect, useState } from "react"
import { Input } from "../ui/input"
import { createCategory, getAllCategory } from "@/lib/actions/categoryactions"

type DropDownProps ={
    value?:string,
    onchangeHandler?:()=> void
}

const Dropdown = ({value , onchangeHandler}:DropDownProps) => {
  const [categories ,setCategories] = useState<category[]>([])
  const [newCategories , setNewCategories] = useState('');
  
  const handleAddCategory =()=>{
    createCategory({
      categoryName:newCategories.trim()
    })
    .then((category)=>{
      setCategories((prevState) =>[...prevState , category])
    })
  }

  useEffect(()=>{
    const getCategories = async () =>{
      const categoryList = await getAllCategory();
      categoryList && setCategories(categoryList as category[])
    }
  } ,[])

  return (
    <Select onValueChange={onchangeHandler} defaultValue={value}>
    <SelectTrigger className="select-field">
      <SelectValue placeholder="Category" />
    </SelectTrigger>
    <SelectContent>
        {categories.length > 0 && categories.map((category)=>(
            <SelectItem key={category._id} value={category._id}
            className="select-item p-regular-14">
                {category.name}
            </SelectItem>
        ))}
        <AlertDialog>
          <AlertDialogTrigger className="p-medium-14 flex w-full rounded-sm py-3
            pl-8 text-primary-500 hover:bg-primary-50 focus:text-primary-500">Add New Categories</AlertDialogTrigger>
          <AlertDialogContent  className="bg-white">
            <AlertDialogHeader>
              <AlertDialogTitle>New Category</AlertDialogTitle>
              <AlertDialogDescription>
                  <Input type={"text"} placeholder="category Name"
                    className="input-field mt-3" onChange={(e) =>setNewCategories(e.target.value)}/>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() =>startTransition(handleAddCategory)}>Add</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

    </SelectContent>
  </Select>
  
  )
}

export default Dropdown