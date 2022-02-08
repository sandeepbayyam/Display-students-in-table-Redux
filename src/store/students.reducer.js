const intialState = {
 students: [
    {
      firstname:'sandeep',
      lastname:'bayyam',
      city:'HYD',
      age:25
    }, 
    {
     firstname:'Raj',
     lastname:'medaboina',
     city:'Tgiri',
     age:26
   },
   {
     firstname:'Naresh',
     lastname:'sudidha',
     city:'warangal',
     age:26
   }, 
   {
     firstname:'santhosh',
     lastname:'bayyam',
     city:'HYD',
     age:22
   } 
   ]
};
const studentReducer = (state=intialState,action)=>{
  if(action.type==='AddStudent'){
    return(
      {
        ...state,students:[...state.students,action.val]
      }
    )
  }
  return state
}
export default studentReducer;