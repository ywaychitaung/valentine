import { useRef, useState, type MouseEvent, type PointerEvent } from 'react'
import { HeartMark } from './HeartMark'

type AskSceneProps = {
    onAccept: () => void
}

export function AskScene({ onAccept }: AskSceneProps) {
    const stageRef = useRef<HTMLDivElement>(null)
    const [noPos, setNoPos] = useState({ x: 0, y: 0 })
    const [escaped, setEscaped] = useState(false)

    const flee = () => {
        const stage = stageRef.current
        if (!stage) return

        const { width, height } = stage.getBoundingClientRect()
        const buttonW = 96
        const buttonH = 48
        const padding = 16

        const nextX = Math.random() * Math.max(0, width - buttonW - padding * 2)
        const nextY =
            Math.random() * Math.max(0, height - buttonH - padding * 2)

        setEscaped(true)
        setNoPos({ x: nextX + padding, y: nextY + padding })
    }

    const handleNoPointer = (event: PointerEvent<HTMLButtonElement>) => {
        event.preventDefault()
        flee()
    }

    const handleNoClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        flee()
    }

    return (
        <section className="relative z-10 flex min-h-svh flex-col items-center justify-center px-6 py-16 text-center">
            <p className="font-script animate-rise text-4xl text-rose md:text-5xl">
                Valentine
            </p>

            <h1 className="font-display animate-rise mt-6 max-w-3xl text-5xl font-medium leading-[1.05] tracking-tight text-wine md:text-7xl [animation-delay:120ms]">
                Will you be my valentine?
            </h1>

            <p className="animate-rise mx-auto mt-5 max-w-md text-base font-light leading-relaxed text-wine/70 md:text-lg [animation-delay:220ms]">
                A quiet little question, waiting for a yes.
            </p>

            <div
                ref={stageRef}
                className="animate-rise relative mt-12 h-40 w-full max-w-lg md:h-44 [animation-delay:320ms]"
            >
                <div className="absolute inset-0 flex items-center justify-center gap-5">
                    <button
                        type="button"
                        onClick={onAccept}
                        className="group inline-flex min-w-28 items-center justify-center gap-2 rounded-2xl bg-wine px-7 py-3.5 text-sm font-medium tracking-wide text-blush transition duration-300 hover:-translate-y-0.5 hover:bg-rose-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose"
                    >
                        Yes
                        <HeartMark className="h-4 w-4 text-petal transition group-hover:animate-heartbeat" />
                    </button>

                    {!escaped && (
                        <button
                            type="button"
                            onMouseEnter={flee}
                            onPointerDown={handleNoPointer}
                            onClick={handleNoClick}
                            className="inline-flex min-w-28 items-center justify-center rounded-2xl border border-rose/35 bg-blush/70 px-7 py-3.5 text-sm font-medium tracking-wide text-rose-deep backdrop-blur-sm transition duration-300 hover:border-rose/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose"
                        >
                            No
                        </button>
                    )}
                </div>

                {escaped && (
                    <button
                        type="button"
                        onMouseEnter={flee}
                        onPointerDown={handleNoPointer}
                        onClick={handleNoClick}
                        className="absolute z-20 inline-flex min-w-24 items-center justify-center rounded-2xl border border-rose/35 bg-blush/85 px-6 py-3 text-sm font-medium tracking-wide text-rose-deep shadow-[0_10px_30px_-18px_rgba(92,36,54,0.45)] backdrop-blur-sm transition-all duration-300 ease-out"
                        style={{ left: noPos.x, top: noPos.y }}
                    >
                        No
                    </button>
                )}
            </div>
        </section>
    )
}
