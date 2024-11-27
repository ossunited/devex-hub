/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-backstage",
factory: function (require) {
"use strict";var plugin=(()=>{var bt=Object.create;var m=Object.defineProperty;var xt=Object.getOwnPropertyDescriptor;var _t=Object.getOwnPropertyNames;var Ot=Object.getPrototypeOf,kt=Object.prototype.hasOwnProperty;var Pt=(e,t,r)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var u=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});var n=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Rt=(e,t)=>{for(var r in t)m(e,r,{get:t[r],enumerable:!0})},F=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of _t(t))!kt.call(e,a)&&a!==r&&m(e,a,{get:()=>t[a],enumerable:!(o=xt(t,a))||o.enumerable});return e};var I=(e,t,r)=>(r=e!=null?bt(Ot(e)):{},F(t||!e||!e.__esModule?m(r,"default",{value:e,enumerable:!0}):r,e)),Ct=e=>F(m({},"__esModule",{value:!0}),e);var G=(e,t,r)=>(Pt(e,typeof t!="symbol"?t+"":t,r),r);var z=n((Ho,N)=>{var qt=typeof global=="object"&&global&&global.Object===Object&&global;N.exports=qt});var R=n((Wo,H)=>{var St=z(),Tt=typeof self=="object"&&self&&self.Object===Object&&self,jt=St||Tt||Function("return this")();H.exports=jt});var j=n((Jo,W)=>{var Dt=R(),Et=Dt.Symbol;W.exports=Et});var Y=n((Ko,X)=>{var J=j(),K=Object.prototype,$t=K.hasOwnProperty,Bt=K.toString,y=J?J.toStringTag:void 0;function Mt(e){var t=$t.call(e,y),r=e[y];try{e[y]=void 0;var o=!0}catch{}var a=Bt.call(e);return o&&(t?e[y]=r:delete e[y]),a}X.exports=Mt});var Z=n((Xo,Q)=>{var Lt=Object.prototype,Vt=Lt.toString;function At(e){return Vt.call(e)}Q.exports=At});var oe=n((Yo,re)=>{var ee=j(),Ut=Y(),Ft=Z(),It="[object Null]",Gt="[object Undefined]",te=ee?ee.toStringTag:void 0;function Nt(e){return e==null?e===void 0?Gt:It:te&&te in Object(e)?Ut(e):Ft(e)}re.exports=Nt});var D=n((Qo,ne)=>{function zt(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}ne.exports=zt});var se=n((Zo,ae)=>{var Ht=oe(),Wt=D(),Jt="[object AsyncFunction]",Kt="[object Function]",Xt="[object GeneratorFunction]",Yt="[object Proxy]";function Qt(e){if(!Wt(e))return!1;var t=Ht(e);return t==Kt||t==Xt||t==Jt||t==Yt}ae.exports=Qt});var ce=n((en,ie)=>{var Zt=R(),er=Zt["__core-js_shared__"];ie.exports=er});var le=n((tn,ue)=>{var E=ce(),pe=function(){var e=/[^.]+$/.exec(E&&E.keys&&E.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function tr(e){return!!pe&&pe in e}ue.exports=tr});var ge=n((rn,fe)=>{var rr=Function.prototype,or=rr.toString;function nr(e){if(e!=null){try{return or.call(e)}catch{}try{return e+""}catch{}}return""}fe.exports=nr});var de=n((on,he)=>{var ar=se(),sr=le(),ir=D(),cr=ge(),pr=/[\\^$.*+?()[\]{}|]/g,ur=/^\[object .+?Constructor\]$/,lr=Function.prototype,fr=Object.prototype,gr=lr.toString,hr=fr.hasOwnProperty,dr=RegExp("^"+gr.call(hr).replace(pr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function vr(e){if(!ir(e)||sr(e))return!1;var t=ar(e)?dr:ur;return t.test(cr(e))}he.exports=vr});var me=n((nn,ve)=>{function mr(e,t){return e?.[t]}ve.exports=mr});var $=n((an,ye)=>{var yr=de(),wr=me();function br(e,t){var r=wr(e,t);return yr(r)?r:void 0}ye.exports=br});var w=n((sn,we)=>{var xr=$(),_r=xr(Object,"create");we.exports=_r});var _e=n((cn,xe)=>{var be=w();function Or(){this.__data__=be?be(null):{},this.size=0}xe.exports=Or});var ke=n((pn,Oe)=>{function kr(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}Oe.exports=kr});var Re=n((un,Pe)=>{var Pr=w(),Rr="__lodash_hash_undefined__",Cr=Object.prototype,qr=Cr.hasOwnProperty;function Sr(e){var t=this.__data__;if(Pr){var r=t[e];return r===Rr?void 0:r}return qr.call(t,e)?t[e]:void 0}Pe.exports=Sr});var qe=n((ln,Ce)=>{var Tr=w(),jr=Object.prototype,Dr=jr.hasOwnProperty;function Er(e){var t=this.__data__;return Tr?t[e]!==void 0:Dr.call(t,e)}Ce.exports=Er});var Te=n((fn,Se)=>{var $r=w(),Br="__lodash_hash_undefined__";function Mr(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=$r&&t===void 0?Br:t,this}Se.exports=Mr});var De=n((gn,je)=>{var Lr=_e(),Vr=ke(),Ar=Re(),Ur=qe(),Fr=Te();function f(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var o=e[t];this.set(o[0],o[1])}}f.prototype.clear=Lr;f.prototype.delete=Vr;f.prototype.get=Ar;f.prototype.has=Ur;f.prototype.set=Fr;je.exports=f});var $e=n((hn,Ee)=>{function Ir(){this.__data__=[],this.size=0}Ee.exports=Ir});var Me=n((dn,Be)=>{function Gr(e,t){return e===t||e!==e&&t!==t}Be.exports=Gr});var b=n((vn,Le)=>{var Nr=Me();function zr(e,t){for(var r=e.length;r--;)if(Nr(e[r][0],t))return r;return-1}Le.exports=zr});var Ae=n((mn,Ve)=>{var Hr=b(),Wr=Array.prototype,Jr=Wr.splice;function Kr(e){var t=this.__data__,r=Hr(t,e);if(r<0)return!1;var o=t.length-1;return r==o?t.pop():Jr.call(t,r,1),--this.size,!0}Ve.exports=Kr});var Fe=n((yn,Ue)=>{var Xr=b();function Yr(e){var t=this.__data__,r=Xr(t,e);return r<0?void 0:t[r][1]}Ue.exports=Yr});var Ge=n((wn,Ie)=>{var Qr=b();function Zr(e){return Qr(this.__data__,e)>-1}Ie.exports=Zr});var ze=n((bn,Ne)=>{var eo=b();function to(e,t){var r=this.__data__,o=eo(r,e);return o<0?(++this.size,r.push([e,t])):r[o][1]=t,this}Ne.exports=to});var We=n((xn,He)=>{var ro=$e(),oo=Ae(),no=Fe(),ao=Ge(),so=ze();function g(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var o=e[t];this.set(o[0],o[1])}}g.prototype.clear=ro;g.prototype.delete=oo;g.prototype.get=no;g.prototype.has=ao;g.prototype.set=so;He.exports=g});var Ke=n((_n,Je)=>{var io=$(),co=R(),po=io(co,"Map");Je.exports=po});var Qe=n((On,Ye)=>{var Xe=De(),uo=We(),lo=Ke();function fo(){this.size=0,this.__data__={hash:new Xe,map:new(lo||uo),string:new Xe}}Ye.exports=fo});var et=n((kn,Ze)=>{function go(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}Ze.exports=go});var x=n((Pn,tt)=>{var ho=et();function vo(e,t){var r=e.__data__;return ho(t)?r[typeof t=="string"?"string":"hash"]:r.map}tt.exports=vo});var ot=n((Rn,rt)=>{var mo=x();function yo(e){var t=mo(this,e).delete(e);return this.size-=t?1:0,t}rt.exports=yo});var at=n((Cn,nt)=>{var wo=x();function bo(e){return wo(this,e).get(e)}nt.exports=bo});var it=n((qn,st)=>{var xo=x();function _o(e){return xo(this,e).has(e)}st.exports=_o});var pt=n((Sn,ct)=>{var Oo=x();function ko(e,t){var r=Oo(this,e),o=r.size;return r.set(e,t),this.size+=r.size==o?0:1,this}ct.exports=ko});var lt=n((Tn,ut)=>{var Po=Qe(),Ro=ot(),Co=at(),qo=it(),So=pt();function h(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var o=e[t];this.set(o[0],o[1])}}h.prototype.clear=Po;h.prototype.delete=Ro;h.prototype.get=Co;h.prototype.has=qo;h.prototype.set=So;ut.exports=h});var ht=n((jn,gt)=>{var ft=lt(),To="Expected a function";function B(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(To);var r=function(){var o=arguments,a=t?t.apply(this,o):o[0],s=r.cache;if(s.has(a))return s.get(a);var c=e.apply(this,o);return r.cache=s.set(a,c)||s,c};return r.cache=new(B.Cache||ft),r}B.Cache=ft;gt.exports=B});var No={};Rt(No,{default:()=>Go});var T=u("@yarnpkg/core");var k=u("@yarnpkg/core");var d=u("@yarnpkg/fslib"),vt=u("semver"),mt=I(ht());var jo="https://versions.backstage.io",Do="https://raw.githubusercontent.com/backstage/versions/main";function Eo(e,t){return new Promise((r,o)=>{let a=setTimeout(()=>{t.aborted||r()},e);t.addEventListener("abort",()=>{clearTimeout(a),o(new Error("Aborted"))})})}async function $o(e,t,r){let o=new AbortController,a=new AbortController,s=e(o.signal).then(i=>(a.abort(),i)),c=Eo(r,a.signal).then(()=>t(a.signal)).then(i=>(o.abort(),i));return Promise.any([s,c]).catch(()=>s)}async function M(e){let t=encodeURIComponent(e.version),r=await $o(o=>fetch(`${jo}/v1/releases/${t}/manifest.json`,{signal:o}),o=>fetch(`${Do}/v1/releases/${t}/manifest.json`,{signal:o}),500);if(r.status===404)throw new Error(`No release found for ${e.version} version`);if(r.status!==200)throw new Error(`Unexpected response status ${r.status} when fetching release from ${r.url}.`);return r.json()}var _=I(u("fs")),p=u("path");function dt(e,t){let r=e;for(let o=0;o<1e3;o++){let a=(0,p.resolve)(r,"package.json");if(_.default.existsSync(a)&&t(a))return r;let c=(0,p.dirname)(r);if(c===r)return;r=c}throw new Error(`Iteration limit reached when searching for root package.json at ${e}`)}function Bo(e){let t=dt(e,()=>!0);if(!t)throw new Error(`No package.json found while searching for package root of ${e}`);return t}function Mo(e){if(!_.default.existsSync((0,p.resolve)(e,"src")))throw new Error("Tried to access monorepo package root dir outside of Backstage repository");return(0,p.resolve)(e,"../..")}function L(e){let t=Bo(e),r=_.default.realpathSync(process.cwd()).replace(/^[a-z]:/,i=>i.toLocaleUpperCase("en-US")),o="",a=()=>(o||(o=Mo(t)),o),s="",c=()=>(s||(s=dt(r,i=>{try{let v=_.default.readFileSync(i,"utf8"),wt=JSON.parse(v);return Boolean(wt.workspaces)}catch(v){throw new Error(`Failed to parse package.json file while searching for root, ${v}`)}})??r),s);return{ownDir:t,get ownRoot(){return a()},targetDir:r,get targetRoot(){return c()},resolveOwn:(...i)=>(0,p.resolve)(t,...i),resolveOwnRoot:(...i)=>(0,p.resolve)(a(),...i),resolveTarget:(...i)=>(0,p.resolve)(r,...i),resolveTargetRoot:(...i)=>(0,p.resolve)(c(),...i)}}var V="backstage.json";var C=u("@yarnpkg/core");var l="backstage:";var Lo=(0,mt.default)(M,({version:e})=>e),q=()=>{let e=d.ppath.resolve(L(d.ppath.cwd()).targetRoot),t=d.xfs.readJsonSync(d.ppath.join(e,V)),r=(0,vt.valid)(t.version);if(r===null)throw new Error("Valid version string not found in backstage.json");return r},S=(e,t)=>C.structUtils.bindDescriptor(e,{v:t}),O=async e=>{let t=C.structUtils.stringifyIdent(e),r=C.structUtils.parseRange(e.range);if(r.protocol!==l)throw new Error(`Unsupported version protocol in version range "${e.range}" for package ${t}`);if(r.selector!=="^")throw new Error(`Unexpected version selector "${r.selector}" for package ${t}`);if(!r.params?.v)throw new Error(`Missing Backstage version parameter in range "${e.range}" for package ${t}`);if(Array.isArray(r.params.v))throw new Error(`Multiple Backstage versions specified in range "${e.range}" for package ${t}`);let a=(await Lo({version:r.params.v})).packages.find(s=>s.name===t);if(!a)throw new Error(`Package ${t} not found in manifest for Backstage v${r.selector}. This means the specified package is not included in this Backstage release. This may imply the package has been replaced with an alternative - please review the documentation for the package. If you need to continue using this package, it will be necessary to switch to manually managing its version.`);return a.version};var Vo=e=>k.structUtils.parseRange(e).protocol===l,Ao=(e,t,r)=>e!=="dependencies"?e:r.manifest.ensureDependencyMeta(k.structUtils.makeDescriptor(t,"unknown")).optional?"optionalDependencies":e,yt=async(e,t)=>{let r=q();for(let o of["dependencies","devDependencies"]){let a=Array.from(e.manifest.getForScope(o).values()).filter(s=>s.range.startsWith(l));for(let s of a){let c=k.structUtils.stringifyIdent(s);if(k.structUtils.parseRange(s.range).selector!=="^")throw new Error(`Unexpected version range "${s.range}" for dependency on "${c}"`);let v=Ao(o,s,e);t[v][c]=`^${await O(S(s,r))}`}}if(["dependencies","devDependencies","optionalDependencies"].some(o=>Object.values(t[o]??{}).some(Vo)))throw new Error(`Failed to replace all "backstage:" ranges in manifest for ${t.name}`)};var A=u("@yarnpkg/core");var U=class{supportsDescriptor=t=>t.range.startsWith(U.protocol);shouldPersistResolution=()=>!0;bindDescriptor(t){return t.range==="backstage:^"?S(t,q()):t}async getCandidates(t){return[A.structUtils.makeLocator(t,`npm:${await O(t)}`)]}async getSatisfying(t,r,o){let a=await O(t);return{locators:o.filter(s=>A.structUtils.areIdentsEqual(t,s)&&s.reference===`npm:${a}`),sorted:!0}}supportsLocator=()=>!1;getResolutionDependencies=()=>({});async resolve(){throw new Error("Unreachable")}},P=U;G(P,"protocol",l);var Uo="\x1B[31;1m",Fo="\x1B[0m";T.semverUtils.satisfiesWithPrereleases(T.YarnVersion,"^4.1.1")||(console.error(),console.error(`${Uo}Unsupported yarn version${Fo}: The Backstage yarn plugin only works with yarn ^4.1.1. Please upgrade yarn, or remove this plugin with "yarn plugin remove @yarnpkg/plugin-backstage".`),console.error());var Io={hooks:{beforeWorkspacePacking:yt},resolvers:[P]},Go=Io;return Ct(No);})();
return plugin;
}
};
