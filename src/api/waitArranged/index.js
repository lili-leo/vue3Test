/*
 * @Author: your name
 * @Date: 2021-03-11 14:28:03
 * @LastEditTime: 2021-03-16 09:43:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \apsInit\src\api\waitArranged\index.js
 */
import request from "@/router/axios";
import qs from 'qs'
export const p_waitArrangedMaterielsTabs = (params) =>
  request({
    url: "/php/waitArrangedMaterielsTabs",
    method: "POST",
    data: params,
  });

export const p_waitArrangedResourcesTabs = (params) =>
  request({
    url: "/php/waitArrangedResourcesTabs",
    method: "POST",
    data: params,
  });

export const p_waitArrangedBasetechsTabs = (params) =>
  request({
    url: "/php/waitArrangedBasetechsTabs",
    method: "POST",
    data: params,
  });

export const p_waitArrangedProdordersTabs = (params) =>
  request({
    url: "/php/waitArrangedProdordersTabs",
    method: "POST",
    data: params,
  });

export const p_waitArrangedBomsTabs = (params) =>
  request({
    url: "/php/waitArrangedBomsTabs",
    method: "POST",
    data: params,
  });

  export const p_waitArrangedGetMainress = (params) =>
  request({
    url: "/php/home/getMainress"+params.data,
    method: "POST",
    data: params,
  });

  export const p_waitArrangedEtAuxiliaryress = (params) =>
  request({
    url: "/php/home/getAuxiliaryress"+params.data,
    method: "POST",
    data: params,
  });

export const p_waitArrangedProdressTabs = (params) =>
  request({
    url: "/php/waitArrangedProdressTabs",
    method: "POST",
    data: params,
  });

export const p_waitArrangedBaseloadTabs = (params) =>
  request({
    url: "/php/waitArrangedBaseloadTabs",
    method: "POST",
    data: params,
  });

  export const p_waitArrangedRessloadTabs = (params) =>
  request({
    url: "/php/waitArrangedRessloadTabs",
    method: "POST",
    data: params,
  });

  export const p_waitArrangedWorkingsTabs = (params) =>
  request({
    url: "/php/waitArrangedWorkingsTabs",
    method: "POST",
    data: params,
  });

  export const p_waitArrangedAllType = (params) =>
  request({
    url: "/php/waitArrangedAllType",
    method: "POST",
    data: params,
  });

  export const p_waitArrangedTypeDate = (params) =>
  request({
    url: "/php/home/getApsInDataByType",
    method: "get",
    params: params,
  });

  export const p_waitArrangedItemSave = (params) =>
  request({
    url: "/php/waitArrangedItemSave",
    method: "POST",
    data: params,
  });

  export const p_resourceAnalysisSearchTabs = (params) =>
  request({
    url: "/php/production-result/getProcessRouteByWorkOrdernos"+params.data,
    method: "get",
    data: params,
  });

  export const p_getWorkorderNoList = (params) =>
  request({
    url: "/php/production-result/getWorkorderNoList"+params.data,
    method: "get",
    data: params,
  });

  export const p_getResourceLoad = (params) =>
  request({
    url: "/php/home/getResourceLoad"+params.data,
    method: "get",
    data: params,
  });

  export const p_commitResourceLoad = (params) =>
  request({
    url: "/php/home/commitResourceLoad"+params.data,
    method: "POST",
    data: (params.list),
  });

  export const p_getApsInDataOfWorkingByTypeAndNo = (params) =>
  request({
    url: "/php/home/getApsInDataOfWorkingByTypeAndNo"+params.data,
    method: "get",
    data: params,
  });
  

  