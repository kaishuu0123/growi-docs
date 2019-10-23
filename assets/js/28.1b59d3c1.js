(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{208:function(t,e,a){"use strict";a.r(e);var s=a(20),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"launch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#launch","aria-hidden":"true"}},[t._v("#")]),t._v(" Launch")]),t._v(" "),a("h2",{attrs:{id:"first-time"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#first-time","aria-hidden":"true"}},[t._v("#")]),t._v(" First Time")]),t._v(" "),a("h3",{attrs:{id:"clone-the-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clone-the-repository","aria-hidden":"true"}},[t._v("#")]),t._v(" Clone the Repository")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/weseek/growi.git\n")])])]),a("h3",{attrs:{id:"confirm-versions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#confirm-versions","aria-hidden":"true"}},[t._v("#")]),t._v(" Confirm Versions")]),t._v(" "),a("p",[t._v("See "),a("router-link",{attrs:{to:"./dev-env.html#confirm-versions"}},[t._v("Getting Started#Confirm Versions")])],1),t._v(" "),a("h3",{attrs:{id:"set-up-datastore-for-development"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-up-datastore-for-development","aria-hidden":"true"}},[t._v("#")]),t._v(" Set up Datastore for Development")]),t._v(" "),a("p",[t._v("Execute the following command in Docker environment.")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("For Windows, execute the command in the Linux VM set up in "),a("router-link",{attrs:{to:"./dev-env.html#set-up-dependent-middlewares"}},[t._v("Getting Started#Set up Dependent Middlewares")]),t._v(".")],1)]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/weseek/growi-docker-compose.git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" growi-docker-compose\ndocker-compose -f docker-compose.dev.yml up\n")])])]),a("p",[t._v("The following containers should be launched.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Product")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Port")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Desc")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("MongoDB")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("27017")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ElasticSearch")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("9200")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://github.com/mobz/elasticsearch-head",target:"_blank",rel:"noopener noreferrer"}},[t._v("elasticsearch-head"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("9100")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("A web front end for an Elasticsearch cluster")])])])]),t._v(" "),a("h3",{attrs:{id:"install-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-dependencies","aria-hidden":"true"}},[t._v("#")]),t._v(" Install Dependencies")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("yarn\n")])])]),a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("DO NOT USE "),a("code",[t._v("npm install")])])]),t._v(" "),a("h3",{attrs:{id:"migration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migration","aria-hidden":"true"}},[t._v("#")]),t._v(" Migration")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run migrate\n")])])]),a("h3",{attrs:{id:"lauch-front-end-and-back-end-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lauch-front-end-and-back-end-server","aria-hidden":"true"}},[t._v("#")]),t._v(" Lauch Front-end and Back-end Server")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("yarn build")]),t._v(" does the following.\n"),a("ol",[a("li",[t._v("Build clients assets and launch webpack-dev-server.")]),t._v(" "),a("li",[t._v("Detect changes in client-side files and auto-rebuild the client assets.")])])]),t._v(" "),a("li",[a("code",[t._v("yarn server")]),t._v(" does the following.\n"),a("ol",[a("li",[t._v("Launch Express server.")]),t._v(" "),a("li",[t._v("Detect changes in server-side files and auto-restart the Express server.")])])])]),t._v(" "),a("p",[t._v("Each process can be ended with "),a("code",[t._v("Ctrl-C")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"second-time-on"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#second-time-on","aria-hidden":"true"}},[t._v("#")]),t._v(" Second Time On")]),t._v(" "),a("p",[t._v("See "),a("a",{attrs:{href:"#first-time"}},[t._v("First Time")]),t._v(", and follow the step below.")]),t._v(" "),a("ol",[a("li",[t._v("Confirm Versions")]),t._v(" "),a("li",[t._v("Set up Datastore for Development")]),t._v(" "),a("li",[t._v("Install Dependencies")]),t._v(" "),a("li",[t._v("Migration")]),t._v(" "),a("li",[t._v("Lauch Front-end and Back-end Server")])]),t._v(" "),a("h2",{attrs:{id:"list-of-npm-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-of-npm-commands","aria-hidden":"true"}},[t._v("#")]),t._v(" List of npm Commands")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("command")]),t._v(" "),a("th",[t._v("desc")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("build")])]),t._v(" "),a("td",[t._v("Runs "),a("code",[t._v("build:dev:watch")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("build:dev")])]),t._v(" "),a("td",[t._v("Builds client assets without watching file changes")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("build:dev:watch")])]),t._v(" "),a("td",[t._v("Watches file changes and re-builds the client assets")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("build:prod")])]),t._v(" "),a("td",[t._v("Builds the client assets for production")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("server")])]),t._v(" "),a("td",[t._v("Runs "),a("code",[t._v("server:dev:watch")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("server:dev")])]),t._v(" "),a("td",[t._v("Launches the server")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("server:dev:watch")])]),t._v(" "),a("td",[t._v("Watches file changes and restarts the server")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("server:prod")])]),t._v(" "),a("td",[t._v("Launches the server for production")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("start")])]),t._v(" "),a("td",[t._v("Runs "),a("code",[t._v("build:prod")]),t._v(" and "),a("code",[t._v("server:prod")])])])])])])},[],!1,null,null,null);r.options.__file="launch.md";e.default=r.exports}}]);