import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { SymbolSelector } from "./SymbolSelector";
type Symbols = '' | '$' | 'min';
interface Props {
    setNumero: (numero: number) => void;
    symbol:Symbols;
}
export const InputNumero = ({ setNumero, symbol }: Props): JSX.Element  => {
    const [ actualValue, setActualValue ] = useState<number|string>('');

    const actualizaNumero: ChangeEventHandler<HTMLInputElement> = (event): void => {
        // string del número viene con comas por el .toLocaleString('en-US')
        const numeroSinComas: string = event.target.value.replace(/,/g, "")
        const valor: number = Number.parseInt(numeroSinComas);
        if (isNaN(valor)) {
            setNumero(Number.parseInt("0"));
            setActualValue('');
        } else {
            if (valor < 100000000) {
                setNumero(valor);
                setActualValue(valor.toLocaleString('en-US'));
            }
        }        
    }

    return (
        <div className="InputNumero">
            <SymbolSelector symbol = { symbol }/>
            <input 
                type="text"
                onChange={(event)=> actualizaNumero(event)}
                value={actualValue}/>
        </div>
    )
}