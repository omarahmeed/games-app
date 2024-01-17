export class UI {
    displayDetails(obj) {
        let box = `<div class="row">
        <div data-id="${obj.id}" class="col-md-4">
            <img src="${obj.thumbnail}" alt="game photo" class="img-fluid">
        </div>
        <div class="col-md-8">
            <h2 class='title'>Tittle:<span class="badge">${obj.title}</span> </h2>
            <p>Category: <span class="badge  text-bg-info">${obj.genre}</span></p>
            <p>Platform: <span class="badge text-bg-info">${obj.platform}</span></p>
            <p>Status: <span class="badge text-bg-info">${obj.status}</span></p>
            <p class="small">${obj.description}</p>
            <a target="_blank" class="btn btn-outline-warning" href="${obj.game_url}">Show game</a>
        </div>
    </div>
    `
           ;
        document.getElementById('gamedetail').innerHTML = box;
    }

    displayGames(arr) {
        let box = '';
        for (let i = 0; i < arr.length; i++) {
            box += `<div class="col-12 col-md-6 col-lg-4 col-xl-3">
            <div data-id="${arr[i].id}" class="card scaleee h-100 bg-transparent role="button" ">
                <div class="card-body ">
                    <div class='d-flex flex-column justify-content-between h-100 hstack '>
                        <figure>
                            <img class="h-100 card-img-top" src="${arr[i].thumbnail}" alt="game ${i + 1}">
                        </figure>
                        <figcaption class="">
                            <div class="game-details hstack justify-content-between">
                                <h3>${arr[i].title}</h3>
                                <span class="badge text-bg-primary p-2">Free</span>
                            </div>
                            <p class="text-center">${arr[i].short_description.split(" ", 8)}</p>
                        </figcaption>
                        <div class="game-footer d-flex justify-content-between border w-100">
                            <span class="badge">${arr[i].genre}</span>
                            <span class="badge">${arr[i].platform}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
               `;
        }
        document.getElementById('games').innerHTML = box;
    }
}


// `
// <div data-id="${arr[i].id}" class="card bg-transparent" role="button" "="">
//             <div class=" card-body h-100">
//                         <figure class="position-relative">
//                            <img class=" card-img-top object-fit-cover"
//                                 src="${arr[i].thumbnail}"
//                         </figure>
//                         <figcaption>

//                             <div class="hstack justify-content-between mt-2 mb-2">
//                                 <h3 class="h6 small">${arr[i].title}</h3>
//                                 <span class="badge text-bg-primary p-2">Free</span>
//                             </div>
            
//                             <p class="card-text small text-center opacity-50">
//                             ${arr[i].short_description}
//                             </p>
            
//                         </figcaption>
//                     </div>
            
//                     <footer class="card-footer small hstack justify-content-between">
            
//                         <span class="badge badge-color">${arr[i].genre}</span>
//                         <span class="badge badge-color">${arr[i].platform}</span>
            
//                     </footer>
//                 </div>
//             </div>``