import React, { useState, useEffect } from 'react'

export default function useLoginStatus() {
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {

        window.addEventListener("online", () => {
            setOnlineStatus(true)
        })
        
        window.addEventListener("offline", () => {
            setOnlineStatus(false)
        })

    },[])

  return onlineStatus;
}
