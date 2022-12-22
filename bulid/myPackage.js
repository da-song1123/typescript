// 타입스크립트 파일한테 자바스크립트 파일을 확인하라고 알림
// @ts-check 
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @pram {string} config.url
 * @returns boolean
 */
export function init(config) {
    return true;
}
/**
 * Exit the program
 * @param {number} code
 * @returns number
 */
export function exit(code) {
    return code + 1;
}
