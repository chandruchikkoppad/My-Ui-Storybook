import React from "react";
import OtpVerification from './OtpVerification';
import { OtpVerificationProps } from './type'; 
export default {
  title: "Components/OtpVerification",
  component: OtpVerification,
};

const Template = (args: OtpVerificationProps) => <OtpVerification {...args} />;

export const Default = Template.bind({});

Default.args = {
  handleClose: () => alert('close clicked!'),
  handleResend: () => alert('resend clicked!'),
  handleOtp: () => alert('validate clicked!'),
  resendTimeout: 30,  
};
