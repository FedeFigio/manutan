import React, { useState } from 'react'

const Dati = () => {
  const [openRequest, setOpenRequest] = useState(true);

  return (
    <div>
      <div className='title-component'>DATI</div>
      <div className='py-3'>
        <h2 className='text-input'>Cliente</h2>
        <input className='inp w-full' name='cliente' type="text" />
      </div>
      <div className='py-3'>
        <h2 className='text-input'>Venditore</h2>
        <input className='inp w-full' name='venditore' type="text" />
      </div>
      <div className='py-3'>
        <h2 className='text-input-bold'>ESISTE UN PAVIMENTO O UNA PIATTAFORMA IN CEMENTO SU CUI FISSARE IL CONTAINER?</h2>
      </div>


      <div className='py-3 flex gap-5'>
        <div>
          <input className='radio' type="radio" name="pavimento/piattaforma" value="si" />
          <label htmlFor="">SI</label>
        </div>

        <div>
          <input className='radio' type="radio" name="pavimento/piattaforma" value="no" />
          <label htmlFor="">NO</label>
        </div>
      </div>

    </div>
  )
}

export default Dati