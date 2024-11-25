import React, { useState } from 'react';
import { Images } from './ImageApi'; // Ensure `Images` is properly exported from './ImageApi'
import Categories from './Categories';

export default function GalleryPage() {
const [selectedImage, setSelectedImage]=useState(null)
const [FilteredProducts,setFilteredProducts]=useState(Images)
const [zoom , setZoom]= useState(1)


const openImage=(src)=>{
    setSelectedImage(src)
    setZoom(1) // zoom level is 1

}

const closeModal=()=>{
    setSelectedImage(null)
    setZoom(1)
}

const zoomIn=()=> setZoom((prevZoom)=> prevZoom+0.1)
const zoomOut=()=> setZoom((prevZoom)=> Math.max(prevZoom-0.1,1))

  return (
    // main div
    <div className='bg-yellow-50 '>

<div>
  
      <h1 className='text-center text-3xl mt-1 mb-10 gallery-page'>Gallery Page</h1>
</div>

     <Categories setFilteredProducts={setFilteredProducts}/>


      {/* inner div */}
<div className=''>

{/* first image row */}
      <div className="gallery mt-[2rem] flex flex-wrap justify-evenly sm:flex-row sm:justify-evenly items-center gap-4">
        {/* mapping api uses element and index of that element that will be used here the element is image*/}
        {/* {Images?.slice(0,3).map((item, index) => (

          <div key={index} className="gallery-item transform transition-transform duration-300 hover:scale-110 cursor-pointer" onClick={()=>openImage(item.src)}>
            <img className='w-[15rem] h-[15rem] p-1 border-black border-2 ' src={item.src} alt={item.alt || `Gallery item ${index + 1}`} />

          </div>
        ))} */}

        {
          FilteredProducts.map((image,index)=>(
            <div key={index} onClick={()=>openImage(image.src)} className="gallery-item transform transition-transform duration-300 hover:scale-110 cursor-pointer border-2 border-black">
              <img className='h-[17rem] w-[20rem] ' src={image.src} alt="" />
            </div>
          ))
        }


        <div>



</div>

      </div>
{/* first image row ends */}


      {/* modal */}
      {selectedImage && (
        <div className='fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[20]'>
            <div className='relative'>


      {/* image  */}
      <img src={selectedImage} className='max-w-[90vw] max-h-[90vh] transition-transform duration-300' alt="" style={{ transform: `scale(${zoom})` }} />

      {/* zoom controls */}
      <div className='flex justify-center gap-4 mt-4 '>

        <button  className="bg-blue-500 text-white p-2 rounded z-[25] " onClick={zoomIn}>zoom in</button>
        <button  className="bg-blue-500 text-white p-2 rounded z-[25]" onClick={zoomOut}>zoom out</button>
      </div>


                {/* close button */}
                <button className='absolute top-4 right-4 text-white bg-red-500 rounded-full p-2' onClick={closeModal}>Close</button>

            </div>
        </div>
      )}
{/* modal ends */}


{/* second image row */}

      {/* <div className="gallery flex flex-col sm:flex-row sm:justify-evenly items-center gap-4 mt-[2rem] ">
       
        {Images?.slice(3,5).map((image, index) => (

          <div key={index} className="gallery-item  transform transition-transform duration-300 hover:scale-110 cursor-pointer" onClick={()=>openImage(image.src)}>
            <img className='w-[15rem] h-[15rem] p-1  border-black border-2' src={image.src} alt={image.alt || `Gallery item ${index + 1}`} />

          </div>
        ))}
      </div> */}
      
{/* second image row ends */}



{/* third image row */}
{/* <div className='gallery flex flex-col sm:flex-row sm:justify-evenly items-center gap-4 mt-[2rem]'>
   
    {Images?.slice(5,9).map((image, index)=>(
        <div key={index} className=' transform transition-transform duration-300 hover:scale-110 cursor-pointer' onClick={()=>openImage(image.src)}>
            <img className='h-[15rem] w-[15rem] border-black border-2 p-1' src={image.src} alt="" />
        </div>
    ))}

</div> */}
{/* third image row ends */}


{/* fourth image row */}
{/* <div className='flex flex-col sm:flex-row sm:justify-evenly items-center gap-4 mt-[2rem]'>
    {
        Images?.slice(9,12).map((image, index)=>(
            <div key={index} className=' transform transition-transform duration-300 hover:scale-110 cursor-pointer' onClick={()=>openImage(image.src)}>
                <img className='h-[15rem] w-[15rem] border-black border-2 p-1' src={image.src} alt="" />
            </div>

))
}
</div> */}

{/* fourth image row ends */}
     
</div>
    </div>
  );
}

