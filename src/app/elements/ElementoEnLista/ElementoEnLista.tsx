import { CuadroOrdenamiento } from "./CuadroOrdenamiento/CuadroOrdenamiento"
import { InputNumero } from "./InputNumero/InputNumero";
import { InputTexto } from "./InputTexto/InputTexto"
import { useState } from "react";
type Symbols = '' | '$' | 'min';
export const ElementoEnLista = (): JSX.Element => {
    const [ isDate, setIsDate ] = useState<boolean>(true);
    const [ dateData, setDateData ] = useState<Date>(new Date());
    const [ priorityNumber, setPriorityNumber ] = useState<number>(0);
    const [ texto, setTexto ] = useState<string>('');
    const [ numero, setNumero ] = useState<number>(0);
    const [ symbol, setSymbol ] = useState<Symbols>('$');
    console.log(numero);
    
    return (
        <div className="ElementoEnLista">
            <CuadroOrdenamiento 
                isDate = { isDate }
                setIsDate = { setIsDate }
                dateData = { dateData }
                setDateData = { setDateData }
                priorityNumber = { priorityNumber }/>
            <InputTexto 
                texto = { texto }
                setTexto = { setTexto }/>
            <InputNumero
                setNumero = { setNumero }
                symbol = { symbol }/>
        </div>
    )
}