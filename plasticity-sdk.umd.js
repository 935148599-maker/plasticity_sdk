(function(S,w){typeof exports=="object"&&typeof module<"u"?module.exports=w():typeof define=="function"&&define.amd?define(w):(S=typeof globalThis<"u"?globalThis:S||self,S.PlasticitySDK=w())})(this,function(){"use strict";var at=Object.defineProperty;var lt=(S,w,v)=>w in S?at(S,w,{enumerable:!0,configurable:!0,writable:!0,value:v}):S[w]=v;var g=(S,w,v)=>lt(S,typeof w!="symbol"?w+"":w,v);var j;class S{constructor(e){g(this,"overlay");g(this,"active",!1);g(this,"hoveredElement",null);g(this,"callbacks");g(this,"rafId",null);this.callbacks=e,this.overlay=this.createOverlay(),document.body.appendChild(this.overlay),this.handleMouseMove=this.handleMouseMove.bind(this),this.handleClick=this.handleClick.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this)}createOverlay(){const e=document.createElement("div");e.id="plasticity-inspector-overlay",e.style.cssText=`
      position: fixed;
      pointer-events: none;
      background: rgba(0, 122, 255, 0.15);
      border: 1.5px solid #007aff;
      z-index: 10000000;
      display: none;
      transition: width 0.1s, height 0.1s, top 0.1s, left 0.1s;
      box-shadow: 0 0 20px rgba(0, 122, 255, 0.3);
      border-radius: 4px;
    `;const t=document.createElement("div");return t.id="plasticity-label",t.style.cssText=`
      position: absolute;
      top: -28px;
      left: 0;
      background: #007aff;
      color: white;
      font-size: 11px;
      font-weight: 600;
      padding: 4px 8px;
      border-radius: 6px;
      white-space: nowrap;
      pointer-events: none;
    `,e.appendChild(t),e}start(){this.active||(this.active=!0,document.addEventListener("mousemove",this.handleMouseMove,!0),document.addEventListener("click",this.handleClick,!0),document.addEventListener("keydown",this.handleKeyDown,!0),document.body.style.cursor="crosshair")}stop(){this.active&&(this.active=!1,this.overlay.style.display="none",this.rafId&&cancelAnimationFrame(this.rafId),document.removeEventListener("mousemove",this.handleMouseMove,!0),document.removeEventListener("click",this.handleClick,!0),document.removeEventListener("keydown",this.handleKeyDown,!0),document.body.style.cursor="")}handleMouseMove(e){if(!this.active)return;const t=e.target;t.closest("#plasticity-root")||t.id==="plasticity-inspector-overlay"||this.hoveredElement!==t&&(this.hoveredElement=t,this.rafId&&cancelAnimationFrame(this.rafId),this.rafId=requestAnimationFrame(()=>{this.updateOverlay(t)}))}updateOverlay(e){const t=e.getBoundingClientRect();this.overlay.style.width=`${t.width}px`,this.overlay.style.height=`${t.height}px`,this.overlay.style.top=`${t.top}px`,this.overlay.style.left=`${t.left}px`,this.overlay.style.display="block";const s=this.overlay.querySelector("#plasticity-label");s&&(s.textContent=`${e.tagName.toLowerCase()}${e.id?"#"+e.id:""}`)}handleClick(e){this.active&&(e.preventDefault(),e.stopPropagation(),this.hoveredElement&&(this.callbacks.onSelect(this.hoveredElement),this.stop()))}handleKeyDown(e){e.key==="Escape"&&(this.stop(),this.callbacks.onCancel())}}function w(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var v=w();function te(n){v=n}var A={exec:()=>null};function k(n,e=""){let t=typeof n=="string"?n:n.source,s={replace:(r,a)=>{let l=typeof a=="string"?a:a.source;return l=l.replace(y.caret,"$1"),t=t.replace(r,l),s},getRegex:()=>new RegExp(t,e)};return s}var ye=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),y={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}#`),htmlBeginRegex:n=>new RegExp(`^ {0,${Math.min(3,n-1)}}<(?:[a-z].*>|!--)`,"i")},ve=/^(?:[ \t]*(?:\n|$))+/,Se=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,$e=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,C=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Te=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,H=/(?:[*+-]|\d{1,9}[.)])/,se=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,ne=k(se).replace(/bull/g,H).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Re=k(se).replace(/bull/g,H).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Q=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Ee=/^[^\n]+/,F=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,ze=k(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",F).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Ae=k(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,H).getRegex(),_="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",G=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Ce=k("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",G).replace("tag",_).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),re=k(Q).replace("hr",C).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",_).getRegex(),Le=k(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",re).getRegex(),K={blockquote:Le,code:Se,def:ze,fences:$e,heading:Te,hr:C,html:Ce,lheading:ne,list:Ae,newline:ve,paragraph:re,table:A,text:Ee},ie=k("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",C).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",_).getRegex(),Ie={...K,lheading:Re,table:ie,paragraph:k(Q).replace("hr",C).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ie).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",_).getRegex()},Pe={...K,html:k(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",G).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:A,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:k(Q).replace("hr",C).replace("heading",` *#{1,6} *[^
]`).replace("lheading",ne).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Me=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,_e=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,ae=/^( {2,}|\\)\n(?!\s*$)/,Be=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,B=/[\p{P}\p{S}]/u,U=/[\s\p{P}\p{S}]/u,le=/[^\s\p{P}\p{S}]/u,qe=k(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,U).getRegex(),oe=/(?!~)[\p{P}\p{S}]/u,De=/(?!~)[\s\p{P}\p{S}]/u,Oe=/(?:[^\s\p{P}\p{S}]|~)/u,Ne=k(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",ye?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),ce=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,je=k(ce,"u").replace(/punct/g,B).getRegex(),Ze=k(ce,"u").replace(/punct/g,oe).getRegex(),he="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",He=k(he,"gu").replace(/notPunctSpace/g,le).replace(/punctSpace/g,U).replace(/punct/g,B).getRegex(),Qe=k(he,"gu").replace(/notPunctSpace/g,Oe).replace(/punctSpace/g,De).replace(/punct/g,oe).getRegex(),Fe=k("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,le).replace(/punctSpace/g,U).replace(/punct/g,B).getRegex(),Ge=k(/\\(punct)/,"gu").replace(/punct/g,B).getRegex(),Ke=k(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Ue=k(G).replace("(?:-->|$)","-->").getRegex(),Xe=k("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Ue).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),q=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Ye=k(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",q).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),pe=k(/^!?\[(label)\]\[(ref)\]/).replace("label",q).replace("ref",F).getRegex(),ue=k(/^!?\[(ref)\](?:\[\])?/).replace("ref",F).getRegex(),Je=k("reflink|nolink(?!\\()","g").replace("reflink",pe).replace("nolink",ue).getRegex(),de=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,X={_backpedal:A,anyPunctuation:Ge,autolink:Ke,blockSkip:Ne,br:ae,code:_e,del:A,emStrongLDelim:je,emStrongRDelimAst:He,emStrongRDelimUnd:Fe,escape:Me,link:Ye,nolink:ue,punctuation:qe,reflink:pe,reflinkSearch:Je,tag:Xe,text:Be,url:A},We={...X,link:k(/^!?\[(label)\]\((.*?)\)/).replace("label",q).getRegex(),reflink:k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",q).getRegex()},Y={...X,emStrongRDelimAst:Qe,emStrongLDelim:Ze,url:k(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",de).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:k(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",de).getRegex()},Ve={...Y,br:k(ae).replace("{2,}","*").getRegex(),text:k(Y.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},D={normal:K,gfm:Ie,pedantic:Pe},L={normal:X,gfm:Y,breaks:Ve,pedantic:We},et={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ge=n=>et[n];function R(n,e){if(e){if(y.escapeTest.test(n))return n.replace(y.escapeReplace,ge)}else if(y.escapeTestNoEncode.test(n))return n.replace(y.escapeReplaceNoEncode,ge);return n}function fe(n){try{n=encodeURI(n).replace(y.percentDecode,"%")}catch{return null}return n}function ke(n,e){var a;let t=n.replace(y.findPipe,(l,i,c)=>{let o=!1,p=i;for(;--p>=0&&c[p]==="\\";)o=!o;return o?"|":" |"}),s=t.split(y.splitPipe),r=0;if(s[0].trim()||s.shift(),s.length>0&&!((a=s.at(-1))!=null&&a.trim())&&s.pop(),e)if(s.length>e)s.splice(e);else for(;s.length<e;)s.push("");for(;r<s.length;r++)s[r]=s[r].trim().replace(y.slashPipe,"|");return s}function I(n,e,t){let s=n.length;if(s===0)return"";let r=0;for(;r<s&&n.charAt(s-r-1)===e;)r++;return n.slice(0,s-r)}function tt(n,e){if(n.indexOf(e[1])===-1)return-1;let t=0;for(let s=0;s<n.length;s++)if(n[s]==="\\")s++;else if(n[s]===e[0])t++;else if(n[s]===e[1]&&(t--,t<0))return s;return t>0?-2:-1}function xe(n,e,t,s,r){let a=e.href,l=e.title||null,i=n[1].replace(r.other.outputLinkReplace,"$1");s.state.inLink=!0;let c={type:n[0].charAt(0)==="!"?"image":"link",raw:t,href:a,title:l,text:i,tokens:s.inlineTokens(i)};return s.state.inLink=!1,c}function st(n,e,t){let s=n.match(t.other.indentCodeCompensation);if(s===null)return e;let r=s[1];return e.split(`
`).map(a=>{let l=a.match(t.other.beginningSpace);if(l===null)return a;let[i]=l;return i.length>=r.length?a.slice(r.length):a}).join(`
`)}var O=class{constructor(n){g(this,"options");g(this,"rules");g(this,"lexer");this.options=n||v}space(n){let e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){let e=this.rules.block.code.exec(n);if(e){let t=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:I(t,`
`)}}}fences(n){let e=this.rules.block.fences.exec(n);if(e){let t=e[0],s=st(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:s}}}heading(n){let e=this.rules.block.heading.exec(n);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){let s=I(t,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(t=s.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(n){let e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:I(e[0],`
`)}}blockquote(n){let e=this.rules.block.blockquote.exec(n);if(e){let t=I(e[0],`
`).split(`
`),s="",r="",a=[];for(;t.length>0;){let l=!1,i=[],c;for(c=0;c<t.length;c++)if(this.rules.other.blockquoteStart.test(t[c]))i.push(t[c]),l=!0;else if(!l)i.push(t[c]);else break;t=t.slice(c);let o=i.join(`
`),p=o.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${o}`:o,r=r?`${r}
${p}`:p;let d=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(p,a,!0),this.lexer.state.top=d,t.length===0)break;let u=a.at(-1);if((u==null?void 0:u.type)==="code")break;if((u==null?void 0:u.type)==="blockquote"){let h=u,b=h.raw+`
`+t.join(`
`),f=this.blockquote(b);a[a.length-1]=f,s=s.substring(0,s.length-h.raw.length)+f.raw,r=r.substring(0,r.length-h.text.length)+f.text;break}else if((u==null?void 0:u.type)==="list"){let h=u,b=h.raw+`
`+t.join(`
`),f=this.list(b);a[a.length-1]=f,s=s.substring(0,s.length-u.raw.length)+f.raw,r=r.substring(0,r.length-h.raw.length)+f.raw,t=b.substring(a.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:a,text:r}}}list(n){var t,s;let e=this.rules.block.list.exec(n);if(e){let r=e[1].trim(),a=r.length>1,l={type:"list",raw:"",ordered:a,start:a?+r.slice(0,-1):"",loose:!1,items:[]};r=a?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=a?r:"[*+-]");let i=this.rules.other.listItemRegex(r),c=!1;for(;n;){let p=!1,d="",u="";if(!(e=i.exec(n))||this.rules.block.hr.test(n))break;d=e[0],n=n.substring(d.length);let h=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,E=>" ".repeat(3*E.length)),b=n.split(`
`,1)[0],f=!h.trim(),m=0;if(this.options.pedantic?(m=2,u=h.trimStart()):f?m=e[1].length+1:(m=e[2].search(this.rules.other.nonSpaceChar),m=m>4?1:m,u=h.slice(m),m+=e[1].length),f&&this.rules.other.blankLine.test(b)&&(d+=b+`
`,n=n.substring(b.length+1),p=!0),!p){let E=this.rules.other.nextBulletRegex(m),Z=this.rules.other.hrRegex(m),me=this.rules.other.fencesBeginRegex(m),we=this.rules.other.headingBeginRegex(m),it=this.rules.other.htmlBeginRegex(m);for(;n;){let W=n.split(`
`,1)[0],M;if(b=W,this.options.pedantic?(b=b.replace(this.rules.other.listReplaceNesting,"  "),M=b):M=b.replace(this.rules.other.tabCharGlobal,"    "),me.test(b)||we.test(b)||it.test(b)||E.test(b)||Z.test(b))break;if(M.search(this.rules.other.nonSpaceChar)>=m||!b.trim())u+=`
`+M.slice(m);else{if(f||h.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||me.test(h)||we.test(h)||Z.test(h))break;u+=`
`+b}!f&&!b.trim()&&(f=!0),d+=W+`
`,n=n.substring(W.length+1),h=M.slice(m)}}l.loose||(c?l.loose=!0:this.rules.other.doubleBlankLine.test(d)&&(c=!0)),l.items.push({type:"list_item",raw:d,task:!!this.options.gfm&&this.rules.other.listIsTask.test(u),loose:!1,text:u,tokens:[]}),l.raw+=d}let o=l.items.at(-1);if(o)o.raw=o.raw.trimEnd(),o.text=o.text.trimEnd();else return;l.raw=l.raw.trimEnd();for(let p of l.items){if(this.lexer.state.top=!1,p.tokens=this.lexer.blockTokens(p.text,[]),p.task){if(p.text=p.text.replace(this.rules.other.listReplaceTask,""),((t=p.tokens[0])==null?void 0:t.type)==="text"||((s=p.tokens[0])==null?void 0:s.type)==="paragraph"){p.tokens[0].raw=p.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),p.tokens[0].text=p.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let u=this.lexer.inlineQueue.length-1;u>=0;u--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[u].src)){this.lexer.inlineQueue[u].src=this.lexer.inlineQueue[u].src.replace(this.rules.other.listReplaceTask,"");break}}let d=this.rules.other.listTaskCheckbox.exec(p.raw);if(d){let u={type:"checkbox",raw:d[0]+" ",checked:d[0]!=="[ ]"};p.checked=u.checked,l.loose?p.tokens[0]&&["paragraph","text"].includes(p.tokens[0].type)&&"tokens"in p.tokens[0]&&p.tokens[0].tokens?(p.tokens[0].raw=u.raw+p.tokens[0].raw,p.tokens[0].text=u.raw+p.tokens[0].text,p.tokens[0].tokens.unshift(u)):p.tokens.unshift({type:"paragraph",raw:u.raw,text:u.raw,tokens:[u]}):p.tokens.unshift(u)}}if(!l.loose){let d=p.tokens.filter(h=>h.type==="space"),u=d.length>0&&d.some(h=>this.rules.other.anyLine.test(h.raw));l.loose=u}}if(l.loose)for(let p of l.items){p.loose=!0;for(let d of p.tokens)d.type==="text"&&(d.type="paragraph")}return l}}html(n){let e=this.rules.block.html.exec(n);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(n){let e=this.rules.block.def.exec(n);if(e){let t=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:s,title:r}}}table(n){var l;let e=this.rules.block.table.exec(n);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let t=ke(e[1]),s=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=(l=e[3])!=null&&l.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],a={type:"table",raw:e[0],header:[],align:[],rows:[]};if(t.length===s.length){for(let i of s)this.rules.other.tableAlignRight.test(i)?a.align.push("right"):this.rules.other.tableAlignCenter.test(i)?a.align.push("center"):this.rules.other.tableAlignLeft.test(i)?a.align.push("left"):a.align.push(null);for(let i=0;i<t.length;i++)a.header.push({text:t[i],tokens:this.lexer.inline(t[i]),header:!0,align:a.align[i]});for(let i of r)a.rows.push(ke(i,a.header.length).map((c,o)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:a.align[o]})));return a}}lheading(n){let e=this.rules.block.lheading.exec(n);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(n){let e=this.rules.block.paragraph.exec(n);if(e){let t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(n){let e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){let e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(n){let e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(n){let e=this.rules.inline.link.exec(n);if(e){let t=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;let a=I(t.slice(0,-1),"\\");if((t.length-a.length)%2===0)return}else{let a=tt(e[2],"()");if(a===-2)return;if(a>-1){let l=(e[0].indexOf("!")===0?5:4)+e[1].length+a;e[2]=e[2].substring(0,a),e[0]=e[0].substring(0,l).trim(),e[3]=""}}let s=e[2],r="";if(this.options.pedantic){let a=this.rules.other.pedanticHrefTitle.exec(s);a&&(s=a[1],r=a[3])}else r=e[3]?e[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?s=s.slice(1):s=s.slice(1,-1)),xe(e,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(n,e){let t;if((t=this.rules.inline.reflink.exec(n))||(t=this.rules.inline.nolink.exec(n))){let s=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=e[s.toLowerCase()];if(!r){let a=t[0].charAt(0);return{type:"text",raw:a,text:a}}return xe(t,r,t[0],this.lexer,this.rules)}}emStrong(n,e,t=""){let s=this.rules.inline.emStrongLDelim.exec(n);if(!(!s||s[3]&&t.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[2])||!t||this.rules.inline.punctuation.exec(t))){let r=[...s[0]].length-1,a,l,i=r,c=0,o=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(o.lastIndex=0,e=e.slice(-1*n.length+r);(s=o.exec(e))!=null;){if(a=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!a)continue;if(l=[...a].length,s[3]||s[4]){i+=l;continue}else if((s[5]||s[6])&&r%3&&!((r+l)%3)){c+=l;continue}if(i-=l,i>0)continue;l=Math.min(l,l+i+c);let p=[...s[0]][0].length,d=n.slice(0,r+s.index+p+l);if(Math.min(r,l)%2){let h=d.slice(1,-1);return{type:"em",raw:d,text:h,tokens:this.lexer.inlineTokens(h)}}let u=d.slice(2,-2);return{type:"strong",raw:d,text:u,tokens:this.lexer.inlineTokens(u)}}}}codespan(n){let e=this.rules.inline.code.exec(n);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(t),r=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return s&&r&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(n){let e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n){let e=this.rules.inline.del.exec(n);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(n){let e=this.rules.inline.autolink.exec(n);if(e){let t,s;return e[2]==="@"?(t=e[1],s="mailto:"+t):(t=e[1],s=t),{type:"link",raw:e[0],text:t,href:s,tokens:[{type:"text",raw:t,text:t}]}}}url(n){var t;let e;if(e=this.rules.inline.url.exec(n)){let s,r;if(e[2]==="@")s=e[0],r="mailto:"+s;else{let a;do a=e[0],e[0]=((t=this.rules.inline._backpedal.exec(e[0]))==null?void 0:t[0])??"";while(a!==e[0]);s=e[0],e[1]==="www."?r="http://"+e[0]:r=e[0]}return{type:"link",raw:e[0],text:s,href:r,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(n){let e=this.rules.inline.text.exec(n);if(e){let t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:t}}}},$=class V{constructor(e){g(this,"tokens");g(this,"options");g(this,"state");g(this,"inlineQueue");g(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||v,this.options.tokenizer=this.options.tokenizer||new O,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:y,block:D.normal,inline:L.normal};this.options.pedantic?(t.block=D.pedantic,t.inline=L.pedantic):this.options.gfm&&(t.block=D.gfm,this.options.breaks?t.inline=L.breaks:t.inline=L.gfm),this.tokenizer.rules=t}static get rules(){return{block:D,inline:L}}static lex(e,t){return new V(t).lex(e)}static lexInline(e,t){return new V(t).inlineTokens(e)}lex(e){e=e.replace(y.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let s=this.inlineQueue[t];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],s=!1){var r,a,l;for(this.options.pedantic&&(e=e.replace(y.tabCharGlobal,"    ").replace(y.spaceLine,""));e;){let i;if((a=(r=this.options.extensions)==null?void 0:r.block)!=null&&a.some(o=>(i=o.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let o=t.at(-1);i.raw.length===1&&o!==void 0?o.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let o=t.at(-1);(o==null?void 0:o.type)==="paragraph"||(o==null?void 0:o.type)==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+i.raw,o.text+=`
`+i.text,this.inlineQueue.at(-1).src=o.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let o=t.at(-1);(o==null?void 0:o.type)==="paragraph"||(o==null?void 0:o.type)==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+i.raw,o.text+=`
`+i.raw,this.inlineQueue.at(-1).src=o.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let c=e;if((l=this.options.extensions)!=null&&l.startBlock){let o=1/0,p=e.slice(1),d;this.options.extensions.startBlock.forEach(u=>{d=u.call({lexer:this},p),typeof d=="number"&&d>=0&&(o=Math.min(o,d))}),o<1/0&&o>=0&&(c=e.substring(0,o+1))}if(this.state.top&&(i=this.tokenizer.paragraph(c))){let o=t.at(-1);s&&(o==null?void 0:o.type)==="paragraph"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):t.push(i),s=c.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let o=t.at(-1);(o==null?void 0:o.type)==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):t.push(i);continue}if(e){let o="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){var c,o,p,d,u;let s=e,r=null;if(this.tokens.links){let h=Object.keys(this.tokens.links);if(h.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)h.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,r.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let a;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)a=r[2]?r[2].length:0,s=s.slice(0,r.index+a)+"["+"a".repeat(r[0].length-a-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);s=((o=(c=this.options.hooks)==null?void 0:c.emStrongMask)==null?void 0:o.call({lexer:this},s))??s;let l=!1,i="";for(;e;){l||(i=""),l=!1;let h;if((d=(p=this.options.extensions)==null?void 0:p.inline)!=null&&d.some(f=>(h=f.call({lexer:this},e,t))?(e=e.substring(h.raw.length),t.push(h),!0):!1))continue;if(h=this.tokenizer.escape(e)){e=e.substring(h.raw.length),t.push(h);continue}if(h=this.tokenizer.tag(e)){e=e.substring(h.raw.length),t.push(h);continue}if(h=this.tokenizer.link(e)){e=e.substring(h.raw.length),t.push(h);continue}if(h=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(h.raw.length);let f=t.at(-1);h.type==="text"&&(f==null?void 0:f.type)==="text"?(f.raw+=h.raw,f.text+=h.text):t.push(h);continue}if(h=this.tokenizer.emStrong(e,s,i)){e=e.substring(h.raw.length),t.push(h);continue}if(h=this.tokenizer.codespan(e)){e=e.substring(h.raw.length),t.push(h);continue}if(h=this.tokenizer.br(e)){e=e.substring(h.raw.length),t.push(h);continue}if(h=this.tokenizer.del(e)){e=e.substring(h.raw.length),t.push(h);continue}if(h=this.tokenizer.autolink(e)){e=e.substring(h.raw.length),t.push(h);continue}if(!this.state.inLink&&(h=this.tokenizer.url(e))){e=e.substring(h.raw.length),t.push(h);continue}let b=e;if((u=this.options.extensions)!=null&&u.startInline){let f=1/0,m=e.slice(1),E;this.options.extensions.startInline.forEach(Z=>{E=Z.call({lexer:this},m),typeof E=="number"&&E>=0&&(f=Math.min(f,E))}),f<1/0&&f>=0&&(b=e.substring(0,f+1))}if(h=this.tokenizer.inlineText(b)){e=e.substring(h.raw.length),h.raw.slice(-1)!=="_"&&(i=h.raw.slice(-1)),l=!0;let f=t.at(-1);(f==null?void 0:f.type)==="text"?(f.raw+=h.raw,f.text+=h.text):t.push(h);continue}if(e){let f="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(f);break}else throw new Error(f)}}return t}},N=class{constructor(n){g(this,"options");g(this,"parser");this.options=n||v}space(n){return""}code({text:n,lang:e,escaped:t}){var a;let s=(a=(e||"").match(y.notSpaceStart))==null?void 0:a[0],r=n.replace(y.endingNewline,"")+`
`;return s?'<pre><code class="language-'+R(s)+'">'+(t?r:R(r,!0))+`</code></pre>
`:"<pre><code>"+(t?r:R(r,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}def(n){return""}heading({tokens:n,depth:e}){return`<h${e}>${this.parser.parseInline(n)}</h${e}>
`}hr(n){return`<hr>
`}list(n){let e=n.ordered,t=n.start,s="";for(let l=0;l<n.items.length;l++){let i=n.items[l];s+=this.listitem(i)}let r=e?"ol":"ul",a=e&&t!==1?' start="'+t+'"':"";return"<"+r+a+`>
`+s+"</"+r+`>
`}listitem(n){return`<li>${this.parser.parse(n.tokens)}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let e="",t="";for(let r=0;r<n.header.length;r++)t+=this.tablecell(n.header[r]);e+=this.tablerow({text:t});let s="";for(let r=0;r<n.rows.length;r++){let a=n.rows[r];t="";for(let l=0;l<a.length;l++)t+=this.tablecell(a[l]);s+=this.tablerow({text:t})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+s+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){let e=this.parser.parseInline(n.tokens),t=n.header?"th":"td";return(n.align?`<${t} align="${n.align}">`:`<${t}>`)+e+`</${t}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${R(n,!0)}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:e,tokens:t}){let s=this.parser.parseInline(t),r=fe(n);if(r===null)return s;n=r;let a='<a href="'+n+'"';return e&&(a+=' title="'+R(e)+'"'),a+=">"+s+"</a>",a}image({href:n,title:e,text:t,tokens:s}){s&&(t=this.parser.parseInline(s,this.parser.textRenderer));let r=fe(n);if(r===null)return R(t);n=r;let a=`<img src="${n}" alt="${t}"`;return e&&(a+=` title="${R(e)}"`),a+=">",a}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):"escaped"in n&&n.escaped?n.text:R(n.text)}},J=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}checkbox({raw:n}){return n}},T=class ee{constructor(e){g(this,"options");g(this,"renderer");g(this,"textRenderer");this.options=e||v,this.options.renderer=this.options.renderer||new N,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new J}static parse(e,t){return new ee(t).parse(e)}static parseInline(e,t){return new ee(t).parseInline(e)}parse(e){var s,r;let t="";for(let a=0;a<e.length;a++){let l=e[a];if((r=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&r[l.type]){let c=l,o=this.options.extensions.renderers[c.type].call({parser:this},c);if(o!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(c.type)){t+=o||"";continue}}let i=l;switch(i.type){case"space":{t+=this.renderer.space(i);break}case"hr":{t+=this.renderer.hr(i);break}case"heading":{t+=this.renderer.heading(i);break}case"code":{t+=this.renderer.code(i);break}case"table":{t+=this.renderer.table(i);break}case"blockquote":{t+=this.renderer.blockquote(i);break}case"list":{t+=this.renderer.list(i);break}case"checkbox":{t+=this.renderer.checkbox(i);break}case"html":{t+=this.renderer.html(i);break}case"def":{t+=this.renderer.def(i);break}case"paragraph":{t+=this.renderer.paragraph(i);break}case"text":{t+=this.renderer.text(i);break}default:{let c='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return t}parseInline(e,t=this.renderer){var r,a;let s="";for(let l=0;l<e.length;l++){let i=e[l];if((a=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&a[i.type]){let o=this.options.extensions.renderers[i.type].call({parser:this},i);if(o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){s+=o||"";continue}}let c=i;switch(c.type){case"escape":{s+=t.text(c);break}case"html":{s+=t.html(c);break}case"link":{s+=t.link(c);break}case"image":{s+=t.image(c);break}case"checkbox":{s+=t.checkbox(c);break}case"strong":{s+=t.strong(c);break}case"em":{s+=t.em(c);break}case"codespan":{s+=t.codespan(c);break}case"br":{s+=t.br(c);break}case"del":{s+=t.del(c);break}case"text":{s+=t.text(c);break}default:{let o='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return s}},P=(j=class{constructor(n){g(this,"options");g(this,"block");this.options=n||v}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}emStrongMask(n){return n}provideLexer(){return this.block?$.lex:$.lexInline}provideParser(){return this.block?T.parse:T.parseInline}},g(j,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),g(j,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),j),nt=class{constructor(...n){g(this,"defaults",w());g(this,"options",this.setOptions);g(this,"parse",this.parseMarkdown(!0));g(this,"parseInline",this.parseMarkdown(!1));g(this,"Parser",T);g(this,"Renderer",N);g(this,"TextRenderer",J);g(this,"Lexer",$);g(this,"Tokenizer",O);g(this,"Hooks",P);this.use(...n)}walkTokens(n,e){var s,r;let t=[];for(let a of n)switch(t=t.concat(e.call(this,a)),a.type){case"table":{let l=a;for(let i of l.header)t=t.concat(this.walkTokens(i.tokens,e));for(let i of l.rows)for(let c of i)t=t.concat(this.walkTokens(c.tokens,e));break}case"list":{let l=a;t=t.concat(this.walkTokens(l.items,e));break}default:{let l=a;(r=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&r[l.type]?this.defaults.extensions.childTokens[l.type].forEach(i=>{let c=l[i].flat(1/0);t=t.concat(this.walkTokens(c,e))}):l.tokens&&(t=t.concat(this.walkTokens(l.tokens,e)))}}return t}use(...n){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(t=>{let s={...t};if(s.async=this.defaults.async||s.async||!1,t.extensions&&(t.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){let a=e.renderers[r.name];a?e.renderers[r.name]=function(...l){let i=r.renderer.apply(this,l);return i===!1&&(i=a.apply(this,l)),i}:e.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let a=e[r.level];a?a.unshift(r.tokenizer):e[r.level]=[r.tokenizer],r.start&&(r.level==="block"?e.startBlock?e.startBlock.push(r.start):e.startBlock=[r.start]:r.level==="inline"&&(e.startInline?e.startInline.push(r.start):e.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(e.childTokens[r.name]=r.childTokens)}),s.extensions=e),t.renderer){let r=this.defaults.renderer||new N(this.defaults);for(let a in t.renderer){if(!(a in r))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;let l=a,i=t.renderer[l],c=r[l];r[l]=(...o)=>{let p=i.apply(r,o);return p===!1&&(p=c.apply(r,o)),p||""}}s.renderer=r}if(t.tokenizer){let r=this.defaults.tokenizer||new O(this.defaults);for(let a in t.tokenizer){if(!(a in r))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;let l=a,i=t.tokenizer[l],c=r[l];r[l]=(...o)=>{let p=i.apply(r,o);return p===!1&&(p=c.apply(r,o)),p}}s.tokenizer=r}if(t.hooks){let r=this.defaults.hooks||new P;for(let a in t.hooks){if(!(a in r))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;let l=a,i=t.hooks[l],c=r[l];P.passThroughHooks.has(a)?r[l]=o=>{if(this.defaults.async&&P.passThroughHooksRespectAsync.has(a))return(async()=>{let d=await i.call(r,o);return c.call(r,d)})();let p=i.call(r,o);return c.call(r,p)}:r[l]=(...o)=>{if(this.defaults.async)return(async()=>{let d=await i.apply(r,o);return d===!1&&(d=await c.apply(r,o)),d})();let p=i.apply(r,o);return p===!1&&(p=c.apply(r,o)),p}}s.hooks=r}if(t.walkTokens){let r=this.defaults.walkTokens,a=t.walkTokens;s.walkTokens=function(l){let i=[];return i.push(a.call(this,l)),r&&(i=i.concat(r.call(this,l))),i}}this.defaults={...this.defaults,...s}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,e){return $.lex(n,e??this.defaults)}parser(n,e){return T.parse(n,e??this.defaults)}parseMarkdown(n){return(e,t)=>{let s={...t},r={...this.defaults,...s},a=this.onError(!!r.silent,!!r.async);if(this.defaults.async===!0&&s.async===!1)return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(r.hooks&&(r.hooks.options=r,r.hooks.block=n),r.async)return(async()=>{let l=r.hooks?await r.hooks.preprocess(e):e,i=await(r.hooks?await r.hooks.provideLexer():n?$.lex:$.lexInline)(l,r),c=r.hooks?await r.hooks.processAllTokens(i):i;r.walkTokens&&await Promise.all(this.walkTokens(c,r.walkTokens));let o=await(r.hooks?await r.hooks.provideParser():n?T.parse:T.parseInline)(c,r);return r.hooks?await r.hooks.postprocess(o):o})().catch(a);try{r.hooks&&(e=r.hooks.preprocess(e));let l=(r.hooks?r.hooks.provideLexer():n?$.lex:$.lexInline)(e,r);r.hooks&&(l=r.hooks.processAllTokens(l)),r.walkTokens&&this.walkTokens(l,r.walkTokens);let i=(r.hooks?r.hooks.provideParser():n?T.parse:T.parseInline)(l,r);return r.hooks&&(i=r.hooks.postprocess(i)),i}catch(l){return a(l)}}}onError(n,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,n){let s="<p>An error occurred:</p><pre>"+R(t.message+"",!0)+"</pre>";return e?Promise.resolve(s):s}if(e)return Promise.reject(t);throw t}}},z=new nt;function x(n,e){return z.parse(n,e)}x.options=x.setOptions=function(n){return z.setOptions(n),x.defaults=z.defaults,te(x.defaults),x},x.getDefaults=w,x.defaults=v,x.use=function(...n){return z.use(...n),x.defaults=z.defaults,te(x.defaults),x},x.walkTokens=function(n,e){return z.walkTokens(n,e)},x.parseInline=z.parseInline,x.Parser=T,x.parser=T.parse,x.Renderer=N,x.TextRenderer=J,x.Lexer=$,x.lexer=$.lex,x.Tokenizer=O,x.Hooks=P,x.parse=x,x.options,x.setOptions,x.use,x.walkTokens,x.parseInline,T.parse,$.lex;class rt{constructor(e){g(this,"container");g(this,"shadow");g(this,"callbacks");g(this,"isOpen",!1);this.callbacks=e,this.container=document.createElement("div"),this.container.id="plasticity-root",this.shadow=this.container.attachShadow({mode:"open"}),document.body.appendChild(this.container),this.render()}render(){const e=`
      :host {
        all: initial;
        font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", "PingFang SC", sans-serif;
        -webkit-font-smoothing: antialiased;
      }

      /* 苹果风悬浮按钮 - 极简高质感 */
      .affix-btn {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 60px;
        height: 60px;
        background: #000;
        border-radius: 50%;
        box-shadow: 0 8px 24px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000000;
        transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
        color: white;
      }
      .affix-btn:hover {
        transform: scale(1.08) translateY(-2px);
        box-shadow: 0 12px 32px rgba(0,0,0,0.18);
        background: #1d1d1f;
      }
      .affix-btn.open {
        transform: scale(0.9) rotate(90deg);
        background: #333;
      }

      /* 聊天窗口 - 顶级苹果风玻璃拟态 */
      .chat-window {
        position: fixed;
        bottom: 105px;
        right: 30px;
        width: 380px;
        height: 620px;
        background: rgba(255, 255, 255, 0.72);
        backdrop-filter: blur(40px) saturate(180%);
        -webkit-backdrop-filter: blur(40px) saturate(180%);
        border-radius: 32px;
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12), inset 0 0 0 0.5px rgba(0, 0, 0, 0.08);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        z-index: 1000000;
        transform-origin: bottom right;
        transform: scale(0.8) translateY(40px);
        opacity: 0;
        pointer-events: none;
        transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .chat-window.open {
        transform: scale(1) translateY(0);
        opacity: 1;
        pointer-events: auto;
      }

      /* Header - 极其简约 */
      .header {
        padding: 24px 28px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .header-title {
        font-weight: 700;
        font-size: 20px;
        color: #1d1d1f;
        letter-spacing: -0.03em;
      }
      .header-info {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .status-pill {
        background: rgba(16, 185, 129, 0.1);
        color: #10b981;
        padding: 4px 10px;
        border-radius: 20px;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.02em;
        display: flex;
        align-items: center;
        gap: 5px;
      }
      .status-dot {
        width: 5px;
        height: 5px;
        background: #10b981;
        border-radius: 50%;
      }

      /* 消息区域 - 留白感强 */
      .messages {
        flex: 1;
        overflow-y: auto;
        padding: 0 24px 24px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
        -webkit-mask-image: linear-gradient(to bottom, transparent, black 5%, black 95%, transparent);
      }
      .messages::-webkit-scrollbar { display: none; }

      .message {
        max-width: 82%;
        padding: 14px 18px;
        font-size: 15px;
        line-height: 1.5;
        position: relative;
        animation: appleAppear 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
      }
      @keyframes appleAppear {
        from { opacity: 0; transform: translateY(15px) scale(0.95); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }
      .message.user {
        align-self: flex-end;
        background: #007aff;
        color: white;
        border-radius: 22px 22px 4px 22px;
        box-shadow: 0 4px 12px rgba(0, 122, 255, 0.2);
        font-weight: 400;
      }
      .message.ai {
        align-self: flex-start;
        background: rgba(255, 255, 255, 0.8);
        color: #1d1d1f;
        border-radius: 22px 22px 22px 4px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        border: 0.5px solid rgba(0,0,0,0.05);
      }

      /* 输入区域与工具栏 - 整合感 */
      .footer-area {
        padding: 24px;
        background: rgba(255, 255, 255, 0.4);
        border-top: 0.5px solid rgba(0,0,0,0.06);
      }

      .toolbar {
        display: flex;
        gap: 8px;
        margin-bottom: 20px;
        overflow-x: auto;
      }
      .toolbar::-webkit-scrollbar { display: none; }

      .action-btn {
        height: 38px;
        padding: 0 16px;
        border-radius: 19px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        border: none;
        display: flex;
        align-items: center;
        gap: 6px;
        transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
        white-space: nowrap;
        background: #fff;
        color: #1d1d1f;
        box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        border: 0.5px solid rgba(0,0,0,0.08);
      }
      .action-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        background: #f5f5f7;
      }
      .action-btn:active { transform: scale(0.96); }

      .btn-inspect.active {
        background: #000;
        color: #fff;
        border-color: #000;
      }
      .btn-undo { color: #ff3b30; }
      .btn-confirm { color: #34c759; }

      .selection-pill {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 14px;
        background: #f5f5f7;
        border-radius: 14px;
        font-size: 12px;
        color: #86868b;
        margin-bottom: 16px;
        border: 0.5px solid rgba(0,0,0,0.05);
      }
      .selection-pill b { color: #007aff; }

      .input-wrapper {
        background: #fff;
        border-radius: 24px;
        padding: 6px 6px 6px 18px;
        display: flex;
        align-items: flex-end;
        box-shadow: 0 2px 10px rgba(0,0,0,0.03);
        border: 0.5px solid rgba(0,0,0,0.1);
        transition: all 0.3s;
      }
      .input-wrapper:focus-within {
        border-color: #007aff;
        box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
      }
      textarea {
        flex: 1;
        min-height: 24px;
        max-height: 120px;
        border: none;
        background: transparent;
        resize: none;
        font-family: inherit;
        font-size: 15px;
        color: #1d1d1f;
        outline: none;
        padding: 10px 0;
        line-height: 1.4;
      }
      .send-circle {
        width: 36px;
        height: 36px;
        background: #000;
        color: white;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 10px;
        margin-bottom: 2px;
        transition: all 0.3s;
      }
      .send-circle:hover { background: #333; transform: scale(1.05); }
      .send-circle:disabled { background: #d2d2d7; cursor: not-allowed; }

      /* Markdown 样式支持 */
      .message pre {
        background: rgba(0, 0, 0, 0.05);
        padding: 12px;
        border-radius: 12px;
        overflow-x: auto;
        margin: 10px 0;
        border: 0.5px solid rgba(0,0,0,0.05);
      }
      .message code {
        font-family: "SF Mono", "Monaco", "Menlo", monospace;
        font-size: 13px;
        color: #d12127;
        background: rgba(209, 33, 39, 0.05);
        padding: 2px 4px;
        border-radius: 4px;
      }
      .message pre code {
        color: #1d1d1f;
        background: transparent;
        padding: 0;
      }
      .message strong { font-weight: 700; color: #000; }
      .message ul, .message ol { padding-left: 20px; margin: 10px 0; }
      .message p { margin: 0 0 10px 0; }
      .message p:last-child { margin-bottom: 0; }

      .hidden { display: none !important; }

      /* 极简打字机 */
      .typing {
        display: flex;
        gap: 3px;
        padding: 10px 14px;
      }
      .t-dot {
        width: 4px;
        height: 4px;
        background: #86868b;
        border-radius: 50%;
        animation: applePulse 1.4s infinite;
      }
      .t-dot:nth-child(2) { animation-delay: 0.2s; }
      .t-dot:nth-child(3) { animation-delay: 0.4s; }
      @keyframes applePulse {
        0%, 100% { opacity: 0.3; transform: scale(0.8); }
        50% { opacity: 1; transform: scale(1.1); }
      }
    `;this.shadow.innerHTML=`
      <style>${e}</style>

      <!-- 入口按钮 -->
      <div class="affix-btn" id="toggle-btn">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </div>

      <!-- 主窗口 -->
      <div class="chat-window" id="chat-window">
        <div class="header">
          <span class="header-title">Plasticity</span>
          <div class="header-info">
            <div class="status-pill">
              <span class="status-dot"></span>
              <span id="status-text">Online</span>
            </div>
            <div style="cursor: pointer; color: #86868b; margin-left: 8px;" id="close-chat">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M18 6L6 18M6 6l12 12"></path>
              </svg>
            </div>
          </div>
        </div>

        <div class="messages" id="messages-container">
          <div class="message ai">
            你好。我是 Plasticity 助手。<br>
            我们可以通过修改样式来优化你的页面。点击<b>选中元素</b>开始。
          </div>
        </div>

        <div class="footer-area">
          <div class="toolbar" id="toolbar">
            <button class="action-btn btn-inspect" id="inspect-btn">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              选中元素
            </button>
            <button class="action-btn btn-undo hidden" id="undo-btn">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
              撤销
            </button>
            <button class="action-btn btn-confirm hidden" id="confirm-btn">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
              导出
            </button>
          </div>

          <div class="selection-pill hidden" id="selection-tag">
            <span>🎯</span> <span id="tag-name"></span>
          </div>

          <div class="input-wrapper">
            <textarea placeholder="输入指令..." rows="1"></textarea>
            <button class="send-circle" id="send-btn">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `,this.bindEvents()}bindEvents(){const e=this.shadow.getElementById("toggle-btn"),t=this.shadow.getElementById("close-chat"),s=this.shadow.getElementById("chat-window"),r=this.shadow.getElementById("inspect-btn"),a=this.shadow.getElementById("send-btn"),l=this.shadow.querySelector("textarea"),i=this.shadow.getElementById("undo-btn"),c=this.shadow.getElementById("confirm-btn");e==null||e.addEventListener("click",()=>{this.isOpen=!this.isOpen,s==null||s.classList.toggle("open",this.isOpen),e.classList.toggle("open",this.isOpen)}),t==null||t.addEventListener("click",()=>{this.isOpen=!1,s==null||s.classList.remove("open"),e==null||e.classList.remove("open")}),r==null||r.addEventListener("click",()=>{r.classList.add("active"),this.callbacks.onStartInspect()}),a==null||a.addEventListener("click",()=>this.handleSend()),l==null||l.addEventListener("input",()=>{l.style.height="auto",l.style.height=Math.min(l.scrollHeight,120)+"px"}),l==null||l.addEventListener("keydown",o=>{o.key==="Enter"&&(o.ctrlKey||o.metaKey)&&(o.preventDefault(),this.handleSend())}),i==null||i.addEventListener("click",()=>this.callbacks.onUndo()),c==null||c.addEventListener("click",()=>this.callbacks.onConfirm())}handleSend(){const e=this.shadow.querySelector("textarea"),t=e==null?void 0:e.value.trim();t&&(this.addMessage("user",t),e.value="",e.style.height="auto",this.callbacks.onSubmitRequest(t))}addMessage(e,t){const s=this.shadow.getElementById("messages-container");if(!s)return;const r=s.querySelector(".typing-wrapper");r&&r.remove();const a=document.createElement("div");if(a.className=`message ${e}`,e==="ai"){const l=x.parse(t);a.innerHTML=typeof l=="string"?l:t}else a.textContent=t;s.appendChild(a),s.scrollTop=s.scrollHeight}showTyping(){const e=this.shadow.getElementById("messages-container");if(!e)return;const t=document.createElement("div");t.className="message ai typing-wrapper",t.innerHTML=`
      <div class="typing">
        <div class="t-dot"></div>
        <div class="t-dot"></div>
        <div class="t-dot"></div>
      </div>
    `,e.appendChild(t),e.scrollTop=e.scrollHeight}setSelection(e){const t=this.shadow.getElementById("selection-tag"),s=this.shadow.getElementById("tag-name"),r=this.shadow.getElementById("inspect-btn");if(r==null||r.classList.remove("active"),t&&s){t.classList.remove("hidden");const a=e.classList.length>0?`.${e.classList[0]}`:"";s.textContent=e.tagName.toLowerCase()+(e.id?"#"+e.id:"")+a}this.addMessage("ai",`已选择 <b>${e.tagName.toLowerCase()}</b>。你可以输入修改建议了。`)}setStatus(e){const t=this.shadow.getElementById("status-text");t&&(t.textContent=e)}showActions(e){const t=this.shadow.getElementById("undo-btn"),s=this.shadow.getElementById("confirm-btn");e?(t==null||t.classList.remove("hidden"),s==null||s.classList.remove("hidden")):(t==null||t.classList.add("hidden"),s==null||s.classList.add("hidden"))}}class be{constructor(e){g(this,"inspector");g(this,"ui");g(this,"selectedElement",null);g(this,"operationStack",[]);g(this,"options");this.options=e,this.inspector=new S({onSelect:t=>this.handleElementSelect(t),onCancel:()=>{this.ui.setStatus("已连接"),this.ui.showActions(this.operationStack.length>0)}}),this.ui=new rt({onStartInspect:()=>{this.ui.setStatus("选择模式"),this.inspector.start()},onSubmitRequest:t=>this.handleRequest(t),onUndo:()=>this.handleUndo(),onConfirm:()=>this.handleConfirm()})}getSelector(e){if(e.id&&!e.id.startsWith("plasticity-"))return`#${e.id}`;const t=[];let s=e,r=0;for(;s&&s.nodeType===Node.ELEMENT_NODE&&r<5;){let a=s.tagName.toLowerCase();const l=Array.from(s.classList).filter(o=>!o.includes("-")&&!/\d/.test(o))[0];l&&(a+=`.${l}`);let i=1,c=s.previousElementSibling;for(;c;)c.tagName===s.tagName&&i++,c=c.previousElementSibling;if(a+=`:nth-of-type(${i})`,t.unshift(a),s=s.parentElement,r++,(s==null?void 0:s.tagName)==="HTML"||!s)break}return t.join(" > ")}async callAgent(e,t){const{provider:s,apiKey:r,baseUrl:a,appId:l,model:i,accessToken:c,app:o}=this.options;return s==="netease"?this.callNeteaseGateway(e,t,c,o,i):s==="deepseek"?this.callDeepSeek(e,t,r,i):this.callDifyAgent(e,t,r,a,l)}async callNeteaseGateway(e,t,s,r,a){var i,c,o;const l=`Target: ${t}
Action: ${e}

请只返回 CSS 代码，使用 CSS 代码块格式包裹，不要有其他解释说明。`;try{const d=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"/aigw-api/chat/completions":"https://aigw.nie.netease.com/v1/chat/completions",u=await fetch(d,{method:"POST",headers:{"X-Access-Token":s,"X-AIGW-APP":r,"Content-Type":"application/json"},body:JSON.stringify({model:a||"deepseek-chat",messages:[{role:"system",content:"你是一个专业的 CSS 样式助手。根据用户描述的元素选择器和操作需求，生成对应的 CSS 代码。"},{role:"user",content:l}],temperature:.7})});if(!u.ok){const b=await u.text();return this.ui.addMessage("ai",`❌ **请求失败 (${u.status})**
${b}`),""}return((o=(c=(i=(await u.json()).choices)==null?void 0:i[0])==null?void 0:c.message)==null?void 0:o.content)||""}catch(p){return console.error("Netease Gateway Error:",p),this.ui.addMessage("ai",`❌ **请求出错**
${p.message}`),""}}async callDeepSeek(e,t,s,r){var l,i,c;const a=`Target: ${t}
Action: ${e}

请只返回 CSS 代码，使用 CSS 代码块格式包裹，不要有其他解释说明。`;try{const o=await fetch("https://api.deepseek.com/v1/chat/completions",{method:"POST",headers:{Authorization:`Bearer ${s}`,"Content-Type":"application/json"},body:JSON.stringify({model:r||"deepseek-chat",messages:[{role:"system",content:"你是一个专业的 CSS 样式助手。根据用户描述的元素选择器和操作需求，生成对应的 CSS 代码。"},{role:"user",content:a}],temperature:.7})});if(!o.ok){const d=await o.text();return this.ui.addMessage("ai",`❌ **请求失败 (${o.status})**
${d}`),""}return((c=(i=(l=(await o.json()).choices)==null?void 0:l[0])==null?void 0:i.message)==null?void 0:c.content)||""}catch(o){return console.error("DeepSeek API Error:",o),this.ui.addMessage("ai",`❌ **请求出错**
${o.message}`),""}}async callDifyAgent(e,t,s,r,a){const l=`Target: ${t}
Action: ${e}`;try{const i=await fetch(`${r}/app/chat-messages`,{method:"POST",headers:{Authorization:`Bearer ${s}`,appId:a,"Content-Type":"application/json"},body:JSON.stringify({query:l,inputs:{},response_mode:"blocking",user:"abc-123"})});if(!i.ok){const o=await i.text();return this.ui.addMessage("ai",`❌ **请求失败 (${i.status})**
${o}`),""}return(await i.json()).answer||""}catch(i){return console.error("Fetch Error:",i),this.ui.addMessage("ai",`❌ **CORS 跨域拦截**

当前页面禁止发送自定义 Header \`appId\` 到 Dify 服务器。

**解决方法**：
1. 请使用后端代理转发请求。
2. 或者在本地开发时确认代理配置已开启。`),""}}async handleRequest(e){if(!this.selectedElement){this.ui.addMessage("ai","请先选中元素。");return}const t=this.getSelector(this.selectedElement);this.ui.showTyping();const s=await this.callAgent(e,t);if(s){this.ui.addMessage("ai",s);const r=s.match(/```(?:css)?([\s\S]*?)```/i),a=r?r[1].trim():s.includes("{")?s.trim():"";if(a){const l=document.createElement("style");l.textContent=a,document.head.appendChild(l),this.operationStack.push({id:Math.random().toString(36).substring(7),type:"style",element:l,description:e,stableSelector:t}),this.ui.showActions(!0)}}}handleUndo(){const e=this.operationStack.pop();e&&e.element.remove(),this.ui.showActions(this.operationStack.length>0)}handleConfirm(){const t=`(function(){const s=document.createElement('style');s.textContent=\`${this.operationStack.map(s=>s.element.textContent).join(`
`)}\`;document.head.appendChild(s);})();`;navigator.clipboard.writeText(t),this.ui.addMessage("ai","📋 代码已复制！")}handleElementSelect(e){this.selectedElement=e,this.ui.setSelection(e)}}return typeof window<"u"&&(window.PlasticitySDK=be),be});
