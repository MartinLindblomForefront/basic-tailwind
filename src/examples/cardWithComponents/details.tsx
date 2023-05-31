import { Text } from "./text";

export const Details = () => {
    return (
        <div className="flex flex-col group">
            <ul className="list-disc px-6">
                <li>6.7“ 120Hz Super Retina XDR-skärm</li>
                <li>Kraftfull A16 Bionic CPU med 5G</li>
                <li>48+12+12Mpx bakre kameror</li>
            </ul>
            <Text size="sm" weight="normal" className="text-gray-400 opacity-100 group-hover:opacity-0 transition-all duration-300 ease-linear"
                value="Håll för mer" />
            <Text size="md" weight="normal" className="h-0 group-hover:h-36 overflow-hidden transition-all duration-300 ease-linear"
                value='iPhone 14 Pro Max-smartphone erbjuder en otrolig 6,7" OLED-pekskärm med variabel 120Hz uppdateringsfrekvens, kraftfull A16 Bionic-processor med 5G-dataanslutning och branschledande IP68-vattenbeständighet.' />
        </div>
    );
};