'use strict';

var React = require('react');
var pintura = require('../pintura/pintura.js');
var events = require('./events.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

class PinturaEditorModal extends React__default["default"].Component {
  constructor(props) {
    super(props);
    this.editor = undefined;

    // We'll wrap the module in a container so we can use the container as a CSS module target
    this.el = document.createElement('div');
  }

  componentDidMount() {
    // add the container
    document.body.appendChild(this.el);
    this.el.className = this.props.className;

    // create editor and proxy events
    const props = { ...this.props };
    this.editor = pintura.openEditor(props, this.el);
    events.sub(this, props);
  }

  componentDidUpdate() {
    const props = { ...this.props };
    Object.assign(this.editor, props);
    events.sub(this, props);
  }

  componentWillUnmount() {
    // remove our modal container
    document.body.removeChild(this.el);
    if (!this.editor) return;
    events.unsub(this);
    this.editor = undefined;
  }

  show() {
    this.editor.show();
  }

  hide() {
    this.editor.hide();
  }

  render() {
    return null;
  }
}

module.exports = PinturaEditorModal;
//# sourceMappingURL=PinturaEditorModal.js.map
