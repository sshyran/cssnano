export default pluginCreator;
export type PostCssRemoveCommentsOptions = {
    removeAll?: boolean | undefined;
    removeAllButFirst?: boolean | undefined;
    remove?: ((s: string) => boolean) | undefined;
};
/** @typedef {object} PostCssRemoveCommentsOptions
 *  @property {boolean=} removeAll
 *  @property {boolean=} removeAllButFirst
 *  @property {(s: string) => boolean=} remove
 */
/** @type import('postcss').PluginCreator<PostCssRemoveCommentsOptions> */
declare function pluginCreator(opts?: {}): {
    postcssPlugin: string;
    /**
     * @param {import('postcss').Root} css
     * @param {import('postcss').Helpers} helpers
     */
    OnceExit(css: import('postcss').Root, { list }: import('postcss').Helpers): void;
};
declare namespace pluginCreator {
    const postcss: true;
}
