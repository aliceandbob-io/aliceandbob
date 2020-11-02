import { Controller } from "stimulus";
import { decryptText } from "../model/crypto";
import { copy } from "../model/index";

export default class extends Controller {
  static targets = ["input", "output", "key", "initialState", "decryptButton"];

  async decrypt() {
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
    this.decryptButtonTarget.disabled = true;
    this.decryptButtonTarget.getElementsByClassName("material-icons")[0].classList.add("d-none");
    this.decryptButtonTarget.getElementsByClassName("material-icons")[1].classList.remove("d-none");

    const decrypted = await decryptText(message, key).catch((err) => { console.error(err); });

    if (decrypted) {
      this.outputTarget.innerText = decrypted;
      this.initialStateTarget.classList.remove("d-none");
    } else {
      $('#alert_error').show();
    }

    // Go back to initial UX button
    this.decryptButtonTarget.disabled = false;
    this.decryptButtonTarget.getElementsByClassName("material-icons")[0].classList.remove("d-none");
    this.decryptButtonTarget.getElementsByClassName("material-icons")[1].classList.add("d-none");
  }

  copyToClipboard(e) {
    let el = e.target;
    let text;

    text = this.outputTarget.innerText;
    copy(text, el);
  }
}
