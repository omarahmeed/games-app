
export class Details {
    constructor(uiInstance) {
        this.ui = uiInstance;
    }

    events() {
        let sectionOne = document.getElementById('sectionone');
        let sectionTwo = document.getElementById('section2');

        document.getElementById('games').addEventListener('click', (event) => {
            const targetCard = event.target.closest('.card');

            if (targetCard) {
                const gameId = targetCard.getAttribute('data-id');
                this.getDetail(gameId);
                sectionOne.classList.replace('d-block', 'd-none');
                sectionTwo.classList.replace('d-none', 'd-block');
            }
        });

        document.getElementById('exit').addEventListener('click', () => {
            sectionOne.classList.replace('d-none', 'd-block');
            sectionTwo.classList.replace('d-block', 'd-none');
        });


    }

    async getDetail(gameId) {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '593edb7dc8msh01df0db871e2381p1150dfjsnbe6c5358534a',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options);
        const apiResponse = await api.json();
        this.ui.displayDetails(apiResponse);
    }
}
