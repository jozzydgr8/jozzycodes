export  const handleRequest = (message: string) => {
    const whatsappURL = `https://wa.me/2348113828486?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };
