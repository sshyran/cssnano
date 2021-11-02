"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6103],{4147:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(7294),l=a(1217),i=a(6165),o=a(4884),s=a(4973),r=a(6742);var c=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(r.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(r.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},m=a(3039),v=a(7588);var g=function(e){var t,a=e.content,s=e.sidebar,r=a.frontMatter,g=a.assets,d=a.metadata,p=d.title,u=d.description,_=d.nextItem,b=d.prevItem,f=d.date,N=d.tags,h=d.authors,E=r.hide_table_of_contents,k=r.keywords,C=r.toc_min_heading_level,Z=r.toc_max_heading_level,L=null!=(t=g.image)?t:r.image;return n.createElement(i.Z,{wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogPostPage,sidebar:s,toc:!E&&a.toc&&a.toc.length>0?n.createElement(v.Z,{toc:a.toc,minHeadingLevel:C,maxHeadingLevel:Z}):void 0},n.createElement(l.Z,{title:p,description:u,keywords:k,image:L},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:f}),h.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:h.map((function(e){return e.url})).filter(Boolean).join(",")}),N.length>0&&n.createElement("meta",{property:"article:tag",content:N.map((function(e){return e.label})).join(",")})),n.createElement(o.Z,{frontMatter:r,assets:g,metadata:d,isBlogPostPage:!0},n.createElement(a,null)),(_||b)&&n.createElement(c,{nextItem:_,prevItem:b}))}},7588:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7462),l=a(3366),i=a(7294),o=a(6010),s=a(5002),r="tableOfContents_35-E",c=["className"];var m=function(e){var t=e.className,a=(0,l.Z)(e,c);return i.createElement("div",{className:(0,o.Z)(r,"thin-scrollbar",t)},i.createElement(s.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7462),l=a(3366),i=a(7294),o=a(3039),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function r(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?i.createElement("ul",{className:l?void 0:a},t.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(r,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function c(e){var t=e.toc,a=e.className,c=void 0===a?"table-of-contents table-of-contents__left-border":a,m=e.linkClassName,v=void 0===m?"table-of-contents__link":m,g=e.linkActiveClassName,d=void 0===g?void 0:g,p=e.minHeadingLevel,u=e.maxHeadingLevel,_=(0,l.Z)(e,s),b=(0,o.LU)(),f=null!=p?p:b.tableOfContents.minHeadingLevel,N=null!=u?u:b.tableOfContents.maxHeadingLevel,h=(0,o.DA)({toc:t,minHeadingLevel:f,maxHeadingLevel:N}),E=(0,i.useMemo)((function(){if(v&&d)return{linkClassName:v,linkActiveClassName:d,minHeadingLevel:f,maxHeadingLevel:N}}),[v,d,f,N]);return(0,o.Si)(E),i.createElement(r,(0,n.Z)({toc:h,className:c,linkClassName:v},_))}}}]);