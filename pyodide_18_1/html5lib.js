var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="html5lib.data";var REMOTE_PACKAGE_BASE="html5lib.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}});return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","html5lib-1.1-py3.9.egg-info",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","html5lib",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/html5lib","filters",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/html5lib","treewalkers",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/html5lib","treebuilders",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/html5lib","_trie",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/html5lib","treeadapters",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:234473,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1190,2411,3973,5411,6949,8482,10043,11335,12016,12490,13064,14234,15406,16632,17864,19050,20218,21520,22709,23536,24642,25637,26677,27619,28710,29617,30690,31929,33249,34569,35970,37492,39040,39954,40988,41943,42706,43517,44229,44914,45553,46383,46984,47805,48879,49961,51078,52148,53035,54016,54906,55790,56692,57588,58521,59438,60372,61217,62143,63084,64007,64891,65828,66735,67651,68563,69333,70216,71159,72109,73058,73929,74830,75749,76607,77839,78888,80077,81123,81932,83133,84355,85523,86650,87707,88538,89072,89806,90548,91358,92324,93202,94109,95116,96165,97072,97897,98616,99424,100334,101204,101975,102874,103740,104643,105547,106495,107267,108070,109104,110263,111276,112090,112959,113894,114770,115678,116629,117357,118348,119198,120155,121158,121858,122797,123795,124593,125532,126398,127275,128033,128601,129809,131045,132268,133480,134634,135668,136600,137316,138324,139674,140740,141812,142928,143971,144945,145834,146367,147057,147925,148570,149220,149841,150348,150870,151485,152116,152557,153277,154113,155080,155759,156364,157102,158102,158913,159417,160006,160664,161250,162070,162603,163123,163643,164171,164672,165239,166332,167696,168849,169861,170314,170829,171571,172285,173025,173789,174692,175717,176618,177734,178814,179965,181107,182112,183195,184079,184903,185760,186531,187602,188335,189490,190396,191489,192632,193903,194924,195944,197047,197829,198830,200043,201002,201940,202932,204252,205206,206075,207122,207920,208838,209983,211292,212686,213796,214739,215609,216456,217300,218280,219354,220505,221624,222731,223747,224771,225748,226985,227804,228784,229749,230574,231735,232784,233967],sizes:[1190,1221,1562,1438,1538,1533,1561,1292,681,474,574,1170,1172,1226,1232,1186,1168,1302,1189,827,1106,995,1040,942,1091,907,1073,1239,1320,1320,1401,1522,1548,914,1034,955,763,811,712,685,639,830,601,821,1074,1082,1117,1070,887,981,890,884,902,896,933,917,934,845,926,941,923,884,937,907,916,912,770,883,943,950,949,871,901,919,858,1232,1049,1189,1046,809,1201,1222,1168,1127,1057,831,534,734,742,810,966,878,907,1007,1049,907,825,719,808,910,870,771,899,866,903,904,948,772,803,1034,1159,1013,814,869,935,876,908,951,728,991,850,957,1003,700,939,998,798,939,866,877,758,568,1208,1236,1223,1212,1154,1034,932,716,1008,1350,1066,1072,1116,1043,974,889,533,690,868,645,650,621,507,522,615,631,441,720,836,967,679,605,738,1e3,811,504,589,658,586,820,533,520,520,528,501,567,1093,1364,1153,1012,453,515,742,714,740,764,903,1025,901,1116,1080,1151,1142,1005,1083,884,824,857,771,1071,733,1155,906,1093,1143,1271,1021,1020,1103,782,1001,1213,959,938,992,1320,954,869,1047,798,918,1145,1309,1394,1110,943,870,847,844,980,1074,1151,1119,1107,1016,1024,977,1237,819,980,965,825,1161,1049,1183,506],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module["LZ4"]==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module["LZ4"].loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_html5lib.data")}Module["addRunDependency"]("datafile_html5lib.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/html5lib-1.1-py3.9.egg-info/PKG-INFO",start:0,end:15713,audio:0},{filename:"/lib/python3.9/site-packages/html5lib-1.1-py3.9.egg-info/SOURCES.txt",start:15713,end:22186,audio:0},{filename:"/lib/python3.9/site-packages/html5lib-1.1-py3.9.egg-info/requires.txt",start:22186,end:22389,audio:0},{filename:"/lib/python3.9/site-packages/html5lib-1.1-py3.9.egg-info/top_level.txt",start:22389,end:22398,audio:0},{filename:"/lib/python3.9/site-packages/html5lib-1.1-py3.9.egg-info/dependency_links.txt",start:22398,end:22399,audio:0},{filename:"/lib/python3.9/site-packages/html5lib/_inputstream.py",start:22399,end:54699,audio:0},{filename:"/lib/python3.9/site-packages/html5lib/_ihatexml.py",start:54699,end:71427,audio:0},{filename:"/lib/python3.9/site-packages/html5lib/constants.py",start:71427,end:154891,audio:0},{filename:"/lib/python3.9/site-packages/html5lib/html5parser.py",start:154891,end:272065,audio:0},{filename:"/lib/python3.9/site-packages/html5lib/__init__.py",start:272065,end:273208,audio:0},{filename:"/lib/python3.9/site-packages/html5lib/serializer.py",start:273208,end:288955,audio:0},{filename:"/lib/python3.9/site-packages/html5lib/_tokenizer.py",start:288955,end:365983,audio:0},{filename:"/lib/python3.9/site-packages/html5lib/_utils.py",start:365983,end:370902,audio:0},{filename:"/lib/python3.9/site-packages/html5lib/filters/sanitizer.py",start:370902,end:397787,audio:0},{filename:"/lib/python3.9/site-packages/html5lib/filters/inject_meta_charset.py",start:397787,end:400732,audio:0},{filename:"/lib/python3.9/site-packages/html5lib/filters/__init__.py",start:400732,end:400732,audio:0},{filename:"/lib/python3.9/site-packages/html5lib/filters/base.py",start:400732,end:401018,audio:0},{filename:"/lib/python3.9/site-packages/html5lib/filters/alphabeticalattributes.py",start:401018,end:401937,audio:0},{filename:"/lib/python3.9/site-packages/html5lib/filters/optionaltags.py",start:401937,end:412525,audio:0},{filename:"/lib/python3.9/site-packages/html5lib/filters/lint.py",start:412525,end:416156,audio:0},{filename:"/lib/python3.9/site-packages/html5lib/filters/whitespace.py",start:416156,end:417370,audio:0},{filename:"/lib/python3.9/site-packages/html5lib/treewalkers/etree_lxml.py",start:417370,end:423715,audio:0},{filename:"/lib/python3.9/site-packages/html5lib/treewalkers/__init__.py",start:423715,end:429434,audio:0},{filename:"/lib/python3.9/site-packages/html5lib/treewalkers/etree.py",start:429434,end:433973,audio:0},{filename:"/lib/python3.9/site-packages/html5lib/treewalkers/genshi.py",start:433973,end:436282,audio:0},{filename:"/lib/python3.9/site-packages/html5lib/treewalkers/base.py",start:436282,end:443758,audio:0},{filename:"/lib/python3.9/site-packages/html5lib/treewalkers/dom.py",start:443758,end:445171,audio:0},{filename:"/lib/python3.9/site-packages/html5lib/treebuilders/etree_lxml.py",start:445171,end:459925,audio:0},{filename:"/lib/python3.9/site-packages/html5lib/treebuilders/__init__.py",start:459925,end:463517,audio:0},{filename:"/lib/python3.9/site-packages/html5lib/treebuilders/etree.py",start:463517,end:476341,audio:0},{filename:"/lib/python3.9/site-packages/html5lib/treebuilders/base.py",start:476341,end:490894,audio:0},{filename:"/lib/python3.9/site-packages/html5lib/treebuilders/dom.py",start:490894,end:499819,audio:0},{filename:"/lib/python3.9/site-packages/html5lib/_trie/_base.py",start:499819,end:500832,audio:0},{filename:"/lib/python3.9/site-packages/html5lib/_trie/__init__.py",start:500832,end:500941,audio:0},{filename:"/lib/python3.9/site-packages/html5lib/_trie/py.py",start:500941,end:502704,audio:0},{filename:"/lib/python3.9/site-packages/html5lib/treeadapters/sax.py",start:502704,end:504480,audio:0},{filename:"/lib/python3.9/site-packages/html5lib/treeadapters/__init__.py",start:504480,end:505130,audio:0},{filename:"/lib/python3.9/site-packages/html5lib/treeadapters/genshi.py",start:505130,end:506845,audio:0}],remote_package_size:238569,package_uuid:"c42a186b-4540-4910-b450-696b48d6fb01"})})();