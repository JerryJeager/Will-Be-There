import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';

export default function ImageUpload({ open, setOpen }) {
    const [imagePreview, setImagePreview] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        handleFile(file);
    };

    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        handleFile(file);
    };

    const handleFile = (file) => {
        const reader = new FileReader();
        reader.onload = () => {
            setImagePreview(reader.result);
            handleImageUpload(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const preventDefault = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleClick = () => {
        document.getElementById('eventImageInput').click();
    };

    return (
        <div
            className={`${
                open ? 'block' : 'hidden'
            } w-full h-screen fixed top-0 left-0 bg-black/20 z-[999]`}
        >
            <div className='flex justify-center items-center h-screen'>
                <div className='p-8 bg-white rounded-lg shadow-lg'>
                    <div>
                        <button
                            className='text-[#9A9A9A] hover:text-[#1f1f1f]'
                            onClick={() => setOpen(false)}
                        >
                            <IoClose />
                        </button>
                    </div>

                    <div className='text-center mb-4'>
                        <h2 className='text-2xl font-semibold'>
                            Add Event Image
                        </h2>
                        <p className='text-xs text-[#9A9A9A]'>
                            Upload an image for your event
                        </p>
                    </div>
                    <form
                        className='flex flex-col space-y-4'
                        onSubmit={handleSubmit}
                    >
                        <label
                            className='border-dashed border-2 border-gray-300 rounded-lg h-40 flex justify-center items-center cursor-pointer p-4'
                            onDrop={handleDrop}
                            onDragOver={preventDefault}
                            onClick={handleClick}
                        >
                            {imagePreview ? (
                                <img
                                    src={imagePreview}
                                    alt='Event'
                                    className='max-h-full max-w-full'
                                />
                            ) : (
                                <p className='text-gray-500'>
                                    Click or drag &amp; drop to upload
                                </p>
                            )}
                        </label>
                        <input
                            type='file'
                            accept='image/*'
                            onChange={handleFileSelect}
                            className='hidden'
                            id='eventImageInput'
                        />
                        <button
                            type='submit'
                            className='bg-[#0D35FB] hover:bg-blue-700 text-white text-sm p-4 rounded-md w-full'
                        >
                            Next
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
