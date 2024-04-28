import { StepOneData, StepThreeData, StepTwoData } from './eventTypes';
import { create } from 'zustand';

const stepVariant = {
    1: 'stepOne',
    2: 'stepTwo',
    3: 'stepThree'
};

type setDataType =
    | { step: 1; data: StepOneData }
    | { step: 2; data: StepTwoData }
    | { step: 3; data: StepThreeData };

interface CustomStore {
    stepOne: StepOneData | null;
    stepTwo: StepTwoData | null;
    stepThree: StepThreeData | null;
    setData: ({ step, data }: setDataType) => void;
}

const useFormStore = create<CustomStore>((set) => ({
    stepOne: {
        name: ''
    },
    stepTwo: {
        startTime: {
            date: '',
            time: ''
        },
        endTime: {
            date: '',
            time: ''
        },
        venue: ''
    },
    stepThree: {
        extras: null
    },
    setData: ({ step, data }) =>
        set((state) => ({
            ...state,
            [stepVariant[step]]: data
        }))
}));

export default useFormStore;
