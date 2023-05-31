export const Card = () => {
    return (
        <div className="flex border shadow-md rounded-md">
            <div className="flex flex-col gap-4 p-4 w-96">
                <img src="assets/iphone.avif" className="h-48 object-center object-scale-down" />
                <div className="flex flex-col gap-2">
                    <span className="text-lg font-bold">iPhone 14 Pro Max - 5G smartphone 128GB Gold</span>
                    <div className="font-semibold">⭐⭐⭐⭐⭐ 4.9</div>
                    <div className="flex flex-col group">
                        <ul className="list-disc px-6">
                            <li>6.7“ 120Hz Super Retina XDR-skärm</li>
                            <li>Kraftfull A16 Bionic CPU med 5G</li>
                            <li>48+12+12Mpx bakre kameror</li>
                        </ul>
                        <span className="text-sm text-gray-400 opacity-100 group-hover:opacity-0 transition-all duration-300 ease-linear">Håll för mer</span>
                        <span className="text-md h-0 group-hover:h-36 overflow-hidden transition-all duration-300 ease-linear">iPhone 14 Pro Max-smartphone erbjuder en otrolig 6,7" OLED-pekskärm med variabel 120Hz uppdateringsfrekvens, kraftfull A16 Bionic-processor med 5G-dataanslutning och branschledande IP68-vattenbeständighet.</span>
                    </div>
                    <span className="text-[40pt] text-red-600">15690:-</span>
                    <button className="bg-green-700 px-8 py-2 text-xl font-bold text-white rounded-full hover:opacity-80">Köp</button>
                </div>
            </div>
        </div >
    );
};