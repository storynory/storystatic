const card = (title, img, text) => {
    return `<div class="card">
              <header>
                <h3>${title}</h3> 
              </header>
              <body>      
                <figure>
                  <img src="${img}" alt="${title}/>
                <figure>
                ${text}
              </body>
            </div>`;
}

module.export = card;