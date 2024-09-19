import { MdOutlineEmail } from "react-icons/md";
import { useRef } from "react";
import React, { useState } from "react";

export const Contact = () => {
  const form = useRef();

  return (
    <section className="experienceContainer" id="contact">
      <h2 className="experienceTitle">Contact</h2>
      <h2 className="contact_h2">
        Please feel free to reach out to me at: mishraad96 [at] gmail [dot] com
      </h2>
    </section>
  );
};
