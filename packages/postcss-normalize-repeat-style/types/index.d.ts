export default pluginCreator;
declare function pluginCreator(): {
    postcssPlugin: string;
    prepare(): {
        /** @param {import('postcss').Root} css */
        OnceExit(css: import('postcss').Root): void;
    };
};
declare namespace pluginCreator {
    const postcss: boolean;
}
