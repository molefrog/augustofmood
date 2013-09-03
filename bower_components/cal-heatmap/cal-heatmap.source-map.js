{"version":3,"file":"cal-heatmap.min.js","sources":["cal-heatmap.js"],"names":["mergeRecursive","obj1","obj2","p","constructor","Object","e","CalHeatMap","_init","self","getDomain","options","start","map","d","getTime","_domains","set","getSubDomain","t","_domainType","subDomain","extractUnit","v","root","d3","select","itemSelector","append","attr","paintOnLoad","verticalDomainLabel","label","position","domainVerticalLabelHeight","Math","max","cellSize","domainHorizontalLabelWidth","width","domainMargin","paint","nextSelector","on","itemNamespace","event","preventDefault","loadNextDomain","previousSelector","loadPreviousDomain","displayLegend","graphDim","domainGutter","cellPadding","afterLoad","loadOnInit","domains","keys","sort","getDatas","data","Date","parseInt","length","pop","fill","onComplete","w","outer","column","h","height","row","this","allowedDataType","range","cellRadius","domain","weekStartOnMonday","minDate","maxDate","dataType","considerMissingDataAsZero","verticalOrientation","domainDynamicDimension","align","offset","x","y","rotate","legend","legendCellSize","legendCellPadding","legendMargin","legendVerticalPosition","legendHorizontalPosition","highlight","itemName","domainLabelFormat","subDomainTitleFormat","empty","filled","subDomainDateFormat","subDomainTextFormat","legendTitleFormat","lower","inner","upper","animationDuration","onClick","afterLoadNextDomain","afterLoadPreviousDomain","afterLoadData","onMaxDomainReached","onMinDomainReached","min","name","level","floor","getMinutes","format","date","connector","dt","getFullYear","getMonth","getDate","getHours","hour","getEndOfMonth","getWeekDay","day","getWeekNumber","week","weekDay","getDay","setDate","month","year","type","x_day","svg","_completed","NAVIGATE_LEFT","NAVIGATE_RIGHT","RESET_ALL_ON_UPDATE","RESET_SINGLE_ON_UPDATE","APPEND_ON_UPDATE","_maxDomainReached","_minDomainReached","domainPosition","DomainPosition","navigationDir","getDomainPosition","domainIndex","axis","domainDim","tmp","setPosition","enteringDomainDim","exitingDomainDim","getPositionFromIndex","shiftRightBy","getLast","shiftLeftBy","domainRotate","selection","s","domainSvg","selectAll","enter","classname","subDomainSvgGroup","rect","get","getHighlightClassName","positionSubDomainX","positionSubDomainY","call","text","formatDate","transition","duration","getPosition","tempWidth","tempHeight","exit","remove","htmlClass","value","count","formatNumber","init","settings","validateSelector","selector","Element","hasOwnProperty","substring","console","log","indexOf","Array","isArray","splice","k","i","push","prototype","triggerEvent","eventName","successArgs","skip","arguments","apply","itemNb","response","parent","shift","reached","f","time","nextDomainStartTimestamp","getNextDomain","maxDomainIsReached","minDomainIsReached","previousDomainStartTimestamp","getPreviousDomain","datetimestamp","insert","legendWidth","legendItem","delay","down","up","index","dateIsEqual","isNow","date_a","date_b","getDayOfYear","getWeekDomain","weekStart","endDate","stop","mondays","sundays","getYearDomain","years","getMinuteDomain","minutes","getHourDomain","hours","getDayDomain","days","getMonthDomain","setMonth","months","computeDaySubDomainSize","lastDayOfMonth","computeMinSubDomainSize","computeHourSubDomainSize","endOfMonth","computeWeekSubDomainSize","endWeekNb","startWeekNb","n","isNaN","total","source","startDate","callback","updateMode","_callback","parseDatas","json","parseURI","csv","tsv","forEach","key","element","array","domainKeys","subDomainStep","domainUnit","has","subDomainUnit","subDomainsData","str","replace","toISOString","next","previous","update","dataSource","getSVG","styles",".graph",".graph-rect","rect.highlight","rect.now","text.highlight","text.now",".domain-background",".graph-label",".subdomain-text",".qi","j","whitelistStyles","filterStyles","attribute","property","getElement","dom","window","cs","getComputedStyle","item","getPropertyValue","css","currentStyle","string","style","l","XMLSerializer","serializeToString","positions","dim","String","formatted","prop","regexp","RegExp","define","amd"],"mappings":"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"}