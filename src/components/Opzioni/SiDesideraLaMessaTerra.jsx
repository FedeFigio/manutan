import React, { useState } from 'react'

const SiDesideraLaMessaTerra = () => {
  const [data, setData] = useState({
    domandaPrincipale: "SI DESIDERA LA MESSA A TERRA ?",
    responseDomandaPrincipale: null,
    sottoDomanda: "Pinze di messa a terra da collegare a ciascun articolo",
    responseSottoDomanda: null,
  });

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <div className="text-input-domanda-principale">{data.domandaPrincipale}</div>
        <div className="flex gap-5">
          <div className="wrap-input-radio">
            <input
              type="radio"
              name="messa/terra"
              value="soloContainer"
              onClick={(e) => {
                setData((state) => {
                  return {
                    ...state,
                    responseDomandaPrincipale: e.target.value,
                  };
                });
              }}
            />
            <label className="text-input-small">Solo container</label>
          </div>
          <div className="wrap-input-radio">
            <input
              type="radio"
              name="messa/terra"
              value="containerContenuto"
              onClick={(e) => {
                setData((state) => {
                  return {
                    ...state,
                    responseDomandaPrincipale: e.target.value,
                  };
                });
              }}
            />
            <label className="text-input-small">Container e contenuto</label>
          </div>
        </div>
        {data.responseDomandaPrincipale == "containerContenuto" && <div className="w-full flex gap-5  ">
          <div>
            <div className="text-input-medium mb-2">{data.sottoDomanda}</div>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default SiDesideraLaMessaTerra