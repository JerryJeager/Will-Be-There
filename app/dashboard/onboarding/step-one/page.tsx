'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { stepOneSchema } from '../../../../src/lib/yup';
import { StepOneData } from '../../../../src/store/eventTypes';
import useFormStore from '../../../../src/store/useFormStore';
import { ErrorMessage, Field, Form, Formik } from 'formik';

export default function StepOne() {
    const router = useRouter();
    const { stepOne, setData } = useFormStore();

    return (
        <section className='container mx-auto leading-tight'>
            <h1 className='text-center font-bold mb-5 text-[#1B1B21] text-[40px] '>
                Enter your event name
            </h1>

            <p className='text-center'>
                <Link
                    href='/dashboard/onboarding/step-two'
                    className=' text-[#303036] font-medium text-xl leading-6 hover:underline'
                >
                    Not sure yet? Skip for now
                </Link>
            </p>

            <Formik
                initialValues={stepOne}
                validationSchema={stepOneSchema}
                onSubmit={(data: StepOneData) => {
                    console.log(data);
                    setData({ step: 1, data });
                    router.push('/dashboard/onboarding/step-two');
                }}
            >
                {({ errors, touched }) => (
                    <Form className='pt-14 space-y-8'>
                        <div>
                            <label
                                htmlFor='name'
                                className='block mb-4 text-[#46464F] font-medium text-[28px]'
                            >
                                Event Name
                            </label>

                            <Field
                                type='text'
                                className={`w-full border-[1.5px] border-[#C7C5D0] text-base bg-white rounded-lg px-4 py-5 placeholder:text-[#C7C5D0] focus:border-[#0D154B] focus-within:border-[#0D154B] focus-visible:border-[#0D154B] focus-visible:outline-none 
                           
                                ${
                                    errors.name && touched.name
                                        ? 'border-red-500 text-red-500 placeholder:text-red-500 focus:border-red-500 focus-within:border-red-500 focus-visible:border-red-500'
                                        : touched.name
                                        ? 'border-green-500 text-green-500 placeholder:text-green-500 focus:border-green-500 focus-within:border-green-500 focus-visible:border-green-500'
                                        : ''
                                }`}
                                placeholder='Enter your event name'
                                name='name'
                                id='name'
                            />
                            <br />
                            <ErrorMessage
                                name='name'
                                component='span'
                                className='text-red-500 font-medium min-[992px]:text-base text-sm'
                            />
                        </div>

                        <div>
                            <label
                                htmlFor='description'
                                className='block mb-4 text-[#46464F] font-medium text-[28px]'
                            >
                                Event Description
                            </label>
                            <Field
                                as='textarea'
                                type='text'
                                className={`w-full border-[1.5px] border-[#C7C5D0] text-base bg-white rounded-lg px-4 py-5 placeholder:text-[#C7C5D0] focus:border-[#0D154B] focus-within:border-[#0D154B] focus-visible:border-[#0D154B] focus-visible:outline-none 
                           
                                ${
                                    errors.description && touched.description
                                        ? 'border-red-500 text-red-500 placeholder:text-red-500 focus:border-red-500 focus-within:border-red-500 focus-visible:border-red-500'
                                        : touched.description
                                        ? 'border-green-500 text-green-500 placeholder:text-green-500 focus:border-green-500 focus-within:border-green-500 focus-visible:border-green-500'
                                        : ''
                                }`}
                                placeholder='Enter your event description'
                                name='description'
                                id='description'
                            />
                            <br />
                            <ErrorMessage
                                name='description'
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
