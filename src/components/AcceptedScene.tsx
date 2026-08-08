import { HeartMark } from './HeartMark'

export function AcceptedScene() {
    return (
        <section className="relative z-10 flex min-h-svh flex-col items-center justify-center px-6 py-16 text-center">
            <div className="animate-bloom relative">
                <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(196,92,116,0.28),transparent_70%)] blur-md"
                />
                <HeartMark className="relative mx-auto h-20 w-20 animate-heartbeat text-rose md:h-24 md:w-24" />
            </div>

            <p className="font-script animate-rise mt-8 text-4xl text-rose md:text-5xl [animation-delay:120ms]">
                Forever yours
            </p>

            <h1 className="font-display animate-rise mt-4 max-w-2xl text-5xl font-medium leading-[1.05] tracking-tight text-wine md:text-7xl [animation-delay:220ms]">
                Yay — love you too
            </h1>

            <p className="animate-rise mx-auto mt-5 max-w-md text-base font-light leading-relaxed text-wine/70 md:text-lg [animation-delay:320ms]">
                The softest yes. The brightest day. You made this moment bloom.
            </p>
        </section>
    )
}
