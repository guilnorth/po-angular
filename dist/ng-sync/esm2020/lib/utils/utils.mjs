/**
 * Retorna um *array* contendo os pares `[chave, valor]` do objeto.
 *
 * Semelhante ao método `Object.entries()` nativo do javascript.
 *
 * > Veja mais em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 *
 * @param object Objeto que será extraído os pares [chave, valor].
 */
export const getObjectEntries = (object) => {
    const objectName = Object.keys(object)[0];
    const objectValue = object[objectName];
    return [objectName, objectValue];
};
/**
 * Recebe um objeto e valida se o seu valor é diferente de *undefined* ou *null*.
 *
 * @param {object} parameter Objeto contento o nome do parâmetro que está sendo validado
 * e o seu valor.
 */
export const validateParameter = (parameter) => {
    const [paramName, paramValue] = getObjectEntries(parameter);
    if (paramValue === undefined || paramValue === null) {
        throw new Error(`The ${paramName} parameter cannot be undefined or null`);
    }
};
/**
 * Recebe um objeto e valida se o seu valor é uma instância de *Array* e se não
 * está vazio.
 *
 * @param value Objeto contento o nome da propriedade que está sendo validada e o seu valor.
 */
export const validateArray = (value) => {
    validateParameter(value);
    const [paramName, paramValue] = getObjectEntries(value);
    if (!(paramValue instanceof Array)) {
        throw new Error(`${paramName} is not an Array instance`);
    }
    if (!paramValue.length) {
        throw new Error(`${paramName} cannot be empty array`);
    }
};
/**
 * Recebe um arquivo e converte para uma string base64
 *
 * @param Objeto do tipo file.
 */
export const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    /* istanbul ignore next */
    reader.onerror = error => reject(error);
});
/**
 * Recebe uma string base64 e converte para um arquivo
 *
 * @param string base64.
 */
export const toFile = (url, fileName, mimeType) => fetch(url)
    .then(result => result.arrayBuffer())
    .then(buffer => new File([buffer], fileName, { type: mimeType }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zeW5jL3NyYy9saWIvdXRpbHMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0dBUUc7QUFDSCxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLE1BQWMsRUFBRSxFQUFFO0lBQ2pELE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUMsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRXZDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFDO0FBRUY7Ozs7O0dBS0c7QUFDSCxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLFNBQWlCLEVBQUUsRUFBRTtJQUNyRCxNQUFNLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRTVELElBQUksVUFBVSxLQUFLLFNBQVMsSUFBSSxVQUFVLEtBQUssSUFBSSxFQUFFO1FBQ25ELE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxTQUFTLHdDQUF3QyxDQUFDLENBQUM7S0FDM0U7QUFDSCxDQUFDLENBQUM7QUFFRjs7Ozs7R0FLRztBQUNILE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFO0lBQzdDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXpCLE1BQU0sQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFeEQsSUFBSSxDQUFDLENBQUMsVUFBVSxZQUFZLEtBQUssQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxTQUFTLDJCQUEyQixDQUFDLENBQUM7S0FDMUQ7SUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtRQUN0QixNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsU0FBUyx3QkFBd0IsQ0FBQyxDQUFDO0tBQ3ZEO0FBQ0gsQ0FBQyxDQUFDO0FBRUY7Ozs7R0FJRztBQUNILE1BQU0sQ0FBQyxNQUFNLFFBQVEsR0FBRyxDQUFDLElBQVUsRUFBRSxFQUFFLENBQ3JDLElBQUksT0FBTyxDQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO0lBQ3RDLE1BQU0sTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7SUFDaEMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBZ0IsQ0FBQyxDQUFDO0lBQ3ZELDBCQUEwQjtJQUMxQixNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFDLENBQUMsQ0FBQyxDQUFDO0FBRUw7Ozs7R0FJRztBQUNILE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQVcsRUFBRSxRQUFnQixFQUFFLFFBQWdCLEVBQUUsRUFBRSxDQUN4RSxLQUFLLENBQUMsR0FBRyxDQUFDO0tBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBSZXRvcm5hIHVtICphcnJheSogY29udGVuZG8gb3MgcGFyZXMgYFtjaGF2ZSwgdmFsb3JdYCBkbyBvYmpldG8uXHJcbiAqXHJcbiAqIFNlbWVsaGFudGUgYW8gbcOpdG9kbyBgT2JqZWN0LmVudHJpZXMoKWAgbmF0aXZvIGRvIGphdmFzY3JpcHQuXHJcbiAqXHJcbiAqID4gVmVqYSBtYWlzIGVtOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9wdC1CUi9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvZW50cmllc1xyXG4gKlxyXG4gKiBAcGFyYW0gb2JqZWN0IE9iamV0byBxdWUgc2Vyw6EgZXh0cmHDrWRvIG9zIHBhcmVzIFtjaGF2ZSwgdmFsb3JdLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldE9iamVjdEVudHJpZXMgPSAob2JqZWN0OiBvYmplY3QpID0+IHtcclxuICBjb25zdCBvYmplY3ROYW1lID0gT2JqZWN0LmtleXMob2JqZWN0KVswXTtcclxuICBjb25zdCBvYmplY3RWYWx1ZSA9IG9iamVjdFtvYmplY3ROYW1lXTtcclxuXHJcbiAgcmV0dXJuIFtvYmplY3ROYW1lLCBvYmplY3RWYWx1ZV07XHJcbn07XHJcblxyXG4vKipcclxuICogUmVjZWJlIHVtIG9iamV0byBlIHZhbGlkYSBzZSBvIHNldSB2YWxvciDDqSBkaWZlcmVudGUgZGUgKnVuZGVmaW5lZCogb3UgKm51bGwqLlxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyYW1ldGVyIE9iamV0byBjb250ZW50byBvIG5vbWUgZG8gcGFyw6JtZXRybyBxdWUgZXN0w6Egc2VuZG8gdmFsaWRhZG9cclxuICogZSBvIHNldSB2YWxvci5cclxuICovXHJcbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVBhcmFtZXRlciA9IChwYXJhbWV0ZXI6IG9iamVjdCkgPT4ge1xyXG4gIGNvbnN0IFtwYXJhbU5hbWUsIHBhcmFtVmFsdWVdID0gZ2V0T2JqZWN0RW50cmllcyhwYXJhbWV0ZXIpO1xyXG5cclxuICBpZiAocGFyYW1WYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHBhcmFtVmFsdWUgPT09IG51bGwpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgVGhlICR7cGFyYW1OYW1lfSBwYXJhbWV0ZXIgY2Fubm90IGJlIHVuZGVmaW5lZCBvciBudWxsYCk7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlY2ViZSB1bSBvYmpldG8gZSB2YWxpZGEgc2UgbyBzZXUgdmFsb3Igw6kgdW1hIGluc3TDom5jaWEgZGUgKkFycmF5KiBlIHNlIG7Do29cclxuICogZXN0w6EgdmF6aW8uXHJcbiAqXHJcbiAqIEBwYXJhbSB2YWx1ZSBPYmpldG8gY29udGVudG8gbyBub21lIGRhIHByb3ByaWVkYWRlIHF1ZSBlc3TDoSBzZW5kbyB2YWxpZGFkYSBlIG8gc2V1IHZhbG9yLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlQXJyYXkgPSAodmFsdWU6IG9iamVjdCkgPT4ge1xyXG4gIHZhbGlkYXRlUGFyYW1ldGVyKHZhbHVlKTtcclxuXHJcbiAgY29uc3QgW3BhcmFtTmFtZSwgcGFyYW1WYWx1ZV0gPSBnZXRPYmplY3RFbnRyaWVzKHZhbHVlKTtcclxuXHJcbiAgaWYgKCEocGFyYW1WYWx1ZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGAke3BhcmFtTmFtZX0gaXMgbm90IGFuIEFycmF5IGluc3RhbmNlYCk7XHJcbiAgfVxyXG5cclxuICBpZiAoIXBhcmFtVmFsdWUubGVuZ3RoKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7cGFyYW1OYW1lfSBjYW5ub3QgYmUgZW1wdHkgYXJyYXlgKTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogUmVjZWJlIHVtIGFycXVpdm8gZSBjb252ZXJ0ZSBwYXJhIHVtYSBzdHJpbmcgYmFzZTY0XHJcbiAqXHJcbiAqIEBwYXJhbSBPYmpldG8gZG8gdGlwbyBmaWxlLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHRvQmFzZTY0ID0gKGZpbGU6IEZpbGUpID0+XHJcbiAgbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICByZWFkZXIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0IGFzIHN0cmluZyk7XHJcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG4gICAgcmVhZGVyLm9uZXJyb3IgPSBlcnJvciA9PiByZWplY3QoZXJyb3IpO1xyXG4gIH0pO1xyXG5cclxuLyoqXHJcbiAqIFJlY2ViZSB1bWEgc3RyaW5nIGJhc2U2NCBlIGNvbnZlcnRlIHBhcmEgdW0gYXJxdWl2b1xyXG4gKlxyXG4gKiBAcGFyYW0gc3RyaW5nIGJhc2U2NC5cclxuICovXHJcbmV4cG9ydCBjb25zdCB0b0ZpbGUgPSAodXJsOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcsIG1pbWVUeXBlOiBzdHJpbmcpID0+XHJcbiAgZmV0Y2godXJsKVxyXG4gICAgLnRoZW4ocmVzdWx0ID0+IHJlc3VsdC5hcnJheUJ1ZmZlcigpKVxyXG4gICAgLnRoZW4oYnVmZmVyID0+IG5ldyBGaWxlKFtidWZmZXJdLCBmaWxlTmFtZSwgeyB0eXBlOiBtaW1lVHlwZSB9KSk7XHJcbiJdfQ==