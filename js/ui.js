export class UI {

  // ── Skeleton loaders ──────────────────────────────────────────────

  showSkeletons(count = 8) {
    const container = document.getElementById('games');
    let html = '';
    for (let i = 0; i < count; i++) {
      html += `
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
          <div class="skeleton-card">
            <div class="skeleton skeleton-img"></div>
            <div class="skeleton-body">
              <div class="skeleton skeleton-title"></div>
              <div class="skeleton skeleton-text"></div>
              <div class="skeleton skeleton-text-sm"></div>
            </div>
            <div class="skeleton-footer">
              <div class="skeleton skeleton-badge"></div>
              <div class="skeleton skeleton-badge"></div>
            </div>
          </div>
        </div>`;
    }
    container.innerHTML = html;
  }

  showDetailSkeleton() {
    document.getElementById('gamedetail').innerHTML = `
      <div class="col-md-5">
        <div class="skeleton detail-skeleton-img"></div>
      </div>
      <div class="col-md-7">
        <div class="detail-skeleton-body">
          <div class="skeleton" style="height:32px; width:65%; border-radius:6px"></div>
          <div class="skeleton" style="height:22px; width:45%; border-radius:50px"></div>
          <div class="skeleton" style="height:14px; width:100%; border-radius:4px"></div>
          <div class="skeleton" style="height:14px; width:90%; border-radius:4px"></div>
          <div class="skeleton" style="height:14px; width:80%; border-radius:4px"></div>
          <div class="skeleton" style="height:40px; width:140px; border-radius:50px; margin-top:0.5rem"></div>
        </div>
      </div>`;
  }

  // ── Error state ───────────────────────────────────────────────────

  showError(retryCallback) {
    document.getElementById('games').innerHTML = `
      <div class="col-12">
        <div class="error-state">
          <i class="fas fa-exclamation-triangle"></i>
          <h3>Something went wrong</h3>
          <p>Couldn't load games. Check your connection and try again.</p>
          <button class="btn-retry" id="retryBtn">Try Again</button>
        </div>
      </div>`;
    document.getElementById('retryBtn')?.addEventListener('click', retryCallback);
  }

  // ── Games grid ────────────────────────────────────────────────────

  displayGames(games) {
    const container = document.getElementById('games');
    const resultsInfo = document.getElementById('resultsInfo');
    const noResults   = document.getElementById('noResults');

    if (!games || games.length === 0) {
      container.innerHTML = '';
      return;
    }

    resultsInfo.classList.remove('d-none');
    resultsInfo.innerHTML = `<span>${games.length}</span> games found`;
    noResults.classList.add('d-none');

    container.innerHTML = games.map((game, i) => `
      <div class="col-12 col-md-6 col-lg-4 col-xl-3">
        <div class="game-card" data-id="${game.id}" style="animation-delay:${i * 0.04}s" role="button" tabindex="0">
          <div class="card-img-wrap">
            <img src="${game.thumbnail}" alt="${game.title}" loading="lazy" />
            <span class="card-free-badge">FREE</span>
            <span class="card-platform-badge">${game.platform === 'PC (Windows)' ? 'PC' : game.platform}</span>
          </div>
          <div class="card-body-inner">
            <h3 class="card-title">${game.title}</h3>
            <p class="card-desc">${game.short_description}</p>
          </div>
          <div class="card-footer-inner">
            <span class="genre-tag">${game.genre}</span>
          </div>
        </div>
      </div>`
    ).join('');
  }

  showNoResults(term) {
    document.getElementById('games').innerHTML = '';
    document.getElementById('resultsInfo').classList.add('d-none');
    const noResults = document.getElementById('noResults');
    noResults.classList.remove('d-none');
    document.getElementById('noResultsTerm').textContent = term;
  }

  // ── Game detail ───────────────────────────────────────────────────

  displayDetails(game) {
    document.getElementById('gamedetail').innerHTML = `
      <div class="col-md-5 mb-4 mb-md-0">
        <img src="${game.thumbnail}" alt="${game.title}" class="detail-img" />
      </div>
      <div class="col-md-7">
        <div class="detail-info">
          <h2 class="detail-game-title">${game.title}</h2>
          <div class="detail-meta">
            <span class="detail-badge badge-genre">${game.genre}</span>
            <span class="detail-badge badge-platform">${game.platform}</span>
            <span class="detail-badge badge-status">${game.status}</span>
            <span class="detail-badge badge-free">Free to Play</span>
          </div>
          <p class="detail-desc">${game.description}</p>
          <a href="${game.game_url}" target="_blank" rel="noopener" class="btn-play">
            <i class="fas fa-play"></i> Play Now
          </a>
        </div>
      </div>`;
  }

}
