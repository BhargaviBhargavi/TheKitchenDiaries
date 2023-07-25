import {
    GET_ALL_RECIPE_FAILURE,
    GET_ALL_RECIPE_REQUEST,
    GET_ALL_RECIPE_SUCCESS,
  
    
  } from "./actionType";
  
  import axios from "axios";
  
  export const getAllRecipeRequest = () => ({
    type: GET_ALL_RECIPE_REQUEST,
  });
  
  export const getAllRecipeFailure = () => ({
    type: GET_ALL_RECIPE_FAILURE,
  });
  
  export const getAllRecipeSuccess = (payload) => ({
    type: GET_ALL_RECIPE_SUCCESS,
    payload,
  });
  
  export const getAllRecipe = () => (dispatch) => {
    dispatch(getAllRecipeRequest());
    axios
      .get("http://localhost:8080/recipes")
      .then((res) => dispatch(getAllRecipeSuccess(res.data)))
      .catch(() => dispatch(getAllRecipeRequest()));
  };
  


