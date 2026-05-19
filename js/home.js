import { UI } from './ui.js';

const API_KEY  = '593edb7dc8msh01df0db871e2381p1150dfjsnbe6c5358534a';
const API_HOST = 'free-to-play-games-database.p.rapidapi.com';

export class Games {
  constructor(uiInstance) {
    this.ui = uiInstance;
    this.currentCategory = 'mmorpg';
    this.allGames = [];
    this._bindCategories();
    this._bindSearch();
  }

  // ── Category nav ──────────────────────────────────────────────────

  _bindCategories() {
    document.getElementById('categoriesList').addEventListener('click', (e) => {
      const item = e.target.closest('.cat-item');
      if (!item) return;

      document.querySelectorAll('.cat-item').forEach(el => el.classList.remove('active'));
      item.classList.add('active');

      this._clearSearch();
      this.getGames(item.dataset.category);
    });
  }

  // ── Search ────────────────────────────────────────────────────────

  _bindSearch() {
    const input    = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearSearch');

    input.addEventListener('input', () => {
      const term = input.value.trim();
      clearBtn.classList.toggle('d-none', term === '');
      this._filterGames(term);
    });

    clearBtn.addEventListener('click', () => {
      this._clearSearch();
      this.ui.displayGames(this.allGames);
      const info = document.getElementById('resultsInfo');
      info.classList.remove('d-none');
      info.innerHTML = `<span>${this.allGames.length}</span> games found`;
    });
  }

  _filterGames(term) {
    if (!term) {
      this.ui.displayGames(this.allGames);
      return;
    }
    const lower   = term.toLowerCase();
    const filtered = this.allGames.filter(g =>
      g.title.toLowerCase().includes(lower) ||
      g.genre.toLowerCase().includes(lower)
    );
    if (filtered.length > 0) {
      this.ui.displayGames(filtered);
    } else {
      this.ui.showNoResults(term);
    }
  }

  _clearSearch() {
    const input = document.getElementById('searchInput');
    input.value = '';
    document.getElementById('clearSearch').classList.add('d-none');
  }

  // ── API fetch ─────────────────────────────────────────────────────

  async getGames(category) {
    this.currentCategory = category;
    this.ui.showSkeletons(8);

    try {
      const res = await fetch(
        `https://${API_HOST}/api/games?category=${category}`,
        { headers: { 'X-RapidAPI-Key': API_KEY, 'X-RapidAPI-Host': API_HOST } }
      );

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      this.allGames = await res.json();
      this.ui.displayGames(this.allGames);

    } catch (err) {
      console.error('Failed to fetch games:', err);
      this.ui.showError(() => this.getGames(this.currentCategory));
    }
  }
}
