import request from "@/router/axios";
import qs from 'qs'
export const pGetToken = (params: any) =>
request({
  url: "/php/token",
  method: "get",
  data: params,
});
// export const p_productWorkOrderTabs = (params:any) =>
//   request({
//     url: "/php/production-result/getProcessCondition"+params.data,
//     method: "get",
//     data: params,
//   });

// export const p_productWorkManShipTabs = (params:any) =>
//   request({
//     url: "/php/production-result/getProcessCondition"+"?token="+params.token
//     +"&apsid="+params.apsid+"&workorderno="+params.workorderno+"&currkey="+escape(params.currkey)+"&type="+params.type,
//     method: "get",
//     data: params,
//   });

//   export const p_getWorkShipDates = (params:any) =>
//   request({
//     url: "/php/production-result/getProcessCondition"+"?token="+params.token
//     +"&apsid="+params.apsid+"&workorderno="+params.workorderno+"&currkey="+escape(params.currkey)+"&type="+params.type,
//     method: "get",
//     data: params,
//   });

 

//   export const p_productWorkProductTabs = (params:any) =>
//   request({
//     url: "/php/production-result/getNeedMaterials"+params.data,
//     method: "get",
//     data: params,
//   });

// export const p_productTasks = (params:any) =>
//   request({
//     url: "/php/production-result/getProductShipmentPlan"+"?token="+params.token+"&apsid="+params.apsid,
//     method: "get",
//     data: params,
//   });

//   export const p_productTasksRight = (params:any) =>
//   request({
//     url: "/php/production-result/getProductionResources"+params.data,
//     // "?token="+params.token+"&apsid="+params.apsid+"&materialno="+params.materialno+"&type="+params.type,
//     method: "get",
//     data: params,
//   });

//   export const p_resourcePlanTabs = (params:any) =>
//   request({
//     url: "/php/resourcePlanTabs",
//     method: "POST",
//     data: params,
//   });

//   export const p_resourcePlanTabsLeft = (params:any) =>
//   request({
//     url: "/php/resourcePlanTabsLeft",
//     method: "POST",
//     data: params,
//   });

//   export const p_resourcePlanTabsRight = (params:any) =>
//   request({
//     url: "/php/resource-plan/getResourceOccupations"+params.data,
//     method: "get",
//     data: params,
//   });
// export const p_resourcePlanTasks = (params:any) =>
//   request({
//     url: "/php/resourcePlanTasks",
//     method: "POST",
//     data: params,
//   });

// export const p_resourcePlanDrawerTabs = (params:any) =>
//   request({
//     url: "/php/resourcePlanDrawerTabs",
//     method: "POST",
//     data: params,
//   });

// export const p_resourceAnalysisTabs = (params:any) =>
//   request({
//     url: "/php/resourceAnalysisTabs",
//     method: "POST",
//     data: params,
//   });

// export const p_resourceAnalysisDrawLineDatas = (params:any) =>
//   request({
//     url: "/php/resourceAnalysisDrawLineDatas",
//     method: "POST",
//     data: params,
//   });

// export const p_resourceAnalysiTimeDatas = (params:any) =>
//   request({
//     url: "/php/resourceAnalysiTimeDatas",
//     method: "POST",
//     data: params,
//   });

// export const p_resourceLoadWeekTabs = (params:any) =>
//   request({
//     url: "/php/resource-plan/getResourceLoads"+params.data,
//     method: "get",
//     data: params,
//   });

// export const p_resourceLoadMonthTabs = (params:any) =>
//   request({
//     url: "/php/resource-plan/getResourceLoadTab"+params.data,
//     method: "get",
//     data: params,
//   });

// export const p_materialplanntTime = (params:any) =>
//   request({
//     url: "/php/need-material/getNeedMaterialEcharts"+params.data,
//     method: "get",
//     data: params,
//   });

//   export const p_materialplanntTabs = (params:any) =>
//   request({
//     url: "/php/need-material/getNeedMaterialOfProduct"+params.data,
//     method: "get",
//     data: params,
//   });
  
// export const p_materialplanntProduct = (params:any) =>
//   request({
//     url: "/php/materialplanntProduct",
//     method: "POST",
//     data: params,
//   });

// export const p_materialplanntMateriel = (params:any) =>
//   request({
//     url: "/php/need-material/getNeedMaterialPlanList"+params.data,
//     method: "get",
//     data: params,
//   });

// export const p_resourceAnalysisGanntt = (params:any) =>
//   request({
//     url: "/php/resourceAnalysisGanntt",
//     method: "POST",
//     data: params,
//   });

export const pHistoryRecord = (params:any) =>
  request({
    url: "/php/home/getHistoryResult"+"?token="+params.token,
    method: "get",
    data: params,
  });
// export const p_loginAfter = (params:any) =>
//   request({
//     url: "/php/aps-config/userinfo"+"?token="+params.token,
//     method: "get",
//     data: params,
//   });

//   export const p_loginAfterSave = (params:any) =>
//   request({
//     url: "/php/aps-config/bind"+params.data,
//     method: "POST",
//     data: params,
//   });

  export const pSettingSchedulingDates = (params:any) =>
  request({
    url: "/php/aps-config/config"+"?token="+params.token,
    method: "get",
    data: params,
  });

// //````````````````
  export const pSettingSchedulingDatesTest = (params:any) =>
  // params.data
  request({
    url: "/php/aps-config/test-inurl",
    method: "POST",
    data: qs.stringify(params),
  });
//   //```````````````` testOutUrl
//   export const p_settingSchedulingDatesTestOut = (params:any) =>
//   // params.data
//   request({
//     url: "/php/aps-config/test-outurl",
//     method: "POST",
//     data: qs.stringify(params),
//   });
  export const pSettingSchedulingDatesSave = (params:any) =>
  request({
    url: "/php/aps-config/commit"+"?token="+params.token,
    method: "POST",
    data:(params),
    headers: {
      'Content-Type': 'application/json'
  },
  });
//   export const p_startScheduling = (params:any) =>
//   request({
//     url: "/php/home/aps-run"+"?token="+params.token,
//     method: "POST",
//     data: params,
//   });
//   export const p_releaseSchedulingResults = (params:any) =>
//   request({
//     url: "/php/home/publish"+params.data,
//     method: "POST",
//     data: params,
//   });

//   export const p_resourcePlanSchedulerTabs = (params:any) =>
//   request({
//     url: "/php/resource-plan/getResourcePlan"+params.data,
//     method: "get",
//     data: params,
//   });

//   export const p_getResourceListByRessname = (params:any) =>
//   request({
//     url: "/php/resource-plan/getResourceListByRessname"+params.data,
//     method: "get",
//     data: params,
//   });

//   export const p_getResourceListByRessno = (params:any) =>
//   request({
//     url: "/php/resource-plan/getResourceListByRessno"+params.data,
//     method: "get",
//     data: params,
//   });
  
//   export const p_getNeedMaterialPlanQuery = (params:any) =>
//   request({
//     url: "/php/need-material/getNeedMaterialPlanQuery"+params.data,
//     method: "get",
//     data: params,
//   });
//   export const changeParam = (params:any) =>{
//   return JSON.stringify(params).replace(/:/g,'=').replace(/,/g,'&').replace(/{/g,'?').replace(/}/g,'').replace(/"/g,'');
// }

// export const p_removeAllCache = (params:any) =>
// request({
//   url: "/php//aps-config/removeAllCache"+"?token="+params.token,
//   method: "POST",
//   data: params,
// });