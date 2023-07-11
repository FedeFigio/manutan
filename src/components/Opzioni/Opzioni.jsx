import React from 'react'
import SiDesideraLaMessaTerra from "./SiDesideraLaMessaTerra";
import IlluminazioneEsterna from './IlluminazioneEsterna';
import VengonoStoccateSostanzeCorrosiveAcciaio from './VengonoStoccateSostanzeCorrosiveAcciaio';
import VascaRivestitaConPolippropilene from './VascaRivestitaConPolippropilene';
import SensoreSversamentoLiquidiSullaVasca from './SensoreSversamentoLiquidiSullaVasca';
import ConnessioneRemotaPerAccedereAllaDiagnostica from './ConnessioneRemotaPerAccedereAllaDiagnostica';
import SensoreRilevamentoVapori from './SensoreRilevamentoVapori';
import AspiratoreAria from './AspiratoreAria';
import DisplayEsternoPerTemperaturaInterna from './DisplayEsternoPerTemperaturaInterna';
import SensoreFumo from './SensoreFumo';
import AllarmePortaApertaDopoMinuti from './AllarmePortaApertaDopoMinuti';
import ImpiantoAutomaticoDiSoppressioneDelFuoco from './ImpiantoAutomaticoDiSoppressioneDelFuoco';

const Opzioni = () => {
  return (
    <div className="flex flex-col gap-4">
            <div className="titolo-sezione">OPZIONI</div>
            <SiDesideraLaMessaTerra/>
            <IlluminazioneEsterna/>
            <VengonoStoccateSostanzeCorrosiveAcciaio/>
            <VascaRivestitaConPolippropilene/>
            <SensoreSversamentoLiquidiSullaVasca/>
            <ConnessioneRemotaPerAccedereAllaDiagnostica/>
            <SensoreRilevamentoVapori/>
            <AspiratoreAria/>
            <DisplayEsternoPerTemperaturaInterna/>
            <SensoreFumo/>
            <AllarmePortaApertaDopoMinuti/>
            <ImpiantoAutomaticoDiSoppressioneDelFuoco/>
        </div>
  )
}

export default Opzioni