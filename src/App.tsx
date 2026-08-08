import { useState } from 'react'
import { Atmosphere } from './components/Atmosphere'
import { AskScene } from './components/AskScene'
import { AcceptedScene } from './components/AcceptedScene'

export default function App() {
    const [accepted, setAccepted] = useState(false)

    return (
        <main className="relative min-h-svh overflow-hidden bg-[linear-gradient(165deg,#fff8f7_0%,#f8e9ec_42%,#f3d5dc_100%)]">
            <Atmosphere />
            {accepted ? (
                <AcceptedScene />
            ) : (
                <AskScene onAccept={() => setAccepted(true)} />
            )}
        </main>
    )
}
