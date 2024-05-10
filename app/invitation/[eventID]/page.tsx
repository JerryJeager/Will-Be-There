"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import CongratulationsMessage from "./CongratulationsMessage";

export default function Page({ params }: { params: { eventID: string } }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const extras = searchParams.get("extras");
  const [showCongratulations, setShowCongratulations] = useState(false);

  interface FormData {
    first_name: string;
    last_name: string;
    email: string;
    status: "attending" | "rejected";
    plus_ones?: { name: string }[];
    event_id: string;
    message: string;
    extras: "yes" | "no"
  }
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    status: "rejected",
    plus_ones: [],
    event_id: params.eventID,
    message: "",
    extras: "no"
  });
  const [eventData, setEventData] = useState<any>({});

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(
          `https://will-be-there.onrender.com/api/v1/event/${params.eventID}`
        );
        setEventData(response.data);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    fetchEventData();
  }, [params.eventID]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name.startsWith("plusOneName-")) {
      const index = parseInt(name.split("-")[1]);
      const newPlusOnes = [...formData.plus_ones];
      newPlusOnes[index] = { name: value };
      setFormData((prevState) => ({
        ...prevState,
        plus_ones: newPlusOnes,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleAddPlusOne = () => {
    if (Number(extras) > 0 && formData.plus_ones.length < Number(extras)) {
      setFormData((prevState) => ({
        ...prevState,
        plus_ones: [...prevState.plus_ones, { name: "" }],
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        plus_ones: [],
      }));
    }
  };
  const handleRemovePlusOne = (index: number) => {
    const newPlusOnes = [...formData.plus_ones];
    newPlusOnes.splice(index, 1);
    setFormData((prevState) => ({
      ...prevState,
      plus_ones: newPlusOnes,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (formData.status === "attending") {
      if (formData.plus_ones.length === 0) {
        setFormData((prevState) => ({
          ...prevState,
          plus_ones: [], // Ensure plus_ones is an empty array
        }));
      }
    }

    try {
      const response = await axios.post(
        `https://will-be-there.onrender.com/api/v1/invitation/guest?${params.eventID}`,
        formData
      );

      console.log("Form data submitted successfully");
    } catch (error) {
      console.error("Error submitting form data:", error);
      alert("Your email has already been added, check your mail.");
    } finally {
      if (formData.status === "attending") {
        setShowCongratulations(true);
      } else {
        router.push("/");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-5">
      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center mt-28 md:mt-32 ">
        <div className="mb-8">
          {eventData && (
            <div className="">
              <img
                src={eventData.image_url}
                alt={eventData.name}
                className="mb-2  md:max-w-[400px] rounded"
              />
              <h2 className="text-2xl text-center font-semibold text-gray-900 capitalize">
                {eventData.name}
              </h2>
              <p className="text-sm text-gray-600 text-center">
                {eventData?.description}
              </p>
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">RSVP Form</h2>
          <p className="text-sm text-gray-600">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div className="grid grid-cols-1 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-900"
              >
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                id="firstName"
                value={formData.first_name}
                onChange={handleChange}
                required
                autoComplete="given-name"
                className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none sm:text-sm"
                placeholder="Enter your first name"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-900"
              >
                Last Name
              </label>
              <input
                id="lastName"
                name="last_name"
                type="text"
                value={formData.last_name}
                onChange={handleChange}
                required
                autoComplete="family-name"
                className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none sm:text-sm"
                placeholder="Enter your last name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none sm:text-sm"
                placeholder="Enter your email"
              />
            </div>

            <fieldset>
              <legend className="text-sm font-semibold text-gray-900">
                Are you attending the event?
              </legend>
              <div className="flex items-center gap-4">
                <label htmlFor="yesToAttend" className="flex items-center">
                  <input
                    id="yesToAttend"
                    name="status"
                    value="attending"
                    onChange={handleChange}
                    checked={formData.status === "attending"}
                    // required
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="ml-2 text-sm text-gray-900">Yes</span>
                </label>
                <label htmlFor="noToAttend" className="flex items-center">
                  <input
                    id="noToAttend"
                    name="status"
                    type="radio"
                    value="rejected"
                    onChange={handleChange}
                    checked={formData.status === "rejected"}
                    // required
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="ml-2 text-sm text-gray-900">No</span>
                </label>
              </div>
            </fieldset>

            {extras &&
              Number(extras) !== 0 &&
              formData.status === "attending" && (
                <fieldset>
                  <legend className="text-sm font-semibold text-gray-900">
                    Are you bringing additional people ({extras} only)?
                  </legend>
                  <div className="flex items-center gap-4">
                    <label htmlFor="yesExtras" className="flex items-center">
                      <input
                        id="yesExtras"
                        name="extras"
                        type="radio"
                        value="yes"
                        // checked={formData.status === "attending"}
                        onChange={handleChange}
                        required
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-sm text-gray-900">Yes</span>
                    </label>
                    <label htmlFor="noExtras" className="flex items-center">
                      <input
                        id="noExtras"
                        name="extras"
                        type="radio"
                        value="rejected"
                        // checked={formData.status === "attending"}
                        onChange={handleChange}
                        required
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-sm text-gray-900">No</span>
                    </label>
                  </div>
                </fieldset>
              )}

            {extras &&
              Number(extras) !== 0 &&
              formData.status === "attending" && formData.extras === "yes" && (
                <div>
                  <h2 className="text-base font-semibold text-gray-900">
                    Additional Guest Details
                  </h2>
                  {formData.plus_ones.map((plusOne, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <input
                        type="text"
                        name={`plusOneName-${index}`}
                        value={plusOne.name}
                        onChange={handleChange}
                        className="block w-full px-4 py-2 mb-3 mt-1 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none sm:text-sm"
                        placeholder={`Plus One ${index + 1} Name`}
                      />
                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => handleRemovePlusOne(index)}
                          className="text-sm text-red-600 font-medium focus:outline-none"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                  {formData.plus_ones.length < Number(extras) && (
                    <div className="mt-4">
                      <button
                        type="button"
                        onClick={handleAddPlusOne}
                        className="bg-indigo-600 text-white px-4 py-2 text-[16px] rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                      >
                        Add Another guest
                      </button>
                    </div>
                  )}
                </div>
              )}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-900"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none sm:text-sm"
                rows={4}
                placeholder="Enter your message"
              />
            </div>
          </div>

          <div className="flex justify-end">
            {/* <button
              type="button"
              className="text-sm font-semibold text-gray-900 mr-4"
            >
              Cancel
            </button> */}
            <button
              type="submit"
              className="bg-[#0D35FB] text-white px-4 py-2 rounded-md hover:bg-[#0D35FB] focus:outline-none focus:ring-2 focus:ring-[#0D35FB]focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </form>
        {showCongratulations && (
          <CongratulationsMessage
            onClose={() => {
              setShowCongratulations(false);
              router.push(`/`);
            }}
          />
        )}
      </div>
    </div>
  );
}
