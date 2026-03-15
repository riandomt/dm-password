import { useState } from "react";
import FormLayout from "../layouts/FormLayout";
import Input from "../components/Input";
import Label from "../components/Label";
import Checkbox from "../components/Checkbox";

export default function Password() {
    const [password, setPassword] = useState('');
    const [data, setData] = useState({
        length: 9,
        lowercase: true,
        uppercase: false,
        number: false,
        special: false
    })

    const randomChar = (str) => {
        const randomArray = new Uint32Array(1);
        crypto.getRandomValues(randomArray);
        return Math.floor((randomArray[0] / 0xFFFFFFFF) * str.length);
    };

    const generatePassword = () => {
        let characters = '';
        if (data.lowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
        if (data.uppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (data.number) characters += '0123456789';
        if (data.special) characters += '!@#$%^&*()_+{}|:"<>?[]\\;\',./`~-=';

        let password = '';
        for (let i = 0; i < data.length; i++) {
            const random = randomChar(characters);
            password += characters.charAt(random);
        }

        return password;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        setPassword(generatePassword());
        console.log(password);
    }

    return (
        <>
            <FormLayout title="Génération de mot de passe" password={password} onSubmit={handleSubmit}>
                <div className="flex items-center gap-2 text-sm">
                    <Label>Longueur du mot de passe</Label>
                    <Input
                        type="number"
                        field="length"
                        min={9}
                        value={data.length}
                        onChange={(e) => setData(prev => ({ ...prev, length: e.target.value }))} />
                </div>

                <div className="flex items-center gap-2 text-sm">
                    <Label>Miniscules</Label>
                    <Checkbox
                        field="lowercase"
                        checked={data.lowercase}
                        readOnly
                    />
                </div>

                <div className="flex items-center gap-2 text-sm">
                    <Label>Majuscules</Label>
                    <Checkbox
                        field="uppercase"
                        checked={data.uppercase}
                        onChange={(e) => setData(prev => ({ ...prev, uppercase: e.target.checked }))}
                    />
                </div>

                <div className="flex items-center gap-2 text-sm">
                    <Label>Chiffres</Label>
                    <Checkbox
                        field="number"
                        checked={data.number}
                        onChange={(e) => setData(prev => ({ ...prev, number: e.target.checked }))}
                    />
                </div>

                <div className="flex items-center gap-2 text-sm">
                    <Label>Caractères spéciaux</Label>
                    <Checkbox
                        field="special"
                        checked={data.special}
                        onChange={(e) => setData(prev => ({ ...prev, special: e.target.checked }))}
                    />
                </div>
            </FormLayout>
        </>
    );
}