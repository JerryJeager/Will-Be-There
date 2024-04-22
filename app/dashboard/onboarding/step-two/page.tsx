import Link from 'next/link';

export default function StepTwo() {
    return (
        <section className='container mx-auto'>
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

            <form action='' className='pt-14 space-y-14'>
                <div className='space-y-5'>
                    <label
                        htmlFor='eventStart'
                        className='text-[#46464F] font-medium text-[28px]'
                    >
                        Event Start
                    </label>

                    <div className='grid grid-cols-3 justify-between gap-x-14 items-center'>
                        <input
                            type='date'
                            id='eventStart'
                            className='col-span-2 border-[1.5px] border-[#C7C5D0] text-base bg-white rounded-lg px-4 py-5 placeholder:text-[#C7C5D0] focus:border-[#0D154B] focus-within:border-[#0D154B] focus-visible:border-[#0D154B] focus-visible:outline-none'
                            placeholder='Enter the start date'
                            required
                        />

                        <input
                            type='time'
                            id='eventStart'
                            className='border-[1.5px] border-[#C7C5D0] text-base bg-white rounded-lg px-4 py-5 placeholder:text-[#C7C5D0] focus:border-[#0D154B] focus-within:border-[#0D154B] focus-visible:border-[#0D154B] focus-visible:outline-none'
                            placeholder='Enter the start time'
                            required
                        />
                    </div>
                </div>

                <div className='space-y-5'>
                    <label
                        htmlFor='eventEnd'
                        className='text-[#46464F] font-medium text-[28px]'
                    >
                        Event End
                    </label>

                    <div className='grid grid-cols-3 justify-between gap-x-14 items-center'>
                        <input
                            type='date'
                            id='eventEnd'
                            className='col-span-2 border-[1.5px] border-[#C7C5D0] text-base bg-white rounded-lg px-4 py-5 placeholder:text-[#C7C5D0] focus:border-[#0D154B] focus-within:border-[#0D154B] focus-visible:border-[#0D154B] focus-visible:outline-none'
                            placeholder='Enter the end date'
                            required
                        />

                        <input
                            type='time'
                            id='eventStart'
                            className='border-[1.5px] border-[#C7C5D0] text-base bg-white rounded-lg px-4 py-5 placeholder:text-[#C7C5D0] focus:border-[#0D154B] focus-within:border-[#0D154B] focus-visible:border-[#0D154B] focus-visible:outline-none'
                            placeholder='Enter the end time'
                            required
                        />
                    </div>
                </div>

                <div className='space-y-5'>
                    <label
                        htmlFor='eventVenue'
                        className='text-[#46464F] font-medium text-[28px]'
                    >
                        Event Venue
                    </label>

                    <input
                        type='text'
                        id='eventVenue'
                        className='block w-full border-[1.5px] border-[#C7C5D0] text-base bg-white rounded-lg px-4 py-5 placeholder:text-[#C7C5D0] focus:border-[#0D154B] focus-within:border-[#0D154B] focus-visible:border-[#0D154B] focus-visible:outline-none'
                        placeholder='Enter the event venue'
                        required
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
            </form>
        </section>
    );
}
