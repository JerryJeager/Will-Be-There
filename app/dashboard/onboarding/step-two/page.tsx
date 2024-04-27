'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';
import useFormStore from '../../../../src/store/useFormStore';
import { stepTwoSchema } from '../../../../src/lib/yup';
import { StepTwoData } from '../../../../src/store/eventTypes';
import { ErrorMessage, Field, Form, Formik } from 'formik';

export default function StepTwo() {
    const router = useRouter();
    const { stepTwo, setData } = useFormStore();
    const today = dayjs().format('YYYY-MM-DD');

    return (
        <section className='container mx-auto leading-tight'>
            <h1 className='text-center font-bold mb-5 text-[#1B1B21] text-[40px]'>
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
                onSubmit={(data: StepTwoData) => {
                    console.log(data);
                    setData({ step: 2, data });
                    router.push('/dashboard/onboarding/step-three');
                }}
            >
                {({ errors, touched }) => (
                    <Form className='pt-14 space-y-14'>
                        <div className='space-y-5'>
                            <label
                                htmlFor='eventStart'
                                className='text-[#46464F] font-medium text-[28px]'
                            >
                                Event Start
                            </label>

                            <div className='grid md:grid-cols-3 grid-cols-1 justify-between md:gap-x-14 gap-y-12 items-center'>
                                <div className='md:col-span-2'>
                                    <Field
                                        type='date'
                                        id='eventStart'
                                        className={`w-full border-[1.5px] border-[#C7C5D0] text-base bg-white rounded-lg px-4 py-5 placeholder:text-[#C7C5D0] focus:border-[#0D154B] focus-within:border-[#0D154B] focus-visible:border-[#0D154B] focus-visible:outline-none 
                           
                                ${
                                    errors.startTime &&
                                    errors.startTime.date &&
                                    touched.startTime &&
                                    touched.startTime.date
                                        ? 'border-red-500 text-red-500 placeholder:text-red-500 focus:border-red-500 focus-within:border-red-500 focus-visible:border-red-500'
                                        : touched.startTime &&
                                          touched.startTime.date
                                        ? 'border-green-500 text-green-500 placeholder:text-green-500 focus:border-green-500 focus-within:border-green-500 focus-visible:border-green-500'
                                        : ''
                                }`}
                                        placeholder='Enter the start date'
                                        min={today}
                                        name='startTime.date'
                                    />

                                    <ErrorMessage
                                        name='startTime.date'
                                        component='span'
                                        className='text-red-500 font-medium min-[992px]:text-base text-sm'
                                    />
                                </div>

                                <div>
                                    <Field
                                        type='time'
                                        id='eventStart'
                                        className={`w-full border-[1.5px] border-[#C7C5D0] text-base bg-white rounded-lg px-4 py-5 placeholder:text-[#C7C5D0] focus:border-[#0D154B] focus-within:border-[#0D154B] focus-visible:border-[#0D154B] focus-visible:outline-none 
                           
                                ${
                                    errors.startTime &&
                                    errors.startTime.time &&
                                    touched.startTime &&
                                    touched.startTime.time
                                        ? 'border-red-500 text-red-500 placeholder:text-red-500 focus:border-red-500 focus-within:border-red-500 focus-visible:border-red-500'
                                        : touched.startTime &&
                                          touched.startTime.time
                                        ? 'border-green-500 text-green-500 placeholder:text-green-500 focus:border-green-500 focus-within:border-green-500 focus-visible:border-green-500'
                                        : ''
                                }`}
                                        placeholder='Enter the start time'
                                        name='startTime.time'
                                    />

                                    <ErrorMessage
                                        name='startTime.time'
                                        component='span'
                                        className='text-red-500 font-medium min-[992px]:text-base text-sm'
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='space-y-5'>
                            <label
                                htmlFor='eventEnd'
                                className='text-[#46464F] font-medium text-[28px]'
                            >
                                Event End
                            </label>

                            <div className='grid md:grid-cols-3 grid-cols-1 justify-between md:gap-x-14 gap-y-12 items-center'>
                                <div className='md:col-span-2'>
                                    <Field
                                        type='date'
                                        id='eventEnd'
                                        className={`w-full border-[1.5px] border-[#C7C5D0] text-base bg-white rounded-lg px-4 py-5 placeholder:text-[#C7C5D0] focus:border-[#0D154B] focus-within:border-[#0D154B] focus-visible:border-[#0D154B] focus-visible:outline-none 
                           
                                ${
                                    errors.endTime &&
                                    errors.endTime.date &&
                                    touched.endTime &&
                                    touched.endTime.date
                                        ? 'border-red-500 text-red-500 placeholder:text-red-500 focus:border-red-500 focus-within:border-red-500 focus-visible:border-red-500'
                                        : touched.endTime &&
                                          touched.endTime.date
                                        ? 'border-green-500 text-green-500 placeholder:text-green-500 focus:border-green-500 focus-within:border-green-500 focus-visible:border-green-500'
                                        : ''
                                }`}
                                        placeholder='Enter the end date'
                                        name='endTime.date'
                                    />

                                    <ErrorMessage
                                        name='endTime.date'
                                        component='span'
                                        className='text-red-500 font-medium min-[992px]:text-base text-sm'
                                    />
                                </div>

                                <div>
                                    <Field
                                        type='time'
                                        id='eventStart'
                                        className={`w-full border-[1.5px] border-[#C7C5D0] text-base bg-white rounded-lg px-4 py-5 placeholder:text-[#C7C5D0] focus:border-[#0D154B] focus-within:border-[#0D154B] focus-visible:border-[#0D154B] focus-visible:outline-none 
                           
                                ${
                                    errors.endTime &&
                                    errors.endTime.time &&
                                    touched.endTime &&
                                    touched.endTime.time
                                        ? 'border-red-500 text-red-500 placeholder:text-red-500 focus:border-red-500 focus-within:border-red-500 focus-visible:border-red-500'
                                        : touched.endTime &&
                                          touched.endTime.time
                                        ? 'border-green-500 text-green-500 placeholder:text-green-500 focus:border-green-500 focus-within:border-green-500 focus-visible:border-green-500'
                                        : ''
                                }`}
                                        placeholder='Enter the end time'
                                        name='endTime.time'
                                    />
                                    <ErrorMessage
                                        name='endTime.time'
                                        component='span'
                                        className='text-red-500 font-medium min-[992px]:text-base text-sm'
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='space-y-5'>
                            <label
                                htmlFor='eventVenue'
                                className='text-[#46464F] font-medium text-[28px]'
                            >
                                Event Venue
                            </label>

                            <Field
                                type='text'
                                id='eventVenue'
                                className={`block w-full border-[1.5px] border-[#C7C5D0] text-base bg-white rounded-lg px-4 py-5 placeholder:text-[#C7C5D0] focus:border-[#0D154B] focus-within:border-[#0D154B] focus-visible:border-[#0D154B] focus-visible:outline-none 
                           
                                ${
                                    errors.venue && touched.venue
                                        ? 'border-red-500 text-red-500 placeholder:text-red-500 focus:border-red-500 focus-within:border-red-500 focus-visible:border-red-500'
                                        : touched.venue
                                        ? 'border-green-500 text-green-500 placeholder:text-green-500 focus:border-green-500 focus-within:border-green-500 focus-visible:border-green-500'
                                        : ''
                                }`}
                                placeholder='Enter the event venue'
                                name='venue'
                            />
                            <ErrorMessage
                                name='venue'
                                component='span'
                                className='text-red-500 font-medium min-[992px]:text-base text-sm'
                            />
                        </div>

                        <div className='grid'>
                            <button
                                type='submit'
                                className='p-[18px] rounded-[10px] bg-[#0D35FB] text-white font-medium text-base'
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
