export default function Checkbox({checked=false, field, ...props}) {
    return (
        <>
            <input checked={checked} {...props} id={field} name={field} type="checkbox" className="bg-neutral-950 bg-white  rounded-md text-neutral-950 p-2"/>
        </>
    );
}