var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="rdflib.data";var REMOTE_PACKAGE_BASE="rdflib.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}});return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","bin",true,true);Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","rdflib",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/rdflib","tools",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/rdflib","plugins",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/rdflib/plugins","parsers",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/rdflib/plugins","sparql",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/rdflib/plugins/sparql","results",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/rdflib/plugins","stores",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/rdflib/plugins","shared",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/rdflib/plugins/shared","jsonld",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/rdflib/plugins","serializers",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/rdflib","namespace",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages/rdflib","extras",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","rdflib-6.0.2-py3.9.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:883310,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,706,1402,2800,3898,5012,6188,6884,8052,9267,10321,11532,12691,13803,14843,15880,16703,17890,18711,19602,20426,21416,22367,23387,24591,25808,26987,27881,29113,30223,31720,33142,34194,35465,36725,37952,39283,40519,41649,42614,43738,44512,45261,46244,47181,48310,49237,50348,51400,52353,53252,54295,55507,56856,57866,59144,60133,61299,62536,63928,65135,66389,67645,68460,69846,71255,72371,73061,74010,75360,76337,77486,78488,79418,80326,81267,82247,83121,84199,85055,86008,86937,87846,89017,90120,91308,92108,93257,94219,95159,96235,97176,98375,99622,100203,101247,102381,103630,104930,106030,106929,108179,109552,110721,111817,112802,114063,114737,115626,116863,118165,119602,120730,121629,122562,123776,124737,125795,127051,128031,129268,129972,131061,131977,133004,134245,135304,136087,136673,137280,138362,139127,140083,141193,142521,143605,144785,145885,146996,147860,148874,149834,151170,152369,153543,154768,155958,157328,158612,160100,161192,162155,163354,164261,165339,166038,167327,168667,169962,171237,172359,173394,174627,175686,176853,178212,179582,180669,181627,182536,183539,184346,185273,186421,187865,189036,190416,191858,193176,194417,195635,196660,197474,198283,199354,200162,201315,202234,203052,204084,205037,206199,207289,208326,209344,210114,210886,211917,212909,213836,214934,215998,217108,218342,219658,220811,221977,222649,223411,224612,225754,226781,227741,228851,229874,230925,231903,232825,233742,234602,235877,236803,237898,238897,239866,241104,242086,243238,244187,245500,246655,247846,248919,249939,250943,252051,253243,254342,255509,256670,257752,258914,259805,260709,261520,262418,263123,263959,264523,265097,265526,266153,266819,267794,269153,270392,271802,272944,274187,275277,276462,277790,279109,280286,281247,282437,283421,284434,285222,286237,287040,287831,288515,289081,289609,290103,291032,291944,292966,293910,294953,295972,296973,297981,299207,300277,301294,302314,303361,304576,305807,307040,308187,309356,310343,311581,312766,314172,315445,316429,317308,318557,319614,320530,321664,322903,323897,324986,325972,326941,328085,329029,330093,331240,332571,333690,334594,335324,336573,337706,338949,340282,341390,342522,343735,344872,345799,346354,347295,348387,349281,350103,350725,351607,352575,353615,354873,356050,356922,358363,359329,360254,361534,362486,363184,364465,365682,366690,367540,368484,369413,370394,371384,372324,373407,374349,375863,377215,378353,379700,380693,381953,382948,384376,385647,386551,387748,388845,390227,391431,392391,393407,394640,396047,397114,397979,398843,399863,400819,401772,402831,404100,405030,406148,407319,408556,409715,410796,411789,412821,413955,415180,416251,417552,418711,419716,420757,421896,423163,424310,425207,426450,427494,428782,429863,430854,431823,432968,434280,435536,436816,438116,439235,440382,441580,442891,443964,445087,446319,447441,448620,449731,450483,451020,451897,452766,453964,455230,456476,457737,458925,460123,461242,462505,463710,464843,465994,466687,467610,468778,470091,471075,472373,473668,474828,476054,477237,478044,479365,480621,481788,482977,484261,485322,486300,487352,488397,489547,490788,491898,493169,494361,495636,496691,498022,499232,500664,501988,503420,504440,505114,506016,506845,508151,509478,510784,512041,513036,514259,515090,516227,517544,518762,519827,521130,522394,523470,524174,525315,526420,527609,528685,529892,530956,532347,533821,535204,536247,537341,538184,539414,540805,542049,543278,544703,545140,545588,546411,546829,547206,548396,549323,550382,551271,552512,553903,555254,556487,557537,558595,559963,561308,562614,563696,564484,565773,567080,568240,569409,570771,571955,573190,574452,575633,576948,578191,579534,580693,581918,583024,583829,584894,586043,587121,588330,589455,590603,591914,593038,594183,595328,596417,597669,598864,600282,601666,603020,604410,605807,607235,608722,609781,611076,611915,612899,613446,614474,615745,616865,617949,618844,619877,621162,622315,623626,625046,626389,627756,629085,630428,631879,633286,634651,635867,637187,638538,639870,641340,642575,643984,645348,646763,648065,649520,650726,651926,652847,653973,655069,656472,657760,659119,660397,661840,663200,664608,665992,667349,668684,670132,671313,672515,673779,675296,676607,678021,679312,680741,682093,683415,684805,686104,687390,688779,690011,691377,692763,694136,695653,697073,698361,699762,701092,702498,703884,705225,706619,707938,709263,710586,712009,713035,714381,715735,716931,718223,719475,720742,721994,723345,724579,725939,727247,728274,729575,730999,732226,733669,735145,736494,737986,739372,740726,741969,743305,744370,745694,747005,748155,749568,751072,752339,753623,754894,756220,757391,758720,759053,760035,761370,762089,762590,763157,764561,766004,767184,768576,769649,770499,771804,772787,773848,774689,775692,776795,777749,778599,779633,780785,781763,782752,783512,784623,785559,786407,787495,788673,789822,790966,792109,792974,794053,794698,795299,796299,797186,798177,799046,799794,801188,802313,803450,804426,805416,806802,808058,809383,810682,811854,813020,814379,815780,817242,818666,820036,821089,821930,822669,823469,824161,824589,824986,825406,825788,826241,826616,827016,827433,827782,828207,828666,829048,829367,829668,830023,830337,830666,831151,831547,831997,832454,832919,833336,833790,834201,834641,835071,835467,835950,836358,836736,837053,837424,837763,838143,838637,839095,839423,839769,840146,840526,840915,841280,841579,841975,842310,842613,842921,843323,843717,844084,844512,844945,845293,845594,845970,846353,846695,846994,847353,847590,848e3,848666,848975,849284,849593,849901,850209,850523,850849,851159,851505,851839,852178,852485,852820,853157,853504,853822,854138,854461,854793,855135,855486,855826,856184,856540,856882,857215,857563,857894,858219,858591,858957,859377,859814,860245,860598,860970,861338,861702,862042,862389,862750,863107,863434,863802,864183,864563,864915,865298,865705,866025,866303,866580,866856,867141,867577,868178,868777,869235,869544,869961,870261,870710,871202,871790,872271,872965,873386,874008,874570,875215,875793,876378,876997,877429,877819,878199,878615,879190,879834,880399,881028,881488,881916,882278,882671],sizes:[706,696,1398,1098,1114,1176,696,1168,1215,1054,1211,1159,1112,1040,1037,823,1187,821,891,824,990,951,1020,1204,1217,1179,894,1232,1110,1497,1422,1052,1271,1260,1227,1331,1236,1130,965,1124,774,749,983,937,1129,927,1111,1052,953,899,1043,1212,1349,1010,1278,989,1166,1237,1392,1207,1254,1256,815,1386,1409,1116,690,949,1350,977,1149,1002,930,908,941,980,874,1078,856,953,929,909,1171,1103,1188,800,1149,962,940,1076,941,1199,1247,581,1044,1134,1249,1300,1100,899,1250,1373,1169,1096,985,1261,674,889,1237,1302,1437,1128,899,933,1214,961,1058,1256,980,1237,704,1089,916,1027,1241,1059,783,586,607,1082,765,956,1110,1328,1084,1180,1100,1111,864,1014,960,1336,1199,1174,1225,1190,1370,1284,1488,1092,963,1199,907,1078,699,1289,1340,1295,1275,1122,1035,1233,1059,1167,1359,1370,1087,958,909,1003,807,927,1148,1444,1171,1380,1442,1318,1241,1218,1025,814,809,1071,808,1153,919,818,1032,953,1162,1090,1037,1018,770,772,1031,992,927,1098,1064,1110,1234,1316,1153,1166,672,762,1201,1142,1027,960,1110,1023,1051,978,922,917,860,1275,926,1095,999,969,1238,982,1152,949,1313,1155,1191,1073,1020,1004,1108,1192,1099,1167,1161,1082,1162,891,904,811,898,705,836,564,574,429,627,666,975,1359,1239,1410,1142,1243,1090,1185,1328,1319,1177,961,1190,984,1013,788,1015,803,791,684,566,528,494,929,912,1022,944,1043,1019,1001,1008,1226,1070,1017,1020,1047,1215,1231,1233,1147,1169,987,1238,1185,1406,1273,984,879,1249,1057,916,1134,1239,994,1089,986,969,1144,944,1064,1147,1331,1119,904,730,1249,1133,1243,1333,1108,1132,1213,1137,927,555,941,1092,894,822,622,882,968,1040,1258,1177,872,1441,966,925,1280,952,698,1281,1217,1008,850,944,929,981,990,940,1083,942,1514,1352,1138,1347,993,1260,995,1428,1271,904,1197,1097,1382,1204,960,1016,1233,1407,1067,865,864,1020,956,953,1059,1269,930,1118,1171,1237,1159,1081,993,1032,1134,1225,1071,1301,1159,1005,1041,1139,1267,1147,897,1243,1044,1288,1081,991,969,1145,1312,1256,1280,1300,1119,1147,1198,1311,1073,1123,1232,1122,1179,1111,752,537,877,869,1198,1266,1246,1261,1188,1198,1119,1263,1205,1133,1151,693,923,1168,1313,984,1298,1295,1160,1226,1183,807,1321,1256,1167,1189,1284,1061,978,1052,1045,1150,1241,1110,1271,1192,1275,1055,1331,1210,1432,1324,1432,1020,674,902,829,1306,1327,1306,1257,995,1223,831,1137,1317,1218,1065,1303,1264,1076,704,1141,1105,1189,1076,1207,1064,1391,1474,1383,1043,1094,843,1230,1391,1244,1229,1425,437,448,823,418,377,1190,927,1059,889,1241,1391,1351,1233,1050,1058,1368,1345,1306,1082,788,1289,1307,1160,1169,1362,1184,1235,1262,1181,1315,1243,1343,1159,1225,1106,805,1065,1149,1078,1209,1125,1148,1311,1124,1145,1145,1089,1252,1195,1418,1384,1354,1390,1397,1428,1487,1059,1295,839,984,547,1028,1271,1120,1084,895,1033,1285,1153,1311,1420,1343,1367,1329,1343,1451,1407,1365,1216,1320,1351,1332,1470,1235,1409,1364,1415,1302,1455,1206,1200,921,1126,1096,1403,1288,1359,1278,1443,1360,1408,1384,1357,1335,1448,1181,1202,1264,1517,1311,1414,1291,1429,1352,1322,1390,1299,1286,1389,1232,1366,1386,1373,1517,1420,1288,1401,1330,1406,1386,1341,1394,1319,1325,1323,1423,1026,1346,1354,1196,1292,1252,1267,1252,1351,1234,1360,1308,1027,1301,1424,1227,1443,1476,1349,1492,1386,1354,1243,1336,1065,1324,1311,1150,1413,1504,1267,1284,1271,1326,1171,1329,333,982,1335,719,501,567,1404,1443,1180,1392,1073,850,1305,983,1061,841,1003,1103,954,850,1034,1152,978,989,760,1111,936,848,1088,1178,1149,1144,1143,865,1079,645,601,1e3,887,991,869,748,1394,1125,1137,976,990,1386,1256,1325,1299,1172,1166,1359,1401,1462,1424,1370,1053,841,739,800,692,428,397,420,382,453,375,400,417,349,425,459,382,319,301,355,314,329,485,396,450,457,465,417,454,411,440,430,396,483,408,378,317,371,339,380,494,458,328,346,377,380,389,365,299,396,335,303,308,402,394,367,428,433,348,301,376,383,342,299,359,237,410,666,309,309,309,308,308,314,326,310,346,334,339,307,335,337,347,318,316,323,332,342,351,340,358,356,342,333,348,331,325,372,366,420,437,431,353,372,368,364,340,347,361,357,327,368,381,380,352,383,407,320,278,277,276,285,436,601,599,458,309,417,300,449,492,588,481,694,421,622,562,645,578,585,619,432,390,380,416,575,644,565,629,460,428,362,393,639],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module["LZ4"]==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module["LZ4"].loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_rdflib.data")}Module["addRunDependency"]("datafile_rdflib.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/bin/csv2rdf",start:0,end:961,audio:0},{filename:"/bin/rdfgraphisomorphism",start:961,end:1946,audio:0},{filename:"/bin/rdf2dot",start:1946,end:2907,audio:0},{filename:"/bin/rdfpipe",start:2907,end:3868,audio:0},{filename:"/bin/rdfs2dot",start:3868,end:4831,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/store.py",start:4831,end:17601,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/compat.py",start:17601,end:20588,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/query.py",start:20588,end:30801,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/paths.py",start:30801,end:47628,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/util.py",start:47628,end:61065,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/term.py",start:61065,end:122370,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/events.py",start:122370,end:125081,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/void.py",start:125081,end:129082,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/graph.py",start:129082,end:207370,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/resource.py",start:207370,end:222180,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/__init__.py",start:222180,end:226781,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/container.py",start:226781,end:234709,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/parser.py",start:234709,end:245099,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/collection.py",start:245099,end:254774,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugin.py",start:254774,end:265048,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/py.typed",start:265048,end:265114,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/serializer.py",start:265114,end:265923,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/exceptions.py",start:265923,end:268259,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/compare.py",start:268259,end:289756,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/tools/rdfpipe.py",start:289756,end:295187,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/tools/rdf2dot.py",start:295187,end:299372,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/tools/__init__.py",start:299372,end:299430,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/tools/graphisomorphism.py",start:299430,end:302816,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/tools/csv2rdf.py",start:302816,end:317720,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/tools/rdfs2dot.py",start:317720,end:321363,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/__init__.py",start:321363,end:321474,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/parsers/ntriples.py",start:321474,end:332029,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/parsers/trig.py",start:332029,end:336578,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/parsers/jsonld.py",start:336578,end:354131,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/parsers/notation3.py",start:354131,end:415977,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/parsers/__init__.py",start:415977,end:415986,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/parsers/RDFVOC.py",start:415986,end:416425,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/parsers/nquads.py",start:416425,end:420050,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/parsers/trix.py",start:420050,end:428631,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/parsers/rdfxml.py",start:428631,end:449899,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/sparql/update.py",start:449899,end:457700,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/sparql/sparql.py",start:457700,end:468702,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/sparql/algebra.py",start:468702,end:518700,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/sparql/__init__.py",start:518700,end:519627,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/sparql/processor.py",start:519627,end:521935,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/sparql/parserutils.py",start:521935,end:529982,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/sparql/parser.py",start:529982,end:581025,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/sparql/datatypes.py",start:581025,end:583140,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/sparql/aggregates.py",start:583140,end:590634,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/sparql/evalutils.py",start:590634,end:593608,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/sparql/evaluate.py",start:593608,end:609913,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/sparql/operators.py",start:609913,end:641878,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/sparql/results/xmlresults.py",start:641878,end:649645,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/sparql/results/csvresults.py",start:649645,end:652011,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/sparql/results/graph.py",start:652011,end:652331,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/sparql/results/__init__.py",start:652331,end:652389,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/sparql/results/rdfresults.py",start:652389,end:654073,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/sparql/results/tsvresults.py",start:654073,end:656922,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/sparql/results/jsonresults.py",start:656922,end:660565,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/sparql/results/txtresults.py",start:660565,end:662410,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/stores/concurrent.py",start:662410,end:665119,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/stores/memory.py",start:665119,end:686950,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/stores/sparqlconnector.py",start:686950,end:692799,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/stores/__init__.py",start:692799,end:692866,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/stores/regexmatching.py",start:692866,end:699280,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/stores/auditable.py",start:699280,end:705288,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/stores/berkeleydb.py",start:705288,end:727255,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/stores/sparqlstore.py",start:727255,end:759148,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/shared/__init__.py",start:759148,end:759148,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/shared/jsonld/util.py",start:759148,end:761618,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/shared/jsonld/__init__.py",start:761618,end:761618,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/shared/jsonld/keys.py",start:761618,end:762176,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/shared/jsonld/context.py",start:762176,end:778410,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/shared/jsonld/errors.py",start:778410,end:778790,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/serializers/n3.py",start:778790,end:782614,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/serializers/trig.py",start:782614,end:785681,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/serializers/jsonld.py",start:785681,end:798134,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/serializers/__init__.py",start:798134,end:798134,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/serializers/turtle.py",start:798134,end:811854,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/serializers/nt.py",start:811854,end:814404,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/serializers/nquads.py",start:814404,end:815888,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/serializers/trix.py",start:815888,end:819105,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/serializers/rdfxml.py",start:819105,end:831436,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/plugins/serializers/xmlwriter.py",start:831436,end:834801,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/namespace/_SKOS.py",start:834801,end:839436,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/namespace/_SOSA.py",start:839436,end:845697,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/namespace/_VANN.py",start:845697,end:846929,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/namespace/_SH.py",start:846929,end:869962,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/namespace/_FOAF.py",start:869962,end:876160,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/namespace/_CSVW.py",start:876160,end:889088,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/namespace/_DCAM.py",start:889088,end:889975,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/namespace/_DC.py",start:889975,end:891616,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/namespace/_RDFS.py",start:891616,end:893106,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/namespace/_PROV.py",start:893106,end:917172,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/namespace/__init__.py",start:917172,end:940511,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/namespace/_QB.py",start:940511,end:945892,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/namespace/_RDF.py",start:945892,end:948141,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/namespace/_DOAP.py",start:948141,end:952014,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/namespace/_DCAT.py",start:952014,end:957455,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/namespace/_OWL.py",start:957455,end:967807,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/namespace/_BRICK.py",start:967807,end:1091800,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/namespace/_VOID.py",start:1091800,end:1096440,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/namespace/_ODRL2.py",start:1096440,end:1118438,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/namespace/_DCMITYPE.py",start:1118438,end:1119775,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/namespace/_SSN.py",start:1119775,end:1122972,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/namespace/_DCTERMS.py",start:1122972,end:1132856,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/namespace/_ORG.py",start:1132856,end:1146063,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/namespace/_TIME.py",start:1146063,end:1158951,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/namespace/_SDO.py",start:1158951,end:1390638,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/namespace/_XSD.py",start:1390638,end:1396834,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/namespace/_PROF.py",start:1396834,end:1399641,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/extras/infixowl.py",start:1399641,end:1471391,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/extras/__init__.py",start:1471391,end:1471415,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/extras/describer.py",start:1471415,end:1480819,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/extras/external_graph_libs.py",start:1480819,end:1492679,audio:0},{filename:"/lib/python3.9/site-packages/rdflib/extras/cmdlineutils.py",start:1492679,end:1494506,audio:0},{filename:"/lib/python3.9/site-packages/rdflib-6.0.2-py3.9.egg-info/PKG-INFO",start:1494506,end:1503506,audio:0},{filename:"/lib/python3.9/site-packages/rdflib-6.0.2-py3.9.egg-info/SOURCES.txt",start:1503506,end:1818161,audio:0},{filename:"/lib/python3.9/site-packages/rdflib-6.0.2-py3.9.egg-info/entry_points.txt",start:1818161,end:1818383,audio:0},{filename:"/lib/python3.9/site-packages/rdflib-6.0.2-py3.9.egg-info/requires.txt",start:1818383,end:1818577,audio:0},{filename:"/lib/python3.9/site-packages/rdflib-6.0.2-py3.9.egg-info/top_level.txt",start:1818577,end:1818584,audio:0},{filename:"/lib/python3.9/site-packages/rdflib-6.0.2-py3.9.egg-info/dependency_links.txt",start:1818584,end:1818585,audio:0}],remote_package_size:887406,package_uuid:"e4babd89-825e-4530-bdf3-910ee6f795a4"})})();