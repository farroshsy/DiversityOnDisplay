import axios from 'axios';
import Link from "next/link";
import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const API_SERVER_URL = process.env.API_SERVER_URL || '';
    const url = `https://hackathon-wehack-23.herokuapp.com/api/v1/users/login`;

    try {
      const response = await axios.post(url, { email, password });
      if (response.data.status === 'success') {
        // Handle successful login
        console.log("sukses")
        setIsLoading(false);
      } else if (response.data.status === 'failed') {
        if (response.data.reason === 'invalid_params') {
          setError('The server could not fulfill this request (`POST /api/v1/users/login`) due to 1 missing or invalid parameter.');
        } else if (response.data.reason === 'email_not_registered') {
          setError(`${email} not yet registered`);
        } else if (response.data.reason === 'password_incorrect') {
          setError('`checkPassword` failed (\"incorrect\"). Password attempt did not match already-encrypted version.');
        }
        setIsLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
     
      <button type="submit" className="bg-blue-600 rounded-xl text-sm md:min-w-[150px] md:min-h-[25px] text-center">
        <Link href='/'>Login</Link>
      </button>
      <button type="submit" className="bg-blue-600 rounded-xl text-sm md:min-w-[150px] md:min-h-[25px] text-center">
        <Link href='/register/register'>Register</Link>
      </button>
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
    </form>
  );
};

export default LoginPage;