import { useState } from 'react';

export default function BotaoContador() {
    const [contador, setContador] = useState(0);

    return (
        <button
            onClick={() => setContador(contador + 1)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
            Clicado {contador} {contador === 1 ? 'vez' : 'vezes'}
        </button>
    );
}
