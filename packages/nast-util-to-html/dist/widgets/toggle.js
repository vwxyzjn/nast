"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const render_utils_1 = require("../render-utils");
function renderToggle(node, renderNext) {
    let content = render_utils_1.renderTitle(node.text, false, '');
    let block = render_utils_1.renderBlock(node, content, 'summary');
    let html = `\
<details>
  ${block}
  <div class="${constants_1.CSS.blockIndentClass}">
    ${render_utils_1.renderChildren(node.children, renderNext)}
  </div>
</details>`;
    return html;
}
exports.default = renderToggle;
//# sourceMappingURL=toggle.js.map