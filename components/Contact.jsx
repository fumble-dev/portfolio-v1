import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Contact = () => {

    const [result, setResult] = React.useState("");


    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "38412c2f-36d7-4900-9357-11b36316fb32");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Message Sent Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
            <h4 className='text-center mb-2 text-3xl font-semibold'>
                Contact
            </h4>
            <h2 className='text-center text-5xl'>
                Get in touch.
            </h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>
                I would love to connect with you. Fill this form and I'll get back to you soon.
            </p>

            <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                    <input name='name' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' type="text" placeholder='Enter your name' required />
                    <input name='email' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' type="email" placeholder='Enter your email' required />
                </div>
                <textarea name='message' rows={6} placeholder='Enter your message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'></textarea>
                <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer'>
                    Submit <Image src={assets.right_arrow_white} alt='' className='w-4' />
                </button>
                <p className='mt-4'>{result}</p>
            </form>
        </div>
    )
}

export default Contact
