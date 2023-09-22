interface Props {
    texto: string;
    setTexto: (is: string) => void;
}
export const InputTexto = ({texto, setTexto}: Props): JSX.Element => {
    return (
        <div className="InputTexto">
            <textarea 
                maxLength={80} 
                onChange={(event)=> setTexto(event.target.value)}/>
        </div>
    )
}