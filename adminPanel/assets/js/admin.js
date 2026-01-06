$(document).ready(function() {
    $('#myTable').DataTable({
        dom: 'Bfrtip',
        buttons: [
            {
                extend: 'copyHtml5',
                text: '<i class="fas fa-copy"></i> Copy',
                className: 'btn btn-sm btn-outline-light me-2 dt-transparent-btn'
            },
            {
                extend: 'excelHtml5',
                text: '<i class="fas fa-file-excel"></i> Excel',
                className: 'btn btn-sm btn-outline-light me-2 dt-transparent-btn'
            },
            {
                extend: 'pdfHtml5',
                text: '<i class="fas fa-file-pdf"></i> PDF',
                className: 'btn btn-sm btn-outline-light me-2 dt-transparent-btn'
            },
            {
                extend: 'print',
                text: '<i class="fas fa-print"></i> Print',
                className: 'btn btn-sm btn-outline-light dt-transparent-btn'
            }
        ],
        paging: true,
        searching: true,
        ordering: true,
        info: true,
        lengthChange: true,
        pageLength: 10,
           language: {
            search: "Axtar:",
            lengthMenu: "Göstər _MENU_ sətir",
            info: "Göstərilir _START_ - _END_ / _TOTAL_ sətir",
            paginate: {
                previous: "Əvvəlki",
                next: "Sonraki"
            }
        }
    });
});
