import React from 'react';

export default function useCartAnnouncements() {
  const [cartAnnouncementMessage, setCartAnnouncementMessage] = React.useState("");

  const announce = message => {
    setCartAnnouncementMessage("");
    Promise.resolve().then(() => {
      setCartAnnouncementMessage(message);
    });
  };

  return { cartAnnouncementMessage, announce};
}