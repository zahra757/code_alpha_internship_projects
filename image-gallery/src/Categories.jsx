import React, { useState } from 'react'
import { Images } from './ImageApi'
export default function Categories({setFilteredProducts}) {
    const [category, setCategory]=useState('ALL')
   

  
    const handleFilterByCategory=(selectedCategory)=>{
setCategory(selectedCategory)
if(selectedCategory==='ALL'){
    setFilteredProducts(Images)

}
else{
    const Filtered=Images.filter(image=> image.category===selectedCategory)
    setFilteredProducts(Filtered)
}
    }


  return (


    <div>
        
     
<div  className='flex justify-evenly'>

    

<button onClick={()=>handleFilterByCategory('ALL')}>ALL</button>
<button onClick={()=>handleFilterByCategory('art')}>ART</button>
<button onClick={()=>handleFilterByCategory('nature')}>NATURE</button>
<button onClick={()=>handleFilterByCategory('food')}>FOOD</button>
<button onClick={()=>handleFilterByCategory('architecture')}>ARCHITECTURE</button>

</div>
      





    </div>
  )
}
