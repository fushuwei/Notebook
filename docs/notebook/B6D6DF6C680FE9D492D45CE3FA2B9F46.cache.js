var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.notebook;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.10.0";
var $strongName = 'B6D6DF6C680FE9D492D45CE3FA2B9F46';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = {4:1, 5:1}, $intern_1 = -2147483648, $intern_2 = {4:1, 16:1, 13:1, 9:1}, $intern_3 = {4:1, 5:1, 7:1}, $intern_4 = 65535, $intern_5 = {136:1}, $intern_6 = {169:1}, $intern_7 = 4194303, $intern_8 = 1048575, $intern_9 = 524288, $intern_10 = 4194304, $intern_11 = 17592186044416, $intern_12 = 1000000000, $intern_13 = -17592186044416, $intern_14 = {4:1, 82:1, 9:1}, $intern_15 = {12:1, 15:1}, $intern_16 = {91:1}, $intern_17 = {54:1, 92:1}, $intern_18 = {55:1, 4:1}, $intern_19 = 1073741824, $intern_20 = 4294967295, $intern_21 = {104:1, 4:1}, $intern_22 = {41:1, 102:1}, $intern_23 = {41:1, 18:1}, $intern_24 = {24:1}, $intern_25 = {4:1, 41:1, 18:1}, $intern_26 = {4:1, 41:1, 102:1}, $intern_27 = {4:1}, $intern_28 = 1000, $intern_29 = {4:1, 5:1, 249:1}, $intern_30 = {94:1}, $intern_31 = {15:1}, $intern_32 = {105:1}, $intern_33 = {12:1, 119:1, 15:1}, $intern_34 = {138:1, 89:1, 12:1, 15:1}, $intern_35 = {63:1}, $intern_36 = {4:1, 16:1, 13:1, 9:1, 99:1}, $intern_37 = {l:3355444, m:838860, h:996147};
var _, prototypesByTypeId_0, initFnList_0, permutationId = -1;
function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function typeMarkerFn(){
}

function toString_7(object){
  var number;
  if (Array.isArray(object) && object.typeMarker === typeMarkerFn) {
    return $getName(getClass__Ljava_lang_Class___devirtual$(object)) + '@' + (number = hashCode__I__devirtual$(object) >>> 0 , number.toString(16));
  }
  return object.toString();
}

function provide(namespace, optCtor){
  var cur = $wnd;
  if (namespace === '') {
    return cur;
  }
  var parts = namespace.split('.');
  !(parts[0] in cur) && cur.execScript && cur.execScript('var ' + parts[0]);
  if (optCtor) {
    var clazz = optCtor.prototype.___clazz;
    clazz.jsConstructor = optCtor;
  }
  for (var part; parts.length && (part = parts.shift());) {
    cur = cur[part] = cur[part] || !parts.length && optCtor || {};
  }
  return cur;
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function makeLambdaFunction(samMethod, ctor, ctorArguments){
  var lambda = function(){
    return samMethod.apply(lambda, arguments);
  }
  ;
  ctor.apply(lambda, ctorArguments);
  return lambda;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeIdOrPrototype, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0, superPrototype;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = prototype_0 instanceof Array?prototype_0[0]:null;
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = (superPrototype = superTypeIdOrPrototype && superTypeIdOrPrototype.prototype , !superPrototype && (superPrototype = prototypesByTypeId_0[superTypeIdOrPrototype]) , portableObjCreate(superPrototype));
    _.castableTypeMap = castableTypeMap;
    !superTypeIdOrPrototype && (_.typeMarker = typeMarkerFn);
    prototypesByTypeId[typeId] = _;
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz = clazz);
}

$wnd.goog = $wnd.goog || {};
$wnd.goog.global = $wnd.goog.global || $wnd;
prototypesByTypeId_0 = {};
function $equals(this$static, other){
  return maskUndefined(this$static) === maskUndefined(other);
}

function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return instanceOfString(this$static)?$equals_1(this$static, other):instanceOfDouble(this$static)?(checkCriticalNotNull(this$static) , maskUndefined(this$static) === maskUndefined(other)):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , maskUndefined(this$static) === maskUndefined(other)):hasJavaObjectVirtualDispatch(this$static)?this$static.equals_0(other):isJavaArray(this$static)?$equals(this$static, other):!!this$static && !!this$static.equals?this$static.equals(other):maskUndefined(this$static) === maskUndefined(other);
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return instanceOfString(this$static)?Ljava_lang_String_2_classLit:instanceOfDouble(this$static)?Ljava_lang_Double_2_classLit:instanceOfBoolean(this$static)?Ljava_lang_Boolean_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz:isJavaArray(this$static)?this$static.___clazz:this$static.___clazz || Array.isArray(this$static) && getClassLiteralForArray(Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, 1) || Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return instanceOfString(this$static)?$hashCode_1(this$static):instanceOfDouble(this$static)?$hashCode_0(this$static):instanceOfBoolean(this$static)?$hashCode(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode_1():isJavaArray(this$static)?getObjectIdentityHashCode(this$static):!!this$static && !!this$static.hashCode?this$static.hashCode():getObjectIdentityHashCode(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals_0 = function equals(other){
  return $equals(this, other);
}
;
_.getClass_0 = function getClass_0(){
  return this.___clazz;
}
;
_.hashCode_1 = function hashCode_0(){
  return getObjectIdentityHashCode(this);
}
;
_.toString_0 = function toString_1(){
  var number;
  return $getName(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + (number = hashCode__I__devirtual$(this) >>> 0 , number.toString(16));
}
;
_.equals = function(other){
  return this.equals_0(other);
}
;
_.hashCode = function(){
  return this.hashCode_1();
}
;
_.toString = function(){
  return this.toString_0();
}
;
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !supportsErrorStack();
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector_1 = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(error){
  $clinit_StackTraceCreator();
  collector_1.collect(error);
}

function dropInternalFrames(stackTrace){
  var dropFrameUntilFnName, dropFrameUntilFnName2, i, numberOfFramesToSearch;
  dropFrameUntilFnName = 'captureStackTrace';
  dropFrameUntilFnName2 = 'initializeBackingError';
  numberOfFramesToSearch = $wnd.Math.min(stackTrace.length, 5);
  for (i = numberOfFramesToSearch - 1; i >= 0; i--) {
    if ($equals_1(stackTrace[i].methodName, dropFrameUntilFnName) || $equals_1(stackTrace[i].methodName, dropFrameUntilFnName2)) {
      stackTrace.length >= i + 1 && stackTrace.splice(0, i + 1);
      break;
    }
  }
  return stackTrace;
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

function parseInt_0(number){
  $clinit_StackTraceCreator();
  return parseInt(number) || -1;
}

function split_1(t){
  $clinit_StackTraceCreator();
  var e = t.backingJsObject;
  if (e && e.stack) {
    var stack_0 = e.stack;
    var toString_0 = e + '\n';
    stack_0.substring(0, toString_0.length) == toString_0 && (stack_0 = stack_0.substring(toString_0.length));
    return stack_0.split('\n');
  }
  return [];
}

function supportsErrorStack(){
  if (Error.stackTraceLimit > 0) {
    $wnd.Error.stackTraceLimit = Error.stackTraceLimit = 64;
    return true;
  }
  return 'stack' in new Error;
}

var collector_1;
defineClass(812, 1, {});
function StackTraceCreator$CollectorLegacy(){
}

defineClass(267, 812, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(error){
  var seen = {}, name_1;
  var fnStack = [];
  error['fnStack'] = fnStack;
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
_.getStackTrace = function getStackTrace(t){
  var i, length_0, stack_0, stackTrace;
  stack_0 = ($clinit_StackTraceCreator() , t && t['fnStack']?t['fnStack']:[]);
  length_0 = stack_0.length;
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_0, 74, length_0, 0, 1);
  for (i = 0; i < length_0; i++) {
    stackTrace[i] = new StackTraceElement(stack_0[i], null, -1);
  }
  return stackTrace;
}
;
function $parse_1(this$static, stString){
  var closeParen, col, endFileUrlIndex, fileName, index_0, lastColonIndex, line, location_0, toReturn;
  location_0 = '';
  if (stString.length == 0) {
    return this$static.createSte('Unknown', 'anonymous', -1, -1);
  }
  toReturn = $trim(stString);
  $equals_1(toReturn.substr(0, 3), 'at ') && (toReturn = (checkCriticalStringElementIndex(3, toReturn.length + 1) , toReturn.substr(3)));
  toReturn = toReturn.replace(/\[.*?\]/g, '');
  index_0 = toReturn.indexOf('(');
  if (index_0 == -1) {
    index_0 = toReturn.indexOf('@');
    if (index_0 == -1) {
      location_0 = toReturn;
      toReturn = '';
    }
     else {
      location_0 = $trim((checkCriticalStringElementIndex(index_0 + 1, toReturn.length + 1) , toReturn.substr(index_0 + 1)));
      toReturn = $trim((checkCriticalStringBounds(0, index_0, toReturn.length) , toReturn.substr(0, index_0)));
    }
  }
   else {
    closeParen = toReturn.indexOf(')', index_0);
    location_0 = (checkCriticalStringBounds(index_0 + 1, closeParen, toReturn.length) , toReturn.substr(index_0 + 1, closeParen - (index_0 + 1)));
    toReturn = $trim((checkCriticalStringBounds(0, index_0, toReturn.length) , toReturn.substr(0, index_0)));
  }
  index_0 = $indexOf(toReturn, fromCodePoint(46));
  index_0 != -1 && (toReturn = (checkCriticalStringElementIndex(index_0 + 1, toReturn.length + 1) , toReturn.substr(index_0 + 1)));
  (toReturn.length == 0 || $equals_1(toReturn, 'Anonymous function')) && (toReturn = 'anonymous');
  lastColonIndex = $lastIndexOf(location_0, fromCodePoint(58));
  endFileUrlIndex = $lastIndexOf_0(location_0, fromCodePoint(58), lastColonIndex - 1);
  line = -1;
  col = -1;
  fileName = 'Unknown';
  if (lastColonIndex != -1 && endFileUrlIndex != -1) {
    fileName = (checkCriticalStringBounds(0, endFileUrlIndex, location_0.length) , location_0.substr(0, endFileUrlIndex));
    line = parseInt_0((checkCriticalStringBounds(endFileUrlIndex + 1, lastColonIndex, location_0.length) , location_0.substr(endFileUrlIndex + 1, lastColonIndex - (endFileUrlIndex + 1))));
    col = parseInt_0((checkCriticalStringElementIndex(lastColonIndex + 1, location_0.length + 1) , location_0.substr(lastColonIndex + 1)));
  }
  return this$static.createSte(fileName, toReturn, line, col);
}

defineClass(813, 812, {});
_.collect = function collect_0(error){
}
;
_.createSte = function createSte(fileName, method, line, col){
  return new StackTraceElement(method, fileName + '@' + col, line < 0?-1:line);
}
;
_.getStackTrace = function getStackTrace_0(t){
  var addIndex, i, length_0, stack_0, stackTrace, ste;
  stack_0 = split_1(t);
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_0, 74, 0, 0, 1);
  addIndex = 0;
  length_0 = stack_0.length;
  if (length_0 == 0) {
    return stackTrace;
  }
  ste = $parse_1(this, stack_0[0]);
  $equals_1(ste.methodName, 'anonymous') || (stackTrace[addIndex++] = ste);
  for (i = 1; i < length_0; i++) {
    stackTrace[addIndex++] = $parse_1(this, stack_0[i]);
  }
  return stackTrace;
}
;
function StackTraceCreator$CollectorModernNoSourceMap(){
}

defineClass(268, 813, {}, StackTraceCreator$CollectorModernNoSourceMap);
_.createSte = function createSte_0(fileName, method, line, col){
  return new StackTraceElement(method, fileName, -1);
}
;
function canSet(array, value_0){
  var elementTypeCategory;
  switch (getElementTypeCategory(array)) {
    case 6:
      return instanceOfString(value_0);
    case 7:
      return instanceOfDouble(value_0);
    case 8:
      return instanceOfBoolean(value_0);
    case 3:
      return Array.isArray(value_0) && (elementTypeCategory = getElementTypeCategory(value_0) , !(elementTypeCategory >= 14 && elementTypeCategory <= 16));
    case 11:
      return value_0 != null && typeof value_0 === 'function';
    case 12:
      return value_0 != null && (typeof value_0 === 'object' || typeof value_0 == 'function');
    case 0:
      return canCast(value_0, array.__elementTypeId$);
    case 2:
      return isJsObjectOrFunction(value_0) && !(value_0.typeMarker === typeMarkerFn);
    case 1:
      return isJsObjectOrFunction(value_0) && !(value_0.typeMarker === typeMarkerFn) || canCast(value_0, array.__elementTypeId$);
    default:return true;
  }
}

function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function getElementTypeCategory(array){
  return array.__elementTypeCategory$ == null?10:array.__elementTypeCategory$;
}

function initUnidimensionalArray(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  elementTypeCategory != 10 && stampJavaTypeInfo(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 14:
    case 15:
      initValue = 0;
      break;
    case 16:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function isJavaArray(src_0){
  return Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function newArray(size_0){
  return new Array(size_0);
}

function setCheck(array, index_0, value_0){
  checkCriticalArrayType(value_0 == null || canSet(array, value_0));
  return array[index_0] = value_0;
}

function stampJavaTypeInfo(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz = arrayClass;
  array.castableTypeMap = castableTypeMap;
  array.typeMarker = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function stampJavaTypeInfo_0(array, referenceType){
  getElementTypeCategory(referenceType) != 10 && stampJavaTypeInfo(getClass__Ljava_lang_Class___devirtual$(referenceType), referenceType.castableTypeMap, referenceType.__elementTypeId$, getElementTypeCategory(referenceType), array);
  return array;
}

function canCast(src_0, dstId){
  if (instanceOfString(src_0)) {
    return !!stringCastMap[dstId];
  }
   else if (src_0.castableTypeMap) {
    return !!src_0.castableTypeMap[dstId];
  }
   else if (instanceOfDouble(src_0)) {
    return !!doubleCastMap[dstId];
  }
   else if (instanceOfBoolean(src_0)) {
    return !!booleanCastMap[dstId];
  }
  return false;
}

function castTo(src_0, dstId){
  checkCriticalType(src_0 == null || canCast(src_0, dstId));
  return src_0;
}

function castToArray(src_0){
  var elementTypeCategory;
  checkCriticalType(src_0 == null || Array.isArray(src_0) && (elementTypeCategory = getElementTypeCategory(src_0) , !(elementTypeCategory >= 14 && elementTypeCategory <= 16)));
  return src_0;
}

function castToBoolean(src_0){
  checkCriticalType(src_0 == null || instanceOfBoolean(src_0));
  return src_0;
}

function castToJsArray(src_0){
  checkCriticalType(src_0 == null || Array.isArray(src_0));
  return src_0;
}

function castToJso(src_0){
  checkCriticalType(src_0 == null || isJsObjectOrFunction(src_0) && !(src_0.typeMarker === typeMarkerFn));
  return src_0;
}

function castToNative(src_0, jsType){
  checkCriticalType(src_0 == null || jsinstanceOf(src_0, jsType));
  return src_0;
}

function castToString(src_0){
  checkCriticalType(src_0 == null || instanceOfString(src_0));
  return src_0;
}

function hasJavaObjectVirtualDispatch(src_0){
  return !Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfBoolean(src_0){
  return typeof src_0 === 'boolean';
}

function instanceOfDouble(src_0){
  return typeof src_0 === 'number';
}

function instanceOfJso(src_0){
  return src_0 != null && isJsObjectOrFunction(src_0) && !(src_0.typeMarker === typeMarkerFn);
}

function instanceOfNative(src_0, jsType){
  return jsinstanceOf(src_0, jsType);
}

function instanceOfString(src_0){
  return typeof src_0 === 'string';
}

function isJsObjectOrFunction(src_0){
  return typeof src_0 === 'object' || typeof src_0 === 'function';
}

function jsinstanceOf(obj, jsType){
  return obj && jsType && obj instanceof jsType;
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function round_int(x_0){
  return Math.max(Math.min(x_0, 2147483647), -2147483648) | 0;
}

function throwClassCastExceptionUnlessNull(o){
  checkCriticalType(o == null);
  return o;
}

var booleanCastMap, doubleCastMap, stringCastMap;
function toJava(e){
  var javaException;
  if (instanceOf(e, 9)) {
    return e;
  }
  javaException = e && e.__java$exception;
  if (!javaException) {
    javaException = new JavaScriptException(e);
    captureStackTrace(javaException);
  }
  return javaException;
}

function toJs(t){
  return t.backingJsObject;
}

function $isInstance(instance){
  var type_0;
  if (instance == null) {
    return false;
  }
  type_0 = typeof(instance);
  return $equals_1(type_0, 'boolean') || $equals_1(type_0, 'number') || $equals_1(type_0, 'string') || instance.$implements__java_io_Serializable || Array.isArray(instance);
}

function $isInstance_3(instance){
  var type_0;
  type_0 = typeof(instance);
  if ($equals_1(type_0, 'boolean') || $equals_1(type_0, 'number') || $equals_1(type_0, 'string')) {
    return true;
  }
  return instance != null && instance.$implements__java_lang_Comparable;
}

function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
}

function $booleanValue(this$static){
  return checkCriticalNotNull(this$static) , this$static;
}

function $hashCode(this$static){
  return (checkCriticalNotNull(this$static) , this$static)?1231:1237;
}

function $isInstance_0(instance){
  $clinit_Boolean();
  return $equals_1('boolean', typeof(instance));
}

booleanCastMap = {4:1, 264:1, 34:1};
function $isInstance_1(instance){
  if ($equals_1(typeof(instance), 'string')) {
    return true;
  }
  return instance != null && instance.$implements__java_lang_CharSequence;
}

function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getCanonicalName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.canonicalName;
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function Class(){
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  return clazz;
}

function createForInterface(packageName, compoundClassName){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  clazz.modifiers = 2;
  return clazz;
}

function createForPrimitive(className, primitiveTypeId){
  var clazz;
  clazz = createClassObject('', className);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  return prototypesByTypeId_0[typeId];
}

function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_0()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz = clazz;
}

defineClass(200, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  return $getCanonicalName(this);
}
;
_.getName = function getName(){
  return $getName(this);
}
;
_.getSimpleName = function getSimpleName(){
  $ensureNamesAreInitialized(this);
  return this.simpleName;
}
;
_.isArray_0 = function isArray(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString_0 = function toString_9(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
function $isInstance_4(instance){
  return $equals_1('number', typeof(instance)) || instanceOfNative(instance, $wnd.java.lang.Number$impl);
}

function __parseAndValidateDouble(s){
  floatRegex == null && (floatRegex = new RegExp('^\\s*[+-]?(NaN|Infinity|((\\d+\\.?\\d*)|(\\.\\d+))([eE][+-]?\\d+)?[dDfF]?)\\s*$'));
  if (!floatRegex.test(s)) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
  return parseFloat(s);
}

function __parseAndValidateInt(s){
  var i, isTooLow, length_0, startIndex, toReturn;
  if (s == null) {
    throw toJs(new NumberFormatException('null'));
  }
  length_0 = s.length;
  startIndex = length_0 > 0 && (checkCriticalStringElementIndex(0, s.length) , s.charCodeAt(0) == 45 || (checkCriticalStringElementIndex(0, s.length) , s.charCodeAt(0) == 43))?1:0;
  for (i = startIndex; i < length_0; i++) {
    if (digit((checkCriticalStringElementIndex(i, s.length) , s.charCodeAt(i))) == -1) {
      throw toJs(new NumberFormatException('For input string: "' + s + '"'));
    }
  }
  toReturn = parseInt(s, 10);
  isTooLow = toReturn < $intern_1;
  if (isNaN(toReturn)) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
   else if (isTooLow || toReturn > 2147483647) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
  return toReturn;
}

defineClass(139, 1, {4:1, 139:1});
var floatRegex;
function $doubleValue(this$static){
  return checkCriticalNotNull(this$static) , this$static;
}

function $hashCode_0(this$static){
  return round_int((checkCriticalNotNull(this$static) , this$static));
}

function $intValue(this$static){
  return round_int((checkCriticalNotNull(this$static) , this$static));
}

function $isInstance_5(instance){
  return $equals_1('number', typeof(instance));
}

doubleCastMap = {4:1, 34:1, 139:1};
function $$init(this$static){
  this$static.stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_0, 74, 0, 0, 1);
}

function $addSuppressed(this$static, exception){
  checkCriticalNotNull_0(exception, 'Cannot suppress a null exception.');
  checkCriticalArgument(exception != this$static);
  if (this$static.disableSuppression) {
    return;
  }
  this$static.suppressedExceptions == null?(this$static.suppressedExceptions = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Throwable_2_classLit, 1), $intern_0, 9, 0, [exception])):(this$static.suppressedExceptions[this$static.suppressedExceptions.length] = exception);
}

function $fillInStackTrace(this$static){
  if (this$static.writableStackTrace) {
    this$static.backingJsObject !== '__noinit__' && this$static.initializeBackingError();
    this$static.stackTrace = null;
  }
  return this$static;
}

function $linkBack(this$static, error){
  if (error instanceof Object) {
    try {
      error.__java$exception = this$static;
      if (navigator.userAgent.toLowerCase().indexOf('msie') != -1 && $doc.documentMode < 9) {
        return;
      }
      var throwable = this$static;
      Object.defineProperties(error, {cause:{get:function(){
        var cause = throwable.getCause();
        return cause && cause.getBackingJsObject();
      }
      }, suppressed:{get:function(){
        return throwable.getBackingSuppressed();
      }
      }});
    }
     catch (ignored) {
    }
  }
}

function $printStackTraceImpl(this$static, out, ident){
  var t, t$array, t$index, t$max, theCause;
  String.fromCharCode(10);
  $printStackTraceItems(this$static);
  for (t$array = (this$static.suppressedExceptions == null && (this$static.suppressedExceptions = initUnidimensionalArray(Ljava_lang_Throwable_2_classLit, $intern_0, 9, 0, 0, 1)) , this$static.suppressedExceptions) , t$index = 0 , t$max = t$array.length; t$index < t$max; ++t$index) {
    t = t$array[t$index];
    $printStackTraceImpl(t, out, '\t' + ident);
  }
  theCause = this$static.cause_0;
  !!theCause && $printStackTraceImpl(theCause, out, ident);
}

function $printStackTraceItems(this$static){
  var element$array, element$index, element$max, stackTrace;
  for (element$array = (this$static.stackTrace == null && (this$static.stackTrace = ($clinit_StackTraceCreator() , stackTrace = collector_1.getStackTrace(this$static) , dropInternalFrames(stackTrace))) , this$static.stackTrace) , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index) {
    String.fromCharCode(10);
  }
}

function $setBackingJsObject(this$static, backingJsObject){
  this$static.backingJsObject = backingJsObject;
  $linkBack(this$static, backingJsObject);
}

function $toString(this$static, message){
  var className;
  className = $getName(this$static.___clazz);
  return message == null?className:className + ': ' + message;
}

function Throwable(){
  $$init(this);
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function Throwable_0(message, cause){
  $$init(this);
  this.cause_0 = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function fixIE(e){
  if (!('stack' in e)) {
    try {
      throw e;
    }
     catch (ignored) {
    }
  }
  return e;
}

function of(e){
  var throwable;
  if (e != null) {
    throwable = e.__java$exception;
    if (throwable) {
      return throwable;
    }
  }
  return instanceOfNative(e, TypeError)?new NullPointerException_0(e):new JsException(e);
}

defineClass(9, 1, {4:1, 9:1});
_.createError = function createError(msg){
  return new Error(msg);
}
;
_.getBackingJsObject = function getBackingJsObject(){
  return this.backingJsObject;
}
;
_.getBackingSuppressed = function getBackingSuppressed(){
  var i, result, suppressed;
  suppressed = (this.suppressedExceptions == null && (this.suppressedExceptions = initUnidimensionalArray(Ljava_lang_Throwable_2_classLit, $intern_0, 9, 0, 0, 1)) , this.suppressedExceptions);
  result = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_0, 1, suppressed.length, 5, 1);
  for (i = 0; i < suppressed.length; i++) {
    result[i] = suppressed[i].backingJsObject;
  }
  return result;
}
;
_.getCause = function getCause(){
  return this.cause_0;
}
;
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.initializeBackingError = function initializeBackingError(){
  $setBackingJsObject(this, fixIE(this.createError($toString(this, this.detailMessage))));
  captureStackTrace(this);
}
;
_.toString_0 = function toString_4(){
  return $toString(this, this.getMessage());
}
;
_.backingJsObject = '__noinit__';
_.disableSuppression = false;
_.writableStackTrace = true;
function Exception(message){
  $$init(this);
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(16, 9, {4:1, 16:1, 9:1});
function RuntimeException(){
  Throwable.call(this);
}

function RuntimeException_0(message){
  Exception.call(this, message);
}

function RuntimeException_1(message, cause){
  Throwable_0.call(this, message, cause);
}

defineClass(13, 16, $intern_2);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(77, 13, $intern_2, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
function JsException(backingJsObject){
  $$init(this);
  $fillInStackTrace(this);
  this.backingJsObject = backingJsObject;
  $linkBack(this, backingJsObject);
  this.detailMessage = backingJsObject == null?'null':toString_7(backingJsObject);
}

defineClass(120, 13, $intern_2, JsException);
function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(typeError){
  JsException.call(this, typeError);
}

function NullPointerException_1(message){
  RuntimeException_0.call(this, message);
}

defineClass(67, 120, $intern_2, NullPointerException, NullPointerException_0, NullPointerException_1);
_.createError = function createError_0(msg){
  return new TypeError(msg);
}
;
function $charAt(this$static, index_0){
  checkCriticalStringElementIndex(index_0, this$static.length);
  return this$static.charCodeAt(index_0);
}

function $endsWith(this$static){
  var suffixlength;
  suffixlength = '/'.length;
  return $equals_1(this$static.substr(this$static.length - suffixlength, suffixlength), '/');
}

function $equals_1(this$static, other){
  return checkCriticalNotNull(this$static) , maskUndefined(this$static) === maskUndefined(other);
}

function $equalsIgnoreCase(this$static, other){
  checkCriticalNotNull(this$static);
  if (other == null) {
    return false;
  }
  if ($equals_1(this$static, other)) {
    return true;
  }
  return this$static.length == other.length && $equals_1(this$static.toLowerCase(), other.toLowerCase());
}

function $getChars0(srcBegin, srcEnd, dst, dstBegin){
  while (srcBegin < srcEnd) {
    dst[dstBegin++] = $charAt(")]}'\n", srcBegin++);
  }
}

function $hashCode_1(this$static){
  var h, i;
  h = 0;
  for (i = 0; i < this$static.length; i++) {
    h = (h << 5) - h + (checkCriticalStringElementIndex(i, this$static.length) , this$static.charCodeAt(i)) | 0;
  }
  return h;
}

function $indexOf(this$static, str){
  return this$static.indexOf(str);
}

function $isInstance_6(instance){
  return $equals_1('string', typeof(instance));
}

function $lastIndexOf(this$static, str){
  return this$static.lastIndexOf(str);
}

function $lastIndexOf_0(this$static, str, start_0){
  return this$static.lastIndexOf(str, start_0);
}

function $replace(this$static, from, to){
  var regex, replacement;
  regex = $replaceAll((checkCriticalNotNull(from) , from), '([/\\\\\\.\\*\\+\\?\\|\\(\\)\\[\\]\\{\\}$^])', '\\\\$1');
  replacement = $replaceAll($replaceAll(to, '\\\\', '\\\\\\\\'), '\\$', '\\\\$');
  return $replaceAll(this$static, regex, replacement);
}

function $replaceAll(this$static, regex, replace){
  replace = translateReplaceString(replace);
  return this$static.replace(new RegExp(regex, 'g'), replace);
}

function $split_0(this$static, regex, maxMatch){
  var compiled, count, lastNonEmpty, lastTrail, matchIndex, matchObj, out, trail;
  compiled = new RegExp(regex, 'g');
  out = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 6, 1);
  count = 0;
  trail = this$static;
  lastTrail = null;
  while (true) {
    matchObj = compiled.exec(trail);
    if (matchObj == null || trail == '' || count == maxMatch - 1 && maxMatch > 0) {
      out[count] = trail;
      break;
    }
     else {
      matchIndex = matchObj.index;
      out[count] = (checkCriticalStringBounds(0, matchIndex, trail.length) , trail.substr(0, matchIndex));
      trail = $substring_0(trail, matchIndex + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = (checkCriticalStringBounds(0, 1, trail.length) , trail.substr(0, 1));
        trail = (checkCriticalStringElementIndex(1, trail.length + 1) , trail.substr(1));
      }
      lastTrail = trail;
      ++count;
    }
  }
  if (maxMatch == 0 && this$static.length > 0) {
    lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && (out.length = lastNonEmpty);
  }
  return out;
}

function $startsWith(this$static, prefix){
  return $equals_1(this$static.substr(0, prefix.length), prefix);
}

function $substring(this$static, beginIndex){
  checkCriticalStringElementIndex(beginIndex, this$static.length + 1);
  return this$static.substr(beginIndex);
}

function $substring_0(this$static, beginIndex, endIndex){
  checkCriticalStringBounds(beginIndex, endIndex, this$static.length);
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function $toString_0(this$static){
  return checkCriticalNotNull(this$static) , this$static;
}

function $trim(this$static){
  var end, length_0, start_0;
  length_0 = this$static.length;
  start_0 = 0;
  while (start_0 < length_0 && (checkCriticalStringElementIndex(start_0, this$static.length) , this$static.charCodeAt(start_0) <= 32)) {
    ++start_0;
  }
  end = length_0;
  while (end > start_0 && (checkCriticalStringElementIndex(end - 1, this$static.length) , this$static.charCodeAt(end - 1) <= 32)) {
    --end;
  }
  return start_0 > 0 || end < length_0?(checkCriticalStringBounds(start_0, end, this$static.length) , this$static.substr(start_0, end - start_0)):this$static;
}

function fromCharCode(array){
  return String.fromCharCode.apply(null, array);
}

function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= 65536) {
    hiSurrogate = 55296 + (codePoint - 65536 >> 10 & 1023) & $intern_4;
    loSurrogate = 56320 + (codePoint - 65536 & 1023) & $intern_4;
    return String.fromCharCode(hiSurrogate) + ('' + String.fromCharCode(loSurrogate));
  }
   else {
    return String.fromCharCode(codePoint & $intern_4);
  }
}

function join_1(elements){
  var e, e$iterator, joiner;
  joiner = new StringJoiner('/');
  for (e$iterator = elements.iterator(); e$iterator.hasNext_0();) {
    e = castTo(e$iterator.next_1(), 170);
    !joiner.builder?(joiner.builder = new StringBuilder_1(joiner.prefix)):$append_4(joiner.builder, joiner.delimiter);
    $append_3(joiner.builder, e);
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}

function join_2(elements){
  var e, e$array, e$index, e$max, joiner;
  joiner = new StringJoiner(', ');
  for (e$array = elements , e$index = 0 , e$max = e$array.length; e$index < e$max; ++e$index) {
    e = e$array[e$index];
    !joiner.builder?(joiner.builder = new StringBuilder_1(joiner.prefix)):$append_4(joiner.builder, joiner.delimiter);
    $append_3(joiner.builder, e);
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}

function translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = replaceStr.indexOf('\\', pos))) {
    checkCriticalStringElementIndex(pos + 1, replaceStr.length);
    replaceStr.charCodeAt(pos + 1) == 36?(replaceStr = (checkCriticalStringBounds(0, pos, replaceStr.length) , replaceStr.substr(0, pos) + '$' + $substring(replaceStr, ++pos))):(replaceStr = (checkCriticalStringBounds(0, pos, replaceStr.length) , replaceStr.substr(0, pos) + ('' + $substring(replaceStr, ++pos))));
  }
  return replaceStr;
}

function valueOf_0(x_0){
  return x_0 == null?'null':toString_7(x_0);
}

function valueOf_1(x_0){
  return valueOf_2(x_0, 0, x_0.length);
}

function valueOf_2(x_0, offset, count){
  var batchEnd, batchStart, end, s;
  end = offset + count;
  checkCriticalStringBounds(offset, end, x_0.length);
  s = '';
  for (batchStart = offset; batchStart < end;) {
    batchEnd = $wnd.Math.min(batchStart + 10000, end);
    s += fromCharCode(x_0.slice(batchStart, batchEnd));
    batchStart = batchEnd;
  }
  return s;
}

stringCastMap = {4:1, 170:1, 34:1, 2:1};
function StringIndexOutOfBoundsException(message){
  IndexOutOfBoundsException_0.call(this, message);
}

defineClass(203, 77, $intern_2, StringIndexOutOfBoundsException);
function clone(array){
  var result;
  result = array.slice();
  return stampJavaTypeInfo_0(result, array);
}

function copy(src_0, srcOfs, dest, destOfs, len, overwrite){
  var batchEnd, batchStart, destArray, end, spliceArgs;
  if (len == 0) {
    return;
  }
  if (src_0 === dest) {
    src_0 = src_0.slice(srcOfs, srcOfs + len);
    srcOfs = 0;
  }
  destArray = dest;
  for (batchStart = srcOfs , end = srcOfs + len; batchStart < end;) {
    batchEnd = $wnd.Math.min(batchStart + 10000, end);
    len = batchEnd - batchStart;
    spliceArgs = src_0.slice(batchStart, batchEnd);
    spliceArgs.splice(0, 0, destOfs, overwrite?len:0);
    Array.prototype.splice.apply(destArray, spliceArgs);
    batchStart = batchEnd;
    destOfs += len;
  }
}

function insertTo(array, index_0, value_0){
  array.splice(index_0, 0, value_0);
}

function insertTo_0(array, index_0, values){
  copy(values, 0, array, index_0, values.length, false);
}

function push_1(array, o){
  array.push(o);
}

function removeFrom(array, index_0, deleteCount){
  array.splice(index_0, deleteCount);
}

defineClass(1514, 1, {});
function HashCodes(){
}

function getIdentityHashCode(o){
  switch (typeof(o)) {
    case 'string':
      return $hashCode_1(o);
    case 'number':
      return $hashCode_0(o);
    case 'boolean':
      return $hashCode(o);
    default:return o == null?0:getObjectIdentityHashCode(o);
  }
}

function getNextHash(){
  return ++nextHash;
}

function getObjectIdentityHashCode(o){
  return o.$H || (o.$H = ++nextHash);
}

defineClass(809, 1, {}, HashCodes);
var nextHash = 0;
function checkCriticalArgument(expression){
  if (!expression) {
    throw toJs(new IllegalArgumentException('Exception can not suppress itself.'));
  }
}

function checkCriticalArrayType(expression){
  if (!expression) {
    throw toJs(new ArrayStoreException);
  }
}

function checkCriticalArrayType_0(expression, errorMessage){
  if (!expression) {
    throw toJs(new ArrayStoreException_0(errorMessage));
  }
}

function checkCriticalConcurrentModification(currentModCount, recordedModCount){
  if (currentModCount != recordedModCount) {
    throw toJs(new ConcurrentModificationException);
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw toJs(new NoSuchElementException);
  }
}

function checkCriticalElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalNotNull(reference){
  if (reference == null) {
    throw toJs(new NullPointerException);
  }
  return reference;
}

function checkCriticalNotNull_0(reference, errorMessage){
  if (reference == null) {
    throw toJs(new NullPointerException_1(errorMessage));
  }
}

function checkCriticalPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalPositionIndexes(start_0, end, size_0){
  if (start_0 < 0 || end > size_0) {
    throw toJs(new IndexOutOfBoundsException_0('fromIndex: ' + start_0 + ', toIndex: ' + end + ', size: ' + size_0));
  }
  if (start_0 > end) {
    throw toJs(new IllegalArgumentException('fromIndex: ' + start_0 + ' > toIndex: ' + end));
  }
}

function checkCriticalState(expression){
  if (!expression) {
    throw toJs(new IllegalStateException);
  }
}

function checkCriticalStringBounds(start_0, end, length_0){
  if (start_0 < 0 || end > length_0 || end < start_0) {
    throw toJs(new StringIndexOutOfBoundsException('fromIndex: ' + start_0 + ', toIndex: ' + end + ', length: ' + length_0));
  }
}

function checkCriticalStringElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new StringIndexOutOfBoundsException('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalType(expression){
  if (!expression) {
    throw toJs(new ClassCastException);
  }
}

function toDoubleFromUnsignedInt(value_0){
  return value_0 >>> 0;
}

defineClass(810, 1, {});
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1);
var Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 812);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 267);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 813);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 268);
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 264);
var Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 200);
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 139);
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 808);
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 9);
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 16);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 13);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 77);
var Ljava_lang_JsException_2_classLit = createForClass('java.lang', 'JsException', 120);
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 67);
var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
var Ljava_lang_StringIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'StringIndexOutOfBoundsException', 203);
var Ljavaemul_internal_HashCodes_2_classLit = createForClass('javaemul.internal', 'HashCodes', 809);
var Ljavaemul_internal_JsUtils_2_classLit = createForClass('javaemul.internal', 'JsUtils', 810);
function match_1(route, withRoute){
  return $match_1((!instance_1 && (instance_1 = new RouterUtils) , route), withRoute);
}

defineClass(823, 1, {});
_.toString_0 = function toString_2(){
  return 'An event type';
}
;
var Lorg_gwtproject_event_shared_Event_2_classLit = createForClass('org.gwtproject.event.shared', 'Event', 823);
function $clinit_LogEvent(){
  $clinit_LogEvent = emptyMethod;
  TYPE = new Event$Type;
}

function $addMessage(this$static, message){
  $add_0(this$static.messages, message);
  return this$static;
}

function $dispatch(this$static, handler){
  $onLog(handler.$$outer_0, this$static);
}

function $sdmOnly(this$static, sdmOnly){
  this$static.sdmOnly = sdmOnly;
  return this$static;
}

function LogEvent(){
  $clinit_LogEvent();
  this.messages = new ArrayList;
  this.sdmOnly = true;
}

defineClass(40, 823, {}, LogEvent);
_.dispatch = function dispatch(handler){
  $dispatch(this, castTo(handler, 842));
}
;
_.getAssociatedType = function getAssociatedType(){
  return TYPE;
}
;
_.sdmOnly = false;
var TYPE;
var Lcom_github_nalukit_nalu_client_application_event_LogEvent_2_classLit = createForClass('com.github.nalukit.nalu.client.application.event', 'LogEvent', 40);
defineClass(830, 1, {});
var Lcom_github_nalukit_nalu_client_component_AbstractCommonComponent_2_classLit = createForClass('com.github.nalukit.nalu.client.component', 'AbstractCommonComponent', 830);
function $initElement(this$static, element){
  this$static.element = element;
}

function $removeHandlers(this$static){
  $removeHandler(this$static.handlerRegistrations);
  this$static.handlerRegistrations = new HandlerRegistrations;
}

function AbstractComponent(){
  this.handlerRegistrations = new HandlerRegistrations;
}

defineClass(112, 830, {});
var Lcom_github_nalukit_nalu_client_component_AbstractComponent_2_classLit = createForClass('com.github.nalukit.nalu.client.component', 'AbstractComponent', 112);
function $setContext(this$static, context){
  this$static.context = context;
}

function $setEventBus(this$static, eventBus){
  this$static.eventBus = eventBus;
}

function $setRouter(this$static, router){
  this$static.router = router;
}

defineClass(829, 1, {});
var Lcom_github_nalukit_nalu_client_component_AbstractController_2_classLit = createForClass('com.github.nalukit.nalu.client.component', 'AbstractController', 829);
function $bind(loader){
  lambda$0(loader.controllerCreator_0, loader.controllerInstance_1, loader.callback_2);
}

function $setActivateNaluCommand(this$static, activateNaluCommand){
  this$static.activateNaluCommand = activateNaluCommand;
}

function $unbind(continueUnloadCommand){
  $handleUnbindCallBack(continueUnloadCommand.$$outer_0, continueUnloadCommand.hash_1, continueUnloadCommand.routeResult_2, continueUnloadCommand.routeConfigurations_3);
}

defineClass(61, 829, {61:1});
_.activate = function activate(){
}
;
_.start_0 = function start_1(){
}
;
_.cached = false;
var Lcom_github_nalukit_nalu_client_component_AbstractComponentController_2_classLit = createForClass('com.github.nalukit.nalu.client.component', 'AbstractComponentController', 61);
function AbstractCompositeComponent(){
  AbstractComponent.call(this);
}

defineClass(229, 112, {});
var Lcom_github_nalukit_nalu_client_component_AbstractCompositeComponent_2_classLit = createForClass('com.github.nalukit.nalu.client.component', 'AbstractCompositeComponent', 229);
function $setActivateNaluCommand_0(this$static, activateNaluCommand){
  this$static.activateNaluCommand = activateNaluCommand;
}

defineClass(39, 829, {39:1});
_.cached = false;
_.cachedGlobal = false;
var Lcom_github_nalukit_nalu_client_component_AbstractCompositeController_2_classLit = createForClass('com.github.nalukit.nalu.client.component', 'AbstractCompositeController', 39);
function $bind_0(loader){
  lambda$0_0(loader.shellCreator_0, loader.callback_1, loader.shellInstance_2);
}

function $setContext_0(this$static, context){
  this$static.context = context;
}

function AbstractShell(){
  new HandlerRegistrations;
  this.compositeControllers = new HashMap;
}

defineClass(155, 1, {});
var Lcom_github_nalukit_nalu_client_component_AbstractShell_2_classLit = createForClass('com.github.nalukit.nalu.client.component', 'AbstractShell', 155);
function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal_0 = ordinal;
}

defineClass(21, 1, {4:1, 34:1, 21:1});
_.compareTo = function compareTo(other){
  return this.ordinal_0 - other.ordinal_0;
}
;
_.equals = function equals_0(other){
  return this === other;
}
;
_.equals_0 = function(other){
  return this.equals(other);
}
;
_.hashCode = function hashCode_1(){
  return getObjectIdentityHashCode(this);
}
;
_.hashCode_1 = function(){
  return this.hashCode();
}
;
_.name = function name_2(){
  return this.name_0 != null?this.name_0:'' + this.ordinal_0;
}
;
_.ordinal = function ordinal_0(){
  return this.ordinal_0;
}
;
_.toString = function toString_3(){
  return this.name_0 != null?this.name_0:'' + this.ordinal_0;
}
;
_.toString_0 = function(){
  return this.toString();
}
;
_.ordinal_0 = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 21);
function $clinit_IsController$Mode(){
  $clinit_IsController$Mode = emptyMethod;
  CREATE = new IsController$Mode('CREATE', 0);
  REUSE = new IsController$Mode('REUSE', 1);
}

function IsController$Mode(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_0(){
  $clinit_IsController$Mode();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_github_nalukit_nalu_client_component_IsController$Mode_2_classLit, 1), $intern_0, 143, 0, [CREATE, REUSE]);
}

defineClass(143, 21, {143:1, 4:1, 34:1, 21:1}, IsController$Mode);
var CREATE, REUSE;
var Lcom_github_nalukit_nalu_client_component_IsController$Mode_2_classLit = createForEnum('com.github.nalukit.nalu.client.component', 'IsController/Mode', 143, values_0);
function $clinit_HideBlockComponentEvent(){
  $clinit_HideBlockComponentEvent = emptyMethod;
  TYPE_0 = new Event$Type;
}

function HideBlockComponentEvent(){
  $clinit_HideBlockComponentEvent();
  new HashMap;
  new HashMap;
  new HashMap;
}

defineClass(509, 823, {}, HideBlockComponentEvent);
_.dispatch = function dispatch_0(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.$_nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_0(){
  return TYPE_0;
}
;
var TYPE_0;
var Lcom_github_nalukit_nalu_client_component_event_HideBlockComponentEvent_2_classLit = createForClass('com.github.nalukit.nalu.client.component.event', 'HideBlockComponentEvent', 509);
function $clinit_ShowBlockComponentEvent(){
  $clinit_ShowBlockComponentEvent = emptyMethod;
  TYPE_1 = new Event$Type;
}

function ShowBlockComponentEvent(){
  $clinit_ShowBlockComponentEvent();
  new HashMap;
  new HashMap;
  new HashMap;
}

defineClass(510, 823, {}, ShowBlockComponentEvent);
_.dispatch = function dispatch_1(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.$_nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_1(){
  return TYPE_1;
}
;
var TYPE_1;
var Lcom_github_nalukit_nalu_client_component_event_ShowBlockComponentEvent_2_classLit = createForClass('com.github.nalukit.nalu.client.component.event', 'ShowBlockComponentEvent', 510);
function $clinit_ShowPopUpEvent(){
  $clinit_ShowPopUpEvent = emptyMethod;
  TYPE_2 = new Event$Type;
}

var TYPE_2;
function $setApplicationBuildTime(this$static, applicationBuildTime){
  $put(this$static.applicationContext, 'APPLICATION_BUILD_TIME', applicationBuildTime);
}

defineClass(305, 1, {});
var Lcom_github_nalukit_nalu_client_context_AbstractModuleContext_2_classLit = createForClass('com.github.nalukit.nalu.client.context', 'AbstractModuleContext', 305);
function $get(this$static, key){
  return $getStringValue(this$static.dataStore, key);
}

function $put(this$static, key, value_0){
  $putStringValue(this$static.dataStore, key, value_0);
}

function ContextDataStore(){
  this.dataStore = new HashMap;
}

defineClass(212, 1, {}, ContextDataStore);
var Lcom_github_nalukit_nalu_client_context_ContextDataStore_2_classLit = createForClass('com.github.nalukit.nalu.client.context', 'ContextDataStore', 212);
function $clinit_NaluApplicationEvent(){
  $clinit_NaluApplicationEvent = emptyMethod;
  TYPE_3 = new Event$Type;
}

function $dispatch_0(this$static, handler){
  $lambda$0_0(handler.$$outer_0, this$static);
}

function $event(this$static){
  this$static.event_0 = 'MyEvent1';
  return this$static;
}

function $using(this$static){
  $putStringValue(this$static.dataStore, 'name', 'MyEvent1');
  return this$static;
}

function $usingObject(this$static){
  $putStringValue(this$static.dataObjectStore, 'message', '\u57FA\u4E8E NaluApplicationEvent \u521B\u5EFA');
  return this$static;
}

function NaluApplicationEvent(){
  $clinit_NaluApplicationEvent();
  new HashMap;
  this.dataStore = new HashMap;
  this.dataObjectStore = new HashMap;
}

defineClass(505, 823, {}, NaluApplicationEvent);
_.dispatch = function dispatch_2(handler){
  $dispatch_0(this, castTo(handler, 850));
}
;
_.getAssociatedType = function getAssociatedType_2(){
  return TYPE_3;
}
;
var TYPE_3;
var Lcom_github_nalukit_nalu_client_event_NaluApplicationEvent_2_classLit = createForClass('com.github.nalukit.nalu.client.event', 'NaluApplicationEvent', 505);
function $clinit_NaluErrorEvent(){
  $clinit_NaluErrorEvent = emptyMethod;
  TYPE_4 = new Event$Type;
}

function NaluErrorEvent(){
  $clinit_NaluErrorEvent();
  new ErrorInfo;
}

defineClass(86, 823, {}, NaluErrorEvent);
_.dispatch = function dispatch_3(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.$_nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_3(){
  return TYPE_4;
}
;
var TYPE_4;
var Lcom_github_nalukit_nalu_client_event_NaluErrorEvent_2_classLit = createForClass('com.github.nalukit.nalu.client.event', 'NaluErrorEvent', 86);
function $clinit_RouterStateEvent(){
  $clinit_RouterStateEvent = emptyMethod;
  TYPE_5 = new Event$Type;
}

function $dispatch_1(this$static, handler){
  $onHandleRouting(handler.$$outer_0, this$static);
}

function RouterStateEvent(state){
  $clinit_RouterStateEvent();
  this.state_0 = state;
}

defineClass(123, 823, {}, RouterStateEvent);
_.dispatch = function dispatch_4(handler){
  $dispatch_1(this, castTo(handler, 843));
}
;
_.getAssociatedType = function getAssociatedType_4(){
  return TYPE_5;
}
;
_.state_0 = 0;
var TYPE_5;
var Lcom_github_nalukit_nalu_client_event_RouterStateEvent_2_classLit = createForClass('com.github.nalukit.nalu.client.event', 'RouterStateEvent', 123);
function ErrorInfo(){
  new HashMap;
}

defineClass(474, 1, {}, ErrorInfo);
var Lcom_github_nalukit_nalu_client_event_model_ErrorInfo_2_classLit = createForClass('com.github.nalukit.nalu.client.event.model', 'ErrorInfo', 474);
function $setContext_1(this$static, context){
  this$static.context = context;
}

defineClass(826, 1, {793:1});
var Lcom_github_nalukit_nalu_client_filter_AbstractFilter_2_classLit = createForClass('com.github.nalukit.nalu.client.filter', 'AbstractFilter', 826);
function $setContext_2(this$static, context){
  this$static.context = context;
}

function $setEventBus_0(this$static, eventBus){
  this$static.eventBus = eventBus;
}

defineClass(827, 1, {});
var Lcom_github_nalukit_nalu_client_handler_AbstractHandler_2_classLit = createForClass('com.github.nalukit.nalu.client.handler', 'AbstractHandler', 827);
function AbstractCompositeCreator(router, context, eventBus){
  this.router = router;
  this.context = context;
  this.eventBus = eventBus;
}

defineClass(217, 1, {250:1});
var Lcom_github_nalukit_nalu_client_internal_AbstractCompositeCreator_2_classLit = createForClass('com.github.nalukit.nalu.client.internal', 'AbstractCompositeCreator', 217);
function AbstractControllerCreator(router, context, eventBus){
  this.router = router;
  this.context = context;
  this.eventBus = eventBus;
}

defineClass(124, 1, $intern_5);
var Lcom_github_nalukit_nalu_client_internal_AbstractControllerCreator_2_classLit = createForClass('com.github.nalukit.nalu.client.internal', 'AbstractControllerCreator', 124);
function AbstractShellCreator(context){
  this.context = context;
}

defineClass(144, 1, $intern_6);
var Lcom_github_nalukit_nalu_client_internal_AbstractShellCreator_2_classLit = createForClass('com.github.nalukit.nalu.client.internal', 'AbstractShellCreator', 144);
function CompositeReference(compositeName, composite, selector){
  this.source_0 = 'com.itangsoft.notebook.views.layout.LayoutController';
  this.compositeName = compositeName;
  this.composite = composite;
  this.selector = selector;
  this.scopeGlobal = false;
}

defineClass(51, 1, {51:1}, CompositeReference);
_.scopeGlobal = false;
var Lcom_github_nalukit_nalu_client_internal_CompositeReference_2_classLit = createForClass('com.github.nalukit.nalu.client.internal', 'CompositeReference', 51);
function $add(this$static, handlerRegistration){
  $add_0(this$static.handlerRegistrations, handlerRegistration);
}

function $removeHandler(this$static){
  if (!this$static.handlerRegistrations) {
    return;
  }
  $forEach_0(this$static.handlerRegistrations, new HandlerRegistrations$lambda$0$Type);
  this$static.handlerRegistrations = null;
}

function HandlerRegistrations(){
  this.handlerRegistrations = new ArrayList;
}

defineClass(65, 1, {}, HandlerRegistrations);
var Lcom_github_nalukit_nalu_client_internal_HandlerRegistrations_2_classLit = createForClass('com.github.nalukit.nalu.client.internal', 'HandlerRegistrations', 65);
function HandlerRegistrations$lambda$0$Type(){
}

defineClass(507, 1, {}, HandlerRegistrations$lambda$0$Type);
_.accept = function accept_0(arg0){
  $removeHandler_0(castTo(arg0, 841));
}
;
var Lcom_github_nalukit_nalu_client_internal_HandlerRegistrations$lambda$0$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal', 'HandlerRegistrations/lambda$0$Type', 507);
function $clinit_PropertyFactory(){
  $clinit_PropertyFactory = emptyMethod;
  INSTANCE = new PropertyFactory;
}

function $register(this$static, startRoute, illegalRouteTarget){
  $equals_1(startRoute.substr(0, 1), '/')?(this$static.startRoute = (checkCriticalStringElementIndex(1, startRoute.length + 1) , startRoute.substr(1))):(this$static.startRoute = startRoute);
  this$static.illegalRouteTarget = illegalRouteTarget;
  this$static.hasHistory = true;
  this$static.usingHash = true;
  this$static.usingColonForParametersInUrl = false;
  this$static.stayOnSide = false;
  this$static.removeUrlParameterAtStart = false;
}

function $setContextPath(this$static, contextPath){
  this$static.contextPath = contextPath;
}

function PropertyFactory(){
}

defineClass(457, 1, {}, PropertyFactory);
_.hasHistory = false;
_.removeUrlParameterAtStart = false;
_.stayOnSide = false;
_.usingColonForParametersInUrl = false;
_.usingHash = false;
var INSTANCE;
var Lcom_github_nalukit_nalu_client_internal_PropertyFactory_2_classLit = createForClass('com.github.nalukit.nalu.client.internal', 'PropertyFactory', 457);
function $deactivateCompositeController(compositeController){
  $removeHandler(compositeController.handlerRegistrations);
  compositeController.handlerRegistrations = new HandlerRegistrations;
}

function $deactivateController(controller){
  $removeHandler(controller.handlerRegistrations);
  controller.handlerRegistrations = new HandlerRegistrations;
}

function $stopCompositeController(compositeController){
  if (!compositeController.cached) {
    $removeHandler(compositeController.globalHandlerRegistrations);
    compositeController.globalHandlerRegistrations = new HandlerRegistrations;
  }
  $removeHandlers(compositeController.component);
}

function $stopController(controller){
  $removeHandler(controller.globalHandlerRegistrations);
  controller.globalHandlerRegistrations = new HandlerRegistrations;
  $removeHandlers(controller.component);
}

function Utils(){
}

defineClass(97, 1, {}, Utils);
var instance_0;
var Lcom_github_nalukit_nalu_client_internal_Utils_2_classLit = createForClass('com.github.nalukit.nalu.client.internal', 'Utils', 97);
function $onFinishModuleLoading(this$static){
  var sb;
  if (!validateRoute(this$static.shellConfiguration, this$static.routerConfiguration, this$static.startRoute)) {
    sb = 'value of start route >>' + this$static.startRoute + '<< does not exist!';
    $doFire(this$static.eventBus, $addMessage($sdmOnly(($clinit_LogEvent() , new LogEvent), false), sb));
    ($clinit_DomGlobal() , $wnd.goog.global.window).alert('startRoute not valid - application stopped!');
    return;
  }
  $onFinishPostLoading(this$static);
}

function $onFinishPostLoading(this$static){
  var hashOnStart, routeResult;
  hashOnStart = this$static.plugin.naluStartModel.startRoute;
  if (hashOnStart != null && $trim(hashOnStart).length > 0) {
    try {
      routeResult = $parse(this$static.router, hashOnStart);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 84)) {
        $handleRouterException(this$static.router, this$static.startRoute);
        return;
      }
       else 
        throw toJs($e0);
    }
    $route_0(this$static.router, routeResult.route, castTo($toArray(routeResult.parameterValues, initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 6, 1)), 7));
  }
   else {
    $route_0(this$static.router, this$static.startRoute, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, []));
  }
}

function $run(this$static, plugin){
  var clientLogger, com_itangsoft_notebook_filter_LoginFilter, com_itangsoft_notebook_example_views_eventbus_handler_CustomizeEventHandler;
  this$static.plugin = plugin;
  this$static.eventBus = new SimpleEventBus;
  this$static.shellConfiguration = new ShellConfiguration;
  this$static.routerConfiguration = new RouterConfiguration;
  $setCustomConfirmPresenter(this$static.plugin, new CancelEditorConfirmPresenter);
  this$static.naluLogger = new NaluLogger;
  $setEventBus_1(this$static.naluLogger, this$static.eventBus);
  $bind_1(this$static.naluLogger);
  clientLogger = new DefaultElemental2ClientLogger;
  $setClientLogger(this$static.naluLogger, clientLogger);
  $setEventBus_3(($clinit_RouteParser() , INSTANCE_7), this$static.eventBus);
  $register_2(($clinit_RouterStateEventFactory() , INSTANCE_5), this$static.eventBus);
  $doFire(this$static.eventBus, $addMessage($addMessage($addMessage($sdmOnly(($clinit_LogEvent() , new LogEvent), true), '================================================================================='), 'Running Nalu version: >>2.12.6<<'), '================================================================================='));
  $doFire(this$static.eventBus, $addMessage($addMessage($addMessage($addMessage($sdmOnly(new LogEvent, true), '================================================================================='), 'Nalu processor version  >>2.12.6<< used to generate this source'), '================================================================================='), ''));
  this$static.startRoute = '/auth/login';
  this$static.illegalRouteTarget = '/auth/login';
  $clinit_SeoDataProvider();
  $add_0(this$static.shellConfiguration.shells, new ShellConfig('/layout', 'com.itangsoft.notebook.shell.LayoutShell'));
  $add_0(this$static.shellConfiguration.shells, new ShellConfig('/example-eventbus-shell', 'com.itangsoft.notebook.example.shell.EventBusShell'));
  $add_0(this$static.shellConfiguration.shells, new ShellConfig('/example-layout-shell', 'com.itangsoft.notebook.example.shell.SinglePageLayoutShell'));
  $add_0(this$static.shellConfiguration.shells, new ShellConfig('/auth', 'com.itangsoft.notebook.shell.LoginShell'));
  $add_0(this$static.routerConfiguration.routers, new RouteConfig('/example-layout-shell/single-page-layout/home/content/*', new Arrays$ArrayList(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['fileName'])), 'layout-content', 'com.itangsoft.notebook.example.views.layout.content.ContentController'));
  $add_0(this$static.routerConfiguration.routers, new RouteConfig('/auth/login', new Arrays$ArrayList(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, [])), 'login-content', 'com.itangsoft.notebook.views.login.LoginController'));
  $add_0(this$static.routerConfiguration.routers, new RouteConfig('/example-eventbus-shell/eventbus', new Arrays$ArrayList(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, [])), 'example-eventbus-page', 'com.itangsoft.notebook.example.views.eventbus.EventBusController'));
  $add_0(this$static.routerConfiguration.routers, new RouteConfig('/layout/home', new Arrays$ArrayList(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, [])), 'layout-page', 'com.itangsoft.notebook.views.layout.LayoutController'));
  $add_0(this$static.routerConfiguration.routers, new RouteConfig('/example-layout-shell/single-page-layout/home', new Arrays$ArrayList(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, [])), 'layout-left-panel', 'com.itangsoft.notebook.example.views.layout.leftpanel.LeftPanelController'));
  com_itangsoft_notebook_filter_LoginFilter = new LoginFilter;
  $setContext_1(com_itangsoft_notebook_filter_LoginFilter, this$static.context);
  $add_0(this$static.routerConfiguration.filters, com_itangsoft_notebook_filter_LoginFilter);
  $add_0(this$static.compositeReferences, new CompositeReference('navigationComposite', 'com.itangsoft.notebook.views.layout.composite.navigation.NavigationComposite', 'layout-navigation'));
  $add_0(this$static.compositeReferences, new CompositeReference('workspaceComposite', 'com.itangsoft.notebook.views.layout.composite.workspace.WorkspaceComposite', 'layout-workspace'));
  $register_0(($clinit_BlockControllerFactory() , INSTANCE_0), this$static.eventBus);
  $register_1(($clinit_PopUpControllerFactory() , INSTANCE_4), this$static.eventBus);
  this$static.router = new RouterImpl(this$static.plugin, this$static.shellConfiguration, this$static.routerConfiguration, this$static.compositeReferences, this$static.startRoute, this$static.illegalRouteTarget);
  $setEventBus_2(this$static.router, this$static.eventBus);
  $initialize(this$static.plugin, this$static.shellConfiguration);
  $registerShell(($clinit_ShellFactory() , INSTANCE_6), 'com.itangsoft.notebook.shell.LayoutShell', new LayoutShellCreatorImpl(this$static.context));
  $registerShell(INSTANCE_6, 'com.itangsoft.notebook.example.shell.EventBusShell', new EventBusShellCreatorImpl(this$static.context));
  $registerShell(INSTANCE_6, 'com.itangsoft.notebook.example.shell.SinglePageLayoutShell', new SinglePageLayoutShellCreatorImpl(this$static.context));
  $registerShell(INSTANCE_6, 'com.itangsoft.notebook.shell.LoginShell', new LoginShellCreatorImpl(this$static.context));
  $doFire(this$static.eventBus, $addMessage($sdmOnly(new LogEvent, true), 'no ErrorPopUpController found!'));
  $registerComposite(($clinit_CompositeFactory() , INSTANCE_2), 'com.itangsoft.notebook.views.layout.composite.navigation.NavigationComposite', new NavigationCompositeCreatorImpl(this$static.router, this$static.context, this$static.eventBus));
  $registerComposite(INSTANCE_2, 'com.itangsoft.notebook.views.layout.composite.workspace.WorkspaceComposite', new WorkspaceCompositeCreatorImpl(this$static.router, this$static.context, this$static.eventBus));
  $registerController(($clinit_ControllerFactory() , INSTANCE_3), 'com.itangsoft.notebook.example.views.layout.content.ContentController', new ContentControllerCreatorImpl(this$static.router, this$static.context, this$static.eventBus));
  $registerController(INSTANCE_3, 'com.itangsoft.notebook.views.login.LoginController', new LoginControllerCreatorImpl(this$static.router, this$static.context, this$static.eventBus));
  $registerController(INSTANCE_3, 'com.itangsoft.notebook.example.views.eventbus.EventBusController', new EventBusControllerCreatorImpl(this$static.router, this$static.context, this$static.eventBus));
  $registerController(INSTANCE_3, 'com.itangsoft.notebook.views.layout.LayoutController', new LayoutControllerCreatorImpl(this$static.router, this$static.context, this$static.eventBus));
  $registerCondition(($clinit_CompositeConditionFactory() , INSTANCE_1), 'com.itangsoft.notebook.views.layout.composite.navigation.NavigationComposite');
  $registerCondition(INSTANCE_1, 'com.itangsoft.notebook.views.layout.composite.workspace.WorkspaceComposite');
  $registerController(INSTANCE_3, 'com.itangsoft.notebook.example.views.layout.leftpanel.LeftPanelController', new LeftPanelControllerCreatorImpl(this$static.router, this$static.context, this$static.eventBus));
  com_itangsoft_notebook_example_views_eventbus_handler_CustomizeEventHandler = new CustomizeEventHandler;
  $setContext_2(com_itangsoft_notebook_example_views_eventbus_handler_CustomizeEventHandler, this$static.context);
  $setEventBus_0(com_itangsoft_notebook_example_views_eventbus_handler_CustomizeEventHandler, this$static.eventBus);
  $doAdd(com_itangsoft_notebook_example_views_eventbus_handler_CustomizeEventHandler.eventBus, ($clinit_CustomizeEvent() , TYPE_8), new CustomizeEventHandler$lambda$0$Type(com_itangsoft_notebook_example_views_eventbus_handler_CustomizeEventHandler));
  $load(new AbstractApplication$0methodref$onFinishLoading$Type(this$static));
}

defineClass(286, 1, {});
var Lcom_github_nalukit_nalu_client_internal_application_AbstractApplication_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'AbstractApplication', 286);
function AbstractApplication$0methodref$onFinishLoading$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(287, 1, {}, AbstractApplication$0methodref$onFinishLoading$Type);
var Lcom_github_nalukit_nalu_client_internal_application_AbstractApplication$0methodref$onFinishLoading$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'AbstractApplication/0methodref$onFinishLoading$Type', 287);
function $clinit_BlockControllerFactory(){
  $clinit_BlockControllerFactory = emptyMethod;
  INSTANCE_0 = new BlockControllerFactory;
}

function $lambda$1(this$static, i_1){
  throwClassCastExceptionUnlessNull($getStringValue(this$static.blockControllerInstanceStore, i_1));
  if (null.$_nullMethod()) {
    if ($indexOf_1(this$static.visiblesBlocks, null.$_nullMethod().$_nullMethod(), 0) == -1) {
      $doFire(this$static.eventBus, ($clinit_ShowBlockComponentEvent() , null.$_nullMethod().$_nullMethod() , new ShowBlockComponentEvent));
      $add_0(this$static.visiblesBlocks, null.$_nullMethod().$_nullMethod());
    }
  }
   else {
    if ($indexOf_1(this$static.visiblesBlocks, null.$_nullMethod().$_nullMethod(), 0) != -1) {
      $doFire(this$static.eventBus, ($clinit_HideBlockComponentEvent() , null.$_nullMethod().$_nullMethod() , new HideBlockComponentEvent));
      $remove_4(this$static.visiblesBlocks, null.$_nullMethod().$_nullMethod());
    }
  }
}

function $onHandleRouting(this$static, e){
  if (3 != e.state_0) {
    return;
  }
  $forEach(new AbstractMap$1(this$static.blockControllerInstanceStore), new BlockControllerFactory$lambda$1$Type(this$static));
}

function $register_0(this$static, eventBus){
  this$static.eventBus = eventBus;
  !this$static.eventBus || $doAdd(this$static.eventBus, ($clinit_RouterStateEvent() , TYPE_5), new BlockControllerFactory$0methodref$onHandleRouting$Type(this$static));
}

function BlockControllerFactory(){
  this.blockControllerInstanceStore = new HashMap;
  this.visiblesBlocks = new ArrayList;
}

defineClass(338, 1, {}, BlockControllerFactory);
var INSTANCE_0;
var Lcom_github_nalukit_nalu_client_internal_application_BlockControllerFactory_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'BlockControllerFactory', 338);
function BlockControllerFactory$0methodref$onHandleRouting$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(339, 1, {843:1}, BlockControllerFactory$0methodref$onHandleRouting$Type);
var Lcom_github_nalukit_nalu_client_internal_application_BlockControllerFactory$0methodref$onHandleRouting$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'BlockControllerFactory/0methodref$onHandleRouting$Type', 339);
function BlockControllerFactory$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(340, 1, {}, BlockControllerFactory$lambda$1$Type);
_.accept = function accept_1(arg0){
  $lambda$1(this.$$outer_0, castToString(arg0));
}
;
var Lcom_github_nalukit_nalu_client_internal_application_BlockControllerFactory$lambda$1$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'BlockControllerFactory/lambda$1$Type', 340);
function $clinit_CompositeConditionFactory(){
  $clinit_CompositeConditionFactory = emptyMethod;
  INSTANCE_1 = new CompositeConditionFactory;
}

function $loadComposite(this$static, sourceClassName, compositeName){
  var conditionContainer, conditionContainer$iterator, conditionContainers;
  conditionContainers = castTo($getStringValue(this$static.conditionContainerMap, sourceClassName), 18);
  if (!conditionContainers) {
    return false;
  }
  for (conditionContainer$iterator = conditionContainers.iterator(); conditionContainer$iterator.hasNext_0();) {
    conditionContainer = castTo(conditionContainer$iterator.next_1(), 145);
    if ($equals_1(conditionContainer.compositeName, compositeName)) {
      return true;
    }
  }
  return false;
}

function $registerCondition(this$static, compositeName){
  $hasStringValue(this$static.conditionContainerMap, 'com.itangsoft.notebook.views.layout.LayoutController')?castTo($getStringValue(this$static.conditionContainerMap, 'com.itangsoft.notebook.views.layout.LayoutController'), 18).add(new CompositeConditionFactory$ConditionContainer(compositeName)):castTo($computeIfAbsent(this$static.conditionContainerMap, 'com.itangsoft.notebook.views.layout.LayoutController', new CompositeConditionFactory$lambda$0$Type), 18).add(new CompositeConditionFactory$ConditionContainer(compositeName));
}

function CompositeConditionFactory(){
  this.conditionContainerMap = new HashMap;
}

defineClass(440, 1, {}, CompositeConditionFactory);
var INSTANCE_1;
var Lcom_github_nalukit_nalu_client_internal_application_CompositeConditionFactory_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'CompositeConditionFactory', 440);
function CompositeConditionFactory$ConditionContainer(compositeName){
  this.compositeName = compositeName;
}

defineClass(145, 1, {145:1}, CompositeConditionFactory$ConditionContainer);
var Lcom_github_nalukit_nalu_client_internal_application_CompositeConditionFactory$ConditionContainer_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'CompositeConditionFactory/ConditionContainer', 145);
function CompositeConditionFactory$lambda$0$Type(){
}

defineClass(441, 1, {}, CompositeConditionFactory$lambda$0$Type);
_.apply_0 = function apply_0(arg0){
  return castToString(arg0) , $clinit_CompositeConditionFactory() , new ArrayList;
}
;
var Lcom_github_nalukit_nalu_client_internal_application_CompositeConditionFactory$lambda$0$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'CompositeConditionFactory/lambda$0$Type', 441);
function $clinit_CompositeFactory(){
  $clinit_CompositeFactory = emptyMethod;
  INSTANCE_2 = new CompositeFactory;
}

function $getComposite(this$static, parentControllerClassName, compositeControllerClassName, selector, scopeGlobal, parameterKeys, parameterValues){
  var compositeCreator, compositeInstance;
  if (scopeGlobal) {
    if ($getStringValue(this$static.cachedGlobalCompositeInstances, compositeControllerClassName) != null) {
      return castTo($getStringValue(this$static.cachedGlobalCompositeInstances, compositeControllerClassName), 158);
    }
  }
  if ($hasStringValue(this$static.compositeCreatorFactory, compositeControllerClassName)) {
    compositeCreator = castTo($getStringValue(this$static.compositeCreatorFactory, compositeControllerClassName), 250);
    compositeInstance = compositeCreator.create_0(parentControllerClassName, selector, scopeGlobal);
    if (scopeGlobal) {
      compositeInstance.composite.cachedGlobal = true;
      compositeInstance.composite.selector = null;
      $putStringValue(this$static.cachedGlobalCompositeInstances, compositeControllerClassName, compositeInstance);
    }
    compositeCreator.setParameter(compositeInstance.composite, parameterKeys, parameterValues);
    return compositeInstance;
  }
  return null;
}

function $getCompositeFormStore(this$static, parentControllerClassName, controllerClassName, selector){
  var key, sb;
  key = (sb = new StringBuilder , $append_4($append_4(sb, $replace(parentControllerClassName, '.', '_')), '<<||>>') , selector != null?$append_4((sb.string += '' + selector , sb), '<<||>>'):$append_4((sb.string += '*' , sb), '<<||>>') , $append_4(sb, $replace(controllerClassName, '.', '_')) , sb.string);
  return castTo($getStringValue(this$static.compositeControllerStore, key), 39);
}

function $registerComposite(this$static, controller, creator){
  $putStringValue(this$static.compositeCreatorFactory, controller, creator);
}

function CompositeFactory(){
  this.compositeCreatorFactory = new HashMap;
  this.compositeControllerStore = new HashMap;
  this.cachedGlobalCompositeInstances = new HashMap;
}

defineClass(422, 1, {}, CompositeFactory);
var INSTANCE_2;
var Lcom_github_nalukit_nalu_client_internal_application_CompositeFactory_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'CompositeFactory', 422);
function CompositeInstance(){
}

defineClass(158, 1, {158:1}, CompositeInstance);
var Lcom_github_nalukit_nalu_client_internal_application_CompositeInstance_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'CompositeInstance', 158);
function $clinit_ControllerFactory(){
  $clinit_ControllerFactory = emptyMethod;
  INSTANCE_3 = new ControllerFactory;
}

function $controller(this$static, route, controller, callback, parameterKeys, parameterValues){
  var controllerCreator, controllerInstance;
  if ($hasStringValue(this$static.controllerFactory, controller)) {
    controllerCreator = castTo($getStringValue(this$static.controllerFactory, controller), 136);
    controllerInstance = controllerCreator.create_1(route);
    controllerCreator.setParameter(controllerInstance.controller_0, parameterKeys, parameterValues);
    controllerInstance.cached?$doRouting(callback.this$01, callback.val$hash2, callback.val$routeResult3, callback.val$routeConfiguration4, controllerInstance):$bind(new ControllerFactory$lambda$0$Type(controllerCreator, controllerInstance, callback));
  }
}

function $getControllerFormStore(this$static, controllerClassName){
  return castTo($getStringValue(this$static.controllerStore, $replace(controllerClassName, '.', '_')), 61);
}

function $registerController(this$static, controller, creator){
  $putStringValue(this$static.controllerFactory, controller, creator);
}

function ControllerFactory(){
  this.controllerFactory = new HashMap;
  this.controllerStore = new HashMap;
}

function lambda$0(controllerCreator_0, controllerInstance_1, callback_2){
  $clinit_ControllerFactory();
  controllerCreator_0.onFinishCreating(controllerInstance_1.controller_0);
  $doRouting(callback_2.this$01, callback_2.val$hash2, callback_2.val$routeResult3, callback_2.val$routeConfiguration4, controllerInstance_1);
}

defineClass(427, 1, {}, ControllerFactory);
var INSTANCE_3;
var Lcom_github_nalukit_nalu_client_internal_application_ControllerFactory_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'ControllerFactory', 427);
function ControllerFactory$lambda$0$Type(controllerCreator_0, controllerInstance_1, callback_2){
  this.controllerCreator_0 = controllerCreator_0;
  this.controllerInstance_1 = controllerInstance_1;
  this.callback_2 = callback_2;
}

defineClass(428, 1, {}, ControllerFactory$lambda$0$Type);
var Lcom_github_nalukit_nalu_client_internal_application_ControllerFactory$lambda$0$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'ControllerFactory/lambda$0$Type', 428);
function ControllerInstance(){
}

defineClass(46, 1, {46:1}, ControllerInstance);
_.cached = false;
var Lcom_github_nalukit_nalu_client_internal_application_ControllerInstance_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'ControllerInstance', 46);
function $bind_1(this$static){
  $doAdd(this$static.eventBus, ($clinit_LogEvent() , TYPE), new NaluLogger$0methodref$onLog$Type(this$static));
}

function $lambda$1_0(m_0){
  ($clinit_DomGlobal() , $wnd.goog.global.window).console.log(m_0);
}

function $onLog(this$static, event_0){
  if (event_0.sdmOnly) {
    return;
  }
  !this$static.clientLogger || $forEach_0(event_0.messages, new NaluLogger$lambda$1$Type);
}

function $setClientLogger(this$static, clientLogger){
  this$static.clientLogger = clientLogger;
}

function $setEventBus_1(this$static, eventBus){
  this$static.eventBus = eventBus;
}

function NaluLogger(){
}

defineClass(327, 1, {}, NaluLogger);
var Lcom_github_nalukit_nalu_client_internal_application_NaluLogger_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'NaluLogger', 327);
function NaluLogger$0methodref$onLog$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(328, 1, {842:1}, NaluLogger$0methodref$onLog$Type);
var Lcom_github_nalukit_nalu_client_internal_application_NaluLogger$0methodref$onLog$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'NaluLogger/0methodref$onLog$Type', 328);
function NaluLogger$lambda$1$Type(){
}

defineClass(329, 1, {}, NaluLogger$lambda$1$Type);
_.accept = function accept_2(arg0){
  $lambda$1_0(castToString(arg0));
}
;
var Lcom_github_nalukit_nalu_client_internal_application_NaluLogger$lambda$1$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'NaluLogger/lambda$1$Type', 329);
function $clinit_PopUpControllerFactory(){
  $clinit_PopUpControllerFactory = emptyMethod;
  INSTANCE_4 = new PopUpControllerFactory;
}

function $register_1(this$static, eventBus){
  this$static.eventBus = eventBus;
  !this$static.eventBus || $doAdd(this$static.eventBus, ($clinit_ShowPopUpEvent() , TYPE_2), new PopUpControllerFactory$0methodref$onShowPopUp$Type);
}

function PopUpControllerFactory(){
  new HashMap;
  new HashMap;
  new HashMap;
}

defineClass(341, 1, {}, PopUpControllerFactory);
var INSTANCE_4;
var Lcom_github_nalukit_nalu_client_internal_application_PopUpControllerFactory_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'PopUpControllerFactory', 341);
function PopUpControllerFactory$0methodref$onShowPopUp$Type(){
}

defineClass(342, 1, {}, PopUpControllerFactory$0methodref$onShowPopUp$Type);
var Lcom_github_nalukit_nalu_client_internal_application_PopUpControllerFactory$0methodref$onShowPopUp$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'PopUpControllerFactory/0methodref$onShowPopUp$Type', 342);
function $clinit_RouterStateEventFactory(){
  $clinit_RouterStateEventFactory = emptyMethod;
  INSTANCE_5 = new RouterStateEventFactory;
}

function $checkParams(paramsFromInfo, params){
  var i;
  if (paramsFromInfo == null && params == null) {
    return true;
  }
  if (paramsFromInfo == null) {
    return false;
  }
  if (params == null) {
    return false;
  }
  if (paramsFromInfo.length != params.length) {
    return false;
  }
  for (i = 0; i < paramsFromInfo.length; i++) {
    if (!$equals_1(paramsFromInfo[i], params[i])) {
      return false;
    }
  }
  return true;
}

function $fireAbortRoutingEvent(this$static, route, params){
  var info;
  info = $getRouteStateInfo(this$static, route, params);
  if (!info) {
    return;
  }
  if (!info.aborted_0) {
    $doFire(this$static.eventBus, new RouterStateEvent(1));
    info.aborted_0 = true;
  }
}

function $fireCancelByUserRoutingEvent(this$static, route, params){
  var info;
  info = $getRouteStateInfo(this$static, route, params);
  if (!info) {
    return;
  }
  if (!info.aborted_0) {
    $doFire(this$static.eventBus, new RouterStateEvent(2));
    info.aborted_0 = true;
  }
}

function $fireDoneRoutingEvent(this$static, route, params){
  var info;
  info = $getRouteStateInfo(this$static, route, params);
  if (!info) {
    return;
  }
  info.aborted_0 || $doFire(this$static.eventBus, new RouterStateEvent(3));
  this$static.routeStateInfoList.array.length = 0;
}

function $fireStartRoutingEvent(this$static, route, params){
  var info, info$iterator;
  for (info$iterator = new ArrayList$1(this$static.routeStateInfoList); info$iterator.i < info$iterator.this$01.array.length;) {
    info = castTo($next_0(info$iterator), 142);
    if (!info.aborted_0) {
      $doFire(this$static.eventBus, new RouterStateEvent(1));
      info.aborted_0 = true;
    }
  }
  $doFire(this$static.eventBus, new RouterStateEvent(0));
  $add_0(this$static.routeStateInfoList, new RouterStateEventFactory$RouteStateInfo(route, params));
}

function $getRouteStateInfo(this$static, route, params){
  var info, info$iterator;
  for (info$iterator = new ArrayList$1(this$static.routeStateInfoList); info$iterator.i < info$iterator.this$01.array.length;) {
    info = castTo($next_0(info$iterator), 142);
    if ($compareRoutes(info.route, route)) {
      if ($checkParams(info.params, params)) {
        return info;
      }
    }
  }
  return null;
}

function $register_2(this$static, eventBus){
  this$static.eventBus = eventBus;
}

function RouterStateEventFactory(){
  this.routeStateInfoList = new ArrayList;
}

defineClass(336, 1, {}, RouterStateEventFactory);
var INSTANCE_5;
var Lcom_github_nalukit_nalu_client_internal_application_RouterStateEventFactory_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'RouterStateEventFactory', 336);
function RouterStateEventFactory$RouteStateInfo(route, params){
  this.route = route;
  this.params = params;
}

defineClass(142, 1, {142:1}, RouterStateEventFactory$RouteStateInfo);
_.aborted_0 = false;
var Lcom_github_nalukit_nalu_client_internal_application_RouterStateEventFactory$RouteStateInfo_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'RouterStateEventFactory/RouteStateInfo', 142);
function $clinit_ShellFactory(){
  $clinit_ShellFactory = emptyMethod;
  INSTANCE_6 = new ShellFactory;
}

function $registerShell(this$static, shellName, creator){
  $putStringValue(this$static.shellFactory, shellName, creator);
}

function $shell(this$static, shellName, callback){
  var shellCreator, shellInstance;
  if ($hasStringValue(this$static.shellFactory, shellName)) {
    shellCreator = castTo($getStringValue(this$static.shellFactory, shellName), 169);
    shellInstance = shellCreator.create_2();
    $bind_0(new ShellFactory$lambda$0$Type(shellCreator, callback, shellInstance));
  }
   else {
    $doFire(callback.this$01.eventBus, ($clinit_NaluErrorEvent() , new NaluErrorEvent));
  }
}

function ShellFactory(){
  this.shellFactory = new HashMap;
}

function lambda$0_0(shellCreator_0, callback_1, shellInstance_2){
  $clinit_ShellFactory();
  shellCreator_0.onFinishCreating_0();
  $onFinish(callback_1, shellInstance_2);
}

defineClass(416, 1, {}, ShellFactory);
var INSTANCE_6;
var Lcom_github_nalukit_nalu_client_internal_application_ShellFactory_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'ShellFactory', 416);
function ShellFactory$lambda$0$Type(shellCreator_0, callback_1, shellInstance_2){
  this.shellCreator_0 = shellCreator_0;
  this.callback_1 = callback_1;
  this.shellInstance_2 = shellInstance_2;
}

defineClass(417, 1, {}, ShellFactory$lambda$0$Type);
var Lcom_github_nalukit_nalu_client_internal_application_ShellFactory$lambda$0$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'ShellFactory/lambda$0$Type', 417);
function ShellInstance(){
}

defineClass(154, 1, {}, ShellInstance);
var Lcom_github_nalukit_nalu_client_internal_application_ShellInstance_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'ShellInstance', 154);
function $addLeadingSlash(value_0){
  if ($equals_1(value_0.substr(0, 1), '/')) {
    return value_0;
  }
  return '/' + value_0;
}

function $append(this$static, selector, compositeController){
  var sb;
  if (compositeController.component.element == null) {
    $doFire(this$static.eventBus, $addMessage($sdmOnly(($clinit_LogEvent() , new LogEvent), false), 'composite controller element is null! --> Routing aborted!'));
    $doFire(this$static.eventBus, ($clinit_NaluErrorEvent() , new NaluErrorEvent));
  }
  if (!$attach(selector, compositeController.component.element)) {
    sb = 'no element found, that matches selector >>' + selector + '<< --> Routing aborted!';
    $doFire(this$static.eventBus, $addMessage($sdmOnly(($clinit_LogEvent() , new LogEvent), false), sb));
    $doFire(this$static.eventBus, ($clinit_NaluErrorEvent() , new NaluErrorEvent));
  }
}

function $append_0(this$static, selector, controllerInstance){
  var sb;
  if (controllerInstance.controller_0.component.element == null) {
    sb = 'controller element of controller >>' + controllerInstance.controllerClassName + '<< is null! --> Routing aborted!';
    $doFire(this$static.eventBus, $addMessage($sdmOnly(($clinit_LogEvent() , new LogEvent), false), sb));
    $doFire(this$static.eventBus, ($clinit_NaluErrorEvent() , new NaluErrorEvent));
  }
  if ($attach(selector, controllerInstance.controller_0.component.element)) {
    $putStringValue(this$static.activeComponents, selector, controllerInstance);
  }
   else {
    sb = 'no element found, that matches selector >>' + selector + '<< --> Routing aborted!';
    $doFire(this$static.eventBus, $addMessage($sdmOnly(($clinit_LogEvent() , new LogEvent), false), sb));
    $doFire(this$static.eventBus, ($clinit_NaluErrorEvent() , new NaluErrorEvent));
  }
}

function $confirmRouting(this$static, routeConfigurations, confirmHandler){
  var messageList, optionalConfirm, optionalShellCompositeConfirmation;
  messageList = new ArrayList;
  if (this$static.shell) {
    optionalShellCompositeConfirmation = $findFirst($filter_0($map(new StreamImpl(null, new Spliterators$IteratorSpliterator(new AbstractMap$2(this$static.shell.compositeControllers), 0)), new AbstractRouter$1methodref$mayStop$Type), new AbstractRouter$2methodref$nonNull$Type));
    $ifPresent(optionalShellCompositeConfirmation, new AbstractRouter$3methodref$add$Type(messageList));
  }
  $forEach_3($filter_0($map(routeConfigurations.stream(), new AbstractRouter$lambda$10$Type(this$static)), new AbstractRouter$4methodref$nonNull$Type), new AbstractRouter$lambda$12$Type(messageList));
  optionalConfirm = $findFirst($filter_0($map($filter_0($map(routeConfigurations.stream(), new AbstractRouter$lambda$16$Type(this$static)), new AbstractRouter$8methodref$nonNull$Type), new AbstractRouter$lambda$18$Type), new AbstractRouter$9methodref$nonNull$Type));
  optionalConfirm.ref != null || messageList.array.length > 0?$confirm(this$static.plugin, castToString($orElseGet(optionalConfirm, new AbstractRouter$lambda$20$Type(messageList))), confirmHandler):$unbindController(confirmHandler.this$01, confirmHandler.val$finalHash2, confirmHandler.val$routeResult3, confirmHandler.val$routeConfigurations4);
}

function $doRouting(this$static, hash, routeResult, routeConfiguration, controllerInstance){
  var compositeController, compositeController$iterator, compositeControllers, compositeForController, compositeInstance, compositeReference, compositeReference$iterator, globalComposite, handlingModeReuse, lastArg, reference, sb, sfc, sfc$iterator, sfc$iterator0;
  if (!controllerInstance.controller_0) {
    sb = 'no controller found for hash >>' + hash + '<<';
    $doFire(this$static.eventBus, $addMessage($sdmOnly(($clinit_LogEvent() , new LogEvent), true), sb));
    $doFire(this$static.eventBus, ($clinit_NaluErrorEvent() , new NaluErrorEvent));
  }
   else {
    $setRouter(controllerInstance.controller_0, this$static);
    compositeControllers = new ArrayList;
    compositeForController = $getCompositeForClassName(this$static, $getCanonicalName(controllerInstance.controller_0.___clazz));
    handlingModeReuse = $isHandlingModeReuse(this$static, controllerInstance.controller_0);
    !controllerInstance.cached && !handlingModeReuse && compositeForController.size() > 0 && compositeForController.forEach_0(new AbstractRouter$lambda$29$Type(this$static, controllerInstance, routeResult, compositeControllers));
    handlingModeReuse || $append_0(this$static, routeConfiguration.selector, controllerInstance);
    if (!controllerInstance.cached && !handlingModeReuse) {
      for (compositeController$iterator = new ArrayList$1(compositeControllers); compositeController$iterator.i < compositeController$iterator.this$01.array.length;) {
        compositeController = castTo($next_0(compositeController$iterator), 39);
        reference = null;
        for (sfc$iterator0 = compositeForController.iterator(); sfc$iterator0.hasNext_0();) {
          sfc = castTo(sfc$iterator0.next_1(), 51);
          if ($equals_1($getCanonicalName(compositeController.___clazz), sfc.composite)) {
            if (compositeController.selector != null) {
              if ($equals_1(compositeController.selector, sfc.selector)) {
                reference = sfc;
                break;
              }
            }
          }
        }
        if (!reference) {
          for (sfc$iterator = compositeForController.iterator(); sfc$iterator.hasNext_0();) {
            sfc = castTo(sfc$iterator.next_1(), 51);
            if ($equals_1($getCanonicalName(compositeController.___clazz), sfc.composite)) {
              if (compositeController.selector == null) {
                reference = sfc;
                break;
              }
            }
          }
        }
        !!reference && $append(this$static, reference.selector, compositeController);
      }
    }
     else {
      if (!handlingModeReuse) {
        globalComposite = castTo($collect($filter_0(compositeForController.stream(), new AbstractRouter$15methodref$isScopeGlobal$Type), of_1(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$42$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_0, 29, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)]))), 18);
        for (compositeReference$iterator = globalComposite.iterator(); compositeReference$iterator.hasNext_0();) {
          compositeReference = castTo(compositeReference$iterator.next_1(), 51);
          if ($loadComposite(($clinit_CompositeConditionFactory() , INSTANCE_1), controllerInstance.controllerClassName, (lastArg = compositeReference.composite , castTo($toArray(routeResult.parameterValues, initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 6, 1)), 7) , lastArg))) {
            compositeInstance = $getComposite(($clinit_CompositeFactory() , INSTANCE_2), controllerInstance.controllerClassName, compositeReference.composite, compositeReference.selector, true, routeResult.parameterKeys, routeResult.parameterValues);
            $append(this$static, compositeReference.selector, compositeInstance.composite);
          }
        }
      }
    }
    handlingModeReuse || $forEach_0(compositeControllers, new AbstractRouter$16methodref$onAttach$Type);
    if (controllerInstance.cached || handlingModeReuse) {
      handlingModeReuse && controllerInstance.controllerCreator.setParameter(controllerInstance.controller_0, routeResult.parameterKeys, routeResult.parameterValues);
      $forEach_0(compositeControllers, new AbstractRouter$lambda$32$Type);
      $forEach(new AbstractMap$2(controllerInstance.controller_0.compositeControllers), new AbstractRouter$lambda$33$Type);
      !controllerInstance.controller_0.activateNaluCommand || controllerInstance.controller_0.activateNaluCommand.execute();
      controllerInstance.controller_0.activate();
    }
     else {
      $forEach_0(compositeControllers, new AbstractRouter$lambda$34$Type);
      controllerInstance.controller_0.start_0();
      !controllerInstance.controller_0.activateNaluCommand || controllerInstance.controller_0.activateNaluCommand.execute();
      controllerInstance.controller_0.activate();
    }
    this$static.lastExecutedHash = hash;
    this$static.loopDetectionList.array.length = 0;
  }
}

function $doRouting_0(this$static, hash, routeResult, routeConfigurations){
  var shellConfig;
  $stopController_0(this$static, routeConfigurations, !$equals_1(routeResult.shell, this$static.lastAddedShell));
  if ($equals_1(routeResult.shell, this$static.lastAddedShell)) {
    $postProcessHandleRouting(this$static, hash, routeResult, routeConfigurations);
  }
   else {
    !!this$static.shell && $forEach(new AbstractMap$2(this$static.shell.compositeControllers), new AbstractRouter$lambda$6$Type);
    shellConfig = $match_3(this$static.shellConfiguration, routeResult.shell);
    !shellConfig || $shell(($clinit_ShellFactory() , INSTANCE_6), shellConfig.className, new AbstractRouter$2(this$static, routeResult, hash, routeConfigurations));
  }
}

function $getCompositeForClassName(this$static, className){
  return castTo($collect($filter_0(new StreamImpl(null, new Spliterators$IteratorSpliterator(this$static.compositeReferences, 16)), new AbstractRouter$lambda$35$Type(className)), of_1(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$42$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_0, 29, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)]))), 18);
}

function $handleRouteConfig(this$static, routeConfiguration, routeResult, hash){
  $controller(($clinit_ControllerFactory() , INSTANCE_3), routeConfiguration.route, routeConfiguration.className, new AbstractRouter$3(this$static, hash, routeResult, routeConfiguration), routeResult.parameterKeys, routeResult.parameterValues);
}

function $handleRouterException(this$static, hash){
  var decodedUrl, routeResult, sb;
  if (($clinit_PropertyFactory() , INSTANCE).illegalRouteTarget == null || INSTANCE.illegalRouteTarget.length == 0) {
    try {
      routeResult = (decodedUrl = $wnd.goog.global.decodeURI(hash) , $parse_0(($clinit_RouteParser() , INSTANCE_7), decodedUrl, this$static.shellConfiguration, this$static.routerConfiguration));
      $fireAbortRoutingEvent(($clinit_RouterStateEventFactory() , INSTANCE_5), routeResult.route, castTo($toArray(routeResult.parameterValues, initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 6, 1)), 7));
      $fireDoneRoutingEvent(INSTANCE_5, routeResult.route, castTo($toArray(routeResult.parameterValues, initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 6, 1)), 7));
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 84)) {
        $fireAbortRoutingEvent(($clinit_RouterStateEventFactory() , INSTANCE_5), hash, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, []));
      }
       else 
        throw toJs($e0);
    }
    sb = new StringBuilder;
    $append_4($append_4((sb.string += 'no matching route for hash >>' , sb), hash), '<< --> Routing aborted!');
    $doFire(this$static.eventBus, $addMessage($sdmOnly(($clinit_LogEvent() , new LogEvent), true), sb.string));
    $doFire(this$static.eventBus, ($clinit_NaluErrorEvent() , new NaluErrorEvent));
  }
   else {
    $route_0(this$static, INSTANCE.illegalRouteTarget, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, []));
  }
}

function $handleRouting(this$static, hash, forceRouting){
  var decodedUrl, filter, filter$iterator, finalHash, lastArg, parms, routeConfigurations, routeResult, routeResult0, sb;
  hash.indexOf('#') != -1 && (hash = $substring(hash, hash.indexOf('#') + 1));
  hash.indexOf('&') != -1 && (hash = $substring_0(hash, 0, hash.indexOf('&') + 1));
  if ($indexOf_1(this$static.loopDetectionList, $pimpUpHashForLoopDetection(hash), 0) != -1) {
    try {
      routeResult0 = (decodedUrl = $wnd.goog.global.decodeURI(hash) , $parse_0(($clinit_RouteParser() , INSTANCE_7), decodedUrl, this$static.shellConfiguration, this$static.routerConfiguration));
      $fireAbortRoutingEvent(($clinit_RouterStateEventFactory() , INSTANCE_5), routeResult0.route, castTo($toArray(routeResult0.parameterValues, initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 6, 1)), 7));
      $fireDoneRoutingEvent(INSTANCE_5, routeResult0.route, castTo($toArray(routeResult0.parameterValues, initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 6, 1)), 7));
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 84)) {
        $fireAbortRoutingEvent(($clinit_RouterStateEventFactory() , INSTANCE_5), hash, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, []));
      }
       else 
        throw toJs($e0);
    }
    sb = new StringBuilder;
    $append_4($append_4((sb.string += 'loop detected for hash >>' , sb), hash), '<< --> Routing aborted!');
    $doFire(this$static.eventBus, $addMessage($sdmOnly(($clinit_LogEvent() , new LogEvent), true), sb.string));
    $doFire(this$static.eventBus, (lastArg = ($clinit_NaluErrorEvent() , new NaluErrorEvent) , castToString($get_1(this$static.loopDetectionList, 0)) , lastArg));
    this$static.loopDetectionList.array.length = 0;
    return;
  }
   else {
    $add_0(this$static.loopDetectionList, $pimpUpHashForLoopDetection(hash));
  }
  try {
    routeResult = (decodedUrl = $wnd.goog.global.decodeURI(hash) , $parse_0(($clinit_RouteParser() , INSTANCE_7), decodedUrl, this$static.shellConfiguration, this$static.routerConfiguration));
    this$static.currentRoute = routeResult.route;
    castTo($toArray(routeResult.parameterValues, initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 6, 1)), 7);
  }
   catch ($e1) {
    $e1 = toJava($e1);
    if (instanceOf($e1, 84)) {
      $handleRouterException(this$static, hash);
      return;
    }
     else 
      throw toJs($e1);
  }
  $fireStartRoutingEvent(($clinit_RouterStateEventFactory() , INSTANCE_5), routeResult.route, castTo($toArray(routeResult.parameterValues, initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 6, 1)), 7));
  for (filter$iterator = new ArrayList$1(this$static.routerConfiguration.filters); filter$iterator.i < filter$iterator.this$01.array.length;) {
    filter = castTo($next_0(filter$iterator), 793);
    if (!$filter(filter, (lastArg = $addLeadingSlash(routeResult.route) , castTo($toArray(routeResult.parameterValues, initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 6, 1)), 7) , lastArg))) {
      $fireAbortRoutingEvent(INSTANCE_5, routeResult.route, castTo($toArray(routeResult.parameterValues, initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 6, 1)), 7));
      parms = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, []);
      sb = new StringBuilder;
      $append_4($append_4($append_4($append_4((sb.string += 'Router: filter >>' , sb), ($ensureNamesAreInitialized(Lcom_itangsoft_notebook_filter_LoginFilter_2_classLit) , Lcom_itangsoft_notebook_filter_LoginFilter_2_classLit.canonicalName)), '<< intercepts routing! New route: >>'), '/auth/login'), '<<');
      if ((new Arrays$ArrayList(parms)).array.length > 0) {
        sb.string += ' with parameters: ';
        $forEach_3(new StreamImpl(null, spliterator_3(parms, parms.length)), new AbstractRouter$lambda$0$Type(sb));
      }
      $doFire(this$static.eventBus, $addMessage($sdmOnly(($clinit_LogEvent() , new LogEvent), true), sb.string));
      $route(this$static, '/auth/login', true, true, parms);
      return;
    }
  }
  routeConfigurations = $match_0(this$static.routerConfiguration, routeResult.route);
  if (forceRouting) {
    $unbindController(this$static, hash, routeResult, routeConfigurations);
  }
   else {
    finalHash = hash;
    $confirmRouting(this$static, routeConfigurations, new AbstractRouter$1(this$static, finalHash, routeResult, routeConfigurations));
  }
}

function $handleUnbindCallBack(this$static, hash, routeResult, routeConfigurations){
  --this$static.callCounter;
  this$static.callCounter == 0 && $doRouting_0(this$static, hash, routeResult, routeConfigurations);
}

function $isHandlingModeReuse(this$static, controller){
  return $equals_1(this$static.currentRoute, controller.relatedRoute) && ($clinit_IsController$Mode() , REUSE) == controller.mode_0;
}

function $lambda$1_1(this$static, config_0){
  return castTo($getStringValue(this$static.activeComponents, config_0.selector), 46);
}

function $lambda$10(this$static, config_0){
  return castTo($getStringValue(this$static.activeComponents, config_0.selector), 46);
}

function $lambda$16(this$static, config_0){
  return castTo($getStringValue(this$static.activeComponents, config_0.selector), 46);
}

function $lambda$22(this$static, config_0){
  return castTo($getStringValue(this$static.activeComponents, config_0.selector), 46);
}

function $lambda$25(this$static, controllerList_1, controller_1){
  var handlingModeReuse;
  handlingModeReuse = $equals_1(this$static.currentRoute, controller_1.relatedRoute) && ($clinit_IsController$Mode() , REUSE) == controller_1.mode_0;
  $forEach(new AbstractMap$2(controller_1.compositeControllers), new AbstractRouter$lambda$26$Type(controller_1, handlingModeReuse));
  $deactivateController((!instance_0 && (instance_0 = new Utils) , controller_1));
  !controller_1.cached && !handlingModeReuse && $stopController((!instance_0 && (instance_0 = new Utils) , controller_1));
  $forEach_3($filter_0(new StreamImpl(null, new Spliterators$IteratorSpliterator(controllerList_1, 16)), new AbstractRouter$lambda$27$Type(this$static)), new AbstractRouter$lambda$28$Type(this$static));
}

function $lambda$27(this$static, c_0){
  return !($equals_1(this$static.currentRoute, c_0.relatedRoute) && ($clinit_IsController$Mode() , REUSE) == c_0.mode_0);
}

function $lambda$28(this$static, c_0){
  $remove(c_0.relatedSelector);
  $removeStringValue(this$static.activeComponents, c_0.relatedSelector);
}

function $lambda$29(this$static, controllerInstance_1, routeResult_2, compositeControllers_3, s_3){
  var compositeInstance, lastArg;
  if ($loadComposite(($clinit_CompositeConditionFactory() , INSTANCE_1), controllerInstance_1.controllerClassName, (lastArg = s_3.composite , castTo($toArray(routeResult_2.parameterValues, initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 6, 1)), 7) , lastArg))) {
    compositeInstance = $getComposite(($clinit_CompositeFactory() , INSTANCE_2), controllerInstance_1.controllerClassName, s_3.composite, s_3.selector, s_3.scopeGlobal, routeResult_2.parameterKeys, routeResult_2.parameterValues);
    if (!compositeInstance) {
      $doFire(this$static.eventBus, $addMessage($sdmOnly(($clinit_LogEvent() , new LogEvent), true), 'controller >>' + $getCanonicalName(controllerInstance_1.controller_0.___clazz) + '<< --> compositeController >>' + s_3.compositeName + '<< not found'));
    }
     else {
      $add_0(compositeControllers_3, compositeInstance.composite);
      $setRouter(compositeInstance.composite, this$static);
      $putStringValue(controllerInstance_1.controller_0.compositeControllers, s_3.compositeName, compositeInstance.composite);
    }
  }
}

function $parse(this$static, route){
  var decodedUrl;
  decodedUrl = $wnd.goog.global.decodeURI(route);
  return $parse_0(($clinit_RouteParser() , INSTANCE_7), decodedUrl, this$static.shellConfiguration, this$static.routerConfiguration);
}

function $pimpUpHashForLoopDetection(hash){
  var value_0;
  value_0 = hash;
  $equals_1(value_0.substr(0, 1), '#') && (value_0 = (checkCriticalStringElementIndex(1, value_0.length + 1) , value_0.substr(1)));
  $equals_1(value_0.substr(0, 1), '/') && (value_0 = (checkCriticalStringElementIndex(1, value_0.length + 1) , value_0.substr(1)));
  return value_0;
}

function $postProcessHandleRouting(this$static, hash, routeResult, routeConfigurations){
  var routeConfiguration, routeConfiguration$iterator;
  for (routeConfiguration$iterator = routeConfigurations.iterator(); routeConfiguration$iterator.hasNext_0();) {
    routeConfiguration = castTo(routeConfiguration$iterator.next_1(), 37);
    $getStringValue(this$static.activeComponents, routeConfiguration.selector) == null && $controller(($clinit_ControllerFactory() , INSTANCE_3), routeConfiguration.route, routeConfiguration.className, new AbstractRouter$3(this$static, hash, routeResult, routeConfiguration), routeResult.parameterKeys, routeResult.parameterValues);
  }
  ($clinit_SeoDataProvider() , INSTANCE_8).seoData = new SeoData;
  $fireDoneRoutingEvent(($clinit_RouterStateEventFactory() , INSTANCE_5), routeResult.route, castTo($toArray(routeResult.parameterValues, initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 6, 1)), 7));
}

function $route(this$static, newRoute, forceRouting, replaceState, params){
  var newRouteWithParams;
  newRouteWithParams = $generate(($clinit_RouteParser() , INSTANCE_7), newRoute, params);
  route_0(newRouteWithParams, replaceState);
  $handleRouting(this$static, newRouteWithParams, forceRouting);
}

function $route_0(this$static, newRoute, params){
  newRoute = $cleanRoute(newRoute);
  $route(this$static, newRoute, false, false, params);
}

function $setEventBus_2(this$static, eventBus){
  this$static.eventBus = eventBus;
}

function $stopController_0(this$static, routeConfigurations, replaceShell){
  var controllerList;
  controllerList = new ArrayList;
  replaceShell?$addAll_0(controllerList, castTo($collect($map(new StreamImpl(null, new Spliterators$IteratorSpliterator(new AbstractMap$2(this$static.activeComponents), 0)), new AbstractRouter$10methodref$getController$Type), of_1(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$42$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_0, 29, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)]))), 41)):$addAll_0(controllerList, castTo($collect($map($filter_0($map(routeConfigurations.stream(), new AbstractRouter$lambda$22$Type(this$static)), new AbstractRouter$11methodref$nonNull$Type), new AbstractRouter$12methodref$getController$Type), of_1(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$42$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_0, 29, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)]))), 41));
  $forEach_0(controllerList, new AbstractRouter$lambda$25$Type(this$static, controllerList));
}

function $unbindController(this$static, hash, routeResult, routeConfigurations){
  var instances;
  instances = castTo($collect($filter_0($map(routeConfigurations.stream(), new AbstractRouter$lambda$1$Type(this$static)), new AbstractRouter$0methodref$nonNull$Type), of_1(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$42$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_0, 29, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)]))), 18);
  if (instances.size() == 0) {
    $doRouting_0(this$static, hash, routeResult, routeConfigurations);
  }
   else {
    this$static.callCounter = instances.size();
    instances.forEach_0(new AbstractRouter$lambda$3$Type(this$static, hash, routeResult, routeConfigurations));
  }
}

function lambda$0_1(sb_0, p_1){
  return $append_4($append_4((sb_0.string += '>>' , sb_0), p_1), '<< ');
}

function lambda$12(messageList_0, c_1){
  var optional;
  optional = $findFirst($filter_0($map(new StreamImpl(null, new Spliterators$IteratorSpliterator(new AbstractMap$2(c_1.controller_0.compositeControllers), 0)), new AbstractRouter$5methodref$mayStop$Type), new AbstractRouter$6methodref$nonNull$Type));
  $ifPresent(optional, new AbstractRouter$7methodref$add$Type(messageList_0));
}

function lambda$26(controller_0, handlingModeReuse_1, s_2){
  if (controller_0.cached || handlingModeReuse_1) {
    $deactivateCompositeController((!instance_0 && (instance_0 = new Utils) , s_2));
  }
   else {
    $deactivateCompositeController((!instance_0 && (instance_0 = new Utils) , s_2));
    s_2.cached || $stopCompositeController((!instance_0 && (instance_0 = new Utils) , s_2));
  }
}

function lambda$32(c_0){
  !c_0.activateNaluCommand || c_0.activateNaluCommand.execute();
}

function lambda$33(c_0){
  !c_0.activateNaluCommand || c_0.activateNaluCommand.execute();
}

function lambda$34(c_0){
  c_0.cached || c_0.cachedGlobal && (c_0.cached = true);
  !c_0.activateNaluCommand || c_0.activateNaluCommand.execute();
}

function lambda$6(s_0){
  $deactivateCompositeController((!instance_0 && (instance_0 = new Utils) , s_0));
  s_0.cached || $stopCompositeController((!instance_0 && (instance_0 = new Utils) , s_0));
}

defineClass(343, 1, {});
_.callCounter = 0;
_.currentRoute = '';
_.lastExecutedHash = '';
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter', 343);
function AbstractRouter$0methodref$nonNull$Type(){
}

defineClass(349, 1, {}, AbstractRouter$0methodref$nonNull$Type);
_.test_0 = function test_0(arg0){
  return arg0 != null;
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$0methodref$nonNull$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/0methodref$nonNull$Type', 349);
function $onCancel(this$static){
  route_0(this$static.this$01.lastExecutedHash, false);
  this$static.this$01.loopDetectionList.array.length = 0;
  $fireCancelByUserRoutingEvent(($clinit_RouterStateEventFactory() , INSTANCE_5), this$static.val$routeResult3.route, castTo($toArray(this$static.val$routeResult3.parameterValues, initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 6, 1)), 7));
  $fireDoneRoutingEvent(INSTANCE_5, this$static.val$routeResult3.route, castTo($toArray(this$static.val$routeResult3.parameterValues, initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 6, 1)), 7));
}

function $onOk(this$static){
  $unbindController(this$static.this$01, this$static.val$finalHash2, this$static.val$routeResult3, this$static.val$routeConfigurations4);
}

function AbstractRouter$1(this$0, val$finalHash, val$routeResult, val$routeConfigurations){
  this.this$01 = this$0;
  this.val$finalHash2 = val$finalHash;
  this.val$routeResult3 = val$routeResult;
  this.val$routeConfigurations4 = val$routeConfigurations;
}

defineClass(347, 1, {}, AbstractRouter$1);
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$1_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/1', 347);
function AbstractRouter$10methodref$getController$Type(){
}

defineClass(367, 1, {}, AbstractRouter$10methodref$getController$Type);
_.apply_0 = function apply_1(arg0){
  return castTo(arg0, 46).controller_0;
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$10methodref$getController$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/10methodref$getController$Type', 367);
function AbstractRouter$11methodref$nonNull$Type(){
}

defineClass(369, 1, {}, AbstractRouter$11methodref$nonNull$Type);
_.test_0 = function test_1(arg0){
  return arg0 != null;
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$11methodref$nonNull$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/11methodref$nonNull$Type', 369);
function AbstractRouter$12methodref$getController$Type(){
}

defineClass(370, 1, {}, AbstractRouter$12methodref$getController$Type);
_.apply_0 = function apply_2(arg0){
  return castTo(arg0, 46).controller_0;
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$12methodref$getController$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/12methodref$getController$Type', 370);
function AbstractRouter$15methodref$isScopeGlobal$Type(){
}

defineClass(381, 1, {}, AbstractRouter$15methodref$isScopeGlobal$Type);
_.test_0 = function test_2(arg0){
  return castTo(arg0, 51).scopeGlobal;
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$15methodref$isScopeGlobal$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/15methodref$isScopeGlobal$Type', 381);
function AbstractRouter$16methodref$onAttach$Type(){
}

defineClass(382, 1, {}, AbstractRouter$16methodref$onAttach$Type);
_.accept = function accept_3(arg0){
  castTo(arg0, 39);
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$16methodref$onAttach$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/16methodref$onAttach$Type', 382);
function AbstractRouter$1methodref$mayStop$Type(){
}

defineClass(353, 1, {}, AbstractRouter$1methodref$mayStop$Type);
_.apply_0 = function apply_3(arg0){
  return castTo(arg0, 39) , null;
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$1methodref$mayStop$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/1methodref$mayStop$Type', 353);
function $lambda$0(this$static, routeResult_1, compositeControllers_2, s_2){
  var compositeInstance, lastArg;
  if ($loadComposite(($clinit_CompositeConditionFactory() , INSTANCE_1), $getCanonicalName(this$static.this$01.shell.___clazz), (lastArg = s_2.composite , castTo($toArray(routeResult_1.parameterValues, initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 6, 1)), 7) , lastArg))) {
    compositeInstance = $getComposite(($clinit_CompositeFactory() , INSTANCE_2), $getCanonicalName(this$static.this$01.shell.___clazz), s_2.composite, s_2.selector, s_2.scopeGlobal, routeResult_1.parameterKeys, routeResult_1.parameterValues);
    if (!compositeInstance) {
      $doFire(this$static.this$01.eventBus, $addMessage($sdmOnly(($clinit_LogEvent() , new LogEvent), true), 'controller >>' + $getCanonicalName(this$static.this$01.shell.___clazz) + '<< --> compositeController >>' + s_2.compositeName + '<< not found'));
    }
     else {
      $add_0(compositeControllers_2, compositeInstance.composite);
      $setRouter(compositeInstance.composite, this$static.this$01);
      $putStringValue(this$static.this$01.shell.compositeControllers, s_2.compositeName, compositeInstance.composite);
    }
  }
}

function $onFinish(this$static, shellInstance){
  var compositeController, compositeController$iterator, compositeControllers, compositeForShell, compositeInstance, compositeReference, compositeReference$iterator, globalComposite, lastArg, reference, routeConfiguration, routeConfiguration$iterator, sfc, sfc$iterator, sfc$iterator0, shellMatchingRouteConfigurations;
  !this$static.this$01.shell || this$static.this$01.shell.detachShell();
  this$static.this$01.shell = shellInstance.shell;
  this$static.this$01.lastAddedShell = this$static.val$routeResult2.shell;
  shellInstance.shell.attachShell();
  compositeControllers = new ArrayList;
  compositeForShell = $getCompositeForClassName(this$static.this$01, $getCanonicalName(this$static.this$01.shell.___clazz));
  if (compositeForShell.size() > 0) {
    compositeForShell.forEach_0(new AbstractRouter$2$lambda$0$Type(this$static, this$static.val$routeResult2, compositeControllers));
    for (compositeController$iterator = new ArrayList$1(compositeControllers); compositeController$iterator.i < compositeController$iterator.this$01.array.length;) {
      compositeController = castTo($next_0(compositeController$iterator), 39);
      reference = null;
      for (sfc$iterator0 = compositeForShell.iterator(); sfc$iterator0.hasNext_0();) {
        sfc = castTo(sfc$iterator0.next_1(), 51);
        if ($equals_1($getCanonicalName(compositeController.___clazz), sfc.composite)) {
          if (compositeController.selector != null) {
            if ($equals_1(compositeController.selector, sfc.selector)) {
              reference = sfc;
              break;
            }
          }
        }
      }
      if (!reference) {
        for (sfc$iterator = compositeForShell.iterator(); sfc$iterator.hasNext_0();) {
          sfc = castTo(sfc$iterator.next_1(), 51);
          if ($equals_1($getCanonicalName(compositeController.___clazz), sfc.composite)) {
            if (compositeController.selector == null) {
              reference = sfc;
              break;
            }
          }
        }
      }
      !!reference && $append(this$static.this$01, reference.selector, compositeController);
    }
    globalComposite = castTo($collect($filter_0(compositeForShell.stream(), new AbstractRouter$2$13methodref$isScopeGlobal$Type), of_1(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$42$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_0, 29, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)]))), 18);
    for (compositeReference$iterator = globalComposite.iterator(); compositeReference$iterator.hasNext_0();) {
      compositeReference = castTo(compositeReference$iterator.next_1(), 51);
      if ($loadComposite(($clinit_CompositeConditionFactory() , INSTANCE_1), $getCanonicalName(this$static.this$01.shell.___clazz), (lastArg = compositeReference.composite , castTo($toArray(this$static.val$routeResult2.parameterValues, initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 6, 1)), 7) , lastArg))) {
        compositeInstance = $getComposite(($clinit_CompositeFactory() , INSTANCE_2), $getCanonicalName(this$static.this$01.shell.___clazz), compositeReference.composite, compositeReference.selector, true, this$static.val$routeResult2.parameterKeys, this$static.val$routeResult2.parameterValues);
        $append(this$static.this$01, compositeReference.selector, compositeInstance.composite);
      }
    }
  }
  $forEach_0(compositeControllers, new AbstractRouter$2$14methodref$onAttach$Type);
  $forEach_0(compositeControllers, new AbstractRouter$2$lambda$3$Type);
  shellMatchingRouteConfigurations = $match_0(this$static.this$01.routerConfiguration, this$static.val$routeResult2.shell);
  for (routeConfiguration$iterator = shellMatchingRouteConfigurations.iterator(); routeConfiguration$iterator.hasNext_0();) {
    routeConfiguration = castTo(routeConfiguration$iterator.next_1(), 37);
    $handleRouteConfig(this$static.this$01, routeConfiguration, this$static.val$routeResult2, this$static.val$hash3);
  }
  $postProcessHandleRouting(this$static.this$01, this$static.val$hash3, this$static.val$routeResult2, this$static.val$routeConfigurations4);
}

function AbstractRouter$2(this$0, val$routeResult, val$hash, val$routeConfigurations){
  this.this$01 = this$0;
  this.val$routeResult2 = val$routeResult;
  this.val$hash3 = val$hash;
  this.val$routeConfigurations4 = val$routeConfigurations;
}

function lambda$3(c_0){
  c_0.cached || c_0.cachedGlobal && (c_0.cached = true);
  !c_0.activateNaluCommand || c_0.activateNaluCommand.execute();
}

defineClass(375, 1, {}, AbstractRouter$2);
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$2_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/2', 375);
function AbstractRouter$2$13methodref$isScopeGlobal$Type(){
}

defineClass(377, 1, {}, AbstractRouter$2$13methodref$isScopeGlobal$Type);
_.test_0 = function test_3(arg0){
  return castTo(arg0, 51).scopeGlobal;
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$2$13methodref$isScopeGlobal$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/2/13methodref$isScopeGlobal$Type', 377);
function AbstractRouter$2$14methodref$onAttach$Type(){
}

defineClass(378, 1, {}, AbstractRouter$2$14methodref$onAttach$Type);
_.accept = function accept_4(arg0){
  castTo(arg0, 39);
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$2$14methodref$onAttach$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/2/14methodref$onAttach$Type', 378);
function AbstractRouter$2$lambda$0$Type($$outer_0, routeResult_1, compositeControllers_2){
  this.$$outer_0 = $$outer_0;
  this.routeResult_1 = routeResult_1;
  this.compositeControllers_2 = compositeControllers_2;
}

defineClass(376, 1, {}, AbstractRouter$2$lambda$0$Type);
_.accept = function accept_5(arg0){
  $lambda$0(this.$$outer_0, this.routeResult_1, this.compositeControllers_2, castTo(arg0, 51));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$2$lambda$0$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/2/lambda$0$Type', 376);
function AbstractRouter$2$lambda$3$Type(){
}

defineClass(379, 1, {}, AbstractRouter$2$lambda$3$Type);
_.accept = function accept_6(arg0){
  lambda$3(castTo(arg0, 39));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$2$lambda$3$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/2/lambda$3$Type', 379);
function AbstractRouter$2methodref$nonNull$Type(){
}

defineClass(354, 1, {}, AbstractRouter$2methodref$nonNull$Type);
_.test_0 = function test_4(arg0){
  return arg0 != null;
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$2methodref$nonNull$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/2methodref$nonNull$Type', 354);
function AbstractRouter$3(this$0, val$hash, val$routeResult, val$routeConfiguration){
  this.this$01 = this$0;
  this.val$hash2 = val$hash;
  this.val$routeResult3 = val$routeResult;
  this.val$routeConfiguration4 = val$routeConfiguration;
}

defineClass(214, 1, {}, AbstractRouter$3);
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$3_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/3', 214);
function AbstractRouter$3methodref$add$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(355, 1, {}, AbstractRouter$3methodref$add$Type);
_.accept = function accept_7(arg0){
  $add_0(this.$$outer_0, castToString(arg0));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$3methodref$add$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/3methodref$add$Type', 355);
function AbstractRouter$4methodref$nonNull$Type(){
}

defineClass(357, 1, {}, AbstractRouter$4methodref$nonNull$Type);
_.test_0 = function test_5(arg0){
  return arg0 != null;
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$4methodref$nonNull$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/4methodref$nonNull$Type', 357);
function AbstractRouter$5methodref$mayStop$Type(){
}

defineClass(358, 1, {}, AbstractRouter$5methodref$mayStop$Type);
_.apply_0 = function apply_4(arg0){
  return castTo(arg0, 39) , null;
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$5methodref$mayStop$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/5methodref$mayStop$Type', 358);
function AbstractRouter$6methodref$nonNull$Type(){
}

defineClass(359, 1, {}, AbstractRouter$6methodref$nonNull$Type);
_.test_0 = function test_6(arg0){
  return arg0 != null;
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$6methodref$nonNull$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/6methodref$nonNull$Type', 359);
function AbstractRouter$7methodref$add$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(360, 1, {}, AbstractRouter$7methodref$add$Type);
_.accept = function accept_8(arg0){
  $add_0(this.$$outer_0, castToString(arg0));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$7methodref$add$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/7methodref$add$Type', 360);
function AbstractRouter$8methodref$nonNull$Type(){
}

defineClass(363, 1, {}, AbstractRouter$8methodref$nonNull$Type);
_.test_0 = function test_7(arg0){
  return arg0 != null;
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$8methodref$nonNull$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/8methodref$nonNull$Type', 363);
function AbstractRouter$9methodref$nonNull$Type(){
}

defineClass(365, 1, {}, AbstractRouter$9methodref$nonNull$Type);
_.test_0 = function test_8(arg0){
  return arg0 != null;
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$9methodref$nonNull$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/9methodref$nonNull$Type', 365);
function AbstractRouter$lambda$0$Type(sb_0){
  this.sb_0 = sb_0;
}

defineClass(346, 1, {}, AbstractRouter$lambda$0$Type);
_.accept = function accept_9(arg0){
  lambda$0_1(this.sb_0, castToString(arg0));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$0$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$0$Type', 346);
function AbstractRouter$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(348, 1, {}, AbstractRouter$lambda$1$Type);
_.apply_0 = function apply_5(arg0){
  return $lambda$1_1(this.$$outer_0, castTo(arg0, 37));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$1$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$1$Type', 348);
function AbstractRouter$lambda$10$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(356, 1, {}, AbstractRouter$lambda$10$Type);
_.apply_0 = function apply_6(arg0){
  return $lambda$10(this.$$outer_0, castTo(arg0, 37));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$10$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$10$Type', 356);
function AbstractRouter$lambda$12$Type(messageList_0){
  this.messageList_0 = messageList_0;
}

defineClass(361, 1, {}, AbstractRouter$lambda$12$Type);
_.accept = function accept_10(arg0){
  lambda$12(this.messageList_0, castTo(arg0, 46));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$12$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$12$Type', 361);
function AbstractRouter$lambda$16$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(362, 1, {}, AbstractRouter$lambda$16$Type);
_.apply_0 = function apply_7(arg0){
  return $lambda$16(this.$$outer_0, castTo(arg0, 37));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$16$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$16$Type', 362);
function AbstractRouter$lambda$18$Type(){
}

defineClass(364, 1, {}, AbstractRouter$lambda$18$Type);
_.apply_0 = function apply_8(arg0){
  return castTo(arg0, 46) , null;
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$18$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$18$Type', 364);
function AbstractRouter$lambda$20$Type(messageList_0){
  this.messageList_0 = messageList_0;
}

defineClass(366, 1, {}, AbstractRouter$lambda$20$Type);
_.get_0 = function get_0(){
  return castToString($get_1(this.messageList_0, 0));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$20$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$20$Type', 366);
function AbstractRouter$lambda$22$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(368, 1, {}, AbstractRouter$lambda$22$Type);
_.apply_0 = function apply_9(arg0){
  return $lambda$22(this.$$outer_0, castTo(arg0, 37));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$22$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$22$Type', 368);
function AbstractRouter$lambda$25$Type($$outer_0, controllerList_1){
  this.$$outer_0 = $$outer_0;
  this.controllerList_1 = controllerList_1;
}

defineClass(374, 1, {}, AbstractRouter$lambda$25$Type);
_.accept = function accept_11(arg0){
  $lambda$25(this.$$outer_0, this.controllerList_1, castTo(arg0, 61));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$25$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$25$Type', 374);
function AbstractRouter$lambda$26$Type(controller_0, handlingModeReuse_1){
  this.controller_0 = controller_0;
  this.handlingModeReuse_1 = handlingModeReuse_1;
}

defineClass(371, 1, {}, AbstractRouter$lambda$26$Type);
_.accept = function accept_12(arg0){
  lambda$26(this.controller_0, this.handlingModeReuse_1, castTo(arg0, 39));
}
;
_.handlingModeReuse_1 = false;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$26$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$26$Type', 371);
function AbstractRouter$lambda$27$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(372, 1, {}, AbstractRouter$lambda$27$Type);
_.test_0 = function test_9(arg0){
  return $lambda$27(this.$$outer_0, castTo(arg0, 61));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$27$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$27$Type', 372);
function AbstractRouter$lambda$28$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(373, 1, {}, AbstractRouter$lambda$28$Type);
_.accept = function accept_13(arg0){
  $lambda$28(this.$$outer_0, castTo(arg0, 61));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$28$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$28$Type', 373);
function AbstractRouter$lambda$29$Type($$outer_0, controllerInstance_1, routeResult_2, compositeControllers_3){
  this.$$outer_0 = $$outer_0;
  this.controllerInstance_1 = controllerInstance_1;
  this.routeResult_2 = routeResult_2;
  this.compositeControllers_3 = compositeControllers_3;
}

defineClass(380, 1, {}, AbstractRouter$lambda$29$Type);
_.accept = function accept_14(arg0){
  $lambda$29(this.$$outer_0, this.controllerInstance_1, this.routeResult_2, this.compositeControllers_3, castTo(arg0, 51));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$29$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$29$Type', 380);
function AbstractRouter$lambda$3$Type($$outer_0, hash_1, routeResult_2, routeConfigurations_3){
  this.$$outer_0 = $$outer_0;
  this.hash_1 = hash_1;
  this.routeResult_2 = routeResult_2;
  this.routeConfigurations_3 = routeConfigurations_3;
}

defineClass(351, 1, {}, AbstractRouter$lambda$3$Type);
_.accept = function accept_15(arg0){
  var lastArg;
  $unbind(new AbstractRouter$lambda$4$Type(this.$$outer_0, this.hash_1, this.routeResult_2, (lastArg = this.routeConfigurations_3 , castTo(arg0, 46) , lastArg)));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$3$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$3$Type', 351);
function AbstractRouter$lambda$32$Type(){
}

defineClass(383, 1, {}, AbstractRouter$lambda$32$Type);
_.accept = function accept_16(arg0){
  lambda$32(castTo(arg0, 39));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$32$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$32$Type', 383);
function AbstractRouter$lambda$33$Type(){
}

defineClass(384, 1, {}, AbstractRouter$lambda$33$Type);
_.accept = function accept_17(arg0){
  lambda$33(castTo(arg0, 39));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$33$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$33$Type', 384);
function AbstractRouter$lambda$34$Type(){
}

defineClass(385, 1, {}, AbstractRouter$lambda$34$Type);
_.accept = function accept_18(arg0){
  lambda$34(castTo(arg0, 39));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$34$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$34$Type', 385);
function AbstractRouter$lambda$35$Type(className_0){
  this.className_0 = className_0;
}

defineClass(386, 1, {}, AbstractRouter$lambda$35$Type);
_.test_0 = function test_10(arg0){
  return $equals_1(this.className_0, castTo(arg0, 51).source_0);
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$35$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$35$Type', 386);
function AbstractRouter$lambda$4$Type($$outer_0, hash_1, routeResult_2, routeConfigurations_3){
  this.$$outer_0 = $$outer_0;
  this.hash_1 = hash_1;
  this.routeResult_2 = routeResult_2;
  this.routeConfigurations_3 = routeConfigurations_3;
}

defineClass(350, 1, {}, AbstractRouter$lambda$4$Type);
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$4$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$4$Type', 350);
function AbstractRouter$lambda$6$Type(){
}

defineClass(352, 1, {}, AbstractRouter$lambda$6$Type);
_.accept = function accept_19(arg0){
  lambda$6(castTo(arg0, 39));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$6$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$6$Type', 352);
function $match(this$static, route){
  var routeWithoutShell;
  if ($matchShell(this$static, route)) {
    return routeWithoutShell = route , $equals_1(routeWithoutShell.substr(0, 1), '/') && (routeWithoutShell = (checkCriticalStringElementIndex(1, routeWithoutShell.length + 1) , routeWithoutShell.substr(1))) , routeWithoutShell.indexOf('/') != -1?(routeWithoutShell = $substring(routeWithoutShell, routeWithoutShell.indexOf('/') + 1)):(routeWithoutShell = '') , $equals_1(this$static.routeWithoutShell, '/' + routeWithoutShell);
  }
  return false;
}

function $matchShell(this$static, route){
  var shellOfRoute;
  if (this$static.shell.contains('*')) {
    return true;
  }
  shellOfRoute = route;
  $equals_1(shellOfRoute.substr(0, 1), '/') && (shellOfRoute = (checkCriticalStringElementIndex(1, shellOfRoute.length + 1) , shellOfRoute.substr(1)));
  shellOfRoute.indexOf('/') != -1 && (shellOfRoute = $substring_0(shellOfRoute, 0, shellOfRoute.indexOf('/')));
  return this$static.shell.contains('/' + shellOfRoute);
}

function RouteConfig(route, parameters, selector, className){
  var shellFromRoute, suffixlength, tmpValue;
  this.shell = new ArrayList;
  this.route = route;
  this.parameters = parameters;
  this.selector = selector;
  this.className = className;
  tmpValue = route;
  $equals_1(tmpValue.substr(0, 1), '/') && (tmpValue = (checkCriticalStringElementIndex(1, tmpValue.length + 1) , tmpValue.substr(1)));
  shellFromRoute = '';
  if (tmpValue.indexOf('/') != -1) {
    shellFromRoute = $substring_0(tmpValue, 0, tmpValue.indexOf('/'));
    this.routeWithoutShell = $substring(tmpValue, tmpValue.indexOf('/'));
  }
   else {
    shellFromRoute = tmpValue;
    this.routeWithoutShell = '/';
  }
  $equals_1(shellFromRoute.substr(0, 1), '[') && (shellFromRoute = (checkCriticalStringElementIndex(1, shellFromRoute.length + 1) , shellFromRoute.substr(1)));
  suffixlength = ']'.length;
  $equals_1(shellFromRoute.substr(shellFromRoute.length - suffixlength, suffixlength), ']') && (shellFromRoute = $substring_0(shellFromRoute, 0, shellFromRoute.length - 1));
  shellFromRoute.indexOf('|') != -1?(this.shell = castTo($collect($map(new StreamImpl(null, new Spliterators$IteratorSpliterator(new Arrays$ArrayList($split_0(shellFromRoute, '\\|', 0)), 16)), new RouteConfig$lambda$0$Type), of_1(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$42$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_0, 29, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)]))), 18)):this.shell.add('/' + shellFromRoute);
}

defineClass(37, 1, {37:1}, RouteConfig);
var Lcom_github_nalukit_nalu_client_internal_route_RouteConfig_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'RouteConfig', 37);
function RouteConfig$lambda$0$Type(){
}

defineClass(410, 1, {}, RouteConfig$lambda$0$Type);
_.apply_0 = function apply_10(arg0){
  return '/' + castToString(arg0);
}
;
var Lcom_github_nalukit_nalu_client_internal_route_RouteConfig$lambda$0$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'RouteConfig/lambda$0$Type', 410);
function $clinit_RouteParser(){
  $clinit_RouteParser = emptyMethod;
  INSTANCE_7 = new RouteParser;
}

function $generate(this$static, route, params){
  var generatedRoute, i, numberOfPlaceHolders, parameterIndex, partsOfRoute, routeValue, s, s$array, s$index, s$max, sb, sbExeption, suffixlength;
  sb = new StringBuilder;
  routeValue = route;
  $equals_1(routeValue.substr(0, 1), '/') && (routeValue = (checkCriticalStringElementIndex(1, routeValue.length + 1) , routeValue.substr(1)));
  partsOfRoute = $split_0(routeValue, '/', 0);
  parameterIndex = 0;
  for (s$array = partsOfRoute , s$index = 0 , s$max = s$array.length; s$index < s$max; ++s$index) {
    s = s$array[s$index];
    sb.string += '/';
    if ($equals_1('*', s) || $equals_1(s.substr(0, 1), ':') || $equals_1(s.substr(0, 1), '{') && (suffixlength = '}'.length , $equals_1(s.substr(s.length - suffixlength, suffixlength), '}'))) {
      ($clinit_PropertyFactory() , INSTANCE).usingColonForParametersInUrl && (sb.string += ':' , sb);
      if (params.length - 1 >= parameterIndex) {
        params[parameterIndex] == null || $append_4(sb, $replace(params[parameterIndex], '/', '--U972--'));
        ++parameterIndex;
      }
    }
     else {
      sb.string += '' + s;
    }
  }
  numberOfPlaceHolders = $count($filter_0(new StreamImpl(null, spliterator_3(partsOfRoute, partsOfRoute.length)), new RouteParser$lambda$4$Type));
  if (gt(params.length, numberOfPlaceHolders)) {
    sbExeption = 'Warning: route >>' + route + '<< has less parameter placeholder >>' + toString_6(numberOfPlaceHolders) + '<< than the number of parameters in the list of parameters >>' + params.length + '<< --> adding Parameters add the end of the url';
    $doFire(this$static.eventBus, $addMessage($sdmOnly(($clinit_LogEvent() , new LogEvent), true), sbExeption));
    for (i = parameterIndex; i < params.length; i++) {
      sb.string += '/';
      ($clinit_PropertyFactory() , INSTANCE).usingColonForParametersInUrl && (sb.string += ':' , sb);
      params[parameterIndex] == null?(sb.string += 'null' , sb):$append_4(sb, $replace(params[parameterIndex], '/', '--U972--'));
      ++parameterIndex;
    }
  }
  generatedRoute = sb.string;
  $equals_1(generatedRoute.substr(0, 1), '/') && (generatedRoute = (checkCriticalStringElementIndex(1, generatedRoute.length + 1) , generatedRoute.substr(1)));
  return generatedRoute;
}

function $parse_0(this$static, route, shellConfiguration, routerConfiguration){
  var compareRoute, finalSearchPart, i, optional, optionalRouterConfig, parameterValue, partsOfRoute, partsOfRouteFromConfiguration, routeResult, routeValue, sb, searchRoute;
  routeResult = new RouteResult;
  routeValue = route;
  routeValue.indexOf('#') != -1 && (routeValue = $substring(routeValue, routeValue.indexOf('#') + 1));
  $equals_1(routeValue.substr(0, 1), '/') && (routeValue = (checkCriticalStringElementIndex(1, routeValue.length + 1) , routeValue.substr(1)));
  routeValue.indexOf('/') != -1?$setShell(routeResult, '/' + $substring_0(routeValue, 0, routeValue.indexOf('/'))):(routeResult.shell = '/' + routeValue);
  optional = $findFirst($filter_0($map(new StreamImpl(null, new Spliterators$IteratorSpliterator(shellConfiguration.shells, 16)), new RouteParser$0methodref$getRoute$Type), new RouteParser$lambda$1$Type(routeResult)));
  if (optional.ref != null) {
    $setShell(routeResult, (checkCriticalElement(optional.ref != null) , castToString(optional.ref)));
  }
   else {
    sb = new StringBuilder;
    $append_4($append_4((sb.string += 'no matching shellCreator found for route >>' , sb), route), '<< --> Routing aborted!');
    $doFire(this$static.eventBus, $addMessage($sdmOnly(($clinit_LogEvent() , new LogEvent), true), sb.string));
    throw toJs(new RouterException(sb.string));
  }
  routeValue = route;
  $equals_1(routeValue.substr(0, 1), '/') && (routeValue = (checkCriticalStringElementIndex(1, routeValue.length + 1) , routeValue.substr(1)));
  if (routeValue.indexOf('/') != -1) {
    searchRoute = routeValue;
    optionalRouterConfig = $findFirst($filter_0(new StreamImpl(null, new Spliterators$IteratorSpliterator(routerConfiguration.routers, 16)), new RouteParser$lambda$2$Type(searchRoute)));
    if (optionalRouterConfig.ref != null) {
      $setRoute(routeResult, (checkCriticalElement(optionalRouterConfig.ref != null) , castTo(optionalRouterConfig.ref, 37)).route);
      $setParameterKeys(routeResult, (checkCriticalElement(optionalRouterConfig.ref != null) , castTo(optionalRouterConfig.ref, 37)).parameters);
      if (routeResult.route.indexOf('*') != -1) {
        partsOfRoute = $split_0(routeValue, '/', 0);
        compareRoute = (checkCriticalElement(optionalRouterConfig.ref != null) , castTo(optionalRouterConfig.ref, 37)).route;
        $equals_1(compareRoute.substr(0, 1), '/') && (compareRoute = (checkCriticalStringElementIndex(1, compareRoute.length + 1) , compareRoute.substr(1)));
        partsOfRouteFromConfiguration = $split_0(compareRoute, '/', 0);
        for (i = 0; i < partsOfRouteFromConfiguration.length; i++) {
          if ($equals_1(partsOfRouteFromConfiguration[i], '*')) {
            if (partsOfRoute.length - 1 >= i) {
              parameterValue = $replace(partsOfRoute[i], '--U972--', '/');
              ($clinit_PropertyFactory() , INSTANCE).usingColonForParametersInUrl && parameterValue.length > 0 && $equals_1(parameterValue.substr(0, 1), ':') && (parameterValue = (checkCriticalStringElementIndex(1, parameterValue.length + 1) , parameterValue.substr(1)));
              $add_0(routeResult.parameterValues, parameterValue);
            }
             else {
              $add_0(routeResult.parameterValues, '');
            }
          }
        }
      }
    }
     else {
      sb = new StringBuilder;
      $append_4($append_4((sb.string += 'no matching route found for route >>' , sb), route), '<< --> Routing aborted!');
      $doFire(this$static.eventBus, $addMessage($sdmOnly(($clinit_LogEvent() , new LogEvent), true), sb.string));
      throw toJs(new RouterException(sb.string));
    }
  }
   else {
    finalSearchPart = '/' + routeValue;
    if ($anyMatch(new StreamImpl(null, new Spliterators$IteratorSpliterator(routerConfiguration.routers, 16)), new RouteParser$lambda$3$Type(finalSearchPart))) {
      routeResult.route = '/' + routeValue;
    }
     else {
      sb = new StringBuilder;
      $append_4($append_4((sb.string += 'no matching route for hash >>' , sb), route), '<< --> Routing aborted!');
      $doFire(this$static.eventBus, $addMessage($sdmOnly(($clinit_LogEvent() , new LogEvent), true), sb.string));
      throw toJs(new RouterException(sb.string));
    }
  }
  return routeResult;
}

function $setEventBus_3(this$static, eventBus){
  this$static.eventBus = eventBus;
}

function RouteParser(){
}

function lambda$1(routeResult_0, f_1){
  $clinit_RouteParser();
  return $equals_1(f_1, routeResult_0.shell);
}

function lambda$3_0(finalSearchPart_0, f_1){
  $clinit_RouteParser();
  return $match(f_1, finalSearchPart_0);
}

function lambda$4(s_0){
  $clinit_RouteParser();
  var suffixlength;
  return $equals_1('*', s_0) || $equals_1(s_0.substr(0, 1), ':') || $equals_1(s_0.substr(0, 1), '{') && (suffixlength = '}'.length , $equals_1(s_0.substr(s_0.length - suffixlength, suffixlength), '}'));
}

defineClass(330, 1, {}, RouteParser);
var INSTANCE_7;
var Lcom_github_nalukit_nalu_client_internal_route_RouteParser_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'RouteParser', 330);
function RouteParser$0methodref$getRoute$Type(){
}

defineClass(331, 1, {}, RouteParser$0methodref$getRoute$Type);
_.apply_0 = function apply_11(arg0){
  return castTo(arg0, 70).route;
}
;
var Lcom_github_nalukit_nalu_client_internal_route_RouteParser$0methodref$getRoute$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'RouteParser/0methodref$getRoute$Type', 331);
function RouteParser$lambda$1$Type(routeResult_0){
  this.routeResult_0 = routeResult_0;
}

defineClass(332, 1, {}, RouteParser$lambda$1$Type);
_.test_0 = function test_11(arg0){
  return lambda$1(this.routeResult_0, castToString(arg0));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_RouteParser$lambda$1$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'RouteParser/lambda$1$Type', 332);
function RouteParser$lambda$2$Type(searchRoute_0){
  this.searchRoute_0 = searchRoute_0;
}

defineClass(333, 1, {}, RouteParser$lambda$2$Type);
_.test_0 = function test_12(arg0){
  return $clinit_RouteParser() , match_1(this.searchRoute_0, castTo(arg0, 37).route);
}
;
var Lcom_github_nalukit_nalu_client_internal_route_RouteParser$lambda$2$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'RouteParser/lambda$2$Type', 333);
function RouteParser$lambda$3$Type(finalSearchPart_0){
  this.finalSearchPart_0 = finalSearchPart_0;
}

defineClass(334, 1, {}, RouteParser$lambda$3$Type);
_.test_0 = function test_13(arg0){
  return lambda$3_0(this.finalSearchPart_0, castTo(arg0, 37));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_RouteParser$lambda$3$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'RouteParser/lambda$3$Type', 334);
function RouteParser$lambda$4$Type(){
}

defineClass(335, 1, {}, RouteParser$lambda$4$Type);
_.test_0 = function test_14(arg0){
  return lambda$4(castToString(arg0));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_RouteParser$lambda$4$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'RouteParser/lambda$4$Type', 335);
function $setParameterKeys(this$static, parameterKeys){
  this$static.parameterKeys = parameterKeys;
}

function $setRoute(this$static, route){
  this$static.route = route;
}

function $setShell(this$static, shell){
  this$static.shell = shell;
}

function RouteResult(){
  this.parameterKeys = new ArrayList;
  this.parameterValues = new ArrayList;
}

defineClass(463, 1, {}, RouteResult);
var Lcom_github_nalukit_nalu_client_internal_route_RouteResult_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'RouteResult', 463);
function $match_0(this$static, hash){
  return castTo($collect($filter_0(new StreamImpl(null, new Spliterators$IteratorSpliterator(this$static.routers, 16)), new RouterConfiguration$lambda$0$Type(hash)), of_1(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$42$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_0, 29, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)]))), 18);
}

function RouterConfiguration(){
  this.routers = new ArrayList;
  this.filters = new ArrayList;
}

function lambda$0_2(hash_0, routeConfig_1){
  return $match(routeConfig_1, hash_0);
}

defineClass(325, 1, {}, RouterConfiguration);
var Lcom_github_nalukit_nalu_client_internal_route_RouterConfiguration_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'RouterConfiguration', 325);
function RouterConfiguration$lambda$0$Type(hash_0){
  this.hash_0 = hash_0;
}

defineClass(326, 1, {}, RouterConfiguration$lambda$0$Type);
_.test_0 = function test_15(arg0){
  return lambda$0_2(this.hash_0, castTo(arg0, 37));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_RouterConfiguration$lambda$0$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'RouterConfiguration/lambda$0$Type', 326);
function RouterException(message){
  Exception.call(this, message);
}

defineClass(84, 16, {84:1, 4:1, 16:1, 9:1}, RouterException);
var Lcom_github_nalukit_nalu_client_internal_route_RouterException_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'RouterException', 84);
function RouterImpl(plugin, shellConfiguration, routerConfiguration, compositeReferences, startRoute, illegalRouteTarget){
  this.compositeReferences = compositeReferences;
  this.shellConfiguration = shellConfiguration;
  this.routerConfiguration = routerConfiguration;
  this.plugin = plugin;
  this.activeComponents = new HashMap;
  this.loopDetectionList = new ArrayList;
  $register(($clinit_PropertyFactory() , INSTANCE), startRoute, illegalRouteTarget);
  $register_3(new RouterImpl$lambda$0$Type(this));
}

defineClass(344, 343, {}, RouterImpl);
var Lcom_github_nalukit_nalu_client_internal_route_RouterImpl_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'RouterImpl', 344);
function RouterImpl$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(345, 1, {}, RouterImpl$lambda$0$Type);
var Lcom_github_nalukit_nalu_client_internal_route_RouterImpl$lambda$0$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'RouterImpl/lambda$0$Type', 345);
function $match_1(route, withRoute){
  return $match_2((!instance_1 && (instance_1 = new RouterUtils) , route), withRoute);
}

function $match_2(route, withRoute){
  var i, partsOfRoute, partsOfWithRoute;
  partsOfRoute = $split((!instance_1 && (instance_1 = new RouterUtils) , route));
  partsOfWithRoute = $split((!instance_1 && (instance_1 = new RouterUtils) , withRoute));
  if (partsOfRoute.length > partsOfWithRoute.length) {
    return false;
  }
  if (($clinit_PropertyFactory() , INSTANCE).usingColonForParametersInUrl) {
    for (i = 0; i < partsOfRoute.length; i++) {
      if ($startsWith(partsOfRoute[i], ':')) {
        if (partsOfWithRoute.length > i) {
          if (!$equals_1('*', partsOfWithRoute[i])) {
            return false;
          }
        }
         else {
          return false;
        }
      }
       else {
        if (partsOfWithRoute.length > i) {
          if (!$equals_1(partsOfRoute[i], partsOfWithRoute[i])) {
            return false;
          }
        }
         else {
          return false;
        }
      }
      if (partsOfRoute.length - 1 == i) {
        if (partsOfWithRoute.length > partsOfRoute.length) {
          return $onlyParameterAddEnd((!instance_1 && (instance_1 = new RouterUtils) , partsOfWithRoute), i + 1);
        }
      }
    }
  }
   else {
    for (i = 0; i < partsOfRoute.length; i++) {
      if (!$equals_1(partsOfWithRoute[i], partsOfRoute[i])) {
        if (!$equals_1('*', partsOfWithRoute[i])) {
          return false;
        }
      }
      if (partsOfRoute.length - 1 == i) {
        if (partsOfWithRoute.length > partsOfRoute.length) {
          return $onlyParameterAddEnd((!instance_1 && (instance_1 = new RouterUtils) , partsOfWithRoute), i + 1);
        }
      }
    }
  }
  return true;
}

function $onlyParameterAddEnd(partsOfRoute, index_0){
  var i;
  for (i = index_0; i < partsOfRoute.length; i++) {
    if (!$equals_1('*', partsOfRoute[i])) {
      return false;
    }
  }
  return true;
}

function $split(route){
  if ($equals_1(route.substr(0, 1), '/')) {
    if (route.length > 1) {
      return $split_0((checkCriticalStringElementIndex(1, route.length + 1) , route.substr(1)), '/', 0);
    }
    return stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['']);
  }
   else {
    return $split_0(route, '/', 0);
  }
}

function RouterUtils(){
}

defineClass(110, 1, {}, RouterUtils);
var instance_1;
var Lcom_github_nalukit_nalu_client_internal_route_RouterUtils_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'RouterUtils', 110);
function ShellConfig(route, className){
  this.route = route;
  this.className = className;
}

defineClass(70, 1, {70:1}, ShellConfig);
var Lcom_github_nalukit_nalu_client_internal_route_ShellConfig_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'ShellConfig', 70);
function $match_3(this$static, hash){
  return castTo($get_5($findFirst($filter_0(new StreamImpl(null, new Spliterators$IteratorSpliterator(this$static.shells, 16)), new ShellConfiguration$lambda$0$Type(hash)))), 70);
}

function ShellConfiguration(){
  this.shells = new ArrayList;
}

function lambda$0_3(hash_0, shellConfig_1){
  return $equals_1(shellConfig_1.route, hash_0);
}

defineClass(323, 1, {}, ShellConfiguration);
var Lcom_github_nalukit_nalu_client_internal_route_ShellConfiguration_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'ShellConfiguration', 323);
function ShellConfiguration$lambda$0$Type(hash_0){
  this.hash_0 = hash_0;
}

defineClass(324, 1, {}, ShellConfiguration$lambda$0$Type);
_.test_0 = function test_16(arg0){
  return lambda$0_3(this.hash_0, castTo(arg0, 70));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_ShellConfiguration$lambda$0$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'ShellConfiguration/lambda$0$Type', 324);
function getRouteWithoutShellAndParameter(route){
  var routeWithoutShell;
  routeWithoutShell = route;
  $equals_1(routeWithoutShell.substr(0, 1), '/') && (routeWithoutShell = (checkCriticalStringElementIndex(1, routeWithoutShell.length + 1) , routeWithoutShell.substr(1)));
  if (routeWithoutShell.indexOf('/') != -1) {
    routeWithoutShell = $substring(routeWithoutShell, routeWithoutShell.indexOf('/'));
  }
   else {
    return '';
  }
  routeWithoutShell.indexOf('/') != -1 && (routeWithoutShell = (checkCriticalStringElementIndex(1, routeWithoutShell.length + 1) , routeWithoutShell.substr(1)));
  routeWithoutShell.indexOf('/:') != -1 && (routeWithoutShell = $substring_0(routeWithoutShell, 0, routeWithoutShell.indexOf('/:')));
  return routeWithoutShell;
}

function lambda$0_4(shellOfRoute_0, s_1){
  return $equals_1(s_1.route, '/' + shellOfRoute_0);
}

function validateRoute(shellConfiguration, routerConfiguration, route){
  var finalSearchRoute, optionalRoute, optionalShell, routeWithoutShell, searchRoute, shellOfRoute, shell;
  shellOfRoute = (shell = route , $equals_1(shell.substr(0, 1), '/') && (shell = (checkCriticalStringElementIndex(1, shell.length + 1) , shell.substr(1))) , shell.indexOf('/') != -1?$substring_0(shell, 0, shell.indexOf('/')):shell);
  routeWithoutShell = getRouteWithoutShellAndParameter(route);
  optionalShell = $findFirst($filter_0(new StreamImpl(null, new Spliterators$IteratorSpliterator(shellConfiguration.shells, 16)), new RouteValidation$lambda$0$Type(shellOfRoute)));
  if (optionalShell.ref == null) {
    return false;
  }
  searchRoute = '/' + shellOfRoute;
  $trim(routeWithoutShell).length > 0 && (searchRoute = searchRoute + '/' + routeWithoutShell);
  finalSearchRoute = searchRoute;
  optionalRoute = $findFirst($filter_0(new StreamImpl(null, new Spliterators$IteratorSpliterator(routerConfiguration.routers, 16)), new RouteValidation$lambda$1$Type(finalSearchRoute)));
  return optionalRoute.ref != null;
}

function RouteValidation$lambda$0$Type(shellOfRoute_0){
  this.shellOfRoute_0 = shellOfRoute_0;
}

defineClass(460, 1, {}, RouteValidation$lambda$0$Type);
_.test_0 = function test_17(arg0){
  return lambda$0_4(this.shellOfRoute_0, castTo(arg0, 70));
}
;
var Lcom_github_nalukit_nalu_client_internal_validation_RouteValidation$lambda$0$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.validation', 'RouteValidation/lambda$0$Type', 460);
function RouteValidation$lambda$1$Type(finalSearchRoute_0){
  this.finalSearchRoute_0 = finalSearchRoute_0;
}

defineClass(461, 1, {}, RouteValidation$lambda$1$Type);
_.test_0 = function test_18(arg0){
  return match_1(this.finalSearchRoute_0, castTo(arg0, 37).route);
}
;
var Lcom_github_nalukit_nalu_client_internal_validation_RouteValidation$lambda$1$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.validation', 'RouteValidation/lambda$1$Type', 461);
function SeoData(){
}

defineClass(220, 1, {}, SeoData);
var Lcom_github_nalukit_nalu_client_seo_SeoData_2_classLit = createForClass('com.github.nalukit.nalu.client.seo', 'SeoData', 220);
function $clinit_SeoDataProvider(){
  $clinit_SeoDataProvider = emptyMethod;
  INSTANCE_8 = new SeoDataProvider;
}

function SeoDataProvider(){
  this.seoData = new SeoData;
}

defineClass(337, 1, {}, SeoDataProvider);
var INSTANCE_8;
var Lcom_github_nalukit_nalu_client_seo_SeoDataProvider_2_classLit = createForClass('com.github.nalukit.nalu.client.seo', 'SeoDataProvider', 337);
function $cleanRoute(route){
  var cleanedRoute, positionHash;
  if (($clinit_PropertyFactory() , INSTANCE).usingHash) {
    return route;
  }
  if (route == null) {
    return '';
  }
  cleanedRoute = route;
  positionHash = route.indexOf('#');
  positionHash > -1 && (cleanedRoute = (checkCriticalStringBounds(0, positionHash, route.length) , route.substr(0, positionHash)));
  return cleanedRoute;
}

function $compareRoutes(route01, route02){
  var convertedRoute01, convertedRoute02;
  convertedRoute01 = $convertRoute(route01);
  convertedRoute02 = $convertRoute(route02);
  return $equals_1(convertedRoute01, convertedRoute02);
}

function $convertRoute(route){
  var i, newRoute, s, splits, suffixlength, suffixlength0;
  if (route == null) {
    return '';
  }
  if ($equals_1('/', route)) {
    return route;
  }
  splits = $split_0(route, '/', 0);
  newRoute = new StringBuilder;
  for (i = 1; i < splits.length; i++) {
    s = splits[i];
    s == null || ($equals_1('*', s) || $equals_1(s.substr(0, 1), '{') && (suffixlength0 = '}'.length , $equals_1(s.substr(s.length - suffixlength0, suffixlength0), '}'))?(newRoute.string += '/*' , newRoute):$equals_1(s.substr(0, 1), ':') || $equals_1(s.substr(0, 1), '{') && (suffixlength = '}'.length , $equals_1(s.substr(s.length - suffixlength, suffixlength), '}'))?(newRoute.string += '/*' , newRoute):$append_4((newRoute.string += '/' , newRoute), s));
  }
  return newRoute.string;
}

defineClass(825, 1, {});
var Lcom_github_nalukit_nalu_plugin_core_web_client_AbstractClientLogger_2_classLit = createForClass('com.github.nalukit.nalu.plugin.core.web.client', 'AbstractClientLogger', 825);
function addPopStateHandler(handler, contextPath){
  ($clinit_DomGlobal() , $wnd.goog.global.window).onpopstate = makeLambdaFunction(NaluPluginCoreWeb$lambda$3$Type.prototype.onInvoke, NaluPluginCoreWeb$lambda$3$Type, [contextPath, handler]);
}

function getContextPath(shellConfiguration){
  var context, location_0, optional, partOfContext, partOfContext$array, partOfContext$index, partOfContext$max, pathName;
  if (($clinit_PropertyFactory() , INSTANCE).usingHash) {
    return;
  }
  location_0 = ($clinit_DomGlobal() , location_1);
  pathName = location_0.pathname;
  $equals_1(pathName.substr(0, 1), '/') && pathName.length > 1 && (pathName = (checkCriticalStringElementIndex(1, pathName.length + 1) , pathName.substr(1)));
  if (pathName.indexOf('.') != -1) {
    if (pathName.indexOf('/') != -1) {
      pathName = $substring_0(pathName, 0, pathName.lastIndexOf('/'));
      context = new StringBuilder;
      for (partOfContext$array = $split_0(pathName, '/', 0) , partOfContext$index = 0 , partOfContext$max = partOfContext$array.length; partOfContext$index < partOfContext$max; ++partOfContext$index) {
        partOfContext = partOfContext$array[partOfContext$index];
        optional = $findFirst($filter_0($map(new StreamImpl(null, new Spliterators$IteratorSpliterator(shellConfiguration.shells, 16)), new NaluPluginCoreWeb$0methodref$getRoute$Type), new NaluPluginCoreWeb$lambda$1$Type(partOfContext)));
        if (optional.ref != null) {
          break;
        }
         else {
          context.string.length > 0 && (context.string += '/' , context);
          context.string += '' + partOfContext;
        }
      }
      $setContextPath(INSTANCE, context.string);
    }
     else {
      INSTANCE.contextPath = '';
    }
  }
  INSTANCE.contextPath = '';
}

function getHashValue(hash){
  if (hash != null) {
    if ($equals_1(hash.substr(0, 1), '#')) {
      return hash.length > 1?(checkCriticalStringElementIndex(1, hash.length + 1) , hash.substr(1)):'';
    }
  }
  return null;
}

function getNaluStartModel(){
  var location_0, newUrl, queryParameters, search, startRoute, suffixlength;
  location_0 = ($clinit_DomGlobal() , location_1);
  queryParameters = new HashMap;
  search = location_0.search;
  if (search != null) {
    $equals_1(search.substr(0, 1), '?') && (search = (checkCriticalStringElementIndex(1, search.length + 1) , search.substr(1)));
    $forEach_3(stream_0($split_0(search, '&', 0)), new NaluPluginCoreWeb$lambda$2$Type(queryParameters));
  }
  if (($clinit_PropertyFactory() , INSTANCE).usingHash) {
    startRoute = getHashValue(location_0.hash);
  }
   else {
    startRoute = castToString(queryParameters.stringMap.backingMap.get('uri'));
    if (startRoute == null) {
      startRoute = '';
    }
     else {
      $equals_1(startRoute.substr(0, 1), '/') && startRoute.length > 1 && (startRoute = (checkCriticalStringElementIndex(1, startRoute.length + 1) , startRoute.substr(1)));
      $startsWith(startRoute, INSTANCE.contextPath) && (startRoute = $substring(startRoute, INSTANCE.contextPath.length));
      $equals_1(startRoute.substr(0, 1), '/') && (startRoute = (checkCriticalStringElementIndex(1, startRoute.length + 1) , startRoute.substr(1)));
      suffixlength = '/'.length;
      $equals_1(startRoute.substr(startRoute.length - suffixlength, suffixlength), '/') && (startRoute = $substring_0(startRoute, 0, startRoute.length - 1));
    }
  }
  if (INSTANCE.removeUrlParameterAtStart) {
    if (queryParameters.hashCodeMap.size_0 + queryParameters.stringMap.size_0 != 0) {
      newUrl = null;
      if (startRoute != null) {
        location_0.href.indexOf('?') != -1 && (INSTANCE.usingHash?(newUrl = location_0.origin + ('' + location_0.pathname) + '#' + startRoute):(newUrl = location_0.origin + '/' + startRoute));
        $wnd.goog.global.window.history.replaceState(newUrl, document_0.title, newUrl);
      }
    }
  }
  return new NaluStartModel(startRoute);
}

function handleChange(handler, newUrl){
  $equals_1(newUrl.substr(0, 1), '#') && (newUrl = (checkCriticalStringElementIndex(1, newUrl.length + 1) , newUrl.substr(1)));
  $trim(newUrl).length == 0?route_0(($clinit_PropertyFactory() , INSTANCE).startRoute, !INSTANCE.stayOnSide):$handleRouting(handler.$$outer_0, newUrl, false);
}

function lambda$1_0(partOfContext_0, f_1){
  return $equals_1(f_1, '/' + partOfContext_0);
}

function lambda$2(queryParameters_0, s_1){
  var split_0;
  split_0 = $split_0(s_1, '=', 0);
  split_0.length == 1?$putStringValue(queryParameters_0, split_0[0], ''):split_0.length == 2 && $putStringValue(queryParameters_0, split_0[0], split_0[1]);
}

function lambda$3_1(contextPath_0, handler_1, e_2){
  var event_0, location_0, newUrl;
  if (($clinit_PropertyFactory() , INSTANCE).usingHash) {
    location_0 = ($clinit_DomGlobal() , location_1);
    newUrl = location_0.hash;
  }
   else {
    event_0 = castToNative(e_2, $wnd.PopStateEvent);
    newUrl = castToString(event_0.state);
    if (newUrl == null || $trim(newUrl).length == 0) {
      return null;
    }
  }
  newUrl.length > 1 && $equals_1(newUrl.substr(0, 1), '/') && (newUrl = (checkCriticalStringElementIndex(1, newUrl.length + 1) , newUrl.substr(1)));
  contextPath_0 == null || newUrl.length > contextPath_0.length && (newUrl = $substring(newUrl, contextPath_0.length));
  handleChange(handler_1, newUrl);
  return null;
}

function lambda$4_0(handler_0){
  var location_0, newUrl;
  location_0 = ($clinit_DomGlobal() , location_1);
  newUrl = location_0.hash;
  handleChange(handler_0, newUrl);
  return null;
}

function route_0(newRoute, replace){
  var newRouteToken;
  if (($clinit_PropertyFactory() , INSTANCE).usingHash) {
    newRouteToken = $equals_1(newRoute.substr(0, 1), '#')?newRoute:'#' + newRoute;
  }
   else {
    newRouteToken = '/';
    INSTANCE.contextPath.length == 0 || (newRouteToken = newRouteToken + ('' + INSTANCE.contextPath) + '/');
    newRouteToken = newRouteToken + ('' + newRoute);
  }
  INSTANCE.hasHistory?replace?($clinit_DomGlobal() , $wnd.goog.global.window).history.replaceState(newRouteToken, document_0.title, newRouteToken):($clinit_DomGlobal() , $wnd.goog.global.window).history.pushState(newRouteToken, document_0.title, newRouteToken):($clinit_DomGlobal() , $wnd.goog.global.window).history.pushState('', document_0.title, $wnd.goog.global.window.location.pathname);
}

function NaluPluginCoreWeb$0methodref$getRoute$Type(){
}

defineClass(412, 1, {}, NaluPluginCoreWeb$0methodref$getRoute$Type);
_.apply_0 = function apply_12(arg0){
  return castTo(arg0, 70).route;
}
;
var Lcom_github_nalukit_nalu_plugin_core_web_client_NaluPluginCoreWeb$0methodref$getRoute$Type_2_classLit = createForClass('com.github.nalukit.nalu.plugin.core.web.client', 'NaluPluginCoreWeb/0methodref$getRoute$Type', 412);
function NaluPluginCoreWeb$lambda$1$Type(partOfContext_0){
  this.partOfContext_0 = partOfContext_0;
}

defineClass(413, 1, {}, NaluPluginCoreWeb$lambda$1$Type);
_.test_0 = function test_19(arg0){
  return lambda$1_0(this.partOfContext_0, castToString(arg0));
}
;
var Lcom_github_nalukit_nalu_plugin_core_web_client_NaluPluginCoreWeb$lambda$1$Type_2_classLit = createForClass('com.github.nalukit.nalu.plugin.core.web.client', 'NaluPluginCoreWeb/lambda$1$Type', 413);
function NaluPluginCoreWeb$lambda$2$Type(queryParameters_0){
  this.queryParameters_0 = queryParameters_0;
}

defineClass(414, 1, {}, NaluPluginCoreWeb$lambda$2$Type);
_.accept = function accept_20(arg0){
  lambda$2(this.queryParameters_0, castToString(arg0));
}
;
var Lcom_github_nalukit_nalu_plugin_core_web_client_NaluPluginCoreWeb$lambda$2$Type_2_classLit = createForClass('com.github.nalukit.nalu.plugin.core.web.client', 'NaluPluginCoreWeb/lambda$2$Type', 414);
function NaluPluginCoreWeb$lambda$3$Type(contextPath_0, handler_1){
  this.contextPath_0 = contextPath_0;
  this.handler_1 = handler_1;
}

defineClass(879, $wnd.Function, {}, NaluPluginCoreWeb$lambda$3$Type);
_.onInvoke = function onInvoke(arg0){
  return lambda$3_1(this.contextPath_0, this.handler_1, arg0);
}
;
function NaluPluginCoreWeb$lambda$4$Type(handler_0){
  this.handler_0 = handler_0;
}

defineClass(878, $wnd.Function, {}, NaluPluginCoreWeb$lambda$4$Type);
_.onInvoke = function onInvoke_0(arg0){
  return lambda$4_0(this.handler_0);
}
;
function NaluStartModel(startRoute){
  this.startRoute = startRoute;
}

defineClass(415, 1, {}, NaluStartModel);
var Lcom_github_nalukit_nalu_plugin_core_web_client_model_NaluStartModel_2_classLit = createForClass('com.github.nalukit.nalu.plugin.core.web.client.model', 'NaluStartModel', 415);
function DefaultElemental2ClientLogger(){
}

defineClass(409, 825, {}, DefaultElemental2ClientLogger);
var Lcom_github_nalukit_nalu_plugin_elemental2_client_DefaultElemental2ClientLogger_2_classLit = createForClass('com.github.nalukit.nalu.plugin.elemental2.client', 'DefaultElemental2ClientLogger', 409);
function $attach(selector, asElement){
  var selectorElement;
  selectorElement = ($clinit_DomGlobal() , document_0).querySelector('#' + selector);
  if (selectorElement == null) {
    return false;
  }
   else {
    selectorElement.appendChild(asElement);
    return true;
  }
}

function $confirm(this$static, message, handler){
  if (!this$static.customConfirmPresenter) {
    ($clinit_DomGlobal() , $wnd.goog.global.window).confirm(message)?$unbindController(handler.this$01, handler.val$finalHash2, handler.val$routeResult3, handler.val$routeConfigurations4):$onCancel(handler);
  }
   else {
    $addConfirmHandler(this$static.customConfirmPresenter, handler);
    $confirm_0(this$static.customConfirmPresenter);
  }
}

function $initialize(this$static, shellConfiguration){
  getContextPath(shellConfiguration);
  this$static.naluStartModel = getNaluStartModel();
}

function $register_3(handler){
  ($clinit_PropertyFactory() , INSTANCE).hasHistory && (INSTANCE.usingHash?(($clinit_DomGlobal() , $wnd.goog.global.window).onhashchange = makeLambdaFunction(NaluPluginCoreWeb$lambda$4$Type.prototype.onInvoke, NaluPluginCoreWeb$lambda$4$Type, [handler])):addPopStateHandler(handler, INSTANCE.contextPath));
}

function $remove(selector){
  var i, selectorElement;
  selectorElement = ($clinit_DomGlobal() , document_0).querySelector('#' + selector);
  if (selectorElement != null) {
    if (selectorElement.childNodes.length > 0) {
      for (i = $asList(selectorElement.childNodes).array.length - 1; i > -1; i--) {
        selectorElement.removeChild(castToNative($get_2($asList(selectorElement.childNodes), i), $wnd.Node));
      }
    }
  }
}

function $setCustomConfirmPresenter(this$static, customConfirmPresenter){
  this$static.customConfirmPresenter = customConfirmPresenter;
}

function NaluPluginElemental2(){
}

defineClass(263, 1, {}, NaluPluginElemental2);
var Lcom_github_nalukit_nalu_plugin_elemental2_client_NaluPluginElemental2_2_classLit = createForClass('com.github.nalukit.nalu.plugin.elemental2.client', 'NaluPluginElemental2', 263);
function setUncaughtExceptionHandler(handler){
  uncaughtExceptionHandler = handler;
  maybeInitializeWindowOnError();
}

var uncaughtExceptionHandler = null;
defineClass(271, 120, $intern_2);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 271);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?getExceptionName0(castToJso(exception)):instanceOfString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?getExceptionDescription0(castToJso(exception)):exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  JsException.call(this, e);
  this.description = '';
  this.e = e;
  this.description = '';
}

function getExceptionDescription0(e){
  return e == null?null:e.message;
}

function getExceptionName0(e){
  return e == null?null:e.name;
}

defineClass(121, 271, {121:1, 4:1, 16:1, 13:1, 9:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  $ensureInit(this);
  return this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 121);
defineClass(796, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 796);
function $clinit_Impl(){
  $clinit_Impl = emptyMethod;
  !!($clinit_StackTraceCreator() , collector_1);
}

function apply_13(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = Date.now();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE_9));
    return true;
  }
  return false;
}

function entry_1(jsFunction){
  $clinit_Impl();
  return function(){
    return entry0_0(jsFunction, this, arguments);
    var __0;
  }
  ;
}

function entry0_0(jsFunction, thisObj, args){
  var initialEntry, t;
  initialEntry = enter();
  try {
    if (uncaughtExceptionHandler) {
      try {
        return apply_13(jsFunction, thisObj, args);
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 9)) {
          t = $e0;
          reportUncaughtException(t, true);
          return undefined;
        }
         else 
          throw toJs($e0);
      }
    }
     else {
      return apply_13(jsFunction, thisObj, args);
    }
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE_9));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function maybeInitializeWindowOnError(){
  $clinit_Impl();
  if (onErrorInitialized) {
    return;
  }
  onErrorInitialized = true;
  registerWindowOnError(false);
}

function registerWindowOnError(reportAlways){
  $clinit_Impl();
  function errorHandler(msg, url_0, line, column, error){
    var throwable = of(error);
    reportUncaughtException(throwable, false);
  }

  ;
  function addOnErrorHandler(windowRef){
    var origHandler = windowRef.onerror;
    if (origHandler && !reportAlways) {
      return;
    }
    windowRef.onerror = function(){
      errorHandler.apply(this, arguments);
      origHandler && origHandler.apply(this, arguments);
      return false;
    }
    ;
  }

  addOnErrorHandler($wnd);
  addOnErrorHandler(window);
}

function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function reportUncaughtException(e, reportSwallowedExceptionToBrowser){
  $clinit_Impl();
  var handler;
  handler = uncaughtExceptionHandler;
  if (handler) {
    if (handler == uncaughtExceptionHandlerForTest) {
      return;
    }
    $clinit_AppEntryPoint();
    ($clinit_ConsoleLoggerAdapter() , ERROR_ENABLED) && ($clinit_DomGlobal() , $wnd.goog.global.console).error('PANIC! -> UncaughtException Handler called', e);
    return;
  }
  if (reportSwallowedExceptionToBrowser) {
    reportToBrowser(instanceOf(e, 121)?castTo(e, 121).getThrown():e);
  }
   else {
    $clinit_System();
    $printStackTraceImpl(e, err, '');
  }
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, onErrorInitialized = false, uncaughtExceptionHandlerForTest, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE_9 = new SchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function SchedulerImpl(){
}

function push_0(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].$_nullMethod() && (rescheduled = push_0(rescheduled, t)):t[0].$_nullMethod();
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 9)) {
        e = $e0;
        $clinit_Impl();
        reportUncaughtException(e, true);
      }
       else 
        throw toJs($e0);
    }
  }
  return rescheduled;
}

defineClass(308, 796, {}, SchedulerImpl);
var INSTANCE_9;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 308);
function create(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_7;
  a1 = value_0 >> 22 & $intern_7;
  a2 = value_0 < 0?$intern_8:0;
  return create0(a0, a1, a2);
}

function create_0(a){
  return create0(a.l, a.m, a.h);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function divMod(a, b, computeRemainder){
  var aIsCopy, aIsMinValue, aIsNegative, bpower, c, negative;
  if (b.l == 0 && b.m == 0 && b.h == 0) {
    throw toJs(new ArithmeticException);
  }
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create0(0, 0, 0);
  }
  if (b.h == $intern_9 && b.m == 0 && b.l == 0) {
    return divModByMinValue(a, computeRemainder);
  }
  negative = false;
  if (b.h >> 19 != 0) {
    b = neg(b);
    negative = !negative;
  }
  bpower = powerOfTwo(b);
  aIsNegative = false;
  aIsMinValue = false;
  aIsCopy = false;
  if (a.h == $intern_9 && a.m == 0 && a.l == 0) {
    aIsMinValue = true;
    aIsNegative = true;
    if (bpower == -1) {
      a = create_0(($clinit_BigLongLib$Const() , MAX_VALUE));
      aIsCopy = true;
      negative = !negative;
    }
     else {
      c = shr(a, bpower);
      negative && negate(c);
      computeRemainder && (remainder = create0(0, 0, 0));
      return c;
    }
  }
   else if (a.h >> 19 != 0) {
    aIsNegative = true;
    a = neg(a);
    aIsCopy = true;
    negative = !negative;
  }
  if (bpower != -1) {
    return divModByShift(a, bpower, negative, aIsNegative, computeRemainder);
  }
  if (compare(a, b) < 0) {
    computeRemainder && (aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h)));
    return create0(0, 0, 0);
  }
  return divModHelper(aIsCopy?a:create0(a.l, a.m, a.h), b, negative, aIsNegative, aIsMinValue, computeRemainder);
}

function divModByMinValue(a, computeRemainder){
  if (a.h == $intern_9 && a.m == 0 && a.l == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create_0(($clinit_BigLongLib$Const() , ONE));
  }
  computeRemainder && (remainder = create0(a.l, a.m, a.h));
  return create0(0, 0, 0);
}

function divModByShift(a, bpower, negative, aIsNegative, computeRemainder){
  var c;
  c = shr(a, bpower);
  negative && negate(c);
  if (computeRemainder) {
    a = maskRight(a, bpower);
    aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h));
  }
  return c;
}

function divModHelper(a, b, negative, aIsNegative, aIsMinValue, computeRemainder){
  var bshift, gte, quotient, shift_0, a1, a2, a0;
  shift_0 = numberOfLeadingZeros(b) - numberOfLeadingZeros(a);
  bshift = shl(b, shift_0);
  quotient = create0(0, 0, 0);
  while (shift_0 >= 0) {
    gte = trialSubtract(a, bshift);
    if (gte) {
      shift_0 < 22?(quotient.l |= 1 << shift_0 , undefined):shift_0 < 44?(quotient.m |= 1 << shift_0 - 22 , undefined):(quotient.h |= 1 << shift_0 - 44 , undefined);
      if (a.l == 0 && a.m == 0 && a.h == 0) {
        break;
      }
    }
    a1 = bshift.m;
    a2 = bshift.h;
    a0 = bshift.l;
    bshift.h = a2 >>> 1;
    bshift.m = a1 >>> 1 | (a2 & 1) << 21;
    bshift.l = a0 >>> 1 | (a1 & 1) << 21;
    --shift_0;
  }
  negative && negate(quotient);
  if (computeRemainder) {
    if (aIsNegative) {
      remainder = neg(a);
      aIsMinValue && (remainder = sub_0(remainder, ($clinit_BigLongLib$Const() , ONE)));
    }
     else {
      remainder = create0(a.l, a.m, a.h);
    }
  }
  return quotient;
}

function maskRight(a, bits){
  var b0, b1, b2;
  if (bits <= 22) {
    b0 = a.l & (1 << bits) - 1;
    b1 = b2 = 0;
  }
   else if (bits <= 44) {
    b0 = a.l;
    b1 = a.m & (1 << bits - 22) - 1;
    b2 = 0;
  }
   else {
    b0 = a.l;
    b1 = a.m;
    b2 = a.h & (1 << bits - 44) - 1;
  }
  return create0(b0, b1, b2);
}

function negate(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_7;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_7;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_8;
  a.l = neg0;
  a.m = neg1;
  a.h = neg2;
}

function numberOfLeadingZeros(a){
  var b1, b2;
  b2 = numberOfLeadingZeros_0(a.h);
  if (b2 == 32) {
    b1 = numberOfLeadingZeros_0(a.m);
    return b1 == 32?numberOfLeadingZeros_0(a.l) + 32:b1 + 20 - 10;
  }
   else {
    return b2 - 12;
  }
}

function powerOfTwo(a){
  var h, l, m;
  l = a.l;
  if ((l & l - 1) != 0) {
    return -1;
  }
  m = a.m;
  if ((m & m - 1) != 0) {
    return -1;
  }
  h = a.h;
  if ((h & h - 1) != 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l == 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l != 0) {
    return numberOfTrailingZeros(l);
  }
  if (h == 0 && m != 0 && l == 0) {
    return numberOfTrailingZeros(m) + 22;
  }
  if (h != 0 && m == 0 && l == 0) {
    return numberOfTrailingZeros(h) + 44;
  }
  return -1;
}

function toDoubleHelper(a){
  return a.l + a.m * $intern_10 + a.h * $intern_11;
}

function trialSubtract(a, b){
  var sum0, sum1, sum2;
  sum2 = a.h - b.h;
  if (sum2 < 0) {
    return false;
  }
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 += sum1 >> 22;
  if (sum2 < 0) {
    return false;
  }
  a.l = sum0 & $intern_7;
  a.m = sum1 & $intern_7;
  a.h = sum2 & $intern_8;
  return true;
}

var remainder;
function add_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l + b.l;
  sum1 = a.m + b.m + (sum0 >> 22);
  sum2 = a.h + b.h + (sum1 >> 22);
  return create0(sum0 & $intern_7, sum1 & $intern_7, sum2 & $intern_8);
}

function and(a, b){
  return create0(a.l & b.l, a.m & b.m, a.h & b.h);
}

function compare(a, b){
  var a0, a1, a2, b0, b1, b2, signA, signB;
  signA = a.h >> 19;
  signB = b.h >> 19;
  if (signA != signB) {
    return signB - signA;
  }
  a2 = a.h;
  b2 = b.h;
  if (a2 != b2) {
    return a2 - b2;
  }
  a1 = a.m;
  b1 = b.m;
  if (a1 != b1) {
    return a1 - b1;
  }
  a0 = a.l;
  b0 = b.l;
  return a0 - b0;
}

function fromDouble(value_0){
  var a0, a1, a2, negative, result;
  if (isNaN(value_0)) {
    return $clinit_BigLongLib$Const() , ZERO;
  }
  if (value_0 < -9223372036854775808) {
    return $clinit_BigLongLib$Const() , MIN_VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return $clinit_BigLongLib$Const() , MAX_VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= $intern_11) {
    a2 = round_int(value_0 / $intern_11);
    value_0 -= a2 * $intern_11;
  }
  a1 = 0;
  if (value_0 >= $intern_10) {
    a1 = round_int(value_0 / $intern_10);
    value_0 -= a1 * $intern_10;
  }
  a0 = round_int(value_0);
  result = create0(a0, a1, a2);
  negative && negate(result);
  return result;
}

function mul(a, b){
  var a0, a1, a2, a3, a4, b0, b1, b2, b3, b4, c0, c00, c01, c1, c10, c11, c12, c13, c2, c22, c23, c24, p0, p1, p2, p3, p4;
  a0 = a.l & 8191;
  a1 = a.l >> 13 | (a.m & 15) << 9;
  a2 = a.m >> 4 & 8191;
  a3 = a.m >> 17 | (a.h & 255) << 5;
  a4 = (a.h & 1048320) >> 8;
  b0 = b.l & 8191;
  b1 = b.l >> 13 | (b.m & 15) << 9;
  b2 = b.m >> 4 & 8191;
  b3 = b.m >> 17 | (b.h & 255) << 5;
  b4 = (b.h & 1048320) >> 8;
  p0 = a0 * b0;
  p1 = a1 * b0;
  p2 = a2 * b0;
  p3 = a3 * b0;
  p4 = a4 * b0;
  if (b1 != 0) {
    p1 += a0 * b1;
    p2 += a1 * b1;
    p3 += a2 * b1;
    p4 += a3 * b1;
  }
  if (b2 != 0) {
    p2 += a0 * b2;
    p3 += a1 * b2;
    p4 += a2 * b2;
  }
  if (b3 != 0) {
    p3 += a0 * b3;
    p4 += a1 * b3;
  }
  b4 != 0 && (p4 += a0 * b4);
  c00 = p0 & $intern_7;
  c01 = (p1 & 511) << 13;
  c0 = c00 + c01;
  c10 = p0 >> 22;
  c11 = p1 >> 9;
  c12 = (p2 & 262143) << 4;
  c13 = (p3 & 31) << 17;
  c1 = c10 + c11 + c12 + c13;
  c22 = p2 >> 18;
  c23 = p3 >> 5;
  c24 = (p4 & 4095) << 8;
  c2 = c22 + c23 + c24;
  c1 += c0 >> 22;
  c0 &= $intern_7;
  c2 += c1 >> 22;
  c1 &= $intern_7;
  c2 &= $intern_8;
  return create0(c0, c1, c2);
}

function neg(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_7;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_7;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_8;
  return create0(neg0, neg1, neg2);
}

function or(a, b){
  return create0(a.l | b.l, a.m | b.m, a.h | b.h);
}

function shl(a, n){
  var res0, res1, res2;
  n &= 63;
  if (n < 22) {
    res0 = a.l << n;
    res1 = a.m << n | a.l >> 22 - n;
    res2 = a.h << n | a.m >> 22 - n;
  }
   else if (n < 44) {
    res0 = 0;
    res1 = a.l << n - 22;
    res2 = a.m << n - 22 | a.l >> 44 - n;
  }
   else {
    res0 = 0;
    res1 = 0;
    res2 = a.l << n - 44;
  }
  return create0(res0 & $intern_7, res1 & $intern_7, res2 & $intern_8);
}

function shr(a, n){
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a.h;
  negative = (a2 & $intern_9) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?$intern_8:0;
    res1 = a2 >> n - 22;
    res0 = a.m >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?$intern_8:0;
    res1 = negative?$intern_7:0;
    res0 = a2 >> n - 44;
  }
  return create0(res0 & $intern_7, res1 & $intern_7, res2 & $intern_8);
}

function shru(a, n){
  var a2, res0, res1, res2;
  n &= 63;
  a2 = a.h & $intern_8;
  if (n < 22) {
    res2 = a2 >>> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = 0;
    res1 = a2 >>> n - 22;
    res0 = a.m >> n - 22 | a.h << 44 - n;
  }
   else {
    res2 = 0;
    res1 = 0;
    res0 = a2 >>> n - 44;
  }
  return create0(res0 & $intern_7, res1 & $intern_7, res2 & $intern_8);
}

function sub_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return create0(sum0 & $intern_7, sum1 & $intern_7, sum2 & $intern_8);
}

function toDouble(a){
  if (compare(a, ($clinit_BigLongLib$Const() , ZERO)) < 0) {
    return -toDoubleHelper(neg(a));
  }
  return a.l + a.m * $intern_10 + a.h * $intern_11;
}

function toInt(a){
  return a.l | a.m << 22;
}

function toString_5(a){
  var digits, rem, res, tenPowerLong, zeroesNeeded;
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    return '0';
  }
  if (a.h == $intern_9 && a.m == 0 && a.l == 0) {
    return '-9223372036854775808';
  }
  if (a.h >> 19 != 0) {
    return '-' + toString_5(neg(a));
  }
  rem = a;
  res = '';
  while (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
    tenPowerLong = create($intern_12);
    rem = divMod(rem, tenPowerLong, true);
    digits = '' + toInt(remainder);
    if (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
      zeroesNeeded = 9 - digits.length;
      for (; zeroesNeeded > 0; zeroesNeeded--) {
        digits = '0' + digits;
      }
    }
    res = digits + res;
  }
  return res;
}

function xor(a, b){
  return create0(a.l ^ b.l, a.m ^ b.m, a.h ^ b.h);
}

function $clinit_BigLongLib$Const(){
  $clinit_BigLongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_7, $intern_7, 524287);
  MIN_VALUE = create0(0, 0, $intern_9);
  ONE = create(1);
  create(2);
  ZERO = create(0);
}

var MAX_VALUE, MIN_VALUE, ONE, ZERO;
function add_1(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a + b;
    if ($intern_13 < result && result < $intern_11) {
      return result;
    }
  }
  return createLongEmul(add_0(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function and_0(a, b){
  return createLongEmul(and(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function compare_0(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a - b;
    if (!isNaN(result)) {
      return result;
    }
  }
  return compare(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b);
}

function createLongEmul(big_0){
  var a2;
  a2 = big_0.h;
  if (a2 == 0) {
    return big_0.l + big_0.m * $intern_10;
  }
  if (a2 == $intern_8) {
    return big_0.l + big_0.m * $intern_10 - $intern_11;
  }
  return big_0;
}

function div(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a / b;
    if ($intern_13 < result && result < $intern_11) {
      return result < 0?$wnd.Math.ceil(result):$wnd.Math.floor(result);
    }
  }
  return createLongEmul(divMod(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b, false));
}

function eq(a, b){
  return compare_0(a, b) == 0;
}

function fromDouble_0(value_0){
  if ($intern_13 < value_0 && value_0 < $intern_11) {
    return value_0 < 0?$wnd.Math.ceil(value_0):$wnd.Math.floor(value_0);
  }
  return createLongEmul(fromDouble(value_0));
}

function gt(a, b){
  return compare_0(a, b) > 0;
}

function gte_0(a, b){
  return compare_0(a, b) >= 0;
}

function isSmallLong0(value_0){
  return typeof value_0 === 'number';
}

function lt(a, b){
  return compare_0(a, b) < 0;
}

function mod(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a % b;
    if ($intern_13 < result && result < $intern_11) {
      return result;
    }
  }
  return createLongEmul((divMod(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b, true) , remainder));
}

function mul_0(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a * b;
    if ($intern_13 < result && result < $intern_11) {
      return result;
    }
  }
  return createLongEmul(mul(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function neg_0(a){
  var result;
  if (isSmallLong0(a)) {
    result = 0 - a;
    if (!isNaN(result)) {
      return result;
    }
  }
  return createLongEmul(neg(a));
}

function neq(a, b){
  return compare_0(a, b) != 0;
}

function or_0(a, b){
  return createLongEmul(or(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function shl_0(a, n){
  return createLongEmul(shl(isSmallLong0(a)?toBigLong(a):a, n));
}

function shr_0(a, n){
  return createLongEmul(shr(isSmallLong0(a)?toBigLong(a):a, n));
}

function shru_0(a, n){
  return createLongEmul(shru(isSmallLong0(a)?toBigLong(a):a, n));
}

function sub_1(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a - b;
    if ($intern_13 < result && result < $intern_11) {
      return result;
    }
  }
  return createLongEmul(sub_0(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function toBigLong(longValue){
  var a0, a1, a3, value_0;
  value_0 = longValue;
  a3 = 0;
  if (value_0 < 0) {
    value_0 += $intern_11;
    a3 = $intern_8;
  }
  a1 = round_int(value_0 / $intern_10);
  a0 = round_int(value_0 - a1 * $intern_10);
  return create0(a0, a1, a3);
}

function toDouble_0(a){
  var d;
  if (isSmallLong0(a)) {
    d = a;
    return d == -0.?0:d;
  }
  return toDouble(a);
}

function toInt_0(a){
  if (isSmallLong0(a)) {
    return a | 0;
  }
  return toInt(a);
}

function toString_6(a){
  if (isSmallLong0(a)) {
    return '' + a;
  }
  return toString_5(a);
}

function xor_0(a, b){
  return createLongEmul(xor(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function init(){
  var application, element, s, i;
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad();
  $clinit_AppEntryPoint();
  setUncaughtExceptionHandler(new AppEntryPoint$lambda$0$Type);
  $setDefaultFailHandler($setDefaultResourceRootPath($setDefaultServiceRoot(($clinit_DominoRestConfig() , new DominoRestConfig), ($clinit_Impl() , s = $doc.location.href , i = s.indexOf('#') , i != -1 && (s = s.substring(0, i)) , i = s.indexOf('?') , i != -1 && (s = s.substring(0, i)) , i = s.lastIndexOf('/') , i != -1 && (s = s.substring(0, i)) , s.length > 0?s + '/':''))), new AppEntryPoint$lambda$1$Type);
  $setCondensed($setDefaultFieldsStyle(($clinit_DominoUIConfig() , INSTANCE_15), ($clinit_FieldStyle() , ROUNDED)));
  application = new NotebookApplicationImpl;
  $run(application, new NaluPluginElemental2);
  element = ($clinit_DomGlobal() , document_0).getElementById('LoadingSpinner');
  element != null && element.remove();
  ($clinit_ConsoleLoggerAdapter() , INFO_ENABLED_0) && $wnd.goog.global.console.info('Notebook UI have been initialized.');
}

function $getItem(this$static, key){
  return $getItem_0(this$static.storage_0, key);
}

function $setItem(this$static, key, data_0){
  $setItem_0(this$static.storage_0, key, data_0);
}

function Storage_0(){
  this.storage_0 = 'sessionStorage';
}

defineClass(109, 1, {}, Storage_0);
var sessionStorage_0;
var Lcom_google_gwt_storage_client_Storage_2_classLit = createForClass('com.google.gwt.storage.client', 'Storage', 109);
function $clinit_Storage$StorageSupportDetector(){
  $clinit_Storage$StorageSupportDetector = emptyMethod;
  checkStorageSupport('localStorage');
  sessionStorageSupported = checkStorageSupport('sessionStorage');
}

function checkStorageSupport(storage){
  var c = '_gwt_dummy_';
  try {
    $wnd[storage].setItem(c, c);
    $wnd[storage].removeItem(c);
    return true;
  }
   catch (e) {
    return false;
  }
}

var sessionStorageSupported = false;
function $getItem_0(storage, key){
  return $wnd[storage].getItem(key);
}

function $setItem_0(storage, key, data_0){
  $wnd[storage].getItem(key);
  $wnd[storage].setItem(key, data_0);
}

function $onModuleLoad(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals_1(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals_1('CSS1Compat', allowedModes[0]) && $equals_1('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function assertCompileTimeUserAgent(){
  var runtimeValue;
  runtimeValue = $getRuntimeValue();
  if (!$equals_1('gecko1_8', runtimeValue)) {
    throw toJs(new UserAgentAsserter$UserAgentAssertionError(runtimeValue));
  }
}

function Error_0(message, cause){
  Throwable_0.call(this, message, cause);
}

defineClass(82, 9, $intern_14);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 82);
function AssertionError(){
  Throwable.call(this);
}

defineClass(43, 82, $intern_14, AssertionError);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 43);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue){
  Error_0.call(this, 'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.' == null?'null':toString_7('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 9)?castTo('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 9):null);
}

defineClass(252, 43, $intern_14, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 252);
function $getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}

function $getApplicationBuildTimeStr(this$static){
  return $format(($clinit_DateTimeFormat_0() , getFormat(new DefaultDateTimeFormatInfo)), castTo($get(this$static.applicationContext, 'APPLICATION_BUILD_TIME'), 79), null);
}

function $getCurrentMenu(this$static){
  var obj, s;
  obj = $get(this$static.applicationContext, 'currentMenu');
  if (obj != null) {
    return castTo(obj, 45);
  }
  s = $getItem((!sessionStorage_0 && ($clinit_Storage$StorageSupportDetector() , sessionStorageSupported) && (sessionStorage_0 = new Storage_0) , sessionStorage_0), 'currentMenu');
  if (s != null) {
    return castTo($read(($clinit_Menu_MapperImpl() , INSTANCE_12), s, $build(($clinit_DefaultJsonDeserializationContext() , new DefaultJsonDeserializationContext$DefaultBuilder))), 45);
  }
  return null;
}

function $getRealName(this$static){
  var realName;
  realName = castToString($get(this$static.applicationContext, 'realName'));
  (realName == null || realName.length == 0) && (realName = $getItem((!sessionStorage_0 && ($clinit_Storage$StorageSupportDetector() , sessionStorageSupported) && (sessionStorage_0 = new Storage_0) , sessionStorage_0), 'realName'));
  return realName;
}

function $getUserName(this$static){
  var username;
  username = castToString($get(this$static.applicationContext, 'username'));
  (username == null || username.length == 0) && (username = $getItem((!sessionStorage_0 && ($clinit_Storage$StorageSupportDetector() , sessionStorageSupported) && (sessionStorage_0 = new Storage_0) , sessionStorage_0), 'username'));
  return username;
}

function $setCounter2(this$static, counter){
  $put(this$static.applicationContext, 'counter2', valueOf(counter));
}

function $setCurrentMenu(this$static, menu){
  $put(this$static.applicationContext, 'currentMenu', menu);
  $setItem((!sessionStorage_0 && ($clinit_Storage$StorageSupportDetector() , sessionStorageSupported) && (sessionStorage_0 = new Storage_0) , sessionStorage_0), 'currentMenu', $write(($clinit_Menu_MapperImpl() , INSTANCE_12), menu, $build_0(($clinit_DefaultJsonSerializationContext() , new DefaultJsonSerializationContext$DefaultBuilder))));
}

function $setTextArea2(this$static, textArea){
  $put(this$static.applicationContext, 'textArea2', textArea);
}

function $setUserName(this$static, username){
  $put(this$static.applicationContext, 'username', username);
  $setItem((!sessionStorage_0 && ($clinit_Storage$StorageSupportDetector() , sessionStorageSupported) && (sessionStorage_0 = new Storage_0) , sessionStorage_0), 'username', username);
}

function AppContext(){
  this.applicationContext = new ContextDataStore;
  new ContextDataStore;
}

defineClass(306, 305, {}, AppContext);
var Lcom_itangsoft_notebook_AppContext_2_classLit = createForClass('com.itangsoft.notebook', 'AppContext', 306);
function $clinit_AppEntryPoint(){
  $clinit_AppEntryPoint = emptyMethod;
  new ConsoleLoggerAdapter(($ensureNamesAreInitialized(Lcom_itangsoft_notebook_AppEntryPoint_2_classLit) , Lcom_itangsoft_notebook_AppEntryPoint_2_classLit.typeName));
}

var Lcom_itangsoft_notebook_AppEntryPoint_2_classLit = createForClass('com.itangsoft.notebook', 'AppEntryPoint', null);
function AppEntryPoint$lambda$0$Type(){
}

defineClass(259, 1, {}, AppEntryPoint$lambda$0$Type);
var Lcom_itangsoft_notebook_AppEntryPoint$lambda$0$Type_2_classLit = createForClass('com.itangsoft.notebook', 'AppEntryPoint/lambda$0$Type', 259);
function AppEntryPoint$lambda$1$Type(){
}

defineClass(261, 1, {}, AppEntryPoint$lambda$1$Type);
_.onFail = function onFail(arg0){
  $clinit_AppEntryPoint();
  ($clinit_DomGlobal() , $wnd.goog.global.window).alert('PANIC! -> Server failed to process request');
}
;
var Lcom_itangsoft_notebook_AppEntryPoint$lambda$1$Type_2_classLit = createForClass('com.itangsoft.notebook', 'AppEntryPoint/lambda$1$Type', 261);
function $load(finishLoadCommand){
  var element, element$iterator, link_0, nodeList;
  ($clinit_DomGlobal() , document_0).title = '\u4E91\u7B14\u8BB0 - \u6B22\u8FCE\u6765\u5230\u6211\u7684\u4E16\u754C';
  nodeList = document_0.getElementsByTagName('link');
  for (element$iterator = new AbstractList$IteratorImpl($asList(nodeList)); element$iterator.i < element$iterator.this$01_0.size();) {
    element = (checkCriticalElement(element$iterator.i < element$iterator.this$01_0.size()) , castToNative(element$iterator.this$01_0.getAtIndex(element$iterator.last = element$iterator.i++), $wnd.Element));
    if (instanceOfNative(element, $wnd.HTMLLinkElement)) {
      link_0 = castToNative(element, $wnd.HTMLLinkElement);
      if ($equals_1('shortcut icon', link_0.rel)) {
        link_0.href = 'images/favicon.ico';
        break;
      }
    }
  }
  $onFinishModuleLoading(finishLoadCommand.$$outer_0);
}

function NotebookApplicationImpl(){
  this.compositeReferences = new ArrayList;
  this.context = new AppContext;
  $put(this.context.applicationContext, 'APPLICATION_VERSION', '1.0.0');
  $setApplicationBuildTime(this.context, new Date_1(1707579610567));
}

defineClass(262, 286, {}, NotebookApplicationImpl);
var Lcom_itangsoft_notebook_NotebookApplicationImpl_2_classLit = createForClass('com.itangsoft.notebook', 'NotebookApplicationImpl', 262);
function BaseComponentController(){
  this.globalHandlerRegistrations = new HandlerRegistrations;
  this.handlerRegistrations = new HandlerRegistrations;
  this.compositeControllers = new HashMap;
  this.mode_0 = ($clinit_IsController$Mode() , CREATE);
}

defineClass(128, 61, {61:1});
var Lcom_itangsoft_notebook_base_BaseComponentController_2_classLit = createForClass('com.itangsoft.notebook.base', 'BaseComponentController', 128);
function BaseCompositeController(){
  this.globalHandlerRegistrations = new HandlerRegistrations;
  this.handlerRegistrations = new HandlerRegistrations;
}

defineClass(228, 39, {39:1});
var Lcom_itangsoft_notebook_base_BaseCompositeController_2_classLit = createForClass('com.itangsoft.notebook.base', 'BaseCompositeController', 228);
function $clinit_MenuClickEvent(){
  $clinit_MenuClickEvent = emptyMethod;
  TYPE_6 = new Event$Type;
}

function $dispatch_2(this$static, handler){
  $registerMenuClickEvent(handler.controller_0, this$static);
}

function MenuClickEvent(newMenu){
  $clinit_MenuClickEvent();
  this.newMenu = newMenu;
}

defineClass(218, 823, {}, MenuClickEvent);
_.dispatch = function dispatch_5(handler){
  $dispatch_2(this, castTo(handler, 845));
}
;
_.getAssociatedType = function getAssociatedType_5(){
  return TYPE_6;
}
;
var TYPE_6;
var Lcom_itangsoft_notebook_event_MenuClickEvent_2_classLit = createForClass('com.itangsoft.notebook.event', 'MenuClickEvent', 218);
function EventBusShell(){
  AbstractShell.call(this);
  this.root_0 = castTo($css(castTo($setId(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element), 'example-eventbus-page'), 3), 'example'), 3);
}

defineClass(493, 155, {}, EventBusShell);
_.attachShell = function attachShell(){
  $appendChild(new DominoElement(($clinit_DomGlobal() , document_0).body), this.root_0.wrappedElement);
}
;
_.detachShell = function detachShell(){
  $remove_0(this.root_0);
}
;
var Lcom_itangsoft_notebook_example_shell_EventBusShell_2_classLit = createForClass('com.itangsoft.notebook.example.shell', 'EventBusShell', 493);
function EventBusShellCreatorImpl(context){
  AbstractShellCreator.call(this, context);
}

defineClass(419, 144, $intern_6, EventBusShellCreatorImpl);
_.create_2 = function create_1(){
  var shell, shellInstance;
  shellInstance = new ShellInstance;
  shell = new EventBusShell;
  shellInstance.shell = shell;
  $setContext_0(shell, this.context);
  return shellInstance;
}
;
_.onFinishCreating_0 = function onFinishCreating(){
}
;
var Lcom_itangsoft_notebook_example_shell_EventBusShellCreatorImpl_2_classLit = createForClass('com.itangsoft.notebook.example.shell', 'EventBusShellCreatorImpl', 419);
function SinglePageLayoutShell(){
  AbstractShell.call(this);
  this.layout = $show_0(new AppLayout, ($clinit_ColorScheme() , INDIGO_0));
}

defineClass(494, 155, {}, SinglePageLayoutShell);
_.attachShell = function attachShell_0(){
  $setLogo(this.layout, castToNative(img(($clinit_System() , 'images/logo.png?ts=' + toString_6(fromDouble_0(Date.now())))).element, $wnd.HTMLImageElement));
  $appendChild(castTo($clearElement(this.layout.header.title_0), 3), of_4('\u4E91\u7B14\u8BB0'));
  $setAvatar(this.layout, $getRealName(this.context));
  $setVersion(this.layout, castToString($get(this.context.applicationContext, 'APPLICATION_VERSION')));
  $appendChild_0(castTo($appendChild_0(this.layout.header.toolbar_0, $appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('li'), $wnd.HTMLElement))).element), $textContent(new DominoElement(castTo($attr_0(castTo($attr_0(new HtmlContentBuilder(castToNative(document_0.createElement('a'), $wnd.HTMLElement)), 'href', '#showcase/eventbus'), 6), 'target', '_blank'), 6).element), '\u4E8B\u4EF6\u603B\u7EBF'))), 3), $textContent(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('li'), $wnd.HTMLElement))).element), '\u5E38\u7528\u5DE5\u5177\u5305'));
  $setId(this.layout.body_0.leftPanel, 'layout-left-panel');
  $setId(this.layout.body_0.content_0, 'layout-content');
}
;
_.detachShell = function detachShell_0(){
  $remove_0(this.layout);
}
;
var Lcom_itangsoft_notebook_example_shell_SinglePageLayoutShell_2_classLit = createForClass('com.itangsoft.notebook.example.shell', 'SinglePageLayoutShell', 494);
function SinglePageLayoutShellCreatorImpl(context){
  AbstractShellCreator.call(this, context);
}

defineClass(420, 144, $intern_6, SinglePageLayoutShellCreatorImpl);
_.create_2 = function create_2(){
  var shell, shellInstance;
  shellInstance = new ShellInstance;
  shell = new SinglePageLayoutShell;
  shellInstance.shell = shell;
  $setContext_0(shell, this.context);
  return shellInstance;
}
;
_.onFinishCreating_0 = function onFinishCreating_0(){
}
;
var Lcom_itangsoft_notebook_example_shell_SinglePageLayoutShellCreatorImpl_2_classLit = createForClass('com.itangsoft.notebook.example.shell', 'SinglePageLayoutShellCreatorImpl', 420);
function EventBusComponent(){
  AbstractComponent.call(this);
  this.root_0 = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element), 'eventbus'), 3);
  this.clickBtn1 = new Button('\u89E6\u53D1\u4E8B\u4EF6\u6309\u94AE');
  this.clearBtn1 = new Button('\u6E05\u7A7A');
  this.textArea1 = $setReadOnly_0(new TextArea_0, true);
  this.clickBtn2 = new Button('\u89E6\u53D1\u4E8B\u4EF6\u6309\u94AE');
  this.clearBtn2 = new Button('\u6E05\u7A7A');
  this.textArea2 = $setReadOnly_0(new TextArea_0, true);
  this.clickBtn3 = new Button('\u89E6\u53D1\u4E8B\u4EF6\u6309\u94AE');
  this.clearBtn3 = new Button('\u6E05\u7A7A');
  this.textArea3 = $setReadOnly_0(new TextArea_0, true);
}

defineClass(564, 112, {103:1}, EventBusComponent);
var Lcom_itangsoft_notebook_example_views_eventbus_EventBusComponent_2_classLit = createForClass('com.itangsoft.notebook.example.views.eventbus', 'EventBusComponent', 564);
function EventBusComponent$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(565, 1, {}, EventBusComponent$lambda$0$Type);
_.handleEvent = function handleEvent(arg0){
  $fireEvent1(castTo(this.$$outer_0.controller_0, 137));
}
;
var Lcom_itangsoft_notebook_example_views_eventbus_EventBusComponent$lambda$0$Type_2_classLit = createForClass('com.itangsoft.notebook.example.views.eventbus', 'EventBusComponent/lambda$0$Type', 565);
function EventBusComponent$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(566, 1, {}, EventBusComponent$lambda$1$Type);
_.handleEvent = function handleEvent_0(arg0){
  $clear1(castTo(this.$$outer_0.controller_0, 137));
}
;
var Lcom_itangsoft_notebook_example_views_eventbus_EventBusComponent$lambda$1$Type_2_classLit = createForClass('com.itangsoft.notebook.example.views.eventbus', 'EventBusComponent/lambda$1$Type', 566);
function EventBusComponent$lambda$2$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(567, 1, {}, EventBusComponent$lambda$2$Type);
_.handleEvent = function handleEvent_1(arg0){
  $fireEvent2(castTo(this.$$outer_0.controller_0, 137));
}
;
var Lcom_itangsoft_notebook_example_views_eventbus_EventBusComponent$lambda$2$Type_2_classLit = createForClass('com.itangsoft.notebook.example.views.eventbus', 'EventBusComponent/lambda$2$Type', 567);
function EventBusComponent$lambda$3$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(568, 1, {}, EventBusComponent$lambda$3$Type);
_.handleEvent = function handleEvent_2(arg0){
  $clear2(castTo(this.$$outer_0.controller_0, 137));
}
;
var Lcom_itangsoft_notebook_example_views_eventbus_EventBusComponent$lambda$3$Type_2_classLit = createForClass('com.itangsoft.notebook.example.views.eventbus', 'EventBusComponent/lambda$3$Type', 568);
function EventBusComponent$lambda$4$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(569, 1, {}, EventBusComponent$lambda$4$Type);
_.handleEvent = function handleEvent_3(arg0){
  $fireEvent3(castTo(this.$$outer_0.controller_0, 137));
}
;
var Lcom_itangsoft_notebook_example_views_eventbus_EventBusComponent$lambda$4$Type_2_classLit = createForClass('com.itangsoft.notebook.example.views.eventbus', 'EventBusComponent/lambda$4$Type', 569);
function EventBusComponent$lambda$5$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(570, 1, {}, EventBusComponent$lambda$5$Type);
_.handleEvent = function handleEvent_4(arg0){
  $clear3(castTo(this.$$outer_0.controller_0, 137));
}
;
var Lcom_itangsoft_notebook_example_views_eventbus_EventBusComponent$lambda$5$Type_2_classLit = createForClass('com.itangsoft.notebook.example.views.eventbus', 'EventBusComponent/lambda$5$Type', 570);
function $clear1(this$static){
  this$static.counter1 = 1;
  $value(castTo(this$static.component, 103).textArea1, '');
}

function $clear2(this$static){
  $setCounter2(this$static.context, 1);
  $value(castTo(this$static.component, 103).textArea2, '');
}

function $clear3(this$static){
  this$static.counter3 = 1;
  $value(castTo(this$static.component, 103).textArea3, '');
}

function $fireEvent1(this$static){
  var event_0;
  event_0 = $usingObject($using($event(($clinit_NaluApplicationEvent() , new NaluApplicationEvent))));
  $doFire(this$static.eventBus, event_0);
}

function $fireEvent2(this$static){
  var event_0;
  event_0 = ($clinit_CustomizeEvent() , new CustomizeEvent);
  $doFire(this$static.eventBus, event_0);
}

function $fireEvent3(this$static){
  var event_0;
  event_0 = ($clinit_AnnotationEvent() , new AnnotationEvent);
  $doFire(this$static.eventBus, event_0);
}

function $lambda$0_0(this$static, e_0){
  var currentValue, message;
  if ($equals_1('MyEvent1', e_0.event_0)) {
    message = '\u6211\u662F' + castToString($getStringValue(e_0.dataStore, 'name')) + '\uFF0C' + $getStringValue(e_0.dataObjectStore, 'message') + '\uFF0C\u7B2C ' + this$static.counter1 + ' \u6B21\u89E6\u53D1';
    currentValue = $getValue_2(castTo(this$static.component, 103).textArea1);
    currentValue != null && currentValue.length != 0 && (message = currentValue + '\r\n' + message);
    $value(castTo(this$static.component, 103).textArea1, message);
    ++this$static.counter1;
  }
}

function $registerEvent(this$static, event_0){
  var currentValue, message;
  message = '\u6211\u662F' + event_0.name_0 + '\uFF0C' + event_0.message_0 + '\uFF0C\u7B2C ' + this$static.counter3 + ' \u6B21\u89E6\u53D1';
  currentValue = $getValue_2(castTo(this$static.component, 103).textArea3);
  currentValue != null && currentValue.length != 0 && (message = currentValue + '\r\n' + message);
  $value(castTo(this$static.component, 103).textArea3, message);
  ++this$static.counter3;
}

function EventBusController(){
  BaseComponentController.call(this);
}

defineClass(181, 128, {61:1, 181:1, 137:1}, EventBusController);
_.start_0 = function start_2(){
  $doAdd(this.eventBus, ($clinit_NaluApplicationEvent() , TYPE_3), new EventBusController$lambda$0$Type(this));
  $setTextArea2(this.context, castTo(this.component, 103).textArea2);
  $setCounter2(this.context, this.counter2);
}
;
_.counter1 = 1;
_.counter2 = 1;
_.counter3 = 1;
var Lcom_itangsoft_notebook_example_views_eventbus_EventBusController_2_classLit = createForClass('com.itangsoft.notebook.example.views.eventbus', 'EventBusController', 181);
function EventBusController$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(504, 1, {850:1}, EventBusController$lambda$0$Type);
var Lcom_itangsoft_notebook_example_views_eventbus_EventBusController$lambda$0$Type_2_classLit = createForClass('com.itangsoft.notebook.example.views.eventbus', 'EventBusController/lambda$0$Type', 504);
function $lambda$0_1(this$static, controller_1){
  $add(controller_1.handlerRegistrations, $doAdd(this$static.eventBus, ($clinit_AnnotationEvent() , TYPE_7), new EventBusControllerCreatorImpl$lambda$1$Type(controller_1)));
}

function EventBusControllerCreatorImpl(router, context, eventBus){
  AbstractControllerCreator.call(this, router, context, eventBus);
}

defineClass(433, 124, $intern_5, EventBusControllerCreatorImpl);
_.create_1 = function create_3(route){
  var controller, controllerInstance, storedController;
  controllerInstance = new ControllerInstance;
  controllerInstance.controllerCreator = this;
  controllerInstance.controllerClassName = 'com.itangsoft.notebook.example.views.eventbus.EventBusController';
  storedController = $getControllerFormStore(($clinit_ControllerFactory() , INSTANCE_3), 'com.itangsoft.notebook.example.views.eventbus.EventBusController');
  if (!storedController) {
    controller = new EventBusController;
    controllerInstance.controller_0 = controller;
    controllerInstance.cached = false;
    $setContext(controller, this.context);
    $setEventBus(controller, this.eventBus);
    $setRouter(controller, this.router);
    controller.cached = false;
    controller.relatedRoute = route;
    controller.relatedSelector = 'example-eventbus-page';
    $setActivateNaluCommand(controller, new EventBusControllerCreatorImpl$lambda$0$Type(this, controller));
  }
   else {
    controllerInstance.controller_0 = storedController;
    controllerInstance.cached = true;
    controllerInstance.controller_0.cached = true;
  }
  return controllerInstance;
}
;
_.onFinishCreating = function onFinishCreating_1(object){
  var component, controller;
  controller = castTo(object, 181);
  component = new EventBusComponent;
  component.controller_0 = controller;
  controller.component = component;
  $addClickListener(component.clickBtn1, new EventBusComponent$lambda$0$Type(component));
  $addClickListener(component.clearBtn1, new EventBusComponent$lambda$1$Type(component));
  $addClickListener(component.clickBtn2, new EventBusComponent$lambda$2$Type(component));
  $addClickListener(component.clearBtn2, new EventBusComponent$lambda$3$Type(component));
  $addClickListener(component.clickBtn3, new EventBusComponent$lambda$4$Type(component));
  $addClickListener(component.clearBtn3, new EventBusComponent$lambda$5$Type(component));
  $appendChild_0(castTo($appendChild_0(component.root_0, $textContent_0(new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('h1'), $wnd.HTMLElement)), '\u4E8B\u4EF6\u603B\u7EBF')), 3), $setDisplay(castTo($appendChild_0(castTo($appendChild_0(castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), $appendChild_0(castTo($appendChild_0(castTo($appendChild_0(castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), $textContent_0(new HtmlContentBuilder(castToNative(document_0.createElement('h2'), $wnd.HTMLElement)), '\u4F7F\u7528 Nalu \u6846\u67B6\u5185\u7F6E\u4E8B\u4EF6')), 3), component.clickBtn1), 3), component.clearBtn1), 3), component.textArea1)), 3), $appendChild_0(castTo($appendChild_0(castTo($appendChild_0(castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), $textContent_0(new HtmlContentBuilder(castToNative(document_0.createElement('h2'), $wnd.HTMLElement)), '\u81EA\u5B9A\u4E49 Event \u548C Handler \u7C7B')), 3), component.clickBtn2), 3), component.clearBtn2), 3), component.textArea2)), 3), $appendChild_0(castTo($appendChild_0(castTo($appendChild_0(castTo($appendChild_0(castTo($appendChild_0(castTo($appendChild_0(castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), $textContent_0(new HtmlContentBuilder(castToNative(document_0.createElement('h2'), $wnd.HTMLElement)), '\u4F7F\u7528 @EventHandler \u6CE8\u89E3')), 3), component.clickBtn3), 3), component.clearBtn3), 3), component.textArea3), 3), $textContent_0(new HtmlContentBuilder(castToNative(document_0.createElement('h5'), $wnd.HTMLElement)), '\u6CE8\u610F\uFF1A')), 3), $textContent_0(new HtmlContentBuilder(castToNative(document_0.createElement('h6'), $wnd.HTMLElement)), '1. \u5EFA\u8BAE\u5728Controller\u4E2D\u4F7F\u7528@EventHandler.')), 3), $textContent_0(new HtmlContentBuilder(castToNative(document_0.createElement('h6'), $wnd.HTMLElement)), '2. \u4F7F\u7528@EventHandler\u6CE8\u518C\u7684\u4E8B\u4EF6\u5FC5\u987B\u5728\u5F53\u524DController\u7684activate()\u65B9\u6CD5\u4E2D\u8C03\u7528\uFF0C\u5728start()\u65B9\u6CD5\u4E2D\u8C03\u7528\u65E0\u6548.'))), 3)));
  $initElement(component, component.root_0.wrappedElement);
}
;
_.setParameter = function setParameter(object, parameterKeys, parameterValues){
}
;
var Lcom_itangsoft_notebook_example_views_eventbus_EventBusControllerCreatorImpl_2_classLit = createForClass('com.itangsoft.notebook.example.views.eventbus', 'EventBusControllerCreatorImpl', 433);
function EventBusControllerCreatorImpl$lambda$0$Type($$outer_0, controller_1){
  this.$$outer_0 = $$outer_0;
  this.controller_1 = controller_1;
}

defineClass(435, 1, {}, EventBusControllerCreatorImpl$lambda$0$Type);
_.execute = function execute(){
  $lambda$0_1(this.$$outer_0, this.controller_1);
}
;
var Lcom_itangsoft_notebook_example_views_eventbus_EventBusControllerCreatorImpl$lambda$0$Type_2_classLit = createForClass('com.itangsoft.notebook.example.views.eventbus', 'EventBusControllerCreatorImpl/lambda$0$Type', 435);
function EventBusControllerCreatorImpl$lambda$1$Type(controller_0){
  this.controller_0 = controller_0;
}

defineClass(434, 1, {844:1}, EventBusControllerCreatorImpl$lambda$1$Type);
var Lcom_itangsoft_notebook_example_views_eventbus_EventBusControllerCreatorImpl$lambda$1$Type_2_classLit = createForClass('com.itangsoft.notebook.example.views.eventbus', 'EventBusControllerCreatorImpl/lambda$1$Type', 434);
function $clinit_AnnotationEvent(){
  $clinit_AnnotationEvent = emptyMethod;
  TYPE_7 = new Event$Type;
}

function $dispatch_3(this$static, handler){
  $registerEvent(handler.controller_0, this$static);
}

function AnnotationEvent(){
  $clinit_AnnotationEvent();
  this.name_0 = 'MyEvent3';
  this.message_0 = '\u4F60\u80FD\u770B\u5230\u8FD9\u6761\u4FE1\u606F\u662F\u56E0\u4E3A\u4F60\u89E6\u53D1\u4E86\u8BE5\u4E8B\u4EF6';
}

defineClass(436, 823, {}, AnnotationEvent);
_.dispatch = function dispatch_6(handler){
  $dispatch_3(this, castTo(handler, 844));
}
;
_.getAssociatedType = function getAssociatedType_6(){
  return TYPE_7;
}
;
var TYPE_7;
var Lcom_itangsoft_notebook_example_views_eventbus_event_AnnotationEvent_2_classLit = createForClass('com.itangsoft.notebook.example.views.eventbus.event', 'AnnotationEvent', 436);
function $clinit_CustomizeEvent(){
  $clinit_CustomizeEvent = emptyMethod;
  TYPE_8 = new Event$Type;
}

function $dispatch_4(this$static, handler){
  $lambda$0_2(handler.$$outer_0, this$static);
}

function CustomizeEvent(){
  $clinit_CustomizeEvent();
  this.name_0 = 'MyEvent2';
  this.message_0 = '\u4F60\u80FD\u770B\u5230\u8FD9\u6761\u4FE1\u606F\u662F\u56E0\u4E3A\u4F60\u89E6\u53D1\u4E86\u8BE5\u4E8B\u4EF6';
}

defineClass(446, 823, {}, CustomizeEvent);
_.dispatch = function dispatch_7(handler){
  $dispatch_4(this, castTo(handler, 846));
}
;
_.getAssociatedType = function getAssociatedType_7(){
  return TYPE_8;
}
;
var TYPE_8;
var Lcom_itangsoft_notebook_example_views_eventbus_event_CustomizeEvent_2_classLit = createForClass('com.itangsoft.notebook.example.views.eventbus.event', 'CustomizeEvent', 446);
function $lambda$0_2(this$static, e_0){
  var currentValue, message;
  message = '\u6211\u662F' + e_0.name_0 + '\uFF0C' + e_0.message_0 + '\uFF0C\u7B2C ' + castTo($get(this$static.context.applicationContext, 'counter2'), 68).value_0 + ' \u6B21\u89E6\u53D1';
  currentValue = $getValue_2(castTo($get(this$static.context.applicationContext, 'textArea2'), 98));
  currentValue != null && currentValue.length != 0 && (message = currentValue + '\r\n' + message);
  $value(castTo($get(this$static.context.applicationContext, 'textArea2'), 98), message);
  $setCounter2(this$static.context, castTo($get(this$static.context.applicationContext, 'counter2'), 68).value_0 + 1);
}

function CustomizeEventHandler(){
}

defineClass(444, 827, {}, CustomizeEventHandler);
var Lcom_itangsoft_notebook_example_views_eventbus_handler_CustomizeEventHandler_2_classLit = createForClass('com.itangsoft.notebook.example.views.eventbus.handler', 'CustomizeEventHandler', 444);
function CustomizeEventHandler$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(445, 1, {846:1}, CustomizeEventHandler$lambda$0$Type);
var Lcom_itangsoft_notebook_example_views_eventbus_handler_CustomizeEventHandler$lambda$0$Type_2_classLit = createForClass('com.itangsoft.notebook.example.views.eventbus.handler', 'CustomizeEventHandler/lambda$0$Type', 445);
function $clinit_ContentComponent(){
  $clinit_ContentComponent = emptyMethod;
  new ConsoleLoggerAdapter(($ensureNamesAreInitialized(Lcom_itangsoft_notebook_example_views_layout_content_ContentComponent_2_classLit) , Lcom_itangsoft_notebook_example_views_layout_content_ContentComponent_2_classLit.typeName));
}

function $lambda$0_3(contentDiv_1, s_1){
  var convertedHtml, e;
  try {
    convertedHtml = $wnd.marked.parse(s_1);
    contentDiv_1.wrappedElement.innerHTML = (new SafeHtmlString($appendHtmlConstant(new SafeHtmlBuilder, convertedHtml).sb.string)).html;
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 16)) {
      e = $e0;
      ($clinit_ConsoleLoggerAdapter() , ERROR_ENABLED) && ($clinit_DomGlobal() , $wnd.goog.global.console).error('Markdown\u7B14\u8BB0\u6E32\u67D3\u5931\u8D25', e);
    }
     else 
      throw toJs($e0);
  }
}

function ContentComponent(){
  $clinit_ContentComponent();
  AbstractComponent.call(this);
}

defineClass(556, 112, {}, ContentComponent);
var Lcom_itangsoft_notebook_example_views_layout_content_ContentComponent_2_classLit = createForClass('com.itangsoft.notebook.example.views.layout.content', 'ContentComponent', 556);
function ContentComponent$lambda$0$Type(contentDiv_1){
  this.contentDiv_1 = contentDiv_1;
}

defineClass(557, 1, {}, ContentComponent$lambda$0$Type);
_.onSuccess = function onSuccess(arg0){
  $lambda$0_3(this.contentDiv_1, castToString(arg0));
}
;
var Lcom_itangsoft_notebook_example_views_layout_content_ContentComponent$lambda$0$Type_2_classLit = createForClass('com.itangsoft.notebook.example.views.layout.content', 'ContentComponent/lambda$0$Type', 557);
function ContentComponent$lambda$1$Type(){
}

defineClass(558, 1, {}, ContentComponent$lambda$1$Type);
_.onFail = function onFail_0(arg0){
  $clinit_ContentComponent();
  $error('Error: ', arg0.throwable);
}
;
var Lcom_itangsoft_notebook_example_views_layout_content_ContentComponent$lambda$1$Type_2_classLit = createForClass('com.itangsoft.notebook.example.views.layout.content', 'ContentComponent/lambda$1$Type', 558);
function $clinit_ContentController(){
  $clinit_ContentController = emptyMethod;
  new ConsoleLoggerAdapter(($ensureNamesAreInitialized(Lcom_itangsoft_notebook_example_views_layout_content_ContentController_2_classLit) , Lcom_itangsoft_notebook_example_views_layout_content_ContentController_2_classLit.typeName));
}

function $setFileName(this$static, fileName){
  this$static.fileName = fileName;
}

function ContentController(){
  $clinit_ContentController();
  BaseComponentController.call(this);
}

defineClass(156, 128, {61:1, 156:1, 849:1}, ContentController);
var Lcom_itangsoft_notebook_example_views_layout_content_ContentController_2_classLit = createForClass('com.itangsoft.notebook.example.views.layout.content', 'ContentController', 156);
function ContentControllerCreatorImpl(router, context, eventBus){
  AbstractControllerCreator.call(this, router, context, eventBus);
}

defineClass(429, 124, $intern_5, ContentControllerCreatorImpl);
_.create_1 = function create_4(route){
  var controller, controllerInstance, storedController;
  controllerInstance = new ControllerInstance;
  controllerInstance.controllerCreator = this;
  controllerInstance.controllerClassName = 'com.itangsoft.notebook.example.views.layout.content.ContentController';
  storedController = $getControllerFormStore(($clinit_ControllerFactory() , INSTANCE_3), 'com.itangsoft.notebook.example.views.layout.content.ContentController');
  if (!storedController) {
    controller = new ContentController;
    controllerInstance.controller_0 = controller;
    controllerInstance.cached = false;
    $setContext(controller, this.context);
    $setEventBus(controller, this.eventBus);
    $setRouter(controller, this.router);
    controller.cached = false;
    controller.relatedRoute = route;
    controller.relatedSelector = 'layout-content';
    $setActivateNaluCommand(controller, new ContentControllerCreatorImpl$lambda$0$Type);
  }
   else {
    controllerInstance.controller_0 = storedController;
    controllerInstance.cached = true;
    controllerInstance.controller_0.cached = true;
  }
  return controllerInstance;
}
;
_.onFinishCreating = function onFinishCreating_2(object){
  var component, controller, contentDiv;
  controller = castTo(object, 156);
  component = new ContentComponent;
  component.controller_0 = controller;
  controller.component = component;
  contentDiv = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element), 'markdown-body'), 3);
  $execute($onFailed($onSuccess($getFileContent(castTo(component.controller_0, 849).fileName), new ContentComponent$lambda$0$Type(contentDiv)), new ContentComponent$lambda$1$Type));
  $initElement(component, castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), contentDiv), 3).wrappedElement);
}
;
_.setParameter = function setParameter_0(object, parameterKeys, parameterValues){
  var controller, i;
  controller = castTo(object, 156);
  if (!!parameterKeys && !!parameterValues) {
    for (i = 0; i < parameterKeys.size(); i++) {
      $equals_1('fileName', parameterKeys.getAtIndex(i)) && $setFileName(controller, (checkCriticalElementIndex(i, parameterValues.array.length) , castToString(parameterValues.array[i])));
    }
  }
}
;
var Lcom_itangsoft_notebook_example_views_layout_content_ContentControllerCreatorImpl_2_classLit = createForClass('com.itangsoft.notebook.example.views.layout.content', 'ContentControllerCreatorImpl', 429);
function ContentControllerCreatorImpl$lambda$0$Type(){
}

defineClass(430, 1, {}, ContentControllerCreatorImpl$lambda$0$Type);
_.execute = function execute_0(){
}
;
var Lcom_itangsoft_notebook_example_views_layout_content_ContentControllerCreatorImpl$lambda$0$Type_2_classLit = createForClass('com.itangsoft.notebook.example.views.layout.content', 'ContentControllerCreatorImpl/lambda$0$Type', 430);
function $clinit_LeftPanelComponent(){
  $clinit_LeftPanelComponent = emptyMethod;
  new ConsoleLoggerAdapter(($ensureNamesAreInitialized(Lcom_itangsoft_notebook_example_views_layout_leftpanel_LeftPanelComponent_2_classLit) , Lcom_itangsoft_notebook_example_views_layout_leftpanel_LeftPanelComponent_2_classLit.typeName));
}

function $buildMenuItem(this$static, menu, mapping){
  var subMenuList, treeItem, treeItem0;
  if (menu.folder) {
    treeItem0 = $setExpandIcon((treeItem = new TreeItem(menu.name_0, create_12('folder')) , treeItem), create_12('folder_open'));
  }
   else {
    treeItem0 = $setActiveIcon((treeItem = new TreeItem(menu.name_0, create_12('insert_drive_file')) , treeItem), new MdiIcon('mdi-file-check-outline'));
    $addClickListener_1(treeItem0, new LeftPanelComponent$lambda$3$Type(this$static, menu));
  }
  !!(subMenuList = castTo(mapping.get(menu.id_0), 18)) && !subMenuList.isEmpty() && subMenuList.forEach_0(new LeftPanelComponent$lambda$4$Type(this$static, mapping, treeItem0));
  menu.expand && $show_3(treeItem0, false);
  return treeItem0;
}

function $buildMenuTree(this$static, menuTree, menus){
  var mapping, menu, menu$iterator, tempList;
  mapping = new HashMap;
  for (menu$iterator = menus.iterator(); menu$iterator.hasNext_0();) {
    menu = castTo(menu$iterator.next_1(), 45);
    if (menu.parentId == null || $equals_1('', menu.parentId)) {
      continue;
    }
    tempList = new ArrayList;
    $hasStringValue(mapping, menu.parentId) && (tempList = castTo($getStringValue(mapping, menu.parentId), 18));
    tempList.add(menu);
    $putStringValue(mapping, menu.parentId, tempList);
  }
  menus.forEach_0(new LeftPanelComponent$lambda$2$Type(this$static, mapping, menuTree));
}

function $lambda$0_4(this$static, menuTree_1, response_1){
  var e;
  try {
    $buildMenuTree(this$static, menuTree_1, response_1);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 16)) {
      e = $e0;
      ($clinit_ConsoleLoggerAdapter() , ERROR_ENABLED) && ($clinit_DomGlobal() , $wnd.goog.global.console).error('\u83DC\u5355\u6E32\u67D3\u5931\u8D25', e);
    }
     else 
      throw toJs($e0);
  }
}

function $lambda$2(this$static, mapping_1, menuTree_2, menu_2){
  var treeItem;
  if (menu_2.parentId == null || $equals_1('', menu_2.parentId)) {
    treeItem = $buildMenuItem(this$static, menu_2, mapping_1);
    $appendChild_3(menuTree_2, treeItem);
  }
}

function $lambda$3(this$static, menu_1){
  $openFile(castTo(this$static.controller_0, 851), menu_1.markdown);
}

function $lambda$4(this$static, mapping_1, treeItem_2, subMenu_2){
  var subTreeItem;
  subTreeItem = $buildMenuItem(this$static, subMenu_2, mapping_1);
  $appendChild_4(treeItem_2, subTreeItem);
}

function LeftPanelComponent(){
  $clinit_LeftPanelComponent();
  AbstractComponent.call(this);
}

defineClass(572, 112, {}, LeftPanelComponent);
var Lcom_itangsoft_notebook_example_views_layout_leftpanel_LeftPanelComponent_2_classLit = createForClass('com.itangsoft.notebook.example.views.layout.leftpanel', 'LeftPanelComponent', 572);
function LeftPanelComponent$lambda$0$Type($$outer_0, menuTree_1){
  this.$$outer_0 = $$outer_0;
  this.menuTree_1 = menuTree_1;
}

defineClass(573, 1, {}, LeftPanelComponent$lambda$0$Type);
_.onSuccess = function onSuccess_0(arg0){
  $lambda$0_4(this.$$outer_0, this.menuTree_1, castTo(arg0, 18));
}
;
var Lcom_itangsoft_notebook_example_views_layout_leftpanel_LeftPanelComponent$lambda$0$Type_2_classLit = createForClass('com.itangsoft.notebook.example.views.layout.leftpanel', 'LeftPanelComponent/lambda$0$Type', 573);
function LeftPanelComponent$lambda$1$Type(){
}

defineClass(574, 1, {}, LeftPanelComponent$lambda$1$Type);
_.onFail = function onFail_1(arg0){
  $clinit_LeftPanelComponent();
  $error('Error: ', arg0.throwable);
}
;
var Lcom_itangsoft_notebook_example_views_layout_leftpanel_LeftPanelComponent$lambda$1$Type_2_classLit = createForClass('com.itangsoft.notebook.example.views.layout.leftpanel', 'LeftPanelComponent/lambda$1$Type', 574);
function LeftPanelComponent$lambda$2$Type($$outer_0, mapping_1, menuTree_2){
  this.$$outer_0 = $$outer_0;
  this.mapping_1 = mapping_1;
  this.menuTree_2 = menuTree_2;
}

defineClass(575, 1, {}, LeftPanelComponent$lambda$2$Type);
_.accept = function accept_21(arg0){
  $lambda$2(this.$$outer_0, this.mapping_1, this.menuTree_2, castTo(arg0, 45));
}
;
var Lcom_itangsoft_notebook_example_views_layout_leftpanel_LeftPanelComponent$lambda$2$Type_2_classLit = createForClass('com.itangsoft.notebook.example.views.layout.leftpanel', 'LeftPanelComponent/lambda$2$Type', 575);
function LeftPanelComponent$lambda$3$Type($$outer_0, menu_1){
  this.$$outer_0 = $$outer_0;
  this.menu_1 = menu_1;
}

defineClass(576, 1, {}, LeftPanelComponent$lambda$3$Type);
_.handleEvent = function handleEvent_5(arg0){
  $lambda$3(this.$$outer_0, this.menu_1);
}
;
var Lcom_itangsoft_notebook_example_views_layout_leftpanel_LeftPanelComponent$lambda$3$Type_2_classLit = createForClass('com.itangsoft.notebook.example.views.layout.leftpanel', 'LeftPanelComponent/lambda$3$Type', 576);
function LeftPanelComponent$lambda$4$Type($$outer_0, mapping_1, treeItem_2){
  this.$$outer_0 = $$outer_0;
  this.mapping_1 = mapping_1;
  this.treeItem_2 = treeItem_2;
}

defineClass(577, 1, {}, LeftPanelComponent$lambda$4$Type);
_.accept = function accept_22(arg0){
  $lambda$4(this.$$outer_0, this.mapping_1, this.treeItem_2, castTo(arg0, 45));
}
;
var Lcom_itangsoft_notebook_example_views_layout_leftpanel_LeftPanelComponent$lambda$4$Type_2_classLit = createForClass('com.itangsoft.notebook.example.views.layout.leftpanel', 'LeftPanelComponent/lambda$4$Type', 577);
function $clinit_LeftPanelController(){
  $clinit_LeftPanelController = emptyMethod;
  new ConsoleLoggerAdapter(($ensureNamesAreInitialized(Lcom_itangsoft_notebook_example_views_layout_leftpanel_LeftPanelController_2_classLit) , Lcom_itangsoft_notebook_example_views_layout_leftpanel_LeftPanelController_2_classLit.typeName));
}

function $openFile(this$static, fileName){
  ($clinit_ConsoleLoggerAdapter() , INFO_ENABLED_0) && ($clinit_DomGlobal() , $wnd.goog.global.console).info(fileName);
  $route_0(this$static.router, '/example-layout-shell/single-page-layout/home/content/:fileName', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, [fileName]));
}

function LeftPanelController(){
  $clinit_LeftPanelController();
  BaseComponentController.call(this);
}

defineClass(183, 128, {61:1, 851:1, 183:1}, LeftPanelController);
var Lcom_itangsoft_notebook_example_views_layout_leftpanel_LeftPanelController_2_classLit = createForClass('com.itangsoft.notebook.example.views.layout.leftpanel', 'LeftPanelController', 183);
function LeftPanelControllerCreatorImpl(router, context, eventBus){
  AbstractControllerCreator.call(this, router, context, eventBus);
}

defineClass(442, 124, $intern_5, LeftPanelControllerCreatorImpl);
_.create_1 = function create_5(route){
  var controller, controllerInstance, storedController;
  controllerInstance = new ControllerInstance;
  controllerInstance.controllerCreator = this;
  controllerInstance.controllerClassName = 'com.itangsoft.notebook.example.views.layout.leftpanel.LeftPanelController';
  storedController = $getControllerFormStore(($clinit_ControllerFactory() , INSTANCE_3), 'com.itangsoft.notebook.example.views.layout.leftpanel.LeftPanelController');
  if (!storedController) {
    controller = new LeftPanelController;
    controllerInstance.controller_0 = controller;
    controllerInstance.cached = false;
    $setContext(controller, this.context);
    $setEventBus(controller, this.eventBus);
    $setRouter(controller, this.router);
    controller.cached = false;
    controller.relatedRoute = route;
    controller.relatedSelector = 'layout-left-panel';
    $setActivateNaluCommand(controller, new LeftPanelControllerCreatorImpl$lambda$0$Type);
  }
   else {
    controllerInstance.controller_0 = storedController;
    controllerInstance.cached = true;
    controllerInstance.controller_0.cached = true;
  }
  return controllerInstance;
}
;
_.onFinishCreating = function onFinishCreating_3(object){
  var component, controller, menuTree;
  controller = castTo(object, 183);
  component = new LeftPanelComponent;
  component.controller_0 = controller;
  controller.component = component;
  menuTree = $enableFolding($enableSearch($setAutoCollapse(new Tree)));
  $execute($onFailed($onSuccess(new MenuServiceFactory$MenuService_queryMenus, new LeftPanelComponent$lambda$0$Type(component, menuTree)), new LeftPanelComponent$lambda$1$Type));
  $initElement(component, castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element), menuTree), 3).wrappedElement);
}
;
_.setParameter = function setParameter_1(object, parameterKeys, parameterValues){
}
;
var Lcom_itangsoft_notebook_example_views_layout_leftpanel_LeftPanelControllerCreatorImpl_2_classLit = createForClass('com.itangsoft.notebook.example.views.layout.leftpanel', 'LeftPanelControllerCreatorImpl', 442);
function LeftPanelControllerCreatorImpl$lambda$0$Type(){
}

defineClass(443, 1, {}, LeftPanelControllerCreatorImpl$lambda$0$Type);
_.execute = function execute_1(){
}
;
var Lcom_itangsoft_notebook_example_views_layout_leftpanel_LeftPanelControllerCreatorImpl$lambda$0$Type_2_classLit = createForClass('com.itangsoft.notebook.example.views.layout.leftpanel', 'LeftPanelControllerCreatorImpl/lambda$0$Type', 443);
function $clinit_LoginFilter(){
  $clinit_LoginFilter = emptyMethod;
  new ConsoleLoggerAdapter(($ensureNamesAreInitialized(Lcom_itangsoft_notebook_filter_LoginFilter_2_classLit) , Lcom_itangsoft_notebook_filter_LoginFilter_2_classLit.typeName));
}

function $filter(this$static, route){
  return $equals_1('admin', $getUserName(this$static.context)) || $equals_1('/auth/login', route) || $equals_1(route.substr(0, 8), '/example');
}

function LoginFilter(){
  $clinit_LoginFilter();
}

defineClass(411, 826, {793:1}, LoginFilter);
var Lcom_itangsoft_notebook_filter_LoginFilter_2_classLit = createForClass('com.itangsoft.notebook.filter', 'LoginFilter', 411);
var Lorg_jboss_elemento_IsElement_2_classLit = createForInterface('org.jboss.elemento', 'IsElement');
function $addClickListener(this$static, listener){
  this$static.buttonElement.wrappedElement.addEventListener(($clinit_EventType() , click_0).name_0, listener);
  return this$static.element_0;
}

function $addCss(this$static, cssClass){
  $addCss_1((this$static.styleInitializer.apply_1() , this$static.style_0), cssClass);
  return this$static;
}

function $addCss_0(this$static, cssClass){
  $addCss_2((this$static.styleInitializer.apply_1() , this$static.style_0), cssClass);
  return this$static.element_0;
}

function $addEventListener(this$static, type_0, listener){
  this$static.element_3().addEventListener(type_0, listener);
  return this$static.element_0;
}

function $addEventListener_0(this$static, type_0, listener, options){
  $addEventListener_2(this$static.wrappedElement, type_0, listener, options.options);
  return this$static.element_0;
}

function $addEventListener_1(this$static, type_0, listener){
  this$static.wrappedElement.addEventListener(type_0.name_0, listener);
  return this$static.element_0;
}

function $addHideListener(this$static, handler){
  $addHideHandler(this$static.getCollapsible(), handler);
  return this$static;
}

function $appendChild(this$static, node){
  this$static.element_0.element_3().appendChild(node);
  return this$static.element_0;
}

function $appendChild_0(this$static, isElement){
  this$static.element_0.element_3().appendChild(isElement.element_3());
  return this$static.element_0;
}

function $apply(this$static, elementHandler){
  elementHandler.handleElement(this$static.element_0);
  return this$static.element_0;
}

function $attr(this$static, name_0, value_0){
  return this$static.wrappedElement.setAttribute(name_0, value_0) , this$static.element_0;
}

function $clearElement(this$static){
  clear_12(this$static.wrappedElement);
  return this$static.element_0;
}

function $containsCss(this$static, cssClass){
  return $containsCss_0((this$static.styleInitializer.apply_1() , this$static.style_0), cssClass);
}

function $css(this$static, cssClass){
  $addCss_1((this$static.styleInitializer.apply_1() , this$static.style_0), cssClass);
  return this$static.element_0;
}

function $css_0(this$static, cssClasses){
  $addCss_2((this$static.styleInitializer.apply_1() , this$static.style_0), cssClasses);
  return this$static.element_0;
}

function $elevate(this$static, elevation){
  this$static.elevation?$removeCss(this$static, this$static.elevation.style_0):removeFrom_0(this$static.element_3());
  this$static.elevation = elevation;
  $addCss(this$static, this$static.elevation.style_0);
  return this$static;
}

function $getAttribute(this$static, name_0){
  return this$static.element_3().getAttribute(name_0);
}

function $getId(this$static){
  this$static.dominoUuidInitializer.apply_1();
  return this$static.wrappedElement.id;
}

function $hasAttribute(this$static, name_0){
  return this$static.element_3().hasAttribute(name_0);
}

function $hasDirectChild(this$static, node){
  var parentNode;
  parentNode = node.parentNode;
  if (parentNode == null) {
    return false;
  }
  return equals_Ljava_lang_Object__Z__devirtual$(parentNode, this$static.element_0.element_3());
}

function $hide(this$static){
  $hide_0(this$static.getCollapsible());
  return this$static.element_0;
}

function $init(this$static, element){
  this$static.element_0 = element;
  this$static.dominoUuidInitializer = new BaseDominoElement$lambda$0$Type(this$static);
  this$static.styleInitializer = new BaseDominoElement$lambda$2$Type(this$static, element);
}

function $insertBefore(this$static, newNode, otherNode){
  this$static.wrappedElement.insertBefore(newNode.wrappedElement, otherNode);
  return this$static.element_0;
}

function $insertBefore_0(this$static, newNode, otherNode){
  this$static.wrappedElement.insertBefore(newNode.wrappedElement, otherNode.wrappedElement);
  return this$static.element_0;
}

function $insertFirst(this$static, newNode){
  this$static.wrappedElement.insertBefore(newNode.element_3(), this$static.wrappedElement.firstChild);
  return this$static.element_0;
}

function $isAttached(this$static){
  this$static.dominoUuidInitializer.apply_1();
  return ($clinit_DomGlobal() , document_0).body.querySelector("[domino-uuid='" + this$static.uuid + "']") != null;
}

function $isEmptyElement(this$static){
  return $intValue(this$static.wrappedElement.childElementCount) == 0 && (this$static.wrappedElement.textContent == null || this$static.wrappedElement.textContent.length == 0);
}

function $isEqualNode(this$static, node){
  return this$static.wrappedElement.isEqualNode(node);
}

function $lambda$0_5(this$static){
  if (this$static.element_3().hasAttribute('domino-uuid') && this$static.element_3().getAttribute('domino-uuid') != null && this$static.element_3().getAttribute('domino-uuid').length != 0) {
    this$static.uuid = this$static.element_3().getAttribute('domino-uuid');
  }
   else {
    this$static.uuid = ($clinit_DominoId() , unique());
    $setAttribute_0(this$static, 'domino-uuid', this$static.uuid);
    this$static.element_3().hasAttribute('id') && this$static.element_3().getAttribute('id') != null && this$static.element_3().getAttribute('id').length != 0 || (this$static.element_3().id = this$static.uuid);
  }
  this$static.dominoUuidInitializer = new BaseDominoElement$lambda$1$Type;
}

function $lambda$2_0(this$static, element_1){
  this$static.style_0 = new Style(element_1);
  this$static.styleInitializer = new BaseDominoElement$lambda$3$Type;
}

function $lambda$4_0(this$static, evt_0){
  var cevent;
  cevent = evt_0;
  $forEach_0(this$static.attachObservers, new BaseDominoElement$lambda$5$Type(cevent));
}

function $lambda$6(this$static, evt_0){
  var cevent;
  cevent = evt_0;
  $forEach_0(this$static.detachObservers, new BaseDominoElement$lambda$7$Type(cevent));
}

function $nowOrWhenAttached(this$static, handler){
  this$static.dominoUuidInitializer.apply_1();
  ($clinit_DomGlobal() , document_0).body.querySelector("[domino-uuid='" + this$static.uuid + "']") != null?handler.run():$onAttached(this$static, new BaseDominoElement$lambda$8$Type(handler));
  this$static.dominoUuidInitializer.apply_1();
  return this$static;
}

function $onAttached(this$static, observerCallback){
  if (!this$static.attachEventListener) {
    $hasAttribute(this$static, ATTACH_UID_KEY) || $setAttribute_0(this$static, ATTACH_UID_KEY, ($clinit_DominoId() , unique()));
    this$static.attachEventListener = new BaseDominoElement$lambda$4$Type(this$static);
    this$static.element_0.element_3().addEventListener('dui-attached-' + $getAttribute(this$static, ATTACH_UID_KEY), this$static.attachEventListener);
  }
  $add_0(this$static.attachObservers, observerCallback);
  $clinit_ElementUtil();
  startObserving();
  return this$static.element_0;
}

function $onDetached(this$static, observerCallback){
  if (!this$static.detachEventListener) {
    $hasAttribute(this$static, DETACH_UID_KEY) || $setAttribute_0(this$static, DETACH_UID_KEY, ($clinit_DominoId() , unique()));
    this$static.detachEventListener = new BaseDominoElement$lambda$6$Type(this$static);
    this$static.element_0.element_3().addEventListener('dui-detached-' + $getAttribute(this$static, DETACH_UID_KEY), this$static.detachEventListener);
  }
  $add_0(this$static.detachObservers, observerCallback);
  $clinit_ElementUtil();
  startObserving();
  return this$static.element_0;
}

function $querySelectorAll(this$static, selectors){
  var elements;
  elements = this$static.element_0.element_3().querySelectorAll(selectors);
  return castTo($collect($map($map(new StreamImpl(null, new Spliterators$IteratorSpliterator($asList(elements), 16)), new BaseDominoElement$0methodref$uncheckedCast$Type), new BaseDominoElement$1methodref$of$Type), of_1(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$42$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_0, 29, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)]))), 18);
}

function $remove_0(this$static){
  this$static.element_3().remove();
  return this$static.element_0;
}

function $removeAttribute(this$static, name_0){
  this$static.wrappedElement.removeAttribute(name_0);
  return this$static.element_0;
}

function $removeCss(this$static, cssClass){
  $removeCss_1((this$static.styleInitializer.apply_1() , this$static.style_0), cssClass);
  return this$static;
}

function $removeCss_0(this$static, cssClass){
  $removeCss_2((this$static.styleInitializer.apply_1() , this$static.style_0), cssClass);
  return this$static.element_0;
}

function $removeCssProperty(this$static, name_0){
  $removeCssProperty_0((this$static.styleInitializer.apply_1() , this$static.style_0), name_0);
  return this$static;
}

function $removeEventListener(this$static, type_0, listener){
  this$static.wrappedElement.removeEventListener(type_0, listener);
  return this$static.element_0;
}

function $setAlignItems(this$static){
  $setAlignItems_0((this$static.styleInitializer.apply_1() , this$static.style_0));
  return this$static;
}

function $setAttribute(this$static, name_0, value_0){
  this$static.wrappedElement.setAttribute(name_0, value_0);
  return this$static.element_0;
}

function $setAttribute_0(this$static, name_0, value_0){
  this$static.element_3().setAttribute(name_0, value_0);
  return this$static.element_0;
}

function $setAttribute_1(this$static, name_0, value_0){
  this$static.wrappedElement.setAttribute(name_0, value_0);
  return this$static.element_0;
}

function $setBorder(this$static){
  $setBorder_0((this$static.styleInitializer.apply_1() , this$static.style_0), '3px solid #9E9E9E');
  return this$static;
}

function $setCollapseStrategy(this$static, strategy){
  $setStrategy(this$static.getCollapsible(), strategy);
  return this$static;
}

function $setColor(this$static){
  $setColor_3((this$static.styleInitializer.apply_1() , this$static.style_0));
  return this$static;
}

function $setCssProperty(this$static, name_0, value_0){
  $setCssProperty_0((this$static.styleInitializer.apply_1() , this$static.style_0), name_0, value_0);
  return this$static;
}

function $setDisplay(this$static){
  $setDisplay_0((this$static.styleInitializer.apply_1() , this$static.style_0), 'flex');
  return this$static;
}

function $setFlex(this$static){
  $setFlex_0((this$static.styleInitializer.apply_1() , this$static.style_0));
  return this$static;
}

function $setFontSize(this$static, fontSize){
  $setFontSize_0((this$static.styleInitializer.apply_1() , this$static.style_0), fontSize);
  return this$static;
}

function $setHeight(this$static){
  $setHeight_0((this$static.styleInitializer.apply_1() , this$static.style_0), '100%');
  return this$static.element_0;
}

function $setId(this$static, id_0){
  this$static.element_3().id = id_0;
  return this$static.element_0;
}

function $setInnerHtml(this$static, html){
  this$static.wrappedElement.innerHTML = (new SafeHtmlString($appendHtmlConstant(new SafeHtmlBuilder, html).sb.string)).html;
  return this$static.element_0;
}

function $setMarginBottom(this$static, margin){
  $setMarginBottom_0((this$static.styleInitializer.apply_1() , this$static.style_0), margin);
  return this$static;
}

function $setMarginLeft(this$static){
  $setMarginLeft_0((this$static.styleInitializer.apply_1() , this$static.style_0));
  return this$static;
}

function $setMarginRight(this$static){
  $setMarginRight_0((this$static.styleInitializer.apply_1() , this$static.style_0));
  return this$static;
}

function $setMarginTop(this$static){
  $setMarginTop_0((this$static.styleInitializer.apply_1() , this$static.style_0));
  return this$static;
}

function $setTabIndex(this$static){
  this$static.wrappedElement.tabIndex = -1;
  return this$static.element_0;
}

function $setTextContent(this$static, text_0){
  this$static.element_3().textContent = text_0;
  return this$static.element_0;
}

function $setTransitionDuration(this$static, transactionDuration){
  $setTransitionDuration_0((this$static.styleInitializer.apply_1() , this$static.style_0), transactionDuration);
  return this$static;
}

function $setWidth(this$static){
  $setWidth_0((this$static.styleInitializer.apply_1() , this$static.style_0));
  return this$static.element_0;
}

function $setZIndex(this$static, zindex){
  this$static.element_3().setAttribute('dui-z-index', zindex);
  $setZIndex_0((this$static.styleInitializer.apply_1() , this$static.style_0), zindex);
  return this$static;
}

function $show(this$static){
  $show_1(this$static.getCollapsible());
  return this$static.element_0;
}

function $style(this$static){
  this$static.styleInitializer.apply_1();
  return this$static.style_0;
}

function $style_0(this$static, style){
  this$static.wrappedElement.style.cssText = style;
  return this$static;
}

function $styler(this$static, styleEditor){
  styleEditor.applyStyles((this$static.styleInitializer.apply_1() , this$static.style_0));
  return this$static.element_0;
}

function $textContent(this$static, text_0){
  this$static.element_3().textContent = text_0;
  return this$static.element_0;
}

function $toggleDisplay(this$static, state){
  $toggleDisplay_1(this$static.getCollapsible(), state);
  return this$static.element_0;
}

function BaseDominoElement(){
  this.attachObservers = new ArrayList;
  this.detachObservers = new ArrayList;
  $clinit_Optional();
  new HashMap;
}

function lambda$5(cevent_0, callback_1){
  callback_1.onObserved(cevent_0.detail);
}

function lambda$7(cevent_0, observer_1){
  observer_1.onObserved(cevent_0.detail);
}

defineClass(12, 1, $intern_15);
_.getCollapsible = function getCollapsible(){
  return !this.collapsible_0 && (this.collapsible_0 = new Collapsible(this.element_3())) , this.collapsible_0;
}
;
_.remove_0 = function remove_0(){
  return $remove_0(this);
}
;
var ATTACH_UID_KEY = 'dui-on-attach-uid', DETACH_UID_KEY = 'dui-on-detach-uid';
var Lorg_dominokit_domino_ui_utils_BaseDominoElement_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'BaseDominoElement', 12);
function $setAvatar(this$static, word){
  $appendChild_0(castTo($clearElement(this$static.header.avatar), 3), $setAttribute_0(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element), 'alt', word));
}

function $setLogo(this$static, image){
  $appendChild(castTo($clearElement(this$static.header.logo), 3), image);
}

function $setVersion(this$static, version){
  $appendChild(castTo($clearElement(this$static.footer.middleElement), 3), of_4('\u8F6F\u4EF6\u7248\u672C\uFF1A' + version));
}

function $show_0(this$static, theme){
  $apply_2(new Theme(theme));
  $isAttached(this$static.root_0) || ($clinit_DomGlobal() , document_0).body.appendChild(this$static.root_0.wrappedElement);
  return this$static;
}

function AppLayout(){
  BaseDominoElement.call(this);
  this.root_0 = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element), 'app-layout'), 3);
  this.header = new Header;
  this.body_0 = new Body;
  this.footer = new Footer;
  $init(this, this);
  $appendChild_0(this.root_0, $appendChild_0(castTo($appendChild_0(castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), this.header), 3), this.body_0), 3), this.footer));
}

defineClass(184, 12, $intern_15, AppLayout);
_.element_3 = function element_3(){
  return castToNative(this.root_0.wrappedElement, $wnd.HTMLDivElement);
}
;
var Lcom_itangsoft_notebook_layout_AppLayout_2_classLit = createForClass('com.itangsoft.notebook.layout', 'AppLayout', 184);
function Body(){
  BaseDominoElement.call(this);
  this.root_0 = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('section'), $wnd.HTMLElement))).element), 'layout-body'), 3);
  this.mainContainer = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('section'), $wnd.HTMLElement))).element), 'layout-body-main'), 3);
  this.leftPanel = new LeftPanel;
  this.content_0 = new Content;
  this.rightPanel = new RightPanel;
  $init(this, this);
  $appendChild_0(this.root_0, $appendChild_0(this.mainContainer, $css(castTo($appendChild_0(castTo($appendChild_0(castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), this.leftPanel), 3), this.content_0), 3), this.rightPanel), 3), 'layout-middle-container')));
}

defineClass(585, 12, $intern_15, Body);
_.element_3 = function element_4(){
  return this.root_0.wrappedElement;
}
;
var Lcom_itangsoft_notebook_layout_Body_2_classLit = createForClass('com.itangsoft.notebook.layout', 'Body', 585);
function Content(){
  BaseDominoElement.call(this);
  this.root_0 = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element), 'layout-content'), 3);
  $init(this, this);
}

defineClass(544, 12, $intern_15, Content);
_.element_3 = function element_5(){
  return castToNative(this.root_0.wrappedElement, $wnd.HTMLDivElement);
}
;
var Lcom_itangsoft_notebook_layout_Content_2_classLit = createForClass('com.itangsoft.notebook.layout', 'Content', 544);
function Footer(){
  BaseDominoElement.call(this);
  this.root_0 = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('footer'), $wnd.HTMLElement))).element), 'layout-footer'), 3);
  this.leftElement = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), 'layout-footer-left'), 3);
  this.middleElement = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), 'layout-footer-middle'), 3);
  this.rightElement = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), 'layout-footer-right'), 3);
  $init(this, this);
  $appendChild_0(this.root_0, $css(castTo($appendChild_0(castTo($appendChild_0(castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), this.leftElement), 3), this.middleElement), 3), this.rightElement), 3), 'layout-footer-container'));
}

defineClass(586, 12, $intern_15, Footer);
_.element_3 = function element_6(){
  return this.root_0.wrappedElement;
}
;
var Lcom_itangsoft_notebook_layout_Footer_2_classLit = createForClass('com.itangsoft.notebook.layout', 'Footer', 586);
function Header(){
  BaseDominoElement.call(this);
  this.root_0 = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('header'), $wnd.HTMLElement))).element), 'layout-header'), 3);
  this.logo = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('a'), $wnd.HTMLElement))).element), 'layout-header-logo'), 3);
  this.title_0 = new DominoElement($css_1(new HtmlContentBuilder(castToNative(document_0.createElement('a'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['layout-header-title'])).element);
  this.toolbar_0 = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('ul'), $wnd.HTMLElement))).element), 'layout-header-toolbar'), 3);
  this.avatar = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), 'layout-header-avatar'), 3);
  $init(this, this);
  $appendChild_0(this.root_0, $css($appendChild_2($appendChild_2($appendChild_2($appendChild_2(new FlexLayout, castTo($appendChild_0(new FlexItem, this.logo), 20)), $setAlignItems(castTo($setDisplay($setFlex(castTo($appendChild_0(new FlexItem, this.title_0), 20))), 20))), $setMarginRight(castTo($appendChild_0(new FlexItem, this.toolbar_0), 20))), castTo($appendChild_0(new FlexItem, this.avatar), 20)), 'layout-header-container'));
}

defineClass(584, 12, $intern_15, Header);
_.element_3 = function element_7(){
  return this.root_0.wrappedElement;
}
;
var Lcom_itangsoft_notebook_layout_Header_2_classLit = createForClass('com.itangsoft.notebook.layout', 'Header', 584);
function LeftPanel(){
  BaseDominoElement.call(this);
  this.root_0 = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element), 'layout-left-panel'), 3);
  $init(this, this);
}

defineClass(543, 12, $intern_15, LeftPanel);
_.element_3 = function element_8(){
  return castToNative(this.root_0.wrappedElement, $wnd.HTMLDivElement);
}
;
var Lcom_itangsoft_notebook_layout_LeftPanel_2_classLit = createForClass('com.itangsoft.notebook.layout', 'LeftPanel', 543);
function RightPanel(){
  BaseDominoElement.call(this);
  this.root_0 = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element), 'layout-right-panel'), 3);
  this.preferencePanel = new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element);
  this.databasePanel = new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element);
  $init(this, this);
  $hide(castTo($appendChild_0(castTo($appendChild_0(this.preferencePanel, new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element)), 3), new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element)), 3));
  $hide(castTo($appendChild_0(castTo($appendChild_0(this.databasePanel, new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element)), 3), new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element)), 3));
  $appendChild_0(castTo($appendChild_0(this.root_0, this.preferencePanel), 3), this.databasePanel);
}

defineClass(656, 12, $intern_15, RightPanel);
_.element_3 = function element_9(){
  return castToNative(this.root_0.wrappedElement, $wnd.HTMLDivElement);
}
;
var Lcom_itangsoft_notebook_layout_RightPanel_2_classLit = createForClass('com.itangsoft.notebook.layout', 'RightPanel', 656);
function $setExpand(this$static, expand){
  this$static.expand = expand;
}

function $setFolder(this$static, folder){
  this$static.folder = folder;
}

function Menu(){
}

defineClass(45, 1, {45:1}, Menu);
_.expand = false;
_.folder = false;
var Lcom_itangsoft_notebook_model_Menu_2_classLit = createForClass('com.itangsoft.notebook.model', 'Menu', 45);
function $deserialize(this$static, reader, ctx, params){
  if (($clinit_JsonToken() , NULL) == $peek_2(reader)) {
    return $skipValue(reader) , null;
  }
  return this$static.doDeserialize(reader, ctx, params);
}

defineClass(832, 1, {});
var Lorg_dominokit_jackson_JsonDeserializer_2_classLit = createForClass('org.dominokit.jackson', 'JsonDeserializer', 832);
function $deserializeInline(this$static, reader, ctx, bufferedProperties){
  var bean, instance, property, propertyName, requiredPropertiesLeft;
  requiredPropertiesLeft = ($clinit_Collections() , $clinit_Collections() , EMPTY_SET);
  instance = new Instance(new Menu, bufferedProperties);
  bean = instance.instance;
  bufferedProperties = instance.bufferedProperties;
  $flushBufferedProperties(this$static, bean, bufferedProperties, requiredPropertiesLeft, ctx);
  while (($clinit_JsonToken() , NAME) == $peek_2(reader)) {
    propertyName = $nextName(reader);
    $advanceToFind(requiredPropertiesLeft, propertyName, true);
    property = $getPropertyDeserializer(this$static, propertyName, ctx, false);
    property?property.setValue(bean, $deserialize((!property.deserializer && (property.deserializer = property.newDeserializer()) , property.deserializer), reader, ctx, (!property.parameters && (property.parameters = (!jacksonContext && (jacksonContext = new ServerJacksonContext) , $clinit_GwtJacksonJsonDeserializerParameters() , DEFAULT)) , property.parameters)), ctx):$skipValue(reader);
  }
  return bean;
}

function $flushBufferedProperties(this$static, bean, bufferedProperties, requiredPropertiesLeft, ctx){
  var bufferedProperty, bufferedProperty$iterator, property, propertyName;
  if (!!bufferedProperties && !bufferedProperties.isEmpty()) {
    for (bufferedProperty$iterator = bufferedProperties.entrySet().iterator(); bufferedProperty$iterator.hasNext_0();) {
      bufferedProperty = castTo(bufferedProperty$iterator.next_1(), 24);
      propertyName = castToString(bufferedProperty.getKey());
      $advanceToFind(requiredPropertiesLeft, propertyName, true);
      property = $getPropertyDeserializer(this$static, propertyName, ctx, false);
      !!property && $deserialize_0(property, $newJsonReader(castToString(bufferedProperty.getValue_0())), bean, ctx);
    }
  }
}

function $getPropertyDeserializer(this$static, propertyName, ctx, ignoreUnknown){
  var property;
  property = castTo($get_6(this$static.deserializers, propertyName), 91);
  if (!property) {
    if (!ignoreUnknown && ctx.failOnUnknownProperties) {
      throw toJs($traceError("Unknown property '" + propertyName + "' in (de)serializer " + ($ensureNamesAreInitialized(Lcom_itangsoft_notebook_model_MenuBeanJsonDeserializerImpl_2_classLit) , Lcom_itangsoft_notebook_model_MenuBeanJsonDeserializerImpl_2_classLit.canonicalName), null));
    }
  }
  return property;
}

defineClass(658, 832, {});
_.doDeserialize = function doDeserialize(reader, ctx, params){
  var result, result_0;
  $peek_2(reader);
  if (this.instanceBuilder) {
    result = ($beginObject(reader) , result_0 = $deserializeInline(this, reader, ctx, null) , $endObject(reader) , result_0);
  }
   else {
    throw toJs($traceError(($ensureNamesAreInitialized(Lcom_itangsoft_notebook_model_Menu_2_classLit) , 'Cannot instantiate the type ' + Lcom_itangsoft_notebook_model_Menu_2_classLit.typeName), reader));
  }
  return result;
}
;
var Lorg_dominokit_jackson_deser_bean_AbstractBeanJsonDeserializer_2_classLit = createForClass('org.dominokit.jackson.deser.bean', 'AbstractBeanJsonDeserializer', 658);
function $clinit_MenuBeanJsonDeserializerImpl(){
  $clinit_MenuBeanJsonDeserializerImpl = emptyMethod;
  INSTANCE_10 = new MenuBeanJsonDeserializerImpl;
}

function MenuBeanJsonDeserializerImpl(){
  var map_0;
  this.instanceBuilder = new MenuBeanJsonDeserializerImpl$1;
  this.deserializers = (map_0 = (!jacksonContext && (jacksonContext = new ServerJacksonContext) , new JsMapLike) , $put_4(map_0, 'id', new MenuBeanJsonDeserializerImpl$2) , $put_4(map_0, 'name', new MenuBeanJsonDeserializerImpl$3) , $put_4(map_0, 'parentId', new MenuBeanJsonDeserializerImpl$4) , $put_4(map_0, 'folder', new MenuBeanJsonDeserializerImpl$5) , $put_4(map_0, 'expand', new MenuBeanJsonDeserializerImpl$6) , $put_4(map_0, 'markdown', new MenuBeanJsonDeserializerImpl$7) , map_0);
  !jacksonContext && (jacksonContext = new ServerJacksonContext);
  new JsMapLike;
  $clinit_Collections();
}

defineClass(659, 658, {}, MenuBeanJsonDeserializerImpl);
var INSTANCE_10;
var Lcom_itangsoft_notebook_model_MenuBeanJsonDeserializerImpl_2_classLit = createForClass('com.itangsoft.notebook.model', 'MenuBeanJsonDeserializerImpl', 659);
function MenuBeanJsonDeserializerImpl$1(){
}

defineClass(660, 1, {}, MenuBeanJsonDeserializerImpl$1);
var Lcom_itangsoft_notebook_model_MenuBeanJsonDeserializerImpl$1_2_classLit = createForClass('com.itangsoft.notebook.model', 'MenuBeanJsonDeserializerImpl/1', 660);
defineClass(833, 1, {});
var Lorg_dominokit_jackson_deser_bean_HasDeserializer_2_classLit = createForClass('org.dominokit.jackson.deser.bean', 'HasDeserializer', 833);
defineClass(834, 833, {});
var Lorg_dominokit_jackson_deser_bean_HasDeserializerAndParameters_2_classLit = createForClass('org.dominokit.jackson.deser.bean', 'HasDeserializerAndParameters', 834);
function $deserialize_0(this$static, reader, bean, ctx){
  this$static.setValue(bean, $deserialize((!this$static.deserializer && (this$static.deserializer = this$static.newDeserializer()) , this$static.deserializer), reader, ctx, (!this$static.parameters && (this$static.parameters = (!jacksonContext && (jacksonContext = new ServerJacksonContext) , $clinit_GwtJacksonJsonDeserializerParameters() , DEFAULT)) , this$static.parameters)), ctx);
}

defineClass(91, 834, $intern_16);
var Lorg_dominokit_jackson_deser_bean_BeanPropertyDeserializer_2_classLit = createForClass('org.dominokit.jackson.deser.bean', 'BeanPropertyDeserializer', 91);
function $setValue(bean, value_0){
  bean.id_0 = value_0;
}

function MenuBeanJsonDeserializerImpl$2(){
}

defineClass(661, 91, $intern_16, MenuBeanJsonDeserializerImpl$2);
_.setValue = function setValue(bean, value_0, ctx){
  $setValue(bean, castToString(value_0));
}
;
_.newDeserializer = function newDeserializer(){
  return $clinit_StringJsonDeserializer() , $clinit_StringJsonDeserializer() , INSTANCE_17;
}
;
var Lcom_itangsoft_notebook_model_MenuBeanJsonDeserializerImpl$2_2_classLit = createForClass('com.itangsoft.notebook.model', 'MenuBeanJsonDeserializerImpl/2', 661);
function $setValue_0(bean, value_0){
  bean.name_0 = value_0;
}

function MenuBeanJsonDeserializerImpl$3(){
}

defineClass(662, 91, $intern_16, MenuBeanJsonDeserializerImpl$3);
_.setValue = function setValue_0(bean, value_0, ctx){
  $setValue_0(bean, castToString(value_0));
}
;
_.newDeserializer = function newDeserializer_0(){
  return $clinit_StringJsonDeserializer() , $clinit_StringJsonDeserializer() , INSTANCE_17;
}
;
var Lcom_itangsoft_notebook_model_MenuBeanJsonDeserializerImpl$3_2_classLit = createForClass('com.itangsoft.notebook.model', 'MenuBeanJsonDeserializerImpl/3', 662);
function $setValue_1(bean, value_0){
  bean.parentId = value_0;
}

function MenuBeanJsonDeserializerImpl$4(){
}

defineClass(663, 91, $intern_16, MenuBeanJsonDeserializerImpl$4);
_.setValue = function setValue_1(bean, value_0, ctx){
  $setValue_1(bean, castToString(value_0));
}
;
_.newDeserializer = function newDeserializer_1(){
  return $clinit_StringJsonDeserializer() , $clinit_StringJsonDeserializer() , INSTANCE_17;
}
;
var Lcom_itangsoft_notebook_model_MenuBeanJsonDeserializerImpl$4_2_classLit = createForClass('com.itangsoft.notebook.model', 'MenuBeanJsonDeserializerImpl/4', 663);
function $setValue_2(bean, value_0){
  $setFolder(bean, (checkCriticalNotNull(value_0) , value_0));
}

function MenuBeanJsonDeserializerImpl$5(){
}

defineClass(664, 91, $intern_16, MenuBeanJsonDeserializerImpl$5);
_.setValue = function setValue_2(bean, value_0, ctx){
  $setValue_2(bean, castToBoolean(value_0));
}
;
_.newDeserializer = function newDeserializer_2(){
  return $clinit_BooleanJsonDeserializer() , $clinit_BooleanJsonDeserializer() , INSTANCE_16;
}
;
var Lcom_itangsoft_notebook_model_MenuBeanJsonDeserializerImpl$5_2_classLit = createForClass('com.itangsoft.notebook.model', 'MenuBeanJsonDeserializerImpl/5', 664);
function $setValue_3(bean, value_0){
  $setExpand(bean, (checkCriticalNotNull(value_0) , value_0));
}

function MenuBeanJsonDeserializerImpl$6(){
}

defineClass(665, 91, $intern_16, MenuBeanJsonDeserializerImpl$6);
_.setValue = function setValue_3(bean, value_0, ctx){
  $setValue_3(bean, castToBoolean(value_0));
}
;
_.newDeserializer = function newDeserializer_3(){
  return $clinit_BooleanJsonDeserializer() , $clinit_BooleanJsonDeserializer() , INSTANCE_16;
}
;
var Lcom_itangsoft_notebook_model_MenuBeanJsonDeserializerImpl$6_2_classLit = createForClass('com.itangsoft.notebook.model', 'MenuBeanJsonDeserializerImpl/6', 665);
function $setValue_4(bean, value_0){
  bean.markdown = value_0;
}

function MenuBeanJsonDeserializerImpl$7(){
}

defineClass(666, 91, $intern_16, MenuBeanJsonDeserializerImpl$7);
_.setValue = function setValue_4(bean, value_0, ctx){
  $setValue_4(bean, castToString(value_0));
}
;
_.newDeserializer = function newDeserializer_4(){
  return $clinit_StringJsonDeserializer() , $clinit_StringJsonDeserializer() , INSTANCE_17;
}
;
var Lcom_itangsoft_notebook_model_MenuBeanJsonDeserializerImpl$7_2_classLit = createForClass('com.itangsoft.notebook.model', 'MenuBeanJsonDeserializerImpl/7', 666);
function $serialize(this$static, writer, value_0, ctx){
  !value_0?ctx.serializeNulls?$nullValue(writer):(writer.deferredUnescapeName != null?(writer.deferredUnescapeName = null):writer.deferredName != null && (writer.deferredName = null) , writer):$serializeInternally($getSerializer(this$static, value_0), writer, value_0, ctx);
}

function $serialize_0(this$static, writer, value_0, ctx, params){
  null == value_0?ctx.serializeNulls?$nullValue(writer):(writer.deferredUnescapeName != null?(writer.deferredUnescapeName = null):writer.deferredName != null && (writer.deferredName = null) , writer):this$static.doSerialize(writer, value_0, ctx, params);
}

defineClass(836, 1, {});
var Lorg_dominokit_jackson_JsonSerializer_2_classLit = createForClass('org.dominokit.jackson', 'JsonSerializer', 836);
function $getSerializer(this$static, value_0){
  if (getClass__Ljava_lang_Class___devirtual$(value_0) == Lcom_itangsoft_notebook_model_Menu_2_classLit) {
    return this$static;
  }
  getClass__Ljava_lang_Class___devirtual$(value_0);
  $isLoggable(($clinit_DefaultJsonSerializationContext() , logger_1), ($clinit_Level() , FINE)) && $fine(logger_1, 'Cannot find serializer for class ' + getClass__Ljava_lang_Class___devirtual$(value_0) + '. Fallback to the serializer of ' + Lcom_itangsoft_notebook_model_Menu_2_classLit);
  return this$static;
}

function $serializeInternally(this$static, writer, value_0, ctx){
  $clinit_Collections();
  $writeDeferredName(writer);
  $open_1(writer);
  $serializeProperties(this$static, writer, value_0, ctx);
  $close_4(writer);
}

function $serializeProperties(this$static, writer, value_0, ctx){
  var propertySerializer, propertySerializer$array, propertySerializer$index, propertySerializer$max;
  for (propertySerializer$array = this$static.serializers , propertySerializer$index = 0 , propertySerializer$max = propertySerializer$array.length; propertySerializer$index < propertySerializer$max; ++propertySerializer$index) {
    propertySerializer = propertySerializer$array[propertySerializer$index];
    $unescapeName(writer, propertySerializer.propertyName);
    $serialize_0((!propertySerializer.serializer && (propertySerializer.serializer = propertySerializer.newSerializer()) , propertySerializer.serializer), writer, propertySerializer.getValue(value_0, ctx), ctx, (!propertySerializer.parameters && (propertySerializer.parameters = (!jacksonContext && (jacksonContext = new ServerJacksonContext) , $clinit_GwtJacksonJsonSerializerParameters() , DEFAULT_0)) , propertySerializer.parameters));
  }
}

defineClass(733, 836, {});
_.doSerialize = function doSerialize(writer, value_0, ctx, params){
  $serializeInternally($getSerializer(this, value_0), writer, value_0, ctx);
}
;
var Lorg_dominokit_jackson_ser_bean_AbstractBeanJsonSerializer_2_classLit = createForClass('org.dominokit.jackson.ser.bean', 'AbstractBeanJsonSerializer', 733);
function $clinit_MenuBeanJsonSerializerImpl(){
  $clinit_MenuBeanJsonSerializerImpl = emptyMethod;
  INSTANCE_11 = new MenuBeanJsonSerializerImpl;
}

function MenuBeanJsonSerializerImpl(){
  var result;
  this.serializers = (result = initUnidimensionalArray(Lorg_dominokit_jackson_ser_bean_BeanPropertySerializer_2_classLit, $intern_0, 54, 6, 0, 1) , result[0] = new MenuBeanJsonSerializerImpl$1 , result[1] = new MenuBeanJsonSerializerImpl$2 , result[2] = new MenuBeanJsonSerializerImpl$3 , result[3] = new MenuBeanJsonSerializerImpl$4 , result[4] = new MenuBeanJsonSerializerImpl$5 , result[5] = new MenuBeanJsonSerializerImpl$6 , result);
  $clinit_Collections();
}

defineClass(734, 733, {}, MenuBeanJsonSerializerImpl);
var INSTANCE_11;
var Lcom_itangsoft_notebook_model_MenuBeanJsonSerializerImpl_2_classLit = createForClass('com.itangsoft.notebook.model', 'MenuBeanJsonSerializerImpl', 734);
defineClass(92, 1, {92:1});
var Lorg_dominokit_jackson_ser_bean_HasSerializer_2_classLit = createForClass('org.dominokit.jackson.ser.bean', 'HasSerializer', 92);
function BeanPropertySerializer(propertyName){
  this.propertyName = propertyName;
}

defineClass(54, 92, $intern_17);
var Lorg_dominokit_jackson_ser_bean_BeanPropertySerializer_2_classLit = createForClass('org.dominokit.jackson.ser.bean', 'BeanPropertySerializer', 54);
function MenuBeanJsonSerializerImpl$1(){
  BeanPropertySerializer.call(this, 'id');
}

defineClass(735, 54, $intern_17, MenuBeanJsonSerializerImpl$1);
_.getValue = function getValue(bean, ctx){
  return castTo(bean, 45).id_0;
}
;
_.newSerializer = function newSerializer(){
  return $clinit_StringJsonSerializer() , $clinit_StringJsonSerializer() , INSTANCE_19;
}
;
var Lcom_itangsoft_notebook_model_MenuBeanJsonSerializerImpl$1_2_classLit = createForClass('com.itangsoft.notebook.model', 'MenuBeanJsonSerializerImpl/1', 735);
function MenuBeanJsonSerializerImpl$2(){
  BeanPropertySerializer.call(this, 'name');
}

defineClass(736, 54, $intern_17, MenuBeanJsonSerializerImpl$2);
_.getValue = function getValue_0(bean, ctx){
  return castTo(bean, 45).name_0;
}
;
_.newSerializer = function newSerializer_0(){
  return $clinit_StringJsonSerializer() , $clinit_StringJsonSerializer() , INSTANCE_19;
}
;
var Lcom_itangsoft_notebook_model_MenuBeanJsonSerializerImpl$2_2_classLit = createForClass('com.itangsoft.notebook.model', 'MenuBeanJsonSerializerImpl/2', 736);
function MenuBeanJsonSerializerImpl$3(){
  BeanPropertySerializer.call(this, 'parentId');
}

defineClass(737, 54, $intern_17, MenuBeanJsonSerializerImpl$3);
_.getValue = function getValue_1(bean, ctx){
  return castTo(bean, 45).parentId;
}
;
_.newSerializer = function newSerializer_1(){
  return $clinit_StringJsonSerializer() , $clinit_StringJsonSerializer() , INSTANCE_19;
}
;
var Lcom_itangsoft_notebook_model_MenuBeanJsonSerializerImpl$3_2_classLit = createForClass('com.itangsoft.notebook.model', 'MenuBeanJsonSerializerImpl/3', 737);
function $getValue(bean){
  return $clinit_Boolean() , bean.folder?true:false;
}

function MenuBeanJsonSerializerImpl$4(){
  BeanPropertySerializer.call(this, 'folder');
}

defineClass(738, 54, $intern_17, MenuBeanJsonSerializerImpl$4);
_.getValue = function getValue_2(bean, ctx){
  return $getValue(castTo(bean, 45));
}
;
_.newSerializer = function newSerializer_2(){
  return $clinit_BooleanJsonSerializer() , $clinit_BooleanJsonSerializer() , INSTANCE_18;
}
;
var Lcom_itangsoft_notebook_model_MenuBeanJsonSerializerImpl$4_2_classLit = createForClass('com.itangsoft.notebook.model', 'MenuBeanJsonSerializerImpl/4', 738);
function $getValue_0(bean){
  return $clinit_Boolean() , bean.expand?true:false;
}

function MenuBeanJsonSerializerImpl$5(){
  BeanPropertySerializer.call(this, 'expand');
}

defineClass(739, 54, $intern_17, MenuBeanJsonSerializerImpl$5);
_.getValue = function getValue_3(bean, ctx){
  return $getValue_0(castTo(bean, 45));
}
;
_.newSerializer = function newSerializer_3(){
  return $clinit_BooleanJsonSerializer() , $clinit_BooleanJsonSerializer() , INSTANCE_18;
}
;
var Lcom_itangsoft_notebook_model_MenuBeanJsonSerializerImpl$5_2_classLit = createForClass('com.itangsoft.notebook.model', 'MenuBeanJsonSerializerImpl/5', 739);
function MenuBeanJsonSerializerImpl$6(){
  BeanPropertySerializer.call(this, 'markdown');
}

defineClass(740, 54, $intern_17, MenuBeanJsonSerializerImpl$6);
_.getValue = function getValue_4(bean, ctx){
  return castTo(bean, 45).markdown;
}
;
_.newSerializer = function newSerializer_4(){
  return $clinit_StringJsonSerializer() , $clinit_StringJsonSerializer() , INSTANCE_19;
}
;
var Lcom_itangsoft_notebook_model_MenuBeanJsonSerializerImpl$6_2_classLit = createForClass('com.itangsoft.notebook.model', 'MenuBeanJsonSerializerImpl/6', 740);
function $read(this$static, in_0, ctx){
  var e, name_0, reader, result, exception;
  reader = $newJsonReader(in_0);
  try {
    if (ctx.unwrapRootValue) {
      if (($clinit_JsonToken() , BEGIN_OBJECT) != $peek_2(reader)) {
        throw toJs($traceError('Unwrap root value is enabled but the input is not a JSON Object', reader));
      }
      $beginObject(reader);
      if (END_OBJECT == $peek_2(reader)) {
        throw toJs($traceError('Unwrap root value is enabled but the JSON Object is empty', reader));
      }
      name_0 = $nextName(reader);
      if (!$equals_1(name_0, this$static.rootName)) {
        throw toJs($traceError("Unwrap root value is enabled but the name '" + name_0 + "' don't match the expected rootName " + "'" + this$static.rootName + "'", reader));
      }
      result = $deserialize((!this$static.deserializer && (this$static.deserializer = this$static.newDeserializer()) , this$static.deserializer), reader, ctx, (!jacksonContext && (jacksonContext = new ServerJacksonContext) , $clinit_GwtJacksonJsonDeserializerParameters() , DEFAULT));
      $endObject(reader);
      return result;
    }
     else {
      return $deserialize((!this$static.deserializer && (this$static.deserializer = this$static.newDeserializer()) , this$static.deserializer), reader, ctx, (!jacksonContext && (jacksonContext = new ServerJacksonContext) , $clinit_GwtJacksonJsonDeserializerParameters() , DEFAULT));
    }
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 99)) {
      e = $e0;
      throw toJs(e);
    }
     else if (instanceOf($e0, 13)) {
      e = $e0;
      throw toJs((exception = ($log_0(logger_0, ($clinit_Level() , SEVERE), 'Error during deserialization', e) , ctx.wrapExceptions?new JsonDeserializationException_0(e):e) , $isLoggable(logger_0, INFO) && $log(logger_0, INFO, 'Error at line ' + (reader.lineNumber + 1) + ' and column ' + (reader.pos - reader.lineStart + 1) + ' of input <' + reader.in_0 + '>') , exception));
    }
     else 
      throw toJs($e0);
  }
}

function $write(this$static, value_0, ctx){
  var e, lastArg, writer, writer_0, exception;
  writer = (writer_0 = new FastJsonWriter(new StringBuilder) , writer_0.lenient = true , ctx.indent && $setIndent(writer_0) , writer_0);
  try {
    if (ctx.wrapRootValue) {
      $writeDeferredName(writer);
      $open_1(writer);
      $name(writer, this$static.rootName);
      $serialize((!this$static.serializer && (this$static.serializer = ($clinit_MenuBeanJsonSerializerImpl() , $clinit_MenuBeanJsonSerializerImpl() , INSTANCE_11)) , this$static.serializer), writer, value_0, (lastArg = ctx , !jacksonContext && (jacksonContext = new ServerJacksonContext) , $clinit_GwtJacksonJsonSerializerParameters() , lastArg));
      $close_4(writer);
    }
     else {
      $serialize((!this$static.serializer && (this$static.serializer = ($clinit_MenuBeanJsonSerializerImpl() , $clinit_MenuBeanJsonSerializerImpl() , INSTANCE_11)) , this$static.serializer), writer, value_0, (lastArg = ctx , !jacksonContext && (jacksonContext = new ServerJacksonContext) , $clinit_GwtJacksonJsonSerializerParameters() , lastArg));
    }
    return writer.out.string;
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 193)) {
      e = $e0;
      throw toJs(e);
    }
     else if (instanceOf($e0, 13)) {
      e = $e0;
      throw toJs((exception = ($log_0(logger_1, ($clinit_Level() , SEVERE), 'Error during serialization', e) , ctx.wrapExceptions?new JsonSerializationException(e):e) , $isLoggable(logger_1, INFO) && $log(logger_1, INFO, 'Error on value <' + value_0 + '>. Current output : <' + writer.out.string + '>') , exception));
    }
     else 
      throw toJs($e0);
  }
}

defineClass(230, 1, {});
var Lorg_dominokit_jackson_AbstractObjectMapper_2_classLit = createForClass('org.dominokit.jackson', 'AbstractObjectMapper', 230);
function $clinit_Menu_MapperImpl(){
  $clinit_Menu_MapperImpl = emptyMethod;
  INSTANCE_12 = new Menu_MapperImpl;
}

function Menu_MapperImpl(){
  this.rootName = 'Menu';
}

defineClass(555, 230, {}, Menu_MapperImpl);
_.newDeserializer = function newDeserializer_5(){
  return $clinit_MenuBeanJsonDeserializerImpl() , $clinit_MenuBeanJsonDeserializerImpl() , INSTANCE_10;
}
;
var INSTANCE_12;
var Lcom_itangsoft_notebook_model_Menu_1MapperImpl_2_classLit = createForClass('com.itangsoft.notebook.model', 'Menu_MapperImpl', 555);
function $addConfirmHandler(this$static, confirmHandler){
  this$static.confirmHandler = confirmHandler;
}

function $confirm_0(this$static){
  var cancelButton, messageDialog, revertButton;
  messageDialog = ($clinit_BaseModal() , createMessage_0(new MessageDialog$lambda$7$Type));
  revertButton = castTo($addClickListener(castTo($styler($setColor_0($linkify(new Button('\u8FD8\u539F')), ($clinit_Color() , RED)), new CancelEditorConfirmPresenter$lambda$0$Type), 38), new CancelEditorConfirmPresenter$lambda$1$Type(this$static, messageDialog)), 38);
  cancelButton = castTo($addClickListener(castTo($styler($linkify(new Button('\u53D6\u6D88')), new CancelEditorConfirmPresenter$lambda$2$Type), 38), new CancelEditorConfirmPresenter$lambda$3$Type(this$static, messageDialog)), 38);
  $appendChild_0(castTo($appendChild_0(castTo($clearElement(new DominoElement($warning($setModal((messageDialog.autoClose = false , messageDialog)), create_12('clear')).modalElement.modalFooter.element)), 3), revertButton), 3), cancelButton);
  $open(messageDialog);
}

function $lambda$1_2(this$static, messageDialog_1){
  $close(messageDialog_1);
  $onOk(this$static.confirmHandler);
}

function $lambda$3_0(this$static, messageDialog_1){
  $close(messageDialog_1);
  $onCancel(this$static.confirmHandler);
}

function CancelEditorConfirmPresenter(){
}

defineClass(393, 1, {}, CancelEditorConfirmPresenter);
var Lcom_itangsoft_notebook_plugin_CancelEditorConfirmPresenter_2_classLit = createForClass('com.itangsoft.notebook.plugin', 'CancelEditorConfirmPresenter', 393);
function CancelEditorConfirmPresenter$lambda$0$Type(){
}

defineClass(394, 1, {}, CancelEditorConfirmPresenter$lambda$0$Type);
_.applyStyles = function applyStyles(arg0){
  'dialog-button'.length != 0 && arg0.element.classList.add('dialog-button');
}
;
var Lcom_itangsoft_notebook_plugin_CancelEditorConfirmPresenter$lambda$0$Type_2_classLit = createForClass('com.itangsoft.notebook.plugin', 'CancelEditorConfirmPresenter/lambda$0$Type', 394);
function CancelEditorConfirmPresenter$lambda$1$Type($$outer_0, messageDialog_1){
  this.$$outer_0 = $$outer_0;
  this.messageDialog_1 = messageDialog_1;
}

defineClass(395, 1, {}, CancelEditorConfirmPresenter$lambda$1$Type);
_.handleEvent = function handleEvent_6(arg0){
  $lambda$1_2(this.$$outer_0, this.messageDialog_1);
}
;
var Lcom_itangsoft_notebook_plugin_CancelEditorConfirmPresenter$lambda$1$Type_2_classLit = createForClass('com.itangsoft.notebook.plugin', 'CancelEditorConfirmPresenter/lambda$1$Type', 395);
function CancelEditorConfirmPresenter$lambda$2$Type(){
}

defineClass(396, 1, {}, CancelEditorConfirmPresenter$lambda$2$Type);
_.applyStyles = function applyStyles_0(arg0){
  'dialog-button'.length != 0 && arg0.element.classList.add('dialog-button');
}
;
var Lcom_itangsoft_notebook_plugin_CancelEditorConfirmPresenter$lambda$2$Type_2_classLit = createForClass('com.itangsoft.notebook.plugin', 'CancelEditorConfirmPresenter/lambda$2$Type', 396);
function CancelEditorConfirmPresenter$lambda$3$Type($$outer_0, messageDialog_1){
  this.$$outer_0 = $$outer_0;
  this.messageDialog_1 = messageDialog_1;
}

defineClass(397, 1, {}, CancelEditorConfirmPresenter$lambda$3$Type);
_.handleEvent = function handleEvent_7(arg0){
  $lambda$3_0(this.$$outer_0, this.messageDialog_1);
}
;
var Lcom_itangsoft_notebook_plugin_CancelEditorConfirmPresenter$lambda$3$Type_2_classLit = createForClass('com.itangsoft.notebook.plugin', 'CancelEditorConfirmPresenter/lambda$3$Type', 397);
function $getFileContent(fileName){
  var instance;
  instance = new FileServiceFactory$FileService_getFileContent;
  $setPathParameter(instance, $emptyOrStringValue(new FileServiceFactory$lambda$0$Type(fileName)));
  return instance;
}

function $applyState(this$static, context){
  this$static.state_0.execute_1(context);
}

function $execute(this$static){
  if (!equals_Ljava_lang_Object__Z__devirtual$(this$static.state_0, this$static.ready_0) && !equals_Ljava_lang_Object__Z__devirtual$(this$static.state_0, this$static.failedOnServer))
    throw toJs(new Request$InvalidRequestState('Request have already been sent'));
  this$static.state_0.execute_1(new Request$DefaultRequestStateContext);
}

function $lambda$1_3(this$static){
  throw toJs(new Request$InvalidRequestState('This request have already been completed!. [' + $getCanonicalName(this$static.___clazz) + ']'));
}

function $lambda$3_1(this$static, context_0){
  this$static.fail.onFail(context_0.response);
}

defineClass(622, 1, {});
var Lorg_dominokit_rest_shared_request_BaseRequest_2_classLit = createForClass('org.dominokit.rest.shared.request', 'BaseRequest', 622);
function $clinit_ServerRequest(){
  $clinit_ServerRequest = emptyMethod;
  LOGGER = getLogger(($ensureNamesAreInitialized(Lorg_dominokit_rest_shared_request_ServerRequest_2_classLit) , Lorg_dominokit_rest_shared_request_ServerRequest_2_classLit.typeName));
}

function $emptyOrStringValue(supplier){
  if (supplier.fileName_0 == null) {
    return '';
  }
  return valueOf_0(supplier.fileName_0);
}

function $lambda$4_1(this$static, context_0){
  this$static.success.onSuccess(context_0.responseBean);
  this$static.state_0 = this$static.completed;
}

function $lambda$6_0(this$static, context_0){
  if (equals_Ljava_lang_Object__Z__devirtual$(this$static.state_0, this$static.aborted_0)) {
    $info(LOGGER, 'Request aborted, not response will be processed.');
  }
   else {
    if (instanceOf(context_0.nextContext, 130)) {
      this$static.state_0 = this$static.executedOnServer;
      $applyState(this$static, context_0.nextContext);
    }
     else if (instanceOf(context_0.nextContext, 161)) {
      this$static.state_0 = this$static.failedOnServer;
      $applyState(this$static, context_0.nextContext);
    }
     else {
      throw toJs(new Request$InvalidRequestState('Request cannot be processed until a responseBean is received from the server'));
    }
  }
}

function $normalizeUrl(this$static){
  var root, urlFormatter;
  if (this$static.url_0 == null) {
    root = this$static.serviceRoot.length == 0?matchedServiceRoot(this$static.path):this$static.serviceRoot + this$static.path;
    urlFormatter = new UrlFormatter(this$static.pathParameters);
    $setUrl(this$static, $formatUrl(urlFormatter, root));
  }
}

function $onFailed(this$static, fail){
  this$static.fail = fail;
  return this$static;
}

function $onSuccess(this$static, success){
  this$static.success = success;
  return this$static;
}

function $setAccept(this$static, accept){
  $setHeader(this$static, 'Accept', join_2(accept));
  return this$static;
}

function $setContentType(this$static, contentType){
  $setHeader(this$static, 'Content-type', join_2(contentType));
  return this$static;
}

function $setHeader(this$static, name_0, value_0){
  $putStringValue(this$static.headers_0, name_0, value_0);
  return this$static;
}

function $setPathParameter(this$static, value_0){
  $putStringValue(this$static.pathParameters, 'fileName', value_0);
  return this$static;
}

function $setResponseReader(this$static, responseReader){
  this$static.responseReader = responseReader;
  return this$static;
}

function $setUrl(this$static, url_0){
  this$static.url_0 = url_0;
  return this$static;
}

function ServerRequest(){
  this.ready_0 = new BaseRequest$lambda$0$Type(this);
  this.completed = new BaseRequest$lambda$1$Type(this);
  this.fail = ($clinit_DominoRestConfig() , defaultFailHandler);
  this.failedOnServer = new BaseRequest$lambda$3$Type(this);
  this.state_0 = this.ready_0;
  this.headers_0 = new HashMap;
  this.queryParameters = new HashMap;
  this.pathParameters = new HashMap;
  new HashMap;
  this.successCodes = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Integer_2_classLit, 1), $intern_0, 68, 0, [valueOf(200), valueOf(201), valueOf(202), valueOf(203), valueOf(204)]);
  this.withCredentialsRequest = ($clinit_Optional() , $clinit_Optional() , EMPTY);
  this.responseReader = new ServerRequest$lambda$2$Type;
  this.success = new ServerRequest$lambda$3$Type;
  this.executedOnServer = new ServerRequest$lambda$4$Type(this);
  this.aborted_0 = new ServerRequest$lambda$5$Type;
  this.sent = new ServerRequest$lambda$6$Type(this);
  this.httpMethod = 'GET';
}

defineClass(234, 622, {});
_.startRouting = function startRouting(){
  this.state_0 = this.sent;
  $routeRequest(($clinit_DominoRestConfig() , serverRouter), this);
}
;
_.path = '';
_.serviceRoot = '';
var LOGGER;
var Lorg_dominokit_rest_shared_request_ServerRequest_2_classLit = createForClass('org.dominokit.rest.shared.request', 'ServerRequest', 234);
function FileServiceFactory$FileService_getFileContent(){
  $clinit_ServerRequest();
  new RequestMeta(Lcom_itangsoft_notebook_service_FileService_2_classLit, 'getFileContent', Ljava_lang_Void_2_classLit, Ljava_lang_String_2_classLit);
  ServerRequest.call(this);
  this.httpMethod = 'GET'.toUpperCase();
  $setAccept(this, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['text/plain; charset=utf-8']));
  this.path = '/files/{fileName}';
  this.serviceRoot = '';
  $setContentType(this, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['text/plain; charset=UTF-8']));
  $setResponseReader(this, new FileServiceFactory$FileService_getFileContent$lambda$0$Type);
}

defineClass(634, 234, {}, FileServiceFactory$FileService_getFileContent);
var Lcom_itangsoft_notebook_service_FileServiceFactory$FileService_1getFileContent_2_classLit = createForClass('com.itangsoft.notebook.service', 'FileServiceFactory/FileService_getFileContent', 634);
function FileServiceFactory$FileService_getFileContent$lambda$0$Type(){
}

defineClass(635, 1, {}, FileServiceFactory$FileService_getFileContent$lambda$0$Type);
_.read_0 = function read(arg0){
  return $clinit_ServerRequest() , arg0.request.responseText;
}
;
var Lcom_itangsoft_notebook_service_FileServiceFactory$FileService_1getFileContent$lambda$0$Type_2_classLit = createForClass('com.itangsoft.notebook.service', 'FileServiceFactory/FileService_getFileContent/lambda$0$Type', 635);
function FileServiceFactory$lambda$0$Type(fileName_0){
  this.fileName_0 = fileName_0;
}

defineClass(636, 1, {}, FileServiceFactory$lambda$0$Type);
_.get_0 = function get_1(){
  return this.fileName_0;
}
;
var Lcom_itangsoft_notebook_service_FileServiceFactory$lambda$0$Type_2_classLit = createForClass('com.itangsoft.notebook.service', 'FileServiceFactory/lambda$0$Type', 636);
function MenuServiceFactory$MenuService_queryMenus(){
  $clinit_ServerRequest();
  new RequestMeta(Lcom_itangsoft_notebook_service_MenuService_2_classLit, 'queryMenus', Ljava_lang_Void_2_classLit, Ljava_util_List_2_classLit);
  ServerRequest.call(this);
  this.httpMethod = 'GET'.toUpperCase();
  $setAccept(this, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['application/json']));
  this.path = '/data/menu.json';
  this.serviceRoot = '';
  $setContentType(this, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['application/json']));
  $setResponseReader(this, new MenuServiceFactory$MenuService_queryMenus$lambda$0$Type);
}

defineClass(235, 234, {}, MenuServiceFactory$MenuService_queryMenus);
var Lcom_itangsoft_notebook_service_MenuServiceFactory$MenuService_1queryMenus_2_classLit = createForClass('com.itangsoft.notebook.service', 'MenuServiceFactory/MenuService_queryMenus', 235);
defineClass(631, 230, {});
var Lorg_dominokit_jackson_AbstractObjectReader_2_classLit = createForClass('org.dominokit.jackson', 'AbstractObjectReader', 631);
function MenuServiceFactory$MenuService_queryMenus$1(){
  this.rootName = 'java.util.List<com.itangsoft.notebook.model.Menu>';
}

defineClass(632, 631, {}, MenuServiceFactory$MenuService_queryMenus$1);
_.newDeserializer = function newDeserializer_6(){
  return new ListJsonDeserializer(($clinit_MenuBeanJsonDeserializerImpl() , $clinit_MenuBeanJsonDeserializerImpl() , INSTANCE_10));
}
;
var Lcom_itangsoft_notebook_service_MenuServiceFactory$MenuService_1queryMenus$1_2_classLit = createForClass('com.itangsoft.notebook.service', 'MenuServiceFactory/MenuService_queryMenus/1', 632);
function MenuServiceFactory$MenuService_queryMenus$lambda$0$Type(){
}

defineClass(633, 1, {}, MenuServiceFactory$MenuService_queryMenus$lambda$0$Type);
_.read_0 = function read_0(arg0){
  return castTo($read(new MenuServiceFactory$MenuService_queryMenus$1, arg0.request.responseText, $build(($clinit_DefaultJsonDeserializationContext() , new DefaultJsonDeserializationContext$DefaultBuilder))), 18);
}
;
var Lcom_itangsoft_notebook_service_MenuServiceFactory$MenuService_1queryMenus$lambda$0$Type_2_classLit = createForClass('com.itangsoft.notebook.service', 'MenuServiceFactory/MenuService_queryMenus/lambda$0$Type', 633);
function LayoutShell(){
  AbstractShell.call(this);
  this.root_0 = castTo($setHeight(castTo($setWidth(castTo($setId(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element), 'layout-page'), 3)), 3)), 3);
}

defineClass(492, 155, {}, LayoutShell);
_.attachShell = function attachShell_1(){
  $appendChild_0(new DominoElement(($clinit_DomGlobal() , document_0).body), this.root_0);
}
;
_.detachShell = function detachShell_1(){
  $remove_0(this.root_0);
}
;
var Lcom_itangsoft_notebook_shell_LayoutShell_2_classLit = createForClass('com.itangsoft.notebook.shell', 'LayoutShell', 492);
function LayoutShellCreatorImpl(context){
  AbstractShellCreator.call(this, context);
}

defineClass(418, 144, $intern_6, LayoutShellCreatorImpl);
_.create_2 = function create_6(){
  var shell, shellInstance;
  shellInstance = new ShellInstance;
  shell = new LayoutShell;
  shellInstance.shell = shell;
  $setContext_0(shell, this.context);
  return shellInstance;
}
;
_.onFinishCreating_0 = function onFinishCreating_4(){
}
;
var Lcom_itangsoft_notebook_shell_LayoutShellCreatorImpl_2_classLit = createForClass('com.itangsoft.notebook.shell', 'LayoutShellCreatorImpl', 418);
function LoginShell(){
  AbstractShell.call(this);
  this.content_0 = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element), 'login-page'), 3);
}

defineClass(495, 155, {}, LoginShell);
_.attachShell = function attachShell_2(){
  var versionAnchor, links_0, copyright;
  $appendChild_0(new DominoElement(($clinit_DomGlobal() , document_0).body), $appendChild_0(castTo($appendChild_0(castTo($appendChild_0(this.content_0, castTo($css(castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('section'), $wnd.HTMLElement))).element), $appendChild_0(castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('a'), $wnd.HTMLElement))).element), new DominoElement(castTo($attr_0(new EmptyContentBuilder(castToNative(document_0.createElement('img'), $wnd.HTMLElement)), 'src', 'images/logo_red.png'), 71).element)), 3), $setColor(castTo($setFontSize($setMarginLeft(castTo($textContent(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('span'), $wnd.HTMLElement))).element), '\u4E91\u7B14\u8BB0 \xB7 \u6B22\u8FCE\u6765\u5230\u6211\u7684\u4E16\u754C'), 3)), '24px'), 3)))), 3), 'login-header'), 3)), 3), castTo($setId(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), 'login-content'), 3)), 3), (versionAnchor = $textContent_0(new HtmlContentBuilder(castToNative(document_0.createElement('a'), $wnd.HTMLElement)), '\u7248\u672C\u8BF4\u660E') , $position(create_13(versionAnchor, castTo($setCssProperty(castTo($appendChild_0(castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), $setMarginBottom(castTo($textContent(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), '\u7F51\u7AD9\u7248\u672C\uFF1A' + castToString($get(this.context.applicationContext, 'APPLICATION_VERSION'))), 3), '3px')), 3), $textContent(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), '\u53D1\u5E03\u65E5\u671F\uFF1A' + $getApplicationBuildTimeStr(this.context))), 3), 'text-align', 'left'), 3).wrappedElement), ($clinit_PopupPosition() , RIGHT)) , links_0 = castTo($css(castTo($appendChild_0(castTo($appendChild_0(castTo($appendChild_0(castTo($appendChild_0(castTo($appendChild_0(castTo($appendChild_0(castTo($appendChild_0(castTo($appendChild_0(castTo($appendChild_0(castTo($appendChild_0(castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), $textContent_0(castTo($attr_0(castTo($attr_0(new HtmlContentBuilder(castToNative(document_0.createElement('a'), $wnd.HTMLElement)), 'href', '#'), 6), 'target', '_blank'), 6), '\u516C\u53F8\u7B80\u4ECB')), 3), $textContent_0(new HtmlContentBuilder(castToNative(document_0.createElement('span'), $wnd.HTMLElement)), '|')), 3), $textContent_0(castTo($attr_0(castTo($attr_0(new HtmlContentBuilder(castToNative(document_0.createElement('a'), $wnd.HTMLElement)), 'href', '#'), 6), 'target', '_blank'), 6), '\u8BDA\u8058\u82F1\u624D')), 3), $textContent_0(new HtmlContentBuilder(castToNative(document_0.createElement('span'), $wnd.HTMLElement)), '|')), 3), $textContent_0(castTo($attr_0(castTo($attr_0(new HtmlContentBuilder(castToNative(document_0.createElement('a'), $wnd.HTMLElement)), 'href', '#'), 6), 'target', '_blank'), 6), '\u8054\u7CFB\u6211\u4EEC')), 3), $textContent_0(new HtmlContentBuilder(castToNative(document_0.createElement('span'), $wnd.HTMLElement)), '|')), 3), $textContent_0(castTo($attr_0(castTo($attr_0(new HtmlContentBuilder(castToNative(document_0.createElement('a'), $wnd.HTMLElement)), 'href', '#'), 6), 'target', '_blank'), 6), '\u610F\u89C1\u53CD\u9988')), 3), $textContent_0(new HtmlContentBuilder(castToNative(document_0.createElement('span'), $wnd.HTMLElement)), '|')), 3), $textContent_0(castTo($attr_0(castTo($attr_0(new HtmlContentBuilder(castToNative(document_0.createElement('a'), $wnd.HTMLElement)), 'href', '#'), 6), 'target', '_blank'), 6), '\u5E2E\u52A9\u4E2D\u5FC3')), 3), $textContent_0(new HtmlContentBuilder(castToNative(document_0.createElement('span'), $wnd.HTMLElement)), '|')), 3), versionAnchor), 3), 'login-footer-links'), 3) , copyright = castTo($css(castTo($textContent(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), 'Copyright \xA9 2024 \u6A39 \u7248\u6743\u6240\u6709'), 3), 'login-footer-copyright'), 3) , castTo($css(castTo($appendChild_0(castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('section'), $wnd.HTMLElement))).element), links_0), 3), copyright), 3), 'login-footer'), 3))));
}
;
_.detachShell = function detachShell_2(){
  $remove_0(this.content_0);
}
;
var Lcom_itangsoft_notebook_shell_LoginShell_2_classLit = createForClass('com.itangsoft.notebook.shell', 'LoginShell', 495);
function LoginShellCreatorImpl(context){
  AbstractShellCreator.call(this, context);
}

defineClass(421, 144, $intern_6, LoginShellCreatorImpl);
_.create_2 = function create_7(){
  var shell, shellInstance;
  shellInstance = new ShellInstance;
  shell = new LoginShell;
  shellInstance.shell = shell;
  $setContext_0(shell, this.context);
  return shellInstance;
}
;
_.onFinishCreating_0 = function onFinishCreating_5(){
}
;
var Lcom_itangsoft_notebook_shell_LoginShellCreatorImpl_2_classLit = createForClass('com.itangsoft.notebook.shell', 'LoginShellCreatorImpl', 421);
function $clinit_LayoutComponent(){
  $clinit_LayoutComponent = emptyMethod;
  new ConsoleLoggerAdapter(($ensureNamesAreInitialized(Lcom_itangsoft_notebook_views_layout_LayoutComponent_2_classLit) , Lcom_itangsoft_notebook_views_layout_LayoutComponent_2_classLit.typeName));
}

function $setApplicationVersion(this$static, applicationVersion){
  $setVersion(this$static.layout, applicationVersion);
}

function $setRealName(this$static, realName){
  $setAvatar(this$static.layout, realName);
}

function LayoutComponent(){
  $clinit_LayoutComponent();
  AbstractComponent.call(this);
  this.layout = new AppLayout;
}

defineClass(571, 112, {795:1}, LayoutComponent);
var Lcom_itangsoft_notebook_views_layout_LayoutComponent_2_classLit = createForClass('com.itangsoft.notebook.views.layout', 'LayoutComponent', 571);
function $clinit_LayoutController(){
  $clinit_LayoutController = emptyMethod;
  new ConsoleLoggerAdapter(($ensureNamesAreInitialized(Lcom_itangsoft_notebook_views_layout_LayoutController_2_classLit) , Lcom_itangsoft_notebook_views_layout_LayoutController_2_classLit.typeName));
}

function $registerMenuClickEvent(this$static, event_0){
  var newFileName;
  newFileName = event_0.newMenu?event_0.newMenu.markdown:null;
  if (newFileName != null && !$equals_1(newFileName, null)) {
    $openFile_0(castTo(castTo($getStringValue(this$static.compositeControllers, 'workspaceComposite'), 39), 187), newFileName);
    $setCurrentMenu(this$static.context, event_0.newMenu);
  }
}

function LayoutController(){
  $clinit_LayoutController();
  BaseComponentController.call(this);
}

defineClass(182, 128, {61:1, 182:1}, LayoutController);
_.activate = function activate_0(){
  var menu;
  menu = $getCurrentMenu(this.context);
  !!menu && $doFire(this.eventBus, ($clinit_MenuClickEvent() , new MenuClickEvent(menu)));
}
;
_.start_0 = function start_3(){
  $setRealName(castTo(this.component, 795), $getRealName(this.context));
  $setApplicationVersion(castTo(this.component, 795), castToString($get(this.context.applicationContext, 'APPLICATION_VERSION')));
}
;
var Lcom_itangsoft_notebook_views_layout_LayoutController_2_classLit = createForClass('com.itangsoft.notebook.views.layout', 'LayoutController', 182);
function $lambda$0_6(this$static, controller_1){
  $add(controller_1.handlerRegistrations, $doAdd(this$static.eventBus, ($clinit_MenuClickEvent() , TYPE_6), new LayoutControllerCreatorImpl$lambda$1$Type(controller_1)));
}

function LayoutControllerCreatorImpl(router, context, eventBus){
  AbstractControllerCreator.call(this, router, context, eventBus);
}

defineClass(437, 124, $intern_5, LayoutControllerCreatorImpl);
_.create_1 = function create_8(route){
  var controller, controllerInstance, storedController;
  controllerInstance = new ControllerInstance;
  controllerInstance.controllerCreator = this;
  controllerInstance.controllerClassName = 'com.itangsoft.notebook.views.layout.LayoutController';
  storedController = $getControllerFormStore(($clinit_ControllerFactory() , INSTANCE_3), 'com.itangsoft.notebook.views.layout.LayoutController');
  if (!storedController) {
    controller = new LayoutController;
    controllerInstance.controller_0 = controller;
    controllerInstance.cached = false;
    $setContext(controller, this.context);
    $setEventBus(controller, this.eventBus);
    $setRouter(controller, this.router);
    controller.cached = false;
    controller.relatedRoute = route;
    controller.relatedSelector = 'layout-page';
    $setActivateNaluCommand(controller, new LayoutControllerCreatorImpl$lambda$0$Type(this, controller));
  }
   else {
    controllerInstance.controller_0 = storedController;
    controllerInstance.cached = true;
    controllerInstance.controller_0.cached = true;
  }
  return controllerInstance;
}
;
_.onFinishCreating = function onFinishCreating_6(object){
  var component, controller;
  controller = castTo(object, 182);
  component = new LayoutComponent;
  component.controller_0 = controller;
  controller.component = component;
  $setLogo(component.layout, castToNative(castTo($css_1(img(($clinit_System() , 'images/logo.png?ts=' + toString_6(fromDouble_0(Date.now())))), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, [])), 71).element, $wnd.HTMLImageElement));
  $appendChild(castTo($clearElement(component.layout.header.title_0), 3), of_4('\u4E91\u7B14\u8BB0'));
  $appendChild_0(castTo($appendChild_0(castTo($appendChild_0(component.layout.header.toolbar_0, $appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('li'), $wnd.HTMLElement))).element), $textContent(new DominoElement(castTo($attr_0(castTo($attr_0(new HtmlContentBuilder(castToNative(document_0.createElement('a'), $wnd.HTMLElement)), 'href', '#/example-layout-shell/single-page-layout/home'), 6), 'target', '_blank'), 6).element), '\u5355\u9875\u5E03\u5C40'))), 3), $appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('li'), $wnd.HTMLElement))).element), $textContent(new DominoElement(castTo($attr_0(castTo($attr_0(new HtmlContentBuilder(castToNative(document_0.createElement('a'), $wnd.HTMLElement)), 'href', '#/example-eventbus-shell/eventbus'), 6), 'target', '_blank'), 6).element), '\u4E8B\u4EF6\u603B\u7EBF'))), 3), $textContent(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('li'), $wnd.HTMLElement))).element), '\u5E38\u7528\u5DE5\u5177\u5305'));
  $setId(component.layout.body_0.leftPanel, 'layout-navigation');
  $setId(component.layout.body_0.content_0, 'layout-workspace');
  $initElement(component, castToNative($show_0(component.layout, ($clinit_ColorScheme() , INDIGO_0)).root_0.wrappedElement, $wnd.HTMLDivElement));
}
;
_.setParameter = function setParameter_2(object, parameterKeys, parameterValues){
}
;
var Lcom_itangsoft_notebook_views_layout_LayoutControllerCreatorImpl_2_classLit = createForClass('com.itangsoft.notebook.views.layout', 'LayoutControllerCreatorImpl', 437);
function LayoutControllerCreatorImpl$lambda$0$Type($$outer_0, controller_1){
  this.$$outer_0 = $$outer_0;
  this.controller_1 = controller_1;
}

defineClass(439, 1, {}, LayoutControllerCreatorImpl$lambda$0$Type);
_.execute = function execute_2(){
  $lambda$0_6(this.$$outer_0, this.controller_1);
}
;
var Lcom_itangsoft_notebook_views_layout_LayoutControllerCreatorImpl$lambda$0$Type_2_classLit = createForClass('com.itangsoft.notebook.views.layout', 'LayoutControllerCreatorImpl/lambda$0$Type', 439);
function LayoutControllerCreatorImpl$lambda$1$Type(controller_0){
  this.controller_0 = controller_0;
}

defineClass(438, 1, {845:1}, LayoutControllerCreatorImpl$lambda$1$Type);
var Lcom_itangsoft_notebook_views_layout_LayoutControllerCreatorImpl$lambda$1$Type_2_classLit = createForClass('com.itangsoft.notebook.views.layout', 'LayoutControllerCreatorImpl/lambda$1$Type', 438);
function $clinit_NavigationComponent(){
  $clinit_NavigationComponent = emptyMethod;
  new ConsoleLoggerAdapter(($ensureNamesAreInitialized(Lcom_itangsoft_notebook_views_layout_composite_navigation_NavigationComponent_2_classLit) , Lcom_itangsoft_notebook_views_layout_composite_navigation_NavigationComponent_2_classLit.typeName));
}

function $buildMenuItem_0(this$static, menu, mapping){
  var subMenuList, treeItem, treeItem0;
  if (menu.folder) {
    treeItem0 = $setExpandIcon((treeItem = new TreeItem(menu.name_0, create_12('folder')) , treeItem), create_12('folder_open'));
  }
   else {
    treeItem0 = $setActiveIcon((treeItem = new TreeItem(menu.name_0, create_12('insert_drive_file')) , treeItem), new MdiIcon('mdi-file-check-outline'));
    $addClickListener_1(treeItem0, new NavigationComponent$lambda$3$Type(this$static, menu));
  }
  !!(subMenuList = castTo(mapping.get(menu.id_0), 18)) && !subMenuList.isEmpty() && subMenuList.forEach_0(new NavigationComponent$lambda$4$Type(this$static, mapping, treeItem0));
  menu.expand && $show_3(treeItem0, false);
  if ($getCurrentMenu(castTo(this$static.controller_0, 199).context)) {
    $startsWith($getCurrentMenu(castTo(this$static.controller_0, 199).context).id_0, menu.id_0 + '_') && $show_3(treeItem0, false);
    $equals_1($getCurrentMenu(castTo(this$static.controller_0, 199).context).name_0, menu.name_0) && $activate_0($show_3(treeItem0, true), true);
  }
  return treeItem0;
}

function $buildMenuTree_0(this$static, menuTree, menus){
  var mapping, menu, menu$iterator, tempList;
  mapping = new HashMap;
  for (menu$iterator = menus.iterator(); menu$iterator.hasNext_0();) {
    menu = castTo(menu$iterator.next_1(), 45);
    if (menu.parentId == null || $equals_1('', menu.parentId)) {
      continue;
    }
    tempList = new ArrayList;
    $hasStringValue(mapping, menu.parentId) && (tempList = castTo($getStringValue(mapping, menu.parentId), 18));
    tempList.add(menu);
    $putStringValue(mapping, menu.parentId, tempList);
  }
  menus.forEach_0(new NavigationComponent$lambda$2$Type(this$static, mapping, menuTree));
}

function $lambda$0_7(this$static, menuTree_1, response_1){
  var e;
  try {
    $buildMenuTree_0(this$static, menuTree_1, response_1);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 16)) {
      e = $e0;
      ($clinit_ConsoleLoggerAdapter() , ERROR_ENABLED) && ($clinit_DomGlobal() , $wnd.goog.global.console).error('\u83DC\u5355\u6E32\u67D3\u5931\u8D25', e);
    }
     else 
      throw toJs($e0);
  }
}

function $lambda$2_1(this$static, mapping_1, menuTree_2, menu_2){
  var treeItem;
  if (menu_2.parentId == null || $equals_1('', menu_2.parentId)) {
    treeItem = $buildMenuItem_0(this$static, menu_2, mapping_1);
    $appendChild_3(menuTree_2, treeItem);
  }
}

function $lambda$3_2(this$static, menu_1){
  $onMenuClick(castTo(this$static.controller_0, 199), menu_1);
}

function $lambda$4_2(this$static, mapping_1, treeItem_2, subMenu_2){
  var subTreeItem;
  subTreeItem = $buildMenuItem_0(this$static, subMenu_2, mapping_1);
  $appendChild_4(treeItem_2, subTreeItem);
}

function NavigationComponent(){
  $clinit_NavigationComponent();
  AbstractCompositeComponent.call(this);
}

defineClass(546, 229, {}, NavigationComponent);
var Lcom_itangsoft_notebook_views_layout_composite_navigation_NavigationComponent_2_classLit = createForClass('com.itangsoft.notebook.views.layout.composite.navigation', 'NavigationComponent', 546);
function NavigationComponent$lambda$0$Type($$outer_0, menuTree_1){
  this.$$outer_0 = $$outer_0;
  this.menuTree_1 = menuTree_1;
}

defineClass(547, 1, {}, NavigationComponent$lambda$0$Type);
_.onSuccess = function onSuccess_1(arg0){
  $lambda$0_7(this.$$outer_0, this.menuTree_1, castTo(arg0, 18));
}
;
var Lcom_itangsoft_notebook_views_layout_composite_navigation_NavigationComponent$lambda$0$Type_2_classLit = createForClass('com.itangsoft.notebook.views.layout.composite.navigation', 'NavigationComponent/lambda$0$Type', 547);
function NavigationComponent$lambda$1$Type(){
}

defineClass(548, 1, {}, NavigationComponent$lambda$1$Type);
_.onFail = function onFail_2(arg0){
  $clinit_NavigationComponent();
  $error('Error: ' + arg0.statusCode + ' - ' + arg0.statusText + ' - ', arg0.throwable);
}
;
var Lcom_itangsoft_notebook_views_layout_composite_navigation_NavigationComponent$lambda$1$Type_2_classLit = createForClass('com.itangsoft.notebook.views.layout.composite.navigation', 'NavigationComponent/lambda$1$Type', 548);
function NavigationComponent$lambda$2$Type($$outer_0, mapping_1, menuTree_2){
  this.$$outer_0 = $$outer_0;
  this.mapping_1 = mapping_1;
  this.menuTree_2 = menuTree_2;
}

defineClass(549, 1, {}, NavigationComponent$lambda$2$Type);
_.accept = function accept_23(arg0){
  $lambda$2_1(this.$$outer_0, this.mapping_1, this.menuTree_2, castTo(arg0, 45));
}
;
var Lcom_itangsoft_notebook_views_layout_composite_navigation_NavigationComponent$lambda$2$Type_2_classLit = createForClass('com.itangsoft.notebook.views.layout.composite.navigation', 'NavigationComponent/lambda$2$Type', 549);
function NavigationComponent$lambda$3$Type($$outer_0, menu_1){
  this.$$outer_0 = $$outer_0;
  this.menu_1 = menu_1;
}

defineClass(550, 1, {}, NavigationComponent$lambda$3$Type);
_.handleEvent = function handleEvent_8(arg0){
  $lambda$3_2(this.$$outer_0, this.menu_1);
}
;
var Lcom_itangsoft_notebook_views_layout_composite_navigation_NavigationComponent$lambda$3$Type_2_classLit = createForClass('com.itangsoft.notebook.views.layout.composite.navigation', 'NavigationComponent/lambda$3$Type', 550);
function NavigationComponent$lambda$4$Type($$outer_0, mapping_1, treeItem_2){
  this.$$outer_0 = $$outer_0;
  this.mapping_1 = mapping_1;
  this.treeItem_2 = treeItem_2;
}

defineClass(551, 1, {}, NavigationComponent$lambda$4$Type);
_.accept = function accept_24(arg0){
  $lambda$4_2(this.$$outer_0, this.mapping_1, this.treeItem_2, castTo(arg0, 45));
}
;
var Lcom_itangsoft_notebook_views_layout_composite_navigation_NavigationComponent$lambda$4$Type_2_classLit = createForClass('com.itangsoft.notebook.views.layout.composite.navigation', 'NavigationComponent/lambda$4$Type', 551);
function $clinit_NavigationComposite(){
  $clinit_NavigationComposite = emptyMethod;
  new ConsoleLoggerAdapter(($ensureNamesAreInitialized(Lcom_itangsoft_notebook_views_layout_composite_navigation_NavigationComposite_2_classLit) , Lcom_itangsoft_notebook_views_layout_composite_navigation_NavigationComposite_2_classLit.typeName));
}

function $onMenuClick(this$static, menu){
  $doFire(this$static.eventBus, ($clinit_MenuClickEvent() , new MenuClickEvent(menu)));
}

function NavigationComposite(){
  $clinit_NavigationComposite();
  BaseCompositeController.call(this);
}

defineClass(545, 228, {39:1, 199:1}, NavigationComposite);
var Lcom_itangsoft_notebook_views_layout_composite_navigation_NavigationComposite_2_classLit = createForClass('com.itangsoft.notebook.views.layout.composite.navigation', 'NavigationComposite', 545);
function NavigationCompositeCreatorImpl(router, context, eventBus){
  AbstractCompositeCreator.call(this, router, context, eventBus);
}

defineClass(423, 217, {250:1}, NavigationCompositeCreatorImpl);
_.create_0 = function create_9(parentControllerClassName, selector, scopeGlobal){
  var component, composite, compositeInstance, storedComposite, menuTree;
  compositeInstance = new CompositeInstance;
  storedComposite = $getCompositeFormStore(($clinit_CompositeFactory() , INSTANCE_2), parentControllerClassName, 'com.itangsoft.notebook.views.layout.composite.navigation.NavigationComposite', selector);
  if (!storedComposite) {
    composite = new NavigationComposite;
    compositeInstance.composite = composite;
    composite.cached = false;
    $setContext(composite, this.context);
    $setEventBus(composite, this.eventBus);
    $setRouter(composite, this.router);
    composite.cached = false;
    scopeGlobal || (composite.selector = selector);
    $setActivateNaluCommand_0(composite, new NavigationCompositeCreatorImpl$lambda$0$Type);
    component = new NavigationComponent;
    component.controller_0 = composite;
    composite.component = component;
    menuTree = $enableFolding($enableSearch($setAutoCollapse(new Tree)));
    $execute($onFailed($onSuccess(new MenuServiceFactory$MenuService_queryMenus, new NavigationComponent$lambda$0$Type(component, menuTree)), new NavigationComponent$lambda$1$Type));
    $initElement(component, castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element), menuTree), 3).wrappedElement);
  }
   else {
    compositeInstance.composite = storedComposite;
    compositeInstance.composite.cached = true;
  }
  return compositeInstance;
}
;
_.setParameter = function setParameter_3(object, parameterKeys, parameterValues){
}
;
var Lcom_itangsoft_notebook_views_layout_composite_navigation_NavigationCompositeCreatorImpl_2_classLit = createForClass('com.itangsoft.notebook.views.layout.composite.navigation', 'NavigationCompositeCreatorImpl', 423);
function NavigationCompositeCreatorImpl$lambda$0$Type(){
}

defineClass(424, 1, {}, NavigationCompositeCreatorImpl$lambda$0$Type);
_.execute = function execute_3(){
}
;
var Lcom_itangsoft_notebook_views_layout_composite_navigation_NavigationCompositeCreatorImpl$lambda$0$Type_2_classLit = createForClass('com.itangsoft.notebook.views.layout.composite.navigation', 'NavigationCompositeCreatorImpl/lambda$0$Type', 424);
function $clinit_WorkspaceComponent(){
  $clinit_WorkspaceComponent = emptyMethod;
  new ConsoleLoggerAdapter(($ensureNamesAreInitialized(Lcom_itangsoft_notebook_views_layout_composite_workspace_WorkspaceComponent_2_classLit) , Lcom_itangsoft_notebook_views_layout_composite_workspace_WorkspaceComponent_2_classLit.typeName));
}

function $loadFile(this$static, content_0){
  var convertedHtml;
  convertedHtml = $wnd.marked.parse(content_0);
  $setInnerHtml(this$static.contentDiv, convertedHtml);
}

function WorkspaceComponent(){
  $clinit_WorkspaceComponent();
  AbstractCompositeComponent.call(this);
}

defineClass(554, 229, {854:1}, WorkspaceComponent);
var Lcom_itangsoft_notebook_views_layout_composite_workspace_WorkspaceComponent_2_classLit = createForClass('com.itangsoft.notebook.views.layout.composite.workspace', 'WorkspaceComponent', 554);
function $clinit_WorkspaceComposite(){
  $clinit_WorkspaceComposite = emptyMethod;
  new ConsoleLoggerAdapter(($ensureNamesAreInitialized(Lcom_itangsoft_notebook_views_layout_composite_workspace_WorkspaceComposite_2_classLit) , Lcom_itangsoft_notebook_views_layout_composite_workspace_WorkspaceComposite_2_classLit.typeName));
}

function $lambda$0_8(this$static, response_0){
  var e;
  try {
    $loadFile(castTo(this$static.component, 854), response_0);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 16)) {
      e = $e0;
      ($clinit_ConsoleLoggerAdapter() , ERROR_ENABLED) && ($clinit_DomGlobal() , $wnd.goog.global.console).error('Markdown\u6587\u6863\u52A0\u8F7D\u5931\u8D25', e);
    }
     else 
      throw toJs($e0);
  }
}

function $openFile_0(this$static, fileName){
  $execute($onFailed($onSuccess($getFileContent(fileName), new WorkspaceComposite$lambda$0$Type(this$static)), new WorkspaceComposite$lambda$1$Type));
}

function WorkspaceComposite(){
  $clinit_WorkspaceComposite();
  BaseCompositeController.call(this);
}

defineClass(187, 228, {39:1, 187:1}, WorkspaceComposite);
var Lcom_itangsoft_notebook_views_layout_composite_workspace_WorkspaceComposite_2_classLit = createForClass('com.itangsoft.notebook.views.layout.composite.workspace', 'WorkspaceComposite', 187);
function WorkspaceComposite$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(552, 1, {}, WorkspaceComposite$lambda$0$Type);
_.onSuccess = function onSuccess_2(arg0){
  $lambda$0_8(this.$$outer_0, castToString(arg0));
}
;
var Lcom_itangsoft_notebook_views_layout_composite_workspace_WorkspaceComposite$lambda$0$Type_2_classLit = createForClass('com.itangsoft.notebook.views.layout.composite.workspace', 'WorkspaceComposite/lambda$0$Type', 552);
function WorkspaceComposite$lambda$1$Type(){
}

defineClass(553, 1, {}, WorkspaceComposite$lambda$1$Type);
_.onFail = function onFail_3(arg0){
  $clinit_WorkspaceComposite();
  $error('Error: ' + arg0.statusCode + ' - ' + arg0.statusText + ' - ', arg0.throwable);
}
;
var Lcom_itangsoft_notebook_views_layout_composite_workspace_WorkspaceComposite$lambda$1$Type_2_classLit = createForClass('com.itangsoft.notebook.views.layout.composite.workspace', 'WorkspaceComposite/lambda$1$Type', 553);
function WorkspaceCompositeCreatorImpl(router, context, eventBus){
  AbstractCompositeCreator.call(this, router, context, eventBus);
}

defineClass(425, 217, {250:1}, WorkspaceCompositeCreatorImpl);
_.create_0 = function create_10(parentControllerClassName, selector, scopeGlobal){
  var component, composite, compositeInstance, storedComposite;
  compositeInstance = new CompositeInstance;
  storedComposite = $getCompositeFormStore(($clinit_CompositeFactory() , INSTANCE_2), parentControllerClassName, 'com.itangsoft.notebook.views.layout.composite.workspace.WorkspaceComposite', selector);
  if (!storedComposite) {
    composite = new WorkspaceComposite;
    compositeInstance.composite = composite;
    composite.cached = false;
    $setContext(composite, this.context);
    $setEventBus(composite, this.eventBus);
    $setRouter(composite, this.router);
    composite.cached = false;
    scopeGlobal || (composite.selector = selector);
    $setActivateNaluCommand_0(composite, new WorkspaceCompositeCreatorImpl$lambda$0$Type);
    component = new WorkspaceComponent;
    component.controller_0 = composite;
    composite.component = component;
    component.contentDiv = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element), 'markdown-body'), 3);
    $initElement(component, castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), component.contentDiv), 3).wrappedElement);
  }
   else {
    compositeInstance.composite = storedComposite;
    compositeInstance.composite.cached = true;
  }
  return compositeInstance;
}
;
_.setParameter = function setParameter_4(object, parameterKeys, parameterValues){
}
;
var Lcom_itangsoft_notebook_views_layout_composite_workspace_WorkspaceCompositeCreatorImpl_2_classLit = createForClass('com.itangsoft.notebook.views.layout.composite.workspace', 'WorkspaceCompositeCreatorImpl', 425);
function WorkspaceCompositeCreatorImpl$lambda$0$Type(){
}

defineClass(426, 1, {}, WorkspaceCompositeCreatorImpl$lambda$0$Type);
_.execute = function execute_4(){
}
;
var Lcom_itangsoft_notebook_views_layout_composite_workspace_WorkspaceCompositeCreatorImpl$lambda$0$Type_2_classLit = createForClass('com.itangsoft.notebook.views.layout.composite.workspace', 'WorkspaceCompositeCreatorImpl/lambda$0$Type', 426);
function $lambda$0_9(this$static, grouping_1, username_2, password_3, captcha_4){
  var lastArg;
  $validate(grouping_1, false).valid && $login(castTo(this$static.controller_0, 198), $getValue_3(username_2), (lastArg = $getValue_3(password_3) , $getValue_3(captcha_4) , lastArg));
}

function $lambda$1_4(this$static, grouping_1, username_2, password_3, captcha_4, e_4){
  var lastArg;
  instanceOfNative(e_4, $wnd.KeyboardEvent) && $equalsIgnoreCase('Enter', castToNative(e_4, $wnd.KeyboardEvent).code) && $validate(grouping_1, false).valid && $login(castTo(this$static.controller_0, 198), $getValue_3(username_2), (lastArg = $getValue_3(password_3) , $getValue_3(captcha_4) , lastArg));
}

function $lambda$2_2(this$static, grouping_1, username_2, password_3, captcha_4, e_4){
  var lastArg;
  instanceOfNative(e_4, $wnd.KeyboardEvent) && $equalsIgnoreCase('Enter', castToNative(e_4, $wnd.KeyboardEvent).code) && $validate(grouping_1, false).valid && $login(castTo(this$static.controller_0, 198), $getValue_3(username_2), (lastArg = $getValue_3(password_3) , $getValue_3(captcha_4) , lastArg));
}

function $lambda$3_3(this$static, grouping_1, username_2, password_3, captcha_4, e_4){
  var lastArg;
  instanceOfNative(e_4, $wnd.KeyboardEvent) && $equalsIgnoreCase('Enter', castToNative(e_4, $wnd.KeyboardEvent).code) && $validate(grouping_1, false).valid && $login(castTo(this$static.controller_0, 198), $getValue_3(username_2), (lastArg = $getValue_3(password_3) , $getValue_3(captcha_4) , lastArg));
}

function LoginComponent(){
  AbstractComponent.call(this);
}

defineClass(559, 112, {}, LoginComponent);
var Lcom_itangsoft_notebook_views_login_LoginComponent_2_classLit = createForClass('com.itangsoft.notebook.views.login', 'LoginComponent', 559);
function LoginComponent$lambda$0$Type($$outer_0, grouping_1, username_2, password_3, captcha_4){
  this.$$outer_0 = $$outer_0;
  this.grouping_1 = grouping_1;
  this.username_2 = username_2;
  this.password_3 = password_3;
  this.captcha_4 = captcha_4;
}

defineClass(560, 1, {}, LoginComponent$lambda$0$Type);
_.handleEvent = function handleEvent_9(arg0){
  $lambda$0_9(this.$$outer_0, this.grouping_1, this.username_2, this.password_3, this.captcha_4);
}
;
var Lcom_itangsoft_notebook_views_login_LoginComponent$lambda$0$Type_2_classLit = createForClass('com.itangsoft.notebook.views.login', 'LoginComponent/lambda$0$Type', 560);
function LoginComponent$lambda$1$Type($$outer_0, grouping_1, username_2, password_3, captcha_4){
  this.$$outer_0 = $$outer_0;
  this.grouping_1 = grouping_1;
  this.username_2 = username_2;
  this.password_3 = password_3;
  this.captcha_4 = captcha_4;
}

defineClass(561, 1, {}, LoginComponent$lambda$1$Type);
_.handleEvent = function handleEvent_10(arg0){
  $lambda$1_4(this.$$outer_0, this.grouping_1, this.username_2, this.password_3, this.captcha_4, arg0);
}
;
var Lcom_itangsoft_notebook_views_login_LoginComponent$lambda$1$Type_2_classLit = createForClass('com.itangsoft.notebook.views.login', 'LoginComponent/lambda$1$Type', 561);
function LoginComponent$lambda$2$Type($$outer_0, grouping_1, username_2, password_3, captcha_4){
  this.$$outer_0 = $$outer_0;
  this.grouping_1 = grouping_1;
  this.username_2 = username_2;
  this.password_3 = password_3;
  this.captcha_4 = captcha_4;
}

defineClass(562, 1, {}, LoginComponent$lambda$2$Type);
_.handleEvent = function handleEvent_11(arg0){
  $lambda$2_2(this.$$outer_0, this.grouping_1, this.username_2, this.password_3, this.captcha_4, arg0);
}
;
var Lcom_itangsoft_notebook_views_login_LoginComponent$lambda$2$Type_2_classLit = createForClass('com.itangsoft.notebook.views.login', 'LoginComponent/lambda$2$Type', 562);
function LoginComponent$lambda$3$Type($$outer_0, grouping_1, username_2, password_3, captcha_4){
  this.$$outer_0 = $$outer_0;
  this.grouping_1 = grouping_1;
  this.username_2 = username_2;
  this.password_3 = password_3;
  this.captcha_4 = captcha_4;
}

defineClass(563, 1, {}, LoginComponent$lambda$3$Type);
_.handleEvent = function handleEvent_12(arg0){
  $lambda$3_3(this.$$outer_0, this.grouping_1, this.username_2, this.password_3, this.captcha_4, arg0);
}
;
var Lcom_itangsoft_notebook_views_login_LoginComponent$lambda$3$Type_2_classLit = createForClass('com.itangsoft.notebook.views.login', 'LoginComponent/lambda$3$Type', 563);
function $login(this$static, username, password){
  var notification;
  if ($equals_1('admin', username) && $equals_1('admin.123', password)) {
    $setUserName(this$static.context, username);
    $put(this$static.context.applicationContext, 'realName', '\u6A39');
    $setItem((!sessionStorage_0 && ($clinit_Storage$StorageSupportDetector() , sessionStorageSupported) && (sessionStorage_0 = new Storage_0) , sessionStorage_0), 'realName', '\u6A39');
    $route_0(this$static.router, '/layout/home', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, []));
    return;
  }
  $show_2($setClosable($setPosition(($clinit_Notification() , notification = new Notification_0 , notification.messageSpan.textContent = '\u7528\u6237\u540D\u6216\u5BC6\u7801\u9519\u8BEF' , notification), TOP_CENTER)));
}

function LoginController(){
  BaseComponentController.call(this);
}

defineClass(180, 128, {61:1, 198:1, 180:1}, LoginController);
var Lcom_itangsoft_notebook_views_login_LoginController_2_classLit = createForClass('com.itangsoft.notebook.views.login', 'LoginController', 180);
function LoginControllerCreatorImpl(router, context, eventBus){
  AbstractControllerCreator.call(this, router, context, eventBus);
}

defineClass(431, 124, $intern_5, LoginControllerCreatorImpl);
_.create_1 = function create_11(route){
  var controller, controllerInstance, storedController;
  controllerInstance = new ControllerInstance;
  controllerInstance.controllerCreator = this;
  controllerInstance.controllerClassName = 'com.itangsoft.notebook.views.login.LoginController';
  storedController = $getControllerFormStore(($clinit_ControllerFactory() , INSTANCE_3), 'com.itangsoft.notebook.views.login.LoginController');
  if (!storedController) {
    controller = new LoginController;
    controllerInstance.controller_0 = controller;
    controllerInstance.cached = false;
    $setContext(controller, this.context);
    $setEventBus(controller, this.eventBus);
    $setRouter(controller, this.router);
    controller.cached = false;
    controller.relatedRoute = route;
    controller.relatedSelector = 'login-content';
    $setActivateNaluCommand(controller, new LoginControllerCreatorImpl$lambda$0$Type);
  }
   else {
    controllerInstance.controller_0 = storedController;
    controllerInstance.cached = true;
    controllerInstance.controller_0.cached = true;
  }
  return controllerInstance;
}
;
_.onFinishCreating = function onFinishCreating_7(object){
  var carousel, component, content_0, controller, grouping, username, password, captcha, captchaDiv, rememberMe, rememberMeAndForgetPassword, okButton;
  controller = castTo(object, 180);
  component = new LoginComponent;
  component.controller_0 = controller;
  controller.component = component;
  content_0 = castTo($css(castTo($css(castTo($appendChild_0(castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element), (carousel = $startAutoSlide($appendChild_1($appendChild_1(new Carousel, new Slide_0('https://user-images.githubusercontent.com/4270380/103492828-a06d1200-4e68-11eb-9287-ef830f575d3e.png')), new Slide_0('https://tdesign.gtimg.com/tdesign-starter/docs/starter-docs-industry-light.png'))) , castTo($css(castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), carousel), 3), 'login-carousel'), 3))), 3), (grouping = new FieldsGrouping , username = castTo($css($setAutoValidation($setRequired($groupBy($setRequiredErrorMessage($setPlaceholder(new TextBox, '\u7528\u6237\u540D/\u90AE\u7BB1/\u624B\u673A\u53F7'), '\u8BF7\u8F93\u5165\u7528\u6237\u540D\u3001\u90AE\u7BB1\u6216\u624B\u673A\u53F7'), grouping))), 'login-form-username'), 90) , password = castTo($css($setAutoValidation($setRequired($groupBy($setRequiredErrorMessage($setPlaceholder(new TextBox_0('password'), '\u5BC6\u7801'), '\u8BF7\u8F93\u5165\u5BC6\u7801'), grouping))), 'login-form-password'), 90) , captcha = castTo($css($setMaxLength($setAutoValidation($setRequired($groupBy($setRequiredErrorMessage($setPlaceholder(new TextBox, '\u9A8C\u8BC1\u7801'), '\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801'), grouping)))), 'login-form-captcha'), 90) , captchaDiv = castTo($css(castTo($appendChild_0(castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), captcha), 3), $css(new DominoElement(castTo($attr_0(new EmptyContentBuilder(castToNative(document_0.createElement('img'), $wnd.HTMLElement)), 'src', 'https://auth.huaweicloud.com/authui/verifycode?index=1&alt=0.9009870104059011'), 71).element), 'login-form-captcha-img')), 3), 'login-form-captcha-box'), 3) , rememberMe = castTo($css($filledIn($uncheck($setColor_1(new CheckBox, ($clinit_Color() , BLUE)))), 'login-form-remember-me'), 72) , rememberMeAndForgetPassword = castTo($css(castTo($appendChild_0(castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), rememberMe), 3), $css(castTo($textContent(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('a'), $wnd.HTMLElement))).element), '\u5FD8\u8BB0\u5BC6\u7801'), 3), 'login-form-forget-password')), 3), 'login-form-remember-forget'), 3) , okButton = castTo($css(castTo($addClickListener($block(new Button('\u767B \u5F55')), new LoginComponent$lambda$0$Type(component, grouping, username, password, captcha)), 38), 'login-form-submit'), 38) , $addEventListener(username, 'keyup', new LoginComponent$lambda$1$Type(component, grouping, username, password, captcha)) , $addEventListener(password, 'keyup', new LoginComponent$lambda$2$Type(component, grouping, username, password, captcha)) , $addEventListener(captcha, 'keyup', new LoginComponent$lambda$3$Type(component, grouping, username, password, captcha)) , castTo($css(castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), $appendChild_0(castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), $textContent_0(new HtmlContentBuilder(castToNative(document_0.createElement('h1'), $wnd.HTMLElement)), '\u7528\u6237\u767B\u5F55')), 3), $appendChild_0(castTo($appendChild_0(castTo($appendChild_0(castTo($appendChild_0(castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), username), 3), password), 3), captchaDiv), 3), rememberMeAndForgetPassword), 3), okButton))), 3), 'login-form'), 3))), 3), 'login-content'), 3), 'clearfix'), 3);
  $initElement(component, content_0.wrappedElement);
}
;
_.setParameter = function setParameter_5(object, parameterKeys, parameterValues){
}
;
var Lcom_itangsoft_notebook_views_login_LoginControllerCreatorImpl_2_classLit = createForClass('com.itangsoft.notebook.views.login', 'LoginControllerCreatorImpl', 431);
function LoginControllerCreatorImpl$lambda$0$Type(){
}

defineClass(432, 1, {}, LoginControllerCreatorImpl$lambda$0$Type);
_.execute = function execute_5(){
}
;
var Lcom_itangsoft_notebook_views_login_LoginControllerCreatorImpl$lambda$0$Type_2_classLit = createForClass('com.itangsoft.notebook.views.login', 'LoginControllerCreatorImpl/lambda$0$Type', 432);
function $asList(this$static){
  var asArray;
  asArray = this$static;
  return new Arrays$ArrayList(asArray);
}

function $addEventListener_2(this$static, type_0, listener, options){
  this$static.addEventListener(type_0, listener, options);
}

function $clinit_Node(){
  $clinit_Node = emptyMethod;
  ELEMENT_NODE = $wnd.Node.ELEMENT_NODE;
}

var ELEMENT_NODE = 0;
function $forEach_4(this$static, cb){
  forEach_4(this$static, cb);
}

function $clinit_DomGlobal(){
  $clinit_DomGlobal = emptyMethod;
  document_0 = $wnd.goog.global.document;
  location_1 = $wnd.goog.global.location;
}

var document_0, location_1;
function $clinit_XMLHttpRequest(){
  $clinit_XMLHttpRequest = emptyMethod;
  DONE = $wnd.XMLHttpRequest.DONE;
}

var DONE = 0;
defineClass(798, 1, {});
var Ljava_io_OutputStream_2_classLit = createForClass('java.io', 'OutputStream', 798);
defineClass(797, 798, {});
var Ljava_io_FilterOutputStream_2_classLit = createForClass('java.io', 'FilterOutputStream', 797);
function PrintStream(){
}

defineClass(258, 797, {}, PrintStream);
var Ljava_io_PrintStream_2_classLit = createForClass('java.io', 'PrintStream', 258);
function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(171, 1, {170:1});
_.toString_0 = function toString_8(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 171);
function ArithmeticException(){
  RuntimeException_0.call(this, 'divide by zero');
}

defineClass(289, 13, $intern_2, ArithmeticException);
var Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang', 'ArithmeticException', 289);
function ArrayIndexOutOfBoundsException(msg){
  IndexOutOfBoundsException_0.call(this, msg);
}

defineClass(254, 77, $intern_2, ArrayIndexOutOfBoundsException);
var Ljava_lang_ArrayIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'ArrayIndexOutOfBoundsException', 254);
function ArrayStoreException(){
  RuntimeException.call(this);
}

function ArrayStoreException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(205, 13, $intern_2, ArrayStoreException, ArrayStoreException_0);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 205);
function digit(c){
  if (c >= 48 && c < 48 + $wnd.Math.min(10, 10)) {
    return c - 48;
  }
  if (c >= 97 && c < 97) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < 65) {
    return c - 65 + 10;
  }
  return -1;
}

function ClassCastException(){
  RuntimeException_0.call(this, null);
}

defineClass(265, 13, $intern_2, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 265);
function $isInstance_2(instance){
  if (instance == null) {
    return false;
  }
  return instance.$implements__java_lang_Cloneable || Array.isArray(instance);
}

function IllegalArgumentException(message){
  RuntimeException_0.call(this, message);
}

defineClass(76, 13, $intern_2, IllegalArgumentException);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 76);
function IllegalStateException(){
  RuntimeException.call(this);
}

function IllegalStateException_0(s){
  RuntimeException_0.call(this, s);
}

defineClass(32, 13, $intern_2, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 32);
function $equals_0(this$static, o){
  return instanceOf(o, 68) && castTo(o, 68).value_0 == this$static.value_0;
}

function Integer(value_0){
  this.value_0 = value_0;
}

function numberOfLeadingZeros_0(i){
  var m, n, y_0;
  if (i < 0) {
    return 0;
  }
   else if (i == 0) {
    return 32;
  }
   else {
    y_0 = -(i >> 16);
    m = y_0 >> 16 & 16;
    n = 16 - m;
    i = i >> m;
    y_0 = i - 256;
    m = y_0 >> 16 & 8;
    n += m;
    i <<= m;
    y_0 = i - 4096;
    m = y_0 >> 16 & 4;
    n += m;
    i <<= m;
    y_0 = i - 16384;
    m = y_0 >> 16 & 2;
    n += m;
    i <<= m;
    y_0 = i >> 14;
    m = y_0 & ~(y_0 >> 1);
    return n + 2 - m;
  }
}

function numberOfTrailingZeros(i){
  var r, rtn;
  if (i == 0) {
    return 32;
  }
   else {
    rtn = 0;
    for (r = 1; (r & i) == 0; r <<= 1) {
      ++rtn;
    }
    return rtn;
  }
}

function valueOf(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    return $clinit_Integer$BoxedValues() , rebase = i + 128 , result = boxedValues[rebase] , !result && (result = boxedValues[rebase] = new Integer(i)) , result;
  }
  return new Integer(i);
}

defineClass(68, 139, {4:1, 34:1, 68:1, 139:1}, Integer);
_.equals_0 = function equals_1(o){
  return $equals_0(this, o);
}
;
_.hashCode_1 = function hashCode_2(){
  return this.value_0;
}
;
_.toString_0 = function toString_10(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 68);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues = initUnidimensionalArray(Ljava_lang_Integer_2_classLit, $intern_0, 68, 256, 0, 1);
}

var boxedValues;
function $forEach(this$static, action){
  var t, t$iterator;
  checkCriticalNotNull(action);
  for (t$iterator = this$static.iterator(); t$iterator.hasNext_0();) {
    t = t$iterator.next_1();
    action.accept(t);
  }
}

defineClass(1518, 1, {});
function NumberFormatException(message){
  IllegalArgumentException.call(this, message);
}

defineClass(64, 76, {4:1, 16:1, 64:1, 13:1, 9:1}, NumberFormatException);
var Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang', 'NumberFormatException', 64);
function StackTraceElement(methodName, fileName, lineNumber){
  this.className = 'Unknown';
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
}

defineClass(74, 1, {4:1, 74:1}, StackTraceElement);
_.equals_0 = function equals_2(other){
  var st;
  if (instanceOf(other, 74)) {
    st = castTo(other, 74);
    return this.lineNumber == st.lineNumber && this.methodName == st.methodName && this.className == st.className && this.fileName == st.fileName;
  }
  return false;
}
;
_.hashCode_1 = function hashCode_3(){
  return hashCode_10(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_0, 1, 5, [valueOf(this.lineNumber), this.className, this.methodName, this.fileName]));
}
;
_.toString_0 = function toString_11(){
  return this.className + '.' + this.methodName + '(' + (this.fileName != null?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.lineNumber = 0;
var Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang', 'StackTraceElement', 74);
function $append_1(this$static, x_0){
  this$static.string += String.fromCharCode(x_0);
  return this$static;
}

function $append_2(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_3(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_4(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_0(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_1(s){
  AbstractStringBuilder.call(this, (checkCriticalNotNull(s) , s));
}

defineClass(31, 171, {170:1}, StringBuilder, StringBuilder_0, StringBuilder_1);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 31);
function $clinit_System(){
  $clinit_System = emptyMethod;
  err = new PrintStream;
}

function arraycopy(src_0, srcOfs, dest, destOfs, len){
  $clinit_System();
  var destArray, destComp, destEnd, destType, srcArray, srcComp, srcType;
  checkCriticalNotNull_0(src_0, 'src');
  checkCriticalNotNull_0(dest, 'dest');
  srcType = getClass__Ljava_lang_Class___devirtual$(src_0);
  destType = getClass__Ljava_lang_Class___devirtual$(dest);
  checkCriticalArrayType_0((srcType.modifiers & 4) != 0, 'srcType is not an array');
  checkCriticalArrayType_0((destType.modifiers & 4) != 0, 'destType is not an array');
  srcComp = srcType.componentType;
  destComp = destType.componentType;
  checkCriticalArrayType_0((srcComp.modifiers & 1) != 0?srcComp == destComp:(destComp.modifiers & 1) == 0, "Array types don't match");
  checkArrayCopyIndicies(src_0, srcOfs, dest, destOfs, len);
  if ((srcComp.modifiers & 1) == 0 && srcType != destType) {
    srcArray = castToArray(src_0);
    destArray = castToArray(dest);
    if (src_0 === dest && srcOfs < destOfs) {
      srcOfs += len;
      for (destEnd = destOfs + len; destEnd-- > destOfs;) {
        setCheck(destArray, destEnd, srcArray[--srcOfs]);
      }
    }
     else {
      for (destEnd = destOfs + len; destOfs < destEnd;) {
        setCheck(destArray, destOfs++, srcArray[srcOfs++]);
      }
    }
  }
   else {
    copy(src_0, srcOfs, dest, destOfs, len, true);
  }
}

function checkArrayCopyIndicies(src_0, srcOfs, dest, destOfs, len){
  var destlen, srclen;
  srclen = src_0.length;
  destlen = dest.length;
  if (srcOfs < 0 || destOfs < 0 || len < 0 || srcOfs + len > srclen || destOfs + len > destlen) {
    throw toJs(new IndexOutOfBoundsException);
  }
}

defineClass(1520, 1, {});
var err;
function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(95, 13, $intern_2, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 95);
function $clinit_BigInteger(){
  $clinit_BigInteger = emptyMethod;
  var i;
  ONE_0 = new BigInteger(1, 1);
  TEN = new BigInteger(1, 10);
  ZERO_0 = new BigInteger(0, 0);
  MINUS_ONE = new BigInteger(-1, 1);
  SMALL_VALUES = stampJavaTypeInfo(getClassLiteralForArray(Ljava_math_BigInteger_2_classLit, 1), $intern_0, 19, 0, [ZERO_0, ONE_0, new BigInteger(1, 2), new BigInteger(1, 3), new BigInteger(1, 4), new BigInteger(1, 5), new BigInteger(1, 6), new BigInteger(1, 7), new BigInteger(1, 8), new BigInteger(1, 9), TEN]);
  TWO_POWS = initUnidimensionalArray(Ljava_math_BigInteger_2_classLit, $intern_0, 19, 32, 0, 1);
  for (i = 0; i < TWO_POWS.length; i++) {
    TWO_POWS[i] = gte_0(shl_0(1, i), 0)?fromBits(shl_0(1, i)):$negate(fromBits(neg_0(shl_0(1, i))));
  }
}

function $cutOffLeadingZeroes(this$static){
  while (this$static.numberLength > 0 && this$static.digits[--this$static.numberLength] == 0)
  ;
  this$static.digits[this$static.numberLength++] == 0 && (this$static.sign = 0);
}

function $equalsArrays(this$static, b){
  var i;
  for (i = this$static.numberLength - 1; i >= 0 && this$static.digits[i] === b[i]; i--)
  ;
  return i < 0;
}

function $multiply(this$static, val){
  if (val.sign == 0 || this$static.sign == 0) {
    return ZERO_0;
  }
  return $clinit_Multiplication() , karatsuba(this$static, val);
}

function $negate(this$static){
  return this$static.sign == 0?this$static:new BigInteger_1(-this$static.sign, this$static.numberLength, this$static.digits);
}

function $shiftLeft(this$static, n){
  if (n == 0 || this$static.sign == 0) {
    return this$static;
  }
  return n > 0?shiftLeft(this$static, n):shiftRight(this$static, -n);
}

function $shiftRight(this$static, n){
  if (n == 0 || this$static.sign == 0) {
    return this$static;
  }
  return n > 0?shiftRight(this$static, n):shiftLeft(this$static, -n);
}

function BigInteger(sign, bits){
  $clinit_BigInteger();
  BigInteger_1.call(this, sign, 1, stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_18, 36, 15, [bits]));
}

function BigInteger_0(lowBits, highBits){
  BigInteger_1.call(this, 1, 2, stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_18, 36, 15, [lowBits, highBits]));
}

function BigInteger_1(sign, numberLength, digits){
  $clinit_BigInteger();
  this.sign = sign;
  this.numberLength = numberLength;
  this.digits = digits;
}

function BigInteger_2(val){
  $clinit_BigInteger();
  BigInteger_3.call(this, val);
}

function BigInteger_3(val){
  checkCriticalNotNull(val);
  if (val.length == 0) {
    throw toJs(new NumberFormatException('Zero length BigInteger'));
  }
  setFromString(this, val);
}

function fromBits(bits){
  $clinit_BigInteger();
  var highBits, lowBits;
  lowBits = toInt_0(bits);
  highBits = toInt_0(shru_0(bits, 32));
  if (highBits != 0) {
    return new BigInteger_0(lowBits, highBits);
  }
  if (lowBits > 10 || lowBits < 0) {
    return new BigInteger(1, lowBits);
  }
  return SMALL_VALUES[lowBits];
}

function setFromString(bi, val){
  var bigRadix, bigRadixDigit, bigRadixDigitsLength, charsPerInt, digitIndex, digits, endChar, newDigit, numberLength, sign, startChar, stringLength, substrEnd, substrStart, topChars;
  stringLength = val.length;
  endChar = stringLength;
  checkCriticalStringElementIndex(0, val.length);
  if (val.charCodeAt(0) == 45) {
    sign = -1;
    startChar = 1;
    --stringLength;
  }
   else {
    sign = 1;
    startChar = 0;
  }
  charsPerInt = ($clinit_Conversion() , digitFitInInt)[10];
  bigRadixDigitsLength = stringLength / charsPerInt | 0;
  topChars = stringLength % charsPerInt;
  topChars != 0 && ++bigRadixDigitsLength;
  digits = initUnidimensionalArray(I_classLit, $intern_18, 36, bigRadixDigitsLength, 15, 1);
  bigRadix = bigRadices[8];
  digitIndex = 0;
  substrEnd = startChar + (topChars == 0?charsPerInt:topChars);
  for (substrStart = startChar; substrStart < endChar; substrStart = substrEnd , substrEnd = substrStart + charsPerInt) {
    bigRadixDigit = __parseAndValidateInt((checkCriticalStringBounds(substrStart, substrEnd, val.length) , val.substr(substrStart, substrEnd - substrStart)));
    newDigit = ($clinit_Multiplication() , multiplyByInt(digits, digits, digitIndex, bigRadix));
    newDigit += inplaceAdd(digits, digitIndex, bigRadixDigit);
    digits[digitIndex++] = newDigit;
  }
  numberLength = digitIndex;
  bi.sign = sign;
  bi.numberLength = numberLength;
  bi.digits = digits;
  $cutOffLeadingZeroes(bi);
}

defineClass(19, 139, {4:1, 34:1, 139:1, 19:1}, BigInteger, BigInteger_0, BigInteger_1, BigInteger_2);
_.equals_0 = function equals_3(x_0){
  var x1;
  if (this === x_0) {
    return true;
  }
  if (instanceOf(x_0, 19)) {
    x1 = castTo(x_0, 19);
    return this.sign == x1.sign && this.numberLength == x1.numberLength && $equalsArrays(this, x1.digits);
  }
  return false;
}
;
_.hashCode_1 = function hashCode_4(){
  var i;
  if (this.hashCode_0 != 0) {
    return this.hashCode_0;
  }
  for (i = 0; i < this.digits.length; i++) {
    this.hashCode_0 = this.hashCode_0 * 33 + (this.digits[i] & -1);
  }
  this.hashCode_0 = this.hashCode_0 * this.sign;
  return this.hashCode_0;
}
;
_.toString_0 = function toString_12(){
  return toDecimalScaledString(this, 0);
}
;
_.hashCode_0 = 0;
_.numberLength = 0;
_.sign = 0;
var MINUS_ONE, ONE_0, SMALL_VALUES, TEN, TWO_POWS, ZERO_0;
var Ljava_math_BigInteger_2_classLit = createForClass('java.math', 'BigInteger', 19);
function shiftLeft(source, count){
  var intCount, resDigits, resLength, result;
  intCount = count >> 5;
  count &= 31;
  resLength = source.numberLength + intCount + (count == 0?0:1);
  resDigits = initUnidimensionalArray(I_classLit, $intern_18, 36, resLength, 15, 1);
  shiftLeft_0(resDigits, source.digits, intCount, count);
  result = new BigInteger_1(source.sign, resLength, resDigits);
  $cutOffLeadingZeroes(result);
  return result;
}

function shiftLeft_0(result, source, intCount, count){
  var i, i0, rightShiftCount;
  if (count == 0) {
    arraycopy(source, 0, result, intCount, result.length - intCount);
  }
   else {
    rightShiftCount = 32 - count;
    result[result.length - 1] = 0;
    for (i0 = result.length - 1; i0 > intCount; i0--) {
      result[i0] |= source[i0 - intCount - 1] >>> rightShiftCount;
      result[i0 - 1] = source[i0 - intCount - 1] << count;
    }
  }
  for (i = 0; i < intCount; i++) {
    result[i] = 0;
  }
}

function shiftLeftOneBit(result, source, srcLen){
  var carry, i, val;
  carry = 0;
  for (i = 0; i < srcLen; i++) {
    val = source[i];
    result[i] = val << 1 | carry;
    carry = val >>> 31;
  }
  carry != 0 && (result[srcLen] = carry);
}

function shiftRight(source, count){
  var i, intCount, resDigits, resLength, result;
  intCount = count >> 5;
  count &= 31;
  if (intCount >= source.numberLength) {
    return source.sign < 0?($clinit_BigInteger() , MINUS_ONE):($clinit_BigInteger() , ZERO_0);
  }
  resLength = source.numberLength - intCount;
  resDigits = initUnidimensionalArray(I_classLit, $intern_18, 36, resLength + 1, 15, 1);
  shiftRight_0(resDigits, resLength, source.digits, intCount, count);
  if (source.sign < 0) {
    for (i = 0; i < intCount && source.digits[i] == 0; i++)
    ;
    if (i < intCount || count > 0 && source.digits[i] << 32 - count != 0) {
      for (i = 0; i < resLength && resDigits[i] == -1; i++) {
        resDigits[i] = 0;
      }
      i == resLength && ++resLength;
      ++resDigits[i];
    }
  }
  result = new BigInteger_1(source.sign, resLength, resDigits);
  $cutOffLeadingZeroes(result);
  return result;
}

function shiftRight_0(result, resultLen, source, intCount, count){
  var allZero, i, leftShiftCount;
  allZero = true;
  for (i = 0; i < intCount; i++) {
    allZero = allZero & source[i] == 0;
  }
  if (count == 0) {
    arraycopy(source, intCount, result, 0, resultLen);
    i = resultLen;
  }
   else {
    leftShiftCount = 32 - count;
    allZero = allZero & source[i] << leftShiftCount == 0;
    for (i = 0; i < resultLen - 1; i++) {
      result[i] = source[i + intCount] >>> count | source[i + intCount + 1] << leftShiftCount;
    }
    result[i] = source[i + intCount] >>> count;
    ++i;
  }
  return allZero;
}

function $clinit_Conversion(){
  $clinit_Conversion = emptyMethod;
  bigRadices = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_18, 36, 15, [$intern_1, 1162261467, $intern_19, 1220703125, 362797056, 1977326743, $intern_19, 387420489, $intern_12, 214358881, 429981696, 815730721, 1475789056, 170859375, 268435456, 410338673, 612220032, 893871739, 1280000000, 1801088541, 113379904, 148035889, 191102976, 244140625, 308915776, 387420489, 481890304, 594823321, 729000000, 887503681, $intern_19, 1291467969, 1544804416, 1838265625, 60466176]);
  digitFitInInt = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_18, 36, 15, [-1, -1, 31, 19, 15, 13, 11, 11, 10, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5]);
}

function divideLongByBillion(a){
  var aPos, quot, rem;
  if (compare_0(a, 0) >= 0) {
    quot = div(a, $intern_12);
    rem = mod(a, $intern_12);
  }
   else {
    aPos = shru_0(a, 1);
    quot = div(aPos, 500000000);
    rem = mod(aPos, 500000000);
    rem = add_1(shl_0(rem, 1), and_0(a, 1));
  }
  return or_0(shl_0(rem, 32), and_0(quot, $intern_20));
}

function toDecimalScaledString(val, scale){
  $clinit_Conversion();
  var currentChar, delta, digits, endPoint, exponent, highDigit, i, i1, insertPoint, j, j0, negNumber, numberLength, prev, previous, res, resDigit, resLengthInChars, result, result1, result10, result11, sign, startPoint, temp, temp1, tempLen, v;
  sign = val.sign;
  numberLength = val.numberLength;
  digits = val.digits;
  if (sign == 0) {
    switch (scale) {
      case 0:
        return '0';
      case 1:
        return '0.0';
      case 2:
        return '0.00';
      case 3:
        return '0.000';
      case 4:
        return '0.0000';
      case 5:
        return '0.00000';
      case 6:
        return '0.000000';
      default:result10 = new StringBuilder;
        scale < 0?(result10.string += '0E+' , result10):(result10.string += '0E' , result10);
        result10.string += -scale;
        return result10.string;
    }
  }
  resLengthInChars = numberLength * 10 + 1 + 7;
  result = initUnidimensionalArray(C_classLit, $intern_21, 36, resLengthInChars + 1, 15, 1);
  currentChar = resLengthInChars;
  if (numberLength == 1) {
    highDigit = digits[0];
    if (highDigit < 0) {
      v = and_0(highDigit, $intern_20);
      do {
        prev = v;
        v = div(v, 10);
        result[--currentChar] = 48 + toInt_0(sub_1(prev, mul_0(v, 10))) & $intern_4;
      }
       while (compare_0(v, 0) != 0);
    }
     else {
      v = highDigit;
      do {
        prev = v;
        v = v / 10 | 0;
        result[--currentChar] = 48 + (prev - v * 10) & $intern_4;
      }
       while (v != 0);
    }
  }
   else {
    temp = initUnidimensionalArray(I_classLit, $intern_18, 36, numberLength, 15, 1);
    tempLen = numberLength;
    arraycopy(digits, 0, temp, 0, tempLen);
    BIG_LOOP: while (true) {
      result11 = 0;
      for (i1 = tempLen - 1; i1 >= 0; i1--) {
        temp1 = add_1(shl_0(result11, 32), and_0(temp[i1], $intern_20));
        res = divideLongByBillion(temp1);
        temp[i1] = toInt_0(res);
        result11 = toInt_0(shr_0(res, 32));
      }
      resDigit = toInt_0(result11);
      previous = currentChar;
      do {
        result[--currentChar] = 48 + resDigit % 10 & $intern_4;
      }
       while ((resDigit = resDigit / 10 | 0) != 0 && currentChar != 0);
      delta = 9 - previous + currentChar;
      for (i = 0; i < delta && currentChar > 0; i++) {
        result[--currentChar] = 48;
      }
      j = tempLen - 1;
      for (; temp[j] == 0; j--) {
        if (j == 0) {
          break BIG_LOOP;
        }
      }
      tempLen = j + 1;
    }
    while (result[currentChar] == 48) {
      ++currentChar;
    }
  }
  negNumber = sign < 0;
  exponent = resLengthInChars - currentChar - scale - 1;
  if (scale == 0) {
    negNumber && (result[--currentChar] = 45);
    return valueOf_2(result, currentChar, resLengthInChars - currentChar);
  }
  if (scale > 0 && exponent >= -6) {
    if (exponent >= 0) {
      insertPoint = currentChar + exponent;
      for (j0 = resLengthInChars - 1; j0 >= insertPoint; j0--) {
        result[j0 + 1] = result[j0];
      }
      result[++insertPoint] = 46;
      negNumber && (result[--currentChar] = 45);
      return valueOf_2(result, currentChar, resLengthInChars - currentChar + 1);
    }
    for (j = 2; j < -exponent + 1; j++) {
      result[--currentChar] = 48;
    }
    result[--currentChar] = 46;
    result[--currentChar] = 48;
    negNumber && (result[--currentChar] = 45);
    return valueOf_2(result, currentChar, resLengthInChars - currentChar);
  }
  startPoint = currentChar + 1;
  endPoint = resLengthInChars;
  result1 = new StringBuilder_0;
  negNumber && (result1.string += '-' , result1);
  if (endPoint - startPoint >= 1) {
    $append_1(result1, result[currentChar]);
    result1.string += '.';
    result1.string += valueOf_2(result, currentChar + 1, resLengthInChars - currentChar - 1);
  }
   else {
    result1.string += valueOf_2(result, currentChar, resLengthInChars - currentChar);
  }
  result1.string += 'E';
  exponent > 0 && (result1.string += '+' , result1);
  result1.string += '' + exponent;
  return result1.string;
}

var bigRadices, digitFitInInt;
function add_2(op1, op2){
  var a, b, cmp, op1Len, op1Sign, op2Len, op2Sign, res, res0, resDigits, resSign, valueHi, valueLo;
  op1Sign = op1.sign;
  op2Sign = op2.sign;
  if (op1Sign == 0) {
    return op2;
  }
  if (op2Sign == 0) {
    return op1;
  }
  op1Len = op1.numberLength;
  op2Len = op2.numberLength;
  if (op1Len + op2Len == 2) {
    a = and_0(op1.digits[0], $intern_20);
    b = and_0(op2.digits[0], $intern_20);
    if (op1Sign == op2Sign) {
      res0 = add_1(a, b);
      valueLo = toInt_0(res0);
      valueHi = toInt_0(shru_0(res0, 32));
      return valueHi == 0?new BigInteger(op1Sign, valueLo):new BigInteger_1(op1Sign, 2, stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_18, 36, 15, [valueLo, valueHi]));
    }
    return $clinit_BigInteger() , gte_0(op1Sign < 0?sub_1(b, a):sub_1(a, b), 0)?fromBits(op1Sign < 0?sub_1(b, a):sub_1(a, b)):$negate(fromBits(neg_0(op1Sign < 0?sub_1(b, a):sub_1(a, b))));
  }
   else if (op1Sign == op2Sign) {
    resSign = op1Sign;
    resDigits = op1Len >= op2Len?add_3(op1.digits, op1Len, op2.digits, op2Len):add_3(op2.digits, op2Len, op1.digits, op1Len);
  }
   else {
    cmp = op1Len != op2Len?op1Len > op2Len?1:-1:compareArrays(op1.digits, op2.digits, op1Len);
    if (cmp == 0) {
      return $clinit_BigInteger() , ZERO_0;
    }
    if (cmp == 1) {
      resSign = op1Sign;
      resDigits = subtract_0(op1.digits, op1Len, op2.digits, op2Len);
    }
     else {
      resSign = op2Sign;
      resDigits = subtract_0(op2.digits, op2Len, op1.digits, op1Len);
    }
  }
  res = new BigInteger_1(resSign, resDigits.length, resDigits);
  $cutOffLeadingZeroes(res);
  return res;
}

function add_3(a, aSize, b, bSize){
  var res;
  res = initUnidimensionalArray(I_classLit, $intern_18, 36, aSize + 1, 15, 1);
  add_4(res, a, aSize, b, bSize);
  return res;
}

function add_4(res, a, aSize, b, bSize){
  var carry, i;
  carry = add_1(and_0(a[0], $intern_20), and_0(b[0], $intern_20));
  res[0] = toInt_0(carry);
  carry = shr_0(carry, 32);
  if (aSize >= bSize) {
    for (i = 1; i < bSize; i++) {
      carry = add_1(carry, add_1(and_0(a[i], $intern_20), and_0(b[i], $intern_20)));
      res[i] = toInt_0(carry);
      carry = shr_0(carry, 32);
    }
    for (; i < aSize; i++) {
      carry = add_1(carry, and_0(a[i], $intern_20));
      res[i] = toInt_0(carry);
      carry = shr_0(carry, 32);
    }
  }
   else {
    for (i = 1; i < aSize; i++) {
      carry = add_1(carry, add_1(and_0(a[i], $intern_20), and_0(b[i], $intern_20)));
      res[i] = toInt_0(carry);
      carry = shr_0(carry, 32);
    }
    for (; i < bSize; i++) {
      carry = add_1(carry, and_0(b[i], $intern_20));
      res[i] = toInt_0(carry);
      carry = shr_0(carry, 32);
    }
  }
  compare_0(carry, 0) != 0 && (res[i] = toInt_0(carry));
}

function compareArrays(a, b, size_0){
  var i;
  for (i = size_0 - 1; i >= 0 && a[i] === b[i]; i--)
  ;
  return i < 0?0:lt(and_0(a[i], $intern_20), and_0(b[i], $intern_20))?-1:1;
}

function inplaceAdd(a, aSize, addend){
  var carry, i;
  carry = and_0(addend, $intern_20);
  for (i = 0; compare_0(carry, 0) != 0 && i < aSize; i++) {
    carry = add_1(carry, and_0(a[i], $intern_20));
    a[i] = toInt_0(carry);
    carry = shr_0(carry, 32);
  }
  return toInt_0(carry);
}

function subtract(op1, op2){
  var a, b, cmp, op1Len, op1Sign, op2Len, op2Sign, res, resDigits, resSign;
  op1Sign = op1.sign;
  op2Sign = op2.sign;
  if (op2Sign == 0) {
    return op1;
  }
  if (op1Sign == 0) {
    return op2.sign == 0?op2:new BigInteger_1(-op2.sign, op2.numberLength, op2.digits);
  }
  op1Len = op1.numberLength;
  op2Len = op2.numberLength;
  if (op1Len + op2Len == 2) {
    a = and_0(op1.digits[0], $intern_20);
    b = and_0(op2.digits[0], $intern_20);
    op1Sign < 0 && (a = neg_0(a));
    op2Sign < 0 && (b = neg_0(b));
    return $clinit_BigInteger() , gte_0(sub_1(a, b), 0)?fromBits(sub_1(a, b)):$negate(fromBits(neg_0(sub_1(a, b))));
  }
  cmp = op1Len != op2Len?op1Len > op2Len?1:-1:compareArrays(op1.digits, op2.digits, op1Len);
  if (cmp == -1) {
    resSign = -op2Sign;
    resDigits = op1Sign == op2Sign?subtract_0(op2.digits, op2Len, op1.digits, op1Len):add_3(op2.digits, op2Len, op1.digits, op1Len);
  }
   else {
    resSign = op1Sign;
    if (op1Sign == op2Sign) {
      if (cmp == 0) {
        return $clinit_BigInteger() , ZERO_0;
      }
      resDigits = subtract_0(op1.digits, op1Len, op2.digits, op2Len);
    }
     else {
      resDigits = add_3(op1.digits, op1Len, op2.digits, op2Len);
    }
  }
  res = new BigInteger_1(resSign, resDigits.length, resDigits);
  $cutOffLeadingZeroes(res);
  return res;
}

function subtract_0(a, aSize, b, bSize){
  var res;
  res = initUnidimensionalArray(I_classLit, $intern_18, 36, aSize, 15, 1);
  subtract_1(res, a, aSize, b, bSize);
  return res;
}

function subtract_1(res, a, aSize, b, bSize){
  var borrow, i;
  borrow = 0;
  for (i = 0; i < bSize; i++) {
    borrow = add_1(borrow, sub_1(and_0(a[i], $intern_20), and_0(b[i], $intern_20)));
    res[i] = toInt_0(borrow);
    borrow = shr_0(borrow, 32);
  }
  for (; i < aSize; i++) {
    borrow = add_1(borrow, and_0(a[i], $intern_20));
    res[i] = toInt_0(borrow);
    borrow = shr_0(borrow, 32);
  }
}

function $clinit_Multiplication(){
  $clinit_Multiplication = emptyMethod;
  var fivePow, i;
  bigFivePows = initUnidimensionalArray(Ljava_math_BigInteger_2_classLit, $intern_0, 19, 32, 0, 1);
  bigTenPows = initUnidimensionalArray(Ljava_math_BigInteger_2_classLit, $intern_0, 19, 32, 0, 1);
  fivePow = 1;
  for (i = 0; i <= 18; i++) {
    bigFivePows[i] = ($clinit_BigInteger() , compare_0(fivePow, 0) >= 0?fromBits(fivePow):$negate(fromBits(neg_0(fivePow))));
    bigTenPows[i] = gte_0(shl_0(fivePow, i), 0)?fromBits(shl_0(fivePow, i)):$negate(fromBits(neg_0(shl_0(fivePow, i))));
    fivePow = mul_0(fivePow, 5);
  }
  for (; i < bigTenPows.length; i++) {
    bigFivePows[i] = $multiply(bigFivePows[i - 1], bigFivePows[1]);
    bigTenPows[i] = $multiply(bigTenPows[i - 1], ($clinit_BigInteger() , TEN));
  }
}

function karatsuba(op1, op2){
  $clinit_Multiplication();
  var lower, lowerOp1, lowerOp2, middle, ndiv2, temp, upper, upperOp1, upperOp2;
  if (op2.numberLength > op1.numberLength) {
    temp = op1;
    op1 = op2;
    op2 = temp;
  }
  if (op2.numberLength < 63) {
    return multiplyPAP(op1, op2);
  }
  ndiv2 = (op1.numberLength & -2) << 4;
  upperOp1 = $shiftRight(op1, ndiv2);
  upperOp2 = $shiftRight(op2, ndiv2);
  lowerOp1 = subtract(op1, $shiftLeft(upperOp1, ndiv2));
  lowerOp2 = subtract(op2, $shiftLeft(upperOp2, ndiv2));
  upper = karatsuba(upperOp1, upperOp2);
  lower = karatsuba(lowerOp1, lowerOp2);
  middle = karatsuba(subtract(upperOp1, lowerOp1), subtract(lowerOp2, upperOp2));
  middle = add_2(add_2(middle, upper), lower);
  middle = $shiftLeft(middle, ndiv2);
  upper = $shiftLeft(upper, ndiv2 << 1);
  return add_2(add_2(upper, middle), lower);
}

function multArraysPAP(aDigits, aLen, bDigits, bLen, resDigits){
  if (aLen == 0 || bLen == 0) {
    return;
  }
  aLen == 1?(resDigits[bLen] = multiplyByInt(resDigits, bDigits, bLen, aDigits[0])):bLen == 1?(resDigits[aLen] = multiplyByInt(resDigits, aDigits, aLen, bDigits[0])):multPAP(aDigits, bDigits, resDigits, aLen, bLen);
}

function multPAP(a, b, t, aLen, bLen){
  var aI, carry, i, j;
  if (maskUndefined(a) === maskUndefined(b) && aLen == bLen) {
    square(a, aLen, t);
    return;
  }
  for (i = 0; i < aLen; i++) {
    carry = 0;
    aI = a[i];
    for (j = 0; j < bLen; j++) {
      carry = add_1(add_1(mul_0(and_0(aI, $intern_20), and_0(b[j], $intern_20)), and_0(t[i + j], $intern_20)), and_0(toInt_0(carry), $intern_20));
      t[i + j] = toInt_0(carry);
      carry = shru_0(carry, 32);
    }
    t[i + bLen] = toInt_0(carry);
  }
}

function multiplyByInt(res, a, aSize, factor){
  $clinit_Multiplication();
  var carry, i;
  carry = 0;
  for (i = 0; i < aSize; i++) {
    carry = add_1(mul_0(and_0(a[i], $intern_20), and_0(factor, $intern_20)), and_0(toInt_0(carry), $intern_20));
    res[i] = toInt_0(carry);
    carry = shru_0(carry, 32);
  }
  return toInt_0(carry);
}

function multiplyPAP(a, b){
  var aDigits, aLen, bDigits, bLen, resDigits, resLength, resSign, result, val, valueHi, valueLo;
  aLen = a.numberLength;
  bLen = b.numberLength;
  resLength = aLen + bLen;
  resSign = a.sign != b.sign?-1:1;
  if (resLength == 2) {
    val = mul_0(and_0(a.digits[0], $intern_20), and_0(b.digits[0], $intern_20));
    valueLo = toInt_0(val);
    valueHi = toInt_0(shru_0(val, 32));
    return valueHi == 0?new BigInteger(resSign, valueLo):new BigInteger_1(resSign, 2, stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_18, 36, 15, [valueLo, valueHi]));
  }
  aDigits = a.digits;
  bDigits = b.digits;
  resDigits = initUnidimensionalArray(I_classLit, $intern_18, 36, resLength, 15, 1);
  multArraysPAP(aDigits, aLen, bDigits, bLen, resDigits);
  result = new BigInteger_1(resSign, resLength, resDigits);
  $cutOffLeadingZeroes(result);
  return result;
}

function square(a, aLen, res){
  var carry, i, i0, index_0, j;
  for (i0 = 0; i0 < aLen; i0++) {
    carry = 0;
    for (j = i0 + 1; j < aLen; j++) {
      carry = add_1(add_1(mul_0(and_0(a[i0], $intern_20), and_0(a[j], $intern_20)), and_0(res[i0 + j], $intern_20)), and_0(toInt_0(carry), $intern_20));
      res[i0 + j] = toInt_0(carry);
      carry = shru_0(carry, 32);
    }
    res[i0 + aLen] = toInt_0(carry);
  }
  shiftLeftOneBit(res, res, aLen << 1);
  carry = 0;
  for (i = 0 , index_0 = 0; i < aLen; ++i , index_0++) {
    carry = add_1(add_1(mul_0(and_0(a[i], $intern_20), and_0(a[i], $intern_20)), and_0(res[index_0], $intern_20)), and_0(toInt_0(carry), $intern_20));
    res[index_0] = toInt_0(carry);
    carry = shru_0(carry, 32);
    ++index_0;
    carry = add_1(carry, and_0(res[index_0], $intern_20));
    res[index_0] = toInt_0(carry);
    carry = shru_0(carry, 32);
  }
  return res;
}

var bigFivePows, bigTenPows;
function $addAll(this$static, c){
  var changed, e, e$iterator;
  checkCriticalNotNull(c);
  changed = false;
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    changed = changed | this$static.add(e);
  }
  return changed;
}

function $advanceToFind(this$static, o, remove){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext_0();) {
    e = iter.next_1();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      remove && iter.remove_1();
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkCriticalNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    if (!this$static.contains(e)) {
      return false;
    }
  }
  return true;
}

defineClass(814, 1, {41:1});
_.forEach_0 = function forEach(action){
  $forEach(this, action);
}
;
_.spliterator_0 = function spliterator_0(){
  return new Spliterators$IteratorSpliterator(this, 0);
}
;
_.stream = function stream(){
  return new StreamImpl(null, this.spliterator_0());
}
;
_.add = function add_5(o){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this collection'));
}
;
_.addAll = function addAll(c){
  return $addAll(this, c);
}
;
_.clear = function clear_0(){
  var iter;
  for (iter = this.iterator(); iter.hasNext_0();) {
    iter.next_1();
    iter.remove_1();
  }
}
;
_.contains = function contains(o){
  return $advanceToFind(this, o, false);
}
;
_.containsAll = function containsAll(c){
  return $containsAll(this, c);
}
;
_.isEmpty = function isEmpty(){
  return this.size() == 0;
}
;
_.remove = function remove_1(o){
  return $advanceToFind(this, o, true);
}
;
_.removeAll = function removeAll(c){
  var changed, iter, o;
  checkCriticalNotNull(c);
  changed = false;
  for (iter = this.iterator(); iter.hasNext_0();) {
    o = iter.next_1();
    if (c.contains(o)) {
      iter.remove_1();
      changed = true;
    }
  }
  return changed;
}
;
_.retainAll = function retainAll(c){
  var changed, iter, o;
  checkCriticalNotNull(c);
  changed = false;
  for (iter = this.iterator(); iter.hasNext_0();) {
    o = iter.next_1();
    if (!c.contains(o)) {
      iter.remove_1();
      changed = true;
    }
  }
  return changed;
}
;
_.toArray = function toArray(){
  return this.toArray_0(initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_0, 1, this.size(), 5, 1));
}
;
_.toArray_0 = function toArray_0(a){
  var i, it, result, size_0;
  size_0 = this.size();
  a.length < size_0 && (a = stampJavaTypeInfo_1(new Array(size_0), a));
  result = a;
  it = this.iterator();
  for (i = 0; i < size_0; ++i) {
    setCheck(result, i, it.next_1());
  }
  a.length > size_0 && setCheck(a, size_0, null);
  return a;
}
;
_.toString_0 = function toString_13(){
  var e, e$iterator, joiner;
  joiner = new StringJoiner_0(', ', '[', ']');
  for (e$iterator = this.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    $add_3(joiner, e === this?'(this Collection)':e == null?'null':toString_7(e));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 814);
function $computeIfAbsent(this$static, key, remappingFunction){
  var value_0;
  checkCriticalNotNull(remappingFunction);
  value_0 = instanceOfString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
  if (value_0 == null) {
    value_0 = remappingFunction.apply_0(key);
    value_0 != null && (instanceOfString(key)?$putStringValue(this$static, key, value_0):$put_1(this$static.hashCodeMap, key, value_0));
  }
  return value_0;
}

function $forEach_2(this$static, consumer){
  var entry, entry$iterator;
  checkCriticalNotNull(consumer);
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static)).this$01); entry$iterator.hasNext;) {
    entry = $next(entry$iterator);
    consumer.accept_0(entry.getKey(), entry.getValue_0());
  }
}

function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue_0();
  ourValue = this$static.get(key);
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !this$static.containsKey(key)) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key, remove){
  var entry, iter, k;
  for (iter = this$static.entrySet().iterator(); iter.hasNext_0();) {
    entry = castTo(iter.next_1(), 24);
    k = entry.getKey();
    if (maskUndefined(key) === maskUndefined(k) || key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k)) {
      if (remove) {
        entry = new AbstractMap$SimpleEntry(entry.getKey(), entry.getValue_0());
        iter.remove_1();
      }
      return entry;
    }
  }
  return null;
}

function $putAll(this$static, map_0){
  var e, e$iterator;
  checkCriticalNotNull(map_0);
  for (e$iterator = map_0.entrySet().iterator(); e$iterator.hasNext_0();) {
    e = castTo(e$iterator.next_1(), 24);
    this$static.put(e.getKey(), e.getValue_0());
  }
}

function $toString_1(this$static, o){
  return o === this$static?'(this Map)':o == null?'null':toString_7(o);
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue_0();
}

defineClass(818, 1, {66:1});
_.getOrDefault = function getOrDefault(key, defaultValue){
  var currentValue;
  return currentValue = this.get(key) , currentValue == null && !this.containsKey(key)?defaultValue:currentValue;
}
;
_.putIfAbsent = function putIfAbsent(key, value_0){
  var currentValue;
  return currentValue = this.get(key) , currentValue != null?currentValue:this.put(key, value_0);
}
;
_.replace = function replace_0(key, value_0){
  return this.containsKey(key)?this.put(key, value_0):null;
}
;
_.clear = function clear_1(){
  this.entrySet().clear();
}
;
_.containsKey = function containsKey(key){
  return !!$implFindEntry(this, key, false);
}
;
_.containsValue = function containsValue(value_0){
  var entry, entry$iterator, v;
  for (entry$iterator = this.entrySet().iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 24);
    v = entry.getValue_0();
    if (maskUndefined(value_0) === maskUndefined(v) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, v)) {
      return true;
    }
  }
  return false;
}
;
_.equals_0 = function equals_4(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 66)) {
    return false;
  }
  otherMap = castTo(obj, 66);
  if (this.size() != otherMap.size()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet().iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 24);
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.get = function get_2(key){
  return getEntryValueOrNull($implFindEntry(this, key, false));
}
;
_.hashCode_1 = function hashCode_5(){
  return hashCode_11(this.entrySet());
}
;
_.isEmpty = function isEmpty_0(){
  return this.size() == 0;
}
;
_.keySet = function keySet(){
  return new AbstractMap$1(this);
}
;
_.put = function put(key, value_0){
  throw toJs(new UnsupportedOperationException_0('Put not supported on this map'));
}
;
_.putAll = function putAll(map_0){
  $putAll(this, map_0);
}
;
_.remove = function remove_2(key){
  return getEntryValueOrNull($implFindEntry(this, key, true));
}
;
_.size = function size_1(){
  return this.entrySet().size();
}
;
_.toString_0 = function toString_14(){
  var entry, entry$iterator, joiner;
  joiner = new StringJoiner_0(', ', '{', '}');
  for (entry$iterator = this.entrySet().iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 24);
    $add_3(joiner, $toString_1(this, entry.getKey()) + '=' + $toString_1(this, entry.getValue_0()));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
_.values = function values_2(){
  return new AbstractMap$2(this);
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 818);
function $containsKey(this$static, key){
  return instanceOfString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $containsValue(this$static, value_0, entries){
  var entry, entry$iterator;
  for (entry$iterator = entries.iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 24);
    if (this$static.equals_1(value_0, entry.getValue_0())) {
      return true;
    }
  }
  return false;
}

function $get_0(this$static, key){
  return instanceOfString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $getStringValue(this$static, key){
  return key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):$get_3(this$static.stringMap, key);
}

function $hasStringValue(this$static, key){
  return key == null?!!$getEntry(this$static.hashCodeMap, null):$contains_1(this$static.stringMap, key);
}

function $put_0(this$static, key, value_0){
  return instanceOfString(key)?$putStringValue(this$static, key, value_0):$put_1(this$static.hashCodeMap, key, value_0);
}

function $putStringValue(this$static, key, value_0){
  return key == null?$put_1(this$static.hashCodeMap, null, value_0):$put_2(this$static.stringMap, key, value_0);
}

function $remove_1(this$static, key){
  return instanceOfString(key)?$removeStringValue(this$static, key):$remove_5(this$static.hashCodeMap, key);
}

function $removeStringValue(this$static, key){
  return key == null?$remove_5(this$static.hashCodeMap, null):$remove_6(this$static.stringMap, key);
}

function $reset(this$static){
  this$static.hashCodeMap = new InternalHashCodeMap(this$static);
  this$static.stringMap = new InternalStringMap(this$static);
  ++this$static.modCount;
}

function $size(this$static){
  return this$static.hashCodeMap.size_0 + this$static.stringMap.size_0;
}

defineClass(207, 818, {66:1});
_.clear = function clear_2(){
  $reset(this);
}
;
_.containsKey = function containsKey_0(key){
  return $containsKey(this, key);
}
;
_.containsValue = function containsValue_0(value_0){
  return $containsValue(this, value_0, this.stringMap) || $containsValue(this, value_0, this.hashCodeMap);
}
;
_.entrySet = function entrySet(){
  return new AbstractHashMap$EntrySet(this);
}
;
_.get = function get_3(key){
  return $get_0(this, key);
}
;
_.put = function put_0(key, value_0){
  return $put_0(this, key, value_0);
}
;
_.remove = function remove_3(key){
  return $remove_1(this, key);
}
;
_.size = function size_2(){
  return $size(this);
}
;
_.modCount = 0;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 207);
defineClass(817, 814, $intern_22);
_.spliterator_0 = function spliterator_1(){
  return new Spliterators$IteratorSpliterator(this, 1);
}
;
_.equals_0 = function equals_5(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 102)) {
    return false;
  }
  other = castTo(o, 102);
  if (other.size() != this.size()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode_1 = function hashCode_6(){
  return hashCode_11(this);
}
;
_.removeAll = function removeAll_0(c){
  var iter, o, o$iterator, size_0;
  checkCriticalNotNull(c);
  size_0 = this.size();
  if (size_0 < c.size()) {
    for (iter = this.iterator(); iter.hasNext_0();) {
      o = iter.next_1();
      c.contains(o) && iter.remove_1();
    }
  }
   else {
    for (o$iterator = c.iterator(); o$iterator.hasNext_0();) {
      o = o$iterator.next_1();
      this.remove(o);
    }
  }
  return size_0 != this.size();
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 817);
function $contains(this$static, o){
  if (instanceOf(o, 24)) {
    return $containsEntry(this$static.this$01, castTo(o, 24));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(208, 817, $intern_22, AbstractHashMap$EntrySet);
_.clear = function clear_3(){
  this.this$01.clear();
}
;
_.contains = function contains_0(o){
  return $contains(this, o);
}
;
_.iterator = function iterator(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.remove = function remove_4(entry){
  var key;
  if ($contains(this, entry)) {
    key = castTo(entry, 24).getKey();
    this.this$01.remove(key);
    return true;
  }
  return false;
}
;
_.size = function size_3(){
  return this.this$01.size();
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 208);
function $forEachRemaining(this$static, consumer){
  checkCriticalNotNull(consumer);
  while (this$static.hasNext_0()) {
    consumer.accept(this$static.next_1());
  }
}

function $computeHasNext(this$static){
  if (this$static.current.hasNext_0()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = new InternalHashCodeMap$1(this$static.this$01.hashCodeMap);
  return this$static.current.hasNext_0();
}

function $next(this$static){
  var rv;
  checkCriticalConcurrentModification(this$static.this$01.modCount, this$static.lastModCount);
  checkCriticalElement(this$static.hasNext);
  this$static.last = this$static.current;
  rv = castTo(this$static.current.next_1(), 24);
  this$static.hasNext = $computeHasNext(this$static);
  return rv;
}

function AbstractHashMap$EntrySetIterator(this$0){
  this.this$01 = this$0;
  this.stringMapEntries = new InternalStringMap$1(this.this$01.stringMap);
  this.current = this.stringMapEntries;
  this.hasNext = $computeHasNext(this);
  this.lastModCount = this.this$01.modCount;
}

defineClass(209, 1, {}, AbstractHashMap$EntrySetIterator);
_.forEachRemaining = function forEachRemaining(consumer){
  $forEachRemaining(this, consumer);
}
;
_.next_1 = function next_0(){
  return $next(this);
}
;
_.hasNext_0 = function hasNext(){
  return this.hasNext;
}
;
_.remove_1 = function remove_5(){
  checkCriticalState(!!this.last);
  checkCriticalConcurrentModification(this.this$01.modCount, this.lastModCount);
  this.last.remove_1();
  this.last = null;
  this.hasNext = $computeHasNext(this);
  this.lastModCount = this.this$01.modCount;
}
;
_.hasNext = false;
_.lastModCount = 0;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 209);
var Ljava_util_List_2_classLit = createForInterface('java.util', 'List');
function $equals_2(this$static, o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this$static) {
    return true;
  }
  if (!instanceOf(o, 18)) {
    return false;
  }
  other = castTo(o, 18);
  if (this$static.size() != other.size()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this$static.iterator(); elem$iterator.hasNext_0();) {
    elem = elem$iterator.next_1();
    elemOther = iterOther.next_1();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}

function $indexOf_0(this$static, toFind){
  var i, n;
  for (i = 0 , n = this$static.size(); i < n; ++i) {
    if (equals_11(toFind, this$static.getAtIndex(i))) {
      return i;
    }
  }
  return -1;
}

defineClass(815, 814, $intern_23);
_.spliterator_0 = function spliterator_2(){
  return new Spliterators$IteratorSpliterator(this, 16);
}
;
_.addAtIndex = function add_6(index_0, element){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this list'));
}
;
_.add = function add_7(obj){
  this.addAtIndex(this.size(), obj);
  return true;
}
;
_.addAllAtIndex = function addAll_0(index_0, c){
  var changed, e, e$iterator;
  checkCriticalNotNull(c);
  changed = false;
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    this.addAtIndex(index_0++, e);
    changed = true;
  }
  return changed;
}
;
_.clear = function clear_4(){
  this.removeRange_0(0, this.size());
}
;
_.equals_0 = function equals_6(o){
  return $equals_2(this, o);
}
;
_.hashCode_1 = function hashCode_7(){
  return hashCode_12(this);
}
;
_.indexOf = function indexOf(toFind){
  return $indexOf_0(this, toFind);
}
;
_.iterator = function iterator_0(){
  return new AbstractList$IteratorImpl(this);
}
;
_.lastIndexOf = function lastIndexOf(toFind){
  var i;
  for (i = this.size() - 1; i > -1; --i) {
    if (equals_11(toFind, this.getAtIndex(i))) {
      return i;
    }
  }
  return -1;
}
;
_.listIterator = function listIterator(from){
  return new AbstractList$ListIteratorImpl(this, from);
}
;
_.removeAtIndex = function remove_6(index_0){
  throw toJs(new UnsupportedOperationException_0('Remove not supported on this list'));
}
;
_.removeRange_0 = function removeRange(fromIndex, endIndex){
  var i, iter;
  iter = this.listIterator(fromIndex);
  for (i = fromIndex; i < endIndex; ++i) {
    iter.next_1();
    iter.remove_1();
  }
}
;
_.setAtIndex = function set_0(index_0, o){
  throw toJs(new UnsupportedOperationException_0('Set not supported on this list'));
}
;
_.subList = function subList(fromIndex, toIndex){
  return new AbstractList$SubList(this, fromIndex, toIndex);
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 815);
function $remove_2(this$static){
  checkCriticalState(this$static.last != -1);
  this$static.this$01_0.removeAtIndex(this$static.last);
  this$static.i = this$static.last;
  this$static.last = -1;
}

function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(172, 1, {}, AbstractList$IteratorImpl);
_.forEachRemaining = function forEachRemaining_0(consumer){
  $forEachRemaining(this, consumer);
}
;
_.hasNext_0 = function hasNext_0(){
  return this.i < this.this$01_0.size();
}
;
_.next_1 = function next_1(){
  return checkCriticalElement(this.i < this.this$01_0.size()) , this.this$01_0.getAtIndex(this.last = this.i++);
}
;
_.remove_1 = function remove_7(){
  $remove_2(this);
}
;
_.i = 0;
_.last = -1;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 172);
function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkCriticalPositionIndex(start_0, this$0.size());
  this.i = start_0;
}

defineClass(269, 172, {}, AbstractList$ListIteratorImpl);
_.remove_1 = function remove_8(){
  $remove_2(this);
}
;
_.add_0 = function add_8(o){
  this.this$01.addAtIndex(this.i, o);
  ++this.i;
  this.last = -1;
}
;
_.set_0 = function set_1(o){
  checkCriticalState(this.last != -1);
  this.this$01.setAtIndex(this.last, o);
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 269);
function AbstractList$SubList(wrapped, fromIndex, toIndex){
  checkCriticalPositionIndexes(fromIndex, toIndex, wrapped.size());
  this.wrapped = wrapped;
  this.fromIndex = fromIndex;
  this.size_0 = toIndex - fromIndex;
}

defineClass(270, 815, $intern_23, AbstractList$SubList);
_.addAtIndex = function add_9(index_0, element){
  checkCriticalPositionIndex(index_0, this.size_0);
  this.wrapped.addAtIndex(this.fromIndex + index_0, element);
  ++this.size_0;
}
;
_.getAtIndex = function get_4(index_0){
  checkCriticalElementIndex(index_0, this.size_0);
  return this.wrapped.getAtIndex(this.fromIndex + index_0);
}
;
_.removeAtIndex = function remove_9(index_0){
  var result;
  checkCriticalElementIndex(index_0, this.size_0);
  result = this.wrapped.removeAtIndex(this.fromIndex + index_0);
  --this.size_0;
  return result;
}
;
_.setAtIndex = function set_2(index_0, element){
  checkCriticalElementIndex(index_0, this.size_0);
  return this.wrapped.setAtIndex(this.fromIndex + index_0, element);
}
;
_.size = function size_4(){
  return this.size_0;
}
;
_.fromIndex = 0;
_.size_0 = 0;
var Ljava_util_AbstractList$SubList_2_classLit = createForClass('java.util', 'AbstractList/SubList', 270);
function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(78, 817, $intern_22, AbstractMap$1);
_.clear = function clear_5(){
  this.this$01.clear();
}
;
_.contains = function contains_1(key){
  return this.this$01.containsKey(key);
}
;
_.iterator = function iterator_1(){
  var outerIter;
  return outerIter = this.this$01.entrySet().iterator() , new AbstractMap$1$1(outerIter);
}
;
_.remove = function remove_10(key){
  if (this.this$01.containsKey(key)) {
    this.this$01.remove(key);
    return true;
  }
  return false;
}
;
_.size = function size_5(){
  return this.this$01.size();
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 78);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(83, 1, {}, AbstractMap$1$1);
_.forEachRemaining = function forEachRemaining_1(consumer){
  $forEachRemaining(this, consumer);
}
;
_.hasNext_0 = function hasNext_1(){
  return this.val$outerIter2.hasNext_0();
}
;
_.next_1 = function next_2(){
  var entry;
  return entry = castTo(this.val$outerIter2.next_1(), 24) , entry.getKey();
}
;
_.remove_1 = function remove_11(){
  this.val$outerIter2.remove_1();
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 83);
function AbstractMap$2(this$0){
  this.this$01 = this$0;
}

defineClass(96, 814, {41:1}, AbstractMap$2);
_.clear = function clear_6(){
  this.this$01.clear();
}
;
_.contains = function contains_2(value_0){
  return this.this$01.containsValue(value_0);
}
;
_.iterator = function iterator_2(){
  var outerIter;
  outerIter = this.this$01.entrySet().iterator();
  return new AbstractMap$2$1(outerIter);
}
;
_.size = function size_6(){
  return this.this$01.size();
}
;
var Ljava_util_AbstractMap$2_2_classLit = createForClass('java.util', 'AbstractMap/2', 96);
function AbstractMap$2$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(279, 1, {}, AbstractMap$2$1);
_.forEachRemaining = function forEachRemaining_2(consumer){
  $forEachRemaining(this, consumer);
}
;
_.hasNext_0 = function hasNext_2(){
  return this.val$outerIter2.hasNext_0();
}
;
_.next_1 = function next_3(){
  var entry;
  entry = castTo(this.val$outerIter2.next_1(), 24);
  return entry.getValue_0();
}
;
_.remove_1 = function remove_12(){
  this.val$outerIter2.remove_1();
}
;
var Ljava_util_AbstractMap$2$1_2_classLit = createForClass('java.util', 'AbstractMap/2/1', 279);
function $setValue_5(this$static, value_0){
  var oldValue;
  oldValue = this$static.value_0;
  this$static.value_0 = value_0;
  return oldValue;
}

defineClass(278, 1, $intern_24);
_.equals_0 = function equals_7(other){
  var entry;
  if (!instanceOf(other, 24)) {
    return false;
  }
  entry = castTo(other, 24);
  return equals_11(this.key_0, entry.getKey()) && equals_11(this.value_0, entry.getValue_0());
}
;
_.getKey = function getKey(){
  return this.key_0;
}
;
_.getValue_0 = function getValue_5(){
  return this.value_0;
}
;
_.hashCode_1 = function hashCode_8(){
  return hashCode_14(this.key_0) ^ hashCode_14(this.value_0);
}
;
_.setValue_0 = function setValue_5(value_0){
  return $setValue_5(this, value_0);
}
;
_.toString_0 = function toString_15(){
  return this.key_0 + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 278);
function AbstractMap$SimpleEntry(key, value_0){
  this.key_0 = key;
  this.value_0 = value_0;
}

defineClass(174, 278, $intern_24, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 174);
defineClass(824, 1, $intern_24);
_.equals_0 = function equals_8(other){
  var entry;
  if (!instanceOf(other, 24)) {
    return false;
  }
  entry = castTo(other, 24);
  return equals_11(this.val$entry2.value[0], entry.getKey()) && equals_11($getValue_1(this), entry.getValue_0());
}
;
_.hashCode_1 = function hashCode_9(){
  return hashCode_14(this.val$entry2.value[0]) ^ hashCode_14($getValue_1(this));
}
;
_.toString_0 = function toString_16(){
  return this.val$entry2.value[0] + '=' + $getValue_1(this);
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 824);
defineClass(828, 815, $intern_23);
_.addAtIndex = function add_10(index_0, element){
  var iter;
  iter = this.listIterator(index_0);
  iter.add_0(element);
}
;
_.addAllAtIndex = function addAll_1(index_0, c){
  var e, e$iterator, iter, modified;
  checkCriticalNotNull(c);
  modified = false;
  iter = this.listIterator(index_0);
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    iter.add_0(e);
    modified = true;
  }
  return modified;
}
;
_.getAtIndex = function get_5(index_0){
  var iter;
  iter = this.listIterator(index_0);
  try {
    return iter.next_1();
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 107)) {
      throw toJs(new IndexOutOfBoundsException_0("Can't get element " + index_0));
    }
     else 
      throw toJs($e0);
  }
}
;
_.iterator = function iterator_3(){
  return this.listIterator(0);
}
;
_.removeAtIndex = function remove_13(index_0){
  var iter, old;
  iter = this.listIterator(index_0);
  try {
    old = iter.next_1();
    iter.remove_1();
    return old;
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 107)) {
      throw toJs(new IndexOutOfBoundsException_0("Can't remove element " + index_0));
    }
     else 
      throw toJs($e0);
  }
}
;
_.setAtIndex = function set_3(index_0, element){
  var iter, old;
  iter = this.listIterator(index_0);
  try {
    old = iter.next_1();
    iter.set_0(element);
    return old;
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 107)) {
      throw toJs(new IndexOutOfBoundsException_0("Can't set element " + index_0));
    }
     else 
      throw toJs($e0);
  }
}
;
var Ljava_util_AbstractSequentialList_2_classLit = createForClass('java.util', 'AbstractSequentialList', 828);
function $$init_0(this$static){
  this$static.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_0, 1, 0, 5, 1);
}

function $add_0(this$static, o){
  push_1(this$static.array, o);
  return true;
}

function $addAll_0(this$static, c){
  var cArray, len;
  cArray = c.toArray();
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  insertTo_0(this$static.array, this$static.array.length, cArray);
  return true;
}

function $forEach_0(this$static, consumer){
  var e, e$array, e$index, e$max;
  checkCriticalNotNull(consumer);
  for (e$array = this$static.array , e$index = 0 , e$max = e$array.length; e$index < e$max; ++e$index) {
    e = e$array[e$index];
    consumer.accept(e);
  }
}

function $get_1(this$static, index_0){
  checkCriticalElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf_1(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_11(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $lastIndexOf_1(this$static, o, index_0){
  for (; index_0 >= 0; --index_0) {
    if (equals_11(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $remove_3(this$static, index_0){
  var previous;
  previous = (checkCriticalElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  removeFrom(this$static.array, index_0, 1);
  return previous;
}

function $remove_4(this$static, o){
  var i;
  i = $indexOf_1(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  checkCriticalElementIndex(i, this$static.array.length);
  removeFrom(this$static.array, i, 1);
  return true;
}

function $toArray(this$static, out){
  var i, size_0;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = stampJavaTypeInfo_1(new Array(size_0), out));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}

function ArrayList(){
  $$init_0(this);
}

function ArrayList_0(c){
  $$init_0(this);
  insertTo_0(this.array, 0, c.toArray());
}

defineClass(10, 815, $intern_25, ArrayList, ArrayList_0);
_.addAtIndex = function add_11(index_0, o){
  checkCriticalPositionIndex(index_0, this.array.length);
  insertTo(this.array, index_0, o);
}
;
_.add = function add_12(o){
  return $add_0(this, o);
}
;
_.addAllAtIndex = function addAll_2(index_0, c){
  var cArray, len;
  checkCriticalPositionIndex(index_0, this.array.length);
  cArray = c.toArray();
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  insertTo_0(this.array, index_0, cArray);
  return true;
}
;
_.addAll = function addAll_3(c){
  return $addAll_0(this, c);
}
;
_.clear = function clear_7(){
  this.array.length = 0;
}
;
_.contains = function contains_3(o){
  return $indexOf_1(this, o, 0) != -1;
}
;
_.forEach_0 = function forEach_0(consumer){
  $forEach_0(this, consumer);
}
;
_.getAtIndex = function get_6(index_0){
  return $get_1(this, index_0);
}
;
_.indexOf = function indexOf_0(o){
  return $indexOf_1(this, o, 0);
}
;
_.isEmpty = function isEmpty_1(){
  return this.array.length == 0;
}
;
_.iterator = function iterator_4(){
  return new ArrayList$1(this);
}
;
_.lastIndexOf = function lastIndexOf_0(o){
  return $lastIndexOf_1(this, o, this.array.length - 1);
}
;
_.removeAtIndex = function remove_14(index_0){
  return $remove_3(this, index_0);
}
;
_.remove = function remove_15(o){
  return $remove_4(this, o);
}
;
_.removeRange_0 = function removeRange_0(fromIndex, endIndex){
  var count;
  checkCriticalPositionIndexes(fromIndex, endIndex, this.array.length);
  count = endIndex - fromIndex;
  removeFrom(this.array, fromIndex, count);
}
;
_.setAtIndex = function set_4(index_0, o){
  var previous;
  previous = (checkCriticalElementIndex(index_0, this.array.length) , this.array[index_0]);
  this.array[index_0] = o;
  return previous;
}
;
_.size = function size_7(){
  return this.array.length;
}
;
_.toArray = function toArray_1(){
  return clone(this.array);
}
;
_.toArray_0 = function toArray_2(out){
  return $toArray(this, out);
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 10);
function $next_0(this$static){
  checkCriticalElement(this$static.i < this$static.this$01.array.length);
  this$static.last = this$static.i++;
  return this$static.this$01.array[this$static.last];
}

function ArrayList$1(this$0){
  this.this$01 = this$0;
}

defineClass(69, 1, {}, ArrayList$1);
_.forEachRemaining = function forEachRemaining_3(consumer){
  $forEachRemaining(this, consumer);
}
;
_.hasNext_0 = function hasNext_3(){
  return this.i < this.this$01.array.length;
}
;
_.next_1 = function next_4(){
  return $next_0(this);
}
;
_.remove_1 = function remove_16(){
  checkCriticalState(this.last != -1);
  $remove_3(this.this$01, this.i = this.last);
  this.last = -1;
}
;
_.i = 0;
_.last = -1;
var Ljava_util_ArrayList$1_2_classLit = createForClass('java.util', 'ArrayList/1', 69);
function hashCode_10(a){
  var e, e$array, e$index, e$max, hashCode;
  hashCode = 1;
  for (e$array = a , e$index = 0 , e$max = e$array.length; e$index < e$max; ++e$index) {
    e = e$array[e$index];
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function spliterator_3(array, endExclusive){
  return checkCriticalArrayBounds(endExclusive, array.length) , new Spliterators$ArraySpliterator(array, endExclusive);
}

function stream_0(array){
  return new StreamImpl(null, spliterator_3(array, array.length));
}

function stream_1(array, endExclusive){
  return new StreamImpl(null, (checkCriticalArrayBounds(endExclusive, array.length) , new Spliterators$ArraySpliterator(array, endExclusive)));
}

function $forEach_1(this$static, consumer){
  var e, e$array, e$index, e$max;
  checkCriticalNotNull(consumer);
  for (e$array = this$static.array , e$index = 0 , e$max = e$array.length; e$index < e$max; ++e$index) {
    e = e$array[e$index];
    consumer.accept(e);
  }
}

function $get_2(this$static, index_0){
  checkCriticalElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $toArray_0(this$static, out){
  var i, size_0;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = stampJavaTypeInfo_1(new Array(size_0), out));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}

function Arrays$ArrayList(array){
  checkCriticalNotNull(array);
  this.array = array;
}

defineClass(23, 815, $intern_25, Arrays$ArrayList);
_.contains = function contains_4(o){
  return $indexOf_0(this, o) != -1;
}
;
_.forEach_0 = function forEach_1(consumer){
  $forEach_1(this, consumer);
}
;
_.getAtIndex = function get_7(index_0){
  return $get_2(this, index_0);
}
;
_.setAtIndex = function set_5(index_0, value_0){
  var was;
  was = (checkCriticalElementIndex(index_0, this.array.length) , this.array[index_0]);
  setCheck(this.array, index_0, value_0);
  return was;
}
;
_.size = function size_8(){
  return this.array.length;
}
;
_.toArray = function toArray_3(){
  return $toArray_0(this, initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_0, 1, this.array.length, 5, 1));
}
;
_.toArray_0 = function toArray_4(out){
  return $toArray_0(this, out);
}
;
var Ljava_util_Arrays$ArrayList_2_classLit = createForClass('java.util', 'Arrays/ArrayList', 23);
function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
  EMPTY_SET = new Collections$EmptySet;
}

function hashCode_11(collection){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function hashCode_12(list){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

var EMPTY_LIST, EMPTY_SET;
function Collections$EmptyList(){
}

defineClass(275, 815, $intern_25, Collections$EmptyList);
_.contains = function contains_5(object){
  return false;
}
;
_.getAtIndex = function get_8(location_0){
  checkCriticalElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_5(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_13;
}
;
_.size = function size_9(){
  return 0;
}
;
var Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 275);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_13 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(276, 1, {}, Collections$EmptyListIterator);
_.forEachRemaining = function forEachRemaining_4(consumer){
  $forEachRemaining(this, consumer);
}
;
_.add_0 = function add_13(o){
  throw toJs(new UnsupportedOperationException);
}
;
_.hasNext_0 = function hasNext_4(){
  return false;
}
;
_.next_1 = function next_5(){
  throw toJs(new NoSuchElementException);
}
;
_.remove_1 = function remove_17(){
  throw toJs(new IllegalStateException);
}
;
_.set_0 = function set_6(o){
  throw toJs(new IllegalStateException);
}
;
var INSTANCE_13;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 276);
function Collections$EmptySet(){
}

defineClass(277, 817, $intern_26, Collections$EmptySet);
_.contains = function contains_6(object){
  return false;
}
;
_.iterator = function iterator_6(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_13;
}
;
_.size = function size_10(){
  return 0;
}
;
var Ljava_util_Collections$EmptySet_2_classLit = createForClass('java.util', 'Collections/EmptySet', 277);
function Collections$SingletonList(element){
  this.element = element;
}

defineClass(173, 815, $intern_25, Collections$SingletonList);
_.contains = function contains_7(item_0){
  return equals_11(this.element, item_0);
}
;
_.getAtIndex = function get_9(index_0){
  checkCriticalElementIndex(index_0, 1);
  return this.element;
}
;
_.size = function size_11(){
  return 1;
}
;
var Ljava_util_Collections$SingletonList_2_classLit = createForClass('java.util', 'Collections/SingletonList', 173);
function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(475, 13, $intern_2, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 475);
function Date_0(){
  this.jsdate = new $wnd.Date;
}

function Date_1(date){
  this.jsdate = new $wnd.Date(toDouble_0(date));
}

function padTwo(number){
  return number < 10?'0' + number:'' + number;
}

defineClass(79, 1, {4:1, 34:1, 79:1}, Date_0, Date_1);
_.equals_0 = function equals_9(obj){
  return instanceOf(obj, 79) && eq(fromDouble_0(this.jsdate.getTime()), fromDouble_0(castTo(obj, 79).jsdate.getTime()));
}
;
_.hashCode_1 = function hashCode_13(){
  var time;
  time = fromDouble_0(this.jsdate.getTime());
  return toInt_0(xor_0(time, shru_0(time, 32)));
}
;
_.toString_0 = function toString_17(){
  var hourOffset, minuteOffset, offset;
  offset = -this.jsdate.getTimezoneOffset();
  hourOffset = (offset >= 0?'+':'') + (offset / 60 | 0);
  minuteOffset = padTwo($wnd.Math.abs(offset) % 60);
  return ($clinit_Date$StringData() , DAYS)[this.jsdate.getDay()] + ' ' + MONTHS[this.jsdate.getMonth()] + ' ' + padTwo(this.jsdate.getDate()) + ' ' + padTwo(this.jsdate.getHours()) + ':' + padTwo(this.jsdate.getMinutes()) + ':' + padTwo(this.jsdate.getSeconds()) + ' GMT' + hourOffset + minuteOffset + ' ' + this.jsdate.getFullYear();
}
;
var Ljava_util_Date_2_classLit = createForClass('java.util', 'Date', 79);
function $clinit_Date$StringData(){
  $clinit_Date$StringData = emptyMethod;
  DAYS = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  MONTHS = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
}

var DAYS, MONTHS;
function HashMap(){
  $reset(this);
}

function HashMap_0(toBeCopied){
  $reset(this);
  $putAll(this, toBeCopied);
}

defineClass(14, 207, {4:1, 66:1}, HashMap, HashMap_0);
_.equals_1 = function equals_10(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}
;
_.getHashCode = function getHashCode(key){
  var hashCode;
  if (key == null) {
    return 0;
  }
  hashCode = hashCode__I__devirtual$(key);
  return hashCode | 0;
}
;
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 14);
function $add_1(this$static, o){
  var old;
  old = this$static.map_0.put(o, this$static);
  return old == null;
}

function $contains_0(this$static, o){
  return this$static.map_0.containsKey(o);
}

function HashSet(){
  this.map_0 = new HashMap;
}

function HashSet_0(map_0){
  this.map_0 = map_0;
}

defineClass(106, 817, $intern_26, HashSet);
_.add = function add_14(o){
  return $add_1(this, o);
}
;
_.clear = function clear_8(){
  this.map_0.clear();
}
;
_.contains = function contains_8(o){
  return $contains_0(this, o);
}
;
_.isEmpty = function isEmpty_2(){
  return this.map_0.size() == 0;
}
;
_.iterator = function iterator_7(){
  var outerIter;
  return outerIter = (new AbstractMap$1(this.map_0)).this$01.entrySet().iterator() , new AbstractMap$1$1(outerIter);
}
;
_.remove = function remove_18(o){
  return this.map_0.remove(o) != null;
}
;
_.size = function size_12(){
  return this.map_0.size();
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 106);
function $findEntryInChain(this$static, key, chain){
  var entry, entry$array, entry$index, entry$max;
  for (entry$array = chain , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if (this$static.host.equals_1(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $getChainOrEmpty(this$static, hashCode){
  var chain;
  chain = this$static.backingMap.get(hashCode);
  return chain == null?initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_0, 1, 0, 5, 1):chain;
}

function $getEntry(this$static, key){
  return $findEntryInChain(this$static, key, $getChainOrEmpty(this$static, this$static.host.getHashCode(key)));
}

function $put_1(this$static, key, value_0){
  var chain, chain0, entry, hashCode;
  hashCode = this$static.host.getHashCode(key);
  chain0 = (chain = this$static.backingMap.get(hashCode) , chain == null?initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_0, 1, 0, 5, 1):chain);
  if (chain0.length == 0) {
    this$static.backingMap.set(hashCode, chain0);
  }
   else {
    entry = $findEntryInChain(this$static, key, chain0);
    if (entry) {
      return entry.setValue_0(value_0);
    }
  }
  setCheck(chain0, chain0.length, new AbstractMap$SimpleEntry(key, value_0));
  ++this$static.size_0;
  ++this$static.host.modCount;
  return null;
}

function $remove_5(this$static, key){
  var chain, chain0, entry, hashCode, i;
  hashCode = this$static.host.getHashCode(key);
  chain0 = (chain = this$static.backingMap.get(hashCode) , chain == null?initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_0, 1, 0, 5, 1):chain);
  for (i = 0; i < chain0.length; i++) {
    entry = chain0[i];
    if (this$static.host.equals_1(key, entry.getKey())) {
      if (chain0.length == 1) {
        chain0.length = 0;
        $delete(this$static.backingMap, hashCode);
      }
       else {
        chain0.splice(i, 1);
      }
      --this$static.size_0;
      ++this$static.host.modCount;
      return entry.getValue_0();
    }
  }
  return null;
}

function InternalHashCodeMap(host){
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(447, 1, {}, InternalHashCodeMap);
_.forEach_0 = function forEach_2(action){
  $forEach(this, action);
}
;
_.iterator = function iterator_8(){
  return new InternalHashCodeMap$1(this);
}
;
_.size_0 = 0;
var Ljava_util_InternalHashCodeMap_2_classLit = createForClass('java.util', 'InternalHashCodeMap', 447);
function InternalHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.chains = this.this$01.backingMap.entries();
  this.chain = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_0, 1, 0, 5, 1);
}

defineClass(219, 1, {}, InternalHashCodeMap$1);
_.forEachRemaining = function forEachRemaining_5(consumer){
  $forEachRemaining(this, consumer);
}
;
_.next_1 = function next_6(){
  return this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.hasNext_0 = function hasNext_5(){
  var current;
  if (this.itemIndex < this.chain.length) {
    return true;
  }
  current = this.chains.next();
  if (!current.done) {
    this.chain = current.value[1];
    this.itemIndex = 0;
    return true;
  }
  return false;
}
;
_.remove_1 = function remove_19(){
  $remove_5(this.this$01, this.lastEntry.getKey());
  this.itemIndex != 0 && --this.itemIndex;
}
;
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalHashCodeMap/1', 219);
function $delete(this$static, key){
  var fn;
  fn = this$static['delete'];
  fn.call(this$static, key);
}

function $delete_0(this$static, key){
  var fn;
  fn = this$static['delete'];
  fn.call(this$static, key);
}

function $clinit_InternalJsMapFactory(){
  $clinit_InternalJsMapFactory = emptyMethod;
  jsMapCtor = getJsMapConstructor();
}

function canHandleObjectCreateAndProto(){
  if (!Object.create || !Object.getOwnPropertyNames) {
    return false;
  }
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  if (Object.getOwnPropertyNames(map_0).length == 0) {
    return false;
  }
  return true;
}

function getJsMapConstructor(){
  function isCorrectIterationProtocol(){
    try {
      return (new Map).entries().next().done;
    }
     catch (e) {
      return false;
    }
  }

  if (typeof Map === 'function' && Map.prototype.entries && isCorrectIterationProtocol()) {
    return Map;
  }
   else {
    return getJsMapPolyFill();
  }
}

function getJsMapPolyFill(){
  function Stringmap(){
    this.obj = this.createObject();
  }

  ;
  Stringmap.prototype.createObject = function(key){
    return Object.create(null);
  }
  ;
  Stringmap.prototype.get = function(key){
    return this.obj[key];
  }
  ;
  Stringmap.prototype.set = function(key, value_0){
    this.obj[key] = value_0;
  }
  ;
  Stringmap.prototype['delete'] = function(key){
    delete this.obj[key];
  }
  ;
  Stringmap.prototype.keys = function(){
    return Object.getOwnPropertyNames(this.obj);
  }
  ;
  Stringmap.prototype.entries = function(){
    var keys_0 = this.keys();
    var map_0 = this;
    var nextIndex = 0;
    return {next:function(){
      if (nextIndex >= keys_0.length)
        return {done:true};
      var key = keys_0[nextIndex++];
      return {value:[key, map_0.get(key)], done:false};
    }
    };
  }
  ;
  if (!canHandleObjectCreateAndProto()) {
    Stringmap.prototype.createObject = function(){
      return {};
    }
    ;
    Stringmap.prototype.get = function(key){
      return this.obj[':' + key];
    }
    ;
    Stringmap.prototype.set = function(key, value_0){
      this.obj[':' + key] = value_0;
    }
    ;
    Stringmap.prototype['delete'] = function(key){
      delete this.obj[':' + key];
    }
    ;
    Stringmap.prototype.keys = function(){
      var result = [];
      for (var key in this.obj) {
        key.charCodeAt(0) == 58 && result.push(key.substring(1));
      }
      return result;
    }
    ;
  }
  return Stringmap;
}

function newJsMap(){
  $clinit_InternalJsMapFactory();
  return new jsMapCtor;
}

var jsMapCtor;
function $contains_1(this$static, key){
  return !(this$static.backingMap.get(key) === undefined);
}

function $get_3(this$static, key){
  return this$static.backingMap.get(key);
}

function $put_2(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap.get(key);
  this$static.backingMap.set(key, value_0 === undefined?null:value_0);
  if (oldValue === undefined) {
    ++this$static.size_0;
    ++this$static.host.modCount;
  }
   else {
    ++this$static.valueMod;
  }
  return oldValue;
}

function $remove_6(this$static, key){
  var value_0;
  value_0 = this$static.backingMap.get(key);
  if (value_0 === undefined) {
    ++this$static.valueMod;
  }
   else {
    $delete_0(this$static.backingMap, key);
    --this$static.size_0;
    ++this$static.host.modCount;
  }
  return value_0;
}

function InternalStringMap(host){
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(387, 1, {}, InternalStringMap);
_.forEach_0 = function forEach_3(action){
  $forEach(this, action);
}
;
_.iterator = function iterator_9(){
  return new InternalStringMap$1(this);
}
;
_.size_0 = 0;
_.valueMod = 0;
var Ljava_util_InternalStringMap_2_classLit = createForClass('java.util', 'InternalStringMap', 387);
function InternalStringMap$1(this$0){
  this.this$01 = this$0;
  this.entries_0 = this.this$01.backingMap.entries();
  this.current = this.entries_0.next();
}

defineClass(216, 1, {}, InternalStringMap$1);
_.forEachRemaining = function forEachRemaining_6(consumer){
  $forEachRemaining(this, consumer);
}
;
_.next_1 = function next_7(){
  return this.last = this.current , this.current = this.entries_0.next() , new InternalStringMap$2(this.this$01, this.last, this.this$01.valueMod);
}
;
_.hasNext_0 = function hasNext_6(){
  return !this.current.done;
}
;
_.remove_1 = function remove_20(){
  $remove_6(this.this$01, this.last.value[0]);
}
;
var Ljava_util_InternalStringMap$1_2_classLit = createForClass('java.util', 'InternalStringMap/1', 216);
function $getValue_1(this$static){
  if (this$static.this$01.valueMod != this$static.val$lastValueMod3) {
    return $get_3(this$static.this$01, this$static.val$entry2.value[0]);
  }
  return this$static.val$entry2.value[1];
}

function InternalStringMap$2(this$0, val$entry, val$lastValueMod){
  this.this$01 = this$0;
  this.val$entry2 = val$entry;
  this.val$lastValueMod3 = val$lastValueMod;
}

defineClass(388, 824, $intern_24, InternalStringMap$2);
_.getKey = function getKey_0(){
  return this.val$entry2.value[0];
}
;
_.getValue_0 = function getValue_6(){
  return $getValue_1(this);
}
;
_.setValue_0 = function setValue_6(object){
  return $put_2(this.this$01, this.val$entry2.value[0], object);
}
;
_.val$lastValueMod3 = 0;
var Ljava_util_InternalStringMap$2_2_classLit = createForClass('java.util', 'InternalStringMap/2', 388);
function $clear(this$static){
  $reset(this$static.map_0);
  this$static.head.prev = this$static.head;
  this$static.head.next_0 = this$static.head;
}

function $containsKey_0(this$static, key){
  return $containsKey(this$static.map_0, key);
}

function $get_4(this$static, key){
  var entry;
  entry = castTo($get_0(this$static.map_0, key), 101);
  if (entry) {
    $recordAccess(this$static, entry);
    return entry.value_0;
  }
  return null;
}

function $put_3(this$static, key, value_0){
  var newEntry, old, oldValue;
  old = castTo($get_0(this$static.map_0, key), 101);
  if (!old) {
    newEntry = new LinkedHashMap$ChainEntry_0(this$static, key, value_0);
    $put_0(this$static.map_0, key, newEntry);
    $addToEnd(newEntry);
    return null;
  }
   else {
    oldValue = $setValue_5(old, value_0);
    $recordAccess(this$static, old);
    return oldValue;
  }
}

function $recordAccess(this$static, entry){
  if (this$static.accessOrder) {
    $remove_8(entry);
    $addToEnd(entry);
  }
}

function $remove_7(this$static, key){
  var entry;
  entry = castTo($remove_1(this$static.map_0, key), 101);
  if (entry) {
    $remove_8(entry);
    return entry.value_0;
  }
  return null;
}

function LinkedHashMap(){
  $reset(this);
  this.head = new LinkedHashMap$ChainEntry(this);
  this.map_0 = new HashMap;
  this.head.prev = this.head;
  this.head.next_0 = this.head;
}

defineClass(100, 14, {4:1, 100:1, 66:1}, LinkedHashMap);
_.clear = function clear_9(){
  $clear(this);
}
;
_.containsKey = function containsKey_1(key){
  return $containsKey_0(this, key);
}
;
_.containsValue = function containsValue_1(value_0){
  var node;
  node = this.head.next_0;
  while (node != this.head) {
    if (equals_11(node.value_0, value_0)) {
      return true;
    }
    node = node.next_0;
  }
  return false;
}
;
_.entrySet = function entrySet_0(){
  return new LinkedHashMap$EntrySet(this);
}
;
_.get = function get_10(key){
  return $get_4(this, key);
}
;
_.put = function put_1(key, value_0){
  return $put_3(this, key, value_0);
}
;
_.remove = function remove_21(key){
  return $remove_7(this, key);
}
;
_.size = function size_13(){
  return $size(this.map_0);
}
;
_.accessOrder = false;
var Ljava_util_LinkedHashMap_2_classLit = createForClass('java.util', 'LinkedHashMap', 100);
function $addToEnd(this$static){
  var tail;
  tail = this$static.this$01.head.prev;
  this$static.prev = tail;
  this$static.next_0 = this$static.this$01.head;
  tail.next_0 = this$static.this$01.head.prev = this$static;
}

function $remove_8(this$static){
  this$static.next_0.prev = this$static.prev;
  this$static.prev.next_0 = this$static.next_0;
  this$static.next_0 = this$static.prev = null;
}

function LinkedHashMap$ChainEntry(this$0){
  LinkedHashMap$ChainEntry_0.call(this, this$0, null, null);
}

function LinkedHashMap$ChainEntry_0(this$0, key, value_0){
  this.this$01 = this$0;
  AbstractMap$SimpleEntry.call(this, key, value_0);
}

defineClass(101, 174, {101:1, 24:1}, LinkedHashMap$ChainEntry, LinkedHashMap$ChainEntry_0);
var Ljava_util_LinkedHashMap$ChainEntry_2_classLit = createForClass('java.util', 'LinkedHashMap/ChainEntry', 101);
function $contains_2(this$static, o){
  if (instanceOf(o, 24)) {
    return $containsEntry(this$static.this$01, castTo(o, 24));
  }
  return false;
}

function LinkedHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(165, 817, $intern_22, LinkedHashMap$EntrySet);
_.clear = function clear_10(){
  $clear(this.this$01);
}
;
_.contains = function contains_9(o){
  return $contains_2(this, o);
}
;
_.iterator = function iterator_10(){
  return new LinkedHashMap$EntrySet$EntryIterator(this);
}
;
_.remove = function remove_22(entry){
  var key;
  if ($contains_2(this, entry)) {
    key = castTo(entry, 24).getKey();
    $remove_7(this.this$01, key);
    return true;
  }
  return false;
}
;
_.size = function size_14(){
  return $size(this.this$01.map_0);
}
;
var Ljava_util_LinkedHashMap$EntrySet_2_classLit = createForClass('java.util', 'LinkedHashMap/EntrySet', 165);
function $next_1(this$static){
  checkCriticalConcurrentModification(this$static.this$11.this$01.map_0.modCount, this$static.lastModCount);
  checkCriticalElement(this$static.next_0 != this$static.this$11.this$01.head);
  this$static.last = this$static.next_0;
  this$static.next_0 = this$static.next_0.next_0;
  return this$static.last;
}

function LinkedHashMap$EntrySet$EntryIterator(this$1){
  this.this$11 = this$1;
  this.next_0 = this$1.this$01.head.next_0;
  this.lastModCount = this$1.this$01.map_0.modCount;
}

defineClass(244, 1, {}, LinkedHashMap$EntrySet$EntryIterator);
_.forEachRemaining = function forEachRemaining_7(consumer){
  $forEachRemaining(this, consumer);
}
;
_.next_1 = function next_8(){
  return $next_1(this);
}
;
_.hasNext_0 = function hasNext_7(){
  return this.next_0 != this.this$11.this$01.head;
}
;
_.remove_1 = function remove_23(){
  checkCriticalState(!!this.last);
  checkCriticalConcurrentModification(this.this$11.this$01.map_0.modCount, this.lastModCount);
  $remove_8(this.last);
  $remove_1(this.this$11.this$01.map_0, this.last.key_0);
  this.lastModCount = this.this$11.this$01.map_0.modCount;
  this.last = null;
}
;
_.lastModCount = 0;
var Ljava_util_LinkedHashMap$EntrySet$EntryIterator_2_classLit = createForClass('java.util', 'LinkedHashMap/EntrySet/EntryIterator', 244);
function LinkedHashSet(){
  HashSet_0.call(this, new LinkedHashMap);
}

defineClass(131, 106, $intern_26, LinkedHashSet);
var Ljava_util_LinkedHashSet_2_classLit = createForClass('java.util', 'LinkedHashSet', 131);
function $add_2(this$static, o){
  $addNode(this$static, o, this$static.tail.prev, this$static.tail);
  return true;
}

function $addNode(this$static, o, prev, next){
  var node;
  node = new LinkedList$Node;
  node.value_0 = o;
  node.prev = prev;
  node.next_0 = next;
  next.prev = prev.next_0 = node;
  ++this$static.size_0;
}

function $peek(this$static){
  return this$static.size_0 == 0?null:(checkCriticalElement(this$static.size_0 != 0) , this$static.header.next_0.value_0);
}

function $push(this$static, e){
  $addNode(this$static, e, this$static.header, this$static.header.next_0);
}

function $removeNode(this$static, node){
  var oldValue;
  oldValue = node.value_0;
  node.next_0.prev = node.prev;
  node.prev.next_0 = node.next_0;
  node.next_0 = node.prev = null;
  node.value_0 = null;
  --this$static.size_0;
  return oldValue;
}

function $reset_0(this$static){
  this$static.header.next_0 = this$static.tail;
  this$static.tail.prev = this$static.header;
  this$static.header.prev = this$static.tail.next_0 = null;
  this$static.size_0 = 0;
}

function LinkedList(){
  this.header = new LinkedList$Node;
  this.tail = new LinkedList$Node;
  $reset_0(this);
}

defineClass(80, 828, $intern_25, LinkedList);
_.add = function add_15(o){
  return $add_2(this, o);
}
;
_.clear = function clear_11(){
  $reset_0(this);
}
;
_.listIterator = function listIterator_0(index_0){
  var i, node;
  checkCriticalPositionIndex(index_0, this.size_0);
  if (index_0 >= this.size_0 >> 1) {
    node = this.tail;
    for (i = this.size_0; i > index_0; --i) {
      node = node.prev;
    }
  }
   else {
    node = this.header.next_0;
    for (i = 0; i < index_0; ++i) {
      node = node.next_0;
    }
  }
  return new LinkedList$ListIteratorImpl(this, index_0, node);
}
;
_.size = function size_15(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_LinkedList_2_classLit = createForClass('java.util', 'LinkedList', 80);
function LinkedList$ListIteratorImpl(this$0, index_0, startNode){
  this.this$01 = this$0;
  this.currentNode_0 = startNode;
  this.currentIndex = index_0;
}

defineClass(459, 1, {}, LinkedList$ListIteratorImpl);
_.forEachRemaining = function forEachRemaining_8(consumer){
  $forEachRemaining(this, consumer);
}
;
_.add_0 = function add_16(o){
  $addNode(this.this$01, o, this.currentNode_0.prev, this.currentNode_0);
  ++this.currentIndex;
  this.lastNode = null;
}
;
_.hasNext_0 = function hasNext_8(){
  return this.currentNode_0 != this.this$01.tail;
}
;
_.next_1 = function next_9(){
  checkCriticalElement(this.currentNode_0 != this.this$01.tail);
  this.lastNode = this.currentNode_0;
  this.currentNode_0 = this.currentNode_0.next_0;
  ++this.currentIndex;
  return this.lastNode.value_0;
}
;
_.remove_1 = function remove_24(){
  var nextNode;
  checkCriticalState(!!this.lastNode);
  nextNode = this.lastNode.next_0;
  $removeNode(this.this$01, this.lastNode);
  this.currentNode_0 == this.lastNode?(this.currentNode_0 = nextNode):--this.currentIndex;
  this.lastNode = null;
}
;
_.set_0 = function set_7(o){
  checkCriticalState(!!this.lastNode);
  this.lastNode.value_0 = o;
}
;
_.currentIndex = 0;
_.lastNode = null;
var Ljava_util_LinkedList$ListIteratorImpl_2_classLit = createForClass('java.util', 'LinkedList/ListIteratorImpl', 459);
function LinkedList$Node(){
}

defineClass(175, 1, {}, LinkedList$Node);
var Ljava_util_LinkedList$Node_2_classLit = createForClass('java.util', 'LinkedList/Node', 175);
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(107, 13, {4:1, 16:1, 13:1, 9:1, 107:1}, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 107);
function equals_11(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_14(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function requireNonNull(obj){
  if (obj == null) {
    throw toJs(new NullPointerException_1('element required'));
  }
  return obj;
}

function $clinit_Optional(){
  $clinit_Optional = emptyMethod;
  EMPTY = new Optional(null);
}

function $get_5(this$static){
  checkCriticalElement(this$static.ref != null);
  return this$static.ref;
}

function $ifPresent(this$static, consumer){
  this$static.ref != null && consumer.accept(this$static.ref);
}

function $orElse(this$static, other){
  return this$static.ref != null?this$static.ref:other;
}

function $orElseGet(this$static, other){
  return this$static.ref != null?this$static.ref:castToString($get_1(other.messageList_0, 0));
}

function Optional(ref){
  $clinit_Optional();
  this.ref = ref;
}

function ofNullable(value_0){
  $clinit_Optional();
  return value_0 == null?EMPTY:new Optional(checkCriticalNotNull(value_0));
}

defineClass(28, 1, {28:1}, Optional);
_.equals_0 = function equals_12(obj){
  var other;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 28)) {
    return false;
  }
  other = castTo(obj, 28);
  return equals_11(this.ref, other.ref);
}
;
_.hashCode_1 = function hashCode_15(){
  return hashCode_14(this.ref);
}
;
_.toString_0 = function toString_18(){
  return this.ref != null?'Optional.of(' + valueOf_0(this.ref) + ')':'Optional.empty()';
}
;
var EMPTY;
var Ljava_util_Optional_2_classLit = createForClass('java.util', 'Optional', 28);
function $forEachRemaining_0(this$static, consumer){
  while (this$static.tryAdvance(consumer))
  ;
}

function checkCriticalArrayBounds(end, length_0){
  if (0 > end || end > length_0) {
    throw toJs(new ArrayIndexOutOfBoundsException('fromIndex: 0, toIndex: ' + end + ', length: ' + length_0));
  }
}

defineClass(255, 1, {});
_.forEachRemaining = function forEachRemaining_9(consumer){
  $forEachRemaining_0(this, consumer);
}
;
_.characteristics_0 = function characteristics_0(){
  return this.characteristics;
}
;
_.estimateSize_0 = function estimateSize(){
  return this.sizeEstimate;
}
;
_.characteristics = 0;
_.sizeEstimate = 0;
var Ljava_util_Spliterators$BaseSpliterator_2_classLit = createForClass('java.util', 'Spliterators/BaseSpliterator', 255);
function Spliterators$AbstractSpliterator(size_0, characteristics){
  this.sizeEstimate = size_0;
  this.characteristics = (characteristics & 64) != 0?characteristics | 16384:characteristics;
}

defineClass(201, 255, {});
var Ljava_util_Spliterators$AbstractSpliterator_2_classLit = createForClass('java.util', 'Spliterators/AbstractSpliterator', 201);
function $forEachRemaining_1(this$static, consumer){
  checkCriticalNotNull(consumer);
  while (this$static.index_0 < this$static.limit) {
    $consume(this$static, consumer, this$static.index_0++);
  }
}

function $tryAdvance(this$static, consumer){
  checkCriticalNotNull(consumer);
  if (this$static.index_0 < this$static.limit) {
    $consume(this$static, consumer, this$static.index_0++);
    return true;
  }
  return false;
}

defineClass(256, 1, {});
_.forEachRemaining = function forEachRemaining_10(consumer){
  $forEachRemaining_0(this, consumer);
}
;
_.characteristics_0 = function characteristics_1(){
  return this.characteristics;
}
;
_.estimateSize_0 = function estimateSize_0(){
  return this.limit - this.index_0;
}
;
_.characteristics = 0;
_.index_0 = 0;
_.limit = 0;
var Ljava_util_Spliterators$BaseArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/BaseArraySpliterator', 256);
function $consume(this$static, consumer, index_0){
  consumer.accept(this$static.array[index_0]);
}

function Spliterators$ArraySpliterator(array, limit){
  this.index_0 = 0;
  this.limit = limit;
  this.characteristics = 17488;
  this.array = array;
}

defineClass(202, 256, {}, Spliterators$ArraySpliterator);
_.forEachRemaining = function forEachRemaining_11(consumer){
  $forEachRemaining_1(this, consumer);
}
;
_.tryAdvance = function tryAdvance(consumer){
  return $tryAdvance(this, consumer);
}
;
var Ljava_util_Spliterators$ArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/ArraySpliterator', 202);
function $initIterator(this$static){
  if (!this$static.it) {
    this$static.it = this$static.collection.iterator();
    this$static.estimateSize = this$static.collection.size();
  }
}

function Spliterators$IteratorSpliterator(collection, characteristics){
  this.collection = (checkCriticalNotNull(collection) , collection);
  this.characteristics = (characteristics & 4096) == 0?characteristics | 64 | 16384:characteristics;
}

defineClass(25, 1, {}, Spliterators$IteratorSpliterator);
_.characteristics_0 = function characteristics_2(){
  return this.characteristics;
}
;
_.estimateSize_0 = function estimateSize_1(){
  $initIterator(this);
  return this.estimateSize;
}
;
_.forEachRemaining = function forEachRemaining_12(consumer){
  $initIterator(this);
  this.it.forEachRemaining(consumer);
}
;
_.tryAdvance = function tryAdvance_0(consumer){
  checkCriticalNotNull(consumer);
  $initIterator(this);
  if (this.it.hasNext_0()) {
    consumer.accept(this.it.next_1());
    return true;
  }
  return false;
}
;
_.characteristics = 0;
_.estimateSize = 0;
var Ljava_util_Spliterators$IteratorSpliterator_2_classLit = createForClass('java.util', 'Spliterators/IteratorSpliterator', 25);
function $add_3(this$static, newElement){
  !this$static.builder?(this$static.builder = new StringBuilder_1(this$static.prefix)):$append_4(this$static.builder, this$static.delimiter);
  $append_3(this$static.builder, newElement);
  return this$static;
}

function $toString_2(this$static){
  return !this$static.builder?this$static.emptyValue:this$static.suffix.length == 0?this$static.builder.string:this$static.builder.string + ('' + this$static.suffix);
}

function StringJoiner(delimiter){
  StringJoiner_0.call(this, delimiter, '', '');
}

function StringJoiner_0(delimiter, prefix, suffix){
  this.delimiter = (checkCriticalNotNull(delimiter) , delimiter);
  this.prefix = (checkCriticalNotNull(prefix) , prefix);
  this.suffix = (checkCriticalNotNull(suffix) , suffix);
  this.emptyValue = this.prefix + ('' + this.suffix);
}

defineClass(75, 1, {75:1}, StringJoiner, StringJoiner_0);
_.toString_0 = function toString_19(){
  return $toString_2(this);
}
;
var Ljava_util_StringJoiner_2_classLit = createForClass('java.util', 'StringJoiner', 75);
function Function$lambda$0$Type(){
}

defineClass(266, 1, {}, Function$lambda$0$Type);
_.apply_0 = function apply_14(t){
  return t;
}
;
var Ljava_util_function_Function$lambda$0$Type_2_classLit = createForClass('java.util.function', 'Function/lambda$0$Type', 266);
defineClass(140, 1, {140:1});
var Ljava_util_logging_Handler_2_classLit = createForClass('java.util.logging', 'Handler', 140);
function $clinit_Level(){
  $clinit_Level = emptyMethod;
  FINE = new Level$LevelFine;
  INFO = new Level$LevelInfo;
  SEVERE = new Level$LevelSevere;
}

defineClass(816, 1, $intern_27);
_.getName = function getName_0(){
  return 'DUMMY';
}
;
_.intValue = function intValue(){
  return -1;
}
;
_.toString_0 = function toString_20(){
  return this.getName();
}
;
var FINE, INFO, SEVERE;
var Ljava_util_logging_Level_2_classLit = createForClass('java.util.logging', 'Level', 816);
function Level$LevelFine(){
}

defineClass(272, 816, $intern_27, Level$LevelFine);
_.getName = function getName_1(){
  return 'FINE';
}
;
_.intValue = function intValue_0(){
  return 500;
}
;
var Ljava_util_logging_Level$LevelFine_2_classLit = createForClass('java.util.logging', 'Level/LevelFine', 272);
function Level$LevelInfo(){
}

defineClass(273, 816, $intern_27, Level$LevelInfo);
_.getName = function getName_2(){
  return 'INFO';
}
;
_.intValue = function intValue_1(){
  return 800;
}
;
var Ljava_util_logging_Level$LevelInfo_2_classLit = createForClass('java.util.logging', 'Level/LevelInfo', 273);
function Level$LevelSevere(){
}

defineClass(274, 816, $intern_27, Level$LevelSevere);
_.getName = function getName_3(){
  return 'SEVERE';
}
;
_.intValue = function intValue_2(){
  return $intern_28;
}
;
var Ljava_util_logging_Level$LevelSevere_2_classLit = createForClass('java.util.logging', 'Level/LevelSevere', 274);
function $addLoggerImpl(this$static, logger){
  (($clinit_Logger() , LOGGING_OFF)?null:logger.name_0).length == 0 && $addHandler(logger, new SimpleConsoleLogHandler);
  $putStringValue(this$static.loggerMap, LOGGING_OFF?null:logger.name_0, logger);
}

function $ensureLogger(this$static, name_0){
  var logger, newLogger, name_1, parentName;
  logger = castTo($getStringValue(this$static.loggerMap, name_0), 122);
  if (!logger) {
    newLogger = new Logger(name_0);
    name_1 = ($clinit_Logger() , LOGGING_OFF)?null:newLogger.name_0;
    parentName = $substring_0(name_1, 0, $wnd.Math.max(0, $lastIndexOf(name_1, fromCodePoint(46))));
    $setParent(newLogger, $ensureLogger(this$static, parentName));
    (LOGGING_OFF?null:newLogger.name_0).length == 0 && $addHandler(newLogger, new SimpleConsoleLogHandler);
    $putStringValue(this$static.loggerMap, LOGGING_OFF?null:newLogger.name_0, newLogger);
    return newLogger;
  }
  return logger;
}

function LogManager(){
  this.loggerMap = new HashMap;
}

function getLogManager(){
  var rootLogger;
  if (!singleton) {
    singleton = new LogManager;
    rootLogger = new Logger('');
    $setLevel(rootLogger, ($clinit_Level() , INFO));
    $addLoggerImpl(singleton, rootLogger);
  }
  return singleton;
}

defineClass(288, 1, {}, LogManager);
var singleton;
var Ljava_util_logging_LogManager_2_classLit = createForClass('java.util.logging', 'LogManager', 288);
function LogRecord(level, msg){
  this.level = level;
  this.msg = msg;
  $clinit_System();
  fromDouble_0(Date.now());
}

defineClass(307, 1, $intern_27, LogRecord);
_.thrown = null;
var Ljava_util_logging_LogRecord_2_classLit = createForClass('java.util.logging', 'LogRecord', 307);
function $clinit_Logger(){
  $clinit_Logger = emptyMethod;
  LOGGING_OFF = true;
  ALL_ENABLED = false;
  INFO_ENABLED = false;
  WARNING_ENABLED = false;
  SEVERE_ENABLED = false;
}

function $actuallyLog(this$static, level, msg, thrown){
  var record;
  record = new LogRecord(level, msg);
  record.thrown = thrown;
  $actuallyLog_0(this$static, record);
}

function $actuallyLog_0(this$static, record){
  var handler$array, handler$array0, handler$index, handler$index0, handler$max, handler$max0, logger;
  for (handler$array0 = $getHandlers(this$static) , handler$index0 = 0 , handler$max0 = handler$array0.length; handler$index0 < handler$max0; ++handler$index0) {
    $publish(record);
  }
  logger = !LOGGING_OFF && this$static.useParentHandlers?LOGGING_OFF?null:this$static.parent_0:null;
  while (logger) {
    for (handler$array = $getHandlers(logger) , handler$index = 0 , handler$max = handler$array.length; handler$index < handler$max; ++handler$index) {
      $publish(record);
    }
    logger = !LOGGING_OFF && logger.useParentHandlers?LOGGING_OFF?null:logger.parent_0:null;
  }
}

function $addHandler(this$static, handler){
  if (LOGGING_OFF) {
    return;
  }
  $add_0(this$static.handlers, handler);
}

function $fine(this$static, msg){
  if (!ALL_ENABLED) {
    return;
  }
  $log_0(this$static, ($clinit_Level() , FINE), msg, null);
}

function $getEffectiveLevel(this$static){
  var effectiveLevel, logger;
  if (this$static.level) {
    return this$static.level;
  }
  logger = LOGGING_OFF?null:this$static.parent_0;
  while (logger) {
    effectiveLevel = LOGGING_OFF?null:logger.level;
    if (effectiveLevel) {
      return effectiveLevel;
    }
    logger = LOGGING_OFF?null:logger.parent_0;
  }
  return $clinit_Level() , INFO;
}

function $getHandlers(this$static){
  if (LOGGING_OFF) {
    return initUnidimensionalArray(Ljava_util_logging_Handler_2_classLit, $intern_29, 140, 0, 0, 1);
  }
  return castTo($toArray(this$static.handlers, initUnidimensionalArray(Ljava_util_logging_Handler_2_classLit, $intern_29, 140, this$static.handlers.array.length, 0, 1)), 249);
}

function $info(this$static, msg){
  if (!INFO_ENABLED) {
    return;
  }
  $log_0(this$static, ($clinit_Level() , INFO), msg, null);
}

function $isLoggable(this$static, messageLevel){
  return ALL_ENABLED?messageLevel.intValue() >= ($getEffectiveLevel(this$static) , 800):INFO_ENABLED?messageLevel.intValue() >= ($clinit_Level() , 800):WARNING_ENABLED?messageLevel.intValue() >= ($clinit_Level() , 900):SEVERE_ENABLED && messageLevel.intValue() >= ($clinit_Level() , $intern_28);
}

function $log(this$static, level, msg){
  (ALL_ENABLED?level.intValue() >= ($getEffectiveLevel(this$static) , 800):INFO_ENABLED?level.intValue() >= ($clinit_Level() , 800):WARNING_ENABLED?level.intValue() >= ($clinit_Level() , 900):SEVERE_ENABLED && level.intValue() >= ($clinit_Level() , $intern_28)) && $actuallyLog(this$static, level, msg, null);
}

function $log_0(this$static, level, msg, thrown){
  (ALL_ENABLED?level.intValue() >= ($getEffectiveLevel(this$static) , 800):INFO_ENABLED?level.intValue() >= ($clinit_Level() , 800):WARNING_ENABLED?level.intValue() >= ($clinit_Level() , 900):SEVERE_ENABLED && level.intValue() >= ($clinit_Level() , $intern_28)) && $actuallyLog(this$static, level, msg, thrown);
}

function $setLevel(this$static, newLevel){
  if (LOGGING_OFF) {
    return;
  }
  this$static.level = newLevel;
}

function $setParent(this$static, newParent){
  if (LOGGING_OFF) {
    return;
  }
  !!newParent && (this$static.parent_0 = newParent);
}

function Logger(name_0){
  $clinit_Logger();
  if (LOGGING_OFF) {
    return;
  }
  this.name_0 = name_0;
  this.useParentHandlers = true;
  this.handlers = new ArrayList;
}

function getLogger(name_0){
  $clinit_Logger();
  if (LOGGING_OFF) {
    return new Logger(null);
  }
  return $ensureLogger(getLogManager(), name_0);
}

defineClass(122, 1, {122:1}, Logger);
_.useParentHandlers = false;
var ALL_ENABLED = false, INFO_ENABLED = false, LOGGING_OFF = false, SEVERE_ENABLED = false, WARNING_ENABLED = false;
var Ljava_util_logging_Logger_2_classLit = createForClass('java.util.logging', 'Logger', 122);
function $publish(record){
  var console_0, level, val;
  console_0 = $equals_1(typeof(console_0), 'undefined')?null:new ConsoleLogger;
  if (!console_0) {
    return;
  }
  $clinit_Level();
  if ($intern_1 > record.level.intValue()) {
    return;
  }
  level = (val = record.level.intValue() , val >= $intern_28?'error':val >= 900?'warn':val >= 800?'info':'log');
  $log_1(level, record.msg);
  !!record.thrown && $log_2(console_0, level, record.thrown, 'Exception: ', true);
}

function SimpleConsoleLogHandler(){
}

defineClass(215, 140, {140:1}, SimpleConsoleLogHandler);
var Ljava_util_logging_SimpleConsoleLogHandler_2_classLit = createForClass('java.util.logging', 'SimpleConsoleLogHandler', 215);
function of_0(supplier, accumulator, combiner, finisher, characteristics){
  checkCriticalNotNull(supplier);
  checkCriticalNotNull(accumulator);
  checkCriticalNotNull(combiner);
  checkCriticalNotNull(finisher);
  checkCriticalNotNull(characteristics);
  return new CollectorImpl(supplier, accumulator, combiner, finisher);
}

function of_1(supplier, accumulator, combiner, characteristics){
  checkCriticalNotNull(supplier);
  checkCriticalNotNull(accumulator);
  checkCriticalNotNull(combiner);
  checkCriticalNotNull(characteristics);
  return new CollectorImpl(supplier, accumulator, combiner, new Function$lambda$0$Type);
}

function $clinit_Collector$Characteristics(){
  $clinit_Collector$Characteristics = emptyMethod;
  CONCURRENT = new Collector$Characteristics('CONCURRENT', 0);
  IDENTITY_FINISH = new Collector$Characteristics('IDENTITY_FINISH', 1);
  UNORDERED = new Collector$Characteristics('UNORDERED', 2);
}

function Collector$Characteristics(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_3(){
  $clinit_Collector$Characteristics();
  return stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_0, 29, 0, [CONCURRENT, IDENTITY_FINISH, UNORDERED]);
}

defineClass(29, 21, {4:1, 34:1, 21:1, 29:1}, Collector$Characteristics);
var CONCURRENT, IDENTITY_FINISH, UNORDERED;
var Ljava_util_stream_Collector$Characteristics_2_classLit = createForEnum('java.util.stream', 'Collector/Characteristics', 29, values_3);
function CollectorImpl(supplier, accumulator, combiner, finisher){
  this.supplier = supplier;
  this.accumulator = accumulator;
  $clinit_Collections();
  this.combiner = combiner;
  this.finisher = finisher;
}

defineClass(176, 1, {}, CollectorImpl);
var Ljava_util_stream_CollectorImpl_2_classLit = createForClass('java.util.stream', 'CollectorImpl', 176);
function groupingBy(downstream){
  return groupingBy0(new Collectors$lambda$6$Type, downstream);
}

function groupingBy0(supplier, downstream){
  return of_0(supplier, new Collectors$lambda$7$Type, new Collectors$lambda$8$Type, new Collectors$lambda$9$Type(downstream), stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_0, 29, 0, []));
}

function lambda$19(downstream_0, a_2, t_3){
  downstream_0.accumulator.accept_0(a_2, castTo(t_3, 7)[1]);
}

function lambda$44(){
  throw toJs(new IllegalStateException_0("Can't assign multiple values to the same key"));
}

function lambda$46(map_3, item_4){
  var key, newValue;
  key = castTo(item_4, 7)[0];
  newValue = $trim(castTo(item_4, 7)[1]);
  map_3.containsKey(key)?map_3.put(key, (map_3.get(key) , lambda$44())):map_3.put(key, newValue);
}

function lambda$7_0(m_1, o_2){
  var k, l;
  k = castTo(o_2, 7)[0];
  l = castTo(m_1.get(k), 18);
  if (!l) {
    l = new ArrayList;
    m_1.put(k, l);
  }
  l.add(o_2);
}

function lambda$9(downstream_1, m_2){
  var entry, entry$iterator, result;
  result = new LinkedHashMap;
  for (entry$iterator = m_2.entrySet().iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 24);
    $put_3(result, entry.getKey(), streamAndCollect(downstream_1, castTo(entry.getValue_0(), 18)));
  }
  return result;
}

function mapping_0(downstream){
  return new CollectorImpl(downstream.supplier, new Collectors$lambda$19$Type(downstream), downstream.combiner, downstream.finisher);
}

function streamAndCollect(downstream, list){
  var a, t, t$iterator;
  a = downstream.supplier.get_0();
  for (t$iterator = list.iterator(); t$iterator.hasNext_0();) {
    t = t$iterator.next_1();
    downstream.accumulator.accept_0(a, t);
  }
  return downstream.finisher.apply_0(a);
}

function Collectors$10methodref$merge$Type(){
}

defineClass(148, 1, {}, Collectors$10methodref$merge$Type);
var Ljava_util_stream_Collectors$10methodref$merge$Type_2_classLit = createForClass('java.util.stream', 'Collectors/10methodref$merge$Type', 148);
function Collectors$11methodref$toString$Type(){
}

defineClass(149, 1, {}, Collectors$11methodref$toString$Type);
_.apply_0 = function apply_15(arg0){
  return $toString_2(castTo(arg0, 75));
}
;
var Ljava_util_stream_Collectors$11methodref$toString$Type_2_classLit = createForClass('java.util.stream', 'Collectors/11methodref$toString$Type', 149);
function Collectors$20methodref$add$Type(){
}

defineClass(52, 1, {}, Collectors$20methodref$add$Type);
_.accept_0 = function accept_25(arg0, arg1){
  castTo(arg0, 41).add(arg1);
}
;
var Ljava_util_stream_Collectors$20methodref$add$Type_2_classLit = createForClass('java.util.stream', 'Collectors/20methodref$add$Type', 52);
function Collectors$21methodref$ctor$Type(){
}

defineClass(58, 1, {}, Collectors$21methodref$ctor$Type);
_.get_0 = function get_11(){
  return new ArrayList;
}
;
var Ljava_util_stream_Collectors$21methodref$ctor$Type_2_classLit = createForClass('java.util.stream', 'Collectors/21methodref$ctor$Type', 58);
function Collectors$22methodref$ctor$Type(){
}

defineClass(454, 1, {}, Collectors$22methodref$ctor$Type);
_.get_0 = function get_12(){
  return new HashMap;
}
;
var Ljava_util_stream_Collectors$22methodref$ctor$Type_2_classLit = createForClass('java.util.stream', 'Collectors/22methodref$ctor$Type', 454);
function Collectors$9methodref$add$Type(){
}

defineClass(147, 1, {}, Collectors$9methodref$add$Type);
_.accept_0 = function accept_26(arg0, arg1){
  $add_3(castTo(arg0, 75), castTo(arg1, 170));
}
;
var Ljava_util_stream_Collectors$9methodref$add$Type_2_classLit = createForClass('java.util.stream', 'Collectors/9methodref$add$Type', 147);
function Collectors$lambda$15$Type(){
  this.delimiter_0 = '&';
  this.prefix_1 = '';
  this.suffix_2 = '';
}

defineClass(146, 1, {}, Collectors$lambda$15$Type);
_.get_0 = function get_13(){
  return new StringJoiner_0(this.delimiter_0, this.prefix_1, this.suffix_2);
}
;
var Ljava_util_stream_Collectors$lambda$15$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$15$Type', 146);
function Collectors$lambda$19$Type(downstream_0){
  this.downstream_0 = downstream_0;
}

defineClass(453, 1, {}, Collectors$lambda$19$Type);
_.accept_0 = function accept_27(arg0, arg1){
  lambda$19(this.downstream_0, arg0, arg1);
}
;
var Ljava_util_stream_Collectors$lambda$19$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$19$Type', 453);
function Collectors$lambda$42$Type(){
}

defineClass(53, 1, {}, Collectors$lambda$42$Type);
var Ljava_util_stream_Collectors$lambda$42$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$42$Type', 53);
function Collectors$lambda$46$Type(){
}

defineClass(455, 1, {}, Collectors$lambda$46$Type);
_.accept_0 = function accept_28(arg0, arg1){
  lambda$46(castTo(arg0, 66), arg1);
}
;
var Ljava_util_stream_Collectors$lambda$46$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$46$Type', 455);
function Collectors$lambda$47$Type(){
}

defineClass(456, 1, {}, Collectors$lambda$47$Type);
var Ljava_util_stream_Collectors$lambda$47$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$47$Type', 456);
function Collectors$lambda$6$Type(){
}

defineClass(449, 1, {}, Collectors$lambda$6$Type);
_.get_0 = function get_14(){
  return new LinkedHashMap;
}
;
var Ljava_util_stream_Collectors$lambda$6$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$6$Type', 449);
function Collectors$lambda$7$Type(){
}

defineClass(450, 1, {}, Collectors$lambda$7$Type);
_.accept_0 = function accept_29(arg0, arg1){
  lambda$7_0(castTo(arg0, 66), arg1);
}
;
var Ljava_util_stream_Collectors$lambda$7$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$7$Type', 450);
function Collectors$lambda$8$Type(){
}

defineClass(451, 1, {}, Collectors$lambda$8$Type);
var Ljava_util_stream_Collectors$lambda$8$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$8$Type', 451);
function Collectors$lambda$9$Type(downstream_1){
  this.downstream_1 = downstream_1;
}

defineClass(452, 1, {}, Collectors$lambda$9$Type);
_.apply_0 = function apply_16(arg0){
  return lambda$9(this.downstream_1, castTo(arg0, 66));
}
;
var Ljava_util_stream_Collectors$lambda$9$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$9$Type', 452);
function of_2(values){
  return new StreamImpl(null, spliterator_3(values, values.length));
}

function $terminate(this$static){
  if (!this$static.root_0) {
    $throwIfTerminated(this$static);
    this$static.terminated = true;
  }
   else {
    $terminate(this$static.root_0);
  }
}

function $throwIfTerminated(this$static){
  if (this$static.root_0) {
    $throwIfTerminated(this$static.root_0);
  }
   else if (this$static.terminated) {
    throw toJs(new IllegalStateException_0("Stream already terminated, can't be modified or used"));
  }
}

function TerminatableStream(previous){
  if (!previous) {
    this.root_0 = null;
    new ArrayList;
  }
   else {
    this.root_0 = previous;
  }
}

defineClass(309, 1, {});
_.terminated = false;
var Ljava_util_stream_TerminatableStream_2_classLit = createForClass('java.util.stream', 'TerminatableStream', 309);
function $clinit_StreamImpl(){
  $clinit_StreamImpl = emptyMethod;
  NULL_CONSUMER = new StreamImpl$lambda$0$Type;
}

function $anyMatch(this$static, predicate){
  return ($throwIfTerminated(this$static) , $spliterator(new StreamImpl(this$static, new StreamImpl$FilterSpliterator(predicate, this$static.spliterator)))).tryAdvance(NULL_CONSUMER);
}

function $collect(this$static, collector){
  var lastArg;
  return collector.finisher.apply_0($reduce(this$static, collector.supplier.get_0(), (lastArg = new StreamImpl$lambda$4$Type(collector) , lastArg)));
}

function $count(this$static){
  var count;
  $terminate(this$static);
  count = 0;
  while (this$static.spliterator.tryAdvance(new StreamImpl$lambda$1$Type)) {
    count = add_1(count, 1);
  }
  return count;
}

function $filter_0(this$static, predicate){
  $throwIfTerminated(this$static);
  return new StreamImpl(this$static, new StreamImpl$FilterSpliterator(predicate, this$static.spliterator));
}

function $findFirst(this$static){
  var holder;
  $terminate(this$static);
  holder = new StreamImpl$ValueConsumer;
  if (this$static.spliterator.tryAdvance(holder)) {
    return $clinit_Optional() , new Optional(checkCriticalNotNull(holder.value_0));
  }
  return $clinit_Optional() , $clinit_Optional() , EMPTY;
}

function $forEach_3(this$static, action){
  $terminate(this$static);
  this$static.spliterator.forEachRemaining(action);
}

function $map(this$static, mapper){
  $throwIfTerminated(this$static);
  return new StreamImpl(this$static, new StreamImpl$MapToObjSpliterator(mapper, this$static.spliterator));
}

function $reduce(this$static, identity, accumulator){
  var consumer;
  $terminate(this$static);
  consumer = new StreamImpl$ValueConsumer;
  consumer.value_0 = identity;
  this$static.spliterator.forEachRemaining(new StreamImpl$lambda$5$Type(consumer, accumulator));
  return consumer.value_0;
}

function $spliterator(this$static){
  $terminate(this$static);
  return this$static.spliterator;
}

function StreamImpl(prev, spliterator){
  $clinit_StreamImpl();
  TerminatableStream.call(this, prev);
  this.spliterator = spliterator;
}

function lambda$4_1(collector_0, a_1, t_2){
  $clinit_StreamImpl();
  collector_0.accumulator.accept_0(a_1, t_2);
  return a_1;
}

function lambda$5_0(consumer_0, accumulator_1, item_2){
  $clinit_StreamImpl();
  $accept(consumer_0, $apply_0(accumulator_1, consumer_0.value_0, item_2));
}

defineClass(22, 309, {}, StreamImpl);
var NULL_CONSUMER;
var Ljava_util_stream_StreamImpl_2_classLit = createForClass('java.util.stream', 'StreamImpl', 22);
function $lambda$0_10(this$static, action_1, item_1){
  if (this$static.filter_0.test_0(item_1)) {
    this$static.found = true;
    action_1.accept(item_1);
  }
}

function StreamImpl$FilterSpliterator(filter, original){
  Spliterators$AbstractSpliterator.call(this, original.estimateSize_0(), original.characteristics_0() & -16449);
  checkCriticalNotNull(filter);
  this.filter_0 = filter;
  this.original = original;
}

defineClass(210, 201, {}, StreamImpl$FilterSpliterator);
_.tryAdvance = function tryAdvance_1(action){
  this.found = false;
  while (!this.found && this.original.tryAdvance(new StreamImpl$FilterSpliterator$lambda$0$Type(this, action)))
  ;
  return this.found;
}
;
_.found = false;
var Ljava_util_stream_StreamImpl$FilterSpliterator_2_classLit = createForClass('java.util.stream', 'StreamImpl/FilterSpliterator', 210);
function StreamImpl$FilterSpliterator$lambda$0$Type($$outer_0, action_1){
  this.$$outer_0 = $$outer_0;
  this.action_1 = action_1;
}

defineClass(312, 1, {}, StreamImpl$FilterSpliterator$lambda$0$Type);
_.accept = function accept_30(arg0){
  $lambda$0_10(this.$$outer_0, this.action_1, arg0);
}
;
var Ljava_util_stream_StreamImpl$FilterSpliterator$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/FilterSpliterator/lambda$0$Type', 312);
function $lambda$0_11(this$static, action_1, u_1){
  action_1.accept(this$static.map_0.apply_0(u_1));
}

function StreamImpl$MapToObjSpliterator(map_0, original){
  Spliterators$AbstractSpliterator.call(this, original.estimateSize_0(), original.characteristics_0() & -6);
  checkCriticalNotNull(map_0);
  this.map_0 = map_0;
  this.original = original;
}

defineClass(310, 201, {}, StreamImpl$MapToObjSpliterator);
_.tryAdvance = function tryAdvance_2(action){
  return this.original.tryAdvance(new StreamImpl$MapToObjSpliterator$lambda$0$Type(this, action));
}
;
var Ljava_util_stream_StreamImpl$MapToObjSpliterator_2_classLit = createForClass('java.util.stream', 'StreamImpl/MapToObjSpliterator', 310);
function StreamImpl$MapToObjSpliterator$lambda$0$Type($$outer_0, action_1){
  this.$$outer_0 = $$outer_0;
  this.action_1 = action_1;
}

defineClass(311, 1, {}, StreamImpl$MapToObjSpliterator$lambda$0$Type);
_.accept = function accept_31(arg0){
  $lambda$0_11(this.$$outer_0, this.action_1, arg0);
}
;
var Ljava_util_stream_StreamImpl$MapToObjSpliterator$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/MapToObjSpliterator/lambda$0$Type', 311);
function $accept(this$static, value_0){
  this$static.value_0 = value_0;
}

function StreamImpl$ValueConsumer(){
}

defineClass(211, 1, {}, StreamImpl$ValueConsumer);
_.accept = function accept_32(value_0){
  $accept(this, value_0);
}
;
var Ljava_util_stream_StreamImpl$ValueConsumer_2_classLit = createForClass('java.util.stream', 'StreamImpl/ValueConsumer', 211);
function StreamImpl$lambda$0$Type(){
}

defineClass(313, 1, {}, StreamImpl$lambda$0$Type);
_.accept = function accept_33(arg0){
  $clinit_StreamImpl();
}
;
var Ljava_util_stream_StreamImpl$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/lambda$0$Type', 313);
function StreamImpl$lambda$1$Type(){
}

defineClass(314, 1, {}, StreamImpl$lambda$1$Type);
_.accept = function accept_34(arg0){
  $clinit_StreamImpl();
}
;
var Ljava_util_stream_StreamImpl$lambda$1$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/lambda$1$Type', 314);
function $apply_0(this$static, arg0, arg1){
  return lambda$4_1(this$static.collector_0, arg0, arg1);
}

function StreamImpl$lambda$4$Type(collector_0){
  this.collector_0 = collector_0;
}

defineClass(315, 1, {}, StreamImpl$lambda$4$Type);
var Ljava_util_stream_StreamImpl$lambda$4$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/lambda$4$Type', 315);
function StreamImpl$lambda$5$Type(consumer_0, accumulator_1){
  this.consumer_0 = consumer_0;
  this.accumulator_1 = accumulator_1;
}

defineClass(316, 1, {}, StreamImpl$lambda$5$Type);
_.accept = function accept_35(arg0){
  lambda$5_0(this.consumer_0, this.accumulator_1, arg0);
}
;
var Ljava_util_stream_StreamImpl$lambda$5$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/lambda$5$Type', 316);
function stampJavaTypeInfo_1(array, referenceType){
  return stampJavaTypeInfo_0(array, referenceType);
}

function $groupStart(msg, expanded){
  (!expanded && console.groupCollapsed != null?console.groupCollapsed:console.group != null?console.group:console.log).call(console, msg);
}

function $log_1(level, message){
  var logFn;
  logFn = console[level];
  logFn.call(console, message);
}

function $log_2(this$static, level, t, label_0, expanded){
  var cause, suppressed, suppressed$array, suppressed$index, suppressed$max;
  $groupStart(label_0 + $toString(t, t.getMessage()), expanded);
  $log_1(level, getBackingErrorStack(t));
  cause = t.cause_0;
  !!cause && $log_2(this$static, level, cause, 'Caused by: ', false);
  for (suppressed$array = (t.suppressedExceptions == null && (t.suppressedExceptions = initUnidimensionalArray(Ljava_lang_Throwable_2_classLit, $intern_0, 9, 0, 0, 1)) , t.suppressedExceptions) , suppressed$index = 0 , suppressed$max = suppressed$array.length; suppressed$index < suppressed$max; ++suppressed$index) {
    suppressed = suppressed$array[suppressed$index];
    $log_2(this$static, level, suppressed, 'Suppressed: ', false);
  }
  console.groupEnd != null && console.groupEnd.call(console);
}

function ConsoleLogger(){
}

function getBackingErrorStack(t){
  var backingError = t.backingJsObject;
  function stringify(fnStack){
    if (!fnStack || fnStack.length == 0) {
      return '';
    }
    return '\t' + fnStack.join('\n\t');
  }

  return backingError && (backingError.stack || stringify(t['fnStack']));
}

defineClass(458, 1, {}, ConsoleLogger);
var Ljavaemul_internal_ConsoleLogger_2_classLit = createForClass('javaemul.internal', 'ConsoleLogger', 458);
function forEach_4(obj, cb){
  for (var element in obj) {
    cb(element);
  }
}

defineClass(1522, 1, {});
function $setupContext(this$static, contextWait){
  if (!$contains_0(this$static.contextsSet, contextWait)) {
    $add_1(this$static.contextsSet, contextWait);
    $onReady(contextWait, new ContextAggregator$lambda$1$Type);
  }
}

function ContextAggregator(contexts){
  this.contextsSet = new LinkedHashSet;
  new LinkedHashSet;
  $forEach(contexts, new ContextAggregator$1methodref$setupContext$Type(this));
}

defineClass(301, 1, {}, ContextAggregator);
var Lorg_dominokit_domino_api_shared_extension_ContextAggregator_2_classLit = createForClass('org.dominokit.domino.api.shared.extension', 'ContextAggregator', 301);
function ContextAggregator$1methodref$setupContext$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(303, 1, {}, ContextAggregator$1methodref$setupContext$Type);
_.accept = function accept_36(arg0){
  $setupContext(this.$$outer_0, castTo(arg0, 141));
}
;
var Lorg_dominokit_domino_api_shared_extension_ContextAggregator$1methodref$setupContext$Type_2_classLit = createForClass('org.dominokit.domino.api.shared.extension', 'ContextAggregator/1methodref$setupContext$Type', 303);
function ContextAggregator$ContextAggregatorBuilder(contexts){
  this.contextSet = new LinkedHashSet;
  $addAll(this.contextSet, contexts);
}

defineClass(302, 1, {}, ContextAggregator$ContextAggregatorBuilder);
var Lorg_dominokit_domino_api_shared_extension_ContextAggregator$ContextAggregatorBuilder_2_classLit = createForClass('org.dominokit.domino.api.shared.extension', 'ContextAggregator/ContextAggregatorBuilder', 302);
function $onReady(this$static, handler){
  $add_1(this$static.readyHandlers, handler);
}

defineClass(141, 1, {141:1});
var Lorg_dominokit_domino_api_shared_extension_ContextAggregator$ContextWait_2_classLit = createForClass('org.dominokit.domino.api.shared.extension', 'ContextAggregator/ContextWait', 141);
function ContextAggregator$lambda$1$Type(){
}

defineClass(304, 1, {}, ContextAggregator$lambda$1$Type);
var Lorg_dominokit_domino_api_shared_extension_ContextAggregator$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.api.shared.extension', 'ContextAggregator/lambda$1$Type', 304);
function HistoryToken$InvalidQueryStringException(query){
  RuntimeException_0.call(this, query);
}

defineClass(766, 13, $intern_2, HistoryToken$InvalidQueryStringException);
var Lorg_dominokit_domino_history_HistoryToken$InvalidQueryStringException_2_classLit = createForClass('org.dominokit.domino.history', 'HistoryToken/InvalidQueryStringException', 766);
function HistoryToken$TokenCannotBeNullException(){
  RuntimeException.call(this);
}

defineClass(765, 13, $intern_2, HistoryToken$TokenCannotBeNullException);
var Lorg_dominokit_domino_history_HistoryToken$TokenCannotBeNullException_2_classLit = createForClass('org.dominokit.domino.history', 'HistoryToken/TokenCannotBeNullException', 765);
function $appendQuery(query){
  return query == null || query.length == 0?'':'?' + query;
}

function $asPathsList(token){
  if (token == null || token == null || token.length == 0 || $equals_1(token.substr(0, 1), '?') || $equals_1(token.substr(0, 1), '#'))
    return new ArrayList;
  return castTo($collect($filter_0(stream_0($split_0($split_0($split_0($replace(token, '!', ''), '\\?', 0)[0], '\\#', 0)[0], '/', 0)), new StateHistoryToken$lambda$9$Type), of_1(new StateHistoryToken$1methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$42$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_0, 29, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)]))), 18);
}

function $asQueryParameters(token){
  var queryString;
  queryString = $queryPart(token);
  if (queryString == null || $trim(queryString).length == 0) {
    return new LinkedList;
  }
  return castTo($collect($map(new StreamImpl(null, new Spliterators$IteratorSpliterator(new LinkedHashMap$EntrySet(castTo($collect($map(of_2($split_0(queryString, '&', 0)), new StateHistoryToken$lambda$11$Type), groupingBy(mapping_0(of_1(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$42$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_0, 29, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)]))))), 100)), 1)), new StateHistoryToken$lambda$15$Type), of_1(new StateHistoryToken$3methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$42$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_0, 29, 0, [IDENTITY_FINISH]))), 18);
}

function $isEmpty(path){
  return path == null || path.length == 0;
}

function $parseFragments(token){
  if (token.indexOf('#') != -1 && token.indexOf('#') < token.length - 1)
    return $asPathsList($split_0(token, '\\#', 0)[1]);
  return new LinkedList;
}

function $queryPart(token){
  var parts, query;
  query = '';
  if (token.indexOf('?') != -1 && token.indexOf('?') < token.length - 1) {
    parts = $split_0(token, '\\?', 0);
    if (parts.length > 1) {
      if ($split_0(parts[1], '\\#', 0).length > 0) {
        query = $split_0(parts[1], '\\#', 0)[0];
      }
       else {
        return query;
      }
    }
     else {
      query = $split_0(parts[0], '\\#', 0)[0];
    }
    if (query.length != 0 && query.indexOf('=') == -1) {
      throw toJs(new HistoryToken$InvalidQueryStringException('Query string [' + query + "] is missing '=' operator."));
    }
  }
  return query;
}

function $rebaseToken(token){
  if (''.length == 0 || !$equals_1(token.substr(0, ''.length), '')) {
    return token;
  }
  return $substring(token, ''.length);
}

function $replacePath(this$static, path, replacement){
  var i, paths;
  paths = $asPathsList(join_1(this$static.paths));
  if (paths.contains(path)) {
    i = paths.indexOf(path);
    paths.addAtIndex(i, replacement);
    paths.removeAtIndex(i + 1);
    this$static.paths = paths;
  }
  return this$static;
}

function StateHistoryToken(token){
  StateHistoryToken_0.call(this, token);
}

function StateHistoryToken_0(token){
  var rebasedToken;
  this.paths = new LinkedList;
  this.queryParameters = new LinkedList;
  this.fragments = new LinkedList;
  if (token == null)
    throw toJs(new HistoryToken$TokenCannotBeNullException);
  this.rootPath = '';
  rebasedToken = $rebaseToken(token);
  this.paths.addAll($asPathsList(rebasedToken));
  $addAll(this.queryParameters, $asQueryParameters(rebasedToken));
  $addAll(this.fragments, $parseFragments(rebasedToken));
}

function lambda$15(entry_0){
  return new StateHistoryToken$Parameter(castToString(entry_0.getKey()), castTo(entry_0.getValue_0(), 18));
}

defineClass(132, 1, {132:1}, StateHistoryToken);
_.equals_0 = function equals_13(o){
  var that;
  if (this === o)
    return true;
  if (!instanceOf(o, 132))
    return false;
  that = castTo(o, 132);
  return equals_Ljava_lang_Object__Z__devirtual$(this.paths, that.paths) && $equals_2(this.fragments, that.fragments) && this.queryParameters.size_0 == that.queryParameters.size_0 && $containsAll(this.queryParameters, that.queryParameters);
}
;
_.hashCode_1 = function hashCode_16(){
  return hashCode_10(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_0, 1, 5, [this.paths, this.queryParameters, this.fragments]));
}
;
var Lorg_dominokit_domino_history_StateHistoryToken_2_classLit = createForClass('org.dominokit.domino.history', 'StateHistoryToken', 132);
function StateHistoryToken$0methodref$asQueryString$Type(){
}

defineClass(759, 1, {}, StateHistoryToken$0methodref$asQueryString$Type);
_.apply_0 = function apply_17(arg0){
  return $asQueryString(castTo(arg0, 133));
}
;
var Lorg_dominokit_domino_history_StateHistoryToken$0methodref$asQueryString$Type_2_classLit = createForClass('org.dominokit.domino.history', 'StateHistoryToken/0methodref$asQueryString$Type', 759);
function StateHistoryToken$1methodref$ctor$Type(){
}

defineClass(761, 1, {}, StateHistoryToken$1methodref$ctor$Type);
_.get_0 = function get_15(){
  return new LinkedList;
}
;
var Lorg_dominokit_domino_history_StateHistoryToken$1methodref$ctor$Type_2_classLit = createForClass('org.dominokit.domino.history', 'StateHistoryToken/1methodref$ctor$Type', 761);
function StateHistoryToken$3methodref$ctor$Type(){
}

defineClass(764, 1, {}, StateHistoryToken$3methodref$ctor$Type);
_.get_0 = function get_16(){
  return new LinkedList;
}
;
var Lorg_dominokit_domino_history_StateHistoryToken$3methodref$ctor$Type_2_classLit = createForClass('org.dominokit.domino.history', 'StateHistoryToken/3methodref$ctor$Type', 764);
function $asQueryString(this$static){
  return castToString($collect($map(this$static.value_0.stream(), new StateHistoryToken$Parameter$lambda$0$Type(this$static)), of_0(new Collectors$lambda$15$Type, new Collectors$9methodref$add$Type, new Collectors$10methodref$merge$Type, new Collectors$11methodref$toString$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_0, 29, 0, []))));
}

function $lambda$0_12(this$static, value_0){
  return this$static.key_0 + '=' + value_0;
}

function StateHistoryToken$Parameter(key, value_0){
  this.key_0 = key;
  this.value_0 = value_0;
}

defineClass(133, 1, {133:1}, StateHistoryToken$Parameter);
_.equals_0 = function equals_14(o){
  var parameter;
  if (this === o)
    return true;
  if (!instanceOf(o, 133))
    return false;
  parameter = castTo(o, 133);
  return this.key_0 == parameter.key_0 && this.value_0.size() == parameter.value_0.size() && this.value_0.containsAll(parameter.value_0);
}
;
_.hashCode_1 = function hashCode_17(){
  return hashCode_10(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_0, 1, 5, [this.key_0, this.value_0]));
}
;
var Lorg_dominokit_domino_history_StateHistoryToken$Parameter_2_classLit = createForClass('org.dominokit.domino.history', 'StateHistoryToken/Parameter', 133);
function StateHistoryToken$Parameter$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(758, 1, {}, StateHistoryToken$Parameter$lambda$0$Type);
_.apply_0 = function apply_18(arg0){
  return $lambda$0_12(this.$$outer_0, castToString(arg0));
}
;
var Lorg_dominokit_domino_history_StateHistoryToken$Parameter$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.history', 'StateHistoryToken/Parameter/lambda$0$Type', 758);
function StateHistoryToken$lambda$11$Type(){
}

defineClass(762, 1, {}, StateHistoryToken$lambda$11$Type);
_.apply_0 = function apply_19(arg0){
  return $split_0(castToString(arg0), '=', 0);
}
;
var Lorg_dominokit_domino_history_StateHistoryToken$lambda$11$Type_2_classLit = createForClass('org.dominokit.domino.history', 'StateHistoryToken/lambda$11$Type', 762);
function StateHistoryToken$lambda$15$Type(){
}

defineClass(763, 1, {}, StateHistoryToken$lambda$15$Type);
_.apply_0 = function apply_20(arg0){
  return lambda$15(castTo(arg0, 24));
}
;
var Lorg_dominokit_domino_history_StateHistoryToken$lambda$15$Type_2_classLit = createForClass('org.dominokit.domino.history', 'StateHistoryToken/lambda$15$Type', 763);
function StateHistoryToken$lambda$9$Type(){
}

defineClass(760, 1, {}, StateHistoryToken$lambda$9$Type);
_.test_0 = function test_20(arg0){
  return castToString(arg0).length != 0;
}
;
var Lorg_dominokit_domino_history_StateHistoryToken$lambda$9$Type_2_classLit = createForClass('org.dominokit.domino.history', 'StateHistoryToken/lambda$9$Type', 760);
defineClass(820, 1, {});
var Lorg_slf4j_helpers_NamedLoggerBase_2_classLit = createForClass('org.slf4j.helpers', 'NamedLoggerBase', 820);
defineClass(821, 820, {});
_.toString_0 = function toString_21(){
  return $ensureNamesAreInitialized(Lorg_dominokit_domino_logger_ConsoleLoggerAdapter_2_classLit) , Lorg_dominokit_domino_logger_ConsoleLoggerAdapter_2_classLit.typeName + '(' + this.name_0 + ')';
}
;
var Lorg_slf4j_helpers_MarkerIgnoringBase_2_classLit = createForClass('org.slf4j.helpers', 'MarkerIgnoringBase', 821);
function $clinit_ConsoleLoggerAdapter(){
  $clinit_ConsoleLoggerAdapter = emptyMethod;
  INFO_ENABLED_0 = true;
  DEBUG_ENABLED = true;
  ERROR_ENABLED = true;
}

function $debug(msg){
  DEBUG_ENABLED && ($clinit_DomGlobal() , $wnd.goog.global.console).debug(msg);
}

function $debug_0(t){
  DEBUG_ENABLED && $accept_0(arrayFormat(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_0, 1, 5, [t])));
}

function $error(msg, t){
  ERROR_ENABLED && ($clinit_DomGlobal() , $wnd.goog.global.console).error(msg, t);
}

function ConsoleLoggerAdapter(name_0){
  $clinit_ConsoleLoggerAdapter();
  this.name_0 = name_0;
}

function lambda$7_1(ft_0){
  $clinit_ConsoleLoggerAdapter();
  ($clinit_DomGlobal() , $wnd.goog.global.console).debug(ft_0.message_0, ft_0.throwable);
}

defineClass(49, 821, {}, ConsoleLoggerAdapter);
var DEBUG_ENABLED = false, ERROR_ENABLED = false, INFO_ENABLED_0 = false;
var Lorg_dominokit_domino_logger_ConsoleLoggerAdapter_2_classLit = createForClass('org.dominokit.domino.logger', 'ConsoleLoggerAdapter', 49);
function $accept_0(arg0){
  lambda$7_1(castTo(arg0, 93));
}

defineClass(318, 1, {});
_.accept = function accept_37(arg0){
  $accept_0(arg0);
}
;
var Lorg_dominokit_domino_logger_ConsoleLoggerAdapter$lambda$7$Type_2_classLit = createForClass('org.dominokit.domino.logger', 'ConsoleLoggerAdapter/lambda$7$Type', 318);
function $animate(this$static){
  this$static.delay > 0?$schedule(this$static.delayTimer, this$static.delay):$animateElement(this$static);
  return this$static;
}

function $animateElement(this$static){
  this$static.startHandler.beforeStart(this$static.element.wrappedElement);
  this$static.stopListener = new Animation$lambda$2$Type(this$static);
  $addEventListener(this$static.element, 'webkitAnimationEnd', this$static.stopListener);
  $addEventListener(this$static.element, 'MSAnimationEnd', this$static.stopListener);
  $addEventListener(this$static.element, 'mozAnimationEnd', this$static.stopListener);
  $addEventListener(this$static.element, 'oanimationend', this$static.stopListener);
  $addEventListener(this$static.element, 'animationend', this$static.stopListener);
  $setTransitionDuration(this$static.element, this$static.duration + 'ms');
  $setCssProperty(this$static.element, 'animation-duration', this$static.duration + 'ms');
  $setCssProperty(this$static.element, '-webkit-animation-duration', this$static.duration + 'ms');
  this$static.repeatCount != 1 && $setCssProperty(this$static.element, 'animation-iteration-count', this$static.repeatCount + '');
  $addCss(this$static.element, 'animated');
  $addCss(this$static.element, 'ease-in-out');
  $addCss(this$static.element, this$static.transition.style_0);
}

function $beforeStart(this$static, startHandler){
  this$static.startHandler = startHandler;
  return this$static;
}

function $callback(this$static, callback){
  this$static.callback = callback;
  return this$static;
}

function $delay(this$static, delay){
  this$static.delay = delay;
  return this$static;
}

function $duration(this$static, duration){
  this$static.duration = duration;
  return this$static;
}

function $stop(this$static, silent){
  $cancel(this$static.delayTimer);
  $removeCss(this$static.element, this$static.transition.style_0);
  $removeCss(this$static.element, 'animated');
  $removeCss(this$static.element, 'infinite');
  $removeCss(this$static.element, 'ease-in-out');
  $removeCssProperty(this$static.element, 'animation-duration');
  $removeCssProperty(this$static.element, '-webkit-animation-duration');
  $removeEventListener(this$static.element, 'webkitAnimationEnd', this$static.stopListener);
  $removeEventListener(this$static.element, 'MSAnimationEnd', this$static.stopListener);
  $removeEventListener(this$static.element, 'mozAnimationEnd', this$static.stopListener);
  $removeEventListener(this$static.element, 'oanimationend', this$static.stopListener);
  $removeEventListener(this$static.element, 'animationend', this$static.stopListener);
  silent || this$static.callback.onComplete(this$static.element.wrappedElement);
}

function $transition(this$static, transition){
  this$static.transition = transition;
  return this$static;
}

function Animation_0(element){
  this.DEFAULT_CALLBACK = new Animation$lambda$0$Type;
  this.DEFAULT_START_HANDLER = new Animation$lambda$1$Type;
  this.transition = ($clinit_Transition() , BOUNCE);
  this.callback = this.DEFAULT_CALLBACK;
  this.startHandler = this.DEFAULT_START_HANDLER;
  this.element = new DominoElement(element);
  this.delayTimer = new Animation$1(this);
}

defineClass(85, 1, {85:1}, Animation_0);
_.delay = 0;
_.duration = 800;
_.repeatCount = 1;
var Lorg_dominokit_domino_ui_animations_Animation_2_classLit = createForClass('org.dominokit.domino.ui.animations', 'Animation', 85);
function $cancel(this$static){
  if (this$static.timerId == null) {
    return;
  }
  this$static.isRepeating?$wnd.goog.global.clearInterval($doubleValue(this$static.timerId)):$wnd.goog.global.clearTimeout($doubleValue(this$static.timerId));
  this$static.timerId = null;
}

function $schedule(this$static, delayMillis){
  if (delayMillis < 0) {
    throw toJs(new IllegalArgumentException('must be non-negative'));
  }
  this$static.timerId != null && $cancel(this$static);
  this$static.isRepeating = false;
  this$static.timerId = ($clinit_DomGlobal() , $wnd.goog.global.setTimeout(makeLambdaFunction(Timer$lambda$0$Type.prototype.onInvoke_0, Timer$lambda$0$Type, [this$static]), delayMillis));
}

function $scheduleRepeating(this$static, periodMillis){
  if (periodMillis <= 0) {
    throw toJs(new IllegalArgumentException('must be positive'));
  }
  this$static.timerId != null && $cancel(this$static);
  this$static.isRepeating = true;
  this$static.timerId = ($clinit_DomGlobal() , $wnd.goog.global.setInterval(makeLambdaFunction(Timer$lambda$1$Type.prototype.onInvoke_0, Timer$lambda$1$Type, [this$static]), periodMillis));
}

function Timer(){
}

function lambda$0_5(timer_0){
  timer_0.isRepeating || (timer_0.timerId = null);
  timer_0.run();
}

function lambda$1_1(timer_0){
  timer_0.isRepeating || (timer_0.timerId = null);
  $nextSlide(timer_0.this$01);
}

defineClass(108, 1, {});
_.isRepeating = false;
_.timerId = null;
var Lorg_gwtproject_timer_client_Timer_2_classLit = createForClass('org.gwtproject.timer.client', 'Timer', 108);
function Animation$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(471, 108, {}, Animation$1);
_.run = function run(){
  $animateElement(this.this$01);
}
;
var Lorg_dominokit_domino_ui_animations_Animation$1_2_classLit = createForClass('org.dominokit.domino.ui.animations', 'Animation/1', 471);
function Animation$lambda$0$Type(){
}

defineClass(469, 1, {}, Animation$lambda$0$Type);
_.onComplete = function onComplete_0(element){
}
;
var Lorg_dominokit_domino_ui_animations_Animation$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.animations', 'Animation/lambda$0$Type', 469);
function Animation$lambda$1$Type(){
}

defineClass(470, 1, {}, Animation$lambda$1$Type);
_.beforeStart = function beforeStart(element){
}
;
var Lorg_dominokit_domino_ui_animations_Animation$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.animations', 'Animation/lambda$1$Type', 470);
function Animation$lambda$2$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(472, 1, {}, Animation$lambda$2$Type);
_.handleEvent = function handleEvent_13(arg0){
  $stop(this.$$outer_0, false);
}
;
var Lorg_dominokit_domino_ui_animations_Animation$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.animations', 'Animation/lambda$2$Type', 472);
function $clinit_Transition(){
  $clinit_Transition = emptyMethod;
  BOUNCE = new Transition('BOUNCE', 0, 'bounce');
  FLASH = new Transition('FLASH', 1, 'flash');
  PULSE = new Transition('PULSE', 2, 'pulse');
  RUBBER_BAND = new Transition('RUBBER_BAND', 3, 'rubberBand');
  SHAKE = new Transition('SHAKE', 4, 'shake');
  SWING = new Transition('SWING', 5, 'swing');
  TADA = new Transition('TADA', 6, 'tada');
  WOBBLE = new Transition('WOBBLE', 7, 'wobble');
  JELLO = new Transition('JELLO', 8, 'jello');
  BOUNCE_IN = new Transition('BOUNCE_IN', 9, 'bounceIn');
  BOUNCE_IN_DOWN = new Transition('BOUNCE_IN_DOWN', 10, 'bounceInDown');
  BOUNCE_IN_LEFT = new Transition('BOUNCE_IN_LEFT', 11, 'bounceInLeft');
  BOUNCE_IN_RIGHT = new Transition('BOUNCE_IN_RIGHT', 12, 'bounceInRight');
  BOUNCE_IN_UP = new Transition('BOUNCE_IN_UP', 13, 'bounceInUp');
  BOUNCE_OUT = new Transition('BOUNCE_OUT', 14, 'bounceOut');
  BOUNCE_OUT_DOWN = new Transition('BOUNCE_OUT_DOWN', 15, 'bounceOutDown');
  BOUNCE_OUT_LEFT = new Transition('BOUNCE_OUT_LEFT', 16, 'bounceOutLeft');
  BOUNCE_OUT_RIGHT = new Transition('BOUNCE_OUT_RIGHT', 17, 'bounceOutRight');
  BOUNCE_OUT_UP = new Transition('BOUNCE_OUT_UP', 18, 'bounceOutUp');
  FADE_IN = new Transition('FADE_IN', 19, 'fadeIn');
  FADE_IN_DOWN = new Transition('FADE_IN_DOWN', 20, 'fadeInDown');
  FADE_IN_DOWN_BIG = new Transition('FADE_IN_DOWN_BIG', 21, 'fadeInDownBig');
  FADE_IN_LEFT = new Transition('FADE_IN_LEFT', 22, 'fadeInLeft');
  FADE_IN_LEFT_BIG = new Transition('FADE_IN_LEFT_BIG', 23, 'fadeInLeftBig');
  FADE_IN_RIGHT = new Transition('FADE_IN_RIGHT', 24, 'fadeInRight');
  FADE_IN_RIGHT_BIG = new Transition('FADE_IN_RIGHT_BIG', 25, 'fadeInRightBig');
  FADE_IN_UP = new Transition('FADE_IN_UP', 26, 'fadeInUp');
  FADE_IN_UP_BIG = new Transition('FADE_IN_UP_BIG', 27, 'fadeInUpBig');
  FADE_OUT = new Transition('FADE_OUT', 28, 'fadeOut');
  FADE_OUT_DOWN = new Transition('FADE_OUT_DOWN', 29, 'fadeOutDown');
  FADE_OUT_DOWN_BIG = new Transition('FADE_OUT_DOWN_BIG', 30, 'fadeOutDownBig');
  FADE_OUT_LEFT = new Transition('FADE_OUT_LEFT', 31, 'fadeOutLeft');
  FADE_OUT_LEFT_BIG = new Transition('FADE_OUT_LEFT_BIG', 32, 'fadeOutLeftBig');
  FADE_OUT_RIGHT = new Transition('FADE_OUT_RIGHT', 33, 'fadeOutRight');
  FADE_OUT_RIGHT_BIG = new Transition('FADE_OUT_RIGHT_BIG', 34, 'fadeOutRightBig');
  FADE_OUT_UP = new Transition('FADE_OUT_UP', 35, 'fadeOutUp');
  FADE_OUT_UP_BIG = new Transition('FADE_OUT_UP_BIG', 36, 'fadeOutUpBig');
  FLIP = new Transition('FLIP', 37, 'flip');
  FLIP_IN_X = new Transition('FLIP_IN_X', 38, 'flipInX');
  FLIP_IN_Y = new Transition('FLIP_IN_Y', 39, 'flipInY');
  FLIP_OUT_X = new Transition('FLIP_OUT_X', 40, 'flipOutX');
  FLIP_OUT_Y = new Transition('FLIP_OUT_Y', 41, 'flipOutY');
  LIGHT_SPEED_IN = new Transition('LIGHT_SPEED_IN', 42, 'lightSpeedIn');
  LIGHT_SPEED_OUT = new Transition('LIGHT_SPEED_OUT', 43, 'lightSpeedOut');
  ROTATE_IN = new Transition('ROTATE_IN', 44, 'rotateIn');
  ROTATE_IN_DOWN_LEFT = new Transition('ROTATE_IN_DOWN_LEFT', 45, 'rotateInDownLeft');
  ROTATE_IN_DOWN_RIGHT = new Transition('ROTATE_IN_DOWN_RIGHT', 46, 'rotateInDownRight');
  ROTATE_IN_UP_LEFT = new Transition('ROTATE_IN_UP_LEFT', 47, 'rotateInUpLeft');
  ROTATE_IN_UP_RIGHT = new Transition('ROTATE_IN_UP_RIGHT', 48, 'rotateInUpRight');
  ROTATE_OUT = new Transition('ROTATE_OUT', 49, 'rotateOut');
  ROTATE_OUT_DOWN_LEFT = new Transition('ROTATE_OUT_DOWN_LEFT', 50, 'rotateOutDownLeft');
  ROTATE_OUT_DOWN_RIGHT = new Transition('ROTATE_OUT_DOWN_RIGHT', 51, 'rotateOutDownRight');
  ROTATE_OUT_UP_LEFT = new Transition('ROTATE_OUT_UP_LEFT', 52, 'rotateOutUpLeft');
  ROTATE_OUT_UP_RIGHT = new Transition('ROTATE_OUT_UP_RIGHT', 53, 'rotateOutUpRight');
  SLIDE_IN_UP = new Transition('SLIDE_IN_UP', 54, 'slideInUp');
  SLIDE_IN_DOWN = new Transition('SLIDE_IN_DOWN', 55, 'slideInDown');
  SLIDE_IN_LEFT = new Transition('SLIDE_IN_LEFT', 56, 'slideInLeft');
  SLIDE_IN_RIGHT = new Transition('SLIDE_IN_RIGHT', 57, 'slideInRight');
  SLIDE_OUT_UP = new Transition('SLIDE_OUT_UP', 58, 'slideOutUp');
  SLIDE_OUT_DOWN = new Transition('SLIDE_OUT_DOWN', 59, 'slideOutDown');
  SLIDE_OUT_LEFT = new Transition('SLIDE_OUT_LEFT', 60, 'slideOutLeft');
  SLIDE_OUT_RIGHT = new Transition('SLIDE_OUT_RIGHT', 61, 'slideOutRight');
  ZOOM_IN = new Transition('ZOOM_IN', 62, 'zoomIn');
  ZOOM_IN_DOWN = new Transition('ZOOM_IN_DOWN', 63, 'zoomInDown');
  ZOOM_IN_LEFT = new Transition('ZOOM_IN_LEFT', 64, 'zoomInLeft');
  ZOOM_IN_RIGHT = new Transition('ZOOM_IN_RIGHT', 65, 'zoomInRight');
  ZOOM_IN_UP = new Transition('ZOOM_IN_UP', 66, 'zoomInUp');
  ZOOM_OUT = new Transition('ZOOM_OUT', 67, 'zoomOut');
  ZOOM_OUT_DOWN = new Transition('ZOOM_OUT_DOWN', 68, 'zoomOutDown');
  ZOOM_OUT_LEFT = new Transition('ZOOM_OUT_LEFT', 69, 'zoomOutLeft');
  ZOOM_OUT_RIGHT = new Transition('ZOOM_OUT_RIGHT', 70, 'zoomOutRight');
  ZOOM_OUT_UP = new Transition('ZOOM_OUT_UP', 71, 'zoomOutUp');
  HINGE = new Transition('HINGE', 72, 'hinge');
  ROLL_IN = new Transition('ROLL_IN', 73, 'rollIn');
  ROLL_OUT = new Transition('ROLL_OUT', 74, 'rollOut');
  COLLAPSE_UP = new Transition('COLLAPSE_UP', 75, 'collapseUp');
}

function Transition(enum$name, enum$ordinal, style){
  Enum.call(this, enum$name, enum$ordinal);
  this.style_0 = style;
}

function values_4(){
  $clinit_Transition();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_animations_Transition_2_classLit, 1), $intern_0, 8, 0, [BOUNCE, FLASH, PULSE, RUBBER_BAND, SHAKE, SWING, TADA, WOBBLE, JELLO, BOUNCE_IN, BOUNCE_IN_DOWN, BOUNCE_IN_LEFT, BOUNCE_IN_RIGHT, BOUNCE_IN_UP, BOUNCE_OUT, BOUNCE_OUT_DOWN, BOUNCE_OUT_LEFT, BOUNCE_OUT_RIGHT, BOUNCE_OUT_UP, FADE_IN, FADE_IN_DOWN, FADE_IN_DOWN_BIG, FADE_IN_LEFT, FADE_IN_LEFT_BIG, FADE_IN_RIGHT, FADE_IN_RIGHT_BIG, FADE_IN_UP, FADE_IN_UP_BIG, FADE_OUT, FADE_OUT_DOWN, FADE_OUT_DOWN_BIG, FADE_OUT_LEFT, FADE_OUT_LEFT_BIG, FADE_OUT_RIGHT, FADE_OUT_RIGHT_BIG, FADE_OUT_UP, FADE_OUT_UP_BIG, FLIP, FLIP_IN_X, FLIP_IN_Y, FLIP_OUT_X, FLIP_OUT_Y, LIGHT_SPEED_IN, LIGHT_SPEED_OUT, ROTATE_IN, ROTATE_IN_DOWN_LEFT, ROTATE_IN_DOWN_RIGHT, ROTATE_IN_UP_LEFT, ROTATE_IN_UP_RIGHT, ROTATE_OUT, ROTATE_OUT_DOWN_LEFT, ROTATE_OUT_DOWN_RIGHT, ROTATE_OUT_UP_LEFT, ROTATE_OUT_UP_RIGHT, SLIDE_IN_UP, SLIDE_IN_DOWN, SLIDE_IN_LEFT, SLIDE_IN_RIGHT, SLIDE_OUT_UP, SLIDE_OUT_DOWN, SLIDE_OUT_LEFT, SLIDE_OUT_RIGHT, ZOOM_IN, ZOOM_IN_DOWN, ZOOM_IN_LEFT, ZOOM_IN_RIGHT, ZOOM_IN_UP, ZOOM_OUT, ZOOM_OUT_DOWN, ZOOM_OUT_LEFT, ZOOM_OUT_RIGHT, ZOOM_OUT_UP, HINGE, ROLL_IN, ROLL_OUT, COLLAPSE_UP]);
}

defineClass(8, 21, {4:1, 34:1, 21:1, 8:1}, Transition);
var BOUNCE, BOUNCE_IN, BOUNCE_IN_DOWN, BOUNCE_IN_LEFT, BOUNCE_IN_RIGHT, BOUNCE_IN_UP, BOUNCE_OUT, BOUNCE_OUT_DOWN, BOUNCE_OUT_LEFT, BOUNCE_OUT_RIGHT, BOUNCE_OUT_UP, COLLAPSE_UP, FADE_IN, FADE_IN_DOWN, FADE_IN_DOWN_BIG, FADE_IN_LEFT, FADE_IN_LEFT_BIG, FADE_IN_RIGHT, FADE_IN_RIGHT_BIG, FADE_IN_UP, FADE_IN_UP_BIG, FADE_OUT, FADE_OUT_DOWN, FADE_OUT_DOWN_BIG, FADE_OUT_LEFT, FADE_OUT_LEFT_BIG, FADE_OUT_RIGHT, FADE_OUT_RIGHT_BIG, FADE_OUT_UP, FADE_OUT_UP_BIG, FLASH, FLIP, FLIP_IN_X, FLIP_IN_Y, FLIP_OUT_X, FLIP_OUT_Y, HINGE, JELLO, LIGHT_SPEED_IN, LIGHT_SPEED_OUT, PULSE, ROLL_IN, ROLL_OUT, ROTATE_IN, ROTATE_IN_DOWN_LEFT, ROTATE_IN_DOWN_RIGHT, ROTATE_IN_UP_LEFT, ROTATE_IN_UP_RIGHT, ROTATE_OUT, ROTATE_OUT_DOWN_LEFT, ROTATE_OUT_DOWN_RIGHT, ROTATE_OUT_UP_LEFT, ROTATE_OUT_UP_RIGHT, RUBBER_BAND, SHAKE, SLIDE_IN_DOWN, SLIDE_IN_LEFT, SLIDE_IN_RIGHT, SLIDE_IN_UP, SLIDE_OUT_DOWN, SLIDE_OUT_LEFT, SLIDE_OUT_RIGHT, SLIDE_OUT_UP, SWING, TADA, WOBBLE, ZOOM_IN, ZOOM_IN_DOWN, ZOOM_IN_LEFT, ZOOM_IN_RIGHT, ZOOM_IN_UP, ZOOM_OUT, ZOOM_OUT_DOWN, ZOOM_OUT_LEFT, ZOOM_OUT_RIGHT, ZOOM_OUT_UP;
var Lorg_dominokit_domino_ui_animations_Transition_2_classLit = createForEnum('org.dominokit.domino.ui.animations', 'Transition', 8, values_4);
function $applyWaveStyle(this$static, waveStyle){
  $applyWaveStyle_0(this$static.wavesSupport, waveStyle);
  return this$static.element_0;
}

function $setWaveColor(this$static, waveColor){
  $setWaveColor_0(this$static.wavesSupport, waveColor);
  return this$static.element_0;
}

function WavesElement(){
  BaseDominoElement.call(this);
}

defineClass(223, 12, $intern_15);
var Lorg_dominokit_domino_ui_style_WavesElement_2_classLit = createForClass('org.dominokit.domino.ui.style', 'WavesElement', 223);
function $block(this$static){
  $addCss(this$static.buttonElement, 'btn-block');
  return this$static;
}

function $linkify(this$static){
  $addCss(this$static.buttonElement, 'btn-link');
  this$static.buttonElement.elevation?this$static.buttonElement.elevation:($clinit_Elevation() , LEVEL_1);
  $elevate(this$static.buttonElement, ($clinit_Elevation() , NONE));
  return this$static;
}

function $setColor_0(this$static, color_0){
  !!this$static.color_0 && ($removeCss_1((this$static.styleInitializer.apply_1() , this$static.style_0), 'col-red') , this$static);
  this$static.color_0 = color_0;
  $addCss_1((this$static.styleInitializer.apply_1() , this$static.style_0), 'col-red');
  return this$static;
}

function $setSize(this$static, size_0){
  if (size_0) {
    !!this$static.size_0 && $removeCss_1($style(this$static.buttonElement), this$static.size_0.style_0);
    $addCss(this$static.buttonElement, size_0.style_0);
    this$static.size_0 = size_0;
  }
  return this$static;
}

defineClass(488, 223, $intern_15);
var Lorg_dominokit_domino_ui_button_BaseButton_2_classLit = createForClass('org.dominokit.domino.ui.button', 'BaseButton', 488);
function Button(text_0){
  WavesElement.call(this);
  $clinit_Elevation();
  this.buttonElement = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('button'), $wnd.HTMLElement))).element), 'btn'), 3);
  this.textContainer = $setOrder($setFlexGrow(castTo($addCss(new FlexItem, 'dui-btn-text'), 20)), 20);
  this.iconContainer = $setOrder(new FlexItem, 10);
  this.contentLayout = $appendChild_2($appendChild_2($setJustifyContent(new FlexLayout, ($clinit_FlexJustifyContent() , CENTER)), this.textContainer), this.iconContainer);
  $appendChild_0(this.buttonElement, this.contentLayout);
  $setSize(this, ($clinit_ButtonSize() , MEDIUM));
  $init(this, this);
  this.wavesSupport = $initWaves_0(new WavesSupport(this.buttonElement.wrappedElement));
  $elevate(this, of_3(($clinit_DominoUIConfig() , INSTANCE_15).defaultButtonElevation));
  $textContent(this.textContainer, text_0);
}

defineClass(38, 488, {38:1, 12:1, 15:1}, Button);
_.element_3 = function element_10(){
  return this.buttonElement.wrappedElement;
}
;
var Lorg_dominokit_domino_ui_button_Button_2_classLit = createForClass('org.dominokit.domino.ui.button', 'Button', 38);
function $clinit_ButtonSize(){
  $clinit_ButtonSize = emptyMethod;
  LARGE = new ButtonSize('LARGE', 0, 'lg');
  MEDIUM = new ButtonSize('MEDIUM', 1, 'md');
  SMALL = new ButtonSize('SMALL', 2, 'sm');
  XSMALL = new ButtonSize('XSMALL', 3, 'xs');
}

function ButtonSize(enum$name, enum$ordinal, style){
  Enum.call(this, enum$name, enum$ordinal);
  this.style_0 = style;
}

function values_5(){
  $clinit_ButtonSize();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_button_ButtonSize_2_classLit, 1), $intern_0, 111, 0, [LARGE, MEDIUM, SMALL, XSMALL]);
}

defineClass(111, 21, {4:1, 34:1, 21:1, 111:1}, ButtonSize);
var LARGE, MEDIUM, SMALL, XSMALL;
var Lorg_dominokit_domino_ui_button_ButtonSize_2_classLit = createForEnum('org.dominokit.domino.ui.button', 'ButtonSize', 111, values_5);
function $appendChild_1(this$static, slide){
  $appendChild(new DominoElement(this$static.indicatorsElement), (new DominoElement(slide.indicatorElement)).wrappedElement);
  this$static.slidesElement.appendChild(slide.slideElement);
  $addEventListener(new DominoElement(slide.indicatorElement), 'click', new Carousel$lambda$4$Type(this$static, slide));
  slide.slideElement.addEventListener('webkitTransitionEnd', new Carousel$lambda$5$Type(this$static));
  slide.slideElement.addEventListener('MSTransitionEnd', new Carousel$lambda$6$Type(this$static));
  slide.slideElement.addEventListener('mozTransitionEnd', new Carousel$lambda$7$Type(this$static));
  slide.slideElement.addEventListener('otransitionend', new Carousel$lambda$8$Type(this$static));
  slide.slideElement.addEventListener('transitionend', new Carousel$lambda$9$Type(this$static));
  if (this$static.slides.array.length == 0) {
    $containsCss_0(new Style(new Style$lambda$0$Type(slide.indicatorElement)), 'active') || $addCss_1(new Style(new Style$lambda$0$Type(slide.indicatorElement)), 'active');
    $containsCss_0((slide.styleInitializer.apply_1() , slide.style_0), 'active') || ($addCss_1((slide.styleInitializer.apply_1() , slide.style_0), 'active') , slide);
    this$static.activeSlide = slide;
  }
  $add_0(this$static.slides, slide);
  addSwipeListener(($clinit_SwipeUtil$SwipeDirection() , LEFT), slide.slideElement, new Carousel$lambda$10$Type(this$static));
  addSwipeListener(RIGHT_0, slide.slideElement, new Carousel$lambda$11$Type(this$static));
  return this$static;
}

function $goToSlide(this$static, slide, source){
  if (!$containsCss_0((slide.styleInitializer.apply_1() , slide.style_0), 'active')) {
    this$static.targetSlide = slide;
    $addCss(new DominoElement(slide.indicatorElement), 'active');
    $removeCss(new DominoElement(this$static.activeSlide.indicatorElement), 'active');
    $addCss(slide, $indexOf_1(this$static.slides, slide, 0) > $indexOf_1(this$static.slides, this$static.activeSlide, 0) && !$equals_1('prev', source) || $equals_1('next', source)?'next':'prev');
    $scheduleFixedDelay(new Carousel$lambda$12$Type(this$static, slide, source));
  }
}

function $lambda$0_13(this$static){
  var nextSlide;
  $resetTimer(this$static);
  $indexOf_1(this$static.slides, this$static.activeSlide, 0) < this$static.slides.array.length - 1?(nextSlide = castTo($get_1(this$static.slides, $indexOf_1(this$static.slides, this$static.activeSlide, 0) + 1), 35)):(nextSlide = castTo($get_1(this$static.slides, 0), 35));
  $goToSlide(this$static, nextSlide, 'next');
}

function $lambda$1_5(this$static){
  var prevSlide;
  $resetTimer(this$static);
  $indexOf_1(this$static.slides, this$static.activeSlide, 0) > 0?(prevSlide = castTo($get_1(this$static.slides, $indexOf_1(this$static.slides, this$static.activeSlide, 0) - 1), 35)):(prevSlide = castTo($get_1(this$static.slides, this$static.slides.array.length - 1), 35));
  $goToSlide(this$static, prevSlide, 'prev');
}

function $lambda$10_0(this$static){
  var nextSlide;
  $indexOf_1(this$static.slides, this$static.activeSlide, 0) < this$static.slides.array.length - 1?(nextSlide = castTo($get_1(this$static.slides, $indexOf_1(this$static.slides, this$static.activeSlide, 0) + 1), 35)):(nextSlide = castTo($get_1(this$static.slides, 0), 35));
  $goToSlide(this$static, nextSlide, 'next');
}

function $lambda$11(this$static){
  var prevSlide;
  $indexOf_1(this$static.slides, this$static.activeSlide, 0) > 0?(prevSlide = castTo($get_1(this$static.slides, $indexOf_1(this$static.slides, this$static.activeSlide, 0) - 1), 35)):(prevSlide = castTo($get_1(this$static.slides, this$static.slides.array.length - 1), 35));
  $goToSlide(this$static, prevSlide, 'prev');
}

function $lambda$12(this$static, slide_1, source_2){
  var directionStyle;
  $removeCss(new DominoElement(this$static.activeSlide.indicatorElement), 'active');
  directionStyle = $indexOf_1(this$static.slides, slide_1, 0) > $indexOf_1(this$static.slides, this$static.activeSlide, 0) && !$equals_1('prev', source_2) || $equals_1('next', source_2)?'left':'right';
  $addCss_1((slide_1.styleInitializer.apply_1() , slide_1.style_0), directionStyle);
  $addCss(this$static.activeSlide, directionStyle);
  return false;
}

function $lambda$2_3(this$static){
  this$static.attached = false;
  this$static.timer.timerId != null && $cancel(this$static.timer);
  $onAttached(this$static, new Carousel$lambda$3$Type(this$static));
}

function $lambda$3_4(this$static){
  this$static.attached = true;
  this$static.autoSlide && $scheduleRepeating(this$static.timer, this$static.autoSlideDuration);
}

function $lambda$4_3(this$static, slide_1){
  $resetTimer(this$static);
  $goToSlide(this$static, slide_1, '');
}

function $nextSlide(this$static){
  var nextSlide;
  $indexOf_1(this$static.slides, this$static.activeSlide, 0) < this$static.slides.array.length - 1?(nextSlide = castTo($get_1(this$static.slides, $indexOf_1(this$static.slides, this$static.activeSlide, 0) + 1), 35)):(nextSlide = castTo($get_1(this$static.slides, 0), 35));
  $goToSlide(this$static, nextSlide, 'next');
}

function $removeMotionStyles(this$static){
  $removeCss(castTo($removeCss(castTo($removeCss(castTo($removeCss(this$static.activeSlide, 'left'), 35), 'right'), 35), 'next'), 35), 'prev');
  $deActivate(this$static.activeSlide);
  $removeCss(castTo($removeCss(castTo($removeCss(castTo($removeCss(this$static.targetSlide, 'left'), 35), 'right'), 35), 'next'), 35), 'prev');
  $activate(this$static.targetSlide);
  this$static.activeSlide = this$static.targetSlide;
}

function $resetTimer(this$static){
  if (this$static.autoSlide) {
    $cancel(this$static.timer);
    $scheduleRepeating(this$static.timer, this$static.autoSlideDuration);
  }
}

function $startAutoSlide(this$static){
  this$static.autoSlide = true;
  this$static.autoSlideDuration = 10000;
  this$static.attached && $scheduleRepeating(this$static.timer, 10000);
  return this$static;
}

function Carousel(){
  BaseDominoElement.call(this);
  this.indicatorsElement = castToNative(castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('ol'), $wnd.HTMLElement))).element), 'carousel-indicators'), 3).wrappedElement, $wnd.HTMLOListElement);
  this.slidesElement = castToNative(castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), 'carousel-inner'), 3).wrappedElement, $wnd.HTMLDivElement);
  this.prevElement = castToNative(castTo($appendChild_0(castTo($setAttribute_0(castTo($css_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('a'), $wnd.HTMLElement))).element), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['left', 'carousel-control'])), 3), 'role', 'button'), 3), $setFontSize(castTo($addCss(create_12('chevron_left'), 'v-center'), 56), '60px')), 3).wrappedElement, $wnd.HTMLAnchorElement);
  this.nextElement = castToNative(castTo($appendChild_0(castTo($setAttribute_0(castTo($css_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('a'), $wnd.HTMLElement))).element), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['right', 'carousel-control'])), 3), 'role', 'button'), 3), $setFontSize(castTo($addCss(create_12('chevron_right'), 'v-center'), 56), '60px')), 3).wrappedElement, $wnd.HTMLAnchorElement);
  this.element = castToNative(castTo($css(castTo($appendChild(castTo($appendChild(castTo($appendChild(castTo($appendChild(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), this.indicatorsElement), 3), this.slidesElement), 3), this.prevElement), 3), this.nextElement), 3), 'carousel'), 3).wrappedElement, $wnd.HTMLDivElement);
  this.slides = new ArrayList;
  this.nextElement.addEventListener('click', new Carousel$lambda$0$Type(this));
  this.prevElement.addEventListener('click', new Carousel$lambda$1$Type(this));
  this.timer = new Carousel$1(this);
  $init(this, this);
  $onAttached(this, new Carousel$lambda$3$Type(this));
  $onDetached(this, new Carousel$lambda$2$Type(this));
}

defineClass(637, 12, $intern_15, Carousel);
_.element_3 = function element_11(){
  return this.element;
}
;
_.attached = false;
_.autoSlide = false;
_.autoSlideDuration = 3000;
var Lorg_dominokit_domino_ui_carousel_Carousel_2_classLit = createForClass('org.dominokit.domino.ui.carousel', 'Carousel', 637);
function Carousel$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(640, 108, {}, Carousel$1);
_.run = function run_0(){
  $nextSlide(this.this$01);
}
;
var Lorg_dominokit_domino_ui_carousel_Carousel$1_2_classLit = createForClass('org.dominokit.domino.ui.carousel', 'Carousel/1', 640);
function Carousel$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(638, 1, {}, Carousel$lambda$0$Type);
_.handleEvent = function handleEvent_14(arg0){
  $lambda$0_13(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_carousel_Carousel$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.carousel', 'Carousel/lambda$0$Type', 638);
function Carousel$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(639, 1, {}, Carousel$lambda$1$Type);
_.handleEvent = function handleEvent_15(arg0){
  $lambda$1_5(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_carousel_Carousel$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.carousel', 'Carousel/lambda$1$Type', 639);
function Carousel$lambda$10$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(648, 1, {}, Carousel$lambda$10$Type);
_.handleEvent = function handleEvent_16(arg0){
  $lambda$10_0(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_carousel_Carousel$lambda$10$Type_2_classLit = createForClass('org.dominokit.domino.ui.carousel', 'Carousel/lambda$10$Type', 648);
function Carousel$lambda$11$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(649, 1, {}, Carousel$lambda$11$Type);
_.handleEvent = function handleEvent_17(arg0){
  $lambda$11(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_carousel_Carousel$lambda$11$Type_2_classLit = createForClass('org.dominokit.domino.ui.carousel', 'Carousel/lambda$11$Type', 649);
function Carousel$lambda$12$Type($$outer_0, slide_1, source_2){
  this.$$outer_0 = $$outer_0;
  this.slide_1 = slide_1;
  this.source_2 = source_2;
}

defineClass(650, 1, {}, Carousel$lambda$12$Type);
_.execute_0 = function execute_6(){
  return $lambda$12(this.$$outer_0, this.slide_1, this.source_2);
}
;
var Lorg_dominokit_domino_ui_carousel_Carousel$lambda$12$Type_2_classLit = createForClass('org.dominokit.domino.ui.carousel', 'Carousel/lambda$12$Type', 650);
function Carousel$lambda$2$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(641, 1, $intern_30, Carousel$lambda$2$Type);
_.onObserved = function onObserved(arg0){
  $lambda$2_3(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_carousel_Carousel$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.carousel', 'Carousel/lambda$2$Type', 641);
function Carousel$lambda$3$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(236, 1, $intern_30, Carousel$lambda$3$Type);
_.onObserved = function onObserved_0(arg0){
  $lambda$3_4(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_carousel_Carousel$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.ui.carousel', 'Carousel/lambda$3$Type', 236);
function Carousel$lambda$4$Type($$outer_0, slide_1){
  this.$$outer_0 = $$outer_0;
  this.slide_1 = slide_1;
}

defineClass(642, 1, {}, Carousel$lambda$4$Type);
_.handleEvent = function handleEvent_18(arg0){
  $lambda$4_3(this.$$outer_0, this.slide_1);
}
;
var Lorg_dominokit_domino_ui_carousel_Carousel$lambda$4$Type_2_classLit = createForClass('org.dominokit.domino.ui.carousel', 'Carousel/lambda$4$Type', 642);
function Carousel$lambda$5$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(643, 1, {}, Carousel$lambda$5$Type);
_.handleEvent = function handleEvent_19(arg0){
  $removeMotionStyles(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_carousel_Carousel$lambda$5$Type_2_classLit = createForClass('org.dominokit.domino.ui.carousel', 'Carousel/lambda$5$Type', 643);
function Carousel$lambda$6$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(644, 1, {}, Carousel$lambda$6$Type);
_.handleEvent = function handleEvent_20(arg0){
  $removeMotionStyles(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_carousel_Carousel$lambda$6$Type_2_classLit = createForClass('org.dominokit.domino.ui.carousel', 'Carousel/lambda$6$Type', 644);
function Carousel$lambda$7$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(645, 1, {}, Carousel$lambda$7$Type);
_.handleEvent = function handleEvent_21(arg0){
  $removeMotionStyles(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_carousel_Carousel$lambda$7$Type_2_classLit = createForClass('org.dominokit.domino.ui.carousel', 'Carousel/lambda$7$Type', 645);
function Carousel$lambda$8$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(646, 1, {}, Carousel$lambda$8$Type);
_.handleEvent = function handleEvent_22(arg0){
  $removeMotionStyles(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_carousel_Carousel$lambda$8$Type_2_classLit = createForClass('org.dominokit.domino.ui.carousel', 'Carousel/lambda$8$Type', 646);
function Carousel$lambda$9$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(647, 1, {}, Carousel$lambda$9$Type);
_.handleEvent = function handleEvent_23(arg0){
  $removeMotionStyles(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_carousel_Carousel$lambda$9$Type_2_classLit = createForClass('org.dominokit.domino.ui.carousel', 'Carousel/lambda$9$Type', 647);
function $activate(this$static){
  $containsCss_0(new Style(new Style$lambda$0$Type(this$static.indicatorElement)), 'active') || $addCss_1(new Style(new Style$lambda$0$Type(this$static.indicatorElement)), 'active');
  $containsCss_0((this$static.styleInitializer.apply_1() , this$static.style_0), 'active') || ($addCss_1((this$static.styleInitializer.apply_1() , this$static.style_0), 'active') , this$static);
  return this$static;
}

function $deActivate(this$static){
  $removeCss_1(new Style(new Style$lambda$0$Type(this$static.indicatorElement)), 'active');
  $removeCss_1((this$static.styleInitializer.apply_1() , this$static.style_0), 'active');
}

function Slide(image){
  BaseDominoElement.call(this);
  this.indicatorElement = castToNative((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('li'), $wnd.HTMLElement))).element, $wnd.HTMLLIElement);
  this.slideLabelElement = castToNative((new HtmlContentBuilder(castToNative(document_0.createElement('h3'), $wnd.HTMLElement))).element, $wnd.HTMLHeadingElement);
  this.slideDescriptionElement = castToNative((new HtmlContentBuilder(castToNative(document_0.createElement('p'), $wnd.HTMLElement))).element, $wnd.HTMLParagraphElement);
  castToNative(castTo($css(castTo($appendChild(castTo($appendChild(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), this.slideLabelElement), 3), this.slideDescriptionElement), 3), 'carousel-caption'), 3).wrappedElement, $wnd.HTMLDivElement);
  this.slideElement = castToNative(castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), 'item'), 3).wrappedElement, $wnd.HTMLDivElement);
  this.slideElement.appendChild(image);
  $init(this, this);
}

function Slide_0(imageSrc){
  Slide.call(this, castToNative(castTo($attr_0(new EmptyContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('img'), $wnd.HTMLElement)), 'src', imageSrc), 71).element, $wnd.HTMLImageElement));
}

defineClass(35, 12, {35:1, 12:1, 15:1}, Slide_0);
_.element_3 = function element_12(){
  return this.slideElement;
}
;
var Lorg_dominokit_domino_ui_carousel_Slide_2_classLit = createForClass('org.dominokit.domino.ui.carousel', 'Slide', 35);
function $setHideDuration(this$static, hideDuration){
  this$static.hideDuration = hideDuration;
  return this$static;
}

function $setHideTransition(this$static, hideTransition){
  this$static.hideTransition = hideTransition;
  return this$static;
}

function $setShowDuration(this$static, showDuration){
  this$static.showDuration = showDuration;
  return this$static;
}

function $setShowTransition(this$static, showTransition){
  this$static.showTransition = showTransition;
  return this$static;
}

function AnimationCollapseOptions(){
}

defineClass(473, 1, {}, AnimationCollapseOptions);
var Lorg_dominokit_domino_ui_collapsible_AnimationCollapseOptions_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'AnimationCollapseOptions', 473);
function $lambda$0_14(this$static, style_1, element_2){
  this$static.showing = true;
  if (this$static.hideAnimation) {
    $stop(this$static.hideAnimation, true);
    this$static.hideAnimation = null;
    this$static.hiding = false;
  }
  style_1.element.style.removeProperty('display');
  $removeAttribute(new DominoElement(element_2), 'd-collapsed');
  $forEach_0((new Collapsible$1$0methodref$onBeforeShow$Type(this$static.handlers.this$01)).$$outer_0.beforeShowHandlers, new Collapsible$7methodref$apply$Type);
}

function $lambda$1_6(this$static){
  this$static.showing = false;
  $forEach_0((new Collapsible$1$1methodref$onShowCompleted$Type(this$static.handlers.this$01)).$$outer_0.showHandlers, new Collapsible$6methodref$apply$Type);
}

function $lambda$3_5(this$static){
  this$static.hiding = true;
  $forEach_0((new Collapsible$1$2methodref$onBeforeHide$Type(this$static.handlers.this$01)).$$outer_0.beforeHideHandlers, new Collapsible$5methodref$apply$Type);
}

function $lambda$4_4(this$static, style_1, element_2){
  style_1.element.style.setProperty('display', 'none');
  $setAttribute_0(new DominoElement(element_2), 'd-collapsed', 'true');
  this$static.hiding = false;
  $forEach_0((new Collapsible$1$3methodref$onHideCompleted$Type(this$static.handlers.this$01)).$$outer_0.hideHandlers, new Collapsible$4methodref$apply$Type);
}

function AnimationCollapseStrategy(showTransition, hideTransition, duration){
  this.options = $setHideDuration($setShowDuration($setHideTransition($setShowTransition(new AnimationCollapseOptions, showTransition), hideTransition), duration), duration);
}

defineClass(221, 1, {}, AnimationCollapseStrategy);
_.cleanup = function cleanup(element, style){
}
;
_.hide = function hide(element, style){
  $ifPresent(ofNullable(this.showAnimation), new AnimationCollapseStrategy$lambda$2$Type);
  if (!this.hiding) {
    $removeCss(new DominoElement(element), this.options.showDuration.style_0);
    $removeCss(new DominoElement(element), this.options.hideDuration.style_0);
    this.hideAnimation = $animate($callback($beforeStart($transition($duration(new Animation_0(element), this.options.hideDuration.duration), this.options.hideTransition), new AnimationCollapseStrategy$lambda$3$Type(this)), new AnimationCollapseStrategy$lambda$4$Type(this, style, element)));
  }
}
;
_.init = function init_0(element, style, handlers){
  this.handlers = handlers;
}
;
_.show_0 = function show(element, style){
  if (!this.showing) {
    $removeCss(new DominoElement(element), this.options.showDuration.style_0);
    $removeCss(new DominoElement(element), this.options.hideDuration.style_0);
    this.showAnimation = $animate($callback($beforeStart($delay($transition($duration(new Animation_0(element), this.options.showDuration.duration), this.options.showTransition), 0), new AnimationCollapseStrategy$lambda$0$Type(this, style, element)), new AnimationCollapseStrategy$lambda$1$Type(this)));
  }
}
;
_.hiding = false;
_.showing = false;
var Lorg_dominokit_domino_ui_collapsible_AnimationCollapseStrategy_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'AnimationCollapseStrategy', 221);
function AnimationCollapseStrategy$lambda$0$Type($$outer_0, style_1, element_2){
  this.$$outer_0 = $$outer_0;
  this.style_1 = style_1;
  this.element_2 = element_2;
}

defineClass(464, 1, {}, AnimationCollapseStrategy$lambda$0$Type);
_.beforeStart = function beforeStart_0(arg0){
  $lambda$0_14(this.$$outer_0, this.style_1, this.element_2);
}
;
var Lorg_dominokit_domino_ui_collapsible_AnimationCollapseStrategy$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'AnimationCollapseStrategy/lambda$0$Type', 464);
function AnimationCollapseStrategy$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(465, 1, {}, AnimationCollapseStrategy$lambda$1$Type);
_.onComplete = function onComplete_2(arg0){
  $lambda$1_6(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_collapsible_AnimationCollapseStrategy$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'AnimationCollapseStrategy/lambda$1$Type', 465);
function AnimationCollapseStrategy$lambda$2$Type(){
}

defineClass(466, 1, {}, AnimationCollapseStrategy$lambda$2$Type);
_.accept = function accept_38(arg0){
  $stop(castTo(arg0, 85), false);
}
;
var Lorg_dominokit_domino_ui_collapsible_AnimationCollapseStrategy$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'AnimationCollapseStrategy/lambda$2$Type', 466);
function AnimationCollapseStrategy$lambda$3$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(467, 1, {}, AnimationCollapseStrategy$lambda$3$Type);
_.beforeStart = function beforeStart_1(arg0){
  $lambda$3_5(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_collapsible_AnimationCollapseStrategy$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'AnimationCollapseStrategy/lambda$3$Type', 467);
function AnimationCollapseStrategy$lambda$4$Type($$outer_0, style_1, element_2){
  this.$$outer_0 = $$outer_0;
  this.style_1 = style_1;
  this.element_2 = element_2;
}

defineClass(468, 1, {}, AnimationCollapseStrategy$lambda$4$Type);
_.onComplete = function onComplete_3(arg0){
  $lambda$4_4(this.$$outer_0, this.style_1, this.element_2);
}
;
var Lorg_dominokit_domino_ui_collapsible_AnimationCollapseStrategy$lambda$4$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'AnimationCollapseStrategy/lambda$4$Type', 468);
function $clinit_CollapseDuration(){
  $clinit_CollapseDuration = emptyMethod;
  _100ms = new CollapseDuration('_100ms', 0, 'height-collapsed-trans-100', 100);
  _200ms = new CollapseDuration('_200ms', 1, 'height-collapsed-trans-200', 200);
  _300ms = new CollapseDuration('_300ms', 2, 'height-collapsed-trans-300', 300);
  _400ms = new CollapseDuration('_400ms', 3, 'height-collapsed-trans-400', 400);
  _500ms = new CollapseDuration('_500ms', 4, 'height-collapsed-trans-500', 500);
  _600ms = new CollapseDuration('_600ms', 5, 'height-collapsed-trans-600', 600);
  _700ms = new CollapseDuration('_700ms', 6, 'height-collapsed-trans-700', 700);
  _800ms = new CollapseDuration('_800ms', 7, 'height-collapsed-trans-800', 800);
  _900ms = new CollapseDuration('_900ms', 8, 'height-collapsed-trans-900', 900);
  _1000ms = new CollapseDuration('_1000ms', 9, 'height-collapsed-trans-1000', $intern_28);
}

function CollapseDuration(enum$name, enum$ordinal, style, duration){
  Enum.call(this, enum$name, enum$ordinal);
  this.style_0 = style;
  this.duration = duration;
}

function values_6(){
  $clinit_CollapseDuration();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_collapsible_CollapseDuration_2_classLit, 1), $intern_0, 59, 0, [_100ms, _200ms, _300ms, _400ms, _500ms, _600ms, _700ms, _800ms, _900ms, _1000ms]);
}

defineClass(59, 21, {4:1, 34:1, 21:1, 59:1}, CollapseDuration);
_.duration = 0;
var _1000ms, _100ms, _200ms, _300ms, _400ms, _500ms, _600ms, _700ms, _800ms, _900ms;
var Lorg_dominokit_domino_ui_collapsible_CollapseDuration_2_classLit = createForEnum('org.dominokit.domino.ui.collapsible', 'CollapseDuration', 59, values_6);
function $addHideHandler(this$static, handler){
  $add_0(this$static.hideHandlers, handler);
  return this$static;
}

function $addShowHandler(this$static, handler){
  $add_0(this$static.showHandlers, handler);
  return this$static;
}

function $hide_0(this$static){
  this$static.strategy.hide(this$static.element, this$static.style_0);
  this$static.element.setAttribute('aria-expanded', 'false');
  this$static.collapsed = true;
  return this$static;
}

function $isCollapsed(this$static){
  return this$static.collapsed || $hasAttribute(new DominoElement(this$static.element), 'd-collapsed');
}

function $setStrategy(this$static, strategy){
  this$static.strategy.cleanup(this$static.element, this$static.style_0);
  this$static.strategy = strategy;
  this$static.strategy.init(this$static.element, this$static.style_0, this$static.handlers);
  return this$static;
}

function $show_1(this$static){
  this$static.strategy.show_0(this$static.element, this$static.style_0);
  this$static.element.setAttribute('aria-expanded', 'true');
  this$static.collapsed = false;
  return this$static;
}

function $toggleDisplay_0(this$static){
  this$static.collapsed || $hasAttribute(new DominoElement(this$static.element), 'd-collapsed')?$show_1(this$static):$hide_0(this$static);
  return this$static;
}

function $toggleDisplay_1(this$static, state){
  state?$show_1(this$static):$hide_0(this$static);
  return this$static;
}

function Collapsible(element){
  this.hideHandlers = new ArrayList;
  this.beforeHideHandlers = new ArrayList;
  this.showHandlers = new ArrayList;
  this.beforeShowHandlers = new ArrayList;
  this.strategy = new DisplayCollapseStrategy;
  this.element = element;
  this.style_0 = new Style(new Style$lambda$0$Type(element));
  this.handlers = new Collapsible$1(this);
  this.strategy.init(element, new Style(new Style$lambda$0$Type(element)), this.handlers);
}

defineClass(87, 1, $intern_31, Collapsible);
_.element_3 = function element_13(){
  return this.element;
}
;
_.collapsed = false;
var Lorg_dominokit_domino_ui_collapsible_Collapsible_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'Collapsible', 87);
function Collapsible$1(this$0){
  this.this$01 = this$0;
}

defineClass(487, 1, {}, Collapsible$1);
var Lorg_dominokit_domino_ui_collapsible_Collapsible$1_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'Collapsible/1', 487);
function Collapsible$1$0methodref$onBeforeShow$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(177, 1, $intern_32, Collapsible$1$0methodref$onBeforeShow$Type);
_.run = function run_1(){
  $forEach_0(this.$$outer_0.beforeShowHandlers, new Collapsible$7methodref$apply$Type);
}
;
var Lorg_dominokit_domino_ui_collapsible_Collapsible$1$0methodref$onBeforeShow$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'Collapsible/1/0methodref$onBeforeShow$Type', 177);
function Collapsible$1$1methodref$onShowCompleted$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(178, 1, $intern_32, Collapsible$1$1methodref$onShowCompleted$Type);
_.run = function run_2(){
  $forEach_0(this.$$outer_0.showHandlers, new Collapsible$6methodref$apply$Type);
}
;
var Lorg_dominokit_domino_ui_collapsible_Collapsible$1$1methodref$onShowCompleted$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'Collapsible/1/1methodref$onShowCompleted$Type', 178);
function Collapsible$1$2methodref$onBeforeHide$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(150, 1, $intern_32, Collapsible$1$2methodref$onBeforeHide$Type);
_.run = function run_3(){
  $forEach_0(this.$$outer_0.beforeHideHandlers, new Collapsible$5methodref$apply$Type);
}
;
var Lorg_dominokit_domino_ui_collapsible_Collapsible$1$2methodref$onBeforeHide$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'Collapsible/1/2methodref$onBeforeHide$Type', 150);
function Collapsible$1$3methodref$onHideCompleted$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(151, 1, $intern_32, Collapsible$1$3methodref$onHideCompleted$Type);
_.run = function run_4(){
  $forEach_0(this.$$outer_0.hideHandlers, new Collapsible$4methodref$apply$Type);
}
;
var Lorg_dominokit_domino_ui_collapsible_Collapsible$1$3methodref$onHideCompleted$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'Collapsible/1/3methodref$onHideCompleted$Type', 151);
function Collapsible$4methodref$apply$Type(){
}

defineClass(126, 1, {}, Collapsible$4methodref$apply$Type);
_.accept = function accept_39(arg0){
  castTo(arg0, 197).apply_1();
}
;
var Lorg_dominokit_domino_ui_collapsible_Collapsible$4methodref$apply$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'Collapsible/4methodref$apply$Type', 126);
function Collapsible$5methodref$apply$Type(){
}

defineClass(127, 1, {}, Collapsible$5methodref$apply$Type);
_.accept = function accept_40(arg0){
  castTo(arg0, 197).apply_1();
}
;
var Lorg_dominokit_domino_ui_collapsible_Collapsible$5methodref$apply$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'Collapsible/5methodref$apply$Type', 127);
function Collapsible$6methodref$apply$Type(){
}

defineClass(152, 1, {}, Collapsible$6methodref$apply$Type);
_.accept = function accept_41(arg0){
  $lambda$3_11(castTo(arg0, 794).$$outer_0);
}
;
var Lorg_dominokit_domino_ui_collapsible_Collapsible$6methodref$apply$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'Collapsible/6methodref$apply$Type', 152);
function Collapsible$7methodref$apply$Type(){
}

defineClass(153, 1, {}, Collapsible$7methodref$apply$Type);
_.accept = function accept_42(arg0){
  $lambda$3_11(castTo(arg0, 794).$$outer_0);
}
;
var Lorg_dominokit_domino_ui_collapsible_Collapsible$7methodref$apply$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'Collapsible/7methodref$apply$Type', 153);
function DisplayCollapseStrategy(){
}

defineClass(462, 1, {}, DisplayCollapseStrategy);
_.cleanup = function cleanup_0(element, style){
}
;
_.hide = function hide_0(element, style){
  $forEach_0((new Collapsible$1$2methodref$onBeforeHide$Type(this.handlers.this$01)).$$outer_0.beforeHideHandlers, new Collapsible$5methodref$apply$Type);
  style.element.style.setProperty('display', 'none');
  $setAttribute_0(new DominoElement(element), 'd-collapsed', 'true');
  $forEach_0((new Collapsible$1$3methodref$onHideCompleted$Type(this.handlers.this$01)).$$outer_0.hideHandlers, new Collapsible$4methodref$apply$Type);
}
;
_.init = function init_1(element, style, handlers){
  this.handlers = handlers;
}
;
_.show_0 = function show_0(element, style){
  style.element.style.removeProperty('display');
  $removeAttribute(new DominoElement(element), 'd-collapsed');
  $forEach_0((new Collapsible$1$0methodref$onBeforeShow$Type(this.handlers.this$01)).$$outer_0.beforeShowHandlers, new Collapsible$7methodref$apply$Type);
  $forEach_0((new Collapsible$1$1methodref$onShowCompleted$Type(this.handlers.this$01)).$$outer_0.showHandlers, new Collapsible$6methodref$apply$Type);
}
;
var Lorg_dominokit_domino_ui_collapsible_DisplayCollapseStrategy_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'DisplayCollapseStrategy', 462);
function $collapseElement(element, style, useAnimationFrame){
  var elementToCollapse, originalHeight, scrollHeight;
  elementToCollapse = new DominoElement(element);
  scrollHeight = element.scrollHeight;
  style.element.classList.remove('height-collapsed-overflow');
  originalHeight = element.style.height;
  element.style.height = scrollHeight + 'px';
  if (useAnimationFrame) {
    $wnd.goog.global.requestAnimationFrame(makeLambdaFunction(TreeHeightCollapseStrategy$lambda$7$Type.prototype.onInvoke_1, TreeHeightCollapseStrategy$lambda$7$Type, [style, elementToCollapse, originalHeight, scrollHeight]));
  }
   else {
    style.element.classList.add('height-collapsed-overflow');
    style.element.classList.add('height-collapsed');
    $setAttribute_0((elementToCollapse.wrappedElement.setAttribute('dom-ui-collapse-height', originalHeight) , castTo(elementToCollapse.element_0, 3)), 'd-collapsed', 'true');
    style.element.style.removeProperty('height');
  }
}

function $lambda$0_15(this$static, element_1, style_2, self_2){
  $nowOrWhenAttached(self_2, new TreeHeightCollapseStrategy$lambda$1$Type(this$static, element_1, style_2));
}

function $lambda$1_7(this$static, element_1, style_2){
  var theElement, stopListener, scrollHeight, addEventListenerOptions, desiredHeight;
  $forEach_0((new Collapsible$1$0methodref$onBeforeShow$Type(this$static.handlers.this$01)).$$outer_0.beforeShowHandlers, new Collapsible$7methodref$apply$Type);
  theElement = new DominoElement(element_1);
  $containsCss_0((theElement.styleInitializer.apply_1() , theElement.style_0), 'height-collapsed') || ($addCss_1((theElement.styleInitializer.apply_1() , theElement.style_0), 'height-collapsed') , theElement.element_0);
  stopListener = new TreeHeightCollapseStrategy$lambda$2$Type(this$static, element_1, theElement);
  scrollHeight = element_1.getAttribute('dom-ui-scroll-height');
  addEventListenerOptions = {};
  addEventListenerOptions.once = true;
  element_1.addEventListener('webkitTransitionEnd', stopListener, addEventListenerOptions);
  element_1.addEventListener('MSTransitionEnd', stopListener, addEventListenerOptions);
  element_1.addEventListener('mozTransitionEnd', stopListener, addEventListenerOptions);
  element_1.addEventListener('oanimationend', stopListener, addEventListenerOptions);
  element_1.addEventListener('animationend', stopListener, addEventListenerOptions);
  desiredHeight = scrollHeight == null?element_1.scrollHeight:$wnd.Math.max(__parseAndValidateInt(scrollHeight), element_1.scrollHeight);
  element_1.style.height = desiredHeight + 'px';
  'height-collapsed'.length != 0 && style_2.element.classList.remove('height-collapsed');
  $removeAttribute((theElement.wrappedElement.removeAttribute('d-collapsed') , castTo(theElement.element_0, 3)), 'dom-ui-scroll-height');
}

function $lambda$2_4(this$static, element_1, theElement_2){
  var collapseHeight;
  collapseHeight = element_1.getAttribute('dom-ui-collapse-height');
  theElement_2.wrappedElement.removeAttribute('dom-ui-collapse-height');
  element_1.style.height = collapseHeight;
  $resetParentHeight(this$static, this$static.treeItem);
  $forEach_0((new Collapsible$1$1methodref$onShowCompleted$Type(this$static.handlers.this$01)).$$outer_0.showHandlers, new Collapsible$6methodref$apply$Type);
}

function $lambda$3_6(this$static, parent_0){
  parent_0.childrenContainer.style.height = null;
  $ifPresent(instanceOf(parent_0.parent_0, 27)?($clinit_Optional() , new Optional(checkCriticalNotNull(castTo(parent_0.parent_0, 27)))):($clinit_Optional() , $clinit_Optional() , EMPTY), new TreeHeightCollapseStrategy$lambda$4$Type(this$static, parent_0));
}

function $lambda$4_5(this$static, parent_1){
  $ifPresent(instanceOf(parent_1.parent_0, 27)?($clinit_Optional() , new Optional(checkCriticalNotNull(castTo(parent_1.parent_0, 27)))):($clinit_Optional() , $clinit_Optional() , EMPTY), new TreeHeightCollapseStrategy$lambda$3$Type(this$static));
}

function $lambda$5(this$static, element_1, style_2, self_2){
  self_2.dominoUuidInitializer.apply_1();
  if (($clinit_DomGlobal() , document_0).body.querySelector("[domino-uuid='" + self_2.uuid + "']") != null) {
    $forEach_0((new Collapsible$1$2methodref$onBeforeHide$Type(this$static.handlers.this$01)).$$outer_0.beforeHideHandlers, new Collapsible$5methodref$apply$Type);
    $collapseElement(element_1, style_2, true);
    $forEach_0((new Collapsible$1$3methodref$onHideCompleted$Type(this$static.handlers.this$01)).$$outer_0.hideHandlers, new Collapsible$4methodref$apply$Type);
  }
   else {
    $onAttached(self_2, new TreeHeightCollapseStrategy$lambda$6$Type(this$static, style_2, element_1));
  }
}

function $lambda$6_1(this$static, style_1, element_2){
  $forEach_0((new Collapsible$1$2methodref$onBeforeHide$Type(this$static.handlers.this$01)).$$outer_0.beforeHideHandlers, new Collapsible$5methodref$apply$Type);
  $removeCss_1(style_1, this$static.transition.style_0);
  $collapseElement(element_2, style_1, false);
  $addCss_1(style_1, this$static.transition.style_0);
  $forEach_0((new Collapsible$1$3methodref$onHideCompleted$Type(this$static.handlers.this$01)).$$outer_0.hideHandlers, new Collapsible$4methodref$apply$Type);
}

function $resetParentHeight(this$static, treeItem){
  $ifPresent(instanceOf(treeItem.parent_0, 27)?($clinit_Optional() , new Optional(checkCriticalNotNull(castTo(treeItem.parent_0, 27)))):($clinit_Optional() , $clinit_Optional() , EMPTY), new TreeHeightCollapseStrategy$lambda$3$Type(this$static));
}

function TreeHeightCollapseStrategy(treeItem){
  this.treeItem = treeItem;
  this.transition = ($clinit_CollapseDuration() , _200ms);
}

function lambda$7_2(style_0, elementToCollapse_1, originalHeight_2, scrollHeight_3){
  'height-collapsed-overflow'.length != 0 && style_0.element.classList.add('height-collapsed-overflow');
  'height-collapsed'.length != 0 && style_0.element.classList.add('height-collapsed');
  $setAttribute(castTo($setAttribute_0((elementToCollapse_1.wrappedElement.setAttribute('dom-ui-collapse-height', originalHeight_2) , castTo(elementToCollapse_1.element_0, 3)), 'd-collapsed', 'true'), 3), 'dom-ui-scroll-height', scrollHeight_3);
}

defineClass(743, 1, {}, TreeHeightCollapseStrategy);
_.cleanup = function cleanup_1(element, style){
  style.element.classList.add('height-collapsed-overflow');
  $addCss_1(style, this.transition.style_0);
  element.removeAttribute('dom-ui-collapse-height');
}
;
_.hide = function hide_1(element, style){
  $apply(new DominoElement(element), new TreeHeightCollapseStrategy$lambda$5$Type(this, element, style));
}
;
_.init = function init_2(element, style, handlers){
  this.handlers = handlers;
  style.element.classList.add('height-collapsed-overflow');
  $addCss_1(style, this.transition.style_0);
}
;
_.show_0 = function show_1(element, style){
  $apply(new DominoElement(element), new TreeHeightCollapseStrategy$lambda$0$Type(this, element, style));
}
;
var Lorg_dominokit_domino_ui_collapsible_TreeHeightCollapseStrategy_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'TreeHeightCollapseStrategy', 743);
function TreeHeightCollapseStrategy$lambda$0$Type($$outer_0, element_1, style_2){
  this.$$outer_0 = $$outer_0;
  this.element_1 = element_1;
  this.style_2 = style_2;
}

defineClass(745, 1, {}, TreeHeightCollapseStrategy$lambda$0$Type);
_.handleElement = function handleElement(arg0){
  $lambda$0_15(this.$$outer_0, this.element_1, this.style_2, castTo(arg0, 3));
}
;
var Lorg_dominokit_domino_ui_collapsible_TreeHeightCollapseStrategy$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'TreeHeightCollapseStrategy/lambda$0$Type', 745);
function TreeHeightCollapseStrategy$lambda$1$Type($$outer_0, element_1, style_2){
  this.$$outer_0 = $$outer_0;
  this.element_1 = element_1;
  this.style_2 = style_2;
}

defineClass(744, 1, $intern_32, TreeHeightCollapseStrategy$lambda$1$Type);
_.run = function run_5(){
  $lambda$1_7(this.$$outer_0, this.element_1, this.style_2);
}
;
var Lorg_dominokit_domino_ui_collapsible_TreeHeightCollapseStrategy$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'TreeHeightCollapseStrategy/lambda$1$Type', 744);
function TreeHeightCollapseStrategy$lambda$2$Type($$outer_0, element_1, theElement_2){
  this.$$outer_0 = $$outer_0;
  this.element_1 = element_1;
  this.theElement_2 = theElement_2;
}

defineClass(746, 1, {}, TreeHeightCollapseStrategy$lambda$2$Type);
_.handleEvent = function handleEvent_24(arg0){
  $lambda$2_4(this.$$outer_0, this.element_1, this.theElement_2);
}
;
var Lorg_dominokit_domino_ui_collapsible_TreeHeightCollapseStrategy$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'TreeHeightCollapseStrategy/lambda$2$Type', 746);
function TreeHeightCollapseStrategy$lambda$3$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(245, 1, {}, TreeHeightCollapseStrategy$lambda$3$Type);
_.accept = function accept_43(arg0){
  $lambda$3_6(this.$$outer_0, castTo(arg0, 27));
}
;
var Lorg_dominokit_domino_ui_collapsible_TreeHeightCollapseStrategy$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'TreeHeightCollapseStrategy/lambda$3$Type', 245);
function TreeHeightCollapseStrategy$lambda$4$Type($$outer_0, parent_1){
  this.$$outer_0 = $$outer_0;
  this.parent_1 = parent_1;
}

defineClass(747, 1, {}, TreeHeightCollapseStrategy$lambda$4$Type);
_.accept = function accept_44(arg0){
  var lastArg;
  $lambda$4_5(this.$$outer_0, (lastArg = this.parent_1 , castTo(arg0, 27) , lastArg));
}
;
var Lorg_dominokit_domino_ui_collapsible_TreeHeightCollapseStrategy$lambda$4$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'TreeHeightCollapseStrategy/lambda$4$Type', 747);
function TreeHeightCollapseStrategy$lambda$5$Type($$outer_0, element_1, style_2){
  this.$$outer_0 = $$outer_0;
  this.element_1 = element_1;
  this.style_2 = style_2;
}

defineClass(749, 1, {}, TreeHeightCollapseStrategy$lambda$5$Type);
_.handleElement = function handleElement_0(arg0){
  $lambda$5(this.$$outer_0, this.element_1, this.style_2, castTo(arg0, 3));
}
;
var Lorg_dominokit_domino_ui_collapsible_TreeHeightCollapseStrategy$lambda$5$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'TreeHeightCollapseStrategy/lambda$5$Type', 749);
function TreeHeightCollapseStrategy$lambda$6$Type($$outer_0, style_1, element_2){
  this.$$outer_0 = $$outer_0;
  this.style_1 = style_1;
  this.element_2 = element_2;
}

defineClass(748, 1, $intern_30, TreeHeightCollapseStrategy$lambda$6$Type);
_.onObserved = function onObserved_1(arg0){
  $lambda$6_1(this.$$outer_0, this.style_1, this.element_2);
}
;
var Lorg_dominokit_domino_ui_collapsible_TreeHeightCollapseStrategy$lambda$6$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'TreeHeightCollapseStrategy/lambda$6$Type', 748);
function TreeHeightCollapseStrategy$lambda$7$Type(style_0, elementToCollapse_1, originalHeight_2, scrollHeight_3){
  this.style_0 = style_0;
  this.elementToCollapse_1 = elementToCollapse_1;
  this.originalHeight_2 = originalHeight_2;
  this.scrollHeight_3 = scrollHeight_3;
}

defineClass(888, $wnd.Function, {}, TreeHeightCollapseStrategy$lambda$7$Type);
_.onInvoke_1 = function onInvoke_1(arg0){
  lambda$7_2(this.style_0, this.elementToCollapse_1, this.originalHeight_2, this.scrollHeight_3);
}
;
_.scrollHeight_3 = 0;
function $clinit_IsPopup(){
  $clinit_IsPopup = emptyMethod;
  $clinit_PopupsCloser();
}

function $clinit_BaseModal(){
  $clinit_BaseModal = emptyMethod;
  $clinit_IsPopup();
}

function $addOpenListener(this$static, openHandler){
  $add_0(this$static.openHandlers, openHandler);
  return this$static;
}

function $appendFooterChild(this$static, content_0){
  $appendChild(this$static.modalElement.modalFooter, content_0);
  return this$static;
}

function $close(this$static){
  var openedDialogs;
  this$static.open_0 && !$isCollapsed((!this$static.collapsible_0 && (this$static.collapsible_0 = new Collapsible(castToNative(this$static.modalElement.root_0.wrappedElement, $wnd.HTMLDivElement))) , this$static.collapsible_0))?($hide_0((!this$static.collapsible_0 && (this$static.collapsible_0 = new Collapsible(castToNative(this$static.modalElement.root_0.wrappedElement, $wnd.HTMLDivElement))) , this$static.collapsible_0)) , this$static.element_0):$doClose(this$static);
  ($clinit_DomGlobal() , document_0).body.classList.remove('modal-open');
  $clinit_ModalBackDrop();
  openedDialogs = $querySelectorAll(new DominoElement(document_0.body), ".modal.fade.in:not([class*='window']), .modal.fade.in.window.maximized");
  openedDialogs.isEmpty()?$removeCss(new DominoElement(document_0.body), 'modal-open'):$containsCss(new DominoElement(document_0.body), 'modal-open') || $addCss(new DominoElement(document_0.body), 'modal-open');
  return this$static;
}

function $doClose(this$static){
  this$static.activeElementBeforeOpen != null && this$static.activeElementBeforeOpen.focus();
  this$static.autoAppendAndRemove && castToNative(this$static.modalElement.root_0.wrappedElement, $wnd.HTMLDivElement).remove();
  this$static.open_0 = false;
  $onPopupClose(($clinit_DominoUIConfig() , INSTANCE_15).zindexManager, this$static);
  $forEach_0(this$static.closeHandlers, new BaseModal$2methodref$onClose$Type);
}

function $handleBackwardTab(this$static, evt){
  if (equals_Ljava_lang_Object__Z__devirtual$($wnd.window.document.activeElement, this$static.firstFocusElement)) {
    evt.preventDefault();
    this$static.lastFocusElement.focus();
  }
}

function $handleForwardTab(this$static, evt){
  if (equals_Ljava_lang_Object__Z__devirtual$($wnd.window.document.activeElement, this$static.lastFocusElement)) {
    evt.preventDefault();
    this$static.firstFocusElement.focus();
  }
}

function $initFocusElements(this$static){
  var elementNodeList, elements;
  elementNodeList = castToNative(this$static.modalElement.root_0.wrappedElement, $wnd.HTMLDivElement).querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');
  elements = $asList(elementNodeList);
  if (elements.array.length > 0) {
    this$static.focusElements = elements;
    this$static.firstFocusElement = castToNative(this$static.focusElements.getAtIndex(0), $wnd.Element);
    this$static.lastFocusElement = castToNative($get_2(elements, elements.array.length - 1), $wnd.Element);
  }
   else {
    this$static.lastFocusElement = castToNative(this$static.modalElement.modalContent.element.wrappedElement, $wnd.HTMLDivElement);
  }
}

function $lambda$1_8(this$static, evt_0){
  var keyboardEvent;
  if (instanceOfNative(evt_0, $wnd.KeyboardEvent)) {
    keyboardEvent = castToNative(evt_0, $wnd.KeyboardEvent);
    switch (keyboardEvent.code) {
      case 'Tab':
        $initFocusElements(this$static);
        this$static.focusElements.size() <= 1 && evt_0.preventDefault();
        keyboardEvent.shiftKey?$handleBackwardTab(this$static, evt_0):$handleForwardTab(this$static, evt_0);
        !this$static.focusElements.contains($wnd.window.document.activeElement) && this$static.firstFocusElement != null && this$static.firstFocusElement.focus();
        break;
      case 'Escape':
        this$static.autoClose && $close(this$static);
    }
  }
}

function $lambda$4_6(this$static){
  this$static.firstFocusElement.focus();
  equals_11($wnd.window.document.activeElement, this$static.firstFocusElement) || this$static.lastFocusElement != null && this$static.lastFocusElement.focus();
}

function $open(this$static){
  $removeCssProperty_0((this$static.styleInitializer.apply_1() , this$static.style_0), 'z-index');
  if (this$static.autoAppendAndRemove) {
    castToNative(this$static.modalElement.root_0.wrappedElement, $wnd.HTMLDivElement).remove();
    ($clinit_DomGlobal() , document_0).body.appendChild(castToNative(this$static.modalElement.root_0.wrappedElement, $wnd.HTMLDivElement));
  }
  $initFocusElements(this$static);
  this$static.activeElementBeforeOpen = $wnd.window.document.activeElement;
  $onPopupOpen(($clinit_DominoUIConfig() , INSTANCE_15).zindexManager, this$static);
  this$static.firstFocusElement != null && this$static.autoFocus && $nowOrWhenAttached(this$static, new BaseModal$lambda$3$Type(this$static));
  $forEach_0(this$static.openHandlers, new BaseModal$1methodref$onOpen$Type);
  this$static.open_0 = true;
  ($clinit_DomGlobal() , document_0).body.classList.add('modal-open');
  $show_1((!this$static.collapsible_0 && (this$static.collapsible_0 = new Collapsible(castToNative(this$static.modalElement.root_0.wrappedElement, $wnd.HTMLDivElement))) , this$static.collapsible_0));
  return this$static;
}

function $setModal(this$static){
  this$static.modal = true;
  return this$static;
}

function $setSize_0(this$static, size_0){
  var modalElement;
  modalElement = new DominoElement(castToNative(this$static.modalElement.root_0.wrappedElement, $wnd.HTMLDivElement));
  !!this$static.modalSize && $removeCss(modalElement, this$static.modalSize.style_0);
  $addCss(modalElement, size_0.style_0);
  this$static.modalSize = size_0;
  return this$static;
}

defineClass(476, 12, $intern_33);
_.close_0 = function close_0(){
  return $close(this);
}
;
_.element_3 = function element_14(){
  return castToNative(this.modalElement.root_0.wrappedElement, $wnd.HTMLDivElement);
}
;
_.setZIndex = function setZIndex(arg0){
  return $setZIndex(this, arg0);
}
;
_.isAutoClose = function isAutoClose(){
  return this.autoClose;
}
;
_.isModal = function isModal(){
  return this.modal;
}
;
_.stealFocus = function stealFocus(){
  this.firstFocusElement != null && this.autoFocus && $nowOrWhenAttached(this, new BaseModal$lambda$3$Type(this));
}
;
_.autoAppendAndRemove = true;
_.autoClose = true;
_.autoFocus = true;
_.modal = true;
_.open_0 = false;
var Lorg_dominokit_domino_ui_modals_BaseModal_2_classLit = createForClass('org.dominokit.domino.ui.modals', 'BaseModal', 476);
function $lambda$8(this$static){
  $setBorder(castTo($addCss(castTo($removeCss(this$static.icon_0, 'col-orange'), 3), 'col-grey'), 3));
  $animate($callback($duration($transition(new Animation_0(this$static.icon_0.wrappedElement), this$static.iconStartTransition), 400), new MessageDialog$lambda$9$Type(this$static)));
}

function $lambda$9(this$static, element_0){
  $setBorder_0($addCss_1($removeCss_1(new Style(new Style$lambda$0$Type(element_0)), 'col-grey'), 'col-orange'), '3px solid #FF9800');
  $animate($transition(new Animation_0(this$static.icon_0.wrappedElement), this$static.iconEndTransition));
}

function $warning(this$static, icon){
  this$static.icon_0 = castTo($addCss(new DominoElement(icon.icon_0.wrappedElement), 'message-icon'), 3);
  $clinit_Color();
  this$static.iconStartTransition = ($clinit_Transition() , ROTATE_IN);
  this$static.iconEndTransition = RUBBER_BAND;
  $show(new DominoElement(this$static.modalElement.modalHeader.element));
  $clearElement(this$static.iconContainer);
  $appendChild_0(this$static.iconContainer, this$static.icon_0);
  $addOpenListener(this$static, new MessageDialog$lambda$8$Type(this$static));
  return this$static;
}

function MessageDialog(){
  BaseDominoElement.call(this);
  this.openHandlers = new ArrayList;
  this.closeHandlers = new ArrayList;
  this.focusElements = new ArrayList;
  this.headerText = ($clinit_DomGlobal() , document_0).createTextNode('');
  this.modalElement = new BaseModal$Modal;
  $hide(new DominoElement(this.modalElement.modalHeader.element));
  $appendChild(new DominoElement(this.modalElement.modalTitle.wrappedElement), this.headerText);
  castToNative(this.modalElement.root_0.wrappedElement, $wnd.HTMLDivElement).addEventListener(($clinit_EventType() , keydown).name_0, new BaseModal$lambda$1$Type(this));
  $setCollapseStrategy(this, new AnimationCollapseStrategy(($clinit_Transition() , FADE_IN), FADE_OUT, ($clinit_CollapseDuration() , _200ms)));
  $addHideListener(this, new BaseModal$0methodref$doClose$Type(this));
  this.iconContainer = new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element);
  $init(this, this);
}

function createMessage(content_0, closeHandler){
  var messageDialog;
  messageDialog = new MessageDialog;
  $addCss_1((messageDialog.styleInitializer.apply_1() , messageDialog.style_0), 'message-dialog');
  $setSize_0(messageDialog, ($clinit_IsModalDialog$ModalSize() , ALERT));
  $insertBefore(new DominoElement(messageDialog.modalElement.modalHeader.element), messageDialog.iconContainer, (new DominoElement(messageDialog.modalElement.modalHeader.element)).wrappedElement.firstChild);
  $hide(new DominoElement(messageDialog.modalElement.modalHeader.element));
  messageDialog.autoClose = true;
  $add_0(messageDialog.closeHandlers, closeHandler);
  $appendChild(messageDialog.modalElement.modalBody, content_0);
  messageDialog.okButton = ($clinit_BaseModal() , $linkify(castTo($addCss(new Button('OK'), 'dialog-button'), 38)));
  $appendFooterChild(messageDialog, messageDialog.okButton.buttonElement.wrappedElement);
  messageDialog.okButton.buttonElement.wrappedElement.addEventListener(($clinit_EventType() , click_0).name_0, new MessageDialog$lambda$5$Type(messageDialog));
  return messageDialog;
}

function createMessage_0(closeHandler){
  $clinit_BaseModal();
  var modalDialog;
  modalDialog = createMessage(castToNative((new Paragraph).element.wrappedElement, $wnd.HTMLParagraphElement), closeHandler);
  $show(new DominoElement(modalDialog.modalElement.modalHeader.element));
  modalDialog.headerText.textContent = '\u60A8\u5C06\u4E22\u5931\u6240\u6709\u66F4\u6539\uFF01';
  $clearElement(new DominoElement(modalDialog.modalElement.modalTitle.wrappedElement));
  $appendChild(new DominoElement(modalDialog.modalElement.modalTitle.wrappedElement), modalDialog.headerText);
  return modalDialog;
}

defineClass(477, 476, $intern_33, MessageDialog);
var Lorg_dominokit_domino_ui_dialogs_MessageDialog_2_classLit = createForClass('org.dominokit.domino.ui.dialogs', 'MessageDialog', 477);
function MessageDialog$lambda$5$Type(messageDialog_0){
  this.messageDialog_0 = messageDialog_0;
}

defineClass(478, 1, {}, MessageDialog$lambda$5$Type);
_.handleEvent = function handleEvent_25(arg0){
  $clinit_BaseModal();
  $close(this.messageDialog_0);
}
;
var Lorg_dominokit_domino_ui_dialogs_MessageDialog$lambda$5$Type_2_classLit = createForClass('org.dominokit.domino.ui.dialogs', 'MessageDialog/lambda$5$Type', 478);
function MessageDialog$lambda$7$Type(){
}

defineClass(479, 1, {848:1}, MessageDialog$lambda$7$Type);
var Lorg_dominokit_domino_ui_dialogs_MessageDialog$lambda$7$Type_2_classLit = createForClass('org.dominokit.domino.ui.dialogs', 'MessageDialog/lambda$7$Type', 479);
function MessageDialog$lambda$8$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(481, 1, {847:1}, MessageDialog$lambda$8$Type);
var Lorg_dominokit_domino_ui_dialogs_MessageDialog$lambda$8$Type_2_classLit = createForClass('org.dominokit.domino.ui.dialogs', 'MessageDialog/lambda$8$Type', 481);
function MessageDialog$lambda$9$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(480, 1, {}, MessageDialog$lambda$9$Type);
_.onComplete = function onComplete_4(arg0){
  $lambda$9(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_dialogs_MessageDialog$lambda$9$Type_2_classLit = createForClass('org.dominokit.domino.ui.dialogs', 'MessageDialog/lambda$9$Type', 480);
function $addValidator(this$static, validator){
  $addValidator_0(this$static.elementValidations, validator);
  return this$static;
}

function $clearInvalid(this$static){
  $show(this$static.getHelperContainer());
  $removeErrors(this$static);
  this$static.fixErrorsPosition || $hide(this$static.getErrorsContainer());
  return this$static;
}

function $groupBy(this$static, fieldsGrouping){
  $add_0(fieldsGrouping.formElements, this$static);
  return this$static;
}

function $invalidate(this$static, errorMessages){
  $toggleDisplay(this$static.getHelperContainer(), false);
  $removeErrors(this$static);
  this$static.fixErrorsPosition?$show(this$static.getErrorsContainer()):$toggleDisplay(this$static.getErrorsContainer(), true);
  $addCss_1((this$static.styleInitializer.apply_1() , this$static.style_0), 'error');
  $forEach(errorMessages, new BasicFormElement$lambda$3$Type(this$static));
  this$static.errors.array.length = 0;
  $addAll_0(this$static.errors, errorMessages);
  return this$static;
}

function $lambda$3_7(this$static, message_0){
  var errorLabel;
  errorLabel = castToNative(castTo($textContent(castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('label'), $wnd.HTMLElement))).element), 'error'), 3), message_0), 3).wrappedElement, $wnd.HTMLLabelElement);
  $add_0(this$static.errorLabels, errorLabel);
  $appendChild(this$static.getErrorsContainer(), errorLabel);
}

function $removeErrors(this$static){
  this$static.errorLabels.array.length = 0;
  this$static.errors.array.length = 0;
  $clearElement(this$static.getErrorsContainer());
  $removeCss_1((this$static.styleInitializer.apply_1() , this$static.style_0), 'error');
}

function $setRequired(this$static){
  $removeRequiredIndicator(($clinit_DominoUIConfig() , this$static), this$static.requiredIndicator);
  $addValidator(this$static, this$static.requiredValidator);
  this$static.showRequiredIndicator && $appendRequiredIndicator(this$static, this$static.requiredIndicator);
  return this$static;
}

function $setRequiredErrorMessage(this$static, requiredErrorMessage){
  this$static.requiredErrorMessage = requiredErrorMessage;
  return this$static;
}

defineClass(513, 12, {138:1, 12:1, 15:1});
_.clearInvalid = function clearInvalid(){
  return $clearInvalid(this);
}
;
_.getErrors = function getErrors(){
  return this.errors;
}
;
_.invalidate = function invalidate(errorMessage){
  return this.invalidate_0(($clinit_Collections() , new Collections$SingletonList(errorMessage))) , this;
}
;
_.invalidate_0 = function invalidate_0(errorMessages){
  return $invalidate(this, errorMessages);
}
;
_.validate = function validate(silent){
  return $validate_0(this.elementValidations, silent);
}
;
_.fixErrorsPosition = false;
_.showRequiredIndicator = true;
var Lorg_dominokit_domino_ui_forms_BasicFormElement_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'BasicFormElement', 513);
function $callChangeHandlers(this$static){
  $forEach_0(this$static.changeHandlers, new ValueBox$lambda$14$Type(this$static));
}

function $doFocus(this$static){
  if (!(new DominoElement(this$static.inputElement.wrappedElement)).element_3().hasAttribute('disabled')) {
    $addCss(this$static.fieldGroup, 'focused');
    $floatLabel(this$static);
    if (this$static.valid) {
      this$static.isAddFocusColor() && $addCss(this$static.fieldContainer, 'fc-' + this$static.focusColor.getStyle());
      $setLabelColor(this$static, this$static.focusColor);
    }
    this$static.placeholder != null && this$static.isEmpty_0() && (this$static.floating || ($clinit_Optional() , new Optional(checkCriticalNotNull(this$static.labelTextElement))).ref != null && $isEmptyElement(castTo($get_5(new Optional(checkCriticalNotNull(this$static.labelTextElement))), 3))) && $setAttribute_0(this$static.inputElement, 'placeholder', this$static.placeholder);
  }
}

function $doUnfocus(this$static){
  $removeCss(this$static.fieldGroup, 'focused');
  $removeCss_0(this$static.fieldContainer, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['fc-' + this$static.focusColor.getStyle(), 'focused']));
  $unfloatLabel(this$static);
  $removeLabelColor(this$static, this$static.focusColor);
  this$static.placeholder != null && !(this$static.isEmpty_0() && (this$static.floating || ($clinit_Optional() , new Optional(checkCriticalNotNull(this$static.labelTextElement))).ref != null && $isEmptyElement(castTo($get_5(new Optional(checkCriticalNotNull(this$static.labelTextElement))), 3)))) && $removeAttribute(this$static.inputElement, 'placeholder');
}

function $floatLabel(this$static){
  if (!this$static.floating || this$static.permaFloating) {
    $containsCss(this$static.fieldGroup, 'floating') || $addCss(this$static.fieldGroup, 'floating');
    this$static.floating = true;
  }
}

function $floating(this$static){
  $floatLabel(this$static);
  this$static.permaFloating = true;
  this$static.placeholder != null && this$static.isEmpty_0() && (this$static.floating || ($clinit_Optional() , new Optional(checkCriticalNotNull(this$static.labelTextElement))).ref != null && $isEmptyElement(castTo($get_5(new Optional(checkCriticalNotNull(this$static.labelTextElement))), 3))) && $setAttribute_0(this$static.inputElement, 'placeholder', this$static.placeholder);
  return this$static;
}

function $getLabelElement(this$static){
  if (this$static.labelElement) {
    return $clinit_Optional() , new Optional(checkCriticalNotNull(new DominoElement(this$static.labelElement.wrappedElement)));
  }
  return $clinit_Optional() , $clinit_Optional() , EMPTY;
}

function $invalidate_0(this$static, errorMessages){
  this$static.valid = false;
  $updateValidationStyles(this$static);
  $clinit_DominoUIConfig();
  return castTo($invalidate(this$static, errorMessages), 89);
}

function $lambda$0_16(this$static){
  this$static.helpItem = castTo($css(new FlexItem, 'field-helper'), 20);
  this$static.errorItem = $setFlexGrow(castTo($css(castTo($hide(new FlexItem), 20), 'field-errors'), 20));
  this$static.countItem = castTo($css(castTo($hide(new FlexItem), 20), 'field-counter'), 20);
  this$static.additionalInfoContainer = new FlexLayout;
  $css(this$static.notesContainer, 'notes-cntr');
  $appendChild_0(this$static.fieldGroup, $appendChild_0(castTo($css(this$static.notesContainer, 'field-note'), 3), $appendChild_2($appendChild_2($appendChild_2(this$static.additionalInfoContainer, $setFlexGrow(this$static.helpItem)), this$static.errorItem), this$static.countItem)));
  this$static.noteInitializer = new ValueBox$lambda$1$Type;
}

function $lambda$10_1(this$static, shouldCondense_0){
  (checkCriticalNotNull(shouldCondense_0) , shouldCondense_0) && ($removeCss_1((this$static.styleInitializer.apply_1() , this$static.style_0), 'condensed') , $addCss_1((this$static.styleInitializer.apply_1() , this$static.style_0), 'condensed') , this$static);
}

function $lambda$13(this$static, labelElement_0){
  return $setAttribute_0(labelElement_0, 'for', $getId(new DominoElement((new DominoElement(this$static.inputElement.wrappedElement)).wrappedElement)));
}

function $lambda$16_0(this$static){
  $doUnfocus(this$static);
  !!this$static.autoValidator && this$static.validateOnFocusLost && $validate_0(this$static.elementValidations, false);
}

function $lambda$19(this$static, labelElement_0){
  return $appendChild_0(labelElement_0, this$static.labelTextElement);
}

function $lambda$2_5(this$static){
  this$static.labelElement = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('label'), $wnd.HTMLElement))).element), 'field-label'), 3);
  $insertBefore_0(new DominoElement((new DominoElement(this$static.inputElement.wrappedElement)).wrappedElement.parentElement), this$static.labelElement, this$static.inputElement);
  $ifPresent($getLabelElement(this$static), new ValueBox$lambda$13$Type(this$static));
  $addEventListener(this$static.labelElement, 'click', new ValueBox$lambda$3$Type(this$static));
  this$static.labelInitializer = new ValueBox$lambda$4$Type;
}

function $lambda$3_8(this$static, evt_0){
  if ((new DominoElement(this$static.inputElement.wrappedElement)).element_3().hasAttribute('disabled')) {
    evt_0.stopPropagation();
    evt_0.preventDefault();
  }
   else {
    (new DominoElement(this$static.inputElement.wrappedElement)).element_3().hasAttribute('disabled') || (this$static.dominoUuidInitializer.apply_1() , ($clinit_DomGlobal() , document_0).body.querySelector("[domino-uuid='" + this$static.uuid + "']") != null?((new DominoElement(this$static.inputElement.wrappedElement)).wrappedElement.focus() , $doFocus(this$static)):$onAttached(new DominoElement(this$static.inputElement.wrappedElement), new ValueBox$lambda$17$Type(this$static)));
  }
}

function $lambda$6_2(this$static){
  !this$static.isEmpty_0() || $containsCss_0($style(this$static.fieldGroup), 'focused')?$floatLabel(this$static):$unfloatLabel(this$static);
}

function $lambda$7(this$static){
  this$static.isEmpty_0() && this$static.placeholder != null && this$static.isEmpty_0() && (this$static.floating || ($clinit_Optional() , new Optional(checkCriticalNotNull(this$static.labelTextElement))).ref != null && $isEmptyElement(castTo($get_5(new Optional(checkCriticalNotNull(this$static.labelTextElement))), 3))) && $setAttribute_0(this$static.inputElement, 'placeholder', this$static.placeholder);
}

function $nonfloating(this$static){
  this$static.permaFloating = false;
  $unfloatLabel(this$static);
  this$static.placeholder != null && !(this$static.isEmpty_0() && (this$static.floating || ($clinit_Optional() , new Optional(checkCriticalNotNull(this$static.labelTextElement))).ref != null && $isEmptyElement(castTo($get_5(new Optional(checkCriticalNotNull(this$static.labelTextElement))), 3)))) && $removeAttribute(this$static.inputElement, 'placeholder');
  return this$static;
}

function $removeLabelColor(this$static, color_0){
  !!this$static.labelElement && $removeCss(this$static.labelElement, color_0.getStyle());
}

function $setAutoValidation(this$static){
  !this$static.autoValidator && (this$static.autoValidator = new InputAutoValidator);
  return this$static;
}

function $setFixErrorsPosition(this$static, fixPosition){
  if (fixPosition) {
    this$static.noteInitializer.apply_1();
    $show(this$static.errorItem);
    $setMinHeight($style((this$static.noteInitializer.apply_1() , this$static.errorItem)), '25px');
  }
   else {
    $setMinHeight($style((this$static.noteInitializer.apply_1() , this$static.errorItem)), '0px');
  }
  return this$static.fixErrorsPosition = fixPosition , this$static;
}

function $setFloating(this$static, floating){
  floating?$floating(this$static):$nonfloating(this$static);
  return this$static;
}

function $setFocusColor(this$static, focusColor){
  $removeLabelColor(this$static, this$static.focusColor);
  $containsCss_0($style(this$static.fieldGroup), 'focused') && !!this$static.labelElement && $addCss(this$static.labelElement, focusColor.getStyle());
  this$static.focusColor = focusColor;
  return this$static;
}

function $setLabel(this$static, label_0){
  if (label_0.length != 0 || this$static.allowEmptyLabel()) {
    this$static.labelInitializer.apply_1();
    $remove_0(this$static.labelTextElement);
    $setTextContent(this$static.labelTextElement, label_0);
    $ifPresent($getLabelElement(this$static), new ValueBox$lambda$19$Type(this$static));
    ($clinit_Optional() , new Optional(checkCriticalNotNull(this$static.labelTextElement))).ref != null && !$isEmptyElement(castTo($get_5(new Optional(checkCriticalNotNull(this$static.labelTextElement))), 3)) && this$static.placeholder != null && !(this$static.isEmpty_0() && (this$static.floating || (new Optional(checkCriticalNotNull(this$static.labelTextElement))).ref != null && $isEmptyElement(castTo($get_5(new Optional(checkCriticalNotNull(this$static.labelTextElement))), 3)))) && $removeAttribute(this$static.inputElement, 'placeholder');
  }
  return this$static;
}

function $setLabelColor(this$static, color_0){
  !!this$static.labelElement && $addCss(this$static.labelElement, color_0.getStyle());
}

function $setPlaceholder(this$static, placeholder){
  var stringValue;
  this$static.placeholder = placeholder;
  this$static.placeholder != null && (stringValue = $getValue_3(this$static) , (stringValue == null || stringValue.length == 0) && (this$static.floating || ($clinit_Optional() , new Optional(checkCriticalNotNull(this$static.labelTextElement))).ref != null && $isEmptyElement(castTo($get_5(new Optional(checkCriticalNotNull(this$static.labelTextElement))), 3)))) && $setAttribute_0(this$static.inputElement, 'placeholder', this$static.placeholder);
  return this$static;
}

function $setReadOnly(this$static, readOnly){
  var floating, stringValue;
  this$static.readOnly = readOnly;
  if (readOnly) {
    $setAttribute_0(new DominoElement(this$static.inputElement.wrappedElement), 'readonly', 'true');
    $setAttribute_1(new DominoElement(this$static.inputElement.wrappedElement), 'floating', this$static.permaFloating);
    $addCss_1((this$static.styleInitializer.apply_1() , this$static.style_0), 'readonly');
    $floating(this$static);
  }
   else {
    $removeAttribute(new DominoElement(this$static.inputElement.wrappedElement), 'readonly');
    $removeCss_1((this$static.styleInitializer.apply_1() , this$static.style_0), 'readonly');
    (new DominoElement(this$static.inputElement.wrappedElement)).element_3().hasAttribute('floating')?(floating = ($clinit_Boolean() , $equalsIgnoreCase('true', (new DominoElement(this$static.inputElement.wrappedElement)).element_3().getAttribute('floating')))):(floating = this$static.permaFloating);
    floating?$floating(this$static):$nonfloating(this$static);
    stringValue = $getValue_2(this$static);
    !(stringValue == null || stringValue.length == 0) || $containsCss_0($style(this$static.fieldGroup), 'focused')?$floatLabel(this$static):$unfloatLabel(this$static);
  }
  return this$static;
}

function $tryFocus(this$static){
  (new DominoElement(this$static.inputElement.wrappedElement)).wrappedElement.focus();
  $doFocus(this$static);
}

function $unfloatLabel(this$static){
  if (this$static.floating && !this$static.permaFloating && this$static.isEmpty_0()) {
    $removeCss(this$static.fieldGroup, 'floating');
    this$static.floating = false;
  }
}

function $updateValidationStyles(this$static){
  $removeCss(this$static.fieldContainer, 'fc-' + this$static.focusColor.getStyle());
  $addCss(this$static.fieldContainer, ($clinit_Color() , 'fc-col-red'));
  $removeLabelColor(this$static, this$static.focusColor);
  $setLabelColor(this$static, RED);
  !this$static.isEmpty_0() || $containsCss_0($style(this$static.fieldGroup), 'focused')?$floatLabel(this$static):$unfloatLabel(this$static);
}

function ValueBox(type_0, label_0){
  BaseDominoElement.call(this);
  this.elementValidations = new ElementValidations(this);
  this.requiredValidator = new RequiredValidator(this);
  this.requiredErrorMessage = ($clinit_DominoUIConfig() , INSTANCE_15).defaultRequiredMessage;
  this.errorLabels = new ArrayList;
  this.errors = new ArrayList;
  this.requiredIndicator = (null , of_4(' * '));
  this.fieldGroup = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element), 'field-group'), 3);
  this.fieldContainer = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), 'field-cntr'), 3);
  this.inputContainer = new FlexItem;
  this.notesContainer = new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element);
  castTo($css(new FlexLayout, 'field-lft-addons'), 60);
  castTo($css(new FlexLayout, 'field-rgt-addons'), 60);
  castTo($css(new FlexItem, 'field-prefix'), 20);
  castTo($css(new FlexItem, 'field-postfix'), 20);
  this.labelTextElement = new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('span'), $wnd.HTMLElement))).element);
  this.focusColor = ($clinit_Color() , BLUE);
  this.changeHandlers = new ArrayList;
  new ArrayList;
  this.fieldStyle = INSTANCE_15.DEFAULT;
  $init(this, this);
  this.noteInitializer = new ValueBox$lambda$0$Type(this);
  this.labelInitializer = new ValueBox$lambda$2$Type(this);
  this.inputElement = new DominoElement(this.createInputElement(type_0));
  this.changeListener = new ValueBox$lambda$5$Type(this);
  $addEventListener(this.inputElement, 'change', this.changeListener);
  $addEventListener(this.inputElement, 'change', new ValueBox$lambda$6$Type(this));
  this.inputListener = new ValueBox$lambda$7$Type(this);
  $addEventListener(this.inputElement, 'input', this.inputListener);
  this.onEnterKey();
  this.fieldInnerContainer = new FlexLayout;
  $appendChild_2(this.fieldInnerContainer, castTo($appendChild_0($setFlexGrow(castTo($css(this.inputContainer, 'field-input-cntr'), 20)), this.inputElement), 20));
  $appendChild_0(this.fieldGroup, $appendChild_0(this.fieldContainer, $apply(this.fieldInnerContainer, new ValueBox$lambda$12$Type)));
  $setFocusColor(this, this.focusColor);
  $addEventListener(this.inputElement, 'focus', new ValueBox$lambda$15$Type(this));
  $addEventListener(this.inputElement, 'focusout', new ValueBox$lambda$16$Type(this));
  this.setLabel(label_0);
  $setAttribute_1(this.inputElement, 'spellcheck', true);
  $apply_1(this.fieldStyle, this);
  $ifPresent(INSTANCE_15.fixErrorsPosition, new ValueBox$0methodref$setFixErrorsPosition$Type(this));
  $ifPresent(INSTANCE_15.floatLabels, new ValueBox$1methodref$setFloating$Type(this));
  $ifPresent(INSTANCE_15.condensed, new ValueBox$lambda$10$Type(this));
}

defineClass(89, 513, $intern_34);
_.clearInvalid = function clearInvalid_0(){
  return this.valid = true , $addCss(this.fieldContainer, 'fc-' + this.focusColor.getStyle()) , $removeCss(this.fieldContainer, ($clinit_Color() , 'fc-col-red')) , $removeLabelColor(this, RED) , $containsCss_0($style(this.fieldGroup), 'focused')?$doFocus(this):$doUnfocus(this) , !this.isEmpty_0() || $containsCss_0($style(this.fieldGroup), 'focused')?$floatLabel(this):$unfloatLabel(this) , $clinit_DominoUIConfig() , castTo($clearInvalid(this), 89);
}
;
_.invalidate = function invalidate_1(errorMessage){
  return this.valid = false , $updateValidationStyles(this) , $clinit_DominoUIConfig() , $clinit_Collections() , new Collections$SingletonList(errorMessage) , $invalidate_0(this, new Collections$SingletonList(errorMessage)) , this;
}
;
_.invalidate_0 = function invalidate_2(errorMessages){
  return $invalidate_0(this, errorMessages);
}
;
_.allowEmptyLabel = function allowEmptyLabel(){
  return false;
}
;
_.element_3 = function element_15(){
  return this.fieldGroup.wrappedElement;
}
;
_.getErrorsContainer = function getErrorsContainer(){
  this.noteInitializer.apply_1();
  return new DominoElement(this.errorItem.element);
}
;
_.getHelperContainer = function getHelperContainer(){
  this.noteInitializer.apply_1();
  return new DominoElement(this.helpItem.element);
}
;
_.getInputElement = function getInputElement(){
  return new DominoElement(this.inputElement.wrappedElement);
}
;
_.getStringValue = function getStringValue(){
  return null;
}
;
_.getValue_0 = function getValue_7(){
  return null;
}
;
_.isAddFocusColor = function isAddFocusColor(){
  return true;
}
;
_.isEmpty_0 = function isEmpty_3(){
  return false;
}
;
_.onEnterKey = function onEnterKey(){
  $addHandler_0(new KeyboardEvents_0('keypress', [(new DominoElement(this.inputElement.wrappedElement)).wrappedElement]), 'enter', new KeyboardEvents$HandlerContext(new ValueBox$lambda$11$Type));
}
;
_.setLabel = function setLabel(label_0){
  return $setLabel(this, label_0);
}
;
_.floating = false;
_.permaFloating = false;
_.readOnly = false;
_.valid = true;
_.validateOnFocusLost = true;
var Lorg_dominokit_domino_ui_forms_ValueBox_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox', 89);
function $setMaxLength(this$static){
  this$static.maxLength = 4;
  this$static.noteInitializer.apply_1();
  $show(this$static.countItem);
  $setAttribute(new DominoElement(this$static.inputElement.wrappedElement), 'maxlength', 4);
  $updateCharacterCount(this$static);
  return this$static;
}

function $setReadOnly_0(this$static, readOnly){
  $toggleDisplay((this$static.noteInitializer.apply_1() , this$static.countItem), !readOnly);
  return $setReadOnly(this$static, readOnly);
}

function $updateCharacterCount(this$static){
  var length_0, value_0;
  if (this$static.maxLength > 0 || this$static.minLength > 0) {
    this$static.noteInitializer.apply_1();
    $show(this$static.countItem);
    value_0 = this$static.getStringValue();
    length_0 = 0;
    value_0 != null && (length_0 = value_0.length);
    length_0 < this$static.minLength && (length_0 = this$static.minLength);
    this$static.noteInitializer.apply_1();
    $setTextContent(this$static.countItem, length_0 + '/' + this$static.maxLength);
  }
   else {
    this$static.noteInitializer.apply_1();
    $hide(this$static.countItem);
  }
}

function $value(this$static, value_0){
  var stringValue;
  castToNative((new DominoElement(this$static.inputElement.wrappedElement)).wrappedElement, $wnd.HTMLTextAreaElement).value = value_0;
  this$static.dominoUuidInitializer.apply_1();
  ($clinit_DomGlobal() , document_0).body.querySelector("[domino-uuid='" + this$static.uuid + "']") != null && $adjustHeight(this$static);
  stringValue = $getValue_2(this$static);
  !(stringValue == null || stringValue.length == 0) || $containsCss_0($style(this$static.fieldGroup), 'focused')?$floatLabel(this$static):$unfloatLabel(this$static);
  !!this$static.autoValidator && $validate_0(this$static.elementValidations, false);
  $forEach_0(this$static.changeHandlers, new ValueBox$lambda$14$Type(this$static));
  $updateCharacterCount(this$static);
  return this$static;
}

function AbstractValueBox(type_0, label_0){
  ValueBox.call(this, type_0, label_0);
  new MinLengthValidator(this);
  $addEventListener(new DominoElement(this.inputElement.wrappedElement), 'input', new AbstractValueBox$lambda$0$Type(this));
}

defineClass(186, 89, $intern_34);
_.isEmpty_0 = function isEmpty_4(){
  var stringValue;
  return stringValue = this.getStringValue() , stringValue == null || stringValue.length == 0;
}
;
_.maxLength = 0;
_.minLength = 0;
var Lorg_dominokit_domino_ui_forms_AbstractValueBox_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'AbstractValueBox', 186);
function AbstractValueBox$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(516, 1, {}, AbstractValueBox$lambda$0$Type);
_.handleEvent = function handleEvent_26(arg0){
  $updateCharacterCount(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_forms_AbstractValueBox$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'AbstractValueBox/lambda$0$Type', 516);
function BasicFormElement$lambda$3$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(535, 1, {}, BasicFormElement$lambda$3$Type);
_.accept = function accept_45(arg0){
  $lambda$3_7(this.$$outer_0, castToString(arg0));
}
;
var Lorg_dominokit_domino_ui_forms_BasicFormElement$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'BasicFormElement/lambda$3$Type', 535);
function $changeReadOnlyText(this$static){
  $remove_0(this$static.readOnlyLabelElement);
  castToNative((new DominoElement(this$static.inputElement.wrappedElement)).wrappedElement, $wnd.HTMLInputElement).checked?$setTextContent(this$static.readOnlyLabelElement, this$static.checkedReadonlyLabel == null || this$static.checkedReadonlyLabel.length == 0?'':': ' + this$static.checkedReadonlyLabel):$setTextContent(this$static.readOnlyLabelElement, this$static.unCheckedReadonlyLabel == null || this$static.unCheckedReadonlyLabel.length == 0?'':': ' + this$static.unCheckedReadonlyLabel);
  $ifPresent($getLabelElement(this$static), new CheckBox$lambda$5$Type(this$static));
}

function $check(this$static){
  castToNative((new DominoElement(this$static.inputElement.wrappedElement)).wrappedElement, $wnd.HTMLInputElement).checked = true;
  $css(castTo(this$static.element_0, 72), 'checked');
  $forEach_0(this$static.changeHandlers, new CheckBox$lambda$3$Type(this$static));
  this$static.readOnly && $changeReadOnlyText(this$static);
  return this$static;
}

function $filledIn(this$static){
  $addCss(castTo(this$static.element_0, 72), 'filled-in');
  return this$static;
}

function $lambda$0_17(this$static, evt_0){
  evt_0.stopPropagation();
  evt_0.preventDefault();
  !(new DominoElement(this$static.inputElement.wrappedElement)).element_3().hasAttribute('disabled') && !this$static.readOnly && $toggle(this$static);
}

function $lambda$1_9(this$static){
  !(new DominoElement(this$static.inputElement.wrappedElement)).element_3().hasAttribute('disabled') && !this$static.readOnly && $value_0(this$static, ($clinit_Boolean() , castToNative((new DominoElement(this$static.inputElement.wrappedElement)).wrappedElement, $wnd.HTMLInputElement).checked?true:false));
}

function $lambda$3_9(this$static){
  null.$_nullMethod(($clinit_Boolean() , castToNative((new DominoElement(this$static.inputElement.wrappedElement)).wrappedElement, $wnd.HTMLInputElement).checked?true:false));
}

function $lambda$5_0(this$static, labelElement_0){
  return $appendChild_0(labelElement_0, this$static.readOnlyLabelElement);
}

function $setColor_1(this$static, color_0){
  !!this$static.color_0 && $removeCss(castTo(this$static.element_0, 72), 'col-blue');
  $addCss(castTo(this$static.element_0, 72), 'col-blue');
  this$static.color_0 = color_0;
  return this$static;
}

function $toggle(this$static){
  if (castToNative((new DominoElement(this$static.inputElement.wrappedElement)).wrappedElement, $wnd.HTMLInputElement).checked) {
    $uncheck(this$static);
    $removeCss(castTo(this$static.element_0, 72), 'checked');
  }
   else {
    $check(this$static);
    $css(castTo(this$static.element_0, 72), 'checked');
  }
  return this$static;
}

function $uncheck(this$static){
  castToNative((new DominoElement(this$static.inputElement.wrappedElement)).wrappedElement, $wnd.HTMLInputElement).checked = false;
  $removeCss(castTo(this$static.element_0, 72), 'checked');
  $forEach_0(this$static.changeHandlers, new CheckBox$lambda$3$Type(this$static));
  this$static.readOnly && $changeReadOnlyText(this$static);
  return this$static;
}

function $value_0(this$static, value_0){
  value_0 != null && (checkCriticalNotNull(value_0) , value_0)?$check(this$static):$uncheck(this$static);
  return this$static;
}

function CheckBox(){
  var listener;
  AbstractValueBox.call(this, 'checkbox', '\u8BB0\u4F4F\u6211');
  this.checkedReadonlyLabel = 'Yes';
  this.unCheckedReadonlyLabel = 'No';
  this.readOnlyLabelElement = new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('span'), $wnd.HTMLElement))).element);
  $addCss_1((this.styleInitializer.apply_1() , this.style_0), 'd-checkbox');
  listener = new CheckBox$lambda$0$Type(this);
  $addEventListener(castTo($removeEventListener(new DominoElement(this.inputElement.wrappedElement), 'change', this.changeListener), 3), 'change', new CheckBox$lambda$1$Type(this));
  $ifPresent($getLabelElement(this), new CheckBox$lambda$2$Type(listener));
  $addHandler_0(listenOnKeyDown(stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_elemento_IsElement_2_classLit, 1), $intern_0, 15, 0, [new DominoElement(this.inputElement.wrappedElement)])), 'enter', new KeyboardEvents$HandlerContext(listener));
}

function lambda$2_0(listener_0, labelElement_1){
  return labelElement_1.wrappedElement.addEventListener('click', listener_0) , labelElement_1.element_0;
}

defineClass(72, 186, {72:1, 138:1, 89:1, 12:1, 15:1}, CheckBox);
_.createInputElement = function createInputElement(type_0){
  return castToNative((new DominoElement(input_1('checkbox').element)).wrappedElement, $wnd.HTMLInputElement);
}
;
_.getValue_0 = function getValue_8(){
  return $clinit_Boolean() , castToNative((new DominoElement(this.inputElement.wrappedElement)).wrappedElement, $wnd.HTMLInputElement).checked?true:false;
}
;
_.setLabel = function setLabel_0(label_0){
  return $setLabel(this, label_0) , this.readOnly && $changeReadOnlyText(this) , this;
}
;
_.allowEmptyLabel = function allowEmptyLabel_0(){
  return true;
}
;
_.getStringValue = function getStringValue_0(){
  return $clinit_Boolean() , '' + $booleanValue(castToNative((new DominoElement(this.inputElement.wrappedElement)).wrappedElement, $wnd.HTMLInputElement).checked?true:false);
}
;
_.isAddFocusColor = function isAddFocusColor_0(){
  return false;
}
;
_.isEmpty_0 = function isEmpty_5(){
  return !castToNative((new DominoElement(this.inputElement.wrappedElement)).wrappedElement, $wnd.HTMLInputElement).checked;
}
;
var Lorg_dominokit_domino_ui_forms_CheckBox_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'CheckBox', 72);
function CheckBox$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(652, 1, {}, CheckBox$lambda$0$Type);
_.handleEvent = function handleEvent_27(arg0){
  $lambda$0_17(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_forms_CheckBox$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'CheckBox/lambda$0$Type', 652);
function CheckBox$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(653, 1, {}, CheckBox$lambda$1$Type);
_.handleEvent = function handleEvent_28(arg0){
  $lambda$1_9(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_forms_CheckBox$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'CheckBox/lambda$1$Type', 653);
function CheckBox$lambda$2$Type(listener_0){
  this.listener_0 = listener_0;
}

defineClass(654, 1, {}, CheckBox$lambda$2$Type);
_.accept = function accept_46(arg0){
  lambda$2_0(this.listener_0, castTo(arg0, 3));
}
;
var Lorg_dominokit_domino_ui_forms_CheckBox$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'CheckBox/lambda$2$Type', 654);
function CheckBox$lambda$3$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(237, 1, {}, CheckBox$lambda$3$Type);
_.accept = function accept_47(arg0){
  var lastArg;
  $lambda$3_9((lastArg = this.$$outer_0 , throwClassCastExceptionUnlessNull(arg0) , lastArg));
}
;
var Lorg_dominokit_domino_ui_forms_CheckBox$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'CheckBox/lambda$3$Type', 237);
function CheckBox$lambda$5$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(655, 1, {}, CheckBox$lambda$5$Type);
_.accept = function accept_48(arg0){
  $lambda$5_0(this.$$outer_0, castTo(arg0, 3));
}
;
var Lorg_dominokit_domino_ui_forms_CheckBox$lambda$5$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'CheckBox/lambda$5$Type', 655);
function $clinit_FieldStyle(){
  $clinit_FieldStyle = emptyMethod;
  ROUNDED = new FieldStyle$lambda$0$Type;
  LINED = new FieldStyle$lambda$1$Type;
}

function $apply_1(this$static, valueBox){
  var fieldStyle;
  fieldStyle = valueBox.fieldStyle;
  $removeCss(valueBox, fieldStyle.$$outer_0.fieldsStyle.getStyle());
  $css(valueBox, this$static.$$outer_0.fieldsStyle.getStyle());
}

var LINED, ROUNDED;
function FieldStyle$lambda$0$Type(){
}

defineClass(284, 1, {}, FieldStyle$lambda$0$Type);
_.getStyle = function getStyle(){
  return $clinit_FieldStyle() , 'rounded';
}
;
var Lorg_dominokit_domino_ui_forms_FieldStyle$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'FieldStyle/lambda$0$Type', 284);
function FieldStyle$lambda$1$Type(){
}

defineClass(285, 1, {}, FieldStyle$lambda$1$Type);
_.getStyle = function getStyle_0(){
  return $clinit_FieldStyle() , 'lined';
}
;
var Lorg_dominokit_domino_ui_forms_FieldStyle$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'FieldStyle/lambda$1$Type', 285);
function $validate(this$static, silent){
  var fieldsValid, result, validator, validator$iterator;
  this$static.errors.array.length = 0;
  fieldsValid = $validateFields(this$static, silent);
  if (!fieldsValid) {
    return new ValidationResult_0(false, 'Invalid fields');
  }
  for (validator$iterator = new ArrayList$1(this$static.validators); validator$iterator.i < validator$iterator.this$01.array.length;) {
    validator = castTo($next_0(validator$iterator), 251);
    result = validator.isValid();
    if (!result.valid) {
      return result;
    }
  }
  return new ValidationResult;
}

function $validateFields(this$static, silent){
  var formElement, formElement$iterator, result, valid;
  valid = true;
  for (formElement$iterator = new ArrayList$1(this$static.formElements); formElement$iterator.i < formElement$iterator.this$01.array.length;) {
    formElement = castTo($next_0(formElement$iterator), 138);
    result = formElement.validate(silent);
    if (!result.valid) {
      valid = false;
      $addAll_0(this$static.errors, formElement.getErrors());
    }
  }
  return valid;
}

function FieldsGrouping(){
  this.formElements = new ArrayList;
  this.validators = new ArrayList;
  this.errors = new ArrayList;
}

defineClass(651, 1, {}, FieldsGrouping);
_.getErrors = function getErrors_0(){
  return this.errors;
}
;
_.validate = function validate_0(silent){
  return $validate(this, silent);
}
;
var Lorg_dominokit_domino_ui_forms_FieldsGrouping_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'FieldsGrouping', 651);
function $adjustHeight(this$static){
  var scrollHeight;
  $setHeight_0($style(new DominoElement(this$static.inputElement.wrappedElement)), 'auto');
  scrollHeight = castToNative((new DominoElement(this$static.inputElement.wrappedElement)).wrappedElement, $wnd.HTMLTextAreaElement).scrollHeight;
  scrollHeight < 30 && (scrollHeight = 22);
}

function $getValue_2(this$static){
  var value_0;
  value_0 = castToNative((new DominoElement(this$static.inputElement.wrappedElement)).wrappedElement, $wnd.HTMLTextAreaElement).value;
  if (value_0.length == 0 && this$static.emptyAsNull) {
    return null;
  }
  return value_0;
}

function TextArea_0(){
  AbstractValueBox.call(this, '', '');
  new TextArea$lambda$0$Type(this);
  $floating(this);
  $setAttribute_0(new DominoElement(this.inputElement.wrappedElement), 'rows', '4');
  $addCss_1((this.styleInitializer.apply_1() , this.style_0), 'auto-height');
  $onAttached(this, new TextArea$lambda$1$Type(this));
}

defineClass(98, 186, {138:1, 98:1, 89:1, 12:1, 15:1}, TextArea_0);
_.createInputElement = function createInputElement_0(type_0){
  return castToNative(castTo($css(new DominoElement((new TextContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('textarea'), $wnd.HTMLElement))).element), 'no-resize'), 3).wrappedElement, $wnd.HTMLTextAreaElement);
}
;
_.getValue_0 = function getValue_9(){
  return $getValue_2(this);
}
;
_.getStringValue = function getStringValue_1(){
  return $getValue_2(this);
}
;
_.onEnterKey = function onEnterKey_0(){
}
;
_.emptyAsNull = false;
var Lorg_dominokit_domino_ui_forms_TextArea_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'TextArea', 98);
function TextArea$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(514, 1, {}, TextArea$lambda$0$Type);
_.handleEvent = function handleEvent_29(arg0){
  $adjustHeight(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_forms_TextArea$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'TextArea/lambda$0$Type', 514);
function TextArea$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(515, 1, $intern_30, TextArea$lambda$1$Type);
_.onObserved = function onObserved_2(arg0){
  $adjustHeight(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_forms_TextArea$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'TextArea/lambda$1$Type', 515);
function $getValue_3(this$static){
  var value_0;
  value_0 = castToNative((new DominoElement(this$static.inputElement.wrappedElement)).wrappedElement, $wnd.HTMLInputElement).value;
  if (value_0.length == 0 && this$static.emptyAsNull) {
    return null;
  }
  return value_0;
}

function TextBox(){
  TextBox_0.call(this, 'text');
}

function TextBox_0(type_0){
  AbstractValueBox.call(this, type_0, '');
}

defineClass(90, 186, {138:1, 90:1, 89:1, 12:1, 15:1}, TextBox, TextBox_0);
_.createInputElement = function createInputElement_1(type_0){
  return castToNative(input_1(type_0).element, $wnd.HTMLInputElement);
}
;
_.getValue_0 = function getValue_10(){
  return $getValue_3(this);
}
;
_.getStringValue = function getStringValue_2(){
  return $getValue_3(this);
}
;
_.emptyAsNull = false;
var Lorg_dominokit_domino_ui_forms_TextBox_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'TextBox', 90);
function ValueBox$0methodref$setFixErrorsPosition$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(525, 1, {}, ValueBox$0methodref$setFixErrorsPosition$Type);
_.accept = function accept_49(arg0){
  $setFixErrorsPosition(this.$$outer_0, $booleanValue(castToBoolean(arg0)));
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$0methodref$setFixErrorsPosition$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/0methodref$setFixErrorsPosition$Type', 525);
function ValueBox$1methodref$setFloating$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(526, 1, {}, ValueBox$1methodref$setFloating$Type);
_.accept = function accept_50(arg0){
  $setFloating(this.$$outer_0, $booleanValue(castToBoolean(arg0)));
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$1methodref$setFloating$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/1methodref$setFloating$Type', 526);
defineClass(831, 1, {});
var Lorg_dominokit_domino_ui_forms_ValueBox$AutoValidator_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/AutoValidator', 831);
function ValueBox$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(518, 1, $intern_35, ValueBox$lambda$0$Type);
_.apply_1 = function apply_21(){
  $lambda$0_16(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$0$Type', 518);
function ValueBox$lambda$1$Type(){
}

defineClass(517, 1, $intern_35, ValueBox$lambda$1$Type);
_.apply_1 = function apply_22(){
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$1$Type', 517);
function ValueBox$lambda$10$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(527, 1, {}, ValueBox$lambda$10$Type);
_.accept = function accept_51(arg0){
  $lambda$10_1(this.$$outer_0, castToBoolean(arg0));
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$10$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$10$Type', 527);
function ValueBox$lambda$11$Type(){
}

defineClass(528, 1, {}, ValueBox$lambda$11$Type);
_.handleEvent = function handleEvent_30(arg0){
  $clinit_DominoUIConfig();
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$11$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$11$Type', 528);
function ValueBox$lambda$12$Type(){
}

defineClass(529, 1, {}, ValueBox$lambda$12$Type);
_.handleElement = function handleElement_1(arg0){
  castTo(arg0, 60);
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$12$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$12$Type', 529);
function ValueBox$lambda$13$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(530, 1, {}, ValueBox$lambda$13$Type);
_.accept = function accept_52(arg0){
  $lambda$13(this.$$outer_0, castTo(arg0, 3));
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$13$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$13$Type', 530);
function ValueBox$lambda$14$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(226, 1, {}, ValueBox$lambda$14$Type);
_.accept = function accept_53(arg0){
  var lastArg;
  null.$_nullMethod((lastArg = this.$$outer_0 , throwClassCastExceptionUnlessNull(arg0) , lastArg).getValue_0());
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$14$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$14$Type', 226);
function ValueBox$lambda$15$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(531, 1, {}, ValueBox$lambda$15$Type);
_.handleEvent = function handleEvent_31(arg0){
  $doFocus(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$15$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$15$Type', 531);
function ValueBox$lambda$16$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(532, 1, {}, ValueBox$lambda$16$Type);
_.handleEvent = function handleEvent_32(arg0){
  $lambda$16_0(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$16$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$16$Type', 532);
function ValueBox$lambda$17$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(533, 1, $intern_30, ValueBox$lambda$17$Type);
_.onObserved = function onObserved_3(arg0){
  $tryFocus(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$17$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$17$Type', 533);
function ValueBox$lambda$19$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(534, 1, {}, ValueBox$lambda$19$Type);
_.accept = function accept_54(arg0){
  $lambda$19(this.$$outer_0, castTo(arg0, 3));
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$19$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$19$Type', 534);
function ValueBox$lambda$2$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(521, 1, $intern_35, ValueBox$lambda$2$Type);
_.apply_1 = function apply_23(){
  $lambda$2_5(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$2$Type', 521);
function ValueBox$lambda$3$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(519, 1, {}, ValueBox$lambda$3$Type);
_.handleEvent = function handleEvent_33(arg0){
  $lambda$3_8(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$3$Type', 519);
function ValueBox$lambda$4$Type(){
}

defineClass(520, 1, $intern_35, ValueBox$lambda$4$Type);
_.apply_1 = function apply_24(){
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$4$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$4$Type', 520);
function ValueBox$lambda$5$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(522, 1, {}, ValueBox$lambda$5$Type);
_.handleEvent = function handleEvent_34(arg0){
  $callChangeHandlers(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$5$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$5$Type', 522);
function ValueBox$lambda$6$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(523, 1, {}, ValueBox$lambda$6$Type);
_.handleEvent = function handleEvent_35(arg0){
  $lambda$6_2(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$6$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$6$Type', 523);
function ValueBox$lambda$7$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(524, 1, {}, ValueBox$lambda$7$Type);
_.handleEvent = function handleEvent_36(arg0){
  $lambda$7(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$7$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$7$Type', 524);
function $addValidator_0(this$static, validator){
  $add_1(this$static.validators, validator);
}

function $validate_0(this$static, silent){
  var entry, outerIter, result, validator, validator$iterator;
  this$static.element.clearInvalid();
  if (this$static.element.getInputElement().element_3().hasAttribute('disabled')) {
    return new ValidationResult;
  }
  for (validator$iterator = (outerIter = (new AbstractMap$1(this$static.validators.map_0)).this$01.entrySet().iterator() , new AbstractMap$1$1(outerIter)); validator$iterator.val$outerIter2.hasNext_0();) {
    validator = (entry = castTo(validator$iterator.val$outerIter2.next_1(), 24) , castTo(entry.getKey(), 251));
    result = validator.isValid();
    if (!result.valid) {
      silent || this$static.element.invalidate(result.errorMessage);
      return result;
    }
  }
  return new ValidationResult;
}

function ElementValidations(element){
  this.validators = new LinkedHashSet;
  this.element = element;
}

defineClass(673, 1, {}, ElementValidations);
var Lorg_dominokit_domino_ui_forms_validations_ElementValidations_2_classLit = createForClass('org.dominokit.domino.ui.forms.validations', 'ElementValidations', 673);
function InputAutoValidator(){
}

defineClass(676, 831, {}, InputAutoValidator);
var Lorg_dominokit_domino_ui_forms_validations_InputAutoValidator_2_classLit = createForClass('org.dominokit.domino.ui.forms.validations', 'InputAutoValidator', 676);
function MinLengthValidator(valueBox){
  this.valueBox = valueBox;
}

defineClass(694, 1, {251:1}, MinLengthValidator);
_.isValid = function isValid(){
  if ((new DominoElement(this.valueBox.inputElement.wrappedElement)).wrappedElement.validity.tooShort) {
    return new ValidationResult_0(false, 'Minimum length is ' + this.valueBox.minLength);
  }
  return new ValidationResult;
}
;
var Lorg_dominokit_domino_ui_forms_validations_MinLengthValidator_2_classLit = createForClass('org.dominokit.domino.ui.forms.validations', 'MinLengthValidator', 694);
function RequiredValidator(element){
  this.element = element;
}

defineClass(671, 1, {251:1}, RequiredValidator);
_.isValid = function isValid_0(){
  if (this.element.isEmpty_0()) {
    return new ValidationResult_0(false, this.element.requiredErrorMessage);
  }
  return new ValidationResult;
}
;
var Lorg_dominokit_domino_ui_forms_validations_RequiredValidator_2_classLit = createForClass('org.dominokit.domino.ui.forms.validations', 'RequiredValidator', 671);
function ValidationResult(){
  ValidationResult_0.call(this, true, '');
}

function ValidationResult_0(valid, errorMessage){
  this.valid = valid;
  this.errorMessage = errorMessage;
}

defineClass(81, 1, {}, ValidationResult, ValidationResult_0);
_.valid = false;
var Lorg_dominokit_domino_ui_forms_validations_ValidationResult_2_classLit = createForClass('org.dominokit.domino.ui.forms.validations', 'ValidationResult', 81);
function $clinit_FlexDirection(){
  $clinit_FlexDirection = emptyMethod;
  LEFT_TO_RIGHT = new FlexDirection('LEFT_TO_RIGHT', 0, 'flex-dir-row');
  RIGHT_TO_LEFT = new FlexDirection('RIGHT_TO_LEFT', 1, 'flex-dir-row-reverse');
  TOP_TO_BOTTOM = new FlexDirection('TOP_TO_BOTTOM', 2, 'flex-dir-column');
  BOTTOM_TO_TOP = new FlexDirection('BOTTOM_TO_TOP', 3, 'flex-dir-column-reverse');
}

function FlexDirection(enum$name, enum$ordinal, style){
  Enum.call(this, enum$name, enum$ordinal);
  this.style_0 = style;
}

function values_7(){
  $clinit_FlexDirection();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_grid_flex_FlexDirection_2_classLit, 1), $intern_0, 113, 0, [LEFT_TO_RIGHT, RIGHT_TO_LEFT, TOP_TO_BOTTOM, BOTTOM_TO_TOP]);
}

defineClass(113, 21, {4:1, 34:1, 21:1, 113:1, 852:1}, FlexDirection);
_.getStyle = function getStyle_1(){
  return this.style_0;
}
;
var BOTTOM_TO_TOP, LEFT_TO_RIGHT, RIGHT_TO_LEFT, TOP_TO_BOTTOM;
var Lorg_dominokit_domino_ui_grid_flex_FlexDirection_2_classLit = createForEnum('org.dominokit.domino.ui.grid.flex', 'FlexDirection', 113, values_7);
function $setFlexGrow(this$static){
  $setCssProperty_0((this$static.styleInitializer.apply_1() , this$static.style_0), 'flex-grow', '1');
  return this$static;
}

function $setOrder(this$static, order){
  $setCssProperty_0((this$static.styleInitializer.apply_1() , this$static.style_0), 'order', '' + order);
  return this$static;
}

function FlexItem(){
  FlexItem_0.call(this, (new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element);
}

function FlexItem_0(root){
  BaseDominoElement.call(this);
  this.element = root;
  $init(this, this);
  $addCss_1((this.styleInitializer.apply_1() , this.style_0), 'flex-item');
}

defineClass(20, 12, {20:1, 12:1, 15:1}, FlexItem);
_.element_3 = function element_16(){
  return this.element;
}
;
var Lorg_dominokit_domino_ui_grid_flex_FlexItem_2_classLit = createForClass('org.dominokit.domino.ui.grid.flex', 'FlexItem', 20);
function $clinit_FlexJustifyContent(){
  $clinit_FlexJustifyContent = emptyMethod;
  START = new FlexJustifyContent('START', 0, 'flex-just-start');
  END = new FlexJustifyContent('END', 1, 'flex-just-end');
  CENTER = new FlexJustifyContent('CENTER', 2, 'flex-just-center');
  SPACE_BETWEEN = new FlexJustifyContent('SPACE_BETWEEN', 3, 'flex-just-space-between');
  SPACE_AROUND = new FlexJustifyContent('SPACE_AROUND', 4, 'flex-just-space-around');
  SPACE_EVENLY = new FlexJustifyContent('SPACE_EVENLY', 5, 'flex-just-space-evenly');
}

function FlexJustifyContent(enum$name, enum$ordinal, style){
  Enum.call(this, enum$name, enum$ordinal);
  this.style_0 = style;
}

function values_8(){
  $clinit_FlexJustifyContent();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_grid_flex_FlexJustifyContent_2_classLit, 1), $intern_0, 88, 0, [START, END, CENTER, SPACE_BETWEEN, SPACE_AROUND, SPACE_EVENLY]);
}

defineClass(88, 21, {4:1, 34:1, 21:1, 88:1, 852:1}, FlexJustifyContent);
_.getStyle = function getStyle_2(){
  return this.style_0;
}
;
var CENTER, END, SPACE_AROUND, SPACE_BETWEEN, SPACE_EVENLY, START;
var Lorg_dominokit_domino_ui_grid_flex_FlexJustifyContent_2_classLit = createForEnum('org.dominokit.domino.ui.grid.flex', 'FlexJustifyContent', 88, values_8);
function $appendChild_2(this$static, flexItem){
  $add_0(this$static.flexItems, flexItem);
  $appendChild(this$static, flexItem.element);
  return this$static;
}

function $replaceCssClass(this$static, original, replacement){
  !!original && $removeCss(this$static.element, original.getStyle());
  $addCss(this$static.element, replacement.getStyle());
}

function $setDirection(this$static, direction){
  $replaceCssClass(this$static, this$static.flexDirection, direction);
  this$static.flexDirection = direction;
  return this$static;
}

function $setJustifyContent(this$static, justifyContent){
  $replaceCssClass(this$static, this$static.flexJustifyContent, justifyContent);
  this$static.flexJustifyContent = justifyContent;
  return this$static;
}

function FlexLayout(){
  BaseDominoElement.call(this);
  this.element = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element), 'flex-layout'), 3);
  this.flexItems = new ArrayList;
  $init(this, this);
}

defineClass(60, 12, {60:1, 12:1, 15:1}, FlexLayout);
_.element_3 = function element_17(){
  return castToNative(this.element.wrappedElement, $wnd.HTMLDivElement);
}
;
var Lorg_dominokit_domino_ui_grid_flex_FlexLayout_2_classLit = createForClass('org.dominokit.domino.ui.grid.flex', 'FlexLayout', 60);
function $addClickListener_0(this$static, listener){
  $addEventListener(this$static.icon_0, ($clinit_EventType() , click_0).name_0, listener);
  return this$static;
}

function $clickable(this$static){
  $addCss_1((this$static.styleInitializer.apply_1() , this$static.style_0), 'clickable-icon');
  this$static.wavesSupport_0 = $initWaves_0(new WavesSupport(this$static.element_0.element_3()));
  this$static.element_3().setAttribute('tabindex', '0');
  this$static.element_3().setAttribute('aria-expanded', 'true');
  this$static.element_3().setAttribute('href', '#');
  return this$static;
}

function $setClickable(this$static, clickable){
  if (clickable) {
    $clickable(this$static);
  }
   else {
    $removeCss_1((this$static.styleInitializer.apply_1() , this$static.style_0), 'clickable-icon');
    !!this$static.wavesSupport_0 && $removeWaves_0(this$static.wavesSupport_0);
  }
  return this$static;
}

function $setColor_2(this$static, color_0){
  if (!color_0)
    return this$static;
  !!this$static.color_0 && $removeCss(this$static.icon_0, this$static.color_0.getStyle());
  $addCss(this$static.icon_0, color_0.getStyle());
  this$static.color_0 = color_0;
  return this$static;
}

function BaseIcon(){
  BaseDominoElement.call(this);
}

defineClass(224, 12, $intern_15);
_.element_3 = function element_18(){
  return this.icon_0.wrappedElement;
}
;
var Lorg_dominokit_domino_ui_icons_BaseIcon_2_classLit = createForClass('org.dominokit.domino.ui.icons', 'BaseIcon', 224);
function Icon(icon){
  BaseIcon.call(this);
  this.icon_0 = new DominoElement(icon);
  $init(this, this);
}

function create_12(icon){
  var iconElement;
  iconElement = new Icon(castTo($textContent(castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('i'), $wnd.HTMLElement))).element), 'material-icons'), 3), icon), 3).wrappedElement);
  iconElement.name_0 = icon;
  return iconElement;
}

defineClass(56, 224, {56:1, 12:1, 15:1}, Icon);
_.element_3 = function element_19(){
  return this.icon_0.wrappedElement;
}
;
var Lorg_dominokit_domino_ui_icons_Icon_2_classLit = createForClass('org.dominokit.domino.ui.icons', 'Icon', 56);
function $setSize_1(this$static, mdiSize){
  !!this$static.mdiSize && $removeCss(this$static, this$static.mdiSize.style_0);
  this$static.mdiSize = mdiSize;
  $addCss(this$static, this$static.mdiSize.style_0);
  return this$static;
}

function MdiIcon(icon){
  var lastArg;
  MdiIcon_0.call(this, (lastArg = icon , $replace(icon, 'mdi-', '') , new MdiMeta , lastArg));
}

function MdiIcon_0(icon){
  BaseIcon.call(this);
  this.icon_0 = castTo($css(castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('i'), $wnd.HTMLElement))).element), 'mdi'), 3), icon), 3);
  this.name_0 = icon;
  $init(this, this);
  $setSize_1(this, ($clinit_MdiIcon$MdiSize() , mdi24));
}

defineClass(73, 224, {73:1, 12:1, 15:1}, MdiIcon);
_.element_3 = function element_20(){
  return this.icon_0.wrappedElement;
}
;
var Lorg_dominokit_domino_ui_icons_MdiIcon_2_classLit = createForClass('org.dominokit.domino.ui.icons', 'MdiIcon', 73);
function $clinit_MdiIcon$MdiSize(){
  $clinit_MdiIcon$MdiSize = emptyMethod;
  mdi18 = new MdiIcon$MdiSize('mdi18', 0, 'mdi-18px');
  mdi24 = new MdiIcon$MdiSize('mdi24', 1, 'mdi-24px');
  mdi36 = new MdiIcon$MdiSize('mdi36', 2, 'mdi-36px');
  mdi48 = new MdiIcon$MdiSize('mdi48', 3, 'mdi-48px');
}

function MdiIcon$MdiSize(enum$name, enum$ordinal, style){
  Enum.call(this, enum$name, enum$ordinal);
  this.style_0 = style;
}

function values_9(){
  $clinit_MdiIcon$MdiSize();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_icons_MdiIcon$MdiSize_2_classLit, 1), $intern_0, 117, 0, [mdi18, mdi24, mdi36, mdi48]);
}

defineClass(117, 21, {4:1, 34:1, 21:1, 117:1}, MdiIcon$MdiSize);
var mdi18, mdi24, mdi36, mdi48;
var Lorg_dominokit_domino_ui_icons_MdiIcon$MdiSize_2_classLit = createForEnum('org.dominokit.domino.ui.icons', 'MdiIcon/MdiSize', 117, values_9);
function MdiMeta(){
  new ArrayList;
  new ArrayList;
}

defineClass(742, 1, {}, MdiMeta);
var Lorg_dominokit_domino_ui_icons_MdiMeta_2_classLit = createForClass('org.dominokit.domino.ui.icons', 'MdiMeta', 742);
function $addHandler_0(this$static, type_0, handlerContext){
  $putStringValue(this$static.handlers, type_0, handlerContext);
  return this$static;
}

function $lambda$0_18(this$static, evt_0){
  var handlerContext, key, keyboardEvent;
  keyboardEvent = evt_0;
  if (keyboardEvent.key == null)
    return;
  key = keyboardEvent.key.toLowerCase();
  handlerContext = null;
  keyboardEvent.ctrlKey && $hasStringValue(this$static.ctrlHandlers, key)?(handlerContext = castTo($getStringValue(this$static.ctrlHandlers, key), 115)):$hasStringValue(this$static.handlers, key) && (handlerContext = castTo($getStringValue(this$static.handlers, key), 115));
  !!handlerContext && handlerContext.handler.handleEvent(evt_0);
}

function KeyboardEvents(eventType, elements){
  var element, element$iterator;
  this.handlers = new HashMap;
  this.ctrlHandlers = new HashMap;
  for (element$iterator = elements.iterator(); element$iterator.hasNext_0();) {
    element = castToNative(element$iterator.next_1(), $wnd.Node);
    element.addEventListener(eventType, new KeyboardEvents$lambda$0$Type(this));
  }
}

function KeyboardEvents_0(eventType, elements){
  KeyboardEvents.call(this, eventType, new Arrays$ArrayList(elements));
}

function listenOnKeyDown(elements){
  return new KeyboardEvents('keydown', castTo($collect($map(stream_1(elements, elements.length), new KeyboardEvents$1methodref$element$Type), of_1(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$42$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_0, 29, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)]))), 18));
}

defineClass(163, 1, {}, KeyboardEvents, KeyboardEvents_0);
var Lorg_dominokit_domino_ui_keyboard_KeyboardEvents_2_classLit = createForClass('org.dominokit.domino.ui.keyboard', 'KeyboardEvents', 163);
function KeyboardEvents$1methodref$element$Type(){
}

defineClass(675, 1, {}, KeyboardEvents$1methodref$element$Type);
_.apply_0 = function apply_25(arg0){
  return castTo(arg0, 15).element_3();
}
;
var Lorg_dominokit_domino_ui_keyboard_KeyboardEvents$1methodref$element$Type_2_classLit = createForClass('org.dominokit.domino.ui.keyboard', 'KeyboardEvents/1methodref$element$Type', 675);
function KeyboardEvents$HandlerContext(handler){
  this.handler = handler;
}

defineClass(115, 1, {115:1}, KeyboardEvents$HandlerContext);
var Lorg_dominokit_domino_ui_keyboard_KeyboardEvents$HandlerContext_2_classLit = createForClass('org.dominokit.domino.ui.keyboard', 'KeyboardEvents/HandlerContext', 115);
function KeyboardEvents$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(674, 1, {}, KeyboardEvents$lambda$0$Type);
_.handleEvent = function handleEvent_37(arg0){
  $lambda$0_18(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_keyboard_KeyboardEvents$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.keyboard', 'KeyboardEvents/lambda$0$Type', 674);
function BaseModal$0methodref$doClose$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(483, 1, {197:1}, BaseModal$0methodref$doClose$Type);
_.apply_1 = function apply_26(){
  $doClose(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_modals_BaseModal$0methodref$doClose$Type_2_classLit = createForClass('org.dominokit.domino.ui.modals', 'BaseModal/0methodref$doClose$Type', 483);
function BaseModal$1methodref$onOpen$Type(){
}

defineClass(485, 1, {}, BaseModal$1methodref$onOpen$Type);
_.accept = function accept_55(arg0){
  $lambda$8(castTo(arg0, 847).$$outer_0);
}
;
var Lorg_dominokit_domino_ui_modals_BaseModal$1methodref$onOpen$Type_2_classLit = createForClass('org.dominokit.domino.ui.modals', 'BaseModal/1methodref$onOpen$Type', 485);
function BaseModal$2methodref$onClose$Type(){
}

defineClass(486, 1, {}, BaseModal$2methodref$onClose$Type);
_.accept = function accept_56(arg0){
  castTo(arg0, 848);
  $clinit_BaseModal();
}
;
var Lorg_dominokit_domino_ui_modals_BaseModal$2methodref$onClose$Type_2_classLit = createForClass('org.dominokit.domino.ui.modals', 'BaseModal/2methodref$onClose$Type', 486);
function BaseModal$Modal(){
  this.root_0 = castTo($elevate(castTo($setAttribute_0(castTo($css(castTo($setTabIndex(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element)), 3), 'modal'), 3), 'role', 'dialog'), 3), of_3(($clinit_DominoUIConfig() , INSTANCE_15).defaultModalElevation)), 3);
  this.modalDialog = castTo($setAttribute_0(castTo($css(castTo($setTabIndex(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element)), 3), 'modal-dialog'), 3), 'role', 'document'), 3);
  this.modalContent = castTo($css($setDirection(new FlexLayout, ($clinit_FlexDirection() , TOP_TO_BOTTOM)), 'modal-content'), 60);
  this.modalHeader = castTo($css(new FlexItem, 'modal-header'), 20);
  this.modalTitle = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('h4'), $wnd.HTMLElement))).element), 'modal-title'), 3);
  this.modalBody = castTo($css($setFlexGrow(new FlexItem), 'modal-body'), 20);
  this.modalFooter = castTo($css(new FlexItem, 'modal-footer'), 20);
  $appendChild_0(this.root_0, $appendChild_0(this.modalDialog, $appendChild_2($appendChild_2($appendChild_2(this.modalContent, castTo($appendChild_0(this.modalHeader, this.modalTitle), 20)), this.modalBody), this.modalFooter)));
  $hide(this.root_0);
}

defineClass(482, 1, $intern_31, BaseModal$Modal);
_.element_3 = function element_21(){
  return castToNative(this.root_0.wrappedElement, $wnd.HTMLDivElement);
}
;
var Lorg_dominokit_domino_ui_modals_BaseModal$Modal_2_classLit = createForClass('org.dominokit.domino.ui.modals', 'BaseModal/Modal', 482);
function BaseModal$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(484, 1, {}, BaseModal$lambda$1$Type);
_.handleEvent = function handleEvent_38(arg0){
  $lambda$1_8(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_modals_BaseModal$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.modals', 'BaseModal/lambda$1$Type', 484);
function BaseModal$lambda$3$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(222, 1, $intern_32, BaseModal$lambda$3$Type);
_.run = function run_6(){
  $clinit_DomGlobal();
  $wnd.goog.global.setTimeout(makeLambdaFunction(BaseModal$lambda$4$Type.prototype.onInvoke_0, BaseModal$lambda$4$Type, [this.$$outer_0]), 0);
}
;
var Lorg_dominokit_domino_ui_modals_BaseModal$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.ui.modals', 'BaseModal/lambda$3$Type', 222);
function BaseModal$lambda$4$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(882, $wnd.Function, {}, BaseModal$lambda$4$Type);
_.onInvoke_0 = function onInvoke_2(arg0){
  $lambda$4_6(this.$$outer_0);
}
;
function $clinit_DefaultZIndexManager(){
  $clinit_DefaultZIndexManager = emptyMethod;
  modals = new LinkedList;
}

function $getNextZIndex(this$static){
  !this$static.currentZIndex && (this$static.currentZIndex = valueOf(($clinit_DominoUIConfig() , INSTANCE_15).initialZIndex));
  this$static.currentZIndex = valueOf(this$static.currentZIndex.value_0 + ($clinit_DominoUIConfig() , INSTANCE_15).zIndexIncrement);
  return this$static.currentZIndex;
}

function $onPopupClose(this$static, popup){
  var backdropZIndex, modalZIndex;
  if (popup.isModal()) {
    $advanceToFind(modals, popup, true);
    if (modals.size_0 == 0) {
      $remove_0(($clinit_ModalBackDrop() , INSTANCE_14));
    }
     else {
      backdropZIndex = $getNextZIndex(this$static);
      $setZIndex(($clinit_ModalBackDrop() , INSTANCE_14), backdropZIndex.value_0);
      modalZIndex = $getNextZIndex(this$static);
      castTo($peek(modals), 119).setZIndex(modalZIndex.value_0);
      $forEach_0(this$static.listeners, new DefaultZIndexManager$lambda$1$Type);
    }
  }
}

function $onPopupOpen(this$static, popup){
  var nextZIndex, nextZIndex0;
  if (popup.isModal()) {
    nextZIndex0 = $getNextZIndex(this$static);
    $setZIndex(($clinit_ModalBackDrop() , INSTANCE_14), nextZIndex0.value_0);
    $isAttached(INSTANCE_14) || $appendChild_0(new DominoElement(($clinit_DomGlobal() , document_0).body), INSTANCE_14);
    $push(modals, popup);
  }
  nextZIndex = $getNextZIndex(this$static);
  popup.setZIndex(nextZIndex.value_0);
  $forEach_0(this$static.listeners, new DefaultZIndexManager$lambda$0$Type);
}

function DefaultZIndexManager(){
  $clinit_DefaultZIndexManager();
  this.listeners = new ArrayList;
}

defineClass(390, 1, {}, DefaultZIndexManager);
var modals;
var Lorg_dominokit_domino_ui_modals_DefaultZIndexManager_2_classLit = createForClass('org.dominokit.domino.ui.modals', 'DefaultZIndexManager', 390);
function DefaultZIndexManager$lambda$0$Type(){
}

defineClass(391, 1, {}, DefaultZIndexManager$lambda$0$Type);
_.accept = function accept_57(arg0){
  throwClassCastExceptionUnlessNull(arg0);
  $clinit_DefaultZIndexManager();
  null.$_nullMethod();
}
;
var Lorg_dominokit_domino_ui_modals_DefaultZIndexManager$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.modals', 'DefaultZIndexManager/lambda$0$Type', 391);
function DefaultZIndexManager$lambda$1$Type(){
}

defineClass(392, 1, {}, DefaultZIndexManager$lambda$1$Type);
_.accept = function accept_58(arg0){
  $clinit_DefaultZIndexManager();
  throwClassCastExceptionUnlessNull(arg0);
  null.$_nullMethod((castTo($peek(modals), 119) , new ZIndexManager$ZIndexListener$ZIndexInfo));
}
;
var Lorg_dominokit_domino_ui_modals_DefaultZIndexManager$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.modals', 'DefaultZIndexManager/lambda$1$Type', 392);
function $clinit_IsModalDialog$ModalSize(){
  $clinit_IsModalDialog$ModalSize = emptyMethod;
  LARGE_0 = new IsModalDialog$ModalSize('LARGE', 0, 'modal-lg');
  ALERT = new IsModalDialog$ModalSize('ALERT', 1, 'modal-alert');
  SMALL_0 = new IsModalDialog$ModalSize('SMALL', 2, 'modal-sm');
}

function IsModalDialog$ModalSize(enum$name, enum$ordinal, style){
  Enum.call(this, enum$name, enum$ordinal);
  this.style_0 = style;
}

function values_10(){
  $clinit_IsModalDialog$ModalSize();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_modals_IsModalDialog$ModalSize_2_classLit, 1), $intern_0, 125, 0, [LARGE_0, ALERT, SMALL_0]);
}

defineClass(125, 21, {4:1, 34:1, 21:1, 125:1}, IsModalDialog$ModalSize);
var ALERT, LARGE_0, SMALL_0;
var Lorg_dominokit_domino_ui_modals_IsModalDialog$ModalSize_2_classLit = createForEnum('org.dominokit.domino.ui.modals', 'IsModalDialog/ModalSize', 125, values_10);
function $clinit_ModalBackDrop(){
  $clinit_ModalBackDrop = emptyMethod;
  INSTANCE_14 = new ModalBackDrop;
}

function $lambda$1_10(this$static, event_0){
  event_0.preventDefault();
  event_0.stopPropagation();
  $isEqualNode(this$static.element, event_0.target) && $ifPresent(($clinit_DominoUIConfig() , ofNullable(castTo($peek(($clinit_DefaultZIndexManager() , modals)), 119))), new ModalBackDrop$lambda$3$Type);
}

function $lambda$2_6(this$static, event_0){
  $isEqualNode(this$static.element, event_0.target) && $ifPresent(($clinit_DominoUIConfig() , ofNullable(castTo($peek(($clinit_DefaultZIndexManager() , modals)), 119))), new ModalBackDrop$lambda$3$Type);
}

function ModalBackDrop(){
  BaseDominoElement.call(this);
  this.element = new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element);
  $init(this, this);
  $addEventListener_1(castTo($addEventListener_1(castTo($addEventListener(castTo($setTabIndex(castTo($css(castTo($css(castTo($css(this.element, 'modal-backdrop'), 3), 'fade'), 3), 'in'), 3)), 3), 'scroll', new ModalBackDrop$lambda$0$Type), 3), ($clinit_EventType() , click_0), new ModalBackDrop$lambda$1$Type(this)), 3), keypress, new ModalBackDrop$lambda$2$Type(this));
}

function lambda$3_2(popup_0){
  $clinit_ModalBackDrop();
  popup_0.isAutoClose()?popup_0.close_0():popup_0.stealFocus();
}

defineClass(500, 12, $intern_15, ModalBackDrop);
_.element_3 = function element_22(){
  return castToNative(this.element.wrappedElement, $wnd.HTMLDivElement);
}
;
var INSTANCE_14;
var Lorg_dominokit_domino_ui_modals_ModalBackDrop_2_classLit = createForClass('org.dominokit.domino.ui.modals', 'ModalBackDrop', 500);
function ModalBackDrop$0methodref$remove$Type(){
}

defineClass(179, 1, {}, ModalBackDrop$0methodref$remove$Type);
_.accept = function accept_59(arg0){
  castTo(arg0, 12).remove_0();
}
;
var Lorg_dominokit_domino_ui_modals_ModalBackDrop$0methodref$remove$Type_2_classLit = createForClass('org.dominokit.domino.ui.modals', 'ModalBackDrop/0methodref$remove$Type', 179);
function ModalBackDrop$lambda$0$Type(){
}

defineClass(501, 1, {}, ModalBackDrop$lambda$0$Type);
_.handleEvent = function handleEvent_39(arg0){
  $clinit_ModalBackDrop();
  arg0.preventDefault();
  arg0.stopPropagation();
}
;
var Lorg_dominokit_domino_ui_modals_ModalBackDrop$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.modals', 'ModalBackDrop/lambda$0$Type', 501);
function ModalBackDrop$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(502, 1, {}, ModalBackDrop$lambda$1$Type);
_.handleEvent = function handleEvent_40(arg0){
  $lambda$1_10(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_modals_ModalBackDrop$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.modals', 'ModalBackDrop/lambda$1$Type', 502);
function ModalBackDrop$lambda$2$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(503, 1, {}, ModalBackDrop$lambda$2$Type);
_.handleEvent = function handleEvent_41(arg0){
  $lambda$2_6(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_modals_ModalBackDrop$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.modals', 'ModalBackDrop/lambda$2$Type', 503);
function ModalBackDrop$lambda$3$Type(){
}

defineClass(225, 1, {}, ModalBackDrop$lambda$3$Type);
_.accept = function accept_60(arg0){
  lambda$3_2(castTo(arg0, 119));
}
;
var Lorg_dominokit_domino_ui_modals_ModalBackDrop$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.ui.modals', 'ModalBackDrop/lambda$3$Type', 225);
function ZIndexManager$ZIndexListener$ZIndexInfo(){
}

defineClass(389, 1, {}, ZIndexManager$ZIndexListener$ZIndexInfo);
var Lorg_dominokit_domino_ui_modals_ZIndexManager$ZIndexListener$ZIndexInfo_2_classLit = createForClass('org.dominokit.domino.ui.modals', 'ZIndexManager/ZIndexListener/ZIndexInfo', 389);
function $lambda$0_19(this$static, element_1, e_1){
  var htmlElement, newPosition, position;
  htmlElement = castToNative(e_1, $wnd.HTMLElement);
  position = __parseAndValidateInt(htmlElement.getAttribute('data-position'));
  if (maskUndefined(htmlElement) !== maskUndefined(element_1)) {
    newPosition = position + (element_1.offsetHeight + this$static.getOffsetPosition(element_1));
    htmlElement.setAttribute('data-position', newPosition);
    htmlElement.style.setProperty(this$static.positionProperty, newPosition + 'px');
  }
}

function $lambda$1_11(this$static, dataPosition_1, height_2, e_2){
  var htmlElement, newPosition, position;
  htmlElement = castToNative(e_2, $wnd.HTMLElement);
  position = __parseAndValidateInt(htmlElement.getAttribute('data-position'));
  if (position > dataPosition_1) {
    newPosition = position - height_2 - 20;
    e_2.setAttribute('data-position', newPosition);
    htmlElement.style.setProperty(this$static.positionProperty, newPosition + 'px');
  }
}

function $onBeforeAttach(this$static, element){
  element.setAttribute('data-position', '20');
  element.setAttribute('data-notify-position', this$static.selector);
  this$static.onBeforePosition(element);
}

function $onNewElement(this$static, element){
  var elements;
  elements = $asList(($clinit_DomGlobal() , document_0).querySelectorAll('div[data-notify-position=' + this$static.selector + ']'));
  $forEach_1(elements, new NotificationPosition$lambda$0$Type(this$static, element));
}

function $onRemoveElement(this$static, dataPosition, height){
  var elements;
  elements = $asList(($clinit_DomGlobal() , document_0).querySelectorAll('div[data-notify-position=' + this$static.selector + ']'));
  $forEach_1(elements, new NotificationPosition$lambda$1$Type(this$static, dataPosition, height));
}

function NotificationPosition(selector, positionProperty){
  this.selector = selector;
  this.positionProperty = positionProperty;
}

defineClass(116, 1, {});
var Lorg_dominokit_domino_ui_notifications_NotificationPosition_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'NotificationPosition', 116);
function BottomCenterPosition(){
  NotificationPosition.call(this, 'bottom-center', 'bottom');
}

defineClass(728, 116, {}, BottomCenterPosition);
_.getOffsetPosition = function getOffsetPosition(element){
  return 20;
}
;
_.onBeforePosition = function onBeforePosition(element){
  element.style.setProperty('bottom', '20px');
  element.style.setProperty('right', '0px');
  element.style.setProperty('left', '50%');
  element.style.setProperty('transform', 'translate(-50%)');
}
;
var Lorg_dominokit_domino_ui_notifications_BottomCenterPosition_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'BottomCenterPosition', 728);
function BottomLeftPosition(){
  NotificationPosition.call(this, 'bottom-left', 'bottom');
}

defineClass(727, 116, {}, BottomLeftPosition);
_.getOffsetPosition = function getOffsetPosition_0(element){
  return 20;
}
;
_.onBeforePosition = function onBeforePosition_0(element){
  element.style.setProperty('bottom', '20px');
  element.style.setProperty('left', '20px');
}
;
var Lorg_dominokit_domino_ui_notifications_BottomLeftPosition_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'BottomLeftPosition', 727);
function BottomRightPosition(){
  NotificationPosition.call(this, 'bottom-right', 'bottom');
}

defineClass(729, 116, {}, BottomRightPosition);
_.getOffsetPosition = function getOffsetPosition_1(element){
  return 20;
}
;
_.onBeforePosition = function onBeforePosition_1(element){
  element.style.setProperty('bottom', '20px');
  element.style.setProperty('right', '20px');
}
;
var Lorg_dominokit_domino_ui_notifications_BottomRightPosition_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'BottomRightPosition', 729);
function $clinit_Notification(){
  $clinit_Notification = emptyMethod;
  new TopLeftPosition;
  TOP_CENTER = new TopCenterPosition;
  TOP_RIGHT = new TopRightPosition;
  new BottomLeftPosition;
  new BottomCenterPosition;
  new BottomRightPosition;
}

function $animateClose(this$static, after, onComplete){
  $animate($callback($transition($delay(new Animation_0(this$static.element), after), this$static.outTransition), new Notification$lambda$4$Type(this$static, onComplete)));
}

function $close_0(this$static, after){
  var dataPosition, height;
  if (!this$static.closed_0) {
    dataPosition = __parseAndValidateInt(this$static.element.getAttribute('data-position'));
    height = this$static.element.offsetHeight;
    $animateClose(this$static, after, new Notification$lambda$2$Type(this$static, dataPosition, height));
  }
}

function $lambda$1_12(this$static){
  $close_0(this$static, this$static.duration);
}

function $lambda$2_7(this$static, dataPosition_1, height_2){
  $onRemoveElement(this$static.position, dataPosition_1, height_2);
  $forEach_0(this$static.closeHandlers, new Notification$0methodref$onClose$Type);
  this$static.closed_0 = true;
}

function $lambda$4_7(this$static, onComplete_1){
  this$static.element.remove();
  $lambda$2_7(onComplete_1.$$outer_0, onComplete_1.dataPosition_1, onComplete_1.height_2);
}

function $setClosable(this$static){
  $toggleDisplay(new DominoElement(this$static.closeButton), false);
  return this$static;
}

function $setPosition(this$static, position){
  this$static.position = position;
  return this$static;
}

function $show_2(this$static){
  this$static.closed_0 = false;
  $onBeforeAttach(this$static.position, this$static.element);
  ($clinit_DomGlobal() , document_0).body.appendChild(this$static.element);
  $onNewElement(this$static.position, this$static.element);
  $animate($callback($transition(new Animation_0(this$static.element), this$static.inTransition), new Notification$lambda$1$Type(this$static)));
  return this$static;
}

function Notification_0(){
  BaseDominoElement.call(this);
  this.closeButton = castToNative(castTo($textContent($style_0(castTo($css(castTo($attr(castTo($attr(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('button'), $wnd.HTMLElement))).element), 'type', 'button'), 3), 'aria-hidden', 'true'), 3), 'close'), 3), 'position: absolute; right: 10px; top: 5px; z-index: 1033;'), '\xD7'), 3).wrappedElement, $wnd.HTMLButtonElement);
  this.messageSpan = (new HtmlContentBuilder(castToNative(document_0.createElement('span'), $wnd.HTMLElement))).element;
  this.element = castToNative(castTo($appendChild(castTo($appendChild($style_0(castTo($attr(castTo($attr(castTo($css(castTo($css(castTo($css(castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), 'bootstrap-notify-container'), 3), 'alert'), 3), 'alert-dismissible'), 3), 'p-r-35'), 3), 'role', 'alert'), 3), 'data-position', '20'), 3), 'display: inline-block; position: fixed; transition: all 800ms ease-in-out; z-index: 99999999;'), this.closeButton), 3), this.messageSpan), 3).wrappedElement, $wnd.HTMLDivElement);
  this.inTransition = ($clinit_Transition() , FADE_IN);
  this.outTransition = FADE_OUT;
  this.position = TOP_RIGHT;
  $clinit_Color();
  this.closeHandlers = new ArrayList;
  $init(this, this);
  $elevate(this, ($clinit_Elevation() , LEVEL_1));
  $addCss_1((this.styleInitializer.apply_1() , this.style_0), 'bg-black');
  this.closeButton.addEventListener(($clinit_EventType() , click_0).name_0, new Notification$lambda$0$Type(this));
}

defineClass(695, 12, $intern_15, Notification_0);
_.element_3 = function element_23(){
  return this.element;
}
;
_.closed_0 = true;
_.duration = 4000;
var TOP_CENTER, TOP_RIGHT;
var Lorg_dominokit_domino_ui_notifications_Notification_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'Notification', 695);
function Notification$0methodref$onClose$Type(){
}

defineClass(698, 1, {}, Notification$0methodref$onClose$Type);
_.accept = function accept_61(arg0){
  throwClassCastExceptionUnlessNull(arg0).$_nullMethod();
}
;
var Lorg_dominokit_domino_ui_notifications_Notification$0methodref$onClose$Type_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'Notification/0methodref$onClose$Type', 698);
function Notification$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(696, 1, {}, Notification$lambda$0$Type);
_.handleEvent = function handleEvent_42(arg0){
  $close_0(this.$$outer_0, 0);
}
;
var Lorg_dominokit_domino_ui_notifications_Notification$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'Notification/lambda$0$Type', 696);
function Notification$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(697, 1, {}, Notification$lambda$1$Type);
_.onComplete = function onComplete_5(arg0){
  $lambda$1_12(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_notifications_Notification$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'Notification/lambda$1$Type', 697);
function Notification$lambda$2$Type($$outer_0, dataPosition_1, height_2){
  this.$$outer_0 = $$outer_0;
  this.dataPosition_1 = dataPosition_1;
  this.height_2 = height_2;
}

defineClass(699, 1, $intern_32, Notification$lambda$2$Type);
_.run = function run_7(){
  $lambda$2_7(this.$$outer_0, this.dataPosition_1, this.height_2);
}
;
_.dataPosition_1 = 0;
_.height_2 = 0;
var Lorg_dominokit_domino_ui_notifications_Notification$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'Notification/lambda$2$Type', 699);
function Notification$lambda$4$Type($$outer_0, onComplete_1){
  this.$$outer_0 = $$outer_0;
  this.onComplete_1 = onComplete_1;
}

defineClass(700, 1, {}, Notification$lambda$4$Type);
_.onComplete = function onComplete_6(arg0){
  $lambda$4_7(this.$$outer_0, this.onComplete_1);
}
;
var Lorg_dominokit_domino_ui_notifications_Notification$lambda$4$Type_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'Notification/lambda$4$Type', 700);
function NotificationPosition$lambda$0$Type($$outer_0, element_1){
  this.$$outer_0 = $$outer_0;
  this.element_1 = element_1;
}

defineClass(723, 1, {}, NotificationPosition$lambda$0$Type);
_.accept = function accept_62(arg0){
  $lambda$0_19(this.$$outer_0, this.element_1, castToNative(arg0, $wnd.Element));
}
;
var Lorg_dominokit_domino_ui_notifications_NotificationPosition$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'NotificationPosition/lambda$0$Type', 723);
function NotificationPosition$lambda$1$Type($$outer_0, dataPosition_1, height_2){
  this.$$outer_0 = $$outer_0;
  this.dataPosition_1 = dataPosition_1;
  this.height_2 = height_2;
}

defineClass(724, 1, {}, NotificationPosition$lambda$1$Type);
_.accept = function accept_63(arg0){
  $lambda$1_11(this.$$outer_0, this.dataPosition_1, this.height_2, castToNative(arg0, $wnd.Element));
}
;
_.dataPosition_1 = 0;
_.height_2 = 0;
var Lorg_dominokit_domino_ui_notifications_NotificationPosition$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'NotificationPosition/lambda$1$Type', 724);
function TopCenterPosition(){
  NotificationPosition.call(this, 'top-center', 'top');
}

defineClass(725, 116, {}, TopCenterPosition);
_.getOffsetPosition = function getOffsetPosition_2(element){
  return element.offsetTop;
}
;
_.onBeforePosition = function onBeforePosition_2(element){
  element.style.setProperty('top', '20px');
  element.style.setProperty('right', '0px');
  element.style.setProperty('left', '50%');
  element.style.setProperty('transform', 'translate(-50%)');
}
;
var Lorg_dominokit_domino_ui_notifications_TopCenterPosition_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'TopCenterPosition', 725);
function TopLeftPosition(){
  NotificationPosition.call(this, 'top-left', 'top');
}

defineClass(722, 116, {}, TopLeftPosition);
_.getOffsetPosition = function getOffsetPosition_3(element){
  return element.offsetTop;
}
;
_.onBeforePosition = function onBeforePosition_3(element){
  element.style.setProperty('top', '20px');
  element.style.setProperty('left', '20px');
}
;
var Lorg_dominokit_domino_ui_notifications_TopLeftPosition_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'TopLeftPosition', 722);
function TopRightPosition(){
  NotificationPosition.call(this, 'top-right', 'top');
}

defineClass(726, 116, {}, TopRightPosition);
_.getOffsetPosition = function getOffsetPosition_4(element){
  return element.offsetTop;
}
;
_.onBeforePosition = function onBeforePosition_4(element){
  element.style.setProperty('top', '20px');
  element.style.setProperty('right', '20px');
}
;
var Lorg_dominokit_domino_ui_notifications_TopRightPosition_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'TopRightPosition', 726);
function $clinit_Popover(){
  $clinit_Popover = emptyMethod;
  $clinit_IsPopup();
  ($clinit_DomGlobal() , document_0).body.addEventListener(($clinit_EventType() , click_0).name_0, new Popover$lambda$0$Type);
}

function $close_1(this$static){
  $hide_0((!this$static.collapsible_0 && (this$static.collapsible_0 = new Collapsible(castToNative(this$static.element.wrappedElement, $wnd.HTMLDivElement))) , this$static.collapsible_0));
  return this$static;
}

function $doClose_0(this$static){
  castToNative(this$static.element.wrappedElement, $wnd.HTMLDivElement).remove();
  ($clinit_DomGlobal() , document_0).body.removeEventListener(($clinit_EventType() , keydown).name_0, this$static.closeListener);
  $onPopupClose(($clinit_DominoUIConfig() , INSTANCE_15).zindexManager, this$static);
  $forEach_0(this$static.closeHandlers, new Popover$3methodref$onClose$Type);
}

function $lambda$1_13(this$static, evt_0){
  evt_0.stopPropagation();
  this$static.closeOthers && ($clinit_ModalBackDrop() , $querySelectorAll(new DominoElement(($clinit_DomGlobal() , document_0).body), '.popover').forEach_0(new ModalBackDrop$0methodref$remove$Type));
  ($clinit_DomGlobal() , document_0).body.appendChild(this$static.element.wrappedElement);
  $show_1((!this$static.collapsible_0 && (this$static.collapsible_0 = new Collapsible(castToNative(this$static.element.wrappedElement, $wnd.HTMLDivElement))) , this$static.collapsible_0));
  this$static.popupPosition.position_0(this$static.element.wrappedElement, this$static.targetElement);
  $position(this$static, this$static.popupPosition);
  this$static.closeOnEscape && $addHandler_0(new KeyboardEvents_0('keydown', [document_0.body]), 'escape', new KeyboardEvents$HandlerContext(this$static.closeListener));
  $onPopupOpen(($clinit_DominoUIConfig() , INSTANCE_15).zindexManager, this$static);
  $forEach_0(this$static.openHandlers, new Popover$2methodref$onOpen$Type);
}

function $lambda$5_1(this$static){
  ($clinit_DomGlobal() , document_0).body.removeEventListener(($clinit_EventType() , keydown).name_0, this$static.closeListener);
}

function $position(this$static, position){
  $removeCss(this$static.element, this$static.positionClass);
  this$static.popupPosition = position;
  this$static.positionClass = position.getDirectionClass();
  $addCss(this$static.element, this$static.positionClass);
  return this$static;
}

function Popover(target, content_0){
  var arrowElement;
  BaseDominoElement.call(this);
  this.element = castTo($elevate($style_0(castTo($setAttribute_0(castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element), 'popover'), 3), 'role', 'tooltip'), 3), 'display: block;'), ($clinit_Elevation() , LEVEL_1)), 3);
  this.headingElement = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('h3'), $wnd.HTMLElement))).element), 'popover-title'), 3);
  this.contentElement = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), 'popover-content'), 3);
  this.popupPosition = ($clinit_PopupPosition() , TOP);
  this.openHandlers = new ArrayList;
  this.closeHandlers = new ArrayList;
  this.targetElement = target;
  arrowElement = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), 'arrow'), 3);
  $appendChild_0(this.element, arrowElement);
  $appendChild_0(this.element, this.headingElement);
  $appendChild_0(this.element, this.contentElement);
  this.headerText = of_4('\u5173\u4E8E\u4E91\u7B14\u8BB0');
  $appendChild(this.headingElement, this.headerText);
  $appendChild(this.contentElement, content_0);
  this.showListener = new Popover$lambda$1$Type(this);
  target.addEventListener(($clinit_EventType() , click_0).name_0, this.showListener);
  this.closeListener = new Popover$lambda$2$Type;
  $addEventListener(this.element, click_0.name_0, new Popover$0methodref$stopPropagation$Type);
  $onDetached(new DominoElement(this.targetElement), new Popover$lambda$4$Type(this));
  $init(this, this);
  $onDetached(this, new Popover$lambda$5$Type(this));
  $setCollapseStrategy(this, new AnimationCollapseStrategy(($clinit_Transition() , FADE_IN), FADE_OUT, ($clinit_CollapseDuration() , _300ms)));
  $addHideListener(this, new Popover$1methodref$doClose$Type(this));
}

function create_13(target, content_0){
  $clinit_Popover();
  return new Popover(target.element, content_0);
}

defineClass(587, 12, $intern_33, Popover);
_.close_0 = function close_1(){
  return $hide_0((!this.collapsible_0 && (this.collapsible_0 = new Collapsible(castToNative(this.element.wrappedElement, $wnd.HTMLDivElement))) , this.collapsible_0)) , this;
}
;
_.element_3 = function element_24(){
  return castToNative(this.element.wrappedElement, $wnd.HTMLDivElement);
}
;
_.setZIndex = function setZIndex_0(arg0){
  return $setZIndex(this, arg0);
}
;
_.stealFocus = function stealFocus_0(){
}
;
_.isAutoClose = function isAutoClose_0(){
  return true;
}
;
_.isModal = function isModal_0(){
  return false;
}
;
_.closeOnEscape = true;
_.closeOthers = true;
var Lorg_dominokit_domino_ui_popover_Popover_2_classLit = createForClass('org.dominokit.domino.ui.popover', 'Popover', 587);
function Popover$0methodref$stopPropagation$Type(){
}

defineClass(591, 1, {}, Popover$0methodref$stopPropagation$Type);
_.handleEvent = function handleEvent_43(arg0){
  arg0.stopPropagation();
}
;
var Lorg_dominokit_domino_ui_popover_Popover$0methodref$stopPropagation$Type_2_classLit = createForClass('org.dominokit.domino.ui.popover', 'Popover/0methodref$stopPropagation$Type', 591);
function Popover$1methodref$doClose$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(594, 1, {197:1}, Popover$1methodref$doClose$Type);
_.apply_1 = function apply_27(){
  $doClose_0(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_popover_Popover$1methodref$doClose$Type_2_classLit = createForClass('org.dominokit.domino.ui.popover', 'Popover/1methodref$doClose$Type', 594);
function Popover$2methodref$onOpen$Type(){
}

defineClass(595, 1, {}, Popover$2methodref$onOpen$Type);
_.accept = function accept_64(arg0){
  throwClassCastExceptionUnlessNull(arg0).$_nullMethod();
}
;
var Lorg_dominokit_domino_ui_popover_Popover$2methodref$onOpen$Type_2_classLit = createForClass('org.dominokit.domino.ui.popover', 'Popover/2methodref$onOpen$Type', 595);
function Popover$3methodref$onClose$Type(){
}

defineClass(596, 1, {}, Popover$3methodref$onClose$Type);
_.accept = function accept_65(arg0){
  throwClassCastExceptionUnlessNull(arg0).$_nullMethod();
}
;
var Lorg_dominokit_domino_ui_popover_Popover$3methodref$onClose$Type_2_classLit = createForClass('org.dominokit.domino.ui.popover', 'Popover/3methodref$onClose$Type', 596);
function Popover$lambda$0$Type(){
}

defineClass(588, 1, {}, Popover$lambda$0$Type);
_.handleEvent = function handleEvent_44(arg0){
  $clinit_Popover();
  $clinit_ModalBackDrop();
  $querySelectorAll(new DominoElement(($clinit_DomGlobal() , document_0).body), '.popover').forEach_0(new ModalBackDrop$0methodref$remove$Type);
}
;
var Lorg_dominokit_domino_ui_popover_Popover$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.popover', 'Popover/lambda$0$Type', 588);
function Popover$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(589, 1, {}, Popover$lambda$1$Type);
_.handleEvent = function handleEvent_45(arg0){
  $lambda$1_13(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_popover_Popover$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.popover', 'Popover/lambda$1$Type', 589);
function Popover$lambda$2$Type(){
}

defineClass(590, 1, {}, Popover$lambda$2$Type);
_.handleEvent = function handleEvent_46(arg0){
  $clinit_Popover();
  $clinit_ModalBackDrop();
  $querySelectorAll(new DominoElement(($clinit_DomGlobal() , document_0).body), '.popover').forEach_0(new ModalBackDrop$0methodref$remove$Type);
}
;
var Lorg_dominokit_domino_ui_popover_Popover$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.popover', 'Popover/lambda$2$Type', 590);
function Popover$lambda$4$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(592, 1, $intern_30, Popover$lambda$4$Type);
_.onObserved = function onObserved_4(arg0){
  $close_1(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_popover_Popover$lambda$4$Type_2_classLit = createForClass('org.dominokit.domino.ui.popover', 'Popover/lambda$4$Type', 592);
function Popover$lambda$5$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(593, 1, $intern_30, Popover$lambda$5$Type);
_.onObserved = function onObserved_5(arg0){
  $lambda$5_1(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_popover_Popover$lambda$5$Type_2_classLit = createForClass('org.dominokit.domino.ui.popover', 'Popover/lambda$5$Type', 593);
function $clinit_PopupPosition(){
  $clinit_PopupPosition = emptyMethod;
  RIGHT = new PopupPositionRight;
  TOP = new PopupPositionTop;
}

var RIGHT, TOP;
function PopupPositionRight(){
}

defineClass(600, 1, {}, PopupPositionRight);
_.getDirectionClass = function getDirectionClass(){
  return 'right';
}
;
_.position_0 = function position_0(tooltip, target){
  var targetRect, tooltipRect;
  targetRect = target.getBoundingClientRect();
  tooltipRect = tooltip.getBoundingClientRect();
  tooltip.style.setProperty('top', targetRect.top + ($clinit_DomGlobal() , $wnd.goog.global.window).pageYOffset + (targetRect.height - tooltipRect.height) / 2 + 'px');
  tooltip.style.setProperty('left', targetRect.left + $wnd.goog.global.window.pageXOffset + targetRect.width + 'px');
}
;
var Lorg_dominokit_domino_ui_popover_PopupPositionRight_2_classLit = createForClass('org.dominokit.domino.ui.popover', 'PopupPositionRight', 600);
function PopupPositionTop(){
}

defineClass(601, 1, {}, PopupPositionTop);
_.getDirectionClass = function getDirectionClass_0(){
  return 'top';
}
;
_.position_0 = function position_1(tooltip, target){
  var targetRect, tooltipRect;
  targetRect = target.getBoundingClientRect();
  tooltipRect = tooltip.getBoundingClientRect();
  tooltip.style.setProperty('top', targetRect.top + ($clinit_DomGlobal() , $wnd.goog.global.window).pageYOffset - tooltipRect.height + 'px');
  tooltip.style.setProperty('left', targetRect.left + $wnd.goog.global.window.pageXOffset + (targetRect.width - tooltipRect.width) / 2 + 'px');
}
;
var Lorg_dominokit_domino_ui_popover_PopupPositionTop_2_classLit = createForClass('org.dominokit.domino.ui.popover', 'PopupPositionTop', 601);
function $close_2(this$static){
  $removeCss_1((this$static.styleInitializer.apply_1() , this$static.style_0), 'open');
  $scheduleFixedDelay(new Search$lambda$7$Type(this$static));
  this$static.searchInput.value = '';
  this$static.closeHandler.onClose();
  return this$static;
}

function $lambda$2_8(this$static, evt_0){
  evt_0.stopPropagation();
  $close_2(this$static);
}

function $lambda$3_10(this$static){
  $cancel(this$static.autoSearchTimer);
  $schedule(this$static.autoSearchTimer, 200);
}

function $lambda$4_8(this$static, evt_0){
  $clinit_ElementUtil();
  $equalsIgnoreCase('enter', evt_0.key) && this$static.searchHandler.onSearch(this$static.searchInput.value);
}

function $lambda$5_2(this$static, evt_0){
  $clinit_ElementUtil();
  if ($equalsIgnoreCase('escape', evt_0.key)) {
    evt_0.stopPropagation();
    $close_2(this$static);
  }
}

function $onClose(this$static, handler){
  this$static.closeHandler = handler;
  return this$static;
}

function $onSearch(this$static, handler){
  this$static.searchHandler = handler;
  return this$static;
}

function $open_0(this$static){
  $setDisplay_0((this$static.styleInitializer.apply_1() , this$static.style_0), 'inline-block');
  $scheduleFixedDelay(new Search$lambda$6$Type(this$static));
  this$static.searchInput.focus();
  return this$static;
}

function Search(){
  BaseDominoElement.call(this);
  this.closeIcon = castTo($textContent(castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('i'), $wnd.HTMLElement))).element), 'material-icons'), 3), 'close'), 3).wrappedElement;
  this.searchInput = castToNative(castTo($setAttribute_0(new DominoElement(input_1('text').element), 'placeholder', 'START TYPING...'), 3).wrappedElement, $wnd.HTMLInputElement);
  this.element = castToNative(castTo($appendChild_0(castTo($appendChild(castTo($appendChild_0(castTo($css($style_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), 'display: none;'), 'search-bar'), 3), $appendChild_0(castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), 'search-icon'), 3), $textContent(castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('i'), $wnd.HTMLElement))).element), 'material-icons'), 3), 'search'))), 3), this.searchInput), 3), $appendChild(castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), 'close-search'), 3), this.closeIcon)), 3).wrappedElement, $wnd.HTMLDivElement);
  this.searchHandler = new Search$lambda$0$Type;
  this.closeHandler = new Search$lambda$1$Type;
  this.closeIcon.addEventListener('click', new Search$lambda$2$Type(this));
  this.autoSearchTimer = new Search$1(this);
  this.searchInput.addEventListener('input', new Search$lambda$3$Type(this));
  this.searchInput.addEventListener(($clinit_EventType() , keypress).name_0, new Search$lambda$4$Type(this));
  this.searchInput.addEventListener('keydown', new Search$lambda$5$Type(this));
  $init(this, this);
  $setHeight_0((this.styleInitializer.apply_1() , this.style_0), '100%');
}

defineClass(190, 12, {190:1, 12:1, 15:1}, Search);
_.element_3 = function element_25(){
  return this.element;
}
;
var Lorg_dominokit_domino_ui_search_Search_2_classLit = createForClass('org.dominokit.domino.ui.search', 'Search', 190);
function Search$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(616, 108, {}, Search$1);
_.run = function run_8(){
  this.this$01.searchHandler.onSearch(this.this$01.searchInput.value);
}
;
var Lorg_dominokit_domino_ui_search_Search$1_2_classLit = createForClass('org.dominokit.domino.ui.search', 'Search/1', 616);
function Search$lambda$0$Type(){
}

defineClass(613, 1, {}, Search$lambda$0$Type);
_.onSearch = function onSearch(searchToken){
}
;
var Lorg_dominokit_domino_ui_search_Search$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.search', 'Search/lambda$0$Type', 613);
function Search$lambda$1$Type(){
}

defineClass(614, 1, {}, Search$lambda$1$Type);
_.onClose = function onClose(){
}
;
var Lorg_dominokit_domino_ui_search_Search$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.search', 'Search/lambda$1$Type', 614);
function Search$lambda$2$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(615, 1, {}, Search$lambda$2$Type);
_.handleEvent = function handleEvent_47(arg0){
  $lambda$2_8(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_search_Search$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.search', 'Search/lambda$2$Type', 615);
function Search$lambda$3$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(617, 1, {}, Search$lambda$3$Type);
_.handleEvent = function handleEvent_48(arg0){
  $lambda$3_10(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_search_Search$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.ui.search', 'Search/lambda$3$Type', 617);
function Search$lambda$4$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(618, 1, {}, Search$lambda$4$Type);
_.handleEvent = function handleEvent_49(arg0){
  $lambda$4_8(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_search_Search$lambda$4$Type_2_classLit = createForClass('org.dominokit.domino.ui.search', 'Search/lambda$4$Type', 618);
function Search$lambda$5$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(619, 1, {}, Search$lambda$5$Type);
_.handleEvent = function handleEvent_50(arg0){
  $lambda$5_2(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_search_Search$lambda$5$Type_2_classLit = createForClass('org.dominokit.domino.ui.search', 'Search/lambda$5$Type', 619);
function Search$lambda$6$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(620, 1, {}, Search$lambda$6$Type);
_.execute_0 = function execute_7(){
  return $addCss(this.$$outer_0, 'open') , false;
}
;
var Lorg_dominokit_domino_ui_search_Search$lambda$6$Type_2_classLit = createForClass('org.dominokit.domino.ui.search', 'Search/lambda$6$Type', 620);
function Search$lambda$7$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(621, 1, {}, Search$lambda$7$Type);
_.execute_0 = function execute_8(){
  return $setDisplay_0($style(this.$$outer_0), 'none') , false;
}
;
var Lorg_dominokit_domino_ui_search_Search$lambda$7$Type_2_classLit = createForClass('org.dominokit.domino.ui.search', 'Search/lambda$7$Type', 621);
function $clinit_Color(){
  $clinit_Color = emptyMethod;
  RED = new Color$1;
  INDIGO = new Color$41;
  BLUE = new Color$51;
}

var BLUE, INDIGO, RED;
function Color$1(){
}

defineClass(489, 1, {}, Color$1);
_.getName = function getName_4(){
  return 'RED';
}
;
_.getStyle = function getStyle_3(){
  return 'col-red';
}
;
var Lorg_dominokit_domino_ui_style_Color$1_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Color/1', 489);
function Color$41(){
}

defineClass(490, 1, {}, Color$41);
_.getName = function getName_5(){
  return 'INDIGO';
}
;
_.getStyle = function getStyle_4(){
  return 'col-indigo';
}
;
var Lorg_dominokit_domino_ui_style_Color$41_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Color/41', 490);
function Color$51(){
}

defineClass(491, 1, {}, Color$51);
_.getName = function getName_6(){
  return 'BLUE';
}
;
_.getStyle = function getStyle_5(){
  return 'col-blue';
}
;
var Lorg_dominokit_domino_ui_style_Color$51_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Color/51', 491);
function $clinit_ColorScheme(){
  $clinit_ColorScheme = emptyMethod;
  RED_0 = new ColorScheme$1;
  $clinit_ColorScheme$2();
  $clinit_ColorScheme$3();
  $clinit_ColorScheme$4();
  INDIGO_0 = new ColorScheme$5;
  $clinit_ColorScheme$6();
  $clinit_ColorScheme$7();
  $clinit_ColorScheme$8();
  $clinit_ColorScheme$9();
  $clinit_ColorScheme$10();
  $clinit_ColorScheme$11();
  $clinit_ColorScheme$12();
  $clinit_ColorScheme$13();
  $clinit_ColorScheme$14();
  $clinit_ColorScheme$15();
  $clinit_ColorScheme$16();
  $clinit_ColorScheme$17();
  $clinit_ColorScheme$18();
  $clinit_ColorScheme$19();
  $clinit_ColorScheme$20();
  $clinit_ColorScheme$21();
  $clinit_ColorScheme$22();
}

var INDIGO_0, RED_0;
function $clinit_ColorScheme$1(){
  $clinit_ColorScheme$1 = emptyMethod;
  $clinit_ColorScheme();
}

function ColorScheme$1(){
  $clinit_ColorScheme$1();
}

defineClass(511, 1, {}, ColorScheme$1);
_.color_1 = function color_1(){
  return $clinit_Color() , RED;
}
;
var Lorg_dominokit_domino_ui_style_ColorScheme$1_2_classLit = createForClass('org.dominokit.domino.ui.style', 'ColorScheme/1', 511);
function $clinit_ColorScheme$10(){
  $clinit_ColorScheme$10 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$11(){
  $clinit_ColorScheme$11 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$12(){
  $clinit_ColorScheme$12 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$13(){
  $clinit_ColorScheme$13 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$14(){
  $clinit_ColorScheme$14 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$15(){
  $clinit_ColorScheme$15 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$16(){
  $clinit_ColorScheme$16 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$17(){
  $clinit_ColorScheme$17 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$18(){
  $clinit_ColorScheme$18 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$19(){
  $clinit_ColorScheme$19 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$2(){
  $clinit_ColorScheme$2 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$20(){
  $clinit_ColorScheme$20 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$21(){
  $clinit_ColorScheme$21 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$22(){
  $clinit_ColorScheme$22 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$3(){
  $clinit_ColorScheme$3 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$4(){
  $clinit_ColorScheme$4 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$5(){
  $clinit_ColorScheme$5 = emptyMethod;
  $clinit_ColorScheme();
}

function ColorScheme$5(){
  $clinit_ColorScheme$5();
}

defineClass(512, 1, {}, ColorScheme$5);
_.color_1 = function color_2(){
  return $clinit_Color() , INDIGO;
}
;
var Lorg_dominokit_domino_ui_style_ColorScheme$5_2_classLit = createForClass('org.dominokit.domino.ui.style', 'ColorScheme/5', 512);
function $clinit_ColorScheme$6(){
  $clinit_ColorScheme$6 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$7(){
  $clinit_ColorScheme$7 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$8(){
  $clinit_ColorScheme$8 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_ColorScheme$9(){
  $clinit_ColorScheme$9 = emptyMethod;
  $clinit_ColorScheme();
}

function $clinit_Elevation(){
  $clinit_Elevation = emptyMethod;
  NONE = new Elevation('NONE', 0, 'elevation-none');
  LEVEL_0 = new Elevation('LEVEL_0', 1, 'elevation-0');
  LEVEL_1 = new Elevation('LEVEL_1', 2, 'elevation-1');
  LEVEL_2 = new Elevation('LEVEL_2', 3, 'elevation-2');
  LEVEL_3 = new Elevation('LEVEL_3', 4, 'elevation-3');
  LEVEL_4 = new Elevation('LEVEL_4', 5, 'elevation-4');
  LEVEL_5 = new Elevation('LEVEL_5', 6, 'elevation-5');
  LEVEL_6 = new Elevation('LEVEL_6', 7, 'elevation-6');
  LEVEL_7 = new Elevation('LEVEL_7', 8, 'elevation-7');
  LEVEL_8 = new Elevation('LEVEL_8', 9, 'elevation-8');
  LEVEL_9 = new Elevation('LEVEL_9', 10, 'elevation-9');
  LEVEL_10 = new Elevation('LEVEL_10', 11, 'elevation-10');
  LEVEL_11 = new Elevation('LEVEL_11', 12, 'elevation-11');
  LEVEL_12 = new Elevation('LEVEL_12', 13, 'elevation-12');
  LEVEL_13 = new Elevation('LEVEL_13', 14, 'elevation-13');
  LEVEL_14 = new Elevation('LEVEL_14', 15, 'elevation-14');
  LEVEL_15 = new Elevation('LEVEL_15', 16, 'elevation-15');
  LEVEL_16 = new Elevation('LEVEL_16', 17, 'elevation-16');
  LEVEL_17 = new Elevation('LEVEL_17', 18, 'elevation-17');
  LEVEL_18 = new Elevation('LEVEL_18', 19, 'elevation-18');
  LEVEL_19 = new Elevation('LEVEL_19', 20, 'elevation-19');
  LEVEL_20 = new Elevation('LEVEL_20', 21, 'elevation-20');
  LEVEL_21 = new Elevation('LEVEL_21', 22, 'elevation-21');
  LEVEL_22 = new Elevation('LEVEL_22', 23, 'elevation-22');
  LEVEL_23 = new Elevation('LEVEL_23', 24, 'elevation-23');
  LEVEL_24 = new Elevation('LEVEL_24', 25, 'elevation-24');
}

function Elevation(enum$name, enum$ordinal, style){
  Enum.call(this, enum$name, enum$ordinal);
  this.style_0 = style;
}

function of_3(level){
  $clinit_Elevation();
  switch (level) {
    case 0:
      return LEVEL_0;
    case 1:
      return LEVEL_1;
    case 2:
      return LEVEL_2;
    case 3:
      return LEVEL_3;
    case 4:
      return LEVEL_4;
    case 5:
      return LEVEL_5;
    case 6:
      return LEVEL_6;
    case 7:
      return LEVEL_7;
    case 8:
      return LEVEL_8;
    case 9:
      return LEVEL_9;
    case 10:
      return LEVEL_10;
    case 11:
      return LEVEL_11;
    case 12:
      return LEVEL_12;
    case 13:
      return LEVEL_13;
    case 14:
      return LEVEL_14;
    case 15:
      return LEVEL_15;
    case 16:
      return LEVEL_16;
    case 17:
      return LEVEL_17;
    case 18:
      return LEVEL_18;
    case 19:
      return LEVEL_19;
    case 20:
      return LEVEL_20;
    case 21:
      return LEVEL_21;
    case 22:
      return LEVEL_22;
    case 23:
      return LEVEL_23;
    case 24:
      return LEVEL_24;
    default:return level < 0?LEVEL_0:LEVEL_24;
  }
}

function removeFrom_0(element){
  $clinit_Elevation();
  var elevationClass, i;
  elevationClass = '';
  for (i = 0; i < element.classList.length; i++) {
    $startsWith(element.classList.item(i), 'elevation-') && (elevationClass = element.classList.item(i));
  }
  elevationClass != null && elevationClass.length != 0 && element.classList.remove(elevationClass);
}

function values_11(){
  $clinit_Elevation();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_style_Elevation_2_classLit, 1), $intern_0, 26, 0, [NONE, LEVEL_0, LEVEL_1, LEVEL_2, LEVEL_3, LEVEL_4, LEVEL_5, LEVEL_6, LEVEL_7, LEVEL_8, LEVEL_9, LEVEL_10, LEVEL_11, LEVEL_12, LEVEL_13, LEVEL_14, LEVEL_15, LEVEL_16, LEVEL_17, LEVEL_18, LEVEL_19, LEVEL_20, LEVEL_21, LEVEL_22, LEVEL_23, LEVEL_24]);
}

defineClass(26, 21, {4:1, 34:1, 21:1, 26:1}, Elevation);
var LEVEL_0, LEVEL_1, LEVEL_10, LEVEL_11, LEVEL_12, LEVEL_13, LEVEL_14, LEVEL_15, LEVEL_16, LEVEL_17, LEVEL_18, LEVEL_19, LEVEL_2, LEVEL_20, LEVEL_21, LEVEL_22, LEVEL_23, LEVEL_24, LEVEL_3, LEVEL_4, LEVEL_5, LEVEL_6, LEVEL_7, LEVEL_8, LEVEL_9, NONE;
var Lorg_dominokit_domino_ui_style_Elevation_2_classLit = createForEnum('org.dominokit.domino.ui.style', 'Elevation', 26, values_11);
function $addCss_1(this$static, cssClass){
  cssClass != null && cssClass.length != 0 && this$static.element.classList.add(cssClass);
  return this$static;
}

function $addCss_2(this$static, cssClasses){
  var cssClass, cssClass$array, cssClass$index, cssClass$max;
  if (cssClasses.length > 0) {
    for (cssClass$array = cssClasses , cssClass$index = 0 , cssClass$max = cssClass$array.length; cssClass$index < cssClass$max; ++cssClass$index) {
      cssClass = cssClass$array[cssClass$index];
      cssClass != null && cssClass.length != 0 && this$static.element.classList.add(cssClass);
    }
  }
  return this$static;
}

function $containsCss_0(this$static, cssClass){
  if (cssClass != null && cssClass.length != 0) {
    return this$static.element.classList.contains(cssClass);
  }
  return false;
}

function $cssClassByIndex(this$static, index_0){
  return this$static.element.classList.item(index_0);
}

function $removeCss_1(this$static, cssClass){
  cssClass != null && cssClass.length != 0 && this$static.element.classList.remove(cssClass);
  return this$static;
}

function $removeCss_2(this$static, cssClasses){
  var cssClass, cssClass$array, cssClass$index, cssClass$max;
  if (cssClasses.length > 0) {
    for (cssClass$array = cssClasses , cssClass$index = 0 , cssClass$max = cssClass$array.length; cssClass$index < cssClass$max; ++cssClass$index) {
      cssClass = cssClass$array[cssClass$index];
      cssClass != null && cssClass.length != 0 && this$static.element.classList.remove(cssClass);
    }
  }
  return this$static;
}

function $removeCssProperty_0(this$static, name_0){
  this$static.element.style.removeProperty(name_0);
  return this$static;
}

function $setAlignItems_0(this$static){
  return this$static.element.style.setProperty('align-items', 'center') , this$static;
}

function $setBorder_0(this$static, border){
  this$static.element.style.setProperty('border', border);
  return this$static;
}

function $setColor_3(this$static){
  this$static.element.style.setProperty('color', '#9b0000');
  return this$static;
}

function $setCssProperty_0(this$static, name_0, value_0){
  this$static.element.style.setProperty(name_0, value_0);
  return this$static;
}

function $setDisplay_0(this$static, display){
  this$static.element.style.setProperty('display', display);
  return this$static;
}

function $setFlex_0(this$static){
  return this$static.element.style.setProperty('flex', '1') , this$static;
}

function $setFontSize_0(this$static, fontSize){
  this$static.element.style.setProperty('font-size', fontSize);
  return this$static;
}

function $setHeight_0(this$static, height){
  this$static.element.style.setProperty('height', height);
  return this$static;
}

function $setMarginBottom_0(this$static, margin){
  this$static.element.style.setProperty('margin-bottom', margin);
  return this$static;
}

function $setMarginLeft_0(this$static){
  this$static.element.style.setProperty('margin-left', '10px');
  return this$static;
}

function $setMarginRight_0(this$static){
  this$static.element.style.setProperty('margin-right', '30px');
  return this$static;
}

function $setMarginTop_0(this$static){
  this$static.element.style.setProperty('margin-top', '0px');
  return this$static;
}

function $setMinHeight(this$static, height){
  this$static.element.style.setProperty('min-height', height);
  return this$static;
}

function $setPaddingLeft(this$static, padding){
  this$static.element.style.setProperty('padding-left', padding);
  return this$static;
}

function $setTransitionDuration_0(this$static, transactionDuration){
  return this$static.element.style.setProperty('transaction-duration', transactionDuration) , this$static;
}

function $setWidth_0(this$static){
  this$static.element.style.setProperty('width', '100%');
  return this$static;
}

function $setZIndex_0(this$static, zindex){
  this$static.element.style.setProperty('z-index', zindex + '');
  return this$static;
}

function Style(element){
  this.element = element.element_3();
}

defineClass(44, 1, $intern_31, Style);
_.element_3 = function element_26(){
  return this.element;
}
;
var Lorg_dominokit_domino_ui_style_Style_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Style', 44);
function Style$lambda$0$Type(htmlElement_0){
  this.htmlElement_0 = htmlElement_0;
}

defineClass(47, 1, $intern_31, Style$lambda$0$Type);
_.element_3 = function element_27(){
  return this.htmlElement_0;
}
;
var Lorg_dominokit_domino_ui_style_Style$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Style/lambda$0$Type', 47);
function $clinit_Unit(){
  $clinit_Unit = emptyMethod;
  px = new Unit('px', 0, new Unit$lambda$0$Type);
  q = new Unit('q', 1, new Unit$lambda$1$Type);
  mm = new Unit('mm', 2, new Unit$lambda$2$Type);
  cm = new Unit('cm', 3, new Unit$lambda$3$Type);
  in_1 = new Unit('in', 4, new Unit$lambda$4$Type);
  pt = new Unit('pt', 5, new Unit$lambda$5$Type);
  pc = new Unit('pc', 6, new Unit$lambda$6$Type);
  em = new Unit('em', 7, new Unit$lambda$7$Type);
  rem_0 = new Unit('rem', 8, new Unit$lambda$8$Type);
  ex = new Unit('ex', 9, new Unit$lambda$9$Type);
  ch_1 = new Unit('ch', 10, new Unit$lambda$10$Type);
  vw = new Unit('vw', 11, new Unit$lambda$11$Type);
  vh = new Unit('vh', 12, new Unit$lambda$12$Type);
  percent = new Unit('percent', 13, new Unit$lambda$13$Type);
  none = new Unit('none', 14, new Unit$lambda$14$Type);
}

function $of(this$static, value_0){
  return this$static.unitFormatter.format(value_0);
}

function Unit(enum$name, enum$ordinal, unitFormatter){
  Enum.call(this, enum$name, enum$ordinal);
  this.unitFormatter = unitFormatter;
}

function values_12(){
  $clinit_Unit();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_style_Unit_2_classLit, 1), $intern_0, 42, 0, [px, q, mm, cm, in_1, pt, pc, em, rem_0, ex, ch_1, vw, vh, percent, none]);
}

defineClass(42, 21, {4:1, 34:1, 21:1, 42:1}, Unit);
var ch_1, cm, em, ex, in_1, mm, none, pc, percent, pt, px, q, rem_0, vh, vw;
var Lorg_dominokit_domino_ui_style_Unit_2_classLit = createForEnum('org.dominokit.domino.ui.style', 'Unit', 42, values_12);
function Unit$lambda$0$Type(){
}

defineClass(678, 1, {}, Unit$lambda$0$Type);
_.format = function format(value_0){
  return $clinit_Unit() , value_0 + 'px';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$0$Type', 678);
function Unit$lambda$1$Type(){
}

defineClass(679, 1, {}, Unit$lambda$1$Type);
_.format = function format_0(value_0){
  return $clinit_Unit() , value_0 + 'q';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$1$Type', 679);
function Unit$lambda$10$Type(){
}

defineClass(688, 1, {}, Unit$lambda$10$Type);
_.format = function format_1(value_0){
  return $clinit_Unit() , value_0 + 'ch';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$10$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$10$Type', 688);
function Unit$lambda$11$Type(){
}

defineClass(689, 1, {}, Unit$lambda$11$Type);
_.format = function format_2(value_0){
  return $clinit_Unit() , value_0 + 'vw';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$11$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$11$Type', 689);
function Unit$lambda$12$Type(){
}

defineClass(690, 1, {}, Unit$lambda$12$Type);
_.format = function format_3(value_0){
  return $clinit_Unit() , value_0 + 'vh';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$12$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$12$Type', 690);
function Unit$lambda$13$Type(){
}

defineClass(691, 1, {}, Unit$lambda$13$Type);
_.format = function format_4(value_0){
  return $clinit_Unit() , value_0 + '%';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$13$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$13$Type', 691);
function Unit$lambda$14$Type(){
}

defineClass(692, 1, {}, Unit$lambda$14$Type);
_.format = function format_5(value_0){
  return $clinit_Unit() , value_0 + '';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$14$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$14$Type', 692);
function Unit$lambda$2$Type(){
}

defineClass(680, 1, {}, Unit$lambda$2$Type);
_.format = function format_6(value_0){
  return $clinit_Unit() , value_0 + 'mm';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$2$Type', 680);
function Unit$lambda$3$Type(){
}

defineClass(681, 1, {}, Unit$lambda$3$Type);
_.format = function format_7(value_0){
  return $clinit_Unit() , value_0 + 'cm';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$3$Type', 681);
function Unit$lambda$4$Type(){
}

defineClass(682, 1, {}, Unit$lambda$4$Type);
_.format = function format_8(value_0){
  return $clinit_Unit() , value_0 + 'in';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$4$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$4$Type', 682);
function Unit$lambda$5$Type(){
}

defineClass(683, 1, {}, Unit$lambda$5$Type);
_.format = function format_9(value_0){
  return $clinit_Unit() , value_0 + 'pt';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$5$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$5$Type', 683);
function Unit$lambda$6$Type(){
}

defineClass(684, 1, {}, Unit$lambda$6$Type);
_.format = function format_10(value_0){
  return $clinit_Unit() , value_0 + 'pc';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$6$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$6$Type', 684);
function Unit$lambda$7$Type(){
}

defineClass(685, 1, {}, Unit$lambda$7$Type);
_.format = function format_11(value_0){
  return $clinit_Unit() , value_0 + 'em';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$7$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$7$Type', 685);
function Unit$lambda$8$Type(){
}

defineClass(686, 1, {}, Unit$lambda$8$Type);
_.format = function format_12(value_0){
  return $clinit_Unit() , value_0 + 'rem';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$8$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$8$Type', 686);
function Unit$lambda$9$Type(){
}

defineClass(687, 1, {}, Unit$lambda$9$Type);
_.format = function format_13(value_0){
  return $clinit_Unit() , value_0 + 'ex';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$9$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$9$Type', 687);
function $clinit_WaveColor(){
  $clinit_WaveColor = emptyMethod;
  RED_1 = new WaveColor('RED', 0, 'waves-red');
  PINK = new WaveColor('PINK', 1, 'waves-pink');
  PURPLE = new WaveColor('PURPLE', 2, 'waves-purple');
  DEEP_PURPLE = new WaveColor('DEEP_PURPLE', 3, 'waves-deep-purple');
  INDIGO_1 = new WaveColor('INDIGO', 4, 'waves-indigo');
  BLUE_0 = new WaveColor('BLUE', 5, 'waves-blue');
  LIGHT_BLUE = new WaveColor('LIGHT_BLUE', 6, 'waves-light-blue');
  CYAN = new WaveColor('CYAN', 7, 'waves-cyan');
  TEAL = new WaveColor('TEAL', 8, 'waves-teal');
  GREEN = new WaveColor('GREEN', 9, 'waves-green');
  LIGHT_GREEN = new WaveColor('LIGHT_GREEN', 10, 'waves-light-green');
  LIME = new WaveColor('LIME', 11, 'waves-lime');
  YELLOW = new WaveColor('YELLOW', 12, 'waves-yellow');
  AMBER = new WaveColor('AMBER', 13, 'waves-amber');
  ORANGE = new WaveColor('ORANGE', 14, 'waves-orange');
  DEEP_ORANGE = new WaveColor('DEEP_ORANGE', 15, 'waves-deep-orange');
  BROWN = new WaveColor('BROWN', 16, 'waves-brown');
  GREY = new WaveColor('GREY', 17, 'waves-grey');
  BLUE_GREY = new WaveColor('BLUE_GREY', 18, 'waves-blue-grey');
  BLACK = new WaveColor('BLACK', 19, 'waves-black');
  WHITE = new WaveColor('WHITE', 20, 'waves-white');
  LIGHT = new WaveColor('LIGHT', 21, 'waves-light');
  THEME = new WaveColor('THEME', 22, 'waves-theme');
}

function WaveColor(enum$name, enum$ordinal, style){
  Enum.call(this, enum$name, enum$ordinal);
  this.style_0 = style;
}

function values_13(){
  $clinit_WaveColor();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_style_WaveColor_2_classLit, 1), $intern_0, 30, 0, [RED_1, PINK, PURPLE, DEEP_PURPLE, INDIGO_1, BLUE_0, LIGHT_BLUE, CYAN, TEAL, GREEN, LIGHT_GREEN, LIME, YELLOW, AMBER, ORANGE, DEEP_ORANGE, BROWN, GREY, BLUE_GREY, BLACK, WHITE, LIGHT, THEME]);
}

defineClass(30, 21, {4:1, 34:1, 21:1, 30:1}, WaveColor);
var AMBER, BLACK, BLUE_0, BLUE_GREY, BROWN, CYAN, DEEP_ORANGE, DEEP_PURPLE, GREEN, GREY, INDIGO_1, LIGHT, LIGHT_BLUE, LIGHT_GREEN, LIME, ORANGE, PINK, PURPLE, RED_1, TEAL, THEME, WHITE, YELLOW;
var Lorg_dominokit_domino_ui_style_WaveColor_2_classLit = createForEnum('org.dominokit.domino.ui.style', 'WaveColor', 30, values_13);
function $clinit_WaveStyle(){
  $clinit_WaveStyle = emptyMethod;
  FLOAT = new WaveStyle('FLOAT', 0, 'waves-float');
  CIRCLE = new WaveStyle('CIRCLE', 1, 'waves-circle');
  RIPPLE = new WaveStyle('RIPPLE', 2, 'waves-ripple');
  BLOCK = new WaveStyle('BLOCK', 3, 'waves-block');
}

function WaveStyle(enum$name, enum$ordinal, style){
  Enum.call(this, enum$name, enum$ordinal);
  this.style_0 = style;
}

function values_14(){
  $clinit_WaveStyle();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_style_WaveStyle_2_classLit, 1), $intern_0, 118, 0, [FLOAT, CIRCLE, RIPPLE, BLOCK]);
}

defineClass(118, 21, {4:1, 34:1, 21:1, 118:1}, WaveStyle);
var BLOCK, CIRCLE, FLOAT, RIPPLE;
var Lorg_dominokit_domino_ui_style_WaveStyle_2_classLit = createForEnum('org.dominokit.domino.ui.style', 'WaveStyle', 118, values_14);
function $convertStyle(rippleStyle){
  var style;
  style = new StringBuilder;
  $forEach_4(rippleStyle, makeLambdaFunction(Waves$lambda$0$Type.prototype.onKey, Waves$lambda$0$Type, [style, rippleStyle]));
  return style.string;
}

function $initWaves(this$static){
  if (this$static.target_0.element_3().getAttribute('disabled') != null || $containsCss_0($style(this$static.target_0), 'disabled'))
    return;
  $addEventListener(this$static.target_0, ($clinit_EventType() , mousedown).name_0, this$static.wavesEventListener);
}

function $offset(target){
  var box, docElem, position;
  docElem = target.ownerDocument.documentElement;
  box = target.getBoundingClientRect();
  position = new Waves$ElementOffset;
  position.top_0 = box.top + ($clinit_DomGlobal() , $wnd.goog.global.window).pageYOffset - docElem.clientTop;
  position.left_0 = box.left + $wnd.goog.global.window.pageXOffset - docElem.clientLeft;
  return position;
}

function $removeWaves(this$static){
  $removeEventListener(this$static.target_0, ($clinit_EventType() , mousedown).name_0, this$static.wavesEventListener);
}

function $setupStopTimers(this$static){
  this$static.delayTimer = new Waves$1(this$static);
  $schedule(this$static.delayTimer, 300);
}

function $stopCurrentWave(this$static){
  !!this$static.delayTimer && $cancel(this$static.delayTimer);
  !!this$static.removeTimer && $cancel(this$static.removeTimer);
  !!this$static.ripple && $remove_0(this$static.ripple);
}

function Waves(target){
  this.wavesEventListener = new Waves$WavesEventListener(this);
  this.target_0 = target;
}

function lambda$0_6(style_0, rippleStyle_1, key_2){
  return $append_4($append_4($append_4((style_0.string += '' + key_2 , style_0), ':'), castToString(rippleStyle_1[key_2])), ';');
}

defineClass(578, 1, $intern_31, Waves);
_.element_3 = function element_28(){
  return this.target_0.wrappedElement;
}
;
var Lorg_dominokit_domino_ui_style_Waves_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Waves', 578);
function Waves$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(581, 108, {}, Waves$1);
_.run = function run_9(){
  this.this$01.rippleStyle['opacity '] = '0';
  $setAttribute_0(this.this$01.ripple, 'style', $convertStyle(this.this$01.rippleStyle));
  this.this$01.removeTimer = new Waves$1$1(this);
  $schedule(this.this$01.removeTimer, 750);
}
;
var Lorg_dominokit_domino_ui_style_Waves$1_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Waves/1', 581);
function Waves$1$1(this$1){
  this.this$11 = this$1;
  Timer.call(this);
}

defineClass(582, 108, {}, Waves$1$1);
_.run = function run_10(){
  $removeCss(this.this$11.this$01.ripple, 'waves-rippling');
  $remove_0(this.this$11.this$01.ripple);
}
;
var Lorg_dominokit_domino_ui_style_Waves$1$1_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Waves/1/1', 582);
function Waves$ElementOffset(){
}

defineClass(579, 1, {}, Waves$ElementOffset);
_.left_0 = 0;
_.top_0 = 0;
var Lorg_dominokit_domino_ui_style_Waves$ElementOffset_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Waves/ElementOffset', 579);
function Waves$WavesEventListener(this$0){
  this.this$01 = this$0;
}

defineClass(580, 1, {}, Waves$WavesEventListener);
_.handleEvent = function handleEvent_51(evt){
  var clientWidth, mouseEvent, position, relativeX, relativeY, scale, scaleValue;
  mouseEvent = castToNative(evt, $wnd.MouseEvent);
  if (mouseEvent.button == 2) {
    return;
  }
  $stopCurrentWave(this.this$01);
  this.this$01.ripple = castTo($addCss_0(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['waves-ripple', 'waves-rippling'])), 3);
  $appendChild_0(this.this$01.target_0, this.this$01.ripple);
  position = $offset(this.this$01.target_0.wrappedElement);
  relativeY = mouseEvent.pageY - position.top_0;
  relativeX = mouseEvent.pageX - position.left_0;
  relativeY = relativeY >= 0?relativeY:0;
  relativeX = relativeX >= 0?relativeX:0;
  clientWidth = this.this$01.target_0.wrappedElement.clientWidth;
  scaleValue = clientWidth * 0.01 * 3;
  scale = 'scale(' + scaleValue + ')';
  this.this$01.rippleStyle = {};
  this.this$01.rippleStyle['top'] = relativeY + 'px';
  this.this$01.rippleStyle['left'] = relativeX + 'px';
  $addCss(this.this$01.ripple, 'waves-notransition');
  $setAttribute_0(this.this$01.ripple, 'style', $convertStyle(this.this$01.rippleStyle));
  $removeCss(this.this$01.ripple, 'waves-notransition');
  this.this$01.rippleStyle['-webkit-transform'] = scale + ' ' + 'translate(0,0)';
  this.this$01.rippleStyle['-moz-transform'] = scale + ' ' + 'translate(0,0)';
  this.this$01.rippleStyle['-ms-transform'] = scale + ' ' + 'translate(0,0)';
  this.this$01.rippleStyle['-o-transform'] = scale + ' ' + 'translate(0,0)';
  this.this$01.rippleStyle['transform'] = scale + ' ' + 'translate(0,0)';
  this.this$01.rippleStyle['opacity '] = '1';
  this.this$01.rippleStyle['-webkit-transition-duration'] = '750ms';
  this.this$01.rippleStyle['-moz-transition-duration'] = '750ms';
  this.this$01.rippleStyle['-o-transition-duration'] = '750ms';
  this.this$01.rippleStyle['transition-duration'] = '750ms';
  $setAttribute_0(this.this$01.ripple, 'style', $convertStyle(this.this$01.rippleStyle));
  $setupStopTimers(this.this$01);
}
;
var Lorg_dominokit_domino_ui_style_Waves$WavesEventListener_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Waves/WavesEventListener', 580);
function Waves$lambda$0$Type(style_0, rippleStyle_1){
  this.style_0 = style_0;
  this.rippleStyle_1 = rippleStyle_1;
}

defineClass(885, $wnd.Function, {}, Waves$lambda$0$Type);
_.onKey = function onKey(arg0){
  lambda$0_6(this.style_0, this.rippleStyle_1, arg0);
}
;
function $applyWaveStyle_0(this$static, waveStyle){
  $containsCss_0($style(this$static.element), 'waves-effect') || $initWaves_0(this$static);
  $containsCss_0($style(this$static.element), waveStyle.style_0) || $addCss(this$static.element, waveStyle.style_0);
  return this$static;
}

function $initWaves_0(this$static){
  $containsCss_0($style(this$static.element), 'waves-effect') || $addCss(this$static.element, 'waves-effect');
  $initWaves(this$static.wavesElement);
  return this$static;
}

function $removeWaveStyles(this$static){
  var i, style;
  for (i = 0; i < $style(this$static.element).element.classList.length; ++i) {
    style = $cssClassByIndex($style(this$static.element), i);
    style.indexOf('waves-') != -1 && $removeCss(this$static.element, style);
  }
}

function $removeWaves_0(this$static){
  $containsCss_0($style(this$static.element), 'waves-effect') && $removeCss(this$static.element, 'waves-effect');
  this$static.waveColor != null && $removeCss(this$static.element, this$static.waveColor);
  $removeWaveStyles(this$static);
  $removeWaves(this$static.wavesElement);
  return this$static;
}

function $setWaveColor_0(this$static, waveColor){
  $containsCss_0($style(this$static.element), 'waves-effect') || $initWaves_0(this$static);
  if (this$static.waveColor == null)
    $addCss(this$static.element, waveColor.style_0);
  else {
    $removeCss(this$static.element, this$static.waveColor);
    $addCss(this$static.element, waveColor.style_0);
  }
  this$static.waveColor = waveColor.style_0;
  return this$static;
}

function WavesSupport(targetElement){
  this.element = new DominoElement(targetElement);
  this.wavesElement = new Waves(this.element);
}

defineClass(185, 1, {}, WavesSupport);
var Lorg_dominokit_domino_ui_style_WavesSupport_2_classLit = createForClass('org.dominokit.domino.ui.style', 'WavesSupport', 185);
function $clinit_Theme(){
  $clinit_Theme = emptyMethod;
  themeChangeHandlers = new ArrayList;
  $clinit_ColorScheme();
  currentTheme = new Theme(RED_0);
}

function $apply_2(this$static){
  !!currentTheme && ($clinit_DomGlobal() , document_0).body.classList.remove(currentTheme.themeStyle);
  currentTheme = this$static;
  $addCss_1(new Style(new Style$lambda$0$Type(($clinit_DomGlobal() , document_0).body)), this$static.themeStyle);
  $forEach_0(themeChangeHandlers, new Theme$lambda$0$Type);
}

function Theme(scheme){
  $clinit_Theme();
  this.themeStyle = $replace(scheme.color_1().getStyle(), 'col-', 'theme-');
  $replace(scheme.color_1().getName(), ' ', '_').toLowerCase();
}

defineClass(227, 1, {}, Theme);
var currentTheme, themeChangeHandlers;
var Lorg_dominokit_domino_ui_themes_Theme_2_classLit = createForClass('org.dominokit.domino.ui.themes', 'Theme', 227);
function Theme$lambda$0$Type(){
}

defineClass(542, 1, {}, Theme$lambda$0$Type);
_.accept = function accept_66(arg0){
  throwClassCastExceptionUnlessNull(arg0);
  null.$_nullMethod();
}
;
var Lorg_dominokit_domino_ui_themes_Theme$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.themes', 'Theme/lambda$0$Type', 542);
function $clinit_ToggleTarget(){
  $clinit_ToggleTarget = emptyMethod;
  ANY = new ToggleTarget('ANY', 0, 'tgl-any');
  ICON = new ToggleTarget('ICON', 1, 'tgl-icon');
}

function ToggleTarget(enum$name, enum$ordinal, style){
  Enum.call(this, enum$name, enum$ordinal);
  this.style_0 = style;
}

function values_15(){
  $clinit_ToggleTarget();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_tree_ToggleTarget_2_classLit, 1), $intern_0, 162, 0, [ANY, ICON]);
}

defineClass(162, 21, {4:1, 34:1, 21:1, 162:1}, ToggleTarget);
var ANY, ICON;
var Lorg_dominokit_domino_ui_tree_ToggleTarget_2_classLit = createForEnum('org.dominokit.domino.ui.tree', 'ToggleTarget', 162, values_15);
function $appendChild_3(this$static, treeItem){
  this$static.root_0.appendChild(treeItem.element);
  treeItem.parent_0 = this$static;
  $setLevel_0(treeItem, 1);
  $setLevelPadding(treeItem, this$static.levelPadding);
  $setToggleTarget(treeItem, this$static.toggleTarget);
  $add_0(this$static.subItems, treeItem);
  return this$static;
}

function $enableFolding(this$static){
  this$static.collapseAllIcon = castTo($setCssProperty(castTo($addCss($setMarginTop(castTo($setMarginBottom(create_12('fullscreen_exit'), '0px'), 56)), 'pull-right'), 56), 'cursor', 'pointer'), 56);
  this$static.collapseAllIcon.icon_0.wrappedElement.addEventListener('click', new Tree$lambda$7$Type(this$static));
  this$static.expandAllIcon = castTo($setCssProperty(castTo($addCss($setMarginTop(castTo($setMarginBottom(create_12('fullscreen'), '0px'), 56)), 'pull-right'), 56), 'cursor', 'pointer'), 56);
  this$static.expandAllIcon.icon_0.wrappedElement.addEventListener('click', new Tree$lambda$8$Type(this$static));
  this$static.header.appendChild(this$static.expandAllIcon.icon_0.wrappedElement);
  this$static.header.appendChild(this$static.collapseAllIcon.icon_0.wrappedElement);
  return this$static;
}

function $enableSearch(this$static){
  this$static.search = $onClose($onSearch(castTo($styler(new Search, new Tree$lambda$3$Type), 190), new Tree$0methodref$filter$Type(this$static)), new Tree$1methodref$clearFilter$Type(this$static));
  this$static.searchIcon = castTo($setCssProperty(castTo($addCss($setMarginTop(castTo($setMarginBottom(create_12('search'), '0px'), 56)), 'pull-right'), 56), 'cursor', 'pointer'), 56);
  this$static.header.appendChild(this$static.search.element);
  this$static.header.appendChild(this$static.searchIcon.icon_0.wrappedElement);
  this$static.searchIcon.icon_0.wrappedElement.addEventListener('click', new Tree$lambda$6$Type(this$static));
  return this$static;
}

function $filter_1(this$static, searchToken){
  $forEach_0(this$static.subItems, new Tree$lambda$13$Type(searchToken));
}

function $setActiveItem(this$static, activeItem, silent){
  !!this$static.activeTreeItem && !equals_Ljava_lang_Object__Z__devirtual$(this$static.activeTreeItem, activeItem) && $deactivate(this$static.activeTreeItem);
  this$static.activeTreeItem = activeItem;
  $activate_0(this$static.activeTreeItem, false);
  silent || $forEach_0(this$static.itemsClickListeners, new Tree$lambda$14$Type);
}

function $setAutoCollapse(this$static){
  this$static.autoCollapse = false;
  return this$static;
}

function Tree(){
  BaseDominoElement.call(this);
  this.title_0 = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('span'), $wnd.HTMLElement))).element), 'title'), 3).wrappedElement;
  this.toggleTarget = ($clinit_ToggleTarget() , ANY);
  this.filter_0 = new Tree$lambda$0$Type;
  this.header = castToNative(castTo($appendChild(castTo($css(castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('li'), $wnd.HTMLElement))).element), 'header'), 3), 'menu-header'), 3), this.title_0), 3).wrappedElement, $wnd.HTMLLIElement);
  this.root_0 = castToNative(castTo($css(castTo($appendChild(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('ul'), $wnd.HTMLElement))).element), this.header), 3), 'list'), 3).wrappedElement, $wnd.HTMLUListElement);
  this.menu = castToNative(castTo($appendChild(castTo($css($style_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), 'overflow-x: hidden'), 'menu'), 3), this.root_0), 3).wrappedElement, $wnd.HTMLDivElement);
  this.subItems = new ArrayList;
  this.itemsClickListeners = new ArrayList;
  $init(this, this);
  '\u6211\u7684\u7B14\u8BB0'.length == 0 && $hide(new DominoElement(this.header));
  this.title_0.textContent = '\u6211\u7684\u7B14\u8BB0';
}

function lambda$13(searchToken_0, treeItem_1){
  return $filter_3(treeItem_1, searchToken_0);
}

defineClass(232, 12, $intern_15, Tree);
_.element_3 = function element_29(){
  return this.menu;
}
;
_.expand_0 = function expand_0(expandParent){
  return this;
}
;
_.setActiveItem = function setActiveItem(activeItem){
  $setActiveItem(this, activeItem, false);
}
;
_.setActiveItem_0 = function setActiveItem_0(activeItem, silent){
  $setActiveItem(this, activeItem, silent);
}
;
_.getFilter = function getFilter(){
  return this.filter_0;
}
;
_.getSubItems = function getSubItems(){
  return new ArrayList_0(this.subItems);
}
;
_.getTreeRoot = function getTreeRoot(){
  return this;
}
;
_.isAutoExpandFound = function isAutoExpandFound(){
  return this.autoExpandFound;
}
;
_.autoCollapse = true;
_.autoExpandFound = false;
_.levelPadding = 15;
var Lorg_dominokit_domino_ui_tree_Tree_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'Tree', 232);
function Tree$0methodref$filter$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(604, 1, {}, Tree$0methodref$filter$Type);
_.onSearch = function onSearch_0(arg0){
  $filter_1(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_tree_Tree$0methodref$filter$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'Tree/0methodref$filter$Type', 604);
function Tree$1methodref$clearFilter$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(605, 1, {}, Tree$1methodref$clearFilter$Type);
_.onClose = function onClose_0(){
  $forEach_0(this.$$outer_0.subItems, new Tree$5methodref$clearFilter$Type);
}
;
var Lorg_dominokit_domino_ui_tree_Tree$1methodref$clearFilter$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'Tree/1methodref$clearFilter$Type', 605);
function Tree$2methodref$expandAll$Type(){
}

defineClass(609, 1, {}, Tree$2methodref$expandAll$Type);
_.accept = function accept_67(arg0){
  $expandAll(castTo(arg0, 27));
}
;
var Lorg_dominokit_domino_ui_tree_Tree$2methodref$expandAll$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'Tree/2methodref$expandAll$Type', 609);
function Tree$3methodref$collapseAll$Type(){
}

defineClass(610, 1, {}, Tree$3methodref$collapseAll$Type);
_.accept = function accept_68(arg0){
  $collapseAll(castTo(arg0, 27));
}
;
var Lorg_dominokit_domino_ui_tree_Tree$3methodref$collapseAll$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'Tree/3methodref$collapseAll$Type', 610);
function Tree$5methodref$clearFilter$Type(){
}

defineClass(611, 1, {}, Tree$5methodref$clearFilter$Type);
_.accept = function accept_69(arg0){
  $clearFilter(castTo(arg0, 27));
}
;
var Lorg_dominokit_domino_ui_tree_Tree$5methodref$clearFilter$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'Tree/5methodref$clearFilter$Type', 611);
function $filter_2(arg0, arg1){
  return $indexOf(arg0.title_0.toLowerCase(), $toString_0(arg1.toLowerCase())) != -1;
}

function Tree$lambda$0$Type(){
}

defineClass(602, 1, {}, Tree$lambda$0$Type);
var Lorg_dominokit_domino_ui_tree_Tree$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'Tree/lambda$0$Type', 602);
function Tree$lambda$13$Type(searchToken_0){
  this.searchToken_0 = searchToken_0;
}

defineClass(612, 1, {}, Tree$lambda$13$Type);
_.accept = function accept_70(arg0){
  lambda$13(this.searchToken_0, castTo(arg0, 27));
}
;
var Lorg_dominokit_domino_ui_tree_Tree$lambda$13$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'Tree/lambda$13$Type', 612);
function Tree$lambda$14$Type(){
}

defineClass(233, 1, {}, Tree$lambda$14$Type);
_.accept = function accept_71(arg0){
  throwClassCastExceptionUnlessNull(arg0);
  null.$_nullMethod();
}
;
var Lorg_dominokit_domino_ui_tree_Tree$lambda$14$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'Tree/lambda$14$Type', 233);
function Tree$lambda$3$Type(){
}

defineClass(603, 1, {}, Tree$lambda$3$Type);
_.applyStyles = function applyStyles_1(arg0){
  $setHeight_0(arg0, $of(($clinit_Unit() , px), valueOf(40)));
}
;
var Lorg_dominokit_domino_ui_tree_Tree$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'Tree/lambda$3$Type', 603);
function Tree$lambda$6$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(606, 1, {}, Tree$lambda$6$Type);
_.handleEvent = function handleEvent_52(arg0){
  $open_0(this.$$outer_0.search);
}
;
var Lorg_dominokit_domino_ui_tree_Tree$lambda$6$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'Tree/lambda$6$Type', 606);
function Tree$lambda$7$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(607, 1, {}, Tree$lambda$7$Type);
_.handleEvent = function handleEvent_53(arg0){
  $forEach_0(new ArrayList_0(this.$$outer_0.subItems), new Tree$3methodref$collapseAll$Type);
}
;
var Lorg_dominokit_domino_ui_tree_Tree$lambda$7$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'Tree/lambda$7$Type', 607);
function Tree$lambda$8$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(608, 1, {}, Tree$lambda$8$Type);
_.handleEvent = function handleEvent_54(arg0){
  $forEach_0(new ArrayList_0(this.$$outer_0.subItems), new Tree$2methodref$expandAll$Type);
}
;
var Lorg_dominokit_domino_ui_tree_Tree$lambda$8$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'Tree/lambda$8$Type', 608);
function $activate_0(this$static, activateParent){
  $addCss_1(new Style(new Style$lambda$0$Type(this$static.element)), 'active');
  (!this$static.expandIcon || $isCollapsed(this$static.collapsible) || this$static.subItems.size_0 == 0) && $replaceIcon(this$static, this$static.activeIcon);
  activateParent && !!this$static.parent_0 && this$static.parent_0.setActiveItem(this$static);
}

function $activateItem(this$static){
  if (this$static.activeTreeItem) {
    $deactivate(this$static.activeTreeItem);
    this$static.activeTreeItem = null;
  }
  this$static.parent_0.setActiveItem(this$static);
}

function $addClickListener_1(this$static, listener){
  castToNative(this$static.anchorElement.wrappedElement, $wnd.HTMLAnchorElement).addEventListener(($clinit_EventType() , click_0).name_0, listener);
  return this$static;
}

function $appendChild_4(this$static, treeItem){
  $add_2(this$static.subItems, treeItem);
  this$static.childrenContainer.appendChild(treeItem.element);
  $addCss(this$static.anchorElement, 'tree-toggle');
  treeItem.parent_0 = this$static;
  $setLevel_0(treeItem, this$static.level + 1);
  $addCss_1((treeItem.styleInitializer.apply_1() , treeItem.style_0), 'tree-leaf');
  $removeCss_1(new Style(new Style$lambda$0$Type(this$static.element)), 'tree-leaf');
  $setToggleTarget(treeItem, this$static.toggleTarget);
  $setLevelPadding(treeItem, this$static.levelPadding);
  $addCss_1((this$static.styleInitializer.apply_1() , this$static.style_0), 'tree-item-parent');
  return this$static;
}

function $clearFilter(this$static){
  !!this$static.originalState && $wnd.goog.global.requestAnimationFrame(makeLambdaFunction(TreeItem$lambda$8$Type.prototype.onInvoke_1, TreeItem$lambda$8$Type, [this$static]));
  $removeCssProperty_0(new Style(new Style$lambda$0$Type(this$static.element)), 'display');
  $forEach(this$static.subItems, new TreeItem$1methodref$clearFilter$Type);
}

function $collapseAll(this$static){
  if (this$static.subItems.size_0 != 0 && !$isCollapsed(this$static.collapsible)) {
    this$static.subItems.size_0 != 0 && $hide_0(this$static.collapsible);
    $forEach(this$static.subItems, new TreeItem$2methodref$collapseAll$Type);
  }
}

function $deactivate(this$static){
  $removeCss_1(new Style(new Style$lambda$0$Type(this$static.element)), 'active');
  (!this$static.expandIcon || $isCollapsed(this$static.collapsible) || this$static.subItems.size_0 == 0) && $restoreIcon(this$static);
  if (this$static.subItems.size_0 != 0) {
    $forEach(this$static.subItems, new TreeItem$0methodref$deactivate$Type);
    this$static.parent_0.getTreeRoot().autoCollapse && $hide_0(this$static.collapsible);
  }
}

function $expandAll(this$static){
  if (this$static.subItems.size_0 != 0 && $isCollapsed(this$static.collapsible)) {
    this$static.subItems.size_0 != 0 && $show_1(this$static.collapsible);
    $forEach(this$static.subItems, new TreeItem$3methodref$expandAll$Type);
  }
}

function $filter_3(this$static, searchToken){
  var found;
  !this$static.originalState && (this$static.originalState = new TreeItem$OriginalState(!$isCollapsed(this$static.collapsible)));
  this$static.subItems.size_0 == 0?(found = $filter_2((this$static.parent_0.getFilter() , this$static), searchToken)):(found = $filter_2((this$static.parent_0.getFilter() , this$static), searchToken) | gt($count($filter_0(new StreamImpl(null, new Spliterators$IteratorSpliterator(this$static.subItems, 16)), new TreeItem$lambda$10$Type(searchToken))), 0));
  if (found) {
    $removeCssProperty_0(new Style(new Style$lambda$0$Type(this$static.element)), 'display');
    this$static.subItems.size_0 != 0 && this$static.parent_0.isAutoExpandFound() && $isCollapsed(this$static.collapsible) && $show_1(this$static.collapsible);
    return true;
  }
   else {
    $setDisplay_0(new Style(new Style$lambda$0$Type(this$static.element)), 'none');
    return false;
  }
}

function $lambda$0_20(this$static, evt_0){
  evt_0.stopPropagation();
  $toggle_0(this$static);
  $activateItem(this$static);
}

function $lambda$1_14(this$static, evt_0){
  evt_0.stopPropagation();
  $toggle_0(this$static);
  $activateItem(this$static);
}

function $lambda$3_11(this$static){
  $replaceIcon(this$static, this$static.expandIcon);
}

function $lambda$4_9(this$static){
  ($clinit_ToggleTarget() , ANY) == this$static.toggleTarget && this$static.subItems.size_0 != 0 && $toggle_0(this$static);
  $activateItem(this$static);
}

function $lambda$7_0(this$static, evt_0){
  if (($clinit_ToggleTarget() , ICON) == this$static.toggleTarget) {
    evt_0.stopPropagation();
    $toggle_0(this$static);
  }
  $activateItem(this$static);
}

function $lambda$8_0(this$static){
  !$isCollapsed(this$static.collapsible) != this$static.originalState.expanded && (equals_Ljava_lang_Object__Z__devirtual$(this$static, this$static.parent_0.getTreeRoot().activeTreeItem)?$show_1(this$static.collapsible):$toggleDisplay_1(this$static.collapsible, this$static.originalState.expanded));
  this$static.originalState = null;
}

function $remove_9(this$static){
  if (this$static.parent_0.getSubItems().contains(this$static)) {
    this$static.parent_0.getSubItems().remove(this$static);
    this$static.parent_0.getSubItems().isEmpty() && instanceOf(this$static.parent_0, 27) && $removeCss_1($style(castTo(this$static.parent_0, 27)), 'tree-item-parent');
  }
  return this$static.element.remove() , castTo(this$static.element_0, 27);
}

function $replaceIcon(this$static, newIcon){
  if (newIcon) {
    !!this$static.icon_0 && $remove_0(this$static.icon_0);
    $insertFirst(this$static.anchorElement, newIcon);
    this$static.icon_0 = newIcon;
  }
}

function $restoreIcon(this$static){
  if (this$static.originalIcon) {
    $remove_0(this$static.icon_0);
    $insertFirst(this$static.anchorElement, this$static.originalIcon);
    this$static.icon_0 = this$static.originalIcon;
  }
   else {
    !!this$static.icon_0 && $remove_0(this$static.icon_0);
  }
}

function $setActiveIcon(this$static, activeIcon){
  this$static.activeIcon = activeIcon;
  return this$static;
}

function $setActiveItem_0(this$static, activeItem, silent){
  if (activeItem) {
    !!this$static.activeTreeItem && !equals_Ljava_lang_Object__Z__devirtual$(this$static.activeTreeItem, activeItem) && $deactivate(this$static.activeTreeItem);
    this$static.activeTreeItem = activeItem;
    $activate_0(this$static.activeTreeItem, false);
    this$static.parent_0.setActiveItem_0(this$static, true);
    silent || $forEach_0(this$static.parent_0.getTreeRoot().itemsClickListeners, new Tree$lambda$14$Type);
  }
}

function $setExpandIcon(this$static, expandIcon){
  this$static.expandIcon = expandIcon;
  return this$static;
}

function $setLevel_0(this$static, level){
  this$static.level = level;
  $setPaddingLeft($style(this$static.anchorElement), $of(($clinit_Unit() , px), valueOf(this$static.level * this$static.levelPadding)));
  this$static.subItems.size_0 != 0 && $forEach(this$static.subItems, new TreeItem$lambda$13$Type(level));
  return this$static;
}

function $setLevelPadding(this$static, levelPadding){
  this$static.levelPadding = levelPadding;
  $setPaddingLeft($style(this$static.anchorElement), $of(($clinit_Unit() , px), valueOf(this$static.level * this$static.levelPadding)));
  this$static.subItems.size_0 != 0 && $forEach(this$static.subItems, new TreeItem$lambda$14$Type(levelPadding));
  return this$static;
}

function $setToggleTarget(this$static, toggleTarget){
  if (toggleTarget) {
    !!this$static.toggleTarget && $removeCss(this$static, this$static.toggleTarget.style_0);
    this$static.toggleTarget = toggleTarget;
    $css(this$static, this$static.toggleTarget.style_0);
    ($clinit_ToggleTarget() , ICON) == toggleTarget?!!this$static.icon_0 && $setClickable(this$static.icon_0, true):!!this$static.icon_0 && $setClickable(this$static.icon_0, false);
    $forEach(this$static.subItems, new TreeItem$lambda$5$Type(toggleTarget));
  }
  return this$static;
}

function $show_3(this$static, expandParent){
  this$static.subItems.size_0 != 0 && $show_1(this$static.collapsible);
  expandParent && !!this$static.parent_0 && this$static.parent_0.expand_0(true);
  return this$static;
}

function $toggle_0(this$static){
  if (this$static.subItems.size_0 != 0) {
    $isCollapsed(this$static.collapsible)?$addCss(this$static.anchorElement, 'toggled'):$removeCss(this$static.anchorElement, 'toggled');
    $toggleDisplay_0(this$static.collapsible);
  }
}

function TreeItem(title_0, icon){
  var toggleContainer;
  WavesElement.call(this);
  this.subItems = new LinkedList;
  this.toggleTarget = ($clinit_ToggleTarget() , ANY);
  this.indicatorContainer = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('span'), $wnd.HTMLElement))).element), 'tree-indicator'), 3);
  this.title_0 = title_0;
  this.icon_0 = icon;
  this.originalIcon = $setColor_2(create_12(icon.name_0), icon.color_0);
  $equals_1(icon.icon_0.wrappedElement.style.visibility, 'hidden') && $setCssProperty(this.originalIcon, 'visibility', 'hidden');
  $addClickListener_0(this.originalIcon, new TreeItem$lambda$7$Type(this));
  this.titleElement = castTo($textContent(castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('span'), $wnd.HTMLElement))).element), 'title'), 3), title_0), 3).wrappedElement;
  toggleContainer = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('span'), $wnd.HTMLElement))).element), 'tree-tgl-icn'), 3);
  this.anchorElement = castTo($appendChild_0(castTo($appendChild_0(castTo($appendChild_0(castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('a'), $wnd.HTMLElement))).element), this.icon_0), 3), $appendChild($style_0(castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), 'ellipsis-text'), 3), 'margin-top: 2px;'), this.titleElement)), 3), $appendChild_0(castTo($appendChild_0(toggleContainer, $addClickListener_0(castTo($clickable(castTo($css($setSize_1(new MdiIcon('mdi-plus'), ($clinit_MdiIcon$MdiSize() , mdi18)), 'tree-tgl-collapsed'), 73)), 73), new TreeItem$lambda$0$Type(this))), 3), $addClickListener_0(castTo($clickable(castTo($css($setSize_1(new MdiIcon('mdi-minus'), mdi18), 'tree-tgl-expanded'), 73)), 73), new TreeItem$lambda$1$Type(this)))), 3), this.indicatorContainer), 3);
  this.element = castToNative((new HtmlContentBuilder(castToNative(document_0.createElement('li'), $wnd.HTMLElement))).element, $wnd.HTMLLIElement);
  this.element.appendChild(this.anchorElement.wrappedElement);
  this.childrenContainer = castToNative(castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('ul'), $wnd.HTMLElement))).element), 'ml-tree'), 3).wrappedElement, $wnd.HTMLUListElement);
  this.element.appendChild(this.childrenContainer);
  this.collapsible = $hide_0($addShowHandler($addHideHandler($setStrategy(new Collapsible(this.childrenContainer), new TreeHeightCollapseStrategy(($clinit_DominoUIConfig() , this))), new TreeItem$lambda$2$Type(this)), new TreeItem$lambda$3$Type(this)));
  $addEventListener(this.anchorElement, 'click', new TreeItem$lambda$4$Type(this));
  $init(this, this);
  this.wavesSupport = $initWaves_0(new WavesSupport(this.anchorElement.wrappedElement));
  $setToggleTarget(this, ANY);
  $setWaveColor(this, ($clinit_WaveColor() , THEME));
  $applyWaveStyle(this, ($clinit_WaveStyle() , BLOCK));
}

function lambda$10(searchToken_0, treeItem_1){
  return $filter_3(treeItem_1, searchToken_0);
}

function lambda$13_0(level_0, treeItem_1){
  return $setLevel_0(treeItem_1, level_0 + 1);
}

function lambda$14(levelPadding_0, treeItem_1){
  return $setLevelPadding(treeItem_1, levelPadding_0);
}

function lambda$5_1(toggleTarget_0, item_1){
  return $setToggleTarget(item_1, toggleTarget_0);
}

defineClass(27, 223, {27:1, 12:1, 15:1}, TreeItem);
_.element_3 = function element_30(){
  return this.element;
}
;
_.expand_0 = function expand_1(expandParent){
  return $show_3(this, expandParent);
}
;
_.remove_0 = function remove_25(){
  return $remove_9(this);
}
;
_.setActiveItem = function setActiveItem_1(activeItem){
  $setActiveItem_0(this, activeItem, false);
}
;
_.setActiveItem_0 = function setActiveItem_2(activeItem, silent){
  $setActiveItem_0(this, activeItem, silent);
}
;
_.getCollapsible = function getCollapsible_0(){
  return this.collapsible;
}
;
_.getFilter = function getFilter_0(){
  return this.parent_0.getFilter();
}
;
_.getSubItems = function getSubItems_0(){
  return this.subItems;
}
;
_.getTreeRoot = function getTreeRoot_0(){
  return this.parent_0.getTreeRoot();
}
;
_.isAutoExpandFound = function isAutoExpandFound_0(){
  return this.parent_0.isAutoExpandFound();
}
;
_.level = 1;
_.levelPadding = 15;
var Lorg_dominokit_domino_ui_tree_TreeItem_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem', 27);
function TreeItem$0methodref$deactivate$Type(){
}

defineClass(708, 1, {}, TreeItem$0methodref$deactivate$Type);
_.accept = function accept_72(arg0){
  $deactivate(castTo(arg0, 27));
}
;
var Lorg_dominokit_domino_ui_tree_TreeItem$0methodref$deactivate$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/0methodref$deactivate$Type', 708);
function TreeItem$1methodref$clearFilter$Type(){
}

defineClass(710, 1, {}, TreeItem$1methodref$clearFilter$Type);
_.accept = function accept_73(arg0){
  $clearFilter(castTo(arg0, 27));
}
;
var Lorg_dominokit_domino_ui_tree_TreeItem$1methodref$clearFilter$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/1methodref$clearFilter$Type', 710);
function TreeItem$2methodref$collapseAll$Type(){
}

defineClass(712, 1, {}, TreeItem$2methodref$collapseAll$Type);
_.accept = function accept_74(arg0){
  $collapseAll(castTo(arg0, 27));
}
;
var Lorg_dominokit_domino_ui_tree_TreeItem$2methodref$collapseAll$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/2methodref$collapseAll$Type', 712);
function TreeItem$3methodref$expandAll$Type(){
}

defineClass(713, 1, {}, TreeItem$3methodref$expandAll$Type);
_.accept = function accept_75(arg0){
  $expandAll(castTo(arg0, 27));
}
;
var Lorg_dominokit_domino_ui_tree_TreeItem$3methodref$expandAll$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/3methodref$expandAll$Type', 713);
function TreeItem$OriginalState(expanded){
  this.expanded = expanded;
}

defineClass(701, 1, {}, TreeItem$OriginalState);
_.expanded = false;
var Lorg_dominokit_domino_ui_tree_TreeItem$OriginalState_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/OriginalState', 701);
function TreeItem$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(702, 1, {}, TreeItem$lambda$0$Type);
_.handleEvent = function handleEvent_55(arg0){
  $lambda$0_20(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_tree_TreeItem$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/lambda$0$Type', 702);
function TreeItem$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(703, 1, {}, TreeItem$lambda$1$Type);
_.handleEvent = function handleEvent_56(arg0){
  $lambda$1_14(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_tree_TreeItem$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/lambda$1$Type', 703);
function TreeItem$lambda$10$Type(searchToken_0){
  this.searchToken_0 = searchToken_0;
}

defineClass(711, 1, {}, TreeItem$lambda$10$Type);
_.test_0 = function test_21(arg0){
  return lambda$10(this.searchToken_0, castTo(arg0, 27));
}
;
var Lorg_dominokit_domino_ui_tree_TreeItem$lambda$10$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/lambda$10$Type', 711);
function TreeItem$lambda$13$Type(level_0){
  this.level_0 = level_0;
}

defineClass(714, 1, {}, TreeItem$lambda$13$Type);
_.accept = function accept_76(arg0){
  lambda$13_0(this.level_0, castTo(arg0, 27));
}
;
_.level_0 = 0;
var Lorg_dominokit_domino_ui_tree_TreeItem$lambda$13$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/lambda$13$Type', 714);
function TreeItem$lambda$14$Type(levelPadding_0){
  this.levelPadding_0 = levelPadding_0;
}

defineClass(715, 1, {}, TreeItem$lambda$14$Type);
_.accept = function accept_77(arg0){
  lambda$14(this.levelPadding_0, castTo(arg0, 27));
}
;
_.levelPadding_0 = 0;
var Lorg_dominokit_domino_ui_tree_TreeItem$lambda$14$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/lambda$14$Type', 715);
function TreeItem$lambda$2$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(704, 1, {197:1}, TreeItem$lambda$2$Type);
_.apply_1 = function apply_28(){
  $restoreIcon(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_tree_TreeItem$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/lambda$2$Type', 704);
function TreeItem$lambda$3$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(705, 1, {794:1}, TreeItem$lambda$3$Type);
var Lorg_dominokit_domino_ui_tree_TreeItem$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/lambda$3$Type', 705);
function TreeItem$lambda$4$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(706, 1, {}, TreeItem$lambda$4$Type);
_.handleEvent = function handleEvent_57(arg0){
  $lambda$4_9(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_tree_TreeItem$lambda$4$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/lambda$4$Type', 706);
function TreeItem$lambda$5$Type(toggleTarget_0){
  this.toggleTarget_0 = toggleTarget_0;
}

defineClass(707, 1, {}, TreeItem$lambda$5$Type);
_.accept = function accept_78(arg0){
  lambda$5_1(this.toggleTarget_0, castTo(arg0, 27));
}
;
var Lorg_dominokit_domino_ui_tree_TreeItem$lambda$5$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/lambda$5$Type', 707);
function TreeItem$lambda$7$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(709, 1, {}, TreeItem$lambda$7$Type);
_.handleEvent = function handleEvent_58(arg0){
  $lambda$7_0(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_tree_TreeItem$lambda$7$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/lambda$7$Type', 709);
function TreeItem$lambda$8$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(886, $wnd.Function, {}, TreeItem$lambda$8$Type);
_.onInvoke_1 = function onInvoke_3(arg0){
  $lambda$8_0(this.$$outer_0);
}
;
function Paragraph(){
  BaseDominoElement.call(this);
  this.element = new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('p'), $wnd.HTMLElement))).element);
  $setTextContent(this.element, '\u8FD9\u5C06\u65E0\u6CD5\u6062\u590D\uFF01');
  $init(this, this);
}

defineClass(506, 12, $intern_15, Paragraph);
_.element_3 = function element_31(){
  return castToNative(this.element.wrappedElement, $wnd.HTMLParagraphElement);
}
;
var Lorg_dominokit_domino_ui_typography_Paragraph_2_classLit = createForClass('org.dominokit.domino.ui.typography', 'Paragraph', 506);
function BaseDominoElement$0methodref$uncheckedCast$Type(){
}

defineClass(407, 1, {}, BaseDominoElement$0methodref$uncheckedCast$Type);
_.apply_0 = function apply_29(arg0){
  return arg0;
}
;
var Lorg_dominokit_domino_ui_utils_BaseDominoElement$0methodref$uncheckedCast$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'BaseDominoElement/0methodref$uncheckedCast$Type', 407);
function BaseDominoElement$1methodref$of$Type(){
}

defineClass(408, 1, {}, BaseDominoElement$1methodref$of$Type);
_.apply_0 = function apply_30(arg0){
  return new DominoElement(castToNative(arg0, $wnd.HTMLElement));
}
;
var Lorg_dominokit_domino_ui_utils_BaseDominoElement$1methodref$of$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'BaseDominoElement/1methodref$of$Type', 408);
function BaseDominoElement$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(399, 1, $intern_35, BaseDominoElement$lambda$0$Type);
_.apply_1 = function apply_31(){
  $lambda$0_5(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_utils_BaseDominoElement$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'BaseDominoElement/lambda$0$Type', 399);
function BaseDominoElement$lambda$1$Type(){
}

defineClass(398, 1, $intern_35, BaseDominoElement$lambda$1$Type);
_.apply_1 = function apply_32(){
}
;
var Lorg_dominokit_domino_ui_utils_BaseDominoElement$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'BaseDominoElement/lambda$1$Type', 398);
function BaseDominoElement$lambda$2$Type($$outer_0, element_1){
  this.$$outer_0 = $$outer_0;
  this.element_1 = element_1;
}

defineClass(401, 1, $intern_35, BaseDominoElement$lambda$2$Type);
_.apply_1 = function apply_33(){
  $lambda$2_0(this.$$outer_0, this.element_1);
}
;
var Lorg_dominokit_domino_ui_utils_BaseDominoElement$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'BaseDominoElement/lambda$2$Type', 401);
function BaseDominoElement$lambda$3$Type(){
}

defineClass(400, 1, $intern_35, BaseDominoElement$lambda$3$Type);
_.apply_1 = function apply_34(){
}
;
var Lorg_dominokit_domino_ui_utils_BaseDominoElement$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'BaseDominoElement/lambda$3$Type', 400);
function BaseDominoElement$lambda$4$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(403, 1, {}, BaseDominoElement$lambda$4$Type);
_.handleEvent = function handleEvent_59(arg0){
  $lambda$4_0(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_utils_BaseDominoElement$lambda$4$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'BaseDominoElement/lambda$4$Type', 403);
function BaseDominoElement$lambda$5$Type(cevent_0){
  this.cevent_0 = cevent_0;
}

defineClass(402, 1, {}, BaseDominoElement$lambda$5$Type);
_.accept = function accept_79(arg0){
  lambda$5(this.cevent_0, castTo(arg0, 94));
}
;
var Lorg_dominokit_domino_ui_utils_BaseDominoElement$lambda$5$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'BaseDominoElement/lambda$5$Type', 402);
function BaseDominoElement$lambda$6$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(405, 1, {}, BaseDominoElement$lambda$6$Type);
_.handleEvent = function handleEvent_60(arg0){
  $lambda$6(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_utils_BaseDominoElement$lambda$6$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'BaseDominoElement/lambda$6$Type', 405);
function BaseDominoElement$lambda$7$Type(cevent_0){
  this.cevent_0 = cevent_0;
}

defineClass(404, 1, {}, BaseDominoElement$lambda$7$Type);
_.accept = function accept_80(arg0){
  lambda$7(this.cevent_0, castTo(arg0, 94));
}
;
var Lorg_dominokit_domino_ui_utils_BaseDominoElement$lambda$7$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'BaseDominoElement/lambda$7$Type', 404);
function BaseDominoElement$lambda$8$Type(handler_0){
  this.handler_0 = handler_0;
}

defineClass(406, 1, $intern_30, BaseDominoElement$lambda$8$Type);
_.onObserved = function onObserved_6(arg0){
  this.handler_0.run();
}
;
var Lorg_dominokit_domino_ui_utils_BaseDominoElement$lambda$8$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'BaseDominoElement/lambda$8$Type', 406);
function lambda$0_7(records_0){
  var record, record$array, record$index, record$max, recordsArray;
  recordsArray = stampJavaTypeInfo_1(records_0, newArray(records_0.length));
  for (record$array = recordsArray , record$index = 0 , record$max = record$array.length; record$index < record$max; ++record$index) {
    record = record$array[record$index];
    $asList(record.removedNodes).array.length == 0 || onElementsRemoved(record);
    $asList(record.addedNodes).array.length == 0 || onElementsAppended(record);
  }
  return null;
}

function lambda$1_2(record_0, child_1){
  var ceinit, event_0;
  ceinit = {};
  ceinit.detail = record_0;
  event_0 = new $wnd.CustomEvent('dui-attached-' + $getAttribute(new DominoElement(child_1.wrappedElement), ATTACH_UID_KEY), ceinit);
  child_1.wrappedElement.dispatchEvent(event_0);
}

function lambda$2_1(record_0, child_1){
  var ceinit, event_0;
  ceinit = {};
  ceinit.detail = record_0;
  event_0 = new $wnd.CustomEvent('dui-detached-' + $getAttribute(new DominoElement(child_1.wrappedElement), DETACH_UID_KEY), ceinit);
  child_1.wrappedElement.dispatchEvent(event_0);
}

function onElementsAppended(record){
  var element, elementNode, i, nodes;
  nodes = $asList(record.addedNodes);
  for (i = 0; i < nodes.array.length; i++) {
    elementNode = (checkCriticalElementIndex(i, nodes.array.length) , nodes.array[i]);
    if (($clinit_Node() , ELEMENT_NODE) == elementNode.nodeType) {
      element = elementNode;
      element.hasAttribute(ATTACH_UID_KEY) && element.dispatchEvent(new $wnd.Event('dui-attached-' + $getAttribute(new DominoElement(element), ATTACH_UID_KEY)));
      $querySelectorAll(new DominoElement(element), '[' + ATTACH_UID_KEY + ']').forEach_0(new BodyObserver$lambda$1$Type(record));
    }
  }
}

function onElementsRemoved(record){
  var element, elementNode, i, nodes;
  nodes = $asList(record.removedNodes);
  for (i = 0; i < nodes.array.length; i++) {
    elementNode = (checkCriticalElementIndex(i, nodes.array.length) , nodes.array[i]);
    if (($clinit_Node() , ELEMENT_NODE) == elementNode.nodeType) {
      element = elementNode;
      element.hasAttribute(DETACH_UID_KEY) && element.dispatchEvent(new $wnd.Event('dui-detached-' + $getAttribute(new DominoElement(element), DETACH_UID_KEY)));
      $querySelectorAll(new DominoElement(element), '[' + DETACH_UID_KEY + ']').forEach_0(new BodyObserver$lambda$2$Type(record));
    }
  }
}

function startObserving(){
  var mutationObserverInit;
  if (!ready) {
    mutationObserver = new $wnd.MutationObserver(makeLambdaFunction(BodyObserver$lambda$0$Type.prototype.onInvoke_2, BodyObserver$lambda$0$Type, []));
    mutationObserverInit = {};
    mutationObserverInit.childList = true;
    mutationObserverInit.subtree = true;
    mutationObserver.observe(($clinit_DomGlobal() , document_0).body, mutationObserverInit);
    ready = true;
  }
}

var mutationObserver, ready = false;
function BodyObserver$lambda$0$Type(){
}

defineClass(883, $wnd.Function, {}, BodyObserver$lambda$0$Type);
_.onInvoke_2 = function onInvoke_4(arg0, arg1){
  return lambda$0_7(arg0);
}
;
function BodyObserver$lambda$1$Type(record_0){
  this.record_0 = record_0;
}

defineClass(540, 1, {}, BodyObserver$lambda$1$Type);
_.accept = function accept_81(arg0){
  lambda$1_2(this.record_0, castTo(arg0, 3));
}
;
var Lorg_dominokit_domino_ui_utils_BodyObserver$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'BodyObserver/lambda$1$Type', 540);
function BodyObserver$lambda$2$Type(record_0){
  this.record_0 = record_0;
}

defineClass(541, 1, {}, BodyObserver$lambda$2$Type);
_.accept = function accept_82(arg0){
  lambda$2_1(this.record_0, castTo(arg0, 3));
}
;
var Lorg_dominokit_domino_ui_utils_BodyObserver$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'BodyObserver/lambda$2$Type', 541);
function DominoElement(element){
  BaseDominoElement.call(this);
  this.wrappedElement = element;
  $init(this, this);
}

defineClass(3, 12, {12:1, 3:1, 15:1}, DominoElement);
_.element_3 = function element_32(){
  return this.wrappedElement;
}
;
var Lorg_dominokit_domino_ui_utils_DominoElement_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'DominoElement', 3);
function $clinit_DominoId(){
  $clinit_DominoId = emptyMethod;
  seedInit = new LazyInitializer(new DominoId$lambda$0$Type);
}

function unique(){
  $clinit_DominoId();
  var id_0;
  id_0 = ($apply_3(seedInit) , 'dui-' + SEED + counter_0);
  ++counter_0;
  return id_0;
}

var SEED, counter_0 = 0, seedInit;
function DominoId$lambda$0$Type(){
}

defineClass(508, 1, $intern_35, DominoId$lambda$0$Type);
_.apply_1 = function apply_35(){
  $clinit_DominoId();
  SEED = (new $wnd.Date).getTime() + '-';
}
;
var Lorg_dominokit_domino_ui_utils_DominoId$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'DominoId/lambda$0$Type', 508);
function $clinit_DominoUIConfig(){
  $clinit_DominoUIConfig = emptyMethod;
  INSTANCE_15 = new DominoUIConfig;
}

function $setCondensed(this$static){
  this$static.condensed = ($clinit_Optional() , new Optional(checkCriticalNotNull(($clinit_Boolean() , true))));
  return this$static;
}

function $setDefaultFieldsStyle(this$static, fieldsStyle){
  this$static.fieldsStyle = fieldsStyle;
  return this$static;
}

function DominoUIConfig(){
  this.fieldsStyle = ($clinit_FieldStyle() , LINED);
  this.DEFAULT = new DominoUIConfig$lambda$0$Type(this);
  this.fixErrorsPosition = ($clinit_Optional() , $clinit_Optional() , EMPTY);
  this.floatLabels = (null , EMPTY);
  this.condensed = (null , EMPTY);
  this.zindexManager = new DefaultZIndexManager;
}

defineClass(281, 1, {}, DominoUIConfig);
_.defaultButtonElevation = 1;
_.defaultModalElevation = 2;
_.defaultRequiredMessage = '* This field is required';
_.initialZIndex = 1;
_.zIndexIncrement = 1;
var INSTANCE_15;
var Lorg_dominokit_domino_ui_utils_DominoUIConfig_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'DominoUIConfig', 281);
function $appendRequiredIndicator(valueBox, requiredIndicator){
  !!$getLabelElement(valueBox) && $getLabelElement(valueBox).ref != null && $hasDirectChild(castTo($get_5($getLabelElement(valueBox)), 3), requiredIndicator) && $ifPresent($getLabelElement(valueBox), new DominoUIConfig$1$lambda$1$Type(requiredIndicator));
  $ifPresent($getLabelElement(valueBox), new DominoUIConfig$1$lambda$0$Type(requiredIndicator));
}

function $removeRequiredIndicator(valueBox, requiredIndicator){
  !!$getLabelElement(valueBox) && $getLabelElement(valueBox).ref != null && $hasDirectChild(castTo($get_5($getLabelElement(valueBox)), 3), requiredIndicator) && $ifPresent($getLabelElement(valueBox), new DominoUIConfig$1$lambda$1$Type(requiredIndicator));
}

function lambda$0_8(requiredIndicator_0, labelElement_1){
  return labelElement_1.element_0.element_3().appendChild(requiredIndicator_0) , labelElement_1.element_0;
}

function lambda$1_3(requiredIndicator_0, labelElement_1){
  return labelElement_1.wrappedElement.removeChild(requiredIndicator_0) , labelElement_1.element_0;
}

function DominoUIConfig$1$lambda$0$Type(requiredIndicator_0){
  this.requiredIndicator_0 = requiredIndicator_0;
}

defineClass(283, 1, {}, DominoUIConfig$1$lambda$0$Type);
_.accept = function accept_83(arg0){
  lambda$0_8(this.requiredIndicator_0, castTo(arg0, 3));
}
;
var Lorg_dominokit_domino_ui_utils_DominoUIConfig$1$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'DominoUIConfig/1/lambda$0$Type', 283);
function DominoUIConfig$1$lambda$1$Type(requiredIndicator_0){
  this.requiredIndicator_0 = requiredIndicator_0;
}

defineClass(204, 1, {}, DominoUIConfig$1$lambda$1$Type);
_.accept = function accept_84(arg0){
  lambda$1_3(this.requiredIndicator_0, castTo(arg0, 3));
}
;
var Lorg_dominokit_domino_ui_utils_DominoUIConfig$1$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'DominoUIConfig/1/lambda$1$Type', 204);
function DominoUIConfig$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(282, 1, {}, DominoUIConfig$lambda$0$Type);
_.getStyle = function getStyle_6(){
  return this.$$outer_0.fieldsStyle.getStyle();
}
;
var Lorg_dominokit_domino_ui_utils_DominoUIConfig$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'DominoUIConfig/lambda$0$Type', 282);
function $clinit_ElementUtil(){
  $clinit_ElementUtil = emptyMethod;
  $getNumberConstants(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_2));
}

function clear_12(element){
  $clinit_ElementUtil();
  if (element != null) {
    while (element.firstChild != null) {
      element.removeChild(element.firstChild);
    }
  }
}

function $setPassive(this$static, passive){
  this$static.options.passive = passive;
  return this$static;
}

function EventOptions(){
  this.options = {};
}

defineClass(192, 1, {}, EventOptions);
var Lorg_dominokit_domino_ui_utils_EventOptions_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'EventOptions', 192);
function $apply_3(this$static){
  var entry, func, func$iterator, outerIter;
  this$static.function_0.apply_1();
  this$static.function_0 = new LazyInitializer$lambda$2$Type;
  this$static.doOnceFunction.apply_1();
  for (func$iterator = (outerIter = (new AbstractMap$1(this$static.functions.map_0)).this$01.entrySet().iterator() , new AbstractMap$1$1(outerIter)); func$iterator.val$outerIter2.hasNext_0();) {
    func = (entry = castTo(func$iterator.val$outerIter2.next_1(), 24) , castTo(entry.getKey(), 63));
    func.apply_1();
  }
}

function $lambda$0_21(this$static){
  var entry, func, func$iterator, outerIter;
  for (func$iterator = (outerIter = (new AbstractMap$1(this$static.doOnce.map_0)).this$01.entrySet().iterator() , new AbstractMap$1$1(outerIter)); func$iterator.val$outerIter2.hasNext_0();) {
    func = (entry = castTo(func$iterator.val$outerIter2.next_1(), 24) , castTo(entry.getKey(), 63));
    func.apply_1();
  }
  this$static.doOnceFunction = new LazyInitializer$lambda$1$Type;
}

function LazyInitializer(function_0){
  this.functions = new HashSet;
  this.doOnce = new HashSet;
  this.function_0 = function_0;
  this.doOnceFunction = new LazyInitializer$lambda$0$Type(this);
}

defineClass(536, 1, {}, LazyInitializer);
var Lorg_dominokit_domino_ui_utils_LazyInitializer_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'LazyInitializer', 536);
function LazyInitializer$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(538, 1, $intern_35, LazyInitializer$lambda$0$Type);
_.apply_1 = function apply_36(){
  $lambda$0_21(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_utils_LazyInitializer$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'LazyInitializer/lambda$0$Type', 538);
function LazyInitializer$lambda$1$Type(){
}

defineClass(537, 1, $intern_35, LazyInitializer$lambda$1$Type);
_.apply_1 = function apply_37(){
}
;
var Lorg_dominokit_domino_ui_utils_LazyInitializer$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'LazyInitializer/lambda$1$Type', 537);
function LazyInitializer$lambda$2$Type(){
}

defineClass(539, 1, $intern_35, LazyInitializer$lambda$2$Type);
_.apply_1 = function apply_38(){
}
;
var Lorg_dominokit_domino_ui_utils_LazyInitializer$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'LazyInitializer/lambda$2$Type', 539);
function $clinit_PopupsCloser(){
  $clinit_PopupsCloser = emptyMethod;
  ($clinit_DomGlobal() , document_0).addEventListener(($clinit_EventType() , click_0).name_0, new PopupsCloser$lambda$0$Type);
  document_0.addEventListener(touchmove.name_0, new PopupsCloser$lambda$1$Type);
  document_0.addEventListener(touchend.name_0, new PopupsCloser$lambda$2$Type);
}

function $close_3(){
  var element, elementsByName, i;
  elementsByName = ($clinit_DomGlobal() , document_0).body.querySelectorAll('[domino-ui-auto-closable]');
  for (i = 0; i < elementsByName.length; i++) {
    element = elementsByName.item(i);
    element.remove();
  }
}

var touchMoved = false;
function PopupsCloser$lambda$0$Type(){
}

defineClass(496, 1, {}, PopupsCloser$lambda$0$Type);
_.handleEvent = function handleEvent_61(arg0){
  $clinit_PopupsCloser();
  $close_3();
}
;
var Lorg_dominokit_domino_ui_utils_PopupsCloser$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'PopupsCloser/lambda$0$Type', 496);
function PopupsCloser$lambda$1$Type(){
}

defineClass(497, 1, {}, PopupsCloser$lambda$1$Type);
_.handleEvent = function handleEvent_62(arg0){
  $clinit_PopupsCloser();
  touchMoved = true;
}
;
var Lorg_dominokit_domino_ui_utils_PopupsCloser$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'PopupsCloser/lambda$1$Type', 497);
function PopupsCloser$lambda$2$Type(){
}

defineClass(498, 1, {}, PopupsCloser$lambda$2$Type);
_.handleEvent = function handleEvent_63(arg0){
  $clinit_PopupsCloser();
  touchMoved || $close_3();
  touchMoved = false;
}
;
var Lorg_dominokit_domino_ui_utils_PopupsCloser$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'PopupsCloser/lambda$2$Type', 498);
function addSwipeListener(direction, element, listener){
  var swipeData, touchSurfaceElement, touchsurface;
  touchsurface = element;
  swipeData = new SwipeUtil$SwipeData;
  touchSurfaceElement = new DominoElement(touchsurface);
  $addEventListener_0(touchSurfaceElement, 'touchstart', new SwipeUtil$lambda$0$Type(swipeData), $setPassive(new EventOptions, false));
  $addEventListener_0(touchSurfaceElement, 'touchmove', new SwipeUtil$0methodref$preventDefault$Type, $setPassive(new EventOptions, true));
  $addEventListener_0(touchSurfaceElement, 'touchend', new SwipeUtil$lambda$2$Type(swipeData, direction, listener), $setPassive(new EventOptions, true));
}

function lambda$0_9(swipeData_0, evt_1){
  var touchEvent, touchobj;
  touchEvent = evt_1;
  touchobj = touchEvent.changedTouches.item(0);
  swipeData_0.swipedir = 'none';
  swipeData_0.startX = touchobj.pageX;
  swipeData_0.startY = touchobj.pageY;
  swipeData_0.startTime = toDouble_0(fromDouble_0((new Date_0).jsdate.getTime()));
  evt_1.preventDefault();
}

function lambda$2_2(swipeData_0, direction_1, listener_2, evt_3){
  var touchEvent, touchobj;
  touchEvent = evt_3;
  touchobj = touchEvent.changedTouches.item(0);
  swipeData_0.distX = touchobj.pageX - swipeData_0.startX;
  swipeData_0.distY = touchobj.pageY - swipeData_0.startY;
  swipeData_0.elapsedTime = toDouble_0(fromDouble_0((new Date_0).jsdate.getTime())) - swipeData_0.startTime;
  swipeData_0.elapsedTime <= swipeData_0.allowedTime && ($wnd.Math.abs(swipeData_0.distX) >= swipeData_0.threshold && $wnd.Math.abs(swipeData_0.distY) <= swipeData_0.restraint?(swipeData_0.swipedir = swipeData_0.distX < 0?($clinit_SwipeUtil$SwipeDirection() , LEFT).direction:($clinit_SwipeUtil$SwipeDirection() , RIGHT_0).direction):$wnd.Math.abs(swipeData_0.distY) >= swipeData_0.threshold && $wnd.Math.abs(swipeData_0.distX) <= swipeData_0.restraint && (swipeData_0.swipedir = swipeData_0.distY < 0?($clinit_SwipeUtil$SwipeDirection() , UP).direction:($clinit_SwipeUtil$SwipeDirection() , DOWN).direction));
  $equals_1(swipeData_0.swipedir, direction_1.direction) && listener_2.handleEvent(evt_3);
  evt_3.preventDefault();
}

function SwipeUtil$0methodref$preventDefault$Type(){
}

defineClass(669, 1, {}, SwipeUtil$0methodref$preventDefault$Type);
_.handleEvent = function handleEvent_64(arg0){
  arg0.preventDefault();
}
;
var Lorg_dominokit_domino_ui_utils_SwipeUtil$0methodref$preventDefault$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'SwipeUtil/0methodref$preventDefault$Type', 669);
function SwipeUtil$SwipeData(){
}

defineClass(667, 1, {}, SwipeUtil$SwipeData);
_.allowedTime = 400;
_.distX = 0;
_.distY = 0;
_.elapsedTime = 0;
_.restraint = 100;
_.startTime = 0;
_.startX = 0;
_.startY = 0;
_.threshold = 100;
var Lorg_dominokit_domino_ui_utils_SwipeUtil$SwipeData_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'SwipeUtil/SwipeData', 667);
function $clinit_SwipeUtil$SwipeDirection(){
  $clinit_SwipeUtil$SwipeDirection = emptyMethod;
  LEFT = new SwipeUtil$SwipeDirection('LEFT', 0, 'left');
  RIGHT_0 = new SwipeUtil$SwipeDirection('RIGHT', 1, 'RIGHT');
  UP = new SwipeUtil$SwipeDirection('UP', 2, 'UP');
  DOWN = new SwipeUtil$SwipeDirection('DOWN', 3, 'DOWN');
}

function SwipeUtil$SwipeDirection(enum$name, enum$ordinal, direction){
  Enum.call(this, enum$name, enum$ordinal);
  this.direction = direction;
}

function values_16(){
  $clinit_SwipeUtil$SwipeDirection();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_utils_SwipeUtil$SwipeDirection_2_classLit, 1), $intern_0, 114, 0, [LEFT, RIGHT_0, UP, DOWN]);
}

defineClass(114, 21, {4:1, 34:1, 21:1, 114:1}, SwipeUtil$SwipeDirection);
var DOWN, LEFT, RIGHT_0, UP;
var Lorg_dominokit_domino_ui_utils_SwipeUtil$SwipeDirection_2_classLit = createForEnum('org.dominokit.domino.ui.utils', 'SwipeUtil/SwipeDirection', 114, values_16);
function SwipeUtil$lambda$0$Type(swipeData_0){
  this.swipeData_0 = swipeData_0;
}

defineClass(668, 1, {}, SwipeUtil$lambda$0$Type);
_.handleEvent = function handleEvent_65(arg0){
  lambda$0_9(this.swipeData_0, arg0);
}
;
var Lorg_dominokit_domino_ui_utils_SwipeUtil$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'SwipeUtil/lambda$0$Type', 668);
function SwipeUtil$lambda$2$Type(swipeData_0, direction_1, listener_2){
  this.swipeData_0 = swipeData_0;
  this.direction_1 = direction_1;
  this.listener_2 = listener_2;
}

defineClass(670, 1, {}, SwipeUtil$lambda$2$Type);
_.handleEvent = function handleEvent_66(arg0){
  lambda$2_2(this.swipeData_0, this.direction_1, this.listener_2, arg0);
}
;
var Lorg_dominokit_domino_ui_utils_SwipeUtil$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'SwipeUtil/lambda$2$Type', 670);
function of_4(content_0){
  if (content_0.length == 0) {
    return ($clinit_DomGlobal() , document_0).createTextNode('');
  }
  return ($clinit_DomGlobal() , document_0).createTextNode(content_0);
}

function $clinit_DefaultJsonDeserializationContext(){
  $clinit_DefaultJsonDeserializationContext = emptyMethod;
  logger_0 = getLogger('JsonDeserialization');
}

function $newJsonReader(input_0){
  var reader;
  reader = new NonBufferedJsonReader(input_0);
  reader.lenient = true;
  return reader;
}

function $traceError(message, reader){
  $log(logger_0, ($clinit_Level() , SEVERE), message);
  !!reader && $isLoggable(logger_0, INFO) && $log(logger_0, INFO, 'Error at line ' + (reader.lineNumber + 1) + ' and column ' + (reader.pos - reader.lineStart + 1) + ' of input <' + reader.in_0 + '>');
  return new JsonDeserializationException(message);
}

function DefaultJsonDeserializationContext(failOnUnknownProperties, wrapExceptions){
  $clinit_DefaultJsonDeserializationContext();
  this.failOnUnknownProperties = failOnUnknownProperties;
  this.unwrapRootValue = false;
  this.acceptSingleValueAsArray = false;
  this.wrapExceptions = wrapExceptions;
}

defineClass(597, 1, {}, DefaultJsonDeserializationContext);
_.acceptSingleValueAsArray = false;
_.failOnUnknownProperties = false;
_.unwrapRootValue = false;
_.wrapExceptions = false;
var logger_0;
var Lorg_dominokit_jackson_DefaultJsonDeserializationContext_2_classLit = createForClass('org.dominokit.jackson', 'DefaultJsonDeserializationContext', 597);
function $build(this$static){
  return new DefaultJsonDeserializationContext(this$static.failOnUnknownProperties, this$static.wrapExceptions);
}

defineClass(598, 1, {});
_.failOnUnknownProperties = true;
_.wrapExceptions = true;
var Lorg_dominokit_jackson_DefaultJsonDeserializationContext$Builder_2_classLit = createForClass('org.dominokit.jackson', 'DefaultJsonDeserializationContext/Builder', 598);
function DefaultJsonDeserializationContext$DefaultBuilder(){
}

defineClass(231, 598, {}, DefaultJsonDeserializationContext$DefaultBuilder);
var Lorg_dominokit_jackson_DefaultJsonDeserializationContext$DefaultBuilder_2_classLit = createForClass('org.dominokit.jackson', 'DefaultJsonDeserializationContext/DefaultBuilder', 231);
function $clinit_DefaultJsonSerializationContext(){
  $clinit_DefaultJsonSerializationContext = emptyMethod;
  logger_1 = getLogger('JsonSerialization');
}

function DefaultJsonSerializationContext(serializeNulls, wrapExceptions){
  $clinit_DefaultJsonSerializationContext();
  this.serializeNulls = serializeNulls;
  this.indent = false;
  this.wrapRootValue = false;
  this.wrapExceptions = wrapExceptions;
}

defineClass(719, 1, {}, DefaultJsonSerializationContext);
_.indent = false;
_.serializeNulls = false;
_.wrapExceptions = false;
_.wrapRootValue = false;
var logger_1;
var Lorg_dominokit_jackson_DefaultJsonSerializationContext_2_classLit = createForClass('org.dominokit.jackson', 'DefaultJsonSerializationContext', 719);
function $build_0(this$static){
  return new DefaultJsonSerializationContext(this$static.serializeNulls, this$static.wrapExceptions);
}

defineClass(720, 1, {});
_.serializeNulls = true;
_.wrapExceptions = true;
var Lorg_dominokit_jackson_DefaultJsonSerializationContext$Builder_2_classLit = createForClass('org.dominokit.jackson', 'DefaultJsonSerializationContext/Builder', 720);
function DefaultJsonSerializationContext$DefaultBuilder(){
}

defineClass(721, 720, {}, DefaultJsonSerializationContext$DefaultBuilder);
var Lorg_dominokit_jackson_DefaultJsonSerializationContext$DefaultBuilder_2_classLit = createForClass('org.dominokit.jackson', 'DefaultJsonSerializationContext/DefaultBuilder', 721);
function $clinit_GwtJacksonJsonDeserializerParameters(){
  $clinit_GwtJacksonJsonDeserializerParameters = emptyMethod;
  DEFAULT = new GwtJacksonJsonDeserializerParameters;
}

function GwtJacksonJsonDeserializerParameters(){
}

defineClass(718, 1, {}, GwtJacksonJsonDeserializerParameters);
var DEFAULT;
var Lorg_dominokit_jackson_GwtJacksonJsonDeserializerParameters_2_classLit = createForClass('org.dominokit.jackson', 'GwtJacksonJsonDeserializerParameters', 718);
function $clinit_GwtJacksonJsonSerializerParameters(){
  $clinit_GwtJacksonJsonSerializerParameters = emptyMethod;
  DEFAULT_0 = new GwtJacksonJsonSerializerParameters;
}

function GwtJacksonJsonSerializerParameters(){
}

defineClass(741, 1, {}, GwtJacksonJsonSerializerParameters);
var DEFAULT_0;
var Lorg_dominokit_jackson_GwtJacksonJsonSerializerParameters_2_classLit = createForClass('org.dominokit.jackson', 'GwtJacksonJsonSerializerParameters', 741);
var jacksonContext;
defineClass(835, 1, {});
var Lorg_dominokit_jackson_JsJacksonContext_2_classLit = createForClass('org.dominokit.jackson', 'JsJacksonContext', 835);
function ServerJacksonContext(){
}

defineClass(57, 835, {}, ServerJacksonContext);
var Lorg_dominokit_jackson_ServerJacksonContext_2_classLit = createForClass('org.dominokit.jackson', 'ServerJacksonContext', 57);
function $clinit_BooleanJsonDeserializer(){
  $clinit_BooleanJsonDeserializer = emptyMethod;
  INSTANCE_16 = new BooleanJsonDeserializer;
}

function BooleanJsonDeserializer(){
}

defineClass(732, 832, {}, BooleanJsonDeserializer);
_.doDeserialize = function doDeserialize_0(reader, ctx, params){
  var token;
  return token = $peek_2(reader) , ($clinit_JsonToken() , BOOLEAN) == token?($clinit_Boolean() , $nextBoolean(reader)?true:false):STRING == token?($clinit_Boolean() , $equalsIgnoreCase('true', $nextString(reader))?true:false):NUMBER == token?($clinit_Boolean() , $nextInt(reader) == 1?true:false):null;
}
;
var INSTANCE_16;
var Lorg_dominokit_jackson_deser_BooleanJsonDeserializer_2_classLit = createForClass('org.dominokit.jackson.deser', 'BooleanJsonDeserializer', 732);
function $clinit_StringJsonDeserializer(){
  $clinit_StringJsonDeserializer = emptyMethod;
  INSTANCE_17 = new StringJsonDeserializer;
}

function StringJsonDeserializer(){
}

defineClass(731, 832, {}, StringJsonDeserializer);
_.doDeserialize = function doDeserialize_1(reader, ctx, params){
  return $nextString(reader);
}
;
var INSTANCE_17;
var Lorg_dominokit_jackson_deser_StringJsonDeserializer_2_classLit = createForClass('org.dominokit.jackson.deser', 'StringJsonDeserializer', 731);
function Instance(instance, bufferedProperties){
  this.instance = instance;
  this.bufferedProperties = bufferedProperties;
}

defineClass(717, 1, {}, Instance);
var Lorg_dominokit_jackson_deser_bean_Instance_2_classLit = createForClass('org.dominokit.jackson.deser.bean', 'Instance', 717);
function $get_6(this$static, key){
  return this$static.map_0[key];
}

function $put_4(this$static, key, value_0){
  this$static.map_0[key] = value_0;
}

function JsMapLike(){
  this.map_0 = $wnd.Object.create(null);
}

defineClass(243, 1, {}, JsMapLike);
var Lorg_dominokit_jackson_deser_bean_JsMapLike_2_classLit = createForClass('org.dominokit.jackson.deser.bean', 'JsMapLike', 243);
function BaseIterableJsonDeserializer(deserializer){
  if (!deserializer) {
    throw toJs(new IllegalArgumentException("deserializer can't be null"));
  }
  this.deserializer = deserializer;
}

defineClass(785, 832, {});
var Lorg_dominokit_jackson_deser_collection_BaseIterableJsonDeserializer_2_classLit = createForClass('org.dominokit.jackson.deser.collection', 'BaseIterableJsonDeserializer', 785);
function $doDeserialize(this$static, reader, ctx, params){
  var element, result;
  if (($clinit_JsonToken() , BEGIN_ARRAY) == $peek_2(reader)) {
    result = new ArrayList;
    $beginArray(reader);
    while (END_ARRAY != $peek_2(reader)) {
      element = $deserialize(this$static.deserializer, reader, ctx, params);
      push_1(result.array, element);
    }
    $endArray(reader);
    return result;
  }
   else if (ctx.acceptSingleValueAsArray) {
    result = new ArrayList;
    $add_0(result, $deserialize(this$static.deserializer, reader, ctx, params));
    return result;
  }
   else {
    throw toJs($traceError('Cannot deserialize a java.util.Collection out of ' + $peek_2(reader) + ' token', reader));
  }
}

defineClass(786, 785, {});
_.doDeserialize = function doDeserialize_2(reader, ctx, params){
  return $doDeserialize(this, reader, ctx, params);
}
;
var Lorg_dominokit_jackson_deser_collection_BaseCollectionJsonDeserializer_2_classLit = createForClass('org.dominokit.jackson.deser.collection', 'BaseCollectionJsonDeserializer', 786);
defineClass(787, 786, {});
var Lorg_dominokit_jackson_deser_collection_BaseListJsonDeserializer_2_classLit = createForClass('org.dominokit.jackson.deser.collection', 'BaseListJsonDeserializer', 787);
function ListJsonDeserializer(deserializer){
  BaseIterableJsonDeserializer.call(this, deserializer);
}

defineClass(788, 787, {}, ListJsonDeserializer);
var Lorg_dominokit_jackson_deser_collection_ListJsonDeserializer_2_classLit = createForClass('org.dominokit.jackson.deser.collection', 'ListJsonDeserializer', 788);
function JsonMappingException(cause){
  $$init(this);
  this.detailMessage = !cause?null:$toString(cause, cause.getMessage());
  this.cause_0 = cause;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(188, 13, $intern_2);
var Lorg_dominokit_jackson_exception_JsonMappingException_2_classLit = createForClass('org.dominokit.jackson.exception', 'JsonMappingException', 188);
function JsonDeserializationException(message){
  RuntimeException_0.call(this, message);
}

function JsonDeserializationException_0(cause){
  JsonMappingException.call(this, cause);
}

defineClass(99, 188, $intern_36, JsonDeserializationException, JsonDeserializationException_0);
var Lorg_dominokit_jackson_exception_JsonDeserializationException_2_classLit = createForClass('org.dominokit.jackson.exception', 'JsonDeserializationException', 99);
function JsonSerializationException(cause){
  JsonMappingException.call(this, cause);
}

defineClass(193, 188, {4:1, 16:1, 13:1, 9:1, 193:1}, JsonSerializationException);
var Lorg_dominokit_jackson_exception_JsonSerializationException_2_classLit = createForClass('org.dominokit.jackson.exception', 'JsonSerializationException', 193);
function $clinit_BooleanJsonSerializer(){
  $clinit_BooleanJsonSerializer = emptyMethod;
  INSTANCE_18 = new BooleanJsonSerializer;
}

function $doSerialize(writer, value_0){
  $value_2(writer, (checkCriticalNotNull(value_0) , value_0));
}

function BooleanJsonSerializer(){
}

defineClass(751, 836, {}, BooleanJsonSerializer);
_.doSerialize = function doSerialize_0(writer, value_0, ctx, params){
  $doSerialize(writer, castToBoolean(value_0));
}
;
var INSTANCE_18;
var Lorg_dominokit_jackson_ser_BooleanJsonSerializer_2_classLit = createForClass('org.dominokit.jackson.ser', 'BooleanJsonSerializer', 751);
function $clinit_StringJsonSerializer(){
  $clinit_StringJsonSerializer = emptyMethod;
  INSTANCE_19 = new StringJsonSerializer;
}

function StringJsonSerializer(){
}

defineClass(750, 836, {}, StringJsonSerializer);
_.doSerialize = function doSerialize_1(writer, value_0, ctx, params){
  $value_1(writer, castToString(value_0));
}
;
var INSTANCE_19;
var Lorg_dominokit_jackson_ser_StringJsonSerializer_2_classLit = createForClass('org.dominokit.jackson.ser', 'StringJsonSerializer', 750);
function $clinit_JsonToken(){
  $clinit_JsonToken = emptyMethod;
  BEGIN_ARRAY = new JsonToken('BEGIN_ARRAY', 0);
  END_ARRAY = new JsonToken('END_ARRAY', 1);
  BEGIN_OBJECT = new JsonToken('BEGIN_OBJECT', 2);
  END_OBJECT = new JsonToken('END_OBJECT', 3);
  NAME = new JsonToken('NAME', 4);
  STRING = new JsonToken('STRING', 5);
  NUMBER = new JsonToken('NUMBER', 6);
  BOOLEAN = new JsonToken('BOOLEAN', 7);
  NULL = new JsonToken('NULL', 8);
  END_DOCUMENT = new JsonToken('END_DOCUMENT', 9);
}

function JsonToken(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_17(){
  $clinit_JsonToken();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_jackson_stream_JsonToken_2_classLit, 1), $intern_0, 62, 0, [BEGIN_ARRAY, END_ARRAY, BEGIN_OBJECT, END_OBJECT, NAME, STRING, NUMBER, BOOLEAN, NULL, END_DOCUMENT]);
}

defineClass(62, 21, {4:1, 34:1, 21:1, 62:1}, JsonToken);
var BEGIN_ARRAY, BEGIN_OBJECT, BOOLEAN, END_ARRAY, END_DOCUMENT, END_OBJECT, NAME, NULL, NUMBER, STRING;
var Lorg_dominokit_jackson_stream_JsonToken_2_classLit = createForEnum('org.dominokit.jackson.stream', 'JsonToken', 62, values_17);
function $clinit_FastJsonWriter(){
  $clinit_FastJsonWriter = emptyMethod;
  getLogger('JsonWriter');
}

function $beforeName(this$static){
  var context;
  context = $peek_0(this$static);
  if (context == 5) {
    $append_1(this$static.out, 44);
  }
   else if (context != 3) {
    throw toJs(new IllegalStateException_0('Nesting problem.'));
  }
  $newline(this$static);
  $replaceTop(this$static.stack_0, valueOf(4));
}

function $beforeValue(this$static, root){
  switch ($peek_0(this$static)) {
    case 7:
      if (!this$static.lenient) {
        throw toJs(new IllegalStateException_0('JSON must have only one top-level value.'));
      }

    case 6:
      if (!this$static.lenient && !root) {
        throw toJs(new IllegalStateException_0('JSON must start with an array or an object.'));
      }

      $replaceTop(this$static.stack_0, valueOf(7));
      break;
    case 1:
      $replaceTop(this$static.stack_0, valueOf(2));
      $newline(this$static);
      break;
    case 2:
      $append_1(this$static.out, 44);
      $newline(this$static);
      break;
    case 4:
      $append_4(this$static.out, this$static.separator);
      $replaceTop(this$static.stack_0, valueOf(5));
      break;
    default:throw toJs(new IllegalStateException_0('Nesting problem.'));
  }
}

function $checkName(this$static, name_0){
  if (name_0 == null) {
    throw toJs(new NullPointerException_1('name == null'));
  }
  if (this$static.deferredUnescapeName != null || this$static.deferredName != null) {
    throw toJs(new IllegalStateException);
  }
  if (this$static.stack_0.stack_0.length == 0) {
    throw toJs(new IllegalStateException_0('JsonWriter is closed.'));
  }
}

function $close_4(this$static){
  var context;
  context = $peek_0(this$static);
  if (context != 5 && context != 3) {
    throw toJs(new IllegalStateException_0('Nesting problem.'));
  }
  if (this$static.deferredUnescapeName != null || this$static.deferredName != null) {
    throw toJs(new IllegalStateException_0('Dangling name: ' + (this$static.deferredUnescapeName == null?this$static.deferredName:this$static.deferredUnescapeName)));
  }
  $pop(this$static.stack_0);
  context == 5 && $newline(this$static);
  $append_4(this$static.out, '}');
  return this$static;
}

function $name(this$static, name_0){
  $checkName(this$static, name_0);
  this$static.deferredName = name_0;
  return this$static;
}

function $newline(this$static){
  var i, size_0;
  if (this$static.indent == null) {
    return;
  }
  $append_4(this$static.out, '\n');
  for (i = 1 , size_0 = this$static.stack_0.stack_0.length; i < size_0; i++) {
    $append_4(this$static.out, this$static.indent);
  }
}

function $nullValue(this$static){
  if (this$static.deferredUnescapeName != null || this$static.deferredName != null) {
    if (this$static.serializeNulls) {
      $writeDeferredName(this$static);
    }
     else {
      this$static.deferredUnescapeName = null;
      this$static.deferredName = null;
      return this$static;
    }
  }
  $beforeValue(this$static, false);
  $append_4(this$static.out, 'null');
  return this$static;
}

function $open_1(this$static){
  $beforeValue(this$static, true);
  $push_0(this$static.stack_0, valueOf(3));
  $append_4(this$static.out, '{');
  return this$static;
}

function $peek_0(this$static){
  if (this$static.stack_0.stack_0.length == 0) {
    throw toJs(new IllegalStateException_0('JsonWriter is closed.'));
  }
  return $peek_1(this$static.stack_0).value_0;
}

function $setIndent(this$static){
  if ('  '.length == 0) {
    this$static.indent = null;
    this$static.separator = ':';
  }
   else {
    this$static.indent = '  ';
    this$static.separator = ': ';
  }
}

function $string(this$static, value_0){
  $append_4(this$static.out, (!jacksonContext && (jacksonContext = new ServerJacksonContext) , $wnd.JSON.stringify(value_0)));
}

function $unescapeName(this$static, name_0){
  $checkName(this$static, name_0);
  this$static.deferredUnescapeName = name_0;
  return this$static;
}

function $value_1(this$static, value_0){
  if (value_0 == null) {
    return $nullValue(this$static);
  }
  $writeDeferredName(this$static);
  $beforeValue(this$static, false);
  $append_4(this$static.out, (!jacksonContext && (jacksonContext = new ServerJacksonContext) , $wnd.JSON.stringify(value_0)));
  return this$static;
}

function $value_2(this$static, value_0){
  $writeDeferredName(this$static);
  $beforeValue(this$static, false);
  $append_4(this$static.out, value_0?'true':'false');
  return this$static;
}

function $writeDeferredName(this$static){
  if (this$static.deferredUnescapeName != null) {
    $beforeName(this$static);
    $append_1($append_4($append_1(this$static.out, 34), this$static.deferredUnescapeName), 34);
    this$static.deferredUnescapeName = null;
  }
   else if (this$static.deferredName != null) {
    $beforeName(this$static);
    $string(this$static, this$static.deferredName);
    this$static.deferredName = null;
  }
}

function FastJsonWriter(out){
  $clinit_FastJsonWriter();
  this.stack_0 = (!jacksonContext && (jacksonContext = new ServerJacksonContext) , new JsIntegerStack);
  $push_0(this.stack_0, valueOf(6));
  this.out = out;
}

defineClass(716, 1, {}, FastJsonWriter);
_.lenient = false;
_.separator = ':';
_.serializeNulls = true;
var Lorg_dominokit_jackson_stream_impl_FastJsonWriter_2_classLit = createForClass('org.dominokit.jackson.stream.impl', 'FastJsonWriter', 716);
function $get_7(this$static, index_0){
  var jsNumbers, slice_0;
  slice_0 = this$static.stack_0.slice();
  jsNumbers = castToJsArray(stampJavaTypeInfo_1(slice_0, newArray(slice_0.length)));
  return jsNumbers[index_0];
}

function $peek_1(this$static){
  return valueOf($intValue($get_7(this$static, this$static.stack_0.length - 1).valueOf()));
}

function $pop(this$static){
  var value_0;
  value_0 = valueOf($intValue($get_7(this$static, this$static.stack_0.length - 1).valueOf()));
  this$static.stack_0.pop();
  return value_0;
}

function $push_0(this$static, value_0){
  this$static.stack_0.push(new $wnd.Number(value_0));
}

function $replaceTop(this$static, newTop){
  this$static.stack_0.pop();
  this$static.stack_0.push(new $wnd.Number(newTop));
}

function JsIntegerStack(){
  this.stack_0 = new $wnd.Array;
}

defineClass(242, 1, {}, JsIntegerStack);
var Lorg_dominokit_jackson_stream_impl_JsIntegerStack_2_classLit = createForClass('org.dominokit.jackson.stream.impl', 'JsIntegerStack', 242);
function MalformedJsonException(msg){
  JsonDeserializationException.call(this, msg);
}

defineClass(693, 99, $intern_36, MalformedJsonException);
var Lorg_dominokit_jackson_stream_impl_MalformedJsonException_2_classLit = createForClass('org.dominokit.jackson.stream.impl', 'MalformedJsonException', 693);
function $clinit_NonBufferedJsonReader(){
  var n, charArr;
  $clinit_NonBufferedJsonReader = emptyMethod;
  logger_2 = getLogger('JsonReader');
  NON_EXECUTE_PREFIX = (n = ")]}'\n".length , charArr = initUnidimensionalArray(C_classLit, $intern_21, 36, n, 15, 1) , $getChars0(0, n, charArr, 0) , charArr);
  new BigInteger_2('-9223372036854775808');
  new BigInteger_2('9223372036854775807');
}

function $beginArray(this$static){
  var p;
  p = this$static.peeked;
  p == 0 && (p = $doPeek(this$static));
  if (p == 3) {
    $push_0(this$static.stack_0, valueOf(1));
    this$static.peeked = 0;
  }
   else {
    throw toJs(new IllegalStateException_0('Expected BEGIN_ARRAY but was ' + $peek_2(this$static) + ' at line ' + (this$static.lineNumber + 1) + ' column ' + (this$static.pos - this$static.lineStart + 1)));
  }
}

function $beginObject(this$static){
  var p;
  p = this$static.peeked;
  p == 0 && (p = $doPeek(this$static));
  if (p == 1) {
    $push_0(this$static.stack_0, valueOf(3));
    this$static.peeked = 0;
  }
   else {
    throw toJs(new IllegalStateException_0('Expected BEGIN_OBJECT but was ' + $peek_2(this$static) + ' at line ' + (this$static.lineNumber + 1) + ' column ' + (this$static.pos - this$static.lineStart + 1)));
  }
}

function $checkLenient(this$static){
  if (!this$static.lenient) {
    throw toJs($syntaxError(this$static, 'Use JsonReader.setLenient(true) to accept malformed JSON'));
  }
}

function $consumeNonExecutePrefix(this$static){
  var i;
  $nextNonWhitespace(this$static, true);
  --this$static.pos;
  if (this$static.pos + NON_EXECUTE_PREFIX.length > this$static.limit) {
    return;
  }
  for (i = 0; i < NON_EXECUTE_PREFIX.length; i++) {
    if ($charAt(this$static.in_0, this$static.pos + i) != NON_EXECUTE_PREFIX[i]) {
      return;
    }
  }
  this$static.pos += NON_EXECUTE_PREFIX.length;
}

function $doPeek(this$static){
  var c, c0, c1, peekStack, result;
  peekStack = $peek_1(this$static.stack_0).value_0;
  if (peekStack == 1) {
    $replaceTop(this$static.stack_0, valueOf(2));
  }
   else if (peekStack == 2) {
    c0 = $nextNonWhitespace(this$static, true);
    switch (c0) {
      case 93:
        return this$static.peeked = 4;
      case 59:
        $checkLenient(this$static);
      case 44:
        break;
      default:throw toJs($syntaxError(this$static, 'Unterminated array'));
    }
  }
   else if (peekStack == 3 || peekStack == 5) {
    $replaceTop(this$static.stack_0, valueOf(4));
    if (peekStack == 5) {
      c0 = $nextNonWhitespace(this$static, true);
      switch (c0) {
        case 125:
          return this$static.peeked = 2;
        case 59:
          $checkLenient(this$static);
        case 44:
          break;
        default:throw toJs($syntaxError(this$static, 'Unterminated object'));
      }
    }
    c1 = $nextNonWhitespace(this$static, true);
    switch (c1) {
      case 34:
        return this$static.peeked = 13;
      case 39:
        $checkLenient(this$static);
        return this$static.peeked = 12;
      case 125:
        if (peekStack != 5) {
          return this$static.peeked = 2;
        }
         else {
          throw toJs($syntaxError(this$static, 'Expected name'));
        }

      default:$checkLenient(this$static);
        --this$static.pos;
        if ($isLiteral(this$static, c1 & $intern_4)) {
          return this$static.peeked = 14;
        }
         else {
          throw toJs($syntaxError(this$static, 'Expected name'));
        }

    }
  }
   else if (peekStack == 4) {
    $replaceTop(this$static.stack_0, valueOf(5));
    c0 = $nextNonWhitespace(this$static, true);
    switch (c0) {
      case 58:
        break;
      case 61:
        $checkLenient(this$static);
        this$static.pos < this$static.limit && $charAt(this$static.in_0, this$static.pos) == 62 && ++this$static.pos;
        break;
      default:throw toJs($syntaxError(this$static, "Expected ':'"));
    }
  }
   else if (peekStack == 6) {
    this$static.lenient && $consumeNonExecutePrefix(this$static);
    $replaceTop(this$static.stack_0, valueOf(7));
  }
   else if (peekStack == 7) {
    c0 = $nextNonWhitespace(this$static, false);
    if (c0 == -1) {
      return this$static.peeked = 17;
    }
     else {
      $checkLenient(this$static);
      --this$static.pos;
    }
  }
   else if (peekStack == 8) {
    throw toJs(new IllegalStateException_0('JsonReader is closed'));
  }
  c = $nextNonWhitespace(this$static, true);
  switch (c) {
    case 93:
      if (peekStack == 1) {
        return this$static.peeked = 4;
      }

    case 59:
    case 44:
      if (peekStack == 1 || peekStack == 2) {
        $checkLenient(this$static);
        --this$static.pos;
        return this$static.peeked = 7;
      }
       else {
        throw toJs($syntaxError(this$static, 'Unexpected value'));
      }

    case 39:
      $checkLenient(this$static);
      return this$static.peeked = 8;
    case 34:
      this$static.stack_0.stack_0.length == 1 && $checkLenient(this$static);
      return this$static.peeked = 9;
    case 91:
      return this$static.peeked = 3;
    case 123:
      return this$static.peeked = 1;
    default:--this$static.pos;
  }
  this$static.stack_0.stack_0.length == 1 && $checkLenient(this$static);
  result = $peekKeyword(this$static);
  if (result != 0) {
    return result;
  }
  result = $peekNumber(this$static);
  if (result != 0) {
    return result;
  }
  if (!$isLiteral(this$static, $charAt(this$static.in_0, this$static.pos))) {
    throw toJs($syntaxError(this$static, 'Expected value'));
  }
  $checkLenient(this$static);
  return this$static.peeked = 10;
}

function $endArray(this$static){
  var p;
  p = this$static.peeked;
  p == 0 && (p = $doPeek(this$static));
  if (p == 4) {
    $pop(this$static.stack_0);
    this$static.peeked = 0;
  }
   else {
    throw toJs(new IllegalStateException_0('Expected END_ARRAY but was ' + $peek_2(this$static) + ' at line ' + (this$static.lineNumber + 1) + ' column ' + (this$static.pos - this$static.lineStart + 1)));
  }
}

function $endObject(this$static){
  var p;
  p = this$static.peeked;
  p == 0 && (p = $doPeek(this$static));
  if (p == 2) {
    $pop(this$static.stack_0);
    this$static.peeked = 0;
  }
   else {
    throw toJs(new IllegalStateException_0('Expected END_OBJECT but was ' + $peek_2(this$static) + ' at line ' + (this$static.lineNumber + 1) + ' column ' + (this$static.pos - this$static.lineStart + 1)));
  }
}

function $isLiteral(this$static, c){
  switch (c) {
    case 47:
    case 92:
    case 59:
    case 35:
    case 61:
      $checkLenient(this$static);
    case 123:
    case 125:
    case 91:
    case 93:
    case 58:
    case 44:
    case 32:
    case 9:
    case 12:
    case 13:
    case 10:
      return false;
    default:return true;
  }
}

function $nextBoolean(this$static){
  var p;
  p = this$static.peeked;
  p == 0 && (p = $doPeek(this$static));
  if (p == 5) {
    this$static.peeked = 0;
    return true;
  }
   else if (p == 6) {
    this$static.peeked = 0;
    return false;
  }
  throw toJs(new IllegalStateException_0('Expected a boolean but was ' + $peek_2(this$static) + ' at line ' + (this$static.lineNumber + 1) + ' column ' + (this$static.pos - this$static.lineStart + 1)));
}

function $nextInt(this$static){
  var asDouble, p, result;
  p = this$static.peeked;
  p == 0 && (p = $doPeek(this$static));
  if (p == 15) {
    result = toInt_0(this$static.peekedLong);
    if (neq(this$static.peekedLong, result)) {
      throw toJs(new NumberFormatException('Expected an int but was ' + toString_6(this$static.peekedLong) + ' at line ' + (this$static.lineNumber + 1) + ' column ' + (this$static.pos - this$static.lineStart + 1)));
    }
    this$static.peeked = 0;
    return result;
  }
  if (p == 16) {
    this$static.peekedString = $substring_0(this$static.in_0, this$static.pos, this$static.pos + this$static.peekedNumberLength);
    this$static.pos += this$static.peekedNumberLength;
  }
   else if (p == 8 || p == 9) {
    this$static.peekedString = $nextQuotedValue(this$static, p == 8?39:34);
    try {
      result = __parseAndValidateInt(this$static.peekedString);
      this$static.peeked = 0;
      return result;
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (!instanceOf($e0, 64))
        throw toJs($e0);
    }
  }
   else {
    throw toJs(new IllegalStateException_0('Expected an int but was ' + $peek_2(this$static) + ' at line ' + (this$static.lineNumber + 1) + ' column ' + (this$static.pos - this$static.lineStart + 1)));
  }
  this$static.peeked = 11;
  asDouble = __parseAndValidateDouble(this$static.peekedString);
  result = round_int(asDouble);
  if (result != asDouble) {
    throw toJs(new NumberFormatException('Expected an int but was ' + this$static.peekedString + ' at line ' + (this$static.lineNumber + 1) + ' column ' + (this$static.pos - this$static.lineStart + 1)));
  }
  this$static.peekedString = null;
  this$static.peeked = 0;
  return result;
}

function $nextName(this$static){
  var p, result;
  p = this$static.peeked;
  p == 0 && (p = $doPeek(this$static));
  if (p == 14) {
    result = $nextUnquotedValue(this$static);
  }
   else if (p == 12) {
    result = $nextQuotedValue(this$static, 39);
  }
   else if (p == 13) {
    result = $nextQuotedValue(this$static, 34);
  }
   else {
    throw toJs(new IllegalStateException_0('Expected a name but was ' + $peek_2(this$static) + ' at line ' + (this$static.lineNumber + 1) + ' column ' + (this$static.pos - this$static.lineStart + 1)));
  }
  this$static.peeked = 0;
  return result;
}

function $nextNonWhitespace(this$static, throwOnEof){
  var c, mess, p, peek;
  p = this$static.pos;
  while (true) {
    if (p == this$static.limit) {
      this$static.pos = p;
      break;
    }
    c = $charAt(this$static.in_0, p++);
    if (c == 10) {
      ++this$static.lineNumber;
      this$static.lineStart = p;
      continue;
    }
     else if (c == 32 || c == 13 || c == 9) {
      continue;
    }
    if (c == 47) {
      this$static.pos = p;
      if (p == this$static.limit) {
        return c;
      }
      $checkLenient(this$static);
      peek = $charAt(this$static.in_0, this$static.pos);
      switch (peek) {
        case 42:
          ++this$static.pos;
          if (!$skipTo(this$static)) {
            throw toJs($syntaxError(this$static, 'Unterminated comment'));
          }

          p = this$static.pos + 2;
          continue;
        case 47:
          ++this$static.pos;
          $skipToEndOfLine(this$static);
          p = this$static.pos;
          continue;
        default:return c;
      }
    }
     else if (c == 35) {
      this$static.pos = p;
      $checkLenient(this$static);
      $skipToEndOfLine(this$static);
      p = this$static.pos;
    }
     else {
      this$static.pos = p;
      return c;
    }
  }
  if (throwOnEof) {
    mess = 'End of input at line ' + (this$static.lineNumber + 1) + ' column ' + (this$static.pos - this$static.lineStart + 1);
    $log(logger_2, ($clinit_Level() , SEVERE), mess);
    throw toJs(new JsonDeserializationException(mess));
  }
   else {
    return -1;
  }
}

function $nextQuotedValue(this$static, quote_0){
  var builder, c, p, start_0;
  builder = new StringBuilder;
  p = this$static.pos;
  start_0 = p;
  while (p < this$static.limit) {
    c = $charAt(this$static.in_0, p++);
    if (c == quote_0) {
      this$static.pos = p;
      $append_4(builder, $substring_0(this$static.in_0, start_0, p - 1));
      return builder.string;
    }
     else if (c == 92) {
      this$static.pos = p;
      $append_4(builder, $substring_0(this$static.in_0, start_0, p - 1));
      $append_1(builder, $readEscapeCharacter(this$static));
      p = this$static.pos;
      start_0 = p;
    }
     else if (c == 10) {
      ++this$static.lineNumber;
      this$static.lineStart = p;
    }
  }
  throw toJs($syntaxError(this$static, 'Unterminated string'));
}

function $nextString(this$static){
  var p, result;
  p = this$static.peeked;
  p == 0 && (p = $doPeek(this$static));
  if (p == 10) {
    result = $nextUnquotedValue(this$static);
  }
   else if (p == 8) {
    result = $nextQuotedValue(this$static, 39);
  }
   else if (p == 9) {
    result = $nextQuotedValue(this$static, 34);
  }
   else if (p == 11) {
    result = this$static.peekedString;
    this$static.peekedString = null;
  }
   else if (p == 15) {
    result = '' + toString_6(this$static.peekedLong);
  }
   else if (p == 16) {
    result = $substring_0(this$static.in_0, this$static.pos, this$static.pos + this$static.peekedNumberLength);
    this$static.pos += this$static.peekedNumberLength;
  }
   else {
    throw toJs(new IllegalStateException_0('Expected a string but was ' + $peek_2(this$static) + ' at line ' + (this$static.lineNumber + 1) + ' column ' + (this$static.pos - this$static.lineStart + 1)));
  }
  this$static.peeked = 0;
  return result;
}

function $nextUnquotedValue(this$static){
  var i, result;
  i = 0;
  findNonLiteralCharacter: for (; this$static.pos + i < this$static.limit; i++) {
    switch ($charAt(this$static.in_0, this$static.pos + i)) {
      case 47:
      case 92:
      case 59:
      case 35:
      case 61:
        $checkLenient(this$static);
      case 123:
      case 125:
      case 91:
      case 93:
      case 58:
      case 44:
      case 32:
      case 9:
      case 12:
      case 13:
      case 10:
        break findNonLiteralCharacter;
    }
  }
  result = $substring_0(this$static.in_0, this$static.pos, this$static.pos + i);
  this$static.pos += i;
  return result;
}

function $peek_2(this$static){
  var p;
  p = this$static.peeked;
  p == 0 && (p = $doPeek(this$static));
  switch (p) {
    case 1:
      return $clinit_JsonToken() , BEGIN_OBJECT;
    case 2:
      return $clinit_JsonToken() , END_OBJECT;
    case 3:
      return $clinit_JsonToken() , BEGIN_ARRAY;
    case 4:
      return $clinit_JsonToken() , END_ARRAY;
    case 12:
    case 13:
    case 14:
      return $clinit_JsonToken() , NAME;
    case 5:
    case 6:
      return $clinit_JsonToken() , BOOLEAN;
    case 7:
      return $clinit_JsonToken() , NULL;
    case 8:
    case 9:
    case 10:
    case 11:
      return $clinit_JsonToken() , STRING;
    case 15:
    case 16:
      return $clinit_JsonToken() , NUMBER;
    case 17:
      return $clinit_JsonToken() , END_DOCUMENT;
    default:throw toJs(new AssertionError);
  }
}

function $peekKeyword(this$static){
  var c, i, keyword, keywordUpper, length_0, peeking;
  c = $charAt(this$static.in_0, this$static.pos);
  if (c == 116 || c == 84) {
    keyword = 'true';
    keywordUpper = 'TRUE';
    peeking = 5;
  }
   else if (c == 102 || c == 70) {
    keyword = 'false';
    keywordUpper = 'FALSE';
    peeking = 6;
  }
   else if (c == 110 || c == 78) {
    keyword = 'null';
    keywordUpper = 'NULL';
    peeking = 7;
  }
   else {
    return 0;
  }
  length_0 = keyword.length;
  for (i = 1; i < length_0; i++) {
    if (this$static.pos + i >= this$static.limit) {
      return 0;
    }
    c = $charAt(this$static.in_0, this$static.pos + i);
    if (c != (checkCriticalStringElementIndex(i, keyword.length) , keyword.charCodeAt(i)) && c != (checkCriticalStringElementIndex(i, keywordUpper.length) , keywordUpper.charCodeAt(i))) {
      return 0;
    }
  }
  if (this$static.pos + length_0 < this$static.limit && $isLiteral(this$static, $charAt(this$static.in_0, this$static.pos + length_0))) {
    return 0;
  }
  this$static.pos += length_0;
  return this$static.peeked = peeking;
}

function $peekNumber(this$static){
  var c, fitsInLong, i, last, negative, newValue, value_0;
  value_0 = 0;
  negative = false;
  fitsInLong = true;
  last = 0;
  i = 0;
  charactersOfNumber: for (; true; i++) {
    if (this$static.pos + i == this$static.limit) {
      break;
    }
    c = $charAt(this$static.in_0, this$static.pos + i);
    switch (c) {
      case 45:
        if (last == 0) {
          negative = true;
          last = 1;
          continue;
        }
         else if (last == 5) {
          last = 6;
          continue;
        }

        return 0;
      case 43:
        if (last == 5) {
          last = 6;
          continue;
        }

        return 0;
      case 101:
      case 69:
        if (last == 2 || last == 4) {
          last = 5;
          continue;
        }

        return 0;
      case 46:
        if (last == 2) {
          last = 3;
          continue;
        }

        return 0;
      default:if (c < 48 || c > 57) {
          if (!$isLiteral(this$static, c)) {
            break charactersOfNumber;
          }
          return 0;
        }

        if (last == 1 || last == 0) {
          value_0 = -(c - 48);
          last = 2;
        }
         else if (last == 2) {
          if (compare_0(value_0, 0) == 0) {
            return 0;
          }
          newValue = sub_1(mul_0(value_0, 10), c - 48);
          fitsInLong = fitsInLong & (gt(value_0, $intern_37) || eq(value_0, $intern_37) && compare_0(newValue, value_0) < 0);
          value_0 = newValue;
        }
         else 
          last == 3?(last = 4):(last == 5 || last == 6) && (last = 7);
    }
  }
  if (last == 2 && fitsInLong && (neq(value_0, {l:0, m:0, h:$intern_9}) || negative)) {
    this$static.peekedLong = negative?value_0:neg_0(value_0);
    this$static.pos += i;
    return this$static.peeked = 15;
  }
   else if (last == 2 || last == 4 || last == 7) {
    this$static.peekedNumberLength = i;
    return this$static.peeked = 16;
  }
   else {
    return 0;
  }
}

function $readEscapeCharacter(this$static){
  var c, end, escaped, i, result;
  if (this$static.pos == this$static.limit) {
    throw toJs($syntaxError(this$static, 'Unterminated escape sequence'));
  }
  escaped = $charAt(this$static.in_0, this$static.pos++);
  switch (escaped) {
    case 117:
      if (this$static.pos + 4 > this$static.limit) {
        throw toJs($syntaxError(this$static, 'Unterminated escape sequence'));
      }

      result = 0;
      for (i = this$static.pos , end = i + 4; i < end; i++) {
        c = $charAt(this$static.in_0, i);
        result = result << 4 & $intern_4;
        if (c >= 48 && c <= 57) {
          result = result + (c - 48) & $intern_4;
        }
         else if (c >= 97 && c <= 102) {
          result = result + (c - 97 + 10) & $intern_4;
        }
         else if (c >= 65 && c <= 70) {
          result = result + (c - 65 + 10) & $intern_4;
        }
         else {
          throw toJs(new NumberFormatException('\\u' + $substring_0(this$static.in_0, this$static.pos, this$static.pos + 4)));
        }
      }

      this$static.pos += 4;
      return result;
    case 116:
      return 9;
    case 98:
      return 8;
    case 110:
      return 10;
    case 114:
      return 13;
    case 102:
      return 12;
    case 10:
      ++this$static.lineNumber;
      this$static.lineStart = this$static.pos;
    case 39:
    case 34:
    case 92:
    default:return escaped;
  }
}

function $skipQuotedValue(this$static, quote_0){
  var c, l, p;
  p = this$static.pos;
  l = this$static.limit;
  while (p < l) {
    c = $charAt(this$static.in_0, p++);
    if (c == quote_0) {
      this$static.pos = p;
      return;
    }
     else if (c == 92) {
      this$static.pos = p;
      $readEscapeCharacter(this$static);
      p = this$static.pos;
    }
     else if (c == 10) {
      ++this$static.lineNumber;
      this$static.lineStart = p;
    }
  }
  throw toJs($syntaxError(this$static, 'Unterminated string'));
}

function $skipTo(this$static){
  var c;
  outer: for (; this$static.pos + '*/'.length <= this$static.limit; this$static.pos++) {
    if ($charAt(this$static.in_0, this$static.pos) == 10) {
      ++this$static.lineNumber;
      this$static.lineStart = this$static.pos + 1;
      continue;
    }
    for (c = 0; c < '*/'.length; c++) {
      if ($charAt(this$static.in_0, this$static.pos + c) != (checkCriticalStringElementIndex(c, '*/'.length) , '*/'.charCodeAt(c))) {
        continue outer;
      }
    }
    return true;
  }
  return false;
}

function $skipToEndOfLine(this$static){
  var c;
  while (this$static.pos < this$static.limit) {
    c = $charAt(this$static.in_0, this$static.pos++);
    if (c == 10) {
      ++this$static.lineNumber;
      this$static.lineStart = this$static.pos;
      break;
    }
     else if (c == 13) {
      break;
    }
  }
}

function $skipUnquotedValue(this$static){
  var i;
  i = 0;
  for (; this$static.pos + i < this$static.limit; i++) {
    switch ($charAt(this$static.in_0, this$static.pos + i)) {
      case 47:
      case 92:
      case 59:
      case 35:
      case 61:
        $checkLenient(this$static);
      case 123:
      case 125:
      case 91:
      case 93:
      case 58:
      case 44:
      case 32:
      case 9:
      case 12:
      case 13:
      case 10:
        this$static.pos += i;
        return;
    }
  }
  this$static.pos += i;
}

function $skipValue(this$static){
  var count, p;
  count = 0;
  do {
    p = this$static.peeked;
    p == 0 && (p = $doPeek(this$static));
    if (p == 3) {
      $push_0(this$static.stack_0, valueOf(1));
      ++count;
    }
     else if (p == 1) {
      $push_0(this$static.stack_0, valueOf(3));
      ++count;
    }
     else if (p == 4) {
      $pop(this$static.stack_0);
      --count;
    }
     else if (p == 2) {
      $pop(this$static.stack_0);
      --count;
    }
     else 
      p == 14 || p == 10?$skipUnquotedValue(this$static):p == 8 || p == 12?$skipQuotedValue(this$static, 39):p == 9 || p == 13?$skipQuotedValue(this$static, 34):p == 16 && (this$static.pos += this$static.peekedNumberLength);
    this$static.peeked = 0;
  }
   while (count != 0);
}

function $syntaxError(this$static, message){
  var mess;
  mess = message + ' at line ' + (this$static.lineNumber + 1) + ' column ' + (this$static.pos - this$static.lineStart + 1);
  $log(logger_2, ($clinit_Level() , SEVERE), mess);
  throw toJs(new MalformedJsonException(mess));
}

function NonBufferedJsonReader(in_0){
  $clinit_NonBufferedJsonReader();
  this.stack_0 = (!jacksonContext && (jacksonContext = new ServerJacksonContext) , new JsIntegerStack);
  $push_0(this.stack_0, valueOf(6));
  if (in_0 == null) {
    throw toJs(new NullPointerException_1('in == null'));
  }
  this.in_0 = in_0;
  this.limit = in_0.length;
  if (this.limit > 0 && (checkCriticalStringElementIndex(0, in_0.length) , in_0.charCodeAt(0) == 65279)) {
    ++this.pos;
    ++this.lineStart;
  }
}

defineClass(657, 1, {}, NonBufferedJsonReader);
_.toString_0 = function toString_22(){
  return 'JsonReader at line ' + (this.lineNumber + 1) + ' column ' + (this.pos - this.lineStart + 1);
}
;
_.lenient = false;
_.limit = 0;
_.lineNumber = 0;
_.lineStart = 0;
_.peeked = 0;
_.peekedLong = 0;
_.peekedNumberLength = 0;
_.pos = 0;
var NON_EXECUTE_PREFIX, logger_2;
var Lorg_dominokit_jackson_stream_impl_NonBufferedJsonReader_2_classLit = createForClass('org.dominokit.jackson.stream.impl', 'NonBufferedJsonReader', 657);
function $clinit_DominoRestConfig(){
  $clinit_DominoRestConfig = emptyMethod;
  new ConsoleLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_rest_DominoRestConfig_2_classLit) , Lorg_dominokit_rest_DominoRestConfig_2_classLit.typeName));
  serverRouter = new ServerRouter(new DefaultRequestAsyncSender(new RequestSender));
  dynamicServiceRoots = new ArrayList;
  requestInterceptors = new ArrayList;
  responseInterceptors = new ArrayList;
  defaultFailHandler = new DominoRestConfig$lambda$0$Type;
}

function $getDefaultServiceRoot(){
  var location_0, protocol, host;
  if (defaultServiceRoot_0 == null) {
    return (location_0 = ($clinit_DomGlobal() , $wnd.goog.global.window).location , protocol = location_0.protocol , host = location_0.host , protocol + '//' + host + '/') + defaultResourceRootPath + '/';
  }
  return defaultServiceRoot_0;
}

function $setDefaultFailHandler(this$static, fail){
  defaultFailHandler = fail;
  return this$static;
}

function $setDefaultResourceRootPath(this$static){
  defaultResourceRootPath = '';
  return this$static;
}

function $setDefaultServiceRoot(this$static, defaultServiceRoot){
  defaultServiceRoot_0 = defaultServiceRoot;
  return this$static;
}

function DominoRestConfig(){
  $clinit_DominoRestConfig();
}

function lambda$2_3(asyncTask_0){
  $clinit_DominoRestConfig();
  var error;
  try {
    $sendRequest(asyncTask_0.this$01, asyncTask_0.request);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 9)) {
      error = $e0;
      $log_0(($clinit_AbstractRequestAsyncSender() , LOGGER_0), ($clinit_Level() , SEVERE), 'Could not RunAsync request [' + asyncTask_0.request + ']', error);
    }
     else 
      throw toJs($e0);
  }
}

function lambda$3_3(url_0){
  $clinit_DominoRestConfig();
  var matchFound, matcher, regExp, result;
  if (url_0.indexOf('http:') != -1 || url_0.indexOf('https:') != -1) {
    regExp = new NativeRegExp;
    matcher = (result = regExp.jsRegExp.exec(url_0) , result == null?null:new NativeMatchResult(castToJsArray(result)));
    matchFound = !!matcher;
    if (matchFound) {
      return $getGroup(matcher, matcher.array.length - 1);
    }
  }
  return url_0;
}

defineClass(260, 1, {}, DominoRestConfig);
var defaultFailHandler, defaultResourceRootPath = 'service', defaultServiceRoot_0, dynamicServiceRoots, requestInterceptors, responseInterceptors, serverRouter;
var Lorg_dominokit_rest_DominoRestConfig_2_classLit = createForClass('org.dominokit.rest', 'DominoRestConfig', 260);
function DominoRestConfig$lambda$0$Type(){
}

defineClass(280, 1, {}, DominoRestConfig$lambda$0$Type);
_.onFail = function onFail_4(arg0){
  $clinit_DominoRestConfig();
  arg0.throwable?$debug_0(arg0.throwable):$debug('could not execute request on server: status [' + arg0.statusCode + '], body [' + arg0.body_0 + ']');
}
;
var Lorg_dominokit_rest_DominoRestConfig$lambda$0$Type_2_classLit = createForClass('org.dominokit.rest', 'DominoRestConfig/lambda$0$Type', 280);
function $clinit_DominoSimpleEventsBus(){
  $clinit_DominoSimpleEventsBus = emptyMethod;
  new ConsoleLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_rest_js_DominoSimpleEventsBus_2_classLit) , Lorg_dominokit_rest_js_DominoSimpleEventsBus_2_classLit.typeName));
  INSTANCE_20 = new DominoSimpleEventsBus(new EventProcessor);
}

function $addEvent(this$static, type_0){
  $doAdd(this$static.simpleGwtEventsBus, type_0, this$static.eventProcessor);
}

function $publishEvent(this$static, event_0){
  $doFire(this$static.simpleGwtEventsBus, event_0.asEvent());
}

function DominoSimpleEventsBus(eventProcessor){
  this.simpleGwtEventsBus = new SimpleEventBus;
  this.eventProcessor = eventProcessor;
  $addEvent(this, ($clinit_ServerSuccessRequestGwtEvent() , SERVER_SUCCESS_REQUEST_EVENT_TYPE));
  $addEvent(this, ($clinit_ServerFailedRequestGwtEvent() , SERVER_FAILED_REQUEST_EVENT_TYPE));
}

defineClass(777, 1, {}, DominoSimpleEventsBus);
var INSTANCE_20;
var Lorg_dominokit_rest_js_DominoSimpleEventsBus_2_classLit = createForClass('org.dominokit.rest.js', 'DominoSimpleEventsBus', 777);
function JsResponse(request){
  this.request = request;
}

defineClass(780, 1, {}, JsResponse);
var Lorg_dominokit_rest_js_JsResponse_2_classLit = createForClass('org.dominokit.rest.js', 'JsResponse', 780);
function JsResponse$lambda$0$Type(){
}

defineClass(781, 1, {}, JsResponse$lambda$0$Type);
_.test_0 = function test_22(arg0){
  return castToString(arg0).length != 0;
}
;
var Lorg_dominokit_rest_js_JsResponse$lambda$0$Type_2_classLit = createForClass('org.dominokit.rest.js', 'JsResponse/lambda$0$Type', 781);
function JsResponse$lambda$1$Type(){
}

defineClass(782, 1, {}, JsResponse$lambda$1$Type);
_.apply_0 = function apply_39(arg0){
  return $split_0(castToString(arg0), ':', 2);
}
;
var Lorg_dominokit_rest_js_JsResponse$lambda$1$Type_2_classLit = createForClass('org.dominokit.rest.js', 'JsResponse/lambda$1$Type', 782);
function $addQueryPair(this$static, paramNameValuePair){
  $addQueryParam(this$static, paramNameValuePair[0], paramNameValuePair[1]);
}

function $onError(this$static, errorHandler){
  return this$static.errorHandler = errorHandler , this$static;
}

function $onSuccess_0(this$static, successHandler){
  return this$static.successHandler = successHandler , this$static;
}

function BaseRestfulRequest(uri_0, method){
  if (uri_0 == null || $trim(uri_0).length == 0)
    throw toJs(new IllegalArgumentException('Invalid URI [' + uri_0 + ']'));
  if (method == null || $trim(method).length == 0)
    throw toJs(new IllegalArgumentException('Invalid http method [' + method + ']'));
  this.uri_0 = uri_0;
  this.method_0 = method;
}

defineClass(767, 1, {});
_.timeout_0 = 0;
var Lorg_dominokit_rest_shared_BaseRestfulRequest_2_classLit = createForClass('org.dominokit.rest.shared', 'BaseRestfulRequest', 767);
function $addQueryParam(this$static, key, value_0){
  $containsKey_0(this$static.params, key) || $put_3(this$static.params, key, new ArrayList);
  castTo($get_4(this$static.params, key), 18).add(value_0);
  return this$static;
}

function $entryAsString(paramValuePair){
  return castToString($collect($map(castTo(paramValuePair.getValue_0(), 18).stream(), new JsRestfulRequest$lambda$1$Type(paramValuePair)), of_0(new Collectors$lambda$15$Type, new Collectors$9methodref$add$Type, new Collectors$10methodref$merge$Type, new Collectors$11methodref$toString$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_0, 29, 0, []))));
}

function $fireOnTimeout(this$static){
  $cancel(this$static.timer);
  this$static.request.onreadystatechange = makeLambdaFunction(JsRestfulRequest$lambda$9$Type.prototype.onInvoke, JsRestfulRequest$lambda$9$Type, []);
  this$static.request.abort();
  $onError_0(this$static.errorHandler, new RequestTimeoutException);
}

function $initRequest(this$static){
  var queryParams, url_0, path, suffixlength;
  url_0 = (queryParams = castToString($collect($map(new StreamImpl(null, new Spliterators$IteratorSpliterator(new LinkedHashMap$EntrySet(this$static.params), 1)), new JsRestfulRequest$0methodref$entryAsString$Type), of_0(new Collectors$lambda$15$Type, new Collectors$9methodref$add$Type, new Collectors$10methodref$merge$Type, new Collectors$11methodref$toString$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_0, 29, 0, [])))) , (path = this$static.uri_0 , path.indexOf('?') != -1 && (path = $substring_0(path, 0, path.indexOf('?'))) , suffixlength = '/'.length , $equals_1(path.substr(path.length - suffixlength, suffixlength), '/')?$substring_0(path, 0, path.length - 1):path) + ('' + (queryParams.length == 0?queryParams:'?' + queryParams)));
  this$static.request.open(this$static.method_0, url_0);
  $setHeaders(this$static);
  this$static.request.onreadystatechange = makeLambdaFunction(JsRestfulRequest$lambda$7$Type.prototype.onInvoke, JsRestfulRequest$lambda$7$Type, [this$static]);
  this$static.timeout_0 > 0 && $schedule(this$static.timer, this$static.timeout_0);
}

function $lambda$3_12(this$static, key_0, values_1){
  values_1.forEach_0(new JsRestfulRequest$lambda$4$Type(this$static, key_0));
}

function $lambda$7_1(this$static){
  if (this$static.request.readyState == ($clinit_XMLHttpRequest() , DONE)) {
    this$static.request.onreadystatechange = makeLambdaFunction(JsRestfulRequest$lambda$8$Type.prototype.onInvoke, JsRestfulRequest$lambda$8$Type, []);
    $cancel(this$static.timer);
    $onResponseReceived(this$static.successHandler, new JsResponse(this$static.request));
  }
  return null;
}

function $parseUri(this$static, uri_0){
  var uriParts, params;
  if (uri_0.indexOf('?') != -1) {
    uriParts = $split_0(uri_0, '\\?', 0);
    params = $split_0(uriParts[1], '&', 0);
    $forEach_3($map(stream_1(params, params.length), new BaseRestfulRequest$lambda$0$Type), new BaseRestfulRequest$0methodref$addQueryPair$Type(this$static));
  }
}

function $putHeader(this$static, key, value_0){
  $equalsIgnoreCase('Content-Type', key) && $equalsIgnoreCase('application/pdf', value_0) && (this$static.request.responseType = 'arraybuffer');
  $put_3(this$static.headers_0, key, value_0);
  return this$static;
}

function $putHeaders(this$static, headers){
  $forEach_2(headers, new JsRestfulRequest$1methodref$putHeader$Type(this$static));
  return this$static;
}

function $putParameters(this$static, parameters){
  parameters.hashCodeMap.size_0 + parameters.stringMap.size_0 != 0 && $forEach_2(parameters, new JsRestfulRequest$lambda$3$Type(this$static));
  return this$static;
}

function $send(this$static, data_0){
  $initRequest(this$static);
  this$static.request.send(data_0);
}

function $setHeaders(this$static){
  var entry, entry$iterator;
  for (entry$iterator = new LinkedHashMap$EntrySet$EntryIterator(new LinkedHashMap$EntrySet(this$static.headers_0)); entry$iterator.next_0 != entry$iterator.this$11.this$01.head;) {
    entry = $next_1(entry$iterator);
    this$static.request.setRequestHeader(castToString(entry.key_0), castToString(entry.value_0));
  }
}

function $setWithCredentials(this$static, withCredentials){
  this$static.request.withCredentials = withCredentials;
}

function JsRestfulRequest(uri_0, method){
  BaseRestfulRequest.call(this, uri_0, method);
  this.params = new LinkedHashMap;
  this.headers_0 = new LinkedHashMap;
  this.timer = new JsRestfulRequest$1(this);
  this.request = new $wnd.XMLHttpRequest;
  $parseUri(this, uri_0);
}

function lambda$1_4(paramValuePair_0, v_1){
  return castToString(paramValuePair_0.getKey()) + '=' + v_1;
}

defineClass(768, 767, {}, JsRestfulRequest);
var Lorg_dominokit_rest_js_JsRestfulRequest_2_classLit = createForClass('org.dominokit.rest.js', 'JsRestfulRequest', 768);
function JsRestfulRequest$0methodref$entryAsString$Type(){
}

defineClass(770, 1, {}, JsRestfulRequest$0methodref$entryAsString$Type);
_.apply_0 = function apply_40(arg0){
  return $entryAsString(castTo(arg0, 24));
}
;
var Lorg_dominokit_rest_js_JsRestfulRequest$0methodref$entryAsString$Type_2_classLit = createForClass('org.dominokit.rest.js', 'JsRestfulRequest/0methodref$entryAsString$Type', 770);
function JsRestfulRequest$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(769, 108, {}, JsRestfulRequest$1);
_.run = function run_11(){
  $fireOnTimeout(this.this$01);
}
;
var Lorg_dominokit_rest_js_JsRestfulRequest$1_2_classLit = createForClass('org.dominokit.rest.js', 'JsRestfulRequest/1', 769);
function JsRestfulRequest$1methodref$putHeader$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(772, 1, {}, JsRestfulRequest$1methodref$putHeader$Type);
_.accept_0 = function accept_85(arg0, arg1){
  $putHeader(this.$$outer_0, castToString(arg0), castToString(arg1));
}
;
var Lorg_dominokit_rest_js_JsRestfulRequest$1methodref$putHeader$Type_2_classLit = createForClass('org.dominokit.rest.js', 'JsRestfulRequest/1methodref$putHeader$Type', 772);
function JsRestfulRequest$lambda$1$Type(paramValuePair_0){
  this.paramValuePair_0 = paramValuePair_0;
}

defineClass(771, 1, {}, JsRestfulRequest$lambda$1$Type);
_.apply_0 = function apply_41(arg0){
  return lambda$1_4(this.paramValuePair_0, castToString(arg0));
}
;
var Lorg_dominokit_rest_js_JsRestfulRequest$lambda$1$Type_2_classLit = createForClass('org.dominokit.rest.js', 'JsRestfulRequest/lambda$1$Type', 771);
function JsRestfulRequest$lambda$3$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(774, 1, {}, JsRestfulRequest$lambda$3$Type);
_.accept_0 = function accept_86(arg0, arg1){
  $lambda$3_12(this.$$outer_0, castToString(arg0), castTo(arg1, 18));
}
;
var Lorg_dominokit_rest_js_JsRestfulRequest$lambda$3$Type_2_classLit = createForClass('org.dominokit.rest.js', 'JsRestfulRequest/lambda$3$Type', 774);
function JsRestfulRequest$lambda$4$Type($$outer_0, key_1){
  this.$$outer_0 = $$outer_0;
  this.key_1 = key_1;
}

defineClass(773, 1, {}, JsRestfulRequest$lambda$4$Type);
_.accept = function accept_87(arg0){
  $addQueryParam(this.$$outer_0, this.key_1, castToString(arg0));
}
;
var Lorg_dominokit_rest_js_JsRestfulRequest$lambda$4$Type_2_classLit = createForClass('org.dominokit.rest.js', 'JsRestfulRequest/lambda$4$Type', 773);
function JsRestfulRequest$lambda$7$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(890, $wnd.Function, {}, JsRestfulRequest$lambda$7$Type);
_.onInvoke = function onInvoke_5(arg0){
  return $lambda$7_1(this.$$outer_0);
}
;
function JsRestfulRequest$lambda$8$Type(){
}

defineClass(892, $wnd.Function, {}, JsRestfulRequest$lambda$8$Type);
_.onInvoke = function onInvoke_6(arg0){
  return null;
}
;
function JsRestfulRequest$lambda$9$Type(){
}

defineClass(891, $wnd.Function, {}, JsRestfulRequest$lambda$9$Type);
_.onInvoke = function onInvoke_7(arg0){
  return null;
}
;
function $clinit_ServerFailedRequestGwtEvent(){
  $clinit_ServerFailedRequestGwtEvent = emptyMethod;
  SERVER_FAILED_REQUEST_EVENT_TYPE = new Event$Type;
}

defineClass(838, 823, {});
_.getAssociatedType = function getAssociatedType_8(){
  return SERVER_FAILED_REQUEST_EVENT_TYPE;
}
;
var SERVER_FAILED_REQUEST_EVENT_TYPE;
var Lorg_dominokit_rest_js_ServerFailedRequestGwtEvent_2_classLit = createForClass('org.dominokit.rest.js', 'ServerFailedRequestGwtEvent', 838);
function $fire(this$static){
  $publishEvent(($clinit_DominoSimpleEventsBus() , INSTANCE_20), new ServerFailedRequestEvent$GWTRequestEvent(this$static));
}

function ServerFailedRequestEvent(request, failedResponseBean){
  $clinit_ServerFailedRequestGwtEvent();
  this.request = request;
  this.failedResponseBean = failedResponseBean;
}

defineClass(247, 838, {}, ServerFailedRequestEvent);
_.dispatch = function dispatch_8(eventProcessor){
  var lastArg;
  lastArg = this;
  castTo(eventProcessor, 167);
  $applyState(lastArg.request, new Request$ServerResponseReceivedStateContext(new Request$ServerFailedRequestStateContext(lastArg.failedResponseBean)));
}
;
var Lorg_dominokit_rest_js_ServerFailedRequestEvent_2_classLit = createForClass('org.dominokit.rest.js', 'ServerFailedRequestEvent', 247);
function ServerFailedRequestEvent$GWTRequestEvent(event_0){
  this.event_0 = event_0;
}

defineClass(784, 1, {}, ServerFailedRequestEvent$GWTRequestEvent);
_.asEvent = function asEvent(){
  return this.event_0;
}
;
var Lorg_dominokit_rest_js_ServerFailedRequestEvent$GWTRequestEvent_2_classLit = createForClass('org.dominokit.rest.js', 'ServerFailedRequestEvent/GWTRequestEvent', 784);
function $clinit_ServerSuccessRequestGwtEvent(){
  $clinit_ServerSuccessRequestGwtEvent = emptyMethod;
  SERVER_SUCCESS_REQUEST_EVENT_TYPE = new Event$Type;
}

defineClass(837, 823, {});
_.getAssociatedType = function getAssociatedType_9(){
  return SERVER_SUCCESS_REQUEST_EVENT_TYPE;
}
;
var SERVER_SUCCESS_REQUEST_EVENT_TYPE;
var Lorg_dominokit_rest_js_ServerSuccessRequestGwtEvent_2_classLit = createForClass('org.dominokit.rest.js', 'ServerSuccessRequestGwtEvent', 837);
function $fire_0(this$static){
  $publishEvent(($clinit_DominoSimpleEventsBus() , INSTANCE_20), new ServerSuccessRequestEvent$GWTRequestEvent(this$static));
}

function ServerSuccessRequestEvent(request, responseBean){
  $clinit_ServerSuccessRequestGwtEvent();
  this.request = request;
  this.responseBean = responseBean;
}

defineClass(756, 837, {}, ServerSuccessRequestEvent);
_.dispatch = function dispatch_9(eventProcessor){
  var lastArg;
  lastArg = this;
  castTo(eventProcessor, 167);
  $applyState(lastArg.request, new Request$ServerResponseReceivedStateContext(new Request$ServerSuccessRequestStateContext(lastArg.responseBean)));
}
;
var Lorg_dominokit_rest_js_ServerSuccessRequestEvent_2_classLit = createForClass('org.dominokit.rest.js', 'ServerSuccessRequestEvent', 756);
function ServerSuccessRequestEvent$GWTRequestEvent(event_0){
  this.event_0 = event_0;
}

defineClass(757, 1, {}, ServerSuccessRequestEvent$GWTRequestEvent);
_.asEvent = function asEvent_0(){
  return this.event_0;
}
;
var Lorg_dominokit_rest_js_ServerSuccessRequestEvent$GWTRequestEvent_2_classLit = createForClass('org.dominokit.rest.js', 'ServerSuccessRequestEvent/GWTRequestEvent', 757);
function BaseRestfulRequest$0methodref$addQueryPair$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(776, 1, {}, BaseRestfulRequest$0methodref$addQueryPair$Type);
_.accept = function accept_88(arg0){
  $addQueryPair(this.$$outer_0, castTo(arg0, 7));
}
;
var Lorg_dominokit_rest_shared_BaseRestfulRequest$0methodref$addQueryPair$Type_2_classLit = createForClass('org.dominokit.rest.shared', 'BaseRestfulRequest/0methodref$addQueryPair$Type', 776);
function BaseRestfulRequest$lambda$0$Type(){
}

defineClass(775, 1, {}, BaseRestfulRequest$lambda$0$Type);
_.apply_0 = function apply_42(arg0){
  return $split_0(castToString(arg0), '=', 0);
}
;
var Lorg_dominokit_rest_shared_BaseRestfulRequest$lambda$0$Type_2_classLit = createForClass('org.dominokit.rest.shared', 'BaseRestfulRequest/lambda$0$Type', 775);
function EventProcessor(){
}

defineClass(167, 1, {167:1}, EventProcessor);
var Lorg_dominokit_rest_shared_EventProcessor_2_classLit = createForClass('org.dominokit.rest.shared', 'EventProcessor', 167);
var Lorg_dominokit_rest_shared_request_RequestAsyncSender_2_classLit = createForInterface('org.dominokit.rest.shared.request', 'RequestAsyncSender');
function $clinit_AbstractRequestAsyncSender(){
  $clinit_AbstractRequestAsyncSender = emptyMethod;
  LOGGER_0 = getLogger(($ensureNamesAreInitialized(Lorg_dominokit_rest_shared_request_RequestAsyncSender_2_classLit) , Lorg_dominokit_rest_shared_request_RequestAsyncSender_2_classLit.typeName));
}

defineClass(819, 1, {});
var LOGGER_0;
var Lorg_dominokit_rest_shared_request_AbstractRequestAsyncSender_2_classLit = createForClass('org.dominokit.rest.shared.request', 'AbstractRequestAsyncSender', 819);
function AbstractRequestAsyncSender$RequestAsyncTask(this$0, request){
  this.this$01 = this$0;
  this.request = request;
}

defineClass(293, 1, {}, AbstractRequestAsyncSender$RequestAsyncTask);
var Lorg_dominokit_rest_shared_request_AbstractRequestAsyncSender$RequestAsyncTask_2_classLit = createForClass('org.dominokit.rest.shared.request', 'AbstractRequestAsyncSender/RequestAsyncTask', 293);
function BaseRequest$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(628, 1, {}, BaseRequest$lambda$0$Type);
_.execute_1 = function execute_9(arg0){
  castTo(arg0, 159);
  this.$$outer_0.startRouting();
}
;
var Lorg_dominokit_rest_shared_request_BaseRequest$lambda$0$Type_2_classLit = createForClass('org.dominokit.rest.shared.request', 'BaseRequest/lambda$0$Type', 628);
function BaseRequest$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(629, 1, {}, BaseRequest$lambda$1$Type);
_.execute_1 = function execute_10(arg0){
  castTo(arg0, 159);
  $lambda$1_3(this.$$outer_0);
}
;
var Lorg_dominokit_rest_shared_request_BaseRequest$lambda$1$Type_2_classLit = createForClass('org.dominokit.rest.shared.request', 'BaseRequest/lambda$1$Type', 629);
function BaseRequest$lambda$3$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(630, 1, {}, BaseRequest$lambda$3$Type);
_.execute_1 = function execute_11(arg0){
  $lambda$3_1(this.$$outer_0, castTo(arg0, 161));
}
;
var Lorg_dominokit_rest_shared_request_BaseRequest$lambda$3$Type_2_classLit = createForClass('org.dominokit.rest.shared.request', 'BaseRequest/lambda$3$Type', 630);
function $sendRequest(this$static, request){
  $send_0(this$static.requestSender, request, new DefaultRequestAsyncSender$1(request));
}

function DefaultRequestAsyncSender(requestSender){
  $clinit_AbstractRequestAsyncSender();
  this.requestSender = requestSender;
}

defineClass(291, 819, {}, DefaultRequestAsyncSender);
var Lorg_dominokit_rest_shared_request_DefaultRequestAsyncSender_2_classLit = createForClass('org.dominokit.rest.shared.request', 'DefaultRequestAsyncSender', 291);
function $onSuccess_1(this$static, response){
  $fire_0(new ServerSuccessRequestEvent(this$static.val$request3, response));
}

function DefaultRequestAsyncSender$1(val$request){
  this.val$request3 = val$request;
}

defineClass(292, 1, {}, DefaultRequestAsyncSender$1);
var Lorg_dominokit_rest_shared_request_DefaultRequestAsyncSender$1_2_classLit = createForClass('org.dominokit.rest.shared.request', 'DefaultRequestAsyncSender/1', 292);
function $onMatchingPath(path){
  var root;
  root = ($clinit_ServiceRootMatcher() , $getDefaultServiceRoot());
  return root + path;
}

function DynamicServiceRoot(){
}

defineClass(166, 1, {166:1}, DynamicServiceRoot);
var Lorg_dominokit_rest_shared_request_DynamicServiceRoot_2_classLit = createForClass('org.dominokit.rest.shared.request', 'DynamicServiceRoot', 166);
function FailedResponseBean(throwable){
  this.throwable = throwable;
}

function FailedResponseBean_0(response){
  var allResponseHeaders, headers;
  this.statusCode = response.request.status;
  this.statusText = response.request.statusText;
  this.body_0 = response.request.responseText;
  allResponseHeaders = response.request.getAllResponseHeaders();
  headers = $split_0(allResponseHeaders, '\r\n', 0);
  castTo($collect($map($filter_0(new StreamImpl(null, spliterator_3(headers, headers.length)), new JsResponse$lambda$0$Type), new JsResponse$lambda$1$Type), of_1(new Collectors$22methodref$ctor$Type, new Collectors$lambda$46$Type, new Collectors$lambda$47$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_0, 29, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)]))), 66);
}

defineClass(241, 1, $intern_27, FailedResponseBean, FailedResponseBean_0);
_.statusCode = 0;
var Lorg_dominokit_rest_shared_request_FailedResponseBean_2_classLit = createForClass('org.dominokit.rest.shared.request', 'FailedResponseBean', 241);
function InterceptorRequestWait(){
  this.readyHandlers = new LinkedHashSet;
}

defineClass(194, 141, {141:1, 194:1}, InterceptorRequestWait);
var Lorg_dominokit_rest_shared_request_InterceptorRequestWait_2_classLit = createForClass('org.dominokit.rest.shared.request', 'InterceptorRequestWait', 194);
function Request$DefaultRequestStateContext(){
}

defineClass(159, 1, {159:1}, Request$DefaultRequestStateContext);
var Lorg_dominokit_rest_shared_request_Request$DefaultRequestStateContext_2_classLit = createForClass('org.dominokit.rest.shared.request', 'Request/DefaultRequestStateContext', 159);
function Request$InvalidRequestState(message){
  RuntimeException_0.call(this, message);
}

defineClass(191, 13, $intern_2, Request$InvalidRequestState);
var Lorg_dominokit_rest_shared_request_Request$InvalidRequestState_2_classLit = createForClass('org.dominokit.rest.shared.request', 'Request/InvalidRequestState', 191);
function Request$ServerFailedRequestStateContext(response){
  this.response = response;
}

defineClass(161, 1, {161:1}, Request$ServerFailedRequestStateContext);
var Lorg_dominokit_rest_shared_request_Request$ServerFailedRequestStateContext_2_classLit = createForClass('org.dominokit.rest.shared.request', 'Request/ServerFailedRequestStateContext', 161);
function Request$ServerResponseReceivedStateContext(nextContext){
  this.nextContext = nextContext;
}

defineClass(160, 1, {160:1}, Request$ServerResponseReceivedStateContext);
var Lorg_dominokit_rest_shared_request_Request$ServerResponseReceivedStateContext_2_classLit = createForClass('org.dominokit.rest.shared.request', 'Request/ServerResponseReceivedStateContext', 160);
function Request$ServerSuccessRequestStateContext(responseBean){
  this.responseBean = responseBean;
}

defineClass(130, 1, {130:1}, Request$ServerSuccessRequestStateContext);
var Lorg_dominokit_rest_shared_request_Request$ServerSuccessRequestStateContext_2_classLit = createForClass('org.dominokit.rest.shared.request', 'Request/ServerSuccessRequestStateContext', 130);
function RequestMeta(serviceClass, methodName, requestClass, responseClass){
  this.serviceClass = serviceClass;
  this.methodName = methodName;
  this.requestClass = requestClass;
  this.responseClass = responseClass;
}

defineClass(238, 1, {}, RequestMeta);
_.toString_0 = function toString_23(){
  return 'RequestMeta{serviceClass=' + this.serviceClass + ", methodName='" + this.methodName + "'" + ', requestClass=' + this.requestClass + ', responseClass=' + this.responseClass + '}';
}
;
var Lorg_dominokit_rest_shared_request_RequestMeta_2_classLit = createForClass('org.dominokit.rest.shared.request', 'RequestMeta', 238);
function $clinit_RequestSender(){
  $clinit_RequestSender = emptyMethod;
  LOGGER_1 = getLogger(($ensureNamesAreInitialized(Lorg_dominokit_rest_shared_request_RequestSender_2_classLit) , Lorg_dominokit_rest_shared_request_RequestSender_2_classLit.typeName));
}

function $handleError(this$static, request, callBack, retriesCounter, restfulRequest, throwable){
  var failedResponse;
  if (retriesCounter[0] < -1) {
    ++retriesCounter[0];
    $info(LOGGER_1, 'Retrying request : ' + retriesCounter[0]);
    $indexOf_0(this$static.SEND_BODY_METHODS, request.httpMethod.toUpperCase()) != -1?$send(restfulRequest, ($clinit_ServerRequest() , null)):($initRequest(restfulRequest) , restfulRequest.request.send());
  }
   else {
    failedResponse = new FailedResponseBean(throwable);
    $log_0(LOGGER_1, ($clinit_Level() , SEVERE), 'Failed to execute request : ', failedResponse.throwable);
    $forEach_0(($clinit_DominoRestConfig() , responseInterceptors), new RequestSender$lambda$7$Type);
    $fire(new ServerFailedRequestEvent(callBack.val$request3, failedResponse));
  }
}

function $handleResponse(request, callBack, response){
  var failedResponse;
  if ($anyMatch(stream_0(request.successCodes), new RequestSender$lambda$5$Type(response))) {
    $forEach_0(($clinit_DominoRestConfig() , responseInterceptors), new RequestSender$lambda$6$Type);
    $onSuccess_1(callBack, $readResponse(request, response));
  }
   else {
    failedResponse = new FailedResponseBean_0(response);
    $forEach_0(($clinit_DominoRestConfig() , responseInterceptors), new RequestSender$lambda$7$Type);
    $fire(new ServerFailedRequestEvent(callBack.val$request3, failedResponse));
  }
}

function $onAfterInterception(this$static, request, callBack){
  var restfulRequest, retriesCounter;
  retriesCounter = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_18, 36, 15, [0]);
  restfulRequest = new JsRestfulRequest(request.url_0, request.httpMethod.toUpperCase());
  if (!equals_Ljava_lang_Object__Z__devirtual$(request.state_0, request.aborted_0)) {
    $onError($onSuccess_0($putParameters($putHeaders(restfulRequest, new HashMap_0(request.headers_0)), new HashMap_0(request.queryParameters)), new RequestSender$lambda$3$Type(request, callBack)), new RequestSender$lambda$4$Type(this$static, request, callBack, retriesCounter, restfulRequest));
    request.withCredentialsRequest.ref != null && $setWithCredentials(restfulRequest, throwClassCastExceptionUnlessNull($get_5(request.withCredentialsRequest)).$_nullMethod());
    $indexOf_0(this$static.SEND_BODY_METHODS, request.httpMethod.toUpperCase()) != -1?$send(restfulRequest, ($clinit_ServerRequest() , null)):($initRequest(restfulRequest) , restfulRequest.request.send());
  }
}

function $readResponse(request, response){
  var statusCode;
  statusCode = response.request.status;
  switch (statusCode) {
    case 204:
      {
        if (response.request.responseText == null || response.request.responseText.length == 0) {
          return null;
        }
      }

    default:return request.responseReader.read_0(response);
  }
}

function $send_0(this$static, request, callBack){
  var interceptors, interceptorsWaitList;
  $normalizeUrl(request);
  interceptors = ($clinit_DominoRestConfig() , requestInterceptors);
  if (!!interceptors && interceptors.array.length != 0) {
    interceptorsWaitList = castTo($collect($map(new StreamImpl(null, new Spliterators$IteratorSpliterator(interceptors, 16)), new RequestSender$0methodref$ctor$Type), of_1(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$42$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_0, 29, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)]))), 18);
    new ContextAggregator((new ContextAggregator$ContextAggregatorBuilder(interceptorsWaitList)).contextSet);
    interceptorsWaitList.forEach_0(new RequestSender$lambda$2$Type);
  }
   else {
    $onAfterInterception(this$static, request, callBack);
  }
}

function RequestSender(){
  $clinit_RequestSender();
  this.SEND_BODY_METHODS = new Arrays$ArrayList(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['POST', 'PUT', 'PATCH']));
}

function lambda$5_2(response_0, code_1){
  $clinit_RequestSender();
  return $equals_0(code_1, valueOf(response_0.request.status));
}

defineClass(294, 1, {}, RequestSender);
var LOGGER_1;
var Lorg_dominokit_rest_shared_request_RequestSender_2_classLit = createForClass('org.dominokit.rest.shared.request', 'RequestSender', 294);
function RequestSender$0methodref$ctor$Type(){
}

defineClass(295, 1, {}, RequestSender$0methodref$ctor$Type);
_.apply_0 = function apply_43(arg0){
  return throwClassCastExceptionUnlessNull(arg0) , new InterceptorRequestWait;
}
;
var Lorg_dominokit_rest_shared_request_RequestSender$0methodref$ctor$Type_2_classLit = createForClass('org.dominokit.rest.shared.request', 'RequestSender/0methodref$ctor$Type', 295);
function RequestSender$lambda$2$Type(){
}

defineClass(296, 1, {}, RequestSender$lambda$2$Type);
_.accept = function accept_89(arg0){
  $clinit_RequestSender();
  castTo(arg0, 194);
  null.$_nullMethod();
}
;
var Lorg_dominokit_rest_shared_request_RequestSender$lambda$2$Type_2_classLit = createForClass('org.dominokit.rest.shared.request', 'RequestSender/lambda$2$Type', 296);
function $onResponseReceived(this$static, arg0){
  $handleResponse(this$static.request_1, this$static.callBack_2, arg0);
}

function RequestSender$lambda$3$Type(request_1, callBack_2){
  this.request_1 = request_1;
  this.callBack_2 = callBack_2;
}

defineClass(297, 1, {}, RequestSender$lambda$3$Type);
var Lorg_dominokit_rest_shared_request_RequestSender$lambda$3$Type_2_classLit = createForClass('org.dominokit.rest.shared.request', 'RequestSender/lambda$3$Type', 297);
function $onError_0(this$static, arg0){
  $handleError(this$static.$$outer_0, this$static.request_1, this$static.callBack_2, this$static.retriesCounter_3, this$static.restfulRequest_4, arg0);
}

function RequestSender$lambda$4$Type($$outer_0, request_1, callBack_2, retriesCounter_3, restfulRequest_4){
  this.$$outer_0 = $$outer_0;
  this.request_1 = request_1;
  this.callBack_2 = callBack_2;
  this.retriesCounter_3 = retriesCounter_3;
  this.restfulRequest_4 = restfulRequest_4;
}

defineClass(298, 1, {}, RequestSender$lambda$4$Type);
var Lorg_dominokit_rest_shared_request_RequestSender$lambda$4$Type_2_classLit = createForClass('org.dominokit.rest.shared.request', 'RequestSender/lambda$4$Type', 298);
function RequestSender$lambda$5$Type(response_0){
  this.response_0 = response_0;
}

defineClass(299, 1, {}, RequestSender$lambda$5$Type);
_.test_0 = function test_23(arg0){
  return lambda$5_2(this.response_0, castTo(arg0, 68));
}
;
var Lorg_dominokit_rest_shared_request_RequestSender$lambda$5$Type_2_classLit = createForClass('org.dominokit.rest.shared.request', 'RequestSender/lambda$5$Type', 299);
function RequestSender$lambda$6$Type(){
}

defineClass(300, 1, {}, RequestSender$lambda$6$Type);
_.accept = function accept_90(arg0){
  $clinit_RequestSender();
  throwClassCastExceptionUnlessNull(arg0);
  null.$_nullMethod();
}
;
var Lorg_dominokit_rest_shared_request_RequestSender$lambda$6$Type_2_classLit = createForClass('org.dominokit.rest.shared.request', 'RequestSender/lambda$6$Type', 300);
function RequestSender$lambda$7$Type(){
}

defineClass(206, 1, {}, RequestSender$lambda$7$Type);
_.accept = function accept_91(arg0){
  $clinit_RequestSender();
  throwClassCastExceptionUnlessNull(arg0);
  null.$_nullMethod();
}
;
var Lorg_dominokit_rest_shared_request_RequestSender$lambda$7$Type_2_classLit = createForClass('org.dominokit.rest.shared.request', 'RequestSender/lambda$7$Type', 206);
function RequestTimeoutException(){
  Throwable.call(this);
}

defineClass(779, 9, {4:1, 9:1}, RequestTimeoutException);
var Lorg_dominokit_rest_shared_request_RequestTimeoutException_2_classLit = createForClass('org.dominokit.rest.shared.request', 'RequestTimeoutException', 779);
function ServerRequest$lambda$2$Type(){
}

defineClass(623, 1, {}, ServerRequest$lambda$2$Type);
_.read_0 = function read_1(arg0){
  return $clinit_ServerRequest() , null;
}
;
var Lorg_dominokit_rest_shared_request_ServerRequest$lambda$2$Type_2_classLit = createForClass('org.dominokit.rest.shared.request', 'ServerRequest/lambda$2$Type', 623);
function ServerRequest$lambda$3$Type(){
}

defineClass(624, 1, {}, ServerRequest$lambda$3$Type);
_.onSuccess = function onSuccess_3(arg0){
  $clinit_ServerRequest();
}
;
var Lorg_dominokit_rest_shared_request_ServerRequest$lambda$3$Type_2_classLit = createForClass('org.dominokit.rest.shared.request', 'ServerRequest/lambda$3$Type', 624);
function ServerRequest$lambda$4$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(625, 1, {}, ServerRequest$lambda$4$Type);
_.execute_1 = function execute_12(arg0){
  $lambda$4_1(this.$$outer_0, castTo(arg0, 130));
}
;
var Lorg_dominokit_rest_shared_request_ServerRequest$lambda$4$Type_2_classLit = createForClass('org.dominokit.rest.shared.request', 'ServerRequest/lambda$4$Type', 625);
function ServerRequest$lambda$5$Type(){
}

defineClass(626, 1, {}, ServerRequest$lambda$5$Type);
_.execute_1 = function execute_13(arg0){
  castTo(arg0, 130);
  $info(($clinit_ServerRequest() , LOGGER), 'Request have already been aborted.!');
}
;
var Lorg_dominokit_rest_shared_request_ServerRequest$lambda$5$Type_2_classLit = createForClass('org.dominokit.rest.shared.request', 'ServerRequest/lambda$5$Type', 626);
function ServerRequest$lambda$6$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(627, 1, {}, ServerRequest$lambda$6$Type);
_.execute_1 = function execute_14(arg0){
  $lambda$6_0(this.$$outer_0, castTo(arg0, 160));
}
;
var Lorg_dominokit_rest_shared_request_ServerRequest$lambda$6$Type_2_classLit = createForClass('org.dominokit.rest.shared.request', 'ServerRequest/lambda$6$Type', 627);
function $routeRequest(this$static, request){
  lambda$2_3(new AbstractRequestAsyncSender$RequestAsyncTask(this$static.requestAsyncRunner, request));
}

function ServerRouter(requestAsyncRunner){
  this.requestAsyncRunner = requestAsyncRunner;
}

defineClass(290, 1, {}, ServerRouter);
var Lorg_dominokit_rest_shared_request_ServerRouter_2_classLit = createForClass('org.dominokit.rest.shared.request', 'ServerRouter', 290);
function $clinit_ServiceRootMatcher(){
  $clinit_ServiceRootMatcher = emptyMethod;
  defaultRoot = new DynamicServiceRoot;
}

function matchedServiceRoot(path){
  $clinit_ServiceRootMatcher();
  var serviceRoots;
  serviceRoots = ($clinit_DominoRestConfig() , dynamicServiceRoots);
  return $onMatchingPath((castTo($orElse($findFirst($filter_0(new StreamImpl(null, new Spliterators$IteratorSpliterator(serviceRoots, 16)), new ServiceRootMatcher$lambda$2$Type)), defaultRoot), 166) , path));
}

var defaultRoot;
function ServiceRootMatcher$lambda$2$Type(){
}

defineClass(755, 1, {}, ServiceRootMatcher$lambda$2$Type);
_.test_0 = function test_24(arg0){
  return $clinit_ServiceRootMatcher() , castTo(arg0, 166) , $clinit_ServiceRootMatcher() , true;
}
;
var Lorg_dominokit_rest_shared_request_ServiceRootMatcher$lambda$2$Type_2_classLit = createForClass('org.dominokit.rest.shared.request', 'ServiceRootMatcher/lambda$2$Type', 755);
function $formatUrl(this$static, targetUrl){
  var postfix, prefix, tempToken, path, separator;
  if ($trim(targetUrl).length == 0) {
    return $trim(targetUrl);
  }
  if (!(targetUrl.indexOf('{') != -1 && targetUrl.indexOf('}') != -1 || targetUrl.indexOf(':') != -1)) {
    return $trim(targetUrl);
  }
  postfix = lambda$3_3(targetUrl);
  prefix = $replace(targetUrl, postfix, '');
  tempToken = new StateHistoryToken(postfix);
  $forEach_3($filter_0(new StreamImpl(null, new Spliterators$IteratorSpliterator(new ArrayList_0(tempToken.paths), 16)), new UrlFormatter$0methodref$isExpressionToken$Type), new UrlFormatter$lambda$1$Type(this$static, tempToken));
  return prefix + ($equals_1(targetUrl.substr(0, 1), '/')?'/':'') + (path = join_1(tempToken.paths) , separator = tempToken.rootPath.length == 0 || $endsWith(tempToken.rootPath) || $equals_1(path.substr(0, 1), '/') || path.length == 0?'':'/' , tempToken.rootPath + separator + (join_1(tempToken.paths) + $appendQuery(castToString($collect($map(new StreamImpl(null, new Spliterators$IteratorSpliterator(tempToken.queryParameters, 16)), new StateHistoryToken$0methodref$asQueryString$Type), of_0(new Collectors$lambda$15$Type, new Collectors$9methodref$add$Type, new Collectors$10methodref$merge$Type, new Collectors$11methodref$toString$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_0, 29, 0, []))))) + ($isEmpty(join_1(tempToken.fragments))?'':'#' + join_1(tempToken.fragments))));
}

function $getPathValue(this$static, path){
  var pathName, pathName0;
  pathName0 = $replace($replace($replace(path, ':', ''), '{', ''), '}', '');
  if (!$hasStringValue(this$static.pathParameters, pathName0)) {
    throw toJs(new PathParameterMissingException(path));
  }
  pathName = $replace($replace($replace(path, ':', ''), '{', ''), '}', '');
  return castToString($getStringValue(this$static.pathParameters, pathName));
}

function $isExpressionToken(tokenPath){
  var suffixlength;
  return $equals_1(tokenPath.substr(0, 1), ':') || $equals_1(tokenPath.substr(0, 1), '{') && (suffixlength = '}'.length , $equals_1(tokenPath.substr(tokenPath.length - suffixlength, suffixlength), '}'));
}

function $lambda$1_15(this$static, tempToken_1, path_1){
  return $replacePath(tempToken_1, path_1, $getPathValue(this$static, path_1));
}

function UrlFormatter(pathParameters){
  this.pathParameters = pathParameters;
}

defineClass(752, 1, {}, UrlFormatter);
var Lorg_dominokit_rest_shared_request_UrlFormatter_2_classLit = createForClass('org.dominokit.rest.shared.request', 'UrlFormatter', 752);
function UrlFormatter$0methodref$isExpressionToken$Type(){
}

defineClass(753, 1, {}, UrlFormatter$0methodref$isExpressionToken$Type);
_.test_0 = function test_25(arg0){
  return $isExpressionToken(castToString(arg0));
}
;
var Lorg_dominokit_rest_shared_request_UrlFormatter$0methodref$isExpressionToken$Type_2_classLit = createForClass('org.dominokit.rest.shared.request', 'UrlFormatter/0methodref$isExpressionToken$Type', 753);
function UrlFormatter$lambda$1$Type($$outer_0, tempToken_1){
  this.$$outer_0 = $$outer_0;
  this.tempToken_1 = tempToken_1;
}

defineClass(754, 1, {}, UrlFormatter$lambda$1$Type);
_.accept = function accept_92(arg0){
  $lambda$1_15(this.$$outer_0, this.tempToken_1, castToString(arg0));
}
;
var Lorg_dominokit_rest_shared_request_UrlFormatter$lambda$1$Type_2_classLit = createForClass('org.dominokit.rest.shared.request', 'UrlFormatter/lambda$1$Type', 754);
function PathParameterMissingException(paramName){
  RuntimeException_0.call(this, 'No parameter provided for path [' + paramName + ']');
}

defineClass(778, 13, $intern_2, PathParameterMissingException);
var Lorg_dominokit_rest_shared_request_exception_PathParameterMissingException_2_classLit = createForClass('org.dominokit.rest.shared.request.exception', 'PathParameterMissingException', 778);
function fromObject(obj){
  var throwable = of(obj);
}

defineClass(811, 1, {});
var Lorg_gwtproject_core_client_GWT_2_classLit = createForClass('org.gwtproject.core.client', 'GWT', 811);
function $scheduleFixedDelay(cmd){
  $clinit_DomGlobal();
  $wnd.goog.global.setTimeout(makeLambdaFunction(SchedulerImpl$1.prototype.onInvoke_0, SchedulerImpl$1, [cmd]), 50);
}

function SchedulerImpl$1(val$cmd){
  this.val$cmd1 = val$cmd;
  this.val$delayMs2 = 50;
}

defineClass(887, $wnd.Function, {}, SchedulerImpl$1);
_.onInvoke_0 = function onInvoke_8(){
  this.val$cmd1.execute_0() && ($clinit_DomGlobal() , $wnd.goog.global.setTimeout(this, this.val$delayMs2));
}
;
_.val$delayMs2 = 0;
function Event$Type(){
  this.index_0 = ++nextHashCode;
}

defineClass(50, 1, {50:1}, Event$Type);
_.hashCode_1 = function hashCode_18(){
  return this.index_0;
}
;
_.toString_0 = function toString_24(){
  return 'Event type';
}
;
_.index_0 = 0;
var nextHashCode = 0;
var Lorg_gwtproject_event_shared_Event$Type_2_classLit = createForClass('org.gwtproject.event.shared', 'Event/Type', 50);
defineClass(822, 1, {});
var Lorg_gwtproject_event_shared_EventBus_2_classLit = createForClass('org.gwtproject.event.shared', 'EventBus', 822);
function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList);
  $add_0(this$static.deferredDeltas, command);
}

function $doAdd(this$static, type_0, handler){
  var l;
  if (!type_0) {
    throw toJs(new NullPointerException_1('Cannot add a handler with a null type'));
  }
  if (handler == null) {
    throw toJs(new NullPointerException_1('Cannot add a null handler'));
  }
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$lambda$1$Type(this$static, type_0, handler)):(l = $ensureHandlerList(this$static, type_0, null) , l.add(handler));
  return new SimpleEventBus$lambda$0$Type(this$static, type_0, handler);
}

function $doAddNow(this$static, type_0, source, handler){
  var l;
  l = $ensureHandlerList(this$static, type_0, source);
  l.add(handler);
}

function $doFire(this$static, event_0){
  var causes, directHandlers, e, handler, handler$iterator, handlers;
  if (!event_0) {
    throw toJs(new NullPointerException_1('Cannot fire null event'));
  }
  try {
    ++this$static.firingDepth;
    handlers = (directHandlers = $getHandlerList(this$static, event_0.getAssociatedType(), null) , directHandlers);
    causes = null;
    for (handler$iterator = handlers.iterator(); handler$iterator.hasNext_0();) {
      handler = handler$iterator.next_1();
      try {
        event_0.dispatch(handler);
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 9)) {
          e = $e0;
          !causes && (causes = new HashSet);
          causes.map_0.put(e, causes);
        }
         else 
          throw toJs($e0);
      }
    }
    if (causes) {
      throw toJs(new UmbrellaException(causes));
    }
  }
   finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
}

function $doRemove(this$static, type_0, source, handler){
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$lambda$2$Type(this$static, type_0, source, handler)):$doRemoveNow(this$static, type_0, source, handler);
}

function $doRemoveNow(this$static, type_0, source, handler){
  var l, removed, sourceMap;
  l = $getHandlerList(this$static, type_0, source);
  removed = l.remove(handler);
  removed && l.isEmpty() && (sourceMap = castTo($get_0(this$static.map_0, type_0), 66) , castTo(sourceMap.remove(source), 18) , sourceMap.isEmpty() && $remove_1(this$static.map_0, type_0) , undefined);
}

function $ensureHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = castTo($computeIfAbsent(this$static.map_0, type_0, new SimpleEventBus$lambda$3$Type), 66);
  handlers = castTo(sourceMap.get(source), 18);
  if (!handlers) {
    handlers = new ArrayList;
    sourceMap.put(source, handlers);
  }
  return handlers;
}

function $getHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = castTo($get_0(this$static.map_0, type_0), 66);
  if (!sourceMap) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  handlers = castTo(sourceMap.get(source), 18);
  if (!handlers) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  return handlers;
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = new ArrayList$1(this$static.deferredDeltas); c$iterator.i < c$iterator.this$01.array.length;) {
        c = castTo($next_0(c$iterator), 792);
        c.execute();
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

function SimpleEventBus(){
  this.map_0 = new HashMap;
}

defineClass(213, 822, {}, SimpleEventBus);
_.firingDepth = 0;
var Lorg_gwtproject_event_shared_SimpleEventBus_2_classLit = createForClass('org.gwtproject.event.shared', 'SimpleEventBus', 213);
function $removeHandler_0(this$static){
  $doRemove(this$static.$$outer_0, this$static.type_1, this$static.source_2, this$static.handler_3);
}

function SimpleEventBus$lambda$0$Type($$outer_0, type_1, handler_3){
  this.$$outer_0 = $$outer_0;
  this.type_1 = type_1;
  this.source_2 = null;
  this.handler_3 = handler_3;
}

defineClass(319, 1, {841:1}, SimpleEventBus$lambda$0$Type);
var Lorg_gwtproject_event_shared_SimpleEventBus$lambda$0$Type_2_classLit = createForClass('org.gwtproject.event.shared', 'SimpleEventBus/lambda$0$Type', 319);
function SimpleEventBus$lambda$1$Type($$outer_0, type_1, handler_3){
  this.$$outer_0 = $$outer_0;
  this.type_1 = type_1;
  this.source_2 = null;
  this.handler_3 = handler_3;
}

defineClass(320, 1, {792:1}, SimpleEventBus$lambda$1$Type);
_.execute = function execute_15(){
  $doAddNow(this.$$outer_0, this.type_1, this.source_2, this.handler_3);
}
;
var Lorg_gwtproject_event_shared_SimpleEventBus$lambda$1$Type_2_classLit = createForClass('org.gwtproject.event.shared', 'SimpleEventBus/lambda$1$Type', 320);
function SimpleEventBus$lambda$2$Type($$outer_0, type_1, source_2, handler_3){
  this.$$outer_0 = $$outer_0;
  this.type_1 = type_1;
  this.source_2 = source_2;
  this.handler_3 = handler_3;
}

defineClass(321, 1, {792:1}, SimpleEventBus$lambda$2$Type);
_.execute = function execute_16(){
  $doRemoveNow(this.$$outer_0, this.type_1, this.source_2, this.handler_3);
}
;
var Lorg_gwtproject_event_shared_SimpleEventBus$lambda$2$Type_2_classLit = createForClass('org.gwtproject.event.shared', 'SimpleEventBus/lambda$2$Type', 321);
function SimpleEventBus$lambda$3$Type(){
}

defineClass(322, 1, {}, SimpleEventBus$lambda$3$Type);
_.apply_0 = function apply_44(arg0){
  return castTo(arg0, 50) , new HashMap;
}
;
var Lorg_gwtproject_event_shared_SimpleEventBus$lambda$3$Type_2_classLit = createForClass('org.gwtproject.event.shared', 'SimpleEventBus/lambda$3$Type', 322);
function UmbrellaException(causes){
  var cause, cause$iterator, entry, entry0, i, outerIter, outerIter0;
  RuntimeException_1.call(this, makeMessage(causes), causes.map_0.size() == 0?null:(outerIter0 = (new AbstractMap$1(causes.map_0)).this$01.entrySet().iterator() , entry0 = castTo((new AbstractMap$1$1(outerIter0)).val$outerIter2.next_1(), 24) , castTo(entry0.getKey(), 9)));
  i = 0;
  for (cause$iterator = (outerIter = (new AbstractMap$1(causes.map_0)).this$01.entrySet().iterator() , new AbstractMap$1$1(outerIter)); cause$iterator.val$outerIter2.hasNext_0();) {
    cause = (entry = castTo(cause$iterator.val$outerIter2.next_1(), 24) , castTo(entry.getKey(), 9));
    if (i++ == 0) {
      continue;
    }
    $addSuppressed(this, cause);
  }
}

function makeMessage(causes){
  var b, count, entry, first, outerIter, t, t$iterator;
  count = causes.map_0.size();
  if (count == 0) {
    return null;
  }
  b = new StringBuilder_1(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = (outerIter = (new AbstractMap$1(causes.map_0)).this$01.entrySet().iterator() , new AbstractMap$1$1(outerIter)); t$iterator.val$outerIter2.hasNext_0();) {
    t = (entry = castTo(t$iterator.val$outerIter2.next_1(), 24) , castTo(entry.getKey(), 9));
    first?(first = false):(b.string += '; ' , b);
    $append_4(b, t.getMessage());
  }
  return b.string;
}

defineClass(448, 13, $intern_2, UmbrellaException);
var Lorg_gwtproject_event_shared_UmbrellaException_2_classLit = createForClass('org.gwtproject.event.shared', 'UmbrellaException', 448);
function $clinit_DateTimeFormat(){
  $clinit_DateTimeFormat = emptyMethod;
  new HashMap;
}

function $addPart(this$static, buf, count){
  var oldLength;
  if (buf.string.length > 0) {
    $add_0(this$static.patternParts, new DateTimeFormat$PatternPart(buf.string, count));
    oldLength = buf.string.length;
    0 < oldLength?(buf.string = $substring_0(buf.string, 0, 0)):0 > oldLength && (buf.string += valueOf_1(initUnidimensionalArray(C_classLit, $intern_21, 36, -oldLength, 15, 1)));
  }
}

function $format(this$static, date, timeZone){
  var ch_0, diff, i, j, keepDate, keepTime, n, toAppendTo, trailQuote;
  !timeZone && (timeZone = createTimeZone(date.jsdate.getTimezoneOffset()));
  diff = (date.jsdate.getTimezoneOffset() - timeZone.standardOffset) * 60000;
  keepDate = new Date_1(add_1(fromDouble_0(date.jsdate.getTime()), diff));
  keepTime = keepDate;
  if (keepDate.jsdate.getTimezoneOffset() != date.jsdate.getTimezoneOffset()) {
    diff > 0?(diff -= 86400000):(diff += 86400000);
    keepTime = new Date_1(add_1(fromDouble_0(date.jsdate.getTime()), diff));
  }
  toAppendTo = new StringBuilder_0;
  n = this$static.pattern.length;
  for (i = 0; i < n;) {
    ch_0 = $charAt(this$static.pattern, i);
    if (ch_0 >= 97 && ch_0 <= 122 || ch_0 >= 65 && ch_0 <= 90) {
      for (j = i + 1; j < n && $charAt(this$static.pattern, j) == ch_0; ++j)
      ;
      $subFormat(toAppendTo, ch_0, j - i, keepDate, keepTime, timeZone);
      i = j;
    }
     else if (ch_0 == 39) {
      ++i;
      if (i < n && $charAt(this$static.pattern, i) == 39) {
        toAppendTo.string += "'";
        ++i;
        continue;
      }
      trailQuote = false;
      while (!trailQuote) {
        j = i;
        while (j < n && $charAt(this$static.pattern, j) != 39) {
          ++j;
        }
        if (j >= n) {
          throw toJs(new IllegalArgumentException("Missing trailing '"));
        }
        j + 1 < n && $charAt(this$static.pattern, j + 1) == 39?++j:(trailQuote = true);
        $append_4(toAppendTo, $substring_0(this$static.pattern, i, j));
        i = j + 1;
      }
    }
     else {
      toAppendTo.string += String.fromCharCode(ch_0);
      ++i;
    }
  }
  return toAppendTo.string;
}

function $formatFractionalSeconds(buf, count, date){
  var time, value_0;
  time = fromDouble_0(date.jsdate.getTime());
  if (compare_0(time, 0) < 0) {
    value_0 = $intern_28 - toInt_0(mod(neg_0(time), $intern_28));
    value_0 == $intern_28 && (value_0 = 0);
  }
   else {
    value_0 = toInt_0(mod(time, $intern_28));
  }
  if (count == 1) {
    value_0 = $wnd.Math.min((value_0 + 50) / 100 | 0, 9);
    $append_1(buf, 48 + value_0 & $intern_4);
  }
   else if (count == 2) {
    value_0 = $wnd.Math.min((value_0 + 5) / 10 | 0, 99);
    $zeroPaddingNumber(buf, value_0, 2);
  }
   else {
    $zeroPaddingNumber(buf, value_0, 3);
    count > 3 && $zeroPaddingNumber(buf, 0, count - 3);
  }
}

function $formatMonth(buf, count, date){
  var value_0;
  value_0 = date.jsdate.getMonth();
  switch (count) {
    case 5:
      $append_4(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'])[value_0]);
      break;
    case 4:
      $append_4(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])[value_0]);
      break;
    case 3:
      $append_4(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])[value_0]);
      break;
    default:$zeroPaddingNumber(buf, value_0 + 1, count);
  }
}

function $formatYear(buf, count, date){
  var value_0;
  value_0 = date.jsdate.getFullYear() - 1900 + 1900;
  value_0 < 0 && (value_0 = -value_0);
  switch (count) {
    case 1:
      buf.string += value_0;
      break;
    case 2:
      $zeroPaddingNumber(buf, value_0 % 100, 2);
      break;
    default:$zeroPaddingNumber(buf, value_0, count);
  }
}

function $getNextCharCountInPattern(start_0){
  var ch_0, next;
  ch_0 = (checkCriticalStringElementIndex(start_0, 'yyyy-MM-dd HH:mm:ss'.length) , 'yyyy-MM-dd HH:mm:ss'.charCodeAt(start_0));
  next = start_0 + 1;
  while (next < 'yyyy-MM-dd HH:mm:ss'.length && (checkCriticalStringElementIndex(next, 'yyyy-MM-dd HH:mm:ss'.length) , 'yyyy-MM-dd HH:mm:ss'.charCodeAt(next) == ch_0)) {
    ++next;
  }
  return next - start_0;
}

function $identifyAbutStart(this$static){
  var abut, i, len;
  abut = false;
  len = this$static.patternParts.array.length;
  for (i = 0; i < len; i++) {
    if ($isNumeric(castTo($get_1(this$static.patternParts, i), 129))) {
      if (!abut && i + 1 < len && $isNumeric(castTo($get_1(this$static.patternParts, i + 1), 129))) {
        abut = true;
        castTo($get_1(this$static.patternParts, i), 129).abutStart = true;
      }
    }
     else {
      abut = false;
    }
  }
}

function $isNumeric(part){
  var i;
  if (part.count_0 <= 0) {
    return false;
  }
  i = $indexOf('MLydhHmsSDkK', fromCodePoint($charAt(part.text_0, 0)));
  return i > 1 || i >= 0 && part.count_0 < 3;
}

function $parsePattern(this$static){
  var buf, ch_0, count, i, inQuote;
  buf = new StringBuilder_0;
  inQuote = false;
  for (i = 0; i < 'yyyy-MM-dd HH:mm:ss'.length; i++) {
    ch_0 = (checkCriticalStringElementIndex(i, 'yyyy-MM-dd HH:mm:ss'.length) , 'yyyy-MM-dd HH:mm:ss'.charCodeAt(i));
    if (ch_0 == 32) {
      $addPart(this$static, buf, 0);
      buf.string += ' ';
      $addPart(this$static, buf, 0);
      while (i + 1 < 'yyyy-MM-dd HH:mm:ss'.length && (checkCriticalStringElementIndex(i + 1, 'yyyy-MM-dd HH:mm:ss'.length) , 'yyyy-MM-dd HH:mm:ss'.charCodeAt(i + 1) == 32)) {
        ++i;
      }
      continue;
    }
    if (inQuote) {
      if (ch_0 == 39) {
        if (i + 1 < 'yyyy-MM-dd HH:mm:ss'.length && (checkCriticalStringElementIndex(i + 1, 'yyyy-MM-dd HH:mm:ss'.length) , 'yyyy-MM-dd HH:mm:ss'.charCodeAt(i + 1) == 39)) {
          buf.string += String.fromCharCode(ch_0);
          ++i;
        }
         else {
          inQuote = false;
        }
      }
       else {
        buf.string += String.fromCharCode(ch_0);
      }
      continue;
    }
    if ($indexOf('GyMLdkHmsSEcDahKzZv', fromCodePoint(ch_0)) > 0) {
      $addPart(this$static, buf, 0);
      buf.string += String.fromCharCode(ch_0);
      count = $getNextCharCountInPattern(i);
      $addPart(this$static, buf, count);
      i += count - 1;
      continue;
    }
    if (ch_0 == 39) {
      if (i + 1 < 'yyyy-MM-dd HH:mm:ss'.length && (checkCriticalStringElementIndex(i + 1, 'yyyy-MM-dd HH:mm:ss'.length) , 'yyyy-MM-dd HH:mm:ss'.charCodeAt(i + 1) == 39)) {
        buf.string += "'";
        ++i;
      }
       else {
        inQuote = true;
      }
    }
     else {
      buf.string += String.fromCharCode(ch_0);
    }
  }
  $addPart(this$static, buf, 0);
  $identifyAbutStart(this$static);
}

function $subFormat(buf, ch_0, count, adjustedDate, adjustedTime, timezone){
  var value_0, value0, value1, value10, value2, value3, value4, value5, value6, value7, value8, value9;
  switch (ch_0) {
    case 71:
      value0 = adjustedDate.jsdate.getFullYear() - 1900 >= -1900?1:0;
      count >= 4?$append_4(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['Before Christ', 'Anno Domini'])[value0]):$append_4(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['BC', 'AD'])[value0]);
      break;
    case 121:
      $formatYear(buf, count, adjustedDate);
      break;
    case 77:
      $formatMonth(buf, count, adjustedDate);
      break;
    case 107:
      value1 = adjustedTime.jsdate.getHours();
      value1 == 0?$zeroPaddingNumber(buf, 24, count):$zeroPaddingNumber(buf, value1, count);
      break;
    case 83:
      $formatFractionalSeconds(buf, count, adjustedTime);
      break;
    case 69:
      value2 = adjustedDate.jsdate.getDay();
      count == 5?$append_4(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['S', 'M', 'T', 'W', 'T', 'F', 'S'])[value2]):count == 4?$append_4(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])[value2]):$append_4(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])[value2]);
      break;
    case 97:
      adjustedTime.jsdate.getHours() >= 12 && adjustedTime.jsdate.getHours() < 24?$append_4(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['AM', 'PM'])[1]):$append_4(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['AM', 'PM'])[0]);
      break;
    case 104:
      value3 = adjustedTime.jsdate.getHours() % 12;
      value3 == 0?$zeroPaddingNumber(buf, 12, count):$zeroPaddingNumber(buf, value3, count);
      break;
    case 75:
      value4 = adjustedTime.jsdate.getHours() % 12;
      $zeroPaddingNumber(buf, value4, count);
      break;
    case 72:
      value5 = adjustedTime.jsdate.getHours();
      $zeroPaddingNumber(buf, value5, count);
      break;
    case 99:
      value6 = adjustedDate.jsdate.getDay();
      count == 5?$append_4(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['S', 'M', 'T', 'W', 'T', 'F', 'S'])[value6]):count == 4?$append_4(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])[value6]):count == 3?$append_4(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])[value6]):$zeroPaddingNumber(buf, value6, 1);
      break;
    case 76:
      value7 = adjustedDate.jsdate.getMonth();
      count == 5?$append_4(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'])[value7]):count == 4?$append_4(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])[value7]):count == 3?$append_4(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])[value7]):$zeroPaddingNumber(buf, value7 + 1, count);
      break;
    case 81:
      value8 = adjustedDate.jsdate.getMonth() / 3 | 0;
      count < 4?$append_4(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['Q1', 'Q2', 'Q3', 'Q4'])[value8]):$append_4(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'])[value8]);
      break;
    case 100:
      value9 = adjustedDate.jsdate.getDate();
      $zeroPaddingNumber(buf, value9, count);
      break;
    case 109:
      value10 = adjustedTime.jsdate.getMinutes();
      $zeroPaddingNumber(buf, value10, count);
      break;
    case 115:
      value_0 = adjustedTime.jsdate.getSeconds();
      $zeroPaddingNumber(buf, value_0, count);
      break;
    case 122:
      count < 4?$append_4(buf, timezone.tzNames[0]):$append_4(buf, timezone.tzNames[1]);
      break;
    case 118:
      $append_4(buf, timezone.timezoneID);
      break;
    case 90:
      count < 3?$append_4(buf, $getRFCTimeZoneString(timezone)):count == 3?$append_4(buf, $getISOTimeZoneString(timezone)):$append_4(buf, composeGMTString(timezone.standardOffset));
      break;
    default:return false;
  }
  return true;
}

function $zeroPaddingNumber(buf, value_0, minWidth){
  var b, i;
  b = 10;
  for (i = 0; i < minWidth - 1; i++) {
    value_0 < b && (buf.string += '0' , buf);
    b *= 10;
  }
  buf.string += value_0;
}

defineClass(599, 1, {});
var Lorg_gwtproject_i18n_shared_DateTimeFormat_2_classLit = createForClass('org.gwtproject.i18n.shared', 'DateTimeFormat', 599);
function $clinit_DateTimeFormat_0(){
  $clinit_DateTimeFormat_0 = emptyMethod;
  $clinit_DateTimeFormat();
  cache = new HashMap;
}

function DateTimeFormat(){
  $clinit_DateTimeFormat();
  this.patternParts = new ArrayList;
  this.pattern = 'yyyy-MM-dd HH:mm:ss';
  $parsePattern(this);
}

function getFormat(dtfi){
  $clinit_DateTimeFormat_0();
  var defaultDtfi, dtf;
  defaultDtfi = new DefaultDateTimeFormatInfo;
  dtf = null;
  dtfi == defaultDtfi && (dtf = castTo($getStringValue(cache, 'yyyy-MM-dd HH:mm:ss'), 189));
  if (!dtf) {
    dtf = new DateTimeFormat;
    dtfi == defaultDtfi && $putStringValue(cache, 'yyyy-MM-dd HH:mm:ss', dtf);
  }
  return dtf;
}

defineClass(189, 599, {189:1}, DateTimeFormat);
var cache;
var Lorg_gwtproject_i18n_client_DateTimeFormat_2_classLit = createForClass('org.gwtproject.i18n.client', 'DateTimeFormat', 189);
function $getISOTimeZoneString(this$static){
  var data_0, offset;
  offset = -this$static.standardOffset;
  data_0 = stampJavaTypeInfo(getClassLiteralForArray(C_classLit, 1), $intern_21, 36, 15, [43, 48, 48, 58, 48, 48]);
  if (offset < 0) {
    data_0[0] = 45;
    offset = -offset;
  }
  data_0[1] = data_0[1] + ((offset / 60 | 0) / 10 | 0) & $intern_4;
  data_0[2] = data_0[2] + (offset / 60 | 0) % 10 & $intern_4;
  data_0[4] = data_0[4] + (offset % 60 / 10 | 0) & $intern_4;
  data_0[5] = data_0[5] + offset % 10 & $intern_4;
  return valueOf_2(data_0, 0, data_0.length);
}

function $getRFCTimeZoneString(this$static){
  var data_0, offset;
  offset = -this$static.standardOffset;
  data_0 = stampJavaTypeInfo(getClassLiteralForArray(C_classLit, 1), $intern_21, 36, 15, [43, 48, 48, 48, 48]);
  if (offset < 0) {
    data_0[0] = 45;
    offset = -offset;
  }
  data_0[1] = data_0[1] + ((offset / 60 | 0) / 10 | 0) & $intern_4;
  data_0[2] = data_0[2] + (offset / 60 | 0) % 10 & $intern_4;
  data_0[3] = data_0[3] + (offset % 60 / 10 | 0) & $intern_4;
  data_0[4] = data_0[4] + offset % 10 & $intern_4;
  return valueOf_2(data_0, 0, data_0.length);
}

function TimeZone(){
}

function composeGMTString(offset){
  var data_0;
  data_0 = stampJavaTypeInfo(getClassLiteralForArray(C_classLit, 1), $intern_21, 36, 15, [71, 77, 84, 45, 48, 48, 58, 48, 48]);
  if (offset <= 0) {
    data_0[3] = 43;
    offset = -offset;
  }
  data_0[4] = data_0[4] + ((offset / 60 | 0) / 10 | 0) & $intern_4;
  data_0[5] = data_0[5] + (offset / 60 | 0) % 10 & $intern_4;
  data_0[7] = data_0[7] + (offset % 60 / 10 | 0) & $intern_4;
  data_0[8] = data_0[8] + offset % 10 & $intern_4;
  return valueOf_2(data_0, 0, data_0.length);
}

function composePOSIXTimeZoneID(offset){
  var str;
  if (offset == 0) {
    return 'Etc/GMT';
  }
  if (offset < 0) {
    offset = -offset;
    str = 'Etc/GMT-';
  }
   else {
    str = 'Etc/GMT+';
  }
  return str + offsetDisplay(offset);
}

function composeUTCString(offset){
  var str;
  if (offset == 0) {
    return 'UTC';
  }
  if (offset < 0) {
    offset = -offset;
    str = 'UTC+';
  }
   else {
    str = 'UTC-';
  }
  return str + offsetDisplay(offset);
}

function createTimeZone(timeZoneOffsetInMinutes){
  var tz;
  tz = new TimeZone;
  tz.standardOffset = timeZoneOffsetInMinutes;
  tz.timezoneID = composePOSIXTimeZoneID(timeZoneOffsetInMinutes);
  tz.tzNames = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 2, 6, 1);
  tz.tzNames[0] = composeUTCString(timeZoneOffsetInMinutes);
  tz.tzNames[1] = composeUTCString(timeZoneOffsetInMinutes);
  return tz;
}

function offsetDisplay(offset){
  var hour, mins;
  hour = offset / 60 | 0;
  mins = offset % 60;
  if (mins == 0) {
    return '' + hour;
  }
  return '' + hour + ':' + ('' + mins);
}

defineClass(672, 1, {}, TimeZone);
_.standardOffset = 0;
var Lorg_gwtproject_i18n_client_TimeZone_2_classLit = createForClass('org.gwtproject.i18n.client', 'TimeZone', 672);
function DateTimeFormat$PatternPart(txt, cnt){
  this.text_0 = txt;
  this.count_0 = cnt;
  this.abutStart = false;
}

defineClass(129, 1, {129:1}, DateTimeFormat$PatternPart);
_.abutStart = false;
_.count_0 = 0;
var Lorg_gwtproject_i18n_shared_DateTimeFormat$PatternPart_2_classLit = createForClass('org.gwtproject.i18n.shared', 'DateTimeFormat/PatternPart', 129);
function $clinit_LocaleInfo(){
  $clinit_LocaleInfo = emptyMethod;
  instance_2 = new LocaleInfo;
}

function $getNumberConstants(this$static){
  !this$static.numberConstants && (this$static.numberConstants = new NumberConstantsImpl);
  return this$static.numberConstants;
}

function LocaleInfo(){
}

defineClass(499, 1, {}, LocaleInfo);
var instance_2;
var Lorg_gwtproject_i18n_shared_cldr_LocaleInfo_2_classLit = createForClass('org.gwtproject.i18n.shared.cldr', 'LocaleInfo', 499);
function DefaultDateTimeFormatInfo(){
}

defineClass(239, 1, {}, DefaultDateTimeFormatInfo);
var Lorg_gwtproject_i18n_shared_cldr_impl_DefaultDateTimeFormatInfo_2_classLit = createForClass('org.gwtproject.i18n.shared.cldr.impl', 'DefaultDateTimeFormatInfo', 239);
function NumberConstantsImpl(){
}

defineClass(583, 1, {}, NumberConstantsImpl);
var Lorg_gwtproject_i18n_shared_cldr_impl_NumberConstantsImpl_2_classLit = createForClass('org.gwtproject.i18n.shared.cldr.impl', 'NumberConstantsImpl', 583);
function $getGroup(this$static, index_0){
  return castToString(this$static.array[index_0]);
}

function NativeMatchResult(results){
  this.array = results;
}

defineClass(783, 1, {}, NativeMatchResult);
var Lorg_gwtproject_regexp_client_NativeMatchResult_2_classLit = createForClass('org.gwtproject.regexp.client', 'NativeMatchResult', 783);
function NativeRegExp(){
  this.jsRegExp = new $wnd.RegExp;
  this.jsRegExp.compile('^((.*:)//([a-z0-9\\-.]+)(|:[0-9]+)/)(.*)$');
}

defineClass(246, 1, {}, NativeRegExp);
var Lorg_gwtproject_regexp_client_NativeRegExp_2_classLit = createForClass('org.gwtproject.regexp.client', 'NativeRegExp', 246);
function $appendHtmlConstant(this$static, html){
  $append_4(this$static.sb, html);
  return this$static;
}

function SafeHtmlBuilder(){
  this.sb = new StringBuilder;
}

defineClass(240, 1, {}, SafeHtmlBuilder);
var Lorg_gwtproject_safehtml_shared_SafeHtmlBuilder_2_classLit = createForClass('org.gwtproject.safehtml.shared', 'SafeHtmlBuilder', 240);
function SafeHtmlString(html){
  if (html == null) {
    throw toJs(new NullPointerException_1('html is null'));
  }
  this.html = html;
}

defineClass(164, 1, {4:1, 855:1, 164:1}, SafeHtmlString);
_.equals_0 = function equals_15(obj){
  if (!instanceOf(obj, 164)) {
    return false;
  }
  return $equals_1(this.html, castTo(obj, 855).html);
}
;
_.hashCode_1 = function hashCode_19(){
  return $hashCode_1(this.html);
}
;
_.toString_0 = function toString_25(){
  return 'safe: "' + this.html + '"';
}
;
var Lorg_gwtproject_safehtml_shared_SafeHtmlString_2_classLit = createForClass('org.gwtproject.safehtml.shared', 'SafeHtmlString', 164);
function Timer$lambda$0$Type(timer_0){
  this.timer_0 = timer_0;
}

defineClass(880, $wnd.Function, {}, Timer$lambda$0$Type);
_.onInvoke_0 = function onInvoke_9(arg0){
  lambda$0_5(this.timer_0);
}
;
function Timer$lambda$1$Type(timer_0){
  this.timer_0 = timer_0;
}

defineClass(881, $wnd.Function, {}, Timer$lambda$1$Type);
_.onInvoke_0 = function onInvoke_10(arg0){
  lambda$1_1(this.timer_0);
}
;
function $attr_0(this$static, name_0, value_0){
  this$static.element.setAttribute(name_0, value_0);
  return this$static.that();
}

function $css_1(this$static, classes){
  var c, c$array, c$index, c$max, failSafeClass, failSafeClass$iterator, failSafeClasses;
  failSafeClasses = new ArrayList;
  for (c$array = classes , c$index = 0 , c$max = c$array.length; c$index < c$max; ++c$index) {
    c = c$array[c$index];
    c != null && (c.indexOf(' ') != -1?$addAll_0(failSafeClasses, new Arrays$ArrayList($split_0(c, ' ', 0))):(push_1(failSafeClasses.array, c) , true));
  }
  for (failSafeClass$iterator = new ArrayList$1(failSafeClasses); failSafeClass$iterator.i < failSafeClass$iterator.this$01.array.length;) {
    failSafeClass = castToString($next_0(failSafeClass$iterator));
    this$static.element.classList.add(failSafeClass);
  }
  return this$static.that();
}

function ElementBuilder(element){
  this.element = requireNonNull(element);
}

defineClass(157, 1, $intern_31);
_.element_3 = function element_33(){
  return this.element;
}
;
var Lorg_jboss_elemento_ElementBuilder_2_classLit = createForClass('org.jboss.elemento', 'ElementBuilder', 157);
function img(src_0){
  return castTo($attr_0(new EmptyContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('img'), $wnd.HTMLElement)), 'src', src_0), 71);
}

function input_1(type_0){
  var el;
  el = castToNative(castToNative(($clinit_DomGlobal() , document_0).createElement('input'), $wnd.HTMLElement), $wnd.HTMLInputElement);
  el.type = type_0;
  return new InputBuilder(el);
}

function EmptyContentBuilder(element){
  ElementBuilder.call(this, element);
}

defineClass(71, 157, {71:1, 15:1}, EmptyContentBuilder);
_.that = function that_0(){
  return this;
}
;
var Lorg_jboss_elemento_EmptyContentBuilder_2_classLit = createForClass('org.jboss.elemento', 'EmptyContentBuilder', 71);
function $clinit_EventType(){
  $clinit_EventType = emptyMethod;
  new EventType('online');
  new EventType('offline');
  new EventType('focus');
  new EventType('blur');
  new EventType('pagehide');
  new EventType('pageshow');
  new EventType('popstate');
  new EventType('reset');
  new EventType('submit');
  new EventType('beforeprint');
  new EventType('afterprint');
  new EventType('compositionstart');
  new EventType('compositionupdate');
  new EventType('compositionend');
  new EventType('fullscreenchange');
  new EventType('fullscreenerror');
  new EventType('resize');
  new EventType('scroll');
  new EventType('cut');
  new EventType('copy');
  new EventType('paste');
  keydown = new EventType('keydown');
  keypress = new EventType('keypress');
  new EventType('keyup');
  new EventType('mouseenter');
  new EventType('mouseover');
  new EventType('mousemove');
  mousedown = new EventType('mousedown');
  new EventType('mouseup');
  new EventType('auxclick');
  click_0 = new EventType('click');
  new EventType('dblclick');
  new EventType('contextmenu');
  new EventType('wheel');
  new EventType('mouseleave');
  new EventType('mouseout');
  new EventType('pointerlockchange');
  new EventType('pointerlockerror');
  new EventType('dragstart');
  new EventType('drag');
  new EventType('dragend');
  new EventType('dragenter');
  new EventType('dragover');
  new EventType('dragleave');
  new EventType('drop');
  new EventType('touchcancel');
  touchend = new EventType('touchend');
  touchmove = new EventType('touchmove');
  new EventType('touchstart');
  new EventType('hashchange');
  new EventType('input');
  new EventType('readystatechange');
  new EventType('change');
  new EventType('search');
  new EventType('invalid');
  new EventType('show');
  new EventType('message');
  new EventType('storage');
  new EventType('load');
  new EventType('visibilitychange');
}

function EventType(name_0){
  this.name_0 = name_0;
}

defineClass(11, 1, {}, EventType);
var click_0, keydown, keypress, mousedown, touchend, touchmove;
var Lorg_jboss_elemento_EventType_2_classLit = createForClass('org.jboss.elemento', 'EventType', 11);
function $textContent_0(this$static, text_0){
  return this$static.element.textContent = text_0 , this$static;
}

function HtmlContentBuilder(element){
  ElementBuilder.call(this, element);
}

defineClass(6, 157, {6:1, 15:1}, HtmlContentBuilder);
_.that = function that_1(){
  return this;
}
;
var Lorg_jboss_elemento_HtmlContentBuilder_2_classLit = createForClass('org.jboss.elemento', 'HtmlContentBuilder', 6);
function InputBuilder(element){
  ElementBuilder.call(this, element);
}

defineClass(677, 157, $intern_31, InputBuilder);
_.that = function that_2(){
  return this;
}
;
var Lorg_jboss_elemento_InputBuilder_2_classLit = createForClass('org.jboss.elemento', 'InputBuilder', 677);
function TextContentBuilder(element){
  ElementBuilder.call(this, element);
}

defineClass(730, 157, $intern_31, TextContentBuilder);
_.that = function that_3(){
  return this;
}
;
var Lorg_jboss_elemento_TextContentBuilder_2_classLit = createForClass('org.jboss.elemento', 'TextContentBuilder', 730);
function $clinit_FormattingTuple(){
  $clinit_FormattingTuple = emptyMethod;
  new FormattingTuple;
}

function FormattingTuple(){
  FormattingTuple_0.call(this, null, null);
}

function FormattingTuple_0(message, throwable){
  $clinit_FormattingTuple();
  this.message_0 = message;
  this.throwable = throwable;
}

defineClass(93, 1, {93:1}, FormattingTuple, FormattingTuple_0);
var Lorg_slf4j_helpers_FormattingTuple_2_classLit = createForClass('org.slf4j.helpers', 'FormattingTuple', 93);
function arrayFormat(argArray){
  var L, i, j, sbuf, seenSet, throwableCandidate;
  throwableCandidate = getThrowableCandidate(argArray);
  sbuf = new StringBuilder_0;
  seenSet = null;
  i = 0;
  for (L = 0; L < argArray.length; L++) {
    j = 'could not execute request on server: '.indexOf('{}', i);
    if (j == -1) {
      if (i == 0) {
        return new FormattingTuple_0('could not execute request on server: ', throwableCandidate);
      }
       else {
        $append_4(sbuf, $substring_0('could not execute request on server: ', i, 'could not execute request on server: '.length));
        return new FormattingTuple_0(sbuf.string, throwableCandidate);
      }
    }
     else {
      if (isEscapedDelimeter(j)) {
        if (j >= 2 && (checkCriticalStringElementIndex(j - 2, 'could not execute request on server: '.length) , 'could not execute request on server: '.charCodeAt(j - 2) == 92)) {
          $append_4(sbuf, (checkCriticalStringBounds(i, j - 1, 'could not execute request on server: '.length) , 'could not execute request on server: '.substr(i, j - 1 - i)));
          !seenSet && (seenSet = new HashSet);
          deeplyAppendParameter(sbuf, argArray[L], seenSet);
          i = j + 2;
        }
         else {
          --L;
          $append_4(sbuf, (checkCriticalStringBounds(i, j - 1, 'could not execute request on server: '.length) , 'could not execute request on server: '.substr(i, j - 1 - i)));
          sbuf.string += '{';
          i = j + 1;
        }
      }
       else {
        $append_4(sbuf, (checkCriticalStringBounds(i, j, 'could not execute request on server: '.length) , 'could not execute request on server: '.substr(i, j - i)));
        !seenSet && (seenSet = new HashSet);
        deeplyAppendParameter(sbuf, argArray[L], seenSet);
        i = j + 2;
      }
    }
  }
  $append_4(sbuf, $substring_0('could not execute request on server: ', i, 'could not execute request on server: '.length));
  return L < argArray.length - 1?new FormattingTuple_0(sbuf.string, throwableCandidate):new FormattingTuple_0(sbuf.string, null);
}

function booleanArrayAppend(sbuf, a){
  var i, len;
  len = a.length;
  for (i = 0; i < len; i++) {
    sbuf.string += a[i];
    i != len - 1 && (sbuf.string += ', ' , sbuf);
  }
}

function byteArrayAppend(sbuf, a){
  var i, len;
  len = a.length;
  for (i = 0; i < len; i++) {
    $append_2(sbuf, a[i]);
    i != len - 1 && (sbuf.string += ', ' , sbuf);
  }
}

function charArrayAppend(sbuf, a){
  var i, len;
  len = a.length;
  for (i = 0; i < len; i++) {
    $append_1(sbuf, a[i]);
    i != len - 1 && (sbuf.string += ', ' , sbuf);
  }
}

function deeplyAppendParameter(sbuf, o, seenSet){
  if (o == null) {
    sbuf.string += 'null';
  }
   else if ((getClass__Ljava_lang_Class___devirtual$(o).modifiers & 4) != 0) {
    sbuf.string += '[';
    instanceOf(o, 857)?booleanArrayAppend(sbuf, castTo(o, 857)):instanceOf(o, 858)?byteArrayAppend(sbuf, castTo(o, 858)):instanceOf(o, 104)?charArrayAppend(sbuf, castTo(o, 104)):instanceOf(o, 859)?shortArrayAppend(sbuf, castTo(o, 859)):instanceOf(o, 55)?intArrayAppend(sbuf, castTo(o, 55)):instanceOf(o, 248)?longArrayAppend(sbuf, castTo(o, 248)):instanceOf(o, 860)?floatArrayAppend(sbuf, castTo(o, 860)):instanceOf(o, 861)?doubleArrayAppend(sbuf, castTo(o, 861)):objectArrayAppend(sbuf, castToArray(o), seenSet);
    sbuf.string += ']';
  }
   else {
    safeObjectAppend(sbuf, o);
  }
}

function doubleArrayAppend(sbuf, a){
  var i, len;
  len = a.length;
  for (i = 0; i < len; i++) {
    sbuf.string += a[i];
    i != len - 1 && (sbuf.string += ', ' , sbuf);
  }
}

function floatArrayAppend(sbuf, a){
  var i, len;
  len = a.length;
  for (i = 0; i < len; i++) {
    sbuf.string += a[i];
    i != len - 1 && (sbuf.string += ', ' , sbuf);
  }
}

function getThrowableCandidate(argArray){
  var lastEntry;
  if (argArray.length == 0) {
    return null;
  }
  lastEntry = argArray[argArray.length - 1];
  if (instanceOf(lastEntry, 9)) {
    return castTo(lastEntry, 9);
  }
  return null;
}

function intArrayAppend(sbuf, a){
  var i, len;
  len = a.length;
  for (i = 0; i < len; i++) {
    $append_2(sbuf, a[i]);
    i != len - 1 && (sbuf.string += ', ' , sbuf);
  }
}

function isEscapedDelimeter(delimeterStartIndex){
  var potentialEscape;
  if (delimeterStartIndex == 0) {
    return false;
  }
  potentialEscape = (checkCriticalStringElementIndex(delimeterStartIndex - 1, 'could not execute request on server: '.length) , 'could not execute request on server: '.charCodeAt(delimeterStartIndex - 1));
  return potentialEscape == 92;
}

function longArrayAppend(sbuf, a){
  var i, len;
  len = a.length;
  for (i = 0; i < len; i++) {
    sbuf.string += toString_6(a[i]);
    i != len - 1 && (sbuf.string += ', ' , sbuf);
  }
}

function objectArrayAppend(sbuf, a, seenSet){
  var i, len;
  if (seenSet.contains(a)) {
    sbuf.string += '...';
  }
   else {
    seenSet.add(a);
    len = a.length;
    for (i = 0; i < len; i++) {
      deeplyAppendParameter(sbuf, a[i], seenSet);
      i != len - 1 && (sbuf.string += ', ' , sbuf);
    }
    seenSet.remove(a);
  }
}

function safeObjectAppend(sbuf, o){
  try {
    $append_4(sbuf, toString_7(o));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 9)) {
      sbuf.string += '[FAILED toString()]';
    }
     else 
      throw toJs($e0);
  }
}

function shortArrayAppend(sbuf, a){
  var i, len;
  len = a.length;
  for (i = 0; i < len; i++) {
    $append_2(sbuf, a[i]);
    i != len - 1 && (sbuf.string += ', ' , sbuf);
  }
}

var C_classLit = createForPrimitive('char', 'C');
var I_classLit = createForPrimitive('int', 'I');
var D_classLit = createForPrimitive('double', 'D');
var Lcom_itangsoft_notebook_service_MenuService_2_classLit = createForInterface('com.itangsoft.notebook.service', 'MenuService');
var Ljava_lang_Void_2_classLit = createForClass('java.lang', 'Void', null);
var Lcom_itangsoft_notebook_service_FileService_2_classLit = createForInterface('com.itangsoft.notebook.service', 'FileService');
_ = provide('java.io.Serializable');
_.$isInstance = $isInstance;
$clinit_Boolean();
_ = provide('java.lang.Boolean');
_.$isInstance = $isInstance_0;
_ = provide('java.lang.CharSequence');
_.$isInstance = $isInstance_1;
_ = provide('java.lang.Cloneable');
_.$isInstance = $isInstance_2;
_ = provide('java.lang.Comparable');
_.$isInstance = $isInstance_3;
_ = provide('java.lang.Double');
_.$isInstance = $isInstance_5;
_ = provide('java.lang.Number');
_.$isInstance = $isInstance_4;
_ = provide('java.lang.String');
_.$isInstance = $isInstance_6;
_ = provide('java.lang.Throwable');
_.of = of;
_ = provide('javaemul.internal.HashCodes', HashCodes);
_.getIdentityHashCode = getIdentityHashCode;
_.getNextHash = getNextHash;
_.getObjectIdentityHashCode = getObjectIdentityHashCode;
_ = provide('javaemul.internal.JsUtils');
_.toDoubleFromUnsignedInt = toDoubleFromUnsignedInt;
_ = provide('org.gwtproject.core.client.GWT');
_.fromObject = fromObject;
var $entry = ($clinit_Impl() , entry_1);
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'gecko1_8']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=notebook-0.js

