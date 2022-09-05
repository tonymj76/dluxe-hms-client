import type { AppDispatch, RootState} from '@/src/redux/store';
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
