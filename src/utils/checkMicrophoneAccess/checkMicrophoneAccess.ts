import { toast } from '../../components/Toastify/Toastify';
export const checkMicrophoneAccess = async (
  handleMicToggle: Function,
  {
    requestDeniedMsg,
    notSupportedMsg,
    micAccessDeniedMsg,
  }: {
    requestDeniedMsg: string;
    notSupportedMsg: string;
    micAccessDeniedMsg: string;
  }
) => {
  try {
    const permissionStatus = await navigator?.permissions.query({
      name: 'microphone' as PermissionName,
    });

    if (permissionStatus?.state === 'granted') {
      handleMicToggle();
    } else if (permissionStatus?.state === 'prompt') {
      try {
        const stream = await navigator?.mediaDevices?.getUserMedia({
          audio: true,
        });
        stream?.getTracks()?.forEach((track) => track?.stop());
        handleMicToggle();
      } catch (err) {
        toast.error(requestDeniedMsg);
        console.error('getUserMedia error:', err);
      }
    } else if (permissionStatus?.state === 'denied') {
      toast.error(micAccessDeniedMsg);
    }
  } catch (err) {
    toast.error(notSupportedMsg);
    console.error('Permission query error:', err);
  }
};
