/*
* @Author: caiyou
* @Date:   2016-12-16 18:03:57
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-16 18:11:50
*/

'use strict'
import Hello from "./components/Hello"
import Detail from "./components/Detail"

export default {
  routes: [
    {path: '/hello', component: Hello},
    {path: '/detail', component: Detail},
  ]
}