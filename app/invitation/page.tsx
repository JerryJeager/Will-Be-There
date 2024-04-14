'use-client';

export default function Page({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
            {/* <form>
                <div className='space-y-12'>
                    <div className='border-b border-gray-900/10 pb-12'>
                        <h2 className='text-base font-semibold leading-7 text-gray-900'>
                            RSVP Form
                        </h2>
                        <p className='mt-1 text-sm leading-6 text-gray-600'>
                            This information will be displayed publicly so be
                            careful what you share.
                        </p>

                        <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                            <div className='sm:col-span-4'>
                                <label
                                    htmlFor='name'
                                    className='block text-sm font-medium leading-6 text-gray-900'
                                >
                                    Name
                                </label>
                                <div className='mt-2'>
                                    <input
                                        type='text'
                                        name='name'
                                        id='name'
                                        autoComplete='name'
                                        className='block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                        placeholder='Enter your full name'
                                    />
                                </div>
                            </div>

                            <div className='sm:col-span-4'>
                                <label
                                    htmlFor='email'
                                    className='block text-sm font-medium leading-6 text-gray-900'
                                >
                                    Email address
                                </label>
                                <div className='mt-2'>
                                    <input
                                        id='email'
                                        name='email'
                                        type='email'
                                        autoComplete='email'
                                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                    />
                                </div>
                            </div>

                            <fieldset className='sm:col-span-4'>
                                <legend className='text-sm font-semibold leading-6 text-gray-900'>
                                    Are you attending the event?
                                </legend>

                                <div className='mt-6 gap-x-6 flex justify-between'>
                                    <div className='flex items-center gap-x-3'>
                                        <input
                                            id='yesToAttend'
                                            name='isAttending'
                                            type='radio'
                                            className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                        />
                                        <label
                                            htmlFor='yesToAttend'
                                            className='block text-sm font-medium leading-6 text-gray-900'
                                        >
                                            Yes
                                        </label>
                                    </div>
                                    <div className='flex items-center gap-x-3'>
                                        <input
                                            id='noToAttend'
                                            name='isAttending'
                                            type='radio'
                                            className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                        />
                                        <label
                                            htmlFor='noToAttend'
                                            className='block text-sm font-medium leading-6 text-gray-900'
                                        >
                                            No
                                        </label>
                                    </div>
                                </div>
                            </fieldset>

                            <fieldset className='sm:col-span-4'>
                                <legend className='text-sm font-semibold leading-6 text-gray-900'>
                                    Are you bringing additional people?
                                </legend>

                                <div className='mt-6 gap-x-6 flex justify-between'>
                                    <div className='flex items-center gap-x-3'>
                                        <input
                                            id='yesToPlusOne'
                                            name='isBringingPlusOne'
                                            type='radio'
                                            className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                        />
                                        <label
                                            htmlFor='yesToPlusOne'
                                            className='block text-sm font-medium leading-6 text-gray-900'
                                        >
                                            Yes
                                        </label>
                                    </div>
                                    <div className='flex items-center gap-x-3'>
                                        <input
                                            id='noToPlusOne'
                                            name='isBringingPlusOne'
                                            type='radio'
                                            className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
                                        />
                                        <label
                                            htmlFor='noToPlusOne'
                                            className='block text-sm font-medium leading-6 text-gray-900'
                                        >
                                            No
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>

                    <div className='border-b border-gray-900/10 pb-12'>
                        <h2 className='text-base font-semibold leading-7 text-gray-900'>
                            Additional Guest Details
                        </h2>
                        <p className='mt-1 text-sm leading-6 text-gray-600'>
                            Organizer only allows 2 additonal guests. Include
                            their details below
                        </p>

                        <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                            <div className='sm:col-span-3'>
                                <label
                                    htmlFor='first-name'
                                    className='block text-sm font-medium leading-6 text-gray-900'
                                >
                                    First name
                                </label>
                                <div className='mt-2'>
                                    <input
                                        type='text'
                                        name='first-name'
                                        id='first-name'
                                        autoComplete='given-name'
                                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                    />
                                </div>
                            </div>

                            <div className='sm:col-span-3'>
                                <label
                                    htmlFor='email'
                                    className='block text-sm font-medium leading-6 text-gray-900'
                                >
                                    Email address
                                </label>
                                <div className='mt-2'>
                                    <input
                                        id='email'
                                        name='email'
                                        type='email'
                                        autoComplete='email'
                                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-6 flex items-center justify-end gap-x-6'>
                    <button
                        type='button'
                        className='text-sm font-semibold leading-6 text-gray-900'
                    >
                        Cancel
                    </button>
                    <button
                        type='submit'
                        className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    >
                        Save
                    </button>
                </div>
            </form> */}
        </div>
    );
}
