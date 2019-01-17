'use strict';
let Users = function(id, nama, alamat, notlp, status, description){
    this.id = id,
    this.nama = nama,
    this.alamat = alamat,
    this.notlp = notlp,
    this.status = status,
    this.description = description
}
module.exports = Users;