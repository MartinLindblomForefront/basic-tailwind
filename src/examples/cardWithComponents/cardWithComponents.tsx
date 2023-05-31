import { BaseCard } from "./baseCard"
import { Details } from "./details";
import { GreenButton } from "./greenButton";
import { Price } from "./price";
import { Score } from "./score"
import { Text } from "./text";

export const CardWithComponents = () => {
    return (
        <BaseCard>
            <div className="flex flex-col gap-4 p-4 w-96">
                <img src="assets/iphone.avif" className="h-48 object-center object-scale-down" />
                <div className="flex flex-col gap-2">
                    <Text size="lg" weight="bold" value="iPhone 14 Pro Max - 5G smartphone 128GB Gold" />
                    <Score value={4.9} />
                    <Details />
                    <Price />
                    <GreenButton />
                </div>
            </div>
        </BaseCard>
    );
};