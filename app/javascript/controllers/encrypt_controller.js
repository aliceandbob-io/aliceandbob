import { Controller } from "stimulus";
import { encryptText } from "../model/crypto";
import { copy } from "../model/index";

export default class extends Controller {
  static targets = ["input", "output", "key", "initialState", "encryptButton"];

  async encrypt() {
    // Initial display
    this.initialStateTarget.classList.add("d-none");
    this.inputTarget.classList.remove("border-danger");
    this.keyTarget.classList.remove("border-danger");

    // Get message and key
    const message = this.inputTarget.innerText;
    const key = this.keyTarget.innerText;

    // Validation form
    if (this.inputTarget.textContent == "") {
      this.inputTarget.classList.add("border-danger");
    }
    if (this.keyTarget.textContent == "") {
      this.keyTarget.classList.add("border-danger");
    }
    if (this.keyTarget.textContent == "" || this.inputTarget.textContent == "") {
      return
    }

    // Button UX
    this.encryptButtonTarget.disabled = true;
    this.encryptButtonTarget.getElementsByClassName("material-icons")[0].classList.add("d-none");
    this.encryptButtonTarget.getElementsByClassName("material-icons")[1].classList.remove("d-none");

    const encrypted = await encryptText(message, key).catch((err) => { console.error(err); });

    if (encrypted) {
      this.outputTarget.innerText = encrypted;
      this.initialStateTarget.classList.remove("d-none");
      $([document.documentElement, document.body]).animate({
        scrollTop: $(this.initialStateTarget).offset().top
      }, 1000);
    } else {
      $('#alert_error').show();
    }

    // Go back to initial UX button
    this.encryptButtonTarget.disabled = false;
    this.encryptButtonTarget.getElementsByClassName("material-icons")[0].classList.remove("d-none");
    this.encryptButtonTarget.getElementsByClassName("material-icons")[1].classList.add("d-none");
  }

  copyToClipboard(e) {
    let el = e.target;
    let text;

    text = this.outputTarget.innerText;
    copy(text, el);
  }
}
