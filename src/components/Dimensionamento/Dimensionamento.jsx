import React from 'react'
import CosaSiVuoleImmagazzinare from './CosaSiVuoleImmagazzinare'
import Colore from './Colore'
import CicloMarino from './CicloMarino'

const Dimensionamento = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="titolo-sezione">DIMENSIONAMENTO</div>
            <CosaSiVuoleImmagazzinare />
            <Colore />
            <CicloMarino />
        </div>
    )
}

export default Dimensionamento