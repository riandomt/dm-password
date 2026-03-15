import { useState } from "react";

export default function Passphrase() {
    const [data, setData] = useState({
        words_numbers: 5,
        separator: '-',
    })


    const randomizeArray = (array) => {
        const randomArray = new Uint32Array(1);
        crypto.getRandomValues(randomArray);
        return Math.round(0 + (randomArray[0] / 0xFFFFFFFF) * (array.length - 0));
    }

    const generatePassword = async () => {
        const url = "https://gist.githubusercontent.com/borisguery/6c94d67be8f531f986fc66e066236324/raw/9ef33d513efd4fd1a36b20825d14ec34df1d54f4/dico.txt";
        let password = '';

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`State of request : ${response.status}`);
            }

            const result = await response.text();
            const words = result.split('\n');

            for (let i = 0; i < data.words_numbers; i++) {
                let random = randomizeArray(words);
                let word = words[random];
                password += word + data.separator;
            }
            return password.slice(0, -1);
        } catch (e) {
            throw new Error(`Error : ${e}`);
            return 'Generate error';
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const password = await generatePassword();
        setPassword(password);
    }

    const [password, setPassword] = useState('');

    return (
        <>
            <div className="flex flex-col items-center justify-center gap-4 min-h-screen p-12">
                <h1 className="font-bold text-xl">Genérateur de phrase de passe</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-sm">
                        <label htmlFor="words_numbers">Nombre de mots</label>
                        <input type="number"
                            name="words_numbers"
                            value={data.words_numbers}
                            onChange={(e) => setData(prev => ({ ...prev, words_numbers: e.target.value }))}
                            id="words_numbers" className="bg-neutral-950 bg-white  rounded-md text-neutral-950 p-2" />
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <label htmlFor="separator">Séparateur</label>
                        <input type="text"
                            name="separator"
                            maxLength={1}
                            value={data.separator}
                            onChange={(e) => setData(prev => ({ ...prev, separator: e.target.value }))}
                            id="separator" className="bg-neutral-950 bg-white  rounded-md text-neutral-950 p-2" />
                    </div>
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
    )
}