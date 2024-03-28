$(document).ready(function(){
    $('[data-bs-toggle="tooltip"]').tooltip();

});
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

alert("prueba");