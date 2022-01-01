import { useRef, useEffect } from 'react'

function useTitle(title, isSamePage = false) {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => () => {
    if (!isSamePage) {
      document.title = defaultTitle.current;
    }
  }, [])
}

export default useTitle;