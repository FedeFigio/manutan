import React, {useContext} from 'react';
import {Page, Text, View, Document, StyleSheet, Image} from '@react-pdf/renderer';
import Logo from "./manutan-logo.png"

// Create styles
const styles = StyleSheet.create({
    page: {
        padding: "30px 50px"
    },
    domanda: {
        fontSize: "10px",
        fontWeight: "bold"
    },
    sottoDomanda: {
        fontSize: "8px",
        fontWeight: "bold"
    },
    sottoRisposte:
        {
            gap: "50px",
            display: "flex",
            flexDirection: "row",
        },
    risposta: {
        fontSize: "8px"
    },
    gruppoDomandaRisposta: {
        display: "flex",
        flexDirection: "column",
        gap: "5px"
    },
    sezione: {
        display: "flex",
        flexDirection: "column",
        gap: "10px"
    }
    
});

// Create Document Component


const MyDocument = ({state}) => {
        
        console.log(state)
        return <Document>
            <Page size="A4" style={styles.page}>
                
                <View
                    style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                    <View>
                        <Image style={{width: "70px"}} src={Logo}/>
                    </View>
                    <View>
                        <Text> Configuratore container</Text>
                    </View>
                    <View>
                        <Text>Section #1</Text>
                    </View>
                </View>
                
                <View style={{display: "flex", flexDirection: "column", gap: "50px"}}>
                    
                    <View style={styles.sezione}>
                        <View style={styles.gruppoDomandaRisposta}>
                            <Text style={styles.domanda}>{state?.dati.domanda}</Text>
                            <Text style={styles.risposta}>{state?.dati.response}</Text>
                        </View>
                        
                        {state?.dati.response == "si" && <View style={styles.sottoRisposte}>
                            <View style={styles.gruppoDomandaRisposta}>
                                
                                <Text style={styles.sottoDomanda}>{state?.dati.sottoDomanda}</Text>
                                <Text style={styles.risposta}>{state?.dati.responseSottoDomanda}</Text>
                            </View>
                            {state?.dati.responseSottoDomanda=="no"&& <View style={styles.gruppoDomandaRisposta}>
                                <Text style={styles.sottoDomanda}>{state?.dati.domandaRilievo}</Text>
                                <Text style={styles.risposta}>{state?.dati.responseDomandaRilievo}</Text>
                            </View>}
                            <View style={styles.gruppoDomandaRisposta}>
                                <Text style={styles.sottoDomanda}>{state?.dati.dataApprontamento}</Text>
                                <Text style={styles.risposta}>{state?.dati.responseDataApprontamento}</Text>
                            </View>
                        </View>}
                    </View>
                    
                    
               
                
                
                </View>
            
            </Page>
        </Document>
    }
;

export default MyDocument