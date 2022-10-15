function execute(){
    var pilih_produk = document.getElementById('pilih-produk').value;
    var kuantitas = document.getElementById('total-produk').value;

        if(pilih_produk === "sabun-batang"){
            let harga = 3000;
            let total = harga * kuantitas;
            document.getElementById('harga-produk').value = harga;
            document.getElementById('total-harga').value = total;
        }

        if(pilih_produk === "mie-instan"){
            let harga = 2000;
            let total = harga * kuantitas;
            document.getElementById('harga-produk').value = harga;
            document.getElementById('total-harga').value = total;
        }

        if(pilih_produk === "pensil"){
            let harga = 1000;
            let total = harga * kuantitas;
            document.getElementById('harga-produk').value = harga;
            document.getElementById('total-harga').value = total;
        }

        if(pilih_produk === "kopi-sachet"){
            let harga = 1500;
            let total = harga * kuantitas;
            document.getElementById('harga-produk').value = harga;
            document.getElementById('total-harga').value = total;
        }

        if(pilih_produk === "air-galon"){
            let harga = 20000;
            let total = harga * kuantitas;
            document.getElementById('harga-produk').value = harga;
            document.getElementById('total-harga').value = total;
        }
}

function process(){
    var pilih_produk = document.getElementById('pilih-produk').value;
    var kuantitas = document.getElementById('total-produk').value;

    if(pilih_produk === "sabun-batang"){
        let harga = 3000;
        let total = harga * kuantitas;
        document.getElementById('total-harga').value = harga;
        document.getElementById('total-harga').value = total;
    }

    if(pilih_produk === "mie-instan"){
        let harga = 2000;
        let total = harga * kuantitas;
        document.getElementById('total-harga').value = harga;
        document.getElementById('total-harga').value = total;
    }

    if(pilih_produk === "pensil"){
        let harga = 1000;
        let total = harga * kuantitas;
        document.getElementById('total-harga').value = harga;
        document.getElementById('total-harga').value = total;
    }

    if(pilih_produk === "kopi-sachet"){
        let harga = 1500;
        let total = harga * kuantitas;
        document.getElementById('total-harga').value = harga;
        document.getElementById('total-harga').value = total;
    }

    if(pilih_produk === "air-galon"){
        let harga = 20000;
        let total = harga * kuantitas;
        document.getElementById('total-harga').value = harga;
        document.getElementById('total-harga').value = total;
    }

}

function reset(){
    document.getElementById('harga-produk').value = "";
    document.getElementById('total-produk').value = "";
    document.getElementById('total-harga').value = "";
}