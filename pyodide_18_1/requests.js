var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="requests.data";var REMOTE_PACKAGE_BASE="requests.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}});return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","requests-2.26.0-py3.9.egg-info",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","requests",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:107558,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1309,2712,4010,5245,6515,7800,8606,9725,10795,11900,13141,14401,15546,16613,17560,18795,20098,21475,22843,24091,25253,26442,27688,28974,30288,31403,32656,33447,34162,35383,36601,37975,39167,40648,41760,42884,44044,45329,46669,47806,49128,50303,51637,52927,53779,55074,56192,57449,58640,59978,61250,62442,63860,65079,66527,67802,68989,69636,70979,72321,73522,74757,76175,77331,78626,79974,81142,82501,83791,85042,86237,87554,88810,90158,91269,92569,93816,94876,95813,96966,98315,99477,100492,101542,102726,103985,105137,106239,107171],sizes:[1309,1403,1298,1235,1270,1285,806,1119,1070,1105,1241,1260,1145,1067,947,1235,1303,1377,1368,1248,1162,1189,1246,1286,1314,1115,1253,791,715,1221,1218,1374,1192,1481,1112,1124,1160,1285,1340,1137,1322,1175,1334,1290,852,1295,1118,1257,1191,1338,1272,1192,1418,1219,1448,1275,1187,647,1343,1342,1201,1235,1418,1156,1295,1348,1168,1359,1290,1251,1195,1317,1256,1348,1111,1300,1247,1060,937,1153,1349,1162,1015,1050,1184,1259,1152,1102,932,387],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module["LZ4"]==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module["LZ4"].loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_requests.data")}Module["addRunDependency"]("datafile_requests.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/requests-2.26.0-py3.9.egg-info/PKG-INFO",start:0,end:4228,audio:0},{filename:"/lib/python3.9/site-packages/requests-2.26.0-py3.9.egg-info/not-zip-safe",start:4228,end:4229,audio:0},{filename:"/lib/python3.9/site-packages/requests-2.26.0-py3.9.egg-info/SOURCES.txt",start:4229,end:5187,audio:0},{filename:"/lib/python3.9/site-packages/requests-2.26.0-py3.9.egg-info/requires.txt",start:5187,end:5508,audio:0},{filename:"/lib/python3.9/site-packages/requests-2.26.0-py3.9.egg-info/top_level.txt",start:5508,end:5517,audio:0},{filename:"/lib/python3.9/site-packages/requests-2.26.0-py3.9.egg-info/dependency_links.txt",start:5517,end:5518,audio:0},{filename:"/lib/python3.9/site-packages/requests/cookies.py",start:5518,end:23948,audio:0},{filename:"/lib/python3.9/site-packages/requests/auth.py",start:23948,end:34155,audio:0},{filename:"/lib/python3.9/site-packages/requests/sessions.py",start:34155,end:64323,audio:0},{filename:"/lib/python3.9/site-packages/requests/hooks.py",start:64323,end:65080,audio:0},{filename:"/lib/python3.9/site-packages/requests/compat.py",start:65080,end:66932,audio:0},{filename:"/lib/python3.9/site-packages/requests/models.py",start:66932,end:101791,audio:0},{filename:"/lib/python3.9/site-packages/requests/certs.py",start:101791,end:102244,audio:0},{filename:"/lib/python3.9/site-packages/requests/__init__.py",start:102244,end:107151,audio:0},{filename:"/lib/python3.9/site-packages/requests/status_codes.py",start:107151,end:111339,audio:0},{filename:"/lib/python3.9/site-packages/requests/packages.py",start:111339,end:112271,audio:0},{filename:"/lib/python3.9/site-packages/requests/__version__.py",start:112271,end:112712,audio:0},{filename:"/lib/python3.9/site-packages/requests/api.py",start:112712,end:119114,audio:0},{filename:"/lib/python3.9/site-packages/requests/_internal_utils.py",start:119114,end:120210,audio:0},{filename:"/lib/python3.9/site-packages/requests/utils.py",start:120210,end:151592,audio:0},{filename:"/lib/python3.9/site-packages/requests/exceptions.py",start:151592,end:154830,audio:0},{filename:"/lib/python3.9/site-packages/requests/structures.py",start:154830,end:157835,audio:0},{filename:"/lib/python3.9/site-packages/requests/help.py",start:157835,end:161803,audio:0},{filename:"/lib/python3.9/site-packages/requests/adapters.py",start:161803,end:183147,audio:0}],remote_package_size:111654,package_uuid:"24ea980e-1177-4942-bf2e-ce9510813798"})})();