"use client"
import { createContext, useContext, useState } from "react"

const Context = createContext()

const BookAppointment = ({children}) => {

    const [isAppointment, setAppointment] = useState(false);

    return(
        <Context.Provider value={{
            isAppointment,
            setAppointment
        }}>
            {children}
        </Context.Provider>
    )
}


export default BookAppointment;

export const useCalendar = () => useContext(Context);