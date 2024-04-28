export type StepOneData = {
    name: string;
};

export type StepTwoData = {
    startTime: {
        date: string;
        time: string;
    };
    endTime: {
        date: string;
        time: string;
    };
    venue: string;
};

export type StepThreeData = {
    extras: number;
};

export type FormData = StepOneData & StepTwoData & StepThreeData;
