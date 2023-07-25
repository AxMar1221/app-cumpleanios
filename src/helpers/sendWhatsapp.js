export const sendWhatsMessage = (phone) => {
    const message = "¡Feliz cumpleaños! 🥳 🎂";
    const whatsURL = `https://api.whatsapp.com/send/?phone=+52${phone}&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsURL, "_blank");
  };