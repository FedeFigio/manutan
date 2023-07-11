import React from 'react';
import ResistenteAlFuoco from "./ResistenteAlFuoco";
import NecessitaDiClimatizzazione from './NecessitaDiClimatizzazione';
import NecessitaDiVentilazione from './NecessitaDiVentilazione';
import SiDesideraIlluminazioneInterna from './SiDesideraIlluminazioneInterna';
import SiDesideraConformitaAllaDirettivaAtex from './SiDesideraConformitaAllaDirettivaAtex';

function InformazioniSulContainerDaProdurre(props) {
    return (
        <div className="flex flex-col gap-4">
            <div className="titolo-sezione">INFORMAZIONI SUL CONTAINER DA PRODURRE</div>
            <ResistenteAlFuoco />
            <NecessitaDiClimatizzazione />
            <NecessitaDiVentilazione />
            <SiDesideraIlluminazioneInterna />
            <SiDesideraConformitaAllaDirettivaAtex />
        </div>
    );
}

export default InformazioniSulContainerDaProdurre;