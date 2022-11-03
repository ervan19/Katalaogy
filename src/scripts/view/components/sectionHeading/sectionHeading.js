class SectionHeading extends HTMLElement {
  constructor() {
    super();
    this._headingP = "";
    this._headingH2 = "";
  }

  static get observedAttributes() {
    return ["headingP", "headingH2"];
  }

  connectedCallback() {
    this._headingP = this.getAttribute("headingP");
    this._headingH2 = this.getAttribute("headingH2");
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="sectionHeading">
            <p tabindex="0">${this._headingP}</p>
            <h2 tabindex="0">${this._headingH2}</h2>
        </div>
    `;
  }
}

customElements.define("section-heading", SectionHeading);
