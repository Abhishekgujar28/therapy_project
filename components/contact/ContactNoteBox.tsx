import React from 'react';

const ContactNoteBox = () => {
  return (
    <div className="bg-[#223614] p-8 md:p-12 text-white max-w-xl mr-18 w-full">
      <p className="text-sm md:text-xl leading-relaxed text-white">
        <span className="font-bold text-white">PLEASE NOTE:</span> if you opt to use a “Form Block” on
        your contact page this is not HIPAA-compliant.
        Squarespace stores data that is input into forms in
        the Marketing tab under Profiles. Instead, you can
        embed a HIPAA-compliant form, a link to your client
        portal, or simply put your email address.
      </p>
    </div>
  );
};

export default ContactNoteBox;
