import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const sendEmail = (values) => {
    emailjs
      .sendForm('service_32l8lf6', 'template_l70nugu', form.current, {
        publicKey: 'E9ImXh91swVpNclmR',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const formValidationSchema = Yup.object().shape({
    from_name: Yup.string().required("Full name is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  return (
    <div className="p-5 h-[90vh] m-auto max-w-lg mt-32">
      <Formik
        initialValues={{
          from_name: "",
          subject: "",
          message: "",
        }}
        validationSchema={formValidationSchema}
        onSubmit={(values, { resetForm }) => {
          sendEmail(values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-10 ">
            <div>
              <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">Contact Me</h1>
              <p className="mt-3">
                For more information or if you have a project for me to contribute, please fill
                this form{" "}
              </p>
            </div>
            <div className="mt-3">
              <div className="flex flex-col gap-3">
                <label htmlFor="fullname" className="text-xl">
                  Fullname
                </label>
                <Field
                  name="from_name"
                  placeholder="Fullname"
                  id="fullname"
                  type="text"
                  className={`w-full px-3 py-2 border rounded-md ${errors.from_name && touched.from_name && "border-red-500"}`}
                />
                <ErrorMessage
                  name="from_name"
                  component="div"
                  className="text-red-500 text-sm"
                />
                <label htmlFor="subject" className="text-xl">
                  Subject
                </label>
                <Field
                  name="subject"
                  placeholder="Subject"
                  id="subject"
                  type="text"
                  className={`w-full px-3 py-2 border rounded-md ${errors.subject && touched.subject && "border-red-500"}`}
                />
                <ErrorMessage
                  name="subject"
                  component="div"
                  className="text-red-500 text-sm"
                />
                <label htmlFor="message" className="text-xl">
                  Message
                </label>
                <Field
                  name="message"
                  id="message"
                  as="textarea"
                  rows="4"
                  className={`w-full px-3 py-2 border rounded-md ${errors.message && touched.message && "border-red-500"}`}
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-sm"
                />
                <button
                  type="submit"
                  className="bg-[#0DB75F] text-white py-4 rounded-lg font-bold"
                >
                  Submit
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
