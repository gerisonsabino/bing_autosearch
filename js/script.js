const _bingURL = "https://www.bing.com/search?q=";
const _searchTerms = ["Brown eggs","Sweet fresh stawberry","Asparagus","Green smoothie","Raw legums","Baking cake","Pesto with basil","Hazelnut in black ceramic bowl","Fresh stawberry","Lemon and salt","Homemade bread","Legums","Fresh tomato","Healthy breakfast","Green beans","Baked stuffed portabello mushrooms","Strawberry jelly","Pears juice","Fresh pears","Caprese salad","Oranges","Vegan food","Breakfast with muesli","Honey","Breakfast with cottage","Strawberry smoothie","Strawberry and mint","Ricotta","Cuban sandwiche","Granola","Smoothie with chia seeds","Yogurt","Sandwich with salad","Cherry","Raw asparagus","Corn","Vegan","Fresh blueberries","Smashed avocado","Italian ciabatta","Rustic breakfast","Sliced lemons","Plums","French fries","Strawberries","Ground beef meat burger","Tomatoes","Basil","Fruits bouquet","Peaches on branch"];

const b_searchbox = document.getElementById("b_searchbox");
const b_searchbutton = document.getElementById("b_searchbutton");
const b_searchlabel = document.getElementById("b_searchlabel");
const b_searchlinks = document.getElementById("b_searchlinks");

const search = () => {
    let searchQty = parseInt(b_searchbox.value.match(/\d+/g));

    if (searchQty !== NaN && searchQty > 0) {
        if (searchQty > 50)
            b_searchbox.value = searchQty = 50;

        b_searchbutton.disabled = b_searchbox.disabled = true;
        b_searchlabel.style.display = "inline-block";

        for (let i = 1; i <= searchQty; i++) {
            let searchTerm = _searchTerms[Math.floor(Math.random() * _searchTerms.length)];
            let searchText = `${searchTerm.toLowerCase()} (${i})`;
            let searchURL = _bingURL + encodeURI(searchText);

            setTimeout(() => {
                b_searchlabel.innerText = `A pesquisa "${searchText}" está em andamento, por favor aguarde...`;

                window.open(searchURL);

                b_searchlinks.innerHTML += `<li><a href='${searchURL}' target='_blank'>${searchURL}</a></li>`;

                if (i == searchQty) {
                    b_searchbutton.disabled = b_searchbox.disabled = false;
                    b_searchlabel.innerText = "";
                    b_searchbox.value = "";
                }
            }, ((i - 1) * 3000));
        }

    }
    else {
        b_searchlabel.innerText = `Por favor, informe uma quantidade válida de pesquisas.`;
    }
}

window.onload = () => {
    b_searchbutton.onclick = search;

    b_searchbox.onkeyup = (e) => {
        if (e.keyCode === 13) {
            search();
        }
    };
};

//Google Analytics config
window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', 'G-YXNCPPFVCW');