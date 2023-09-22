import { useState } from "react";

type Symbols = '' | '$' | 'min';

interface Props {
    symbol: Symbols;
}
export const SymbolSelector = ({ symbol }: Props ): JSX.Element  => {
    const [symbolNumber, setSymbolNumber] = useState<number>(1);
    const symbols: Symbols[] = ['', '$', 'min'];
    const reduceNumber = ():void => {
        if (symbolNumber > 0) {
            setSymbolNumber(symbolNumber-1);
        } else {
            setSymbolNumber(symbols.length - 1);
        }
    }
    const incrementeNumber = ():void => {        
        if (symbolNumber < symbols.length - 1) {
            setSymbolNumber(symbolNumber+1);
        } else {
            setSymbolNumber(0);
        }
    }
    return (
        <div className="SymbolSelector">
            <button onClick={()=>reduceNumber()}>&#60;</button>
            { symbols[symbolNumber] }
            <button onClick={()=>incrementeNumber()}>&#62;</button>
        </div>
    )
}