Fancybox.bind('[data-fancybox="gallery"]', {
    Toolbar: false,
    animated: false,
    dragToClose: false,
  
    showClass: false,
    hideClass: false,
  
    closeButton: "top",
  
    Image: {
      click: "close",
      wheel: "slide",
      zoom: false,
      fit: "cover",
    },
  
    Thumbs: {
      minScreenHeight: 0,
    },
  });