'use client'
import { useCallback, useEffect } from 'react'
import { motion } from 'framer-motion';
import useSubmit from '@/app/hooks/useSubmit';
import CIcon from '@coreui/icons-react';
import { cibLinkedin, cibGithub, } from '@coreui/icons';

const Contact = () => {

  const { contactData, handleOnChange, handleContactSubmit, error, success, setSuccess, loading } = useSubmit();

  const clearSuccess = useCallback(() => {
    let timer;
    if (success) {
      timer = setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [success, setSuccess]);


  useEffect(() => {
    clearSuccess();
  }, [success, clearSuccess]);


  return (
    <section id='contact' className='flex flex-col w-full bg-[#fad3f4] min-h-screen items-center justify-center'>

      <h1 className='mx-auto pt-32 text-3xl md:text-4xl font-extrabold tracking-wide'>Contact Me</h1>
      <div className='flex flex-row w-full mt-10 mx-auto justify-center gap-8'>
        <a href='https://www.linkedin.com/in/jie-min-tung-675533262/'>
          <CIcon icon={cibLinkedin} width={50} height={50} style={{ fill: '#55165e' }} />
        </a>
        <a href='https://github.com/jietung02'>
          <CIcon icon={cibGithub} width={50} height={50} style={{ fill: '#55165e' }} />
        </a>

      </div>

      {success &&
        <div className='flex flex-col w-full mt-10 mb-0 '>
          <div className='flex w-72 sm:w-96 min-h-12 text-green-700 bg-green-100 mx-auto justify-center items-center rounded-xl p-3'>
            <p className='text-center text-lg font-medium'>{success}</p>
          </div>
        </div>
      }

      {error &&
        <div className='flex flex-col w-full mt-10 mb-0 '>
          <div className='flex w-72 sm:w-96 min-h-12 text-red-700 bg-red-100 mx-auto justify-center items-center rounded-xl p-3'>
            <p className='text-center text-lg font-medium'>{error}</p>
          </div>
        </div>
      }

      <motion.form method='POST' className='flex flex-col mx-auto m-6 items-center w-3/4 p-6' onSubmit={handleContactSubmit}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.3 }}
      >
        <div className='w-72 sm:w-96 relative text-lg font-medium m-3'>
          <input type='text' id='name' name='name' onChange={handleOnChange} value={contactData.name === null ? '' : contactData.name} required pattern="[A-Za-z ]{1,50}" title="Please enter a valid name (letters and spaces only, 1-50 characters)" className="block rounded-lg px-2.5 pt-5 pb-1 text-lg w-full text-custom-dark-gray bg-[#F8F8FF] focus:ring-2 focus:ring-[#22095e] focus:outline-none peer" placeholder="" />
          <label htmlFor='name' className="absolute top-4 text-sm text-custom-dark-gray duration-300 transform -translate-y-4 scale-75 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Name</label>
        </div>

        <div className='w-72 sm:w-96 relative text-lg font-medium'>
          <input type='email' id='email' name='email' onChange={handleOnChange} value={contactData.email === null ? '' : contactData.email} required className="block rounded-lg px-2.5 pt-5 pb-1 text-lg w-full text-custom-dark-gray bg-[#F8F8FF] focus:ring-2 focus:ring-[#22095e] focus:outline-none peer" placeholder="" />
          <label htmlFor='email' className="absolute top-4 text-sm text-custom-dark-gray duration-300 transform -translate-y-4 scale-75 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email</label>
        </div>

        <div className='w-72 sm:w-96 relative text-base md:text-lg font-medium m-3'>
          <textarea id='message' name='message' onChange={handleOnChange} value={contactData.message === null ? '' : contactData.message} required className="block rounded-lg px-2.5 pt-5 pb-1 text-lg w-full text-custom-dark-gray bg-[#F8F8FF] focus:ring-2 focus:ring-[#22095e] focus:outline-none peer" placeholder="" maxLength={1200} rows={4}></textarea>
          <label htmlFor='message' className="absolute top-4 text-sm text-custom-dark-gray duration-300 transform -translate-y-4 scale-75 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Message</label>
        </div>

        <div className='w-72 sm:w-96 relative text-lg font-medium m-3 '>
          <button
            disabled={loading}
            type='submit'
            className="rounded-lg h-12 text-base md:text-lg w-full text-white bg-[#22095e] border border-[#22095e] focus:ring-2 focus:ring-white focus:outline-none hover:bg-[#161919] hover:ring-2 hover:ring-white transition-colors duration-300"
          >
            Submit
          </button>
        </div>

      </motion.form>

    </section>

  )
}

export default Contact