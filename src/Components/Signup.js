import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { addUser } from '../redux/actions/userActions';
import trees from '../assets/trees.jpg';
import bg1 from '../assets/bg1.jpeg';
import { useNavigate } from 'react-router-dom';

const Signup = ({ addUser }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [user, setUser] = useState({ username: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    dispatch(addUser(user));
    const username = user.username; 
    setUser({ username: '', password: '' });
    console.log('User data saved in local storage:', user);

    navigate('/Products');
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   addUser(user);
  //   setUser({ username: '', password: '' });
  // };

  return (
    <div className="relative">
      {/* Background Image */}
      <img
        className="w-full h-full absolute inset-0 object-cover"
        src={bg1}
        alt="/"
      />

      <div className="w-full h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]">
          <div className="w-full h-[550px] hidden md:block backdrop-blur-md backdrop-filter">
            <img className="w-full h-full" src={trees} alt="/" />
          </div>
          <div className="p-4 flex flex-col justify-around bg-white bg-opacity-70 backdrop-blur-md backdrop-filter">
            <form>
              <h2 className="text-4xl font-bold text-center mb-8">BRAND.</h2>
              <div className="">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    id="username" // Add id attribute
                    name="username"
                    value={user.username}
                    onChange={handleInputChange}
                    placeholder="Username"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    id="password" // Add id attribute
                    name="password"
                    value={user.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                  />
                </div>
                <button
                  type="submit"
                  onClick={handleButtonClick}
                  className="w-full bg-green hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Sign up
                </button>
              </div>

              <p className="text-center">Forgot Username or Password?</p>
            </form>
            <p className="text-center hover:text-blue-500 cursor-pointer">
              Already have an account?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { addUser })(Signup);
