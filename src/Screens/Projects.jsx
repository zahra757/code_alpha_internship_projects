import React from 'react';
import website from '../assets/website.png';
import image_gallery from '../assets/image_gallery.png';
import calculator from '../assets/calculator.png';
import todo from '../assets/todo.png';

export default function Projects() {
  return (
    <div>
      <div className="mb-6">
        <h3 className="underline text-center mt-10 font-bold text-3xl">PROJECTS</h3>
        <span className="opacity-25 flex justify-center flex-wrap font-bold text-5xl">PROJECTS</span>
      </div>

      {/* Main div starts */}
      <div className="flex flex-wrap justify-center gap-10 text-center">
        {/* First Column: E-COM WEBSITE & CALCULATOR PROJECT */}
        <div className="flex flex-col items-center w-full sm:w-[45%] lg:w-[30%]">
          <p className="mb-4">E-COM WEBSITE</p>
          <a href="https://denbite.vercel.app/" className="underline text-green-600 mb-4">
            Link of E-COM Website
          </a>
          <img src={website} className="w-full max-w-[25rem] rounded-lg mb-6" alt="E-COM Website" />

          <p className="mt-10 mb-4">CALCULATOR PROJECT</p>
          <img src={calculator} className="w-full max-w-[15rem] h-auto rounded-lg" alt="Calculator Project" />
        </div>

        {/* Second Column: IMAGE GALLERY & TODO LIST */}
        <div className="flex flex-col items-center w-full sm:w-[45%] lg:w-[30%]">
          <p className="mb-4">IMAGE GALLERY</p>
          <img src={image_gallery} className="w-full max-w-[25rem] rounded-lg mb-6" alt="Image Gallery" />

          <p className="mt-10 mb-4">TODO LIST</p>
          <img src={todo} className="w-full max-w-[15rem] h-auto rounded-lg" alt="Todo List" />
        </div>
      </div>
    </div>
  );
}
