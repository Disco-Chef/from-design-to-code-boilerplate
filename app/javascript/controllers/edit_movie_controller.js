import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['infos', 'form', 'card'];

  // connect() {
  // //   console.log('Hello from edit_controller.js!')
  //   console.log(this.infosTarget)
  //   console.log(this.formTarget)
  // }

  update(event) {
    event.preventDefault();
    const url = this.formTarget.action
    fetch(url, {
      method: 'PATCH',
      headers: { 'Accept': 'text/plain' },
      body: new FormData(this.formTarget)
    })
      .then(response => response.text())
      .then((data) => {
        this.cardTarget.outerHTML = data;
      })
  }

  displayForm() {
    this.formTarget.classList.toggle('d-none');
  }
}
