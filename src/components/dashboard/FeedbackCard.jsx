export default function FeedbackCard({ guests }) {
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
