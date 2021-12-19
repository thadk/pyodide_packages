var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="csvwlib.data";var REMOTE_PACKAGE_BASE="csvwlib.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}});return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","csvwlib-0.3.2-py3.9.egg-info",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","csvwlib",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/csvwlib","converter",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/csvwlib","utils",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/csvwlib/utils","url",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/csvwlib/utils","json",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/csvwlib/utils","rdf",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:49478,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1419,2681,3636,4572,5575,6661,7753,8843,9907,10781,11666,12703,13829,14808,15848,16740,17712,18488,19558,20526,21641,22813,23971,24896,25800,26652,27584,28609,29606,30521,31353,32069,33057,33835,34912,35741,36879,37783,38824,39785,40710,41640,42675,43704,44728,45762,46792,47933,48638],sizes:[1419,1262,955,936,1003,1086,1092,1090,1064,874,885,1037,1126,979,1040,892,972,776,1070,968,1115,1172,1158,925,904,852,932,1025,997,915,832,716,988,778,1077,829,1138,904,1041,961,925,930,1035,1029,1024,1034,1030,1141,705,840],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module["LZ4"]==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module["LZ4"].loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_csvwlib.data")}Module["addRunDependency"]("datafile_csvwlib.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/csvwlib-0.3.2-py3.9.egg-info/PKG-INFO",start:0,end:4675,audio:0},{filename:"/lib/python3.9/site-packages/csvwlib-0.3.2-py3.9.egg-info/not-zip-safe",start:4675,end:4676,audio:0},{filename:"/lib/python3.9/site-packages/csvwlib-0.3.2-py3.9.egg-info/SOURCES.txt",start:4676,end:5904,audio:0},{filename:"/lib/python3.9/site-packages/csvwlib-0.3.2-py3.9.egg-info/requires.txt",start:5904,end:6019,audio:0},{filename:"/lib/python3.9/site-packages/csvwlib-0.3.2-py3.9.egg-info/top_level.txt",start:6019,end:6027,audio:0},{filename:"/lib/python3.9/site-packages/csvwlib-0.3.2-py3.9.egg-info/dependency_links.txt",start:6027,end:6028,audio:0},{filename:"/lib/python3.9/site-packages/csvwlib/__init__.py",start:6028,end:6086,audio:0},{filename:"/lib/python3.9/site-packages/csvwlib/converter/CSVWConverter.py",start:6086,end:6900,audio:0},{filename:"/lib/python3.9/site-packages/csvwlib/converter/ToRDFConverter.py",start:6900,end:15766,audio:0},{filename:"/lib/python3.9/site-packages/csvwlib/converter/__init__.py",start:15766,end:15766,audio:0},{filename:"/lib/python3.9/site-packages/csvwlib/converter/ToJSONConverter.py",start:15766,end:22874,audio:0},{filename:"/lib/python3.9/site-packages/csvwlib/converter/ModelConverter.py",start:22874,end:41830,audio:0},{filename:"/lib/python3.9/site-packages/csvwlib/utils/metadata.py",start:41830,end:60238,audio:0},{filename:"/lib/python3.9/site-packages/csvwlib/utils/NumericUtils.py",start:60238,end:61735,audio:0},{filename:"/lib/python3.9/site-packages/csvwlib/utils/datatypeutils.py",start:61735,end:66995,audio:0},{filename:"/lib/python3.9/site-packages/csvwlib/utils/ATDMUtils.py",start:66995,end:67204,audio:0},{filename:"/lib/python3.9/site-packages/csvwlib/utils/TypeConverter.py",start:67204,end:71257,audio:0},{filename:"/lib/python3.9/site-packages/csvwlib/utils/__init__.py",start:71257,end:71257,audio:0},{filename:"/lib/python3.9/site-packages/csvwlib/utils/MetadataLocator.py",start:71257,end:74469,audio:0},{filename:"/lib/python3.9/site-packages/csvwlib/utils/CSVUtils.py",start:74469,end:74801,audio:0},{filename:"/lib/python3.9/site-packages/csvwlib/utils/DialectUtils.py",start:74801,end:75349,audio:0},{filename:"/lib/python3.9/site-packages/csvwlib/utils/DOPUtils.py",start:75349,end:75700,audio:0},{filename:"/lib/python3.9/site-packages/csvwlib/utils/url/WellKnownUriResolver.py",start:75700,end:76185,audio:0},{filename:"/lib/python3.9/site-packages/csvwlib/utils/url/PropertyUrlUtils.py",start:76185,end:77639,audio:0},{filename:"/lib/python3.9/site-packages/csvwlib/utils/url/UriTemplateUtils.py",start:77639,end:79707,audio:0},{filename:"/lib/python3.9/site-packages/csvwlib/utils/url/__init__.py",start:79707,end:79707,audio:0},{filename:"/lib/python3.9/site-packages/csvwlib/utils/url/ValueUrlUtils.py",start:79707,end:80354,audio:0},{filename:"/lib/python3.9/site-packages/csvwlib/utils/url/AboutUrlutils.py",start:80354,end:81203,audio:0},{filename:"/lib/python3.9/site-packages/csvwlib/utils/json/__init__.py",start:81203,end:81203,audio:0},{filename:"/lib/python3.9/site-packages/csvwlib/utils/json/CommonProperties.py",start:81203,end:84331,audio:0},{filename:"/lib/python3.9/site-packages/csvwlib/utils/json/JSONLDUtils.py",start:84331,end:86122,audio:0},{filename:"/lib/python3.9/site-packages/csvwlib/utils/rdf/RDFGraphUtils.py",start:86122,end:87371,audio:0},{filename:"/lib/python3.9/site-packages/csvwlib/utils/rdf/RDFUtils.py",start:87371,end:87721,audio:0},{filename:"/lib/python3.9/site-packages/csvwlib/utils/rdf/__init__.py",start:87721,end:87721,audio:0},{filename:"/lib/python3.9/site-packages/csvwlib/utils/rdf/OntologyUtils.py",start:87721,end:88512,audio:0},{filename:"/lib/python3.9/site-packages/csvwlib/utils/rdf/CSVW.py",start:88512,end:97958,audio:0},{filename:"/lib/python3.9/site-packages/csvwlib/utils/rdf/Namespaces.py",start:97958,end:102065,audio:0}],remote_package_size:53574,package_uuid:"3c737c73-0a99-4489-a4ab-0bf8b4dff8f2"})})();