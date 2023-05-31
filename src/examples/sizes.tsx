export const Sizes = () => {
    return (
        <div className="flex p-4 border border-gray-400 rounded-md">
            <img src="assets/iphone.avif" className="object-scale-down w-48 h-48" />
            <img src="assets/pixel.avif" className="object-scale-down w-48 h-48 hidden md:block" />
            <img src="assets/samsung.avif" className="object-scale-down w-48 h-48 hidden lg:block" />
        </div>
    );
};