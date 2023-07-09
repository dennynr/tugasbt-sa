$(document).ready(function () {
    $('#example').DataTable({
        serverSide: true,
        ajax: '/data-source',
        // Konfigurasi dan opsi lainnya
    });
});