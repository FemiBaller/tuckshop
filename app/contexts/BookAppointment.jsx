"use client"
import { createContext, useContext, useState } from "react"

const Context = createContext()

const BookAppointment = ({children}) => {

    const [isAppointment, setAppointment] = useState(false);

    const handleBookAppointment = () => {
        setAppointment(true)
      }

    return(
        <Context.Provider value={{
            isAppointment,
            setAppointment,
            handleBookAppointment
        }}>
            {children}
        </Context.Provider>
    )
}


export default BookAppointment;

export const useCalendar = () => useContext(Context);