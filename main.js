function copy_nano() {
  var copyText = document.getElementById("nano").innerHTML;
  navigator.clipboard.writeText(copyText);
}
function copy_solana() {
  var copyText = document.getElementById("solana").innerHTML;
  navigator.clipboard.writeText(copyText);
}