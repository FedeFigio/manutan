import React from 'react'
import CosaSiVuoleImmagazzinare from './CosaSiVuoleImmagazzinare'
import Colore from './Colore'

const Dimensionamento = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="titolo-sezione">DIMENSIONAMENTO</div>
            <CosaSiVuoleImmagazzinare />
            <Colore />
        </div>
    )
}

export default Dimensionamento