"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import Link from "next/link";

export default function Page({ params }: { params: { eventID: string } }) {
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
        <Link href="/">
    <Image src={logo} alt="logo" height={100} className="mx-auto w-[10rem]" />
  </Link>
          <h2 className="text-2xl font-semibold text-gray-900">RSVP Form</h2>
          <p className="text-sm text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>

          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none sm:text-sm"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email address</label>
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
              <legend className="text-sm font-semibold text-gray-900">Are you attending the event?</legend>
              <div className="flex items-center gap-4">
                <label htmlFor="yesToAttend" className="flex items-center">
                  <input
                    id="yesToAttend"
                    name="isAttending"
                    value="yes"
                    checked={formData.isAttending === "yes"}
                    onChange={handleChange}
                    required
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="ml-2 text-sm text-gray-900">Yes</span>
                </label>
                <label htmlFor="noToAttend" className="flex items-center">
                  <input
                    id="noToAttend"
                    name="isAttending"
                    type="radio"
                    value="no"
                    checked={formData.isAttending === "no"}
                    onChange={handleChange}
                    required
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="ml-2 text-sm text-gray-900">No</span>
                </label>
              </div>
            </fieldset>

            {extras && Number(extras) !== 0 && formData.isAttending === "yes" && (
              <fieldset>
                <legend className="text-sm font-semibold text-gray-900">Are you bringing additional people?</legend>
                <div className="flex items-center gap-4">
                  <label htmlFor="yesExtras" className="flex items-center">
                    <input
                      id="yesExtras"
                      name="hasExtras"
                      type="radio"
                      value="yes"
                      checked={formData.hasExtras === "yes"}
                      onChange={handleChange}
                      required
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-sm text-gray-900">Yes</span>
                  </label>
                  <label htmlFor="noExtras" className="flex items-center">
                    <input
                      id="noExtras"
                      name="hasExtras"
                      type="radio"
                      value="no"
                      checked={formData.hasExtras === "no"}
                      onChange={handleChange}
                      required
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-sm text-gray-900">No</span>
                  </label>
                </div>
              </fieldset>
            )}

            {extras && Number(extras) !== 0 && formData.isAttending === "yes" && formData.hasExtras === "yes" && (
              <div>
                <h2 className="text-base font-semibold text-gray-900">Additional Guest Details</h2>
                {formData.guests.map((guest, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <input
                      type="text"
                      name={`guestName-${index}`}
                      value={guest}
                      onChange={handleChange}
                      className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none sm:text-sm"
                      placeholder={`Guest ${index + 1} Name`}
                    />
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveGuest(index)}
                        className="text-sm text-red-600 font-medium focus:outline-none"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                {formData.guests.length < Number(extras) && (
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={handleAddGuest}
                      className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                    >
                      Add Another Guest
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm font-semibold text-gray-900 mr-4"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
