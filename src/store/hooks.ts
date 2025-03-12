import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./index";

export const useAppDispatch = () => useDispatch<AppDispatch>(); // ✅ Correctly typed dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
