function infiniteScroll() {
  scrollOffset -= 1; // Adjust speed here
  if (Math.abs(scrollOffset) >= imageList.scrollWidth / 2) {
    scrollOffset = 0; // Reset to simulate infinite loop
  }
  imageList.style.transform = `translateX(${scrollOffset}px)`;
  requestAnimationFrame(infiniteScroll); // Continuously call the function
}
infiniteScroll();
