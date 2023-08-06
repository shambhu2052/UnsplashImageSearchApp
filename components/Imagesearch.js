'use client'
import React,{useState,useEffect} from 'react'
import Image from 'next/image';
import axios from "axios"
import {BiSearch} from "react-icons/bi"
const Imagesearch = () => {
    const[searchimage,setSearchimage]=useState("");
    const[image,setImage]=useState([]);
    
    const fetchdata= async (query)=>{
        try{
            const res=await axios.get( `https://api.unsplash.com/search/photos?query=${query}&client_id=MybCXfzOKna-k0BuU9Yx2bibZlMdlUElNYCOuJguyYo`);
            setImage(res.data.results);
        }
        catch(error){
            console.log("Error in fatching image from unsplash image API",error);
        }
  
    }
    useEffect(()=>{
        fetchdata("dogs");
    },[]);  
const handleSearch=()=>{
    fetchdata(searchimage)
}
const handleEnterSearch=(e)=>{
if(e.key === 'Enter'){ 
fetchdata(searchimage)
}
}
  return (
    <div>
   <div className="bg-[#f5f5f5]">
    <h2 className="font-bold text-xl text-center underline text-[#4385e3] py-10">Unsplash Image Search App</h2>
    <div className='bg-[#4385e3] py-9 md:px-0 px-2'>
      <div className='container mx-auto flex flex-wrap justify-center items-center gap-3 md:gap-0'>
    <input
          type="text"
          value={searchimage}
          onChange={(e) => setSearchimage(e.target.value)}
          placeholder="Search image"
          onKeyDown={handleEnterSearch}
          className="w-full p-2 rounded-lg border-[2px] border-solid border-gray-300 focus:border-blue-500 max-w-[300px] md:max-w-[400px] outline-none transition duration-200 text-gray-700"
        />
        <button
          onClick={handleSearch}
          className="ml-2 px-4 py-2 bg-[#ED7014] text-white hover:bg-[#f5f5f5] hover:text-[#4385e3] hover:border-[#ed7014] hover:border-[2px] hover:border-solid rounded-lg flex items-center gap-2"
        >
          Search <BiSearch size={20}/>
        </button>
        </div>
    </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-4 container mx-auto my-10 px-2 md:px-0">
      

        {image.map((image) => (
          <div className="w-full h-[300px] cursor-pointer overflow-hidden rounded-lg">
          <img
            key={image.id}
            src={image.urls.small}
            alt={image.alt_description}
            className="w-full h-full  object-fill hover:scale-110 duration-100"
          />
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Imagesearch