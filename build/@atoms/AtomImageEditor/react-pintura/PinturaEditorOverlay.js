'use strict';

var React = require('react');
var pintura = require('../pintura/pintura.js');
var events = require('./events.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

class PinturaEditorOverlay extends React__default["default"].Component {
  constructor(props) {
    super(props);
    this.elementRef = React__default["default"].createRef();
    this.editor = undefined;
  }

  componentDidMount() {
    if (!this.elementRef.current) return;
    const props = { ...this.props };
    this.editor = pintura.overlayEditor(this.elementRef.current, props);
    events.sub(this, props);
  }

  componentDidUpdate() {
    const props = { ...this.props };
    Object.assign(this.editor, props);
    events.sub(this, props);
  }

  componentWillUnmount() {
    if (!this.editor) return;
    events.unsub(this);
    this.editor.destroy();
    this.editor = undefined;
  }

  render() {
    return React__default["default"].createElement('div', {
      className: `PinturaRootWrapper ${this.props.className}`.trim(),
      ref: this.elementRef
    });
  }
}

module.exports = PinturaEditorOverlay;
//# sourceMappingURL=PinturaEditorOverlay.js.map
