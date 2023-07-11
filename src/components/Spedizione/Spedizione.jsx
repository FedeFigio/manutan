import React from 'react'
import TipoSpedizione from './TipoSpedizione'
import PosizionamentoContainerCaricoDi from './PosizionamentoContainerCaricoDi'

const Spedizione = () => {
  return (
    <div className="flex flex-col gap-4">
    <div className="titolo-sezione">SPEDIZIONE</div>
    <TipoSpedizione/>
    <PosizionamentoContainerCaricoDi/>

</div>
  )
}

export default Spedizione