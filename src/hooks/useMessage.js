import { useState } from "react";

const useMessage = () => {
  const [message, setMessage] = useState({
    status: "",
    message: "",
  });
  const [messageTimer, setMessageTimer] = useState(null);

  const clearPreviousMessageTimer = () => {
    setMessageTimer(() => {
      clearTimeout(messageTimer);
    });
  };

  const createTimerError = () => {
    setMessageTimer(
      setTimeout(() => {
        setMessage({ ...message, status: "" });
      }, 2500)
    );
  };

  const showMessage = (message) => {
    setMessage({ message, status: "visible" });

    if (messageTimer !== null) {
      clearPreviousMessageTimer();
    }

    createTimerError();
  };

  return { message, showMessage };
};
export default useMessage;
