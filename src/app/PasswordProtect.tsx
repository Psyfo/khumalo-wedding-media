'use client';
import { useEffect, useState } from 'react';

const PasswordProtect: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if user is already authenticated and if the timestamp is still valid
    const storedAuth = localStorage.getItem('authenticated');
    const storedTimestamp = localStorage.getItem('authTimestamp');

    if (storedAuth === 'true' && storedTimestamp) {
      const now = new Date().getTime();
      const oneWeekInMs = 7 * 24 * 60 * 60 * 1000; // 1 week in milliseconds
      const authTime = parseInt(storedTimestamp);

      if (now - authTime < oneWeekInMs) {
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem('authenticated');
        localStorage.removeItem('authTimestamp');
      }
    }
  }, []);

  const handleLogin = () => {
    if (password === 'fairytale') {
      const now = new Date().getTime(); // Current timestamp
      localStorage.setItem('authenticated', 'true');
      localStorage.setItem('authTimestamp', now.toString()); // Store the current time
      setIsAuthenticated(true);
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='max-w-lg w-full p-6  rounded-lg'>
        <h1 className='text-2xl font-canela font-thin text-gray-800 mb-4 text-center'>
          Enter Password
        </h1>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='w-full px-8 py-4 mb-4 border border-gray-500 text-gray-500 font-calibri text-[1.2rem] rounded-lg focus:outline-none focus:border-orange-600 transition-all duration-300'
          placeholder='Enter password'
        />
        {error && <p className='text-red-600 mb-4 text-center'>{error}</p>}
        <button
          onClick={handleLogin}
          className='w-full border border-gray-500 text-gray-500 hover:bg-orange-600 hover:text-white font-calibri text-[1.2rem] px-8 py-4 shadow-lg transition-all duration-300'
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PasswordProtect;
