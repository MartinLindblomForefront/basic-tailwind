type ScoreProps = {
    value: number
}

export const Score = ({ value }: ScoreProps) => {
    return (
        <span className="font-semibold">{[...Array(Math.round(value))].map(() => "⭐")} {value.toPrecision(2)}</span>
    );
};