"use client";
import { Button } from "@/components/ui/button";
import Section from "../section";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import FloatingShape from "../animated/floating-shapes";
import FloatingTriangle from "../animated/floating-traingle";
import { submitContactForm } from "@/app/actions";

// using these two cos by default, you can't return something from server actions
import { useFormStatus } from "react-dom";
import { useActionState } from "react";

const initialState = {
  message: "",
  success: false,
};

const Contact = () => {
  const [state, formAction] = useActionState(submitContactForm, initialState); // Updated to useActionState
  const { pending } = useFormStatus();

  return (
    <Section id="contact">
      <div className="max-w-2xl mx-auto relative md:px-12">
        <FloatingShape className="text-yellow-400 left-0 top-0" />
        <FloatingTriangle className="text-yellow-400 right-0 bottom-0" />
        <h3 className="text-3xl font-bold mb-8 text-center">Get In Touch</h3>
        <form action={formAction} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <Input id="name" name="name" required className="bg-gray-800 border-gray-700" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <Input id="email" name="email" type="email" className="bg-gray-800 border-gray-700" />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2">Subject</label>
            <Input id="subject" name="subject" className="bg-gray-800 border-gray-700" />
          </div>

          {/* HoneyPot field to filter spam */}
          <input type="text" name="faxNumber" className="absolute opacity-0 pointer-events-none" />

          <div>
            <label htmlFor="message" className="block mb-2">Message</label>
            <Textarea id="message" name="message" className="bg-gray-800 border-gray-700" rows={6} />
          </div>
          {state?.message && (
            <div className={`text-sm ${state.success ? 'text-green-500' : 'text-red-500'}`}>
              {state.message}
            </div>
          )}
          <Button
            type="submit"
            className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
          >
            {pending ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
