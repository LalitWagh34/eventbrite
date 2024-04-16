import { z } from "zod"

export const EventformSchema = z.object({
    title:z.string().min(5 ,'Title Must have atleast 5 characters'),
    description:z.string().min(5,'Description Must have atleast 5 characters'),
    location:z.string().min(5,'Location Must have atleast 5 characters'),
    imageUrl:z.string(),
    startDateTime:z.date(),
    endDateTime:z.date(),
    CategoryId:z.string(),
    price:z.string(),
    isFree:z.boolean(),
    url:z.string().url()
})
