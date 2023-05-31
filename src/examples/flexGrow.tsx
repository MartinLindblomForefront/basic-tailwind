export const FlexGrow = () => {
    return (
        <div className="flex w-96 justify-start">
            <div className="flex gap-x-4 w-64 hover:w-96 justify-between transition-all ease-linear duration-300 bg-gray-500 bg-opacity-25 p-4 rounded-md">
                <div className="flex-none w-14 h-14 bg-gray-600 rounded-md" />
                <div className="flex flex-grow w-48 h-14 bg-green-600 rounded-md justify-start items-center p-4 overflow-hidden">
                    <span className="truncate">Some text is hidden</span>
                </div>
                <div className="flex-none w-14 h-14 bg-gray-600 rounded-md" />
            </div>
        </div>
    );
};