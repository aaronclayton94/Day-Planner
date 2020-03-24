function currentTime() {
  $('#clock').html(moment().format('MMMM Do YYYY, h:mm a'));
}
setInterval(currentTime, 1000);

var hour = $(".hour");
var note = $(".form-control");
var saveBtn = $(".btn")




/* <div class="row">
    <div class="col-2 text-right">
        <p class="hour">9:00 AM</p>
    </div>
    <div class="col-8">
        <input class="form-control" type="text">
    </div>
    <div class="col-1">
        <button type="btn" class="btn btn-default">
            <i class="far fa-save"></i>
        </button>
    </div> */