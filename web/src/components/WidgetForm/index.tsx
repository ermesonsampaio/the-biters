import React, { useState } from 'react';

import { ContactContentStep } from './Steps/ContactContentStep';
import { ContactErrorStep } from './Steps/ContactErrorStep';
import { ContactSuccessStep } from './Steps/ContactSuccessStep';

export function WidgetForm() {
  const [contactSent, setContactSent] = useState(false);
  const [failed, setFailed] = useState(false);

  function handleOnBack() {
    setContactSent(false);
  }

  return (
    <div className="bg-zinc-900 z-10 backdrop-blur-sm p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {contactSent ? (
        failed ? (
          <ContactErrorStep onBack={handleOnBack} />
        ) : (
          <ContactSuccessStep onBack={handleOnBack} />
        )
      ) : (
        <ContactContentStep
          onBack={handleOnBack}
          onError={() => setFailed(true)}
          onContactSent={() => setContactSent(true)}
        />
      )}
    </div>
  );
}
