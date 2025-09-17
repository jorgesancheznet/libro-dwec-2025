class Tabla {
    constructor(nFilas = 10, nCols = 4, color = "black") {
        this.nFilas = nFilas;
        this.nCols = nCols;
        this.color = color;
    }

    dibujar(){
        document.write(
            `<table style='border-collapse:collapse;` +
            `border:3px solid ${this.color};width:100%;'>`
        );
        for (let i = 1; i <= this.nFilas; i++) {
            document.write("<tr>");
            for (let j = 1; j <= this.nCols; j++) {
                document.write(
                    `<td style='border:1px solid ` +
                    `${this.color}'>&nbsp;</td>`
                );
            }
            document.write("</td>");
        }
        document.write("</table>");
    }
}

