const plugin = 'postcss-discard-empty';

/**
 * @param {import('postcss').Root} css
 * @param {import('postcss').Result} result
 */
function discardAndReport(css, result) {
  /** @param {import('postcss').AnyNode} node */
  function discardEmpty(node) {
    if ('nodes' in node) {
      node.each(discardEmpty);
    }

    if (
      (node.type === 'decl' && !node.value) ||
      (node.type === 'rule' && !node.selector) ||
      ('nodes' in node && !node.nodes.length) ||
      (node.type === 'atrule' &&
        ((!node.nodes && !node.params) || (!node.params && !node.nodes.length)))
    ) {
      node.remove();

      result.messages.push({
        type: 'removal',
        plugin,
        node,
      });
    }
  }

  css.each(discardEmpty);
}

function pluginCreator() {
  return {
    postcssPlugin: plugin,
    /**
     * @param {import('postcss').Root} css
     * @param {{result: import('postcss').Result}} arg1
     */
    OnceExit(css, { result }) {
      discardAndReport(css, result);
    },
  };
}

pluginCreator.postcss = true;
export default pluginCreator;
