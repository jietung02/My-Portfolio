import React from 'react'
import { motion } from 'framer-motion';
import useSubmit from '@/hooks/useSubmit';

const Contact = () => {

  const { handleContactSubmit, error, success, loading } = useSubmit();

  return (
    <section id='contact' className='flex flex-col w-full bg-[#fccff6] min-h-screen items-center justify-center'>

      <h1 className='mx-auto pt-32 text-4xl font-extrabold'>Contact</h1>

      <motion.form method='POST' className='flex flex-col mx-auto my-16 items-center w-3/4 p-6' onSubmit={handleContactSubmit}>
        <div className='w-96 relative text-lg font-medium m-3'>
          <input type='text' id='name' name='name' required pattern="[A-Za-z ]{1,50}" title="Please enter a valid name (letters and spaces only, 1-50 characters)" className="block rounded-lg px-2.5 pt-5 pb-1 text-lg w-full text-custom-dark-gray bg-[#F8F8FF] focus:ring-2 focus:ring-[#22095e] focus:outline-none peer" placeholder="" />
          <label htmlFor='name' className="absolute top-4 text-sm text-custom-dark-gray duration-300 transform -translate-y-4 scale-75 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Name</label>
        </div>

        <div className='w-96 relative text-lg font-medium'>
          <input type='email' id='email' name='email' required className="block rounded-lg px-2.5 pt-5 pb-1 text-lg w-full text-custom-dark-gray bg-[#F8F8FF] focus:ring-2 focus:ring-[#22095e] focus:outline-none peer" placeholder="" />
          <label htmlFor='email' className="absolute top-4 text-sm text-custom-dark-gray duration-300 transform -translate-y-4 scale-75 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email</label>
        </div>

        <div className='w-96 relative text-lg font-medium m-3'>
          <textarea id='message' name='message' required className="block rounded-lg px-2.5 pt-5 pb-1 text-lg w-full text-custom-dark-gray bg-[#F8F8FF] focus:ring-2 focus:ring-[#22095e] focus:outline-none peer" placeholder="" maxLength={1200} rows={4}></textarea>
          <label htmlFor='message' className="absolute top-4 text-sm text-custom-dark-gray duration-300 transform -translate-y-4 scale-75 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Message</label>
        </div>

        <div className='w-96 relative text-lg font-medium m-3 '>
          <button
            type='submit'
            className="rounded-lg h-12 text-lg w-full text-white bg-[#22095e] border border-[#22095e] focus:ring-2 focus:ring-white focus:outline-none hover:bg-[#161919] hover:ring-2 hover:ring-white transition-colors duration-300"
          >
            Submit
          </button>
        </div>

      </motion.form>

    </section>

  )
}

export default Contact