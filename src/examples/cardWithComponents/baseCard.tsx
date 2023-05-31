type BaseCardProps = {
    children: JSX.Element | JSX.Element[],
}

export const BaseCard = ({ children }: BaseCardProps) => {
    return (
        <div className="flex border shadow-md rounded-md">
            {children}
        </div>
    );
};