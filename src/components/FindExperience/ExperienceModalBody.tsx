import Image, { StaticImageData } from 'next/image'
import outdoors2 from '../../assets/outdoors-2.png'
import outdoors from '../../assets/outdoors.jpg'
import { CalendarIcon, ClockIcon, MapPinIcon, UserIcon } from '@heroicons/react/24/solid'
import { Experience } from '@prisma/client'
import { useState } from 'react'

export interface ModalActionButton {
    buttonText: string;
    buttonColor: string;
    buttonAction: () => void;
}

export interface ExperienceModalProps {
    experience: Experience;
    modalActionButton?: ModalActionButton;
    hideModal?: () => void;
}

export default function ExperienceModalBody({experienceModalProps} : {experienceModalProps: ExperienceModalProps}) {

    const dateDisplayOptions = {
        weekday: 'long',
        month: 'short',
        day: 'numeric'
    } as const;

    const [activeImage, setActiveImage] = useState(outdoors);

    const handleClickImage = function (image: StaticImageData) {
        setActiveImage(image);
    }

    return (
        <>
            {/* MAIN SCROLLABLE CONTENT */}
            <div className='flex flex-grow overflow-y-scroll'>
                <div className='basis-full'>

                    {/* IMAGES PORTION */}
                    <div className='m-10 grid grid-cols-4 gap-4'>
                        <div className='overflow-hidden max-h-60 col-span-4 lg:col-span-2 lg:row-span-2 lg:rounded-l-3xl'>
                            <Image src={activeImage} alt="outdoors"/>
                        </div>
                        <div className='overflow-hidden max-h-28'>
                            <Image src={outdoors} alt="outdoors" onClick={() => handleClickImage(outdoors)}/>
                        </div>
                        <div className='overflow-hidden max-h-28 lg:rounded-tr-3xl'>
                            <Image src={outdoors2} alt="outdoors" onClick={() => handleClickImage(outdoors2)}/>
                        </div>
                        <div className='overflow-hidden max-h-28'>
                            <Image src={outdoors2} alt="outdoors" onClick={() => handleClickImage(outdoors2)}/>
                        </div>
                        <div className='overflow-hidden max-h-28 lg:rounded-br-3xl'>
                            <Image src={outdoors2} alt="outdoors" onClick={() => handleClickImage(outdoors2)}/>
                        </div>
                    </div>

                    {/* DESCRIPTION PORTION */}
                    <div className='mx-10 flex flex-col lg:flex-row'>
                        <div className='basis-2/3 mr-3 lg:order-0 order-2'>
                            <h3 className='text-xl font-bold'>Description</h3>
                            <p>{experienceModalProps.experience.description}</p>
                            <br />
                            <h3 className='text-xl font-bold'>Details</h3>
                            <ul>
                                <li>{experienceModalProps.experience.guestRequirements}</li>
                                <li>{experienceModalProps.experience.provided}</li>
                                <li>{experienceModalProps.experience.activityLevel}</li>
                                <li>{experienceModalProps.experience.skillLevel}</li>
                            </ul>
                            <br />
                            <h3 className='text-xl font-bold'>Itinerary</h3>
                            <p>{experienceModalProps.experience.timeline}</p>
                            <br />
                            <h3 className='text-xl font-bold'>Location Notes</h3>
                            <p>{experienceModalProps.experience.locationDescription}</p>
                            <br />
                            <br />
                        </div>
                        <div className="lg:order-2 grid grid-cols-5 basis-1/3 items-center pb-5 mb-5 border-b-2 lg:border-b-0 lg:border-l-2 lg:pl-5 h-full gap-y-3">
                            <ClockIcon className='w-5'/> <span className='col-span-4'>{experienceModalProps.experience.startTime} - {experienceModalProps.experience.endTime}</span>
                            <MapPinIcon className='w-5'/> <span className='col-span-4'>{experienceModalProps.experience.location?.toString()}</span>
                            <CalendarIcon className='w-5'/> <span className='col-span-4'>{experienceModalProps.experience.date.toLocaleDateString("en-US", dateDisplayOptions)}</span>
                            <UserIcon className='w-5'/> <span className='col-span-4'>Ages {experienceModalProps.experience.minAge}+</span>
                        </div>
                        
                    </div>
                </div>
            </div>

            {/* BOTTOM BAR */}
            <div className='py-4 pl-10 pr-6 flex justify-between items-center border-t'>
                <div className='text-3xl font-bold'>${experienceModalProps.experience.price}</div>
                <div className=''>
                    <UserIcon className='w-5 inline border border-black rounded-full mr-2'/>
                    <span>9/{experienceModalProps.experience.maxAttendees} Spots Filled</span></div>
                {experienceModalProps.modalActionButton ? (
                    <>
                        <button 
                            className={`${experienceModalProps.modalActionButton.buttonColor} text-white p-3 rounded-lg`}
                            onClick={() => experienceModalProps.modalActionButton?.buttonAction()}
                        >
                            {experienceModalProps.modalActionButton.buttonText}
                        </button>
                    </>
                ) : (
                    <button 
                        className='bg-amber-400 text-white p-3 rounded-lg'
                        onClick={() => {}}
                    >
                        Close
                    </button>
                )}
                
            </div>
        </>
    );
}