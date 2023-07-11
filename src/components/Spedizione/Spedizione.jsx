import React from 'react'
import TipoSpedizione from './TipoSpedizione'
import PosizionamentoContainerCaricoDi from './PosizionamentoContainerCaricoDi'
import NeccessitaFormazioneInLocoSuComeOperareImpianto from './NeccessitaFormazioneInLocoSuComeOperareImpianto'

const Spedizione = () => {
  return (
    <div className="flex flex-col gap-4">
    <div className="titolo-sezione">SPEDIZIONE</div>
    <TipoSpedizione/>
    <PosizionamentoContainerCaricoDi/>
    <NeccessitaFormazioneInLocoSuComeOperareImpianto/>

</div>
  )
}

export default Spedizione