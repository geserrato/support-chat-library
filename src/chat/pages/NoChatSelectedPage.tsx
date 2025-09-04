
export const NoChatSelectedPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <div className="text-6xl mb-4">💬</div>
            <h2 className="text-xl font-semibold mb-2">No Chat Selected</h2>
            <p className="text-center max-w-sm">
                Select a conversation from the sidebar to start chatting, or create a new conversation.
            </p>
        </div>
    )
}


export default NoChatSelectedPage;