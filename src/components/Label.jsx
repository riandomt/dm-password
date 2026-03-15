export default function Label({children,  ...props}) {
    return (
        <>
            <label {...props} className="text-sm">{children}</label>
        </>
    );
}