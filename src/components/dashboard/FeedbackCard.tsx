import React from "react";


interface Guest {
    message: string;
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    status: "pending" | "attending" | "rejected" | "approved";
    plus_ones?: { name: string }[];
  }

interface FeedbackCardProps {
    guests: Guest;
}

export const FeedbackCard: React.FC<FeedbackCardProps> = ({ guests }) => {
    const { message, first_name, last_name } = guests;

    return (
        <>
            <div className='flex flex-col space-y-4 p-4 rounded-lg shadow-md bg-white'>
                <h2 className='font-bold text-xl'>
                    Message from {first_name + ' ' + last_name}
                </h2>
                <small>{message}</small>
            </div>
        </>
    );
}
