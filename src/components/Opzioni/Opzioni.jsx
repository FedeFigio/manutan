import React from 'react'
import SiDesideraLaMessaTerra from "./SiDesideraLaMessaTerra";
import IlluminazioneEsterna from './IlluminazioneEsterna';
import VengonoStoccateSostanzeCorrosiveAcciaio from './VengonoStoccateSostanzeCorrosiveAcciaio';
import VascaRivestitaConPolippropilene from './VascaRivestitaConPolippropilene';
import SensoreSversamentoLiquidiSullaVasca from './SensoreSversamentoLiquidiSullaVasca';

const Opzioni = () => {
  return (
    <div className="flex flex-col gap-4">
            <div className="titolo-sezione">OPZIONI</div>
            <SiDesideraLaMessaTerra/>
            <IlluminazioneEsterna/>
            <VengonoStoccateSostanzeCorrosiveAcciaio/>
            <VascaRivestitaConPolippropilene/>
            <SensoreSversamentoLiquidiSullaVasca/>
        </div>
  )
}

export default Opzioni