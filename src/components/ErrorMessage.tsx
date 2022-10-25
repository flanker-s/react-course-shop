
interface ErrorMessageProps{
    message: string
}

function ErrorMessage({message}: ErrorMessageProps) {
    return (
        <p className={'text-center text-red-600'}>{message}</p>
    )
}

export default ErrorMessage