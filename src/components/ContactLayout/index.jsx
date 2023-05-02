import React, { useState } from 'react'
import Modal from 'react-modal';

import Header from '../Header';
import Footer from '../Footer';
import * as Styled from './styles'

Modal.setAppElement('#root');

const ContactLayout = () => {
  const [mailTitle, setMailTitle] = useState('');
  const [mailAddress, setMailAddress] = useState('');
  const [mailDescription, setMailDescription] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onSendMessage = (e) => {
    e.preventDefault();
    
    if(!mailTitle ){
      setIsOpenModal(true);
    }
    console.log(mailTitle);
    console.log(mailAddress);
    console.log(mailDescription);
  }

  return <>
    <Styled.Container>
    <Header />
    <Styled.Content>
      <Styled.TopWrapper>
        <Styled.TopImageWrapper>
          <img src="/About_assets/icon_02-4.png" alt="gem_image" />
          <img src="/About_assets/icon_02-2.png" alt="gem_image" />
        </Styled.TopImageWrapper>

        <h5>PARTNER WITH US</h5>

        <h1>We put your games<br />in front of the world</h1>
      </Styled.TopWrapper>

      <Styled.FormSection>
        <form>
          <label>Email</label>
          <input type="email" placeholder="Enter your Email" value={mailAddress} onChange={(e) => setMailAddress(e.target.value)}/>
        </form>

        <Styled.TitleWrapper>
          <Styled.Form>
            <label>Title</label>
            <input type="text" placeholder="Enter title" value={mailTitle} onChange={(e) => setMailTitle(e.target.value)}/>
          </Styled.Form>

          <img src="/About_assets/icon_02-3.png" alt="gem_image" />
        </Styled.TitleWrapper>

        <Styled.MessageWrapper>
          <Styled.Form>
            <label>Message</label>
            <textarea placeholder="Your message" value={mailDescription} onChange={(e) => setMailDescription(e.target.value)}/>
          </Styled.Form>

          <img src="/About_assets/icon_02.png" alt="contact_character" />
        </Styled.MessageWrapper>
      </Styled.FormSection>

      <Styled.ButtonSection>
        <img src="/About_assets/icon_02-1.png" alt="contact_character" />
        <img src="/About_assets/Group 4651.png" alt="contact_character" />

        <Styled.SendButton onClick={(e) => onSendMessage(e)}>
          Send Message
        </Styled.SendButton>
      </Styled.ButtonSection>
    </Styled.Content>

    <Footer />
  </Styled.Container>

  {/* <Styled.NeoModal
      isOpen={isOpenModal}
      onRequestClose={() => setIsOpenModal(false)}
      closeTimeoutMS={300}
    >
      아아아
    </Styled.NeoModal> */}
  </>
}

export default ContactLayout;