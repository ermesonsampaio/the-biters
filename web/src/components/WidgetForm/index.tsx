import React, { useState } from 'react';

import { ContactContentStep } from './Steps/ContactContentStep';
import { ContactSuccessStep } from './Steps/ContactSuccessStep';

export function WidgetForm() {
  const [contactSent, setContactSent] = useState(false);

  function handleOnBack() {
    setContactSent(false);
  }

  return (
    <div className="bg-zinc-900 z-10 backdrop-blur-sm p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {contactSent ? (
        <ContactSuccessStep onBack={handleOnBack} />
      ) : (
        <ContactContentStep
          onBack={handleOnBack}
          onContactSent={() => setContactSent(true)}
        />
      )}
    </div>
  );
}
