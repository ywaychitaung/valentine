const petals = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    left: `${6 + ((i * 7) % 88)}%`,
    size: 8 + (i % 5) * 3,
    delay: `${(i * 0.7) % 8}s`,
    duration: `${10 + (i % 6) * 2}s`,
    opacity: 0.25 + (i % 4) * 0.1
}))

export function Atmosphere() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
        >
            <div className="absolute -left-24 top-[-10%] h-[55vmax] w-[55vmax] rounded-full bg-[radial-gradient(circle_at_center,rgba(243,201,210,0.7),transparent_65%)] blur-2xl" />
            <div className="absolute -right-16 bottom-[-15%] h-[50vmax] w-[50vmax] rounded-full bg-[radial-gradient(circle_at_center,rgba(201,160,122,0.28),transparent_70%)] blur-2xl" />
            <div className="absolute left-1/2 top-1/3 h-[40vmax] w-[40vmax] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(196,92,116,0.12),transparent_70%)]" />

            {petals.map(petal => (
                <span
                    key={petal.id}
                    className="animate-drift absolute top-0 block rounded-[60%_40%_60%_40%] bg-rose/70"
                    style={{
                        left: petal.left,
                        width: petal.size,
                        height: petal.size * 1.35,
                        animationDelay: petal.delay,
                        animationDuration: petal.duration,
                        opacity: petal.opacity
                    }}
                />
            ))}
        </div>
    )
}
