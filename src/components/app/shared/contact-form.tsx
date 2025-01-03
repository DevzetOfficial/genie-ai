"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/app/shared/frontend-button";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { useModal } from "@/context/modal-context";

const FormSchema = z.object({
  name: z
    .string({
      required_error: "Please enter your name",
    })
    .min(1, {
      message: "Name must be at least 2 characters.",
    }),
  email: z
    .string()
    .email({
      message: "Please enter your email",
    })
    .min(1, {
      message: "Email is required",
    }),
  team: z
    .string({
      required_error: "Please select an team.",
    })
    .min(1, {
      message: "Please select a team",
    }),
  worker_type: z
    .string({
      required_error: "Please select an worker type.",
    })
    .min(1, {
      message: "Please select a worker type",
    }),
  message: z.string().optional(),
});

export default function ContactForm({ className }: { className?: string }) {
  const { toast } = useToast();
  const { isOpen, closeModal } = useModal();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      team: "",
      worker_type: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      await fetch("https://genie-ai-server.vercel.app/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log("Something is error", error);
      toast({
        title: "Something is error",
      });
    } finally {
      toast({
        title: "Your message submitted",
      });
      form.reset();
      if (isOpen) {
        closeModal();
      }
    }
  }
  return (
    <div
      className={cn(
        "space-y-14 w-full max-w-2xl p-6 md:p-20 mx-auto",
        className
      )}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="team"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How large is your team? *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="md:text-lg">
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="0-5">0-5</SelectItem>
                    <SelectItem value="5-50">5-50</SelectItem>
                    <SelectItem value="50-200">50-200</SelectItem>
                    <SelectItem value="200-500">200-500</SelectItem>
                    <SelectItem value="500+">500+</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="worker_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Which worker are you interested in? *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="md:text-lg">
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="AI SDR">AI SDR</SelectItem>
                    <SelectItem value="AI Phone Representative">
                      AI Phone Representative
                    </SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your message</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Type your message here."
                    className="min-h-32"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={form.formState.isSubmitting}
            size={"md"}
            type="submit"
            variant={"default"}
          >
            {form.formState.isSubmitting ? "Submitting" : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
