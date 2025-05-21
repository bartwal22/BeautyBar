import React from "react";
import ContactHeader from "./ContactHeader";
import { ContactPara } from "./ContactPara";
import ContactLogo from "./ContactLogo";
import ContactMess from "./ContactMess";
export default function ContactPage() {
  return (
    <div>
      <ContactHeader />
      <ContactPara />
      <ContactLogo />
      <ContactMess />
    </div>
  );
}
