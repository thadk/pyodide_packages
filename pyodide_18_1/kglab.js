var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="kglab.data";var REMOTE_PACKAGE_BASE="kglab.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}});return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","kglab",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","kglab-0.4.2-py3.9.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:77192,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1258,2515,3508,4558,5646,6765,8184,9400,10476,11549,12661,13938,15243,16602,17689,18897,20303,21366,22631,23780,24928,26095,27476,28721,30069,31529,32835,34038,35129,36450,37584,38721,39713,41103,42415,43512,44659,45754,46720,47886,49309,50483,51757,52896,54221,55554,56934,58261,59519,60968,61953,63078,64222,65412,66517,67418,68392,69296,70539,71944,73274,74761,76352],sizes:[1258,1257,993,1050,1088,1119,1419,1216,1076,1073,1112,1277,1305,1359,1087,1208,1406,1063,1265,1149,1148,1167,1381,1245,1348,1460,1306,1203,1091,1321,1134,1137,992,1390,1312,1097,1147,1095,966,1166,1423,1174,1274,1139,1325,1333,1380,1327,1258,1449,985,1125,1144,1190,1105,901,974,904,1243,1405,1330,1487,1591,840],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module["LZ4"]==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module["LZ4"].loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_kglab.data")}Module["addRunDependency"]("datafile_kglab.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/kglab/version.py",start:0,end:1319,audio:0},{filename:"/lib/python3.9/site-packages/kglab/gpviz.py",start:1319,end:12184,audio:0},{filename:"/lib/python3.9/site-packages/kglab/external_import.py",start:12184,end:14694,audio:0},{filename:"/lib/python3.9/site-packages/kglab/esp.py",start:14694,end:25407,audio:0},{filename:"/lib/python3.9/site-packages/kglab/util.py",start:25407,end:28625,audio:0},{filename:"/lib/python3.9/site-packages/kglab/pkg_types.py",start:28625,end:29632,audio:0},{filename:"/lib/python3.9/site-packages/kglab/__init__.py",start:29632,end:30449,audio:0},{filename:"/lib/python3.9/site-packages/kglab/topo.py",start:30449,end:37072,audio:0},{filename:"/lib/python3.9/site-packages/kglab/srl.py",start:37072,end:49294,audio:0},{filename:"/lib/python3.9/site-packages/kglab/subg.py",start:49294,end:66124,audio:0},{filename:"/lib/python3.9/site-packages/kglab/kglab.py",start:66124,end:118736,audio:0},{filename:"/lib/python3.9/site-packages/kglab/decorators.py",start:118736,end:121908,audio:0},{filename:"/lib/python3.9/site-packages/kglab-0.4.2-py3.9.egg-info/PKG-INFO",start:121908,end:129830,audio:0},{filename:"/lib/python3.9/site-packages/kglab-0.4.2-py3.9.egg-info/not-zip-safe",start:129830,end:129831,audio:0},{filename:"/lib/python3.9/site-packages/kglab-0.4.2-py3.9.egg-info/SOURCES.txt",start:129831,end:130254,audio:0},{filename:"/lib/python3.9/site-packages/kglab-0.4.2-py3.9.egg-info/requires.txt",start:130254,end:130270,audio:0},{filename:"/lib/python3.9/site-packages/kglab-0.4.2-py3.9.egg-info/top_level.txt",start:130270,end:130276,audio:0},{filename:"/lib/python3.9/site-packages/kglab-0.4.2-py3.9.egg-info/dependency_links.txt",start:130276,end:130277,audio:0}],remote_package_size:81288,package_uuid:"c9474499-802e-4e97-83c5-2768f926dc7b"})})();