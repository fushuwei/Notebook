var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.notebook;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.10.0";
var $strongName = '44860BF6633B6BA3EA3A604FD22C1D91';
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
var $intern_0 = {4:1}, $intern_1 = 2147483647, $intern_2 = {4:1, 18:1, 15:1, 12:1}, $intern_3 = {4:1, 8:1}, $intern_4 = 65535, $intern_5 = {130:1}, $intern_6 = {159:1}, $intern_7 = {7:1}, $intern_8 = {62:1, 4:1, 18:1, 12:1}, $intern_9 = 4194303, $intern_10 = 1048575, $intern_11 = 524288, $intern_12 = 4194304, $intern_13 = 17592186044416, $intern_14 = -17592186044416, $intern_15 = {4:1, 65:1, 12:1}, $intern_16 = {9:1, 13:1}, $intern_17 = {37:1, 95:1}, $intern_18 = {37:1, 32:1}, $intern_19 = {21:1}, $intern_20 = {4:1, 37:1, 32:1}, $intern_21 = {4:1, 37:1, 95:1}, $intern_22 = {64:1}, $intern_23 = {13:1}, $intern_24 = {84:1}, $intern_25 = {9:1, 96:1, 13:1}, $intern_26 = {131:1, 80:1, 9:1, 13:1}, $intern_27 = {46:1};
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

function toString_14(object){
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
  return instanceOfString(this$static)?$equals_1(this$static, other):instanceOfDouble(this$static)?(checkCriticalNotNull(this$static) , maskUndefined(this$static) === maskUndefined(other)):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , maskUndefined(this$static) === maskUndefined(other)):hasJavaObjectVirtualDispatch(this$static)?this$static.equals_0(other):isJavaArray(this$static)?$equals(this$static, other):$equals_0(this$static, other);
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return instanceOfString(this$static)?Ljava_lang_String_2_classLit:instanceOfDouble(this$static)?Ljava_lang_Double_2_classLit:instanceOfBoolean(this$static)?Ljava_lang_Boolean_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz:isJavaArray(this$static)?this$static.___clazz:this$static.___clazz || Array.isArray(this$static) && getClassLiteralForArray(Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, 1) || Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return instanceOfString(this$static)?$hashCode_2(this$static):instanceOfDouble(this$static)?$hashCode_1(this$static):instanceOfBoolean(this$static)?$hashCode_0(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode_0():isJavaArray(this$static)?getObjectIdentityHashCode(this$static):$hashCode(this$static);
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
_.hashCode_0 = function hashCode_0(){
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
  return this.hashCode_0();
}
;
_.toString = function(){
  return this.toString_0();
}
;
function $equals_0(this$static, other){
  return !!this$static && !!this$static.equals?this$static.equals(other):maskUndefined(this$static) === maskUndefined(other);
}

function $hashCode(this$static){
  return !!this$static && !!this$static.hashCode?this$static.hashCode():getObjectIdentityHashCode(this$static);
}

function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !supportsErrorStack();
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector_0 = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(error){
  $clinit_StackTraceCreator();
  collector_0.collect(error);
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

var collector_0;
defineClass(635, 1, {});
function StackTraceCreator$CollectorLegacy(){
}

defineClass(213, 635, {}, StackTraceCreator$CollectorLegacy);
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
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_0, 57, length_0, 0, 1);
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

defineClass(636, 635, {});
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
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_0, 57, 0, 0, 1);
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

defineClass(214, 636, {}, StackTraceCreator$CollectorModernNoSourceMap);
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

function castToBoolean(src_0){
  checkCriticalType(src_0 == null || instanceOfBoolean(src_0));
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
  return Math.max(Math.min(x_0, $intern_1), -2147483648) | 0;
}

function throwClassCastExceptionUnlessNull(o){
  checkCriticalType(o == null);
  return o;
}

var booleanCastMap, doubleCastMap, stringCastMap;
function toJava(e){
  var javaException;
  if (instanceOf(e, 12)) {
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

function $hashCode_0(this$static){
  return (checkCriticalNotNull(this$static) , this$static)?1231:1237;
}

function $isInstance_0(instance){
  $clinit_Boolean();
  return $equals_1('boolean', typeof(instance));
}

booleanCastMap = {4:1, 210:1, 28:1};
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
  if (clazz.isArray_1()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_1()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
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

defineClass(162, 1, {}, Class);
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
_.isArray_1 = function isArray_1(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString_0 = function toString_16(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
function $isInstance_4(instance){
  return $equals_1('number', typeof(instance)) || instanceOfNative(instance, $wnd.java.lang.Number$impl);
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
  isTooLow = toReturn < -2147483648;
  if (isNaN(toReturn)) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
   else if (isTooLow || toReturn > $intern_1) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
  return toReturn;
}

defineClass(134, 1, {4:1, 134:1});
function $doubleValue(this$static){
  return checkCriticalNotNull(this$static) , this$static;
}

function $hashCode_1(this$static){
  return round_int((checkCriticalNotNull(this$static) , this$static));
}

function $intValue(this$static){
  return round_int((checkCriticalNotNull(this$static) , this$static));
}

function $isInstance_5(instance){
  return $equals_1('number', typeof(instance));
}

doubleCastMap = {4:1, 28:1, 134:1};
function $$init(this$static){
  this$static.stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_0, 57, 0, 0, 1);
}

function $addSuppressed(this$static, exception){
  checkCriticalNotNull_0(exception);
  checkCriticalArgument(exception != this$static, 'Exception can not suppress itself.');
  if (this$static.disableSuppression) {
    return;
  }
  this$static.suppressedExceptions == null?(this$static.suppressedExceptions = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Throwable_2_classLit, 1), $intern_0, 12, 0, [exception])):(this$static.suppressedExceptions[this$static.suppressedExceptions.length] = exception);
}

function $fillInStackTrace(this$static){
  if (this$static.writableStackTrace) {
    this$static.backingJsObject !== '__noinit__' && this$static.initializeBackingError();
    this$static.stackTrace = null;
  }
  return this$static;
}

function $initCause(this$static, cause){
  checkCriticalState_0(!this$static.cause_0);
  checkCriticalArgument(true, 'Self-causation not permitted');
  this$static.cause_0 = cause;
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
  for (t$array = (this$static.suppressedExceptions == null && (this$static.suppressedExceptions = initUnidimensionalArray(Ljava_lang_Throwable_2_classLit, $intern_0, 12, 0, 0, 1)) , this$static.suppressedExceptions) , t$index = 0 , t$max = t$array.length; t$index < t$max; ++t$index) {
    t = t$array[t$index];
    $printStackTraceImpl(t, out, '\t' + ident);
  }
  theCause = this$static.cause_0;
  !!theCause && $printStackTraceImpl(theCause, out, ident);
}

function $printStackTraceItems(this$static){
  var element$array, element$index, element$max, stackTrace;
  for (element$array = (this$static.stackTrace == null && (this$static.stackTrace = ($clinit_StackTraceCreator() , stackTrace = collector_0.getStackTrace(this$static) , dropInternalFrames(stackTrace))) , this$static.stackTrace) , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index) {
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

function Throwable(message, cause){
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

defineClass(12, 1, {4:1, 12:1});
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
  suppressed = (this.suppressedExceptions == null && (this.suppressedExceptions = initUnidimensionalArray(Ljava_lang_Throwable_2_classLit, $intern_0, 12, 0, 0, 1)) , this.suppressedExceptions);
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

defineClass(18, 12, {4:1, 18:1, 12:1});
function RuntimeException(){
  $$init(this);
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function RuntimeException_0(message){
  Exception.call(this, message);
}

function RuntimeException_1(message, cause){
  Throwable.call(this, message, cause);
}

function RuntimeException_2(cause){
  $$init(this);
  this.detailMessage = !cause?null:$toString(cause, cause.getMessage());
  this.cause_0 = cause;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(15, 18, $intern_2, RuntimeException_2);
function IndexOutOfBoundsException(message){
  RuntimeException_0.call(this, message);
}

defineClass(66, 15, $intern_2, IndexOutOfBoundsException);
function JsException(backingJsObject){
  $$init(this);
  $fillInStackTrace(this);
  this.backingJsObject = backingJsObject;
  $linkBack(this, backingJsObject);
  this.detailMessage = backingJsObject == null?'null':toString_14(backingJsObject);
}

defineClass(97, 15, $intern_2, JsException);
function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(typeError){
  JsException.call(this, typeError);
}

function NullPointerException_1(message){
  RuntimeException_0.call(this, message);
}

defineClass(47, 97, $intern_2, NullPointerException, NullPointerException_0, NullPointerException_1);
_.createError = function createError_0(msg){
  return new TypeError(msg);
}
;
function $charAt(this$static, index_0){
  checkCriticalStringElementIndex(index_0, this$static.length);
  return this$static.charCodeAt(index_0);
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

function $hashCode_2(this$static){
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
  regex = $replaceAll(from, '([/\\\\\\.\\*\\+\\?\\|\\(\\)\\[\\]\\{\\}$^])', '\\\\$1');
  replacement = $replaceAll($replaceAll(to, '\\\\', '\\\\\\\\'), '\\$', '\\\\$');
  return $replaceAll(this$static, regex, replacement);
}

function $replaceAll(this$static, regex, replace){
  replace = translateReplaceString(replace);
  return this$static.replace(new RegExp(regex, 'g'), replace);
}

function $split_0(this$static, regex){
  var compiled, count, lastNonEmpty, lastTrail, matchIndex, matchObj, out, trail;
  compiled = new RegExp(regex, 'g');
  out = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 6, 1);
  count = 0;
  trail = this$static;
  lastTrail = null;
  while (true) {
    matchObj = compiled.exec(trail);
    if (matchObj == null || trail == '') {
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
  if (this$static.length > 0) {
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

function $toString_1(this$static){
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
  return x_0 == null?'null':toString_14(x_0);
}

function valueOf_1(x_0){
  return valueOf_2(x_0, x_0.length);
}

function valueOf_2(x_0, count){
  var batchEnd, batchStart, end, s;
  end = count;
  checkCriticalStringBounds(0, end, x_0.length);
  s = '';
  for (batchStart = 0; batchStart < end;) {
    batchEnd = $wnd.Math.min(batchStart + 10000, end);
    s += fromCharCode(x_0.slice(batchStart, batchEnd));
    batchStart = batchEnd;
  }
  return s;
}

stringCastMap = {4:1, 202:1, 28:1, 2:1};
function StringIndexOutOfBoundsException(message){
  IndexOutOfBoundsException.call(this, message);
}

defineClass(170, 66, $intern_2, StringIndexOutOfBoundsException);
function clone(array){
  var result;
  result = array.slice();
  return stampJavaTypeInfo_0(result, array);
}

function copy(src_0, srcOfs, dest, destOfs, len){
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
    spliceArgs.splice(0, 0, destOfs, 0);
    Array.prototype.splice.apply(destArray, spliceArgs);
    batchStart = batchEnd;
    destOfs += len;
  }
}

function insertTo(array, index_0, value_0){
  array.splice(index_0, 0, value_0);
}

function insertTo_0(array, index_0, values){
  copy(values, 0, array, index_0, values.length);
}

function push_1(array, o){
  array.push(o);
}

function removeFrom(array, index_0, deleteCount){
  array.splice(index_0, deleteCount);
}

defineClass(1314, 1, {});
function HashCodes(){
}

function getIdentityHashCode(o){
  switch (typeof(o)) {
    case 'string':
      return $hashCode_2(o);
    case 'number':
      return $hashCode_1(o);
    case 'boolean':
      return $hashCode_0(o);
    default:return o == null?0:getObjectIdentityHashCode(o);
  }
}

function getNextHash(){
  return ++nextHash;
}

function getObjectIdentityHashCode(o){
  return o.$H || (o.$H = ++nextHash);
}

defineClass(632, 1, {}, HashCodes);
var nextHash = 0;
function checkCriticalArgument(expression, errorMessage){
  if (!expression) {
    throw toJs(new IllegalArgumentException_0(errorMessage));
  }
}

function checkCriticalArrayType(expression){
  if (!expression) {
    throw toJs(new ArrayStoreException);
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
    throw toJs(new IndexOutOfBoundsException('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalNotNull(reference){
  if (reference == null) {
    throw toJs(new NullPointerException);
  }
  return reference;
}

function checkCriticalNotNull_0(reference){
  if (!reference) {
    throw toJs(new NullPointerException_1('Cannot suppress a null exception.'));
  }
}

function checkCriticalPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw toJs(new IndexOutOfBoundsException('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalPositionIndexes(start_0, end, size_0){
  if (start_0 < 0 || end > size_0) {
    throw toJs(new IndexOutOfBoundsException('fromIndex: ' + start_0 + ', toIndex: ' + end + ', size: ' + size_0));
  }
  if (start_0 > end) {
    throw toJs(new IllegalArgumentException_0('fromIndex: ' + start_0 + ' > toIndex: ' + end));
  }
}

function checkCriticalState(expression){
  if (!expression) {
    throw toJs(new IllegalStateException);
  }
}

function checkCriticalState_0(expression){
  if (!expression) {
    throw toJs(new IllegalStateException_0("Can't overwrite cause"));
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

defineClass(633, 1, {});
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1);
var Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 635);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 213);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 636);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 214);
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 210);
var Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 162);
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 134);
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 631);
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 12);
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 18);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 15);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 66);
var Ljava_lang_JsException_2_classLit = createForClass('java.lang', 'JsException', 97);
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 47);
var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
var Ljava_lang_StringIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'StringIndexOutOfBoundsException', 170);
var Ljavaemul_internal_HashCodes_2_classLit = createForClass('javaemul.internal', 'HashCodes', 632);
var Ljavaemul_internal_JsUtils_2_classLit = createForClass('javaemul.internal', 'JsUtils', 633);
function match_1(route, withRoute){
  return $match_1((!instance_1 && (instance_1 = new RouterUtils) , route), withRoute);
}

defineClass(645, 1, {});
_.toString_0 = function toString_2(){
  return 'An event type';
}
;
var Lorg_gwtproject_event_shared_Event_2_classLit = createForClass('org.gwtproject.event.shared', 'Event', 645);
function $clinit_LogEvent(){
  $clinit_LogEvent = emptyMethod;
  TYPE = new Event$Type;
}

function $addMessage(this$static, message){
  $add(this$static.messages, message);
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

defineClass(35, 645, {}, LogEvent);
_.dispatch = function dispatch(handler){
  $dispatch(this, castTo(handler, 659));
}
;
_.getAssociatedType = function getAssociatedType(){
  return TYPE;
}
;
_.sdmOnly = false;
var TYPE;
var Lcom_github_nalukit_nalu_client_application_event_LogEvent_2_classLit = createForClass('com.github.nalukit.nalu.client.application.event', 'LogEvent', 35);
defineClass(652, 1, {});
var Lcom_github_nalukit_nalu_client_component_AbstractCommonComponent_2_classLit = createForClass('com.github.nalukit.nalu.client.component', 'AbstractCommonComponent', 652);
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

defineClass(123, 652, {});
var Lcom_github_nalukit_nalu_client_component_AbstractComponent_2_classLit = createForClass('com.github.nalukit.nalu.client.component', 'AbstractComponent', 123);
function $setContext(this$static, context){
  this$static.context = context;
}

function $setRouter(this$static, router){
  this$static.router = router;
}

defineClass(651, 1, {});
var Lcom_github_nalukit_nalu_client_component_AbstractController_2_classLit = createForClass('com.github.nalukit.nalu.client.component', 'AbstractController', 651);
function $bind(loader){
  lambda$0(loader.controllerCreator_0, loader.controllerInstance_1, loader.callback_2);
}

function $setActivateNaluCommand(this$static, activateNaluCommand){
  this$static.activateNaluCommand = activateNaluCommand;
}

function $unbind(continueUnloadCommand){
  $handleUnbindCallBack(continueUnloadCommand.$$outer_0, continueUnloadCommand.hash_1, continueUnloadCommand.routeResult_2, continueUnloadCommand.routeConfigurations_3);
}

defineClass(48, 651, {48:1});
_.cached = false;
var Lcom_github_nalukit_nalu_client_component_AbstractComponentController_2_classLit = createForClass('com.github.nalukit.nalu.client.component', 'AbstractComponentController', 48);
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

defineClass(143, 1, {});
var Lcom_github_nalukit_nalu_client_component_AbstractShell_2_classLit = createForClass('com.github.nalukit.nalu.client.component', 'AbstractShell', 143);
function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal_0 = ordinal;
}

defineClass(17, 1, {4:1, 28:1, 17:1});
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
_.hashCode_0 = function(){
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
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 17);
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
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_github_nalukit_nalu_client_component_IsController$Mode_2_classLit, 1), $intern_0, 114, 0, [CREATE, REUSE]);
}

defineClass(114, 17, {114:1, 4:1, 28:1, 17:1}, IsController$Mode);
var CREATE, REUSE;
var Lcom_github_nalukit_nalu_client_component_IsController$Mode_2_classLit = createForEnum('com.github.nalukit.nalu.client.component', 'IsController/Mode', 114, values_0);
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

defineClass(429, 645, {}, HideBlockComponentEvent);
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
var Lcom_github_nalukit_nalu_client_component_event_HideBlockComponentEvent_2_classLit = createForClass('com.github.nalukit.nalu.client.component.event', 'HideBlockComponentEvent', 429);
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

defineClass(430, 645, {}, ShowBlockComponentEvent);
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
var Lcom_github_nalukit_nalu_client_component_event_ShowBlockComponentEvent_2_classLit = createForClass('com.github.nalukit.nalu.client.component.event', 'ShowBlockComponentEvent', 430);
function $clinit_ShowPopUpEvent(){
  $clinit_ShowPopUpEvent = emptyMethod;
  TYPE_2 = new Event$Type;
}

var TYPE_2;
function $setApplicationBuildTime(this$static, applicationBuildTime){
  $put(this$static.applicationContext, 'APPLICATION_BUILD_TIME', applicationBuildTime);
}

defineClass(233, 1, {});
var Lcom_github_nalukit_nalu_client_context_AbstractModuleContext_2_classLit = createForClass('com.github.nalukit.nalu.client.context', 'AbstractModuleContext', 233);
function $get(this$static, key){
  return $getStringValue(this$static.dataStore, key);
}

function $put(this$static, key, value_0){
  $putStringValue(this$static.dataStore, key, value_0);
}

function ContextDataStore(){
  this.dataStore = new HashMap;
}

defineClass(177, 1, {}, ContextDataStore);
var Lcom_github_nalukit_nalu_client_context_ContextDataStore_2_classLit = createForClass('com.github.nalukit.nalu.client.context', 'ContextDataStore', 177);
function $clinit_NaluErrorEvent(){
  $clinit_NaluErrorEvent = emptyMethod;
  TYPE_3 = new Event$Type;
}

function NaluErrorEvent(){
  $clinit_NaluErrorEvent();
  new ErrorInfo;
}

defineClass(71, 645, {}, NaluErrorEvent);
_.dispatch = function dispatch_2(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.$_nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_2(){
  return TYPE_3;
}
;
var TYPE_3;
var Lcom_github_nalukit_nalu_client_event_NaluErrorEvent_2_classLit = createForClass('com.github.nalukit.nalu.client.event', 'NaluErrorEvent', 71);
function $clinit_RouterStateEvent(){
  $clinit_RouterStateEvent = emptyMethod;
  TYPE_4 = new Event$Type;
}

function $dispatch_0(this$static, handler){
  $onHandleRouting(handler.$$outer_0, this$static);
}

function RouterStateEvent(state){
  $clinit_RouterStateEvent();
  this.state_0 = state;
}

defineClass(100, 645, {}, RouterStateEvent);
_.dispatch = function dispatch_3(handler){
  $dispatch_0(this, castTo(handler, 660));
}
;
_.getAssociatedType = function getAssociatedType_3(){
  return TYPE_4;
}
;
_.state_0 = 0;
var TYPE_4;
var Lcom_github_nalukit_nalu_client_event_RouterStateEvent_2_classLit = createForClass('com.github.nalukit.nalu.client.event', 'RouterStateEvent', 100);
function ErrorInfo(){
  new HashMap;
}

defineClass(379, 1, {}, ErrorInfo);
var Lcom_github_nalukit_nalu_client_event_model_ErrorInfo_2_classLit = createForClass('com.github.nalukit.nalu.client.event.model', 'ErrorInfo', 379);
defineClass(648, 1, {615:1});
var Lcom_github_nalukit_nalu_client_filter_AbstractFilter_2_classLit = createForClass('com.github.nalukit.nalu.client.filter', 'AbstractFilter', 648);
function AbstractControllerCreator(router, context){
  this.router = router;
  this.context = context;
}

defineClass(115, 1, $intern_5);
var Lcom_github_nalukit_nalu_client_internal_AbstractControllerCreator_2_classLit = createForClass('com.github.nalukit.nalu.client.internal', 'AbstractControllerCreator', 115);
function AbstractShellCreator(context){
  this.context = context;
}

defineClass(138, 1, $intern_6);
var Lcom_github_nalukit_nalu_client_internal_AbstractShellCreator_2_classLit = createForClass('com.github.nalukit.nalu.client.internal', 'AbstractShellCreator', 138);
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

defineClass(79, 1, {}, HandlerRegistrations);
var Lcom_github_nalukit_nalu_client_internal_HandlerRegistrations_2_classLit = createForClass('com.github.nalukit.nalu.client.internal', 'HandlerRegistrations', 79);
function HandlerRegistrations$lambda$0$Type(){
}

defineClass(409, 1, $intern_7, HandlerRegistrations$lambda$0$Type);
_.accept = function accept(arg0){
  $removeHandler_0(castTo(arg0, 658));
}
;
var Lcom_github_nalukit_nalu_client_internal_HandlerRegistrations$lambda$0$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal', 'HandlerRegistrations/lambda$0$Type', 409);
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

defineClass(362, 1, {}, PropertyFactory);
_.hasHistory = false;
_.removeUrlParameterAtStart = false;
_.stayOnSide = false;
_.usingColonForParametersInUrl = false;
_.usingHash = false;
var INSTANCE;
var Lcom_github_nalukit_nalu_client_internal_PropertyFactory_2_classLit = createForClass('com.github.nalukit.nalu.client.internal', 'PropertyFactory', 362);
function $deactivateController(controller){
  $removeHandler(controller.handlerRegistrations);
  controller.handlerRegistrations = new HandlerRegistrations;
}

function $stopCompositeController(){
  if (!null.$_nullMethod()) {
    null.$_nullMethod();
    null.$_nullMethod();
  }
  null.$_nullMethod();
  null.$_nullMethod().$_nullMethod();
  null.$_nullMethod().$_nullMethod();
}

function $stopController(controller){
  $removeHandler(controller.globalHandlerRegistrations);
  controller.globalHandlerRegistrations = new HandlerRegistrations;
  $removeHandlers(controller.component);
}

function Utils(){
}

defineClass(78, 1, {}, Utils);
var instance_0;
var Lcom_github_nalukit_nalu_client_internal_Utils_2_classLit = createForClass('com.github.nalukit.nalu.client.internal', 'Utils', 78);
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
      if (instanceOf($e0, 69)) {
        $handleRouterException(this$static.router, this$static.startRoute);
        return;
      }
       else 
        throw toJs($e0);
    }
    $route(this$static.router, routeResult.route, castTo($toArray(routeResult.parameterValues, initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 6, 1)), 8));
  }
   else {
    $route(this$static.router, this$static.startRoute, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, []));
  }
}

function $run(this$static, plugin){
  var clientLogger, com_itangsoft_notebook_filter_LoginFilter;
  this$static.plugin = plugin;
  this$static.eventBus = new SimpleEventBus;
  this$static.shellConfiguration = new ShellConfiguration;
  this$static.routerConfiguration = new RouterConfiguration;
  $setCustomConfirmPresenter(this$static.plugin, new CancelEditorConfirmPresenter);
  this$static.naluLogger = new NaluLogger;
  $setEventBus(this$static.naluLogger, this$static.eventBus);
  $bind_1(this$static.naluLogger);
  clientLogger = new DefaultElemental2ClientLogger;
  $setClientLogger(this$static.naluLogger, clientLogger);
  $setEventBus_1(($clinit_RouteParser() , INSTANCE_7), this$static.eventBus);
  $register_2(($clinit_RouterStateEventFactory() , INSTANCE_5), this$static.eventBus);
  $doFire(this$static.eventBus, $addMessage($addMessage($addMessage($sdmOnly(($clinit_LogEvent() , new LogEvent), true), '================================================================================='), 'Running Nalu version: >>2.12.6<<'), '================================================================================='));
  $doFire(this$static.eventBus, $addMessage($addMessage($addMessage($addMessage($sdmOnly(new LogEvent, true), '================================================================================='), 'Nalu processor version  >>2.12.6<< used to generate this source'), '================================================================================='), ''));
  this$static.startRoute = '/auth/login';
  this$static.illegalRouteTarget = '/auth/login';
  $clinit_SeoDataProvider();
  $add(this$static.shellConfiguration.shells, new ShellConfig('/demo', 'com.itangsoft.notebook.shell.DemoShell'));
  $add(this$static.shellConfiguration.shells, new ShellConfig('/layout', 'com.itangsoft.notebook.shell.LayoutShell'));
  $add(this$static.shellConfiguration.shells, new ShellConfig('/auth', 'com.itangsoft.notebook.shell.LoginShell'));
  $add(this$static.routerConfiguration.routers, new RouteConfig('/layout/home', new Arrays$ArrayList(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, [])), 'layout-content', 'com.itangsoft.notebook.views.layout.content.ContentController'));
  $add(this$static.routerConfiguration.routers, new RouteConfig('/auth/login', new Arrays$ArrayList(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, [])), 'login-content', 'com.itangsoft.notebook.views.login.LoginController'));
  $add(this$static.routerConfiguration.routers, new RouteConfig('/layout/home', new Arrays$ArrayList(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, [])), 'layout-left-panel', 'com.itangsoft.notebook.views.layout.leftpanel.LeftPanelController'));
  $add(this$static.routerConfiguration.routers, new RouteConfig('/demo', new Arrays$ArrayList(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, [])), 'layout-content', 'com.itangsoft.notebook.views.demo.DemoController'));
  com_itangsoft_notebook_filter_LoginFilter = new LoginFilter;
  $add(this$static.routerConfiguration.filters, com_itangsoft_notebook_filter_LoginFilter);
  $register_0(($clinit_BlockControllerFactory() , INSTANCE_0), this$static.eventBus);
  $register_1(($clinit_PopUpControllerFactory() , INSTANCE_4), this$static.eventBus);
  this$static.router = new RouterImpl(this$static.plugin, this$static.shellConfiguration, this$static.routerConfiguration, this$static.compositeReferences, this$static.startRoute, this$static.illegalRouteTarget);
  $setEventBus_0(this$static.router, this$static.eventBus);
  $initialize(this$static.plugin, this$static.shellConfiguration);
  $registerShell(($clinit_ShellFactory() , INSTANCE_6), 'com.itangsoft.notebook.shell.DemoShell', new DemoShellCreatorImpl(this$static.context));
  $registerShell(INSTANCE_6, 'com.itangsoft.notebook.shell.LayoutShell', new LayoutShellCreatorImpl(this$static.context));
  $registerShell(INSTANCE_6, 'com.itangsoft.notebook.shell.LoginShell', new LoginShellCreatorImpl(this$static.context));
  $doFire(this$static.eventBus, $addMessage($sdmOnly(new LogEvent, true), 'no ErrorPopUpController found!'));
  $registerController(($clinit_ControllerFactory() , INSTANCE_3), 'com.itangsoft.notebook.views.layout.content.ContentController', new ContentControllerCreatorImpl(this$static.router, this$static.context));
  $registerController(INSTANCE_3, 'com.itangsoft.notebook.views.login.LoginController', new LoginControllerCreatorImpl(this$static.router, this$static.context));
  $registerController(INSTANCE_3, 'com.itangsoft.notebook.views.layout.leftpanel.LeftPanelController', new LeftPanelControllerCreatorImpl(this$static.router, this$static.context));
  $registerController(INSTANCE_3, 'com.itangsoft.notebook.views.demo.DemoController', new DemoControllerCreatorImpl(this$static.router, this$static.context));
  $load(new AbstractApplication$0methodref$onFinishLoading$Type(this$static));
}

defineClass(227, 1, {});
var Lcom_github_nalukit_nalu_client_internal_application_AbstractApplication_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'AbstractApplication', 227);
function AbstractApplication$0methodref$onFinishLoading$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(228, 1, {}, AbstractApplication$0methodref$onFinishLoading$Type);
var Lcom_github_nalukit_nalu_client_internal_application_AbstractApplication$0methodref$onFinishLoading$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'AbstractApplication/0methodref$onFinishLoading$Type', 228);
function $clinit_BlockControllerFactory(){
  $clinit_BlockControllerFactory = emptyMethod;
  INSTANCE_0 = new BlockControllerFactory;
}

function $lambda$1(this$static, i_1){
  throwClassCastExceptionUnlessNull($getStringValue(this$static.blockControllerInstanceStore, i_1));
  if (null.$_nullMethod()) {
    if ($indexOf_1(this$static.visiblesBlocks, null.$_nullMethod().$_nullMethod(), 0) == -1) {
      $doFire(this$static.eventBus, ($clinit_ShowBlockComponentEvent() , null.$_nullMethod().$_nullMethod() , new ShowBlockComponentEvent));
      $add(this$static.visiblesBlocks, null.$_nullMethod().$_nullMethod());
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
  !this$static.eventBus || $doAdd(this$static.eventBus, ($clinit_RouterStateEvent() , TYPE_4), new BlockControllerFactory$0methodref$onHandleRouting$Type(this$static));
}

function BlockControllerFactory(){
  this.blockControllerInstanceStore = new HashMap;
  this.visiblesBlocks = new ArrayList;
}

defineClass(266, 1, {}, BlockControllerFactory);
var INSTANCE_0;
var Lcom_github_nalukit_nalu_client_internal_application_BlockControllerFactory_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'BlockControllerFactory', 266);
function BlockControllerFactory$0methodref$onHandleRouting$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(267, 1, {660:1}, BlockControllerFactory$0methodref$onHandleRouting$Type);
var Lcom_github_nalukit_nalu_client_internal_application_BlockControllerFactory$0methodref$onHandleRouting$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'BlockControllerFactory/0methodref$onHandleRouting$Type', 267);
function BlockControllerFactory$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(268, 1, $intern_7, BlockControllerFactory$lambda$1$Type);
_.accept = function accept_0(arg0){
  $lambda$1(this.$$outer_0, castToString(arg0));
}
;
var Lcom_github_nalukit_nalu_client_internal_application_BlockControllerFactory$lambda$1$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'BlockControllerFactory/lambda$1$Type', 268);
function $clinit_CompositeConditionFactory(){
  $clinit_CompositeConditionFactory = emptyMethod;
  INSTANCE_1 = new CompositeConditionFactory;
}

function $loadComposite(this$static, sourceClassName){
  var conditionContainer$iterator, conditionContainers;
  conditionContainers = castTo($getStringValue(this$static.conditionContainerMap, sourceClassName), 32);
  if (!conditionContainers) {
    return false;
  }
  for (conditionContainer$iterator = conditionContainers.iterator(); conditionContainer$iterator.hasNext_0();) {
    throwClassCastExceptionUnlessNull(conditionContainer$iterator.next_1());
    if (null.$_nullMethod()) {
      return null.$_nullMethod();
    }
  }
  return false;
}

function CompositeConditionFactory(){
  this.conditionContainerMap = new HashMap;
}

defineClass(426, 1, {}, CompositeConditionFactory);
var INSTANCE_1;
var Lcom_github_nalukit_nalu_client_internal_application_CompositeConditionFactory_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'CompositeConditionFactory', 426);
function $clinit_CompositeFactory(){
  $clinit_CompositeFactory = emptyMethod;
  INSTANCE_2 = new CompositeFactory;
}

function $getComposite(this$static, compositeControllerClassName, scopeGlobal){
  var compositeInstance;
  if (scopeGlobal) {
    if ($get_2(this$static.cachedGlobalCompositeInstances, compositeControllerClassName) != null) {
      return throwClassCastExceptionUnlessNull($get_2(this$static.cachedGlobalCompositeInstances, compositeControllerClassName));
    }
  }
  if ($containsKey(this$static.compositeCreatorFactory, compositeControllerClassName)) {
    throwClassCastExceptionUnlessNull($get_2(this$static.compositeCreatorFactory, compositeControllerClassName));
    compositeInstance = null.$_nullMethod();
    if (scopeGlobal) {
      null.$_nullMethod();
      null.$_nullMethod().$_nullMethod();
      null.$_nullMethod().$_nullMethod();
      $put_0(this$static.cachedGlobalCompositeInstances, compositeControllerClassName, compositeInstance);
    }
    null.$_nullMethod(null.$_nullMethod());
    return compositeInstance;
  }
  return null;
}

function CompositeFactory(){
  this.compositeCreatorFactory = new HashMap;
  new HashMap;
  this.cachedGlobalCompositeInstances = new HashMap;
}

defineClass(427, 1, {}, CompositeFactory);
var INSTANCE_2;
var Lcom_github_nalukit_nalu_client_internal_application_CompositeFactory_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'CompositeFactory', 427);
function $clinit_ControllerFactory(){
  $clinit_ControllerFactory = emptyMethod;
  INSTANCE_3 = new ControllerFactory;
}

function $controller(this$static, route, controller, callback, parameterKeys, parameterValues){
  var controllerCreator, controllerInstance;
  if ($hasStringValue(this$static.controllerFactory, controller)) {
    controllerCreator = castTo($getStringValue(this$static.controllerFactory, controller), 130);
    controllerInstance = controllerCreator.create_0(route);
    controllerCreator.setParameter(controllerInstance.controller_0, parameterKeys, parameterValues);
    controllerInstance.cached?$doRouting(callback.this$01, callback.val$hash2, callback.val$routeResult3, callback.val$routeConfiguration4, controllerInstance):$bind(new ControllerFactory$lambda$0$Type(controllerCreator, controllerInstance, callback));
  }
}

function $getControllerFormStore(this$static, controllerClassName){
  return castTo($getStringValue(this$static.controllerStore, $replace(controllerClassName, '.', '_')), 48);
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

defineClass(347, 1, {}, ControllerFactory);
var INSTANCE_3;
var Lcom_github_nalukit_nalu_client_internal_application_ControllerFactory_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'ControllerFactory', 347);
function ControllerFactory$lambda$0$Type(controllerCreator_0, controllerInstance_1, callback_2){
  this.controllerCreator_0 = controllerCreator_0;
  this.controllerInstance_1 = controllerInstance_1;
  this.callback_2 = callback_2;
}

defineClass(348, 1, {}, ControllerFactory$lambda$0$Type);
var Lcom_github_nalukit_nalu_client_internal_application_ControllerFactory$lambda$0$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'ControllerFactory/lambda$0$Type', 348);
function ControllerInstance(){
}

defineClass(41, 1, {41:1}, ControllerInstance);
_.cached = false;
var Lcom_github_nalukit_nalu_client_internal_application_ControllerInstance_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'ControllerInstance', 41);
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

function $setEventBus(this$static, eventBus){
  this$static.eventBus = eventBus;
}

function NaluLogger(){
}

defineClass(255, 1, {}, NaluLogger);
var Lcom_github_nalukit_nalu_client_internal_application_NaluLogger_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'NaluLogger', 255);
function NaluLogger$0methodref$onLog$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(256, 1, {659:1}, NaluLogger$0methodref$onLog$Type);
var Lcom_github_nalukit_nalu_client_internal_application_NaluLogger$0methodref$onLog$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'NaluLogger/0methodref$onLog$Type', 256);
function NaluLogger$lambda$1$Type(){
}

defineClass(257, 1, $intern_7, NaluLogger$lambda$1$Type);
_.accept = function accept_1(arg0){
  $lambda$1_0(castToString(arg0));
}
;
var Lcom_github_nalukit_nalu_client_internal_application_NaluLogger$lambda$1$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'NaluLogger/lambda$1$Type', 257);
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

defineClass(269, 1, {}, PopUpControllerFactory);
var INSTANCE_4;
var Lcom_github_nalukit_nalu_client_internal_application_PopUpControllerFactory_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'PopUpControllerFactory', 269);
function PopUpControllerFactory$0methodref$onShowPopUp$Type(){
}

defineClass(270, 1, {}, PopUpControllerFactory$0methodref$onShowPopUp$Type);
var Lcom_github_nalukit_nalu_client_internal_application_PopUpControllerFactory$0methodref$onShowPopUp$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'PopUpControllerFactory/0methodref$onShowPopUp$Type', 270);
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
    info = castTo($next_0(info$iterator), 113);
    if (!info.aborted_0) {
      $doFire(this$static.eventBus, new RouterStateEvent(1));
      info.aborted_0 = true;
    }
  }
  $doFire(this$static.eventBus, new RouterStateEvent(0));
  $add(this$static.routeStateInfoList, new RouterStateEventFactory$RouteStateInfo(route, params));
}

function $getRouteStateInfo(this$static, route, params){
  var info, info$iterator;
  for (info$iterator = new ArrayList$1(this$static.routeStateInfoList); info$iterator.i < info$iterator.this$01.array.length;) {
    info = castTo($next_0(info$iterator), 113);
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

defineClass(264, 1, {}, RouterStateEventFactory);
var INSTANCE_5;
var Lcom_github_nalukit_nalu_client_internal_application_RouterStateEventFactory_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'RouterStateEventFactory', 264);
function RouterStateEventFactory$RouteStateInfo(route, params){
  this.route = route;
  this.params = params;
}

defineClass(113, 1, {113:1}, RouterStateEventFactory$RouteStateInfo);
_.aborted_0 = false;
var Lcom_github_nalukit_nalu_client_internal_application_RouterStateEventFactory$RouteStateInfo_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'RouterStateEventFactory/RouteStateInfo', 113);
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
    shellCreator = castTo($getStringValue(this$static.shellFactory, shellName), 159);
    shellInstance = shellCreator.create_1();
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

defineClass(342, 1, {}, ShellFactory);
var INSTANCE_6;
var Lcom_github_nalukit_nalu_client_internal_application_ShellFactory_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'ShellFactory', 342);
function ShellFactory$lambda$0$Type(shellCreator_0, callback_1, shellInstance_2){
  this.shellCreator_0 = shellCreator_0;
  this.callback_1 = callback_1;
  this.shellInstance_2 = shellInstance_2;
}

defineClass(343, 1, {}, ShellFactory$lambda$0$Type);
var Lcom_github_nalukit_nalu_client_internal_application_ShellFactory$lambda$0$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'ShellFactory/lambda$0$Type', 343);
function ShellInstance(){
}

defineClass(142, 1, {}, ShellInstance);
var Lcom_github_nalukit_nalu_client_internal_application_ShellInstance_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.application', 'ShellInstance', 142);
function $addLeadingSlash(value_0){
  if ($equals_1(value_0.substr(0, 1), '/')) {
    return value_0;
  }
  return '/' + value_0;
}

function $append(this$static, selector){
  var sb;
  null.$_nullMethod();
  $doFire(this$static.eventBus, $addMessage($sdmOnly(($clinit_LogEvent() , new LogEvent), false), 'composite controller element is null! --> Routing aborted!'));
  $doFire(this$static.eventBus, ($clinit_NaluErrorEvent() , new NaluErrorEvent));
  if (!$attach(selector, null.$_nullMethod())) {
    sb = 'no element found, that matches selector >>' + selector + '<< --> Routing aborted!';
    $doFire(this$static.eventBus, $addMessage($sdmOnly(new LogEvent, false), sb));
    $doFire(this$static.eventBus, new NaluErrorEvent);
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
  $forEach_2($filter_0($map(routeConfigurations.stream(), new AbstractRouter$lambda$10$Type(this$static)), new AbstractRouter$4methodref$nonNull$Type), new AbstractRouter$lambda$12$Type(messageList));
  optionalConfirm = $findFirst($filter_0($map($filter_0($map(routeConfigurations.stream(), new AbstractRouter$lambda$16$Type(this$static)), new AbstractRouter$8methodref$nonNull$Type), new AbstractRouter$lambda$18$Type), new AbstractRouter$9methodref$nonNull$Type));
  optionalConfirm.ref != null || messageList.array.length > 0?$confirm(this$static.plugin, castToString($orElseGet(optionalConfirm, new AbstractRouter$lambda$20$Type(messageList))), confirmHandler):$unbindController(confirmHandler.this$01, confirmHandler.val$finalHash2, confirmHandler.val$routeResult3, confirmHandler.val$routeConfigurations4);
}

function $doRouting(this$static, hash, routeResult, routeConfiguration, controllerInstance){
  var compositeController$iterator, compositeControllers, compositeForController, compositeReference$iterator, globalComposite, handlingModeReuse, lastArg, lastArg0, sb, sfc$iterator, sfc$iterator0;
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
    !controllerInstance.cached && !handlingModeReuse && compositeForController.size() > 0 && compositeForController.forEach_0(new AbstractRouter$lambda$29$Type(this$static, controllerInstance, routeResult));
    handlingModeReuse || $append_0(this$static, routeConfiguration.selector, controllerInstance);
    if (!controllerInstance.cached && !handlingModeReuse) {
      for (compositeController$iterator = new ArrayList$1(compositeControllers); compositeController$iterator.i < compositeController$iterator.this$01.array.length;) {
        throwClassCastExceptionUnlessNull($next_0(compositeController$iterator));
        for (sfc$iterator0 = compositeForController.iterator(); sfc$iterator0.hasNext_0();) {
          throwClassCastExceptionUnlessNull(sfc$iterator0.next_1());
          null.$_nullMethod().$_nullMethod().$_nullMethod(null.$_nullMethod()) && null.$_nullMethod();
        }
        for (sfc$iterator = compositeForController.iterator(); sfc$iterator.hasNext_0();) {
          throwClassCastExceptionUnlessNull(sfc$iterator.next_1());
          if (null.$_nullMethod().$_nullMethod().$_nullMethod(null.$_nullMethod())) {
            null.$_nullMethod();
            break;
          }
        }
      }
    }
     else {
      if (!handlingModeReuse) {
        globalComposite = castTo($collect($filter_0(compositeForController.stream(), new AbstractRouter$15methodref$isScopeGlobal$Type), of_0(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$42$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_0, 40, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)]))), 32);
        for (compositeReference$iterator = globalComposite.iterator(); compositeReference$iterator.hasNext_0();) {
          throwClassCastExceptionUnlessNull(compositeReference$iterator.next_1());
          if ($loadComposite(($clinit_CompositeConditionFactory() , INSTANCE_1), (lastArg0 = controllerInstance.controllerClassName , null.$_nullMethod() , castTo($toArray(routeResult.parameterValues, initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 6, 1)), 8) , lastArg0))) {
            $getComposite(($clinit_CompositeFactory() , INSTANCE_2), null.$_nullMethod(), (null.$_nullMethod() , true));
            $append(this$static, (lastArg = null.$_nullMethod() , null.$_nullMethod() , lastArg));
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
    }
     else {
      $forEach_0(compositeControllers, new AbstractRouter$lambda$34$Type);
      !controllerInstance.controller_0.activateNaluCommand || controllerInstance.controller_0.activateNaluCommand.execute();
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
  return castTo($collect($filter_0(new StreamImpl(null, new Spliterators$IteratorSpliterator(this$static.compositeReferences, 16)), new AbstractRouter$lambda$35$Type(className)), of_0(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$42$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_0, 40, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)]))), 32);
}

function $handleRouteConfig(this$static, routeConfiguration, routeResult, hash){
  $controller(($clinit_ControllerFactory() , INSTANCE_3), routeConfiguration.route, routeConfiguration.className, new AbstractRouter$3(this$static, hash, routeResult, routeConfiguration), routeResult.parameterKeys, routeResult.parameterValues);
}

function $handleRouterException(this$static, hash){
  var decodedUrl, routeResult, sb;
  if (($clinit_PropertyFactory() , INSTANCE).illegalRouteTarget == null || INSTANCE.illegalRouteTarget.length == 0) {
    try {
      routeResult = (decodedUrl = $wnd.goog.global.decodeURI(hash) , $parse_0(($clinit_RouteParser() , INSTANCE_7), decodedUrl, this$static.shellConfiguration, this$static.routerConfiguration));
      $fireAbortRoutingEvent(($clinit_RouterStateEventFactory() , INSTANCE_5), routeResult.route, castTo($toArray(routeResult.parameterValues, initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 6, 1)), 8));
      $fireDoneRoutingEvent(INSTANCE_5, routeResult.route, castTo($toArray(routeResult.parameterValues, initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 6, 1)), 8));
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 69)) {
        $fireAbortRoutingEvent(($clinit_RouterStateEventFactory() , INSTANCE_5), hash, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, []));
      }
       else 
        throw toJs($e0);
    }
    sb = new StringBuilder;
    $append_3($append_3((sb.string += 'no matching route for hash >>' , sb), hash), '<< --> Routing aborted!');
    $doFire(this$static.eventBus, $addMessage($sdmOnly(($clinit_LogEvent() , new LogEvent), true), sb.string));
    $doFire(this$static.eventBus, ($clinit_NaluErrorEvent() , new NaluErrorEvent));
  }
   else {
    $route(this$static, INSTANCE.illegalRouteTarget, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, []));
  }
}

function $handleRouting(this$static, hash){
  var decodedUrl, filter$iterator, finalHash, lastArg, routeConfigurations, routeResult, routeResult0, sb;
  hash.indexOf('#') != -1 && (hash = $substring(hash, hash.indexOf('#') + 1));
  hash.indexOf('&') != -1 && (hash = $substring_0(hash, 0, hash.indexOf('&') + 1));
  if ($indexOf_1(this$static.loopDetectionList, $pimpUpHashForLoopDetection(hash), 0) != -1) {
    try {
      routeResult0 = (decodedUrl = $wnd.goog.global.decodeURI(hash) , $parse_0(($clinit_RouteParser() , INSTANCE_7), decodedUrl, this$static.shellConfiguration, this$static.routerConfiguration));
      $fireAbortRoutingEvent(($clinit_RouterStateEventFactory() , INSTANCE_5), routeResult0.route, castTo($toArray(routeResult0.parameterValues, initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 6, 1)), 8));
      $fireDoneRoutingEvent(INSTANCE_5, routeResult0.route, castTo($toArray(routeResult0.parameterValues, initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 6, 1)), 8));
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 69)) {
        $fireAbortRoutingEvent(($clinit_RouterStateEventFactory() , INSTANCE_5), hash, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, []));
      }
       else 
        throw toJs($e0);
    }
    sb = new StringBuilder;
    $append_3($append_3((sb.string += 'loop detected for hash >>' , sb), hash), '<< --> Routing aborted!');
    $doFire(this$static.eventBus, $addMessage($sdmOnly(($clinit_LogEvent() , new LogEvent), true), sb.string));
    $doFire(this$static.eventBus, (lastArg = ($clinit_NaluErrorEvent() , new NaluErrorEvent) , castToString($get_3(this$static.loopDetectionList, 0)) , lastArg));
    this$static.loopDetectionList.array.length = 0;
    return;
  }
   else {
    $add(this$static.loopDetectionList, $pimpUpHashForLoopDetection(hash));
  }
  try {
    routeResult = (decodedUrl = $wnd.goog.global.decodeURI(hash) , $parse_0(($clinit_RouteParser() , INSTANCE_7), decodedUrl, this$static.shellConfiguration, this$static.routerConfiguration));
    this$static.currentRoute = routeResult.route;
    castTo($toArray(routeResult.parameterValues, initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 6, 1)), 8);
  }
   catch ($e1) {
    $e1 = toJava($e1);
    if (instanceOf($e1, 69)) {
      $handleRouterException(this$static, hash);
      return;
    }
     else 
      throw toJs($e1);
  }
  $fireStartRoutingEvent(($clinit_RouterStateEventFactory() , INSTANCE_5), routeResult.route, castTo($toArray(routeResult.parameterValues, initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 6, 1)), 8));
  for (filter$iterator = new ArrayList$1(this$static.routerConfiguration.filters); filter$iterator.i < filter$iterator.this$01.array.length;) {
    castTo($next_0(filter$iterator), 615);
    $addLeadingSlash(routeResult.route);
    castTo($toArray(routeResult.parameterValues, initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 6, 1)), 8);
  }
  routeConfigurations = $match_0(this$static.routerConfiguration, routeResult.route);
  finalHash = hash;
  $confirmRouting(this$static, routeConfigurations, new AbstractRouter$1(this$static, finalHash, routeResult, routeConfigurations));
}

function $handleUnbindCallBack(this$static, hash, routeResult, routeConfigurations){
  --this$static.callCounter;
  this$static.callCounter == 0 && $doRouting_0(this$static, hash, routeResult, routeConfigurations);
}

function $isHandlingModeReuse(this$static, controller){
  return $equals_1(this$static.currentRoute, controller.relatedRoute) && ($clinit_IsController$Mode() , REUSE) == controller.mode_0;
}

function $lambda$1_1(this$static, config_0){
  return castTo($getStringValue(this$static.activeComponents, config_0.selector), 41);
}

function $lambda$10(this$static, config_0){
  return castTo($getStringValue(this$static.activeComponents, config_0.selector), 41);
}

function $lambda$16(this$static, config_0){
  return castTo($getStringValue(this$static.activeComponents, config_0.selector), 41);
}

function $lambda$22(this$static, config_0){
  return castTo($getStringValue(this$static.activeComponents, config_0.selector), 41);
}

function $lambda$25(this$static, controllerList_1, controller_1){
  var handlingModeReuse;
  handlingModeReuse = $equals_1(this$static.currentRoute, controller_1.relatedRoute) && ($clinit_IsController$Mode() , REUSE) == controller_1.mode_0;
  $forEach(new AbstractMap$2(controller_1.compositeControllers), new AbstractRouter$lambda$26$Type(controller_1, handlingModeReuse));
  $deactivateController((!instance_0 && (instance_0 = new Utils) , controller_1));
  !controller_1.cached && !handlingModeReuse && $stopController((!instance_0 && (instance_0 = new Utils) , controller_1));
  $forEach_2($filter_0(new StreamImpl(null, new Spliterators$IteratorSpliterator(controllerList_1, 16)), new AbstractRouter$lambda$27$Type(this$static)), new AbstractRouter$lambda$28$Type(this$static));
}

function $lambda$27(this$static, c_0){
  return !($equals_1(this$static.currentRoute, c_0.relatedRoute) && ($clinit_IsController$Mode() , REUSE) == c_0.mode_0);
}

function $lambda$28(this$static, c_0){
  $remove(c_0.relatedSelector);
  $removeStringValue(this$static.activeComponents, c_0.relatedSelector);
}

function $lambda$29(this$static, controllerInstance_1, routeResult_2){
  var lastArg;
  if ($loadComposite(($clinit_CompositeConditionFactory() , INSTANCE_1), (lastArg = controllerInstance_1.controllerClassName , null.$_nullMethod() , castTo($toArray(routeResult_2.parameterValues, initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 6, 1)), 8) , lastArg))) {
    $getComposite(($clinit_CompositeFactory() , INSTANCE_2), null.$_nullMethod(), (null.$_nullMethod() , null.$_nullMethod()));
    $doFire(this$static.eventBus, $addMessage($sdmOnly(($clinit_LogEvent() , new LogEvent), true), 'controller >>' + $getCanonicalName(controllerInstance_1.controller_0.___clazz) + '<< --> compositeController >>' + null.$_nullMethod() + '<< not found'));
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
    routeConfiguration = castTo(routeConfiguration$iterator.next_1(), 34);
    $getStringValue(this$static.activeComponents, routeConfiguration.selector) == null && $controller(($clinit_ControllerFactory() , INSTANCE_3), routeConfiguration.route, routeConfiguration.className, new AbstractRouter$3(this$static, hash, routeResult, routeConfiguration), routeResult.parameterKeys, routeResult.parameterValues);
  }
  ($clinit_SeoDataProvider() , INSTANCE_8).seoData = new SeoData;
  $fireDoneRoutingEvent(($clinit_RouterStateEventFactory() , INSTANCE_5), routeResult.route, castTo($toArray(routeResult.parameterValues, initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 6, 1)), 8));
}

function $route(this$static, newRoute, params){
  var newRouteWithParams;
  newRoute = $cleanRoute(newRoute);
  newRouteWithParams = $generate(($clinit_RouteParser() , INSTANCE_7), newRoute, params);
  route_0(newRouteWithParams, false);
  $handleRouting(this$static, newRouteWithParams);
}

function $setEventBus_0(this$static, eventBus){
  this$static.eventBus = eventBus;
}

function $stopController_0(this$static, routeConfigurations, replaceShell){
  var controllerList;
  controllerList = new ArrayList;
  replaceShell?$addAll(controllerList, castTo($collect($map(new StreamImpl(null, new Spliterators$IteratorSpliterator(new AbstractMap$2(this$static.activeComponents), 0)), new AbstractRouter$10methodref$getController$Type), of_0(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$42$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_0, 40, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)]))), 37)):$addAll(controllerList, castTo($collect($map($filter_0($map(routeConfigurations.stream(), new AbstractRouter$lambda$22$Type(this$static)), new AbstractRouter$11methodref$nonNull$Type), new AbstractRouter$12methodref$getController$Type), of_0(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$42$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_0, 40, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)]))), 37));
  $forEach_0(controllerList, new AbstractRouter$lambda$25$Type(this$static, controllerList));
}

function $unbindController(this$static, hash, routeResult, routeConfigurations){
  var instances;
  instances = castTo($collect($filter_0($map(routeConfigurations.stream(), new AbstractRouter$lambda$1$Type(this$static)), new AbstractRouter$0methodref$nonNull$Type), of_0(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$42$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_0, 40, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)]))), 32);
  if (instances.size() == 0) {
    $doRouting_0(this$static, hash, routeResult, routeConfigurations);
  }
   else {
    this$static.callCounter = instances.size();
    instances.forEach_0(new AbstractRouter$lambda$3$Type(this$static, hash, routeResult, routeConfigurations));
  }
}

function lambda$12(messageList_0, c_1){
  var optional;
  optional = $findFirst($filter_0($map(new StreamImpl(null, new Spliterators$IteratorSpliterator(new AbstractMap$2(c_1.controller_0.compositeControllers), 0)), new AbstractRouter$5methodref$mayStop$Type), new AbstractRouter$6methodref$nonNull$Type));
  $ifPresent(optional, new AbstractRouter$7methodref$add$Type(messageList_0));
}

function lambda$26(controller_0, handlingModeReuse_1){
  if (controller_0.cached || handlingModeReuse_1) {
    !instance_0 && (instance_0 = new Utils);
    null.$_nullMethod();
    null.$_nullMethod();
  }
   else {
    !instance_0 && (instance_0 = new Utils);
    null.$_nullMethod();
    null.$_nullMethod();
    null.$_nullMethod() || (!instance_0 && (instance_0 = new Utils) , $stopCompositeController());
  }
}

function lambda$34(){
  if (!null.$_nullMethod()) {
    null.$_nullMethod();
    null.$_nullMethod() && null.$_nullMethod();
  }
  null.$_nullMethod();
  null.$_nullMethod();
}

defineClass(271, 1, {});
_.callCounter = 0;
_.currentRoute = '';
_.lastExecutedHash = '';
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter', 271);
function AbstractRouter$0methodref$nonNull$Type(){
}

defineClass(276, 1, {}, AbstractRouter$0methodref$nonNull$Type);
_.test_0 = function test_0(arg0){
  return arg0 != null;
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$0methodref$nonNull$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/0methodref$nonNull$Type', 276);
function $onCancel(this$static){
  route_0(this$static.this$01.lastExecutedHash, false);
  this$static.this$01.loopDetectionList.array.length = 0;
  $fireCancelByUserRoutingEvent(($clinit_RouterStateEventFactory() , INSTANCE_5), this$static.val$routeResult3.route, castTo($toArray(this$static.val$routeResult3.parameterValues, initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 6, 1)), 8));
  $fireDoneRoutingEvent(INSTANCE_5, this$static.val$routeResult3.route, castTo($toArray(this$static.val$routeResult3.parameterValues, initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 6, 1)), 8));
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

defineClass(274, 1, {}, AbstractRouter$1);
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$1_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/1', 274);
function AbstractRouter$10methodref$getController$Type(){
}

defineClass(294, 1, {}, AbstractRouter$10methodref$getController$Type);
_.apply_0 = function apply_0(arg0){
  return castTo(arg0, 41).controller_0;
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$10methodref$getController$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/10methodref$getController$Type', 294);
function AbstractRouter$11methodref$nonNull$Type(){
}

defineClass(296, 1, {}, AbstractRouter$11methodref$nonNull$Type);
_.test_0 = function test_1(arg0){
  return arg0 != null;
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$11methodref$nonNull$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/11methodref$nonNull$Type', 296);
function AbstractRouter$12methodref$getController$Type(){
}

defineClass(297, 1, {}, AbstractRouter$12methodref$getController$Type);
_.apply_0 = function apply_1(arg0){
  return castTo(arg0, 41).controller_0;
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$12methodref$getController$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/12methodref$getController$Type', 297);
function AbstractRouter$15methodref$isScopeGlobal$Type(){
}

defineClass(308, 1, {}, AbstractRouter$15methodref$isScopeGlobal$Type);
_.test_0 = function test_2(arg0){
  return throwClassCastExceptionUnlessNull(arg0).$_nullMethod();
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$15methodref$isScopeGlobal$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/15methodref$isScopeGlobal$Type', 308);
function AbstractRouter$16methodref$onAttach$Type(){
}

defineClass(309, 1, $intern_7, AbstractRouter$16methodref$onAttach$Type);
_.accept = function accept_2(arg0){
  throwClassCastExceptionUnlessNull(arg0).$_nullMethod();
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$16methodref$onAttach$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/16methodref$onAttach$Type', 309);
function AbstractRouter$1methodref$mayStop$Type(){
}

defineClass(280, 1, {}, AbstractRouter$1methodref$mayStop$Type);
_.apply_0 = function apply_2(arg0){
  return throwClassCastExceptionUnlessNull(arg0).$_nullMethod();
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$1methodref$mayStop$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/1methodref$mayStop$Type', 280);
function $lambda$0(this$static, routeResult_1){
  var lastArg;
  if ($loadComposite(($clinit_CompositeConditionFactory() , INSTANCE_1), (lastArg = $getCanonicalName(this$static.this$01.shell.___clazz) , null.$_nullMethod() , castTo($toArray(routeResult_1.parameterValues, initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 6, 1)), 8) , lastArg))) {
    $getComposite(($clinit_CompositeFactory() , INSTANCE_2), ($getCanonicalName(this$static.this$01.shell.___clazz) , null.$_nullMethod()), (null.$_nullMethod() , null.$_nullMethod()));
    $doFire(this$static.this$01.eventBus, $addMessage($sdmOnly(($clinit_LogEvent() , new LogEvent), true), 'controller >>' + $getCanonicalName(this$static.this$01.shell.___clazz) + '<< --> compositeController >>' + null.$_nullMethod() + '<< not found'));
  }
}

function $onFinish(this$static, shellInstance){
  var compositeController$iterator, compositeControllers, compositeForShell, compositeReference$iterator, globalComposite, lastArg, lastArg0, routeConfiguration, routeConfiguration$iterator, sfc$iterator, sfc$iterator0, shellMatchingRouteConfigurations;
  !this$static.this$01.shell || this$static.this$01.shell.detachShell();
  this$static.this$01.shell = shellInstance.shell;
  this$static.this$01.lastAddedShell = this$static.val$routeResult2.shell;
  shellInstance.shell.attachShell();
  compositeControllers = new ArrayList;
  compositeForShell = $getCompositeForClassName(this$static.this$01, $getCanonicalName(this$static.this$01.shell.___clazz));
  if (compositeForShell.size() > 0) {
    compositeForShell.forEach_0(new AbstractRouter$2$lambda$0$Type(this$static, this$static.val$routeResult2));
    for (compositeController$iterator = new ArrayList$1(compositeControllers); compositeController$iterator.i < compositeController$iterator.this$01.array.length;) {
      throwClassCastExceptionUnlessNull($next_0(compositeController$iterator));
      for (sfc$iterator0 = compositeForShell.iterator(); sfc$iterator0.hasNext_0();) {
        throwClassCastExceptionUnlessNull(sfc$iterator0.next_1());
        null.$_nullMethod().$_nullMethod().$_nullMethod(null.$_nullMethod()) && null.$_nullMethod();
      }
      for (sfc$iterator = compositeForShell.iterator(); sfc$iterator.hasNext_0();) {
        throwClassCastExceptionUnlessNull(sfc$iterator.next_1());
        if (null.$_nullMethod().$_nullMethod().$_nullMethod(null.$_nullMethod())) {
          null.$_nullMethod();
          break;
        }
      }
    }
    globalComposite = castTo($collect($filter_0(compositeForShell.stream(), new AbstractRouter$2$13methodref$isScopeGlobal$Type), of_0(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$42$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_0, 40, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)]))), 32);
    for (compositeReference$iterator = globalComposite.iterator(); compositeReference$iterator.hasNext_0();) {
      throwClassCastExceptionUnlessNull(compositeReference$iterator.next_1());
      if ($loadComposite(($clinit_CompositeConditionFactory() , INSTANCE_1), (lastArg0 = $getCanonicalName(this$static.this$01.shell.___clazz) , null.$_nullMethod() , castTo($toArray(this$static.val$routeResult2.parameterValues, initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 6, 1)), 8) , lastArg0))) {
        $getComposite(($clinit_CompositeFactory() , INSTANCE_2), ($getCanonicalName(this$static.this$01.shell.___clazz) , null.$_nullMethod()), (null.$_nullMethod() , true));
        $append(this$static.this$01, (lastArg = null.$_nullMethod() , null.$_nullMethod() , lastArg));
      }
    }
  }
  $forEach_0(compositeControllers, new AbstractRouter$2$14methodref$onAttach$Type);
  $forEach_0(compositeControllers, new AbstractRouter$2$lambda$3$Type);
  shellMatchingRouteConfigurations = $match_0(this$static.this$01.routerConfiguration, this$static.val$routeResult2.shell);
  for (routeConfiguration$iterator = shellMatchingRouteConfigurations.iterator(); routeConfiguration$iterator.hasNext_0();) {
    routeConfiguration = castTo(routeConfiguration$iterator.next_1(), 34);
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

function lambda$3(){
  if (!null.$_nullMethod()) {
    null.$_nullMethod();
    null.$_nullMethod() && null.$_nullMethod();
  }
  null.$_nullMethod();
  null.$_nullMethod();
}

defineClass(302, 1, {}, AbstractRouter$2);
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$2_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/2', 302);
function AbstractRouter$2$13methodref$isScopeGlobal$Type(){
}

defineClass(304, 1, {}, AbstractRouter$2$13methodref$isScopeGlobal$Type);
_.test_0 = function test_3(arg0){
  return throwClassCastExceptionUnlessNull(arg0).$_nullMethod();
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$2$13methodref$isScopeGlobal$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/2/13methodref$isScopeGlobal$Type', 304);
function AbstractRouter$2$14methodref$onAttach$Type(){
}

defineClass(305, 1, $intern_7, AbstractRouter$2$14methodref$onAttach$Type);
_.accept = function accept_3(arg0){
  throwClassCastExceptionUnlessNull(arg0).$_nullMethod();
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$2$14methodref$onAttach$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/2/14methodref$onAttach$Type', 305);
function AbstractRouter$2$lambda$0$Type($$outer_0, routeResult_1){
  this.$$outer_0 = $$outer_0;
  this.routeResult_1 = routeResult_1;
}

defineClass(303, 1, $intern_7, AbstractRouter$2$lambda$0$Type);
_.accept = function accept_4(arg0){
  var lastArg;
  $lambda$0(this.$$outer_0, (lastArg = this.routeResult_1 , throwClassCastExceptionUnlessNull(arg0) , lastArg));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$2$lambda$0$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/2/lambda$0$Type', 303);
function AbstractRouter$2$lambda$3$Type(){
}

defineClass(306, 1, $intern_7, AbstractRouter$2$lambda$3$Type);
_.accept = function accept_5(arg0){
  throwClassCastExceptionUnlessNull(arg0);
  lambda$3();
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$2$lambda$3$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/2/lambda$3$Type', 306);
function AbstractRouter$2methodref$nonNull$Type(){
}

defineClass(281, 1, {}, AbstractRouter$2methodref$nonNull$Type);
_.test_0 = function test_4(arg0){
  return arg0 != null;
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$2methodref$nonNull$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/2methodref$nonNull$Type', 281);
function AbstractRouter$3(this$0, val$hash, val$routeResult, val$routeConfiguration){
  this.this$01 = this$0;
  this.val$hash2 = val$hash;
  this.val$routeResult3 = val$routeResult;
  this.val$routeConfiguration4 = val$routeConfiguration;
}

defineClass(178, 1, {}, AbstractRouter$3);
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$3_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/3', 178);
function AbstractRouter$3methodref$add$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(282, 1, $intern_7, AbstractRouter$3methodref$add$Type);
_.accept = function accept_6(arg0){
  $add(this.$$outer_0, castToString(arg0));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$3methodref$add$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/3methodref$add$Type', 282);
function AbstractRouter$4methodref$nonNull$Type(){
}

defineClass(284, 1, {}, AbstractRouter$4methodref$nonNull$Type);
_.test_0 = function test_5(arg0){
  return arg0 != null;
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$4methodref$nonNull$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/4methodref$nonNull$Type', 284);
function AbstractRouter$5methodref$mayStop$Type(){
}

defineClass(285, 1, {}, AbstractRouter$5methodref$mayStop$Type);
_.apply_0 = function apply_3(arg0){
  return throwClassCastExceptionUnlessNull(arg0).$_nullMethod();
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$5methodref$mayStop$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/5methodref$mayStop$Type', 285);
function AbstractRouter$6methodref$nonNull$Type(){
}

defineClass(286, 1, {}, AbstractRouter$6methodref$nonNull$Type);
_.test_0 = function test_6(arg0){
  return arg0 != null;
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$6methodref$nonNull$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/6methodref$nonNull$Type', 286);
function AbstractRouter$7methodref$add$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(287, 1, $intern_7, AbstractRouter$7methodref$add$Type);
_.accept = function accept_7(arg0){
  $add(this.$$outer_0, castToString(arg0));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$7methodref$add$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/7methodref$add$Type', 287);
function AbstractRouter$8methodref$nonNull$Type(){
}

defineClass(290, 1, {}, AbstractRouter$8methodref$nonNull$Type);
_.test_0 = function test_7(arg0){
  return arg0 != null;
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$8methodref$nonNull$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/8methodref$nonNull$Type', 290);
function AbstractRouter$9methodref$nonNull$Type(){
}

defineClass(292, 1, {}, AbstractRouter$9methodref$nonNull$Type);
_.test_0 = function test_8(arg0){
  return arg0 != null;
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$9methodref$nonNull$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/9methodref$nonNull$Type', 292);
function AbstractRouter$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(275, 1, {}, AbstractRouter$lambda$1$Type);
_.apply_0 = function apply_4(arg0){
  return $lambda$1_1(this.$$outer_0, castTo(arg0, 34));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$1$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$1$Type', 275);
function AbstractRouter$lambda$10$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(283, 1, {}, AbstractRouter$lambda$10$Type);
_.apply_0 = function apply_5(arg0){
  return $lambda$10(this.$$outer_0, castTo(arg0, 34));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$10$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$10$Type', 283);
function AbstractRouter$lambda$12$Type(messageList_0){
  this.messageList_0 = messageList_0;
}

defineClass(288, 1, $intern_7, AbstractRouter$lambda$12$Type);
_.accept = function accept_8(arg0){
  lambda$12(this.messageList_0, castTo(arg0, 41));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$12$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$12$Type', 288);
function AbstractRouter$lambda$16$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(289, 1, {}, AbstractRouter$lambda$16$Type);
_.apply_0 = function apply_6(arg0){
  return $lambda$16(this.$$outer_0, castTo(arg0, 34));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$16$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$16$Type', 289);
function AbstractRouter$lambda$18$Type(){
}

defineClass(291, 1, {}, AbstractRouter$lambda$18$Type);
_.apply_0 = function apply_7(arg0){
  return castTo(arg0, 41) , null;
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$18$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$18$Type', 291);
function AbstractRouter$lambda$20$Type(messageList_0){
  this.messageList_0 = messageList_0;
}

defineClass(293, 1, {}, AbstractRouter$lambda$20$Type);
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$20$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$20$Type', 293);
function AbstractRouter$lambda$22$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(295, 1, {}, AbstractRouter$lambda$22$Type);
_.apply_0 = function apply_8(arg0){
  return $lambda$22(this.$$outer_0, castTo(arg0, 34));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$22$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$22$Type', 295);
function AbstractRouter$lambda$25$Type($$outer_0, controllerList_1){
  this.$$outer_0 = $$outer_0;
  this.controllerList_1 = controllerList_1;
}

defineClass(301, 1, $intern_7, AbstractRouter$lambda$25$Type);
_.accept = function accept_9(arg0){
  $lambda$25(this.$$outer_0, this.controllerList_1, castTo(arg0, 48));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$25$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$25$Type', 301);
function AbstractRouter$lambda$26$Type(controller_0, handlingModeReuse_1){
  this.controller_0 = controller_0;
  this.handlingModeReuse_1 = handlingModeReuse_1;
}

defineClass(298, 1, $intern_7, AbstractRouter$lambda$26$Type);
_.accept = function accept_10(arg0){
  var lastArg;
  lambda$26(this.controller_0, (lastArg = this.handlingModeReuse_1 , throwClassCastExceptionUnlessNull(arg0) , lastArg));
}
;
_.handlingModeReuse_1 = false;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$26$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$26$Type', 298);
function AbstractRouter$lambda$27$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(299, 1, {}, AbstractRouter$lambda$27$Type);
_.test_0 = function test_9(arg0){
  return $lambda$27(this.$$outer_0, castTo(arg0, 48));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$27$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$27$Type', 299);
function AbstractRouter$lambda$28$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(300, 1, $intern_7, AbstractRouter$lambda$28$Type);
_.accept = function accept_11(arg0){
  $lambda$28(this.$$outer_0, castTo(arg0, 48));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$28$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$28$Type', 300);
function AbstractRouter$lambda$29$Type($$outer_0, controllerInstance_1, routeResult_2){
  this.$$outer_0 = $$outer_0;
  this.controllerInstance_1 = controllerInstance_1;
  this.routeResult_2 = routeResult_2;
}

defineClass(307, 1, $intern_7, AbstractRouter$lambda$29$Type);
_.accept = function accept_12(arg0){
  var lastArg;
  $lambda$29(this.$$outer_0, this.controllerInstance_1, (lastArg = this.routeResult_2 , throwClassCastExceptionUnlessNull(arg0) , lastArg));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$29$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$29$Type', 307);
function AbstractRouter$lambda$3$Type($$outer_0, hash_1, routeResult_2, routeConfigurations_3){
  this.$$outer_0 = $$outer_0;
  this.hash_1 = hash_1;
  this.routeResult_2 = routeResult_2;
  this.routeConfigurations_3 = routeConfigurations_3;
}

defineClass(278, 1, $intern_7, AbstractRouter$lambda$3$Type);
_.accept = function accept_13(arg0){
  var lastArg;
  $unbind(new AbstractRouter$lambda$4$Type(this.$$outer_0, this.hash_1, this.routeResult_2, (lastArg = this.routeConfigurations_3 , castTo(arg0, 41) , lastArg)));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$3$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$3$Type', 278);
function AbstractRouter$lambda$32$Type(){
}

defineClass(310, 1, $intern_7, AbstractRouter$lambda$32$Type);
_.accept = function accept_14(arg0){
  throwClassCastExceptionUnlessNull(arg0);
  null.$_nullMethod();
  null.$_nullMethod();
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$32$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$32$Type', 310);
function AbstractRouter$lambda$33$Type(){
}

defineClass(311, 1, $intern_7, AbstractRouter$lambda$33$Type);
_.accept = function accept_15(arg0){
  throwClassCastExceptionUnlessNull(arg0);
  null.$_nullMethod();
  null.$_nullMethod();
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$33$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$33$Type', 311);
function AbstractRouter$lambda$34$Type(){
}

defineClass(312, 1, $intern_7, AbstractRouter$lambda$34$Type);
_.accept = function accept_16(arg0){
  throwClassCastExceptionUnlessNull(arg0);
  lambda$34();
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$34$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$34$Type', 312);
function AbstractRouter$lambda$35$Type(className_0){
  this.className_0 = className_0;
}

defineClass(313, 1, {}, AbstractRouter$lambda$35$Type);
_.test_0 = function test_10(arg0){
  var lastArg;
  return $equals_1((lastArg = this.className_0 , throwClassCastExceptionUnlessNull(arg0) , lastArg), null.$_nullMethod());
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$35$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$35$Type', 313);
function AbstractRouter$lambda$4$Type($$outer_0, hash_1, routeResult_2, routeConfigurations_3){
  this.$$outer_0 = $$outer_0;
  this.hash_1 = hash_1;
  this.routeResult_2 = routeResult_2;
  this.routeConfigurations_3 = routeConfigurations_3;
}

defineClass(277, 1, {}, AbstractRouter$lambda$4$Type);
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$4$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$4$Type', 277);
function AbstractRouter$lambda$6$Type(){
}

defineClass(279, 1, $intern_7, AbstractRouter$lambda$6$Type);
_.accept = function accept_17(arg0){
  throwClassCastExceptionUnlessNull(arg0);
  !instance_0 && (instance_0 = new Utils);
  null.$_nullMethod();
  null.$_nullMethod();
  null.$_nullMethod() || (!instance_0 && (instance_0 = new Utils) , $stopCompositeController());
}
;
var Lcom_github_nalukit_nalu_client_internal_route_AbstractRouter$lambda$6$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'AbstractRouter/lambda$6$Type', 279);
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
  shellFromRoute.indexOf('|') != -1?(this.shell = castTo($collect($map(new StreamImpl(null, new Spliterators$IteratorSpliterator(new Arrays$ArrayList($split_0(shellFromRoute, '\\|')), 16)), new RouteConfig$lambda$0$Type), of_0(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$42$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_0, 40, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)]))), 32)):this.shell.add('/' + shellFromRoute);
}

defineClass(34, 1, {34:1}, RouteConfig);
var Lcom_github_nalukit_nalu_client_internal_route_RouteConfig_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'RouteConfig', 34);
function RouteConfig$lambda$0$Type(){
}

defineClass(336, 1, {}, RouteConfig$lambda$0$Type);
_.apply_0 = function apply_9(arg0){
  return '/' + castToString(arg0);
}
;
var Lcom_github_nalukit_nalu_client_internal_route_RouteConfig$lambda$0$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'RouteConfig/lambda$0$Type', 336);
function $clinit_RouteParser(){
  $clinit_RouteParser = emptyMethod;
  INSTANCE_7 = new RouteParser;
}

function $generate(this$static, route, params){
  var generatedRoute, i, numberOfPlaceHolders, parameterIndex, partsOfRoute, routeValue, s, s$array, s$index, s$max, sb, sbExeption, suffixlength;
  sb = new StringBuilder;
  routeValue = route;
  $equals_1(routeValue.substr(0, 1), '/') && (routeValue = (checkCriticalStringElementIndex(1, routeValue.length + 1) , routeValue.substr(1)));
  partsOfRoute = $split_0(routeValue, '/');
  parameterIndex = 0;
  for (s$array = partsOfRoute , s$index = 0 , s$max = s$array.length; s$index < s$max; ++s$index) {
    s = s$array[s$index];
    sb.string += '/';
    if ($equals_1('*', s) || $equals_1(s.substr(0, 1), ':') || $equals_1(s.substr(0, 1), '{') && (suffixlength = '}'.length , $equals_1(s.substr(s.length - suffixlength, suffixlength), '}'))) {
      ($clinit_PropertyFactory() , INSTANCE).usingColonForParametersInUrl && (sb.string += ':' , sb);
      if (params.length - 1 >= parameterIndex) {
        params[parameterIndex] == null || $append_3(sb, $replace(params[parameterIndex], '/', '--U972--'));
        ++parameterIndex;
      }
    }
     else {
      sb.string += '' + s;
    }
  }
  numberOfPlaceHolders = $count($filter_0(new StreamImpl(null, spliterator_3(partsOfRoute, partsOfRoute.length)), new RouteParser$lambda$4$Type));
  if (gt(params.length, numberOfPlaceHolders)) {
    sbExeption = 'Warning: route >>' + route + '<< has less parameter placeholder >>' + toString_13(numberOfPlaceHolders) + '<< than the number of parameters in the list of parameters >>' + params.length + '<< --> adding Parameters add the end of the url';
    $doFire(this$static.eventBus, $addMessage($sdmOnly(($clinit_LogEvent() , new LogEvent), true), sbExeption));
    for (i = parameterIndex; i < params.length; i++) {
      sb.string += '/';
      ($clinit_PropertyFactory() , INSTANCE).usingColonForParametersInUrl && (sb.string += ':' , sb);
      params[parameterIndex] == null?(sb.string += 'null' , sb):$append_3(sb, $replace(params[parameterIndex], '/', '--U972--'));
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
    $append_3($append_3((sb.string += 'no matching shellCreator found for route >>' , sb), route), '<< --> Routing aborted!');
    $doFire(this$static.eventBus, $addMessage($sdmOnly(($clinit_LogEvent() , new LogEvent), true), sb.string));
    throw toJs(new RouterException(sb.string));
  }
  routeValue = route;
  $equals_1(routeValue.substr(0, 1), '/') && (routeValue = (checkCriticalStringElementIndex(1, routeValue.length + 1) , routeValue.substr(1)));
  if (routeValue.indexOf('/') != -1) {
    searchRoute = routeValue;
    optionalRouterConfig = $findFirst($filter_0(new StreamImpl(null, new Spliterators$IteratorSpliterator(routerConfiguration.routers, 16)), new RouteParser$lambda$2$Type(searchRoute)));
    if (optionalRouterConfig.ref != null) {
      $setRoute(routeResult, (checkCriticalElement(optionalRouterConfig.ref != null) , castTo(optionalRouterConfig.ref, 34)).route);
      $setParameterKeys(routeResult, (checkCriticalElement(optionalRouterConfig.ref != null) , castTo(optionalRouterConfig.ref, 34)).parameters);
      if (routeResult.route.indexOf('*') != -1) {
        partsOfRoute = $split_0(routeValue, '/');
        compareRoute = (checkCriticalElement(optionalRouterConfig.ref != null) , castTo(optionalRouterConfig.ref, 34)).route;
        $equals_1(compareRoute.substr(0, 1), '/') && (compareRoute = (checkCriticalStringElementIndex(1, compareRoute.length + 1) , compareRoute.substr(1)));
        partsOfRouteFromConfiguration = $split_0(compareRoute, '/');
        for (i = 0; i < partsOfRouteFromConfiguration.length; i++) {
          if ($equals_1(partsOfRouteFromConfiguration[i], '*')) {
            if (partsOfRoute.length - 1 >= i) {
              parameterValue = $replace(partsOfRoute[i], '--U972--', '/');
              ($clinit_PropertyFactory() , INSTANCE).usingColonForParametersInUrl && parameterValue.length > 0 && $equals_1(parameterValue.substr(0, 1), ':') && (parameterValue = (checkCriticalStringElementIndex(1, parameterValue.length + 1) , parameterValue.substr(1)));
              $add(routeResult.parameterValues, parameterValue);
            }
             else {
              $add(routeResult.parameterValues, '');
            }
          }
        }
      }
    }
     else {
      sb = new StringBuilder;
      $append_3($append_3((sb.string += 'no matching route found for route >>' , sb), route), '<< --> Routing aborted!');
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
      $append_3($append_3((sb.string += 'no matching route for hash >>' , sb), route), '<< --> Routing aborted!');
      $doFire(this$static.eventBus, $addMessage($sdmOnly(($clinit_LogEvent() , new LogEvent), true), sb.string));
      throw toJs(new RouterException(sb.string));
    }
  }
  return routeResult;
}

function $setEventBus_1(this$static, eventBus){
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

defineClass(258, 1, {}, RouteParser);
var INSTANCE_7;
var Lcom_github_nalukit_nalu_client_internal_route_RouteParser_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'RouteParser', 258);
function RouteParser$0methodref$getRoute$Type(){
}

defineClass(259, 1, {}, RouteParser$0methodref$getRoute$Type);
_.apply_0 = function apply_10(arg0){
  return castTo(arg0, 61).route;
}
;
var Lcom_github_nalukit_nalu_client_internal_route_RouteParser$0methodref$getRoute$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'RouteParser/0methodref$getRoute$Type', 259);
function RouteParser$lambda$1$Type(routeResult_0){
  this.routeResult_0 = routeResult_0;
}

defineClass(260, 1, {}, RouteParser$lambda$1$Type);
_.test_0 = function test_11(arg0){
  return lambda$1(this.routeResult_0, castToString(arg0));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_RouteParser$lambda$1$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'RouteParser/lambda$1$Type', 260);
function RouteParser$lambda$2$Type(searchRoute_0){
  this.searchRoute_0 = searchRoute_0;
}

defineClass(261, 1, {}, RouteParser$lambda$2$Type);
_.test_0 = function test_12(arg0){
  return $clinit_RouteParser() , match_1(this.searchRoute_0, castTo(arg0, 34).route);
}
;
var Lcom_github_nalukit_nalu_client_internal_route_RouteParser$lambda$2$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'RouteParser/lambda$2$Type', 261);
function RouteParser$lambda$3$Type(finalSearchPart_0){
  this.finalSearchPart_0 = finalSearchPart_0;
}

defineClass(262, 1, {}, RouteParser$lambda$3$Type);
_.test_0 = function test_13(arg0){
  return lambda$3_0(this.finalSearchPart_0, castTo(arg0, 34));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_RouteParser$lambda$3$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'RouteParser/lambda$3$Type', 262);
function RouteParser$lambda$4$Type(){
}

defineClass(263, 1, {}, RouteParser$lambda$4$Type);
_.test_0 = function test_14(arg0){
  return lambda$4(castToString(arg0));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_RouteParser$lambda$4$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'RouteParser/lambda$4$Type', 263);
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

defineClass(367, 1, {}, RouteResult);
var Lcom_github_nalukit_nalu_client_internal_route_RouteResult_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'RouteResult', 367);
function $match_0(this$static, hash){
  return castTo($collect($filter_0(new StreamImpl(null, new Spliterators$IteratorSpliterator(this$static.routers, 16)), new RouterConfiguration$lambda$0$Type(hash)), of_0(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$42$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_0, 40, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)]))), 32);
}

function RouterConfiguration(){
  this.routers = new ArrayList;
  this.filters = new ArrayList;
}

function lambda$0_1(hash_0, routeConfig_1){
  return $match(routeConfig_1, hash_0);
}

defineClass(253, 1, {}, RouterConfiguration);
var Lcom_github_nalukit_nalu_client_internal_route_RouterConfiguration_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'RouterConfiguration', 253);
function RouterConfiguration$lambda$0$Type(hash_0){
  this.hash_0 = hash_0;
}

defineClass(254, 1, {}, RouterConfiguration$lambda$0$Type);
_.test_0 = function test_15(arg0){
  return lambda$0_1(this.hash_0, castTo(arg0, 34));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_RouterConfiguration$lambda$0$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'RouterConfiguration/lambda$0$Type', 254);
function RouterException(message){
  Exception.call(this, message);
}

defineClass(69, 18, {69:1, 4:1, 18:1, 12:1}, RouterException);
var Lcom_github_nalukit_nalu_client_internal_route_RouterException_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'RouterException', 69);
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

defineClass(272, 271, {}, RouterImpl);
var Lcom_github_nalukit_nalu_client_internal_route_RouterImpl_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'RouterImpl', 272);
function RouterImpl$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(273, 1, {}, RouterImpl$lambda$0$Type);
var Lcom_github_nalukit_nalu_client_internal_route_RouterImpl$lambda$0$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'RouterImpl/lambda$0$Type', 273);
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
      return $split_0((checkCriticalStringElementIndex(1, route.length + 1) , route.substr(1)), '/');
    }
    return stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['']);
  }
   else {
    return $split_0(route, '/');
  }
}

function RouterUtils(){
}

defineClass(87, 1, {}, RouterUtils);
var instance_1;
var Lcom_github_nalukit_nalu_client_internal_route_RouterUtils_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'RouterUtils', 87);
function ShellConfig(route, className){
  this.route = route;
  this.className = className;
}

defineClass(61, 1, {61:1}, ShellConfig);
var Lcom_github_nalukit_nalu_client_internal_route_ShellConfig_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'ShellConfig', 61);
function $match_3(this$static, hash){
  return castTo($get_6($findFirst($filter_0(new StreamImpl(null, new Spliterators$IteratorSpliterator(this$static.shells, 16)), new ShellConfiguration$lambda$0$Type(hash)))), 61);
}

function ShellConfiguration(){
  this.shells = new ArrayList;
}

function lambda$0_2(hash_0, shellConfig_1){
  return $equals_1(shellConfig_1.route, hash_0);
}

defineClass(251, 1, {}, ShellConfiguration);
var Lcom_github_nalukit_nalu_client_internal_route_ShellConfiguration_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'ShellConfiguration', 251);
function ShellConfiguration$lambda$0$Type(hash_0){
  this.hash_0 = hash_0;
}

defineClass(252, 1, {}, ShellConfiguration$lambda$0$Type);
_.test_0 = function test_16(arg0){
  return lambda$0_2(this.hash_0, castTo(arg0, 61));
}
;
var Lcom_github_nalukit_nalu_client_internal_route_ShellConfiguration$lambda$0$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.route', 'ShellConfiguration/lambda$0$Type', 252);
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

function lambda$0_3(shellOfRoute_0, s_1){
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

defineClass(364, 1, {}, RouteValidation$lambda$0$Type);
_.test_0 = function test_17(arg0){
  return lambda$0_3(this.shellOfRoute_0, castTo(arg0, 61));
}
;
var Lcom_github_nalukit_nalu_client_internal_validation_RouteValidation$lambda$0$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.validation', 'RouteValidation/lambda$0$Type', 364);
function RouteValidation$lambda$1$Type(finalSearchRoute_0){
  this.finalSearchRoute_0 = finalSearchRoute_0;
}

defineClass(365, 1, {}, RouteValidation$lambda$1$Type);
_.test_0 = function test_18(arg0){
  return match_1(this.finalSearchRoute_0, castTo(arg0, 34).route);
}
;
var Lcom_github_nalukit_nalu_client_internal_validation_RouteValidation$lambda$1$Type_2_classLit = createForClass('com.github.nalukit.nalu.client.internal.validation', 'RouteValidation/lambda$1$Type', 365);
function SeoData(){
}

defineClass(183, 1, {}, SeoData);
var Lcom_github_nalukit_nalu_client_seo_SeoData_2_classLit = createForClass('com.github.nalukit.nalu.client.seo', 'SeoData', 183);
function $clinit_SeoDataProvider(){
  $clinit_SeoDataProvider = emptyMethod;
  INSTANCE_8 = new SeoDataProvider;
}

function SeoDataProvider(){
  this.seoData = new SeoData;
}

defineClass(265, 1, {}, SeoDataProvider);
var INSTANCE_8;
var Lcom_github_nalukit_nalu_client_seo_SeoDataProvider_2_classLit = createForClass('com.github.nalukit.nalu.client.seo', 'SeoDataProvider', 265);
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
  splits = $split_0(route, '/');
  newRoute = new StringBuilder;
  for (i = 1; i < splits.length; i++) {
    s = splits[i];
    s == null || ($equals_1('*', s) || $equals_1(s.substr(0, 1), '{') && (suffixlength0 = '}'.length , $equals_1(s.substr(s.length - suffixlength0, suffixlength0), '}'))?(newRoute.string += '/*' , newRoute):$equals_1(s.substr(0, 1), ':') || $equals_1(s.substr(0, 1), '{') && (suffixlength = '}'.length , $equals_1(s.substr(s.length - suffixlength, suffixlength), '}'))?(newRoute.string += '/*' , newRoute):$append_3((newRoute.string += '/' , newRoute), s));
  }
  return newRoute.string;
}

defineClass(647, 1, {});
var Lcom_github_nalukit_nalu_plugin_core_web_client_AbstractClientLogger_2_classLit = createForClass('com.github.nalukit.nalu.plugin.core.web.client', 'AbstractClientLogger', 647);
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
      for (partOfContext$array = $split_0(pathName, '/') , partOfContext$index = 0 , partOfContext$max = partOfContext$array.length; partOfContext$index < partOfContext$max; ++partOfContext$index) {
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
    $forEach_2(stream_0($split_0(search, '&')), new NaluPluginCoreWeb$lambda$2$Type(queryParameters));
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
  $trim(newUrl).length == 0?route_0(($clinit_PropertyFactory() , INSTANCE).startRoute, !INSTANCE.stayOnSide):$handleRouting(handler.$$outer_0, newUrl);
}

function lambda$1_0(partOfContext_0, f_1){
  return $equals_1(f_1, '/' + partOfContext_0);
}

function lambda$2(queryParameters_0, s_1){
  var split_0;
  split_0 = $split_0(s_1, '=');
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

defineClass(338, 1, {}, NaluPluginCoreWeb$0methodref$getRoute$Type);
_.apply_0 = function apply_11(arg0){
  return castTo(arg0, 61).route;
}
;
var Lcom_github_nalukit_nalu_plugin_core_web_client_NaluPluginCoreWeb$0methodref$getRoute$Type_2_classLit = createForClass('com.github.nalukit.nalu.plugin.core.web.client', 'NaluPluginCoreWeb/0methodref$getRoute$Type', 338);
function NaluPluginCoreWeb$lambda$1$Type(partOfContext_0){
  this.partOfContext_0 = partOfContext_0;
}

defineClass(339, 1, {}, NaluPluginCoreWeb$lambda$1$Type);
_.test_0 = function test_19(arg0){
  return lambda$1_0(this.partOfContext_0, castToString(arg0));
}
;
var Lcom_github_nalukit_nalu_plugin_core_web_client_NaluPluginCoreWeb$lambda$1$Type_2_classLit = createForClass('com.github.nalukit.nalu.plugin.core.web.client', 'NaluPluginCoreWeb/lambda$1$Type', 339);
function NaluPluginCoreWeb$lambda$2$Type(queryParameters_0){
  this.queryParameters_0 = queryParameters_0;
}

defineClass(340, 1, $intern_7, NaluPluginCoreWeb$lambda$2$Type);
_.accept = function accept_18(arg0){
  lambda$2(this.queryParameters_0, castToString(arg0));
}
;
var Lcom_github_nalukit_nalu_plugin_core_web_client_NaluPluginCoreWeb$lambda$2$Type_2_classLit = createForClass('com.github.nalukit.nalu.plugin.core.web.client', 'NaluPluginCoreWeb/lambda$2$Type', 340);
function NaluPluginCoreWeb$lambda$3$Type(contextPath_0, handler_1){
  this.contextPath_0 = contextPath_0;
  this.handler_1 = handler_1;
}

defineClass(683, $wnd.Function, {}, NaluPluginCoreWeb$lambda$3$Type);
_.onInvoke = function onInvoke(arg0){
  return lambda$3_1(this.contextPath_0, this.handler_1, arg0);
}
;
function NaluPluginCoreWeb$lambda$4$Type(handler_0){
  this.handler_0 = handler_0;
}

defineClass(682, $wnd.Function, {}, NaluPluginCoreWeb$lambda$4$Type);
_.onInvoke = function onInvoke_0(arg0){
  return lambda$4_0(this.handler_0);
}
;
function NaluStartModel(startRoute){
  this.startRoute = startRoute;
}

defineClass(341, 1, {}, NaluStartModel);
var Lcom_github_nalukit_nalu_plugin_core_web_client_model_NaluStartModel_2_classLit = createForClass('com.github.nalukit.nalu.plugin.core.web.client.model', 'NaluStartModel', 341);
function DefaultElemental2ClientLogger(){
}

defineClass(335, 647, {}, DefaultElemental2ClientLogger);
var Lcom_github_nalukit_nalu_plugin_elemental2_client_DefaultElemental2ClientLogger_2_classLit = createForClass('com.github.nalukit.nalu.plugin.elemental2.client', 'DefaultElemental2ClientLogger', 335);
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
        selectorElement.removeChild(castToNative($get_4($asList(selectorElement.childNodes), i), $wnd.Node));
      }
    }
  }
}

function $setCustomConfirmPresenter(this$static, customConfirmPresenter){
  this$static.customConfirmPresenter = customConfirmPresenter;
}

function NaluPluginElemental2(){
}

defineClass(209, 1, {}, NaluPluginElemental2);
var Lcom_github_nalukit_nalu_plugin_elemental2_client_NaluPluginElemental2_2_classLit = createForClass('com.github.nalukit.nalu.plugin.elemental2.client', 'NaluPluginElemental2', 209);
function setUncaughtExceptionHandler(handler){
  uncaughtExceptionHandler = handler;
  maybeInitializeWindowOnError();
}

var uncaughtExceptionHandler = null;
defineClass(217, 97, $intern_2);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 217);
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

defineClass(58, 217, {58:1, 4:1, 18:1, 15:1, 12:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  return $ensureInit(this) , this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 58);
function escapeChar(c, escapeTable){
  var lookedUp = escapeTable_0[c.charCodeAt(0)];
  return lookedUp == null?c:lookedUp;
}

function escapeJsonForEval(toEscape){
  var escapeTable = getEscapeTable();
  var s = toEscape.replace(/[\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb]/g, function(x_0){
    return escapeChar(x_0, escapeTable);
  }
  );
  return s;
}

function escapeValue(toEscape){
  var escapeTable = getEscapeTable();
  var s = toEscape.replace(/[\x00-\x1f\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb"\\]/g, function(x_0){
    return escapeChar(x_0, escapeTable);
  }
  );
  return '"' + s + '"';
}

function getEscapeTable(){
  !escapeTable_0 && (escapeTable_0 = initEscapeTable());
  return escapeTable_0;
}

function initEscapeTable(){
  var out = ['\\u0000', '\\u0001', '\\u0002', '\\u0003', '\\u0004', '\\u0005', '\\u0006', '\\u0007', '\\b', '\\t', '\\n', '\\u000B', '\\f', '\\r', '\\u000E', '\\u000F', '\\u0010', '\\u0011', '\\u0012', '\\u0013', '\\u0014', '\\u0015', '\\u0016', '\\u0017', '\\u0018', '\\u0019', '\\u001A', '\\u001B', '\\u001C', '\\u001D', '\\u001E', '\\u001F'];
  out[34] = '\\"';
  out[92] = '\\\\';
  out[173] = '\\u00ad';
  out[1536] = '\\u0600';
  out[1537] = '\\u0601';
  out[1538] = '\\u0602';
  out[1539] = '\\u0603';
  out[1757] = '\\u06dd';
  out[1807] = '\\u070f';
  out[6068] = '\\u17b4';
  out[6069] = '\\u17b5';
  out[8203] = '\\u200b';
  out[8204] = '\\u200c';
  out[8205] = '\\u200d';
  out[8206] = '\\u200e';
  out[8207] = '\\u200f';
  out[8232] = '\\u2028';
  out[8233] = '\\u2029';
  out[8234] = '\\u202a';
  out[8235] = '\\u202b';
  out[8236] = '\\u202c';
  out[8237] = '\\u202d';
  out[8238] = '\\u202e';
  out[8288] = '\\u2060';
  out[8289] = '\\u2061';
  out[8290] = '\\u2062';
  out[8291] = '\\u2063';
  out[8292] = '\\u2064';
  out[8298] = '\\u206a';
  out[8299] = '\\u206b';
  out[8300] = '\\u206c';
  out[8301] = '\\u206d';
  out[8302] = '\\u206e';
  out[8303] = '\\u206f';
  out[65279] = '\\ufeff';
  out[65529] = '\\ufff9';
  out[65530] = '\\ufffa';
  out[65531] = '\\ufffb';
  return out;
}

var escapeTable_0;
defineClass(618, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 618);
function $clinit_Impl(){
  $clinit_Impl = emptyMethod;
  !!($clinit_StackTraceCreator() , collector_0);
}

function apply_12(jsFunction, thisObj, args){
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

function entry_0(jsFunction){
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
        return apply_12(jsFunction, thisObj, args);
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 12)) {
          t = $e0;
          reportUncaughtException(t, true);
          return undefined;
        }
         else 
          throw toJs($e0);
      }
    }
     else {
      return apply_12(jsFunction, thisObj, args);
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
    reportToBrowser(instanceOf(e, 58)?castTo(e, 58).getThrown():e);
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
      if (instanceOf($e0, 12)) {
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

defineClass(235, 618, {}, SchedulerImpl);
var INSTANCE_9;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 235);
function $cancel(this$static){
  var xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  $clearOnReadyStateChange(xhr);
  xhr.abort();
}

function $fireOnResponseReceived(this$static, callback){
  var response, xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  response = new ResponseImpl(xhr);
  $onResponseReceived(callback, response);
}

function $fireOnTimeout(this$static){
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel(this$static);
  alert_0('Error: ' + new RequestTimeoutException(this$static.timeoutMillis));
}

function Request_0(xmlHttpRequest, timeoutMillis){
  this.timer = new Request$1(this);
  if (!xmlHttpRequest) {
    throw toJs(new NullPointerException);
  }
  if (timeoutMillis < 0) {
    throw toJs(new IllegalArgumentException);
  }
  this.timeoutMillis = timeoutMillis;
  this.xmlHttpRequest = xmlHttpRequest;
  timeoutMillis > 0 && $schedule(this.timer, timeoutMillis);
}

defineClass(527, 1, {}, Request_0);
_.timeoutMillis = 0;
var Lcom_google_gwt_http_client_Request_2_classLit = createForClass('com.google.gwt.http.client', 'Request', 527);
function $cancel_0(this$static){
  if (!this$static.timerId) {
    return;
  }
  ++this$static.cancelCounter;
  this$static.isRepeating?clearInterval_0(this$static.timerId.value_0):clearTimeout_0(this$static.timerId.value_0);
  this$static.timerId = null;
}

function $schedule(this$static, delayMillis){
  if (delayMillis < 0) {
    throw toJs(new IllegalArgumentException_0('must be non-negative'));
  }
  !!this$static.timerId && $cancel_0(this$static);
  this$static.isRepeating = false;
  this$static.timerId = valueOf(setTimeout_0(createCallback(this$static, this$static.cancelCounter), delayMillis));
}

function clearInterval_0(timerId){
  $wnd.clearInterval(timerId);
}

function clearTimeout_0(timerId){
  $wnd.clearTimeout(timerId);
}

function createCallback(timer, cancelCounter){
  return $entry(function(){
    timer.fire(cancelCounter);
  }
  );
}

function setTimeout_0(func, time){
  return $wnd.setTimeout(func, time);
}

defineClass(528, 1, {});
_.fire = function fire(scheduleCancelCounter){
  if (scheduleCancelCounter != this.cancelCounter) {
    return;
  }
  this.isRepeating || (this.timerId = null);
  $fireOnTimeout(this.this$01);
}
;
_.cancelCounter = 0;
_.isRepeating = false;
_.timerId = null;
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client', 'Timer', 528);
function Request$1(this$0){
  this.this$01 = this$0;
}

defineClass(529, 528, {}, Request$1);
var Lcom_google_gwt_http_client_Request$1_2_classLit = createForClass('com.google.gwt.http.client', 'Request/1', 529);
function $clinit_RequestBuilder(){
  $clinit_RequestBuilder = emptyMethod;
  new RequestBuilder$Method('DELETE');
  GET = new RequestBuilder$Method('GET');
  new RequestBuilder$Method('HEAD');
  new RequestBuilder$Method('POST');
  new RequestBuilder$Method('PUT');
}

function $doSend(this$static, callback){
  var e, request, requestPermissionException, xmlHttpRequest;
  xmlHttpRequest = new $wnd.XMLHttpRequest;
  try {
    $open(xmlHttpRequest, this$static.httpMethod, this$static.url_0);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 58)) {
      e = $e0;
      requestPermissionException = new RequestPermissionException(this$static.url_0);
      $initCause(requestPermissionException, new RequestException(e.getMessage()));
      throw toJs(requestPermissionException);
    }
     else 
      throw toJs($e0);
  }
  $setHeaders(this$static, xmlHttpRequest);
  this$static.includeCredentials && (xmlHttpRequest.withCredentials = true , undefined);
  request = new Request_0(xmlHttpRequest, this$static.timeoutMillis);
  $setOnReadyStateChange(xmlHttpRequest, new RequestBuilder$1(request, callback));
  try {
    xmlHttpRequest.send(null);
  }
   catch ($e1) {
    $e1 = toJava($e1);
    if (instanceOf($e1, 58)) {
      e = $e1;
      throw toJs(new RequestException(e.getMessage()));
    }
     else 
      throw toJs($e1);
  }
  return request;
}

function $setHeaders(this$static, xmlHttpRequest){
  var e, header, header$iterator;
  if (!!this$static.headers_0 && $size(this$static.headers_0) > 0) {
    for (header$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.headers_0)).this$01); header$iterator.hasNext;) {
      header = $next(header$iterator);
      try {
        $setRequestHeader(xmlHttpRequest, castToString(header.getKey()), castToString(header.getValue()));
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 58)) {
          e = $e0;
          throw toJs(new RequestException(e.getMessage()));
        }
         else 
          throw toJs($e0);
      }
    }
  }
   else {
    xmlHttpRequest.setRequestHeader('Content-Type', 'text/plain; charset=utf-8');
  }
}

function RequestBuilder(httpMethod, url_0){
  $clinit_RequestBuilder();
  RequestBuilder_0.call(this, !httpMethod?null:httpMethod.name_0, url_0);
}

function RequestBuilder_0(httpMethod, url_0){
  throwIfEmptyOrNull('httpMethod', httpMethod);
  throwIfEmptyOrNull('url', url_0);
  this.httpMethod = httpMethod;
  this.url_0 = url_0;
}

defineClass(194, 1, {}, RequestBuilder);
_.includeCredentials = false;
_.timeoutMillis = 0;
var GET;
var Lcom_google_gwt_http_client_RequestBuilder_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder', 194);
function RequestBuilder$1(val$request, val$callback){
  this.val$request2 = val$request;
  this.val$callback3 = val$callback;
}

defineClass(519, 1, {}, RequestBuilder$1);
_.onReadyStateChange = function onReadyStateChange(xhr){
  if (xhr.readyState == 4) {
    $clearOnReadyStateChange(xhr);
    $fireOnResponseReceived(this.val$request2, this.val$callback3);
  }
}
;
var Lcom_google_gwt_http_client_RequestBuilder$1_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/1', 519);
function RequestBuilder$Method(name_0){
  this.name_0 = name_0;
}

defineClass(108, 1, {}, RequestBuilder$Method);
_.toString_0 = function toString_5(){
  return this.name_0;
}
;
var Lcom_google_gwt_http_client_RequestBuilder$Method_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/Method', 108);
function RequestException(message){
  Exception.call(this, message);
}

defineClass(62, 18, $intern_8, RequestException);
var Lcom_google_gwt_http_client_RequestException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestException', 62);
function RequestPermissionException(url_0){
  RequestException.call(this, 'The URL ' + url_0 + ' is invalid or violates the same-origin security restriction');
}

defineClass(535, 62, $intern_8, RequestPermissionException);
var Lcom_google_gwt_http_client_RequestPermissionException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestPermissionException', 535);
function RequestTimeoutException(timeoutMillis){
  RequestException.call(this, 'A request timeout has expired after ' + timeoutMillis + ' ms');
}

defineClass(584, 62, $intern_8, RequestTimeoutException);
var Lcom_google_gwt_http_client_RequestTimeoutException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestTimeoutException', 584);
defineClass(655, 1, {});
var Lcom_google_gwt_http_client_Response_2_classLit = createForClass('com.google.gwt.http.client', 'Response', 655);
function ResponseImpl(xmlHttpRequest){
  this.xmlHttpRequest = xmlHttpRequest;
}

defineClass(585, 655, {}, ResponseImpl);
var Lcom_google_gwt_http_client_ResponseImpl_2_classLit = createForClass('com.google.gwt.http.client', 'ResponseImpl', 585);
function throwIfEmptyOrNull(name_0, value_0){
  throwIfNull(name_0, value_0);
  if (0 == $trim(value_0).length) {
    throw toJs(new IllegalArgumentException_0(name_0 + ' cannot be empty'));
  }
}

function throwIfNull(name_0, value_0){
  if (null == value_0) {
    throw toJs(new NullPointerException_1(name_0 + ' cannot be null'));
  }
}

defineClass(653, 1, {});
_.isArray_0 = function isArray(){
  return null;
}
;
_.isObject = function isObject(){
  return null;
}
;
_.isString = function isString(){
  return null;
}
;
var Lcom_google_gwt_json_client_JSONValue_2_classLit = createForClass('com.google.gwt.json.client', 'JSONValue', 653);
function $get_0(this$static, index_0){
  var v = this$static.jsArray[index_0];
  var func = ($clinit_JSONParser() , typeMap)[typeof v];
  return func?func(v):throwUnknownTypeException(typeof v);
}

function JSONArray(arr){
  this.jsArray = arr;
}

defineClass(154, 653, {154:1}, JSONArray);
_.equals_0 = function equals_1(other){
  if (!instanceOf(other, 154)) {
    return false;
  }
  return $equals_0(this.jsArray, castTo(other, 154).jsArray);
}
;
_.hashCode_0 = function hashCode_2(){
  return $hashCode(this.jsArray);
}
;
_.isArray_0 = function isArray_0(){
  return this;
}
;
_.toString_0 = function toString_6(){
  var c, i, sb;
  sb = new StringBuilder_1('[');
  for (i = 0 , c = this.jsArray.length; i < c; i++) {
    i > 0 && (sb.string += ',' , sb);
    $append_2(sb, $get_0(this, i));
  }
  sb.string += ']';
  return sb.string;
}
;
var Lcom_google_gwt_json_client_JSONArray_2_classLit = createForClass('com.google.gwt.json.client', 'JSONArray', 154);
function $clinit_JSONBoolean(){
  $clinit_JSONBoolean = emptyMethod;
  FALSE = new JSONBoolean(false);
  TRUE = new JSONBoolean(true);
}

function JSONBoolean(value_0){
  this.value_0 = value_0;
}

defineClass(197, 653, {}, JSONBoolean);
_.toString_0 = function toString_7(){
  return $clinit_Boolean() , '' + this.value_0;
}
;
_.value_0 = false;
var FALSE, TRUE;
var Lcom_google_gwt_json_client_JSONBoolean_2_classLit = createForClass('com.google.gwt.json.client', 'JSONBoolean', 197);
function JSONException(message){
  RuntimeException_0.call(this, message);
}

function JSONException_0(cause){
  RuntimeException_2.call(this, cause);
}

defineClass(153, 15, $intern_2, JSONException, JSONException_0);
var Lcom_google_gwt_json_client_JSONException_2_classLit = createForClass('com.google.gwt.json.client', 'JSONException', 153);
function $clinit_JSONNull(){
  $clinit_JSONNull = emptyMethod;
  instance_2 = new JSONNull;
}

function JSONNull(){
}

defineClass(552, 653, {}, JSONNull);
_.toString_0 = function toString_8(){
  return 'null';
}
;
var instance_2;
var Lcom_google_gwt_json_client_JSONNull_2_classLit = createForClass('com.google.gwt.json.client', 'JSONNull', 552);
function JSONNumber(value_0){
  this.value_0 = value_0;
}

defineClass(126, 653, {126:1}, JSONNumber);
_.equals_0 = function equals_2(other){
  if (!instanceOf(other, 126)) {
    return false;
  }
  return this.value_0 == castTo(other, 126).value_0;
}
;
_.hashCode_0 = function hashCode_3(){
  return $hashCode_1(this.value_0);
}
;
_.toString_0 = function toString_9(){
  return this.value_0 + '';
}
;
_.value_0 = 0;
var Lcom_google_gwt_json_client_JSONNumber_2_classLit = createForClass('com.google.gwt.json.client', 'JSONNumber', 126);
function $computeKeys0(this$static, result){
  var jsObject = this$static.jsObject;
  var i = 0;
  for (var key in jsObject) {
    jsObject.hasOwnProperty(key) && (result[i++] = key);
  }
  return result;
}

function $get_1(this$static, key){
  if (key == null) {
    throw toJs(new NullPointerException);
  }
  return $get0(this$static, key);
}

function $get0(this$static, key){
  var jsObject = this$static.jsObject;
  var v;
  key = String(key);
  jsObject.hasOwnProperty(key) && (v = jsObject[key]);
  var func = ($clinit_JSONParser() , typeMap)[typeof v];
  var ret = func?func(v):throwUnknownTypeException(typeof v);
  return ret;
}

function $toString_0(this$static){
  var first, key, key$array, key$index, key$max, keys_0, sb;
  sb = new StringBuilder_1('{');
  first = true;
  keys_0 = $computeKeys0(this$static, initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 6, 1));
  for (key$array = keys_0 , key$index = 0 , key$max = key$array.length; key$index < key$max; ++key$index) {
    key = key$array[key$index];
    first?(first = false):(sb.string += ', ' , sb);
    $append_3(sb, escapeValue(key));
    sb.string += ':';
    $append_2(sb, $get_1(this$static, key));
  }
  sb.string += '}';
  return sb.string;
}

function JSONObject(jsValue){
  this.jsObject = jsValue;
}

defineClass(124, 653, {124:1}, JSONObject);
_.equals_0 = function equals_3(other){
  if (!instanceOf(other, 124)) {
    return false;
  }
  return $equals_0(this.jsObject, castTo(other, 124).jsObject);
}
;
_.hashCode_0 = function hashCode_4(){
  return $hashCode(this.jsObject);
}
;
_.isObject = function isObject_0(){
  return this;
}
;
_.toString_0 = function toString_10(){
  return $toString_0(this);
}
;
var Lcom_google_gwt_json_client_JSONObject_2_classLit = createForClass('com.google.gwt.json.client', 'JSONObject', 124);
function $clinit_JSONParser(){
  $clinit_JSONParser = emptyMethod;
  typeMap = {'boolean':createBoolean, 'number':createNumber, 'string':createString, 'object':createObject, 'function':createObject, 'undefined':createUndefined};
}

function createBoolean(v){
  return $clinit_JSONBoolean() , v?TRUE:FALSE;
}

function createNumber(v){
  return new JSONNumber(v);
}

function createObject(o){
  if (!o) {
    return $clinit_JSONNull() , instance_2;
  }
  var v = o.valueOf?o.valueOf():o;
  if (v !== o) {
    var func = typeMap[typeof v];
    return func?func(v):throwUnknownTypeException(typeof v);
  }
   else if (o instanceof Array || o instanceof $wnd.Array) {
    return new JSONArray(o);
  }
   else {
    return new JSONObject(o);
  }
}

function createString(v){
  return new JSONString(v);
}

function createUndefined(){
  return null;
}

function evaluate(json, strict){
  var v;
  if (strict) {
    try {
      v = JSON.parse(json);
    }
     catch (e) {
      return throwJSONException('Error parsing JSON: ' + e);
    }
  }
   else {
    json = escapeJsonForEval(json);
    try {
      v = eval('(' + json + ')');
    }
     catch (e) {
      return throwJSONException('Error parsing JSON: ' + e);
    }
  }
  var func = typeMap[typeof v];
  return func?func(v):throwUnknownTypeException(typeof v);
}

function parse_0(jsonString){
  $clinit_JSONParser();
  var ex;
  if (jsonString == null) {
    throw toJs(new NullPointerException);
  }
  if (jsonString.length == 0) {
    throw toJs(new IllegalArgumentException_0('empty argument'));
  }
  try {
    return evaluate(jsonString, true);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 58)) {
      ex = $e0;
      throw toJs(new JSONException_0(ex));
    }
     else 
      throw toJs($e0);
  }
}

function throwJSONException(message){
  throw toJs(new JSONException(message));
}

function throwUnknownTypeException(typeString){
  $clinit_JSONParser();
  throw toJs(new JSONException("Unexpected typeof result '" + typeString + "'; please report this bug to the GWT team"));
}

var typeMap;
function JSONString(value_0){
  if (value_0 == null) {
    throw toJs(new NullPointerException);
  }
  this.value_0 = value_0;
}

defineClass(127, 653, {127:1}, JSONString);
_.equals_0 = function equals_4(other){
  if (!instanceOf(other, 127)) {
    return false;
  }
  return $equals_1(this.value_0, castTo(other, 127).value_0);
}
;
_.hashCode_0 = function hashCode_5(){
  return $hashCode_2(this.value_0);
}
;
_.isString = function isString_0(){
  return this;
}
;
_.toString_0 = function toString_11(){
  return escapeValue(this.value_0);
}
;
var Lcom_google_gwt_json_client_JSONString_2_classLit = createForClass('com.google.gwt.json.client', 'JSONString', 127);
function create(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_9;
  a1 = value_0 >> 22 & $intern_9;
  a2 = value_0 < 0?$intern_10:0;
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
  if (b.h == $intern_11 && b.m == 0 && b.l == 0) {
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
  if (a.h == $intern_11 && a.m == 0 && a.l == 0) {
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
  if (a.h == $intern_11 && a.m == 0 && a.l == 0) {
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
  neg0 = ~a.l + 1 & $intern_9;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_9;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_10;
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
  return a.l + a.m * $intern_12 + a.h * $intern_13;
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
  a.l = sum0 & $intern_9;
  a.m = sum1 & $intern_9;
  a.h = sum2 & $intern_10;
  return true;
}

var remainder;
function add_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l + b.l;
  sum1 = a.m + b.m + (sum0 >> 22);
  sum2 = a.h + b.h + (sum1 >> 22);
  return create0(sum0 & $intern_9, sum1 & $intern_9, sum2 & $intern_10);
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
  if (value_0 >= $intern_13) {
    a2 = round_int(value_0 / $intern_13);
    value_0 -= a2 * $intern_13;
  }
  a1 = 0;
  if (value_0 >= $intern_12) {
    a1 = round_int(value_0 / $intern_12);
    value_0 -= a1 * $intern_12;
  }
  a0 = round_int(value_0);
  result = create0(a0, a1, a2);
  negative && negate(result);
  return result;
}

function neg(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_9;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_9;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_10;
  return create0(neg0, neg1, neg2);
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
  return create0(res0 & $intern_9, res1 & $intern_9, res2 & $intern_10);
}

function shr(a, n){
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a.h;
  negative = (a2 & $intern_11) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?$intern_10:0;
    res1 = a2 >> n - 22;
    res0 = a.m >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?$intern_10:0;
    res1 = negative?$intern_9:0;
    res0 = a2 >> n - 44;
  }
  return create0(res0 & $intern_9, res1 & $intern_9, res2 & $intern_10);
}

function shru(a, n){
  var a2, res0, res1, res2;
  n &= 63;
  a2 = a.h & $intern_10;
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
  return create0(res0 & $intern_9, res1 & $intern_9, res2 & $intern_10);
}

function sub_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return create0(sum0 & $intern_9, sum1 & $intern_9, sum2 & $intern_10);
}

function toDouble(a){
  if (compare(a, ($clinit_BigLongLib$Const() , ZERO)) < 0) {
    return -toDoubleHelper(neg(a));
  }
  return a.l + a.m * $intern_12 + a.h * $intern_13;
}

function toInt(a){
  return a.l | a.m << 22;
}

function toString_12(a){
  var digits, rem, res, tenPowerLong, zeroesNeeded;
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    return '0';
  }
  if (a.h == $intern_11 && a.m == 0 && a.l == 0) {
    return '-9223372036854775808';
  }
  if (a.h >> 19 != 0) {
    return '-' + toString_12(neg(a));
  }
  rem = a;
  res = '';
  while (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
    tenPowerLong = create(1000000000);
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
  MAX_VALUE = create0($intern_9, $intern_9, 524287);
  MIN_VALUE = create0(0, 0, $intern_11);
  ONE = create(1);
  create(2);
  ZERO = create(0);
}

var MAX_VALUE, MIN_VALUE, ONE, ZERO;
function add_1(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a + b;
    if ($intern_14 < result && result < $intern_13) {
      return result;
    }
  }
  return createLongEmul(add_0(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
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
    return big_0.l + big_0.m * $intern_12;
  }
  if (a2 == $intern_10) {
    return big_0.l + big_0.m * $intern_12 - $intern_13;
  }
  return big_0;
}

function eq(a, b){
  return compare_0(a, b) == 0;
}

function fromDouble_0(value_0){
  if ($intern_14 < value_0 && value_0 < $intern_13) {
    return value_0 < 0?$wnd.Math.ceil(value_0):$wnd.Math.floor(value_0);
  }
  return createLongEmul(fromDouble(value_0));
}

function gt(a, b){
  return compare_0(a, b) > 0;
}

function isSmallLong0(value_0){
  return typeof value_0 === 'number';
}

function mod(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a % b;
    if ($intern_14 < result && result < $intern_13) {
      return result;
    }
  }
  return createLongEmul((divMod(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b, true) , remainder));
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

function toBigLong(longValue){
  var a0, a1, a3, value_0;
  value_0 = longValue;
  a3 = 0;
  if (value_0 < 0) {
    value_0 += $intern_13;
    a3 = $intern_10;
  }
  a1 = round_int(value_0 / $intern_12);
  a0 = round_int(value_0 - a1 * $intern_12);
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

function toString_13(a){
  if (isSmallLong0(a)) {
    return '' + a;
  }
  return toString_12(a);
}

function xor_0(a, b){
  return createLongEmul(xor(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function init(){
  var application, element;
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad();
  $clinit_AppEntryPoint();
  setUncaughtExceptionHandler(new AppEntryPoint$lambda$0$Type);
  $clinit_DominoRestConfig();
  $setCondensed($setDefaultFieldsStyle(($clinit_DominoUIConfig() , INSTANCE_12), ($clinit_FieldStyle() , ROUNDED)));
  application = new NotebookApplicationImpl;
  $run(application, new NaluPluginElemental2);
  element = ($clinit_DomGlobal() , document_0).getElementById('LoadingSpinner');
  element != null && element.remove();
  ($clinit_ConsoleLoggerAdapter() , INFO_ENABLED) && $wnd.goog.global.console.info('Notebook UI have been initialized.');
}

function $setItem(this$static, key, data_0){
  $setItem_0(this$static.storage_0, key, data_0);
}

function Storage_0(){
  this.storage_0 = 'sessionStorage';
}

defineClass(196, 1, {}, Storage_0);
var sessionStorage_0;
var Lcom_google_gwt_storage_client_Storage_2_classLit = createForClass('com.google.gwt.storage.client', 'Storage', 196);
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

function alert_0(msg){
  $wnd.alert(msg);
}

function assertCompileTimeUserAgent(){
  var runtimeValue;
  runtimeValue = $getRuntimeValue();
  if (!$equals_1('safari', runtimeValue)) {
    throw toJs(new UserAgentAsserter$UserAgentAssertionError(runtimeValue));
  }
}

function Error_0(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(65, 12, $intern_15);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 65);
defineClass(38, 65, $intern_15);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 38);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue){
  Error_0.call(this, 'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.' == null?'null':toString_14('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 12)?castTo('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 12):null);
}

defineClass(201, 38, $intern_15, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 201);
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

function $clearOnReadyStateChange(this$static){
  this$static.onreadystatechange = function(){
  }
  ;
}

function $open(this$static, httpMethod, url_0){
  this$static.open(httpMethod, url_0, true);
}

function $setOnReadyStateChange(this$static, handler){
  var _this = this$static;
  this$static.onreadystatechange = $entry(function(){
    handler.onReadyStateChange(_this);
  }
  );
}

function $setRequestHeader(this$static, header, value_0){
  this$static.setRequestHeader(header, value_0);
}

function $getApplicationBuildTimeStr(this$static){
  return $format(($clinit_DateTimeFormat_0() , getFormat(new DefaultDateTimeFormatInfo)), castTo($get(this$static.applicationContext, 'APPLICATION_BUILD_TIME'), 60), null);
}

function $setRealName(this$static, realName){
  $put(this$static.applicationContext, 'realName', realName);
  $setItem((!sessionStorage_0 && ($clinit_Storage$StorageSupportDetector() , sessionStorageSupported) && (sessionStorage_0 = new Storage_0) , sessionStorage_0), 'realName', realName);
}

function $setUserId(this$static, userId){
  $put(this$static.applicationContext, 'userId', userId);
  $setItem((!sessionStorage_0 && ($clinit_Storage$StorageSupportDetector() , sessionStorageSupported) && (sessionStorage_0 = new Storage_0) , sessionStorage_0), 'userId', userId);
}

function AppContext(){
  this.applicationContext = new ContextDataStore;
  new ContextDataStore;
}

defineClass(234, 233, {}, AppContext);
var Lcom_itangsoft_notebook_AppContext_2_classLit = createForClass('com.itangsoft.notebook', 'AppContext', 234);
function $clinit_AppEntryPoint(){
  $clinit_AppEntryPoint = emptyMethod;
  new ConsoleLoggerAdapter(($ensureNamesAreInitialized(Lcom_itangsoft_notebook_AppEntryPoint_2_classLit) , Lcom_itangsoft_notebook_AppEntryPoint_2_classLit.typeName));
}

var Lcom_itangsoft_notebook_AppEntryPoint_2_classLit = createForClass('com.itangsoft.notebook', 'AppEntryPoint', null);
function AppEntryPoint$lambda$0$Type(){
}

defineClass(207, 1, {}, AppEntryPoint$lambda$0$Type);
var Lcom_itangsoft_notebook_AppEntryPoint$lambda$0$Type_2_classLit = createForClass('com.itangsoft.notebook', 'AppEntryPoint/lambda$0$Type', 207);
function $load(finishLoadCommand){
  var element, element$iterator, link_0, nodeList;
  ($clinit_DomGlobal() , document_0).title = '\u4E91\u7B14\u8BB0';
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
  $setApplicationBuildTime(this.context, new Date_1(1703606607541));
}

defineClass(208, 227, {}, NotebookApplicationImpl);
var Lcom_itangsoft_notebook_NotebookApplicationImpl_2_classLit = createForClass('com.itangsoft.notebook', 'NotebookApplicationImpl', 208);
function BaseComponentController(){
  this.globalHandlerRegistrations = new HandlerRegistrations;
  this.handlerRegistrations = new HandlerRegistrations;
  this.compositeControllers = new HashMap;
  this.mode_0 = ($clinit_IsController$Mode() , CREATE);
}

defineClass(120, 48, {48:1});
var Lcom_itangsoft_notebook_base_BaseComponentController_2_classLit = createForClass('com.itangsoft.notebook.base', 'BaseComponentController', 120);
function LoginFilter(){
}

defineClass(337, 648, {615:1}, LoginFilter);
var Lcom_itangsoft_notebook_filter_LoginFilter_2_classLit = createForClass('com.itangsoft.notebook.filter', 'LoginFilter', 337);
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

function $getZIndex(this$static){
  if (this$static.element_3().hasAttribute('dui-z-index')) {
    return __parseAndValidateInt(this$static.element_3().getAttribute('dui-z-index'));
  }
  return -1;
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

function $id(this$static, id_0){
  return this$static.wrappedElement.id = id_0 , this$static.element_0;
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
  this$static.wrappedElement.insertBefore(newNode.icon_0.wrappedElement, this$static.wrappedElement.firstChild);
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

function $lambda$0_0(this$static){
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

function $lambda$2(this$static, element_1){
  this$static.style_0 = new Style(element_1);
  this$static.styleInitializer = new BaseDominoElement$lambda$3$Type;
}

function $lambda$4(this$static, evt_0){
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
  $add(this$static.attachObservers, observerCallback);
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
  $add(this$static.detachObservers, observerCallback);
  $clinit_ElementUtil();
  startObserving();
  return this$static.element_0;
}

function $querySelectorAll(this$static, selectors){
  var elements;
  elements = this$static.element_0.element_3().querySelectorAll(selectors);
  return castTo($collect($map($map(new StreamImpl(null, new Spliterators$IteratorSpliterator($asList(elements), 16)), new BaseDominoElement$0methodref$uncheckedCast$Type), new BaseDominoElement$1methodref$of$Type), of_0(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$42$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_0, 40, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)]))), 32);
}

function $remove_0(this$static){
  this$static.element_3().remove();
  return this$static.element_0;
}

function $removeAttribute(this$static, name_0){
  this$static.wrappedElement.removeAttribute(name_0);
  return this$static.element_0;
}

function $removeChild(this$static, node){
  this$static.wrappedElement.removeChild(node);
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

function $setAttribute_1(this$static){
  this$static.wrappedElement.setAttribute('spellcheck', true);
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

function $setId(this$static, id_0){
  this$static.element_3().id = id_0;
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
  $toggleDisplay_1((!this$static.collapsible_0 && (this$static.collapsible_0 = new Collapsible(this$static.wrappedElement)) , this$static.collapsible_0), state);
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

defineClass(9, 1, $intern_16);
_.getCollapsible = function getCollapsible(){
  return !this.collapsible_0 && (this.collapsible_0 = new Collapsible(this.element_3())) , this.collapsible_0;
}
;
_.remove_0 = function remove_0(){
  return $remove_0(this);
}
;
var ATTACH_UID_KEY = 'dui-on-attach-uid', DETACH_UID_KEY = 'dui-on-detach-uid';
var Lorg_dominokit_domino_ui_utils_BaseDominoElement_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'BaseDominoElement', 9);
function $setLogo(this$static, image){
  $appendChild(castTo($clearElement(this$static.header.logo), 3), image);
}

function $setVersion(this$static, version){
  $appendChild(castTo($clearElement(this$static.footer.middleElement), 3), of_2('\u8F6F\u4EF6\u7248\u672C\uFF1A' + version));
}

function $show_0(this$static, theme){
  $apply_1(new Theme(theme));
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

defineClass(190, 9, $intern_16, AppLayout);
_.element_3 = function element_3(){
  return castToNative(this.root_0.wrappedElement, $wnd.HTMLDivElement);
}
;
var Lcom_itangsoft_notebook_layout_AppLayout_2_classLit = createForClass('com.itangsoft.notebook.layout', 'AppLayout', 190);
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

defineClass(463, 9, $intern_16, Body);
_.element_3 = function element_4(){
  return this.root_0.wrappedElement;
}
;
var Lcom_itangsoft_notebook_layout_Body_2_classLit = createForClass('com.itangsoft.notebook.layout', 'Body', 463);
function Content(){
  BaseDominoElement.call(this);
  this.root_0 = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element), 'layout-content'), 3);
  $init(this, this);
}

defineClass(443, 9, $intern_16, Content);
_.element_3 = function element_5(){
  return castToNative(this.root_0.wrappedElement, $wnd.HTMLDivElement);
}
;
var Lcom_itangsoft_notebook_layout_Content_2_classLit = createForClass('com.itangsoft.notebook.layout', 'Content', 443);
function Footer(){
  BaseDominoElement.call(this);
  this.root_0 = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('footer'), $wnd.HTMLElement))).element), 'layout-footer'), 3);
  this.leftElement = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), 'layout-footer-left'), 3);
  this.middleElement = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), 'layout-footer-middle'), 3);
  this.rightElement = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), 'layout-footer-right'), 3);
  $init(this, this);
  $appendChild_0(this.root_0, $css(castTo($appendChild_0(castTo($appendChild_0(castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), this.leftElement), 3), this.middleElement), 3), this.rightElement), 3), 'layout-footer-container'));
}

defineClass(464, 9, $intern_16, Footer);
_.element_3 = function element_6(){
  return this.root_0.wrappedElement;
}
;
var Lcom_itangsoft_notebook_layout_Footer_2_classLit = createForClass('com.itangsoft.notebook.layout', 'Footer', 464);
function Header(){
  BaseDominoElement.call(this);
  this.root_0 = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('header'), $wnd.HTMLElement))).element), 'layout-header'), 3);
  this.logo = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('a'), $wnd.HTMLElement))).element), 'layout-header-logo'), 3);
  this.title_0 = new DominoElement($css_1(new HtmlContentBuilder(castToNative(document_0.createElement('a'), $wnd.HTMLElement)), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['layout-header-title'])).element);
  this.toolbar_0 = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('ul'), $wnd.HTMLElement))).element), 'layout-header-toolbar'), 3);
  this.avatar = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), 'layout-header-avatar'), 3);
  $init(this, this);
  $appendChild_0(this.root_0, $css($appendChild_2($appendChild_2($appendChild_2($appendChild_2(new FlexLayout, castTo($appendChild_0(new FlexItem, this.logo), 14)), $setAlignItems($setDisplay($setFlex(castTo($appendChild_0(new FlexItem, this.title_0), 14))))), castTo($appendChild_0(new FlexItem, this.toolbar_0), 14)), castTo($appendChild_0(new FlexItem, this.avatar), 14)), 'layout-header-container'));
}

defineClass(462, 9, $intern_16, Header);
_.element_3 = function element_7(){
  return this.root_0.wrappedElement;
}
;
var Lcom_itangsoft_notebook_layout_Header_2_classLit = createForClass('com.itangsoft.notebook.layout', 'Header', 462);
function LeftPanel(){
  BaseDominoElement.call(this);
  this.root_0 = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element), 'layout-left-panel'), 3);
  $init(this, this);
}

defineClass(442, 9, $intern_16, LeftPanel);
_.element_3 = function element_8(){
  return castToNative(this.root_0.wrappedElement, $wnd.HTMLDivElement);
}
;
var Lcom_itangsoft_notebook_layout_LeftPanel_2_classLit = createForClass('com.itangsoft.notebook.layout', 'LeftPanel', 442);
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

defineClass(521, 9, $intern_16, RightPanel);
_.element_3 = function element_9(){
  return castToNative(this.root_0.wrappedElement, $wnd.HTMLDivElement);
}
;
var Lcom_itangsoft_notebook_layout_RightPanel_2_classLit = createForClass('com.itangsoft.notebook.layout', 'RightPanel', 521);
function $addConfirmHandler(this$static, confirmHandler){
  this$static.confirmHandler = confirmHandler;
}

function $confirm_0(this$static){
  var cancelButton, messageDialog, revertButton;
  messageDialog = ($clinit_BaseModal() , createMessage_0(new MessageDialog$lambda$7$Type));
  revertButton = castTo($addClickListener(castTo($styler($setColor_0($linkify(new Button('Revert')), ($clinit_Color() , RED)), new CancelEditorConfirmPresenter$lambda$0$Type), 43), new CancelEditorConfirmPresenter$lambda$1$Type(this$static, messageDialog)), 43);
  cancelButton = castTo($addClickListener(castTo($styler($linkify(new Button('Cancel')), new CancelEditorConfirmPresenter$lambda$2$Type), 43), new CancelEditorConfirmPresenter$lambda$3$Type(this$static, messageDialog)), 43);
  $appendChild_0(castTo($appendChild_0(castTo($clearElement(new DominoElement($warning($setModal((messageDialog.autoClose = false , messageDialog)), create_8('clear')).modalElement.modalFooter.element)), 3), revertButton), 3), cancelButton);
  $open_0(messageDialog);
}

function $lambda$1_2(this$static, messageDialog_1){
  $close(messageDialog_1);
  $onOk(this$static.confirmHandler);
}

function $lambda$3(this$static, messageDialog_1){
  $close(messageDialog_1);
  $onCancel(this$static.confirmHandler);
}

function CancelEditorConfirmPresenter(){
}

defineClass(319, 1, {}, CancelEditorConfirmPresenter);
var Lcom_itangsoft_notebook_plugin_CancelEditorConfirmPresenter_2_classLit = createForClass('com.itangsoft.notebook.plugin', 'CancelEditorConfirmPresenter', 319);
function CancelEditorConfirmPresenter$lambda$0$Type(){
}

defineClass(320, 1, {}, CancelEditorConfirmPresenter$lambda$0$Type);
_.applyStyles = function applyStyles(arg0){
  'dialog-button'.length != 0 && arg0.element.classList.add('dialog-button');
}
;
var Lcom_itangsoft_notebook_plugin_CancelEditorConfirmPresenter$lambda$0$Type_2_classLit = createForClass('com.itangsoft.notebook.plugin', 'CancelEditorConfirmPresenter/lambda$0$Type', 320);
function CancelEditorConfirmPresenter$lambda$1$Type($$outer_0, messageDialog_1){
  this.$$outer_0 = $$outer_0;
  this.messageDialog_1 = messageDialog_1;
}

defineClass(321, 1, {}, CancelEditorConfirmPresenter$lambda$1$Type);
_.handleEvent = function handleEvent(arg0){
  $lambda$1_2(this.$$outer_0, this.messageDialog_1);
}
;
var Lcom_itangsoft_notebook_plugin_CancelEditorConfirmPresenter$lambda$1$Type_2_classLit = createForClass('com.itangsoft.notebook.plugin', 'CancelEditorConfirmPresenter/lambda$1$Type', 321);
function CancelEditorConfirmPresenter$lambda$2$Type(){
}

defineClass(322, 1, {}, CancelEditorConfirmPresenter$lambda$2$Type);
_.applyStyles = function applyStyles_0(arg0){
  'dialog-button'.length != 0 && arg0.element.classList.add('dialog-button');
}
;
var Lcom_itangsoft_notebook_plugin_CancelEditorConfirmPresenter$lambda$2$Type_2_classLit = createForClass('com.itangsoft.notebook.plugin', 'CancelEditorConfirmPresenter/lambda$2$Type', 322);
function CancelEditorConfirmPresenter$lambda$3$Type($$outer_0, messageDialog_1){
  this.$$outer_0 = $$outer_0;
  this.messageDialog_1 = messageDialog_1;
}

defineClass(323, 1, {}, CancelEditorConfirmPresenter$lambda$3$Type);
_.handleEvent = function handleEvent_0(arg0){
  $lambda$3(this.$$outer_0, this.messageDialog_1);
}
;
var Lcom_itangsoft_notebook_plugin_CancelEditorConfirmPresenter$lambda$3$Type_2_classLit = createForClass('com.itangsoft.notebook.plugin', 'CancelEditorConfirmPresenter/lambda$3$Type', 323);
function DemoShell(){
  AbstractShell.call(this);
  this.layout = $show_2(new Layout, ($clinit_ColorScheme() , INDIGO_0));
}

defineClass(397, 143, {}, DemoShell);
_.attachShell = function attachShell(){
}
;
_.detachShell = function detachShell(){
  $remove_9(this.layout);
}
;
var Lcom_itangsoft_notebook_shell_DemoShell_2_classLit = createForClass('com.itangsoft.notebook.shell', 'DemoShell', 397);
function DemoShellCreatorImpl(context){
  AbstractShellCreator.call(this, context);
}

defineClass(344, 138, $intern_6, DemoShellCreatorImpl);
_.create_1 = function create_1(){
  var shell, shellInstance;
  shellInstance = new ShellInstance;
  shell = new DemoShell;
  shellInstance.shell = shell;
  $setContext_0(shell, this.context);
  return shellInstance;
}
;
_.onFinishCreating_0 = function onFinishCreating(){
}
;
var Lcom_itangsoft_notebook_shell_DemoShellCreatorImpl_2_classLit = createForClass('com.itangsoft.notebook.shell', 'DemoShellCreatorImpl', 344);
function LayoutShell(){
  AbstractShell.call(this);
  this.layout = $show_0(new AppLayout, ($clinit_ColorScheme() , INDIGO_0));
}

defineClass(398, 143, {}, LayoutShell);
_.attachShell = function attachShell_0(){
  $setLogo(this.layout, castToNative(castTo($css_1(img(($clinit_System() , 'images/logo.png?ts=' + toString_13(fromDouble_0(Date.now())))), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, [])), 55).element, $wnd.HTMLImageElement));
  $appendChild(castTo($clearElement(this.layout.header.title_0), 3), of_2('\u4E91\u7B14\u8BB0'));
  $appendChild_0(castTo($clearElement(this.layout.header.avatar), 3), $setAttribute_0(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element), 'alt', '\u6A39'));
  $setVersion(this.layout, castToString($get(this.context.applicationContext, 'APPLICATION_VERSION')));
  $setId(this.layout.body_0.leftPanel, 'layout-left-panel');
  $setId(this.layout.body_0.content_0, 'layout-content');
}
;
_.detachShell = function detachShell_0(){
  $remove_0(this.layout);
}
;
var Lcom_itangsoft_notebook_shell_LayoutShell_2_classLit = createForClass('com.itangsoft.notebook.shell', 'LayoutShell', 398);
function LayoutShellCreatorImpl(context){
  AbstractShellCreator.call(this, context);
}

defineClass(345, 138, $intern_6, LayoutShellCreatorImpl);
_.create_1 = function create_2(){
  var shell, shellInstance;
  shellInstance = new ShellInstance;
  shell = new LayoutShell;
  shellInstance.shell = shell;
  $setContext_0(shell, this.context);
  return shellInstance;
}
;
_.onFinishCreating_0 = function onFinishCreating_0(){
}
;
var Lcom_itangsoft_notebook_shell_LayoutShellCreatorImpl_2_classLit = createForClass('com.itangsoft.notebook.shell', 'LayoutShellCreatorImpl', 345);
function LoginShell(){
  AbstractShell.call(this);
  this.content_0 = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element), 'login-page'), 3);
}

defineClass(399, 143, {}, LoginShell);
_.attachShell = function attachShell_1(){
  var versionAnchor, links_0, copyright;
  $appendChild_0(new DominoElement(($clinit_DomGlobal() , document_0).body), $appendChild_0(castTo($appendChild_0(castTo($appendChild_0(this.content_0, castTo($css(castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('section'), $wnd.HTMLElement))).element), $appendChild_0(castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('a'), $wnd.HTMLElement))).element), new DominoElement(castTo($attr_0(new EmptyContentBuilder(castToNative(document_0.createElement('img'), $wnd.HTMLElement)), 'src', 'images/logo_red.png'), 55).element)), 3), $setColor(castTo($setFontSize($setMarginLeft(castTo($textContent(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('span'), $wnd.HTMLElement))).element), '\u4E91\u7B14\u8BB0 \xB7 \u6B22\u8FCE\u6765\u5230\u6211\u7684\u4E16\u754C'), 3)), '24px'), 3)))), 3), 'login-header'), 3)), 3), castTo($setId(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), 'login-content'), 3)), 3), (versionAnchor = $textContent_0(new HtmlContentBuilder(castToNative(document_0.createElement('a'), $wnd.HTMLElement)), '\u7248\u672C\u8BF4\u660E') , $position(create_9(versionAnchor, castTo($setCssProperty(castTo($appendChild_0(castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), $setMarginBottom(castTo($textContent(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), '\u7F51\u7AD9\u7248\u672C\uFF1A' + castToString($get(this.context.applicationContext, 'APPLICATION_VERSION'))), 3), '3px')), 3), $textContent(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), '\u53D1\u5E03\u65E5\u671F\uFF1A' + $getApplicationBuildTimeStr(this.context))), 3), 'text-align', 'left'), 3).wrappedElement), ($clinit_PopupPosition() , RIGHT)) , links_0 = castTo($css(castTo($appendChild_0(castTo($appendChild_0(castTo($appendChild_0(castTo($appendChild_0(castTo($appendChild_0(castTo($appendChild_0(castTo($appendChild_0(castTo($appendChild_0(castTo($appendChild_0(castTo($appendChild_0(castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), $textContent_0(castTo($attr_0(castTo($attr_0(new HtmlContentBuilder(castToNative(document_0.createElement('a'), $wnd.HTMLElement)), 'href', '#'), 5), 'target', '_blank'), 5), '\u516C\u53F8\u7B80\u4ECB')), 3), $textContent_0(new HtmlContentBuilder(castToNative(document_0.createElement('span'), $wnd.HTMLElement)), '|')), 3), $textContent_0(castTo($attr_0(castTo($attr_0(new HtmlContentBuilder(castToNative(document_0.createElement('a'), $wnd.HTMLElement)), 'href', '#'), 5), 'target', '_blank'), 5), '\u8BDA\u8058\u82F1\u624D')), 3), $textContent_0(new HtmlContentBuilder(castToNative(document_0.createElement('span'), $wnd.HTMLElement)), '|')), 3), $textContent_0(castTo($attr_0(castTo($attr_0(new HtmlContentBuilder(castToNative(document_0.createElement('a'), $wnd.HTMLElement)), 'href', '#'), 5), 'target', '_blank'), 5), '\u8054\u7CFB\u6211\u4EEC')), 3), $textContent_0(new HtmlContentBuilder(castToNative(document_0.createElement('span'), $wnd.HTMLElement)), '|')), 3), $textContent_0(castTo($attr_0(castTo($attr_0(new HtmlContentBuilder(castToNative(document_0.createElement('a'), $wnd.HTMLElement)), 'href', '#'), 5), 'target', '_blank'), 5), '\u610F\u89C1\u53CD\u9988')), 3), $textContent_0(new HtmlContentBuilder(castToNative(document_0.createElement('span'), $wnd.HTMLElement)), '|')), 3), $textContent_0(castTo($attr_0(castTo($attr_0(new HtmlContentBuilder(castToNative(document_0.createElement('a'), $wnd.HTMLElement)), 'href', '#'), 5), 'target', '_blank'), 5), '\u5E2E\u52A9\u4E2D\u5FC3')), 3), $textContent_0(new HtmlContentBuilder(castToNative(document_0.createElement('span'), $wnd.HTMLElement)), '|')), 3), versionAnchor), 3), 'login-footer-links'), 3) , copyright = castTo($css(castTo($textContent(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), 'Copyright \xA9 2024 \u6A39 \u7248\u6743\u6240\u6709'), 3), 'login-footer-copyright'), 3) , castTo($css(castTo($appendChild_0(castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('section'), $wnd.HTMLElement))).element), links_0), 3), copyright), 3), 'login-footer'), 3))));
}
;
_.detachShell = function detachShell_1(){
  $remove_0(this.content_0);
}
;
var Lcom_itangsoft_notebook_shell_LoginShell_2_classLit = createForClass('com.itangsoft.notebook.shell', 'LoginShell', 399);
function LoginShellCreatorImpl(context){
  AbstractShellCreator.call(this, context);
}

defineClass(346, 138, $intern_6, LoginShellCreatorImpl);
_.create_1 = function create_3(){
  var shell, shellInstance;
  shellInstance = new ShellInstance;
  shell = new LoginShell;
  shellInstance.shell = shell;
  $setContext_0(shell, this.context);
  return shellInstance;
}
;
_.onFinishCreating_0 = function onFinishCreating_1(){
}
;
var Lcom_itangsoft_notebook_shell_LoginShellCreatorImpl_2_classLit = createForClass('com.itangsoft.notebook.shell', 'LoginShellCreatorImpl', 346);
function get_0(url_0, callback){
  var e;
  try {
    request_0(($clinit_RequestBuilder() , GET), url_0, callback);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 62)) {
      e = $e0;
      throw toJs(new RuntimeException_2(e));
    }
     else 
      throw toJs($e0);
  }
}

function request_0(httpMethod, url_0, callback){
  var builder;
  builder = new RequestBuilder(httpMethod, url_0);
  throwIfEmptyOrNull('header', 'Content-Type');
  throwIfEmptyOrNull('value', 'application/x-www-form-urlencoded; charset=UTF-8');
  !builder.headers_0 && (builder.headers_0 = new HashMap);
  $putStringValue(builder.headers_0, 'Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  throwIfNull('callback', callback);
  $doSend(builder, callback);
}

function DemoComponent(){
  AbstractComponent.call(this);
}

defineClass(452, 123, {}, DemoComponent);
var Lcom_itangsoft_notebook_views_demo_DemoComponent_2_classLit = createForClass('com.itangsoft.notebook.views.demo', 'DemoComponent', 452);
function DemoController(){
  BaseComponentController.call(this);
}

defineClass(148, 120, {48:1, 148:1}, DemoController);
var Lcom_itangsoft_notebook_views_demo_DemoController_2_classLit = createForClass('com.itangsoft.notebook.views.demo', 'DemoController', 148);
function DemoControllerCreatorImpl(router, context){
  AbstractControllerCreator.call(this, router, context);
}

defineClass(355, 115, $intern_5, DemoControllerCreatorImpl);
_.create_0 = function create_4(route){
  var controller, controllerInstance, storedController;
  controllerInstance = new ControllerInstance;
  controllerInstance.controllerCreator = this;
  controllerInstance.controllerClassName = 'com.itangsoft.notebook.views.demo.DemoController';
  storedController = $getControllerFormStore(($clinit_ControllerFactory() , INSTANCE_3), 'com.itangsoft.notebook.views.demo.DemoController');
  if (!storedController) {
    controller = new DemoController;
    controllerInstance.controller_0 = controller;
    controllerInstance.cached = false;
    $setContext(controller, this.context);
    $setRouter(controller, this.router);
    controller.cached = false;
    controller.relatedRoute = route;
    controller.relatedSelector = 'layout-content';
    $setActivateNaluCommand(controller, new DemoControllerCreatorImpl$lambda$0$Type);
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
  var component, controller;
  controller = castTo(object, 148);
  component = new DemoComponent;
  component.controller_0 = controller;
  controller.component = component;
  $initElement(component, (new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element)).wrappedElement);
}
;
_.setParameter = function setParameter(object, parameterKeys, parameterValues){
}
;
var Lcom_itangsoft_notebook_views_demo_DemoControllerCreatorImpl_2_classLit = createForClass('com.itangsoft.notebook.views.demo', 'DemoControllerCreatorImpl', 355);
function DemoControllerCreatorImpl$lambda$0$Type(){
}

defineClass(356, 1, {}, DemoControllerCreatorImpl$lambda$0$Type);
_.execute = function execute(){
}
;
var Lcom_itangsoft_notebook_views_demo_DemoControllerCreatorImpl$lambda$0$Type_2_classLit = createForClass('com.itangsoft.notebook.views.demo', 'DemoControllerCreatorImpl/lambda$0$Type', 356);
function ContentComponent(){
  AbstractComponent.call(this);
}

defineClass(444, 123, {}, ContentComponent);
var Lcom_itangsoft_notebook_views_layout_content_ContentComponent_2_classLit = createForClass('com.itangsoft.notebook.views.layout.content', 'ContentComponent', 444);
function ContentController(){
  BaseComponentController.call(this);
}

defineClass(145, 120, {48:1, 145:1}, ContentController);
var Lcom_itangsoft_notebook_views_layout_content_ContentController_2_classLit = createForClass('com.itangsoft.notebook.views.layout.content', 'ContentController', 145);
function ContentControllerCreatorImpl(router, context){
  AbstractControllerCreator.call(this, router, context);
}

defineClass(349, 115, $intern_5, ContentControllerCreatorImpl);
_.create_0 = function create_5(route){
  var controller, controllerInstance, storedController;
  controllerInstance = new ControllerInstance;
  controllerInstance.controllerCreator = this;
  controllerInstance.controllerClassName = 'com.itangsoft.notebook.views.layout.content.ContentController';
  storedController = $getControllerFormStore(($clinit_ControllerFactory() , INSTANCE_3), 'com.itangsoft.notebook.views.layout.content.ContentController');
  if (!storedController) {
    controller = new ContentController;
    controllerInstance.controller_0 = controller;
    controllerInstance.cached = false;
    $setContext(controller, this.context);
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
_.onFinishCreating = function onFinishCreating_3(object){
  var component, controller;
  controller = castTo(object, 145);
  component = new ContentComponent;
  component.controller_0 = controller;
  controller.component = component;
  $initElement(component, (new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element)).wrappedElement);
}
;
_.setParameter = function setParameter_0(object, parameterKeys, parameterValues){
}
;
var Lcom_itangsoft_notebook_views_layout_content_ContentControllerCreatorImpl_2_classLit = createForClass('com.itangsoft.notebook.views.layout.content', 'ContentControllerCreatorImpl', 349);
function ContentControllerCreatorImpl$lambda$0$Type(){
}

defineClass(350, 1, {}, ContentControllerCreatorImpl$lambda$0$Type);
_.execute = function execute_0(){
}
;
var Lcom_itangsoft_notebook_views_layout_content_ContentControllerCreatorImpl$lambda$0$Type_2_classLit = createForClass('com.itangsoft.notebook.views.layout.content', 'ContentControllerCreatorImpl/lambda$0$Type', 350);
function $clinit_LeftPanelComponent(){
  $clinit_LeftPanelComponent = emptyMethod;
  new ConsoleLoggerAdapter(($ensureNamesAreInitialized(Lcom_itangsoft_notebook_views_layout_leftpanel_LeftPanelComponent_2_classLit) , Lcom_itangsoft_notebook_views_layout_leftpanel_LeftPanelComponent_2_classLit.typeName));
}

function $renderMenu(this$static, treeItem, jMenuArray){
  var i, jMenu, subTreeItem, treeItem0, treeItem1;
  for (i = 0; i < jMenuArray.jsArray.length; i++) {
    jMenu = castTo($get_0(jMenuArray, i), 124);
    $equals_1('', $get_1(jMenu, 'markdown').isString().value_0)?(subTreeItem = $setExpandIcon((treeItem0 = new TreeItem($get_1(jMenu, 'name').isString().value_0, create_8('folder')) , treeItem0), create_8('folder_open'))):(subTreeItem = $setActiveIcon((treeItem1 = new TreeItem($get_1(jMenu, 'name').isString().value_0, create_8('insert_drive_file')) , treeItem1), create_8('description')));
    $get_1(jMenu, 'children').isArray_0().jsArray.length > 0 && $renderMenu(this$static, subTreeItem, $get_1(jMenu, 'children').isArray_0());
    $add_1(treeItem.subItems, subTreeItem);
    treeItem.childrenContainer.appendChild(subTreeItem.element);
    $addCss(treeItem.anchorElement, 'tree-toggle');
    subTreeItem.parent_0 = treeItem;
    $setLevel_0(subTreeItem, treeItem.level + 1);
    $addCss_1((subTreeItem.styleInitializer.apply_1() , subTreeItem.style_0), 'tree-leaf');
    $removeCss_1(new Style(new Style$lambda$0$Type(treeItem.element)), 'tree-leaf');
    $setToggleTarget(subTreeItem, treeItem.toggleTarget);
    $setLevelPadding(subTreeItem, treeItem.levelPadding);
    $addCss_1((treeItem.styleInitializer.apply_1() , treeItem.style_0), 'tree-item-parent');
  }
}

function LeftPanelComponent(){
  $clinit_LeftPanelComponent();
  AbstractComponent.call(this);
}

defineClass(450, 123, {}, LeftPanelComponent);
var Lcom_itangsoft_notebook_views_layout_leftpanel_LeftPanelComponent_2_classLit = createForClass('com.itangsoft.notebook.views.layout.leftpanel', 'LeftPanelComponent', 450);
function $onResponseReceived(this$static, response){
  var e, i, jMenu, jMenuArray, menuTree, treeItem, treeItem0, treeItem1;
  if (response.xmlHttpRequest.status != 200) {
    alert_0('Error: ' + response.xmlHttpRequest.status + ' -> ' + response.xmlHttpRequest.statusText);
    return;
  }
  menuTree = $setAutoCollapse($enableSearch(new Tree));
  try {
    jMenuArray = ($clinit_JSONParser() , parse_0(response.xmlHttpRequest.responseText)).isArray_0();
    for (i = 0; i < jMenuArray.jsArray.length; i++) {
      jMenu = $get_0(jMenuArray, i).isObject();
      $equals_1('', $get_1(jMenu, 'markdown').isString().value_0)?(treeItem0 = $setExpandIcon((treeItem1 = new TreeItem($get_1(jMenu, 'name').isString().value_0, create_8('folder')) , treeItem1), create_8('folder_open'))):(treeItem0 = $setActiveIcon((treeItem = new TreeItem($get_1(jMenu, 'name').isString().value_0, create_8('insert_drive_file')) , treeItem), create_8('description')));
      $get_1(jMenu, 'children').isArray_0().jsArray.length > 0 && $renderMenu(this$static.this$01, treeItem0, $get_1(jMenu, 'children').isArray_0());
      menuTree.root_0.appendChild(treeItem0.element);
      treeItem0.parent_0 = menuTree;
      $setLevel_0(treeItem0, 1);
      $setLevelPadding(treeItem0, menuTree.levelPadding);
      $setToggleTarget(treeItem0, menuTree.toggleTarget);
      $add(menuTree.subItems, treeItem0);
    }
    $appendChild_0(this$static.val$navigatePanel2, menuTree);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 18)) {
      e = $e0;
      $error(($clinit_LeftPanelComponent() , '\u83DC\u5355\u6E32\u67D3\u5931\u8D25'), e);
    }
     else 
      throw toJs($e0);
  }
}

function LeftPanelComponent$1(this$0, val$navigatePanel){
  this.this$01 = this$0;
  this.val$navigatePanel2 = val$navigatePanel;
}

defineClass(451, 1, {}, LeftPanelComponent$1);
var Lcom_itangsoft_notebook_views_layout_leftpanel_LeftPanelComponent$1_2_classLit = createForClass('com.itangsoft.notebook.views.layout.leftpanel', 'LeftPanelComponent/1', 451);
function LeftPanelController(){
  BaseComponentController.call(this);
}

defineClass(147, 120, {48:1, 147:1}, LeftPanelController);
var Lcom_itangsoft_notebook_views_layout_leftpanel_LeftPanelController_2_classLit = createForClass('com.itangsoft.notebook.views.layout.leftpanel', 'LeftPanelController', 147);
function LeftPanelControllerCreatorImpl(router, context){
  AbstractControllerCreator.call(this, router, context);
}

defineClass(353, 115, $intern_5, LeftPanelControllerCreatorImpl);
_.create_0 = function create_6(route){
  var controller, controllerInstance, storedController;
  controllerInstance = new ControllerInstance;
  controllerInstance.controllerCreator = this;
  controllerInstance.controllerClassName = 'com.itangsoft.notebook.views.layout.leftpanel.LeftPanelController';
  storedController = $getControllerFormStore(($clinit_ControllerFactory() , INSTANCE_3), 'com.itangsoft.notebook.views.layout.leftpanel.LeftPanelController');
  if (!storedController) {
    controller = new LeftPanelController;
    controllerInstance.controller_0 = controller;
    controllerInstance.cached = false;
    $setContext(controller, this.context);
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
_.onFinishCreating = function onFinishCreating_4(object){
  var component, controller, navigatePanel, s, i;
  controller = castTo(object, 147);
  component = new LeftPanelComponent;
  component.controller_0 = controller;
  controller.component = component;
  navigatePanel = new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element);
  get_0(($clinit_Impl() , s = $doc.location.href , i = s.indexOf('#') , i != -1 && (s = s.substring(0, i)) , i = s.indexOf('?') , i != -1 && (s = s.substring(0, i)) , i = s.lastIndexOf('/') , i != -1 && (s = s.substring(0, i)) , s.length > 0?s + '/':'') + 'data/menu.json', new LeftPanelComponent$1(component, navigatePanel));
  $initElement(component, navigatePanel.wrappedElement);
}
;
_.setParameter = function setParameter_1(object, parameterKeys, parameterValues){
}
;
var Lcom_itangsoft_notebook_views_layout_leftpanel_LeftPanelControllerCreatorImpl_2_classLit = createForClass('com.itangsoft.notebook.views.layout.leftpanel', 'LeftPanelControllerCreatorImpl', 353);
function LeftPanelControllerCreatorImpl$lambda$0$Type(){
}

defineClass(354, 1, {}, LeftPanelControllerCreatorImpl$lambda$0$Type);
_.execute = function execute_1(){
}
;
var Lcom_itangsoft_notebook_views_layout_leftpanel_LeftPanelControllerCreatorImpl$lambda$0$Type_2_classLit = createForClass('com.itangsoft.notebook.views.layout.leftpanel', 'LeftPanelControllerCreatorImpl/lambda$0$Type', 354);
function $lambda$0_1(this$static, grouping_1, username_2, password_3, captcha_4){
  var lastArg;
  $validate(grouping_1, false).valid && $login(castTo(this$static.controller_0, 161), $getValue_0(username_2), (lastArg = $getValue_0(password_3) , $getValue_0(captcha_4) , lastArg));
}

function $lambda$1_3(this$static, grouping_1, username_2, password_3, captcha_4, e_4){
  var lastArg;
  instanceOfNative(e_4, $wnd.KeyboardEvent) && $equalsIgnoreCase('Enter', castToNative(e_4, $wnd.KeyboardEvent).code) && $validate(grouping_1, false).valid && $login(castTo(this$static.controller_0, 161), $getValue_0(username_2), (lastArg = $getValue_0(password_3) , $getValue_0(captcha_4) , lastArg));
}

function $lambda$2_0(this$static, grouping_1, username_2, password_3, captcha_4, e_4){
  var lastArg;
  instanceOfNative(e_4, $wnd.KeyboardEvent) && $equalsIgnoreCase('Enter', castToNative(e_4, $wnd.KeyboardEvent).code) && $validate(grouping_1, false).valid && $login(castTo(this$static.controller_0, 161), $getValue_0(username_2), (lastArg = $getValue_0(password_3) , $getValue_0(captcha_4) , lastArg));
}

function $lambda$3_0(this$static, grouping_1, username_2, password_3, captcha_4, e_4){
  var lastArg;
  instanceOfNative(e_4, $wnd.KeyboardEvent) && $equalsIgnoreCase('Enter', castToNative(e_4, $wnd.KeyboardEvent).code) && $validate(grouping_1, false).valid && $login(castTo(this$static.controller_0, 161), $getValue_0(username_2), (lastArg = $getValue_0(password_3) , $getValue_0(captcha_4) , lastArg));
}

function LoginComponent(){
  AbstractComponent.call(this);
}

defineClass(445, 123, {}, LoginComponent);
var Lcom_itangsoft_notebook_views_login_LoginComponent_2_classLit = createForClass('com.itangsoft.notebook.views.login', 'LoginComponent', 445);
function LoginComponent$lambda$0$Type($$outer_0, grouping_1, username_2, password_3, captcha_4){
  this.$$outer_0 = $$outer_0;
  this.grouping_1 = grouping_1;
  this.username_2 = username_2;
  this.password_3 = password_3;
  this.captcha_4 = captcha_4;
}

defineClass(446, 1, {}, LoginComponent$lambda$0$Type);
_.handleEvent = function handleEvent_1(arg0){
  $lambda$0_1(this.$$outer_0, this.grouping_1, this.username_2, this.password_3, this.captcha_4);
}
;
var Lcom_itangsoft_notebook_views_login_LoginComponent$lambda$0$Type_2_classLit = createForClass('com.itangsoft.notebook.views.login', 'LoginComponent/lambda$0$Type', 446);
function LoginComponent$lambda$1$Type($$outer_0, grouping_1, username_2, password_3, captcha_4){
  this.$$outer_0 = $$outer_0;
  this.grouping_1 = grouping_1;
  this.username_2 = username_2;
  this.password_3 = password_3;
  this.captcha_4 = captcha_4;
}

defineClass(447, 1, {}, LoginComponent$lambda$1$Type);
_.handleEvent = function handleEvent_2(arg0){
  $lambda$1_3(this.$$outer_0, this.grouping_1, this.username_2, this.password_3, this.captcha_4, arg0);
}
;
var Lcom_itangsoft_notebook_views_login_LoginComponent$lambda$1$Type_2_classLit = createForClass('com.itangsoft.notebook.views.login', 'LoginComponent/lambda$1$Type', 447);
function LoginComponent$lambda$2$Type($$outer_0, grouping_1, username_2, password_3, captcha_4){
  this.$$outer_0 = $$outer_0;
  this.grouping_1 = grouping_1;
  this.username_2 = username_2;
  this.password_3 = password_3;
  this.captcha_4 = captcha_4;
}

defineClass(448, 1, {}, LoginComponent$lambda$2$Type);
_.handleEvent = function handleEvent_3(arg0){
  $lambda$2_0(this.$$outer_0, this.grouping_1, this.username_2, this.password_3, this.captcha_4, arg0);
}
;
var Lcom_itangsoft_notebook_views_login_LoginComponent$lambda$2$Type_2_classLit = createForClass('com.itangsoft.notebook.views.login', 'LoginComponent/lambda$2$Type', 448);
function LoginComponent$lambda$3$Type($$outer_0, grouping_1, username_2, password_3, captcha_4){
  this.$$outer_0 = $$outer_0;
  this.grouping_1 = grouping_1;
  this.username_2 = username_2;
  this.password_3 = password_3;
  this.captcha_4 = captcha_4;
}

defineClass(449, 1, {}, LoginComponent$lambda$3$Type);
_.handleEvent = function handleEvent_4(arg0){
  $lambda$3_0(this.$$outer_0, this.grouping_1, this.username_2, this.password_3, this.captcha_4, arg0);
}
;
var Lcom_itangsoft_notebook_views_login_LoginComponent$lambda$3$Type_2_classLit = createForClass('com.itangsoft.notebook.views.login', 'LoginComponent/lambda$3$Type', 449);
function $login(this$static, username, password){
  var notification;
  if ($equals_1('admin', username) && $equals_1('admin.123', password)) {
    $setUserId(this$static.context, username);
    $setRealName(this$static.context, username);
    $route(this$static.router, '/layout/home', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, []));
    return;
  }
  $show_3($setClosable($setPosition(($clinit_Notification() , notification = new Notification_0 , notification.messageSpan.textContent = '\u7528\u6237\u540D\u6216\u5BC6\u7801\u9519\u8BEF' , notification), TOP_CENTER)));
}

function LoginController(){
  BaseComponentController.call(this);
}

defineClass(146, 120, {48:1, 161:1, 146:1}, LoginController);
var Lcom_itangsoft_notebook_views_login_LoginController_2_classLit = createForClass('com.itangsoft.notebook.views.login', 'LoginController', 146);
function LoginControllerCreatorImpl(router, context){
  AbstractControllerCreator.call(this, router, context);
}

defineClass(351, 115, $intern_5, LoginControllerCreatorImpl);
_.create_0 = function create_7(route){
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
_.onFinishCreating = function onFinishCreating_5(object){
  var carousel, component, content_0, controller, grouping, username, password, captcha, captchaDiv, rememberMe, rememberMeAndForgetPassword, okButton;
  controller = castTo(object, 146);
  component = new LoginComponent;
  component.controller_0 = controller;
  controller.component = component;
  content_0 = castTo($css(castTo($css(castTo($appendChild_0(castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element), (carousel = $startAutoSlide($appendChild_1($appendChild_1(new Carousel, new Slide_0('https://user-images.githubusercontent.com/4270380/103492828-a06d1200-4e68-11eb-9287-ef830f575d3e.png')), new Slide_0('https://tdesign.gtimg.com/tdesign-starter/docs/starter-docs-industry-light.png'))) , castTo($css(castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), carousel), 3), 'login-carousel'), 3))), 3), (grouping = new FieldsGrouping , username = castTo($css($setAutoValidation($setRequired($groupBy($setRequiredErrorMessage($setPlaceholder(new TextBox, '\u7528\u6237\u540D/\u90AE\u7BB1/\u624B\u673A\u53F7'), '\u8BF7\u8F93\u5165\u7528\u6237\u540D\u3001\u90AE\u7BB1\u6216\u624B\u673A\u53F7'), grouping))), 'login-form-username'), 73) , password = castTo($css($setAutoValidation($setRequired($groupBy($setRequiredErrorMessage($setPlaceholder(new TextBox_0('password'), '\u5BC6\u7801'), '\u8BF7\u8F93\u5165\u5BC6\u7801'), grouping))), 'login-form-password'), 73) , captcha = castTo($css($setMaxLength($setAutoValidation($setRequired($groupBy($setRequiredErrorMessage($setPlaceholder(new TextBox, '\u9A8C\u8BC1\u7801'), '\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801'), grouping)))), 'login-form-captcha'), 73) , captchaDiv = castTo($css(castTo($appendChild_0(castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), captcha), 3), $css(new DominoElement(castTo($attr_0(new EmptyContentBuilder(castToNative(document_0.createElement('img'), $wnd.HTMLElement)), 'src', 'https://auth.huaweicloud.com/authui/verifycode?index=1&alt=0.9009870104059011'), 55).element), 'login-form-captcha-img')), 3), 'login-form-captcha-box'), 3) , rememberMe = castTo($css($filledIn($uncheck($setColor_1(new CheckBox, ($clinit_Color() , BLUE)))), 'login-form-remember-me'), 56) , rememberMeAndForgetPassword = castTo($css(castTo($appendChild_0(castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), rememberMe), 3), $css(castTo($textContent(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('a'), $wnd.HTMLElement))).element), '\u5FD8\u8BB0\u5BC6\u7801'), 3), 'login-form-forget-password')), 3), 'login-form-remember-forget'), 3) , okButton = castTo($css(castTo($addClickListener($block(new Button('\u767B \u5F55')), new LoginComponent$lambda$0$Type(component, grouping, username, password, captcha)), 43), 'login-form-submit'), 43) , $addEventListener(username, 'keyup', new LoginComponent$lambda$1$Type(component, grouping, username, password, captcha)) , $addEventListener(password, 'keyup', new LoginComponent$lambda$2$Type(component, grouping, username, password, captcha)) , $addEventListener(captcha, 'keyup', new LoginComponent$lambda$3$Type(component, grouping, username, password, captcha)) , castTo($css(castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), $appendChild_0(castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), $textContent_0(new HtmlContentBuilder(castToNative(document_0.createElement('h1'), $wnd.HTMLElement)), '\u7528\u6237\u767B\u5F55')), 3), $appendChild_0(castTo($appendChild_0(castTo($appendChild_0(castTo($appendChild_0(castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), username), 3), password), 3), captchaDiv), 3), rememberMeAndForgetPassword), 3), okButton))), 3), 'login-form'), 3))), 3), 'login-content'), 3), 'clearfix'), 3);
  $initElement(component, content_0.wrappedElement);
}
;
_.setParameter = function setParameter_2(object, parameterKeys, parameterValues){
}
;
var Lcom_itangsoft_notebook_views_login_LoginControllerCreatorImpl_2_classLit = createForClass('com.itangsoft.notebook.views.login', 'LoginControllerCreatorImpl', 351);
function LoginControllerCreatorImpl$lambda$0$Type(){
}

defineClass(352, 1, {}, LoginControllerCreatorImpl$lambda$0$Type);
_.execute = function execute_2(){
}
;
var Lcom_itangsoft_notebook_views_login_LoginControllerCreatorImpl$lambda$0$Type_2_classLit = createForClass('com.itangsoft.notebook.views.login', 'LoginControllerCreatorImpl/lambda$0$Type', 352);
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
function $forEach_3(this$static, cb){
  forEach_4(this$static, cb);
}

function $clinit_DomGlobal(){
  $clinit_DomGlobal = emptyMethod;
  document_0 = $wnd.goog.global.document;
  location_1 = $wnd.goog.global.location;
}

var document_0, location_1;
defineClass(621, 1, {});
var Ljava_io_OutputStream_2_classLit = createForClass('java.io', 'OutputStream', 621);
defineClass(620, 621, {});
var Ljava_io_FilterOutputStream_2_classLit = createForClass('java.io', 'FilterOutputStream', 620);
function PrintStream(){
}

defineClass(206, 620, {}, PrintStream);
var Ljava_io_PrintStream_2_classLit = createForClass('java.io', 'PrintStream', 206);
function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(132, 1, {202:1});
_.toString_0 = function toString_15(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 132);
function ArithmeticException(){
  RuntimeException_0.call(this, 'divide by zero');
}

defineClass(231, 15, $intern_2, ArithmeticException);
var Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang', 'ArithmeticException', 231);
function ArrayIndexOutOfBoundsException(msg){
  IndexOutOfBoundsException.call(this, msg);
}

defineClass(203, 66, $intern_2, ArrayIndexOutOfBoundsException);
var Ljava_lang_ArrayIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'ArrayIndexOutOfBoundsException', 203);
function ArrayStoreException(){
  RuntimeException.call(this);
}

defineClass(230, 15, $intern_2, ArrayStoreException);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 230);
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

defineClass(211, 15, $intern_2, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 211);
function $isInstance_2(instance){
  if (instance == null) {
    return false;
  }
  return instance.$implements__java_lang_Cloneable || Array.isArray(instance);
}

function IllegalArgumentException(){
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(49, 15, $intern_2, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 49);
function IllegalStateException(){
  RuntimeException.call(this);
}

function IllegalStateException_0(s){
  RuntimeException_0.call(this, s);
}

defineClass(98, 15, $intern_2, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 98);
function Integer(value_0){
  this.value_0 = value_0;
}

function compare_1(x_0, y_0){
  return x_0 < y_0?-1:x_0 > y_0?1:0;
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

defineClass(85, 134, {4:1, 28:1, 85:1, 134:1}, Integer);
_.equals_0 = function equals_5(o){
  return instanceOf(o, 85) && castTo(o, 85).value_0 == this.value_0;
}
;
_.hashCode_0 = function hashCode_6(){
  return this.value_0;
}
;
_.toString_0 = function toString_17(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 85);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues = initUnidimensionalArray(Ljava_lang_Integer_2_classLit, $intern_0, 85, 256, 0, 1);
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

defineClass(1318, 1, {});
function NumberFormatException(message){
  IllegalArgumentException_0.call(this, message);
}

defineClass(111, 49, $intern_2, NumberFormatException);
var Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang', 'NumberFormatException', 111);
function StackTraceElement(methodName, fileName, lineNumber){
  this.className = 'Unknown';
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
}

defineClass(57, 1, {4:1, 57:1}, StackTraceElement);
_.equals_0 = function equals_6(other){
  var st;
  if (instanceOf(other, 57)) {
    st = castTo(other, 57);
    return this.lineNumber == st.lineNumber && this.methodName == st.methodName && this.className == st.className && this.fileName == st.fileName;
  }
  return false;
}
;
_.hashCode_0 = function hashCode_7(){
  return hashCode_13(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_0, 1, 5, [valueOf(this.lineNumber), this.className, this.methodName, this.fileName]));
}
;
_.toString_0 = function toString_18(){
  return this.className + '.' + this.methodName + '(' + (this.fileName != null?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.lineNumber = 0;
var Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang', 'StackTraceElement', 57);
function $append_1(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_2(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_3(this$static, x_0){
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

defineClass(39, 132, {202:1}, StringBuilder, StringBuilder_0, StringBuilder_1);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 39);
function $clinit_System(){
  $clinit_System = emptyMethod;
  err = new PrintStream;
}

defineClass(1320, 1, {});
var err;
function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(75, 15, $intern_2, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 75);
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

defineClass(637, 1, {37:1});
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
_.add = function add_2(o){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this collection'));
}
;
_.addAll = function addAll(c){
  var changed, e, e$iterator;
  checkCriticalNotNull(c);
  changed = false;
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    changed = changed | this.add(e);
  }
  return changed;
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
_.toString_0 = function toString_19(){
  var e, e$iterator, joiner;
  joiner = new StringJoiner('[', ']');
  for (e$iterator = this.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    $add_2(joiner, e === this?'(this Collection)':e == null?'null':toString_14(e));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 637);
function $computeIfAbsent(this$static, key, remappingFunction){
  var value_0;
  checkCriticalNotNull(remappingFunction);
  value_0 = getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
  if (value_0 == null) {
    value_0 = new HashMap;
    value_0 != null && $put_1(this$static.hashCodeMap, key, value_0);
  }
  return value_0;
}

function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
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
    entry = castTo(iter.next_1(), 21);
    k = entry.getKey();
    if (maskUndefined(key) === maskUndefined(k) || key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k)) {
      if (remove) {
        entry = new AbstractMap$SimpleEntry(entry.getKey(), entry.getValue());
        iter.remove_1();
      }
      return entry;
    }
  }
  return null;
}

function $toString_2(this$static, o){
  return o === this$static?'(this Map)':o == null?'null':toString_14(o);
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(641, 1, {82:1});
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
    entry = castTo(entry$iterator.next_1(), 21);
    v = entry.getValue();
    if (maskUndefined(value_0) === maskUndefined(v) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, v)) {
      return true;
    }
  }
  return false;
}
;
_.equals_0 = function equals_7(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 82)) {
    return false;
  }
  otherMap = castTo(obj, 82);
  if (this.size() != otherMap.size()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet().iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 21);
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.get = function get_1(key){
  return getEntryValueOrNull($implFindEntry(this, key, false));
}
;
_.hashCode_0 = function hashCode_8(){
  return hashCode_14(this.entrySet());
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
  var e, e$iterator;
  checkCriticalNotNull(map_0);
  for (e$iterator = map_0.entrySet().iterator(); e$iterator.hasNext_0();) {
    e = castTo(e$iterator.next_1(), 21);
    this.put(e.getKey(), e.getValue());
  }
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
_.toString_0 = function toString_20(){
  var entry, entry$iterator, joiner;
  joiner = new StringJoiner('{', '}');
  for (entry$iterator = this.entrySet().iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 21);
    $add_2(joiner, $toString_2(this, entry.getKey()) + '=' + $toString_2(this, entry.getValue()));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
_.values = function values_1(){
  return new AbstractMap$2(this);
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 641);
function $containsKey(this$static, key){
  return instanceOfString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $containsValue(this$static, value_0, entries){
  var entry, entry$iterator;
  for (entry$iterator = entries.iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 21);
    if (this$static.equals_1(value_0, entry.getValue())) {
      return true;
    }
  }
  return false;
}

function $get_2(this$static, key){
  return instanceOfString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $getStringValue(this$static, key){
  return key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):$get_5(this$static.stringMap, key);
}

function $hasStringValue(this$static, key){
  return key == null?!!$getEntry(this$static.hashCodeMap, null):$contains_0(this$static.stringMap, key);
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

defineClass(236, 641, {82:1});
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
_.get = function get_2(key){
  return $get_2(this, key);
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
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 236);
defineClass(640, 637, $intern_17);
_.spliterator_0 = function spliterator_1(){
  return new Spliterators$IteratorSpliterator(this, 1);
}
;
_.equals_0 = function equals_8(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 95)) {
    return false;
  }
  other = castTo(o, 95);
  if (other.size() != this.size()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode_0 = function hashCode_9(){
  return hashCode_14(this);
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
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 640);
function $contains(this$static, o){
  if (instanceOf(o, 21)) {
    return $containsEntry(this$static.this$01, castTo(o, 21));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(172, 640, $intern_17, AbstractHashMap$EntrySet);
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
    key = castTo(entry, 21).getKey();
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
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 172);
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
  rv = castTo(this$static.current.next_1(), 21);
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

defineClass(173, 1, {}, AbstractHashMap$EntrySetIterator);
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
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 173);
function $indexOf_0(this$static, toFind){
  var i, n;
  for (i = 0 , n = this$static.size(); i < n; ++i) {
    if (equals_14(toFind, this$static.getAtIndex(i))) {
      return i;
    }
  }
  return -1;
}

defineClass(638, 637, $intern_18);
_.spliterator_0 = function spliterator_2(){
  return new Spliterators$IteratorSpliterator(this, 16);
}
;
_.addAtIndex = function add_3(index_0, element){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this list'));
}
;
_.add = function add_4(obj){
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
_.equals_0 = function equals_9(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 32)) {
    return false;
  }
  other = castTo(o, 32);
  if (this.size() != other.size()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this.iterator(); elem$iterator.hasNext_0();) {
    elem = elem$iterator.next_1();
    elemOther = iterOther.next_1();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode_0 = function hashCode_10(){
  return hashCode_15(this);
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
    if (equals_14(toFind, this.getAtIndex(i))) {
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
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 638);
function $remove_2(this$static){
  checkCriticalState(this$static.last != -1);
  this$static.this$01_0.removeAtIndex(this$static.last);
  this$static.i = this$static.last;
  this$static.last = -1;
}

function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(135, 1, {}, AbstractList$IteratorImpl);
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
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 135);
function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkCriticalPositionIndex(start_0, this$0.size());
  this.i = start_0;
}

defineClass(215, 135, {}, AbstractList$ListIteratorImpl);
_.remove_1 = function remove_8(){
  $remove_2(this);
}
;
_.add_0 = function add_5(o){
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
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 215);
function AbstractList$SubList(wrapped, fromIndex, toIndex){
  checkCriticalPositionIndexes(fromIndex, toIndex, wrapped.size());
  this.wrapped = wrapped;
  this.fromIndex = fromIndex;
  this.size_0 = toIndex - fromIndex;
}

defineClass(216, 638, $intern_18, AbstractList$SubList);
_.addAtIndex = function add_6(index_0, element){
  checkCriticalPositionIndex(index_0, this.size_0);
  this.wrapped.addAtIndex(this.fromIndex + index_0, element);
  ++this.size_0;
}
;
_.getAtIndex = function get_3(index_0){
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
var Ljava_util_AbstractList$SubList_2_classLit = createForClass('java.util', 'AbstractList/SubList', 216);
function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(59, 640, $intern_17, AbstractMap$1);
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
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 59);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(67, 1, {}, AbstractMap$1$1);
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
  return entry = castTo(this.val$outerIter2.next_1(), 21) , entry.getKey();
}
;
_.remove_1 = function remove_11(){
  this.val$outerIter2.remove_1();
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 67);
function AbstractMap$2(this$0){
  this.this$01 = this$0;
}

defineClass(76, 637, {37:1}, AbstractMap$2);
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
var Ljava_util_AbstractMap$2_2_classLit = createForClass('java.util', 'AbstractMap/2', 76);
function AbstractMap$2$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(221, 1, {}, AbstractMap$2$1);
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
  entry = castTo(this.val$outerIter2.next_1(), 21);
  return entry.getValue();
}
;
_.remove_1 = function remove_12(){
  this.val$outerIter2.remove_1();
}
;
var Ljava_util_AbstractMap$2$1_2_classLit = createForClass('java.util', 'AbstractMap/2/1', 221);
function $setValue(this$static, value_0){
  var oldValue;
  oldValue = this$static.value_0;
  this$static.value_0 = value_0;
  return oldValue;
}

defineClass(220, 1, $intern_19);
_.equals_0 = function equals_10(other){
  var entry;
  if (!instanceOf(other, 21)) {
    return false;
  }
  entry = castTo(other, 21);
  return equals_14(this.key_0, entry.getKey()) && equals_14(this.value_0, entry.getValue());
}
;
_.getKey = function getKey(){
  return this.key_0;
}
;
_.getValue = function getValue(){
  return this.value_0;
}
;
_.hashCode_0 = function hashCode_11(){
  return hashCode_17(this.key_0) ^ hashCode_17(this.value_0);
}
;
_.setValue = function setValue(value_0){
  return $setValue(this, value_0);
}
;
_.toString_0 = function toString_21(){
  return this.key_0 + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 220);
function AbstractMap$SimpleEntry(key, value_0){
  this.key_0 = key;
  this.value_0 = value_0;
}

defineClass(137, 220, $intern_19, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 137);
defineClass(646, 1, $intern_19);
_.equals_0 = function equals_11(other){
  var entry;
  if (!instanceOf(other, 21)) {
    return false;
  }
  entry = castTo(other, 21);
  return equals_14(this.val$entry2.value[0], entry.getKey()) && equals_14($getValue(this), entry.getValue());
}
;
_.hashCode_0 = function hashCode_12(){
  return hashCode_17(this.val$entry2.value[0]) ^ hashCode_17($getValue(this));
}
;
_.toString_0 = function toString_22(){
  return this.val$entry2.value[0] + '=' + $getValue(this);
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 646);
defineClass(650, 638, $intern_18);
_.addAtIndex = function add_7(index_0, element){
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
_.getAtIndex = function get_4(index_0){
  var iter;
  iter = this.listIterator(index_0);
  try {
    return iter.next_1();
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 86)) {
      throw toJs(new IndexOutOfBoundsException("Can't get element " + index_0));
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
    if (instanceOf($e0, 86)) {
      throw toJs(new IndexOutOfBoundsException("Can't remove element " + index_0));
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
    if (instanceOf($e0, 86)) {
      throw toJs(new IndexOutOfBoundsException("Can't set element " + index_0));
    }
     else 
      throw toJs($e0);
  }
}
;
var Ljava_util_AbstractSequentialList_2_classLit = createForClass('java.util', 'AbstractSequentialList', 650);
function $$init_0(this$static){
  this$static.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_0, 1, 0, 5, 1);
}

function $add(this$static, o){
  push_1(this$static.array, o);
  return true;
}

function $addAll(this$static, c){
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

function $get_3(this$static, index_0){
  checkCriticalElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf_1(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_14(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $lastIndexOf_1(this$static, o, index_0){
  for (; index_0 >= 0; --index_0) {
    if (equals_14(o, this$static.array[index_0])) {
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
  insertTo_0(this.array, 0, clone(c.array));
}

defineClass(11, 638, $intern_20, ArrayList, ArrayList_0);
_.addAtIndex = function add_8(index_0, o){
  checkCriticalPositionIndex(index_0, this.array.length);
  insertTo(this.array, index_0, o);
}
;
_.add = function add_9(o){
  return $add(this, o);
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
  return $addAll(this, c);
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
_.getAtIndex = function get_5(index_0){
  return $get_3(this, index_0);
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
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 11);
function $next_0(this$static){
  checkCriticalElement(this$static.i < this$static.this$01.array.length);
  this$static.last = this$static.i++;
  return this$static.this$01.array[this$static.last];
}

function ArrayList$1(this$0){
  this.this$01 = this$0;
}

defineClass(50, 1, {}, ArrayList$1);
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
var Ljava_util_ArrayList$1_2_classLit = createForClass('java.util', 'ArrayList/1', 50);
function hashCode_13(a){
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

function $get_4(this$static, index_0){
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

defineClass(19, 638, $intern_20, Arrays$ArrayList);
_.contains = function contains_4(o){
  return $indexOf_0(this, o) != -1;
}
;
_.forEach_0 = function forEach_1(consumer){
  $forEach_1(this, consumer);
}
;
_.getAtIndex = function get_6(index_0){
  return $get_4(this, index_0);
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
var Ljava_util_Arrays$ArrayList_2_classLit = createForClass('java.util', 'Arrays/ArrayList', 19);
function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
}

function hashCode_14(collection){
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

function hashCode_15(list){
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

var EMPTY_LIST;
function Collections$EmptyList(){
}

defineClass(218, 638, $intern_20, Collections$EmptyList);
_.contains = function contains_5(object){
  return false;
}
;
_.getAtIndex = function get_7(location_0){
  checkCriticalElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_5(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_10;
}
;
_.size = function size_9(){
  return 0;
}
;
var Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 218);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_10 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(219, 1, {}, Collections$EmptyListIterator);
_.forEachRemaining = function forEachRemaining_4(consumer){
  $forEachRemaining(this, consumer);
}
;
_.add_0 = function add_10(o){
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
var INSTANCE_10;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 219);
function Collections$SingletonList(element){
  this.element = element;
}

defineClass(136, 638, $intern_20, Collections$SingletonList);
_.contains = function contains_6(item_0){
  return equals_14(this.element, item_0);
}
;
_.getAtIndex = function get_8(index_0){
  checkCriticalElementIndex(index_0, 1);
  return this.element;
}
;
_.size = function size_10(){
  return 1;
}
;
var Ljava_util_Collections$SingletonList_2_classLit = createForClass('java.util', 'Collections/SingletonList', 136);
function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(380, 15, $intern_2, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 380);
function Date_0(){
  this.jsdate = new $wnd.Date;
}

function Date_1(date){
  this.jsdate = new $wnd.Date(toDouble_0(date));
}

function padTwo(number){
  return number < 10?'0' + number:'' + number;
}

defineClass(60, 1, {4:1, 28:1, 60:1}, Date_0, Date_1);
_.equals_0 = function equals_12(obj){
  return instanceOf(obj, 60) && eq(fromDouble_0(this.jsdate.getTime()), fromDouble_0(castTo(obj, 60).jsdate.getTime()));
}
;
_.hashCode_0 = function hashCode_16(){
  var time;
  time = fromDouble_0(this.jsdate.getTime());
  return toInt_0(xor_0(time, createLongEmul(shru(isSmallLong0(time)?toBigLong(time):time, 32))));
}
;
_.toString_0 = function toString_23(){
  var hourOffset, minuteOffset, offset;
  offset = -this.jsdate.getTimezoneOffset();
  hourOffset = (offset >= 0?'+':'') + (offset / 60 | 0);
  minuteOffset = padTwo($wnd.Math.abs(offset) % 60);
  return ($clinit_Date$StringData() , DAYS)[this.jsdate.getDay()] + ' ' + MONTHS[this.jsdate.getMonth()] + ' ' + padTwo(this.jsdate.getDate()) + ' ' + padTwo(this.jsdate.getHours()) + ':' + padTwo(this.jsdate.getMinutes()) + ':' + padTwo(this.jsdate.getSeconds()) + ' GMT' + hourOffset + minuteOffset + ' ' + this.jsdate.getFullYear();
}
;
var Ljava_util_Date_2_classLit = createForClass('java.util', 'Date', 60);
function $clinit_Date$StringData(){
  $clinit_Date$StringData = emptyMethod;
  DAYS = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  MONTHS = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
}

var DAYS, MONTHS;
function HashMap(){
  $reset(this);
}

defineClass(16, 236, {4:1, 82:1}, HashMap);
_.equals_1 = function equals_13(value1, value2){
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
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 16);
function $add_0(this$static, o){
  var old;
  old = this$static.map_0.put(o, this$static);
  return old == null;
}

function HashSet(){
  this.map_0 = new HashMap;
}

function HashSet_0(map_0){
  this.map_0 = map_0;
}

defineClass(112, 640, $intern_21, HashSet);
_.add = function add_11(o){
  return $add_0(this, o);
}
;
_.clear = function clear_8(){
  this.map_0.clear();
}
;
_.contains = function contains_7(o){
  return this.map_0.containsKey(o);
}
;
_.isEmpty = function isEmpty_2(){
  return this.map_0.size() == 0;
}
;
_.iterator = function iterator_6(){
  var outerIter;
  return outerIter = (new AbstractMap$1(this.map_0)).this$01.entrySet().iterator() , new AbstractMap$1$1(outerIter);
}
;
_.remove = function remove_18(o){
  return this.map_0.remove(o) != null;
}
;
_.size = function size_11(){
  return this.map_0.size();
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 112);
function $accept(this$static, value_0){
  this$static.count_0 = add_1(this$static.count_0, 1);
  this$static.min_0 = $wnd.Math.min(this$static.min_0, value_0);
  this$static.max_0 = $wnd.Math.max(this$static.max_0, value_0);
  this$static.sum = add_1(this$static.sum, value_0);
}

function IntSummaryStatistics(){
}

defineClass(520, 1, {}, IntSummaryStatistics);
_.accept_0 = function accept_19(value_0){
  $accept(this, value_0);
}
;
_.toString_0 = function toString_24(){
  return 'IntSummaryStatistics[count = ' + toString_13(this.count_0) + ', avg = ' + (gt(this.count_0, 0)?toDouble_0(this.sum) / toDouble_0(this.count_0):0) + ', min = ' + this.min_0 + ', max = ' + this.max_0 + ', sum = ' + toString_13(this.sum) + ']';
}
;
_.count_0 = 0;
_.max_0 = -2147483648;
_.min_0 = $intern_1;
_.sum = 0;
var Ljava_util_IntSummaryStatistics_2_classLit = createForClass('java.util', 'IntSummaryStatistics', 520);
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
      return entry.setValue(value_0);
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
      return entry.getValue();
    }
  }
  return null;
}

function InternalHashCodeMap(host){
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(357, 1, {}, InternalHashCodeMap);
_.forEach_0 = function forEach_2(action){
  $forEach(this, action);
}
;
_.iterator = function iterator_7(){
  return new InternalHashCodeMap$1(this);
}
;
_.size_0 = 0;
var Ljava_util_InternalHashCodeMap_2_classLit = createForClass('java.util', 'InternalHashCodeMap', 357);
function InternalHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.chains = this.this$01.backingMap.entries();
  this.chain = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_0, 1, 0, 5, 1);
}

defineClass(181, 1, {}, InternalHashCodeMap$1);
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
var Ljava_util_InternalHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalHashCodeMap/1', 181);
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
function $contains_0(this$static, key){
  return !(this$static.backingMap.get(key) === undefined);
}

function $get_5(this$static, key){
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

defineClass(314, 1, {}, InternalStringMap);
_.forEach_0 = function forEach_3(action){
  $forEach(this, action);
}
;
_.iterator = function iterator_8(){
  return new InternalStringMap$1(this);
}
;
_.size_0 = 0;
_.valueMod = 0;
var Ljava_util_InternalStringMap_2_classLit = createForClass('java.util', 'InternalStringMap', 314);
function InternalStringMap$1(this$0){
  this.this$01 = this$0;
  this.entries_0 = this.this$01.backingMap.entries();
  this.current = this.entries_0.next();
}

defineClass(180, 1, {}, InternalStringMap$1);
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
var Ljava_util_InternalStringMap$1_2_classLit = createForClass('java.util', 'InternalStringMap/1', 180);
function $getValue(this$static){
  if (this$static.this$01.valueMod != this$static.val$lastValueMod3) {
    return $get_5(this$static.this$01, this$static.val$entry2.value[0]);
  }
  return this$static.val$entry2.value[1];
}

function InternalStringMap$2(this$0, val$entry, val$lastValueMod){
  this.this$01 = this$0;
  this.val$entry2 = val$entry;
  this.val$lastValueMod3 = val$lastValueMod;
}

defineClass(315, 646, $intern_19, InternalStringMap$2);
_.getKey = function getKey_0(){
  return this.val$entry2.value[0];
}
;
_.getValue = function getValue_0(){
  return $getValue(this);
}
;
_.setValue = function setValue_0(object){
  return $put_2(this.this$01, this.val$entry2.value[0], object);
}
;
_.val$lastValueMod3 = 0;
var Ljava_util_InternalStringMap$2_2_classLit = createForClass('java.util', 'InternalStringMap/2', 315);
function $clear(this$static){
  $reset(this$static.map_0);
  this$static.head.prev = this$static.head;
  this$static.head.next_0 = this$static.head;
}

function $recordAccess(this$static, entry){
  if (this$static.accessOrder) {
    $remove_8(entry);
    $addToEnd(entry);
  }
}

function $remove_7(this$static, key){
  var entry;
  entry = castTo($remove_1(this$static.map_0, key), 81);
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

defineClass(586, 16, {4:1, 82:1}, LinkedHashMap);
_.clear = function clear_9(){
  $clear(this);
}
;
_.containsKey = function containsKey_1(key){
  return $containsKey(this.map_0, key);
}
;
_.containsValue = function containsValue_1(value_0){
  var node;
  node = this.head.next_0;
  while (node != this.head) {
    if (equals_14(node.value_0, value_0)) {
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
_.get = function get_9(key){
  var entry;
  entry = castTo($get_2(this.map_0, key), 81);
  if (entry) {
    $recordAccess(this, entry);
    return entry.value_0;
  }
  return null;
}
;
_.put = function put_1(key, value_0){
  var newEntry, old, oldValue;
  old = castTo($get_2(this.map_0, key), 81);
  if (!old) {
    newEntry = new LinkedHashMap$ChainEntry_0(this, key, value_0);
    $put_0(this.map_0, key, newEntry);
    $addToEnd(newEntry);
    return null;
  }
   else {
    oldValue = $setValue(old, value_0);
    $recordAccess(this, old);
    return oldValue;
  }
}
;
_.remove = function remove_21(key){
  return $remove_7(this, key);
}
;
_.size = function size_12(){
  return $size(this.map_0);
}
;
_.accessOrder = false;
var Ljava_util_LinkedHashMap_2_classLit = createForClass('java.util', 'LinkedHashMap', 586);
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

defineClass(81, 137, {81:1, 21:1}, LinkedHashMap$ChainEntry, LinkedHashMap$ChainEntry_0);
var Ljava_util_LinkedHashMap$ChainEntry_2_classLit = createForClass('java.util', 'LinkedHashMap/ChainEntry', 81);
function $contains_1(this$static, o){
  if (instanceOf(o, 21)) {
    return $containsEntry(this$static.this$01, castTo(o, 21));
  }
  return false;
}

function LinkedHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(587, 640, $intern_17, LinkedHashMap$EntrySet);
_.clear = function clear_10(){
  $clear(this.this$01);
}
;
_.contains = function contains_8(o){
  return $contains_1(this, o);
}
;
_.iterator = function iterator_9(){
  return new LinkedHashMap$EntrySet$EntryIterator(this);
}
;
_.remove = function remove_22(entry){
  var key;
  if ($contains_1(this, entry)) {
    key = castTo(entry, 21).getKey();
    $remove_7(this.this$01, key);
    return true;
  }
  return false;
}
;
_.size = function size_13(){
  return $size(this.this$01.map_0);
}
;
var Ljava_util_LinkedHashMap$EntrySet_2_classLit = createForClass('java.util', 'LinkedHashMap/EntrySet', 587);
function LinkedHashMap$EntrySet$EntryIterator(this$1){
  this.this$11 = this$1;
  this.next_0 = this$1.this$01.head.next_0;
  this.lastModCount = this$1.this$01.map_0.modCount;
}

defineClass(588, 1, {}, LinkedHashMap$EntrySet$EntryIterator);
_.forEachRemaining = function forEachRemaining_7(consumer){
  $forEachRemaining(this, consumer);
}
;
_.next_1 = function next_8(){
  return checkCriticalConcurrentModification(this.this$11.this$01.map_0.modCount, this.lastModCount) , checkCriticalElement(this.next_0 != this.this$11.this$01.head) , this.last = this.next_0 , this.next_0 = this.next_0.next_0 , this.last;
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
var Ljava_util_LinkedHashMap$EntrySet$EntryIterator_2_classLit = createForClass('java.util', 'LinkedHashMap/EntrySet/EntryIterator', 588);
function LinkedHashSet(){
  HashSet_0.call(this, new LinkedHashMap);
}

defineClass(583, 112, $intern_21, LinkedHashSet);
var Ljava_util_LinkedHashSet_2_classLit = createForClass('java.util', 'LinkedHashSet', 583);
function $add_1(this$static, o){
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

defineClass(184, 650, $intern_20, LinkedList);
_.add = function add_12(o){
  return $add_1(this, o);
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
_.size = function size_14(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_LinkedList_2_classLit = createForClass('java.util', 'LinkedList', 184);
function LinkedList$ListIteratorImpl(this$0, index_0, startNode){
  this.this$01 = this$0;
  this.currentNode_0 = startNode;
  this.currentIndex = index_0;
}

defineClass(363, 1, {}, LinkedList$ListIteratorImpl);
_.forEachRemaining = function forEachRemaining_8(consumer){
  $forEachRemaining(this, consumer);
}
;
_.add_0 = function add_13(o){
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
var Ljava_util_LinkedList$ListIteratorImpl_2_classLit = createForClass('java.util', 'LinkedList/ListIteratorImpl', 363);
function LinkedList$Node(){
}

defineClass(139, 1, {}, LinkedList$Node);
var Ljava_util_LinkedList$Node_2_classLit = createForClass('java.util', 'LinkedList/Node', 139);
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(86, 15, {4:1, 18:1, 15:1, 12:1, 86:1}, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 86);
function equals_14(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_17(o){
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

function $get_6(this$static){
  checkCriticalElement(this$static.ref != null);
  return this$static.ref;
}

function $ifPresent(this$static, consumer){
  this$static.ref != null && consumer.accept(this$static.ref);
}

function $orElseGet(this$static, other){
  return this$static.ref != null?this$static.ref:castToString($get_3(other.messageList_0, 0));
}

function Optional(ref){
  $clinit_Optional();
  this.ref = ref;
}

function ofNullable(value_0){
  $clinit_Optional();
  return value_0 == null?EMPTY:new Optional(checkCriticalNotNull(value_0));
}

defineClass(22, 1, {22:1}, Optional);
_.equals_0 = function equals_15(obj){
  var other;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 22)) {
    return false;
  }
  other = castTo(obj, 22);
  return equals_14(this.ref, other.ref);
}
;
_.hashCode_0 = function hashCode_18(){
  return hashCode_17(this.ref);
}
;
_.toString_0 = function toString_25(){
  return this.ref != null?'Optional.of(' + valueOf_0(this.ref) + ')':'Optional.empty()';
}
;
var EMPTY;
var Ljava_util_Optional_2_classLit = createForClass('java.util', 'Optional', 22);
function $clinit_OptionalInt(){
  $clinit_OptionalInt = emptyMethod;
  EMPTY_0 = new OptionalInt;
}

function OptionalInt(){
  this.ref = 0;
  this.present = false;
}

function OptionalInt_0(value_0){
  $clinit_OptionalInt();
  this.ref = value_0;
  this.present = true;
}

defineClass(107, 1, {107:1}, OptionalInt, OptionalInt_0);
_.equals_0 = function equals_16(obj){
  var other;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 107)) {
    return false;
  }
  other = castTo(obj, 107);
  return this.present == other.present && compare_1(this.ref, other.ref) == 0;
}
;
_.hashCode_0 = function hashCode_19(){
  return this.present?this.ref:0;
}
;
_.toString_0 = function toString_26(){
  return this.present?'OptionalInt.of(' + ('' + this.ref) + ')':'OptionalInt.empty()';
}
;
_.present = false;
_.ref = 0;
var EMPTY_0;
var Ljava_util_OptionalInt_2_classLit = createForClass('java.util', 'OptionalInt', 107);
function $forEachRemaining_0(this$static, consumer){
  while (this$static.tryAdvance(consumer))
  ;
}

function $forEachRemaining_1(this$static, consumer){
  while (this$static.tryAdvance_0(consumer))
  ;
}

function Spliterator$OfInt$2methodref$accept$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(165, 1, {}, Spliterator$OfInt$2methodref$accept$Type);
_.accept_0 = function accept_20(arg0){
  this.$$outer_0.accept(valueOf(arg0));
}
;
var Ljava_util_Spliterator$OfInt$2methodref$accept$Type_2_classLit = createForClass('java.util', 'Spliterator/OfInt/2methodref$accept$Type', 165);
function Spliterator$OfInt$3methodref$accept$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(166, 1, {}, Spliterator$OfInt$3methodref$accept$Type);
_.accept_0 = function accept_21(arg0){
  this.$$outer_0.accept(valueOf(arg0));
}
;
var Ljava_util_Spliterator$OfInt$3methodref$accept$Type_2_classLit = createForClass('java.util', 'Spliterator/OfInt/3methodref$accept$Type', 166);
function checkCriticalArrayBounds(end, length_0){
  if (0 > end || end > length_0) {
    throw toJs(new ArrayIndexOutOfBoundsException('fromIndex: 0, toIndex: ' + end + ', length: ' + length_0));
  }
}

function Spliterators$BaseSpliterator(size_0, characteristics){
  this.sizeEstimate = size_0;
  this.characteristics = (characteristics & 64) != 0?characteristics | 16384:characteristics;
}

defineClass(163, 1, {});
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
var Ljava_util_Spliterators$BaseSpliterator_2_classLit = createForClass('java.util', 'Spliterators/BaseSpliterator', 163);
function Spliterators$AbstractIntSpliterator(size_0, characteristics){
  Spliterators$BaseSpliterator.call(this, size_0, characteristics);
}

defineClass(167, 163, {});
_.forEachRemaining_0 = function forEachRemaining_10(consumer){
  $forEachRemaining_1(this, consumer);
}
;
_.forEachRemaining = function forEachRemaining_11(consumer){
  instanceOf(consumer, 83)?$forEachRemaining_1(this, castTo(consumer, 83)):$forEachRemaining_1(this, new Spliterator$OfInt$3methodref$accept$Type(consumer));
}
;
_.tryAdvance = function tryAdvance(consumer){
  return instanceOf(consumer, 83)?this.tryAdvance_0(castTo(consumer, 83)):this.tryAdvance_0(new Spliterator$OfInt$2methodref$accept$Type(consumer));
}
;
var Ljava_util_Spliterators$AbstractIntSpliterator_2_classLit = createForClass('java.util', 'Spliterators/AbstractIntSpliterator', 167);
function Spliterators$AbstractSpliterator(size_0, characteristics){
  Spliterators$BaseSpliterator.call(this, size_0, characteristics);
}

defineClass(164, 163, {});
var Ljava_util_Spliterators$AbstractSpliterator_2_classLit = createForClass('java.util', 'Spliterators/AbstractSpliterator', 164);
function $forEachRemaining_2(this$static, consumer){
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

defineClass(204, 1, {});
_.forEachRemaining = function forEachRemaining_12(consumer){
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
var Ljava_util_Spliterators$BaseArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/BaseArraySpliterator', 204);
function $consume(this$static, consumer, index_0){
  consumer.accept(this$static.array[index_0]);
}

function Spliterators$ArraySpliterator(array, limit){
  this.index_0 = 0;
  this.limit = limit;
  this.characteristics = 17488;
  this.array = array;
}

defineClass(168, 204, {}, Spliterators$ArraySpliterator);
_.forEachRemaining = function forEachRemaining_13(consumer){
  $forEachRemaining_2(this, consumer);
}
;
_.tryAdvance = function tryAdvance_0(consumer){
  return $tryAdvance(this, consumer);
}
;
var Ljava_util_Spliterators$ArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/ArraySpliterator', 168);
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

defineClass(26, 1, {}, Spliterators$IteratorSpliterator);
_.characteristics_0 = function characteristics_2(){
  return this.characteristics;
}
;
_.estimateSize_0 = function estimateSize_1(){
  $initIterator(this);
  return this.estimateSize;
}
;
_.forEachRemaining = function forEachRemaining_14(consumer){
  $initIterator(this);
  this.it.forEachRemaining(consumer);
}
;
_.tryAdvance = function tryAdvance_1(consumer){
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
var Ljava_util_Spliterators$IteratorSpliterator_2_classLit = createForClass('java.util', 'Spliterators/IteratorSpliterator', 26);
function $add_2(this$static, newElement){
  !this$static.builder?(this$static.builder = new StringBuilder_1(this$static.prefix)):$append_3(this$static.builder, this$static.delimiter);
  $append_1(this$static.builder, newElement);
  return this$static;
}

function StringJoiner(prefix, suffix){
  this.delimiter = ', ';
  this.prefix = prefix;
  this.suffix = suffix;
  this.emptyValue = this.prefix + ('' + this.suffix);
}

defineClass(169, 1, {}, StringJoiner);
_.toString_0 = function toString_27(){
  return !this.builder?this.emptyValue:this.suffix.length == 0?this.builder.string:this.builder.string + ('' + this.suffix);
}
;
var Ljava_util_StringJoiner_2_classLit = createForClass('java.util', 'StringJoiner', 169);
function Function$lambda$0$Type(){
}

defineClass(212, 1, {}, Function$lambda$0$Type);
_.apply_0 = function apply_13(t){
  return t;
}
;
var Ljava_util_function_Function$lambda$0$Type_2_classLit = createForClass('java.util.function', 'Function/lambda$0$Type', 212);
defineClass(639, 1, {});
var Ljava_util_logging_Handler_2_classLit = createForClass('java.util.logging', 'Handler', 639);
function $addLoggerImpl(this$static, logger){
  (($clinit_Logger() , LOGGING_OFF)?null:logger.name_0).length == 0 && $addHandler(logger, new SimpleConsoleLogHandler);
  $putStringValue(this$static.loggerMap, LOGGING_OFF?null:logger.name_0, logger);
}

function $ensureLogger(this$static, name_0){
  var logger, newLogger, name_1, parentName;
  logger = castTo($getStringValue(this$static.loggerMap, name_0), 99);
  if (!logger) {
    newLogger = new Logger(name_0);
    name_1 = ($clinit_Logger() , LOGGING_OFF)?null:newLogger.name_0;
    parentName = $substring_0(name_1, 0, $wnd.Math.max(0, $lastIndexOf(name_1, fromCodePoint(46))));
    $ensureLogger(this$static, parentName);
    $setParent();
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
    $setLevel();
    $addLoggerImpl(singleton, rootLogger);
  }
  return singleton;
}

defineClass(229, 1, {}, LogManager);
var singleton;
var Ljava_util_logging_LogManager_2_classLit = createForClass('java.util.logging', 'LogManager', 229);
function $clinit_Logger(){
  $clinit_Logger = emptyMethod;
  LOGGING_OFF = true;
}

function $addHandler(this$static, handler){
  if (LOGGING_OFF) {
    return;
  }
  $add(this$static.handlers, handler);
}

function $setLevel(){
  if (LOGGING_OFF) {
    return;
  }
}

function $setParent(){
  if (LOGGING_OFF) {
    return;
  }
}

function Logger(name_0){
  $clinit_Logger();
  if (LOGGING_OFF) {
    return;
  }
  this.name_0 = name_0;
  this.handlers = new ArrayList;
}

function getLogger(name_0){
  $clinit_Logger();
  if (LOGGING_OFF) {
    return new Logger(null);
  }
  return $ensureLogger(getLogManager(), name_0);
}

defineClass(99, 1, {99:1}, Logger);
var LOGGING_OFF = false;
var Ljava_util_logging_Logger_2_classLit = createForClass('java.util.logging', 'Logger', 99);
function SimpleConsoleLogHandler(){
}

defineClass(179, 639, {}, SimpleConsoleLogHandler);
var Ljava_util_logging_SimpleConsoleLogHandler_2_classLit = createForClass('java.util.logging', 'SimpleConsoleLogHandler', 179);
function of_0(supplier, accumulator, combiner, characteristics){
  checkCriticalNotNull(supplier);
  checkCriticalNotNull(accumulator);
  checkCriticalNotNull(combiner);
  checkCriticalNotNull(characteristics);
  return new CollectorImpl(new Function$lambda$0$Type);
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

function values_2(){
  $clinit_Collector$Characteristics();
  return stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_0, 40, 0, [CONCURRENT, IDENTITY_FINISH, UNORDERED]);
}

defineClass(40, 17, {4:1, 28:1, 17:1, 40:1}, Collector$Characteristics);
var CONCURRENT, IDENTITY_FINISH, UNORDERED;
var Ljava_util_stream_Collector$Characteristics_2_classLit = createForEnum('java.util.stream', 'Collector/Characteristics', 40, values_2);
function CollectorImpl(finisher){
  $clinit_Collections();
  this.finisher = finisher;
}

defineClass(368, 1, {}, CollectorImpl);
var Ljava_util_stream_CollectorImpl_2_classLit = createForClass('java.util.stream', 'CollectorImpl', 368);
function Collectors$20methodref$add$Type(){
}

defineClass(51, 1, {}, Collectors$20methodref$add$Type);
var Ljava_util_stream_Collectors$20methodref$add$Type_2_classLit = createForClass('java.util.stream', 'Collectors/20methodref$add$Type', 51);
function Collectors$21methodref$ctor$Type(){
}

defineClass(53, 1, {}, Collectors$21methodref$ctor$Type);
var Ljava_util_stream_Collectors$21methodref$ctor$Type_2_classLit = createForClass('java.util.stream', 'Collectors/21methodref$ctor$Type', 53);
function Collectors$lambda$42$Type(){
}

defineClass(52, 1, {}, Collectors$lambda$42$Type);
var Ljava_util_stream_Collectors$lambda$42$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$42$Type', 52);
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

defineClass(174, 1, {});
_.terminated = false;
var Ljava_util_stream_TerminatableStream_2_classLit = createForClass('java.util.stream', 'TerminatableStream', 174);
function $filter(this$static, predicate){
  $throwIfTerminated(this$static);
  return new IntStreamImpl(this$static, new IntStreamImpl$FilterSpliterator(predicate, this$static.spliterator));
}

function $min(this$static){
  var stats, acc;
  stats = ($terminate(this$static) , acc = new IntSummaryStatistics , $forEachRemaining_1(this$static.spliterator, new IntStreamImpl$lambda$4$Type(acc)) , acc);
  if (eq(stats.count_0, 0)) {
    return $clinit_OptionalInt() , $clinit_OptionalInt() , EMPTY_0;
  }
  return $clinit_OptionalInt() , new OptionalInt_0(stats.min_0);
}

function IntStreamImpl(previous, spliterator){
  TerminatableStream.call(this, previous);
  this.spliterator = spliterator;
}

defineClass(182, 174, {}, IntStreamImpl);
var Ljava_util_stream_IntStreamImpl_2_classLit = createForClass('java.util.stream', 'IntStreamImpl', 182);
function $lambda$0_2(this$static, action_1, item_1){
  if (item_1 > -1) {
    this$static.found = true;
    action_1.accept_0(item_1);
  }
}

function $tryAdvance_0(this$static, action){
  this$static.found = false;
  while (!this$static.found && this$static.original.tryAdvance_0(new IntStreamImpl$FilterSpliterator$lambda$0$Type(this$static, action)))
  ;
  return this$static.found;
}

function IntStreamImpl$FilterSpliterator(filter, original){
  Spliterators$AbstractIntSpliterator.call(this, original.sizeEstimate, original.characteristics & -16449);
  checkCriticalNotNull(filter);
  this.original = original;
}

defineClass(358, 167, {}, IntStreamImpl$FilterSpliterator);
_.tryAdvance_0 = function tryAdvance_2(action){
  return $tryAdvance_0(this, action);
}
;
_.found = false;
var Ljava_util_stream_IntStreamImpl$FilterSpliterator_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/FilterSpliterator', 358);
function IntStreamImpl$FilterSpliterator$lambda$0$Type($$outer_0, action_1){
  this.$$outer_0 = $$outer_0;
  this.action_1 = action_1;
}

defineClass(359, 1, {}, IntStreamImpl$FilterSpliterator$lambda$0$Type);
_.accept_0 = function accept_22(arg0){
  $lambda$0_2(this.$$outer_0, this.action_1, arg0);
}
;
var Ljava_util_stream_IntStreamImpl$FilterSpliterator$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/FilterSpliterator/lambda$0$Type', 359);
function IntStreamImpl$lambda$4$Type(acc_1){
  this.acc_1 = acc_1;
}

defineClass(360, 1, {}, IntStreamImpl$lambda$4$Type);
_.accept_0 = function accept_23(arg0){
  $accept(this.acc_1, arg0);
}
;
var Ljava_util_stream_IntStreamImpl$lambda$4$Type_2_classLit = createForClass('java.util.stream', 'IntStreamImpl/lambda$4$Type', 360);
function $clinit_StreamImpl(){
  $clinit_StreamImpl = emptyMethod;
  NULL_CONSUMER = new StreamImpl$lambda$0$Type;
}

function $anyMatch(this$static, predicate){
  return ($throwIfTerminated(this$static) , $spliterator(new StreamImpl(this$static, new StreamImpl$FilterSpliterator(predicate, this$static.spliterator)))).tryAdvance(NULL_CONSUMER);
}

function $collect(this$static, collector){
  var lastArg;
  return $reduce(this$static, (lastArg = new ArrayList , lastArg));
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

function $forEach_2(this$static, action){
  $terminate(this$static);
  this$static.spliterator.forEachRemaining(action);
}

function $map(this$static, mapper){
  $throwIfTerminated(this$static);
  return new StreamImpl(this$static, new StreamImpl$MapToObjSpliterator(mapper, this$static.spliterator));
}

function $mapToInt(this$static, mapper){
  $throwIfTerminated(this$static);
  return new IntStreamImpl(this$static, new StreamImpl$MapToIntSpliterator(mapper, this$static.spliterator));
}

function $reduce(this$static, identity){
  var consumer;
  $terminate(this$static);
  consumer = new StreamImpl$ValueConsumer;
  consumer.value_0 = identity;
  this$static.spliterator.forEachRemaining(new StreamImpl$lambda$5$Type(consumer));
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

function lambda$4_1(a_1, t_2){
  castTo(a_1, 37).add(t_2);
  return a_1;
}

function lambda$5_0(consumer_0, item_2){
  $clinit_StreamImpl();
  $accept_0(consumer_0, lambda$4_1(consumer_0.value_0, item_2));
}

defineClass(23, 174, {}, StreamImpl);
var NULL_CONSUMER;
var Ljava_util_stream_StreamImpl_2_classLit = createForClass('java.util.stream', 'StreamImpl', 23);
function $lambda$0_3(this$static, action_1, item_1){
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

defineClass(175, 164, {}, StreamImpl$FilterSpliterator);
_.tryAdvance = function tryAdvance_3(action){
  this.found = false;
  while (!this.found && this.original.tryAdvance(new StreamImpl$FilterSpliterator$lambda$0$Type(this, action)))
  ;
  return this.found;
}
;
_.found = false;
var Ljava_util_stream_StreamImpl$FilterSpliterator_2_classLit = createForClass('java.util.stream', 'StreamImpl/FilterSpliterator', 175);
function StreamImpl$FilterSpliterator$lambda$0$Type($$outer_0, action_1){
  this.$$outer_0 = $$outer_0;
  this.action_1 = action_1;
}

defineClass(241, 1, $intern_7, StreamImpl$FilterSpliterator$lambda$0$Type);
_.accept = function accept_24(arg0){
  $lambda$0_3(this.$$outer_0, this.action_1, arg0);
}
;
var Ljava_util_stream_StreamImpl$FilterSpliterator$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/FilterSpliterator/lambda$0$Type', 241);
function StreamImpl$MapToIntSpliterator(map_0, original){
  Spliterators$AbstractIntSpliterator.call(this, original.estimateSize_0(), original.characteristics_0() & -6);
  checkCriticalNotNull(map_0);
  this.original = original;
}

defineClass(238, 167, {}, StreamImpl$MapToIntSpliterator);
_.tryAdvance_0 = function tryAdvance_4(action){
  return this.original.tryAdvance(new StreamImpl$MapToIntSpliterator$lambda$0$Type(action));
}
;
var Ljava_util_stream_StreamImpl$MapToIntSpliterator_2_classLit = createForClass('java.util.stream', 'StreamImpl/MapToIntSpliterator', 238);
function StreamImpl$MapToIntSpliterator$lambda$0$Type(action_1){
  this.action_1 = action_1;
}

defineClass(240, 1, $intern_7, StreamImpl$MapToIntSpliterator$lambda$0$Type);
_.accept = function accept_25(arg0){
  this.action_1.accept_0($getZIndex(new DominoElement(castToNative(arg0, $wnd.Element))));
}
;
var Ljava_util_stream_StreamImpl$MapToIntSpliterator$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/MapToIntSpliterator/lambda$0$Type', 240);
function $lambda$0_4(this$static, action_1, u_1){
  action_1.accept(this$static.map_0.apply_0(u_1));
}

function StreamImpl$MapToObjSpliterator(map_0, original){
  Spliterators$AbstractSpliterator.call(this, original.estimateSize_0(), original.characteristics_0() & -6);
  checkCriticalNotNull(map_0);
  this.map_0 = map_0;
  this.original = original;
}

defineClass(237, 164, {}, StreamImpl$MapToObjSpliterator);
_.tryAdvance = function tryAdvance_5(action){
  return this.original.tryAdvance(new StreamImpl$MapToObjSpliterator$lambda$0$Type(this, action));
}
;
var Ljava_util_stream_StreamImpl$MapToObjSpliterator_2_classLit = createForClass('java.util.stream', 'StreamImpl/MapToObjSpliterator', 237);
function StreamImpl$MapToObjSpliterator$lambda$0$Type($$outer_0, action_1){
  this.$$outer_0 = $$outer_0;
  this.action_1 = action_1;
}

defineClass(239, 1, $intern_7, StreamImpl$MapToObjSpliterator$lambda$0$Type);
_.accept = function accept_26(arg0){
  $lambda$0_4(this.$$outer_0, this.action_1, arg0);
}
;
var Ljava_util_stream_StreamImpl$MapToObjSpliterator$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/MapToObjSpliterator/lambda$0$Type', 239);
function $accept_0(this$static, value_0){
  this$static.value_0 = value_0;
}

function StreamImpl$ValueConsumer(){
}

defineClass(176, 1, $intern_7, StreamImpl$ValueConsumer);
_.accept = function accept_27(value_0){
  $accept_0(this, value_0);
}
;
var Ljava_util_stream_StreamImpl$ValueConsumer_2_classLit = createForClass('java.util.stream', 'StreamImpl/ValueConsumer', 176);
function StreamImpl$lambda$0$Type(){
}

defineClass(242, 1, $intern_7, StreamImpl$lambda$0$Type);
_.accept = function accept_28(arg0){
  $clinit_StreamImpl();
}
;
var Ljava_util_stream_StreamImpl$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/lambda$0$Type', 242);
function StreamImpl$lambda$1$Type(){
}

defineClass(243, 1, $intern_7, StreamImpl$lambda$1$Type);
_.accept = function accept_29(arg0){
  $clinit_StreamImpl();
}
;
var Ljava_util_stream_StreamImpl$lambda$1$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/lambda$1$Type', 243);
function StreamImpl$lambda$5$Type(consumer_0){
  this.consumer_0 = consumer_0;
}

defineClass(244, 1, $intern_7, StreamImpl$lambda$5$Type);
_.accept = function accept_30(arg0){
  lambda$5_0(this.consumer_0, arg0);
}
;
var Ljava_util_stream_StreamImpl$lambda$5$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/lambda$5$Type', 244);
function stampJavaTypeInfo_1(array, referenceType){
  return stampJavaTypeInfo_0(array, referenceType);
}

defineClass(649, 1, {});
var Ljavaemul_internal_ConsoleLogger_2_classLit = createForClass('javaemul.internal', 'ConsoleLogger', 649);
function forEach_4(obj, cb){
  for (var element in obj) {
    cb(element);
  }
}

defineClass(1322, 1, {});
defineClass(642, 1, {});
var Lorg_slf4j_helpers_NamedLoggerBase_2_classLit = createForClass('org.slf4j.helpers', 'NamedLoggerBase', 642);
defineClass(643, 642, {});
_.toString_0 = function toString_28(){
  return $ensureNamesAreInitialized(Lorg_dominokit_domino_logger_ConsoleLoggerAdapter_2_classLit) , Lorg_dominokit_domino_logger_ConsoleLoggerAdapter_2_classLit.typeName + '(' + this.name_0 + ')';
}
;
var Lorg_slf4j_helpers_MarkerIgnoringBase_2_classLit = createForClass('org.slf4j.helpers', 'MarkerIgnoringBase', 643);
function $clinit_ConsoleLoggerAdapter(){
  $clinit_ConsoleLoggerAdapter = emptyMethod;
  INFO_ENABLED = true;
  ERROR_ENABLED = true;
}

function $error(msg, t){
  ERROR_ENABLED && ($clinit_DomGlobal() , $wnd.goog.global.console).error(msg, t);
}

function ConsoleLoggerAdapter(name_0){
  $clinit_ConsoleLoggerAdapter();
  this.name_0 = name_0;
}

defineClass(133, 643, {}, ConsoleLoggerAdapter);
var ERROR_ENABLED = false, INFO_ENABLED = false;
var Lorg_dominokit_domino_logger_ConsoleLoggerAdapter_2_classLit = createForClass('org.dominokit.domino.logger', 'ConsoleLoggerAdapter', 133);
function $animate(this$static){
  this$static.delay > 0?$schedule_0(this$static.delayTimer, this$static.delay):$animateElement(this$static);
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
  $cancel_1(this$static.delayTimer);
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

defineClass(70, 1, {70:1}, Animation_0);
_.delay = 0;
_.duration = 800;
_.repeatCount = 1;
var Lorg_dominokit_domino_ui_animations_Animation_2_classLit = createForClass('org.dominokit.domino.ui.animations', 'Animation', 70);
function $cancel_1(this$static){
  if (this$static.timerId == null) {
    return;
  }
  this$static.isRepeating?$wnd.goog.global.clearInterval($doubleValue(this$static.timerId)):$wnd.goog.global.clearTimeout($doubleValue(this$static.timerId));
  this$static.timerId = null;
}

function $schedule_0(this$static, delayMillis){
  if (delayMillis < 0) {
    throw toJs(new IllegalArgumentException_0('must be non-negative'));
  }
  this$static.timerId != null && $cancel_1(this$static);
  this$static.isRepeating = false;
  this$static.timerId = ($clinit_DomGlobal() , $wnd.goog.global.setTimeout(makeLambdaFunction(Timer$lambda$0$Type.prototype.onInvoke_0, Timer$lambda$0$Type, [this$static]), delayMillis));
}

function $scheduleRepeating(this$static, periodMillis){
  if (periodMillis <= 0) {
    throw toJs(new IllegalArgumentException_0('must be positive'));
  }
  this$static.timerId != null && $cancel_1(this$static);
  this$static.isRepeating = true;
  this$static.timerId = ($clinit_DomGlobal() , $wnd.goog.global.setInterval(makeLambdaFunction(Timer$lambda$1$Type.prototype.onInvoke_0, Timer$lambda$1$Type, [this$static]), periodMillis));
}

function Timer(){
}

function lambda$0_4(timer_0){
  timer_0.isRepeating || (timer_0.timerId = null);
  timer_0.run();
}

function lambda$1_1(timer_0){
  timer_0.isRepeating || (timer_0.timerId = null);
  $nextSlide(timer_0.this$01);
}

defineClass(101, 1, {});
_.isRepeating = false;
_.timerId = null;
var Lorg_gwtproject_timer_client_Timer_2_classLit = createForClass('org.gwtproject.timer.client', 'Timer', 101);
function Animation$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(376, 101, {}, Animation$1);
_.run = function run(){
  $animateElement(this.this$01);
}
;
var Lorg_dominokit_domino_ui_animations_Animation$1_2_classLit = createForClass('org.dominokit.domino.ui.animations', 'Animation/1', 376);
function Animation$lambda$0$Type(){
}

defineClass(374, 1, {}, Animation$lambda$0$Type);
_.onComplete = function onComplete_0(element){
}
;
var Lorg_dominokit_domino_ui_animations_Animation$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.animations', 'Animation/lambda$0$Type', 374);
function Animation$lambda$1$Type(){
}

defineClass(375, 1, {}, Animation$lambda$1$Type);
_.beforeStart = function beforeStart(element){
}
;
var Lorg_dominokit_domino_ui_animations_Animation$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.animations', 'Animation/lambda$1$Type', 375);
function Animation$lambda$2$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(377, 1, {}, Animation$lambda$2$Type);
_.handleEvent = function handleEvent_5(arg0){
  $stop(this.$$outer_0, false);
}
;
var Lorg_dominokit_domino_ui_animations_Animation$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.animations', 'Animation/lambda$2$Type', 377);
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

function values_3(){
  $clinit_Transition();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_animations_Transition_2_classLit, 1), $intern_0, 6, 0, [BOUNCE, FLASH, PULSE, RUBBER_BAND, SHAKE, SWING, TADA, WOBBLE, JELLO, BOUNCE_IN, BOUNCE_IN_DOWN, BOUNCE_IN_LEFT, BOUNCE_IN_RIGHT, BOUNCE_IN_UP, BOUNCE_OUT, BOUNCE_OUT_DOWN, BOUNCE_OUT_LEFT, BOUNCE_OUT_RIGHT, BOUNCE_OUT_UP, FADE_IN, FADE_IN_DOWN, FADE_IN_DOWN_BIG, FADE_IN_LEFT, FADE_IN_LEFT_BIG, FADE_IN_RIGHT, FADE_IN_RIGHT_BIG, FADE_IN_UP, FADE_IN_UP_BIG, FADE_OUT, FADE_OUT_DOWN, FADE_OUT_DOWN_BIG, FADE_OUT_LEFT, FADE_OUT_LEFT_BIG, FADE_OUT_RIGHT, FADE_OUT_RIGHT_BIG, FADE_OUT_UP, FADE_OUT_UP_BIG, FLIP, FLIP_IN_X, FLIP_IN_Y, FLIP_OUT_X, FLIP_OUT_Y, LIGHT_SPEED_IN, LIGHT_SPEED_OUT, ROTATE_IN, ROTATE_IN_DOWN_LEFT, ROTATE_IN_DOWN_RIGHT, ROTATE_IN_UP_LEFT, ROTATE_IN_UP_RIGHT, ROTATE_OUT, ROTATE_OUT_DOWN_LEFT, ROTATE_OUT_DOWN_RIGHT, ROTATE_OUT_UP_LEFT, ROTATE_OUT_UP_RIGHT, SLIDE_IN_UP, SLIDE_IN_DOWN, SLIDE_IN_LEFT, SLIDE_IN_RIGHT, SLIDE_OUT_UP, SLIDE_OUT_DOWN, SLIDE_OUT_LEFT, SLIDE_OUT_RIGHT, ZOOM_IN, ZOOM_IN_DOWN, ZOOM_IN_LEFT, ZOOM_IN_RIGHT, ZOOM_IN_UP, ZOOM_OUT, ZOOM_OUT_DOWN, ZOOM_OUT_LEFT, ZOOM_OUT_RIGHT, ZOOM_OUT_UP, HINGE, ROLL_IN, ROLL_OUT, COLLAPSE_UP]);
}

defineClass(6, 17, {4:1, 28:1, 17:1, 6:1}, Transition);
var BOUNCE, BOUNCE_IN, BOUNCE_IN_DOWN, BOUNCE_IN_LEFT, BOUNCE_IN_RIGHT, BOUNCE_IN_UP, BOUNCE_OUT, BOUNCE_OUT_DOWN, BOUNCE_OUT_LEFT, BOUNCE_OUT_RIGHT, BOUNCE_OUT_UP, COLLAPSE_UP, FADE_IN, FADE_IN_DOWN, FADE_IN_DOWN_BIG, FADE_IN_LEFT, FADE_IN_LEFT_BIG, FADE_IN_RIGHT, FADE_IN_RIGHT_BIG, FADE_IN_UP, FADE_IN_UP_BIG, FADE_OUT, FADE_OUT_DOWN, FADE_OUT_DOWN_BIG, FADE_OUT_LEFT, FADE_OUT_LEFT_BIG, FADE_OUT_RIGHT, FADE_OUT_RIGHT_BIG, FADE_OUT_UP, FADE_OUT_UP_BIG, FLASH, FLIP, FLIP_IN_X, FLIP_IN_Y, FLIP_OUT_X, FLIP_OUT_Y, HINGE, JELLO, LIGHT_SPEED_IN, LIGHT_SPEED_OUT, PULSE, ROLL_IN, ROLL_OUT, ROTATE_IN, ROTATE_IN_DOWN_LEFT, ROTATE_IN_DOWN_RIGHT, ROTATE_IN_UP_LEFT, ROTATE_IN_UP_RIGHT, ROTATE_OUT, ROTATE_OUT_DOWN_LEFT, ROTATE_OUT_DOWN_RIGHT, ROTATE_OUT_UP_LEFT, ROTATE_OUT_UP_RIGHT, RUBBER_BAND, SHAKE, SLIDE_IN_DOWN, SLIDE_IN_LEFT, SLIDE_IN_RIGHT, SLIDE_IN_UP, SLIDE_OUT_DOWN, SLIDE_OUT_LEFT, SLIDE_OUT_RIGHT, SLIDE_OUT_UP, SWING, TADA, WOBBLE, ZOOM_IN, ZOOM_IN_DOWN, ZOOM_IN_LEFT, ZOOM_IN_RIGHT, ZOOM_IN_UP, ZOOM_OUT, ZOOM_OUT_DOWN, ZOOM_OUT_LEFT, ZOOM_OUT_RIGHT, ZOOM_OUT_UP;
var Lorg_dominokit_domino_ui_animations_Transition_2_classLit = createForEnum('org.dominokit.domino.ui.animations', 'Transition', 6, values_3);
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

defineClass(187, 9, $intern_16);
var Lorg_dominokit_domino_ui_style_WavesElement_2_classLit = createForClass('org.dominokit.domino.ui.style', 'WavesElement', 187);
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

defineClass(393, 187, $intern_16);
var Lorg_dominokit_domino_ui_button_BaseButton_2_classLit = createForClass('org.dominokit.domino.ui.button', 'BaseButton', 393);
function Button(text_0){
  WavesElement.call(this);
  $clinit_Elevation();
  this.buttonElement = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('button'), $wnd.HTMLElement))).element), 'btn'), 3);
  this.textContainer = $setOrder($setFlexGrow(castTo($addCss(new FlexItem, 'dui-btn-text'), 14)), 20);
  this.iconContainer = $setOrder(new FlexItem, 10);
  this.contentLayout = $appendChild_2($appendChild_2($setJustifyContent(new FlexLayout, ($clinit_FlexJustifyContent() , CENTER)), this.textContainer), this.iconContainer);
  $appendChild_0(this.buttonElement, this.contentLayout);
  $setSize(this, ($clinit_ButtonSize() , MEDIUM));
  $init(this, this);
  this.wavesSupport = $initWaves_0(new WavesSupport(this.buttonElement.wrappedElement));
  $elevate(this, of_1(($clinit_DominoUIConfig() , INSTANCE_12).defaultButtonElevation));
  $textContent(this.textContainer, text_0);
}

defineClass(43, 393, {43:1, 9:1, 13:1}, Button);
_.element_3 = function element_10(){
  return this.buttonElement.wrappedElement;
}
;
var Lorg_dominokit_domino_ui_button_Button_2_classLit = createForClass('org.dominokit.domino.ui.button', 'Button', 43);
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

function values_4(){
  $clinit_ButtonSize();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_button_ButtonSize_2_classLit, 1), $intern_0, 88, 0, [LARGE, MEDIUM, SMALL, XSMALL]);
}

defineClass(88, 17, {4:1, 28:1, 17:1, 88:1}, ButtonSize);
var LARGE, MEDIUM, SMALL, XSMALL;
var Lorg_dominokit_domino_ui_button_ButtonSize_2_classLit = createForEnum('org.dominokit.domino.ui.button', 'ButtonSize', 88, values_4);
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
  $add(this$static.slides, slide);
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

function $lambda$0_5(this$static){
  var nextSlide;
  $resetTimer(this$static);
  $indexOf_1(this$static.slides, this$static.activeSlide, 0) < this$static.slides.array.length - 1?(nextSlide = castTo($get_3(this$static.slides, $indexOf_1(this$static.slides, this$static.activeSlide, 0) + 1), 31)):(nextSlide = castTo($get_3(this$static.slides, 0), 31));
  $goToSlide(this$static, nextSlide, 'next');
}

function $lambda$1_4(this$static){
  var prevSlide;
  $resetTimer(this$static);
  $indexOf_1(this$static.slides, this$static.activeSlide, 0) > 0?(prevSlide = castTo($get_3(this$static.slides, $indexOf_1(this$static.slides, this$static.activeSlide, 0) - 1), 31)):(prevSlide = castTo($get_3(this$static.slides, this$static.slides.array.length - 1), 31));
  $goToSlide(this$static, prevSlide, 'prev');
}

function $lambda$10_0(this$static){
  var nextSlide;
  $indexOf_1(this$static.slides, this$static.activeSlide, 0) < this$static.slides.array.length - 1?(nextSlide = castTo($get_3(this$static.slides, $indexOf_1(this$static.slides, this$static.activeSlide, 0) + 1), 31)):(nextSlide = castTo($get_3(this$static.slides, 0), 31));
  $goToSlide(this$static, nextSlide, 'next');
}

function $lambda$11(this$static){
  var prevSlide;
  $indexOf_1(this$static.slides, this$static.activeSlide, 0) > 0?(prevSlide = castTo($get_3(this$static.slides, $indexOf_1(this$static.slides, this$static.activeSlide, 0) - 1), 31)):(prevSlide = castTo($get_3(this$static.slides, this$static.slides.array.length - 1), 31));
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

function $lambda$2_1(this$static){
  this$static.attached = false;
  this$static.timer.timerId != null && $cancel_1(this$static.timer);
  $onAttached(this$static, new Carousel$lambda$3$Type(this$static));
}

function $lambda$3_1(this$static){
  this$static.attached = true;
  this$static.autoSlide && $scheduleRepeating(this$static.timer, this$static.autoSlideDuration);
}

function $lambda$4_0(this$static, slide_1){
  $resetTimer(this$static);
  $goToSlide(this$static, slide_1, '');
}

function $nextSlide(this$static){
  var nextSlide;
  $indexOf_1(this$static.slides, this$static.activeSlide, 0) < this$static.slides.array.length - 1?(nextSlide = castTo($get_3(this$static.slides, $indexOf_1(this$static.slides, this$static.activeSlide, 0) + 1), 31)):(nextSlide = castTo($get_3(this$static.slides, 0), 31));
  $goToSlide(this$static, nextSlide, 'next');
}

function $removeMotionStyles(this$static){
  $removeCss(castTo($removeCss(castTo($removeCss(castTo($removeCss(this$static.activeSlide, 'left'), 31), 'right'), 31), 'next'), 31), 'prev');
  $deActivate(this$static.activeSlide);
  $removeCss(castTo($removeCss(castTo($removeCss(castTo($removeCss(this$static.targetSlide, 'left'), 31), 'right'), 31), 'next'), 31), 'prev');
  $activate(this$static.targetSlide);
  this$static.activeSlide = this$static.targetSlide;
}

function $resetTimer(this$static){
  if (this$static.autoSlide) {
    $cancel_1(this$static.timer);
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
  this.prevElement = castToNative(castTo($appendChild_0(castTo($setAttribute_0(castTo($css_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('a'), $wnd.HTMLElement))).element), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['left', 'carousel-control'])), 3), 'role', 'button'), 3), $setFontSize(castTo($addCss(create_8('chevron_left'), 'v-center'), 77), '60px')), 3).wrappedElement, $wnd.HTMLAnchorElement);
  this.nextElement = castToNative(castTo($appendChild_0(castTo($setAttribute_0(castTo($css_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('a'), $wnd.HTMLElement))).element), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['right', 'carousel-control'])), 3), 'role', 'button'), 3), $setFontSize(castTo($addCss(create_8('chevron_right'), 'v-center'), 77), '60px')), 3).wrappedElement, $wnd.HTMLAnchorElement);
  this.element = castToNative(castTo($css(castTo($appendChild(castTo($appendChild(castTo($appendChild(castTo($appendChild(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), this.indicatorsElement), 3), this.slidesElement), 3), this.prevElement), 3), this.nextElement), 3), 'carousel'), 3).wrappedElement, $wnd.HTMLDivElement);
  this.slides = new ArrayList;
  this.nextElement.addEventListener('click', new Carousel$lambda$0$Type(this));
  this.prevElement.addEventListener('click', new Carousel$lambda$1$Type(this));
  this.timer = new Carousel$1(this);
  $init(this, this);
  $onAttached(this, new Carousel$lambda$3$Type(this));
  $onDetached(this, new Carousel$lambda$2$Type(this));
}

defineClass(478, 9, $intern_16, Carousel);
_.element_3 = function element_11(){
  return this.element;
}
;
_.attached = false;
_.autoSlide = false;
_.autoSlideDuration = 3000;
var Lorg_dominokit_domino_ui_carousel_Carousel_2_classLit = createForClass('org.dominokit.domino.ui.carousel', 'Carousel', 478);
function Carousel$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(481, 101, {}, Carousel$1);
_.run = function run_0(){
  $nextSlide(this.this$01);
}
;
var Lorg_dominokit_domino_ui_carousel_Carousel$1_2_classLit = createForClass('org.dominokit.domino.ui.carousel', 'Carousel/1', 481);
function Carousel$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(479, 1, {}, Carousel$lambda$0$Type);
_.handleEvent = function handleEvent_6(arg0){
  $lambda$0_5(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_carousel_Carousel$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.carousel', 'Carousel/lambda$0$Type', 479);
function Carousel$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(480, 1, {}, Carousel$lambda$1$Type);
_.handleEvent = function handleEvent_7(arg0){
  $lambda$1_4(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_carousel_Carousel$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.carousel', 'Carousel/lambda$1$Type', 480);
function Carousel$lambda$10$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(489, 1, {}, Carousel$lambda$10$Type);
_.handleEvent = function handleEvent_8(arg0){
  $lambda$10_0(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_carousel_Carousel$lambda$10$Type_2_classLit = createForClass('org.dominokit.domino.ui.carousel', 'Carousel/lambda$10$Type', 489);
function Carousel$lambda$11$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(490, 1, {}, Carousel$lambda$11$Type);
_.handleEvent = function handleEvent_9(arg0){
  $lambda$11(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_carousel_Carousel$lambda$11$Type_2_classLit = createForClass('org.dominokit.domino.ui.carousel', 'Carousel/lambda$11$Type', 490);
function Carousel$lambda$12$Type($$outer_0, slide_1, source_2){
  this.$$outer_0 = $$outer_0;
  this.slide_1 = slide_1;
  this.source_2 = source_2;
}

defineClass(491, 1, {}, Carousel$lambda$12$Type);
_.execute_0 = function execute_3(){
  return $lambda$12(this.$$outer_0, this.slide_1, this.source_2);
}
;
var Lorg_dominokit_domino_ui_carousel_Carousel$lambda$12$Type_2_classLit = createForClass('org.dominokit.domino.ui.carousel', 'Carousel/lambda$12$Type', 491);
function Carousel$lambda$2$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(482, 1, $intern_22, Carousel$lambda$2$Type);
_.onObserved = function onObserved(arg0){
  $lambda$2_1(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_carousel_Carousel$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.carousel', 'Carousel/lambda$2$Type', 482);
function Carousel$lambda$3$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(191, 1, $intern_22, Carousel$lambda$3$Type);
_.onObserved = function onObserved_0(arg0){
  $lambda$3_1(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_carousel_Carousel$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.ui.carousel', 'Carousel/lambda$3$Type', 191);
function Carousel$lambda$4$Type($$outer_0, slide_1){
  this.$$outer_0 = $$outer_0;
  this.slide_1 = slide_1;
}

defineClass(483, 1, {}, Carousel$lambda$4$Type);
_.handleEvent = function handleEvent_10(arg0){
  $lambda$4_0(this.$$outer_0, this.slide_1);
}
;
var Lorg_dominokit_domino_ui_carousel_Carousel$lambda$4$Type_2_classLit = createForClass('org.dominokit.domino.ui.carousel', 'Carousel/lambda$4$Type', 483);
function Carousel$lambda$5$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(484, 1, {}, Carousel$lambda$5$Type);
_.handleEvent = function handleEvent_11(arg0){
  $removeMotionStyles(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_carousel_Carousel$lambda$5$Type_2_classLit = createForClass('org.dominokit.domino.ui.carousel', 'Carousel/lambda$5$Type', 484);
function Carousel$lambda$6$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(485, 1, {}, Carousel$lambda$6$Type);
_.handleEvent = function handleEvent_12(arg0){
  $removeMotionStyles(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_carousel_Carousel$lambda$6$Type_2_classLit = createForClass('org.dominokit.domino.ui.carousel', 'Carousel/lambda$6$Type', 485);
function Carousel$lambda$7$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(486, 1, {}, Carousel$lambda$7$Type);
_.handleEvent = function handleEvent_13(arg0){
  $removeMotionStyles(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_carousel_Carousel$lambda$7$Type_2_classLit = createForClass('org.dominokit.domino.ui.carousel', 'Carousel/lambda$7$Type', 486);
function Carousel$lambda$8$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(487, 1, {}, Carousel$lambda$8$Type);
_.handleEvent = function handleEvent_14(arg0){
  $removeMotionStyles(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_carousel_Carousel$lambda$8$Type_2_classLit = createForClass('org.dominokit.domino.ui.carousel', 'Carousel/lambda$8$Type', 487);
function Carousel$lambda$9$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(488, 1, {}, Carousel$lambda$9$Type);
_.handleEvent = function handleEvent_15(arg0){
  $removeMotionStyles(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_carousel_Carousel$lambda$9$Type_2_classLit = createForClass('org.dominokit.domino.ui.carousel', 'Carousel/lambda$9$Type', 488);
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
  Slide.call(this, castToNative(castTo($attr_0(new EmptyContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('img'), $wnd.HTMLElement)), 'src', imageSrc), 55).element, $wnd.HTMLImageElement));
}

defineClass(31, 9, {31:1, 9:1, 13:1}, Slide_0);
_.element_3 = function element_12(){
  return this.slideElement;
}
;
var Lorg_dominokit_domino_ui_carousel_Slide_2_classLit = createForClass('org.dominokit.domino.ui.carousel', 'Slide', 31);
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

defineClass(378, 1, {}, AnimationCollapseOptions);
var Lorg_dominokit_domino_ui_collapsible_AnimationCollapseOptions_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'AnimationCollapseOptions', 378);
function $lambda$0_6(this$static, style_1, element_2){
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

function $lambda$1_5(this$static){
  this$static.showing = false;
  $forEach_0((new Collapsible$1$1methodref$onShowCompleted$Type(this$static.handlers.this$01)).$$outer_0.showHandlers, new Collapsible$6methodref$apply$Type);
}

function $lambda$3_2(this$static){
  this$static.hiding = true;
  $forEach_0((new Collapsible$1$2methodref$onBeforeHide$Type(this$static.handlers.this$01)).$$outer_0.beforeHideHandlers, new Collapsible$5methodref$apply$Type);
}

function $lambda$4_1(this$static, style_1, element_2){
  style_1.element.style.setProperty('display', 'none');
  $setAttribute_0(new DominoElement(element_2), 'd-collapsed', 'true');
  this$static.hiding = false;
  $forEach_0((new Collapsible$1$3methodref$onHideCompleted$Type(this$static.handlers.this$01)).$$outer_0.hideHandlers, new Collapsible$4methodref$apply$Type);
}

function AnimationCollapseStrategy(showTransition, hideTransition, duration){
  this.options = $setHideDuration($setShowDuration($setHideTransition($setShowTransition(new AnimationCollapseOptions, showTransition), hideTransition), duration), duration);
}

defineClass(185, 1, {}, AnimationCollapseStrategy);
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
var Lorg_dominokit_domino_ui_collapsible_AnimationCollapseStrategy_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'AnimationCollapseStrategy', 185);
function AnimationCollapseStrategy$lambda$0$Type($$outer_0, style_1, element_2){
  this.$$outer_0 = $$outer_0;
  this.style_1 = style_1;
  this.element_2 = element_2;
}

defineClass(369, 1, {}, AnimationCollapseStrategy$lambda$0$Type);
_.beforeStart = function beforeStart_0(arg0){
  $lambda$0_6(this.$$outer_0, this.style_1, this.element_2);
}
;
var Lorg_dominokit_domino_ui_collapsible_AnimationCollapseStrategy$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'AnimationCollapseStrategy/lambda$0$Type', 369);
function AnimationCollapseStrategy$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(370, 1, {}, AnimationCollapseStrategy$lambda$1$Type);
_.onComplete = function onComplete_2(arg0){
  $lambda$1_5(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_collapsible_AnimationCollapseStrategy$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'AnimationCollapseStrategy/lambda$1$Type', 370);
function AnimationCollapseStrategy$lambda$2$Type(){
}

defineClass(371, 1, $intern_7, AnimationCollapseStrategy$lambda$2$Type);
_.accept = function accept_31(arg0){
  $stop(castTo(arg0, 70), false);
}
;
var Lorg_dominokit_domino_ui_collapsible_AnimationCollapseStrategy$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'AnimationCollapseStrategy/lambda$2$Type', 371);
function AnimationCollapseStrategy$lambda$3$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(372, 1, {}, AnimationCollapseStrategy$lambda$3$Type);
_.beforeStart = function beforeStart_1(arg0){
  $lambda$3_2(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_collapsible_AnimationCollapseStrategy$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'AnimationCollapseStrategy/lambda$3$Type', 372);
function AnimationCollapseStrategy$lambda$4$Type($$outer_0, style_1, element_2){
  this.$$outer_0 = $$outer_0;
  this.style_1 = style_1;
  this.element_2 = element_2;
}

defineClass(373, 1, {}, AnimationCollapseStrategy$lambda$4$Type);
_.onComplete = function onComplete_3(arg0){
  $lambda$4_1(this.$$outer_0, this.style_1, this.element_2);
}
;
var Lorg_dominokit_domino_ui_collapsible_AnimationCollapseStrategy$lambda$4$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'AnimationCollapseStrategy/lambda$4$Type', 373);
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
  _1000ms = new CollapseDuration('_1000ms', 9, 'height-collapsed-trans-1000', 1000);
}

function CollapseDuration(enum$name, enum$ordinal, style, duration){
  Enum.call(this, enum$name, enum$ordinal);
  this.style_0 = style;
  this.duration = duration;
}

function values_5(){
  $clinit_CollapseDuration();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_collapsible_CollapseDuration_2_classLit, 1), $intern_0, 45, 0, [_100ms, _200ms, _300ms, _400ms, _500ms, _600ms, _700ms, _800ms, _900ms, _1000ms]);
}

defineClass(45, 17, {4:1, 28:1, 17:1, 45:1}, CollapseDuration);
_.duration = 0;
var _1000ms, _100ms, _200ms, _300ms, _400ms, _500ms, _600ms, _700ms, _800ms, _900ms;
var Lorg_dominokit_domino_ui_collapsible_CollapseDuration_2_classLit = createForEnum('org.dominokit.domino.ui.collapsible', 'CollapseDuration', 45, values_5);
function $addHideHandler(this$static, handler){
  $add(this$static.hideHandlers, handler);
  return this$static;
}

function $addShowHandler(this$static, handler){
  $add(this$static.showHandlers, handler);
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

defineClass(54, 1, $intern_23, Collapsible);
_.element_3 = function element_13(){
  return this.element;
}
;
_.collapsed = false;
var Lorg_dominokit_domino_ui_collapsible_Collapsible_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'Collapsible', 54);
function Collapsible$1(this$0){
  this.this$01 = this$0;
}

defineClass(392, 1, {}, Collapsible$1);
var Lorg_dominokit_domino_ui_collapsible_Collapsible$1_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'Collapsible/1', 392);
function Collapsible$1$0methodref$onBeforeShow$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(140, 1, $intern_24, Collapsible$1$0methodref$onBeforeShow$Type);
_.run = function run_1(){
  $forEach_0(this.$$outer_0.beforeShowHandlers, new Collapsible$7methodref$apply$Type);
}
;
var Lorg_dominokit_domino_ui_collapsible_Collapsible$1$0methodref$onBeforeShow$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'Collapsible/1/0methodref$onBeforeShow$Type', 140);
function Collapsible$1$1methodref$onShowCompleted$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(141, 1, $intern_24, Collapsible$1$1methodref$onShowCompleted$Type);
_.run = function run_2(){
  $forEach_0(this.$$outer_0.showHandlers, new Collapsible$6methodref$apply$Type);
}
;
var Lorg_dominokit_domino_ui_collapsible_Collapsible$1$1methodref$onShowCompleted$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'Collapsible/1/1methodref$onShowCompleted$Type', 141);
function Collapsible$1$2methodref$onBeforeHide$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(116, 1, $intern_24, Collapsible$1$2methodref$onBeforeHide$Type);
_.run = function run_3(){
  $forEach_0(this.$$outer_0.beforeHideHandlers, new Collapsible$5methodref$apply$Type);
}
;
var Lorg_dominokit_domino_ui_collapsible_Collapsible$1$2methodref$onBeforeHide$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'Collapsible/1/2methodref$onBeforeHide$Type', 116);
function Collapsible$1$3methodref$onHideCompleted$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(117, 1, $intern_24, Collapsible$1$3methodref$onHideCompleted$Type);
_.run = function run_4(){
  $forEach_0(this.$$outer_0.hideHandlers, new Collapsible$4methodref$apply$Type);
}
;
var Lorg_dominokit_domino_ui_collapsible_Collapsible$1$3methodref$onHideCompleted$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'Collapsible/1/3methodref$onHideCompleted$Type', 117);
function Collapsible$4methodref$apply$Type(){
}

defineClass(103, 1, $intern_7, Collapsible$4methodref$apply$Type);
_.accept = function accept_32(arg0){
  castTo(arg0, 160).apply_1();
}
;
var Lorg_dominokit_domino_ui_collapsible_Collapsible$4methodref$apply$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'Collapsible/4methodref$apply$Type', 103);
function Collapsible$5methodref$apply$Type(){
}

defineClass(104, 1, $intern_7, Collapsible$5methodref$apply$Type);
_.accept = function accept_33(arg0){
  castTo(arg0, 160).apply_1();
}
;
var Lorg_dominokit_domino_ui_collapsible_Collapsible$5methodref$apply$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'Collapsible/5methodref$apply$Type', 104);
function Collapsible$6methodref$apply$Type(){
}

defineClass(118, 1, $intern_7, Collapsible$6methodref$apply$Type);
_.accept = function accept_34(arg0){
  $lambda$3_9(castTo(arg0, 617).$$outer_0);
}
;
var Lorg_dominokit_domino_ui_collapsible_Collapsible$6methodref$apply$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'Collapsible/6methodref$apply$Type', 118);
function Collapsible$7methodref$apply$Type(){
}

defineClass(119, 1, $intern_7, Collapsible$7methodref$apply$Type);
_.accept = function accept_35(arg0){
  $lambda$3_9(castTo(arg0, 617).$$outer_0);
}
;
var Lorg_dominokit_domino_ui_collapsible_Collapsible$7methodref$apply$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'Collapsible/7methodref$apply$Type', 119);
function DisplayCollapseStrategy(){
}

defineClass(366, 1, {}, DisplayCollapseStrategy);
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
var Lorg_dominokit_domino_ui_collapsible_DisplayCollapseStrategy_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'DisplayCollapseStrategy', 366);
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

function $lambda$0_7(this$static, element_1, style_2, self_2){
  $nowOrWhenAttached(self_2, new TreeHeightCollapseStrategy$lambda$1$Type(this$static, element_1, style_2));
}

function $lambda$1_6(this$static, element_1, style_2){
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

function $lambda$2_2(this$static, element_1, theElement_2){
  var collapseHeight;
  collapseHeight = element_1.getAttribute('dom-ui-collapse-height');
  theElement_2.wrappedElement.removeAttribute('dom-ui-collapse-height');
  element_1.style.height = collapseHeight;
  $resetParentHeight(this$static, this$static.treeItem);
  $forEach_0((new Collapsible$1$1methodref$onShowCompleted$Type(this$static.handlers.this$01)).$$outer_0.showHandlers, new Collapsible$6methodref$apply$Type);
}

function $lambda$3_3(this$static, parent_0){
  parent_0.childrenContainer.style.height = null;
  $ifPresent(instanceOf(parent_0.parent_0, 25)?($clinit_Optional() , new Optional(checkCriticalNotNull(castTo(parent_0.parent_0, 25)))):($clinit_Optional() , $clinit_Optional() , EMPTY), new TreeHeightCollapseStrategy$lambda$4$Type(this$static, parent_0));
}

function $lambda$4_2(this$static, parent_1){
  $ifPresent(instanceOf(parent_1.parent_0, 25)?($clinit_Optional() , new Optional(checkCriticalNotNull(castTo(parent_1.parent_0, 25)))):($clinit_Optional() , $clinit_Optional() , EMPTY), new TreeHeightCollapseStrategy$lambda$3$Type(this$static));
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

function $lambda$6_0(this$static, style_1, element_2){
  $forEach_0((new Collapsible$1$2methodref$onBeforeHide$Type(this$static.handlers.this$01)).$$outer_0.beforeHideHandlers, new Collapsible$5methodref$apply$Type);
  $removeCss_1(style_1, this$static.transition.style_0);
  $collapseElement(element_2, style_1, false);
  $addCss_1(style_1, this$static.transition.style_0);
  $forEach_0((new Collapsible$1$3methodref$onHideCompleted$Type(this$static.handlers.this$01)).$$outer_0.hideHandlers, new Collapsible$4methodref$apply$Type);
}

function $resetParentHeight(this$static, treeItem){
  $ifPresent(instanceOf(treeItem.parent_0, 25)?($clinit_Optional() , new Optional(checkCriticalNotNull(castTo(treeItem.parent_0, 25)))):($clinit_Optional() , $clinit_Optional() , EMPTY), new TreeHeightCollapseStrategy$lambda$3$Type(this$static));
}

function TreeHeightCollapseStrategy(treeItem){
  this.treeItem = treeItem;
  this.transition = ($clinit_CollapseDuration() , _200ms);
}

function lambda$7_0(style_0, elementToCollapse_1, originalHeight_2, scrollHeight_3){
  'height-collapsed-overflow'.length != 0 && style_0.element.classList.add('height-collapsed-overflow');
  'height-collapsed'.length != 0 && style_0.element.classList.add('height-collapsed');
  $setAttribute(castTo($setAttribute_0((elementToCollapse_1.wrappedElement.setAttribute('dom-ui-collapse-height', originalHeight_2) , castTo(elementToCollapse_1.element_0, 3)), 'd-collapsed', 'true'), 3), 'dom-ui-scroll-height', scrollHeight_3);
}

defineClass(604, 1, {}, TreeHeightCollapseStrategy);
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
var Lorg_dominokit_domino_ui_collapsible_TreeHeightCollapseStrategy_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'TreeHeightCollapseStrategy', 604);
function TreeHeightCollapseStrategy$lambda$0$Type($$outer_0, element_1, style_2){
  this.$$outer_0 = $$outer_0;
  this.element_1 = element_1;
  this.style_2 = style_2;
}

defineClass(606, 1, {}, TreeHeightCollapseStrategy$lambda$0$Type);
_.handleElement = function handleElement(arg0){
  $lambda$0_7(this.$$outer_0, this.element_1, this.style_2, castTo(arg0, 3));
}
;
var Lorg_dominokit_domino_ui_collapsible_TreeHeightCollapseStrategy$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'TreeHeightCollapseStrategy/lambda$0$Type', 606);
function TreeHeightCollapseStrategy$lambda$1$Type($$outer_0, element_1, style_2){
  this.$$outer_0 = $$outer_0;
  this.element_1 = element_1;
  this.style_2 = style_2;
}

defineClass(605, 1, $intern_24, TreeHeightCollapseStrategy$lambda$1$Type);
_.run = function run_5(){
  $lambda$1_6(this.$$outer_0, this.element_1, this.style_2);
}
;
var Lorg_dominokit_domino_ui_collapsible_TreeHeightCollapseStrategy$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'TreeHeightCollapseStrategy/lambda$1$Type', 605);
function TreeHeightCollapseStrategy$lambda$2$Type($$outer_0, element_1, theElement_2){
  this.$$outer_0 = $$outer_0;
  this.element_1 = element_1;
  this.theElement_2 = theElement_2;
}

defineClass(607, 1, {}, TreeHeightCollapseStrategy$lambda$2$Type);
_.handleEvent = function handleEvent_16(arg0){
  $lambda$2_2(this.$$outer_0, this.element_1, this.theElement_2);
}
;
var Lorg_dominokit_domino_ui_collapsible_TreeHeightCollapseStrategy$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'TreeHeightCollapseStrategy/lambda$2$Type', 607);
function TreeHeightCollapseStrategy$lambda$3$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(199, 1, $intern_7, TreeHeightCollapseStrategy$lambda$3$Type);
_.accept = function accept_36(arg0){
  $lambda$3_3(this.$$outer_0, castTo(arg0, 25));
}
;
var Lorg_dominokit_domino_ui_collapsible_TreeHeightCollapseStrategy$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'TreeHeightCollapseStrategy/lambda$3$Type', 199);
function TreeHeightCollapseStrategy$lambda$4$Type($$outer_0, parent_1){
  this.$$outer_0 = $$outer_0;
  this.parent_1 = parent_1;
}

defineClass(608, 1, $intern_7, TreeHeightCollapseStrategy$lambda$4$Type);
_.accept = function accept_37(arg0){
  var lastArg;
  $lambda$4_2(this.$$outer_0, (lastArg = this.parent_1 , castTo(arg0, 25) , lastArg));
}
;
var Lorg_dominokit_domino_ui_collapsible_TreeHeightCollapseStrategy$lambda$4$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'TreeHeightCollapseStrategy/lambda$4$Type', 608);
function TreeHeightCollapseStrategy$lambda$5$Type($$outer_0, element_1, style_2){
  this.$$outer_0 = $$outer_0;
  this.element_1 = element_1;
  this.style_2 = style_2;
}

defineClass(610, 1, {}, TreeHeightCollapseStrategy$lambda$5$Type);
_.handleElement = function handleElement_0(arg0){
  $lambda$5(this.$$outer_0, this.element_1, this.style_2, castTo(arg0, 3));
}
;
var Lorg_dominokit_domino_ui_collapsible_TreeHeightCollapseStrategy$lambda$5$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'TreeHeightCollapseStrategy/lambda$5$Type', 610);
function TreeHeightCollapseStrategy$lambda$6$Type($$outer_0, style_1, element_2){
  this.$$outer_0 = $$outer_0;
  this.style_1 = style_1;
  this.element_2 = element_2;
}

defineClass(609, 1, $intern_22, TreeHeightCollapseStrategy$lambda$6$Type);
_.onObserved = function onObserved_1(arg0){
  $lambda$6_0(this.$$outer_0, this.style_1, this.element_2);
}
;
var Lorg_dominokit_domino_ui_collapsible_TreeHeightCollapseStrategy$lambda$6$Type_2_classLit = createForClass('org.dominokit.domino.ui.collapsible', 'TreeHeightCollapseStrategy/lambda$6$Type', 609);
function TreeHeightCollapseStrategy$lambda$7$Type(style_0, elementToCollapse_1, originalHeight_2, scrollHeight_3){
  this.style_0 = style_0;
  this.elementToCollapse_1 = elementToCollapse_1;
  this.originalHeight_2 = originalHeight_2;
  this.scrollHeight_3 = scrollHeight_3;
}

defineClass(693, $wnd.Function, {}, TreeHeightCollapseStrategy$lambda$7$Type);
_.onInvoke_1 = function onInvoke_1(arg0){
  lambda$7_0(this.style_0, this.elementToCollapse_1, this.originalHeight_2, this.scrollHeight_3);
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
  $add(this$static.openHandlers, openHandler);
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
  $onPopupClose(($clinit_DominoUIConfig() , INSTANCE_12).zindexManager, this$static);
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
    this$static.lastFocusElement = castToNative($get_4(elements, elements.array.length - 1), $wnd.Element);
  }
   else {
    this$static.lastFocusElement = castToNative(this$static.modalElement.modalContent.element.wrappedElement, $wnd.HTMLDivElement);
  }
}

function $lambda$1_7(this$static, evt_0){
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

function $lambda$4_3(this$static){
  this$static.firstFocusElement.focus();
  equals_14($wnd.window.document.activeElement, this$static.firstFocusElement) || this$static.lastFocusElement != null && this$static.lastFocusElement.focus();
}

function $open_0(this$static){
  $removeCssProperty_0((this$static.styleInitializer.apply_1() , this$static.style_0), 'z-index');
  if (this$static.autoAppendAndRemove) {
    castToNative(this$static.modalElement.root_0.wrappedElement, $wnd.HTMLDivElement).remove();
    ($clinit_DomGlobal() , document_0).body.appendChild(castToNative(this$static.modalElement.root_0.wrappedElement, $wnd.HTMLDivElement));
  }
  $initFocusElements(this$static);
  this$static.activeElementBeforeOpen = $wnd.window.document.activeElement;
  $onPopupOpen(($clinit_DominoUIConfig() , INSTANCE_12).zindexManager, this$static);
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

defineClass(381, 9, $intern_25);
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
var Lorg_dominokit_domino_ui_modals_BaseModal_2_classLit = createForClass('org.dominokit.domino.ui.modals', 'BaseModal', 381);
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
  $add(messageDialog.closeHandlers, closeHandler);
  $appendChild(messageDialog.modalElement.modalBody, content_0);
  messageDialog.okButton = ($clinit_BaseModal() , $linkify(castTo($addCss(new Button('OK'), 'dialog-button'), 43)));
  $appendFooterChild(messageDialog, messageDialog.okButton.buttonElement.wrappedElement);
  messageDialog.okButton.buttonElement.wrappedElement.addEventListener(($clinit_EventType() , click_0).name_0, new MessageDialog$lambda$5$Type(messageDialog));
  return messageDialog;
}

function createMessage_0(closeHandler){
  $clinit_BaseModal();
  var modalDialog;
  modalDialog = createMessage(castToNative((new Paragraph).element.wrappedElement, $wnd.HTMLParagraphElement), closeHandler);
  $show(new DominoElement(modalDialog.modalElement.modalHeader.element));
  modalDialog.headerText.textContent = 'You will lost all your changes!';
  $clearElement(new DominoElement(modalDialog.modalElement.modalTitle.wrappedElement));
  $appendChild(new DominoElement(modalDialog.modalElement.modalTitle.wrappedElement), modalDialog.headerText);
  return modalDialog;
}

defineClass(382, 381, $intern_25, MessageDialog);
var Lorg_dominokit_domino_ui_dialogs_MessageDialog_2_classLit = createForClass('org.dominokit.domino.ui.dialogs', 'MessageDialog', 382);
function MessageDialog$lambda$5$Type(messageDialog_0){
  this.messageDialog_0 = messageDialog_0;
}

defineClass(383, 1, {}, MessageDialog$lambda$5$Type);
_.handleEvent = function handleEvent_17(arg0){
  $clinit_BaseModal();
  $close(this.messageDialog_0);
}
;
var Lorg_dominokit_domino_ui_dialogs_MessageDialog$lambda$5$Type_2_classLit = createForClass('org.dominokit.domino.ui.dialogs', 'MessageDialog/lambda$5$Type', 383);
function MessageDialog$lambda$7$Type(){
}

defineClass(384, 1, {662:1}, MessageDialog$lambda$7$Type);
var Lorg_dominokit_domino_ui_dialogs_MessageDialog$lambda$7$Type_2_classLit = createForClass('org.dominokit.domino.ui.dialogs', 'MessageDialog/lambda$7$Type', 384);
function MessageDialog$lambda$8$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(386, 1, {661:1}, MessageDialog$lambda$8$Type);
var Lorg_dominokit_domino_ui_dialogs_MessageDialog$lambda$8$Type_2_classLit = createForClass('org.dominokit.domino.ui.dialogs', 'MessageDialog/lambda$8$Type', 386);
function MessageDialog$lambda$9$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(385, 1, {}, MessageDialog$lambda$9$Type);
_.onComplete = function onComplete_4(arg0){
  $lambda$9(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_dialogs_MessageDialog$lambda$9$Type_2_classLit = createForClass('org.dominokit.domino.ui.dialogs', 'MessageDialog/lambda$9$Type', 385);
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
  $add(fieldsGrouping.formElements, this$static);
  return this$static;
}

function $invalidate(this$static, errorMessages){
  $toggleDisplay(this$static.getHelperContainer(), false);
  $removeErrors(this$static);
  this$static.fixErrorsPosition?$show(this$static.getErrorsContainer()):$toggleDisplay(this$static.getErrorsContainer(), true);
  $addCss_1((this$static.styleInitializer.apply_1() , this$static.style_0), 'error');
  $forEach(errorMessages, new BasicFormElement$lambda$3$Type(this$static));
  this$static.errors.array.length = 0;
  $addAll(this$static.errors, errorMessages);
  return this$static;
}

function $lambda$3_4(this$static, message_0){
  var errorLabel;
  errorLabel = castToNative(castTo($textContent(castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('label'), $wnd.HTMLElement))).element), 'error'), 3), message_0), 3).wrappedElement, $wnd.HTMLLabelElement);
  $add(this$static.errorLabels, errorLabel);
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

defineClass(493, 9, {131:1, 9:1, 13:1});
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
var Lorg_dominokit_domino_ui_forms_BasicFormElement_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'BasicFormElement', 493);
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
    this$static.placeholder != null && this$static.isEmpty_0() && (this$static.floating || ($clinit_Optional() , new Optional(checkCriticalNotNull(this$static.labelTextElement))).ref != null && $isEmptyElement(castTo($get_6(new Optional(checkCriticalNotNull(this$static.labelTextElement))), 3))) && $setAttribute_0(this$static.inputElement, 'placeholder', this$static.placeholder);
  }
}

function $doUnfocus(this$static){
  $removeCss(this$static.fieldGroup, 'focused');
  $removeCss_0(this$static.fieldContainer, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['fc-' + this$static.focusColor.getStyle(), 'focused']));
  $unfloatLabel(this$static);
  $removeLabelColor(this$static, this$static.focusColor);
  this$static.placeholder != null && !(this$static.isEmpty_0() && (this$static.floating || ($clinit_Optional() , new Optional(checkCriticalNotNull(this$static.labelTextElement))).ref != null && $isEmptyElement(castTo($get_6(new Optional(checkCriticalNotNull(this$static.labelTextElement))), 3)))) && $removeAttribute(this$static.inputElement, 'placeholder');
}

function $floatLabel(this$static){
  if (!this$static.floating || this$static.permaFloating) {
    $containsCss(this$static.fieldGroup, 'floating') || $addCss(this$static.fieldGroup, 'floating');
    this$static.floating = true;
  }
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
  return castTo($invalidate(this$static, errorMessages), 80);
}

function $lambda$0_8(this$static){
  this$static.helpItem = castTo($css(new FlexItem, 'field-helper'), 14);
  this$static.errorItem = $setFlexGrow(castTo($css(castTo($hide(new FlexItem), 14), 'field-errors'), 14));
  this$static.countItem = castTo($css(castTo($hide(new FlexItem), 14), 'field-counter'), 14);
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

function $lambda$2_3(this$static){
  this$static.labelElement = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('label'), $wnd.HTMLElement))).element), 'field-label'), 3);
  $insertBefore_0(new DominoElement((new DominoElement(this$static.inputElement.wrappedElement)).wrappedElement.parentElement), this$static.labelElement, this$static.inputElement);
  $ifPresent($getLabelElement(this$static), new ValueBox$lambda$13$Type(this$static));
  $addEventListener(this$static.labelElement, 'click', new ValueBox$lambda$3$Type(this$static));
  this$static.labelInitializer = new ValueBox$lambda$4$Type;
}

function $lambda$3_5(this$static, evt_0){
  if ((new DominoElement(this$static.inputElement.wrappedElement)).element_3().hasAttribute('disabled')) {
    evt_0.stopPropagation();
    evt_0.preventDefault();
  }
   else {
    (new DominoElement(this$static.inputElement.wrappedElement)).element_3().hasAttribute('disabled') || (this$static.dominoUuidInitializer.apply_1() , ($clinit_DomGlobal() , document_0).body.querySelector("[domino-uuid='" + this$static.uuid + "']") != null?((new DominoElement(this$static.inputElement.wrappedElement)).wrappedElement.focus() , $doFocus(this$static)):$onAttached(new DominoElement(this$static.inputElement.wrappedElement), new ValueBox$lambda$17$Type(this$static)));
  }
}

function $lambda$6_1(this$static){
  !this$static.isEmpty_0() || $containsCss_0($style(this$static.fieldGroup), 'focused')?$floatLabel(this$static):$unfloatLabel(this$static);
}

function $lambda$7(this$static){
  this$static.isEmpty_0() && this$static.placeholder != null && this$static.isEmpty_0() && (this$static.floating || ($clinit_Optional() , new Optional(checkCriticalNotNull(this$static.labelTextElement))).ref != null && $isEmptyElement(castTo($get_6(new Optional(checkCriticalNotNull(this$static.labelTextElement))), 3))) && $setAttribute_0(this$static.inputElement, 'placeholder', this$static.placeholder);
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
  floating?($floatLabel(this$static) , this$static.permaFloating = true , this$static.placeholder != null && this$static.isEmpty_0() && (this$static.floating || ($clinit_Optional() , new Optional(checkCriticalNotNull(this$static.labelTextElement))).ref != null && $isEmptyElement(castTo($get_6(new Optional(checkCriticalNotNull(this$static.labelTextElement))), 3))) && $setAttribute_0(this$static.inputElement, 'placeholder', this$static.placeholder) , this$static):(this$static.permaFloating = false , $unfloatLabel(this$static) , this$static.placeholder != null && !(this$static.isEmpty_0() && (this$static.floating || ($clinit_Optional() , new Optional(checkCriticalNotNull(this$static.labelTextElement))).ref != null && $isEmptyElement(castTo($get_6(new Optional(checkCriticalNotNull(this$static.labelTextElement))), 3)))) && $removeAttribute(this$static.inputElement, 'placeholder') , this$static);
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
    ($clinit_Optional() , new Optional(checkCriticalNotNull(this$static.labelTextElement))).ref != null && !$isEmptyElement(castTo($get_6(new Optional(checkCriticalNotNull(this$static.labelTextElement))), 3)) && this$static.placeholder != null && !(this$static.isEmpty_0() && (this$static.floating || (new Optional(checkCriticalNotNull(this$static.labelTextElement))).ref != null && $isEmptyElement(castTo($get_6(new Optional(checkCriticalNotNull(this$static.labelTextElement))), 3)))) && $removeAttribute(this$static.inputElement, 'placeholder');
  }
  return this$static;
}

function $setLabelColor(this$static, color_0){
  !!this$static.labelElement && $addCss(this$static.labelElement, color_0.getStyle());
}

function $setPlaceholder(this$static, placeholder){
  var stringValue;
  this$static.placeholder = placeholder;
  this$static.placeholder != null && (stringValue = $getValue_0(this$static) , (stringValue == null || stringValue.length == 0) && (this$static.floating || ($clinit_Optional() , new Optional(checkCriticalNotNull(this$static.labelTextElement))).ref != null && $isEmptyElement(castTo($get_6(new Optional(checkCriticalNotNull(this$static.labelTextElement))), 3)))) && $setAttribute_0(this$static.inputElement, 'placeholder', this$static.placeholder);
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
  this.requiredErrorMessage = ($clinit_DominoUIConfig() , INSTANCE_12).defaultRequiredMessage;
  this.errorLabels = new ArrayList;
  this.errors = new ArrayList;
  this.requiredIndicator = (null , of_2(' * '));
  this.fieldGroup = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element), 'field-group'), 3);
  this.fieldContainer = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), 'field-cntr'), 3);
  this.inputContainer = new FlexItem;
  this.notesContainer = new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element);
  castTo($css(new FlexLayout, 'field-lft-addons'), 42);
  castTo($css(new FlexLayout, 'field-rgt-addons'), 42);
  castTo($css(new FlexItem, 'field-prefix'), 14);
  castTo($css(new FlexItem, 'field-postfix'), 14);
  this.labelTextElement = new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('span'), $wnd.HTMLElement))).element);
  this.focusColor = ($clinit_Color() , BLUE);
  this.changeHandlers = new ArrayList;
  new ArrayList;
  this.fieldStyle = INSTANCE_12.DEFAULT;
  $init(this, this);
  this.noteInitializer = new ValueBox$lambda$0$Type(this);
  this.labelInitializer = new ValueBox$lambda$2$Type(this);
  this.inputElement = new DominoElement(this.createInputElement(type_0));
  this.changeListener = new ValueBox$lambda$5$Type(this);
  $addEventListener(this.inputElement, 'change', this.changeListener);
  $addEventListener(this.inputElement, 'change', new ValueBox$lambda$6$Type(this));
  this.inputListener = new ValueBox$lambda$7$Type(this);
  $addEventListener(this.inputElement, 'input', this.inputListener);
  $addHandler_0(new KeyboardEvents_0('keypress', [(new DominoElement(this.inputElement.wrappedElement)).wrappedElement]), 'enter', new KeyboardEvents$HandlerContext(new ValueBox$lambda$11$Type));
  this.fieldInnerContainer = new FlexLayout;
  $appendChild_2(this.fieldInnerContainer, castTo($appendChild_0($setFlexGrow(castTo($css(this.inputContainer, 'field-input-cntr'), 14)), this.inputElement), 14));
  $appendChild_0(this.fieldGroup, $appendChild_0(this.fieldContainer, $apply(this.fieldInnerContainer, new ValueBox$lambda$12$Type)));
  $setFocusColor(this, this.focusColor);
  $addEventListener(this.inputElement, 'focus', new ValueBox$lambda$15$Type(this));
  $addEventListener(this.inputElement, 'focusout', new ValueBox$lambda$16$Type(this));
  this.setLabel(label_0);
  $setAttribute_1(this.inputElement);
  $apply_0(this.fieldStyle, this);
  $ifPresent(INSTANCE_12.fixErrorsPosition, new ValueBox$0methodref$setFixErrorsPosition$Type(this));
  $ifPresent(INSTANCE_12.floatLabels, new ValueBox$1methodref$setFloating$Type(this));
  $ifPresent(INSTANCE_12.condensed, new ValueBox$lambda$10$Type(this));
}

defineClass(80, 493, $intern_26);
_.clearInvalid = function clearInvalid_0(){
  return this.valid = true , $addCss(this.fieldContainer, 'fc-' + this.focusColor.getStyle()) , $removeCss(this.fieldContainer, ($clinit_Color() , 'fc-col-red')) , $removeLabelColor(this, RED) , $containsCss_0($style(this.fieldGroup), 'focused')?$doFocus(this):$doUnfocus(this) , !this.isEmpty_0() || $containsCss_0($style(this.fieldGroup), 'focused')?$floatLabel(this):$unfloatLabel(this) , $clinit_DominoUIConfig() , castTo($clearInvalid(this), 80);
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
_.getValue = function getValue_1(){
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
_.setLabel = function setLabel(label_0){
  return $setLabel(this, label_0);
}
;
_.floating = false;
_.permaFloating = false;
_.readOnly = false;
_.valid = true;
_.validateOnFocusLost = true;
var Lorg_dominokit_domino_ui_forms_ValueBox_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox', 80);
function $setMaxLength(this$static){
  this$static.maxLength = 4;
  this$static.noteInitializer.apply_1();
  $show(this$static.countItem);
  $setAttribute(new DominoElement(this$static.inputElement.wrappedElement), 'maxlength', 4);
  $updateCharacterCount(this$static);
  return this$static;
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

function AbstractValueBox(type_0, label_0){
  ValueBox.call(this, type_0, label_0);
  new MinLengthValidator(this);
  $addEventListener(new DominoElement(this.inputElement.wrappedElement), 'input', new AbstractValueBox$lambda$0$Type(this));
}

defineClass(192, 80, $intern_26);
_.isEmpty_0 = function isEmpty_4(){
  var stringValue;
  return stringValue = this.getStringValue() , stringValue == null || stringValue.length == 0;
}
;
_.maxLength = 0;
_.minLength = 0;
var Lorg_dominokit_domino_ui_forms_AbstractValueBox_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'AbstractValueBox', 192);
function AbstractValueBox$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(494, 1, {}, AbstractValueBox$lambda$0$Type);
_.handleEvent = function handleEvent_18(arg0){
  $updateCharacterCount(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_forms_AbstractValueBox$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'AbstractValueBox/lambda$0$Type', 494);
function BasicFormElement$lambda$3$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(514, 1, $intern_7, BasicFormElement$lambda$3$Type);
_.accept = function accept_38(arg0){
  $lambda$3_4(this.$$outer_0, castToString(arg0));
}
;
var Lorg_dominokit_domino_ui_forms_BasicFormElement$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'BasicFormElement/lambda$3$Type', 514);
function $changeReadOnlyText(this$static){
  $remove_0(this$static.readOnlyLabelElement);
  castToNative((new DominoElement(this$static.inputElement.wrappedElement)).wrappedElement, $wnd.HTMLInputElement).checked?$setTextContent(this$static.readOnlyLabelElement, this$static.checkedReadonlyLabel == null || this$static.checkedReadonlyLabel.length == 0?'':': ' + this$static.checkedReadonlyLabel):$setTextContent(this$static.readOnlyLabelElement, this$static.unCheckedReadonlyLabel == null || this$static.unCheckedReadonlyLabel.length == 0?'':': ' + this$static.unCheckedReadonlyLabel);
  $ifPresent($getLabelElement(this$static), new CheckBox$lambda$5$Type(this$static));
}

function $check(this$static){
  castToNative((new DominoElement(this$static.inputElement.wrappedElement)).wrappedElement, $wnd.HTMLInputElement).checked = true;
  $css(castTo(this$static.element_0, 56), 'checked');
  $forEach_0(this$static.changeHandlers, new CheckBox$lambda$3$Type(this$static));
  this$static.readOnly && $changeReadOnlyText(this$static);
  return this$static;
}

function $filledIn(this$static){
  $addCss(castTo(this$static.element_0, 56), 'filled-in');
  return this$static;
}

function $lambda$0_9(this$static, evt_0){
  evt_0.stopPropagation();
  evt_0.preventDefault();
  !(new DominoElement(this$static.inputElement.wrappedElement)).element_3().hasAttribute('disabled') && !this$static.readOnly && $toggle(this$static);
}

function $lambda$1_8(this$static){
  !(new DominoElement(this$static.inputElement.wrappedElement)).element_3().hasAttribute('disabled') && !this$static.readOnly && $value(this$static, ($clinit_Boolean() , castToNative((new DominoElement(this$static.inputElement.wrappedElement)).wrappedElement, $wnd.HTMLInputElement).checked?true:false));
}

function $lambda$3_6(this$static){
  null.$_nullMethod(($clinit_Boolean() , castToNative((new DominoElement(this$static.inputElement.wrappedElement)).wrappedElement, $wnd.HTMLInputElement).checked?true:false));
}

function $lambda$5_0(this$static, labelElement_0){
  return $appendChild_0(labelElement_0, this$static.readOnlyLabelElement);
}

function $setColor_1(this$static, color_0){
  !!this$static.color_0 && $removeCss(castTo(this$static.element_0, 56), 'col-blue');
  $addCss(castTo(this$static.element_0, 56), 'col-blue');
  this$static.color_0 = color_0;
  return this$static;
}

function $toggle(this$static){
  if (castToNative((new DominoElement(this$static.inputElement.wrappedElement)).wrappedElement, $wnd.HTMLInputElement).checked) {
    $uncheck(this$static);
    $removeCss(castTo(this$static.element_0, 56), 'checked');
  }
   else {
    $check(this$static);
    $css(castTo(this$static.element_0, 56), 'checked');
  }
  return this$static;
}

function $uncheck(this$static){
  castToNative((new DominoElement(this$static.inputElement.wrappedElement)).wrappedElement, $wnd.HTMLInputElement).checked = false;
  $removeCss(castTo(this$static.element_0, 56), 'checked');
  $forEach_0(this$static.changeHandlers, new CheckBox$lambda$3$Type(this$static));
  this$static.readOnly && $changeReadOnlyText(this$static);
  return this$static;
}

function $value(this$static, value_0){
  return value_0 != null && (checkCriticalNotNull(value_0) , value_0)?$check(this$static):$uncheck(this$static) , this$static;
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
  $addHandler_0(listenOnKeyDown(stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_elemento_IsElement_2_classLit, 1), $intern_0, 13, 0, [new DominoElement(this.inputElement.wrappedElement)])), 'enter', new KeyboardEvents$HandlerContext(listener));
}

function lambda$2_0(listener_0, labelElement_1){
  return labelElement_1.wrappedElement.addEventListener('click', listener_0) , labelElement_1.element_0;
}

defineClass(56, 192, {56:1, 131:1, 80:1, 9:1, 13:1}, CheckBox);
_.createInputElement = function createInputElement(type_0){
  return castToNative((new DominoElement(input_0('checkbox').element)).wrappedElement, $wnd.HTMLInputElement);
}
;
_.getValue = function getValue_2(){
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
var Lorg_dominokit_domino_ui_forms_CheckBox_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'CheckBox', 56);
function CheckBox$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(515, 1, {}, CheckBox$lambda$0$Type);
_.handleEvent = function handleEvent_19(arg0){
  $lambda$0_9(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_forms_CheckBox$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'CheckBox/lambda$0$Type', 515);
function CheckBox$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(516, 1, {}, CheckBox$lambda$1$Type);
_.handleEvent = function handleEvent_20(arg0){
  $lambda$1_8(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_forms_CheckBox$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'CheckBox/lambda$1$Type', 516);
function CheckBox$lambda$2$Type(listener_0){
  this.listener_0 = listener_0;
}

defineClass(517, 1, $intern_7, CheckBox$lambda$2$Type);
_.accept = function accept_39(arg0){
  lambda$2_0(this.listener_0, castTo(arg0, 3));
}
;
var Lorg_dominokit_domino_ui_forms_CheckBox$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'CheckBox/lambda$2$Type', 517);
function CheckBox$lambda$3$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(193, 1, $intern_7, CheckBox$lambda$3$Type);
_.accept = function accept_40(arg0){
  var lastArg;
  $lambda$3_6((lastArg = this.$$outer_0 , throwClassCastExceptionUnlessNull(arg0) , lastArg));
}
;
var Lorg_dominokit_domino_ui_forms_CheckBox$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'CheckBox/lambda$3$Type', 193);
function CheckBox$lambda$5$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(518, 1, $intern_7, CheckBox$lambda$5$Type);
_.accept = function accept_41(arg0){
  $lambda$5_0(this.$$outer_0, castTo(arg0, 3));
}
;
var Lorg_dominokit_domino_ui_forms_CheckBox$lambda$5$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'CheckBox/lambda$5$Type', 518);
function $clinit_FieldStyle(){
  $clinit_FieldStyle = emptyMethod;
  ROUNDED = new FieldStyle$lambda$0$Type;
  LINED = new FieldStyle$lambda$1$Type;
}

function $apply_0(this$static, valueBox){
  var fieldStyle;
  fieldStyle = valueBox.fieldStyle;
  $removeCss(valueBox, fieldStyle.$$outer_0.fieldsStyle.getStyle());
  $css(valueBox, this$static.$$outer_0.fieldsStyle.getStyle());
}

var LINED, ROUNDED;
function FieldStyle$lambda$0$Type(){
}

defineClass(225, 1, {}, FieldStyle$lambda$0$Type);
_.getStyle = function getStyle(){
  return $clinit_FieldStyle() , 'rounded';
}
;
var Lorg_dominokit_domino_ui_forms_FieldStyle$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'FieldStyle/lambda$0$Type', 225);
function FieldStyle$lambda$1$Type(){
}

defineClass(226, 1, {}, FieldStyle$lambda$1$Type);
_.getStyle = function getStyle_0(){
  return $clinit_FieldStyle() , 'lined';
}
;
var Lorg_dominokit_domino_ui_forms_FieldStyle$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'FieldStyle/lambda$1$Type', 226);
function $validate(this$static, silent){
  var fieldsValid, result, validator, validator$iterator;
  this$static.errors.array.length = 0;
  fieldsValid = $validateFields(this$static, silent);
  if (!fieldsValid) {
    return new ValidationResult_0(false, 'Invalid fields');
  }
  for (validator$iterator = new ArrayList$1(this$static.validators); validator$iterator.i < validator$iterator.this$01.array.length;) {
    validator = castTo($next_0(validator$iterator), 200);
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
    formElement = castTo($next_0(formElement$iterator), 131);
    result = formElement.validate(silent);
    if (!result.valid) {
      valid = false;
      $addAll(this$static.errors, formElement.getErrors());
    }
  }
  return valid;
}

function FieldsGrouping(){
  this.formElements = new ArrayList;
  this.validators = new ArrayList;
  this.errors = new ArrayList;
}

defineClass(492, 1, {}, FieldsGrouping);
_.getErrors = function getErrors_0(){
  return this.errors;
}
;
_.validate = function validate_0(silent){
  return $validate(this, silent);
}
;
var Lorg_dominokit_domino_ui_forms_FieldsGrouping_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'FieldsGrouping', 492);
function $getValue_0(this$static){
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

defineClass(73, 192, {131:1, 73:1, 80:1, 9:1, 13:1}, TextBox, TextBox_0);
_.createInputElement = function createInputElement_0(type_0){
  return castToNative(input_0(type_0).element, $wnd.HTMLInputElement);
}
;
_.getValue = function getValue_3(){
  return $getValue_0(this);
}
;
_.getStringValue = function getStringValue_1(){
  return $getValue_0(this);
}
;
_.emptyAsNull = false;
var Lorg_dominokit_domino_ui_forms_TextBox_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'TextBox', 73);
function ValueBox$0methodref$setFixErrorsPosition$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(503, 1, $intern_7, ValueBox$0methodref$setFixErrorsPosition$Type);
_.accept = function accept_42(arg0){
  $setFixErrorsPosition(this.$$outer_0, $booleanValue(castToBoolean(arg0)));
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$0methodref$setFixErrorsPosition$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/0methodref$setFixErrorsPosition$Type', 503);
function ValueBox$1methodref$setFloating$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(504, 1, $intern_7, ValueBox$1methodref$setFloating$Type);
_.accept = function accept_43(arg0){
  $setFloating(this.$$outer_0, $booleanValue(castToBoolean(arg0)));
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$1methodref$setFloating$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/1methodref$setFloating$Type', 504);
defineClass(654, 1, {});
var Lorg_dominokit_domino_ui_forms_ValueBox$AutoValidator_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/AutoValidator', 654);
function ValueBox$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(496, 1, $intern_27, ValueBox$lambda$0$Type);
_.apply_1 = function apply_14(){
  $lambda$0_8(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$0$Type', 496);
function ValueBox$lambda$1$Type(){
}

defineClass(495, 1, $intern_27, ValueBox$lambda$1$Type);
_.apply_1 = function apply_15(){
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$1$Type', 495);
function ValueBox$lambda$10$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(505, 1, $intern_7, ValueBox$lambda$10$Type);
_.accept = function accept_44(arg0){
  $lambda$10_1(this.$$outer_0, castToBoolean(arg0));
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$10$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$10$Type', 505);
function ValueBox$lambda$11$Type(){
}

defineClass(506, 1, {}, ValueBox$lambda$11$Type);
_.handleEvent = function handleEvent_21(arg0){
  $clinit_DominoUIConfig();
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$11$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$11$Type', 506);
function ValueBox$lambda$12$Type(){
}

defineClass(507, 1, {}, ValueBox$lambda$12$Type);
_.handleElement = function handleElement_1(arg0){
  castTo(arg0, 42);
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$12$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$12$Type', 507);
function ValueBox$lambda$13$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(508, 1, $intern_7, ValueBox$lambda$13$Type);
_.accept = function accept_45(arg0){
  $lambda$13(this.$$outer_0, castTo(arg0, 3));
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$13$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$13$Type', 508);
function ValueBox$lambda$14$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(509, 1, $intern_7, ValueBox$lambda$14$Type);
_.accept = function accept_46(arg0){
  var lastArg;
  null.$_nullMethod((lastArg = this.$$outer_0 , throwClassCastExceptionUnlessNull(arg0) , lastArg).getValue());
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$14$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$14$Type', 509);
function ValueBox$lambda$15$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(510, 1, {}, ValueBox$lambda$15$Type);
_.handleEvent = function handleEvent_22(arg0){
  $doFocus(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$15$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$15$Type', 510);
function ValueBox$lambda$16$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(511, 1, {}, ValueBox$lambda$16$Type);
_.handleEvent = function handleEvent_23(arg0){
  $lambda$16_0(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$16$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$16$Type', 511);
function ValueBox$lambda$17$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(512, 1, $intern_22, ValueBox$lambda$17$Type);
_.onObserved = function onObserved_2(arg0){
  $tryFocus(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$17$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$17$Type', 512);
function ValueBox$lambda$19$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(513, 1, $intern_7, ValueBox$lambda$19$Type);
_.accept = function accept_47(arg0){
  $lambda$19(this.$$outer_0, castTo(arg0, 3));
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$19$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$19$Type', 513);
function ValueBox$lambda$2$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(499, 1, $intern_27, ValueBox$lambda$2$Type);
_.apply_1 = function apply_16(){
  $lambda$2_3(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$2$Type', 499);
function ValueBox$lambda$3$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(497, 1, {}, ValueBox$lambda$3$Type);
_.handleEvent = function handleEvent_24(arg0){
  $lambda$3_5(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$3$Type', 497);
function ValueBox$lambda$4$Type(){
}

defineClass(498, 1, $intern_27, ValueBox$lambda$4$Type);
_.apply_1 = function apply_17(){
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$4$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$4$Type', 498);
function ValueBox$lambda$5$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(500, 1, {}, ValueBox$lambda$5$Type);
_.handleEvent = function handleEvent_25(arg0){
  $callChangeHandlers(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$5$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$5$Type', 500);
function ValueBox$lambda$6$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(501, 1, {}, ValueBox$lambda$6$Type);
_.handleEvent = function handleEvent_26(arg0){
  $lambda$6_1(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$6$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$6$Type', 501);
function ValueBox$lambda$7$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(502, 1, {}, ValueBox$lambda$7$Type);
_.handleEvent = function handleEvent_27(arg0){
  $lambda$7(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_forms_ValueBox$lambda$7$Type_2_classLit = createForClass('org.dominokit.domino.ui.forms', 'ValueBox/lambda$7$Type', 502);
function $addValidator_0(this$static, validator){
  $add_0(this$static.validators, validator);
}

function $validate_0(this$static, silent){
  var entry, outerIter, result, validator, validator$iterator;
  this$static.element.clearInvalid();
  if (this$static.element.getInputElement().element_3().hasAttribute('disabled')) {
    return new ValidationResult;
  }
  for (validator$iterator = (outerIter = (new AbstractMap$1(this$static.validators.map_0)).this$01.entrySet().iterator() , new AbstractMap$1$1(outerIter)); validator$iterator.val$outerIter2.hasNext_0();) {
    validator = (entry = castTo(validator$iterator.val$outerIter2.next_1(), 21) , castTo(entry.getKey(), 200));
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

defineClass(531, 1, {}, ElementValidations);
var Lorg_dominokit_domino_ui_forms_validations_ElementValidations_2_classLit = createForClass('org.dominokit.domino.ui.forms.validations', 'ElementValidations', 531);
function InputAutoValidator(){
}

defineClass(534, 654, {}, InputAutoValidator);
var Lorg_dominokit_domino_ui_forms_validations_InputAutoValidator_2_classLit = createForClass('org.dominokit.domino.ui.forms.validations', 'InputAutoValidator', 534);
function MinLengthValidator(valueBox){
  this.valueBox = valueBox;
}

defineClass(536, 1, {200:1}, MinLengthValidator);
_.isValid = function isValid(){
  if ((new DominoElement(this.valueBox.inputElement.wrappedElement)).wrappedElement.validity.tooShort) {
    return new ValidationResult_0(false, 'Minimum length is ' + this.valueBox.minLength);
  }
  return new ValidationResult;
}
;
var Lorg_dominokit_domino_ui_forms_validations_MinLengthValidator_2_classLit = createForClass('org.dominokit.domino.ui.forms.validations', 'MinLengthValidator', 536);
function RequiredValidator(element){
  this.element = element;
}

defineClass(526, 1, {200:1}, RequiredValidator);
_.isValid = function isValid_0(){
  if (this.element.isEmpty_0()) {
    return new ValidationResult_0(false, this.element.requiredErrorMessage);
  }
  return new ValidationResult;
}
;
var Lorg_dominokit_domino_ui_forms_validations_RequiredValidator_2_classLit = createForClass('org.dominokit.domino.ui.forms.validations', 'RequiredValidator', 526);
function ValidationResult(){
  ValidationResult_0.call(this, true, '');
}

function ValidationResult_0(valid, errorMessage){
  this.valid = valid;
  this.errorMessage = errorMessage;
}

defineClass(63, 1, {}, ValidationResult, ValidationResult_0);
_.valid = false;
var Lorg_dominokit_domino_ui_forms_validations_ValidationResult_2_classLit = createForClass('org.dominokit.domino.ui.forms.validations', 'ValidationResult', 63);
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

function values_6(){
  $clinit_FlexDirection();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_grid_flex_FlexDirection_2_classLit, 1), $intern_0, 89, 0, [LEFT_TO_RIGHT, RIGHT_TO_LEFT, TOP_TO_BOTTOM, BOTTOM_TO_TOP]);
}

defineClass(89, 17, {4:1, 28:1, 17:1, 89:1, 663:1}, FlexDirection);
_.getStyle = function getStyle_1(){
  return this.style_0;
}
;
var BOTTOM_TO_TOP, LEFT_TO_RIGHT, RIGHT_TO_LEFT, TOP_TO_BOTTOM;
var Lorg_dominokit_domino_ui_grid_flex_FlexDirection_2_classLit = createForEnum('org.dominokit.domino.ui.grid.flex', 'FlexDirection', 89, values_6);
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

defineClass(14, 9, {14:1, 9:1, 13:1}, FlexItem);
_.element_3 = function element_16(){
  return this.element;
}
;
var Lorg_dominokit_domino_ui_grid_flex_FlexItem_2_classLit = createForClass('org.dominokit.domino.ui.grid.flex', 'FlexItem', 14);
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

function values_7(){
  $clinit_FlexJustifyContent();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_grid_flex_FlexJustifyContent_2_classLit, 1), $intern_0, 72, 0, [START, END, CENTER, SPACE_BETWEEN, SPACE_AROUND, SPACE_EVENLY]);
}

defineClass(72, 17, {4:1, 28:1, 17:1, 72:1, 663:1}, FlexJustifyContent);
_.getStyle = function getStyle_2(){
  return this.style_0;
}
;
var CENTER, END, SPACE_AROUND, SPACE_BETWEEN, SPACE_EVENLY, START;
var Lorg_dominokit_domino_ui_grid_flex_FlexJustifyContent_2_classLit = createForEnum('org.dominokit.domino.ui.grid.flex', 'FlexJustifyContent', 72, values_7);
function $appendChild_2(this$static, flexItem){
  $add(this$static.flexItems, flexItem);
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

defineClass(42, 9, {42:1, 9:1, 13:1}, FlexLayout);
_.element_3 = function element_17(){
  return castToNative(this.element.wrappedElement, $wnd.HTMLDivElement);
}
;
var Lorg_dominokit_domino_ui_grid_flex_FlexLayout_2_classLit = createForClass('org.dominokit.domino.ui.grid.flex', 'FlexLayout', 42);
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

defineClass(188, 9, $intern_16);
_.element_3 = function element_18(){
  return this.icon_0.wrappedElement;
}
;
var Lorg_dominokit_domino_ui_icons_BaseIcon_2_classLit = createForClass('org.dominokit.domino.ui.icons', 'BaseIcon', 188);
function Icon(icon){
  BaseIcon.call(this);
  this.icon_0 = new DominoElement(icon);
  $init(this, this);
}

function create_8(icon){
  var iconElement;
  iconElement = new Icon(castTo($textContent(castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('i'), $wnd.HTMLElement))).element), 'material-icons'), 3), icon), 3).wrappedElement);
  iconElement.name_0 = icon;
  return iconElement;
}

defineClass(77, 188, {77:1, 9:1, 13:1}, Icon);
_.element_3 = function element_19(){
  return this.icon_0.wrappedElement;
}
;
var Lorg_dominokit_domino_ui_icons_Icon_2_classLit = createForClass('org.dominokit.domino.ui.icons', 'Icon', 77);
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

defineClass(74, 188, {74:1, 9:1, 13:1}, MdiIcon);
_.element_3 = function element_20(){
  return this.icon_0.wrappedElement;
}
;
var Lorg_dominokit_domino_ui_icons_MdiIcon_2_classLit = createForClass('org.dominokit.domino.ui.icons', 'MdiIcon', 74);
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

function values_8(){
  $clinit_MdiIcon$MdiSize();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_icons_MdiIcon$MdiSize_2_classLit, 1), $intern_0, 93, 0, [mdi18, mdi24, mdi36, mdi48]);
}

defineClass(93, 17, {4:1, 28:1, 17:1, 93:1}, MdiIcon$MdiSize);
var mdi18, mdi24, mdi36, mdi48;
var Lorg_dominokit_domino_ui_icons_MdiIcon$MdiSize_2_classLit = createForEnum('org.dominokit.domino.ui.icons', 'MdiIcon/MdiSize', 93, values_8);
function MdiMeta(){
  new ArrayList;
  new ArrayList;
}

defineClass(611, 1, {}, MdiMeta);
var Lorg_dominokit_domino_ui_icons_MdiMeta_2_classLit = createForClass('org.dominokit.domino.ui.icons', 'MdiMeta', 611);
function $addHandler_0(this$static, type_0, handlerContext){
  $putStringValue(this$static.handlers, type_0, handlerContext);
  return this$static;
}

function $lambda$0_10(this$static, evt_0){
  var handlerContext, key, keyboardEvent;
  keyboardEvent = evt_0;
  if (keyboardEvent.key == null)
    return;
  key = keyboardEvent.key.toLowerCase();
  handlerContext = null;
  keyboardEvent.ctrlKey && $hasStringValue(this$static.ctrlHandlers, key)?(handlerContext = castTo($getStringValue(this$static.ctrlHandlers, key), 91)):$hasStringValue(this$static.handlers, key) && (handlerContext = castTo($getStringValue(this$static.handlers, key), 91));
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
  return new KeyboardEvents('keydown', castTo($collect($map(stream_1(elements, elements.length), new KeyboardEvents$1methodref$element$Type), of_0(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$42$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_0, 40, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)]))), 32));
}

defineClass(125, 1, {}, KeyboardEvents, KeyboardEvents_0);
var Lorg_dominokit_domino_ui_keyboard_KeyboardEvents_2_classLit = createForClass('org.dominokit.domino.ui.keyboard', 'KeyboardEvents', 125);
function KeyboardEvents$1methodref$element$Type(){
}

defineClass(533, 1, {}, KeyboardEvents$1methodref$element$Type);
_.apply_0 = function apply_18(arg0){
  return castTo(arg0, 13).element_3();
}
;
var Lorg_dominokit_domino_ui_keyboard_KeyboardEvents$1methodref$element$Type_2_classLit = createForClass('org.dominokit.domino.ui.keyboard', 'KeyboardEvents/1methodref$element$Type', 533);
function KeyboardEvents$HandlerContext(handler){
  this.handler = handler;
}

defineClass(91, 1, {91:1}, KeyboardEvents$HandlerContext);
var Lorg_dominokit_domino_ui_keyboard_KeyboardEvents$HandlerContext_2_classLit = createForClass('org.dominokit.domino.ui.keyboard', 'KeyboardEvents/HandlerContext', 91);
function KeyboardEvents$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(532, 1, {}, KeyboardEvents$lambda$0$Type);
_.handleEvent = function handleEvent_28(arg0){
  $lambda$0_10(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_keyboard_KeyboardEvents$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.keyboard', 'KeyboardEvents/lambda$0$Type', 532);
function Content_0(){
  BaseDominoElement.call(this);
  this.contentContainer = castToNative(castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element), 'content-panel'), 3).wrappedElement, $wnd.HTMLDivElement);
  this.section = castTo($appendChild(castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('section'), $wnd.HTMLElement))).element), 'content'), 3), this.contentContainer), 3).wrappedElement;
  $init(this, this);
}

defineClass(460, 9, $intern_16, Content_0);
_.element_3 = function element_21(){
  return this.section;
}
;
var Lorg_dominokit_domino_ui_layout_Content_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'Content', 460);
function $fixed(this$static){
  $addCss(this$static.element, 'fixed');
  this$static.fixed_0 = true;
  return this$static;
}

function $unfixed(this$static){
  $removeCss(this$static.element, 'fixed');
  this$static.fixed_0 = false;
  return this$static;
}

function Footer_0(){
  BaseDominoElement.call(this);
  this.element = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('footer'), $wnd.HTMLElement))).element), 'footer'), 3);
  $init(this, this);
  $hide_0((!this.collapsible_0 && (this.collapsible_0 = new Collapsible(this.element.wrappedElement)) , this.collapsible_0));
}

defineClass(461, 9, $intern_16, Footer_0);
_.element_3 = function element_22(){
  return this.element.wrappedElement;
}
;
_.autoUnFixForSmallScreens = true;
_.fixed_0 = false;
var Lorg_dominokit_domino_ui_layout_Footer_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'Footer', 461);
function $getEffectiveLeftPanelOpenStyle(this$static){
  if (this$static.smallScreen) {
    return $clinit_Layout$LeftPanelOpenStyle() , OVERLAY;
  }
  return this$static.leftPanelOpenStyle;
}

function $hideLeftPanel(this$static){
  if (!this$static.fixedLeftPanel) {
    $addCss(new DominoElement(this$static.section.leftSide), 'slide-out-left');
    this$static.leftPanelVisible = false;
    $onClose($getEffectiveLeftPanelOpenStyle(this$static), this$static);
    $removeCss(new DominoElement(($clinit_DomGlobal() , document_0).body), 'panel-open');
    $forEach_0(this$static.leftPanelHandlers, new Layout$lambda$10$Type);
  }
  return this$static;
}

function $hideOverlay(this$static){
  if (this$static.overlayVisible) {
    $setDisplay_0($style(this$static.overlay), 'none');
    this$static.overlayVisible = false;
  }
}

function $hidePanels(this$static){
  $hideRightPanel(this$static);
  $hideLeftPanel(this$static);
  $hideOverlay(this$static);
}

function $hideRightPanel(this$static){
  $addCss(new DominoElement(this$static.section.rightSide), 'slide-out-right');
  this$static.rightPanelVisible = false;
  $hideOverlay(this$static);
  return this$static;
}

function $lambda$11_0(this$static){
  $setPaddingBottom(new Style(new Style$lambda$0$Type(this$static.content_0.section)), this$static.footer.element.wrappedElement.clientHeight + 'px');
}

function $lambda$2_4(this$static){
  if (this$static.footer.autoUnFixForSmallScreens && this$static.footer.fixed_0) {
    this$static.fixedFooter = true;
    $unfixed(this$static.footer);
    $onAttached(this$static.footer, new Layout$lambda$12$Type(this$static));
  }
  this$static.smallScreen = true;
}

function $lambda$3_7(this$static){
  this$static.footer.autoUnFixForSmallScreens && ($clinit_Boolean() , (this$static.fixedFooter?true:false) != null) && this$static.fixedFooter && false && ($fixed(this$static.footer) , $isAttached(this$static.footer)?$setPaddingBottom(new Style(new Style$lambda$0$Type(this$static.content_0.section)), this$static.footer.element.wrappedElement.clientHeight + 'px'):$onAttached(this$static.footer, new Layout$lambda$11$Type(this$static)) , this$static);
  this$static.smallScreen = false;
}

function $lambda$4_4(this$static){
  var minModalZIndex, sidePanelsIndex;
  minModalZIndex = $min($filter($mapToInt(new StreamImpl(null, new Spliterators$IteratorSpliterator($asList(($clinit_DomGlobal() , document_0).body.querySelectorAll('.modal')), 16)), new Layout$lambda$5$Type), new Layout$lambda$6$Type));
  if ($isAttached(($clinit_ModalBackDrop() , INSTANCE_11))) {
    $setZIndex(new DominoElement(this$static.section.rightSide), $wnd.Math.max(1, $getZIndex(INSTANCE_11) - ($clinit_DominoUIConfig() , INSTANCE_12).zIndexIncrement * 2));
    $setZIndex(this$static.navigationBar, $wnd.Math.max(1, $getZIndex(INSTANCE_11) - INSTANCE_12.zIndexIncrement));
    $containsCss(new DominoElement(document_0.body), 'l-panel-span-up')?$setZIndex(new DominoElement(this$static.section.leftSide), $wnd.Math.max(1, $getZIndex(INSTANCE_11) - INSTANCE_12.zIndexIncrement)):$setZIndex(new DominoElement(this$static.section.leftSide), $wnd.Math.max(1, $getZIndex(INSTANCE_11) - INSTANCE_12.zIndexIncrement * 2));
  }
   else if (minModalZIndex.present) {
    $setZIndex(new DominoElement(this$static.section.rightSide), $wnd.Math.max(1, (checkCriticalElement(minModalZIndex.present) , minModalZIndex.ref - ($clinit_DominoUIConfig() , INSTANCE_12).zIndexIncrement * 2)));
    $setZIndex(this$static.navigationBar, $wnd.Math.max(1, (checkCriticalElement(minModalZIndex.present) , minModalZIndex.ref - INSTANCE_12.zIndexIncrement)));
    $containsCss(new DominoElement(document_0.body), 'l-panel-span-up')?$setZIndex(new DominoElement(this$static.section.leftSide), $wnd.Math.max(1, (checkCriticalElement(minModalZIndex.present) , minModalZIndex.ref - INSTANCE_12.zIndexIncrement))):$setZIndex(new DominoElement(this$static.section.leftSide), $wnd.Math.max(1, (checkCriticalElement(minModalZIndex.present) , minModalZIndex.ref - INSTANCE_12.zIndexIncrement * 2)));
  }
   else {
    sidePanelsIndex = $getNextZIndex(($clinit_DominoUIConfig() , INSTANCE_12).zindexManager);
    $setZIndex(new DominoElement(this$static.section.rightSide), sidePanelsIndex.value_0);
    $setZIndex(this$static.navigationBar, $getNextZIndex(INSTANCE_12.zindexManager).value_0);
    $containsCss(new DominoElement(document_0.body), 'l-panel-span-up')?$setZIndex(new DominoElement(this$static.section.leftSide), $getNextZIndex(INSTANCE_12.zindexManager).value_0):$setZIndex(new DominoElement(this$static.section.leftSide), sidePanelsIndex.value_0);
  }
}

function $lambda$7_0(this$static){
  return this$static.leftPanelVisible?$hideLeftPanel(this$static):(this$static.rightPanelVisible && $hideRightPanel(this$static) , $removeCss(new DominoElement(this$static.section.leftSide), 'slide-out-left') , this$static.leftPanelVisible = true , $onOpen($getEffectiveLeftPanelOpenStyle(this$static), this$static) , $addCss(new DominoElement(($clinit_DomGlobal() , document_0).body), 'panel-open') , $forEach_0(this$static.leftPanelHandlers, new Layout$lambda$9$Type) , this$static) , this$static;
}

function $remove_9(this$static){
  $remove_0(this$static.root_0);
  return this$static;
}

function $show_2(this$static, theme){
  $apply_1(new Theme(theme));
  $isAttached(this$static.root_0) || ($clinit_DomGlobal() , document_0).body.appendChild(this$static.root_0.wrappedElement);
  return this$static;
}

function $showOverlay(this$static){
  if (!this$static.overlayVisible) {
    $setDisplay_0($style(this$static.overlay), 'block');
    this$static.overlayVisible = true;
  }
}

function Layout(){
  BaseDominoElement.call(this);
  this.root_0 = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element), 'layout'), 3);
  this.navigationBar = new NavigationBar;
  this.section = new Section;
  this.overlay = new Overlay;
  this.content_0 = new Content_0;
  this.footer = new Footer_0;
  this.appTitle = document_0.createTextNode('');
  this.leftPanelSize = ($clinit_Layout$LeftPanelSize() , DEFAULT);
  this.leftPanelOpenStyle = ($clinit_Layout$LeftPanelOpenStyle() , OVERLAY);
  this.leftPanelHandlers = new ArrayList;
  $init(this, this);
  this.navigationBar.title_0.wrappedElement.hasChildNodes() && $removeChild(this.navigationBar.title_0, this.appTitle);
  this.appTitle = of_2('Demo \u7BA1\u7406\u7CFB\u7EDF');
  $appendChild(this.navigationBar.title_0, this.appTitle);
  $appendChild(this.root_0, this.overlay.element);
  $appendChild(this.root_0, this.navigationBar.navBar.wrappedElement);
  $appendChild(this.root_0, this.section.section);
  $appendChild(this.root_0, this.content_0.section);
  $appendChild(this.root_0, this.footer.element.wrappedElement);
  $appendChild(this.navigationBar.title_0, this.appTitle);
  $css(this.navigationBar, 'nav-fixed');
  $removeCss(this.navigationBar, 'ls-closed');
  $addCss(new DominoElement(this.section.leftSide), 'slide-out-left');
  $addCss(new DominoElement(this.section.rightSide), 'slide-out-right');
  $addEventListener(this.navigationBar.menu, 'click', new Layout$lambda$7$Type(this));
  $addEventListener(this.overlay, 'click', new Layout$lambda$8$Type(this));
  $containsCss_0(new Style(new Style$lambda$0$Type(document_0.body)), 'ls-hidden') || $addCss_1(new Style(new Style$lambda$0$Type(document_0.body)), 'ls-closed');
  $apply_1(new Theme(($clinit_Theme() , INDIGO_2)));
  $addCss(new DominoElement(document_0.body), this.leftPanelSize.size_0);
  $clinit_MediaQuery();
  addListener(new Layout$lambda$2$Type(this), smallAndDownMediaQueryList);
  addListener(new Layout$lambda$3$Type(this), mediumAndUpMediaQueryList);
  $setZIndex(this.overlay, $getNextZIndex(($clinit_DominoUIConfig() , INSTANCE_12).zindexManager).value_0);
  $setZIndex(new DominoElement(this.section.rightSide), $getNextZIndex(INSTANCE_12.zindexManager).value_0);
  $setZIndex(this.navigationBar, $getNextZIndex(INSTANCE_12.zindexManager).value_0);
  $setZIndex(new DominoElement(this.section.leftSide), $getNextZIndex(INSTANCE_12.zindexManager).value_0);
  $addZIndexListener(INSTANCE_12.zindexManager, new Layout$lambda$4$Type(this));
}

defineClass(410, 9, $intern_16, Layout);
_.element_3 = function element_23(){
  return castToNative(this.root_0.wrappedElement, $wnd.HTMLDivElement);
}
;
_.remove_0 = function remove_25(){
  return $remove_0(this.root_0) , this;
}
;
_.fixedFooter = false;
_.fixedLeftPanel = false;
_.leftPanelVisible = false;
_.overlayVisible = false;
_.rightPanelVisible = false;
_.smallScreen = false;
var Lorg_dominokit_domino_ui_layout_Layout_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'Layout', 410);
function $clinit_Layout$LeftPanelOpenStyle(){
  $clinit_Layout$LeftPanelOpenStyle = emptyMethod;
  OVERLAY = new Layout$LeftPanelOpenStyle('OVERLAY', 0, new Layout$LeftPanelOpenStyle$lambda$0$Type, new Layout$LeftPanelOpenStyle$lambda$1$Type);
  SHRINK_CONTENT = new Layout$LeftPanelOpenStyle('SHRINK_CONTENT', 1, new Layout$LeftPanelOpenStyle$lambda$2$Type, new Layout$LeftPanelOpenStyle$lambda$3$Type);
}

function $onClose(this$static, layout){
  this$static.closeHandler.handleLayout(layout);
}

function $onOpen(this$static, layout){
  this$static.openHandler.handleLayout(layout);
}

function Layout$LeftPanelOpenStyle(enum$name, enum$ordinal, openHandler, closeHandler){
  Enum.call(this, enum$name, enum$ordinal);
  this.openHandler = openHandler;
  this.closeHandler = closeHandler;
}

function values_9(){
  $clinit_Layout$LeftPanelOpenStyle();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_layout_Layout$LeftPanelOpenStyle_2_classLit, 1), $intern_0, 121, 0, [OVERLAY, SHRINK_CONTENT]);
}

defineClass(121, 17, {4:1, 28:1, 17:1, 121:1}, Layout$LeftPanelOpenStyle);
var OVERLAY, SHRINK_CONTENT;
var Lorg_dominokit_domino_ui_layout_Layout$LeftPanelOpenStyle_2_classLit = createForEnum('org.dominokit.domino.ui.layout', 'Layout/LeftPanelOpenStyle', 121, values_9);
function Layout$LeftPanelOpenStyle$lambda$0$Type(){
}

defineClass(411, 1, {}, Layout$LeftPanelOpenStyle$lambda$0$Type);
_.handleLayout = function handleLayout(layout){
  $clinit_Layout$LeftPanelOpenStyle();
  $showOverlay(layout);
}
;
var Lorg_dominokit_domino_ui_layout_Layout$LeftPanelOpenStyle$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'Layout/LeftPanelOpenStyle/lambda$0$Type', 411);
function Layout$LeftPanelOpenStyle$lambda$1$Type(){
}

defineClass(412, 1, {}, Layout$LeftPanelOpenStyle$lambda$1$Type);
_.handleLayout = function handleLayout_0(layout){
  $clinit_Layout$LeftPanelOpenStyle();
  $hideOverlay(layout);
}
;
var Lorg_dominokit_domino_ui_layout_Layout$LeftPanelOpenStyle$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'Layout/LeftPanelOpenStyle/lambda$1$Type', 412);
function Layout$LeftPanelOpenStyle$lambda$2$Type(){
}

defineClass(413, 1, {}, Layout$LeftPanelOpenStyle$lambda$2$Type);
_.handleLayout = function handleLayout_1(layout){
  $clinit_Layout$LeftPanelOpenStyle();
  $addCss(new DominoElement(($clinit_DomGlobal() , document_0).body), 'l-shrink');
  $removeCss(new DominoElement(document_0.body), 'ls-closed');
}
;
var Lorg_dominokit_domino_ui_layout_Layout$LeftPanelOpenStyle$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'Layout/LeftPanelOpenStyle/lambda$2$Type', 413);
function Layout$LeftPanelOpenStyle$lambda$3$Type(){
}

defineClass(414, 1, {}, Layout$LeftPanelOpenStyle$lambda$3$Type);
_.handleLayout = function handleLayout_2(layout){
  $clinit_Layout$LeftPanelOpenStyle();
  $removeCss(new DominoElement(($clinit_DomGlobal() , document_0).body), 'l-shrink');
  $addCss(new DominoElement(document_0.body), 'ls-closed');
}
;
var Lorg_dominokit_domino_ui_layout_Layout$LeftPanelOpenStyle$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'Layout/LeftPanelOpenStyle/lambda$3$Type', 414);
function $clinit_Layout$LeftPanelSize(){
  $clinit_Layout$LeftPanelSize = emptyMethod;
  SMALL_0 = new Layout$LeftPanelSize('SMALL', 0, 'sm');
  DEFAULT = new Layout$LeftPanelSize('DEFAULT', 1, 'md');
  LARGE_0 = new Layout$LeftPanelSize('LARGE', 2, 'lg');
}

function Layout$LeftPanelSize(enum$name, enum$ordinal, size_0){
  Enum.call(this, enum$name, enum$ordinal);
  this.size_0 = size_0;
}

function values_10(){
  $clinit_Layout$LeftPanelSize();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_layout_Layout$LeftPanelSize_2_classLit, 1), $intern_0, 105, 0, [SMALL_0, DEFAULT, LARGE_0]);
}

defineClass(105, 17, {4:1, 28:1, 17:1, 105:1}, Layout$LeftPanelSize);
var DEFAULT, LARGE_0, SMALL_0;
var Lorg_dominokit_domino_ui_layout_Layout$LeftPanelSize_2_classLit = createForEnum('org.dominokit.domino.ui.layout', 'Layout/LeftPanelSize', 105, values_10);
function Layout$lambda$10$Type(){
}

defineClass(423, 1, $intern_7, Layout$lambda$10$Type);
_.accept = function accept_48(arg0){
  castTo(arg0, 7).accept(($clinit_Boolean() , false));
}
;
var Lorg_dominokit_domino_ui_layout_Layout$lambda$10$Type_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'Layout/lambda$10$Type', 423);
function Layout$lambda$11$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(424, 1, $intern_22, Layout$lambda$11$Type);
_.onObserved = function onObserved_3(arg0){
  $lambda$11_0(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_layout_Layout$lambda$11$Type_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'Layout/lambda$11$Type', 424);
function Layout$lambda$12$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(425, 1, $intern_22, Layout$lambda$12$Type);
_.onObserved = function onObserved_4(arg0){
  $removeCssProperty_0(new Style(new Style$lambda$0$Type(this.$$outer_0.content_0.section)), 'padding-bottom');
}
;
var Lorg_dominokit_domino_ui_layout_Layout$lambda$12$Type_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'Layout/lambda$12$Type', 425);
function Layout$lambda$2$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(415, 1, {}, Layout$lambda$2$Type);
_.onMatch = function onMatch(){
  $lambda$2_4(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_layout_Layout$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'Layout/lambda$2$Type', 415);
function Layout$lambda$3$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(416, 1, {}, Layout$lambda$3$Type);
_.onMatch = function onMatch_0(){
  $lambda$3_7(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_layout_Layout$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'Layout/lambda$3$Type', 416);
function Layout$lambda$4$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(419, 1, {616:1}, Layout$lambda$4$Type);
var Lorg_dominokit_domino_ui_layout_Layout$lambda$4$Type_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'Layout/lambda$4$Type', 419);
function Layout$lambda$5$Type(){
}

defineClass(417, 1, {}, Layout$lambda$5$Type);
var Lorg_dominokit_domino_ui_layout_Layout$lambda$5$Type_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'Layout/lambda$5$Type', 417);
function Layout$lambda$6$Type(){
}

defineClass(418, 1, {}, Layout$lambda$6$Type);
var Lorg_dominokit_domino_ui_layout_Layout$lambda$6$Type_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'Layout/lambda$6$Type', 418);
function Layout$lambda$7$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(420, 1, {}, Layout$lambda$7$Type);
_.handleEvent = function handleEvent_29(arg0){
  $lambda$7_0(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_layout_Layout$lambda$7$Type_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'Layout/lambda$7$Type', 420);
function Layout$lambda$8$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(421, 1, {}, Layout$lambda$8$Type);
_.handleEvent = function handleEvent_30(arg0){
  $hidePanels(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_layout_Layout$lambda$8$Type_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'Layout/lambda$8$Type', 421);
function Layout$lambda$9$Type(){
}

defineClass(422, 1, $intern_7, Layout$lambda$9$Type);
_.accept = function accept_49(arg0){
  castTo(arg0, 7).accept(($clinit_Boolean() , true));
}
;
var Lorg_dominokit_domino_ui_layout_Layout$lambda$9$Type_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'Layout/lambda$9$Type', 422);
function NavigationBar(){
  BaseDominoElement.call(this);
  this.navBar = castTo($css(castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('nav'), $wnd.HTMLElement))).element), 'navbar'), 3), 'ls-closed'), 3);
  this.container = castTo($css(new FlexLayout, 'container-fluid'), 42);
  this.title_0 = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('a'), $wnd.HTMLElement))).element), 'navbar-brand'), 3);
  this.menu = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('a'), $wnd.HTMLElement))).element), 'bars'), 3);
  this.topBar = castTo($css(castTo($css(castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('ul'), $wnd.HTMLElement))).element), 'nav'), 3), 'navbar-nav'), 3), 'navbar-right'), 3);
  this.topBarContainer = castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), this.topBar), 3);
  this.navBarHeader = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), 'navbar-header'), 3);
  this.menuToggleItem = castTo($css(new FlexItem, 'menu-toggle'), 14);
  this.logoItem = new FlexItem;
  this.titleItem = new FlexItem;
  this.actionBarItem = new FlexItem;
  $appendChild_2($appendChild_2($appendChild_2($appendChild_2(this.container, castTo($appendChild_0(this.menuToggleItem, this.menu), 14)), this.logoItem), castTo($appendChild_0($setFlexGrow(this.titleItem), this.title_0), 14)), castTo($appendChild_0(this.actionBarItem, this.topBarContainer), 14));
  $appendChild_0(this.navBar, $appendChild_0(this.navBarHeader, this.container));
  $init(this, this);
}

defineClass(441, 9, $intern_16, NavigationBar);
_.element_3 = function element_24(){
  return this.navBar.wrappedElement;
}
;
var Lorg_dominokit_domino_ui_layout_NavigationBar_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'NavigationBar', 441);
function Overlay(){
  BaseDominoElement.call(this);
  this.element = castToNative(castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element), 'overlay'), 3).wrappedElement, $wnd.HTMLDivElement);
  $init(this, this);
}

defineClass(440, 9, $intern_16, Overlay);
_.element_3 = function element_25(){
  return this.element;
}
;
var Lorg_dominokit_domino_ui_layout_Overlay_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'Overlay', 440);
function Section(){
  BaseDominoElement.call(this);
  this.leftSide = castTo($css(castTo($id(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('aside'), $wnd.HTMLElement))).element), 'leftsidebar'), 3), 'sidebar'), 3).wrappedElement;
  this.rightSide = $style_0(castTo($css(castTo($css(castTo($id(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('aside'), $wnd.HTMLElement))).element), 'rightsidebar'), 3), 'right-sidebar'), 3), 'overlay-open'), 3), 'height: calc(100vh - 70px); overflow-y: scroll;').wrappedElement;
  this.section = castTo($appendChild(castTo($appendChild(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('section'), $wnd.HTMLElement))).element), this.leftSide), 3), this.rightSide), 3).wrappedElement;
  $init(this, this);
}

defineClass(459, 9, $intern_16, Section);
_.element_3 = function element_26(){
  return this.section;
}
;
var Lorg_dominokit_domino_ui_layout_Section_2_classLit = createForClass('org.dominokit.domino.ui.layout', 'Section', 459);
function $clinit_MediaQuery(){
  $clinit_MediaQuery = emptyMethod;
  ($clinit_DomGlobal() , $wnd.goog.global.window).matchMedia('(min-width: 1800px)');
  $wnd.goog.global.window.matchMedia('(min-width: 1200px) and (max-width: 1800px)');
  $wnd.goog.global.window.matchMedia('(min-width: 992px) and (max-width: 1200px)');
  $wnd.goog.global.window.matchMedia('(min-width: 768px) and (max-width: 992px)');
  $wnd.goog.global.window.matchMedia('(max-width: 768px)');
  $wnd.goog.global.window.matchMedia('(min-width: 1800px)');
  $wnd.goog.global.window.matchMedia('(min-width: 1200px)');
  mediumAndUpMediaQueryList = $wnd.goog.global.window.matchMedia('(min-width: 992px)');
  $wnd.goog.global.window.matchMedia('(min-width: 768px)');
  $wnd.goog.global.window.matchMedia('(min-width: 0x)');
  $wnd.goog.global.window.matchMedia('(max-width: 1800px)');
  $wnd.goog.global.window.matchMedia('(max-width: 1800px)');
  $wnd.goog.global.window.matchMedia('(max-width: 1200px)');
  smallAndDownMediaQueryList = $wnd.goog.global.window.matchMedia('(max-width: 992px)');
  $wnd.goog.global.window.matchMedia('(max-width: 768px)');
  LISTENERS = new HashMap;
  new HashMap;
}

function addListener(listener, mediaQueryList){
  $clinit_MediaQuery();
  var mediaQueryListListener;
  mediaQueryListListener = makeLambdaFunction(MediaQuery$lambda$0$Type.prototype.onInvoke_2, MediaQuery$lambda$0$Type, [listener]);
  mediaQueryList.addListener(mediaQueryListListener);
  $put_0(LISTENERS, listener, mediaQueryListListener);
  lambda$0_5(mediaQueryListListener.listener_0, mediaQueryList);
}

function lambda$0_5(listener_0, p0_1){
  $clinit_MediaQuery();
  p0_1.matches && listener_0.onMatch();
}

var LISTENERS, mediumAndUpMediaQueryList, smallAndDownMediaQueryList;
function MediaQuery$lambda$0$Type(listener_0){
  this.listener_0 = listener_0;
}

defineClass(687, $wnd.Function, {}, MediaQuery$lambda$0$Type);
_.onInvoke_2 = function onInvoke_2(arg0){
  lambda$0_5(this.listener_0, arg0);
}
;
function BaseModal$0methodref$doClose$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(388, 1, {160:1}, BaseModal$0methodref$doClose$Type);
_.apply_1 = function apply_19(){
  $doClose(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_modals_BaseModal$0methodref$doClose$Type_2_classLit = createForClass('org.dominokit.domino.ui.modals', 'BaseModal/0methodref$doClose$Type', 388);
function BaseModal$1methodref$onOpen$Type(){
}

defineClass(390, 1, $intern_7, BaseModal$1methodref$onOpen$Type);
_.accept = function accept_50(arg0){
  $lambda$8(castTo(arg0, 661).$$outer_0);
}
;
var Lorg_dominokit_domino_ui_modals_BaseModal$1methodref$onOpen$Type_2_classLit = createForClass('org.dominokit.domino.ui.modals', 'BaseModal/1methodref$onOpen$Type', 390);
function BaseModal$2methodref$onClose$Type(){
}

defineClass(391, 1, $intern_7, BaseModal$2methodref$onClose$Type);
_.accept = function accept_51(arg0){
  castTo(arg0, 662);
  $clinit_BaseModal();
}
;
var Lorg_dominokit_domino_ui_modals_BaseModal$2methodref$onClose$Type_2_classLit = createForClass('org.dominokit.domino.ui.modals', 'BaseModal/2methodref$onClose$Type', 391);
function BaseModal$Modal(){
  this.root_0 = castTo($elevate(castTo($setAttribute_0(castTo($css(castTo($setTabIndex(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('div'), $wnd.HTMLElement))).element)), 3), 'modal'), 3), 'role', 'dialog'), 3), of_1(($clinit_DominoUIConfig() , INSTANCE_12).defaultModalElevation)), 3);
  this.modalDialog = castTo($setAttribute_0(castTo($css(castTo($setTabIndex(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element)), 3), 'modal-dialog'), 3), 'role', 'document'), 3);
  this.modalContent = castTo($css($setDirection(new FlexLayout, ($clinit_FlexDirection() , TOP_TO_BOTTOM)), 'modal-content'), 42);
  this.modalHeader = castTo($css(new FlexItem, 'modal-header'), 14);
  this.modalTitle = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('h4'), $wnd.HTMLElement))).element), 'modal-title'), 3);
  this.modalBody = castTo($css($setFlexGrow(new FlexItem), 'modal-body'), 14);
  this.modalFooter = castTo($css(new FlexItem, 'modal-footer'), 14);
  $appendChild_0(this.root_0, $appendChild_0(this.modalDialog, $appendChild_2($appendChild_2($appendChild_2(this.modalContent, castTo($appendChild_0(this.modalHeader, this.modalTitle), 14)), this.modalBody), this.modalFooter)));
  $hide(this.root_0);
}

defineClass(387, 1, $intern_23, BaseModal$Modal);
_.element_3 = function element_27(){
  return castToNative(this.root_0.wrappedElement, $wnd.HTMLDivElement);
}
;
var Lorg_dominokit_domino_ui_modals_BaseModal$Modal_2_classLit = createForClass('org.dominokit.domino.ui.modals', 'BaseModal/Modal', 387);
function BaseModal$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(389, 1, {}, BaseModal$lambda$1$Type);
_.handleEvent = function handleEvent_31(arg0){
  $lambda$1_7(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_modals_BaseModal$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.modals', 'BaseModal/lambda$1$Type', 389);
function BaseModal$lambda$3$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(186, 1, $intern_24, BaseModal$lambda$3$Type);
_.run = function run_6(){
  $clinit_DomGlobal();
  $wnd.goog.global.setTimeout(makeLambdaFunction(BaseModal$lambda$4$Type.prototype.onInvoke_0, BaseModal$lambda$4$Type, [this.$$outer_0]), 0);
}
;
var Lorg_dominokit_domino_ui_modals_BaseModal$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.ui.modals', 'BaseModal/lambda$3$Type', 186);
function BaseModal$lambda$4$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(686, $wnd.Function, {}, BaseModal$lambda$4$Type);
_.onInvoke_0 = function onInvoke_3(arg0){
  $lambda$4_3(this.$$outer_0);
}
;
function $clinit_DefaultZIndexManager(){
  $clinit_DefaultZIndexManager = emptyMethod;
  modals = new LinkedList;
}

function $addZIndexListener(this$static, listener){
  $add(this$static.listeners, listener);
}

function $getNextZIndex(this$static){
  !this$static.currentZIndex && (this$static.currentZIndex = valueOf(($clinit_DominoUIConfig() , INSTANCE_12).initialZIndex));
  this$static.currentZIndex = valueOf(this$static.currentZIndex.value_0 + ($clinit_DominoUIConfig() , INSTANCE_12).zIndexIncrement);
  return this$static.currentZIndex;
}

function $onPopupClose(this$static, popup){
  var backdropZIndex, modalZIndex;
  if (popup.isModal()) {
    $advanceToFind(modals, popup, true);
    if (modals.size_0 == 0) {
      $remove_0(($clinit_ModalBackDrop() , INSTANCE_11));
    }
     else {
      backdropZIndex = $getNextZIndex(this$static);
      $setZIndex(($clinit_ModalBackDrop() , INSTANCE_11), backdropZIndex.value_0);
      modalZIndex = $getNextZIndex(this$static);
      castTo($peek(modals), 96).setZIndex(modalZIndex.value_0);
      $forEach_0(this$static.listeners, new DefaultZIndexManager$lambda$1$Type);
    }
  }
}

function $onPopupOpen(this$static, popup){
  var nextZIndex, nextZIndex0;
  if (popup.isModal()) {
    nextZIndex0 = $getNextZIndex(this$static);
    $setZIndex(($clinit_ModalBackDrop() , INSTANCE_11), nextZIndex0.value_0);
    $isAttached(INSTANCE_11) || $appendChild_0(new DominoElement(($clinit_DomGlobal() , document_0).body), INSTANCE_11);
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

defineClass(316, 1, {}, DefaultZIndexManager);
var modals;
var Lorg_dominokit_domino_ui_modals_DefaultZIndexManager_2_classLit = createForClass('org.dominokit.domino.ui.modals', 'DefaultZIndexManager', 316);
function DefaultZIndexManager$lambda$0$Type(){
}

defineClass(317, 1, $intern_7, DefaultZIndexManager$lambda$0$Type);
_.accept = function accept_52(arg0){
  $clinit_DefaultZIndexManager();
  $lambda$4_4(castTo(arg0, 616).$$outer_0);
}
;
var Lorg_dominokit_domino_ui_modals_DefaultZIndexManager$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.modals', 'DefaultZIndexManager/lambda$0$Type', 317);
function DefaultZIndexManager$lambda$1$Type(){
}

defineClass(318, 1, $intern_7, DefaultZIndexManager$lambda$1$Type);
_.accept = function accept_53(arg0){
  var lastArg;
  $clinit_DefaultZIndexManager();
  $lambda$4_4((lastArg = castTo(arg0, 616) , castTo($peek(modals), 96) , lastArg).$$outer_0);
}
;
var Lorg_dominokit_domino_ui_modals_DefaultZIndexManager$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.modals', 'DefaultZIndexManager/lambda$1$Type', 318);
function $clinit_IsModalDialog$ModalSize(){
  $clinit_IsModalDialog$ModalSize = emptyMethod;
  LARGE_1 = new IsModalDialog$ModalSize('LARGE', 0, 'modal-lg');
  ALERT = new IsModalDialog$ModalSize('ALERT', 1, 'modal-alert');
  SMALL_1 = new IsModalDialog$ModalSize('SMALL', 2, 'modal-sm');
}

function IsModalDialog$ModalSize(enum$name, enum$ordinal, style){
  Enum.call(this, enum$name, enum$ordinal);
  this.style_0 = style;
}

function values_11(){
  $clinit_IsModalDialog$ModalSize();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_modals_IsModalDialog$ModalSize_2_classLit, 1), $intern_0, 102, 0, [LARGE_1, ALERT, SMALL_1]);
}

defineClass(102, 17, {4:1, 28:1, 17:1, 102:1}, IsModalDialog$ModalSize);
var ALERT, LARGE_1, SMALL_1;
var Lorg_dominokit_domino_ui_modals_IsModalDialog$ModalSize_2_classLit = createForEnum('org.dominokit.domino.ui.modals', 'IsModalDialog/ModalSize', 102, values_11);
function $clinit_ModalBackDrop(){
  $clinit_ModalBackDrop = emptyMethod;
  INSTANCE_11 = new ModalBackDrop;
}

function $lambda$1_9(this$static, event_0){
  event_0.preventDefault();
  event_0.stopPropagation();
  $isEqualNode(this$static.element, event_0.target) && $ifPresent(($clinit_DominoUIConfig() , ofNullable(castTo($peek(($clinit_DefaultZIndexManager() , modals)), 96))), new ModalBackDrop$lambda$3$Type);
}

function $lambda$2_5(this$static, event_0){
  $isEqualNode(this$static.element, event_0.target) && $ifPresent(($clinit_DominoUIConfig() , ofNullable(castTo($peek(($clinit_DefaultZIndexManager() , modals)), 96))), new ModalBackDrop$lambda$3$Type);
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

defineClass(404, 9, $intern_16, ModalBackDrop);
_.element_3 = function element_28(){
  return castToNative(this.element.wrappedElement, $wnd.HTMLDivElement);
}
;
var INSTANCE_11;
var Lorg_dominokit_domino_ui_modals_ModalBackDrop_2_classLit = createForClass('org.dominokit.domino.ui.modals', 'ModalBackDrop', 404);
function ModalBackDrop$0methodref$remove$Type(){
}

defineClass(144, 1, $intern_7, ModalBackDrop$0methodref$remove$Type);
_.accept = function accept_54(arg0){
  castTo(arg0, 9).remove_0();
}
;
var Lorg_dominokit_domino_ui_modals_ModalBackDrop$0methodref$remove$Type_2_classLit = createForClass('org.dominokit.domino.ui.modals', 'ModalBackDrop/0methodref$remove$Type', 144);
function ModalBackDrop$lambda$0$Type(){
}

defineClass(405, 1, {}, ModalBackDrop$lambda$0$Type);
_.handleEvent = function handleEvent_32(arg0){
  $clinit_ModalBackDrop();
  arg0.preventDefault();
  arg0.stopPropagation();
}
;
var Lorg_dominokit_domino_ui_modals_ModalBackDrop$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.modals', 'ModalBackDrop/lambda$0$Type', 405);
function ModalBackDrop$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(406, 1, {}, ModalBackDrop$lambda$1$Type);
_.handleEvent = function handleEvent_33(arg0){
  $lambda$1_9(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_modals_ModalBackDrop$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.modals', 'ModalBackDrop/lambda$1$Type', 406);
function ModalBackDrop$lambda$2$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(407, 1, {}, ModalBackDrop$lambda$2$Type);
_.handleEvent = function handleEvent_34(arg0){
  $lambda$2_5(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_modals_ModalBackDrop$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.modals', 'ModalBackDrop/lambda$2$Type', 407);
function ModalBackDrop$lambda$3$Type(){
}

defineClass(189, 1, $intern_7, ModalBackDrop$lambda$3$Type);
_.accept = function accept_55(arg0){
  lambda$3_2(castTo(arg0, 96));
}
;
var Lorg_dominokit_domino_ui_modals_ModalBackDrop$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.ui.modals', 'ModalBackDrop/lambda$3$Type', 189);
function $lambda$0_11(this$static, element_1, e_1){
  var htmlElement, newPosition, position;
  htmlElement = castToNative(e_1, $wnd.HTMLElement);
  position = __parseAndValidateInt(htmlElement.getAttribute('data-position'));
  if (maskUndefined(htmlElement) !== maskUndefined(element_1)) {
    newPosition = position + (element_1.offsetHeight + this$static.getOffsetPosition(element_1));
    htmlElement.setAttribute('data-position', newPosition);
    htmlElement.style.setProperty(this$static.positionProperty, newPosition + 'px');
  }
}

function $lambda$1_10(this$static, dataPosition_1, height_2, e_2){
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

defineClass(92, 1, {});
var Lorg_dominokit_domino_ui_notifications_NotificationPosition_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'NotificationPosition', 92);
function BottomCenterPosition(){
  NotificationPosition.call(this, 'bottom-center', 'bottom');
}

defineClass(549, 92, {}, BottomCenterPosition);
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
var Lorg_dominokit_domino_ui_notifications_BottomCenterPosition_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'BottomCenterPosition', 549);
function BottomLeftPosition(){
  NotificationPosition.call(this, 'bottom-left', 'bottom');
}

defineClass(548, 92, {}, BottomLeftPosition);
_.getOffsetPosition = function getOffsetPosition_0(element){
  return 20;
}
;
_.onBeforePosition = function onBeforePosition_0(element){
  element.style.setProperty('bottom', '20px');
  element.style.setProperty('left', '20px');
}
;
var Lorg_dominokit_domino_ui_notifications_BottomLeftPosition_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'BottomLeftPosition', 548);
function BottomRightPosition(){
  NotificationPosition.call(this, 'bottom-right', 'bottom');
}

defineClass(550, 92, {}, BottomRightPosition);
_.getOffsetPosition = function getOffsetPosition_1(element){
  return 20;
}
;
_.onBeforePosition = function onBeforePosition_1(element){
  element.style.setProperty('bottom', '20px');
  element.style.setProperty('right', '20px');
}
;
var Lorg_dominokit_domino_ui_notifications_BottomRightPosition_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'BottomRightPosition', 550);
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

function $lambda$1_11(this$static){
  $close_0(this$static, this$static.duration);
}

function $lambda$2_6(this$static, dataPosition_1, height_2){
  $onRemoveElement(this$static.position, dataPosition_1, height_2);
  $forEach_0(this$static.closeHandlers, new Notification$0methodref$onClose$Type);
  this$static.closed_0 = true;
}

function $lambda$4_5(this$static, onComplete_1){
  this$static.element.remove();
  $lambda$2_6(onComplete_1.$$outer_0, onComplete_1.dataPosition_1, onComplete_1.height_2);
}

function $setClosable(this$static){
  $toggleDisplay(new DominoElement(this$static.closeButton), false);
  return this$static;
}

function $setPosition(this$static, position){
  this$static.position = position;
  return this$static;
}

function $show_3(this$static){
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

defineClass(537, 9, $intern_16, Notification_0);
_.element_3 = function element_29(){
  return this.element;
}
;
_.closed_0 = true;
_.duration = 4000;
var TOP_CENTER, TOP_RIGHT;
var Lorg_dominokit_domino_ui_notifications_Notification_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'Notification', 537);
function Notification$0methodref$onClose$Type(){
}

defineClass(540, 1, $intern_7, Notification$0methodref$onClose$Type);
_.accept = function accept_56(arg0){
  throwClassCastExceptionUnlessNull(arg0).$_nullMethod();
}
;
var Lorg_dominokit_domino_ui_notifications_Notification$0methodref$onClose$Type_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'Notification/0methodref$onClose$Type', 540);
function Notification$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(538, 1, {}, Notification$lambda$0$Type);
_.handleEvent = function handleEvent_35(arg0){
  $close_0(this.$$outer_0, 0);
}
;
var Lorg_dominokit_domino_ui_notifications_Notification$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'Notification/lambda$0$Type', 538);
function Notification$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(539, 1, {}, Notification$lambda$1$Type);
_.onComplete = function onComplete_5(arg0){
  $lambda$1_11(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_notifications_Notification$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'Notification/lambda$1$Type', 539);
function Notification$lambda$2$Type($$outer_0, dataPosition_1, height_2){
  this.$$outer_0 = $$outer_0;
  this.dataPosition_1 = dataPosition_1;
  this.height_2 = height_2;
}

defineClass(541, 1, $intern_24, Notification$lambda$2$Type);
_.run = function run_7(){
  $lambda$2_6(this.$$outer_0, this.dataPosition_1, this.height_2);
}
;
_.dataPosition_1 = 0;
_.height_2 = 0;
var Lorg_dominokit_domino_ui_notifications_Notification$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'Notification/lambda$2$Type', 541);
function Notification$lambda$4$Type($$outer_0, onComplete_1){
  this.$$outer_0 = $$outer_0;
  this.onComplete_1 = onComplete_1;
}

defineClass(542, 1, {}, Notification$lambda$4$Type);
_.onComplete = function onComplete_6(arg0){
  $lambda$4_5(this.$$outer_0, this.onComplete_1);
}
;
var Lorg_dominokit_domino_ui_notifications_Notification$lambda$4$Type_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'Notification/lambda$4$Type', 542);
function NotificationPosition$lambda$0$Type($$outer_0, element_1){
  this.$$outer_0 = $$outer_0;
  this.element_1 = element_1;
}

defineClass(544, 1, $intern_7, NotificationPosition$lambda$0$Type);
_.accept = function accept_57(arg0){
  $lambda$0_11(this.$$outer_0, this.element_1, castToNative(arg0, $wnd.Element));
}
;
var Lorg_dominokit_domino_ui_notifications_NotificationPosition$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'NotificationPosition/lambda$0$Type', 544);
function NotificationPosition$lambda$1$Type($$outer_0, dataPosition_1, height_2){
  this.$$outer_0 = $$outer_0;
  this.dataPosition_1 = dataPosition_1;
  this.height_2 = height_2;
}

defineClass(545, 1, $intern_7, NotificationPosition$lambda$1$Type);
_.accept = function accept_58(arg0){
  $lambda$1_10(this.$$outer_0, this.dataPosition_1, this.height_2, castToNative(arg0, $wnd.Element));
}
;
_.dataPosition_1 = 0;
_.height_2 = 0;
var Lorg_dominokit_domino_ui_notifications_NotificationPosition$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'NotificationPosition/lambda$1$Type', 545);
function TopCenterPosition(){
  NotificationPosition.call(this, 'top-center', 'top');
}

defineClass(546, 92, {}, TopCenterPosition);
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
var Lorg_dominokit_domino_ui_notifications_TopCenterPosition_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'TopCenterPosition', 546);
function TopLeftPosition(){
  NotificationPosition.call(this, 'top-left', 'top');
}

defineClass(543, 92, {}, TopLeftPosition);
_.getOffsetPosition = function getOffsetPosition_3(element){
  return element.offsetTop;
}
;
_.onBeforePosition = function onBeforePosition_3(element){
  element.style.setProperty('top', '20px');
  element.style.setProperty('left', '20px');
}
;
var Lorg_dominokit_domino_ui_notifications_TopLeftPosition_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'TopLeftPosition', 543);
function TopRightPosition(){
  NotificationPosition.call(this, 'top-right', 'top');
}

defineClass(547, 92, {}, TopRightPosition);
_.getOffsetPosition = function getOffsetPosition_4(element){
  return element.offsetTop;
}
;
_.onBeforePosition = function onBeforePosition_4(element){
  element.style.setProperty('top', '20px');
  element.style.setProperty('right', '20px');
}
;
var Lorg_dominokit_domino_ui_notifications_TopRightPosition_2_classLit = createForClass('org.dominokit.domino.ui.notifications', 'TopRightPosition', 547);
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
  $onPopupClose(($clinit_DominoUIConfig() , INSTANCE_12).zindexManager, this$static);
  $forEach_0(this$static.closeHandlers, new Popover$3methodref$onClose$Type);
}

function $lambda$1_12(this$static, evt_0){
  evt_0.stopPropagation();
  this$static.closeOthers && ($clinit_ModalBackDrop() , $querySelectorAll(new DominoElement(($clinit_DomGlobal() , document_0).body), '.popover').forEach_0(new ModalBackDrop$0methodref$remove$Type));
  ($clinit_DomGlobal() , document_0).body.appendChild(this$static.element.wrappedElement);
  $show_1((!this$static.collapsible_0 && (this$static.collapsible_0 = new Collapsible(castToNative(this$static.element.wrappedElement, $wnd.HTMLDivElement))) , this$static.collapsible_0));
  this$static.popupPosition.position_0(this$static.element.wrappedElement, this$static.targetElement);
  $position(this$static, this$static.popupPosition);
  this$static.closeOnEscape && $addHandler_0(new KeyboardEvents_0('keydown', [document_0.body]), 'escape', new KeyboardEvents$HandlerContext(this$static.closeListener));
  $onPopupOpen(($clinit_DominoUIConfig() , INSTANCE_12).zindexManager, this$static);
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
  this.headerText = of_2('\u5173\u4E8E\u4E91\u7B14\u8BB0');
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

function create_9(target, content_0){
  $clinit_Popover();
  return new Popover(target.element, content_0);
}

defineClass(465, 9, $intern_25, Popover);
_.close_0 = function close_1(){
  return $hide_0((!this.collapsible_0 && (this.collapsible_0 = new Collapsible(castToNative(this.element.wrappedElement, $wnd.HTMLDivElement))) , this.collapsible_0)) , this;
}
;
_.element_3 = function element_30(){
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
var Lorg_dominokit_domino_ui_popover_Popover_2_classLit = createForClass('org.dominokit.domino.ui.popover', 'Popover', 465);
function Popover$0methodref$stopPropagation$Type(){
}

defineClass(469, 1, {}, Popover$0methodref$stopPropagation$Type);
_.handleEvent = function handleEvent_36(arg0){
  arg0.stopPropagation();
}
;
var Lorg_dominokit_domino_ui_popover_Popover$0methodref$stopPropagation$Type_2_classLit = createForClass('org.dominokit.domino.ui.popover', 'Popover/0methodref$stopPropagation$Type', 469);
function Popover$1methodref$doClose$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(472, 1, {160:1}, Popover$1methodref$doClose$Type);
_.apply_1 = function apply_20(){
  $doClose_0(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_popover_Popover$1methodref$doClose$Type_2_classLit = createForClass('org.dominokit.domino.ui.popover', 'Popover/1methodref$doClose$Type', 472);
function Popover$2methodref$onOpen$Type(){
}

defineClass(473, 1, $intern_7, Popover$2methodref$onOpen$Type);
_.accept = function accept_59(arg0){
  throwClassCastExceptionUnlessNull(arg0).$_nullMethod();
}
;
var Lorg_dominokit_domino_ui_popover_Popover$2methodref$onOpen$Type_2_classLit = createForClass('org.dominokit.domino.ui.popover', 'Popover/2methodref$onOpen$Type', 473);
function Popover$3methodref$onClose$Type(){
}

defineClass(474, 1, $intern_7, Popover$3methodref$onClose$Type);
_.accept = function accept_60(arg0){
  throwClassCastExceptionUnlessNull(arg0).$_nullMethod();
}
;
var Lorg_dominokit_domino_ui_popover_Popover$3methodref$onClose$Type_2_classLit = createForClass('org.dominokit.domino.ui.popover', 'Popover/3methodref$onClose$Type', 474);
function Popover$lambda$0$Type(){
}

defineClass(466, 1, {}, Popover$lambda$0$Type);
_.handleEvent = function handleEvent_37(arg0){
  $clinit_Popover();
  $clinit_ModalBackDrop();
  $querySelectorAll(new DominoElement(($clinit_DomGlobal() , document_0).body), '.popover').forEach_0(new ModalBackDrop$0methodref$remove$Type);
}
;
var Lorg_dominokit_domino_ui_popover_Popover$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.popover', 'Popover/lambda$0$Type', 466);
function Popover$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(467, 1, {}, Popover$lambda$1$Type);
_.handleEvent = function handleEvent_38(arg0){
  $lambda$1_12(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_popover_Popover$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.popover', 'Popover/lambda$1$Type', 467);
function Popover$lambda$2$Type(){
}

defineClass(468, 1, {}, Popover$lambda$2$Type);
_.handleEvent = function handleEvent_39(arg0){
  $clinit_Popover();
  $clinit_ModalBackDrop();
  $querySelectorAll(new DominoElement(($clinit_DomGlobal() , document_0).body), '.popover').forEach_0(new ModalBackDrop$0methodref$remove$Type);
}
;
var Lorg_dominokit_domino_ui_popover_Popover$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.popover', 'Popover/lambda$2$Type', 468);
function Popover$lambda$4$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(470, 1, $intern_22, Popover$lambda$4$Type);
_.onObserved = function onObserved_5(arg0){
  $close_1(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_popover_Popover$lambda$4$Type_2_classLit = createForClass('org.dominokit.domino.ui.popover', 'Popover/lambda$4$Type', 470);
function Popover$lambda$5$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(471, 1, $intern_22, Popover$lambda$5$Type);
_.onObserved = function onObserved_6(arg0){
  $lambda$5_1(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_popover_Popover$lambda$5$Type_2_classLit = createForClass('org.dominokit.domino.ui.popover', 'Popover/lambda$5$Type', 471);
function $clinit_PopupPosition(){
  $clinit_PopupPosition = emptyMethod;
  RIGHT = new PopupPositionRight;
  TOP = new PopupPositionTop;
}

var RIGHT, TOP;
function PopupPositionRight(){
}

defineClass(476, 1, {}, PopupPositionRight);
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
var Lorg_dominokit_domino_ui_popover_PopupPositionRight_2_classLit = createForClass('org.dominokit.domino.ui.popover', 'PopupPositionRight', 476);
function PopupPositionTop(){
}

defineClass(477, 1, {}, PopupPositionTop);
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
var Lorg_dominokit_domino_ui_popover_PopupPositionTop_2_classLit = createForClass('org.dominokit.domino.ui.popover', 'PopupPositionTop', 477);
function $close_2(this$static){
  $removeCss_1((this$static.styleInitializer.apply_1() , this$static.style_0), 'open');
  $scheduleFixedDelay(new Search$lambda$7$Type(this$static));
  this$static.searchInput.value = '';
  this$static.closeHandler.onClose();
  return this$static;
}

function $lambda$2_7(this$static, evt_0){
  evt_0.stopPropagation();
  $close_2(this$static);
}

function $lambda$3_8(this$static){
  $cancel_1(this$static.autoSearchTimer);
  $schedule_0(this$static.autoSearchTimer, 200);
}

function $lambda$4_6(this$static, evt_0){
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

function $onClose_0(this$static, handler){
  this$static.closeHandler = handler;
  return this$static;
}

function $onSearch(this$static, handler){
  this$static.searchHandler = handler;
  return this$static;
}

function $open_1(this$static){
  $setDisplay_0((this$static.styleInitializer.apply_1() , this$static.style_0), 'inline-block');
  $scheduleFixedDelay(new Search$lambda$6$Type(this$static));
  this$static.searchInput.focus();
  return this$static;
}

function Search(){
  BaseDominoElement.call(this);
  this.closeIcon = castTo($textContent(castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('i'), $wnd.HTMLElement))).element), 'material-icons'), 3), 'close'), 3).wrappedElement;
  this.searchInput = castToNative(castTo($setAttribute_0(new DominoElement(input_0('text').element), 'placeholder', 'START TYPING...'), 3).wrappedElement, $wnd.HTMLInputElement);
  this.element = castToNative(castTo($appendChild_0(castTo($appendChild(castTo($appendChild_0(castTo($css($style_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), 'display: none;'), 'search-bar'), 3), $appendChild_0(castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), 'search-icon'), 3), $textContent(castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('i'), $wnd.HTMLElement))).element), 'material-icons'), 3), 'search'))), 3), this.searchInput), 3), $appendChild(castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), 'close-search'), 3), this.closeIcon)), 3).wrappedElement, $wnd.HTMLDivElement);
  this.searchHandler = new Search$lambda$0$Type;
  this.closeHandler = new Search$lambda$1$Type;
  this.closeIcon.addEventListener('click', new Search$lambda$2$Type(this));
  this.autoSearchTimer = new Search$1(this);
  this.searchInput.addEventListener('input', new Search$lambda$3$Type(this));
  this.searchInput.addEventListener(($clinit_EventType() , keypress).name_0, new Search$lambda$4$Type(this));
  this.searchInput.addEventListener('keydown', new Search$lambda$5$Type(this));
  $init(this, this);
  $setHeight((this.styleInitializer.apply_1() , this.style_0), '100%');
}

defineClass(155, 9, {155:1, 9:1, 13:1}, Search);
_.element_3 = function element_31(){
  return this.element;
}
;
var Lorg_dominokit_domino_ui_search_Search_2_classLit = createForClass('org.dominokit.domino.ui.search', 'Search', 155);
function Search$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(564, 101, {}, Search$1);
_.run = function run_8(){
  this.this$01.searchHandler.onSearch(this.this$01.searchInput.value);
}
;
var Lorg_dominokit_domino_ui_search_Search$1_2_classLit = createForClass('org.dominokit.domino.ui.search', 'Search/1', 564);
function Search$lambda$0$Type(){
}

defineClass(561, 1, {}, Search$lambda$0$Type);
_.onSearch = function onSearch(searchToken){
}
;
var Lorg_dominokit_domino_ui_search_Search$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.search', 'Search/lambda$0$Type', 561);
function Search$lambda$1$Type(){
}

defineClass(562, 1, {}, Search$lambda$1$Type);
_.onClose = function onClose(){
}
;
var Lorg_dominokit_domino_ui_search_Search$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.search', 'Search/lambda$1$Type', 562);
function Search$lambda$2$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(563, 1, {}, Search$lambda$2$Type);
_.handleEvent = function handleEvent_40(arg0){
  $lambda$2_7(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_search_Search$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.search', 'Search/lambda$2$Type', 563);
function Search$lambda$3$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(565, 1, {}, Search$lambda$3$Type);
_.handleEvent = function handleEvent_41(arg0){
  $lambda$3_8(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_search_Search$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.ui.search', 'Search/lambda$3$Type', 565);
function Search$lambda$4$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(566, 1, {}, Search$lambda$4$Type);
_.handleEvent = function handleEvent_42(arg0){
  $lambda$4_6(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_search_Search$lambda$4$Type_2_classLit = createForClass('org.dominokit.domino.ui.search', 'Search/lambda$4$Type', 566);
function Search$lambda$5$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(567, 1, {}, Search$lambda$5$Type);
_.handleEvent = function handleEvent_43(arg0){
  $lambda$5_2(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_search_Search$lambda$5$Type_2_classLit = createForClass('org.dominokit.domino.ui.search', 'Search/lambda$5$Type', 567);
function Search$lambda$6$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(568, 1, {}, Search$lambda$6$Type);
_.execute_0 = function execute_4(){
  return $addCss(this.$$outer_0, 'open') , false;
}
;
var Lorg_dominokit_domino_ui_search_Search$lambda$6$Type_2_classLit = createForClass('org.dominokit.domino.ui.search', 'Search/lambda$6$Type', 568);
function Search$lambda$7$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(569, 1, {}, Search$lambda$7$Type);
_.execute_0 = function execute_5(){
  return $setDisplay_0($style(this.$$outer_0), 'none') , false;
}
;
var Lorg_dominokit_domino_ui_search_Search$lambda$7$Type_2_classLit = createForClass('org.dominokit.domino.ui.search', 'Search/lambda$7$Type', 569);
function $clinit_Color(){
  $clinit_Color = emptyMethod;
  RED = new Color$1;
  INDIGO = new Color$41;
  BLUE = new Color$51;
}

var BLUE, INDIGO, RED;
function Color$1(){
}

defineClass(394, 1, {}, Color$1);
_.getName = function getName_0(){
  return 'RED';
}
;
_.getStyle = function getStyle_3(){
  return 'col-red';
}
;
var Lorg_dominokit_domino_ui_style_Color$1_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Color/1', 394);
function Color$41(){
}

defineClass(395, 1, {}, Color$41);
_.getName = function getName_1(){
  return 'INDIGO';
}
;
_.getStyle = function getStyle_4(){
  return 'col-indigo';
}
;
var Lorg_dominokit_domino_ui_style_Color$41_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Color/41', 395);
function Color$51(){
}

defineClass(396, 1, {}, Color$51);
_.getName = function getName_2(){
  return 'BLUE';
}
;
_.getStyle = function getStyle_5(){
  return 'col-blue';
}
;
var Lorg_dominokit_domino_ui_style_Color$51_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Color/51', 396);
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

defineClass(431, 1, {}, ColorScheme$1);
_.color_1 = function color_1(){
  return $clinit_Color() , RED;
}
;
var Lorg_dominokit_domino_ui_style_ColorScheme$1_2_classLit = createForClass('org.dominokit.domino.ui.style', 'ColorScheme/1', 431);
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

defineClass(432, 1, {}, ColorScheme$5);
_.color_1 = function color_2(){
  return $clinit_Color() , INDIGO;
}
;
var Lorg_dominokit_domino_ui_style_ColorScheme$5_2_classLit = createForClass('org.dominokit.domino.ui.style', 'ColorScheme/5', 432);
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

function of_1(level){
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

function values_12(){
  $clinit_Elevation();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_style_Elevation_2_classLit, 1), $intern_0, 20, 0, [NONE, LEVEL_0, LEVEL_1, LEVEL_2, LEVEL_3, LEVEL_4, LEVEL_5, LEVEL_6, LEVEL_7, LEVEL_8, LEVEL_9, LEVEL_10, LEVEL_11, LEVEL_12, LEVEL_13, LEVEL_14, LEVEL_15, LEVEL_16, LEVEL_17, LEVEL_18, LEVEL_19, LEVEL_20, LEVEL_21, LEVEL_22, LEVEL_23, LEVEL_24]);
}

defineClass(20, 17, {4:1, 28:1, 17:1, 20:1}, Elevation);
var LEVEL_0, LEVEL_1, LEVEL_10, LEVEL_11, LEVEL_12, LEVEL_13, LEVEL_14, LEVEL_15, LEVEL_16, LEVEL_17, LEVEL_18, LEVEL_19, LEVEL_2, LEVEL_20, LEVEL_21, LEVEL_22, LEVEL_23, LEVEL_24, LEVEL_3, LEVEL_4, LEVEL_5, LEVEL_6, LEVEL_7, LEVEL_8, LEVEL_9, NONE;
var Lorg_dominokit_domino_ui_style_Elevation_2_classLit = createForEnum('org.dominokit.domino.ui.style', 'Elevation', 20, values_12);
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

function $setHeight(this$static, height){
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

function $setMarginTop_0(this$static){
  this$static.element.style.setProperty('margin-top', '0px');
  return this$static;
}

function $setMinHeight(this$static, height){
  this$static.element.style.setProperty('min-height', height);
  return this$static;
}

function $setPaddingBottom(this$static, padding){
  this$static.element.style.setProperty('padding-bottom', padding);
  return this$static;
}

function $setPaddingLeft(this$static, padding){
  this$static.element.style.setProperty('padding-left', padding);
  return this$static;
}

function $setTransitionDuration_0(this$static, transactionDuration){
  return this$static.element.style.setProperty('transaction-duration', transactionDuration) , this$static;
}

function $setZIndex_0(this$static, zindex){
  this$static.element.style.setProperty('z-index', zindex + '');
  return this$static;
}

function Style(element){
  this.element = element.element_3();
}

defineClass(29, 1, $intern_23, Style);
_.element_3 = function element_32(){
  return this.element;
}
;
var Lorg_dominokit_domino_ui_style_Style_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Style', 29);
function Style$lambda$0$Type(htmlElement_0){
  this.htmlElement_0 = htmlElement_0;
}

defineClass(30, 1, $intern_23, Style$lambda$0$Type);
_.element_3 = function element_33(){
  return this.htmlElement_0;
}
;
var Lorg_dominokit_domino_ui_style_Style$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Style/lambda$0$Type', 30);
function $clinit_Unit(){
  $clinit_Unit = emptyMethod;
  px = new Unit('px', 0, new Unit$lambda$0$Type);
  q = new Unit('q', 1, new Unit$lambda$3$Type);
  mm = new Unit('mm', 2, new Unit$lambda$4$Type);
  cm = new Unit('cm', 3, new Unit$lambda$5$Type);
  in_0 = new Unit('in', 4, new Unit$lambda$6$Type);
  pt = new Unit('pt', 5, new Unit$lambda$7$Type);
  pc = new Unit('pc', 6, new Unit$lambda$8$Type);
  em = new Unit('em', 7, new Unit$lambda$9$Type);
  rem_0 = new Unit('rem', 8, new Unit$lambda$10$Type);
  ex_0 = new Unit('ex', 9, new Unit$lambda$11$Type);
  ch_1 = new Unit('ch', 10, new Unit$lambda$12$Type);
  vw = new Unit('vw', 11, new Unit$lambda$13$Type);
  vh = new Unit('vh', 12, new Unit$lambda$2$Type);
  percent = new Unit('percent', 13, new Unit$lambda$1$Type);
  none = new Unit('none', 14, new Unit$lambda$14$Type);
}

function $of(this$static, value_0){
  return this$static.unitFormatter.format(value_0);
}

function Unit(enum$name, enum$ordinal, unitFormatter){
  Enum.call(this, enum$name, enum$ordinal);
  this.unitFormatter = unitFormatter;
}

function values_13(){
  $clinit_Unit();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_style_Unit_2_classLit, 1), $intern_0, 36, 0, [px, q, mm, cm, in_0, pt, pc, em, rem_0, ex_0, ch_1, vw, vh, percent, none]);
}

defineClass(36, 17, {4:1, 28:1, 17:1, 36:1}, Unit);
var ch_1, cm, em, ex_0, in_0, mm, none, pc, percent, pt, px, q, rem_0, vh, vw;
var Lorg_dominokit_domino_ui_style_Unit_2_classLit = createForEnum('org.dominokit.domino.ui.style', 'Unit', 36, values_13);
function Unit$lambda$0$Type(){
}

defineClass(589, 1, {}, Unit$lambda$0$Type);
_.format = function format(value_0){
  return $clinit_Unit() , value_0 + 'px';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$0$Type', 589);
function Unit$lambda$1$Type(){
}

defineClass(602, 1, {}, Unit$lambda$1$Type);
_.format = function format_0(value_0){
  return $clinit_Unit() , value_0 + '%';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$1$Type', 602);
function Unit$lambda$10$Type(){
}

defineClass(597, 1, {}, Unit$lambda$10$Type);
_.format = function format_1(value_0){
  return $clinit_Unit() , value_0 + 'rem';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$10$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$10$Type', 597);
function Unit$lambda$11$Type(){
}

defineClass(598, 1, {}, Unit$lambda$11$Type);
_.format = function format_2(value_0){
  return $clinit_Unit() , value_0 + 'ex';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$11$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$11$Type', 598);
function Unit$lambda$12$Type(){
}

defineClass(599, 1, {}, Unit$lambda$12$Type);
_.format = function format_3(value_0){
  return $clinit_Unit() , value_0 + 'ch';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$12$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$12$Type', 599);
function Unit$lambda$13$Type(){
}

defineClass(600, 1, {}, Unit$lambda$13$Type);
_.format = function format_4(value_0){
  return $clinit_Unit() , value_0 + 'vw';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$13$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$13$Type', 600);
function Unit$lambda$14$Type(){
}

defineClass(603, 1, {}, Unit$lambda$14$Type);
_.format = function format_5(value_0){
  return $clinit_Unit() , value_0 + '';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$14$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$14$Type', 603);
function Unit$lambda$2$Type(){
}

defineClass(601, 1, {}, Unit$lambda$2$Type);
_.format = function format_6(value_0){
  return $clinit_Unit() , value_0 + 'vh';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$2$Type', 601);
function Unit$lambda$3$Type(){
}

defineClass(590, 1, {}, Unit$lambda$3$Type);
_.format = function format_7(value_0){
  return $clinit_Unit() , value_0 + 'q';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$3$Type', 590);
function Unit$lambda$4$Type(){
}

defineClass(591, 1, {}, Unit$lambda$4$Type);
_.format = function format_8(value_0){
  return $clinit_Unit() , value_0 + 'mm';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$4$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$4$Type', 591);
function Unit$lambda$5$Type(){
}

defineClass(592, 1, {}, Unit$lambda$5$Type);
_.format = function format_9(value_0){
  return $clinit_Unit() , value_0 + 'cm';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$5$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$5$Type', 592);
function Unit$lambda$6$Type(){
}

defineClass(593, 1, {}, Unit$lambda$6$Type);
_.format = function format_10(value_0){
  return $clinit_Unit() , value_0 + 'in';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$6$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$6$Type', 593);
function Unit$lambda$7$Type(){
}

defineClass(594, 1, {}, Unit$lambda$7$Type);
_.format = function format_11(value_0){
  return $clinit_Unit() , value_0 + 'pt';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$7$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$7$Type', 594);
function Unit$lambda$8$Type(){
}

defineClass(595, 1, {}, Unit$lambda$8$Type);
_.format = function format_12(value_0){
  return $clinit_Unit() , value_0 + 'pc';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$8$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$8$Type', 595);
function Unit$lambda$9$Type(){
}

defineClass(596, 1, {}, Unit$lambda$9$Type);
_.format = function format_13(value_0){
  return $clinit_Unit() , value_0 + 'em';
}
;
var Lorg_dominokit_domino_ui_style_Unit$lambda$9$Type_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Unit/lambda$9$Type', 596);
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

function values_14(){
  $clinit_WaveColor();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_style_WaveColor_2_classLit, 1), $intern_0, 24, 0, [RED_1, PINK, PURPLE, DEEP_PURPLE, INDIGO_1, BLUE_0, LIGHT_BLUE, CYAN, TEAL, GREEN, LIGHT_GREEN, LIME, YELLOW, AMBER, ORANGE, DEEP_ORANGE, BROWN, GREY, BLUE_GREY, BLACK, WHITE, LIGHT, THEME]);
}

defineClass(24, 17, {4:1, 28:1, 17:1, 24:1}, WaveColor);
var AMBER, BLACK, BLUE_0, BLUE_GREY, BROWN, CYAN, DEEP_ORANGE, DEEP_PURPLE, GREEN, GREY, INDIGO_1, LIGHT, LIGHT_BLUE, LIGHT_GREEN, LIME, ORANGE, PINK, PURPLE, RED_1, TEAL, THEME, WHITE, YELLOW;
var Lorg_dominokit_domino_ui_style_WaveColor_2_classLit = createForEnum('org.dominokit.domino.ui.style', 'WaveColor', 24, values_14);
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

function values_15(){
  $clinit_WaveStyle();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_style_WaveStyle_2_classLit, 1), $intern_0, 94, 0, [FLOAT, CIRCLE, RIPPLE, BLOCK]);
}

defineClass(94, 17, {4:1, 28:1, 17:1, 94:1}, WaveStyle);
var BLOCK, CIRCLE, FLOAT, RIPPLE;
var Lorg_dominokit_domino_ui_style_WaveStyle_2_classLit = createForEnum('org.dominokit.domino.ui.style', 'WaveStyle', 94, values_15);
function $convertStyle(rippleStyle){
  var style;
  style = new StringBuilder;
  $forEach_3(rippleStyle, makeLambdaFunction(Waves$lambda$0$Type.prototype.onKey, Waves$lambda$0$Type, [style, rippleStyle]));
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
  $schedule_0(this$static.delayTimer, 300);
}

function $stopCurrentWave(this$static){
  !!this$static.delayTimer && $cancel_1(this$static.delayTimer);
  !!this$static.removeTimer && $cancel_1(this$static.removeTimer);
  !!this$static.ripple && $remove_0(this$static.ripple);
}

function Waves(target){
  this.wavesEventListener = new Waves$WavesEventListener(this);
  this.target_0 = target;
}

function lambda$0_6(style_0, rippleStyle_1, key_2){
  return $append_3($append_3($append_3((style_0.string += '' + key_2 , style_0), ':'), castToString(rippleStyle_1[key_2])), ';');
}

defineClass(453, 1, $intern_23, Waves);
_.element_3 = function element_34(){
  return this.target_0.wrappedElement;
}
;
var Lorg_dominokit_domino_ui_style_Waves_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Waves', 453);
function Waves$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(456, 101, {}, Waves$1);
_.run = function run_9(){
  this.this$01.rippleStyle['opacity '] = '0';
  $setAttribute_0(this.this$01.ripple, 'style', $convertStyle(this.this$01.rippleStyle));
  this.this$01.removeTimer = new Waves$1$1(this);
  $schedule_0(this.this$01.removeTimer, 750);
}
;
var Lorg_dominokit_domino_ui_style_Waves$1_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Waves/1', 456);
function Waves$1$1(this$1){
  this.this$11 = this$1;
  Timer.call(this);
}

defineClass(457, 101, {}, Waves$1$1);
_.run = function run_10(){
  $removeCss(this.this$11.this$01.ripple, 'waves-rippling');
  $remove_0(this.this$11.this$01.ripple);
}
;
var Lorg_dominokit_domino_ui_style_Waves$1$1_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Waves/1/1', 457);
function Waves$ElementOffset(){
}

defineClass(454, 1, {}, Waves$ElementOffset);
_.left_0 = 0;
_.top_0 = 0;
var Lorg_dominokit_domino_ui_style_Waves$ElementOffset_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Waves/ElementOffset', 454);
function Waves$WavesEventListener(this$0){
  this.this$01 = this$0;
}

defineClass(455, 1, {}, Waves$WavesEventListener);
_.handleEvent = function handleEvent_44(evt){
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
var Lorg_dominokit_domino_ui_style_Waves$WavesEventListener_2_classLit = createForClass('org.dominokit.domino.ui.style', 'Waves/WavesEventListener', 455);
function Waves$lambda$0$Type(style_0, rippleStyle_1){
  this.style_0 = style_0;
  this.rippleStyle_1 = rippleStyle_1;
}

defineClass(690, $wnd.Function, {}, Waves$lambda$0$Type);
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

defineClass(150, 1, {}, WavesSupport);
var Lorg_dominokit_domino_ui_style_WavesSupport_2_classLit = createForClass('org.dominokit.domino.ui.style', 'WavesSupport', 150);
function $clinit_Theme(){
  $clinit_Theme = emptyMethod;
  themeChangeHandlers = new ArrayList;
  $clinit_ColorScheme();
  INDIGO_2 = INDIGO_0;
  currentTheme = new Theme(RED_0);
}

function $apply_1(this$static){
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

defineClass(122, 1, {}, Theme);
var INDIGO_2, currentTheme, themeChangeHandlers;
var Lorg_dominokit_domino_ui_themes_Theme_2_classLit = createForClass('org.dominokit.domino.ui.themes', 'Theme', 122);
function Theme$lambda$0$Type(){
}

defineClass(439, 1, $intern_7, Theme$lambda$0$Type);
_.accept = function accept_61(arg0){
  throwClassCastExceptionUnlessNull(arg0);
  null.$_nullMethod();
}
;
var Lorg_dominokit_domino_ui_themes_Theme$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.themes', 'Theme/lambda$0$Type', 439);
function $clinit_ToggleTarget(){
  $clinit_ToggleTarget = emptyMethod;
  ANY = new ToggleTarget('ANY', 0, 'tgl-any');
  ICON = new ToggleTarget('ICON', 1, 'tgl-icon');
}

function ToggleTarget(enum$name, enum$ordinal, style){
  Enum.call(this, enum$name, enum$ordinal);
  this.style_0 = style;
}

function values_16(){
  $clinit_ToggleTarget();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_tree_ToggleTarget_2_classLit, 1), $intern_0, 128, 0, [ANY, ICON]);
}

defineClass(128, 17, {4:1, 28:1, 17:1, 128:1}, ToggleTarget);
var ANY, ICON;
var Lorg_dominokit_domino_ui_tree_ToggleTarget_2_classLit = createForEnum('org.dominokit.domino.ui.tree', 'ToggleTarget', 128, values_16);
function $enableSearch(this$static){
  this$static.search = $onClose_0($onSearch(castTo($styler(new Search, new Tree$lambda$3$Type), 155), new Tree$0methodref$filter$Type(this$static)), new Tree$1methodref$clearFilter$Type(this$static));
  this$static.searchIcon = castTo($setCssProperty(castTo($addCss($setMarginTop(castTo($setMarginBottom(create_8('search'), '0px'), 77)), 'pull-right'), 77), 'cursor', 'pointer'), 77);
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
  $activate_0(this$static.activeTreeItem);
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
  '\u6211\u7684\u6587\u4EF6\u5939'.length == 0 && $hide(new DominoElement(this.header));
  this.title_0.textContent = '\u6211\u7684\u6587\u4EF6\u5939';
}

function lambda$13(searchToken_0, treeItem_1){
  return $filter_3(treeItem_1, searchToken_0);
}

defineClass(553, 9, $intern_16, Tree);
_.element_3 = function element_35(){
  return this.menu;
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
var Lorg_dominokit_domino_ui_tree_Tree_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'Tree', 553);
function Tree$0methodref$filter$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(556, 1, {}, Tree$0methodref$filter$Type);
_.onSearch = function onSearch_0(arg0){
  $filter_1(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_tree_Tree$0methodref$filter$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'Tree/0methodref$filter$Type', 556);
function Tree$1methodref$clearFilter$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(557, 1, {}, Tree$1methodref$clearFilter$Type);
_.onClose = function onClose_0(){
  $forEach_0(this.$$outer_0.subItems, new Tree$5methodref$clearFilter$Type);
}
;
var Lorg_dominokit_domino_ui_tree_Tree$1methodref$clearFilter$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'Tree/1methodref$clearFilter$Type', 557);
function Tree$5methodref$clearFilter$Type(){
}

defineClass(559, 1, $intern_7, Tree$5methodref$clearFilter$Type);
_.accept = function accept_62(arg0){
  $clearFilter(castTo(arg0, 25));
}
;
var Lorg_dominokit_domino_ui_tree_Tree$5methodref$clearFilter$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'Tree/5methodref$clearFilter$Type', 559);
function $filter_2(arg0, arg1){
  return $indexOf(arg0.title_0.toLowerCase(), $toString_1(arg1.toLowerCase())) != -1;
}

function Tree$lambda$0$Type(){
}

defineClass(554, 1, {}, Tree$lambda$0$Type);
var Lorg_dominokit_domino_ui_tree_Tree$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'Tree/lambda$0$Type', 554);
function Tree$lambda$13$Type(searchToken_0){
  this.searchToken_0 = searchToken_0;
}

defineClass(560, 1, $intern_7, Tree$lambda$13$Type);
_.accept = function accept_63(arg0){
  lambda$13(this.searchToken_0, castTo(arg0, 25));
}
;
var Lorg_dominokit_domino_ui_tree_Tree$lambda$13$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'Tree/lambda$13$Type', 560);
function Tree$lambda$14$Type(){
}

defineClass(198, 1, $intern_7, Tree$lambda$14$Type);
_.accept = function accept_64(arg0){
  throwClassCastExceptionUnlessNull(arg0);
  null.$_nullMethod();
}
;
var Lorg_dominokit_domino_ui_tree_Tree$lambda$14$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'Tree/lambda$14$Type', 198);
function Tree$lambda$3$Type(){
}

defineClass(555, 1, {}, Tree$lambda$3$Type);
_.applyStyles = function applyStyles_1(arg0){
  $setHeight(arg0, $of(($clinit_Unit() , px), valueOf(40)));
}
;
var Lorg_dominokit_domino_ui_tree_Tree$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'Tree/lambda$3$Type', 555);
function Tree$lambda$6$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(558, 1, {}, Tree$lambda$6$Type);
_.handleEvent = function handleEvent_45(arg0){
  $open_1(this.$$outer_0.search);
}
;
var Lorg_dominokit_domino_ui_tree_Tree$lambda$6$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'Tree/lambda$6$Type', 558);
function $activate_0(this$static){
  $addCss_1(new Style(new Style$lambda$0$Type(this$static.element)), 'active');
  (!this$static.expandIcon || $isCollapsed(this$static.collapsible) || this$static.subItems.size_0 == 0) && $replaceIcon(this$static, this$static.activeIcon);
}

function $activateItem(this$static){
  if (this$static.activeTreeItem) {
    $deactivate(this$static.activeTreeItem);
    this$static.activeTreeItem = null;
  }
  this$static.parent_0.setActiveItem(this$static);
}

function $clearFilter(this$static){
  !!this$static.originalState && $wnd.goog.global.requestAnimationFrame(makeLambdaFunction(TreeItem$lambda$8$Type.prototype.onInvoke_1, TreeItem$lambda$8$Type, [this$static]));
  $removeCssProperty_0(new Style(new Style$lambda$0$Type(this$static.element)), 'display');
  $forEach(this$static.subItems, new TreeItem$1methodref$clearFilter$Type);
}

function $deactivate(this$static){
  $removeCss_1(new Style(new Style$lambda$0$Type(this$static.element)), 'active');
  (!this$static.expandIcon || $isCollapsed(this$static.collapsible) || this$static.subItems.size_0 == 0) && $restoreIcon(this$static);
  if (this$static.subItems.size_0 != 0) {
    $forEach(this$static.subItems, new TreeItem$0methodref$deactivate$Type);
    this$static.parent_0.getTreeRoot().autoCollapse && $hide_0(this$static.collapsible);
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

function $lambda$0_12(this$static, evt_0){
  evt_0.stopPropagation();
  $toggle_0(this$static);
  $activateItem(this$static);
}

function $lambda$1_13(this$static, evt_0){
  evt_0.stopPropagation();
  $toggle_0(this$static);
  $activateItem(this$static);
}

function $lambda$3_9(this$static){
  $replaceIcon(this$static, this$static.expandIcon);
}

function $lambda$4_7(this$static){
  ($clinit_ToggleTarget() , ANY) == this$static.toggleTarget && this$static.subItems.size_0 != 0 && $toggle_0(this$static);
  $activateItem(this$static);
}

function $lambda$7_1(this$static, evt_0){
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

function $remove_10(this$static){
  if (this$static.parent_0.getSubItems().contains(this$static)) {
    this$static.parent_0.getSubItems().remove(this$static);
    this$static.parent_0.getSubItems().isEmpty() && instanceOf(this$static.parent_0, 25) && $removeCss_1($style(castTo(this$static.parent_0, 25)), 'tree-item-parent');
  }
  return this$static.element.remove() , castTo(this$static.element_0, 25);
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
    $activate_0(this$static.activeTreeItem);
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
  this.originalIcon = $setColor_2(create_8(icon.name_0), icon.color_0);
  $equals_1(icon.icon_0.wrappedElement.style.visibility, 'hidden') && $setCssProperty(this.originalIcon, 'visibility', 'hidden');
  $addClickListener_0(this.originalIcon, new TreeItem$lambda$7$Type(this));
  this.titleElement = castTo($textContent(castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('span'), $wnd.HTMLElement))).element), 'title'), 3), title_0), 3).wrappedElement;
  toggleContainer = castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('span'), $wnd.HTMLElement))).element), 'tree-tgl-icn'), 3);
  this.anchorElement = castTo($appendChild_0(castTo($appendChild_0(castTo($appendChild_0(castTo($appendChild_0(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('a'), $wnd.HTMLElement))).element), this.icon_0), 3), $appendChild($style_0(castTo($css(new DominoElement((new HtmlContentBuilder(castToNative(document_0.createElement('div'), $wnd.HTMLElement))).element), 'ellipsis-text'), 3), 'margin-top: 2px;'), this.titleElement)), 3), $appendChild_0(castTo($appendChild_0(toggleContainer, $addClickListener_0(castTo($clickable(castTo($css($setSize_1(new MdiIcon('mdi-plus'), ($clinit_MdiIcon$MdiSize() , mdi18)), 'tree-tgl-collapsed'), 74)), 74), new TreeItem$lambda$0$Type(this))), 3), $addClickListener_0(castTo($clickable(castTo($css($setSize_1(new MdiIcon('mdi-minus'), mdi18), 'tree-tgl-expanded'), 74)), 74), new TreeItem$lambda$1$Type(this)))), 3), this.indicatorContainer), 3);
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

defineClass(25, 187, {25:1, 9:1, 13:1}, TreeItem);
_.element_3 = function element_36(){
  return this.element;
}
;
_.remove_0 = function remove_26(){
  return $remove_10(this);
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
var Lorg_dominokit_domino_ui_tree_TreeItem_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem', 25);
function TreeItem$0methodref$deactivate$Type(){
}

defineClass(577, 1, $intern_7, TreeItem$0methodref$deactivate$Type);
_.accept = function accept_65(arg0){
  $deactivate(castTo(arg0, 25));
}
;
var Lorg_dominokit_domino_ui_tree_TreeItem$0methodref$deactivate$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/0methodref$deactivate$Type', 577);
function TreeItem$1methodref$clearFilter$Type(){
}

defineClass(579, 1, $intern_7, TreeItem$1methodref$clearFilter$Type);
_.accept = function accept_66(arg0){
  $clearFilter(castTo(arg0, 25));
}
;
var Lorg_dominokit_domino_ui_tree_TreeItem$1methodref$clearFilter$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/1methodref$clearFilter$Type', 579);
function TreeItem$OriginalState(expanded){
  this.expanded = expanded;
}

defineClass(570, 1, {}, TreeItem$OriginalState);
_.expanded = false;
var Lorg_dominokit_domino_ui_tree_TreeItem$OriginalState_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/OriginalState', 570);
function TreeItem$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(571, 1, {}, TreeItem$lambda$0$Type);
_.handleEvent = function handleEvent_46(arg0){
  $lambda$0_12(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_tree_TreeItem$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/lambda$0$Type', 571);
function TreeItem$lambda$1$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(572, 1, {}, TreeItem$lambda$1$Type);
_.handleEvent = function handleEvent_47(arg0){
  $lambda$1_13(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_tree_TreeItem$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/lambda$1$Type', 572);
function TreeItem$lambda$10$Type(searchToken_0){
  this.searchToken_0 = searchToken_0;
}

defineClass(580, 1, {}, TreeItem$lambda$10$Type);
_.test_0 = function test_20(arg0){
  return lambda$10(this.searchToken_0, castTo(arg0, 25));
}
;
var Lorg_dominokit_domino_ui_tree_TreeItem$lambda$10$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/lambda$10$Type', 580);
function TreeItem$lambda$13$Type(level_0){
  this.level_0 = level_0;
}

defineClass(581, 1, $intern_7, TreeItem$lambda$13$Type);
_.accept = function accept_67(arg0){
  lambda$13_0(this.level_0, castTo(arg0, 25));
}
;
_.level_0 = 0;
var Lorg_dominokit_domino_ui_tree_TreeItem$lambda$13$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/lambda$13$Type', 581);
function TreeItem$lambda$14$Type(levelPadding_0){
  this.levelPadding_0 = levelPadding_0;
}

defineClass(582, 1, $intern_7, TreeItem$lambda$14$Type);
_.accept = function accept_68(arg0){
  lambda$14(this.levelPadding_0, castTo(arg0, 25));
}
;
_.levelPadding_0 = 0;
var Lorg_dominokit_domino_ui_tree_TreeItem$lambda$14$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/lambda$14$Type', 582);
function TreeItem$lambda$2$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(573, 1, {160:1}, TreeItem$lambda$2$Type);
_.apply_1 = function apply_21(){
  $restoreIcon(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_tree_TreeItem$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/lambda$2$Type', 573);
function TreeItem$lambda$3$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(574, 1, {617:1}, TreeItem$lambda$3$Type);
var Lorg_dominokit_domino_ui_tree_TreeItem$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/lambda$3$Type', 574);
function TreeItem$lambda$4$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(575, 1, {}, TreeItem$lambda$4$Type);
_.handleEvent = function handleEvent_48(arg0){
  $lambda$4_7(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_tree_TreeItem$lambda$4$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/lambda$4$Type', 575);
function TreeItem$lambda$5$Type(toggleTarget_0){
  this.toggleTarget_0 = toggleTarget_0;
}

defineClass(576, 1, $intern_7, TreeItem$lambda$5$Type);
_.accept = function accept_69(arg0){
  lambda$5_1(this.toggleTarget_0, castTo(arg0, 25));
}
;
var Lorg_dominokit_domino_ui_tree_TreeItem$lambda$5$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/lambda$5$Type', 576);
function TreeItem$lambda$7$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(578, 1, {}, TreeItem$lambda$7$Type);
_.handleEvent = function handleEvent_49(arg0){
  $lambda$7_1(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_tree_TreeItem$lambda$7$Type_2_classLit = createForClass('org.dominokit.domino.ui.tree', 'TreeItem/lambda$7$Type', 578);
function TreeItem$lambda$8$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(692, $wnd.Function, {}, TreeItem$lambda$8$Type);
_.onInvoke_1 = function onInvoke_4(arg0){
  $lambda$8_0(this.$$outer_0);
}
;
function Paragraph(){
  BaseDominoElement.call(this);
  this.element = new DominoElement((new HtmlContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('p'), $wnd.HTMLElement))).element);
  $setTextContent(this.element, 'This can not reverted!');
  $init(this, this);
}

defineClass(408, 9, $intern_16, Paragraph);
_.element_3 = function element_37(){
  return castToNative(this.element.wrappedElement, $wnd.HTMLParagraphElement);
}
;
var Lorg_dominokit_domino_ui_typography_Paragraph_2_classLit = createForClass('org.dominokit.domino.ui.typography', 'Paragraph', 408);
function BaseDominoElement$0methodref$uncheckedCast$Type(){
}

defineClass(333, 1, {}, BaseDominoElement$0methodref$uncheckedCast$Type);
_.apply_0 = function apply_22(arg0){
  return arg0;
}
;
var Lorg_dominokit_domino_ui_utils_BaseDominoElement$0methodref$uncheckedCast$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'BaseDominoElement/0methodref$uncheckedCast$Type', 333);
function BaseDominoElement$1methodref$of$Type(){
}

defineClass(334, 1, {}, BaseDominoElement$1methodref$of$Type);
_.apply_0 = function apply_23(arg0){
  return new DominoElement(castToNative(arg0, $wnd.HTMLElement));
}
;
var Lorg_dominokit_domino_ui_utils_BaseDominoElement$1methodref$of$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'BaseDominoElement/1methodref$of$Type', 334);
function BaseDominoElement$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(325, 1, $intern_27, BaseDominoElement$lambda$0$Type);
_.apply_1 = function apply_24(){
  $lambda$0_0(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_utils_BaseDominoElement$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'BaseDominoElement/lambda$0$Type', 325);
function BaseDominoElement$lambda$1$Type(){
}

defineClass(324, 1, $intern_27, BaseDominoElement$lambda$1$Type);
_.apply_1 = function apply_25(){
}
;
var Lorg_dominokit_domino_ui_utils_BaseDominoElement$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'BaseDominoElement/lambda$1$Type', 324);
function BaseDominoElement$lambda$2$Type($$outer_0, element_1){
  this.$$outer_0 = $$outer_0;
  this.element_1 = element_1;
}

defineClass(327, 1, $intern_27, BaseDominoElement$lambda$2$Type);
_.apply_1 = function apply_26(){
  $lambda$2(this.$$outer_0, this.element_1);
}
;
var Lorg_dominokit_domino_ui_utils_BaseDominoElement$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'BaseDominoElement/lambda$2$Type', 327);
function BaseDominoElement$lambda$3$Type(){
}

defineClass(326, 1, $intern_27, BaseDominoElement$lambda$3$Type);
_.apply_1 = function apply_27(){
}
;
var Lorg_dominokit_domino_ui_utils_BaseDominoElement$lambda$3$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'BaseDominoElement/lambda$3$Type', 326);
function BaseDominoElement$lambda$4$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(329, 1, {}, BaseDominoElement$lambda$4$Type);
_.handleEvent = function handleEvent_50(arg0){
  $lambda$4(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_utils_BaseDominoElement$lambda$4$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'BaseDominoElement/lambda$4$Type', 329);
function BaseDominoElement$lambda$5$Type(cevent_0){
  this.cevent_0 = cevent_0;
}

defineClass(328, 1, $intern_7, BaseDominoElement$lambda$5$Type);
_.accept = function accept_70(arg0){
  lambda$5(this.cevent_0, castTo(arg0, 64));
}
;
var Lorg_dominokit_domino_ui_utils_BaseDominoElement$lambda$5$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'BaseDominoElement/lambda$5$Type', 328);
function BaseDominoElement$lambda$6$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(331, 1, {}, BaseDominoElement$lambda$6$Type);
_.handleEvent = function handleEvent_51(arg0){
  $lambda$6(this.$$outer_0, arg0);
}
;
var Lorg_dominokit_domino_ui_utils_BaseDominoElement$lambda$6$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'BaseDominoElement/lambda$6$Type', 331);
function BaseDominoElement$lambda$7$Type(cevent_0){
  this.cevent_0 = cevent_0;
}

defineClass(330, 1, $intern_7, BaseDominoElement$lambda$7$Type);
_.accept = function accept_71(arg0){
  lambda$7(this.cevent_0, castTo(arg0, 64));
}
;
var Lorg_dominokit_domino_ui_utils_BaseDominoElement$lambda$7$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'BaseDominoElement/lambda$7$Type', 330);
function BaseDominoElement$lambda$8$Type(handler_0){
  this.handler_0 = handler_0;
}

defineClass(332, 1, $intern_22, BaseDominoElement$lambda$8$Type);
_.onObserved = function onObserved_7(arg0){
  this.handler_0.run();
}
;
var Lorg_dominokit_domino_ui_utils_BaseDominoElement$lambda$8$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'BaseDominoElement/lambda$8$Type', 332);
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
    mutationObserver = new $wnd.MutationObserver(makeLambdaFunction(BodyObserver$lambda$0$Type.prototype.onInvoke_3, BodyObserver$lambda$0$Type, []));
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

defineClass(688, $wnd.Function, {}, BodyObserver$lambda$0$Type);
_.onInvoke_3 = function onInvoke_5(arg0, arg1){
  return lambda$0_7(arg0);
}
;
function BodyObserver$lambda$1$Type(record_0){
  this.record_0 = record_0;
}

defineClass(437, 1, $intern_7, BodyObserver$lambda$1$Type);
_.accept = function accept_72(arg0){
  lambda$1_2(this.record_0, castTo(arg0, 3));
}
;
var Lorg_dominokit_domino_ui_utils_BodyObserver$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'BodyObserver/lambda$1$Type', 437);
function BodyObserver$lambda$2$Type(record_0){
  this.record_0 = record_0;
}

defineClass(438, 1, $intern_7, BodyObserver$lambda$2$Type);
_.accept = function accept_73(arg0){
  lambda$2_1(this.record_0, castTo(arg0, 3));
}
;
var Lorg_dominokit_domino_ui_utils_BodyObserver$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'BodyObserver/lambda$2$Type', 438);
function DominoElement(element){
  BaseDominoElement.call(this);
  this.wrappedElement = element;
  $init(this, this);
}

defineClass(3, 9, {9:1, 3:1, 13:1}, DominoElement);
_.element_3 = function element_38(){
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
  id_0 = ($apply_2(seedInit) , 'dui-' + SEED + counter);
  ++counter;
  return id_0;
}

var SEED, counter = 0, seedInit;
function DominoId$lambda$0$Type(){
}

defineClass(428, 1, $intern_27, DominoId$lambda$0$Type);
_.apply_1 = function apply_28(){
  $clinit_DominoId();
  SEED = (new $wnd.Date).getTime() + '-';
}
;
var Lorg_dominokit_domino_ui_utils_DominoId$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'DominoId/lambda$0$Type', 428);
function $clinit_DominoUIConfig(){
  $clinit_DominoUIConfig = emptyMethod;
  INSTANCE_12 = new DominoUIConfig;
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

defineClass(222, 1, {}, DominoUIConfig);
_.defaultButtonElevation = 1;
_.defaultModalElevation = 2;
_.defaultRequiredMessage = '* This field is required';
_.initialZIndex = 1;
_.zIndexIncrement = 1;
var INSTANCE_12;
var Lorg_dominokit_domino_ui_utils_DominoUIConfig_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'DominoUIConfig', 222);
function $appendRequiredIndicator(valueBox, requiredIndicator){
  !!$getLabelElement(valueBox) && $getLabelElement(valueBox).ref != null && $hasDirectChild(castTo($get_6($getLabelElement(valueBox)), 3), requiredIndicator) && $ifPresent($getLabelElement(valueBox), new DominoUIConfig$1$lambda$1$Type(requiredIndicator));
  $ifPresent($getLabelElement(valueBox), new DominoUIConfig$1$lambda$0$Type(requiredIndicator));
}

function $removeRequiredIndicator(valueBox, requiredIndicator){
  !!$getLabelElement(valueBox) && $getLabelElement(valueBox).ref != null && $hasDirectChild(castTo($get_6($getLabelElement(valueBox)), 3), requiredIndicator) && $ifPresent($getLabelElement(valueBox), new DominoUIConfig$1$lambda$1$Type(requiredIndicator));
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

defineClass(224, 1, $intern_7, DominoUIConfig$1$lambda$0$Type);
_.accept = function accept_74(arg0){
  lambda$0_8(this.requiredIndicator_0, castTo(arg0, 3));
}
;
var Lorg_dominokit_domino_ui_utils_DominoUIConfig$1$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'DominoUIConfig/1/lambda$0$Type', 224);
function DominoUIConfig$1$lambda$1$Type(requiredIndicator_0){
  this.requiredIndicator_0 = requiredIndicator_0;
}

defineClass(171, 1, $intern_7, DominoUIConfig$1$lambda$1$Type);
_.accept = function accept_75(arg0){
  lambda$1_3(this.requiredIndicator_0, castTo(arg0, 3));
}
;
var Lorg_dominokit_domino_ui_utils_DominoUIConfig$1$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'DominoUIConfig/1/lambda$1$Type', 171);
function DominoUIConfig$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(223, 1, {}, DominoUIConfig$lambda$0$Type);
_.getStyle = function getStyle_6(){
  return this.$$outer_0.fieldsStyle.getStyle();
}
;
var Lorg_dominokit_domino_ui_utils_DominoUIConfig$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'DominoUIConfig/lambda$0$Type', 223);
function $clinit_ElementUtil(){
  $clinit_ElementUtil = emptyMethod;
  $getNumberConstants(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_3));
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

defineClass(152, 1, {}, EventOptions);
var Lorg_dominokit_domino_ui_utils_EventOptions_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'EventOptions', 152);
function $apply_2(this$static){
  var entry, func, func$iterator, outerIter;
  this$static.function_0.apply_1();
  this$static.function_0 = new LazyInitializer$lambda$2$Type;
  this$static.doOnceFunction.apply_1();
  for (func$iterator = (outerIter = (new AbstractMap$1(this$static.functions.map_0)).this$01.entrySet().iterator() , new AbstractMap$1$1(outerIter)); func$iterator.val$outerIter2.hasNext_0();) {
    func = (entry = castTo(func$iterator.val$outerIter2.next_1(), 21) , castTo(entry.getKey(), 46));
    func.apply_1();
  }
}

function $lambda$0_13(this$static){
  var entry, func, func$iterator, outerIter;
  for (func$iterator = (outerIter = (new AbstractMap$1(this$static.doOnce.map_0)).this$01.entrySet().iterator() , new AbstractMap$1$1(outerIter)); func$iterator.val$outerIter2.hasNext_0();) {
    func = (entry = castTo(func$iterator.val$outerIter2.next_1(), 21) , castTo(entry.getKey(), 46));
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

defineClass(433, 1, {}, LazyInitializer);
var Lorg_dominokit_domino_ui_utils_LazyInitializer_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'LazyInitializer', 433);
function LazyInitializer$lambda$0$Type($$outer_0){
  this.$$outer_0 = $$outer_0;
}

defineClass(435, 1, $intern_27, LazyInitializer$lambda$0$Type);
_.apply_1 = function apply_29(){
  $lambda$0_13(this.$$outer_0);
}
;
var Lorg_dominokit_domino_ui_utils_LazyInitializer$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'LazyInitializer/lambda$0$Type', 435);
function LazyInitializer$lambda$1$Type(){
}

defineClass(434, 1, $intern_27, LazyInitializer$lambda$1$Type);
_.apply_1 = function apply_30(){
}
;
var Lorg_dominokit_domino_ui_utils_LazyInitializer$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'LazyInitializer/lambda$1$Type', 434);
function LazyInitializer$lambda$2$Type(){
}

defineClass(436, 1, $intern_27, LazyInitializer$lambda$2$Type);
_.apply_1 = function apply_31(){
}
;
var Lorg_dominokit_domino_ui_utils_LazyInitializer$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'LazyInitializer/lambda$2$Type', 436);
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

defineClass(400, 1, {}, PopupsCloser$lambda$0$Type);
_.handleEvent = function handleEvent_52(arg0){
  $clinit_PopupsCloser();
  $close_3();
}
;
var Lorg_dominokit_domino_ui_utils_PopupsCloser$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'PopupsCloser/lambda$0$Type', 400);
function PopupsCloser$lambda$1$Type(){
}

defineClass(401, 1, {}, PopupsCloser$lambda$1$Type);
_.handleEvent = function handleEvent_53(arg0){
  $clinit_PopupsCloser();
  touchMoved = true;
}
;
var Lorg_dominokit_domino_ui_utils_PopupsCloser$lambda$1$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'PopupsCloser/lambda$1$Type', 401);
function PopupsCloser$lambda$2$Type(){
}

defineClass(402, 1, {}, PopupsCloser$lambda$2$Type);
_.handleEvent = function handleEvent_54(arg0){
  $clinit_PopupsCloser();
  touchMoved || $close_3();
  touchMoved = false;
}
;
var Lorg_dominokit_domino_ui_utils_PopupsCloser$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'PopupsCloser/lambda$2$Type', 402);
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

defineClass(524, 1, {}, SwipeUtil$0methodref$preventDefault$Type);
_.handleEvent = function handleEvent_55(arg0){
  arg0.preventDefault();
}
;
var Lorg_dominokit_domino_ui_utils_SwipeUtil$0methodref$preventDefault$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'SwipeUtil/0methodref$preventDefault$Type', 524);
function SwipeUtil$SwipeData(){
}

defineClass(522, 1, {}, SwipeUtil$SwipeData);
_.allowedTime = 400;
_.distX = 0;
_.distY = 0;
_.elapsedTime = 0;
_.restraint = 100;
_.startTime = 0;
_.startX = 0;
_.startY = 0;
_.threshold = 100;
var Lorg_dominokit_domino_ui_utils_SwipeUtil$SwipeData_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'SwipeUtil/SwipeData', 522);
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

function values_17(){
  $clinit_SwipeUtil$SwipeDirection();
  return stampJavaTypeInfo(getClassLiteralForArray(Lorg_dominokit_domino_ui_utils_SwipeUtil$SwipeDirection_2_classLit, 1), $intern_0, 90, 0, [LEFT, RIGHT_0, UP, DOWN]);
}

defineClass(90, 17, {4:1, 28:1, 17:1, 90:1}, SwipeUtil$SwipeDirection);
var DOWN, LEFT, RIGHT_0, UP;
var Lorg_dominokit_domino_ui_utils_SwipeUtil$SwipeDirection_2_classLit = createForEnum('org.dominokit.domino.ui.utils', 'SwipeUtil/SwipeDirection', 90, values_17);
function SwipeUtil$lambda$0$Type(swipeData_0){
  this.swipeData_0 = swipeData_0;
}

defineClass(523, 1, {}, SwipeUtil$lambda$0$Type);
_.handleEvent = function handleEvent_56(arg0){
  lambda$0_9(this.swipeData_0, arg0);
}
;
var Lorg_dominokit_domino_ui_utils_SwipeUtil$lambda$0$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'SwipeUtil/lambda$0$Type', 523);
function SwipeUtil$lambda$2$Type(swipeData_0, direction_1, listener_2){
  this.swipeData_0 = swipeData_0;
  this.direction_1 = direction_1;
  this.listener_2 = listener_2;
}

defineClass(525, 1, {}, SwipeUtil$lambda$2$Type);
_.handleEvent = function handleEvent_57(arg0){
  lambda$2_2(this.swipeData_0, this.direction_1, this.listener_2, arg0);
}
;
var Lorg_dominokit_domino_ui_utils_SwipeUtil$lambda$2$Type_2_classLit = createForClass('org.dominokit.domino.ui.utils', 'SwipeUtil/lambda$2$Type', 525);
function of_2(content_0){
  if (content_0.length == 0) {
    return ($clinit_DomGlobal() , document_0).createTextNode('');
  }
  return ($clinit_DomGlobal() , document_0).createTextNode(content_0);
}

function $clinit_DominoRestConfig(){
  $clinit_DominoRestConfig = emptyMethod;
  new ConsoleLoggerAdapter(($ensureNamesAreInitialized(Lorg_dominokit_rest_DominoRestConfig_2_classLit) , Lorg_dominokit_rest_DominoRestConfig_2_classLit.typeName));
  new RequestSender;
  $clinit_AbstractRequestAsyncSender();
  new ArrayList;
  new ArrayList;
  new ArrayList;
}

var Lorg_dominokit_rest_DominoRestConfig_2_classLit = createForClass('org.dominokit.rest', 'DominoRestConfig', null);
function $clinit_AbstractRequestAsyncSender(){
  $clinit_AbstractRequestAsyncSender = emptyMethod;
  getLogger(($ensureNamesAreInitialized(Lorg_dominokit_rest_shared_request_RequestAsyncSender_2_classLit) , Lorg_dominokit_rest_shared_request_RequestAsyncSender_2_classLit.typeName));
}

function $clinit_RequestSender(){
  $clinit_RequestSender = emptyMethod;
  getLogger(($ensureNamesAreInitialized(Lorg_dominokit_rest_shared_request_RequestSender_2_classLit) , Lorg_dominokit_rest_shared_request_RequestSender_2_classLit.typeName));
}

function RequestSender(){
  $clinit_RequestSender();
  new Arrays$ArrayList(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['POST', 'PUT', 'PATCH']));
}

defineClass(232, 1, {}, RequestSender);
var Lorg_dominokit_rest_shared_request_RequestSender_2_classLit = createForClass('org.dominokit.rest.shared.request', 'RequestSender', 232);
function fromObject(obj){
  var throwable = of(obj);
}

defineClass(634, 1, {});
var Lorg_gwtproject_core_client_GWT_2_classLit = createForClass('org.gwtproject.core.client', 'GWT', 634);
function $scheduleFixedDelay(cmd){
  $clinit_DomGlobal();
  $wnd.goog.global.setTimeout(makeLambdaFunction(SchedulerImpl$1.prototype.onInvoke_0, SchedulerImpl$1, [cmd]), 50);
}

function SchedulerImpl$1(val$cmd){
  this.val$cmd1 = val$cmd;
  this.val$delayMs2 = 50;
}

defineClass(691, $wnd.Function, {}, SchedulerImpl$1);
_.onInvoke_0 = function onInvoke_6(){
  this.val$cmd1.execute_0() && ($clinit_DomGlobal() , $wnd.goog.global.setTimeout(this, this.val$delayMs2));
}
;
_.val$delayMs2 = 0;
function Event$Type(){
  this.index_0 = ++nextHashCode;
}

defineClass(68, 1, {68:1}, Event$Type);
_.hashCode_0 = function hashCode_20(){
  return this.index_0;
}
;
_.toString_0 = function toString_29(){
  return 'Event type';
}
;
_.index_0 = 0;
var nextHashCode = 0;
var Lorg_gwtproject_event_shared_Event$Type_2_classLit = createForClass('org.gwtproject.event.shared', 'Event/Type', 68);
defineClass(644, 1, {});
var Lorg_gwtproject_event_shared_EventBus_2_classLit = createForClass('org.gwtproject.event.shared', 'EventBus', 644);
function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList);
  $add(this$static.deferredDeltas, command);
}

function $doAdd(this$static, type_0, handler){
  var l;
  if (!type_0) {
    throw toJs(new NullPointerException_1('Cannot add a handler with a null type'));
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
        if (instanceOf($e0, 12)) {
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
  removed && l.isEmpty() && (sourceMap = castTo($get_2(this$static.map_0, type_0), 82) , castTo(sourceMap.remove(source), 32) , sourceMap.isEmpty() && $remove_1(this$static.map_0, type_0) , undefined);
}

function $ensureHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = castTo($computeIfAbsent(this$static.map_0, type_0, new SimpleEventBus$lambda$3$Type), 82);
  handlers = castTo(sourceMap.get(source), 32);
  if (!handlers) {
    handlers = new ArrayList;
    sourceMap.put(source, handlers);
  }
  return handlers;
}

function $getHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = castTo($get_2(this$static.map_0, type_0), 82);
  if (!sourceMap) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  handlers = castTo(sourceMap.get(source), 32);
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
        c = castTo($next_0(c$iterator), 614);
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

defineClass(246, 644, {}, SimpleEventBus);
_.firingDepth = 0;
var Lorg_gwtproject_event_shared_SimpleEventBus_2_classLit = createForClass('org.gwtproject.event.shared', 'SimpleEventBus', 246);
function $removeHandler_0(this$static){
  $doRemove(this$static.$$outer_0, this$static.type_1, this$static.source_2, this$static.handler_3);
}

function SimpleEventBus$lambda$0$Type($$outer_0, type_1, handler_3){
  this.$$outer_0 = $$outer_0;
  this.type_1 = type_1;
  this.source_2 = null;
  this.handler_3 = handler_3;
}

defineClass(247, 1, {658:1}, SimpleEventBus$lambda$0$Type);
var Lorg_gwtproject_event_shared_SimpleEventBus$lambda$0$Type_2_classLit = createForClass('org.gwtproject.event.shared', 'SimpleEventBus/lambda$0$Type', 247);
function SimpleEventBus$lambda$1$Type($$outer_0, type_1, handler_3){
  this.$$outer_0 = $$outer_0;
  this.type_1 = type_1;
  this.source_2 = null;
  this.handler_3 = handler_3;
}

defineClass(248, 1, {614:1}, SimpleEventBus$lambda$1$Type);
_.execute = function execute_6(){
  $doAddNow(this.$$outer_0, this.type_1, this.source_2, this.handler_3);
}
;
var Lorg_gwtproject_event_shared_SimpleEventBus$lambda$1$Type_2_classLit = createForClass('org.gwtproject.event.shared', 'SimpleEventBus/lambda$1$Type', 248);
function SimpleEventBus$lambda$2$Type($$outer_0, type_1, source_2, handler_3){
  this.$$outer_0 = $$outer_0;
  this.type_1 = type_1;
  this.source_2 = source_2;
  this.handler_3 = handler_3;
}

defineClass(249, 1, {614:1}, SimpleEventBus$lambda$2$Type);
_.execute = function execute_7(){
  $doRemoveNow(this.$$outer_0, this.type_1, this.source_2, this.handler_3);
}
;
var Lorg_gwtproject_event_shared_SimpleEventBus$lambda$2$Type_2_classLit = createForClass('org.gwtproject.event.shared', 'SimpleEventBus/lambda$2$Type', 249);
function SimpleEventBus$lambda$3$Type(){
}

defineClass(250, 1, {}, SimpleEventBus$lambda$3$Type);
_.apply_0 = function apply_32(arg0){
  return castTo(arg0, 68) , new HashMap;
}
;
var Lorg_gwtproject_event_shared_SimpleEventBus$lambda$3$Type_2_classLit = createForClass('org.gwtproject.event.shared', 'SimpleEventBus/lambda$3$Type', 250);
function UmbrellaException(causes){
  var cause, cause$iterator, entry, entry0, i, outerIter, outerIter0;
  RuntimeException_1.call(this, makeMessage(causes), causes.map_0.size() == 0?null:(outerIter0 = (new AbstractMap$1(causes.map_0)).this$01.entrySet().iterator() , entry0 = castTo((new AbstractMap$1$1(outerIter0)).val$outerIter2.next_1(), 21) , castTo(entry0.getKey(), 12)));
  i = 0;
  for (cause$iterator = (outerIter = (new AbstractMap$1(causes.map_0)).this$01.entrySet().iterator() , new AbstractMap$1$1(outerIter)); cause$iterator.val$outerIter2.hasNext_0();) {
    cause = (entry = castTo(cause$iterator.val$outerIter2.next_1(), 21) , castTo(entry.getKey(), 12));
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
    t = (entry = castTo(t$iterator.val$outerIter2.next_1(), 21) , castTo(entry.getKey(), 12));
    first?(first = false):(b.string += '; ' , b);
    $append_3(b, t.getMessage());
  }
  return b.string;
}

defineClass(361, 15, $intern_2, UmbrellaException);
var Lorg_gwtproject_event_shared_UmbrellaException_2_classLit = createForClass('org.gwtproject.event.shared', 'UmbrellaException', 361);
function $clinit_DateTimeFormat(){
  $clinit_DateTimeFormat = emptyMethod;
  new HashMap;
}

function $addPart(this$static, buf, count){
  var oldLength;
  if (buf.string.length > 0) {
    $add(this$static.patternParts, new DateTimeFormat$PatternPart(buf.string, count));
    oldLength = buf.string.length;
    0 < oldLength?(buf.string = $substring_0(buf.string, 0, 0)):0 > oldLength && (buf.string += valueOf_1(initUnidimensionalArray(C_classLit, $intern_0, 156, -oldLength, 15, 1)));
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
          throw toJs(new IllegalArgumentException_0("Missing trailing '"));
        }
        j + 1 < n && $charAt(this$static.pattern, j + 1) == 39?++j:(trailQuote = true);
        $append_3(toAppendTo, $substring_0(this$static.pattern, i, j));
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
    value_0 = 1000 - toInt_0(mod(neg_0(time), 1000));
    value_0 == 1000 && (value_0 = 0);
  }
   else {
    value_0 = toInt_0(mod(time, 1000));
  }
  if (count == 1) {
    value_0 = $wnd.Math.min((value_0 + 50) / 100 | 0, 9);
    buf.string += String.fromCharCode(48 + value_0 & $intern_4);
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
      $append_3(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'])[value_0]);
      break;
    case 4:
      $append_3(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])[value_0]);
      break;
    case 3:
      $append_3(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])[value_0]);
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
    if ($isNumeric(castTo($get_3(this$static.patternParts, i), 106))) {
      if (!abut && i + 1 < len && $isNumeric(castTo($get_3(this$static.patternParts, i + 1), 106))) {
        abut = true;
        castTo($get_3(this$static.patternParts, i), 106).abutStart = true;
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
      count >= 4?$append_3(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['Before Christ', 'Anno Domini'])[value0]):$append_3(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['BC', 'AD'])[value0]);
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
      count == 5?$append_3(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['S', 'M', 'T', 'W', 'T', 'F', 'S'])[value2]):count == 4?$append_3(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])[value2]):$append_3(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])[value2]);
      break;
    case 97:
      adjustedTime.jsdate.getHours() >= 12 && adjustedTime.jsdate.getHours() < 24?$append_3(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['AM', 'PM'])[1]):$append_3(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['AM', 'PM'])[0]);
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
      count == 5?$append_3(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['S', 'M', 'T', 'W', 'T', 'F', 'S'])[value6]):count == 4?$append_3(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])[value6]):count == 3?$append_3(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])[value6]):$zeroPaddingNumber(buf, value6, 1);
      break;
    case 76:
      value7 = adjustedDate.jsdate.getMonth();
      count == 5?$append_3(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'])[value7]):count == 4?$append_3(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])[value7]):count == 3?$append_3(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])[value7]):$zeroPaddingNumber(buf, value7 + 1, count);
      break;
    case 81:
      value8 = adjustedDate.jsdate.getMonth() / 3 | 0;
      count < 4?$append_3(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['Q1', 'Q2', 'Q3', 'Q4'])[value8]):$append_3(buf, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'])[value8]);
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
      count < 4?$append_3(buf, timezone.tzNames[0]):$append_3(buf, timezone.tzNames[1]);
      break;
    case 118:
      $append_3(buf, timezone.timezoneID);
      break;
    case 90:
      count < 3?$append_3(buf, $getRFCTimeZoneString(timezone)):count == 3?$append_3(buf, $getISOTimeZoneString(timezone)):$append_3(buf, composeGMTString(timezone.standardOffset));
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

defineClass(475, 1, {});
var Lorg_gwtproject_i18n_shared_DateTimeFormat_2_classLit = createForClass('org.gwtproject.i18n.shared', 'DateTimeFormat', 475);
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
  dtfi == defaultDtfi && (dtf = castTo($getStringValue(cache, 'yyyy-MM-dd HH:mm:ss'), 151));
  if (!dtf) {
    dtf = new DateTimeFormat;
    dtfi == defaultDtfi && $putStringValue(cache, 'yyyy-MM-dd HH:mm:ss', dtf);
  }
  return dtf;
}

defineClass(151, 475, {151:1}, DateTimeFormat);
var cache;
var Lorg_gwtproject_i18n_client_DateTimeFormat_2_classLit = createForClass('org.gwtproject.i18n.client', 'DateTimeFormat', 151);
function $getISOTimeZoneString(this$static){
  var data_0, offset;
  offset = -this$static.standardOffset;
  data_0 = stampJavaTypeInfo(getClassLiteralForArray(C_classLit, 1), $intern_0, 156, 15, [43, 48, 48, 58, 48, 48]);
  if (offset < 0) {
    data_0[0] = 45;
    offset = -offset;
  }
  data_0[1] = data_0[1] + ((offset / 60 | 0) / 10 | 0) & $intern_4;
  data_0[2] = data_0[2] + (offset / 60 | 0) % 10 & $intern_4;
  data_0[4] = data_0[4] + (offset % 60 / 10 | 0) & $intern_4;
  data_0[5] = data_0[5] + offset % 10 & $intern_4;
  return valueOf_2(data_0, data_0.length);
}

function $getRFCTimeZoneString(this$static){
  var data_0, offset;
  offset = -this$static.standardOffset;
  data_0 = stampJavaTypeInfo(getClassLiteralForArray(C_classLit, 1), $intern_0, 156, 15, [43, 48, 48, 48, 48]);
  if (offset < 0) {
    data_0[0] = 45;
    offset = -offset;
  }
  data_0[1] = data_0[1] + ((offset / 60 | 0) / 10 | 0) & $intern_4;
  data_0[2] = data_0[2] + (offset / 60 | 0) % 10 & $intern_4;
  data_0[3] = data_0[3] + (offset % 60 / 10 | 0) & $intern_4;
  data_0[4] = data_0[4] + offset % 10 & $intern_4;
  return valueOf_2(data_0, data_0.length);
}

function TimeZone(){
}

function composeGMTString(offset){
  var data_0;
  data_0 = stampJavaTypeInfo(getClassLiteralForArray(C_classLit, 1), $intern_0, 156, 15, [71, 77, 84, 45, 48, 48, 58, 48, 48]);
  if (offset <= 0) {
    data_0[3] = 43;
    offset = -offset;
  }
  data_0[4] = data_0[4] + ((offset / 60 | 0) / 10 | 0) & $intern_4;
  data_0[5] = data_0[5] + (offset / 60 | 0) % 10 & $intern_4;
  data_0[7] = data_0[7] + (offset % 60 / 10 | 0) & $intern_4;
  data_0[8] = data_0[8] + offset % 10 & $intern_4;
  return valueOf_2(data_0, data_0.length);
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

defineClass(530, 1, {}, TimeZone);
_.standardOffset = 0;
var Lorg_gwtproject_i18n_client_TimeZone_2_classLit = createForClass('org.gwtproject.i18n.client', 'TimeZone', 530);
function DateTimeFormat$PatternPart(txt, cnt){
  this.text_0 = txt;
  this.count_0 = cnt;
  this.abutStart = false;
}

defineClass(106, 1, {106:1}, DateTimeFormat$PatternPart);
_.abutStart = false;
_.count_0 = 0;
var Lorg_gwtproject_i18n_shared_DateTimeFormat$PatternPart_2_classLit = createForClass('org.gwtproject.i18n.shared', 'DateTimeFormat/PatternPart', 106);
function $clinit_LocaleInfo(){
  $clinit_LocaleInfo = emptyMethod;
  instance_3 = new LocaleInfo;
}

function $getNumberConstants(this$static){
  !this$static.numberConstants && (this$static.numberConstants = new NumberConstantsImpl);
  return this$static.numberConstants;
}

function LocaleInfo(){
}

defineClass(403, 1, {}, LocaleInfo);
var instance_3;
var Lorg_gwtproject_i18n_shared_cldr_LocaleInfo_2_classLit = createForClass('org.gwtproject.i18n.shared.cldr', 'LocaleInfo', 403);
function DefaultDateTimeFormatInfo(){
}

defineClass(195, 1, {}, DefaultDateTimeFormatInfo);
var Lorg_gwtproject_i18n_shared_cldr_impl_DefaultDateTimeFormatInfo_2_classLit = createForClass('org.gwtproject.i18n.shared.cldr.impl', 'DefaultDateTimeFormatInfo', 195);
function NumberConstantsImpl(){
}

defineClass(458, 1, {}, NumberConstantsImpl);
var Lorg_gwtproject_i18n_shared_cldr_impl_NumberConstantsImpl_2_classLit = createForClass('org.gwtproject.i18n.shared.cldr.impl', 'NumberConstantsImpl', 458);
function Timer$lambda$0$Type(timer_0){
  this.timer_0 = timer_0;
}

defineClass(684, $wnd.Function, {}, Timer$lambda$0$Type);
_.onInvoke_0 = function onInvoke_7(arg0){
  lambda$0_4(this.timer_0);
}
;
function Timer$lambda$1$Type(timer_0){
  this.timer_0 = timer_0;
}

defineClass(685, $wnd.Function, {}, Timer$lambda$1$Type);
_.onInvoke_0 = function onInvoke_8(arg0){
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
    c != null && (c.indexOf(' ') != -1?$addAll(failSafeClasses, new Arrays$ArrayList($split_0(c, ' '))):(push_1(failSafeClasses.array, c) , true));
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

defineClass(149, 1, $intern_23);
_.element_3 = function element_39(){
  return this.element;
}
;
var Lorg_jboss_elemento_ElementBuilder_2_classLit = createForClass('org.jboss.elemento', 'ElementBuilder', 149);
function img(src_0){
  return castTo($attr_0(new EmptyContentBuilder(castToNative(($clinit_DomGlobal() , document_0).createElement('img'), $wnd.HTMLElement)), 'src', src_0), 55);
}

function input_0(type_0){
  var el;
  el = castToNative(castToNative(($clinit_DomGlobal() , document_0).createElement('input'), $wnd.HTMLElement), $wnd.HTMLInputElement);
  el.type = type_0;
  return new InputBuilder(el);
}

function EmptyContentBuilder(element){
  ElementBuilder.call(this, element);
}

defineClass(55, 149, {55:1, 13:1}, EmptyContentBuilder);
_.that = function that(){
  return this;
}
;
var Lorg_jboss_elemento_EmptyContentBuilder_2_classLit = createForClass('org.jboss.elemento', 'EmptyContentBuilder', 55);
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

defineClass(10, 1, {}, EventType);
var click_0, keydown, keypress, mousedown, touchend, touchmove;
var Lorg_jboss_elemento_EventType_2_classLit = createForClass('org.jboss.elemento', 'EventType', 10);
function $textContent_0(this$static, text_0){
  return this$static.element.textContent = text_0 , this$static;
}

function HtmlContentBuilder(element){
  ElementBuilder.call(this, element);
}

defineClass(5, 149, {5:1, 13:1}, HtmlContentBuilder);
_.that = function that_0(){
  return this;
}
;
var Lorg_jboss_elemento_HtmlContentBuilder_2_classLit = createForClass('org.jboss.elemento', 'HtmlContentBuilder', 5);
function InputBuilder(element){
  ElementBuilder.call(this, element);
}

defineClass(551, 149, $intern_23, InputBuilder);
_.that = function that_1(){
  return this;
}
;
var Lorg_jboss_elemento_InputBuilder_2_classLit = createForClass('org.jboss.elemento', 'InputBuilder', 551);
var C_classLit = createForPrimitive('char', 'C');
var D_classLit = createForPrimitive('double', 'D');
var Lorg_dominokit_rest_shared_request_RequestAsyncSender_2_classLit = createForInterface('org.dominokit.rest.shared.request', 'RequestAsyncSender');
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
var $entry = ($clinit_Impl() , entry_0);
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'safari']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=notebook-0.js

