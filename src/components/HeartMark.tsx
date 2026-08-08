type HeartMarkProps = {
    className?: string
}

export function HeartMark({ className = '' }: HeartMarkProps) {
    return (
        <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden="true"
        >
            <path
                d="M32 54S12 41.2 12 25.8C12 17.4 18.2 12 24.8 12c3.8 0 6.4 1.9 7.2 3.9.8-2 3.4-3.9 7.2-3.9C45.8 12 52 17.4 52 25.8 52 41.2 32 54 32 54Z"
                fill="currentColor"
            />
        </svg>
    )
}
