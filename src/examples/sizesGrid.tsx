export const SizesGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4 border border-gray-400 rounded-md">
            <img src="assets/iphone.avif" className="object-scale-down w-48 h-48" />
            <img src="assets/pixel.avif" className="object-scale-down w-48 h-48" />
            <img src="assets/samsung.avif" className="object-scale-down w-48 h-48" />
        </div>
    );
};