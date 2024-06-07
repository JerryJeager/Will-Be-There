"use client";
import Link from "next/link";
import { stepThreeSchema } from "../../../../src/lib/yup";
import { StepThreeData } from "../../../../src/store/eventTypes";
import useFormStore from "../../../../src/store/useFormStore";
import { useRouter, useSearchParams } from "next/navigation";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import ShareLink from "../../../../src/components/dashboard/ShareLink";

export default function StepThree() {
  const [generatedUrl, setGeneratedUrl] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 3000);
  };
  const router = useRouter();
  const searchParams = useSearchParams();

  const eventID = searchParams.get("eventId");

  const { stepThree, setData } = useFormStore();

  return (
    <section className="container mx-auto leading-tight py-10">
      <h1 className="text-center font-bold  text-[#1B1B21] text-3xl md:text-[40px] py-5">
        Generate your event url
      </h1>

      <p className="text-center">
        <Link
          href="/dashboard"
          className=" text-[#303036] font-medium text-xl leading-6 hover:underline"
        >
          Not sure yet? Skip for now
        </Link>
      </p>
      <Formik
        initialValues={stepThree}
        validationSchema={stepThreeSchema}
        handle
        onSubmit={(data: StepThreeData) => {
          console.log(data);
          setData({ step: 3, data });
          // console.log({
          //     id: eventID,
          //     ...stepOne,
          //     ...stepTwo,
          //     ...stepThree
          // });

          // router.push('/dashboard');
        }}
      >
        {({ errors, touched, handleChange, handleBlur }) => (
          <Form className="pt-10 md:pt-16 space-y-6">
            <label
              htmlFor="extras"
              className="text-[#46464F] font-semibold md:text-[28px] text-center flex px-2"
            >
              How many plus ones can your guests bring?
            </label>
            <Field
              type="number"
              id="extras"
              className={`w-full border-[1.5px] border-[#0D35FB] text-base bg-white rounded-lg p-4 placeholder:text-[#C7C5D0] focus:border-[#0D154B] focus-within:border-[#0D154B] focus-visible:border-[#0D154B] focus-visible:outline-none 
                           
                                ${
                                  errors.extras && touched.extras
                                    ? "border-red-500 text-red-500 placeholder:text-red-500 focus:border-red-500 focus-within:border-red-500 focus-visible:border-red-500"
                                    : touched.extras
                                    ? "border-[#0D35FB]   focus:border-[#0D35FB] focus-within:border-[#0D35FB] focus-visible:border-[#0D35FB]"
                                    : ""
                                }`}
              placeholder="Enter a number"
              name="extras"
              onChange={(e) => {
                handleChange(e);
                const url = `http://will-be-there.vercel.app/invitation/${eventID}?extras=${e.target.value}`;
                setGeneratedUrl(url);
              }}
              onBlur={handleBlur}
            />

            <ErrorMessage
              name="extras"
              component="span"
              className="text-red-500 font-medium min-[992px]:text-base text-sm lowercase pl-2"
            />

            {generatedUrl && (
              <>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-y-4 md:gap-y-0 md:gap-x-6">
                <div className="text-center md:text-left">
                  Copy this link and send to your guests:
                  <br />
                  <span className="underline">{generatedUrl}</span>
                </div>
                <div className="text-center md:text-right">
                  <button
                    type="button"
                    className="bg-[#0D35FB] text-white font-medium text-base px-3 py-1 rounded-lg"
                    onClick={() => copyToClipboard(generatedUrl)}
                  >
                    Copy
                  </button>
                  <br />
                  {copySuccess && (
                    <span className="text-green-600 text-center text-base">
                      Copied!
                    </span>
                  )}
                </div>
              </div>
              <ShareLink url={generatedUrl}/>
              </>
            )}

            <div className="grid">
              <Link
                href="/dashboard"
                className="text-center p-[18px] rounded-[10px] bg-[#0D35FB] text-white font-semibold text-base"
              >
                Continue
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
}
