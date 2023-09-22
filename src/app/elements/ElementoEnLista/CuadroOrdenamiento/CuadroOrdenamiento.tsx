import { ChangeEventHandler, useState } from "react";
import { DateBox } from "./DateBox";
import { PriorityNumber } from "./PriorityNumber";
type Props = {
    isDate: boolean;
    setIsDate: (is: boolean) => void;
    dateData: Date;
    setDateData: (date: Date) => void;
    priorityNumber: number;
}
export const CuadroOrdenamiento = ({isDate, setIsDate, dateData, setDateData, priorityNumber }: Props): JSX.Element  => {

    const actualizaDate: ChangeEventHandler<HTMLInputElement> = (event): void => {
        setDateData(new Date(event.target.value + 'T00:00:00'));
        setIsDate(true);
    }
    
    return (
        <div className="CuadroOrdenamiento">
            { isDate ? 
                <DateBox 
                    dateData = { dateData }
                    setIsDate = { setIsDate }/>
            :
                <PriorityNumber 
                    priorityNumber = { priorityNumber }/>
            }
            <input type="date" id="dateSelector" onChange={(event)=>actualizaDate(event)}/>

        </div>
    )
}