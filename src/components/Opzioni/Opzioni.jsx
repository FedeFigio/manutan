import React from 'react'
import SiDesideraLaMessaTerra from "./SiDesideraLaMessaTerra";
import IlluminazioneEsterna from './IlluminazioneEsterna';
import VengonoStoccateSostanzeCorrosiveAcciaio from './VengonoStoccateSostanzeCorrosiveAcciaio';

const Opzioni = () => {
  return (
    <div className="flex flex-col gap-4">
            <div className="titolo-sezione">OPZIONI</div>
            <SiDesideraLaMessaTerra/>
            <IlluminazioneEsterna/>
            <VengonoStoccateSostanzeCorrosiveAcciaio/>
        </div>
  )
}

export default Opzioni