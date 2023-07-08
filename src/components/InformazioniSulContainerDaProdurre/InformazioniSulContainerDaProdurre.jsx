import React from 'react';
import ResistenteAlFuoco from "./ResistenteAlFuoco";

function InformazioniSulContainerDaProdurre(props) {
    return (
        <div className="flex flex-col gap-4">
            <div className="titolo-sezione">INFORMAZIONI SUL CONTAINER DA PRODURRE</div>
            <ResistenteAlFuoco/>
        </div>
    );
}

export default InformazioniSulContainerDaProdurre;