'use client';

import { useState } from 'react';
import { FiUser, FiMail, FiPhone, FiLock, FiFileText } from 'react-icons/fi';
import Image from 'next/image';

export default function DoctorSignup() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
    contactNumber: '',
    citizenshipNumber: '',
    citizenshipPhotoFront: null,
    citizenshipPhotoBack: null,
    certifications: [],
  });

  const handleChange_citizenshipPhotoFront = async (e) => {
    const files = e.target.files;
  
    if (!files || files.length === 0) return;
  
    const file = files[0];
  
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "citizenshipPhotoFront"); // must match your Cloudinary preset
  
    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/daaizghcr/image/upload", {
        method: "POST",
        body: data,
      });
  
      const uploadedFile = await res.json();
  
      if (uploadedFile.secure_url) {
        console.log("Uploaded URL:", uploadedFile.secure_url);
        setFormData((prevData) => ({
          ...prevData,
          citizenshipPhotoFront: uploadedFile.secure_url,
        }));
      } else {
        console.error("Upload failed", uploadedFile);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleChange_citizenshipPhotoBack = async (e) => {
    const files = e.target.files;
  
    if (!files || files.length === 0) return;
  
    const file = files[0];
  
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "citizenshipPhotoBack"); // must match your Cloudinary preset
  
    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/daaizghcr/image/upload", {
        method: "POST",
        body: data,
      });
  
      const uploadedFile = await res.json();
  
      if (uploadedFile.secure_url) {
        console.log("Uploaded URL:", uploadedFile.secure_url);
        setFormData((prevData) => ({
          ...prevData,
          citizenshipPhotoBack: uploadedFile.secure_url,
        }));
      } else {
        console.error("Upload failed", uploadedFile);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleChange_certificates = async (e) => {
    const files = e.target.files;
  
    if (!files || files.length === 0) return;
  
    const uploadedUrls = [];
  
    for (const file of files) {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "citizenshipPhotoFront"); // or use a separate preset like 'certifications'
  
      try {
        const res = await fetch("https://api.cloudinary.com/v1_1/daaizghcr/image/upload", {
          method: "POST",
          body: data,
        });
  
        const uploadedFile = await res.json();
  
        if (uploadedFile.secure_url) {
          uploadedUrls.push(uploadedFile.secure_url);
        } else {
          console.error("Upload failed for a file:", uploadedFile);
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  
    // Update the form data with all uploaded certificate URLs
    setFormData((prevData) => ({
      ...prevData,
      certifications: uploadedUrls,
    }));
  
    console.log("Uploaded certificate URLs:", uploadedUrls);
  };
  

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      if (name === 'certifications') {
        setFormData({ ...formData, [name]: Array.from(files) });
      } else {
        setFormData({ ...formData, [name]: files[0] });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleCancel = () => {
    setFormData({
      username: '',
      password: '',
      email: '',
      firstName: '',
      lastName: '',
      contactNumber: '',
      citizenshipNumber: '',
      citizenshipPhotoFront: null,
      citizenshipPhotoBack: null,
      certifications: [],
    });
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full h-full">
        <div className="w-1/2 hidden md:block relative">
          <Image
            src="/agency_signup.jpg"
            alt="Signup"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-8 overflow-y-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Doctor Signup</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Username" name="username" value={formData.username} onChange={handleChange} icon={<FiUser />} />
              <Input label="Password" name="password" type="password" value={formData.password} onChange={handleChange} icon={<FiLock />} />
              <Input label="Email" name="email" type="email" value={formData.email} onChange={handleChange} icon={<FiMail />} />
              <Input label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} icon={<FiUser />} />
              <Input label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} icon={<FiUser />} />
              <Input label="Contact Number" name="contactNumber" value={formData.contactNumber} onChange={handleChange} icon={<FiPhone />} />
              <Input label="Citizenship Number" name="citizenshipNumber" value={formData.citizenshipNumber} onChange={handleChange} icon={<FiFileText />} />
            </div>

            <FileInput label="Front of Citizenship" name="citizenshipPhotoFront" onChange={handleChange_citizenshipPhotoFront} />
            <FileInput label="Back of Citizenship" name="citizenshipPhotoBack" onChange={handleChange_citizenshipPhotoBack} />
            <FileInput label="License/Certificates" name="certifications" onChange={handleChange_certificates} multiple />

            <div className="flex justify-end gap-4 pt-4">
              <button
                type="button"
                onClick={handleCancel}
                className="rounded-xl px-6 py-2 font-medium border border-gray-400 text-gray-700 hover:bg-gray-200 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-xl px-6 py-2 font-medium bg-green-600 text-white hover:bg-green-700 cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function Input({ label, name, type = 'text', value, onChange, icon }) {
  return (
    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
      <div className="flex items-center border rounded-xl px-3 py-2 shadow-sm bg-gray-50 focus-within:ring-2 focus-within:ring-green-400">
        <span className="text-gray-500 mr-2">{icon}</span>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full bg-transparent focus:outline-none text-sm"
        />
      </div>
    </div>
  );
}

function FileInput({ label, name, onChange, multiple = false }) {
  return (
    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
      <div className="border rounded-xl px-3 py-2 bg-gray-50 shadow-sm">
        <input
          type="file"
          name={name}
          accept="image/*,application/pdf"
          multiple={multiple}
          onChange={onChange}
          className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
        />
      </div>
    </div>
  );
}
