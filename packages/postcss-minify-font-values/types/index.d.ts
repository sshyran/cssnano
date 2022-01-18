export default pluginCreator;
export type PostCssMinifyFontValueOptions = {
    removeAfterKeyword?: boolean;
    removeDuplicates?: boolean;
    removeQuotes?: boolean;
};
/** @typedef {{removeAfterKeyword?: boolean, removeDuplicates?: boolean, removeQuotes?: boolean}} PostCssMinifyFontValueOptions */
/** @param {PostCssMinifyFontValueOptions} opts */
declare function pluginCreator(opts: PostCssMinifyFontValueOptions): {
    postcssPlugin: string;
    prepare(): {
        /** @param {import('postcss').Root} css */
        OnceExit(css: import('postcss').Root): void;
    };
};
declare namespace pluginCreator {
    const postcss: boolean;
}
