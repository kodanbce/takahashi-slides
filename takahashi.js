window.onload = async () => {
  const searchParams = new URL(window.location).searchParams;
  const sourceUrl = searchParams.get('sourceUrl');
  let currentSlideIndex = parseInt(searchParams.get('slide'));

  if (!sourceUrl) {
    document.body.innerHTML = 'To present something, add "?sourceUrl=[URL to plaintext]" to the URL of this page.';
    return;
  }

  const sourceResponse = await fetch(sourceUrl);
  const source = await sourceResponse.text();

  const slides =
    source
      .split('\n')
      .map(row => row.trim())
      .filter(row => row.length >= 1);

  if (slides.length < 1) {
    document.body.innerHTML = 'The source document contains no rows of text';
    return;
  }

  const clampIndex = (n) => Math.min(slides.length - 1, Math.max(0, n));

  currentSlideIndex = isNaN(currentSlideIndex) ? 0 : clampIndex(currentSlideIndex);

  const updateUI = () => {
    document.title = slides[currentSlideIndex];
    document.body.innerHTML = slides[currentSlideIndex];

    searchParams.set('slide', currentSlideIndex);
    history.replaceState(null, '', `${window.location.pathname}?${searchParams.toString()}`);
  };

  updateUI(); // Initial rendering

  const leftKeys = new Set(['a', 'A', 'w', 'W', 'h', 'H', 'k', 'K', 'ArrowLeft']);
  const rightKeys = new Set(['d', 'D', 's', 'S', 'l', 'L', 'j', 'J', 'ArrowRight', ' ']);
  const resetKeys = new Set(['0']);
  window.addEventListener('keydown', (event) => {
    if (leftKeys.has(event.key)) {
      currentSlideIndex = clampIndex(currentSlideIndex - 1);
      updateUI();
    } else if (rightKeys.has(event.key)) {
      currentSlideIndex = clampIndex(currentSlideIndex + 1);
      updateUI();
    } else if (resetKeys.has(event.key)) {
      currentSlideIndex = 0;
      updateUI();
    }
  });

  window.addEventListener('mousedown', (event) => {
    const leftMouseButtonClicked = event.which === 1;
    if (leftMouseButtonClicked) {
      currentSlideIndex = clampIndex(currentSlideIndex + 1);
      updateUI();
    }
  });
};