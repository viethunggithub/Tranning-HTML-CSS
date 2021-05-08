import { useState } from 'react'

const useClock = () => {
    const [time, setTime] = useState("")
    const [ampm, setAmpm] = useState("")
    const [color, setColor] = useState("black")
    const colors = ["red", "blue", "yellow", "black"]
    const ranDomBackground = () => {
        return Math.floor(Math.random() * colors.length)
    }
    const randomcolor = colors[ranDomBackground()]
    const myFunction = () => {
        const dateInfo = new Date()

        let hour = 0
        if (dateInfo.getHours() === 12) {
            hour = 0
        } else if (dateInfo.getHours() > 12) {
            hour = dateInfo.getHours() - 12
        } else {
            hour = dateInfo.getHours()
        }

        let minute = dateInfo.getMinutes() < 0 ? parseInt("0" + dateInfo.getMinutes()) : dateInfo.getMinutes()
        let second = dateInfo.getSeconds() < 0 ? parseInt("0" + dateInfo.getSeconds()) : dateInfo.getSeconds()
        let ampm = dateInfo.getHours() > 12 ? "PM" : "AM"
        setTime(`${hour} : ${minute} : ${second}`)
        setAmpm(ampm)
        setColor("green")
    }
    setInterval(myFunction, 1000)
    return [time, ampm, color]
}
export default useClock