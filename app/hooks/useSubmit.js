'use client'
import { useState } from "react";

const useSubmit = () => {

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [contactData, setContactData] = useState({
    name: null,
    email: null,
    message: null,
  });


  const handleOnChange = (e) => {
    setError(false);
    const { name, value } = e.target;
    setContactData((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    });
  };

  const resetContactData = () => {
    setContactData({
      name: null,
      email: null,
      message: null,
    })
  }

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(false);

      let response = await fetch('/api/submit-contact', {
        method: 'POST',
        body: JSON.stringify(contactData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      setSuccess(result.message);
      resetContactData();

    } catch (error) {
      setError(error.message);
    }
    finally {
      setLoading(false);
    }
  }

  return { contactData, handleOnChange, handleContactSubmit, error, success, setSuccess, loading };
};

export default useSubmit;