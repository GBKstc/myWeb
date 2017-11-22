
/**一些基本的函数**/
export function getVal(obj, defaultValue = ""){
    return isEmpty(obj) ? defaultValue : obj;
}

export function toInt(o, defaultValue = 0){
    let res = parseInt(o);
    if(isNaN(res)) return defaultValue;
    return res;
};

export function isEmpty(o){
    if(o == null || o == undefined)
        return true;
    switch (typeof o){
        case "boolean":
            return false;
        case "object":
            for (let t in o)
                return false;
            return true;
        case "array":
        case "string":
            return o.length <= 0;
        case "number":
            return o.toString().length <= 0;
        case "function":
            return false;
    }
    return true;
}

export function isNum(n){
    return typeof n == "number";
}

/**
 * 判断两个变量是否相同
 * @returns {boolean}
 */
export function isEqual(a, b) {
    if(isEmpty(a) && isEmpty(b))
        return true;
    if(isEmpty(a) || isEmpty(b))
        return false;
    switch (typeof a){
        case "object":
            if(count(a) != count(b))
                return false;
            for(let i in a){
                if(!isEqual(a[i], b[i]))
                    return false;
            }
            return true;
        default:
            return a === b;
    }
}

/**json解析函数**/
export function json_decode(str){
    let res = {};
    try{
        res = JSON.parse(str);
    }catch(e){}
    return res;
}

export function json_decode_arr(str){
    let res = [];
    try{
        res = JSON.parse(str);
    }catch(e){}
    return res;
}

/**字符串格式化函数**/
/**
 *去格式化字符串，去掉所有的空格和换行符
 * @param str
 * @return str
 */
export function format_str(str){
    str = str.replace(/\s/g, "");
    str = str.replace(/[\n]/g,"")
    str = str.replace(/[\r]/g,"")
    return str
}

/**
 *格式化字符串，加上空格和换行符
 * @param str
 * @return str
 */
export function unformat_str(str){
    var curLevel = 0;
    var res = ''
    for(var i in str){
        if(str[i] == '{'){
            res += '{\n';
            curLevel += 1;
            for(var j = 0; j < curLevel*8; j++){
                res += ' ';
            }
        }else if(str[i] == '}'){
            res += '\n'
            curLevel = curLevel - 1;
            for(var j = 0; j < curLevel*8; j++){
                res += ' ';
            }
            res += '}'
        }else if(str[i] == ','){
            res += ',\n'
            for(var j = 0; j < curLevel*8; j++){
                res += ' ';
            }
        }else{
            res += str[i]
        }
    }
    return res
}

/**对象和数组相关的函数**/
/**
 * 深度拷贝, 防止因直接赋值引起的地址相同问题
 * @returns {*}
 */
export function cpy(o){
    let res = {};
    switch(typeof o){
        case "object":
            //判断o是否是react组件对象， 如果是 直接赋值
            if(!isEmpty(o) && o["$$typeof"] == Symbol.for('react.element')) {
                res = o;
                break;
            }
            if(Object.prototype.toString.call(o) === '[object Array]')
                res = [];
            for(let i in o){
                res[i] = cpy(o[i]);
            }
            break;
        default: res = o; break;
    }
    return res;
}

/**
 * 获取变量的长度
 * string 获取字符数
 * object 获取其children数量(一级)
 * @param o 输入参数
 * @returns int
 */
export function count(o){
    switch (typeof o){
        case "string":
        case "array":
            return o.length;
        case "object":
            var n = 0;
            for(var i in o)
                n++;
            return n;
    }
    return 0;
}

/**
 * 判断元素是否在数组中
 * @param obj
 * @param arr
 * @returns {boolean}
 */
export function in_array(obj, arr){
    if(isEmpty(arr))
        return false;
    var i = arr.length;
    while (i--) {
        if (arr[i] == obj)
            return true;
    }
    return false;
}

/**
 * 从数组中删除指定的元素
 * @param obj
 * @param arr
 */
export function array_remove(obj, arr){
    for(let i=0;i < arr.length;i++) {
        if(obj == arr[i])
            arr.splice(i,1)
    }
}

export function keyCount(arr, key, val){
    if(isEmpty(arr))
        return 0;
    let count = 0;
    for(let i in arr){
        if(!isEmpty(arr[i][key]) && arr[i][key] == val)
            count++;
    }
    return count;
}

export function subArrByKeyEq(arr, key, val){
    let check = item => {
        return !isEmpty(item[key]) && item[key] == val;
    };
    return subArrByCheck(arr, check);
}

export function subArrByKeyNeq(arr, key, val){
    let check = item => {
        return isEmpty(item[key]) || item[key] != val;
    };
    return subArrByCheck(arr, check);
}

export function subArrByCheck(arr, check){
    let result = [];
    for(let i in arr) {
        if (!arr.hasOwnProperty(i))
            continue;
        if (check(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

export function maxKeyInArr(arr, key){
    let res = "";
    for(let i in arr){
        let item = arr[i];
        if(!isEmpty(item[key])){
            if(isEmpty(res))
                res = item[key];
            else
                res = res < item[key] ? item[key] : res;
        }
    }
    return res;
}

//根据key值查数据，如果数据存在返回当前条目，如果数据不存在返回空
export function findItemByKey(arr, key, val){
    if(isEmpty(arr))
        return {};
    for(let i in arr){
        if (!arr.hasOwnProperty(i))
            continue;
        if(!isEmpty(arr[i][key]) && arr[i][key] == val){
            return arr[i];
        }
    }
    return {};
}

export function getOption(text, options){
    let res = "";
    if(isEmpty(text))
        return res;
    for(let key in options){
        if(options.hasOwnProperty(key) && text == options[key]["key"])
            res = options[key]["title"];
    }
    return res;
}

export function keyCpyObj(o, keys){
    let res = {};
    for(let i in keys){
        let key = keys[i];
        res[key] = o[key];
    }
    return res;
}

/**input focus相关**/
const checkInput = (str) => {
    const inputClass = ["ant-input"];
    try{
        for(let i in inputClass){
            if(str.indexOf(inputClass[i]) >=0)
                return true;
        }
    }catch (e){}
    return false;
};
const getInputElements = () => {
    let classobj= [];
    let tags=document.getElementsByTagName("*");//获取HTML的所有标签
    for(let i in tags)
        if(tags[i].nodeType==1 && checkInput(tags[i].getAttribute("class")))
            classobj.push(tags[i]);
    return classobj;//返回组成的数组
};
const findIndex = (arr, obj) => {
    for(let i in arr){
        if(arr[i] == obj)
            return i;
    }
    return -1;
};

export function focusNext(target){
    //获取所有ant-input的标签
    let inputList = getInputElements("ant-input");
    let i = findIndex(inputList, target);
    let next = parseInt(i)+1;
    if(i >= 0 && inputList[next]){
        inputList[next].focus();
    }
}

export function focusModal(index = 1){
    let modals = document.getElementsByClassName("ant-modal-body");
    if(isEmpty(modals)) return;
    let last = modals.length - 1;
    let tags = modals[last].getElementsByTagName("*");
    let inputList = [];
    for(let i in tags)
        if(tags[i].nodeType==1 && checkInput(tags[i].getAttribute("class")))
            inputList.push(tags[i]);
    if(!isEmpty(inputList))
        inputList[index-1].focus();
}

/**
 * 跟操作者有相关的key
 * @type {[*]}
 */
export const operator_keys = ["create_by","creator_name","create_time","update_by","update_name","update_time"];
