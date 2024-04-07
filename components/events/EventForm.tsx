"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { eventFormSchema } from "@/lib/validator";
import { z } from "zod";
import { eventDefaultValues } from "@/constants";
import Dropdown from "../shared/Dropdown";
import { Textarea } from "@/components/ui/textarea";
import { FileUploader } from "../shared/FileUploader";
import { useState } from "react";
import { IoLocation } from "react-icons/io5";
import { IoCalendar } from "react-icons/io5";
import { AiFillDollarCircle } from "react-icons/ai";
import { RiLink } from "react-icons/ri";
import DatePicker from "react-datepicker";
import { useUploadThing } from "@/lib/uploadthing";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";
import { createEvent, updateEvent } from "@/lib/actions/event.actions";
import { IEvent } from "@/lib/database/models/event.model";

type EventFormProps = {
  userId: string;
  type: "Create" | "Update";
  event?: IEvent;
  eventId?: string;
};

const EventForm = ({ userId, type, event, eventId }: EventFormProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const initialValues =
    event && type === "Update"
      ? {
          // @ts-ignore
          ...event,
          // @ts-ignore
          startDateTime: new Date(event?.startDateTime),
          // @ts-ignore
          endDateTime: new Date(event?.endDateTime),
        }
      : eventDefaultValues;
  const router = useRouter();

  const { startUpload } = useUploadThing("imageUploader");

  const form = useForm<z.infer<typeof eventFormSchema>>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: initialValues,
  });

  async function onSubmit(values: z.infer<typeof eventFormSchema>) {
    let uploadedImageUrl = values.imageUrl;
    if (files.length > 0) {
      const uploadedImages = await startUpload(files);

      if (!uploadedImages) {
        return;
      }

      uploadedImageUrl = uploadedImages[0].url;
    }

    if (type === "Create") {
      try {
        const newEvent = await createEvent({
          event: {
            ...values,

            imageUrl: uploadedImageUrl,
          },
          userId,
          path: "/profile",
        });
        if (newEvent) {
          form.reset();
          router.push(`/events/${newEvent._id}`);
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (type === "Update") {
      try {
        if (!eventId) {
          router.back();
          return;
        }

        const updatedEvent = await updateEvent({
          userId,
          event: {
            ...values,
            imageUrl: uploadedImageUrl,
            _id: eventId,
          },

          path: `/events/${eventId}`,
        });
        if (updatedEvent) {
          form.reset();
          router.push(`/events/${updatedEvent._id}`);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5 pt-[2.5rem]"
      >
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Event Title"
                    {...field}
                    className="bg-[#28282d] border-[1px] border-white/20 focus:border-white/60 placeholder:text-white/70 caret-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Dropdown
                    onChangeHandler={field.onChange}
                    value={field.value}
                  />
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
                <FormControl className="h-[15rem]">
                  <Textarea
                    placeholder="Description"
                    {...field}
                    className="bg-[#28282d] border-[1px] border-white/20 focus:border-white/60 placeholder:text-white/70 caret-white"
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
                <FormControl className="h-[15rem]">
                  <FileUploader
                    onFieldChange={field.onChange}
                    imageUrl={field.value}
                    setFiles={setFiles}
                  />
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
                  <div className="flex justify-center items-center gap-[0.5rem]">
                    <IoLocation size={30} />
                    <Input
                      placeholder="Event Location or Online"
                      {...field}
                      className="bg-[#28282d] border-[1px] border-white/20 focus:border-white/60 placeholder:text-white/70 caret-white"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-5 md:flex-row text-[0.9rem]">
          <FormField
            control={form.control}
            name="startDateTime"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex items-center gap-[0.7rem]">
                    <IoCalendar size={25} />
                    <div className="flex justify-center items-center gap-[0.5rem] bg-[#28282d] border-[1px] border-white/20 rounded-sm py-[0.4rem] w-full">
                      <p>Start Date:</p>
                      <DatePicker
                        className="bg-[#28282d] outline-none underline cursor-pointer"
                        selected={field.value}
                        onChange={(date: Date) => field.onChange(date)}
                        showTimeSelect
                        timeInputLabel="Time:"
                        dateFormat="MM/dd/yyy h:mm aa"
                        wrapperClassName=""
                      />
                    </div>
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
                  <div className="flex items-center gap-[0.7rem]">
                    <IoCalendar size={25} />
                    <div className="flex justify-center items-center gap-[0.5rem] bg-[#28282d] border-[1px] border-white/20 rounded-sm py-[0.4rem] w-full">
                      <p>End Date:</p>
                      <DatePicker
                        className="bg-[#28282d] outline-none underline cursor-pointer"
                        selected={field.value}
                        onChange={(date: Date) => field.onChange(date)}
                        showTimeSelect
                        timeInputLabel="Time:"
                        dateFormat="MM/dd/yyy h:mm aa"
                        wrapperClassName=""
                      />
                    </div>
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
                  <div className="flex justify-center items-center gap-[0.5rem] py-[0.4rem]">
                    <AiFillDollarCircle size={40} />
                    <Input
                      type="number"
                      placeholder="Price"
                      {...field}
                      className="bg-[#28282d] border-[1px] border-white/20 focus:border-white/60 placeholder:text-white/70 caret-white"
                    />
                    <FormField
                      control={form.control}
                      name="isFree"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="flex items-center">
                              <label
                                htmlFor="isFree"
                                className=" whitespace-nowrap pr-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Free Ticket
                              </label>
                              <Checkbox
                                id="isFree"
                                onCheckedChange={field.onChange}
                                checked={field.value}
                                className="mr-2 h-5 w-5 border-2 border-[#5a3ee5]"
                              />
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
                  <div className="flex justify-center items-center gap-[0.5rem] py-[0.4rem]">
                    <RiLink size={30} />
                    <Input
                      placeholder="Url"
                      {...field}
                      className="bg-[#28282d] border-[1px] border-white/20 focus:border-white/60 placeholder:text-white/70 caret-white"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          className="bg-[#5a3ee5] hover:bg-[#4630b0] duration-300"
          type="submit"
          size="lg"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Submitting..." : `${type} Event`}
        </Button>
      </form>
    </Form>
  );
};

export default EventForm;
