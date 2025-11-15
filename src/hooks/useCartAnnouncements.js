import React from 'react';

export default function useCartAnnouncements() {
  const [cartAnnouncementMessage, setCartAnnouncementMessage] = React.useState("");

  const announce = message => {
    setCartAnnouncementMessage("");
    setTimeout(() => {
      setCartAnnouncementMessage(message);
    }, 0);
  };

  return { cartAnnouncementMessage, announce};
}