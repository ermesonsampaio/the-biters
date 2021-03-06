import React from 'react';
import { CloseButton } from '../../CloseButton';

import successImgSource from '../../../assets/success.svg';

interface ContactSuccessStepProps {
  onBack(): void;
}

export function ContactSuccessStep({ onBack }: ContactSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successImgSource} alt="Imagem de sucesso" />

        <span className="text-xl mt-2">Agradecemos o contato!</span>

        <button
          type="button"
          onClick={onBack}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
        >
          Quero enviar outra mensagem
        </button>
      </div>
    </>
  );
}
