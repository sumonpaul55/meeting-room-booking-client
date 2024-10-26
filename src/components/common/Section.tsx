import { ReactNode } from "react"


const Section = (props: { children: ReactNode, className?: string }) => {
    const { children, className } = props
    return (
        <section className={`px-3 md:px-0 ${className ? className : null}`}>
            <div className="container mx-auto">
                {children}
            </div>
        </section>
    )
}

export default Section