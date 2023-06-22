var form = document.querySelector(".form");
var msg = document.querySelector(".msg");

var input_task = form.querySelector("input[name='task']");
var input_action = form.querySelector("select[name='action']");
var input_area = form.querySelector("select[name='area']");
var input_details = form.querySelector("input[name='details']");
var input_status = form.querySelector("select[name='status']");

function writeCommit(self) {

    msg.innerHTML = `${!!input_task.value ? `${input_task.value} \u{2192} `:""} ${input_action.value} | ${input_area.value} | ${input_details.value} [${input_status.value}] `;

}

form.addEventListener("input", writeCommit);