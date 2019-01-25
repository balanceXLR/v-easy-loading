# v-easy-loading

## 简单易用的vue移动端开发loading组件


# Build Step

``` bash
$ npm install v-easy-loading -s
```

# 使用
## 自适应须知
- 该组件使用 REM 布局实现多终端适配，使用时请搭配使用 [lib-flexible](https://github.com/amfe/lib-flexible) 方案
  
## 参数说明
<table>
    <tr>
        <th>key</th>
        <th>type</th>
        <th>default</th>
        <th>necessary</th>
        <th>description</th>
    </tr>
    <tr>
        <td>isLoading</td>
        <td>Boolean</td>
        <td>true</td>
        <td>false</td>
        <td>loading状态是否开启</td>
    </tr>
    <tr>
        <td>backColor</td>
        <td>String</td>
        <td>#fff</td>
        <td>false</td>
        <td>loading背景色，仅支持16进制色值</td>
    </tr>
    <tr>
        <td>opacity</td>
        <td>Number</td>
        <td>1</td>
        <td>false</td>
        <td>loading背景透明度</td>
    </tr>
    <tr>
        <td>logoUrl</td>
        <td>String</td>
        <td>any</td>
        <td>false</td>
        <td>loading图标</td>
    </tr>
    <tr>
        <td>logoSize</td>
        <td>Array</td>
        <td>[48, 48]</td>
        <td>false</td>
        <td>loading图标大小，分别为[wdith, height]</td>
    </tr>
</table>

## Example
``` html
<v-easy-loading backColor="#ddd">
    <div>内容</div>
</v-easy-loading>
```
 