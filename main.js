function copy_nano() {
  var copyText = document.getElementById("nano").innerHTML;
  navigator.clipboard.writeText(copyText);
}