import * as yup from 'yup';
import { StepOneData, StepThreeData, StepTwoData } from '../store/eventTypes';

export const stepOneSchema: yup.ObjectSchema<StepOneData> = yup.object({
    name: yup.string().required('Event Name is required'),
    description: yup.string().required('Description is required')
});

// @ts-ignore - file type still not found
export const stepTwoSchema: yup.ObjectSchema<StepTwoData> = yup.object({
    date: yup.string().required('Date is required'),
    time: yup.string().required('Time is required'),
    venue: yup.string().required('Venue is required'),
    state: yup.string().required('State is required'),
    country: yup.string().required('Country is required')
});

// // @ts-ignore - override correct yup type
// // https://github.com/jquense/yup/issues/1183

export const stepThreeSchema: yup.ObjectSchema<StepThreeData> = yup.object({
    // url: yup.string().url().required('Event url is required')
    extras: yup
        .number()
        .required('Number of plus-ones is required')
        .min(0, 'Number of plus-ones cannot be less than 0')
});
