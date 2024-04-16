"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "../ui/button"
import * as z from "zod"
import { EventformSchema } from "@/lib/validator"
import { eventDefaultValues } from "@/constants"
import Dropdown from "./Dropdown"
import { FileUploader } from "./FileUploader"
import {useState} from  "react"
import Image from "next/image"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

type EventFormProps ={
    userId:string,
    type:"Create" | "Update" 
}

const EventForm = ({userId , type}:EventFormProps) => {
      const InitalValues = eventDefaultValues;
      const [files , setFiles] = useState<File[]>([])
      // const [startDate, setStartDate] = useState(new Date());

        const form = useForm<z.infer<typeof EventformSchema>>({
          resolver: zodResolver(EventformSchema),
          defaultValues:InitalValues
        })
       
  
        function onSubmit(values: z.infer<typeof EventformSchema>) {        
          console.log(values)
        }
      
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="flex flex-col gap-5 md:flex-row">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="w-full">
              {/* <FormLabel>Event-Title</FormLabel> */}
              <FormControl>
                <Input placeholder="Event-Title" {...field} 
                  className="input-field"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="CategoryId"
          render={({ field }) => (
            <FormItem className="w-full">
              {/* <FormLabel>Event-Title</FormLabel> */}
              <FormControl>
                <Dropdown onchangeHandler={field.onChange} value={field.value}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="flex flex-col gap-5 md:flex-row">
      <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="w-full">
              {/* <FormLabel>Event-Title</FormLabel> */}
              <FormControl className="h-72">
                <Textarea placeholder="Description" {...field} 
                  className="textarea rounded-2xl "
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl className="h-72">
                <FileUploader onFieldChange={field.onChange}
                  imageUrl ={field.value}
                  setFiles={setFiles}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="flex flex-col gap-5 md:flex-row">
        <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                    <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                      <Image
                       src="/assets/icons/location-grey.svg"
                       alt="Calendar"
                       width={24}
                       height={24}
                      />
                    
                      <Input placeholder="Event Location " {...field} 
                        className="input-field"
                      />
                    </div>                  
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
      </div>
      <div className="flex flex-col gap-5 md:flex-row">
        <FormField
            control={form.control}
            name="startDateTime"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                    <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                      <Image
                       src="/assets/icons/location-grey.svg"
                       alt="Calendar"
                       width={24}
                       height={24}
                       className="filter-grey"
                      />
                      <p className="ml-3 whitespace-nowrap text-gray-600">Start Date:</p>                  
                      <DatePicker
                      
                      selected={field.value} 
                      onChange={(date:Date) => field.onChange(date)} 
                      showTimeSelect
                      timeInputLabel="Time:"
                      dateFormat={"dd/MM/yyyy h:mm aa"}
                      wrapperClassName="datePicker"
                      />
                    </div>                  
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
 
        <FormField
            control={form.control}
            name="endDateTime"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                    <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                      <Image
                       src="/assets/icons/location-grey.svg"
                       alt="Calendar"
                       width={24}
                       height={24}
                       className="filter-gray"
                      />
                      <p className="ml-3 whitespace-nowrap text-gray-600">End Date:</p>                  
                      <DatePicker
                      
                      selected={field.value} 
                      onChange={(date:Date) => field.onChange(date)} 
                      showTimeSelect
                      timeInputLabel="Time:"
                      dateFormat={"dd/MM/yyyy h:mm aa"}
                      wrapperClassName="datePicker"
                      />
                    </div>                  
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
      </div>
      <div className="flex flex-col gap-5 md:flex-row">
      <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                    <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                      <Image
                       src="/assets/icons/location-grey.svg"
                       alt="Dollar"
                       width={24}
                       height={24}
                       className="filter-gray"
                      />
                    <Input type="number" placeholder="Price" {...field} 
                      className="p-regular-16 border-0 bg-grey-50 outline-offset-0 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0" 
                    />
                  <FormField
                    control={form.control}
                      name="isFree"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl>
                              <div className="flex items-center">
                                <label className="whitespace-nowrap pr-3 loading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="isFree"> Free Ticket</label>
                                <Checkbox id="isFree" checked={field.value}
                                onCheckedChange={field.onChange}
                                // checked={field.value}
                                className="mr-2 h-5 w-5 border-2 border-primary-500"/>
                                
                              </div>                  
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                    )}          
                  />
                  </div>
                  </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="url"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                            <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                              <Image
                              src="/assets/icons/location-grey.svg"  // chenge the image
                              alt="Calendar"
                              width={24}
                              height={24}
                              />
                            
                              <Input placeholder="url" {...field} 
                                className="input-field"
                              />
                            </div>             
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                
                          )}
                        />
                    </div>
     
      <Button type="submit"
        // type="submit"
        size="lg"
        disabled={form.formState.isSubmitting}
        className="button col-span-2 w-full"
      >
        {form.formState.isSubmitting ?(
          'Submitting ...'
        ):`${type} Event`} 
      </Button>
    </form>
  </Form>
  )
}

export default EventForm