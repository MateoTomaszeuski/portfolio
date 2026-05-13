import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
    const navigate = useNavigate()

    useEffect(() => {
        // Redirect to home page
        navigate('/')
    }, [navigate])

    return null
}
