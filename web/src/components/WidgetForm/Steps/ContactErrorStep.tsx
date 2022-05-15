import React from 'react';
import { CloseButton } from '../../CloseButton';

import errorImgSource from '../../../assets/error.svg';

interface ContactSuccessStepProps {
  onBack(): void;
}

export function ContactErrorStep({ onBack }: ContactSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={errorImgSource} alt="Imagem de sucesso" />

        <span className="text-xl mt-2 text-center">
          Não foi possível enviar a mensagem, por favor tente mais tarde
        </span>

        <button
          type="button"
          onClick={onBack}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
        >
          Quero tentar novamente
        </button>
      </div>
    </>
  );
}
