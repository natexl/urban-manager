import "./topTitle.less"

interface TopTitleProps {
    title: string,
    children ?: React.ReactNode 
}

const TopTitle = (props: TopTitleProps) => {

    return (
        <>
            <div className="titlw-wrap">
                <h3 className="title">{props.title}</h3>
            </div>
        </>
    )
}

export default TopTitle