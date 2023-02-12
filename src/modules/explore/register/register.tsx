// import React, { useState } from 'react';
// import axios from 'axios';

// const Register: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     gender: ''
//   });

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     const url = process.env.API_SERVER_URL + '/api/v1/users/register';
//     try {
//       const response = await axios.post(url, formData);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error.response.data);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={formData.password}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="gender">Gender:</label>
//         <input
//           type="text"
//           id="gender"
//           name="gender"
//           value={formData.gender}
//           onChange={handleInputChange}
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default Register;
