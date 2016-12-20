/*
* @Author: caiyou
* @Date:   2016-12-16 18:03:57
* @Last Modified by:   caiyou
* @Last Modified time: 2016-12-20 11:38:02
*/

'use strict'
import Index from "components/Index"
import Hello from "components/Hello"
import Detail from "components/Detail"

export default {
  routes: [
    {path: '/', component: Index},
    {path: '/hello', component: Hello},
    {path: '/detail', component: Detail},
  ]
}