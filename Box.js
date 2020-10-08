class Box{
    constructor(container, bd, width, height, txt){
        this.div = document.createElement("div");
        this.width = width;
        this.height = height;
        this.container = container;
        this.bd = bd;
        this.txt = txt;

        this.div.style.width = this.width+"px";
        this.div.style.height = this.height+"px";
        this.div.style.background = "yellow";
        this.div.style.border = bd+"px solid black";
        this.div.style.boxSizing = "border-box";
        this.div.style.fontSize = "25px";
        this.div.style.textAlign = "center";
        this.div.style.float = "left";
        this.div.innerHTML = this.txt;

        this.container.appendChild(this.div);
    }

    setText(t){
        this.div.innerHTML = t;
    }
}