import { RecipesState } from "../state/recipes.state";
import * as RecipesActions from '../actions/recipes.actions';

const initialState: RecipesState = {
    all: [],
    detail: null,
    toEdit: null
}

function getAllRecipes(state, allRecipes) {

    return Object.assign({}, state, { all: allRecipes });
}

function getRecipeDetail(state, recipeDetails) {

    return {
        ...state,
        detail: recipeDetails
    }
}

function getRecipeToEdit(state, recipeToEdit) {

    return {
        ...state,
        toEdit: recipeToEdit
    }
}


export function recipesReducer(
    state: RecipesState = initialState,
    action: RecipesActions.Types) {

    switch (action.type) {

        case RecipesActions.GET_ALL_RECIPES:
            return getAllRecipes(state, action.payload);
        case RecipesActions.GET_RECIPE_DETAIL:
            return getRecipeDetail(state, action.payload);
        case RecipesActions.GET_RECIPE_TO_EDIT:
            return getRecipeToEdit(state, action.payload);
        default:
            return state;
    }
}