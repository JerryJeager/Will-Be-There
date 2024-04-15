"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Page({ params }: { params: { eventID: string } }) {
  // const eventID = params.eventID;
  const searchParams = useSearchParams();
  const extras = searchParams.get("extras");

  interface FormData {
    name: string;
    email: string;
    isAttending: "yes" | "no" | null;
    hasExtras?: "yes" | "no" | null;
    guests?: string[];
  }
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    isAttending: null,
    hasExtras: null,
    guests: Array.from({ length: Number(extras) }).map(() => ""),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.startsWith("guestName-")) {
      const index = parseInt(name.split("-")[1]);
      const newGuests = [...formData.guests];
      newGuests[index] = value;
      setFormData((prevState) => ({
        ...prevState,
        guests: newGuests,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleAddGuest = () => {
    if (formData.guests.length < Number(extras)) {
      setFormData((prevState) => ({
        ...prevState,
        guests: [...prevState.guests, ""],
      }));
    }
  };

  const handleRemoveGuest = (index: number) => {
    const newGuests = [...formData.guests];
    newGuests.splice(index, 1);
    setFormData((prevState) => ({
      ...prevState,
      guests: newGuests,
    }));
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                RSVP Form
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <fieldset className="sm:col-span-4">
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    Are you attending the event?
                  </legend>

                  <div className="mt-6 gap-x-6 flex justify-between">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="yesToAttend"
                        name="isAttending"
                        value="yes"
                        checked={formData.isAttending === "yes"}
                        onChange={handleChange}
                        required
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="yesToAttend"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="noToAttend"
                        name="isAttending"
                        type="radio"
                        value="no"
                        checked={formData.isAttending === "no"}
                        onChange={handleChange}
                        required
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="noToAttend"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </fieldset>

                {(Number(extras) === 0 || !extras) && (
                  <div className="sm:col-span-4">
                    <p>The event organizer doesn't allow additional guests</p>
                  </div>
                )}

                {extras &&
                  Number(extras) !== 0 &&
                  formData.isAttending === "yes" && (
                    <fieldset className="sm:col-span-4">
                      <legend className="text-sm font-semibold leading-6 text-gray-900">
                        Are you bringing additional people?
                      </legend>

                      <div className="mt-6 gap-x-6 flex justify-between">
                        <div className="flex items-center gap-x-3">
                          <input
                            id="yesExtras"
                            name="hasExtras"
                            type="radio"
                            value="yes"
                            checked={formData.hasExtras === "yes"}
                            onChange={handleChange}
                            required
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="yesExtras"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                          <input
                            id="noExtras"
                            name="hasExtras"
                            type="radio"
                            value="no"
                            checked={formData.hasExtras === "no"}
                            onChange={handleChange}
                            required
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="noExtras"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  )}
              </div>
            </div>

            {extras &&
              Number(extras) !== 0 &&
              formData.isAttending === "yes" &&
              formData.hasExtras === "yes" && (
                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Additional Guest Details
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    The event organizer only allows {extras} additonal guests.
                    Include their details below
                  </p>

                  {formData.guests.map((guest, index) => (
                    <div
                      key={index}
                      className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
                    >
                      <div className="sm:col-span-4">
                        <label
                          htmlFor={`guestName-${index}`}
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Guest Name
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name={`guestName-${index}`}
                            id={`guestName-${index}`}
                            value={guest}
                            onChange={handleChange}
                            className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Enter guest name"
                          />
                        </div>
                      </div>
                      {index > 0 && (
                        <div className="sm:col-span-2 flex items-center">
                          <button
                            type="button"
                            onClick={() => handleRemoveGuest(index)}
                            className="text-sm text-red-600 font-medium focus:outline-none"
                          >
                            Remove
                          </button>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Button to add guest */}
                  {formData.guests.length < Number(extras) && (
                    <div className="mt-6">
                      <button
                        type="button"
                        onClick={handleAddGuest}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                      >
                        Add Another Guest
                      </button>
                    </div>
                  )}
                </div>
              )}
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
