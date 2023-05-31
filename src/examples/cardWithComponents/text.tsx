type TextProps = {
    size: "sm" | "md" | "lg",
    weight: "normal" | "semibold" | "bold",
    value: string
    className?: string
}

export const Text = ({ size, weight, value, className }: TextProps) => {
    return (
        <span className={`text-${size} font-${weight} ${className ?? ""}`}>{value}</span>
    );
};