import Link from 'next/link';

export default function StepThree() {
    return (
        <section className='container mx-auto'>
            <h1 className='text-center font-bold mb-5 text-[#1B1B21] text-[40px]'>
                Customize your event Url
            </h1>

            <p className='text-center'>
                <Link
                    href='/dashboard/onboarding/step-four'
                    className=' text-[#303036] font-medium text-xl leading-6 hover:underline'
                >
                    Not sure yet? Skip for now
                </Link>
            </p>

            <form action='' className='pt-16 space-y-16'>
                <input
                    type='url'
                    id='eventUrl'
                    className='w-full border-[1.5px] border-[#C7C5D0] text-base bg-white rounded-lg px-4 py-5 placeholder:text-[#C7C5D0] focus:border-[#0D154B] focus-within:border-[#0D154B] focus-visible:border-[#0D154B] focus-visible:outline-none'
                    placeholder='Enter the event date'
                    required
                />

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
