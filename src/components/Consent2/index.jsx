import React from 'react'

import * as Styled from './styles'

const Consent2 = () => {
  return <Styled.Container>
<Styled.SubTitle>
Consent Form for Mobile Device Information Processing
</Styled.SubTitle>
<Styled.Text>
Consent to Access to Mobile Devices (mandatory)

Luckmon Inc. (the “Company”) collects and uses your mobile device information as below.

Items of mobile device information to be collected: application installed, time spent using an application, IP address, Google Ad ID, language, OS version, device model.

Purpose of collection and use of device information: calculate the amount of time spent in a specific game to reward user with loyalty points based on game play time; to detect if a VPN or similar application is installed and used to prevent fraudulent usage of the Luckmon application; Google Ad ID and IP address are used to prevent fraudulent usage; OS version and device model are used to ensure quality of the Services.

Period of retention and use of personal information: The Company shall retain and use your personal information until you withdraw from the membership unless the retention of such personal information is required under applicable laws and regulations.
</Styled.Text>
  </Styled.Container>
}

export default Consent2;