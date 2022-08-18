"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[790],{8343:function(e,t,r){r.d(t,{Ee:function(){return f}});var a=r(5868),n=r(3687),i=r(6053),o=r(9953),l=r(6491),s=r(5339),c=r(3712),u=["htmlWidth","htmlHeight","alt"],d=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"];function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=(0,l.Gp)((function(e,t){var r=e.htmlWidth,a=e.htmlHeight,i=e.alt,l=(0,n.Z)(e,u);return o.createElement("img",m({width:r,height:a,ref:t,alt:i},l))}));s.Ts&&(p.displayName="NativeImage");var f=(0,l.Gp)((function(e,t){var r=e.fallbackSrc,a=e.fallback,u=e.src,g=e.srcSet,f=e.align,h=e.fit,v=e.loading,y=e.ignoreFallback,b=e.crossOrigin,w=e.fallbackStrategy,E=void 0===w?"beforeLoadOrError":w,x=e.referrerPolicy,k=(0,n.Z)(e,d),O=null!=v||y||!(void 0!==r||void 0!==a),L=function(e){var t=e.loading,r=e.src,a=e.srcSet,n=e.onLoad,l=e.onError,s=e.crossOrigin,u=e.sizes,d=e.ignoreFallback,g=(0,o.useState)("pending"),m=(0,i.Z)(g,2),p=m[0],f=m[1];(0,o.useEffect)((function(){f(r?"loading":"pending")}),[r]);var h=(0,o.useRef)(),v=(0,o.useCallback)((function(){if(r){y();var e=new Image;e.src=r,s&&(e.crossOrigin=s),a&&(e.srcset=a),u&&(e.sizes=u),t&&(e.loading=t),e.onload=function(e){y(),f("loaded"),null==n||n(e)},e.onerror=function(e){y(),f("failed"),null==l||l(e)},h.current=e}}),[r,s,a,u,n,l,t]),y=function(){h.current&&(h.current.onload=null,h.current.onerror=null,h.current=null)};return(0,c.Gw)((function(){if(!d)return"loading"===p&&v(),function(){y()}}),[p,v,d]),d?"loaded":p}(m(m({},e),{},{ignoreFallback:O})),S=function(e,t){return"loaded"!==e&&"beforeLoadOrError"===t||"failed"===e&&"onError"===t}(L,E),C=m({ref:t,objectFit:h,objectPosition:f},O?k:(0,s.CE)(k,["onError","onLoad"]));return S?a||o.createElement(l.m$.img,m({as:p,className:"chakra-image__placeholder",src:r},C)):o.createElement(l.m$.img,m({as:p,src:u,srcSet:g,crossOrigin:b,loading:v,referrerPolicy:x,className:"chakra-image"},C))}));(0,l.Gp)((function(e,t){return o.createElement(l.m$.img,m({ref:t,as:p,className:"chakra-image"},e))}));s.Ts&&(f.displayName="Image")},6993:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var r;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,r=!1,a=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,a=r,r=!0,n++):r&&a&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),a=r,r=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,a=r,r=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r)};e.exports=t,e.exports.default=t},8131:function(e,t,r){r.d(t,{G:function(){return j},L:function(){return p},M:function(){return E},P:function(){return w},S:function(){return R},_:function(){return l},a:function(){return o},b:function(){return c},g:function(){return u},h:function(){return s}});var a=r(9953),n=(r(6993),r(7225)),i=r.n(n);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t.indexOf(r=i[a])>=0||(n[r]=e[r]);return n}var s=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,r,a,n){return void 0===n&&(n={}),o({},r,{loading:a,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function u(e,t,r,a,n,i,l,s){var c={};i&&(c.backgroundColor=i,"fixed"===r?(c.width=a,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),s&&(c.objectPosition=s);var u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var d,g=["children"],m=function(e){var t=e.layout,r=e.width,n=e.height;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/r*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:r,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){var t=e.children,r=l(e,g);return a.createElement(a.Fragment,null,a.createElement(m,o({},r)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],v=function(e){var t=e.src,r=e.srcSet,n=e.loading,i=e.alt,s=void 0===i?"":i,c=e.shouldLoad,u=l(e,f);return a.createElement("img",o({},u,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?r:void 0,"data-srcset":c?void 0:r,alt:s}))},y=function(e){var t=e.fallback,r=e.sources,n=void 0===r?[]:r,i=e.shouldLoad,s=void 0===i||i,c=l(e,h),u=c.sizes||(null==t?void 0:t.sizes),d=a.createElement(v,o({},c,t,{sizes:u,shouldLoad:s}));return n.length?a.createElement("picture",null,n.map((function(e){var t=e.media,r=e.srcSet,n=e.type;return a.createElement("source",{key:t+"-"+n+"-"+r,type:n,media:t,srcSet:s?r:void 0,"data-srcset":s?void 0:r,sizes:u})})),d):d};v.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var b=["fallback"],w=function(e){var t=e.fallback,r=l(e,b);return t?a.createElement(y,o({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",o({},r))};w.displayName="Placeholder",w.propTypes={fallback:n.string,sources:null==(d=y.propTypes)?void 0:d.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};var E=function(e){return a.createElement(a.Fragment,null,a.createElement(y,o({},e)),a.createElement("noscript",null,a.createElement(y,o({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=y.propTypes;var x,k,O=function(e,t,r){for(var a=arguments.length,n=new Array(a>3?a-3:0),o=3;o<a;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,r].concat(n)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},L={image:i().object.isRequired,alt:O},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],C=["style","className"],I=new Set,T=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,c=e.style,u=e.backgroundColor,d=e.className,g=e.class,m=e.onStartLoad,p=e.onLoad,f=e.onError,h=l(e,S),v=i.width,y=i.height,b=i.layout,w=function(e,t,r){var a={},n="gatsby-image-wrapper";return"fixed"===r?(a.width=e,a.height=t):"constrained"===r&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:a}}(v,y,b),E=w.style,O=w.className,L=l(w,C),T=(0,a.useRef)(),j=(0,a.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);g&&(d=g);var P=function(e,t,r){var a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(b,v,y);return(0,a.useEffect)((function(){x||(x=Promise.all([r.e(774),r.e(471)]).then(r.bind(r,7471)).then((function(e){var t=e.renderImageToString,r=e.swapPlaceholderImage;return k=t,{renderImageToString:t,swapPlaceholderImage:r}})));var e,t,a=T.current.querySelector("[data-gatsby-image-ssr]");return a&&s()?(a.complete?(null==m||m({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==m||m({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)})),void I.add(j)):k&&I.has(j)?void 0:(x.then((function(r){var a=r.renderImageToString,n=r.swapPlaceholderImage;T.current&&(T.current.innerHTML=a(o({isLoading:!0,isLoaded:I.has(j),image:i},h)),I.has(j)||(e=requestAnimationFrame((function(){T.current&&(t=n(T.current,j,I,c,m,p,f))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,a.useLayoutEffect)((function(){I.has(j)&&k&&(T.current.innerHTML=k(o({isLoading:I.has(j),isLoaded:I.has(j),image:i},h)),null==m||m({wasCached:!0}),null==p||p({wasCached:!0}))}),[i]),(0,a.createElement)(n,o({},L,{style:o({},E,c,{backgroundColor:u}),className:O+(d?" "+d:""),ref:T,dangerouslySetInnerHTML:{__html:P},suppressHydrationWarning:!0}))},j=(0,a.memo)((function(e){return e.image?(0,a.createElement)(T,e):null}));j.propTypes=L,j.displayName="GatsbyImage";var P,A=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],_=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},z=new Set(["fixed","fullWidth","constrained"]),N={src:i().string.isRequired,alt:O,width:_,height:_,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!z.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},R=(P=j,function(e){var t=e.src,r=e.__imageData,n=e.__error,i=l(e,A);return n&&console.warn(n),r?a.createElement(P,o({image:r},i)):(console.warn("Image not loaded",t),null)});R.displayName="StaticImage",R.propTypes=N},4411:function(e,t,r){r.d(t,{R:function(){return u}});var a=r(9700),n=r(5492),i=r(8343),o=r(8131),l=r(9040),s=r(9953),c=r(3970);function u(e){var t,r,u,d,g,m,p,f=e.post,h=(0,a.ff)("blackAlpha.50","whiteAlpha.100"),v=null===(t=f.frontmatter)||void 0===t||null===(r=t.heroImageFile)||void 0===r||null===(u=r.childImageSharp)||void 0===u?void 0:u.gatsbyImageData,y=null===(d=f.frontmatter)||void 0===d?void 0:d.heroImageLink,b="/"+f.slug||0;return s.createElement(n.xu,{sx:{transition:"transform .2s ease",_hover:{transform:"translateY(-4px)"}},cursor:"pointer",position:"relative"},s.createElement(n.rU,{as:l.Link,to:b,position:"absolute",top:"0",bottom:"0",right:"0",left:"0",zIndex:"1"}),s.createElement(n.xu,{roundedTop:"xl",overflow:"hidden"},y&&s.createElement(i.Ee,{src:y,alt:(null===(g=f.frontmatter)||void 0===g?void 0:g.heroImageAlt)||"",objectFit:"cover",height:"200px",w:"100%"}),!y&&v&&s.createElement(o.G,{objectFit:"cover",style:{height:"200px",width:"100%"},image:v,alt:(null===(m=f.frontmatter)||void 0===m?void 0:m.heroImageAlt)||""})),s.createElement(n.xu,{bg:h,p:8,roundedBottom:"xl",roundedTop:y||v?void 0:"xl"},s.createElement(n.X6,{as:"h3",fontSize:"3xl",mb:"3"},null===(p=f.frontmatter)||void 0===p?void 0:p.title),s.createElement(n.xu,{textDecoration:"none"},s.createElement(c.l,{post:f}))))}},8095:function(e,t,r){var a=r(9953),n=r(9040),i=r(9700),o=r(5492),l=r(5908);t.Z=function(e){var t,r,s=e.location,c=e.title,u=e.children,d=(0,i.If)(),g=d.colorMode,m=d.toggleColorMode,p=(0,i.ff)("blackAlpha.600","whiteAlpha.500"),f="/blog/"===s.pathname,h=(0,n.useStaticQuery)("864671932");return a.createElement(o.W2,{maxW:"container.xl","data-is-root-path":f},a.createElement(o.xu,{as:"header",mb:"12"},a.createElement(o.X6,{as:"h1",textAlign:"center",size:"4xl",my:"12"},a.createElement(o.rU,{as:n.Link,to:"/",id:"blog-title"},c),a.createElement(l.zx,{onClick:m,ml:"4",variant:"outline"},"light"===g?"🌙":"💡"))),a.createElement(o.xu,{as:"main",my:"12"},u),a.createElement(o.xu,{as:"footer",mt:"12",mb:"12",color:p},"© ",(new Date).getFullYear(),", ",null===(t=h.site)||void 0===t||null===(r=t.siteMetadata)||void 0===r?void 0:r.copyright,a.createElement("br",null),a.createElement(o.rU,{href:"https://github.com/fastup-kit",textDecoration:"underline"},"Built with OpenSource")))}},3970:function(e,t,r){r.d(t,{l:function(){return o}});var a=r(9700),n=r(5492),i=r(9953);function o(e){var t,r,o=e.post,l=(0,a.ff)("gray.300","whiteAlpha.200"),s=null===(t=o.frontmatter)||void 0===t?void 0:t.tag,c=(null==o?void 0:o.timeToRead)||0;return i.createElement(n.xu,null,s&&i.createElement(n.xv,{px:"1.5",py:"1",as:"span",fontSize:"sm",bg:l,rounded:"md"},s),s&&" · ",null===(r=o.frontmatter)||void 0===r?void 0:r.date,c>0?" · "+c+" min read":"")}}}]);
//# sourceMappingURL=022d3153bf09c36cd784dcdb36ffbd187f9c96d7-d3bc44c3cc555c499c03.js.map