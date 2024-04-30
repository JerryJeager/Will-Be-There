export default function CardColumn({ ...props }) {
    
    const { title, subtitle, icon, alignItems } = props;

    return (
        <div className={`w-full md:w-1/3 flex flex-col items-center justify-center`} style={{ alignItems: `${alignItems}`}}>
            <div className="flex flex-row gap-2 items-center">{icon} {title}</div>
            <small className="text-xs">
                {subtitle}
            </small>
        </div>
    )
}