// Lazy load Components
export default (name) => import(`../${name}.ractive.html`).then(module => module.default)