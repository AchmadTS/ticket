var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// enkapsulasi
var Motor = /** @class */ (function () {
    function Motor(nomorMesin) {
        this.nomorMesin = nomorMesin;
    }
    Motor.prototype.tampilkanNomorMesin = function () {
        console.log("Nomor Mesin:", this.nomorMesin);
    };
    return Motor;
}());
var motor = new Motor("MX-123");
motor.tampilkanNomorMesin();
// abstraksi
var Kendaraan = /** @class */ (function () {
    function Kendaraan() {
    }
    return Kendaraan;
}());
var Sepeda = /** @class */ (function (_super) {
    __extends(Sepeda, _super);
    function Sepeda() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sepeda.prototype.bergerak = function () {
        console.log("Sepeda dikayuh");
    };
    return Sepeda;
}(Kendaraan));
var sepeda = new Sepeda();
sepeda.bergerak();
// inheritance
var Hewan = /** @class */ (function () {
    function Hewan(nama) {
        this.nama = nama;
    }
    Hewan.prototype.makan = function () {
        console.log(this.nama + " sedang makan");
    };
    return Hewan;
}());
var Kucing = /** @class */ (function (_super) {
    __extends(Kucing, _super);
    function Kucing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Kucing;
}(Hewan));
var kucing = new Kucing("Milo");
kucing.makan();
// polymorphism
var AlatCetak = /** @class */ (function () {
    function AlatCetak() {
    }
    AlatCetak.prototype.cetak = function () {
        console.log("Mencetak Dokumen");
    };
    return AlatCetak;
}());
var PrinterFoto = /** @class */ (function (_super) {
    __extends(PrinterFoto, _super);
    function PrinterFoto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PrinterFoto.prototype.cetak = function () {
        console.log("Mencetak foto");
    };
    return PrinterFoto;
}(AlatCetak));
var alat1 = new AlatCetak();
var alat2 = new PrinterFoto();
alat1.cetak();
alat2.cetak();
