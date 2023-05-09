import { defineConfig } from 'yapi-to-typescript';

/**
 * 生成Api接口名称  Interface和ChangeCase数据类型参见node_modules\yapi-to-typescript\lib\esm\index.d.ts定义
 * @param interfaceInfo : Interface
 * @param changeCase:ChangeCase
 * @returns 请求响应接口名称--pascal命名
 */
function genApiInterfaceName(interfaceInfo, changeCase) {
  // 取解析路径dir最尾部的路径作为前缀路径
  const lastPath = interfaceInfo.parsedPath.dir.split('/').pop();
  // 拼接前缀路径+文件名称
  return `${changeCase.pascalCase(lastPath)}${changeCase.pascalCase(interfaceInfo.parsedPath.name)}`;
}

export default defineConfig([
  {
    serverUrl: 'http://yapi.meiyeyanjiu.com',
    typesOnly: true,
    target: 'typescript',
    reactHooks: {
      enabled: false,
    },
    prodEnvName: 'production',
    // 将生成文件路径转化成小驼峰命名方式
    // outputFilePath: (interfaceInfo, changeCase) => {
    //   const filePathArr = interfaceInfo.path.split('/');
    //   const filePath = filePathArr.map((item) => changeCase.camelCase(item)).join('/');
    //   return `src/api/${filePath}.ts`;
    // },
    outputFilePath: 'src/api/index.ts',
    // 生成ts文件中请求参数interface名称,将下划线命名转换成pascal命名
    getRequestDataTypeName: (interfaceInfo, changeCase) => `${genApiInterfaceName(interfaceInfo, changeCase)}Request`,
    // 生成ts文件中请求响应数据interface名称,将下划线命名转换成pascal命名
    getResponseDataTypeName: (interfaceInfo, changeCase) => `${genApiInterfaceName(interfaceInfo, changeCase)}Response`,
    requestFunctionFilePath: 'src/api/request.ts',
    dataKey: 'model',
    projects: [
      {
        // token获取方式： 在yapi-设置-token配置中查看
        token: '7aed7bcd28c31261969287e1c3a055ebc46f36fa41bfb61a6ba32530fdaab80a',
        categories: [
          {
            id: [2541],
            getRequestFunctionName(interfaceInfo, changeCase) {
              // 以接口全路径生成请求函数名
              return changeCase.camelCase(interfaceInfo.path);

              // 若生成的请求函数名存在语法关键词报错、或想通过某个关键词触发 IDE 自动引入提示，可考虑加前缀，如:
              // return changeCase.camelCase(`api_${interfaceInfo.path}`)

              // 若生成的请求函数名有重复报错，可考虑将接口请求方式纳入生成条件，如:
              // return changeCase.camelCase(`${interfaceInfo.method}_${interfaceInfo.path}`)
            },
          },
        ],
      },
    ],
  },
]);
