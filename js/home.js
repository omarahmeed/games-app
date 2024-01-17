
export class Games {
    constructor(uiInstance) {
        this.ui = uiInstance;
        this.EventCategory();

    }
    EventCategory() {

        document.getElementById('categoryMmorpg').addEventListener('click', () => {
            this.getGames('mmorpg');
        });

        document.getElementById('categoryShooter').addEventListener('click', () => {
            this.getGames('shooter');
        });

        document.getElementById('categorySailing').addEventListener('click', () => {
            this.getGames('sailing');
        });
        document.getElementById('categorypermadeath').addEventListener('click', () => {
            this.getGames('permadeath');
        });
        document.getElementById('categorysuperhero').addEventListener('click', () => {
            this.getGames('superhero');
        });
        document.getElementById('categorypixel').addEventListener('click', () => {
            this.getGames('pixel');
        });


    }


    async getGames(category) {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '593edb7dc8msh01df0db871e2381p1150dfjsnbe6c5358534a',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
        const apiResponse = await api.json();
        this.ui.displayGames(apiResponse);
    }
}
