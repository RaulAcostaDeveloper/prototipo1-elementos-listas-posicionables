interface Props {
    priorityNumber: number;
}
export const PriorityNumber = ({ priorityNumber }: Props): JSX.Element  => {
    return (
        <div className="info">
            <div className="PriorityNumber">{ priorityNumber }</div>
        </div>
    )
}