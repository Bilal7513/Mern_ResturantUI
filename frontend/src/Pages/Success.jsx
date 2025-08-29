import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(timeoutId);
          navigate("/");
        }
        return prev - 1;
      });
    }, 1000)
    return () => clearInterval(timeoutId);
  }, [navigate]);

  return (
    <section className='notFound'>
      <div className='container'>
        <img src="/sandwich.png" alt="success" />
        <h1>Redirecting to home in {countdown} seconds...</h1>
        <Link to={"/"}>Back to Home{" "} <HiOutlineArrowNarrowRight /></Link>
      </div>
    </section>
  )
}

export default Success