
interface ErrorMessageProps {
	message: string;
}
export default function ErrorMessage ({ message }: ErrorMessageProps){
	return (
		<span className="text-red-600 text-xs">{message}</span>
	)
}