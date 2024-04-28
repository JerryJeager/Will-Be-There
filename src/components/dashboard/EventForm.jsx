import React, { useState } from 'react';
import { Button } from '../../shared/Button';
import { IoClose } from 'react-icons/io5';

// Reusable TextInput component
const TextInput = ({ label, id, value, onChange, width, placeholder, readOnly }) => {
    return (
        <div className="flex flex-col">
            <label className="text-[#1f1f1f] text-sm" htmlFor={id}>{label}</label>
            <input
                type="text"
                id={id}
                name={id}
                className={`border text-sm rounded-lg px-3 py-2 ${width}`}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                readOnly={readOnly}
            />
        </div>
    );
};

// Reusable DateInput component
const DateInput = ({ label, id, value, onChange, width, placeholder }) => {
    return (
        <div className="flex flex-col">
            <label className="text-[#1f1f1f] text-sm" htmlFor={id}>{label}</label>
            <input
                type="date"
                id={id}
                name={id}
                className={`border text-sm placeholder:text-[#1f1f1f] rounded-lg px-3 py-2 ${width}`}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};

// Reusable TimeInput component
const TimeInput = ({ label, id, value, onChange, width, placeholder }) => {
    return (
        <div className="flex flex-col">
            <label className="text-[#1f1f1f] placeholder:text-[#1f1f1f] text-sm" htmlFor={id}>{label}</label>
            <input
                type="time"
                id={id}
                name={id}
                className={`border text-sm rounded-lg px-3 py-2 ${width}`}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};

export default function CreateEventForm({ open, handleClose }) {

    const [step, setStep] = useState(2);
    const [ eventLink, setEventLink ] = useState('some random copy');
    const [formData, setFormData] = useState({
        eventName: '',
        eventStartDate: '',
        eventStartTime: '',
        eventEndDate: '',
        eventEndTime: '',
        timeZone: '',
        eventLocation: '',
        eventDescription: '',
        eventImage: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if(step === 1) {
            setStep(2);
        } else if(step === 2) {
            console.log(formData);
            setStep(3);

            //set the eventLink state to res.event_link??
        } 
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleImageUpload = (imageData) => {
        setFormData({
            ...formData,
            eventImage: imageData
        });
    };
    
    return(
        <div className={`${open ? 'block' : 'hidden'} w-full h-screen fixed top-0 left-0 bg-black/20 z-[999]`}>
            <div className="flex justify-center items-center h-screen">
                <div className="p-8 bg-white rounded-lg shadow-lg">
                    <div>
                        <button className='text-[#9A9A9A] hover:text-[#1f1f1f]' onClick={handleClose}><IoClose /></button>
                    </div>
                    {step === 1 && (<StepOne formData={formData} handleSubmit={handleSubmit} handleInputChange={handleInputChange} />)}
                    {step === 2 && (<StepTwo formData={formData} handleSubmit={handleSubmit} handleImageUpload={handleImageUpload} /> )}
                    {step === 3 && (<StepThree eventLink={eventLink} />)}
                </div>
            </div>
        </div>
    )
};

function StepOne({ formData, handleSubmit, handleInputChange }) {
    const [errorMessage, setErrorMessage] = useState('');

    const validateForm = () => {
        if (!formData.eventName || !formData.eventStartDate || !formData.eventStartTime || !formData.eventEndDate || !formData.eventEndTime || !formData.timeZone || !formData.eventLocation || !formData.eventDescription) {
            setErrorMessage('Please fill in all fields');
            return false;
        }
        
        return true;
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (validateForm()) {
            handleSubmit(e);
        }
    };

    return (
        <>
            <div className='text-center mb-4'>
                <h2 className="text-2xl font-semibold">Create an Event</h2>
                <p className='text-xs text-[#9A9A9A]'>Fill in your event details</p>
            </div>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmitForm}>
                {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
                <TextInput
                    label="Event Name"
                    id="eventName"
                    value={formData.eventName}
                    onChange={handleInputChange}
                    width="w-full"
                    placeholder="Enter event name"
                />

                <div className="flex space-x-4">
                    <div className="w-4/6">
                        <DateInput
                            label="Event Start Date"
                            id="eventStartDate"
                            value={formData.eventStartDate}
                            onChange={handleInputChange}
                            width="w-full"
                            placeholder="Select start date"
                        />
                    </div>
                    <div className="w-2/6">
                        <TimeInput
                            label="Time"
                            id="eventStartTime"
                            value={formData.eventStartTime}
                            onChange={handleInputChange}
                            width="w-full"
                            placeholder="Select start time"
                        />
                    </div>
                </div>

                <div className="flex space-x-4">
                    <div className="w-4/6">
                        <DateInput
                            label="Event End Date"
                            id="eventEndDate"
                            value={formData.eventEndDate}
                            onChange={handleInputChange}
                            width="w-full"
                            placeholder="Select end date"
                        />
                    </div>
                    <div className="w-2/6">
                        <TimeInput
                            label="Time"
                            id="eventEndTime"
                            value={formData.eventEndTime}
                            onChange={handleInputChange}
                            width="w-full"
                            placeholder="Select end time"
                        />
                    </div>
                </div>

                <TextInput
                    label="Time Zone"
                    id="timeZone"
                    value={formData.timeZone}
                    onChange={handleInputChange}
                    width="w-full"
                    placeholder="Enter time zone"
                />

                <TextInput
                    label="Event Location"
                    id="eventLocation"
                    value={formData.eventLocation}
                    onChange={handleInputChange}
                    width="w-full"
                    placeholder="Enter event location"
                />

                <div className="flex flex-col">
                    <label className='text-sm' htmlFor="eventDescription">Event Description</label>
                    <textarea
                        id="eventDescription"
                        name="eventDescription"
                        className="border text-sm placeholder:text-sm rounded-lg px-3 py-2 h-24 resize-none"
                        value={formData.eventDescription}
                        onChange={handleInputChange}
                        placeholder="Enter event description"
                    ></textarea>
                </div>

                <button className="bg-[#0D35FB] hover:bg-blue-700 text-white text-sm p-4 rounded-md w-full">
                    Next
                </button>
            </form>
        </>
    );
}

function StepTwo({ handleSubmit, handleImageUpload }) {
    const [imagePreview, setImagePreview] = useState(null);

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
        <>
            <div className="text-center mb-4">
                <h2 className="text-2xl font-semibold">Add Event Image</h2>
                <p className="text-xs text-[#9A9A9A]">Upload an image for your event</p>
            </div>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                <label
                    className="border-dashed border-2 border-gray-300 rounded-lg h-40 flex justify-center items-center cursor-pointer p-4"
                    onDrop={handleDrop}
                    onDragOver={preventDefault}
                    onClick={handleClick}
                >
                    {imagePreview ? (
                        <img src={imagePreview} alt="Event" className="max-h-full max-w-full" />
                    ) : (
                        <p className="text-gray-500">Click or drag &amp; drop to upload</p>
                    )}
                </label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="eventImageInput"
                />
                <button type="submit" className="bg-[#0D35FB] hover:bg-blue-700 text-white text-sm p-4 rounded-md w-full">
                    Next
                </button>
            </form>
        </>
    );
}

function StepThree({ eventLink }) {


    return (
        <div className='p-8'>
            <div className='text-center'>
                <h1 className='text-4xl font-semibold'>Event Created Successfully!</h1>
                <p className='text-[#9A9A9A]'>Copy to share the link with your attendees</p>
            </div>
            <div className='flex flex-row'>
                <TextInput value={eventLink} readOnly={true} />
                <button onClick={() => {
                    navigator.clipboard.writeText(eventLink)
                }} type="submit" className="bg-[#0D35FB] hover:bg-blue-700 text-white text-sm p-4 rounded-md">
                    Copy
                </button>
            </div>
        </div>
    )
}

