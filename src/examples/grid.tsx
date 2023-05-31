import { useState } from "react";

export const Grid = () => {
    const [numberOfItems, setNumberOfItems] = useState<number>(0);

    return (
        <div className="grid grid-cols-5 gap-x-4 gap-y-8">
            {[...Array(numberOfItems)].map(() =>
                <div className="bg-gradient-to-br from-purple-400 to-purple-500 w-36 h-20 rounded-sm" />
            )}
            <button className="bg-gradient-to-br from-blue-400 to-blue-500 w-36 h-20 rounded-md text-lg font-bold text-white" onClick={() => setNumberOfItems(prev => prev + 1)}>Add</button>
        </div>
    );
};