import { useEffect } from "react";

const useEventListener = (event, callback, target = document) => {
  useEffect(() => {
    target.addEventListener(event, callback);

    return () => target.removeEventListener(event, callback);
  }, [event, callback, target]);
};

export default useEventListener;
