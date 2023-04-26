import React from 'react'

import Header from '../Header';
import Footer from '../Footer';
import * as Styled from './styles'

const ContactLayout = () => {
  return <Styled.Container>
    <Header />

    <Styled.Content>
      <Styled.TopWrapper>
        <img src="/About_assets/Group 4651.png" alt="contact_character" />
        <img src="/About_assets/icon_02.png" alt="gem_image" />

        <h5>PARTNER WITH US</h5>

        <h1>Let us make gamers<br />play your games</h1>

      </Styled.TopWrapper>

      <Styled.FormSection>
        <form>
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />
        </form>

        <form>
          <label>Email</label>
          <input type="email" placeholder="Enter your Email" />
        </form>

        <form>
          <label>Message</label>
          <textarea placeholder="Your message" />
        </form>
      </Styled.FormSection>

      <Styled.SendButton>
        Send Message
      </Styled.SendButton>
    </Styled.Content>

    <Footer />
  </Styled.Container>
}

export default ContactLayout;