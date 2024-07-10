import Component from "./component"

class HelloComponent extends Component {
	constructor() {
		super();
	}
	
	connectedCallback() {
		const shadowRoot = this.attachShadow({mode: "closed"});
		const template = document.createElement("template");
		template.innerHTML = `<h1>Hello, World!</h1>`;
		shadowRoot.appendChild(template.content);
	}

}

customElements.define("hello-component", HelloComponent);

export {};



