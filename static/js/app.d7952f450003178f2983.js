webpackJsonp([1],{"+BTi":function(e,t){},0:function(e,t){},"0ffW":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,i=n("bOdI"),s=n.n(i),o=n("woOf"),r=n.n(o),l=n("qI5z"),u=n("G8vM");t.default=(a={},s()(a,"GET *environment.json*",function(e,t,n){return{body:{gw:"application-test.forward.lc"},status:200}}),s()(a,"GET "+u.f,function(e,t,n){return{body:r()({status:l.e.AVAILABLE,leasingApplicationNumber:"12240070763"},n.body),status:l.c.OK,delay:200}}),s()(a,"GET "+u.c,function(e,t,n){return{body:r()({customer:{firstName:"Иван",middleName:"Иванович",lastName:"Иванов",passportFirstDigits:"456"},goods:[{brand:"Samsung",goodsName:"Galaxy S9",commodityTypeName:l.b.GOODS,categoryName:"Mobile",typeName:"type name",price:59990,producer:"Samsung"},{brand:"Samsung",goodsName:"Galaxy S8",commodityTypeName:l.b.GOODS,categoryName:"Mobile",typeName:"type name",price:49990,producer:"Samsung"}],leasingGoodSelects:[{leasingGoodType:l.d.LEASING_GOOD,leasingGoodName:"Galaxy S9 Black",leasingGoodCode:"456",leasingGoodRrp:"456.00"},{leasingGoodType:l.d.MOBILE_CONTRACT,leasingGoodName:"ff",leasingGoodCode:"891",leasingGoodRrp:""},{leasingGoodType:l.d.LEASING_GOOD,leasingGoodName:"Galaxy S9 Silver",leasingGoodCode:"123",leasingGoodRrp:"123.00"}]},n.body),status:l.c.OK,delay:200}}),s()(a,"POST "+u.a,function(e,t,n){return{body:r()({status:l.e.GOOD_SELECTED,leasingApplicationNumber:"12240070763"},n.body),status:l.c.OK,delay:200}}),s()(a,"GET "+u.b,function(e,t,n){return{body:r()({customer:{firstName:"Иван",middleName:"Иванович",lastName:"Иванов",passportFirstDigits:"456"},leasingContract:{leasingApplicationNumber:"12240070763",status:l.e.GOOD_SELECTED,residualValue:27500,leasingSum:59e3,monthTerm:12,monthPay:5000.52},additionalServices:[{type:l.a.SAMSUNG_CARE_PACK,obligatiry:!0,servicePrice:7990},{type:l.a.ACCESSORY,obligatiry:!1,maxPercent:.15},{type:l.a.MOBILE_CONTRACT,obligatiry:!1,maxPercent:.15}],leasingGoods:[{brand:"Samsung",goodsName:"Телефон",categoryName:"Mobile",typeName:"type name",price:"59990.0",producer:"Samsung",leasingGoodTypeName:l.d.LEASING_GOOD,leasingGoodName:"SAMSUNG_S9_BLACK_128",leasingGoodRrp:"59990.0"}],links:[]},n.body),status:l.c.OK,delay:200}}),s()(a,"POST "+u.e,function(e,t,n){return{body:r()({resultCode:l.f.SIGN_SMS_SEND,resultText:"Rejected without any reason"},n.body),status:l.c.OK,delay:200}}),a)},"3vOa":function(e,t){},BqFi:function(e,t){},D35P:function(e,t,n){e.exports=n.p+"static/img/forward_logo_vert.abd6478.png"},DYHi:function(e,t){},Dte2:function(e,t){},G8vM:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"f",function(){return i}),n.d(t,"c",function(){return s}),n.d(t,"b",function(){return o}),n.d(t,"e",function(){return r}),n.d(t,"d",function(){return l});var a="leasing/v1/leasing",i="leasing/v1/leasing/{evidSrv}/status",s="leasing/v1/leasing/{evidSrv}/goods",o="leasing/v1/leasing/{leasingApplicationNumber}/data",r="leasing/v1/leasing/{leasingApplicationNumber}/sign-sms",l="leasing/v1/leasing/{leasingApplicationNumber}/passport"},G9O2:function(e,t){},GXEp:function(e,t){},I4nB:function(e,t){},JATv:function(e,t){},LsCj:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("uMhA"),n("DYHi");var a=n("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("el-row",{attrs:{gutter:50}},[t("el-col",{attrs:{sm:3}},[t("img",{attrs:{src:n("D35P"),alt:""}})]),this._v(" "),t("el-col",{attrs:{sm:21}},[t("h1",[this._v(this._s(this.header.name))])])],1)],1)},staticRenderFns:[]};var s={name:"app",components:{HeaderComponent:n("VU/8")({name:"headerComponent",data:function(){return{header:{}}},watch:{$route:function(){this.updateHeader()}},methods:{updateHeader:function(){this.header=this.$route.meta.header||{}}},mounted:function(){this.updateHeader()}},i,!1,function(e){n("3vOa")},"data-v-48cf7dc2",null).exports}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("header-component"),this._v(" "),t("div",{staticClass:"main"},[t("transition",{attrs:{name:"fade"}},[t("router-view")],1)],1)],1)},staticRenderFns:[]};var r=n("VU/8")(s,o,!1,function(e){n("nJin")},"data-v-54093281",null).exports,l=n("/ocq"),u=n("qI5z"),c=n("8+8L"),d=(n("7KUr"),n("G8vM"));function m(){a.default.http.interceptors.push(function(e,t){e.headers.map.Authorization=["Bearer "+sessionStorage.getItem("token")],t(function(e){401===e.status&&(localStorage.clear(),sessionStorage.clear(),H.push({name:"Auth"}))})})}a.default.use(c.a),m();var p=a.default.resource(d.a),f=a.default.resource(d.f),g=a.default.resource(d.c),S=a.default.resource(d.b),v=a.default.resource(d.e),_=a.default.resource(d.d),h={props:{token:String,evidSrv:String},data:function(){return{isAuth:!1}},methods:{changePage:function(e){e===u.e.AVAILABLE?this.$router.push({name:"Goods"}):-1!==[u.e.GOOD_SELECTED,u.e.SIGN_SMS_SEND,u.e.PASSPORT_LOADED].indexOf(e)?this.$router.push({name:"SignSms"}):this.$router.push({name:"Error"})},getLeasingStatus:function(e){var t=this;f.get({evidSrv:e}).then(function(e){var n=e.body;sessionStorage.setItem("leasingApplicationNumber",n.leasingApplicationNumber),sessionStorage.setItem("status",n.status),t.changePage(n.status)}).catch(function(e){console.log("had not status")})}},created:function(){var e=this.token||sessionStorage.getItem("token"),t=this.evidSrv||sessionStorage.getItem("evidSrv");sessionStorage.removeItem("status"),e&&t?(this.isAuth=!0,sessionStorage.setItem("token",e),sessionStorage.setItem("evidSrv",t),this.getLeasingStatus(t)):(sessionStorage.removeItem("token"),sessionStorage.removeItem("evidSrv"))}},b={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[this.isAuth?this._e():t("p",[this._v("Для входа нужна авторизация")])])},staticRenderFns:[]};var A=n("VU/8")(h,b,!1,function(e){n("JATv")},"data-v-0e430a3c",null).exports,N=n("woOf"),E=n.n(N),y={data:function(){return{evidSrv:"",customer:{},goods:[],leasingGoodSelects:[],pendingSubmit:!0}},computed:{fullName:function(){return[this.customer.lastName,this.customer.firstName,this.customer.middleName].filter(Boolean).join(" ")},selectedGoods:function(){return this.goods.filter(function(e){return!!e.selectedType}).map(function(e){var t=E()({},e);return{commodityTypeName:t.commodityTypeName,categoryName:t.categoryName,typeName:t.typeName,price:t.price,leasingGoodType:t.selectedType.leasingGoodType,leasingGoodCode:t.selectedType.leasingGoodCode}})},leasingGoodSelected:function(){for(var e=0;e<this.selectedGoods.length;e++)if(this.selectedGoods[e].leasingGoodType===u.d.LEASING_GOOD)return!0;return!1},leasingGoodOptions:function(){var e=this;return this.leasingGoodSelects.map(function(t,n){return t.id=n,t.label=e.leasingGoodOptionLabel(t.leasingGoodName,t.leasingGoodRrp),t.disabled=e.leasingGoodDisabled(t.leasingGoodType),t})},disabledSubmit:function(){return this.goods.length!==this.selectedGoods.length||this.pendingSubmit}},methods:{leasingGoodOptionLabel:function(e,t){return t?[e,t].join(" - "):e},leasingGoodDisabled:function(e){return this.leasingGoodSelected&&e===u.d.LEASING_GOOD},changePage:function(e){e===u.e.GOOD_SELECTED?this.$router.push({name:"SignSms"}):this.openAlert("Не удалось выбрать товар")},onSubmit:function(){var e=this;this.pendingSubmit=!0,p.save({evidSrv:this.evidSrv,selectedGoods:this.selectedGoods}).then(function(t){var n=t.body;e.pendingSubmit=!1,sessionStorage.setItem("leasingApplicationNumber",n.leasingApplicationNumber),sessionStorage.setItem("status",n.status),e.changePage(n.status)}).catch(function(t){e.pendingSubmit=!1,e.openAlert("Не удалось выбрать товар")})},openAlert:function(e){this.$alert(e,"Выбор товаров",{confirmButtonText:"OK"})},getGoods:function(){var e=this;g.get({evidSrv:this.evidSrv}).then(function(t){var n=t.body;e.pendingSubmit=!1,e.customer=n.customer,e.goods=n.goods,e.leasingGoodSelects=n.leasingGoodSelects}).catch(function(t){e.openAlert("Не удалось загрузить товары")})}},created:function(){this.evidSrv=sessionStorage.getItem("evidSrv"),this.getGoods()}},C={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Клиент: "+e._s(e.fullName))]),e._v(" "),n("h2",[e._v("Уточните информацию по товарам:")]),e._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.goods}},[n("el-table-column",{attrs:{prop:"categoryName",label:"Категория товара",width:"180"}}),e._v(" "),n("el-table-column",{attrs:{prop:"typeName",label:"Тип товара",width:"180"}}),e._v(" "),n("el-table-column",{attrs:{prop:"producer",label:"Производитель"}}),e._v(" "),n("el-table-column",{attrs:{prop:"goodsName",label:"Наименование товара",width:"180"}}),e._v(" "),n("el-table-column",{attrs:{prop:"price",label:"Стоимость"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(e._f("currency")(t.row.price))+"\n        ")]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"selectedType",label:"Уточните тип",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-select",{attrs:{clearable:"","value-key":"id",placeholder:"Выберите тип"},model:{value:t.row.selectedType,callback:function(n){e.$set(t.row,"selectedType",n)},expression:"scope.row.selectedType"}},e._l(e.leasingGoodOptions,function(a){return a.disabled&&a!==t.row.selectedType?e._e():n("el-option",{key:a.id,attrs:{label:a.label,value:a}})}))]}}])})],1),e._v(" "),n("div",{staticClass:"footer"},[n("el-button",{attrs:{type:"warning",disabled:e.disabledSubmit},on:{click:e.onSubmit}},[e._v("Продолжить")])],1)],1)},staticRenderFns:[]};var G=n("VU/8")(y,C,!1,function(e){n("ocqO")},"data-v-f5a5ca88",null).exports,O=n("bOdI"),D=n.n(O),T={props:["additionalServices"],filters:{serviceName:function(e){var t;return(t={},D()(t,u.a.SAMSUNG_CARE_PACK,"Защита Sumsung Care"),D()(t,u.a.ACCESSORY,"Аксессуар"),D()(t,u.a.MOBILE_CONTRACT,"Мобильный контракт"),t)[e]||e}}},I={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",e._l(e.additionalServices,function(t,a){return n("li",{key:a},[n("span",[e._v(e._s(e._f("serviceName")(t.additionalServiceName))+": ")]),e._v(" "),t.additionalServicePrice?n("span",[e._v(e._s(e._f("currency")(t.additionalServicePrice))+" р")]):e._e(),e._v(" "),t.additionalMaxPercent?n("span",[e._v(e._s(e._f("currency")(t.additionalMaxPercent))+" %")]):e._e()])}))},staticRenderFns:[]},R=n("VU/8")(T,I,!1,null,null,null).exports,w={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Условия по договору: "+e._s(e.leasingContract.leasingApplicationNumber))]),e._v(" "),n("ul",[n("li",[e._v("Сумма лизингового договора: "+e._s(e._f("currency")(e.leasingContract.leasingSum))+" р")]),e._v(" "),n("li",[e._v("Срок догоовра в мес.: "+e._s(e.leasingContract.monthTerm))]),e._v(" "),n("li",[e._v("Ежемесячный платеж: "+e._s(e._f("currency")(e.leasingContract.monthPay))+" р")]),e._v(" "),n("li",[e._v("Остаточная стоимость: "+e._s(e._f("currency")(e.leasingContract.residualValue))+" р")])])])},staticRenderFns:[]},L=n("VU/8")({props:["leasingContract"]},w,!1,null,null,null).exports,P=function(e,t,n){t=t||"",n=n||512;for(var a=atob(e),i=[],s=0;s<a.length;s+=n){for(var o=a.slice(s,s+n),r=new Array(o.length),l=0;l<o.length;l++)r[l]=o.charCodeAt(l);var u=new Uint8Array(r);i.push(u)}return new Blob(i,{type:t})},M=n("daoV"),U={data:function(){return{dataUri:null,pendingSubmit:!1,error:"",webcamProblem:!1,leasingApplicationNumber:null}},methods:{takeSnapshot:function(){var e=this;M.snap(function(t){e.dataUri=t})},initWebpam:function(){M.set({width:320,height:240,dest_width:640,dest_height:480,image_format:"jpeg",jpeg_quality:90}),M.attach("#my_camera"),M.on("error",this.webcamErrorCb),M.on("load",this.webcamSuccessCb),M.on("live",this.webcamSuccessCb)},resetWebcam:function(){M.reset()},rawFromDataImg:function(){var e=this.dataUri.split(";"),t=e[0].split(":")[1],n=e[1].split(",")[1];return P(n,t)},sendSnap:function(){var e=this;this.error="",this.pendingSubmit=!0;var t=this.rawFromDataImg(),n=new FormData;n.append("file",t),_.save({leasingApplicationNumber:this.leasingApplicationNumber},n).then(function(t){e.pendingSubmit=!1,sessionStorage.setItem("status","PASSPORT_LOADED"),e.$emit("loaded",!0)}).catch(function(t){var n=t.body;e.pendingSubmit=!1,e.error=n.resultText||"Техническая ошибка загрузки паспорта!"})},webcamErrorCb:function(){this.webcamProblem=!0},webcamSuccessCb:function(){this.webcamProblem=!1}},created:function(){this.leasingApplicationNumber=sessionStorage.getItem("leasingApplicationNumber")},mounted:function(){this.initWebpam()},beforeDestroy:function(){this.resetWebcam()}},V={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.webcamProblem?n("div",[n("h2",[e._v("Не удалось подключить камеру")])]):n("div",[n("el-row",[n("el-col",{attrs:{xs:24,lg:12}},[n("h3",[e._v("Камера:")]),e._v(" "),n("div",{attrs:{id:"my_camera"}}),e._v(" "),n("el-button",{attrs:{type:"warning"},on:{click:e.takeSnapshot}},[e._v("Сделать фото")])],1),e._v(" "),n("el-col",{attrs:{xs:24,lg:12}},[n("h3",[e._v("Результат:")]),e._v(" "),n("div",{staticClass:"results"},[e.dataUri?n("img",{attrs:{src:e.dataUri}}):n("div",{staticClass:"result-img"},[n("i",{staticClass:"el-icon-plus"})])])])],1),e._v(" "),n("el-row",{attrs:{type:"flex",justify:"end"}},[n("el-col",{attrs:{span:12}},[e.error?n("div",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),e._v(" "),n("el-button",{attrs:{type:"warning",disabled:!e.dataUri||e.pendingSubmit},on:{click:e.sendSnap}},[e._v("Отправить фото")])],1)],1)],1)])},staticRenderFns:[]};var x={data:function(){return{dataUri:null,file:null,pendingSubmit:!1,error:"",leasingApplicationNumber:null}},methods:{onChange:function(e){e.raw&&(this.dataUri=URL.createObjectURL(e.raw),this.file=e)},submitUpload:function(){var e=this.$refs.upload.uploadFiles[0];this.dataUri=URL.createObjectURL(e.raw)},sendFile:function(){var e=this;this.error="",this.pendingSubmit=!0;var t=new FormData;t.append("file",this.file.raw),_.save({leasingApplicationNumber:this.leasingApplicationNumber},t).then(function(t){e.pendingSubmit=!1,sessionStorage.setItem("status","PASSPORT_LOADED"),e.$emit("loaded",!0)}).catch(function(t){e.pendingSubmit=!1,e.error=t.body.resultText||"Техническая ошибка загрузки паспорта!"})}},created:function(){this.leasingApplicationNumber=sessionStorage.getItem("leasingApplicationNumber")}},k={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"block"},[n("el-upload",{ref:"upload",attrs:{action:"",drag:"","auto-upload":!1,"show-file-list":!1,"on-change":e.onChange}},[e.dataUri?n("img",{attrs:{src:e.dataUri}}):[n("i",{staticClass:"el-icon-plus"}),e._v(" "),n("div",{staticClass:"el-upload__text"},[e._v("Перенесите сюда файл или "),n("em",[e._v("нажмите для загрузки")])])]],2),e._v(" "),n("div",{staticClass:"footer"},[e.error?n("div",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),e._v(" "),n("el-button",{attrs:{type:"warning",disabled:!e.dataUri||e.pendingSubmit},on:{click:e.sendFile}},[e._v("Отправить фото")])],1)],1)},staticRenderFns:[]};var B={data:function(){return{status:"",leasingApplicationNumber:"",customer:{},leasingContract:{},leasingGoods:[],additionalServices:[],pendingSubmit:!0,scanVisible:!1,fileVisible:!1}},components:{AdditionalServicesComponent:R,LeasingContractComponent:L,PhotoFromCamera:n("VU/8")(U,V,!1,function(e){n("LsCj")},"data-v-3c47d503",null).exports,PhotoFromFile:n("VU/8")(x,k,!1,function(e){n("G9O2")},"data-v-58a03db3",null).exports},computed:{fullName:function(){return[this.customer.lastName,this.customer.firstName,this.customer.middleName].filter(Boolean).join(" ")},disabledSubmit:function(){return this.pendingSubmit||this.status!==u.e.PASSPORT_LOADED&&this.status!==u.e.SIGN_SMS_SEND},disabledSendPhoto:function(){return this.status!==u.e.GOOD_SELECTED}},methods:{resultSmsSend:function(e,t){"SIGN_SMS_SEND"===e?this.openAlert("Смс успешно отправлено!"):this.openAlert(t||"Не удалось отправить СМС")},onSubmit:function(){var e=this;this.pendingSubmit=!0,v.save({leasingApplicationNumber:this.leasingApplicationNumber},{}).then(function(t){var n=t.body;e.pendingSubmit=!1,e.resultSmsSend(n.resultCode,n.resultText)}).catch(function(t){e.pendingSubmit=!1,e.openAlert("Не удалось отправить СМС")})},openAlert:function(e){this.$alert(e,"Отправка СМС",{confirmButtonText:"OK"})},photoLoaded:function(e){e&&(this.status=sessionStorage.getItem("status"),this.scanVisible=!1,this.fileVisible=!1)},getClientData:function(){var e=this;S.get({leasingApplicationNumber:this.leasingApplicationNumber}).then(function(t){var n=t.body;e.pendingSubmit=!1,e.customer=n.customer,e.leasingContract=n.leasingContract||{},e.leasingGoods=n.leasingGoods,e.additionalServices=e.leasingContract.leasingAdditionalServices}).catch(function(t){e.openAlert("Не удалось загрузить данные пользователя")})}},created:function(){this.status=sessionStorage.getItem("status"),this.leasingApplicationNumber=sessionStorage.getItem("leasingApplicationNumber"),this.getClientData()}},F={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Клиент: "+e._s(e.fullName))]),e._v(" "),n("leasing-contract-component",{attrs:{"leasing-contract":e.leasingContract}}),e._v(" "),n("h2",[e._v("Услуги:")]),e._v(" "),n("additional-services-component",{attrs:{"additional-services":e.additionalServices}}),e._v(" "),n("h2",[e._v("Товары")]),e._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.leasingGoods}},[n("el-table-column",{attrs:{prop:"leasingGoodTypeName",label:"Тип товара по лизингу",width:"180"}}),e._v(" "),n("el-table-column",{attrs:{prop:"categoryName",label:"Категория товара",width:"180"}}),e._v(" "),n("el-table-column",{attrs:{prop:"typeName",label:"Тип товара"}}),e._v(" "),n("el-table-column",{attrs:{prop:"goodsName",label:"Наименование товара"}}),e._v(" "),n("el-table-column",{attrs:{prop:"leasingGoodName",label:"Наименование товара по лизингу"}}),e._v(" "),n("el-table-column",{attrs:{prop:"price",label:"Стоимость"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(e._f("currency")(t.row.price))+"\n        ")]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"leasingGoodRrp",label:"Рекомендованная стоимость"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(e._f("currency")(t.row.leasingGoodRrp))+"\n        ")]}}])})],1),e._v(" "),n("div",{staticClass:"footer"},[n("el-row",{attrs:{type:"flex",justify:"end"}},[n("el-col",{staticClass:"step-div"},[n("div",{staticClass:"step-name"},[e._v("1.")]),e._v(" "),n("el-button",{attrs:{type:"warning",disabled:e.disabledSendPhoto},on:{click:function(t){e.scanVisible=!0}}},[e._v("\n          Сделать фото паспорта\n        ")]),e._v("\n        или\n        "),n("el-button",{attrs:{type:"warning",disabled:e.disabledSendPhoto},on:{click:function(t){e.fileVisible=!0}}},[e._v("\n          Загрузить файл с фото паспорта\n        ")])],1)],1),e._v(" "),n("el-row",{attrs:{type:"flex",justify:"end"}},[n("el-col",{staticClass:"step-div"},[n("div",{staticClass:"step-name"},[e._v("2.")]),e._v(" "),n("el-button",{attrs:{type:"warning",disabled:e.disabledSubmit},on:{click:e.onSubmit}},[e._v("\n          Отправить СМС для подписания договора\n        ")])],1)],1)],1),e._v(" "),n("el-dialog",{attrs:{title:"Сделать фото паспорта",fullscreen:!0,visible:e.scanVisible},on:{"update:visible":function(t){e.scanVisible=t}}},[e.scanVisible?n("photo-from-camera",{on:{loaded:e.photoLoaded}}):e._e()],1),e._v(" "),n("el-dialog",{attrs:{title:"Загрузить файл с фото паспорта",visible:e.fileVisible},on:{"update:visible":function(t){e.fileVisible=t}}},[e.fileVisible?n("photo-from-file",{on:{loaded:e.photoLoaded}}):e._e()],1)],1)},staticRenderFns:[]};var $=n("VU/8")(B,F,!1,function(e){n("BqFi")},"data-v-4178f8b0",null).exports,j={data:function(){return{errorMsg:void 0}},created:function(){var e,t=sessionStorage.getItem("status"),n=(e={},D()(e,u.e.UNAVAILABLE,"Оформление лизинга недоступно!"),D()(e,u.e.SIGNED,"Договор подписан! Клиент может обратиться за получением товаров."),D()(e,u.e.GRADE_CONFIRMED,"Договор в процессе подписания акта приема-передачи"),D()(e,u.e.COMMISSION_PAID,"Договор в процессе подписания акта приема-передачи"),D()(e,u.e.ACT_SIGN_SMS_SEND,"Договор в процессе подписания акта приема-передачи"),D()(e,u.e.ACT_SIGNED,"Акт подписан, клиент может получить товары"),D()(e,u.e.CANCELED,"Лизинговый договор аннулирован"),e);this.errorMsg=n[t]||"Неизвестная ошибка"}},q={render:function(){var e=this.$createElement;return(this._self._c||e)("h2",{staticClass:"error-msg"},[this._v(this._s(this.errorMsg))])},staticRenderFns:[]};var K=n("VU/8")(j,q,!1,function(e){n("VTcO")},"data-v-42976f05",null).exports;a.default.use(l.a);var Y=new l.a({routes:[{path:"/",name:"Auth",component:A,props:function(e){return e.query}},{path:"/goods",name:"Goods",component:G,meta:{header:{name:"Выбор товаров"},requiredAuth:!0}},{path:"/sign-sms",name:"SignSms",component:$,meta:{header:{name:"Просмотр условий, отправка смс для подписания"},requiredAuth:!0}},{path:"/error",name:"Error",component:K,meta:{header:{name:"Ошибка!"}}}]});Y.beforeEach(function(e,t,n){e.meta.requiredAuth?sessionStorage.getItem("token")?n():Y.push("/"):n()});var H=Y,J=(n("oq7i"),n("+BTi"),n("+TD8")),W=n.n(J),z=(n("jAzQ"),n("wOhx")),Q=n.n(z),X=(n("jZDA"),n("91Nw")),Z=n.n(X),ee=(n("d7TW"),n("ajQY")),te=n.n(ee),ne=(n("Yq4J"),n("qubY")),ae=n.n(ne),ie=(n("I4nB"),n("STLj")),se=n.n(ie),oe=(n("cDSy"),n("e0Bm")),re=n.n(oe),le=(n("X+ky"),n("HJMx")),ue=n.n(le),ce=(n("GXEp"),n("mtrD")),de=n.n(ce),me=(n("Dte2"),n("q4le")),pe=n.n(me),fe=(n("isE6"),n("LR6y")),ge=n.n(fe),Se=n("UMRm"),ve=n.n(Se),_e=n("urW8"),he=n.n(_e);he.a.use(ve.a),a.default.prototype.$ELEMENT={size:"medium"},a.default.use(ge.a),a.default.use(pe.a),a.default.use(de.a),a.default.use(ue.a),a.default.use(re.a),a.default.use(se.a),a.default.use(ae.a),a.default.use(te.a),a.default.use(Z.a),a.default.use(Q.a),a.default.prototype.$alert=W.a.alert;var be=n("ESwS"),Ae=n.n(be),Ne=n("1TRy"),Ee=n.n(Ne),ye=n("W1GH"),Ce=n.n(ye);he.a.use(ve.a),a.default.use(Ae.a),a.default.use(Ee.a,{prefix:"liza_",driver:"session"}),a.default.filter("currency",function(e){return Ce.a.formatNumber(e,2," ")}),n("Ze5Q"),a.default.config.productionTip=!1,a.default.http.get("/environment.json?t="+(new Date).getTime()).then(function(e){new a.default({el:"#app",router:H,template:"<App/>",components:{App:r},beforeCreate:function(){var t=e.body;a.default.http.options.root=t?t.gw:"gw"}})}).catch(function(e){console.error(e)})},VTcO:function(e,t){},"X+ky":function(e,t){},Yq4J:function(e,t){},cDSy:function(e,t){},d7TW:function(e,t){},isE6:function(e,t){},jAzQ:function(e,t){},jZDA:function(e,t){},nJin:function(e,t){},ocqO:function(e,t){},oq7i:function(e,t){},qI5z:function(e,t,n){"use strict";n.d(t,"e",function(){return a}),n.d(t,"b",function(){return i}),n.d(t,"a",function(){return s}),n.d(t,"d",function(){return o}),n.d(t,"f",function(){return r}),n.d(t,"c",function(){return l});var a={AVAILABLE:"AVAILABLE",UNAVAILABLE:"UNAVAILABLE",APPROVED:"APPROVED",GOOD_SELECTED:"GOOD_SELECTED",SIGN_SMS_SEND:"SIGN_SMS_SEND",SIGNED:"SIGNED",GRADE_CONFIRMED:"GRADE_CONFIRMED",COMMISSION_PAID:"COMMISSION_PAID",ACT_SIGN_SMS_SEND:"ACT_SIGN_SMS_SEND",ACT_SIGNED:"ACT_SIGNED",CANCELED:"CANCELED",PASSPORT_LOADED:"PASSPORT_LOADED"},i={GOODS:"GOODS",SERVICES:"SERVICES"},s={SAMSUNG_CARE_PACK:"SAMSUNG_CARE_PACK",ACCESSORY:"ACCESSORY",MOBILE_CONTRACT:"MOBILE_CONTRACT"},o={LEASING_GOOD:"LEASING_GOOD",ACCESSORY:"ACCESSORY",MOBILE_CONTRACT:"MOBILE_CONTRACT"},r={URL_SMS_SEND:"URL_SMS_SEND",SIGN_REJECTED:"SIGN_REJECTED"},l={OK:200,BAD_REQUEST:400,INTERNAL_SERVER_ERROR:500}},uMhA:function(e,t){}},["NHnr"]);