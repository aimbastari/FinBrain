import { AsyncStorage } from 'react-native'

/**
 * profile =
 *
 * {
 *  age: 50,
 *  employment: {type: "sales", income: 100000},    
 *  assets: 100000,
 *  risk: high,
 *  allocation: []
 * }
 * 
 * 
 * 
 * 
 */


 export const getAsyncStorage = async () => { 
  let response = await AsyncStorage.getItem('profile'); 
  let parsedData = JSON.parse(response) || {}; 
 
  return parsedData; 
}

 export const setAsyncStorage = (profile) => { 
  return AsyncStorage.setItem('profile', JSON.stringify(profile)); 
}


export const resetAsyncStorage = () => { 
  return setAsyncStorage({}); 
}

export const logAsyncStorage = async () => { 
  let response = await getAsyncStorage(); 
 
  console.log('Logging Async Storage'); 
  console.log(response); 
}

export const saveAge = async (age) => { 
  let response = await getAsyncStorage(); 
  response.age = age; 
 
  await setAsyncStorage(response); 
  
  logAsyncStorage();

  return; 
} 

export const getAge = async () => { 
  let response = await getAsyncStorage(); 
  return response.age; 

} 


export const saveEmploymentAmount = async (amount) => { 
  let response = await getAsyncStorage(); 

  response[employment].amount = amount; 
 
  await setAsyncStorage(response); 
  
  logAsyncStorage();

  return; 
} 

export const saveEmploymentType = async (type) => { 
  let response = await getAsyncStorage(); 

  response[employment].type = type; 
 
  await setAsyncStorage(response); 
  
  logAsyncStorage();

  return; 
} 


export const saveEmployment = async (employment) => { 
  let response = await getAsyncStorage(); 

  if (response[employment] === undefined){
    response.employment= {}
  }
   
  response.employment=employment;

  await setAsyncStorage(response); 
  
  logAsyncStorage();

  return; 
} 



export const getEmployment = async () => { 
  let response = await getAsyncStorage(); 
  return response.employment; 

} 


export const saveRisk = async (risk) => { 
  let response = await getAsyncStorage(); 
  response.risk = risk; 
 
  await setAsyncStorage(response); 
  
  logAsyncStorage();

  return; 
} 

export const getRisk = async () => { 
  let response = await getAsyncStorage(); 
  return response.risk; 

} 
