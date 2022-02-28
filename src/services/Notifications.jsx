  import React from 'react';
  import { toast } from 'react-toastify';

  const Notifications = () => {
    
    const notify = () => {
      toast("Default Notification !");
    }

    const successToast = () => {
      toast.success("Success Notification !", {
        position: toast.POSITION.TOP_CENTER
      });
    };

    const errorToast = () => {
      toast.error("Success Notification !", {
        position: toast.POSITION.TOP_CENTER
      });
    };

    const warningToast = () => {
      toast.warn("Warning Notification !", {
        position: toast.POSITION.BOTTOM_LEFT
      });
    };

    const infoToast = () => {
      toast.warn("Warning Notification !", {
        position: toast.POSITION.BOTTOM_LEFT
      });
    };

    const customToast = () => {
      toast("Custom Style Notification with css class!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'foo-bar'
      });
    }
  }

  export default Notifications;