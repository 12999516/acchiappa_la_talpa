function genera_tabella(x, y) {
    let table =document.createElement("table")
    for (let i = 1; i <= y; i++) {
        let tr = document.createElement("tr")
        for (let j = 1; j <= x; j++) {
            let td = document.createElement("td")
            let button =document.createElement("button")
            td.appendChild(button);
            tr.appendChild(td);
            button.dataset.x = j
            button.dataset.y = i
            button.onclick = function () {
                let px = this.dataset.x;
                let py = this.dataset.y;
                let posizone_x_talpa = Math.floor(Math.random()*5)
                let posizone_y_talpa = Math.floor(Math.random()*5)
                let img = createElement("img");
                img.src = "img/tarpa_nostargica"
                if(px = posizone_x_talpa && py == posizone_y_talpa) {
                    document.button.appendChild(img)
                }
        }
        table.appendChild(tr);
        
    }
    document.body.appendChild(table)

}
}