import React, { useEffect, useRef, useState } from 'react';

export default function LegacyHtmlFrame({ frameId, title, html, isActive, onActivate }) {
  const frameRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!isActive || !loaded || !onActivate || !frameRef.current?.contentWindow) return;
    onActivate(frameRef.current.contentWindow);
  }, [isActive, loaded, onActivate]);

  return (
    <iframe
      id={frameId}
      ref={frameRef}
      title={title}
      srcDoc={html}
      style={{ width: '100%', height: '100%', border: 'none', display: 'block', background: '#fff' }}
      onLoad={() => {
        setLoaded(true);
        if (isActive && onActivate && frameRef.current?.contentWindow) {
          onActivate(frameRef.current.contentWindow);
        }
      }}
    />
  );
}
