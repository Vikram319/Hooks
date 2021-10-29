import useEventListener from "./useEventListener";

const ESCAPE_KEY = 27;

const useEscape = (callback, disabled = false) => {
  const handleEscapePress = (event) => {
    if (event.keyCode === ESCAPE_KEY) {
      callback(event);
    }
  };
  useEventListener("keydown", handleEscapePress);
  if (disabled) return;
};

export default useEscape;
