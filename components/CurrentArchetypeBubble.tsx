export default function CurrentArchetypeBubble(props: { archetype: string }) {
    return (
        <div className="flex bg-purple-400 rounded items-center justify-center px-2">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="12" cy="12" r="10" fill="black" fillOpacity="0.1" />
                <circle cx="12" cy="12" r="6" stroke="black" strokeWidth="2" fill="none" />
                <circle cx="12" cy="12" r="3" fill="black" />
            </svg>
            <p className="ml-1 text-black">{props.archetype}</p>
        </div>
    );
}
