export type StepOneData = {
    name: string;
    description: string;
};

export type StepTwoData = {
    date: string;
    time: string;
    venue: string;
    state: string;
    country: string;
};

export type StepThreeData = {
    extras: number;
};

export type FormData = StepOneData & StepTwoData & StepThreeData;
