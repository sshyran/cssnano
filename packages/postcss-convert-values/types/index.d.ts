export default pluginCreator;
export type PostcssConvertValueOptions = {
    precision: boolean | number;
    angle?: boolean;
    time?: boolean;
    length?: boolean;
};
/**
 * @typedef {{precision: boolean | number, angle?: boolean, time?: boolean, length?: boolean}} PostcssConvertValueOptions */
/** @type {import('postcss').PluginCreator<PostcssConvertValueOptions>} opts */
declare function pluginCreator(opts?: {
    precision: boolean;
}): {
    postcssPlugin: string;
    /** @param {import('postcss').Root} css */
    OnceExit(css: import('postcss').Root): void;
};
declare namespace pluginCreator {
    const postcss: true;
}
