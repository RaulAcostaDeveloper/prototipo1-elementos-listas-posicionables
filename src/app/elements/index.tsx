// 'use client' front end elements
'use client'
import { ElementoEnLista } from "./ElementoEnLista/ElementoEnLista"
export const Index = ():JSX.Element => {
    return (
        <div>
            <p>Los tipos de elementos son </p>
            <p>1._prioridad/fecha: Pueden ordenarse por la fecha o por el número de prioridad que tenga (uno u otro)</p>
            <p>2._ Tipo texto puede ser usado como título o como nota</p>
            <p>3._ Cantidad puede ser tomado como dinero, tiempo, o cualquier otro elemento contable</p>
            <ElementoEnLista/>
            <ElementoEnLista/>
            <ElementoEnLista/>
        </div>
    )
}