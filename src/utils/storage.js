/**
 * localStorage模块封装
 */

export default {
  /**
   * storage存储
   * @param key {string} 参数名称
   * @param value {any} 写入值
   */
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  /**
   * storage读取
   * @param key {string} 参数名称
   * @returns storage值
   */
  get(key) {
    const value = localStorage.getItem(key)
    if (!value) return ''
    try {
      return JSON.parse(value)
    } catch (error) {
      return value || error
    }
  },
  /**
   * 删除localStorage值
   * @param key {string} 参数名称
   */
  remove(key) {
    localStorage.removeItem(key)
  },
  /**
   * 清空localStorage值
   */
  clear() {
    localStorage.clear()
  }
}