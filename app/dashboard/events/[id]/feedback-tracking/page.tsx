import FeedbackCard from '../../../../../src/components/dashboard/FeedbackCard'
import { mockMessages } from '../../../../../src/utils/mock-data';

async function getMessagesByEventId(id) {
    return []
}

export default function Page({ params } : { params : { id }}) {

    const { id } = params

    const messages : any = process.env.NODE_ENV === 'development' ? mockMessages : getMessagesByEventId(id);
    
    return (
        <div className="w-full">
            <h1>Feedback Messages</h1>
            
            <div>
                {/* {messages && messages.map((message) => (
                    <FeedbackCard key={message.id} feedback={message} />
                ))} */}
                {messages.length <= 0 && (
                    <h2 className='flex flex-col w-full h-full justify-center items-center text-center'>No feedback has been added yet.</h2>
                )}
            </div>
        </div>
    )
}

