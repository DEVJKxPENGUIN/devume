
interface Button1Props {
    children: string;
    href: string;
    className?: string;
}

const Button1 = ({ children, href, className = '' }: Button1Props) => {
    return (
        <a href={href} className={`flex overflow-hidden items-center text-sm
    font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
    disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow
    hover:bg-black/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative
    w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2
    hover:ring-black hover:ring-offset-2 ${className}`}>
            <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10
      transition-all duration-1000 ease-out group-hover:-translate-x-40" />
            <div className="flex items-center">
                <span className="ml-1 text-white">{children}</span>
            </div>
            <svg
                className="w-4 h-4 text-white ml-1 opacity-0 transform translate-x-[-10px] transition-all
        duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
            </svg>
        </a>
    );
}

export default Button1;
