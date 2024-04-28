export default function FeedbackCard({ message }) {

    const { title, content, timeSent } = message

    return (
        <>
            <div className="flex flex-col space-y-4">
                <div className="flex flex-row justify-between">
                        <h2>
                            {title}
                        </h2>
                        <small>
                            {timeSent}
                        </small>
                </div>
                <div>
                    {content}
                </div>
            </div>
        </>
    )
}

