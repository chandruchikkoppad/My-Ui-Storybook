export interface OtpVerificationProps {
  /**
   * Function to handle the closing of the OTP verification popup.
   */
  handleClose: () => void;

  /**
   * Function to handle the action when user clicks on "Resend OTP".
   */
  handleResend: () => void;

  /**
   * Function to handle OTP validation on submit. Receives the entered OTP as a string.
   */
  handleOtp: (otp: string) => void;

  /**
   * Optional timeout in seconds before the user can resend the OTP again. Default is 30 seconds.
   */
  resendTimeout?: number;
}
