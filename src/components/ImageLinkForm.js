import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
   return (
      <div>
         <p className='b f3'>{'This Magic Brain will detect faces in your pictures. Give it a try.'}</p>
         <div className='center'>
            <div className='form center pa4 br3 shadow-2'>
               <input className='purple b bn br2 f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
               <button className='bn w-30 grow f4 link ph3 pv2  dib white bg-light-purple br2' onClick={onButtonSubmit}>Detect</button>
            </div>
         </div>
      </div>

   );
}

export default ImageLinkForm;