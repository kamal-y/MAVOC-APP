"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import React from "react";

const Newsletter: React.FC = () => {
  const formSchema = z.object({
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Invalid email address" }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      receiveUpdates: false,
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (data: unknown) => {
    // console.log(data);
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-mainSmall text-black">
                Newsletter
              </FormLabel>
              <FormControl>
                <Input
                  className="border px-4 py-2"
                  placeholder="Email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          variant={"customButton"}
          className="w-full text-white"
          type="submit"
        >
          SUBSCRIBE
        </Button>
      </form>

      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-sans leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          You agree to receive newsletters and marketing emails from MAVOK
        </label>
      </div>
    </Form>
  );
};

export default Newsletter;
