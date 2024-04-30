'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';
import useFormStore from '../../../../src/store/useFormStore';
import { stepTwoSchema } from '../../../../src/lib/yup';
import { StepTwoData } from '../../../../src/store/eventTypes';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import axios from 'axios';
import { useState } from 'react';

const url = 'https://will-be-there.onrender.com';

export default function StepTwo() {
    const router = useRouter();
    const { stepOne, stepTwo, setData } = useFormStore();
    const today = dayjs().format('YYYY-MM-DD');
    const token = sessionStorage.getItem('token');
    const user_id = sessionStorage.getItem('user_id');
    const formData = {
        ...stepOne,
        ...stepTwo,
        date: stepTwo.date + 'T' + stepTwo.time + ':00Z',
        user_id: user_id
    };

    if (!token) {
        router.push('/auth/login');
    } else {
        console.log('Token found:', token);
    }

    const createEvent = async (url: string, token: string, obj) => {
        try {
            const response = await axios.post(`${url}/api/v1/event`, obj, {
                headers: { Authorization: 'Bearer ' + token }
            });

            console.log('Event ID:', response.data);
            router.push(
                `/dashboard/onboarding/step-three/?eventId=${response.data}`
            );

            return response.data;
        } catch (error: any) {
            console.error('Error signing up:', error);
            console.log(obj);
        }
    };

    return (
        <section className='container mx-auto leading-tight py-10'>
            <h1 className='text-center font-bold  text-[#1B1B21] text-3xl md:text-[40px] py-5 '>
                Enter your event date
            </h1>

            <p className='text-center'>
                <Link
                    href='/dashboard/onboarding/step-three'
                    className=' text-[#303036] font-medium text-xl leading-6 hover:underline'
                >
                    Not sure yet? Skip for now
                </Link>
            </p>
            <Formik
                initialValues={stepTwo}
                validationSchema={stepTwoSchema}
                handle
                onSubmit={async (data: StepTwoData) => {
                    const updatedFormData = {
                        ...stepOne,
                        ...data,
                        date: data.date + 'T' + data.time + ':00Z',
                        user_id: user_id
                    };

                    setData({ step: 2, data: updatedFormData });

                    await createEvent(url, token, updatedFormData);
                }}
            >
                {({ errors, touched }) => (
                    <Form className='pt-14 space-y-5 md:space-y-10'>
                        <div className='space-y-2'>
                            {/* <label
                                htmlFor='eventStart'
                                className='text-[#46464F] font-semibold text-xl md:text-[28px] pl-2'
                            >
                                Event Start
                            </label> */}

                            <div className='grid md:grid-cols-3 grid-cols-1 justify-between md:gap-x-14 gap-y-5 items-center'>
                                <div className='md:col-span-2'>
                                    <label
                                        htmlFor='date'
                                        className='block mb-5 text-[#46464F] font-medium text-[28px]'
                                    >
                                        Date
                                    </label>
                                    <Field
                                        type='date'
                                        id='eventStart'
                                        className={`w-full border-[1.5px] border-[#0D35FB] text-base bg-white rounded-lg p-4 placeholder:text-[#C7C5D0] focus:border-[#0D154B] focus-within:border-[#0D154B] focus-visible:border-[#0D154B] focus-visible:outline-none 
                           
                                ${
                                    errors.date && touched.date
                                        ? 'border-red-500 text-red-500 placeholder:text-red-500 focus:border-red-500 focus-within:border-red-500 focus-visible:border-red-500'
                                        : touched.date
                                        ? 'border-[#0D35FB]   focus:border-[#0D35FB] focus-within:border-[#0D35FB] focus-visible:border-[#0D35FB]'
                                        : ''
                                }`}
                                        placeholder='Enter the start date'
                                        min={today}
                                        name='date'
                                    />

                                    <ErrorMessage
                                        name='date'
                                        component='span'
                                        className='text-red-500 font-medium min-[992px]:text-base text-sm lowercase pl-2'
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor='time'
                                        className='block mb-5 text-[#46464F] font-medium text-[28px]'
                                    >
                                        Time
                                    </label>
                                    <Field
                                        type='time'
                                        id='eventStart'
                                        className={`w-full border-[1.5px] border-[#0D35FB] text-base bg-white rounded-lg p-4 placeholder:text-[#C7C5D0] focus:border-[#0D154B] focus-within:border-[#0D154B] focus-visible:border-[#0D154B] focus-visible:outline-none 
                           
                                ${
                                    errors.time && touched.time
                                        ? 'border-red-500 text-red-500 placeholder:text-red-500 focus:border-red-500 focus-within:border-red-500 focus-visible:border-red-500'
                                        : touched.time
                                        ? 'border-[#0D35FB]   focus:border-[#0D35FB] focus-within:border-[#0D35FB] focus-visible:border-[#0D35FB]'
                                        : ''
                                }`}
                                        placeholder='Enter the event time'
                                        name='time'
                                    />

                                    <ErrorMessage
                                        name='time'
                                        component='span'
                                        className='text-red-500 font-medium min-[992px]:text-base text-sm lowercase pl-2'
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='space-y-3'>
                            {/* <label
                                htmlFor='eventEnd'
                                className='text-[#46464F] font-semibold text-xl md:text-[28px] pl-2'
                            >
                                Event End
                            </label> */}

                            <div className='grid md:grid-cols-3 grid-cols-1 justify-between md:gap-x-14 gap-y-5 items-center'>
                                <div className='md:col-span-2'>
                                    <label
                                        htmlFor='state'
                                        className='block mb-5 text-[#46464F] font-medium text-[28px]'
                                    >
                                        State
                                    </label>
                                    <Field
                                        type='text'
                                        id='eventEnd'
                                        className={`w-full border-[1.5px] border-[#0D35FB] text-base bg-white rounded-lg p-4 placeholder:text-[#C7C5D0] focus:border-[#0D154B] focus-within:border-[#0D154B] focus-visible:border-[#0D154B] focus-visible:outline-none 
                           
                                ${
                                    errors.state && touched.state
                                        ? 'border-red-500 text-red-500 placeholder:text-red-500 focus:border-red-500 focus-within:border-red-500 focus-visible:border-red-500'
                                        : touched.state
                                        ? 'border-[#0D35FB]   focus:border-[#0D35FB] focus-within:border-[#0D35FB] focus-visible:border-[#0D35FB]'
                                        : ''
                                }`}
                                        placeholder='Enter the state'
                                        name='state'
                                    />

                                    <ErrorMessage
                                        name='state'
                                        component='span'
                                        className='text-red-500 font-medium min-[992px]:text-base text-sm lowercase pl-2'
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor='country'
                                        className='block mb-5 text-[#46464F] font-medium text-[28px]'
                                    >
                                        Country
                                    </label>
                                    <Field
                                        type='text'
                                        id='eventStart'
                                        className={`w-full border-[1.5px] border-[#0D35FB] text-base bg-white rounded-lg p-4 placeholder:text-[#C7C5D0] focus:border-[#0D154B] focus-within:border-[#0D154B] focus-visible:border-[#0D154B] focus-visible:outline-none 
                           
                                ${
                                    errors.country && touched.country
                                        ? 'border-red-500 text-red-500 placeholder:text-red-500 focus:border-red-500 focus-within:border-red-500 focus-visible:border-red-500'
                                        : touched.country
                                        ? 'border-[#0D35FB]   focus:border-[#0D35FB] focus-within:border-[#0D35FB] focus-visible:border-[#0D35FB]'
                                        : ''
                                }`}
                                        placeholder='Enter the country'
                                        name='country'
                                    />
                                    <ErrorMessage
                                        name='country'
                                        component='span'
                                        className='text-red-500 font-medium min-[992px]:text-base text-sm lowercase pl-2'
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='space-y-3'>
                            <label
                                htmlFor='eventVenue'
                                className='text-[#46464F] font-semibold text-xl md:text-[28px] pl-2'
                            >
                                Event Venue
                            </label>

                            <Field
                                type='text'
                                id='eventVenue'
                                className={`block w-full border-[1.5px] border-[#0D35FB] text-base bg-white rounded-lg p-4 gap-y-5 placeholder:text-[#C7C5D0] focus:border-[#0D154B] focus-within:border-[#0D154B] focus-visible:border-[#0D154B] focus-visible:outline-none 
                           
                                ${
                                    errors.venue && touched.venue
                                        ? 'border-red-500 text-red-500 placeholder:text-red-500 focus:border-red-500 focus-within:border-red-500 focus-visible:border-red-500'
                                        : touched.venue
                                        ? 'border-[#0D35FB]   focus:border-[#0D35FB] focus-within:border-[#0D35FB] focus-visible:border-[#0D35FB]'
                                        : ''
                                }`}
                                placeholder='Enter the event venue'
                                name='venue'
                            />
                            <ErrorMessage
                                name='venue'
                                component='span'
                                className='text-red-500 font-medium min-[992px]:text-base text-sm lowercase pl-2'
                            />
                        </div>

                        <div className='grid py-5'>
                            <button
                                type='submit'
                                className='p-[18px] rounded-[10px] bg-[#0D35FB] text-white font-semibold text-base hover:bg-opacity-80 transition-all '
                            >
                                Continue
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </section>
    );
}
