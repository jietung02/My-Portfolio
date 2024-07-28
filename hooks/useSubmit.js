'use client'
import { useState } from "react";

const useSubmit = () => {

  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      };
      console.log(formData)
      let response = await fetch('/api/submit-contact', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      console.log('inn')
      const result = await response.json();

      setSuccess(result.message);

      if (!response.ok) {
        throw new Error(result.message);
      }
    } catch (error) {
      setError(error.message);
    }
    finally {
      setLoading(false);
    }
  }

  return { handleContactSubmit, error, success, loading };
};

export default useSubmit;