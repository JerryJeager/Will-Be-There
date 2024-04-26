'use client';
import Link from 'next/link';
import { stepThreeSchema } from '../../../../src/lib/yup';
import { StepThreeData } from '../../../../src/store/eventTypes';
import useFormStore from '../../../../src/store/useFormStore';
import { useRouter } from 'next/navigation';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { nanoid } from 'nanoid';
import { useState } from 'react';

const eventID = nanoid();

export default function StepThree() {
    const [generatedUrl, setGeneratedUrl] = useState('');
    const [copySuccess, setCopySuccess] = useState(false);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopySuccess(true);
        setTimeout(() => {
            setCopySuccess(false);
        }, 3000);
    };
    const router = useRouter();
    const { stepOne, stepTwo, stepThree, setData } = useFormStore();

    return (
        <section className='container mx-auto'>
            <h1 className='text-center font-bold mb-5 text-[#1B1B21] text-[40px]'>
                Generate your event url
            </h1>

            <p className='text-center'>
                <Link
                    href='/dashboard'
                    className=' text-[#303036] font-medium text-xl leading-6 hover:underline'
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
                    console.log({
                        id: eventID,
                        ...stepOne,
                        ...stepTwo,
                        ...stepThree
                    });

                    // router.push('/dashboard');
                }}
            >
                {({ errors, touched, handleChange, handleBlur }) => (
                    <Form className='pt-16 space-y-10'>
                        <label
                            htmlFor='extras'
                            className='text-[#46464F] font-medium text-[28px]'
                        >
                            How many plus ones can your guests bring?
                        </label>
                        <Field
                            type='number'
                            id='extras'
                            className={`w-full border-[1.5px] border-[#C7C5D0] text-base bg-white rounded-lg px-4 py-5 placeholder:text-[#C7C5D0] focus:border-[#0D154B] focus-within:border-[#0D154B] focus-visible:border-[#0D154B] focus-visible:outline-none 
                           
                                ${
                                    errors.extras && touched.extras
                                        ? 'border-red-500 text-red-500 placeholder:text-red-500 focus:border-red-500 focus-within:border-red-500 focus-visible:border-red-500'
                                        : touched.extras
                                        ? 'border-green-500 text-green-500 placeholder:text-green-500 focus:border-green-500 focus-within:border-green-500 focus-visible:border-green-500'
                                        : ''
                                }`}
                            placeholder='Enter a number'
                            name='extras'
                            onChange={(e) => {
                                handleChange(e);
                                const url = `http://will-be-there.vercel.app/invitation/${eventID}?extras=${e.target.value}`;
                                setGeneratedUrl(url);
                            }}
                            onBlur={handleBlur}
                        />

                        <ErrorMessage
                            name='extras'
                            component='span'
                            className='text-red-500 font-medium min-[992px]:text-base text-sm'
                        />

                        {generatedUrl && (
                            <div className='flex justify-between items-center'>
                                <div className=''>
                                    Copy this link and send to your guests:
                                    <br />
                                    <span className='underline'>
                                        {generatedUrl}
                                    </span>
                                </div>
                                <div>
                                    <button
                                        className='bg-[#0D35FB] text-white font-medium text-base px-3 py-1 rounded-lg'
                                        onClick={() =>
                                            copyToClipboard(generatedUrl)
                                        }
                                    >
                                        Copy
                                    </button>
                                    <br />
                                    {copySuccess && (
                                        <span className='text-green-600 text-center text-base'>
                                            Copied!
                                        </span>
                                    )}
                                </div>
                            </div>
                        )}
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