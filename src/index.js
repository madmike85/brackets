module.exports = function check(str, bracketsConfig) {
    const map = Object.assign(...bracketsConfig.map(([v, k]) => ({ [v]: k })));
    const stack = [];

    for (let i = 0; i < str.length; i++) {
        if (map[str[i]] === str[i] && stack[stack.length - 1] === str[i]) stack.pop();
        else if (map.hasOwnProperty(str[i])) stack.push(str[i]);
        else if (map[stack.pop()] !== str[i]) return false;
    }

    if (stack.length !== 0) return false;

    return true;
};
