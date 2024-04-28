import * as yup from 'yup';
import { StepOneData, StepThreeData, StepTwoData } from '../store/eventTypes';

export const stepOneSchema: yup.ObjectSchema<StepOneData> = yup.object({
    name: yup.string().required('Event Name is required')
});

// @ts-ignore - file type still not found
export const stepTwoSchema: yup.ObjectSchema<StepTwoData> = yup.object({
    startTime: yup.object({
        date: yup.string().required('Start date is required'),
        time: yup.string().required('Start time is required')
    }),
    endTime: yup.object({
        date: yup.string().required('End date is required'),
        time: yup.string().required('End time is required')
    }),
    venue: yup.string().required('Venue is required')
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
