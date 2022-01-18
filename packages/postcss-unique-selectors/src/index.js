import sort from 'alphanum-sort';
import selectorParser from 'postcss-selector-parser';
/**
 * @param {string} selectors
 * @param {selectorParser.SyncProcessor<void>} callback
 */
function parseSelectors(selectors, callback) {
  return selectorParser(callback).processSync(selectors);
}
/** @param {import('postcss').Rule} rule */
function unique(rule) {
  rule.selector = sort([...new Set(rule.selectors)], {
    insensitive: true,
  }).join();
}

function pluginCreator() {
  return {
    postcssPlugin: 'postcss-unique-selectors',
    /** @param {import('postcss').Root} css */
    OnceExit(css) {
      css.walkRules((nodes) => {
        /** @type {string[]} */
        let comments = [];
        nodes.selector = parseSelectors(nodes.selector, (selNode) => {
          selNode.walk((sel) => {
            if (sel.type === 'comment') {
              comments.push(sel.value);
              sel.remove();
              return;
            } else {
              return;
            }
          });
        });
        unique(nodes);
        nodes.selectors = nodes.selectors.concat(comments);
      });
    },
  };
}

pluginCreator.postcss = true;
export default pluginCreator;
