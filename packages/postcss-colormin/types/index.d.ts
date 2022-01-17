export default pluginCreator;
/** @type {import('postcss').PluginCreator<unknown>} */
declare function pluginCreator(config?: {}): {
    postcssPlugin: string;
    /** @param {import('postcss').Result} result */
    prepare(result: import('postcss').Result): {
        /** @param {import('postcss').Root} css */
        OnceExit(css: import('postcss').Root): void;
    };
};
declare namespace pluginCreator {
    const postcss: true;
}
