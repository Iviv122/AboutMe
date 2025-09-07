import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

type Props = {
    className?: string
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const chars = "$#%&@*!"
const length = 7

export default function Uknown({ className }: Props) {

    const [curr, SetCurr] = useState<string>("");

    function Move() {
        SetCurr(prev => chars.charAt(getRandomInt(chars.length)) + prev.slice(0,length-1));

        setTimeout(() => {
            Move()
        }, 150);
    }

    useEffect(() => {

        var n = ""
        for (let index = 0; index < length; index++) {
            const element = chars.charAt(getRandomInt(chars.length));
            n += element;
        }
        SetCurr(n);

        Move()
    }, []);

    return (
        <span
            className={cn(
                className,
            )}
        >
            {curr}
        </span>
    );
}