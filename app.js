const items = document.getElementById('items');
const templateCard = document.getElementById('template__card');
const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', () => {
    fetcData()
})

const fetcData = async () => {
    try {
        const res = await fetch('api.json');
        const data = await res.json();
        pintarCards(data);
        // console.log(data)
    } catch (error) {
        console.log(error);
    }
}

const pintarCards = (data) => {
    data.forEach(producto => {
        templateCard.querySelector('h5').textContent = producto.title;
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    });
    items.appendChild(fragment);
};