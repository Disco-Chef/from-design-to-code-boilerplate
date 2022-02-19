import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['form', 'input', 'list'];

  // connect() {
  //   // form element => this.formTarget);
  //   // text-field/input => this.inputTarget);
  //   // list-container-div => this.listTarget);
  // }


  update() {
    const url = `${this.formTarget.action}?query=${this.inputTarget.value}`
    fetch(url, { headers: { 'Accept': 'text/plain' } })
      .then(response => response.text())
      .then((data) => {
        // console.log(data); // HTML STRING
        this.listTarget.outerHTML = data;
      })
  }
}
