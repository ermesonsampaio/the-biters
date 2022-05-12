import React, { FormEvent, useState } from 'react';
import { api } from '../../../lib/api';
import { CloseButton } from '../../CloseButton';
import { Loading } from '../../Loading';

interface ContactContentStepProps {
  onBack(): void;
  onContactSent(): void;
}

export function ContactContentStep({ onContactSent }: ContactContentStepProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSendingMessage, setIsSendingMessage] = useState(false);

  async function handleSubmitContact(event: FormEvent) {
    event.preventDefault();
    setIsSendingMessage(true);

    await api('/messages', {
      method: 'POST',
      data: {
        content: message,
        authorName: name,
        authorEmail: email,
      },
    });

    onContactSent();
    setIsSendingMessage(false);
  }

  return (
    <>
      <header>
        <span className="text-xl leading-6 flex items-center gap-2">
          Fale Conosco
        </span>

        <CloseButton />
      </header>

      <form
        onSubmit={handleSubmitContact}
        className="my-4 gap-y-2 flex flex-col min-w-[304px] w-full"
      >
        <input
          className="w-full text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          type="text"
          placeholder="Nome"
          onChange={(event) => setName(event.target.value)}
        />

        <input
          className="w-full text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          type="email"
          placeholder="E-mail"
          onChange={(event) => setEmail(event.target.value)}
        />

        <textarea
          className="w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={(event) => setMessage(event.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <button
            type="submit"
            disabled={
              name.length < 1 ||
              email.length < 1 ||
              message.length < 1 ||
              isSendingMessage
            }
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            {!isSendingMessage ? 'Enviar' : <Loading />}
          </button>
        </footer>
      </form>
    </>
  );
}
