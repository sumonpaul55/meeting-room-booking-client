import Section from "./Section"



const Loading = () => {
    return (
        <Section>
            <div className="font-bold text-lg text-center flex items-center justify-center">
                Loading...
                <AnimateSpin />
            </div>
        </Section>
    )
}

export default Loading

export const AnimateSpin = () => {
    return <div className="size-4 border-dashed border-4 border-primary rounded-full animate-spin mt-12"></div>
}