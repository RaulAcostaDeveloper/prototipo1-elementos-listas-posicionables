interface DateToSpanish {
    mes: string
    diaSemana: string;
}

const dateToSpanish = ( date: Date ): DateToSpanish => {
    let diaSemana: string = '';
    let mes: string = '';    
    switch (date.getMonth()) {
        case 0:
            mes = 'Enero'
            break;
        case 1:
            mes = 'Febrero'
            break;
        case 2:
            mes = 'Marzo'
            break;
        case 3:
            mes = 'Abril'
            break;
        case 4:
            mes = 'Mayo'
            break;
        case 5:
            mes = 'Junio'
            break;
        case 6:
            mes = 'Julio'
            break;
        case 7:
            mes = 'Agosto'
            break;
        case 8:
            mes = 'Septiembre'
            break;
        case 9:
            mes = 'Octubre'
            break;
        case 10:
            mes = 'Noviembre'
            break;
        case 11:
            mes = 'Diciembre'
            break;
        default:
            break;
    }
    switch (date.getDay()) {
        case 0:
            diaSemana = 'Domingo'
            break;
        case 1:
            diaSemana = 'Lunes'
            break;
        case 2:
            diaSemana = 'Martes'
            break;
        case 3:
            diaSemana = 'Miercoles'
            break;
        case 4:
            diaSemana = 'Jueves'
            break;
        case 5:
            diaSemana = 'Viernes'
            break;
        case 6:
            diaSemana = 'Sábado'
            break;
        default:
            break;
    }
    return {
        mes,
        diaSemana,
    }
}

type Props = {
    dateData: Date;
    setIsDate: (is: boolean) => void;
}

export const DateBox = ({ dateData, setIsDate }: Props): JSX.Element => {
    return (
        <div className="DateBox">
            <button className="buttonClose" onClick={ ()=> setIsDate(false) }>x</button>
            <div className="info">
                <div>{dateToSpanish(dateData).diaSemana}</div>
                <div>{dateData.getDate()}</div>
                <div>{dateToSpanish(dateData).mes}</div>
                <div>{dateData.getFullYear()}</div>
            </div>
        </div>
    )
}