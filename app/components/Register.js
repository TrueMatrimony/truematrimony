"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";

const Register = () => {
  const [inputs, setInputs] = useState({});
  const [message, setMessage] = useState("");
  const handleInput = (e) => {
    setInputs((state) => {
      return { ...state, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      fetch(process.env.NEXT_PUBLIC_API_URL + "/register", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputs),
      })
        .then((res) => res.json())
        .then((res) => {
          setMessage(res.message);
          setInputs({});
          setTimeout(() => {
            setMessage("");
          }, 2000);
        });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">      
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
          <h2 className="text-4xl font-semibold text-center mb-8">
            Register
            <Image
              src="./images/Matrimony.png"
              alt="Description of the image"
              width={500}
              height={300}
            />
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="col-span-2">
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={inputs.name || ""}
                onChange={handleInput}
                className="w-full p-2 mt-1 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium">Gender</label>
              <select
                name="gender"
                id="gender"
                value={inputs.gender || ""}
                onChange={handleInput}
                className="w-full p-2.5 mt-1 border border-gray-300 rounded"
                required
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="col-span-3">
              <label className="block text-sm font-medium">Date of Birth</label>
              <input
                type="date"
                name="dob"
                id="dob"
                value={inputs.dob || ""}
                onChange={handleInput}
                className="w-full p-2 mt-1 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium">Age</label>
              <input
                type="text"
                name="age"
                id="age"
                value={inputs.age || ""}
                onChange={handleInput}
                className="w-full p-2 mt-1 border border-gray-300 rounded"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={inputs.email || ""}
                onChange={handleInput}
                className="w-full p-2 mt-1 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium">Mobile Number</label>
              <input
                type="text"
                name="mobilenum"
                id="mobilenum"
                value={inputs.mobilenum || ""}
                onChange={handleInput}
                className="w-full p-2 mt-1 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium">
                WhatsApp Number
              </label>
              <input
                type="text"
                name="whatsappmobilenum"
                id="whatsappmobilenum"
                value={inputs.whatsappmobilenum || ""}
                onChange={handleInput}
                className="w-full p-2 mt-1 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium">Town/City</label>
              <input
                type="text"
                name="towncity"
                id="towncity"
                value={inputs.towncity || ""}
                onChange={handleInput}
                className="w-full p-2 mt-1 border border-gray-300 rounded"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium">District</label>
              <input
                type="text"
                name="district"
                id="district"
                value={inputs.district || ""}
                onChange={handleInput}
                className="w-full p-2 mt-1 border border-gray-300 rounded"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium">State</label>
              <input
                type="text"
                name="state"
                id="state"
                value={inputs.state || ""}
                onChange={handleInput}
                className="w-full p-2 mt-1 border border-gray-300 rounded"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium">Nationality</label>
              <input
                type="text"
                name="nationality"
                id="nationality"
                value={inputs.nationality || ""}
                onChange={handleInput}
                className="w-full p-2 mt-1 border border-gray-300 rounded"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium">Pin Code</label>
              <input
                type="text"
                name="pincode"
                id="pincode"
                value={inputs.pincode || ""}
                onChange={handleInput}
                className="w-full p-2 mt-1 border border-gray-300 rounded"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium">Religion</label>
              <input
                type="text"
                name="religion"
                id="religion"
                value={inputs.religion || ""}
                onChange={handleInput}
                className="w-full p-2 mt-1 border border-gray-300 rounded"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium">Community</label>
              <input
                type="text"
                name="community"
                id="community"
                value={inputs.community || ""}
                onChange={handleInput}
                className="w-full p-2 mt-1 border border-gray-300 rounded"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium">Sub Caste</label>
              <input
                type="text"
                name="subcaste"
                id="subcaste"
                value={inputs.subcaste || ""}
                onChange={handleInput}
                className="w-full p-2 mt-1 border border-gray-300 rounded"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium">Height</label>
              <input
                type="text"
                name="height"
                id="height"
                value={inputs.height || ""}
                onChange={handleInput}
                className="w-full p-2 mt-1 border border-gray-300 rounded"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium">Weight</label>
              <input
                type="text"
                name="weight"
                id="weight"
                value={inputs.weight || ""}
                onChange={handleInput}
                className="w-full p-2 mt-1 border border-gray-300 rounded"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium">Color</label>
              <input
                type="text"
                name="color"
                id="color"
                value={inputs.color || ""}
                onChange={handleInput}
                className="w-full p-2 mt-1 border border-gray-300 rounded"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium">Raasi</label>
              <input
                type="text"
                name="raasi"
                id="raasi"
                value={inputs.raasi || ""}
                onChange={handleInput}
                className="w-full p-2 mt-1 border border-gray-300 rounded"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium">Star</label>
              <input
                type="text"
                name="star"
                id="star"
                value={inputs.star || ""}
                onChange={handleInput}
                className="w-full p-2 mt-1 border border-gray-300 rounded"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium">Category</label>
              <input
                type="text"
                name="marriagecategory"
                id="marriagecategory"
                value={inputs.marriagecategory || ""}
                onChange={handleInput}
                className="w-full p-2 mt-1 border border-gray-300 rounded"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium">Password</label>
              <input
                type="text"
                name="password"
                id="password"
                value={inputs.password || ""}
                onChange={handleInput}
                className="w-full p-2 mt-1 border border-gray-300 rounded"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium">
                Confirm Password
              </label>
              <input
                type="text"
                name="cpassword"
                id="cpassword"
                value={inputs.cpassword || ""}
                onChange={handleInput}
                className="w-full p-2 mt-1 border border-gray-300 rounded"
              />
            </div>

            {/* Repeat for remaining fields */}

            <div className="col-span-full mt-4">
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>

            <div className="col-span-full mt-8"></div>
          </form>
        </div>      
      {message && <p>{message}</p>}
    </main>
  );
};

export default Register;
