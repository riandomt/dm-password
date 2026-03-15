export default function FormLayout({ title, password, onSubmit, children, ...props }) {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-4 min-h-screen p-12">
                <h2 className="font-bold text-xl">{title}</h2>
                <form {...props} className="flex flex-col gap-2" onSubmit={onSubmit}>
                    {children}
                    <div>
                        <button
                            type="submit" className="cursor-pointer p-2 bg-white  rounded-md text-neutral-950">
                            Genérer
                        </button>
                    </div>
                </form>


                <output className="bg-white text-neutral-950 p-2">{password}</output>
            </div>
        </>
    );
}