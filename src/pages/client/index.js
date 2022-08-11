import React, { useState } from 'react';
import ClientNavBar from '../../components/ClientNavBar';
import ClientSideBar from '../../components/ClientSideBar';
import ClientSection from '../../components/ClientSection';



const Client = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(isOpen ? false : true);
  };

  return (
    <>
    <ClientSideBar isOpen={isOpen} toggle={toggle} />
    <ClientNavBar toggle={toggle} />
    <ClientSection />
 
    </>
  );
}

export default Client;