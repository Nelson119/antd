(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{tKSp:function(e,a,t){"use strict";var n=t("g09b");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("IzEo");var l=n(t("bx4M"));t("Znn+");var r=n(t("ZTPi"));t("14J3");var d=n(t("BMrR"));t("jCWc");var i=n(t("kPKH")),s=t("Y2fQ"),f=n(t("q1tI")),u=t("M0Ur"),o=n(t("A3DA")),c=n(t("WD6q")),m=function(e){var a=e.data,t=e.currentTabKey;return f.default.createElement(d.default,{gutter:8,style:{width:138,margin:"8px 0"},type:"flex"},f.default.createElement(i.default,{span:12},f.default.createElement(o.default,{title:a.name,subTitle:f.default.createElement(s.FormattedMessage,{id:"dashboard-analysis.analysis.conversion-rate",defaultMessage:"Conversion Rate"}),gap:2,total:"".concat(100*a.cvr,"%"),theme:t!==a.name?"light":void 0})),f.default.createElement(i.default,{span:12,style:{paddingTop:36}},f.default.createElement(u.Pie,{animate:!1,inner:.55,tooltip:!1,margin:[0,0,0,0],percent:100*a.cvr,height:64})))},p=r.default.TabPane,y=function(e){var a=e.activeKey,t=e.loading,n=e.offlineData,d=e.offlineChartData,i=e.handleTabChange;return f.default.createElement(l.default,{loading:t,className:c.default.offlineCard,bordered:!1,style:{marginTop:32}},f.default.createElement(r.default,{activeKey:a,onChange:i},n.map(function(e){return f.default.createElement(p,{tab:f.default.createElement(m,{data:e,currentTabKey:a}),key:e.name},f.default.createElement("div",{style:{padding:"0 24px"}},f.default.createElement(u.TimelineChart,{height:400,data:d,titleMap:{y1:(0,s.formatMessage)({id:"dashboard-analysis.analysis.traffic"}),y2:(0,s.formatMessage)({id:"dashboard-analysis.analysis.payments"})}})))})))},g=y;a.default=g}}]);