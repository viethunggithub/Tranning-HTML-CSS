import { useRef, useState } from 'react'



function useChangeColor(mauChu,mauNen) {
    const [color, setColor] = useState({
        color1: {
            color: mauNen,
            background: mauChu
        },
        color2: {
            color: mauChu,
            background: mauNen
        },
        color3: {
            color: mauChu,
            background: mauNen
        },
        color4: {
            color: mauChu,
            background: mauNen
        }
    })
    const dataRef = useRef({
        color1: {
            color: mauChu,
            background: mauNen
        },
        color2: {
            color: mauChu,
            background: mauNen
        },
        color3: {
            color: mauChu,
            background: mauNen
        },
        color4: {
            color: mauChu,
            background: mauNen
        }
    })

    const onClick = (colorNumber) => {
        setColor(dataRef.current)
        if (colorNumber === "color1") {
            setColor({
                ...dataRef.current,
                color1: {
                    color: mauNen,
                    background: mauChu
                }
            })
        } else if (colorNumber === "color2") {
            setColor({
                ...dataRef.current,
                color2: {
                    color: mauNen,
                    background: mauChu
                }
            })
        } else if (colorNumber === "color3") {
            setColor({
                ...dataRef.current,
                color3: {
                    color: mauNen,
                    background: mauChu
                }
            })
        } else {
            setColor({
                ...dataRef.current,
                color4: {
                    color: mauNen,
                    background: mauChu
                }
            })
        }

    }

    return [color, onClick]
}
export default useChangeColor;