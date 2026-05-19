const API_KEY  = '593edb7dc8msh01df0db871e2381p1150dfjsnbe6c5358534a';
const API_HOST = 'free-to-play-games-database.p.rapidapi.com';

export class Details {
  constructor(uiInstance) {
    this.ui = uiInstance;
  }

  bindEvents() {
    const sectionOne = document.getElementById('sectionone');
    const sectionTwo = document.getElementById('section2');

    // Click on a game card → go to detail
    document.getElementById('games').addEventListener('click', (e) => {
      const card = e.target.closest('.game-card');
      if (!card) return;

      const gameId = card.dataset.id;
      this.ui.showDetailSkeleton();
      sectionOne.classList.replace('d-block', 'd-none');
      sectionTwo.classList.replace('d-none', 'd-block');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.getDetail(gameId);
    });

    // Back button
    document.getElementById('exitBtn').addEventListener('click', () => {
      sectionTwo.classList.replace('d-block', 'd-none');
      sectionOne.classList.replace('d-none', 'd-block');
    });
  }

  async getDetail(gameId) {
    try {
      const res = await fetch(
        `https://${API_HOST}/api/game?id=${gameId}`,
        { headers: { 'X-RapidAPI-Key': API_KEY, 'X-RapidAPI-Host': API_HOST } }
      );

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const game = await res.json();
      this.ui.displayDetails(game);

    } catch (err) {
      console.error('Failed to fetch game detail:', err);
      document.getElementById('gamedetail').innerHTML = `
        <div class="col-12">
          <div class="error-state">
            <i class="fas fa-exclamation-triangle"></i>
            <h3>Couldn't load details</h3>
            <p>Please go back and try again.</p>
          </div>
        </div>`;
    }
  }
}
