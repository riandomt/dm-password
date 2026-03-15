export default function Input({field, ...props}) {
    return (
        <>
            <input {...props} id={field} name={field} className="g-neutral-950 bg-white  rounded-md text-neutral-950 p-2"/>
        </>
    );
}