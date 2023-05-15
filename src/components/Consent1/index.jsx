import React from 'react';

import * as Styled from './styles';

const Consent1 = () => {
  return (
    <Styled.Container>
      <Styled.SubTitle>
        Consent Form for Personal Information Processing
      </Styled.SubTitle>
      <Styled.Text>
        Consent to collection and use of personal information (mandatory)
        Luckmon Inc. (the “Company”) collects and uses your personal information
        as below. Items of personal information to be collected: name, email,
        mailing address, age, gender, language, social media profiles,
        application installed, time spent using an application, IP address,
        Google Ad ID, OS version, device model Purpose of collection and use of
        personal information: identification, operation, management and
        improvement of the Company’s services (the “Services”), confirmation of
        intention to join the Company’s membership, provision of Services (e.g.,
        provision of mobile coupons), analysis and management of the members’
        information, provision of information related to the Services and
        processing inquiries Period of retention and use of personal
        information: The Company shall retain and use your personal information
        until you withdraw from the membership unless the retention of such
        personal information is required under applicable laws and regulations.
      </Styled.Text>
    </Styled.Container>
  );
};

export default Consent1;
