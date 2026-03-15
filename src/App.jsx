import { useState } from 'react'
import Passphrase from './pages/Passphrase'
import Password from './pages/Password'
function App() {
  const [isPassword, setIsPassword] = useState(true)
  return (
    <>
      <div className='bg-neutral-950 text-white flex flex-col items-center justify-center gap-4 min-h-screen p-12'>
        <div className='flex gap-2'>
          <button className={`cursor-pointer p-2 border-2 border-white rounded-md ${isPassword && 'bg-white text-neutral-950'} `} onClick={() => setIsPassword(true)} >Mot de passe</button>
          <button className={`cursor-pointer p-2 border border-white rounded-md ${!isPassword && 'bg-white text-neutral-950'} `} onClick={() => setIsPassword(false)}>Phrase de passe</button>
        </div>

        {isPassword ? (<Password />) : (
          <Passphrase />)}

      </div>

    </>
  )
}

export default App
